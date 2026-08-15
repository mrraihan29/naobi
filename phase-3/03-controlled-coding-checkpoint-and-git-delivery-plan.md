# 03 — Controlled Coding Checkpoint and Git Delivery Plan

**Version:** 1.0  
**Status:** Accepted — binding from Gate 3.1 onward  
**Owner:** Raihan  
**Execution support:** Rei  
**Related decision:** Phase 3 ADR-0001  
**Date:** 2026-08-15

## 1. Purpose

NAOBI must be built as a sequence of controlled engineering increments. A
checkpoint is not merely a progress update: it is the quality boundary that
prevents untested scope accumulation, unclear Git history, and late discovery
of architectural or visual regressions.

## 2. Checkpoint ledger

| Checkpoint | Scope boundary | Required hold evidence | Next action only after acceptance |
|---|---|---|---|
| 3.1A — Repository governance | Private repository, governance files, Git policy, PR/checklist templates, and required-check design | Clean repository inventory, governance review, and no secret exposure | 3.1B |
| 3.1B — Deterministic application foundation | Astro scaffold, Node/package-manager pin, strict TypeScript, lockfile, formatting, lint, type, unit commands | Reproducible build with command results and dependency review | 3.1C |
| 3.1C — Content/interface contracts | Typed content collections, validation, application configuration, route/metadata boundaries, design-token import rules | Fixture/schema evidence and contract review | 3.2A |
| 3.2A — Operational facts | Current GitHub, GHCR, VPS, Coolify, domain, provider, backup, and entitlement facts | Facts register and secret-boundary review | 3.2B |
| 3.2B — Delivery plumbing | CI verification design, OCI image workflow, GHCR, staging/production promotion and recovery design | Dry-run or isolated proof; no unverified production release | 3.3A |
| 3.3A — Central OS vertical slice | Central OS path, one content route, direct link, visual navigation, representative responsive behavior | Browser, keyboard, visual, and responsive evidence | 3.3B |
| 3.3B — Terminal and evidence depth | Terminal/visual equivalence and Evidence Depth Rail with fallbacks | E2E, accessibility, and progressive-enhancement evidence | 3.3C |
| 3.3C — Vertical-slice quality closure | HF-01–HF-12 and applicable early security, SEO, performance, content, visual, and confidentiality checks | Accepted evidence matrix | Feature expansion |
| 3.4 — Foundation hardening | Staging/production promotion, rollback, backup/restore, monitoring, release evidence manifest | Measured release and recovery evidence | Later Phase 3 scope |

If a checkpoint becomes too large to review coherently, split it before coding.
No incomplete checkpoint may be silently bundled into the next one.

## 3. Git operating contract

- `main` is the protected integration branch and, after governed merge, the
  production authorization point. Never push to it directly.
- Use one short-lived branch per checkpoint:
  `phase3/<checkpoint-id>-<short-name>`. Use `fix/`, `docs/`, or `chore/`
  only when those prefixes better describe a bounded correction.
- Make atomic Conventional Commits in the form
  `type(scope): imperative summary`. Each commit must be inspectable,
  reversible, and limited to its stated purpose.
- Inspect status and diff before every commit. Never commit a secret,
  environment file, private path, client-sensitive material, temporary output,
  or unrelated change.
- Open one draft pull request per checkpoint by default. The PR becomes ready
  only when required evidence exists; squash merge is the default integration
  method so `main` retains one clear checkpoint-level history entry.
- Do not force-push a published branch, bypass protections, or rebuild old
  source to roll back. Correct through a documented commit, revert, or
  previously verified OCI digest.

## 4. Evidence packet and owner hold decision

Every checkpoint closes with the following compact packet:

```text
checkpoint ID / branch / pull request
locked requirement and ADR inputs
scope and explicit exclusions
commit boundary and diff summary
automated and manual checks with results
screenshots, traces, reports, or other artifacts as applicable
security, confidentiality, and accessibility result
known risks, rollback/revert method, and exceptions
recommended decision: ready to continue / revise / hold
```

Raihan's decision is recorded in the checkpoint document or PR. Only `ready to
continue` authorizes the next checkpoint. A failed check never becomes an
implicit accepted exception.

## 5. GitHub Actions delivery contract

### Pull request

PR checks use the committed lockfile and run without deployment credentials.
They include applicable formatting, linting, strict type checks, unit/
integration tests, content validation, secrets/dependency/workflow policy
checks, and targeted browser/accessibility/visual/performance/SEO evidence.
Required failures block merge.

### Protected merge

The merge commit is built once into an OCI image. CI produces its SBOM and scan
evidence, records/publishes the immutable GHCR digest, deploys the same digest
to private staging, runs smoke checks, and only then promotes that same digest
to production through Coolify. Production smoke checks and the release-evidence
manifest complete the delivery. This is ADR-0010's binding same-digest rule.

### Recovery

Recovery is an explicit manual workflow that redeploys an earlier verified
digest. It preserves the failed-release evidence and never depends on
rebuilding historical source.

## 6. Security controls

- Set explicit least-privilege GitHub Actions permissions.
- Pin actions to full reviewed commit SHAs under the repository policy.
- Keep PR/fork jobs away from registry-write, staging, and production secrets.
- Treat workflow changes as security-sensitive and keep environments/secrets
  separate by deployment target.
- Use safe concurrency cancellation for superseded PR work only; do not cancel
  a deployment that may be changing live state without a reviewed recovery
  decision.
- Verify actual repository-plan/entitlement behavior before relying on private
  repository environment protection, secrets, or artifact attestation.

## 7. Operating skill

Use the global `$naobi-github-delivery` skill for all work that crosses a
checkpoint, branch, commit, PR, GitHub Actions, image, deployment, rollback,
or release-evidence boundary. The skill encodes this plan as reusable agent
instructions; this document remains the project source of truth.
