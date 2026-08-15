# 10 — Non-functional Requirements

**Document status:** Draft v0.1

## Accessibility

| ID | Requirement |
|---|---|
| NFR-A11Y-001 | Target WCAG 2.2 Level AA for all public page variants. |
| NFR-A11Y-002 | All core functions shall be keyboard operable with visible focus and predictable focus order. |
| NFR-A11Y-003 | Repeated navigation and control identification shall remain consistent. |
| NFR-A11Y-004 | Text, code, equations, diagrams, charts, form states, and interactive outputs shall have appropriate semantic or textual alternatives. |
| NFR-A11Y-005 | The experience shall honor reduced-motion preference for non-essential motion. |
| NFR-A11Y-006 | Boot sequence, auto-animation, and moving content shall be skippable, pausable, or non-blocking as applicable. |
| NFR-A11Y-007 | Drag interactions shall have non-drag alternatives. |
| NFR-A11Y-008 | Color shall not be the only means of conveying state or domain. |

Primary reference: [WCAG 2.2](https://www.w3.org/TR/WCAG22/).

## Performance

At the 75th percentile of real-user page views, primary public pages target:

| ID | Metric | Target |
|---|---|---|
| NFR-PERF-001 | Largest Contentful Paint | 2.5 seconds or less |
| NFR-PERF-002 | Interaction to Next Paint | 200 milliseconds or less |
| NFR-PERF-003 | Cumulative Layout Shift | 0.1 or less |

These targets follow current Core Web Vitals guidance:
[web.dev Core Web Vitals thresholds](https://web.dev/articles/defining-core-web-vitals-thresholds).

Additional requirements:

- NFR-PERF-004: Heavy simulations and non-critical visual assets shall load on
  demand.
- NFR-PERF-005: A readable page shell and primary content shall not wait for
  optional OS effects.
- NFR-PERF-006: Mobile shall avoid downloading desktop-only assets when they
  are not required.
- NFR-PERF-007: Performance budgets shall be defined in technical design and
  enforced in continuous testing.

## Reliability and operations

| ID | Requirement |
|---|---|
| NFR-REL-001 | Production and staging shall be separate. |
| NFR-REL-002 | Deployment shall be repeatable and reversible. |
| NFR-REL-003 | Content and configuration shall be version controlled. |
| NFR-REL-004 | Automated backups shall cover deployable configuration and any persisted inquiry/analytics data. |
| NFR-REL-005 | Backup restoration shall be tested before launch and periodically afterward. |
| NFR-REL-006 | Errors in optional interactive components shall not make core articles unavailable. |
| NFR-REL-007 | Health, error, and resource monitoring shall exist for public services. |

Proposed operational targets, to confirm during technical design:

- public availability target: 99.5% monthly;
- recovery point objective for persisted operational data: 24 hours or better;
- recovery time objective: 8 hours or better.

## Security

| ID | Requirement |
|---|---|
| NFR-SEC-001 | HTTPS shall be enforced across the public and administrative surface. |
| NFR-SEC-002 | Secrets shall not be stored in public source or client-delivered code. |
| NFR-SEC-003 | Collaboration input shall receive syntactic and semantic server-side validation. |
| NFR-SEC-004 | Rate limiting and anti-abuse controls shall protect public submission endpoints. |
| NFR-SEC-005 | Content Security Policy and appropriate security headers shall be defined and tested. |
| NFR-SEC-006 | Third-party scripts, embeds, and APIs shall be explicitly allowlisted and reviewed. |
| NFR-SEC-007 | Dependencies and container images shall receive update and vulnerability review. |
| NFR-SEC-008 | Public forms shall not expose internal error details. |
| NFR-SEC-009 | State-changing endpoints shall use appropriate CSRF/origin defenses when applicable. |
| NFR-SEC-010 | Launch security verification shall use the current OWASP ASVS as a reference scaled to this application's risk. |

References:
[OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/),
[OWASP Input Validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html),
[OWASP CSP](https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html).

## Privacy

| ID | Requirement |
|---|---|
| NFR-PRIV-001 | No advertising tracker, fingerprinting, or cross-site behavioral profile. |
| NFR-PRIV-002 | Analytics shall be aggregate and privacy-first. |
| NFR-PRIV-003 | Only data necessary for an inquiry shall be collected. |
| NFR-PRIV-004 | Analytics and inquiry retention shall be documented before launch. |
| NFR-PRIV-005 | External services shall be assessed for data collected, location, retention, deletion, and exportability. |
| NFR-PRIV-006 | A public privacy notice shall accurately describe actual behavior. |

## Maintainability

| ID | Requirement |
|---|---|
| NFR-MAIN-001 | One technical author shall be able to publish without direct production database editing. |
| NFR-MAIN-002 | Content schemas and reusable components shall minimize one-off page logic. |
| NFR-MAIN-003 | An ordinary article update shall not require a full application release redesign. |
| NFR-MAIN-004 | Setup, authoring, deployment, backup, and recovery shall be documented. |
| NFR-MAIN-005 | Broken links, metadata errors, and invalid content relationships shall be detectable automatically. |
| NFR-MAIN-006 | The system shall support at least one meaningful content update per month within Raihan's 16-hour weekly maintenance capacity. |

## Compatibility and portability

- NFR-COMP-001: Support current stable Chrome, Edge, Firefox, and Safari, with
  an agreed latest-two-major-version test matrix at launch.
- NFR-COMP-002: Core reading and navigation shall remain functional when
  optional enhancement scripts fail.
- NFR-COMP-003: Content shall remain exportable as text plus referenced assets.
- NFR-COMP-004: Hosting configuration shall not prevent migration away from the
  current VPS/Coolify environment.

## Testability

- NFR-TEST-001: Every Must requirement shall map to acceptance evidence.
- NFR-TEST-002: Automated checks shall cover stable functional, content,
  accessibility, security, and performance assertions where practical.
- NFR-TEST-003: Manual visual, interaction, reading, and Product Owner
  observation shall complement automated checks.
- NFR-TEST-004: A failed launch-blocking test prevents public release.

