# 12 — SEO, Accessibility, Privacy, Analytics, and Publishing

**Document status:** Draft v0.1

## SEO and discoverability

### Requirements

- Every publication, case study, project, essay, note, profile, and major index
  has a stable URL.
- OS window or command state must not be the sole identifier for content.
- Links use crawlable anchor elements with real destinations.
- JavaScript navigation updates actual URL/history correctly.
- Public content returns meaningful HTML and metadata without requiring a
  crawler to reproduce a complete desktop session.
- Page titles, descriptions, canonical URLs, Open Graph metadata, and social
  images are content-specific.
- XML sitemap and feed update on publication.
- Robots rules distinguish public content from staging/private areas.
- Removed content returns an appropriate status; moved content redirects.
- Search Console and equivalent validation are part of launch QC.

Google advises crawlable URLs, real links with href destinations, and careful
JavaScript app-shell behavior:

- [Google URL structure guidance](https://developers.google.com/search/docs/crawling-indexing/url-structure)
- [Google crawlable link guidance](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)

### Structured data

Use accurate structured data only where it matches visible content:

- Person and ProfilePage for Raihan/About;
- Article or suitable creative-work types for essays and research exposition;
- Dataset for published datasets;
- SoftwareSourceCode or SoftwareApplication where applicable;
- BreadcrumbList for navigational context.

Structured data must be validated and must not exaggerate credentials, review
status, authorship, or publication type.

Reference:
[Google ProfilePage structured data](https://developers.google.com/search/docs/appearance/structured-data/profile-page).

### Multilingual readiness

- English is canonical at launch.
- Future translations use separate URLs.
- Alternate language pages use reciprocal language annotations when published.
- Page language is declared in document markup.
- The language selector never links to a nonexistent translation.

Google recommends separate URLs and hreflang for language versions:
[Google multilingual-site guidance](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites).

## Accessibility policy

Target WCAG 2.2 Level AA across desktop and responsive variants. Apply useful
AAA guidance, including reduced motion, where it materially protects users and
is feasible.

### Mandatory review areas

- semantic page landmarks and heading order;
- keyboard operation and visible focus;
- predictable focus movement in windows/dialogs;
- skip links and efficient route to main content;
- consistent navigation and control identification;
- contrast, text resizing, zoom, reflow, and target size;
- alternatives for drag;
- accessible names and states;
- chart/table/diagram descriptions;
- equation and code readability;
- accessible validation, error, and success messages;
- no essential information conveyed by color alone;
- no harmful flashes;
- pause/stop/skip for non-essential movement;
- OS-level reduced-motion support;
- usable direct-link and reading-mode pages.

Reference:
[WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Privacy policy requirements

### Principles

- collect the minimum;
- explain actual behavior plainly;
- avoid visitor identity profiles;
- avoid advertising and cross-site tracking;
- prefer first-party or self-hosted processing;
- retain inquiry data only as long as needed;
- provide a deletion/contact route;
- do not log form contents in analytics or error telemetry;
- never send confidential inquiry text to unrelated analytics services.

### External-service assessment

Before enabling any external service, document:

- purpose;
- fields/data sent;
- cookies or local storage;
- processing/storage region if relevant;
- retention and deletion;
- subprocessors;
- exportability and lock-in;
- failure behavior;
- privacy-policy disclosure.

## Analytics measurement plan

Analytics is aggregate and designed to improve the product, not identify
visitors.

Permitted aggregate events may include:

| Event | Purpose | Prohibited payload |
|---|---|---|
| page_view | Understand content demand | Full IP persistence, user identity |
| environment_enter | Compare AI/Engineering discovery | Visitor profile |
| search_used | Assess discoverability | Sensitive free-text retention without review |
| content_depth | Understand summary-to-evidence movement | Exact individual journey profile |
| evidence_open | Assess repository/report usefulness | Account identity |
| simulation_start | Assess interactive-content use | Model input tied to a person |
| collaboration_start | Detect CTA discoverability | Form contents |
| collaboration_submit | Measure qualified conversion | Message or contact details |
| language_select | Plan translation demand | Cross-session identity |

The exact analytics product is a technical-design decision. Privacy behavior
must be verified rather than inferred from marketing claims.

## Publishing governance

### Pre-publication gates

1. Content type and metadata valid.
2. Editorial English reviewed.
3. Factual claims sourced.
4. Research/experiment/project classification honest.
5. Research quality gate passed where applicable.
6. Confidentiality gate passed where applicable.
7. License and rights verified.
8. Accessibility review complete.
9. Links and downloads verified.
10. Staging visual and responsive review complete.
11. Product Owner approves publication.

### Revision policy

- Material changes update modified date and changelog.
- Corrections are not silently erased when they affect conclusions.
- Superseded research links to the successor.
- Retractions or invalidated claims remain transparently labeled when public
  record value outweighs removal.

## License governance

Licensing is selected per artifact:

- software license for code;
- content license or reserved rights for prose/diagrams;
- data license for datasets;
- explicit third-party attribution and compatibility review.

Open artifacts require attribution according to their selected license. Closed
artifacts receive an explicit rights notice rather than an ambiguous missing
license.

SPDX guidance specifically warns against applying a source-code license to
documentation, specifications, or data without considering the different work:
[SPDX open-source licensing guidance](https://www.linuxfoundation.org/hubfs/spdx_oslbp_022525a.pdf?hsLang=en).

