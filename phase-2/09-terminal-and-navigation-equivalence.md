# 09 — Terminal and Navigation Equivalence

**Version:** 1.0  
**Status:** Accepted  
**Gate:** 2.3 — Experience Architecture  
**Voice:** Precise and direct

## 1. Product command interface

The terminal is a constrained command interface for Raihan's OS. It is not a
Unix shell, code runner, chatbot, or general natural-language agent. It accepts
documented product commands and opens canonical destinations or system states.

There are no hidden, playful, fictional, or lore commands at launch.

## 2. Invocation and focus

- `Ctrl/Cmd+K` opens the combined Command/Search interface.
- Opening moves focus to the input and announces the interface name.
- Escape closes the interface and returns focus to the invoking control.
- Empty input displays command families, recent public destinations, and help.
- Input beginning with a recognized verb enters command mode.
- Other input performs unified search without requiring a `find` prefix.

## 3. Grammar

```text
go <destination>
open <content-id-or-slug>
find <query> [--domain <domain>] [--type <type>] [--status <status>]
filter <facet> <value>
depth <brief|method|evidence|artifact>
signal <phosphor|amber|ice>
read <on|off>
contact <brief|email|profile>
help [command]
clear
```

Command names are English because English is the canonical launch language.
Arguments are case-insensitive where ambiguity is impossible. Canonical slugs
remain exact.

## 4. Command contract

| Command | Result | Visual equivalent |
|---|---|---|
| `go home` | Central OS `/` | System identity/Home control |
| `go ai` | Signal Lab `/ai` | AI Research gateway/environment switcher |
| `go engineering` | Operations Ledger `/engineering` | Engineering gateway/environment switcher |
| `go journal` | Journal `/journal` | Shared-app launcher: Journal |
| `go about` | Operator Record `/about` | Shared-app launcher: About |
| `go collaborate` | Collaboration `/collaborate` | Persistent Collaboration action |
| `go map` | System Map | System Map control |
| `open <id>` | Canonical content or artifact | Search/list/card title or Artifact action |
| `find <query>` | Unified search results | Command/Search input |
| `filter <facet> <value>` | Apply current index/search filter | Visible filter control |
| `depth <state>` | Recompose eligible content | Evidence Depth Rail control |
| `signal <profile>` | Change session signal profile | Signal-profile selector |
| `read on` | Enter reading mode | Reading mode control |
| `read off` | Exit reading mode | Exit reading mode control |
| `contact brief` | Structured inquiry | Send project brief action |
| `contact email` | Email route | Email directly action |
| `contact profile` | Professional profile | Open professional profile action |
| `help` | Command reference and examples | Help control |
| `clear` | Clear terminal output/input state | Clear action inside Command interface |

No command executes a destination or action unavailable through visible UI.

## 5. Destination vocabulary

Supported aliases may improve recall without changing visible terminology:

- `home`, `central`, `os` → Central OS;
- `ai`, `research`, `lab` → Signal Lab overview;
- `engineering`, `estimate`, `ledger` → Operations Ledger overview, except the
  exact `go ledger` command which opens Research Ledger when enabled;
- `journal`, `blog`, `notes` → Journal index; and
- `collaborate`, `contact` → Collaboration Center.

Aliases appear in help. They are not secret commands.

## 6. Search and suggestions

Suggestions may contain:

- exact destinations;
- published content;
- Coming Soon entries with status prefix;
- available commands;
- filters; and
- spelling corrections.

Ordering priority:

1. exact command/destination match;
2. exact title match;
3. published relevant content;
4. Coming Soon relevant content;
5. fuzzy suggestion.

Search must not rank Coming Soon as though it contains evidence or completed
results.

## 7. Error behavior

Errors identify the failed object and next action.

```text
Unknown command: depht. Use `depth` or open Help.
Evidence depth is unavailable for this content type.
No public artifact matches `hermes-data`. Search related work.
Signal profile `red` is unavailable. Use phosphor, amber, or ice.
```

Invalid input does not change route, depth, signal profile, or current focus
context. The interface suggests at most three likely corrections.

## 8. Security boundary

- no arbitrary JavaScript, shell, code, or URL execution;
- no filesystem or server access;
- no commands that expose unpublished metadata;
- external destinations must come from validated content metadata;
- dangerous URL schemes are rejected;
- terminal output is escaped as content, never interpreted as HTML; and
- form submission remains a separate confirmed UI action.

## 9. Test matrix requirements

Every command requires:

- valid-input test;
- invalid-input and recovery test;
- keyboard/focus test;
- visible-equivalent destination comparison;
- canonical URL comparison when applicable;
- screen-reader announcement check; and
- mobile fallback decision.

Gate 2.6 will decide parser implementation. This document specifies behavior,
not the library or framework.
