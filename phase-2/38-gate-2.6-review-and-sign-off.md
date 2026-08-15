# 38 — Gate 2.6 Review and Sign-Off

**Version:** 1.0  
**Status:** Accepted — Gate 2.6 locked  
**Gate:** 2.6 — Architecture and Verification Design  
**Product Owner:** Raihan  
**Architecture and documentation:** Rei

## 1. Gate objective

Gate 2.6 selects an implementation and operating architecture that is complete
enough for Phase 3 planning without writing production code. It must preserve
the locked product/design contracts while defining service boundaries,
deployment, security, privacy, recovery, testing, cost, and exit paths.

## 2. Deliverable review

| Deliverable | Document | Review state |
|---|---|---|
| Product Owner constraints | 31 | Complete; discovery constraints recorded |
| Current versions, infrastructure, providers, licenses/capabilities | 32 | Complete for decision; freshness recheck required at scaffold/launch |
| Veto and weighted architecture comparison | 33 | Complete; recommendation pending approval |
| Layered stack, diagrams, routes, data/search/interaction flows | 34 | Complete; recommendation pending approval |
| Threat model, privacy, retention, external-service boundaries | 35 | Complete; provider/legal launch review remains implementation evidence |
| CI/CD, operations, backup, recovery, cost | 36 | Complete; infrastructure facts remain Phase 3 evidence |
| Test matrix and release-evidence contract | 37 | Complete; actual passing evidence begins in Phase 3 |
| Costly-to-reverse decisions | ADR-0009 through ADR-0012 | Accepted |

## 3. Recommended decision package

### Decision A — application architecture

Approve Astro 7.2 default-static output with only inquiry/health opting into
on-demand rendering, strict TypeScript, React 19.2 islands, Node 24 LTS,
MDX/content collections, Pagefind, Observable Plot, and Web Workers. Approve no
database, CMS, queue, cache service, search server, or server compute at launch.

### Decision B — release architecture

Approve protected GitHub merge as the human authorization event. Build one OCI
image, verify its digest, deploy to private staging, and automatically promote
the same passing digest through Coolify. Roll back by digest.

### Decision C — external services and privacy

Approve Cloudflare edge, minimized GoatCounter hosted analytics, Resend email,
Better Stack uptime/backup heartbeat, and independently selected encrypted
S3-compatible backup storage. Keep Turnstile disabled unless observed abuse
requires it. Keep AWS SES Jakarta as the email fallback.

### Decision D — verification and recovery

Approve the full launch-blocking matrix, evidence manifest, exception policy,
daily VPS and independent configuration backups, pre-launch rebuild/rollback,
quarterly restore, and annual VPS-loss exercise.

## 4. Requirement and constraint coverage

| Concern | Gate 2.6 resolution |
|---|---|
| Distinctive OS without gimmick-only navigation | shared semantic routes/actions; optional islands; terminal/visual equivalence |
| AI and Engineering parity | shared content shell and equal route/index architecture |
| Technical depth and interactivity | typed MDX, evidence contracts, charts, worker simulations, static fallback |
| Direct linking, SEO, and discoverability | pre-rendered normal routes, canonical metadata, Pagefind, build crawl |
| Desktop quality and complete simpler mobile | same semantic content with viewport transformations and browser matrix |
| Accessibility and reduced motion | WCAG 2.2 AA design plus automated/manual gate |
| Privacy-first operation | no accounts/inquiry DB; minimized events; no bodies/queries in logs; purpose retention |
| Confidentiality and publishing integrity | build-blocking rights/sanitization/evidence projection plus human sign-off |
| Maintainability | one TypeScript app/container; Git content; no operational database/CMS |
| Automated GitHub publication | protected merge → verified image → staging → automatic production promotion |
| Availability/recovery | 99.5%, RPO ≤24h, RTO ≤8h; independent monitor and tested layered backup |
| Future technology | replaceable adapters, islands/workers, optional WASM/compute without experimental launch dependency |

## 5. Open implementation evidence, not architecture blockers

These facts must be resolved in Phase 3 before production but do not alter the
recommended architecture:

- exact VPS OS/patch level, installed Coolify version, co-located workloads,
  backup entitlement, and resource limits;
- domain/registrar/Cloudflare and independent S3 provider;
- exact TypeScript 7/Astro compatibility and package pins;
- GitHub plan quota and private-repository security entitlements;
- GoatCounter retention/account configuration and Resend domain/region setup;
- CSP compatibility for Pagefind, charts, analytics, and optional Turnstile;
- measured performance, bundle, cache, load/spike, and restore baselines; and
- HF-01 through HF-12 browser evidence from the first vertical slice.

An evidence failure can trigger a bounded technology substitution under the
ADRs. It may not silently weaken a product, privacy, accessibility, security,
or verification requirement.

## 6. Gate decision

Raihan approved the complete Decision A–D package as recommended. No bounded
exception or revision was requested. ADR-0009 through ADR-0012 are Accepted,
and their Phase 3 validation obligations remain binding.

## 7. Sign-off record

**Product Owner decision:** Approved as recommended  
**Accepted ADRs:** ADR-0009, ADR-0010, ADR-0011, ADR-0012  
**Exceptions:** None recorded  
**Gate 2.6 status:** Locked  
**Date:** 2026-08-15

## 8. Next controlled step after approval

Gate 2.7 is now active. It selects the nickname/masterbrand and domain direction
using the complete experience, identity, publishing, prototype, and
architecture evidence. Phase 3 must not begin until Gate 2.7 completes the
Phase 2 cross-check and Product Owner lock.
