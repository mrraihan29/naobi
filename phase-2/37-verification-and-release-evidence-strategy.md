# 37 — Verification and Release-Evidence Strategy

**Version:** 0.9  
**Status:** Proposed — Product Owner decision required  
**Gate:** 2.6 — Architecture and Verification Design

## 1. Quality policy

A release is accepted because it produces traceable evidence against explicit
requirements—not because a build completed or the interface looks correct on
one device. Automated checks are necessary but do not replace manual judgment
for accessibility, visual fidelity, research integrity, confidentiality, and
recovery.

Every evidence item records release commit/image digest, environment, tool and
version, configuration/profile, timestamp, result, artifact link, exception,
and approver where manual review is required.

## 2. Verification layers

| Layer | Primary purpose | Proposed implementation | Runs when | Release blocking |
|---|---|---|---|:---:|
| Formatting/lint | deterministic source and policy hygiene | formatter, ESLint, custom policy rules | local + PR | Yes |
| Type safety | prevent contract drift | strict TypeScript and Astro checks | local + PR | Yes |
| Unit | pure state/command/depth/schema utilities | Vitest | PR | Yes |
| Component/integration | UI behavior, adapters, server validation | Vitest/browser environment plus provider fakes | PR | Yes |
| Content validation | schema, IDs, relationships, evidence, rights, confidentiality | Astro/Zod plus custom validators | local + PR | Yes |
| Build/search validation | deterministic pages, routes, Pagefind index and queries | production build plus search assertions | PR | Yes |
| End-to-end | critical visitor/author flows | Playwright | PR + staging | Yes |
| Accessibility | automated rules plus human equivalence | axe-core with Playwright; keyboard; NVDA/manual | PR automated; gate/manual | Yes |
| Visual regression | approved chassis, states, responsive transformations | Playwright screenshots with controlled baselines | PR + gate | Yes |
| Performance | budgets and lab Core Web Vitals proxy | bundle budgets plus Lighthouse CI | PR + staging | Yes for defined pages |
| Security | input abuse, headers, secrets, dependencies, image, supply chain | tests, secret scan, dependency/license audit, Trivy image/SBOM | PR/release | Yes by severity policy |
| SEO/crawl | canonical, sitemap, robots, JSON-LD, metadata, crawlable links | build parser and staging crawl | PR + staging | Yes |
| Operations | deploy, health, rollback, alert and monitor behavior | staging promotion drill | release/gate | Yes |
| Recovery | backup integrity and timed restoration | isolated restore runbook | pre-launch + schedule | Yes for launch/current evidence |

Playwright supports Chromium, Firefox, WebKit, mobile emulation, screenshots,
and integration with accessibility tooling. Vitest is selected for TypeScript
unit/integration work, and Lighthouse CI enforces repeatable performance
budgets: [Playwright browsers](https://playwright.dev/docs/browsers),
[visual comparisons](https://playwright.dev/docs/test-snapshots),
[accessibility testing](https://playwright.dev/docs/accessibility-testing),
[Vitest](https://vitest.dev/guide/),
[Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci).

## 3. Critical-flow matrix

| Flow | Required assertions |
|---|---|
| Direct-link article entry | canonical document renders without boot; title/evidence/status/navigation correct; no JS dependency for body |
| Central OS boot | 2–3 second maximum sequence under reference profile; skip control; reduced-motion equivalent; content remains reachable |
| AI gateway | equal prominence, directory clarity, filter/search/depth transitions, direct URLs |
| Engineering gateway | same contract and prominence with its denser instrument profile |
| Environment switch | preserves coherent route/context, never traps focus, no hidden duplicate content |
| Terminal command | same action/URL/result as visual control; help and invalid-command feedback; Ctrl/Cmd-only shortcuts |
| Global search | approved public projection including labelled coming-soon records; keyboard and screen-reader operation; no query analytics/logging |
| Evidence Depth Rail | restructures declared sections, retains semantic order, focus and URL behavior, exposes equivalent nonanimated transition |
| Chart/simulation | bounded inputs, deterministic/reference result, worker cancellation, error/static fallback, table/text equivalent |
| Collaboration | validation, honeypot/rate behavior, provider success/failure, duplicate prevention, browser-only text recovery, direct fallback |
| Mobile path | complete simplified flow; no desktop-only information or terminal dependency; performance budgets |
| External artifact | provenance, rights/access note, external-host warning when useful, safe link attributes, broken-link behavior |

## 4. Browser and device coverage

### Automated on every release candidate

- latest Playwright Chromium, Firefox, and WebKit desktop projects;
- Chromium mobile profiles representing a narrow Android viewport and a modern
  iPhone/WebKit profile;
- viewport bands and transformations from Document 29, not arbitrary device
  screenshots; and
- normal, reduced-motion, high-contrast/forced-colors where supported, 200%
  zoom/reflow, and keyboard-only variants on critical flows.

### Manual launch evidence

- current stable Chrome, Firefox, Edge, and Safari on real available platforms;
- NVDA with Firefox or Chrome on Windows;
- VoiceOver/Safari where a device is available, otherwise a documented gap and
  earliest validation plan;
- keyboard-only at desktop and mobile-width layouts;
- touch target and orientation review on at least one physical phone; and
- content readability with scripts blocked and third-party providers blocked.

## 5. Accessibility gate

The target is WCAG 2.2 AA and the locked behavior in Document 23.

Automated evidence covers axe violations, accessible names/roles, landmark and
heading structure, invalid ARIA, color-contrast checks that tools can evaluate,
focus presence, and selected keyboard scripts. Manual evidence covers reading
order, focus logic, terminal/visual equivalence, status announcements, chart
meaning, simulation operability, zoom/reflow, reduced motion, forced colors,
and screen-reader comprehension.

No “0 automated violations” claim is treated as accessibility approval. A
manual exception must cite the criterion, user impact, workaround, owner, and
deadline; launch blockers cannot be waived silently.

## 6. Visual and motion gate

- Baselines are generated only from a Product Owner-approved reference on the
  same OS, browser engine, fonts, viewport, device scale, data, timezone, and
  animation-disabled capture state.
- Dynamic timestamps, caret blinks, noise, and nondeterministic charts are
  frozen through test hooks rather than masked broadly.
- Pixel diff thresholds are per component/page and supplemented with semantic
  assertions. A wide global tolerance is forbidden.
- Intentional updates require a before/after evidence sheet and explicit
  baseline acceptance; CI never auto-accepts snapshots.
- Motion storyboards in Document 30 receive timing, interruption, reduced
  motion, and input-modality evidence.

## 7. Content, research, and confidentiality gate

Automated publication validation must enforce:

- unique stable ID, canonical slug, type, state, dates, author, environment,
  summary, evidence depth, rights/license, and search projection;
- valid internal relationships, cited assets, outbound schemes, and checksums
  where declared;
- no draft/private/client-confidential state in public output or index;
- no secret patterns, local absolute paths, private repository URLs, client
  names, estimator database formulas/records, or prohibited metadata;
- research/experiment quality fields and completed-state gates from Document
  14; and
- engineering sanitization declaration and sign-off from Document 15.

Automated checks cannot establish scientific truth or adequate sanitization.
Raihan must approve the final rendered evidence, source representation,
limitations, license, and confidentiality classification for every launch item.

## 8. Security verification gate

### Source and supply chain

- secret scan across working change and reachable history before launch;
- dependency vulnerability, provenance, license, and maintenance review;
- SHA-pinned CI actions and least-privilege workflow-permission assertion;
- generated SBOM and container scan with Trivy or equivalent;
- no critical/high exploitable finding; medium findings require documented
  reachability, treatment, owner, and deadline; and
- verify the deployed production digest equals the staging-tested digest.

### Application and edge

- CSP, HSTS, `X-Content-Type-Options`, Referrer-Policy, Permissions-Policy,
  framing protection, cache-control, and CORS assertions;
- MDX/raw-HTML, URL, query, link, embed, worker, and DOM-XSS test corpus;
- inquiry header/body injection, content-type, byte/range, Unicode, timeout,
  cross-origin, rate-limit, honeypot, duplicate, and provider-failure tests;
- verify no secret/PII/message/search text in logs, analytics, error responses,
  source maps, or build output; and
- origin, staging, Coolify, registry, health endpoint, and backup bucket
  exposure checks.

An independent standard repository security scan is required after the Phase 3
vertical slice and again before official launch because this design threat
model cannot validate code that does not yet exist.

## 9. Performance gate

Representative pages are Central OS, an AI research article, an Engineering
case, a long blog post, search, and one interactive article. CI records bundle
composition and fails the budgets in Document 34. Lighthouse CI uses a pinned
profile with multiple runs and a median policy; staging adds an edge-versus-
origin comparison and throttled-network/manual interaction trace.

The gate checks LCP, CLS, INP proxy/lab responsiveness, total blocking time,
font/image transfer, island hydration, search-index load, worker startup, and
animation long tasks. Field metrics may inform later tuning but may not collect
visitor identity.

## 10. SEO and discovery gate

- Crawl the built output and staging deployment with JavaScript disabled.
- Assert 2xx canonical routes, intentional redirects, one canonical per page,
  correct language, titles/descriptions, Open Graph cards, robots, sitemap,
  feed, and JSON-LD type/required fields.
- Verify drafts/private/staging are absent from sitemap, feed, index, social
  metadata, Pagefind, and public artifact output.
- Detect orphan pages, broken internal/external links, redirect chains,
  duplicate titles/canonicals, missing alt text, and invalid heading structure.
- Validate direct-link entry, environment paths, coming-soon labels, and future
  locale route compatibility.

## 11. Gate 2.5 browser evidence carried into Phase 3

HF-01 through HF-12 from Document 24 are release-blocking for expansion beyond
the first vertical slice. The Phase 3 evidence package must map each HF ID to:

- route/component and viewport/profile;
- screenshot/video or DOM/accessibility artifact;
- automated assertions;
- manual reviewer notes;
- deviation from Documents 26–30; and
- Product Owner outcome: accept, revise, or bounded defer.

## 12. Release evidence manifest

Each production release publishes an internal machine-readable manifest with:

```text
release_id
source_commit
image_digest
build_timestamp_utc
runtime_and_package_manager_versions
content_manifest_digest
test_suite_results
content_policy_result
accessibility_result
visual_baseline_result
performance_result
security_and_sbom_result
seo_crawl_result
staging_smoke_result
production_postdeploy_result
known_exceptions
approver
```

Artifacts stay private. Public pages may expose a short build/version identifier
for diagnosis but never internal paths, dependency inventory, or secrets.

## 13. Exception and flake policy

- A failing required check blocks release. Re-running only to obtain a green
  result without root-cause evidence is prohibited.
- A flaky test is quarantined only with an owner, issue, risk assessment,
  replacement coverage, and deadline; critical flows cannot be quarantined.
- Waivers state requirement, evidence, impact, compensating control, expiry,
  and Raihan's approval. Permanent undocumented skips are prohibited.
- Tool outages may defer publication; they do not authorize bypassing the
  protected merge or deploying an unverified local build.

## 14. Gate acceptance evidence

Gate 2.6 approves the verification design. Actual passing test evidence is a
Phase 3–5 implementation obligation. Gate 2.6 closes only when Raihan accepts
the matrix, the launch-blocking categories, and the evidence/exception policy.
