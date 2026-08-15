# ADR-0009 — Adopt Content-First Astro Hybrid Architecture

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan  
**Related documents:** 32, 33, 34

## Context

Raihan's OS must combine crawlable technical publishing with a distinctive OS
shell, two equal knowledge environments, global search, progressive evidence
depth, charts, and moderate simulations. It launches with approximately 50
items, 1,000 monthly visits, one author, Git/MDX publishing, and no accounts,
CMS, or application database.

## Decision drivers

- content, direct-link, SEO, and progressive-enhancement integrity;
- custom interaction without global hydration;
- strict TypeScript and Raihan's JavaScript familiarity;
- low one-author operational load;
- portable Coolify/container deployment; and
- future growth without speculative services.

## Decision

Use Astro 7.2 in its default static output with strict TypeScript, React 19.2
islands only for interactive components, and Node 24 LTS. Pre-render every
normal content route. Opt only `POST /api/inquiry` and `GET /healthz` out of
pre-rendering for on-demand execution at launch.

Use MDX/content collections as canonical Git content, Pagefind for generated
public search, Observable Plot for standard charts, and Web Workers for bounded
simulations. Do not introduce a production database, CMS, queue, cache service,
search server, or computation service.

## Considered options

### Next.js Node

Technically strong and preferred if global stateful application behavior
becomes essential, but its broader server/cache/RSC model exceeds the approved
launch workload.

### Django LTS plus frontend islands

Familiar and mature, but its database/admin advantages are unused and the
cross-language MDX/islands pipeline increases integration burden.

### Astro hybrid — selected

Makes static content the default and interactive/runtime behavior an explicit
opt-in boundary.

## Consequences

### Positive

- minimal client and server attack/performance surface;
- natural content schema, direct HTML, and interaction isolation;
- one TypeScript application/container and portable output; and
- scale increases can be absorbed primarily by CDN caching.

### Negative

- developers must understand Astro islands as well as React;
- cross-page application state is intentionally constrained; and
- complex widgets require deliberate library integration.

## Risks and controls

| Risk | Control |
|---|---|
| Framework/toolchain compatibility drift | lockfile, LTS runtime, current-version recheck, Dependabot and verified update PRs |
| OS shell becomes a monolithic hydrated app | island budget and Phase 3 bundle/interaction evidence |
| Pagefind CSP weakens policy | narrow worker/WASM directive and staging CSP validation |
| Future server compute is forced into main app | add a separate approved adapter/service only after a flagship requirement and ADR |

## Reversibility

Content remains MDX with typed metadata, public output is HTML, and deployment
is an OCI container. Migration to Next.js, Django, or another generator is
material but bounded; external service calls are adapters rather than content
dependencies.

## Acceptance record

Accepted by Raihan on 2026-08-15 with no exception. HF-01 through HF-12 and
exact TypeScript/toolchain compatibility remain mandatory first-vertical-slice
evidence before feature expansion.
