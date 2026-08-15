# 35 — Security, Privacy, and External-Service Boundaries

**Version:** 0.9  
**Status:** Proposed threat model and data policy — Product Owner review required  
**Gate:** 2.6 — Architecture and Verification Design  
**Scope:** Entire future Raihan's OS repository and deployed product

## Overview

Raihan's OS is a public publication deployed from a private repository. Most
runtime output is immutable HTML and assets. The two privileged runtime actions
are deployment/operations and delivery of a public collaboration inquiry. The
site has no visitor account, authorization role, payment, comment system,
content editor, or application database.

The assets that matter most are:

1. integrity and confidentiality of the private source repository and CI;
2. integrity of published research, engineering evidence, and author identity;
3. confidentiality of unpublished content, client-identifying information,
   private estimator databases, inquiries, secrets, and staging;
4. availability of the publication and collaboration path;
5. privacy of visitors and inquiry senders; and
6. recoverability of deployment configuration and operational control.

## Threat Model, Trust Boundaries, and Assumptions

### Actors and controls

| Actor/input class | Examples | Trust level |
|---|---|---|
| Attacker-controlled | URL paths/query, headers, form fields, uploaded-by-link artifact URLs, traffic rate, browser capabilities, analytics requests | Untrusted |
| Visitor-controlled | inquiry name/email/message, search text, simulation inputs, selected environment/depth | Untrusted even when benign |
| Content-author controlled | MDX, frontmatter, embeds, code samples, outbound links, chart data | Trusted only after schema/policy/PR validation; content mistakes remain possible |
| Developer-controlled | application code, dependencies, CI workflow, container definition | Privileged; review and protected merge required |
| Operator-controlled | DNS, Cloudflare, Coolify, VPS, secrets, backups, email/analytics settings | Highest privilege; MFA and recovery controls required |
| Provider-controlled | GitHub runners/registry, Hostinger, Cloudflare, Resend/SES, GoatCounter, backup and monitoring services | Contractual trust boundary; minimize data and maintain exit path |

### Trust boundaries

1. **Browser to Cloudflare:** all internet traffic is hostile until edge and
   application validation complete.
2. **Cloudflare to origin:** only expected proxied traffic should reach the
   application; the origin, management ports, and staging require separate
   access control.
3. **Application to providers:** email and analytics receive only their
   documented minimum payload; timeouts and failures cannot block reading.
4. **Repository to CI to registry to Coolify:** a compromise can alter public
   content or execute on the VPS. This is the highest-integrity supply-chain
   path.
5. **Operator to control plane:** GitHub, Cloudflare, Hostinger, Coolify,
   registrar, email, backup, and monitoring accounts are distinct privileged
   systems; recovery must not depend on a single unavailable account.
6. **Public versus confidential content:** publication is irreversible in
   practice because crawlers and caches can retain material after deletion.

### Security invariants

- Untrusted input never becomes executable HTML, shell, template, query, email
  header, or outbound server request without context-appropriate controls.
- Only a reviewed protected-branch revision may produce a production image.
- Production runs the exact verified image digest tested in staging.
- Secrets never enter client bundles, repository history, build artifacts,
  logs, screenshots, analytics, or error responses.
- Draft, private, client-identifying, or unlicensed material never enters
  public output, sitemap, feed, search index, preview card, or source map.
- The inquiry endpoint never stores or logs message content and never becomes
  an open mail relay.
- Optional scripts and providers cannot block core reading or navigation.
- Management and staging surfaces are not publicly discoverable or indexed.
- Recovery can be performed from repository, image, encrypted configuration
  backup, and a documented secret inventory within the accepted RTO/RPO.

### Assumptions and explicit exclusions

- Raihan is the only author/operator at launch and uses phishing-resistant MFA
  where supported, unique credentials, and a password manager.
- Public research code/datasets are separate repositories and outside this
  application's release authority unless linked as artifacts.
- A malicious dependency, compromised CI action, stolen operator credential,
  DNS takeover, and accidental confidential publication are in scope.
- Physical compromise of provider data centers and a fully compromised
  operator device are provider/endpoint risks mitigated by account security
  and recovery, not application code alone.
- Visitor-to-visitor authorization and tenant-isolation flaws are out of scope
  because there are no accounts, sessions, or tenant data. If that changes,
  this threat model must be replaced before implementation.

## Attack Surface, Mitigations, and Attacker Stories

### 1. Public HTML, MDX, and browser execution

Relevant stories include stored XSS through author content or an unsafe MDX
component, DOM XSS through URL/search state, malicious third-party embeds,
reverse-tabnabbing, unsafe downloadable content, and dependency-delivered
browser compromise.

Controls:

- allowlisted MDX components; no arbitrary raw HTML by default;
- contextual escaping and no unsafe HTML sink without isolated review;
- strict CSP delivered as an HTTP header, initially report-only in staging;
- explicit `frame-src`, `connect-src`, `img-src`, and `worker-src` allowlists;
- Subresource Integrity where stable third-party assets cannot be self-hosted;
- `noopener noreferrer` for untrusted new-window links;
- no inline event handlers or runtime evaluation;
- content, embed-origin, URL-scheme, rights, and confidentiality validation;
- no production source maps exposed unless access is controlled; and
- dependency pinning, update review, SBOM/image scan, and reproducible lockfile.

Pagefind's required WASM/worker CSP permission is limited to its own assets and
validated in the vertical slice; it is not permission for arbitrary remote
script execution.

### 2. Collaboration endpoint

Realistic stories include spam and resource exhaustion, email-header
injection, oversized bodies, automated enumeration, provider-cost abuse,
reflected input, log injection, and use as an open relay.

Controls:

- accept only `POST` with exact content type, same-origin expectations, strict
  schema, Unicode normalization, per-field and total-byte limits;
- destination, sender identity, and email subject are server constants; visitor
  input appears only in a safely encoded body and reply-to after validation;
- reject CR/LF in header-capable fields; no visitor-chosen recipient;
- Cloudflare path/IP rate rule plus origin-side token bucket/timeout;
- honeypot and minimum-completion-time signal; feature-flagged Turnstile only
  if observed abuse requires it;
- generic success/error responses, request correlation ID, provider timeout,
  circuit breaker, and no automatic retries that can duplicate mail;
- body never written to logs, analytics, database, queue, or backup; and
- direct email/professional-channel fallback on provider failure.

CSRF has limited confidentiality impact because the endpoint changes no
visitor state, but cross-origin abuse still consumes delivery capacity;
origin/content-type checks and rate limits remain required.

### 3. Search, charts, and simulations

Search text and simulation inputs are attacker-controlled. They must not reach
raw HTML sinks, external analytics, logs, server computation, or dynamic import
paths. Workers have fixed entry points, validated numeric/string bounds,
cancellation, maximum iterations/time, and deterministic error states. Code
examples are display-only unless a separately threat-modeled sandbox is
approved.

### 4. CI/CD and software supply chain

Realistic stories include malicious pull requests, compromised npm packages or
GitHub Actions, overly broad workflow tokens, registry tag replacement,
secret exfiltration in tests, and deployment of a different artifact than the
one tested.

Controls:

- protected production branch, required review/checks, no direct force push;
- workflows use least-privilege `permissions`, SHA-pinned third-party actions,
  no production secrets in pull-request jobs, and controlled environments;
- lockfile integrity, Dependabot alerts/updates, license policy, package audit,
  secret scan, static analysis, and container/SBOM scan;
- build once, tag by commit, record digest, test the image, deploy digest;
- GHCR/Coolify credentials scoped to required repository/resource;
- production deploy webhook treated as a secret and rotated after exposure;
- non-root minimal image, health check, read-only filesystem where compatible,
  resource limits, and no Docker socket mount in the application; and
- CodeQL or private artifact attestation is claimed only if the repository's
  GitHub entitlement is verified.

### 5. Infrastructure and operator control

Realistic stories include origin bypass, exposed Coolify/SSH, stale OS or
Coolify vulnerabilities, DNS/registrar takeover, secret loss, backup theft,
and a destructive restore.

Controls:

- Cloudflare proxy with origin firewall policy where operationally feasible;
- SSH keys only, root login disabled, minimal inbound ports, automatic security
  updates with a controlled reboot window, and quarterly access review;
- MFA on GitHub, registrar/DNS, Hostinger, email, analytics, backup, and
  monitoring accounts; offline recovery codes;
- Coolify dashboard restricted by access policy/VPN or allowlist, MFA if
  supported, exact-version inventory, and changelog-led patching;
- encrypted secrets at rest, documented owner and rotation trigger, no secrets
  inside the image;
- encrypted off-server backup, least-privilege bucket credentials, retention
  lifecycle, restore in an isolated target, and quarterly recovery drill; and
- production and staging have separate secrets, hostnames, indexing policy,
  and provider modes.

### 6. Privacy and analytics data flow

The analytics adapter emits only allowlisted event names and coarse enum
properties. It rejects free-form values in development and production. No
search query, article excerpt, inquiry content, email, full referrer query,
precise location, visitor ID, fingerprint, or session replay is authorized.

The privacy notice identifies Cloudflare, the selected analytics provider, the
transactional email provider, and externally linked artifact hosts, including
purpose, data categories, region where material, retention, and contact path.

## Purpose-limited data and retention policy

This is a product policy, not legal advice. It follows data-minimization and
storage-limitation principles and must be checked against the final provider
contracts and launch privacy notice.

| Data class | Location | Retention target | Rule |
|---|---|---:|---|
| Inquiry body and sender contact | Raihan's mailbox/provider | 12 months after last meaningful contact | Delete sooner on valid request; retain longer only for an active contract or documented legal need |
| Spam/rejected inquiry | provider/mailbox if delivered | 30 days | Delete; application stores none |
| Application access/security logs | VPS/Coolify | 30 days | No form body, search text, cookies, auth secret, or unnecessary query string |
| Deployment/audit metadata | GitHub/Coolify | 180 days or provider minimum | No inquiry content; preserve commit, digest, result, actor, timestamp |
| Aggregate analytics | GoatCounter | 13 months target | Sessions and individual pageviews disabled; annual deletion/export review; if hosted controls cannot enforce the target, document the exception or change provider |
| Uptime incidents | monitor provider | 13 months target | URL, status, timing, incident notes only |
| Daily/weekly/monthly backups | Hostinger plus independent object storage | 7 daily, 4 weekly, 3 monthly | Lifecycle deletion; backups do not contain inquiry bodies or analytics database |
| Local unpublished content | private repository/workstation backup | project lifecycle | Rights/confidentiality classification required; delete secrets immediately |

Indonesian PDP law provides for deletion/destruction after retention ends or on
applicable request unless another legal basis requires retention. The EU data
protection principles similarly require the shortest necessary retention and
review/erasure limits. Final launch language should be reviewed for the actual
audience and processors: [Indonesia Law No. 27 of 2022](https://jdih.komdigi.go.id/produk_hukum/view/id/832/t/undangundang%2Bnomor%2B27%2Btahun%2B2022),
[European Commission principles](https://commission.europa.eu/law/law-topic/data-protection/information-business-and-organisations/principles-gdpr_en).

## External-service approval register

| Service | Data sent | Launch decision | Exit |
|---|---|---|---|
| Cloudflare | request/network metadata and cached public responses | Proposed approve | move authoritative DNS/proxy; preserve origin TLS/runbook |
| GoatCounter hosted | minimized page/event data | Proposed approve with sessions/detail disabled | disable adapter/script; export aggregate data |
| Resend | validated inquiry and sender reply address | Proposed approve | switch `InquiryDelivery` adapter to SES |
| Better Stack | public URL, health result, timing, incident contact | Proposed approve for uptime/heartbeat only | replace monitor; no app code dependency |
| S3-compatible backup provider | encrypted Coolify configuration backup | Provider TBD before launch | standard object export/restore |
| External artifact hosts | visitor-requested public artifact URL | per-artifact approval | update metadata/link; retain checksum/provenance |

## Severity Calibration (Critical, High, Medium, Low)

### Critical

- production supply-chain compromise enabling persistent arbitrary execution on
  the VPS or theft of all operator/provider credentials;
- compromise of repository/CI that silently publishes malicious research pages
  and exfiltrates production secrets; or
- backup/control-plane compromise that destroys production and all independent
  recovery material.

### High

- stored XSS on public content affecting visitors broadly;
- publication of a client-identifying artifact, private estimator database, or
  unpublished research due to a gate bypass;
- inquiry endpoint used as an open relay or to exfiltrate retained messages;
- unauthorized production deployment or DNS/registrar takeover; or
- origin/management exposure that leads to administrative compromise.

### Medium

- endpoint abuse causing bounded provider cost or temporary availability loss;
- analytics emitting forbidden free-form or identifying data without broader
  account compromise;
- CSP, cache, or indexing error exposing staging metadata but no secrets;
- simulation resource exhaustion limited to the attacker's own browser; or
- broken dependency/update controls that create a plausible but not yet
  exploitable supply-chain path.

### Low

- missing non-sensitive security header with no demonstrated exploit path;
- verbose but non-secret error information;
- minor rate-limit bypass with negligible cost/availability effect; or
- availability degradation confined to an optional chart, search, analytics,
  or animation while core reading remains intact.

Severity is calibrated to actual reachability and impact. Authentication,
tenant-isolation, privilege-escalation, SQL-injection, and CSRF account-takeover
stories are not reportable for surfaces that do not exist; they become material
immediately if a CMS, database, or visitor identity is introduced.

Repository: OS_Portfolio
Version: phase-2-gate-2.6-proposed-2026-08-15
