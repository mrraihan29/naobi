# 11 — Publishing, Evidence, and Flagship Interview

**Version:** 1.0  
**Status:** Accepted — Gate 2.4 closed  
**Gate:** 2.4 — Publishing and Flagship Design  
**Product Owner:** Raihan  
**Facilitator:** Rei

## Purpose

Interview 2D defines what must be true before content is published, how evidence
is presented, how interactions earn their complexity, how professional work is
sanitized, and how a future flagship is selected without inventing one now.

This gate defines technology-neutral content contracts. Framework, CMS, search
engine, database, and hosting implementation remain Gate 2.6 decisions.

## Locked inputs

- one author with contributor acknowledgement support;
- English canonical launch content;
- Research, Experiment, Project, Engineering Case Study, Blog Essay, Note, and
  Coming Soon as distinct types;
- version-controlled content with structured metadata;
- no public comments or visitor accounts;
- completed work only as published evidence;
- Coming Soon contains no result claim;
- Evidence Depth Rail only for Research and Engineering Case Study;
- open and closed artifacts may coexist with explicit rights status; and
- client names and proprietary estimator database content remain confidential.

## Interview 2D — decisions

Respond with `approve recommendation` where no revision is needed.

### 1. Canonical content source

**Recommendation:** every publication has one canonical, version-controlled
source plus validated structured metadata. The chosen authoring syntax and CMS
interface remain open until Gate 2.6. Publishing must never require direct
production-database editing.

Approve?

### 2. Validation strictness

**Recommendation:** missing core metadata or a failed type-specific quality gate
blocks publication. Optional fields remain absent rather than filled with
generic text. Draft preview may show validation errors; production may not.

Approve?

### 3. Claim-proportional rigor

**Recommendation:** the publication gate scales to the claim. A routine project
does not imitate a paper, but a quantitative Research publication must define
its question, target/estimand or objective, target regime, dependency structure,
decision criterion, validation, uncertainty, and limitations when applicable.

Approve?

### 4. Research claim chain

**Recommendation:** every Research page explicitly separates Design,
Observation, Estimate, Inference/Decision, Interpretation, Speculation, and
Limitations. Critical statements may be labeled known, observed, estimated,
assumed, inferred, or speculative.

Approve this level of transparency?

### 5. Flagship eligibility

**Recommendation:** the flagship may come from either AI Research or Engineering
and is selected by evidence readiness, explanatory value, interaction benefit,
originality, and artifact quality—not by equal representation or visual
potential. No flagship is named during this gate.

Approve?

### 6. Interaction eligibility

**Recommendation:** an interaction is included only when it lets visitors
inspect an assumption, parameter, relationship, sensitivity, or evidence state
that static presentation cannot explain as well. Every interaction requires a
static fallback that preserves the core conclusion and evidence links.

Approve?

### 7. Negative and failed results

**Recommendation:** negative or failed work may be published when its question,
setup, failure mode, evidence, and lesson are documented. Use calibrated states:
`not detected`, `practically equivalent`, `inconclusive`, or `failed
validation`; never rewrite them as positive results.

Approve?

### 8. Biology-inspired AI work

Hermes may require neuroscience-inspired terminology.

**Recommendation:** every biologically named mechanism states whether it is a
biological observation, computational hypothesis, engineering abstraction, or
narrative analogy. Engineering abstractions require explicit state/input/output
mapping, omitted biology, and comparison with a functionally matched simpler
baseline when a mechanistic claim is made.

Approve?

### 9. Engineering case-study evidence

**Recommendation:** an Engineering Case Study states scope/battery limits,
study stage and AACE class only when supportable, methodology, basis date and
currency where relevant, assumptions, exclusions, source register, validation
or cross-check, uncertainty/contingency basis, sanitization actions, and
Raihan's actual role.

Figures may be omitted, indexed, normalized, ranged, or synthetically replaced
when needed for confidentiality, but the transformation must be disclosed and
must not create a misleading result. Approve?

### 10. Source status

**Recommendation:** estimate inputs and cost figures use visible source status:
user-supplied/verified, dated external citation, reference-only requiring
validation, or unavailable. No unlabeled cost figure appears in an auditable
case study.

Approve?

### 11. Artifact and rights state

**Recommendation:** every report, code repository, dataset, spreadsheet, image,
and downloadable artifact declares open/closed availability plus its applicable
license or rights notice. If closed, the page explains the boundary without
revealing protected details.

Approve?

### 12. Versioning and supersession

**Recommendation:** published work retains a version and changelog. Material
revisions record what changed. Superseded work remains accessible, is clearly
labeled, and links to its successor rather than silently changing history.

Approve?

### 13. Structure-only prototypes

Because no flagship or public engineering case is selected yet:

**Recommendation:** Gate 2.4 prototypes use clearly labeled synthetic structure
and placeholder content with no invented research or cost claim. Real titles
may appear only as `candidate — not publication-ready` when useful for testing
metadata and routing.

Approve?

### 14. Publication workflow

**Recommendation:** use this controlled lifecycle:

1. private idea;
2. private work in progress;
3. content/type validation;
4. research or engineering evidence review;
5. confidentiality, rights, and license review;
6. staging preview across full OS, reading, direct-link, and mobile views;
7. link, accessibility, and interaction fallback checks;
8. explicit Raihan approval;
9. publication and index/feed/sitemap update; and
10. revision, supersession, or archive.

Approve?

### 15. Content-specific collaboration

**Recommendation:** Research routes collaboration toward research, review, or
open-source discussion; Engineering Case Studies route toward project briefs;
Coming Soon routes `Discuss this topic`; Journal uses a low-emphasis general
route. The persistent Collaboration Center remains universally available.

Approve?

## Outputs after approval

Rei will produce:

1. canonical metadata and relationship schema;
2. templates for all seven content types;
3. Research and Experiment evidence gates;
4. Engineering Case Study and sanitization contracts;
5. Evidence Depth Rail content/state contract;
6. interaction tiers and static-fallback contract;
7. flagship eligibility and selection scorecard;
8. rights, licensing, versioning, and supersession rules;
9. authoring/publishing validation workflow; and
10. structure-only content prototypes for Gate 2.4 review.

## Approval record — 2026-08-15

Raihan approved all fifteen recommendations without exception. Documents 12–19
contain the resulting normative contracts. Gate 2.4 is closed through ADR-0006.
