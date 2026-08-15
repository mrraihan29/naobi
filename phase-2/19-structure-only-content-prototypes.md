# 19 — Structure-Only Content Prototypes

**Version:** 1.0  
**Status:** Accepted structural fixtures; not publishable content  
**Gate:** 2.4 — Publishing and Flagship Design

## 1. Fixture rules

- all IDs begin with `fixture-`;
- all pages display `SYNTHETIC STRUCTURE — NO RESULT`;
- no fabricated metric, rate, price, effect, uncertainty, or conclusion;
- bracketed fields describe required content but are not rendered as public
  claims;
- fixture routes never enter sitemap, feed, search, or analytics; and
- real candidate titles appear only with `candidate — not publication-ready`.

## 2. Research fixture

```text
ID: fixture-research-001
Type: Research
Status: Synthetic structure
Title: [Research question expressed as a precise title]

BRIEF
[Significance]
[Accessible summary]
Evidence status: NO RESULT
Primary limitation: [Required]

METHOD
[Estimand/objective]
[Target regime and contrast]
[Dependency map]
[Method and validation plan]

EVIDENCE
No evidence is attached to this structural fixture.
[Observation → Estimate → Inference → Interpretation separation]
[Uncertainty and sensitivity]
[Limitations]

ARTIFACT
[Report]
[Repository/version]
[Data provenance or closed boundary]
[Reproduction contract]
```

## 3. Engineering Case Study fixture

```text
ID: fixture-engineering-case-001
Type: Engineering Case Study
Status: Synthetic structure
Title: [Sanitized engineering objective]

BRIEF
[Sanitized context and Raihan's role]
[Scope/battery limits]
Estimate maturity: NOT ASSIGNED
Cost result: NOT PROVIDED

METHOD
[Basis documents/date/currency/location]
[Method by scope and maturity rationale]
[WBS, assumptions, exclusions, data gaps]
[Source register]

EVIDENCE
No project figure or estimate is attached to this structural fixture.
[Cross-check]
[Uncertainty/contingency basis]
[Uncaptured risks]
[Sanitization effect on claim]

ARTIFACT
[Safe transformed artifact]
[Transformation register reference]
[Rights and confidentiality]
```

## 4. Experiment fixture

```text
[Parent question]
[Hypothesis]
[Setup / variables / controls]
[Observation]
Outcome: NOT EVALUATED
[Failure mode]
[Lesson and next question]
```

## 5. Project fixture

```text
[Problem]
[Requirements and non-goals]
[Design/implementation narrative]
[Output]
[Validation]
[Trade-offs and lessons]
[Availability and artifacts]
```

## 6. Essay fixture

```text
[Premise]
[Argument or narrative sections]
[Sources for factual claims]
[Conclusion or open question]
[Optional references/artifacts]
```

## 7. Note fixture

```text
[Date and context]
[Observation, reflection, sketch, or question]
[Optional declared relationship]
```

## 8. Coming Soon fixture

```text
Title: [Safe topic]
Domain: [AI / Engineering / General]
Intended type: [Type]
Status: [Planned / In preparation / In validation]
Result: NO RESULT IS PUBLISHED
Last reviewed: [Date]
Action: Discuss this topic
```

## 9. Flagship slot fixture

```text
FLAGSHIP SLOT
Selection: UNASSIGNED
Reason: No candidate has passed the eligibility and publication gates.
Action: View selection criteria
```

The UI must prefer this honest state to fabricated teaser copy.

## 10. Prototype verification

Fixtures must prove that:

- every content type renders without filler;
- missing optional sections collapse cleanly;
- required-field errors are actionable;
- Evidence Depth Rail refuses unsupported types;
- Coming Soon cannot accept results/evidence fields;
- Engineering fixtures cannot accidentally publish cost figures;
- closed artifacts display a boundary rather than a dead link; and
- search/index pipelines exclude all fixtures.
