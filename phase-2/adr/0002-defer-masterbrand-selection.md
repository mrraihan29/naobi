# ADR-0002 — Defer Nickname and Masterbrand Selection

**Status:** Superseded by ADR-0013  
**Date:** 2026-08-15  
**Decision owner:** Raihan

## Context

The initial Phase 2 sequence placed public masterbrand selection at the start
of brand design. Raihan intends to use a nickname and wants that nickname to be
considered as the possible masterbrand. Its meaning, tone, and suitability
cannot be judged well before the product's experience, visual identity,
interaction model, content architecture, and technical constraints are known.

Selecting a masterbrand now would risk designing the product around an
underdeveloped name instead of deriving the name from a coherent product.

## Decision drivers

- the final identity must feel authentically Raihan;
- the nickname may become more important than the legal/personal name;
- the experience must not be constrained by premature visual associations;
- candidate names need an established voice, visual system, and product thesis
  for meaningful evaluation;
- domain screening is wasteful before a credible shortlist exists; and
- Phase 2 must still preserve professional attribution and discoverability.

## Considered options

### Select a masterbrand at the beginning of Phase 2

Rejected because the decision would be based primarily on preference rather
than evidence from the designed product.

### Keep Raihan as the permanent masterbrand

Rejected as a premature constraint because it would exclude the intended
nickname before evaluating it.

### Defer the decision to the final Phase 2 gate

Accepted. Build the experience and identity system first, then evaluate the
nickname and other candidates against the completed evidence.

## Decision

- `Raihan's OS` remains a non-public project codename.
- No public masterbrand, nickname, domain, logo wordmark, or handle is locked
  during Gates 2.1–2.6.
- Brand strategy foundations and naming criteria continue to evolve throughout
  Phase 2.
- Gate 2.7 evaluates the nickname, brand architecture, name candidates, domain
  viability, and professional attribution together.
- Domain purchase or public account creation requires separate Product Owner
  approval.

## Consequences

### Positive

- the name can emerge from a real and coherent system;
- visual exploration remains broader and less biased;
- nickname evaluation will use explicit professional and usability criteria;
- domain research focuses on credible finalists rather than speculative names.

### Negative

- prototypes must use a temporary codename or neutral label;
- final wordmark and some identity details cannot be completed until Gate 2.7;
- late naming can cause minor token, copy, and prototype adjustments.

### Mitigations

- design tokens use semantic roles rather than brand-name-dependent labels;
- prototypes keep wordmark regions flexible;
- URLs in prototypes use placeholders;
- naming criteria and trademark/domain checks are prepared before Gate 2.7;
- sufficient Phase 2 time is reserved for final naming integration and QC.

## Reversibility

High before Phase 2 lock. After domain purchase and public launch, reversibility
becomes materially more expensive.

## Affected documents and decisions

- Phase 2 README and deliverable sequence
- Phase 2 Document 01: Brand Strategy, Naming, and Domain Decision
- Phase 1 OQ-001 and OQ-002
- DEC-001, DEC-002, DEC-030
