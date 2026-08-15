# Checkpoint 3.1A Local Verification Evidence

**Verification date:** 2026-08-16
**Checkpoint status:** Remote implementation complete; review hold pending
**Branch:** `phase3/3.1a-repository-governance`

## 1. Scope evidence

| Item | Result |
|---|---|
| Locked planning baseline | `e9bab4079022149e395f0d2a645e70cc633b5074` |
| Governance implementation | `be143fb20c31b08cfc6d04a784625cd158df8049` |
| Initial local evidence | `7764000d11f9de8539e3247e7a4a72f2f3abe095` |
| Versioned ruleset | `be241e610a2dfd68b9b231931674f426a856e623` |
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

### Completed remote evidence

| Control | Readback result |
|---|---|
| Repository | [`mrraihan29/naobi`](https://github.com/mrraihan29/naobi) |
| Visibility/default branch | Private; `main` |
| Merge strategy | Squash enabled; merge commits and rebase merge disabled |
| Branch cleanup | Delete branch on merge enabled |
| Ruleset | `20892048`, `Protect main`, active |
| Effective rules | deletion, non-fast-forward, linear history, pull request |
| Bypass actors | None |
| Checkpoint review | [Draft PR #1](https://github.com/mrraihan29/naobi/pull/1), open and mergeable |
| Published branch | `phase3/3.1a-repository-governance` |

The initial `main` push occurred before protection because GitHub requires a
default branch before a branch-targeted ruleset can be created. The ruleset was
activated and read back before the checkpoint branch was pushed.

### Remaining hold items

1. Root `SECURITY.md` requires approval of the exact preview and a monitored
   private reporting channel.
2. Draft PR #1 requires Product Owner review and an explicit checkpoint
   decision.
3. Required status checks will be attached only after stable workflow job names
   exist in 3.1B; no empty or fictional check was declared.
4. Approval count is zero while Raihan is the sole repository owner. Requiring
   one approval would create an unsatisfiable self-review gate; increase it when
   an independent reviewer is added.

## 7. Hold decision

Checkpoint 3.1A is **remote implementation-complete** and **not locked**.
Checkpoint 3.1B remains prohibited until the external hold items are resolved,
the remote evidence is appended, and Raihan records `ready to continue`.
