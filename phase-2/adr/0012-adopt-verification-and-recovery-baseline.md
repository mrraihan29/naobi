# ADR-0012 — Adopt Verification and Recovery Baseline

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan  
**Related documents:** 35, 36, 37

## Context

The Product Owner requires a polished official launch, repeated QC, WCAG 2.2
AA, privacy-first operation, scientific/confidentiality controls, security,
SEO, rollback, backup, and restore evidence. Gate 2.5 also carries HF-01 through
HF-12 into the first browser vertical slice.

## Decision drivers

- prevent design and content regressions before broad implementation;
- make release decisions evidence-based and reproducible;
- satisfy 99.5% availability, RPO ≤24 hours, and RTO ≤8 hours;
- avoid automation-only accessibility or recovery claims; and
- keep exceptions visible and time-bounded.

## Decision

Adopt Document 37's verification matrix as the release baseline and Document
36's rollback, backup, monitoring, and recovery policy. Required checks block
release. Intentional visual baseline changes and manual accessibility,
confidentiality, and recovery evidence require explicit acceptance. Flaky tests
and waivers require owner, risk, compensating control, and expiry.

Purchase/enable daily VPS backup and maintain a daily encrypted independent
Coolify configuration backup. Complete a clean rebuild and rollback drill
before launch, quarterly isolated restore tests, and an annual timed VPS-loss
exercise.

## Considered options

### Automated tests only

Faster but cannot establish screen-reader usability, visual intent, scientific
integrity, confidentiality, or real recoverability.

### Manual QC only

Flexible but not reproducible and scales poorly across browsers, content, and
monthly releases.

### Layered automated plus manual evidence — selected

Uses automation for repeatability and human judgment for semantic/high-risk
acceptance.

## Consequences

### Positive

- every production digest has traceable release evidence;
- HF contracts are validated before feature expansion;
- rollback and restoration are proven rather than assumed; and
- regressions and exceptions remain visible.

### Negative

- initial pipeline and baseline creation require material Phase 3 effort;
- browser/visual tests consume CI time and need controlled environments; and
- publication can pause when required evidence or a tool is unavailable.

## Risks and controls

| Risk | Control |
|---|---|
| Test suite becomes slow/brittle | layered local/PR/gate suites, deterministic fixtures, strict flake policy |
| Snapshot approval hides defects | per-surface thresholds and Product Owner before/after review |
| Backup job succeeds but restore fails | isolated restore drills with timed RPO/RTO evidence |
| Security entitlement assumed | use entitlement-neutral scanners; verify GitHub features before claiming them |

## Reversibility

Individual tools can change while preserving test categories, evidence
manifest, severity policy, protected promotion, RPO/RTO, and manual approval
responsibilities.

## Acceptance record

Accepted by Raihan on 2026-08-15 with no exception.
