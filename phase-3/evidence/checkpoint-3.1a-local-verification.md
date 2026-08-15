# Checkpoint 3.1A Local Verification Evidence

**Verification date:** 2026-08-16
**Checkpoint status:** Local implementation complete; external hold pending
**Branch:** `phase3/3.1a-repository-governance`

## 1. Scope evidence

| Item | Result |
|---|---|
| Locked planning baseline | `e9bab4079022149e395f0d2a645e70cc633b5074` |
| Governance implementation | `be143fb20c31b08cfc6d04a784625cd158df8049` |
| Product feature code introduced | None |
| Dependency manifest or lockfile introduced | None; deferred to 3.1B |
| Root security policy activated | No; exact preview remains approval-gated |

## 2. Tool installation evidence

| Tool | Verification |
|---|---|
| Git | `git version 2.55.0.windows.3` |
| Git identity | Existing global identity matched GitHub owner `mrraihan29` |
| GitHub CLI | `gh version 2.97.0 (2026-07-31)` |
| Distribution | Official `cli/cli` GitHub release, Windows AMD64 |
| Executable signer | `GitHub, Inc.`; Authenticode status valid |
| Executable SHA-256 | `E2EFA10A5D2CE93CAC9BC4B676932B62947C0967C01C8F2C3A9CB4437AD358D3` |
| Installation scope | User-local, versioned directory under `%LOCALAPPDATA%` and user `PATH` |

The official MSI was downloaded and its `GitHub, Inc.` signature was valid, but
Windows Installer returned code `1603`. No success was claimed. The official ZIP
distribution was then installed user-locally; its `gh.exe` signature was
verified before use.

## 3. Context7 and authoritative guidance

Context7 was explicitly used during 3.1A to resolve and query current GitHub
Actions and GitHub CLI documentation. The governance contract incorporates the
following verified design constraints:

- workflows declare explicit least-privilege `permissions`;
- third-party actions are pinned to full commit SHAs;
- concurrency keys include workflow and ref identity;
- untrusted pull-request code receives no privileged secrets or writes;
- fork-controlled code is never executed through a privileged
  `pull_request_target` path; and
- environment protections and reviewers are treated as plan-dependent rather
  than assumed.

Primary references:

- <https://docs.github.com/en/actions>
- <https://cli.github.com/manual/>
- <https://github.com/cli/cli/releases/tag/v2.97.0>

## 4. Validation results

| Check | Command or method | Result |
|---|---|---|
| Governance contract | `scripts/validate-governance.ps1` | Passed: 14 required files and 95 Markdown files |
| Whitespace and patch integrity | `git diff main...HEAD --check` | Passed |
| Git object connectivity | `git fsck --full --no-dangling` | Passed |
| Repository cleanliness | `git status --short --branch` | Clean after governance commit |
| Local Markdown links | Governance validator | Passed |
| Sensitive filenames and assignment patterns | Governance validator | Passed |
| GitHub YAML syntax | PyYAML 6.0.3 `safe_load` over `.github/**/*.yml` | Passed: 3 files |
| Active checkpoint branch | Governance validator | Passed |

The YAML parser was installed only in a temporary validation directory and is
not a project or runtime dependency.

## 5. Governance artifacts

- root repository overview and rights boundary;
- repository-specific agent instructions;
- contribution, branch, commit, PR, and merge rules;
- CODEOWNERS;
- pull-request and structured issue templates;
- `.editorconfig`, `.gitattributes`, and `.gitignore`;
- reproducible governance validator;
- comprehensive Checkpoint 3.1A contract; and
- exact root security-policy preview.

## 6. External hold items

The following actions were intentionally not guessed or represented as done:

1. GitHub CLI authentication: `gh auth login --web` was started but not
   completed within the controlled session; `gh auth status` remains logged out.
2. Remote repository: exact repository name is not yet approved, so no private
   remote was created and no local branch was pushed.
3. GitHub ruleset: cannot be applied or read back until the remote exists.
4. Pull request: cannot be opened until authentication and remote creation are
   complete.
5. Root `SECURITY.md`: requires approval of the exact preview and a monitored
   private reporting channel.
6. GitHub-native issue-form validation and CODEOWNERS recognition: parser and
   local structure passed, but native readback requires the remote repository.

## 7. Hold decision

Checkpoint 3.1A is **locally implementation-complete** and **not locked**.
Checkpoint 3.1B remains prohibited until the external hold items are resolved,
the remote evidence is appended, and Raihan records `ready to continue`.
