# ADR-0007 — Adopt Responsive and Accessible High-Fidelity Contracts

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan  
**Related gates:** 2.5, 2.6

## Context

The accepted identity, experience architecture, and publishing contracts need
responsive, component-state, accessibility, and prototype-coverage rules before
technical architecture is selected. Raihan approved all twelve Gate 2.5
recommendations and subsequently approved a single-file grouping strategy when
Figma Starter limitations prevented native multi-mode organization.

## Decision

Adopt Documents 21–24 as the normative Gate 2.5 behavioral contracts.

- Use four provisional content-pressure bands.
- Make desktop the complete console and mobile a complete but simplified
  reading/navigation experience.
- Keep Command/Search globally equivalent to visible navigation.
- Keep Evidence Depth Rail as one-document recomposition.
- Run full boot only once per fresh desktop root session.
- Implement explicit reduced-motion behavior.
- Use synthetic structure-only fixtures until real content is approved.
- Keep one controlled Figma file; under Starter constraints use three pages
  with internal Sections and grouped signal variants.
- Treat Figma as supporting evidence, not the normative source.

## Considered options

### Upgrade Figma and model native modes/pages

Provides cleaner Figma theme switching and organization but adds cost to a tool
that is not intended to be the project's center.

### Group within Starter constraints — selected

Preserves one file and complete specification coverage with limited visual-tool
overhead. Component variants represent signal profiles.

### Abandon Figma entirely

Avoids tool constraints but removes useful visual review and handoff evidence.

## Consequences

- Production architecture must implement signal switching independently of the
  Figma limitation.
- Visual review can resume in Figma or move to browser prototypes through an
  explicit bounded deferral.
- Gate 2.5 remains open until visual evidence or that bounded deferral is
  approved.
- No research result, estimate value, client identity, or flagship may be
  invented for visual realism.

## Risks and controls

| Risk | Control |
|---|---|
| Grouped variants drift across profiles | Shared chassis tokens and signal-parity QA |
| Visual evidence remains incomplete | Coverage matrix and explicit Pending status |
| Browser implementation diverges from specification | Documents 21–23 remain normative and map to Phase 3 acceptance tests |
| Figma becomes a delivery bottleneck | Product Owner may approve browser-prototype substitution |

## Reversibility

The grouping representation is reversible. A future paid Figma plan may convert
signal variants to native modes without changing the accepted product behavior.

