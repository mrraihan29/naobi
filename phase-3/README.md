# NAOBI — Phase 3 Implementation Planning and Foundation

**Version:** 1.1  
**Status:** Gate 3.0 locked — controlled delivery baseline accepted  
**Start date:** 2026-08-15  
**Gate 3.0 lock date:** 2026-08-15  
**Product Owner / Project Manager / Approver:** Raihan  
**Engineering, architecture, and QC support:** Rei

## Purpose

Phase 3 turns the locked Phase 2 contracts into a reproducible engineering
foundation. It begins with a controlled preparation gate, then moves to a
single representative browser vertical slice. It is not permission to broaden
the product, weaken a locked contract, or configure production services before
the relevant facts and accounts are verified.

The governing baseline is [Phase 2 Document 43](../phase-2/43-gate-2.7-and-phase-2-final-sign-off.md), especially its Phase 3 entry conditions,
and ADR-0009 through ADR-0013.

## Phase 3 sequence

| Gate | Outcome | Status |
|---|---|---|
| 3.0 — Preparation and capability baseline | Approved toolchain, source-of-truth map, implementation controls, coding-pitstop ledger, and evidence plan; no application feature code | Locked through Documents 01–03 and Phase 3 ADR-0001 |
| 3.1 — Repository and toolchain foundation | Private repository, pinned local/CI runtime, Astro scaffold, dependency lock, code-quality controls, and environment schema | 3.1A accepted for merge; 3.1B opens after protected-main readback |
| 3.2 — Operational truth validation | Verified VPS, Coolify, GitHub, domain, registry, provider, backup, and secret-boundary facts; staging/production design made executable | Not started |
| 3.3 — First browser vertical slice | One Central OS path, one representative content route, terminal/visual equivalence, responsive behavior, Evidence Depth Rail, and HF-01–HF-12 evidence | Not started |
| 3.4 — Foundation hardening and release-readiness handoff | Early security, accessibility, performance, content, visual, deployment, rollback, and recovery proof package | Not started |

## Gate 3.0 scope

This gate deliberately contains preparation rather than UI feature delivery.
It will:

- reconcile the Phase 2 contracts with the implementation work breakdown;
- install or validate only capabilities that directly serve the selected
  Astro/React, QA, security, and GitHub workflow;
- record why potentially powerful third-party MCPs are rejected or deferred;
- define the required source-of-truth, environment, secret, dependency, and
  release-evidence controls; and
- identify facts that must be verified from Raihan's actual accounts and VPS
  before infrastructure or production configuration is touched.

It will not:

- scaffold a public-facing feature or represent the design as implemented;
- provision or reconfigure Cloudflare, Coolify, GitHub, Resend, GoatCounter,
  Better Stack, or backup storage;
- request, store, expose, or route production secrets through an agent tool;
- select a flagship claim, engineering case, license, public full-name form,
  or domain registrar configuration; or
- replace a locked architecture decision without the required change control.

## Preparation deliverables

1. **Tooling and capability decision register** — Document 02 records the
   installed skills, existing connected capabilities, rejected MCPs, and
   deferred account integrations.
2. **Implementation control plan** — Gate 3.1 will create the repository
   layout, version-pinning policy, dependency allowlist workflow, environment
   variable contract, generated-artifact policy, and branch/review rules.
3. **Operational verification checklist** — Gate 3.2 will verify actual
   provider terms, entitlements, regions, retention, API versions, backup
   behavior, Coolify release, VPS capacity, and domain/DNS facts at the time
   of configuration.
4. **Vertical-slice acceptance matrix** — Gate 3.3 will map each selected
   route and component to HF-01–HF-12 and the applicable early checks from
   Phase 2 Document 37.

## Gate 3.0 exit criteria

Gate 3.0 may be accepted only when:

- every installed skill or tool has a direct Phase 3 purpose and known owner;
- no required capability depends on an unreviewed, broad-permission MCP;
- capabilities already supplied by Codex, GitHub, or a local project tool are
  not duplicated by a speculative integration;
- deferred integrations have a clear later gate and authorization boundary;
- no secret, credential, or operational account has been requested or changed;
- the first vertical-slice scope and evidence obligations are unambiguous; and
- Raihan explicitly approves the preparation baseline.

## Controlled delivery rule

Every implementation checkpoint is a bounded, reviewable unit. The next
checkpoint may not begin until the active one has recorded its required
evidence and Raihan has made the `ready to continue`, `revise`, or `hold`
decision. This is a quality control mechanism, not a request for generic
status reports. See Document 03 and Phase 3 ADR-0001.

## Gate 3.0 result

Gate 3.0 is accepted through:

- [Document 01](01-gate-3.0-preparation-and-capability-baseline.md), the final
  preparation sign-off;
- [Document 02](02-tooling-and-capability-decision-register.md), the approved
  capability baseline;
- [Document 03](03-controlled-coding-checkpoint-and-git-delivery-plan.md), the
  coding-pitstop and Git delivery plan; and
- [ADR-0001](adr/0001-adopt-controlled-checkpointed-git-delivery.md), the
  controlled delivery decision.

Checkpoint 3.1A is governed by:

- [Document 04](04-checkpoint-3.1a-repository-governance.md), the repository,
  Git, GitHub, required-check, and Actions-security contract; and
- [the security-policy preview](security-policy-preview.md), the exact proposed
  root policy awaiting Product Owner approval and a verified private reporting
  channel.

**Next authorized checkpoint:** 3.1A — Repository governance. It may establish
the private repository and its controls, but may not start application feature
work.

## Change control

This folder inherits the Phase 2 lock. A materially different framework,
provider boundary, deployment model, privacy posture, or quality obligation
requires impact analysis and a superseding ADR before implementation relies on
it.
