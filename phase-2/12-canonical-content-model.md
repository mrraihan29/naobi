# 12 — Canonical Content Model

**Version:** 1.0  
**Status:** Accepted technology-neutral contract  
**Gate:** 2.4 — Publishing and Flagship Design

## 1. Model rules

- one canonical source produces one canonical page;
- common metadata is shared, while type-specific evidence remains explicit;
- absent optional information stays absent;
- declared relationships drive lineage and related work;
- tags never imply causality or supersession;
- published content cannot depend on hidden UI state for identity or meaning;
- implementation syntax is deferred to Gate 2.6.

## 2. Required common fields

| Field | Contract |
|---|---|
| `id` | immutable unique identifier |
| `type` | research, experiment, project, engineering-case, essay, note, coming-soon |
| `title` | precise public title |
| `slug` | stable route segment |
| `summary` | accessible orientation without unsupported claim |
| `domains` | one or more of ai, engineering, general |
| `topics` | controlled and free tags with validation |
| `status` | lifecycle/publication status |
| `language` | canonical language; English at launch |
| `author` | Raihan; contributor acknowledgements separate |
| `createdAt` | source creation date |
| `publishedAt` | required only when published |
| `modifiedAt` | last material source change |
| `version` | public content version |
| `rights` | prose/media rights statement |
| `visibility` | private, staging, public, archived |
| `canonicalPath` | stable public URL when publishable |
| `confidentialityReview` | not-applicable, pending, passed, blocked |

## 3. Conditional shared fields

- technical abstract;
- reading time;
- claim/evidence status;
- interaction tier and static fallback;
- featured and flagship eligibility;
- translation status and translated paths;
- citations and bibliography;
- figures, tables, equations, code, and diagrams;
- artifacts and their versions;
- changelog;
- limitations;
- collaboration route;
- search summary and search exclusions.

## 4. Artifact contract

Each artifact declares:

- immutable artifact ID;
- label and artifact type;
- open, closed, embargoed, or unavailable state;
- URL or internal asset reference when available;
- version or commit/release identifier;
- license or rights notice;
- checksum when useful;
- access/reproduction instructions;
- confidentiality review status; and
- reason when closed or unavailable.

An artifact link cannot be published when its rights or confidentiality state
is unknown.

## 5. Relationship model

Allowed declared relationships include:

- `containsExperiment` / `partOfResearch`;
- `testsHypothesisFrom`;
- `implementsResearch`;
- `explains` / `explainedBy`;
- `usesMethodFrom`;
- `references`;
- `followUpTo` / `followedBy`;
- `supersedes` / `supersededBy`;
- `sharesArtifactWith`; and
- `related` with a required human-readable rationale.

Reciprocal relationships must validate. Cycles are prohibited for contains,
follow-up chronology, and supersession. Tags alone do not create edges.

## 6. Public status vocabulary

| Status | Meaning |
|---|---|
| Published | current public work |
| Revised | public work changed materially; changelog required |
| Superseded | retained but replaced by a named successor |
| Archived | retained for record; no longer maintained |
| Planned | safe topic-level Coming Soon intention |
| In preparation | work exists but no result claim is public |
| In validation | validation ongoing; no result claim is public |

Private workflow states never leak into public metadata unless deliberately
mapped to a safe Coming Soon status.

## 7. Type-specific extensions

### Research

Question, target/objective, target regime, contrast, outcomes, dependency map,
decision criterion, method, validation, evidence, uncertainty, claim chain,
limitations, reproduction, and artifacts.

### Experiment

Hypothesis, parent context, setup, variables, observations, outcome state,
failure mode, lesson, next question, and artifacts.

### Project

Problem, requirements, design/implementation narrative, output, validation,
lessons, availability, and artifacts.

### Engineering Case Study

Sanitized context, role, scope/battery limits, stage/class basis, method, source
register, assumptions, exclusions, calculation/derivation disclosure,
cross-check, uncertainty/contingency basis, transformation log, limitations,
and safe artifacts.

### Essay

Premise, argument/narrative, sources for factual claims, conclusion, and
optional references/artifacts.

### Note

Context, dated observation/reflection, explicit informal status, and optional
links.

### Coming Soon

Safe intent, domain, intended type, honest public status, reviewed date, and
prefilled discussion route. Results/evidence fields are prohibited.

## 8. Validation severity

- **Error:** blocks staging or publication, depending on scope.
- **Warning:** requires explicit review but may be accepted.
- **Information:** improvement or optional field suggestion.

Production blockers include missing identity/status/rights, invalid canonical
path, broken required relationships, confidentiality pending, absent required
type evidence, unsupported result claim, or artifact with unknown rights.

## 9. Indexing projection

The content model must generate a search-safe projection containing title,
summary, type, domain, topics, public status, dates, declared relationships,
and artifact availability. Private fields, raw collaboration data, confidential
notes, and unpublished claims never enter the public search index.
