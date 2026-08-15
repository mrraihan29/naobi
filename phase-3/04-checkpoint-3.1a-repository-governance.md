# Checkpoint 3.1A — Repository Governance

**Status:** Remote implementation complete; checkpoint hold pending
**Owner:** Raihan
**Implementation branch:** `phase3/3.1a-repository-governance`
**Scope:** Repository bootstrap and governance; no application feature code

## 1. Purpose

Checkpoint 3.1A converts the locked planning corpus into an auditable software
repository before framework scaffolding begins. It establishes the controls that
will govern every later coding pitstop.

## 2. Acceptance contract

The checkpoint is ready for Product Owner review when:

1. Phase 1–3 documents are preserved in a clean baseline commit;
2. work occurs on a dedicated short-lived branch;
3. ownership, contribution, pull-request, issue, line-ending, and ignore rules
   exist and agree with the locked delivery model;
4. the target GitHub ruleset and required-check architecture are explicit;
5. GitHub CLI is installed from an official, signature-verified distribution;
6. the root security policy is presented as an exact approval-gated preview;
7. no credential, client-confidential content, generated build output, or
   application feature code is introduced; and
8. validation evidence and unresolved external actions are recorded.

Acceptance is not automatic. Raihan's explicit hold decision is required before
3.1B may start.

## 3. Repository operating model

### 3.1 Branches

- `main`: protected, always releasable, no direct or force pushes.
- `phase3/<checkpoint>-<slug>`: planned checkpoint implementation.
- `feat/<slug>`, `fix/<slug>`, `docs/<slug>`, `chore/<slug>`, and
  `security/<slug>`: bounded work when a checkpoint needs separate review.
- `hotfix/<slug>`: production repair with the same evidence expectations and a
  retrospective record.

Branches are deleted after squash merge. Long-lived environment branches are
not used; deployments are derived from reviewed revisions and immutable image
digests.

### 3.2 Commits and pull requests

Commits are atomic and use Conventional Commits. One pull request represents
one checkpoint by default. A pull request must include scope, verification,
risk, rollback, residual risk, and hold-decision fields.

Raihan remains repository owner, CODEOWNER, and final checkpoint approver.
Authorship and approval are distinct even in a single-owner repository: the PR
and checks provide the durable review surface, while Raihan records the product
decision.

### 3.3 Merge policy

- squash merge only by default;
- branch must be current with `main` before merge;
- required conversations must be resolved;
- required checks must pass without unexplained skips;
- no administrator bypass for routine delivery; and
- source branch deleted after merge.

## 4. Target GitHub repository configuration

The remote repository is [`mrraihan29/naobi`](https://github.com/mrraihan29/naobi).
GitHub API readback confirmed private visibility, `main` as the default branch,
and the expected owner. The checkpoint branch is published through
[draft PR #1](https://github.com/mrraihan29/naobi/pull/1).

Configure a ruleset targeting the default branch with:

| Control | Required state |
|---|---|
| Deletion and non-fast-forward updates | Blocked |
| Pull request before merge | Required |
| Required approvals | 1 when the active GitHub plan supports it |
| Code Owner review | Required when supported for this private repository |
| Stale approval dismissal | Enabled when supported |
| Conversation resolution | Required |
| Required status checks | Enabled after stable job names exist in 3.1B/3.2 |
| Branch up to date | Required for merge queue or strict checks |
| Signed commits | Evaluate after local and CI signing workflow is proven |
| Bypass actors | None for routine work; emergency use must be evidenced |

Plan-dependent controls must be verified against the actual repository plan.
Unavailable controls are documented as residual risk; they are never claimed as
active.

Ruleset `20892048` is active on the default branch. Effective-rules readback
confirmed deletion protection, non-fast-forward protection, required linear
history, pull-request enforcement, and review-thread resolution. Repository
settings permit squash merge only and delete merged source branches.

The required approval count is temporarily zero. A one-owner private repository
cannot satisfy an independent approval requirement because an author cannot
approve their own pull request. Increase the count to one and enable Code Owner
review when a qualified collaborator is formally added.

## 5. Required-check architecture

Stable required-check names will be introduced with the relevant toolchain:

| Check family | First enforceable checkpoint | Blocking intent |
|---|---:|---|
| Repository policy and secret scan | 3.1B | Yes |
| Format, lint, strict type check | 3.1B | Yes |
| Unit/integration and content schema | 3.1B–3.2 | Yes |
| Production build | 3.1B | Yes |
| E2E and accessibility | 3.2 | Yes for affected paths |
| Visual regression and performance | 3.2–3.3 | Yes after baselines stabilize |
| Dependency/source/container security | 3.1B–3.2 | Yes by calibrated severity |
| OCI publication and staging smoke | Release checkpoints | Yes for release |

Checks must fail closed on execution errors. Path filtering may save work only
when the resulting required check still reports a deterministic conclusion.

## 6. GitHub Actions security baseline

Context7 was used to inspect current official GitHub guidance. Every workflow
will:

- declare explicit least-privilege `permissions`; unspecified permissions are
  treated as unavailable;
- pin third-party actions to a full commit SHA, with the release tag recorded in
  an adjacent comment;
- use concurrency groups that include workflow and ref identity, cancelling
  superseded runs where safe;
- keep untrusted pull-request workflows free of secrets and write permissions;
- never checkout or execute fork-controlled code under `pull_request_target`;
- scope environment secrets to the environment that requires them; and
- separate verification from privileged release/deployment responsibilities.

Environment approval capabilities depend on repository visibility and GitHub
plan. The immutable staging-to-production digest contract remains mandatory even
when native environment reviewers are unavailable.

## 7. Dependency and automation policy

- No dependency is added in 3.1A.
- Package-manager, runtime, Astro, test, and scanner versions are selected and
  pinned in 3.1B using current official documentation through Context7.
- Dependabot configuration starts only after the real package ecosystems exist.
- Automated dependency pull requests receive the same checks as human changes.
- Major upgrades and security-sensitive upgrades require changelog and migration
  review; they are not auto-merged.

## 8. Security policy approval gate

The proposed root `SECURITY.md` is reproduced exactly in
[`security-policy-preview.md`](security-policy-preview.md). It defines security
invariants, reporting expectations, severity context, exclusions, and response
targets without publishing an unverified contact channel.

The root policy is deliberately not activated until Raihan approves the exact
text and chooses a monitored private reporting address or GitHub private
vulnerability reporting.

## 9. Licensing boundary

The repository is private and has no repository-wide open-source license.
Absence of a license is intentional: some future research artifacts may be open
source while the product repository and other artifacts remain closed. Each
published artifact must carry an explicit rights classification and license.

## 10. Exit and hold

Completed external controls:

- remote repository name confirmed as `mrraihan29/naobi`;
- GitHub authentication and private remote creation succeeded;
- default-branch ruleset applied and read back;
- governance branch pushed and draft PR #1 opened; and
- remote URLs, rule states, and check results recorded in evidence.

The checkpoint may be locked only after:

- the root security policy and monitored reporting channel are approved;
- Raihan reviews the draft pull request and records the Product Owner decision;
  and
- the accepted pull request is squash-merged without bypassing the ruleset.

Until then, 3.1A is implementation-complete but remains at its review hold, and
3.1B remains locked.
