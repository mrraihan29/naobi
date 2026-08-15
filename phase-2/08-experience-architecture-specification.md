# 08 — Experience Architecture Specification

**Version:** 1.0  
**Status:** Accepted  
**Gate:** 2.3 — Experience Architecture  
**Inputs:** Phase 1 IA/requirements, Interview 2C, ADR-0003, ADR-0004  
**Product Owner:** Raihan  
**Design lead:** Rei

## 1. Architecture principles

1. Central OS is a useful universal destination, not a splash screen.
2. AI Research and Engineering have equal gateway priority.
3. One chassis and command grammar persist across all environments.
4. Every durable destination has a stable, crawlable URL.
5. Direct links deliver content before spectacle.
6. Terminal accelerates access but never unlocks exclusive core content.
7. Search, Journal, About, Collaboration, Licenses, and System are shared.
8. Environment differences come from instruments and content structures, not
   from separate navigation rules.
9. Coming Soon is discoverable but cannot imply completed work.
10. Evidence Depth Rail appears only where all four levels are truthful.

## 2. Top-level information architecture

```text
Central OS /
├── AI Research /ai
│   ├── Research /ai/research
│   │   └── Publication /ai/research/{slug}
│   ├── Experiments /ai/experiments
│   │   └── Experiment /ai/experiments/{slug}
│   └── Projects /ai/projects
│       └── Project /ai/projects/{slug}
├── Engineering /engineering
│   ├── Case Studies /engineering/case-studies
│   │   └── Case /engineering/case-studies/{slug}
│   ├── Projects /engineering/projects
│   │   └── Project /engineering/projects/{slug}
│   └── Knowledge /engineering/knowledge
├── Shared applications
│   ├── Journal /journal
│   │   └── Essay or Note /journal/{slug}
│   ├── Search /search
│   ├── Research Ledger /ledger [conditional]
│   ├── Operator Record /about
│   ├── Collaboration Center /collaborate
│   ├── Licenses /licenses
│   ├── Privacy /privacy
│   └── System Information /system
└── Coming Soon entries
    └── /coming-soon/{slug} [shared canonical; contextual environment listing]
```

Research Ledger is exposed only when declared relationships provide useful
lineage. The architecture must not fabricate a graph from shared tags.

## 3. Central OS composition

The first desktop viewport contains:

- persistent System Rail;
- concise Operator/System identification sufficient to understand Raihan, AI
  Research, and Engineering without opening About;
- equal AI Research and Engineering gateways;
- a secondary cross-world Recent Operations rail;
- visible Command/Search entry;
- visible signal-profile control; and
- visible Collaboration entry.

No flagship is assigned until real content passes its publication gate. The
Central OS must show an honest unassigned state rather than placeholder claims.

## 4. Environment overview contract

Both Signal Lab and Operations Ledger use the same structure:

1. environment identity and current status;
2. one featured completed work when available;
3. primary content directories;
4. recent publications and revisions;
5. contextual Journal entries;
6. Coming Soon entries with explicit status;
7. environment-specific evidence vocabulary; and
8. collaboration route.

### Signal Lab instruments

- research questions and publication status;
- experiment relationships;
- evaluation/evidence summaries;
- uncertainty and limitation indicators; and
- repository or reproduction status.

### Operations Ledger instruments

- case/project type and scope;
- estimate or study basis;
- methodology and maturity;
- source/assumption/confidentiality status; and
- sanitized artifact availability.

The relative location of shared controls does not change.

## 5. Shared Journal model

Journal has one canonical index and one canonical URL per entry. Domain tags
allow entries to appear contextually inside either environment without content
duplication. Personal and philosophical writing remains accessible from Central
OS and the Journal index.

Notes are a Journal format, not a top-level application.

## 6. Direct-entry contract

Search, social, GitHub, and shared-link visitors receive:

- immediate canonical content;
- a reduced System Rail identifying Raihan's OS and current environment;
- content type, status, date/version, license, and reading orientation;
- applicable Evidence Depth Rail;
- related work and artifact routes;
- Collaboration access; and
- `Open Central OS` as an optional transition.

Full boot does not run. Direct-entry content must remain complete if the visitor
never enters Central OS.

## 7. System Map

System Map combines an operational network with directory clarity:

- primary nodes represent Central OS, the two environments, and shared apps;
- secondary nodes represent real content directories or declared relationships;
- lines express a named relationship, never decoration;
- selecting a node updates an adjacent directory/details region;
- every node is duplicated in a linear, keyboard-operable directory; and
- the map is an overlay or dedicated view, not the only navigation model.

On reduced-capability layouts, the directory is primary and the network view
may be omitted without information loss.

## 8. Unified search

Search indexes:

- title and summary;
- domain and content type;
- tags/topics;
- publication status;
- dates and versions;
- declared relationships; and
- available artifacts.

Filters include environment, content type, topic, status, date, and evidence
depth where meaningful. Coming Soon is included and carries an explicit
`COMING SOON` status before the title and summary. It is excluded from result
and evidence filters that imply completed findings.

Search query content is not retained in visitor profiles. Analytics, if later
enabled, must follow the privacy specification and avoid sensitive free-text
retention.

## 9. Environment switching

Switching environments:

1. preserves the shared chassis and signal profile for the current session;
2. opens the destination overview;
3. changes environment instruments and vocabulary;
4. does not invent an analogous destination;
5. exposes `Return to previous location`; and
6. preserves browser history and canonical URLs.

Return is a session navigation action, not persistent preference history.

## 10. Evidence Depth Rail applicability

| Content type | Depth model |
|---|---|
| Research | Brief, Method, Evidence, Artifact |
| Engineering Case Study | Brief, Method, Evidence, Artifact |
| Experiment | Structured article; may link to parent Research depth but does not automatically receive all four states |
| Project | Structured project presentation; depth rail only if later approved by evidence review |
| Blog Essay | Reading flow; optional References and Artifacts |
| Note | Reading flow |
| Coming Soon | Orientation only; no Evidence state |
| Operator/Collaboration/System | Application-specific flow |

Depth selection changes the composition of one canonical page and must not
create duplicate indexable URLs. Shareable anchors or query state may be added
if they preserve one canonical document.

## 11. Reading mode

Reading mode reduces nonessential chassis regions while preserving:

- identity and current content;
- progress and section navigation;
- Evidence Depth Rail when applicable;
- citation, footnote, and artifact access;
- exit control; and
- collaboration/related work at the end of the document.

Reading mode is available visually and through `read on|off`.

## 12. Coming Soon

Each entry may expose only:

- title;
- domain;
- content-type intention;
- safe topic-level description;
- truthful status such as Planned, In preparation, or In validation;
- last reviewed date; and
- route to general Collaboration.

No result, progress percentage, promised deadline, confidential novelty, or
unsupported technical claim is permitted.

### Interest route

`Discuss this topic` opens Collaboration with the entry title preselected. The
initial release does not build a separate email-subscription or interest
database.

## 13. Collaboration Center

Primary routes:

1. Send project brief;
2. Email directly;
3. Open professional profile; and
4. Open the relevant repository discussion route when the context is open
   source.

Structured form fields:

- name and email;
- organization, optional;
- domain/project type;
- objective and concise scope context;
- expected timeframe;
- message;
- confidentiality note and warning not to submit protected information; and
- privacy acknowledgement.

No account or file upload is required at launch. Server-side validation, abuse
control, delivery recovery, and accessible errors remain mandatory.

## 14. Keyboard architecture

`Ctrl/Cmd+K` is the only product-specific global shortcut. It opens the unified
Command/Search interface. Once focus is inside that interface, visitors may
type commands or choose visible results and actions.

Tab, Shift+Tab, Enter, arrow keys, and Escape retain their conventional
accessibility behavior. No unmodified global `/`, `?`, number, or letter
shortcut is used.

## 15. Architecture acceptance conditions

- a visitor can identify both worlds and enter either from the first viewport;
- Central OS remains useful without gateway selection;
- direct links load content without boot;
- all core routes have canonical URLs and crawlable links;
- terminal and visible controls resolve to the same destinations/actions;
- search distinguishes Coming Soon from published work;
- environment switching never fabricates content equivalence;
- Evidence Depth Rail is not applied to unsupported content;
- Collaboration is reachable from shell and relevant pages; and
- the architecture remains operable without the network visualization.
