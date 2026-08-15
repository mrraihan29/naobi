# 31 — Technical Architecture and Verification Interview

**Version:** 1.0  
**Status:** Complete — Product Owner constraints recorded  
**Gate:** 2.6 — Architecture and Verification Design  
**Product Owner:** Raihan  
**Facilitator:** Rei

## 1. Purpose

This interview resolves the product and operating constraints that materially
change the implementation architecture. It precedes framework selection so the
stack is selected against requirements rather than preference or popularity.

Gate 2.6 will use the mandatory evaluation protocol in
`evidence/technical-architecture-evaluation-standard.md`. Current versions,
licenses, capabilities, maintenance status, and material security constraints
will be verified from primary sources after this interview is answered.

## 2. Already-fixed constraints

The following decisions are not being reopened:

- desktop-first full OS experience with a simpler but complete mobile path;
- meaningful HTML, canonical URLs, crawlable links, and direct-link reading;
- English canonical at launch with future translated URLs;
- one primary technical author and Git-versioned structured content;
- no visitor accounts, comments, or persistent preference history;
- privacy-first aggregate analytics with no advertising or behavioral profile;
- accessibility target WCAG 2.2 AA;
- optional effects and simulations may not block core reading;
- staging and production are separate, with repeatable rollback;
- Hostinger KVM 4 plus Coolify is available but not automatically selected;
- one meaningful content update per month must fit the maintenance budget; and
- minimum sufficient architecture is preferred over unnecessary services.

## 3. Decision sequence

1. Confirm workload, authoring, and execution boundaries through this record.
2. Research current candidate technologies using official primary sources.
3. Apply veto criteria, then a weighted comparison matrix.
4. Produce system-context, container, request, data, and trust-boundary views.
5. Specify build, test, preview, deploy, rollback, backup, and recovery paths.
6. Record costly-to-reverse decisions in ADRs.
7. Complete a Product Owner architecture walkthrough and Gate 2.6 sign-off.

## 4. Questions and design-lead recommendations

### 1. Product workload envelope

Please estimate, without false precision:

- public items at first launch;
- public items after two years;
- ordinary monthly visits and a plausible traffic-spike case;
- largest normal downloadable artifact; and
- whether public datasets or model weights will be hosted directly.

**Recommendation:** Design initially for a read-heavy professional publication
with hundreds—not millions—of content records and horizontally cacheable public
pages. Large datasets, releases, and model weights should normally use an
appropriate artifact host rather than the application container. Capacity can
then be validated rather than guessed.

### 2. Implementation language and framework constraints

Do you have a hard requirement, strong preference, or explicit rejection among
TypeScript/JavaScript ecosystems and component frameworks?

**Recommendation:** Use strict TypeScript for the web application. Evaluate at
least one content-first static/hybrid framework and two credible full-stack
alternatives; do not select a framework until rendering, content, interaction,
deployment, and maintenance requirements are scored. Candidate names in the
research matrix are provisional until their current releases are verified.

### 3. Repository and source visibility

Should the application repository be public from the beginning, private until
launch, or permanently private while selected research/code repositories stay
public?

**Recommendation:** Keep the application repository private through design and
pre-launch hardening. Publish research artifacts in their own deliberately
licensed repositories. Decide later whether the site source itself provides
enough public value to justify exposure and maintenance obligations.

### 4. Authoring workflow

Are you comfortable authoring locally in Markdown/MDX-like files, reviewing a
preview, and publishing through Git, or do you require a browser editor?

**Recommendation:** Use repository-local structured text plus validated
frontmatter/content collections as the canonical source. Do not add a CMS at
launch. A local authoring command, templates, validation, and private preview
should provide the necessary ergonomics without a database or admin surface.

### 5. Interactive computation boundary

What kinds of flagship interaction do you realistically expect: parameterized
charts, moderate simulations, notebook-derived demonstrations, model inference,
or heavy/private computation?

**Recommendation:** Default to client-side modules, Web Workers, and static
precomputed artifacts. Consider WebAssembly only for a measured need. Add a
server compute service only when a specific approved flagship cannot meet its
scientific, confidentiality, or performance requirements in the browser.

### 6. Search scale and behavior

Will search remain public-content discovery, or must it eventually search large
datasets, source code, PDFs, or private material?

**Recommendation:** Launch with a build-generated public search index covering
the approved projection from Document 12. Keep indexing deterministic and
versioned. Do not deploy a database or dedicated search service until corpus
size, query quality, or operational evidence demonstrates that the static
approach fails.

### 7. Collaboration delivery

Where should a structured inquiry arrive, and do you need a searchable inquiry
dashboard/history inside the website?

**Recommendation:** Validate and rate-limit a minimal server endpoint, deliver
the inquiry through a transactional email provider, and avoid a website-side
message database at launch. Provide direct email and selected professional
channels as failure alternatives. Provider selection requires a privacy,
deliverability, retention, cost, and outage assessment.

### 8. Analytics posture

Choose the desired launch posture: no analytics, privacy-focused managed
analytics, or self-hosted aggregate analytics.

**Recommendation:** Use aggregate, cookieless analytics only if it produces
decisions Raihan will act on. Compare a self-hosted and managed option against
VPS load, database/backup burden, data residence, retention, and deletion.
Avoid silently adding an analytics database merely because the VPS can host it.

### 9. Git, CI, and deployment control

Confirm whether GitHub is the intended repository/CI platform and whether
production deployment should require manual Product Owner approval.

**Recommendation:** Pull-request checks create deployable artifacts; a private
staging environment receives approved candidates; production promotion is
explicit and reversible. Coolify may deploy immutable container images or a
reproducible source build, but production must never build from an unreviewed
working branch.

### 10. VPS and infrastructure facts

Please provide or confirm:

- KVM 4 vCPU, memory, storage, bandwidth, operating system, and region;
- whether other production workloads share the VPS;
- current Coolify version and backup arrangement;
- DNS/CDN provider, if already chosen; and
- whether off-server backup storage already exists.

**Recommendation:** Treat unverified server capacity and backup behavior as
open evidence, not assumptions. Prefer one-node simplicity initially, but keep
deployable artifacts, content, secrets, and backups portable away from the VPS.

### 11. Operational objectives

Approve or revise the proposed initial objectives: 99.5% monthly public
availability, operational-data RPO of 24 hours or better, and RTO of 8 hours or
better.

**Recommendation:** Accept these as launch objectives for a personal
professional publication without contractual SLA. Static/public content should
usually recover faster; the wider values define the documented worst-case
operational commitment.

### 12. Data retention and external-service boundaries

How long may collaboration inquiries and raw/aggregate analytics be retained?
Are there data regions or service providers you will not accept?

**Recommendation:** Do not persist form bodies in application logs or
analytics. Define separate, short, purpose-based retention for operational logs
and analytics, and an explicit mailbox retention/deletion practice for
inquiries. No third party is approved until its exact data flow is documented.

### 13. Verification rigor

**Recommendation:** Make the following launch-blocking where applicable:

- unit and integration tests for stable logic;
- schema, relationship, rights, confidentiality, and link validation;
- cross-browser end-to-end keyboard and critical-flow tests;
- automated accessibility scanning plus manual screen-reader/focus review;
- visual regression at approved responsive bands and signal profiles;
- performance-budget and Core Web Vitals laboratory checks;
- security headers, dependency/container, secret, and endpoint abuse tests;
- SEO metadata, sitemap, canonical, structured-data, and crawl checks;
- backup restoration and rollback exercises; and
- HF-01 through HF-12 browser evidence before feature expansion.

Approve this baseline, or identify any category you do not want to operate.

### 14. Architecture preference boundary

Are there technologies or operating models you explicitly want to learn, avoid,
or keep available for future research even if they are not selected at launch?

**Recommendation:** Record preferences, but treat them as weighted criteria
rather than vetoes unless they affect security, licensing, supportability,
budget, or Raihan's sustainable maintenance capacity.

## 5. Provisional veto criteria

A candidate architecture is rejected if it:

- prevents meaningful server-rendered or pre-rendered public HTML;
- makes canonical content depend on a production database editor;
- cannot provide stable URLs and crawlable navigation;
- requires visitor identity or cross-site tracking;
- cannot isolate optional interaction failures from core content;
- makes staging/production separation or rollback impractical;
- prevents export of content and deployable configuration;
- cannot meet the accessibility, security, or confidentiality gates;
- exceeds the one-author maintenance budget without a demonstrated need; or
- introduces a service without satisfying the seven-part anti-overengineering
  test in the Gate 2.6 evaluation standard.

## 6. Research matrix to produce after answers

The research will compare complete architecture candidates—not isolated
framework popularity—against:

- rendering, routing, and progressive enhancement;
- content schema and publishing validation;
- interactive-module execution;
- public search and indexing lifecycle;
- collaboration delivery;
- privacy analytics;
- accessibility and SEO;
- performance and caching;
- security and dependency surface;
- local development and authoring experience;
- Coolify/VPS deployment and rollback;
- observability, backup, recovery, and upgrade burden;
- direct and operational cost;
- portability and vendor lock-in; and
- roadmap fit without speculative infrastructure.

## 7. Product Owner response record

| # | Accepted constraint |
|---:|---|
| 1 | Approximately 50 public items at launch and 1,000 monthly visits as the initial planning target. Large artifacts, datasets, and model weights are externally hosted and linked. |
| 2 | Raihan is strongest in Django, TypeScript, and JavaScript. Strict TypeScript is preferred; the framework and libraries must be selected objectively. Custom components are acceptable. |
| 3 | The website repository remains private. Research repositories are independently classified and opened only by Raihan. |
| 4 | Canonical content is authored without a CMS using Markdown/MDX and Git. A GitHub content change must be able to publish automatically after validation. |
| 5 | Browser interactions include charts, code, and moderate simulations. Heavy computation is excluded from the launch architecture. |
| 6 | Search covers public website content only. |
| 7 | Collaboration inquiries are delivered by transactional email; no website-side inquiry dashboard is required. |
| 8 | Managed and self-hosted privacy-first analytics must be compared before selection. |
| 9 | GitHub is the repository and CI/CD platform. Production does not require a second manual approval after the governed merge path. |
| 10 | Hostinger KVM 4 in Indonesia and the latest stable Coolify release are the infrastructure baseline to verify. |
| 11 | Initial objectives are 99.5% monthly availability, RPO no worse than 24 hours, and RTO no worse than 8 hours. |
| 12 | Inquiry, log, analytics, and backup retention follow a documented purpose-limited best-practice policy. |
| 13 | The complete proposed verification baseline is accepted. |
| 14 | Future-facing technology is desirable when it measurably improves the product without making an experimental dependency launch-critical. |

## 8. Interpretation and resulting bounds

- The workload is small and read-heavy. It does not justify a production
  database, cache cluster, queue, dedicated search server, or microservices.
- The application must be stateless except for operational configuration and
  externally delivered collaboration inquiries.
- A merge to the protected production branch is the human authorization event;
  CI may promote a previously verified immutable image automatically.
- The launch design must preserve future options for browser workers,
  WebAssembly, an external compute service, a CMS, or a larger search service,
  but none is introduced before measured need.
- The infrastructure comparison and external-service selection are documented
  in Documents 32–36; this interview does not approve their recommendations.

## 9. Approval record

**Responses:** Complete  
**Recommendation changes:** No conflict with the design-lead baseline  
**Discovery constraints:** Locked for Gate 2.6 evaluation  
**Architecture decision status:** Pending Product Owner review of Documents 32–38  
**Date:** 2026-08-15
