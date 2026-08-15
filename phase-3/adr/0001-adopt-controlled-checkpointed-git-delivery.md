# ADR-0001 — Adopt Controlled Checkpointed Git Delivery

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan  
**Related documents:** Phase 3 Documents 01–03; Phase 2 ADR-0010 and ADR-0012

## Context

NAOBI has an unusually high bar for visual fidelity, accessibility, evidence,
privacy, security, content integrity, and operational reliability. Implementing
the product as one long unreviewed coding run would make regressions difficult
to localize, decision history weak, and release evidence late. Raihan requires
visible coding pitstops and professional Git/GitHub delivery practice.

## Decision drivers

- retain control and reviewability during implementation;
- make each change traceable to locked requirements and ADRs;
- preserve a clean, recoverable Git and release history;
- make CI/CD evidence match the immutable-image delivery design; and
- prevent implementation speed from bypassing Phase 2 quality gates.

## Decision

Adopt the controlled checkpoint ledger in Phase 3 Document 03. Each
checkpoint has bounded scope, a definition of done, required automated/manual
evidence, an atomic Git/PR boundary, explicit risk and rollback information,
and a Product Owner hold decision. The next checkpoint opens only after Raihan
records `ready to continue`.

Use protected `main`, short-lived checkpoint branches, atomic Conventional
Commits, one checkpoint PR by default, and squash merge as the standard Git
model. CI verifies pull requests without deployment credentials. The protected
merge path builds and promotes a single immutable OCI digest through GHCR,
staging, Coolify production, post-deploy smoke checks, and a release-evidence
manifest. Recovery redeploys an earlier verified digest.

The global `naobi-github-delivery` skill operationalizes this policy for each
agent turn. It is a procedural control, not a replacement for repository
branch protections, CI configuration, or Product Owner decisions.

## Consequences

### Positive

- defects and scope changes are isolated earlier;
- each integration commit corresponds to a reviewable checkpoint;
- user decisions, tests, and rollback paths remain linked; and
- CI/CD implementation will conform to ADR-0010 rather than drifting into
  source-built or manually patched production releases.

### Negative

- implementation has more deliberate hold points;
- each checkpoint requires a concise evidence packet and review; and
- a small single-author project still carries PR and branch-process overhead.

## Risks and mitigations

| Risk | Mitigation |
|---|---|
| Checkpoints become bureaucratic | Keep each packet compact and tied to actual acceptance criteria. |
| Small corrections stall unnecessarily | Use a narrowly scoped fix checkpoint with proportionate evidence. |
| CI configuration outgrows the project | Preserve the minimum-sufficient architecture and revisit only through evidence. |
| GitHub plan features differ for private repositories | Verify exact entitlement before relying on environment protections or attestations. |

## Reversibility

The specific tooling and check grouping can evolve through future checkpoints,
but the core properties—bounded review, protected integration, traceable
evidence, same-digest promotion, and digest rollback—remain binding unless a
superseding ADR is accepted.

## Acceptance record

Accepted by Raihan while finalizing Gate 3.0 on 2026-08-15.
