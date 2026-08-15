# 06 — Content Strategy and Content Inventory

**Document status:** Draft v0.1  
**Content owner:** Raihan

## Content mission

Show not only what Raihan produced, but how the question was framed, how the
work was performed, what evidence was obtained, what remained uncertain, and
what a reader can inspect next.

## Content taxonomy

| Type | Purpose | Minimum publication gate |
|---|---|---|
| Research | Answer a defined question systematically | Question/target, method, data or model, comparison, evaluation, uncertainty, limitations, conclusion |
| Experiment | Test a bounded hypothesis or mechanism | Hypothesis, setup, observation, result, failure status, lesson, next question |
| Project | Deliver a useful system or artifact | Problem, requirements, implementation narrative, output, validation, lessons |
| Engineering Case Study | Demonstrate professional problem solving safely | Sanitized context, scope, basis, assumptions, method, decision, validation, lessons |
| Blog Essay | Explain or argue a technical, philosophical, or personal idea | Clear premise, coherent structure, sources for factual claims |
| Note | Record a shorter or more informal reflection | Context, date, clear distinction from formal research |
| Coming Soon | Signal planned or validating work | Topic-level description, honest status, no result claim or confidential novelty |

Notes are a format inside the shared Blog/Journal rather than a top-level
navigation destination.

## Provisional content inventory

| Content | Provisional classification | Current evidence known | Status / gap |
|---|---|---|---|
| Sentiment Classification with BERT | Project or Applied Research | Technical report/paper and source code may exist | Audit question, baselines, evaluation, and limitations |
| Predictive Maintenance for Solar Filter with Machine Learning | Project or Applied Research | Technical report/paper and source code may exist | Audit target, dataset, validation design, and operational result |
| Hermes Affective Core | Research candidate | Paper or technical report may exist | Audit claim levels, model, baselines, evaluation, and reproducibility |
| Hermes Emotion with Synthetic Hormone System | Private research idea | Idea only | Do not publish as completed; optional controlled Coming Soon entry |
| Selected mining estimator projects | Engineering Case Studies | Spreadsheet/model and experience exist | Select cases; sanitize client and proprietary database information |
| CV and professional history | Profile evidence | CV exists | Editorial and privacy review before publication |

No flagship has been selected. This is a launch blocker, not a Phase 1
requirements blocker.

## Content architecture

Every content item must contain structured metadata:

- unique ID, title, slug, and canonical URL;
- content type and domain;
- accessible summary;
- technical abstract where relevant;
- author and contributors/acknowledgements;
- created, published, and modified dates;
- status and version;
- tags and relationships;
- interaction level;
- evidence, repository, report, dataset, and citation links;
- license and open/closed status;
- language and translation status;
- confidentiality review status;
- featured and flagship state;
- supersedes/superseded-by relationship;
- hypothesis-parent and follow-up relationship when relevant.

## Progressive article structure

### Layer 1 — Orientation

- title;
- one-sentence significance;
- accessible summary;
- status, date, domain, and reading time;
- primary visual or interactive entry point.

### Layer 2 — Understanding

- problem or research question;
- context and motivation;
- key method;
- key result and limitations;
- guided visualization.

### Layer 3 — Technical inspection

- target/estimand or engineering objective;
- data-generating or system model;
- assumptions and dependency structure;
- methodology;
- equations, code excerpts, and diagrams;
- evaluation and validation;
- uncertainty and sensitivity.

### Layer 4 — Evidence and reproduction

- report or paper;
- repository and version;
- data provenance or reason data cannot be published;
- environment and reproduction instructions;
- detailed limitations;
- license;
- changelog.

## Research publication quality gate

Research content must:

1. Define the question, target quantity/objective, target regime/population,
   contrast, outcome, and decision criterion where applicable.
2. Map sampling, assignment, repeated measures, clusters, evaluators, or system
   dependencies before stating sample size or uncertainty.
3. Separate design, observation, estimate, inference, interpretation,
   speculation, and limitations.
4. Identify known, observed, estimated, assumed, inferred, and speculative
   claims.
5. Preserve data provenance, configurations, versions, seeds, exclusions,
   failures, convergence status, and reproducible commands where applicable.
6. Use validation proportional to risk, including synthetic checks,
   independent verification, sensitivity analysis, and recovery tests for
   novel or fragile models.
7. Report negative results precisely as not detected, practically equivalent,
   inconclusive, or failed validation.
8. For neuroscience-inspired work, distinguish biological observation,
   computational hypothesis, engineering abstraction, and narrative analogy.
9. Compare biologically named mechanisms with functionally matched simpler
   baselines and state omitted biology.

These gates are adapted from the Rei Quantitative Research Protocol and must be
scaled to the claim. A routine project should not imitate a paper merely to look
scientific.

## Interaction tiers

| Tier | Meaning | Typical use |
|---|---|---|
| L0 Editorial | Text, images, citations, typography | Ordinary blog |
| L1 Enhanced | Expandable code, annotated equations, diagrams, table controls | Technical essay |
| L2 Exploratory | Interactive charts, filters, linked views, parameter controls | Applied research |
| L3 Simulation/Demo | Guided executable model or product demonstration | Flagship work |
| L4 Reproducible | Repository, data, environment, and regeneration instructions | Open research |

An article may use multiple tiers. Interaction is not required when it adds no
explanatory value.

## Publication lifecycle

1. Private idea
2. Private work in progress
3. Internal research/content review
4. Evidence and claim review
5. Confidentiality and license review
6. Staging preview
7. Ready for publication
8. Published
9. Revised, superseded, or archived

Unfinished research is not published as a research result. Coming Soon content
may reveal only safe topic-level information and truthful status.

## Mining confidentiality gate

Before publishing an engineering case:

- remove client name and direct identifiers;
- remove or generalize identifying location/project attributes;
- exclude confidential prices, quotes, contracts, quantities, and metadata;
- exclude the proprietary estimator database and protected formula logic;
- use synthetic, indexed, ranged, or normalized values when safe and useful;
- verify that screenshots and downloadable files contain no hidden metadata;
- state that examples are sanitized where applicable;
- confirm that remaining claims still accurately represent Raihan's role.

## Editorial cadence

- Minimum: one meaningful update each month.
- An update may be a new publication, material revision, new simulation,
  reproducibility improvement, or substantial case-study addition.
- Minor typo fixes do not satisfy the cadence metric.
- English is published first; translations may follow.
- Raihan is the only CMS author, but contributors and co-researchers may receive
  attribution.

