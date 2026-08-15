# 02 — Tooling and Capability Decision Register

**Version:** 1.1  
**Status:** Accepted — Gate 3.0 capability baseline  
**Gate:** 3.0 — Preparation and capability baseline  
**Date:** 2026-08-15  
**Decision owner:** Raihan  
**Prepared by:** Rei

## 1. Decision principle

NAOBI needs a precise engineering toolchain, not the largest possible agent
toolchain. A capability is installed or connected only when it directly serves
a locked requirement, has a credible maintainer, does not duplicate an
available first-party capability, and does not widen account or secret access
without a later task that needs it.

The decision is intentionally conservative around MCPs. An MCP with broad
infrastructure, email, analytics, or account authority is not a substitute for
the narrow provider adapters, least-privilege CI credentials, and review gates
required by ADR-0010 through ADR-0012.

## 2. Approved capabilities

| Capability | Source / status | Direct Phase 3 use | Decision |
|---|---|---|---|
| Distinctive UI direction | Existing `frontend-design` skill | Keeps the Quiet Field Console and Adaptive Signal Chassis from collapsing into generic component-library output | Retain |
| UI guideline audit | Existing `web-design-guidelines` skill | Reviews implementation against web accessibility, interaction, and usability expectations | Retain |
| React-island performance | Official Vercel `vercel-react-best-practices` skill, installed | Reviews hydration boundaries, bundle size, rendering work, and responsive interactions inside selective React islands | Installed |
| Browser automation and test authoring | Official Microsoft `playwright-cli` skill, installed | Supports E2E exploration, selectors, trace/video capture, responsive checks, and Playwright test generation/healing | Installed |
| Playwright command runtime | Official `@playwright/cli` version `0.1.18`, globally installed and version-verified | Makes the browser QA skill executable; project-local test dependency and browsers are pinned at Gate 3.1 | Installed |
| Architecture decision history | Existing `architecture-decision-records` skill | Records material implementation substitutes without rewriting Phase 2 history | Retain |
| Security scanning and validation | Existing Codex Security skills | Supplies threat-model, discovery, validation, hardening, and fix workflows when a codebase exists | Retain |
| GitHub repository and CI/CD capability | Existing GitHub integration and skills | Supports the already-selected private repository, PR controls, GitHub Actions, GHCR, and release evidence workflow | Retain |
| NAOBI controlled delivery | Custom `naobi-github-delivery` skill, installed | Makes the coding-pitstop ledger, atomic Git practice, checkpoint PR evidence, immutable-image promotion, and rollback policy repeatable across Phase 3 work | Installed |
| Browser inspection | Existing Codex browser controls | Provides immediate interactive inspection without adding an additional remote browser MCP | Retain |

### Installed-skill verification

The following skill manifests are present in `C:\Users\Raihan\.codex\skills`:

- `vercel-react-best-practices`
- `playwright-cli`

The global Playwright CLI was verified from the Windows global package path.
The isolated agent shell may not inherit that global executable path; this is a
sandbox-path limitation, not evidence that the Windows installation failed.

## 3. Deliberately not installed or connected

| Candidate | Reason | Later decision point |
|---|---|---|
| Coolify MCP servers found in MCP Market | Available offerings have very low visible repository adoption and request broad application, server, deployment, log, and environment-variable authority. NAOBI already has a safer CI-to-Coolify immutable-image contract. A third-party conversational admin layer is not required for it. | Use Coolify's documented API/webhook only if a bounded operational task cannot be served by the approved CI path; assess a first-party or independently reviewed option then. |
| Resend MCP servers | The site needs a narrowly scoped server-side inquiry adapter, not an agent that can send arbitrary mail, manage API keys, contacts, or audiences. | Gate 3.2 validates the Resend account, a scoped application key, retention, fallback, and provider adapter. |
| Better Stack MCP/automation via a broker | The available automation option introduces an additional broker and dynamic connected-tool surface. The launch requirement is a small number of uptime/heartbeat monitors, which does not justify that dependency. | Gate 3.2 configures the monitor directly after Raihan approves the provider account. |
| GoatCounter MCP or a self-hosted analytics platform | The selected analytics service is intentionally minimal. A database-backed alternative adds operations that ADR-0011 rejected. | Gate 3.2 confirms hosted retention, no-session configuration, and a closed event allowlist. |
| Playwright MCPs from MCP Market | Codex already has browser control, and the official Microsoft CLI gives project-local, reproducible Playwright testing. The marketplace alternatives examined have materially lower visible adoption or add remote state without a requirement. | Reconsider only if the local QA workflow has a measured capability gap. |
| Dependency/security MCPs | A separate hosted MCP is unnecessary before a dependency lock exists. The locked verification plan already requires local/CI SBOM, secret, dependency, and container scanning. | Gate 3.1 selects the pinned local and CI scanners from current primary-source evidence. |
| PostHog, Sentry, Vercel, Supabase, Neon, and CMS/database plugins | They conflict with the selected privacy-first GoatCounter analytics, Better Stack monitoring, Coolify deployment, and database-free launch architecture. | Only a measured, approved requirement plus ADR may reopen the boundary. |

## 4. External-plugin posture

No new external account plugin is required during Gate 3.0. The existing
GitHub capability is sufficient for repository and CI preparation. Cloudflare
is the only recommended-plugin candidate aligned with the target edge
architecture, but it is intentionally **not connected yet**: DNS, WAF, proxy,
and domain actions are production-adjacent configuration with a real-account
impact. It belongs in Gate 3.2 after `naobi.dev` acquisition and an explicit
configuration task.

No agent tool is authorized to receive or persist production keys, registrar
credentials, VPS root credentials, email API keys, analytics keys, or backup
credentials. Those values are created and injected through the later,
documented secret boundary only.

## 5. Required rechecks before dependency or provider selection

At Gate 3.1 or 3.2, recheck from primary sources:

- Astro, Node LTS, TypeScript, React, Pagefind, Observable Plot, Playwright,
  and all test/security tool compatibility and licenses;
- GitHub Actions/GHCR capabilities, workflow permissions, retention, and
  billing/entitlements;
- actual Hostinger KVM 4 capacity, operating system, storage, backup option,
  and current Coolify version/API behavior;
- Cloudflare, Resend, GoatCounter, Better Stack, and S3-compatible storage
  pricing, region, retention, terms, export path, and availability features;
- `naobi.dev` registrar, DNS, ownership, and renewal state; and
- the approved local browser/testing installation on the execution machine.

## 6. Gate 3.0 result

This minimal, high-confidence capability baseline is accepted by Raihan through
the Gate 3.0 finalization decision on 2026-08-15. The custom skill's manifest,
trigger metadata, delivery-contract reference, and UI metadata passed a
structural validation; the bundled YAML validator could not run because the
local Windows Python installation lacks PyYAML. That local-validator dependency
does not affect the skill's installed content or the application architecture.

Proceed next only to Checkpoint 3.1A — Repository governance. It is the first
point at which the private repository and Git controls may be created; the
project-local scaffold and dependency lock remain Checkpoint 3.1B.
