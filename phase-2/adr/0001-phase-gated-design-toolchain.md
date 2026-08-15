# ADR-0001 — Use a Phase-Gated Design Toolchain

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan

## Context

Raihan's OS requires distinctive product design, traceable architecture
decisions, high-fidelity prototyping, and current framework documentation. A
large undifferentiated collection of agent tools would increase instruction
conflicts, permissions, maintenance, and supply-chain exposure.

## Decision drivers

- enterprise-grade quality without tool sprawl;
- strong original visual direction;
- auditable decisions;
- access to current library documentation;
- a design source of truth;
- least-privilege external integrations; and
- defer implementation-specific tools until the implementation stack is known.

## Considered options

### Install all candidate tools immediately

Rejected because most Phase 3–6 tools are not required for Phase 2 and some
would bias technology decisions or expose production capabilities prematurely.

### Use only built-in capabilities

Rejected because Figma design context, current library documentation, and
specialized design/ADR guidance materially improve Phase 2.

### Install tools by phase

Accepted. Install only the smallest trusted set needed by the active phase and
verify every installation before use.

## Decision

For Phase 2, use:

- `frontend-design` for distinctive, subject-grounded visual direction;
- `web-design-guidelines` for later UI, UX, and accessibility review;
- `architecture-decision-records` for durable decision history;
- the official/curated Figma plugin as the future prototype and design-system
  source of truth;
- the official Context7 remote MCP for current version-specific documentation;
- existing `visualize`, `imagegen`, browser control, documents, and relevant
  domain-research skills.

React/Next.js, implementation testing, security operations, observability, and
deployment integrations remain deferred until their governing phase or stack
decision.

## Consequences

### Positive

- lower instruction and permission surface;
- clearer tool ownership by phase;
- less technology bias during product design;
- current design and technical references;
- an auditable path for later additions.

### Negative

- some tools require a new Codex task or tool refresh before becoming callable;
- Figma and Context7 depend on external service availability;
- phase transitions include an explicit tooling review.

## Risks and controls

- Inspect skill instructions and provenance before installation.
- Prefer official or high-reputation sources.
- Pin implementation dependencies after stack validation.
- Use minimum permissions and separate development from production access.
- Never store confidential mining content or inquiry text in unrelated tools.
- Record installation evidence and unresolved authentication state.

## Reversibility

High. Skills can be removed independently, MCP configuration can be disabled,
and Phase 2 documents remain portable Markdown.

## Affected requirements and decisions

- DEC-001, DEC-013, DEC-026, DEC-027, DEC-030
- NFR accessibility, privacy, maintainability, testability, and portability
- Phase 2 deliverables 1, 2, 10, 11, and 12
