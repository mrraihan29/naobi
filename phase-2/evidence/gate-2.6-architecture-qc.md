# Gate 2.6 Architecture QC Record

**Version:** 1.0  
**Status:** Internal design-QC complete; Product Owner approval pending  
**Date:** 2026-08-15

## 1. Evaluation-standard coverage

| Required section | Primary evidence | QC result |
|---:|---|:---:|
| 1. Problem and workload | 31 §7–8; 32 §2; 33 §1 | Pass |
| 2. Functional/non-functional constraints | 31 §2, §7–8; 38 §4 | Pass |
| 3. Current version-verified stacks | 32 §3–9 | Pass |
| 4. Veto and weighted matrix | 33 §2–3 | Pass |
| 5. System context and container diagrams | 34 §3–4 | Pass |
| 6. Rendering and routing | 34 §5 | Pass |
| 7. Content/schema/publishing | 34 §6 | Pass |
| 8. Search and indexing | 34 §7 | Pass |
| 9. Interactive execution | 34 §8 | Pass |
| 10. Collaboration delivery | 34 §2, §12; 35 collaboration surface | Pass |
| 11. Analytics/privacy flow | 32 §7; 35 privacy and retention | Pass |
| 12. Threat model/secrets/dependencies | 35 complete | Pass |
| 13. Build/test/deploy/rollback | 36 §2–5 | Pass |
| 14. Observability/backup/recovery | 36 §6–9 | Pass |
| 15. Performance/caching | 34 §9; 37 §9 | Pass |
| 16. SEO/accessibility/i18n | 34 §10; 37 §5, §10 | Pass |
| 17. Developer/author workflow | 34 §11; 36 §2–4 | Pass |
| 18. Cost model | 36 §11 | Pass with pre-purchase price recheck |
| 19. Failure and graceful degradation | 34 §12 | Pass |
| 20. Portability/exit | 34 §13; 35 service register | Pass |
| 21. Rejected alternatives | 33 §4–5; ADR-0009–0011 | Pass |
| 22. ADRs | ADR-0009–0012 | Pass; Proposed as required before approval |

## 2. Evidence-standard checks

| Check | Result | Note |
|---|:---:|---|
| Primary/official sources only | Pass | Sources are official project/vendor/government documentation. |
| Research date stated | Pass | 2026-08-15 in Document 32. |
| Versions/current state recorded | Pass | Astro, Node, TypeScript, React, Django, Pagefind, Coolify and host facts included where material. |
| Licenses recorded | Pass | Core framework/runtime candidates recorded; every Phase 3 package still requires lockfile/license inventory. |
| Fact versus inference/preference separated | Pass | Evidence labels in Document 32; recommendations explicitly marked. |
| At least two credible alternatives | Pass | Next.js Node and Django LTS. |
| Advantages/disadvantages symmetric | Pass | Document 33 §4. |
| Minimum sufficient architecture | Pass | One stateless application, no database/CMS/queue/search service/server compute. |
| Seven-part anti-overengineering control | Pass | New services tied to approved needs with failures, operator, cost, impact, and exit across Documents 32–36. |
| Product Owner approval not invented | Pass | Gate and ADRs remain Proposed/Pending. |

## 3. Cross-document consistency checks

| Invariant | Result |
|---|:---:|
| Normal public routes are pre-rendered; only inquiry and health are on demand | Pass |
| Repository is private; selected research repositories are separate | Pass |
| Content is Git/MDX without launch CMS | Pass |
| Large artifacts are linked, not hosted in the app container | Pass |
| Search covers approved public HTML only | Pass |
| Inquiry has no application database or body logs | Pass |
| Analytics has no free-form query/form/identity values | Pass |
| Merge authorizes automatic same-digest staging-to-production promotion | Pass |
| No manual production approval is added | Pass |
| 99.5%, RPO ≤24h, RTO ≤8h are preserved | Pass |
| Full accepted verification categories are launch-blocking where applicable | Pass |
| HF-01 through HF-12 remain mandatory before Phase 3 feature expansion | Pass |
| Masterbrand remains deferred to Gate 2.7 | Pass |

## 4. Architecture-risk review

| Risk | Current treatment | Residual status |
|---|---|---|
| Framework recommendation based on fashion | weighted/veto matrix tied to workload | Controlled |
| Spare VPS capacity encourages service sprawl | explicit no-database/service exclusions | Controlled |
| Automatic production deployment weakens control | protected merge, build once, staging gates, digest rollback | Controlled; branch settings require Phase 3 evidence |
| Third-party privacy drift | minimized payload, retention, adapters, pre-launch recheck | Open implementation evidence |
| Weekly-only Hostinger backup misses RPO | paid daily plus independent daily configuration backup | Proposed control; purchase/configuration pending |
| Visual architecture unproven in browser | HF-01–HF-12 vertical slice before expansion | Carried Phase 3 obligation |
| Code security cannot yet be validated | implementation scan before launch | Carried Phase 3–5 obligation |

## 5. QC conclusion

The Gate 2.6 recommendation package meets the mandatory evaluation structure
and is decision-ready. It must not be described as approved or locked until
Raihan accepts or revises Decisions A–D in Document 38. Actual implementation,
browser, security, performance, deployment, and restore evidence is correctly
deferred to Phase 3 and later release gates rather than fabricated during
architecture design.
