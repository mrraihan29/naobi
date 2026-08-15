# ADR-0011 — Adopt Minimized Managed External Services

**Status:** Accepted  
**Date:** 2026-08-15  
**Decision owner:** Raihan  
**Related documents:** 32, 34, 35, 36

## Context

The product needs edge protection, useful aggregate analytics, transactional
inquiry delivery, independent monitoring, and off-server recovery. It does not
need visitor profiles, an inquiry database, self-hosted analytics, or log
aggregation. The VPS has spare capacity, but operator attention remains scarce.

## Decision drivers

- privacy and data minimization;
- low one-author operational burden;
- custom-event usefulness;
- provider failure isolation and exit paths;
- acceptable data-region disclosure; and
- minimum incremental cost.

## Decision

Propose the following launch services:

- Cloudflare DNS/proxy/CDN, Free Managed WAF rules, and the single rate-limit
  rule for the inquiry path;
- GoatCounter hosted with sessions and individual pageviews disabled and a
  closed, non-identifying event allowlist;
- Resend for transactional inquiry delivery with no application persistence;
- Better Stack for external uptime and backup heartbeat only; and
- an independently selected S3-compatible provider for encrypted Coolify
  configuration backup.

Turnstile remains disabled behind a feature flag unless measured abuse
requires it. AWS SES Jakarta is the approved email-provider alternative.

## Considered options

### Self-hosted Umami

Provides control and custom events but requires PostgreSQL, upgrades, backup,
monitoring, and recovery for a workload that does not justify them.

### Cloudflare Web Analytics only

Extremely low burden and privacy-oriented, but lacks the approved custom events.

### AWS SES Jakarta

Provides better regional control but adds AWS identity, domain verification,
sandbox, policy, and operational setup. It remains the alternative if data
region outweighs Resend's simplicity.

### Minimized managed set — selected

Adds only services tied to approved requirements and keeps each removable.

## Consequences

### Positive

- no application/analytics database or inquiry backup burden;
- low initial monetary and operational cost;
- edge abuse protection and independent outage detection; and
- each optional provider fails without breaking reading.

### Negative

- public operation depends on several vendor accounts and policies;
- Resend stores account metadata/log/API records in the United States;
- GoatCounter is a smaller provider and hosted retention control needs launch
  confirmation; and
- free-plan features and prices can change.

## Risks and controls

| Risk | Control |
|---|---|
| Provider policy/price change | seven-day pre-launch recheck, adapter, export/exit runbook |
| Analytics collects unintended data | typed allowlist, sessions/detail off, payload tests, privacy review |
| Email outage or abuse | rate limit, validation, timeout, fallback channels, SES adapter |
| Turnstile becomes a blocking dependency | disabled by default; direct accessible fallback |

## Reversibility

Analytics has a no-op adapter, email implements `InquiryDelivery`, monitoring is
out-of-band, and Cloudflare/S3 configuration is documented. No canonical
content or business record depends on these services.

## Acceptance record

Accepted by Raihan on 2026-08-15 with no exception. Provider terms, region,
retention, and pricing still require the documented pre-launch freshness check.
