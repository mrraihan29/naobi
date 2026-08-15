# ADR-0005 — Adopt Universal Dual-Mode Experience Architecture

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan

## Context

Gate 2.3 refined the Phase 1 sitemap into a behavioral architecture for Central
OS, Signal Lab, Operations Ledger, direct entry, System Map, Command/Search,
Evidence Depth Rail, reading mode, Coming Soon, and Collaboration. The OS
metaphor must accelerate real tasks without forcing terminal knowledge or
placing spectacle before content.

## Decision drivers

- equal AI Research and Engineering identity;
- universal and useful Central OS;
- stable crawlable URLs and complete direct-entry pages;
- terminal/visual equivalence;
- professional command behavior and precise errors;
- truthful Coming Soon discovery;
- keyboard accessibility without browser-shortcut conflicts;
- one shared Journal and shared applications; and
- simple, privacy-conscious collaboration entry.

## Considered options

### World selection required before content access

Rejected. It would turn Central OS into a gate and delay cross-world discovery.

### Full desktop/window simulation

Rejected. It increases responsive complexity and makes the OS metaphor easier
to remove as decoration.

### Universal Central OS with dual-mode access

Accepted. Visitors can browse visually or through Command/Search, enter either
environment, and reach the same canonical destinations.

## Decision

- Give AI Research and Engineering equal gateway priority.
- Keep Central OS useful without requiring environment selection.
- Open gateways on environment overviews.
- Bypass full boot on direct content links and use a reduced shell.
- Use a connected operational network with a linear directory source of truth
  for System Map.
- Use one constrained professional Command/Search interface with no hidden or
  playful commands.
- Include published and Coming Soon content in unified search with explicit
  status distinction.
- Switch environments to the destination overview and expose Return to previous
  location.
- Limit the complete Evidence Depth Rail to Research and Engineering Case
  Study.
- Use `Ctrl/Cmd+K` as the only product-specific global shortcut.
- Route Coming Soon `Discuss this topic` to a prefilled Collaboration entry;
  do not create a dedicated interest database at launch.
- Provide structured brief, direct email, professional profile, and relevant
  repository discussion as collaboration routes.

## Consequences

### Positive

- every core task remains available without terminal knowledge;
- Command/Search serves both experts and ordinary visitors;
- direct links are fast, complete, and SEO-compatible;
- Coming Soon remains discoverable without being confused with evidence;
- one shortcut minimizes browser and assistive-technology conflicts;
- the architecture degrades to a clear directory when network visualization is
  unavailable.

### Negative

- combined Command/Search needs careful ranking and mode communication;
- Return to previous location introduces session navigation state;
- System Map requires both network and directory representations;
- one canonical page with recomposed depth requires focus and history design;
- Coming Soon prefill requires validated routing into the collaboration form.

### Mitigations

- define exact command/visual equivalence tests;
- keep URLs and browser history authoritative;
- make the directory the accessibility source of truth;
- preserve focus and announce depth changes;
- validate all prefilled collaboration values on the server;
- prohibit arbitrary code, URL, or shell execution.

## Reversibility

Medium before application routing and content templates are implemented.
Expensive after search indexing, terminal grammar, and canonical content URLs
are publicly released.

## Affected documents and decisions

- Phase 2 Documents 07–10
- future content schemas, search index, routing, and interaction prototype
- ADR-0003 and ADR-0004 remain governing experience and identity decisions
