# 32 — Current Technology and Infrastructure Evidence

**Version:** 0.9  
**Status:** Recommendation evidence — Product Owner review required  
**Gate:** 2.6 — Architecture and Verification Design  
**Research date:** 2026-08-15  
**Evidence rule:** Official or primary sources only

## 1. Evidence labels

- **Verified fact** — directly supported by the cited primary source.
- **Inference** — an architecture conclusion drawn from verified facts and the
  approved workload.
- **Preference** — a deliberate design choice, not a vendor capability claim.
- **Open validation** — must be confirmed in the Phase 3 vertical slice.

Prices and service limits are snapshots at the research date and must be
rechecked before purchase or launch.

## 2. Workload baseline

| Item | Planning value | Classification |
|---|---:|---|
| Launch content | approximately 50 public items | Product Owner estimate |
| Initial monthly visits | approximately 1,000 | Product Owner target |
| Primary workload | public, read-heavy, globally cacheable content | Inference |
| Interactive workload | charts, code, moderate browser simulations | Product Owner constraint |
| Large artifacts | external artifact host; website stores links and metadata | Product Owner constraint |
| Application data | no accounts, comments, CMS database, or inquiry database | Approved scope |

One thousand monthly visits is not an excessive capacity target. It is a low
initial workload and leaves ample headroom for launch spikes when public pages
and assets are cacheable.

## 3. Application stack evidence

| Candidate | Verified current state | License | Material evidence | Architecture interpretation |
|---|---|---|---|---|
| Astro | Astro 7.2 released 2026-08-06. Static routes and endpoints are pre-rendered by default; individual routes may opt into on-demand rendering. Content loaders and MDX support typed repository content. | MIT | [Astro 7.2](https://astro.build/blog/astro-720/), [routing](https://docs.astro.build/en/reference/routing-reference/), [content loaders](https://docs.astro.build/en/reference/content-loader-reference/), [license](https://github.com/withastro/astro/blob/main/LICENSE) | Strongest match for content-first HTML with isolated interactive islands and one small server boundary. |
| Next.js | 16.x is Active LTS. It supports self-hosted Node deployment and a broad full-stack React model. Recent 16.x security releases reinforce the need for disciplined patching. | MIT | [support policy](https://nextjs.org/support-policy), [release and security posts](https://nextjs.org/blog) | Credible alternative with excellent React depth, but adds server/cache/RSC concepts that the approved workload does not require. |
| Django | Django 5.2 is LTS and 5.2.16 is the verified security patch at the research date. | BSD-3-Clause | [supported versions](https://www.djangoproject.com/download/), [5.2.16 security release](https://www.djangoproject.com/weblog/2026/jul/07/security-releases/) | Credible because Raihan knows it, but its database/admin strengths are unused and an MDX/islands pipeline would require more custom integration. |
| Node.js | Node 24.18.0 is LTS; Node 26.5 is Current. | MIT | [official release table](https://nodejs.org/en/about/previous-releases) | Production uses Node 24 LTS, not the Current line. |
| TypeScript | TypeScript 7.0 is the current stable native compiler generation. | Apache-2.0 | [TypeScript 7 announcement](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/), [download](https://www.typescriptlang.org/download/) | Use strict TypeScript 7 only after the scaffold confirms Astro integration compatibility; TypeScript 6 is the bounded fallback with no architecture change. |
| React | React 19.2 is current. | MIT | [React versions](https://react.dev/versions) | Use only inside interactive islands, not as the default renderer for every page. |

## 4. Content, search, and interaction evidence

| Technology | Verified fact | Decision consequence |
|---|---|---|
| Pagefind 1.5.2 | Pagefind indexes generated HTML after the site build, runs without a search server, supports filters and a JavaScript API, and searches in a Web Worker. It is MIT licensed. | Recommended for public-content-only search. Its CSP permissions for WASM and workers must be narrowly declared and tested. [Documentation](https://pagefind.app/docs/), [hosting](https://pagefind.app/docs/hosting/), [repository](https://github.com/CloudCannon/pagefind) |
| Astro content collections | Loaders and schemas support structured, type-safe content at build time. | MDX/frontmatter remains the canonical Git source; schema and relationship failures block publication. [Loader reference](https://docs.astro.build/en/reference/content-loader-reference/) |
| Observable Plot | Plot is a JavaScript charting library with accessibility features including ARIA guidance. | Recommended default for common explanatory/scientific charts; custom SVG/Canvas is reserved for product-specific visualizations. [What is Plot](https://observablehq.com/plot/what-is-plot), [accessibility](https://observablehq.com/plot/features/accessibility) |
| React Aria Components | Provides accessible behavior and semantics while allowing custom styling. | Native HTML remains first choice; use React Aria selectively for complex composite widgets such as command search and dialogs. [Documentation](https://react-spectrum.adobe.com/react-aria/) |

**Preference:** custom CSS using design tokens, cascade layers, container
queries, logical properties, CSS animations, and the Web Animations API. A
visual component kit and utility-CSS design language are not launch
dependencies because they would work against the approved custom chassis.

**Open validation:** determine the actual TypeScript/compiler pairing, bundle
cost of each island, Pagefind CSP, chart accessibility, and worker fallback in
the Phase 3 vertical slice. WebAssembly is allowed only after profiling proves
that JavaScript plus Web Workers misses an approved interaction target.

## 5. Host and deployment evidence

| Item | Verified current state | Consequence |
|---|---|---|
| Hostinger KVM 4 | 4 vCPU, 16 GB RAM, 200 GB NVMe, 16 TB bandwidth, AMD EPYC, and 1 Gbps network are listed for KVM 4. Hostinger offers an Indonesia VPS location. | Materially exceeds the initial workload. Size for recovery and maintenance, not predicted compute pressure. [KVM plans](https://www.hostinger.com/id/hosting-vps), [Indonesia VPS](https://www.hostinger.com/vps/servers/indonesia) |
| Coolify | Coolify v4.1.2 was the latest verified stable GitHub release, dated 2026-06-04. It deploys Docker applications, supports health checks, resource limits, private GitHub repositories, image-based deployment, and rollback to locally retained images. | Pin and record the exact release; upgrade only after changelog review and backup. Deploy a CI-built image rather than rebuilding unreviewed source in production. [releases](https://github.com/coollabsio/coolify/releases), [applications](https://coolify.io/docs/applications/index), [GitHub Actions](https://coolify.io/docs/applications/ci-cd/github/actions/) |
| GitHub Actions | GitHub documents publishing container images and recommends pinning actions to commit SHAs. GitHub Free private repositories include 2,000 Actions minutes and 500 MB Actions storage per month at the research date. | Likely sufficient initially; browser tests and image retention need monthly monitoring. [publish images](https://docs.github.com/en/actions/tutorials/publish-packages/publish-docker-images), [included usage](https://docs.github.com/en/billing/reference/product-usage-included) |
| Private-repository security | GitHub CodeQL/code scanning for private repositories is not included on Free/Pro without GitHub Code Security. Private-repository artifact attestations require Enterprise Cloud. | Do not claim unavailable controls. Use open CI scanners and image digests unless the applicable GitHub entitlement is verified. [CodeQL eligibility](https://docs.github.com/en/code-security/reference/code-scanning/troubleshoot-analysis-errors/private-repository-enablement), [GitHub security features](https://docs.github.com/en/code-security/getting-started/github-security-features) |

## 6. Edge and anti-abuse evidence

- Cloudflare caches static assets by default; HTML caching requires an explicit
  rule and correct origin headers. [Cloudflare cache](https://developers.cloudflare.com/cache/get-started/)
- Cloudflare Free exposes the Free Managed Ruleset and one rate-limiting rule.
  The single launch rule can protect the collaboration endpoint by path and
  source IP. [WAF overview](https://developers.cloudflare.com/waf/),
  [rate limiting](https://developers.cloudflare.com/waf/rate-limiting-rules/)
- Turnstile Free supports personal and production sites, unlimited challenges,
  and WCAG 2.2 AAA according to its plan matrix. It adds Cloudflare script and
  iframe CSP origins. [Turnstile plans](https://developers.cloudflare.com/turnstile/plans/),
  [CSP](https://developers.cloudflare.com/turnstile/reference/content-security-policy/)

**Recommendation:** use Cloudflare DNS/proxy/CDN, Free Managed Rules, and the
single rate-limit rule. Do not show Turnstile by default; activate it as a
feature-flagged second layer only if honeypot, validation, rate limiting, and
provider feedback do not control abuse.

## 7. Analytics comparison

| Option | Privacy and capability facts | Operating burden | Fit |
|---|---|---:|---|
| GoatCounter hosted | Cookieless; does not store IP, full user agent, or tracker identifier; temporary IP/user-agent mapping may remain in memory for up to eight hours. Individual pageview storage is disabled by default, sessions can be disabled, and custom events/export are supported. | Very low | **Recommended launch option** with sessions and individual pageviews disabled and an event allowlist. [privacy](https://www.goatcounter.com/help/privacy), [events](https://www.goatcounter.com/help/events), [sessions](https://www.goatcounter.com/help/sessions) |
| Umami Cloud | Claims no cookies, fingerprinting, or PII; supports custom events and export. Self-hosting requires PostgreSQL. | Low managed; medium self-hosted | Strong fallback. Self-hosting adds a database, backup, upgrades, and monitoring without a launch requirement. [documentation](https://docs.umami.is/docs), [install](https://docs.umami.is/docs/install), [Cloud FAQ](https://docs.umami.is/docs/cloud/faq) |
| Cloudflare Web Analytics | Free, privacy-first, and does not collect visitor personal data; unsampled data is retained seven days before aggregation and analytics are accessible for six months. It does not support custom events. | Very low | Useful as coarse performance/traffic telemetry, but insufficient alone for approved environment, evidence-depth, and collaboration-intent events. [about](https://developers.cloudflare.com/web-analytics/about/), [FAQ](https://developers.cloudflare.com/web-analytics/faq/) |

Analytics event payloads must never contain search text, form content, email,
external URL query strings, or a visitor identifier. Recommended events are
closed enumerations such as `gateway_open`, `depth_change`, `search_open`,
`outbound_evidence`, and `collaboration_start`.

## 8. Transactional email comparison

| Option | Verified current facts | Fit |
|---|---|---|
| Resend | Free tier lists 3,000 emails/month, 100/day, one domain, and 30-day data retention. Sending regions include Tokyo, but account metadata, logs, and API records are stored in the United States. | **Recommended launch option** for minimal TypeScript integration and predictable retention, subject to privacy-notice disclosure. [pricing](https://resend.com/pricing), [regions](https://resend.com/docs/dashboard/domains/regions) |
| Amazon SES Jakarta | SES is available in the Asia Pacific (Jakarta) region and is pay-as-you-go. It requires AWS identity, sending authorization, sandbox exit, and domain authentication setup. | Regional-control alternative if Raihan prefers additional setup over Resend's US account-data boundary. [regions](https://docs.aws.amazon.com/ses/latest/dg/regions.html), [pricing](https://aws.amazon.com/ses/pricing/) |

The application retains no inquiry body. It validates and transmits the
message, returns a generic result, and logs only a generated correlation ID,
outcome class, latency, and coarse abuse decision.

## 9. Backup and monitoring evidence

- Hostinger includes weekly VPS backups; optional daily backups retain two
  recent daily and two weekly restore points according to its current support
  documentation. A full VPS restore overwrites the server. Weekly-only backup
  cannot satisfy the accepted 24-hour RPO.
  [backup/restore](https://www.hostinger.com/support/1583232-how-to-back-up-or-restore-a-vps-at-hostinger/),
  [daily backups](https://www.hostinger.com/support/1665153-how-to-activate-daily-backups-in-hostinger/)
- Coolify supports scheduled database backups to S3-compatible storage. This
  includes the Coolify configuration database but does not replace a tested
  server rebuild procedure. [Coolify backups](https://coolify.io/docs/databases/backups),
  [S3-compatible storage](https://coolify.io/docs/knowledge-base/s3/introduction)
- Better Stack's current free plan includes ten monitors/heartbeats and one
  status page; free monitor frequency is three minutes. It can alert by email.
  [pricing](https://betterstack.com/pricing),
  [check frequency](https://betterstack.com/docs/uptime/check-frequency/)

**Recommendation:** external HTTP/keyword checks for production, collaboration
health, and staging reachability; a daily backup heartbeat; paid daily
Hostinger backup; and a daily encrypted Coolify configuration backup to
independent S3-compatible storage. Do not send application logs, analytics, or
session replay data to Better Stack at launch.

## 10. Evidence freshness rule

Re-verify framework/runtime versions, Coolify stable release, provider pricing,
service limits, data locations, and GitHub entitlements at Phase 3 scaffold and
again within seven days of production launch. Experimental features are never
enabled merely because they appear in a current release.
