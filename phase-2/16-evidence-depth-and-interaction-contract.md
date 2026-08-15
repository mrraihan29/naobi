# 16 — Evidence Depth and Interaction Contract

**Version:** 1.0  
**Status:** Accepted  
**Gate:** 2.4 — Publishing and Flagship Design

## 1. Applicability

Full Evidence Depth Rail applies only to Research and Engineering Case Study.
Other types use their own reading structures unless a future ADR expands the
contract after evidence review.

## 2. One document, four projections

Depth is a projection of one canonical content object:

| Depth | Visitor question | Required content |
|---|---|---|
| Brief | What is this and why should I care? | identity, significance, summary, status, primary limitation, artifact availability |
| Method | How was the work framed and performed? | objective/target, scope/design, assumptions, method, data/source basis, deviations |
| Evidence | What supports the claim and what could break it? | observations/results, uncertainty, validation/cross-check, sensitivity, limitations, claim boundary |
| Artifact | What can I inspect or reproduce? | reports, code, data, models, sanitized files, versions, rights, reproduction/access boundary |

Changing depth reorganizes emphasis and reveals additional material. It does
not silently replace the underlying claim or create four independent articles.

## 3. State behavior

- default depth is Brief on ordinary entry;
- a shareable depth state may use a fragment or noncanonical query;
- canonical URL remains the publication URL;
- focus moves to the active depth heading after user activation;
- browser Back/Forward restores meaningful depth state when implemented;
- unavailable depth remains visible only when its reason helps understanding;
- reading mode preserves the active depth; and
- static/no-script content exposes the entire canonical document in logical
  reading order.

## 4. Claim preservation

Brief may simplify language but may not strengthen the conclusion. Method and
Evidence must expose the same target, scope, and result. Artifact availability
must not imply reproducibility when data, environment, or rights are missing.

## 5. Interaction tiers

| Tier | Contract | Example role |
|---|---|---|
| L0 Editorial | text, figures, citations | Essay, Note |
| L1 Enhanced | annotated equation, code reveal, table controls | technical explanation |
| L2 Exploratory | filters, linked plots, parameter inspection | inspect evidence/assumption |
| L3 Simulation/Demo | guided executable model | flagship explanation |
| L4 Reproducible | versioned code/data/environment and regeneration | open research artifact |

One item may combine tiers. L4 is an artifact/reproduction state, not a claim
that the research is valid.

## 6. Interaction admission test

An interaction is admitted only when all answers are yes:

1. Does it expose a real assumption, parameter, relationship, sensitivity, or
   evidence state?
2. Can the visitor understand what can change and what output means?
3. Does it avoid implying stronger evidence than the source supports?
4. Is the initial state meaningful rather than decorative?
5. Can a static fallback preserve the core conclusion and evidence links?
6. Can keyboard, focus, labels, and reduced motion be implemented?
7. Can the interaction be tested and maintained by one author?

Failure means simplify, defer, or reject the interaction.

## 7. Static fallback contract

Fallback includes:

- the question the interaction addresses;
- fixed representative state(s) chosen without cherry-picking;
- axes, units, assumptions, and parameter values;
- textual interpretation;
- uncertainty/limitation statement;
- link to source artifact when available; and
- notice explaining why live interaction is unavailable when relevant.

## 8. Interaction error states

- invalid parameter: identify accepted range or domain;
- computation unavailable: preserve last trustworthy or static result;
- external artifact unavailable: show rights/outage boundary;
- unsupported device: use fallback without blocking reading;
- numerical/validation failure: state `Failed validation` rather than render a
  polished result.

## 9. Flagship constraint

The flagship must not use higher interaction tier merely for spectacle. Its
dominant interaction must make the claim, model, engineering trade-off, or
evidence structure more inspectable than a static page alone.
