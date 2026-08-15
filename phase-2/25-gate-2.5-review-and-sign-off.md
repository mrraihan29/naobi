# 25 — Gate 2.5 Review and Sign-Off Package

**Version:** 1.0  
**Status:** Accepted — Gate 2.5 locked  
**Gate:** 2.5 — High-Fidelity System  
**Product Owner:** Raihan

## 1. Decisions already approved

Raihan approved:

- the four responsive validation bands;
- vertical, simplified mobile composition;
- visible-results-first mobile Command/Search;
- a sticky compact mobile Evidence Depth Rail;
- directory-first reduced System Map;
- once-per-session desktop root boot;
- session-only Phosphor, Amber, and Ice selection;
- explicit reduced-motion behavior;
- the critical high-fidelity surface set;
- structure-only prototype fixtures;
- the blocking review sequence; and
- one controlled Figma file.

Raihan also approved a Starter-compatible grouping strategy and stated that
Figma is not intended to be the center of the project.

## 2. Completed Gate 2.5 artifacts

- Document 20 — interview and recommendation record;
- Document 21 — responsive behavior specification;
- Document 22 — component state and interaction inventory;
- Document 23 — accessibility and reduced-motion contract;
- Document 24 — prototype coverage and QA register;
- Figma evidence record;
- accepted ADR-0007; and
- audited Figma token and typography foundations;
- Document 26 — normative visual language specification;
- machine-readable design tokens;
- Document 27 — ASCII screen blueprint library;
- Document 28 — component anatomy and state sheets;
- Document 29 — responsive transformation maps;
- Document 30 — interaction and motion storyboards;
- specification QC evidence; and
- accepted ADR-0008.

## 3. Phase 3 browser evidence obligation

- rendered critical desktop and mobile frames;
- working flows and state transitions;
- visual focus/contrast review; and
- Product Owner visual walkthrough.

This evidence must be captured from the first browser vertical slice and pass
HF-01 through HF-12 before feature expansion. It is a verification obligation,
not unresolved Gate 2.5 design work.

## 4. Closure options

### Option A — Resume bounded Figma work — not selected

Complete only the representative screens in Document 24 when MCP allowance is
available. This retains Figma as the visual review artifact.

### Option B — Specification-as-code plus implementation-browser validation — selected

Close Figma-specific screen production, establish Documents 26–30 and the token
artifact as the complete visual design contract, and require HF-01 through
HF-12 evidence from the first Phase 3 browser prototype before feature
expansion.

## 5. Design-lead recommendation

Choose Option B. The normative specifications and foundations are complete,
Raihan does not intend to center the project on Figma, and browser validation
will produce more useful evidence for an OS-like responsive experience. Figma
should remain available for targeted studies rather than become a launch
dependency.

## 6. Product Owner decision

**Decision:** Option B accepted — specification-as-code plus browser validation  
**Approval date:** 2026-08-15  
**Exceptions:** None

Gate 2.5 is locked. Gate 2.6 may proceed. The browser evidence obligation in
Section 3 remains mandatory at the start of Phase 3.
