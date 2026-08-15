# 13 — Assumptions, Constraints, Dependencies, Risks, and Open Questions

**Document status:** Draft v0.1

## Assumption register

| ID | Assumption | Validation / treatment |
|---|---|---|
| ASM-001 | Professionals will value progressive depth and evidence visibility. | Validate through Product Owner task walkthrough and post-launch aggregate behavior. |
| ASM-002 | One shared shell can unify AI and Engineering without weakening either. | Validate in IA and prototype review. |
| ASM-003 | Git-based authoring is acceptable to Raihan. | Validate during authoring prototype in design phase. |
| ASM-004 | Existing reports, code, spreadsheets, and CV can be adapted for publication. | Audit artifacts before content production. |
| ASM-005 | At least one existing or new topic can become a credible flagship. | Launch is blocked until selected and validated. |
| ASM-006 | Sixteen maintenance hours per week are sustainably available. | Review after three months of real publishing. |
| ASM-007 | External services can meet privacy-first requirements. | Assess each vendor before selection. |
| ASM-008 | English-first content supports target professional reach. | Editorial review and post-launch analytics. |

## Constraint register

| ID | Constraint |
|---|---|
| CON-001 | Product quality takes priority over launch speed. |
| CON-002 | Official launch must be polished; there is no public beta. |
| CON-003 | Full experience is desktop-first; mobile is simpler but functional. |
| CON-004 | Raihan is the sole site author. |
| CON-005 | Research work-in-progress is private; Coming Soon reveals limited safe status. |
| CON-006 | Client names and the proprietary estimator database cannot be published. |
| CON-007 | Analytics is privacy-first. |
| CON-008 | English is canonical at launch. |
| CON-009 | Visitor preferences are not remembered across visits. |
| CON-010 | No public comments. |
| CON-011 | Hosting is available on a Hostinger VPS KVM 4 managed through Coolify. |
| CON-012 | External services are allowed only when justified and reviewed. |

## Dependency register

| ID | Dependency | Needed by |
|---|---|---|
| DEP-001 | Final public name, domain, logo, and identity system | Brand and launch |
| DEP-002 | Flagship topic, evidence, and interactive concept | Public launch |
| DEP-003 | Selected sanitized engineering case | Public launch |
| DEP-004 | Two launch essays | Public launch |
| DEP-005 | CV/profile source review | About/CV |
| DEP-006 | Final license choice per artifact class | Publication |
| DEP-007 | Contact endpoints and form-delivery design | Collaboration Center |
| DEP-008 | Technical architecture and hosting hardening | Implementation |
| DEP-009 | Privacy-preserving analytics selection | Measurement |
| DEP-010 | Reusable visualization/simulation component strategy | Maintainability |

## Risk register

Probability and impact are qualitative at Phase 1.

| ID | Risk | Probability | Impact | Response |
|---|---|---:|---:|---|
| RSK-001 | OS theme feels generic because similar portfolios already exist. | High | High | Differentiate through two environments, evidence architecture, research lineage, and domain-specific interaction. |
| RSK-002 | No flagship exists when the platform is complete. | High | Critical | Treat flagship as a launch gate; reserve and test the content contract early. |
| RSK-003 | Visual effects harm performance or reading. | High | High | Separate core content from enhancement, lazy-load heavy elements, enforce budgets and reading mode. |
| RSK-004 | AI and Engineering feel like separate brands. | Medium | High | Shared shell, identity principles, common trust model, consistent controls. |
| RSK-005 | Internal-only validation misses unfamiliar-user problems. | High | Medium | Accepted risk; compensate with task-based PO observation, heuristics, accessibility checks, and post-launch analytics. |
| RSK-006 | Mining case study leaks client or proprietary data. | Medium | Critical | Mandatory confidentiality gate, synthetic/indexed data, metadata review, final PO approval. |
| RSK-007 | Every article becomes a costly custom software project. | High | High | Interaction tiers, reusable components, content ROI test, explicit maintenance budget. |
| RSK-008 | Single-author workload disrupts monthly publishing. | Medium | Medium | Templates, content backlog, reusable interactions, editorial workflow, cadence review. |
| RSK-009 | External services conflict with privacy-first promise. | Medium | High | Vendor assessment, minimal data flow, self-hosting preference, removal plan. |
| RSK-010 | Motion excludes or harms visitors. | Medium | High | Reduced-motion behavior, skip controls, no content dependence on non-essential motion. |
| RSK-011 | JavaScript app shell weakens indexing and link sharing. | Medium | High | Stable URLs, crawlable links, meaningful HTML, sitemap, Search Console verification. |
| RSK-012 | Open/closed license status becomes ambiguous. | Medium | High | Per-artifact license matrix and mandatory displayed rights status. |
| RSK-013 | English quality weakens credibility. | Medium | High | Professional editorial checklist and technical terminology review. |
| RSK-014 | Collaboration form attracts spam or malicious input. | High | Medium | Validation, rate limiting, abuse controls, minimal form, alternative channels. |
| RSK-015 | Coming Soon content appears as vaporware. | Medium | Medium | Honest status, no result claims, limited number, remove stale entries. |
| RSK-016 | Interactive content implies scientific validity it does not possess. | Medium | Critical | Claim calibration, static evidence, research quality gate, validation and limitations. |

## Accepted risks

- RSK-005: No external user testing before the initial release.
- A long development duration is acceptable when required for quality.
- Higher implementation effort is accepted for a non-generic full-browser
  application experience.

Acceptance of a risk does not remove monitoring or mitigation.

## Deferred open decisions

These do not require another broad discovery interview. They are assigned to
specific later gates.

| ID | Decision | Due |
|---|---|---|
| OQ-001 | Final public product/lab name and domain | Brand design |
| OQ-002 | Logo, typography, palette, sound, and visual identity | Visual design |
| OQ-003 | Flagship topic and research claim | Content production before launch |
| OQ-004 | Selected engineering case study | Content production before launch |
| OQ-005 | Exact license for each artifact class | Publishing design |
| OQ-006 | Exact privacy analytics tool | Technical design |
| OQ-007 | Contact endpoints and optional scheduling provider | Collaboration design |
| OQ-008 | Exact technology stack | Technical architecture |
| OQ-009 | Final operational SLO, RPO, and RTO | Technical architecture |
| OQ-010 | Which content receives translation first | Post-English publication planning |

