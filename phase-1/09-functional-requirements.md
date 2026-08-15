# 09 — Functional Requirements

**Document status:** Draft v0.1

Priority uses Must, Should, Could, and Won't for the first public release.

## Central OS and environments

| ID | Requirement | Priority |
|---|---|---|
| FR-001 | The system shall present a concise Central OS introduction. | Must |
| FR-002 | The system shall present visible gateways to AI Research and Engineering. | Must |
| FR-003 | The system shall maintain a shared shell across both environments. | Must |
| FR-004 | Visitors shall switch environments without returning to the root page. | Must |
| FR-005 | Each environment shall have a distinct but related visual state. | Must |
| FR-006 | The system shall expose About/CV, Journal, Search, and Collaboration as shared applications. | Must |

## Boot and system interaction

| ID | Requirement | Priority |
|---|---|---|
| FR-007 | A short boot sequence shall introduce the product on an appropriate fresh root entry. | Must |
| FR-008 | The boot sequence shall be skippable immediately. | Must |
| FR-009 | Direct content links shall not force the boot sequence before content. | Must |
| FR-010 | The terminal shall execute real navigation, search, environment, theme, reading, and collaboration commands. | Must |
| FR-011 | Terminal help, examples, autocomplete or discoverable suggestions, and useful error recovery shall be available. | Must |
| FR-012 | Every terminal navigation action shall have a visual equivalent. | Must |
| FR-013 | Keyboard focus shall move predictably when terminal, dialogs, menus, or windows open and close. | Must |

## Navigation and discovery

| ID | Requirement | Priority |
|---|---|---|
| FR-014 | Every durable page shall have a stable canonical URL. | Must |
| FR-015 | Core destinations shall be reachable through crawlable visual links. | Must |
| FR-016 | Global search shall search title, summary, domain, type, tags, and declared relationships. | Must |
| FR-017 | Visitors shall filter/browse by domain, content type, topic, status, and date where applicable. | Must |
| FR-018 | Content pages shall show related work using declared metadata. | Should |
| FR-019 | The system shall expose a Research Ledger when meaningful lineage data exists. | Should |
| FR-020 | A research graph shall only be shown when it adds useful relationship understanding. | Could |

## Content presentation

| ID | Requirement | Priority |
|---|---|---|
| FR-021 | The system shall support Research, Experiment, Project, Engineering Case Study, Essay, Note, and Coming Soon types. | Must |
| FR-022 | Technical content shall support accessible summary and progressive technical depth. | Must |
| FR-023 | Content shall support equations, code, citations, diagrams, figures, tables, and callouts. | Must |
| FR-024 | Reading mode shall reduce system chrome and preserve orientation and exit controls. | Must |
| FR-025 | Content shall show status, dates, version, author, contributors, domain, and license. | Must |
| FR-026 | Content shall link to available reports, repositories, data, and reproduction material. | Must |
| FR-027 | Superseded content shall identify its successor while remaining accessible. | Must |
| FR-028 | Coming Soon entries shall state honest status and make no result claim. | Must |
| FR-029 | Journal items shall appear contextually in relevant environments while retaining one canonical URL. | Must |
| FR-030 | Published pages shall provide shareable metadata and links. | Must |

## Interaction and evidence

| ID | Requirement | Priority |
|---|---|---|
| FR-031 | The launch shall include at least one guided interactive flagship experience. | Must |
| FR-032 | Interactive elements shall state what can be changed and what the output means. | Must |
| FR-033 | Core conclusions shall remain available when an optional interaction cannot run. | Must |
| FR-034 | Research interactions shall expose assumptions, parameters, or evidence relevant to the claim. | Must |
| FR-035 | The system shall support reusable L1–L4 interaction components. | Should |
| FR-036 | Interactive outputs shall not silently imply stronger evidence than the underlying research. | Must |

## Authoring and publication

| ID | Requirement | Priority |
|---|---|---|
| FR-037 | Raihan shall author content through version-controlled text files with structured metadata. | Must |
| FR-038 | Templates shall exist for every content type. | Must |
| FR-039 | Required metadata, internal links, external links, and license fields shall be validated before publication. | Must |
| FR-040 | A private staging preview shall show full OS, reading, and mobile presentations. | Must |
| FR-041 | Publication shall require explicit Raihan approval. | Must |
| FR-042 | Publishing shall update search index, sitemap, feeds, and related-content data. | Must |
| FR-043 | The system shall support one primary author and contributor acknowledgements without multi-author accounts. | Must |

## Collaboration

| ID | Requirement | Priority |
|---|---|---|
| FR-044 | Collaboration Center shall offer multiple enabled contact routes. | Must |
| FR-045 | A structured inquiry shall request domain, objective, scope context, timeframe, contact details, and message. | Must |
| FR-046 | The form shall minimize personal data and prohibit unnecessary sensitive data. | Must |
| FR-047 | The form shall validate input on client and server and provide accessible errors. | Must |
| FR-048 | Submission shall provide success confirmation and an alternative when delivery fails. | Must |
| FR-049 | Public comments shall not be implemented. | Won't |
| FR-050 | Open-source discussion shall route to the relevant repository or external channel. | Must |

## Language, licensing, and privacy

| ID | Requirement | Priority |
|---|---|---|
| FR-051 | English shall be the canonical launch language. | Must |
| FR-052 | Content architecture shall support separate future translated URLs and translation status. | Must |
| FR-053 | The system shall not claim a translation exists until that page is published. | Must |
| FR-054 | Every artifact shall display open/closed status and the applicable license or rights notice. | Must |
| FR-055 | Code, prose, data, and media shall support different licenses. | Must |
| FR-056 | Privacy-first aggregate analytics shall be supported without visitor profiles. | Must |
| FR-057 | Visitor accounts and persistent preference history shall not be implemented. | Won't |

## Responsive behavior

| ID | Requirement | Priority |
|---|---|---|
| FR-058 | Desktop shall provide the full intended OS experience. | Must |
| FR-059 | Mobile shall support discovery, search, reading, evidence access, and collaboration. | Must |
| FR-060 | Mobile may simplify windows, animation, terminal, and simulations without removing core content. | Must |

