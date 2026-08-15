# 01 — Gate 3.0 Preparation and Capability Baseline

**Version:** 1.0  
**Status:** Accepted — Gate 3.0 locked  
**Gate:** 3.0 — Preparation and capability baseline  
**Product Owner / Project Manager / Approver:** Raihan  
**Engineering, architecture, and QC support:** Rei  
**Approval date:** 2026-08-15

## 1. Approval statement

Raihan approved controlled coding delivery and requested professional GitHub
CI/CD practice: coding must proceed through explicit pitstops rather than as
one unreviewed implementation batch. Raihan also authorized installation or
creation of the skill support needed to make this repeatable, then requested
that Gate 3.0 be finalized.

## 2. Accepted preparation outcomes

- Phase 3 begins with preparation; no public-facing application feature has
  been started or represented as complete.
- The source-of-truth map and Gate 3.0 scope are recorded in the Phase 3
  README.
- The approved capability baseline is recorded in Document 02.
- Official Vercel React performance guidance and official Microsoft Playwright
  CLI guidance are installed for selective React islands and browser QA.
- The global `@playwright/cli` runtime is installed and version-verified at
  `0.1.18` in the Windows environment.
- The custom `naobi-github-delivery` skill is installed with a project-specific
  contract for checkpoints, Git, pull requests, GitHub Actions, GHCR,
  staging/production promotion, release evidence, and rollback.
- Existing design, UI review, browser, GitHub, security, ADR, and research
  capabilities remain part of the toolchain.
- No high-authority third-party MCP was connected. Coolify, Resend, Better
  Stack, analytics, and Cloudflare account configuration remain deliberately
  deferred to their approved operational gates.

## 3. Controlled-delivery decision

The Phase 3 workstream adopts the following operating model:

1. Define a small checkpoint before coding it.
2. State locked inputs, scope, exclusions, definition of done, tests/evidence,
   Git outcome, risk, and rollback before changing application behavior.
3. Develop on a short-lived branch with atomic Conventional Commits.
4. Use a checkpoint pull request and evidence packet as the review boundary.
5. Stop at the hold point. Raihan records `ready to continue`, `revise`, or
   `hold` before the next checkpoint opens.

This rule applies to foundation, UI, content, integration, infrastructure,
deployment, and hardening work. It does not lower the Phase 2 quality gates;
it makes them observable throughout implementation.

## 4. Gate 3.0 exit-criteria result

| Criterion | Result |
|---|---|
| Locked Phase 2 contracts reconciled with Phase 3 | Pass |
| Toolchain assessed against the selected architecture | Pass |
| Official high-value skills installed and verified | Pass |
| Broad authority MCPs assessed and deliberately deferred/rejected | Pass |
| Professional Git and delivery workflow documented | Pass |
| Coding-pitstop acceptance model documented | Pass |
| No production account, provider, domain, secret, or infrastructure changes made | Pass |
| Product Owner approval recorded | Pass |

## 5. Bounded deferrals and next gate

The following remain outside Gate 3.0 by design: creation of the private
repository, actual GitHub plan/entitlement checks, branch-protection settings,
project-local dependency selection and lock, VPS/Coolify/provider facts,
domain/DNS configuration, provider accounts, secrets, staging, production,
and deployment.

**Gate 3.0:** Locked  
**Next checkpoint:** 3.1A — Repository governance  
**Authority for application feature coding:** Not yet granted; it opens only
after the 3.1A and 3.1B hold decisions.
