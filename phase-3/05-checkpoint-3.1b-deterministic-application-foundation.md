# Checkpoint 3.1B — Deterministic Application Foundation

**Status:** Local implementation complete; checkpoint review pending
**Owner:** Raihan
**Implementation branch:** `phase3/3.1b-astro-toolchain`
**Scope:** Reproducible application and verification foundation; no product features

## 1. Purpose

Checkpoint 3.1B creates the smallest production-shaped Astro foundation that
can be installed, checked, tested, built, and reviewed deterministically before
content or interface contracts are introduced.

## 2. Locked inputs

- Phase 2 ADR-0009: content-first Astro hybrid architecture.
- Phase 2 ADR-0010: immutable-image delivery contract.
- Phase 2 ADR-0012 and Document 37: verification and recovery baseline.
- Phase 2 Documents 32–35: technology evidence, selected architecture, and
  security boundaries.
- Phase 3 Documents 03–04 and ADR-0001: checkpoint and Git governance.

## 3. Scope and exclusions

### In scope

- verified user-local Node and pnpm toolchain;
- exact dependency pins and lockfile;
- Astro static-default project with Node adapter and React islands capability;
- strict TypeScript and editor configuration;
- format, lint, type/diagnostic, unit, build, workflow-policy, license, audit,
  and HTTP smoke verification;
- environment-name and secret-access schema;
- GitHub Actions verification with immutable action references; and
- weekly bounded dependency update configuration.

### Explicitly excluded

- canonical content collections and route model, reserved for 3.1C;
- Central OS, AI World, Engineering World, terminal, theme, motion, and visual
  implementation;
- collaboration endpoint behavior or real provider credentials;
- Pagefind, MDX content, charts, simulations, and browser E2E tooling;
- Docker/GHCR/Coolify delivery and operational account changes; and
- production deployment.

## 4. Context7-informed implementation

Current official documentation was queried through Context7 before the
foundation was written. Material outcomes were:

- Astro 7 supports static-by-default output with selected on-demand routes
  exporting `prerender = false` when an adapter exists;
- `@astrojs/node` standalone is the accepted portable server boundary;
- unused Astro sessions can and should be disabled with `session: false`;
- Astro environment schemas distinguish server secrets from public values;
- pnpm 11 uses `allowBuilds` for explicit lifecycle-script authorization;
- `minimumReleaseAge` provides a dependency publication cooldown; and
- Vitest 4 supports deterministic non-watch Node test execution.

## 5. Deterministic contract

| File | Contract |
|---|---|
| `.node-version`, `.nvmrc` | Node 24.19.0 |
| `package.json` | exact pnpm, engine, dependency, and command pins |
| `pnpm-lock.yaml` | canonical dependency resolution |
| `pnpm-workspace.yaml` | engine, exact-save, peer, cooldown, and build-script policy |
| `astro.config.ts` | static default, Node adapter, React islands, no sessions |
| `tsconfig.json` | Astro strictest plus defensive compiler flags |
| `eslint.config.js` | JavaScript, TypeScript, and Astro lint baseline |
| `vitest.config.ts` | bounded Node unit-test contract |
| `.env.example` | names only; no real credentials |

## 6. Application boundary

The initial route is a neutral, semantic foundation marker. It proves Astro
document composition and static prerendering but is not the accepted NAOBI
visual experience. No React island is hydrated. There is no client-side script,
session state, database, analytics, inquiry submission, or provider call.

The environment schema declares only future server-secret names:

- `COLLABORATION_RECIPIENT`; and
- `RESEND_API_KEY`.

Both remain optional and unused. Real values stay outside Git and will not be
requested until the authorized operational checkpoint.

## 7. Verification architecture

`pnpm verify` runs:

1. immutable GitHub Actions reference and workflow-policy validation;
2. production dependency license-policy validation;
3. Prettier check;
4. ESLint with zero warnings;
5. Astro diagnostics with strict TypeScript;
6. Vitest unit tests; and
7. production build.

CI adds frozen-lock installation, high-severity production dependency audit,
and full-history Gitleaks scanning. A structural YAML policy rejects write
permissions, `pull_request_target`, mutable external action references, and
Docker actions without a SHA-256 digest. Local step actions are prohibited;
local reusable workflows must be direct files in `.github/workflows`, where
they are scanned independently. Workflow permissions are read-only, job
timeouts are bounded, PR concurrency cancels superseded safe runs, checkout
credentials are not persisted, and third-party actions are pinned to full
commit SHAs.

## 8. Dependency and license policy

Direct packages are exact-pinned. Pnpm rejects automatic optional peers,
incompatible peers, unreviewed dependency scripts, and packages inside the
24-hour release cooldown unless an explicit exception is reviewed.

Production licenses are allowlisted by SPDX expression. Sharp platform binaries
have narrow reviewed exceptions for the combined
`Apache-2.0 AND LGPL-3.0-or-later` expression and the exact Linux x64 libvips
package reported as `LGPL-3.0-or-later`. Applicable notices, license text, and
relinking obligations must be included when OCI artifacts are distributed.
Other packages, platforms, or license expressions continue to fail the
validator.

## 9. Definition of done

Checkpoint 3.1B is ready for review when:

- exact versions and lockfile install successfully with frozen mode;
- the strict peer graph has no issue;
- all `pnpm verify` stages pass;
- production audit reports no known high-severity vulnerability;
- HTTP preview returns 200 with the expected marker and is cleanly stopped;
- no secret or production service is introduced;
- CI completes on the published draft PR;
- stable `verify` and `secret-scan` job names are added to the main ruleset and
  read back; and
- Raihan reviews the evidence and records the checkpoint decision.

## 10. Risk and rollback

The primary risks are package ecosystem drift, unsupported TypeScript upgrades,
binary license obligations, and a workflow rule blocking delivery. Mitigations
are exact pins, frozen installation, compatibility gates, executable policies,
Dependabot, immutable action references, and version-controlled rulesets.

The repository currently has one write-capable account: owner `mrraihan29`.
Required checks are not a substitute for independent review after access
expands because GitHub binds status requirements to context/provider rather
than immutable workflow content. Granting another account `write`, `maintain`,
or `admin` access therefore requires a prior governance checkpoint that adds
independent approval/CODEOWNERS or a trusted required-workflow control.

Rollback is a squash-commit revert. No database, deployment, content migration,
or external provider state exists in this checkpoint.

## 11. Hold

Checkpoint 3.1B is locally implementation-complete but not accepted. It must be
published through its own draft PR, pass remote CI, attach stable checks to the
protected-main ruleset, and receive Raihan's explicit `ready to continue`
decision before Checkpoint 3.1C begins.
