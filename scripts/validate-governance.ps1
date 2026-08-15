[CmdletBinding()]
param()

$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$repositoryRoot = (& git rev-parse --show-toplevel 2>$null)
if (-not $repositoryRoot) {
    throw 'The validator must run inside a Git repository.'
}

$repositoryRoot = [System.IO.Path]::GetFullPath($repositoryRoot.Trim())
Set-Location -LiteralPath $repositoryRoot

$failures = [System.Collections.Generic.List[string]]::new()

function Add-Failure {
    param([Parameter(Mandatory)][string]$Message)
    $failures.Add($Message)
}

function Test-RequiredFile {
    param([Parameter(Mandatory)][string]$RelativePath)
    if (-not (Test-Path -LiteralPath (Join-Path $repositoryRoot $RelativePath) -PathType Leaf)) {
        Add-Failure "Missing required file: $RelativePath"
    }
}

$requiredFiles = @(
    '.editorconfig',
    '.gitattributes',
    '.gitignore',
    '.github/CODEOWNERS',
    '.github/PULL_REQUEST_TEMPLATE.md',
    '.github/ISSUE_TEMPLATE/config.yml',
    '.github/ISSUE_TEMPLATE/bug.yml',
    '.github/ISSUE_TEMPLATE/change.yml',
    '.github/rulesets/main.json',
    'AGENTS.md',
    'CONTRIBUTING.md',
    'README.md',
    'SECURITY.md',
    'phase-3/04-checkpoint-3.1a-repository-governance.md',
    'phase-3/security-policy-preview.md',
    'scripts/validate-governance.ps1'
)

$requiredFiles | ForEach-Object { Test-RequiredFile -RelativePath $_ }

$branch = (& git branch --show-current).Trim()
if ($branch -ne 'phase3/3.1a-repository-governance') {
    Add-Failure "Unexpected branch '$branch'; expected phase3/3.1a-repository-governance."
}

$trackedAndCandidateFiles = @(& git ls-files --cached --others --exclude-standard)
$forbiddenNames = @('.env', '.env.local', 'id_rsa', 'id_ed25519')
foreach ($relativePath in $trackedAndCandidateFiles) {
    if ([System.IO.Path]::GetFileName($relativePath) -in $forbiddenNames) {
        Add-Failure "Forbidden sensitive filename: $relativePath"
    }
}

$secretAssignmentPattern = '(?i)(api[_-]?key|access[_-]?token|client[_-]?secret|private[_-]?key|password)\s*[:=]\s*["''][^<\s][^"'']{7,}["'']'
foreach ($relativePath in $trackedAndCandidateFiles) {
    $absolutePath = Join-Path $repositoryRoot $relativePath
    if (-not (Test-Path -LiteralPath $absolutePath -PathType Leaf)) {
        continue
    }

    $extension = [System.IO.Path]::GetExtension($absolutePath).ToLowerInvariant()
    if ($extension -notin @('.md', '.json', '.yml', '.yaml', '.toml', '.ts', '.js', '.mjs', '.cjs', '.ps1')) {
        continue
    }

    $content = Get-Content -Raw -LiteralPath $absolutePath
    if ($content -match $secretAssignmentPattern) {
        Add-Failure "Possible committed secret assignment: $relativePath"
    }
}

$markdownFiles = $trackedAndCandidateFiles | Where-Object { $_ -like '*.md' }
$localLinkPattern = '\[[^\]]+\]\((?!https?://|mailto:|#)(?<target>[^)#]+)(?:#[^)]+)?\)'
foreach ($relativePath in $markdownFiles) {
    $absolutePath = Join-Path $repositoryRoot $relativePath
    if (-not (Test-Path -LiteralPath $absolutePath -PathType Leaf)) {
        continue
    }

    $content = Get-Content -Raw -LiteralPath $absolutePath
    foreach ($match in [regex]::Matches($content, $localLinkPattern)) {
        $decodedTarget = [System.Uri]::UnescapeDataString($match.Groups['target'].Value)
        $candidate = Join-Path (Split-Path -Parent $absolutePath) $decodedTarget
        if (-not (Test-Path -LiteralPath $candidate)) {
            Add-Failure "Broken local Markdown link in ${relativePath}: $decodedTarget"
        }
    }
}

$diffCheck = @(& git diff --cached --check 2>&1)
if ($LASTEXITCODE -ne 0) {
    Add-Failure "Staged diff check failed: $($diffCheck -join '; ')"
}

if ($failures.Count -gt 0) {
    $failures | ForEach-Object { Write-Error $_ }
    throw "Governance validation failed with $($failures.Count) issue(s)."
}

Write-Output "Governance validation passed on branch '$branch'."
Write-Output "Validated $($requiredFiles.Count) required files and $($markdownFiles.Count) Markdown files."
