# Checkpoint 3.1B Local Verification Evidence

**Verification date:** 2026-08-16
**Branch:** `phase3/3.1b-astro-toolchain`
**Status:** Local checks passed; remote CI and checkpoint review pending

## 1. Runtime provenance

| Item | Verified result |
|---|---|
| Node release | 24.19.0 LTS |
| Distribution | Official Windows x64 ZIP from `nodejs.org/dist` |
| Archive SHA-256 | `57F71AB3652E797D84ACDDC79C81CC9FF1C6DDB2A1974CDB83F00FEE9BFF4C73` |
| Executable signature | Valid; OpenJS Foundation |
| Bundled npm | 11.17.0 |
| Pnpm | 11.22.0, exact user-local install |
| Astro telemetry | Disabled locally and in CI |

Node 24.19.0 replaced the Phase 2 evidence snapshot of 24.18.0 because the
official Node release table identified 24.19.0 as Latest LTS on the
implementation date. The major LTS decision did not change.

## 2. Compatibility evidence

Registry metadata was read before installation:

- Astro 7.2.2 supports Node `>=22.12.0` and pnpm `>=7.1.0`;
- `@astrojs/node` 11.1.2 supports Astro 7;
- `@astrojs/react` 6.0.2 supports React 19;
- Vitest 4.1.10 supports Node 24; and
- TypeScript ESLint 8.67.0 supports TypeScript below 6.1, so TypeScript 6.0.3
  was selected instead of unsupported TypeScript 7.0.2.

Strict peer checking ultimately reported: `No peer dependency issues found`.

## 3. Supply-chain evidence

| Control | Result |
|---|---|
| Exact direct pins | Present in `package.json` |
| Exact-save enforcement | `saveExact: true` in `pnpm-workspace.yaml` |
| Frozen lockfile install | Passed |
| Publication cooldown | 1,440 minutes |
| Optional peer auto-install | Disabled |
| Strict peer enforcement | Enabled and passed |
| Strict lifecycle builds | Enabled |
| Allowed lifecycle packages | `esbuild`, `sharp` only |
| Production vulnerability audit | No known vulnerabilities found |
| Production license policy | Passed: 265 package entries, 11 expressions |

License inventory includes MPL-2.0, CC-BY-4.0, and a reviewed Sharp platform
binary expression of `Apache-2.0 AND LGPL-3.0-or-later`. This is not represented
as universally permissive; release notices remain an OCI-delivery obligation.

## 4. Final verification results

| Check | Result |
|---|---|
| Workflow policy | Passed: structural YAML validation, read-only permissions, immutable actions |
| Prettier | Passed: all matched files |
| ESLint | Passed: zero warnings |
| Astro diagnostics | 8 files; 0 errors, 0 warnings, 0 hints |
| Vitest | 2 files; 6 tests passed |
| Astro production build | Passed; `/index.html` prerendered |
| Output mode | Static default with Node standalone adapter |
| Session runtime | Explicitly disabled |
| HTTP smoke | 200; expected `<h1>NAOBI</h1>` marker present |
| Preview cleanup | Official stop command succeeded; no server remained |
| Governance validator | Passed: 16 required files and 100 Markdown files |

## 5. Failures found and resolved

The evidence retains first causal failures rather than reporting only the final
green result:

1. Pnpm rejected `esbuild` because pnpm 11 had replaced the older
   `onlyBuiltDependencies` pattern with `allowBuilds`. Context7 confirmed the
   current setting; a narrow allowlist was applied.
2. Peer audit found `eslint-plugin-jsx-a11y` did not support ESLint 10. It was an
   optional Astro peer, so it was removed and automatic optional-peer install
   was disabled. The peer graph then passed.
3. Prettier identified four repository configuration files. Only mechanical
   formatting was applied.
4. ESLint rejected `console.log` in the workflow validator. It was replaced by
   `process.stdout.write`; lint then passed.
5. The first preview smoke invocation left a managed child server running on
   port 4321. Its status and log were inspected, the HTTP test passed, and the
   server was stopped with `astro preview stop`. Final status confirmed no
   preview server remained.
6. Security review found the initial permissions check accepted `write-all`
   and job-level write overrides. The regex validator was replaced with a
   structural YAML policy that permits only `read`, `none`, or `read-all`.
7. Security review found mutable `docker://` tags bypassed immutable-action
   enforcement. Docker actions now require a `sha256` digest, while external
   actions and reusable workflows require a full 40-character commit SHA.
8. Pnpm 11 ignores non-registry policy in `.npmrc`. The ineffective
   `save-exact=true` file was removed and `saveExact: true` was placed in the
   authoritative workspace configuration.

## 6. Privacy and secret boundary

- No credential or real `.env` value was introduced.
- Environment schema values are server-secret and optional.
- Astro telemetry is disabled.
- Sessions are disabled rather than using the adapter's filesystem default.
- Source maps remain disabled for the production build.
- CI uses no deployment or provider secret.

## 7. Remaining remote evidence

- publish the branch and open a draft Checkpoint 3.1B PR;
- observe `verify` and `secret-scan` jobs on GitHub Actions;
- investigate any platform-specific CI difference;
- add the stable passing job names to the protected-main ruleset;
- read back effective rules; and
- obtain Raihan's checkpoint decision.

Checkpoint 3.1C remains locked.
