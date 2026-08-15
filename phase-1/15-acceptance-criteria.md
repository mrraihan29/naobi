# 15 — Acceptance Criteria

**Document status:** Draft v0.1

## Product and identity

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-001 | A first-time visitor can identify Raihan, AI Research, and Engineering/Mining from the Central OS without opening About. | Task observation |
| AC-002 | AI and Engineering feel distinct while shared controls keep the same meaning and relative placement. | Design review |
| AC-003 | No launch page resembles a generic About/Skills/Projects template merely restyled as an OS. | Heuristic/brand review |

## Boot, shell, and navigation

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-004 | Root entry presents a short boot sequence that can be skipped immediately. | Functional test |
| AC-005 | Direct content URLs open the requested content without a mandatory boot delay. | Route test |
| AC-006 | A visitor can switch environments from any primary destination without returning home. | Task test |
| AC-007 | Every core terminal navigation command opens the same canonical destination as its visual equivalent. | Automated/manual command matrix |
| AC-008 | Invalid terminal input provides help or suggestions and does not break the session. | Negative test |
| AC-009 | All core destinations can be reached without using the terminal. | Navigation audit |
| AC-010 | Search finds content by title, summary, type, domain, and tags. | Search fixture test |

## Content and reading

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-011 | Each launch content item validates against its content-type schema. | Automated content validation |
| AC-012 | Each technical item includes an accessible summary and a path to deeper technical evidence. | Editorial inspection |
| AC-013 | Reading mode reduces OS chrome while retaining orientation, navigation, and exit. | UX test |
| AC-014 | Code, equations, diagrams, citations, and tables remain legible at supported viewport sizes and zoom. | Visual/accessibility test |
| AC-015 | Every publication shows status, version/date, author, domain, and license/rights status. | Content audit |
| AC-016 | Superseded or corrected material exposes the current successor and changelog. | Revision fixture test |
| AC-017 | Coming Soon content contains no result claim and displays accurate status. | Editorial gate |

## Research and interactivity

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-018 | The launch flagship defines its question/objective, method, evidence, limitations, and supporting artifacts. | Research quality review |
| AC-019 | The flagship interaction is guided and materially explains a parameter, assumption, comparison, or evidence relationship. | Content/UX review |
| AC-020 | Core conclusions remain readable when optional interactive code fails or is disabled. | Failure-injection test |
| AC-021 | Research claims distinguish observation, estimate, inference, interpretation, speculation, and limitation as applicable. | Research audit |
| AC-022 | Neuroscience-inspired content labels biological evidence, computational hypothesis, engineering abstraction, and analogy correctly. | Domain review |
| AC-023 | Negative results use calibrated terms such as not detected, equivalent, inconclusive, or failed validation. | Editorial/research review |

## Engineering confidentiality

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-024 | Launch contains at least one engineering case study that passes the confidentiality checklist. | Signed content checklist |
| AC-025 | No public artifact contains a client name or proprietary estimator database content. | Manual and metadata scan |
| AC-026 | Sanitization does not create a misleading account of Raihan's role, scope, or result. | Product Owner approval |

## Collaboration

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-027 | Collaboration Center is reachable from the persistent shell and relevant content CTAs. | Navigation test |
| AC-028 | Visitors can select from all enabled contact channels. | Functional test |
| AC-029 | Structured inquiry validates required fields on client and server and exposes accessible errors. | Positive/negative/security tests |
| AC-030 | A successful submission gives confirmation without exposing submitted data to analytics. | Integration/privacy test |
| AC-031 | Delivery failure provides a safe retry or alternative channel. | Failure-injection test |

## Accessibility and responsive behavior

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-032 | All public launch pages meet the agreed WCAG 2.2 AA verification checklist with no unresolved critical issue. | Automated plus manual audit |
| AC-033 | All core tasks can be completed by keyboard with visible and predictable focus. | Keyboard test |
| AC-034 | Reduced-motion preference removes or simplifies non-essential large motion without removing content or function. | OS-setting test |
| AC-035 | Charts, simulations, and diagrams provide sufficient textual/semantic alternatives for core meaning. | Accessibility inspection |
| AC-036 | Mobile supports gateway selection, search, reading, evidence links, and collaboration without desktop window dependence. | Responsive task test |

## Performance, reliability, and security

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-037 | Field or representative pre-launch tests meet LCP ≤2.5 s, INP ≤200 ms, and CLS ≤0.1 targets for primary routes, or a documented exception is approved. | Performance report |
| AC-038 | Optional simulations load on demand and do not block core article rendering. | Network/performance test |
| AC-039 | Production and staging are isolated and deployment rollback is demonstrated. | Operations test |
| AC-040 | Backup restoration succeeds using documented procedure. | Recovery drill |
| AC-041 | Collaboration endpoint passes input-validation, abuse-control, error-handling, and applicable CSRF/origin tests. | Security test |
| AC-042 | Security headers and third-party allowlist are reviewed before launch. | Header/vendor audit |
| AC-043 | No secret or confidential artifact is present in public client assets, source, logs, or downloads. | Secret/content scan |

## SEO, privacy, language, and licensing

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-044 | Every public content item has a crawlable canonical URL and crawlable internal links. | Crawl audit |
| AC-045 | Titles, descriptions, canonical metadata, sitemap, robots, and structured data validate for launch pages. | SEO validation report |
| AC-046 | English is correctly declared and future translation architecture does not expose nonexistent pages. | Language/route inspection |
| AC-047 | Analytics captures only approved aggregate events and no form contents or visitor profiles. | Network/data-flow audit |
| AC-048 | Privacy notice matches actual analytics, form, log, and external-service behavior. | Privacy audit |
| AC-049 | Every artifact displays the correct open or closed status and applicable license/rights notice. | License inventory audit |

## Launch content and governance

| ID | Acceptance criterion | Evidence |
|---|---|---|
| AC-050 | Launch contains the Central OS, both environments, About/CV, Collaboration Center, one flagship, one engineering case, and two essays. | Launch inventory |
| AC-051 | Raihan can publish a representative content update through documented version-controlled workflow without direct production database editing. | Authoring rehearsal |
| AC-052 | All Must requirements have passed or have an explicit Product Owner exception that does not violate a mandatory safety/confidentiality gate. | Traceability review |
| AC-053 | Repeated regression and visual QC cycles complete with no open launch-blocking defect. | Test summary |
| AC-054 | Raihan gives explicit final release approval after production smoke testing. | Signed launch record |

