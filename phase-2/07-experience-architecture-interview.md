# 07 — Experience Architecture Interview

**Version:** 0.3  
**Status:** Accepted — Gate 2.3 closed  
**Gate:** 2.3 — Experience Architecture  
**Product Owner:** Raihan  
**Facilitator:** Rei

## Purpose

Interview 2C determines how visitors move through the Central OS, Signal Lab,
Operations Ledger, content depth, terminal, search, and collaboration routes.
It defines behavior and hierarchy before low-fidelity wireframes are produced.

Visual identity, color, typography, and naming are not reopened here.

## Questions and design-lead recommendations

### 1. Central OS composition

After boot, the recommended Central OS shows four regions:

1. concise Operator/System identity;
2. AI Research and Engineering gateways;
3. latest or selected operations across both worlds; and
4. command/search hint plus collaboration status.

Should both gateways dominate the first screen equally, or should the latest
active work receive more space while both gateways remain immediately visible?

**Recommendation:** equal gateway priority, with latest work as a secondary
cross-world rail.

### 2. Central OS usefulness

Should visitors be required to choose a world before seeing substantive work,
or should Central OS itself expose selected work from both worlds?

**Recommendation:** Central OS remains useful and browsable; choosing a world
changes the instruments and depth, not access permission.

### 3. Gateway transition

When a visitor enters a world, should it open on:

- an environment overview;
- the latest completed work;
- a curated starting path; or
- a system map of everything available?

**Recommendation:** environment overview with one featured completed work,
current archive status, and direct routes to Research/Projects, Notes, About,
and Collaboration.

### 4. Direct-link entry

A visitor may arrive from Google, GitHub, or a shared link directly on an
article or case study. Should the full boot play?

**Recommendation:** no full boot on deep links. Load the content immediately
inside a reduced shell, show its environment and depth, and offer `Open Central
OS`. Boot is reserved for intentional root entry.

### 5. Global navigation model

**Recommendation:** combine a persistent System Rail for frequent actions with
an overlay System Map for spatial overview. Both expose clear labels. Avoid a
desktop full of movable windows.

Do you want the System Map to feel primarily like:

- a technical directory/tree;
- a connected operational network; or
- a navigable district map with more visual spectacle?

The recommended balance is a connected operational network with directory
clarity.

### 6. Terminal scope

**Recommendation:** use a constrained product command interface, not an
arbitrary computer shell. Initial command families:

- `go` — navigate;
- `open` — open content or artifact;
- `find` — search;
- `filter` — narrow content;
- `depth` — select Brief, Method, Evidence, or Artifact;
- `signal` — select Phosphor, Amber, or Ice;
- `help` — show valid commands and shortcuts; and
- `contact` — open collaboration routes.

Should the terminal support playful hidden commands, or remain entirely
functional and professional at launch?

### 7. Search behavior

**Recommendation:** one unified search across research, engineering projects,
field notes, blog, artifacts, and operator information, with environment,
content type, date, and technical depth as filters.

Should unfinished/Coming Soon entries appear in results, clearly labeled, or
remain excluded until publication?

### 8. Environment switching

When switching from one world to the other, the recommended behavior is to open
the destination environment overview. The system should not invent a parallel
page that does not exist.

Should the previous location remain available as a single `Return` action, or
is returning through browser history sufficient?

### 9. Evidence Depth Rail coverage

**Recommendation:** use all four depths only for research publications and
engineering case studies. Field notes and ordinary blog posts use a simpler
reading model with optional References and Artifacts. Operator Record and
collaboration pages do not use Evidence Depth Rail.

Do you approve this bounded use?

### 10. Keyboard operation

Recommended initial shortcuts:

- `Ctrl/Cmd + K` — open command/search interface;
- `/` — focus search when not typing;
- `?` — open command and shortcut help;
- `G` then `A` — go to AI Research;
- `G` then `E` — go to Engineering;
- `Esc` — close the current overlay or return focus; and
- `1–4` — change evidence depth when the rail is active.

Should single-key shortcuts such as `/`, `?`, and `1–4` be enabled, or should
all shortcuts require `Ctrl/Cmd` to minimize accidental activation?

### 11. Coming Soon behavior

**Recommendation:** show only a title, domain, short intent, and status such as
`Planned` or `In preparation`. Do not display invented progress percentages,
deadlines, results, or technical claims.

Should visitors be able to register interest by email, or should Coming Soon
remain informational with the general collaboration route only?

### 12. Collaboration entry

**Recommendation:** provide three explicit routes:

1. `Send project brief` — structured form;
2. `Email directly` — visible address or protected mail action; and
3. `Open professional profile` — external professional network.

The form should ask only for contact, project type, short brief, expected
timeframe, and confidentiality note. Do you approve this initial structure?

## Resulting outputs

After the answers are accepted, Rei will produce:

1. the information architecture and route inventory;
2. Central OS, Signal Lab, and Operations Ledger low-fidelity wireframes;
3. direct-link and environment-switching flows;
4. terminal grammar and visible-navigation equivalence matrix;
5. unified search and filtering behavior;
6. Evidence Depth Rail state model;
7. keyboard and focus-navigation rules;
8. collaboration-entry flow; and
9. a Gate 2.3 decision record for Product Owner approval.

## Response record — 2026-08-15

1. AI Research and Engineering receive equal gateway priority.
2. Central OS is universal and exposes selected work without requiring gateway
   entry.
3. Each gateway opens the recommended environment overview.
4. Direct content links bypass full boot and use the reduced shell.
5. System Map uses a connected operational network with directory clarity.
6. Terminal remains entirely professional; no playful or hidden commands.
7. Unified search includes all published and Coming Soon entries; Coming Soon
   receives an explicit status label.
8. Environment switch opens the destination overview and provides Return to
   previous location.
9. Evidence Depth Rail is limited to Research and Engineering Case Study.
10. Product shortcuts require Ctrl/Cmd. The architecture therefore uses one
    global shortcut, Ctrl/Cmd+K, and keeps other actions inside the command
    interface to avoid browser conflicts.
11. Collaboration entry and the recommended initial form structure are
    approved.

### Coming Soon interest decision

Raihan approved the design-lead recommendation: Coming Soon uses `Discuss this
topic` to open Collaboration with the topic preselected. The initial release
does not create a separate subscription or interest database.

The resulting specifications are recorded in Documents 08–10.
