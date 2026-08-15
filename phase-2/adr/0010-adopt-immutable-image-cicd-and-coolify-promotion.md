# ADR-0010 — Adopt Immutable-Image CI/CD and Coolify Promotion

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan  
**Related documents:** 34, 36, 37

## Context

GitHub is the repository and CI/CD platform. Production does not require a
second manual approval, but staging/production separation, comprehensive
verification, traceability, and rollback are mandatory. Hostinger KVM 4 with
Coolify is the available deployment baseline.

## Decision drivers

- prove that tested and deployed code are identical;
- preserve automatic delivery after governed merge;
- support fast rollback without rebuilding historical source;
- isolate staging and production secrets; and
- keep the deployment portable away from Coolify.

## Decision

Treat Raihan's protected merge as the human production authorization. GitHub
Actions builds one OCI image from the merge commit, scans it, records its digest,
deploys that digest to private staging, runs smoke tests, and automatically
promotes the same passing digest to production through Coolify. `latest` is not
a release identity.

Third-party actions are SHA-pinned, workflow permissions are least-privilege,
and untrusted PR jobs receive no production secrets. Rollback redeploys a
previous verified digest.

## Considered options

### Coolify builds source directly

Simple, but weakens build-once evidence and risks staging/production build
drift.

### Manual production approval after staging

Strong control but explicitly unnecessary to the Product Owner. Protected
merge already supplies the human decision.

### Immutable image promotion — selected

Combines automated delivery with traceable artifact identity and reversible
deployment.

## Consequences

### Positive

- exact commit-to-image-to-environment traceability;
- production receives a staging-tested artifact;
- rollback is quick and independent of current package registries; and
- hosting can change without changing the image contract.

### Negative

- GHCR storage and Actions minutes require retention/usage management;
- CI and webhook credentials become privileged supply-chain assets; and
- the pipeline is more deliberate than Coolify's simplest auto-build path.

## Risks and controls

| Risk | Control |
|---|---|
| CI compromise | protected workflow review, minimal tokens, pinned actions, secret isolation |
| Registry tag replacement | deploy and record immutable digest |
| Bad release passes smoke | previous digest retained, external monitor, rollback runbook |
| GitHub outage blocks release | current production remains; no unverified bypass |

## Reversibility

Any OCI-capable host can consume the image. A future registry or CI provider
may replace GHCR/Actions while preserving commit, digest, staging, promotion,
and rollback semantics.

## Acceptance record

Accepted by Raihan on 2026-08-15 with no exception.
