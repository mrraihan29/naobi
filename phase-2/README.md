# NAOBI — Phase 2 Product, Experience, and Technical Design

**Version:** 2.0  
**Status:** Locked — all Phase 2 gates accepted  
**Start date:** 2026-08-15  
**Lock date:** 2026-08-15  
**Product Owner / Project Manager / Approver:** Raihan  
**Design, architecture, documentation, and QC support:** Rei

## Purpose

Phase 2 converts the approved product intent into a decision-complete design
baseline. It produces specifications and prototypes, not production
implementation. Phase 3 may not begin against unresolved high-impact design or
architecture decisions.

## Decision hierarchy

1. Quality and rigor
2. Visual experience
3. Maintainability
4. Originality
5. Speed to launch

Accessibility, privacy, security, confidentiality, and scientific integrity
remain mandatory gates rather than weighted preferences.

## Controlled sequence and deliverable register

| # | Deliverable | Status | Decision gate |
|---:|---|---|---|
| 1 | Brand strategy, naming, and domain decision | NAOBI + `naobi.dev` accepted through ADR-0013 | Gate 2.7 |
| 2 | Visual identity and motion principles | Accepted through ADR-0004 | Gates 2.1–2.2 |
| 3 | Low-fidelity information-architecture prototype | Accepted through ADR-0005 | Gate 2.3 |
| 4 | Central OS and two-environment interaction model | Accepted through ADR-0005 | Gate 2.3 |
| 5 | Terminal grammar and visual-navigation equivalence specification | Accepted through ADR-0005 | Gate 2.3 |
| 6 | Content templates and authoring prototype | Accepted through ADR-0006 | Gate 2.4 |
| 7 | Flagship content brief and interactive explanation plan | Accepted as content-neutral contract through ADR-0006 | Gate 2.4 |
| 8 | Engineering case-study sanitization template | Accepted through ADR-0006 | Gate 2.4 |
| 9 | Responsive/mobile behavior specification | Accepted behavioral baseline through ADR-0007 | Gate 2.5 |
| 10 | High-fidelity prototype and design-system specification | Locked through ADR-0008; browser validation obligation carried into Phase 3 | Gate 2.5 |
| 11 | Technical architecture and external-service assessment | Accepted through ADR-0009–ADR-0011 | Gate 2.6 |
| 12 | Detailed test strategy and release-evidence plan | Accepted through ADR-0012 | Gate 2.6 |

## Work stages

### Gate 2.0 — Initiation and controls

- Confirm Phase 1 handoff and change-control rules.
- Establish the Phase 2 document register, ADR process, evidence folders, and
  phase-gated toolchain.

### Gate 2.1 — Experience foundation

- Define the experience thesis, authentic source material, information
  density, shared system character, environmental contrast, voice, and
  signature interaction.
- Translate Raihan's research and engineering practice into observable design
  principles without selecting colors, typography, or a final name too early.
- Preserve the working codename `Raihan's OS` without treating it as a public
  naming commitment.

### Gate 2.2 — Identity system

- Select an art direction grounded in research and engineering practice.
- Specify typography, palette, graphic language, imagery, iconography, sound,
  and motion principles.
- Define shared identity and controlled differentiation between the AI and
  Engineering environments.

### Gate 2.3 — Experience architecture

- Prototype Central OS, global shell, gateways, direct-link entry, terminal,
  visual navigation, search, environment switching, and reading mode.
- Validate that the OS metaphor performs real navigation and evidence work.

### Gate 2.4 — Publishing and flagship design

- Prototype content schemas, progressive disclosure, evidence panels,
  interaction tiers, research quality gates, and confidentiality review.
- Reserve the flagship content contract without inventing a flagship result.

### Gate 2.5 — High-fidelity system

- Produce desktop-first and simplified-mobile prototypes.
- Define design tokens, components, states, responsive rules, focus behavior,
  and reduced-motion equivalents.

### Gate 2.6 — Architecture and verification design

- Decide the implementation stack, authoring model, external services,
  deployment topology, operational targets, and privacy data flows.
- Define the automated and manual test matrix and required release evidence.

### Gate 2.7 — Phase 2 lock

- Select the nickname/masterbrand and domain direction using the completed
  experience, identity, prototype, and architecture evidence.
- Resolve or explicitly defer every high-impact open decision.
- Cross-check the Phase 2 outputs against Phase 1 requirement IDs.
- Complete Product Owner walkthrough and record approval or exceptions.

## Phase 2 exit criteria

Phase 2 is locked only when:

- all twelve deliverables are approved or have an approved bounded deferral;
- all significant decisions are recorded in an ADR or the decision log;
- the high-fidelity prototype covers critical desktop and mobile flows;
- accessibility, privacy, performance, security, SEO, confidentiality, and
  maintainability requirements are designed into the system;
- technical architecture and external-service data flows are explicit;
- the test strategy maps launch-blocking requirements to evidence;
- no unresolved decision would cause high-cost implementation rework; and
- Raihan records explicit Phase 2 approval.

## Folder convention

- `adr/` — immutable decision history; accepted decisions are superseded, not
  silently rewritten.
- `evidence/` — installation checks, benchmark evidence, prototype review
  outputs, and decision-support material.
- `artifacts/` — machine-readable design tokens and other controlled
  implementation inputs.
- Browser captures and test outputs will be added only when their governing
  implementation and verification gates open.

## Current gate

Gates 2.1–2.5 are closed through ADR-0003–ADR-0008. Documents 26–30 and
`artifacts/design-tokens.json` form the normative visual specification-as-code
package. The controlled Figma file is retained as supporting foundations
evidence only; it is not a delivery dependency. ADR-0008 requires the first
Phase 3 browser vertical slice to demonstrate HF-01 through HF-12 before
feature expansion.

Gate 2.6 is locked through ADR-0009–ADR-0012. Documents 31–38 contain the
current-version research, weighted candidate comparison, accepted architecture,
threat and privacy boundaries, CI/CD/operations/recovery design, and
verification plan. Implementation-time validation obligations remain binding.

Gate 2.7 and Phase 2 are locked through Documents 39–43 and ADR-0013. NAOBI and
`naobi.dev` are accepted, Document 42 passed the Phase 1-to-Phase 2
traceability and open-decision audit, and Document 43 records the Product
Owner's explicit final approval. Phase 3 may begin under the locked contracts
and carried validation obligations.

## Change control after lock

- Editorial clarification may proceed only when it does not change an accepted
  requirement, behavior, architecture boundary, visual contract, or risk.
- A materially different decision requires a new ADR that supersedes the
  affected accepted ADR; accepted history is not silently rewritten.
- Phase 3 evidence may select bounded implementation details or an already
  documented substitute, but may not weaken accessibility, privacy, security,
  confidentiality, scientific integrity, recovery, or verification gates.
- Any proposed scope expansion is assessed for Phase 2 re-entry before
  implementation.
