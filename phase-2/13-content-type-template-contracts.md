# 13 — Content-Type Template Contracts

**Version:** 1.0  
**Status:** Accepted  
**Gate:** 2.4 — Publishing and Flagship Design

## 1. Research template

### Brief

- title, status, version, domain, license;
- one-sentence significance and accessible summary;
- research question and contribution;
- main evidence status and primary limitation; and
- available artifact summary.

### Method

- target/estimand or formal objective;
- target population/regime, contrast, outcome, and decision criterion;
- sampling/assignment/measurement/dependency structure;
- data/model and observation process;
- method, implementation, and deviations from plan; and
- validation design and completion criteria.

### Evidence

- observations separate from estimates;
- effects/outputs with uncertainty and units;
- diagnostics, independent checks, sensitivity, and failures;
- inference/decision under stated assumptions;
- interpretation, speculation, and limitations separated; and
- claim labels where material.

### Artifact

- report/paper;
- repository and release/commit;
- data provenance or non-public reason;
- environment/configuration/reproduction command;
- changelog; and
- rights/license.

## 2. Experiment template

- parent research or motivating question;
- bounded hypothesis/mechanism;
- setup, variables, controls, units, and procedure;
- sampling/dependency structure when quantitative;
- direct observations;
- outcome: supported within scope, not detected, equivalent, inconclusive, or
  failed validation;
- failure mode and diagnostic evidence;
- lesson and next question; and
- logs/configuration/artifacts.

An Experiment does not inherit the status of its parent Research.

## 3. Project template

- problem and user/system context;
- requirements and explicit non-goals;
- constraints and architecture/design rationale;
- implementation narrative at appropriate depth;
- delivered output and availability;
- validation against requirements;
- trade-offs, failures, lessons, and next work;
- open/closed state; and
- code/demo/report artifacts.

Project pages do not use scientific language merely because they involve AI.

## 4. Engineering Case Study template

### Brief

- sanitized context and business/engineering objective;
- Raihan's actual role;
- scope and battery limits;
- study stage/estimate classification only when supportable;
- transferable result stated without protected detail; and
- confidentiality transformation notice.

### Method

- basis documents and date/currency/location context where relevant;
- estimating or engineering method and why it matches maturity;
- WBS or decomposition;
- assumptions, exclusions, qualifications, and data gaps;
- source-register summary; and
- calculation/derivation approach without proprietary formula disclosure.

### Evidence

- sanitized or transformed evidence;
- independent cross-check and discrepancy disclosure;
- uncertainty/contingency basis and uncaptured risks;
- validation against project objective;
- limitations and sign-off boundary; and
- no false precision.

### Artifact

- sanitized report, diagram, normalized table, or demonstration;
- transformation log;
- rights/confidentiality statement; and
- collaboration route.

## 5. Blog Essay template

- title, date, topics, and reading time;
- clear premise or question;
- coherent argument/narrative;
- factual claims sourced proportionally;
- conclusion or open question;
- optional References and Artifacts; and
- low-emphasis general collaboration route.

Essay voice may be personal. Interface labels remain precise and direct.

## 6. Note template

- title and date;
- short context;
- observation, reflection, sketch, or question;
- explicit `Note` classification;
- related work when declared; and
- optional sources/artifacts.

Notes are intentionally lightweight and must not imply formal validation.

## 7. Coming Soon template

- title;
- domain and intended content type;
- topic-level intent;
- status: Planned, In preparation, or In validation;
- last reviewed date;
- explicit `No result is published` state; and
- `Discuss this topic` collaboration route.

No percentages, promised dates, conclusions, metrics, or confidential novelty.

## 8. Empty and blocked states

Templates never fill absent evidence with marketing copy. Examples:

- `No public artifact is available. Read the rights boundary.`
- `Validation is incomplete. This item cannot be published as Research.`
- `Estimate class is not stated because maturity evidence is insufficient.`
- `This case cannot be published until confidentiality review passes.`
