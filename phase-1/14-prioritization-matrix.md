# 14 — Prioritization Matrix

**Document status:** Draft v0.1

## Decision order

The Product Owner ranked trade-off criteria:

1. Quality and rigor
2. Visual experience
3. Maintainability
4. Originality
5. Speed to launch

Working decision weights:

| Criterion | Weight |
|---|---:|
| Quality and rigor | 30 |
| Visual experience | 25 |
| Maintainability | 20 |
| Originality | 15 |
| Speed to launch | 10 |

Weights provide consistency when comparing options. They do not override a
mandatory accessibility, privacy, security, confidentiality, or evidence gate.

## MoSCoW release priorities

### Must

- Central OS and two gateways
- persistent shared shell and environment switching
- functional terminal with visual equivalents
- boot sequence with skip/direct-link behavior
- distinct environment themes
- reading mode
- global search and stable URLs
- content taxonomy and structured metadata
- progressive-depth research/case-study templates
- equations, code, citations, evidence links
- one flagship interactive publication
- one engineering case study
- two essays
- About/CV and Collaboration Center
- privacy-first analytics
- English canonical content
- per-artifact open/closed status and license
- desktop full experience and functional mobile
- accessibility, performance, security, SEO, and repeated QC gates

### Should

- Research Ledger when lineage data exists
- research timeline
- RSS/feed
- related content
- downloadable reports
- reusable interactive-component library
- automated schema/link/content validation
- current-focus/status module

### Could

- visual research graph
- semantic search
- scheduling integration
- automatic repository metadata
- advanced mobile OS behavior
- additional environment themes
- translated content
- offline research bundles

### Won't in first release

- public comments
- visitor accounts
- cross-visit preference/history storage
- multi-author CMS
- public research work in progress
- automatic full-site translation
- advertising or behavioral tracking
- payments
- unrestricted visitor code execution
- public beta

## Release slices

### Slice 0 — Requirements baseline

- nineteen Phase 1 documents;
- decision and risk baseline;
- Product Owner sign-off.

### Slice 1 — Private platform foundation

- content schemas and authoring workflow;
- canonical routes and shared shell;
- accessibility, SEO, privacy, security, and performance foundations;
- design system and reusable interactions.

### Slice 2 — Private platform-complete

- central OS;
- both environments;
- terminal;
- boot;
- themes;
- reading mode;
- search;
- collaboration;
- mobile interpretation.

No public launch occurs here.

### Slice 3 — Launch content

- flagship created and integrated;
- engineering case selected, sanitized, and published;
- two essays;
- About/CV;
- controlled Coming Soon entries.

### Slice 4 — Repeated QC

- requirement verification;
- visual and interaction review;
- research/content review;
- confidentiality and licensing review;
- accessibility;
- performance;
- security;
- browser/device;
- backup/recovery;
- production smoke testing.

### Slice 5 — Official launch

Release only after all blocking acceptance criteria pass and Raihan approves.

## Feature decision test

A proposed feature is accepted when:

1. It serves a defined user need or product principle.
2. Its explanatory or professional value exceeds its distraction.
3. It has a maintainable implementation and content workflow.
4. It does not compromise mandatory quality gates.
5. It fits the approved release slice.

“It looks impressive” is necessary for some signature features but is never a
sufficient reason by itself.

## Change control

After Phase 1 sign-off:

1. Record requested change and rationale.
2. Identify affected goals, requirements, documents, content, tests, risks, and
   launch gate.
3. Score the change against the decision hierarchy.
4. Classify as correction, clarification, scope addition, scope removal, or
   deferred enhancement.
5. Raihan approves, rejects, or defers.
6. Update version and traceability before implementation.

