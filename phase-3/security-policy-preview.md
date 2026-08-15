# Security Policy Preview for Checkpoint 3.1A

**Status:** Exact proposal; not active until approved
**Target path after approval:** `/SECURITY.md`

This file preserves the exact proposed root policy so the Product Owner can
review a stable diff before activation. Replace `<PRIVATE_REPORTING_CHANNEL>`
with a monitored private channel before approval.

```markdown
# Security Policy

## Reporting a vulnerability

Do not disclose suspected vulnerabilities through public issues, discussions,
pull requests, or social media. Report them privately through
`<PRIVATE_REPORTING_CHANNEL>` and include:

- the affected revision, route, component, or deployment;
- a concise description of the impact and required preconditions;
- safe reproduction steps or a minimal proof of concept;
- whether credentials, personal data, or client-confidential data may be at
  risk; and
- any remediation or containment ideas already tested.

Do not access, modify, retain, or exfiltrate data that is not yours. Stop testing
when further action could affect availability, privacy, integrity, another user,
or a third-party service.

We will acknowledge a complete report within five business days, provide a
triage status after initial validation, and coordinate remediation and
disclosure based on verified severity and operational risk. These targets are
best-effort until a dedicated security response function exists.

## Security invariants

The following properties must hold:

- secrets, private keys, production credentials, client identities, and
  confidential estimator data never enter the repository or public build;
- unpublished or restricted content cannot be reached through routes, search
  indexes, feeds, source maps, client bundles, build artifacts, or metadata;
- public content is rendered safely and cannot inject executable markup or
  bypass the Content Security Policy;
- collaboration submissions are validated, rate-limited, and forwarded only to
  the configured recipient without becoming a public data store;
- privileged workflows do not execute untrusted pull-request code;
- GitHub Actions use explicit least-privilege permissions and immutable action
  references;
- production releases use the reviewed OCI image digest verified in staging;
- logs and analytics avoid sensitive content and follow documented retention;
  and
- recovery procedures preserve integrity and do not restore compromised
  credentials or artifacts.

## Reportable findings

Report issues that plausibly violate an invariant, including unauthorized
content access, injection, cross-site scripting, request forgery, authentication
or authorization bypass, secret exposure, dependency or workflow compromise,
inquiry abuse, privacy leakage, cache isolation failures, and release-integrity
or rollback failures.

## Severity context

Severity reflects demonstrated impact, exploitability, required privileges,
affected data, exposure, and recovery cost. A finding is not classified solely
by scanner output. Internet-reachable compromise of confidential data, release
integrity, or privileged infrastructure is treated as high priority. Findings
requiring unrealistic assumptions or affecting only local development may be
lower priority but remain valid when an invariant is violated.

## Out of scope

The following are normally out of scope unless they demonstrate concrete
security impact:

- missing best-practice headers without a viable exploit path;
- automated scanner output without validation;
- denial-of-service or load testing without prior written authorization;
- social engineering, physical attacks, credential stuffing, or spam;
- vulnerabilities exclusively in unsupported browsers or obsolete revisions;
- third-party services not controlled by NAOBI; and
- content-quality, accessibility, SEO, or visual defects without a security
  consequence.

This policy does not grant authorization to test third-party systems or to take
actions prohibited by law or service terms.
```

## Approval checklist

- [ ] Replace the placeholder with a monitored private reporting channel.
- [ ] Confirm acknowledgement and triage targets are operationally realistic.
- [ ] Confirm the invariants match the implemented architecture at activation.
- [ ] Approve the exact text for creation at `/SECURITY.md`.
