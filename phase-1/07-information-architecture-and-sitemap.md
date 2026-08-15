# 07 — Information Architecture and Sitemap

**Document status:** Draft v0.1

## Architecture model

Raihan's OS uses a shared system shell containing two primary environments and
shared applications.

    Raihan's OS
    ├── Central OS
    │   ├── Short identity introduction
    │   ├── AI Research gateway
    │   ├── Engineering gateway
    │   ├── Featured/flagship entry
    │   ├── Recent updates
    │   └── Collaboration entry
    ├── AI Research Environment
    │   ├── Overview
    │   ├── Research
    │   ├── Experiments
    │   ├── Projects
    │   ├── AI-related Journal
    │   └── Coming Soon
    ├── Engineering Environment
    │   ├── Overview
    │   ├── Engineering Case Studies
    │   ├── Estimator Projects
    │   ├── Engineering Knowledge
    │   ├── Engineering-related Journal
    │   └── Coming Soon
    └── Shared System Applications
        ├── About / CV
        ├── Blog / Journal
        ├── Search
        ├── Research Ledger
        ├── Collaboration Center
        ├── Licenses
        └── System / Site Information

## Recommended canonical URL model

The OS presentation must not reduce the site to one URL with hidden window
state. Every durable content destination requires a stable URL.

    /
    /ai
    /ai/research
    /ai/research/{slug}
    /ai/experiments
    /ai/projects
    /engineering
    /engineering/case-studies
    /engineering/case-studies/{slug}
    /engineering/projects
    /journal
    /journal/{slug}
    /ledger
    /about
    /collaborate
    /licenses
    /system

Future translations use separate language URLs rather than replacing content
based only on browser state.

## Navigation model

### Persistent system shell

The shell should provide:

- Raihan's OS identity/home;
- current environment indicator;
- environment switcher;
- app launcher or dock;
- global search;
- terminal access;
- reading-mode entry when relevant;
- collaboration access;
- system/help access.

Repeated controls retain consistent location and meaning across environments.

### Dual-mode navigation

Every core destination must be reachable through:

1. visual OS navigation; and
2. stable links/search.

Terminal commands provide a third power-user route. No visitor is required to
type a command to complete a core task.

### Environment differentiation

AI and Engineering may change:

- visual atmosphere;
- domain vocabulary;
- featured content;
- default filters;
- diagrams and interaction patterns.

They must not change:

- basic control meanings;
- shared shell order;
- search behavior;
- terminal grammar;
- reading-mode behavior;
- collaboration access.

## Blog placement

Blog/Journal is a shared application:

- AI-tagged posts appear contextually in AI;
- Engineering-tagged posts appear contextually in Engineering;
- personal/philosophy posts appear in Central OS and the Journal index;
- one item can carry multiple domains/tags without duplication;
- all posts have one canonical URL.

## Research relationships

The content model must support:

- research contains experiments;
- experiment tests a hypothesis;
- failure produces a follow-up question;
- project implements or operationalizes research;
- blog explains or reflects on research;
- case study references reusable methods;
- newer work supersedes older work.

The Research Ledger and graph read these declared relationships. They must not
infer causal or intellectual lineage from tags alone.

## Direct-entry behavior

A visitor arriving from search or a shared link must receive:

- the content immediately, without a forced boot sequence;
- visible Raihan's OS identity and current environment;
- an accessible route to summary, evidence, related work, and collaboration;
- the option to enter the full OS experience.

## Mobile architecture

Mobile preserves the same information architecture but uses a simpler shell:

- gateway cards/list instead of full desktop composition;
- drawer/app launcher instead of persistent desktop dock;
- reading-first content;
- terminal available in simplified form if usable;
- no requirement for complex overlapping windows.

