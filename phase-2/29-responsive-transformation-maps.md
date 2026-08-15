# 29 — Responsive Transformation Maps

**Version:** 1.0  
**Status:** Accepted  
**Gate:** 2.5 — High-Fidelity System  
**Governing specification:** Document 21

## 1. Transformation vocabulary

| Term | Meaning |
|---|---|
| Persist | Same role and visibility |
| Compress | Same content with reduced spacing or shorter established label |
| Stack | Columns become ordered vertical regions |
| Relocate | Function moves to a documented system control |
| Replace | Presentation changes while capability remains equivalent |
| Omit | Nonessential visualization is removed; source information remains |

## 2. Global shell

| Element | Full `>=1280` | Compact `1024–1279` | Simplified `768–1023` | Mobile `<768` |
|---|---|---|---|---|
| Identity | Persist | Persist | Persist | Persist |
| Location | Persist in rail | Compress | Persist in header | Persist in header |
| Environment | Persist | Persist | Persist | Persist |
| Signal selector | Visible in rail | Compress | Relocate to System | Relocate to System |
| Search | Visible action | Visible action | Visible action | First-level action |
| Map | Network action | Directory action allowed | Directory first | Directory only |
| Collaboration | Visible action | Visible action | Visible action | First-level action |
| Secondary telemetry | Visible when real | Compress | Relocate | Omit if nonessential |

## 3. Central OS

```text
FULL                COMPACT             SIMPLIFIED          MOBILE
┌──────┬──────┐     ┌─────┬─────┐       ┌───────────┐       ┌─────────┐
│ LAB  │LEDGER│     │ LAB │LEDGR│       │    LAB    │       │   LAB   │
└──────┴──────┘     └─────┴─────┘       ├───────────┤       ├─────────┤
┌────────┬────┐     ┌───────┬───┐       │  LEDGER   │       │ LEDGER  │
│ RECENT │SYS │     │RECENT │SYS│       ├───────────┤       ├─────────┤
└────────┴────┘     └───────┴───┘       │  RECENT   │       │ RECENT  │
                                        └───────────┘       └─────────┘
```

Order is always operator thesis → gateways → recent work → shared system
actions. Gateway equality is preserved after stacking.

## 4. Environment overview

| Region | Full | Compact | Simplified | Mobile |
|---|---|---|---|---|
| Environment thesis | 8–9 columns | Full width | Full width | Full width |
| Primary register | Large instrument | Large instrument | First stack item | First stack item |
| Status instrument | Adjacent | Adjacent/stack | Second stack item | Inline summary |
| Evidence/lineage | Adjacent pair | Controlled stack | Stack | Summary + open action |
| Failure/assumption log | Visible | Visible | Visible | Visible after primary content |

Signal Lab and Operations Ledger may use different internal density, but the
same responsive priority logic applies.

## 5. Evidence Depth

```text
FULL / COMPACT                      SIMPLIFIED / MOBILE
┌───────┬────────────────────┐      ┌───────────────────────────┐
│ DEPTH │ ACTIVE PROJECTION  │      │ BRIEF METHOD EVID. ART.  │ sticky
│ RAIL  │                    │      ├───────────────────────────┤
│       │                    │      │ ACTIVE PROJECTION         │
└───────┴────────────────────┘      └───────────────────────────┘
```

The control changes orientation, not meaning. No band creates four routes or
horizontal page scrolling. Sources and limitations remain after the projection.

## 6. Command/Search

| Property | Desktop/compact | Simplified/mobile |
|---|---|---|
| Container | Centered floating surface | Full-width or viewport surface |
| Initial emphasis | Input and suggestions | Visible results/actions plus input |
| Commands | Equal search mode | Supported secondary behavior |
| Close | Escape and visible close | Escape where available and visible close |
| Result data | Type, title, env, status | Same; may stack within row |

## 7. System Map

```text
FULL                 COMPACT              TABLET / MOBILE
NETWORK | DIRECTORY  NETWORK? | DIRECTORY DIRECTORY
  ✓          ✓          optional    ✓         ✓
```

The directory is authoritative. Network omission requires no alternate route
because every destination and status already exists in the directory.

## 8. Reading and direct entry

| Element | Full/compact | Simplified/mobile |
|---|---|---|
| Reduced shell | Horizontal utility rail | Compact header |
| Reading column | Centered 62–76 characters | Fluid width with 16 px gutter |
| Metadata | Inline grouped | Wrapped semantic groups |
| Figures | In reading flow or wider breakout | In flow; local overflow if essential |
| Tables | Full table | Summary plus labeled records or local overflow |
| Open Central OS | Utility action | Utility action |

## 9. Collaboration

```text
DESKTOP                             MOBILE
┌─ ROUTE ────┬─ PROJECT BRIEF ──┐  ┌─ ROUTE ───────────────┐
│ choices    │ fields           │  └───────────────────────┘
│ context    │ privacy + submit │  ┌─ PROJECT BRIEF ───────┐
└────────────┴──────────────────┘  │ fields                 │
                                   │ privacy + submit       │
                                   └────────────────────────┘
```

Error summary is inserted before the form on all bands. It does not replace
field-specific guidance.

## 10. Wide content

| Content | Transformation order |
|---|---|
| Data table | Preserve headers → shorten optional metadata → labeled records → local overflow |
| Engineering estimate | Preserve quantity/unit/rate-source/maturity relations → labeled records |
| Plot | Preserve axes/legend → responsive aspect → local pan only if interpretation remains visible |
| Terminal output | Wrap prose → retain code formatting → local horizontal overflow |
| System network | Reduce labels → simplify edges → omit network, keep directory |

## 11. Breakpoint evidence rule

The provisional values remain until a browser prototype demonstrates a content
failure or excessive void. Each proposed change records viewport, route,
content fixture, failure, before/after screenshot, and regression result across
the other bands.

## 12. Acceptance

- No global capability disappears.
- No page develops global horizontal scrolling.
- Stacking preserves reading and focus order.
- Mobile includes both professional gateways, recent work, search, signal,
  depth where applicable, and Collaboration.
- Nonessential spectacle is removed before evidence or navigation.

