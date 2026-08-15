# ADR-0002 — Adopt Deterministic Astro Application Toolchain

**Status:** Proposed at Checkpoint 3.1B hold
**Date:** 2026-08-16
**Decider:** Raihan

## Context

Phase 2 accepted a content-first Astro architecture with selective React
islands, default-static output, and a small Node boundary. Checkpoint 3.1B must
turn that architecture into a reproducible local and CI foundation without
starting product feature work.

The implementation needs:

- a supported LTS runtime rather than the current Node line;
- exact dependency and package-manager pins;
- strict TypeScript, formatting, lint, unit, build, and policy commands;
- a lockfile that is reproducible across Windows development and Linux CI;
- explicit lifecycle-script and peer-dependency controls;
- no default session state or telemetry; and
- a compatibility decision for TypeScript 7.

## Decision drivers

- Preserve the accepted Astro/React islands architecture.
- Prefer supported combinations over nominally newest but incompatible pins.
- Fail closed on lockfile drift, unreviewed lifecycle scripts, peer conflicts,
  workflow tag references, licenses, and high-severity production advisories.
- Keep the scaffold minimal, understandable, and replaceable.
- Keep privacy and statelessness explicit in configuration.

## Considered options

### Node 24 LTS versus Node 26 Current

Node 24.19.0 is the current LTS release verified on 2026-08-16. Node 26 remains
Current. Production applications should use an LTS line, so Node 24.19.0 is
pinned in `.node-version`, `.nvmrc`, package engines, and CI.

### pnpm versus npm

Pnpm 11.22.0 provides strict peer checking, content-addressed storage,
release-age policy, and explicit dependency lifecycle-script authorization.
These controls better match the repository's supply-chain requirements than an
unconfigured npm install. The trade-off is one additional pinned tool.

### TypeScript 7 versus TypeScript 6

TypeScript 7.0.2 is current, but `typescript-eslint@8.67.0` declares support
only for TypeScript versions below 6.1. TypeScript 6.0.3 is therefore the
bounded, officially compatible fallback already allowed by Phase 2. Upgrade to
TypeScript 7 only when Astro check, TypeScript ESLint, Vitest, the production
build, and editor tooling all declare and demonstrate compatibility.

### Global React application versus selective islands

React 19.2.8 and `@astrojs/react` are installed for future interactive islands.
The neutral launch scaffold is an Astro document with no hydrated React root.
This preserves zero-JavaScript-by-default output.

## Decision

Adopt the following exact foundation:

| Concern | Pin or policy |
|---|---|
| Runtime | Node.js 24.19.0 LTS |
| Package manager | pnpm 11.22.0 |
| Framework | Astro 7.2.2 |
| Server adapter | `@astrojs/node` 11.1.2 standalone |
| UI islands | React/React DOM 19.2.8; `@astrojs/react` 6.0.2 |
| Language | TypeScript 6.0.3 with Astro `strictest` baseline |
| Lint | ESLint 10.8.1, TypeScript ESLint 8.67.0, Astro plugin 3.1.0 |
| Format | Prettier 3.9.6 and Astro plugin 0.14.1 |
| Unit tests | Vitest 4.1.10 in Node environment |

Astro remains `output: 'static'`. The Node standalone adapter supports later
routes that explicitly export `prerender = false`. Session support is disabled
because NAOBI has no session requirement. Astro telemetry is disabled locally
and in CI.

Pnpm uses:

- exact engines and exact direct dependency pins;
- a 24-hour package release cooldown;
- no automatic optional peer installation;
- strict peer dependency enforcement;
- strict dependency build enforcement; and
- an explicit build-script allowlist for `esbuild` and `sharp`.

## Consequences

### Positive

- One command, `pnpm verify`, covers workflow policy, production license policy,
  formatting, lint, Astro diagnostics, unit tests, and production build.
- Lockfile drift and unsupported peer combinations fail early.
- Third-party GitHub Actions use immutable commit SHAs.
- Public routes remain prerendered by default and emit no global React runtime.
- No unused filesystem session subsystem is included.

### Negative

- Exact runtime pins require a deliberate patch-upgrade checkpoint.
- The release cooldown can require a narrow documented exception for an urgent
  security patch.
- TypeScript 7 adoption is deferred despite being current.
- Sharp introduces binary distribution and LGPL notice obligations that must be
  preserved in OCI release artifacts.

## Risks and mitigations

- **Stale exact pins:** Dependabot opens bounded weekly updates; each update runs
  the full verification suite.
- **Supply-chain script compromise:** dependency scripts fail unless explicitly
  allowed in `pnpm-workspace.yaml`.
- **License drift:** a repository validator rejects new production license
  expressions unless reviewed.
- **Workflow tag drift:** a repository validator requires 40-character action
  commit SHAs.
- **Unsupported TypeScript upgrade:** compatibility gates, not version vanity,
  control the upgrade.

## Reversal

Revert the Checkpoint 3.1B squash commit to return to the governance-only
repository. A future framework or runtime-line change requires a superseding
ADR and a clean-build comparison against the locked acceptance criteria.

## References

- Phase 2 Documents 32–34
- Phase 2 ADR-0009
- Phase 3 Document 03
- Context7 queries against current Astro, pnpm, and Vitest documentation on
  2026-08-16
