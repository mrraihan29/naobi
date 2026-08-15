# ADR-0008 — Adopt Specification-as-Code for Gate 2.5 Visual Closure

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan  
**Related decision:** ADR-0007

## Context

ADR-0007 allowed either bounded Figma completion or browser-prototype
substitution. Figma Starter imposed one variable mode, three pages, and a
bounded MCP call allowance. Raihan stated that Figma is not intended to be a
project focus and approved completing Gate 2.5 through Markdown/ASCII design
direction before moving forward.

## Decision drivers

- Preserve precise and reviewable design intent.
- Avoid making a nonessential visual tool a project dependency.
- Keep tokens machine-readable and implementation-neutral.
- Validate dynamic OS behavior in the medium that will actually ship.
- Preserve explicit evidence obligations rather than lowering quality.

## Decision

Select Option B from Document 25.

1. Documents 26–30 and `artifacts/design-tokens.json` replace mandatory Figma
   screen coverage for Gate 2.5.
2. Markdown/ASCII define normative hierarchy, token use, component anatomy,
   responsive transformation, interaction, and motion behavior.
3. Existing Figma foundations remain supporting evidence and may be used for
   targeted studies, but no paid-plan upgrade is required.
4. The first Phase 3 browser prototype becomes the visual validation artifact.
5. HF-01 through HF-12 and the browser evidence listed in the QC record are
   mandatory before feature expansion.

## Considered options

### Continue Figma under Starter limits

Possible through aggressive grouping, but further rate limits make it a fragile
workflow and a poor representation of responsive runtime behavior.

### Upgrade Figma

Would improve Figma organization but spends money and attention on a tool that
is not central to the delivery strategy.

### Specification-as-code plus browser validation — selected

Provides exact, versionable direction now and validates real behavior in the
shipping medium later.

## Consequences

### Positive

- Gate 2.5 has a complete, inspectable, repository-local design contract.
- Tokens can flow directly into implementation without manual transcription.
- ASCII blueprints remain readable without proprietary software.
- Browser evidence covers responsive behavior, focus, motion, and rendering
  more truthfully than static frames.

### Negative

- Stakeholders cannot browse a polished Figma prototype before implementation.
- ASCII does not prove aesthetic rendering by itself.
- Phase 3 must build a representative vertical slice before broad development.

## Risks and controls

| Risk | Control |
|---|---|
| Implementation improvises beyond ASCII | Documents 26–30 and tokens are normative |
| Browser prototype is treated as production prematurely | It is a validation vertical slice with explicit acceptance tests |
| Visual defects appear late | Browser validation occurs before feature expansion |
| Figma and Markdown drift | Figma is non-normative and requires no synchronization |

## Reversibility

Figma can be resumed for targeted studies without changing the normative
contracts. A future design tool may consume the same tokens and blueprints.

## Gate result

With the specification pack, QC evidence, and bounded Phase 3 validation
obligation accepted, Gate 2.5 is locked.

