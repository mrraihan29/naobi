# 14 — Research and Experiment Quality Gates

**Version:** 1.0  
**Status:** Accepted  
**Gate:** 2.4 — Publishing and Flagship Design

## 1. Classification gate

Publish as Research only when the work answers a defined question
systematically with evidence and limitations. Publish as Experiment when it
tests a bounded mechanism or hypothesis. Publish as Project when the primary
claim is delivery and validation of an artifact. Publish as Essay or Note when
the work is explanatory, argumentative, or reflective.

Prestige, topic, model complexity, and page length do not determine type.

## 2. Research gate

### Target

- answerable research question;
- estimand, prediction target, objective, or decision quantity;
- target population/regime;
- contrast and what is held fixed;
- outcome and scale;
- decision criterion/tolerance/SESOI when applicable; and
- evidence that would change or invalidate the conclusion.

### Design and dependency

- sampling, assignment, measurement, cluster, repeated, nested, or crossed
  units identified;
- `n` stated at relevant independent levels;
- selection, missingness, exclusions, and preprocessing recorded;
- observation process distinguished from latent construct; and
- generalization scope explicit.

### Method and computation

- method justified by target and structure;
- configurations, versions, seeds, and deviations recorded when relevant;
- nontrivial derived results trace to executable or independently verified
  computation;
- convergence/numerical status reported; and
- analysis does not silently change estimand across sensitivity checks.

### Validation

- validation proportional to novelty and risk;
- independent check that does not repeat the primary failure mode;
- custom/latent/hierarchical/dynamical work includes targeted recovery or
  simulation when required;
- sensitivity stresses choices that could change the decision; and
- completion/failure criteria defined before interpreting the check.

### Reporting

- Design, Observation, Estimate, Inference/Decision, Interpretation,
  Speculation, and Limitations separated;
- uncertainty paired with result and decision-relevant units;
- plots show units, relevant sample structure, and honest axes;
- reproduction scope and artifact rights stated; and
- claim labels used where ambiguity would strengthen rhetoric.

## 3. Experiment gate

- bounded hypothesis or mechanism;
- setup, variables, controls, and procedure;
- direct observations preserved;
- result state calibrated;
- failure and warning logs retained when material;
- lesson does not exceed the tested scope;
- follow-up question declared rather than implied; and
- parent/child relationships validated.

## 4. Negative-result vocabulary

- **Not detected:** evidence remains compatible with meaningful effects.
- **Practically equivalent:** a prespecified equivalence criterion is met.
- **Inconclusive:** neither directional nor equivalence criterion is met.
- **Failed validation:** design, assumption, computation, or robustness blocks
  the planned claim.

`No effect` is prohibited unless the design and criterion justify that exact
statement.

## 5. Biology-inspired gate

Every biologically named construct declares one claim level:

1. biological observation;
2. biological/computational hypothesis;
3. engineering abstraction inspired by biology; or
4. narrative analogy.

Mechanistic or level-3 claims also specify biological source, computational
state, inputs/outputs, timescale, control/learning role, omitted biology, and a
discriminating prediction. Compare against a functionally matched simpler
baseline and perform ablation when the named mechanism is claimed to matter.

If explicit mapping is impossible, rename the component by function or label it
as analogy.

## 6. Gate outcome

- **Pass:** evidence supports the proposed type and claims.
- **Conditional:** publication allowed only after named bounded corrections.
- **Reclassify:** work is publishable under a lower-claim content type.
- **Block:** unresolved target, dependency, validity, numerical, leakage,
  identification, or rights issue invalidates public interpretation.

Blocking a Research classification does not automatically block publication as
an honest Experiment, Project, Essay, or Note.
