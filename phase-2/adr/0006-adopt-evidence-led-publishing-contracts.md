# ADR-0006 — Adopt Evidence-Led Publishing Contracts

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan

## Context

Raihan's OS must publish research, experiments, projects, engineering cases,
essays, notes, and planned work without collapsing them into one generic case-
study template. It must reward transparency without manufacturing scientific
or estimating authority. No launch flagship or public engineering case is yet
selected, so Phase 2 must define contracts without inventing claims.

## Decision drivers

- claim-proportional rigor;
- target and dependency before quantitative method;
- explicit inferential and biological claim levels;
- auditable mining-estimate scope, source, uncertainty, and maturity;
- confidentiality and rights protection;
- meaningful interaction with complete static fallback;
- immutable publication history and clear supersession;
- one-author maintainability with strong automated validation; and
- technology neutrality until Gate 2.6.

## Considered options

### One universal article template

Rejected because it would either under-specify research and engineering
evidence or overburden essays and notes with performative rigor.

### CMS-defined free-form pages

Rejected because critical evidence, rights, relationships, and confidentiality
fields could be omitted without detection.

### Shared metadata with type-specific contracts

Accepted. Every item shares a canonical core while each content type adds only
the evidence its claim requires.

## Decision

- Maintain one canonical version-controlled source per publication.
- Block publication on missing required metadata or failed type-specific gates.
- Scale evidence requirements to claim strength.
- Separate Research design, observation, estimate, inference/decision,
  interpretation, speculation, and limitations.
- Allow the flagship to come from either professional world and select it only
  when evidence and interaction readiness justify the role.
- Require every interaction to earn its complexity and preserve a static
  fallback.
- Publish negative or failed work with calibrated outcome language.
- Calibrate biology-inspired claims and require explicit mappings when
  mechanistic language is used.
- Require auditable scope, method, source status, cross-check, uncertainty, and
  sanitization for Engineering Case Studies.
- Declare open/closed and rights/license state for every artifact.
- Preserve versions, changelogs, and superseded publications.
- Use synthetic structure-only prototypes until real content is approved.
- Use a controlled validation, review, staging, approval, publication, and
  revision lifecycle.
- Keep the authoring syntax, CMS, database, and deployment implementation open
  until Gate 2.6.

## Consequences

### Positive

- readers can distinguish evidence from presentation;
- research and engineering credibility can be inspected;
- private client/database material has explicit publication barriers;
- failed work can contribute knowledge without rhetorical rewriting;
- content can feed search, lineage, and Evidence Depth Rail consistently;
- framework selection will follow the content contract instead of defining it.

### Negative

- authoring requires structured metadata and validation discipline;
- high-claim content takes longer to publish;
- some attractive interactions will be rejected for insufficient explanatory
  value;
- engineering cases may remain less visually complete when safe evidence is
  unavailable;
- future schema migrations require controlled tooling.

### Mitigations

- provide type-specific templates and actionable validation errors;
- allow optional fields to remain absent;
- scale review depth to claim and risk;
- use transformation disclosures for sanitized engineering evidence;
- use staging fixtures before migrating real content.

## Reversibility

Medium before real publications are migrated. Expensive after stable URLs,
relationships, artifacts, and version histories accumulate.

## Affected documents and decisions

- Phase 2 Documents 11–19
- future authoring, validation, search, and publishing architecture
- ADR-0003–ADR-0005 remain governing experience decisions
