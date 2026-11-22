# HerRays Specialist Responsibility Matrix

**Deliverable:** TASK-003 — Create the specialist responsibility matrix
**Workstream:** Foundation
**Version:** 0.1 · **Status:** Proposed, not executed
**Owner (accountable role):** Head of Product (acting as Program Director)
**Reviewers:** Senior UX/product designer · Behavioral scientist · iOS engineer · UX researcher · Clinical reviewer · Privacy/regulatory reviewer
**Source basis:** `prd.md` §2 (Specialist operating model), §3 (Benchmark use), §4 (Evidence infrastructure), §5 (Competitive-intelligence workflow & audits), §6 (Parallel research), §7 (Opportunity synthesis), §8 (Concept studios), §9 (Validation), §11 (Five quality gates), §13 (Prompts 00–12), §14 (Handoff templates)
**Companion artifact:** `docs/strategy/program-workstream-registry.md` (TASK-002) — this matrix populates the `reviewer`/`contributing_roles` fields of every workstream record there.

---

## 0. How to read this document

This is the **single source of truth for who does which research activity and who signs which approval.** The workstream registry (TASK-002) answers *what the eight streams are and who owns each stream*; this matrix answers the finer question *which of the fifteen specialist roles is Accountable, Responsible, Consulted or Informed for each individual research activity and each review gate* — and proves that **no required audit or mandatory gate is left without an assigned role.**

> **No-fabrication statement.** This matrix assigns **roles to activities**. It records **no research observations, no audit findings, no gate verdicts, and no completion claims.** Every activity below is a *planned responsibility assignment*, not evidence that the activity has occurred. Roles are **accountable role types**, not named individuals; actual staffing is an open unknown (§6). Assigning a reviewer here does not imply that reviewer has reviewed anything. Presenting any assignment as a completed review would violate `prd.md` §14 ("A deliverable is **not complete** if … hypothetical users/tests are presented as real").

### 0.1 The fifteen roles (`prd.md` §2)

Thirteen core specialists plus two mandatory additional reviewers. Each carries a stable role ID used throughout this matrix.

| Role ID | Specialist role | Required lens (`prd.md` §2) | Primary deliverable (`prd.md` §2) |
|---|---|---|---|
| R01 | Product visionary / Head of Product | Audience, strategy, differentiation, opportunities | Opportunity/decision map |
| R02 | Behavioral scientist | COM-B, BCTTv1, Self-Determination Theory, Fogg, habit evidence | Mechanism audit |
| R03 | Senior UX/product designer | Information architecture, cognitive walkthrough, friction | Annotated journey maps |
| R04 | Visual/brand designer | Visual codes, distinctiveness, emotional response | Visual pattern library |
| R05 | iOS engineer | Native interactions, HealthKit, widgets, performance | iOS feasibility audit |
| R06 | Backend engineer | Identity, data, sync, integration, privacy | Architecture implications |
| R07 | UX researcher | Interviews, observation, diary studies, usability | Primary user evidence |
| R08 | Motion/interaction designer | Transitions, feedback, timing, reduced motion | Interaction/motion inventory |
| R09 | Product analyst / growth specialist | Activation, retention hypotheses, economics, experimentation | Measurement plan |
| R10 | Content strategist / UX writer | Coaching language, tone, clarity, autonomy | Content patterns and anti-patterns |
| R11 | ASO / App Store specialist | Discovery, screenshots, metadata, reviews | ASO/editorial audit |
| R12 | PR / editorial specialist | Launch narrative, Apple editorial relevance | Editorial/launch positioning |
| R13 | QA / accessibility specialist | VoiceOver, Dynamic Type, failure states, reliability | Quality/accessibility audit |
| R14 | Clinical reviewer *(additional)* | Evidence, care boundaries, clinical escalation | Clinical safety review |
| R15 | Privacy / regulatory reviewer *(additional)* | GDPR, data minimization, medical claims/device implications | Compliance risk register |

**Role-count check:** 13 core (R01–R13) + 2 additional reviewers (R14–R15) = **15 roles**, matching the `prd.md` §2 table and the TASK-003 acceptance criterion ("13 core specialist roles plus clinical and privacy reviewers"). ✔

### 0.2 RACI legend

Each cell in the activity matrices uses one letter. **Exactly one `A` per activity row** (single accountability, mirroring the single-accountable-owner rule in `prd.md` §2 and the registry §0.3).

| Letter | Meaning | Rule |
|---|---|---|
| **A** | **Accountable** — owns the output and signs it off. | Exactly one per row. May also do the work (A/R). |
| **R** | **Responsible** — performs the work. | One or more per row. |
| **C** | **Consulted** — two-way input before the output is finalized. | Optional, zero or more. |
| **I** | **Informed** — notified of the result, one-way. | Optional, zero or more. |

Where a role both owns and performs an activity it is shown as **A** (accountability implies responsibility unless a separate `R` is named). A blank cell means the role has no assigned part in that activity.

### 0.3 Pods (`prd.md` §2)

Roles are organized into five pods for scheduling and reconciliation; the pod does **not** dilute single accountability.

| Pod | Roles | Purpose |
|---|---|---|
| Product & Market | R01, R09, R11, R12 | Strategy, market intelligence, discovery/positioning |
| Behavior & Research | R02, R07, R10 | Mechanisms, primary user evidence, coaching language |
| Experience & Creative | R03, R04, R08 | IA, visual identity, motion/interaction |
| Engineering & Data | R05, R06, R09 | Native iOS, backend/data, measurement (R09 bridges) |
| Quality & Clinical | R13, R14, R15 | Accessibility/reliability, clinical safety, privacy/regulatory |

> R09 (product analyst/growth) intentionally spans Product & Market and Engineering & Data: it owns measurement, which couples growth hypotheses to data instrumentation. This overlap is a contribution across pods, not dual accountability for any single activity.

---

## 1. Summary — each role's accountable surface

The activities each role is **Accountable (A)** for. Downstream matrices (§2–§4) carry the full R/C/I detail. Every role holds at least one accountable activity, and every required audit and mandatory gate has exactly one accountable owner (verified in §5).

| Role | Accountable for (owns the sign-off) |
|---|---|
| R01 Head of Product / visionary | Opportunity Atlas (OPP); opportunity prioritization; final product direction (contributes to WS08 but owns the strategy artifact); program-level gate verdicts when acting as Program Director (recorded separately, §4.3) |
| R02 Behavioral scientist | Behavioral-science evidence synthesis; BCT matrix & mechanism map; **behavioral audit** of each benchmark app; ethical anti-pattern catalogue |
| R03 Senior UX/product designer | Journey Library & teardown dossiers; **UX heuristic audit**; cross-specialist reconciliation record; eight-screen wireframe specification |
| R04 Visual/brand designer | Visual pattern library; **visual half of the visual/motion audit** (co-accountable split defined in §2.3) |
| R05 iOS engineer | iOS capability & integration inventory; **iOS half of the iOS/accessibility audit**; iOS feasibility sections of the build/buy matrix |
| R06 Backend engineer | Reference architecture & data/sync/identity design; backend build/buy/integrate/defer decisions |
| R07 UX researcher | Recruitment & consent pack; discovery interview guide; diary study kit; user-needs synthesis; review-sampling & coding protocol (research-method ownership) |
| R08 Motion/interaction designer | Interaction/motion inventory; **motion half of the visual/motion audit**; microinteraction prototypes (e.g. TASK-046) |
| R09 Product analyst / growth | Success-metrics specification (TASK-001); growth & UX-writing audit (growth half); commercial-estimates evidence template; measurement/experiment registers |
| R10 Content strategist / UX writer | Content patterns & anti-patterns; coaching-language/tone review; UX-writing half of the growth/content audit |
| R11 ASO / App Store specialist | App Registry population; listing & pricing capture; ASO/store-metadata audit |
| R12 PR / editorial specialist | Editorial-recognition source ledger (App of the Day verification); launch/editorial positioning |
| R13 QA / accessibility specialist | **Accessibility half of the iOS/accessibility audit**; accessibility gate evidence; failure-state & reliability checks |
| R14 Clinical reviewer | Clinical safety review; clinical-boundary checklist; **clinical gate** sign-off |
| R15 Privacy / regulatory reviewer | Compliance risk register; privacy/data-minimization checklist; **privacy gate** sign-off |

---

## 2. Research-activity responsibility matrix

Activities are grouped by workstream (see TASK-002 registry). Each row names the activity, its source task/PRD clause, and the RACI assignment across R01–R15. Cells omitted for a role mean "no assigned part."

> Reading tip: the table lists only the **non-blank** roles per activity to stay legible; the full fifteen-column grid is normative but sparse. Each row still carries exactly one **A**.

### 2.1 Foundation & program operations (`prd.md` §4, §5 Phase 0; TASK-001…009)

| # | Activity | Source | A (owns) | R (performs) | C (consulted) | I (informed) |
|---|---|---|---|---|---|---|
| F1 | Success-metrics specification | TASK-001 | R09 | R09 | R02, R07, R14 | all |
| F2 | Workstream registry | TASK-002 | R01 | R01 | pod leads | all |
| F3 | **Specialist responsibility matrix (this doc)** | TASK-003 | R01 | R01 | R14, R15 | all |
| F4 | Evidence grading rules | TASK-004 | R02 | R02, R07 | R09, R14 | all |
| F5 | Source/evidence record schema | TASK-005 | R07 | R07 | R06, R15 | all |
| F6 | Benchmark app registry | TASK-006 | R11 | R11 | R01, R03 | all |
| F7 | Extended app selection rubric | TASK-007 | R01 | R01, R11 | R02, R07 | all |
| F8 | Research gap & contradiction log | TASK-008 | R01 | R01 | all pod leads | all |
| F9 | Decision & experiment registers | TASK-009 | R09 | R09, R01 | R02, R14, R15 | all |

### 2.2 Market & competitor intelligence — WS01 (`prd.md` §5 Phase 1; Prompt 01)

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| M1 | App Registry population (15–20 apps) | TASK-006/011 | R11 | R11, R01 | R03 | all |
| M2 | Listing, screenshots & pricing capture | TASK-011 | R11 | R11 | R12 | R01, R09 |
| M3 | Competitor feature comparison matrix | TASK-012 | R01 | R01, R03 | R02, R09 | all |
| M4 | Editorial-recognition source ledger (App of the Day verification) | TASK-010 | R12 | R12 | R11 | R01 |
| M5 | Review-sampling protocol | TASK-013 | R07 | R07, R09 | R11 | R01 |
| M6 | Review coding worksheet & coding | TASK-014 | R09 | R09, R07 | R10 | R01 |
| M7 | Commercial-estimates evidence template | TASK-015 | R09 | R09 | R01 | all |

### 2.3 Experience teardown — WS02, including the five mandatory specialist audits (`prd.md` §2, §5 Phase 2; Prompt 02)

**Activity set A — teardown infrastructure & journeys**

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| T1 | Ten standardized test journeys | TASK-016 | R03 | R03, R07 | R02, R08 | all |
| T2 | Screen-capture & annotation protocol | TASK-017 | R03 | R03 | R13 | all |
| T3 | Journey Library & five teardown dossiers | Prompt 02 | R03 | R03, R07 | R04, R08 | all |
| T4 | Friction catalogue & pattern library | Prompt 02 | R03 | R03, R08 | R04 | all |

**Activity set B — the five independent specialist audits (one Accountable role each).** `prd.md` §5 Phase 2 mandates five independent audits per core app — *behavioral, UX, visual/motion, growth/content, iOS/accessibility* — then reconciliation. Because two of these audits bundle two lenses, accountability is split by lens so that **no lens is unassigned** while each audit output still has a single named owner.

| # | Audit (template task) | Lens | Accountable owner | Responsible | Consulted | Informed |
|---|---|---|---|---|---|---|
| T5 | Behavioral audit (TASK-018) | Cues, motivation, feedback, repetition, autonomy, recovery (BCT-coded) | **R02** | R02 | R07, R14 | all |
| T6 | UX heuristic audit (TASK-019) | Task success, cognitive load, navigation, error recovery, friction | **R03** | R03 | R07 | all |
| T7a | Visual/motion audit — visual lens (TASK-020) | Hierarchy, typography, brand distinction, contrast | **R04** | R04 | R13 | all |
| T7b | Visual/motion audit — motion lens (TASK-020) | Animation timing, feedback, reduced-motion support | **R08** | R08 | R13 | R04 |
| T8a | Growth/content audit — growth lens (TASK-021) | First-value moment, paywall timing, lifecycle, return triggers | **R09** | R09 | R01 | all |
| T8b | Growth/content audit — content lens (TASK-021) | Copy tone, clarity, autonomy, coaching anti-patterns | **R10** | R10 | R02 | all |
| T9a | iOS/accessibility audit — iOS lens (TASK-022) | Native behaviors, offline, performance, interaction targets | **R05** | R05 | R06 | all |
| T9b | iOS/accessibility audit — accessibility lens (TASK-022) | VoiceOver, Dynamic Type, contrast, failure states | **R13** | R13 | R05 | all |

> **Why the split, not a merge.** `prd.md` §2 lists *visual/brand designer* (R04) and *motion/interaction designer* (R08) as distinct roles, and *iOS engineer* (R05) and *QA/accessibility specialist* (R13) as distinct roles. Collapsing each pair into one "audit owner" would silently drop a required lens (motion or accessibility). The split keeps one accountable owner **per lens** while T10 (below) reconciles the paired outputs into a single audit record, so the "five audits" framing and the "no audit lacks a role" requirement both hold. The pairing is recorded in §5.2.

**Activity set C — reconciliation**

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| T10 | Cross-specialist reconciliation (disagreements preserved) | TASK-023 | R03 | R03 | R02, R04, R05, R08, R09, R10, R13 | R01, R14, R15 |

### 2.4 Behavioral science & clinical evidence — WS03 (`prd.md` §6; Prompt 03)

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| B1 | Behavioral literature search protocol | TASK-024 | R02 | R02 | R07, R14 | all |
| B2 | Behavior-change evidence extraction table | TASK-025 | R02 | R02 | R09, R14 | all |
| B3 | BCT matrix & mechanism map | Prompt 03 | R02 | R02 | R03, R10 | all |
| B4 | Ethical anti-pattern catalogue (guilt, compulsion, burden, over-tracking) | Prompt 03, §6 | R02 | R02, R10 | R14, R07 | all |
| B5 | Clinical-evidence boundary review of synthesis | §6, §11 | R14 | R14 | R02 | R01, R15 |

### 2.5 User discovery — WS04 (`prd.md` §6; Prompt 04)

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| U1 | Recruitment quotas & consent pack (20–30 women) | TASK-026 | R07 | R07 | R15, R14 | R01 |
| U2 | Neutral discovery interview guide | TASK-027 | R07 | R07 | R02, R10 | all |
| U3 | 7–14-day diary study kit | TASK-028 | R07 | R07 | R02 | R01 |
| U4 | User-needs synthesis (JTBD, segments, unmet needs) | TASK-029 | R07 | R07 | R02, R01 | all |
| U5 | Consent & data-minimization sign-off before any collection | §6, §11 | R15 | R15 | R14 | R07, R01 |

### 2.6 Technology & economics — WS05 (`prd.md` §6, §10; Prompt 05)

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| E1 | Build/buy/integrate/defer matrix | TASK-037 | R06 | R06, R05 | R09, R15 | R01 |
| E2 | Phased tool-purchasing decision sheet | TASK-038 | R09 | R09 | R01, R06 | all |
| E3 | iOS capability & integration inventory (HealthKit, widgets, Live Activities, haptics, sync) | TASK-039 | R05 | R05 | R06, R13 | all |
| E4 | Privacy & clinical-boundary checklist | TASK-040 | R15 | R15 | R14, R06 | R01 |

### 2.7 Capability extraction & review — WS06 inputs (`prd.md` §5 Phase 3–4; Prompts 06–07)

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| C1 | Capability mechanism record schema | TASK-030 | R02 | R02, R03 | R09 | all |
| C2 | Five-layer capability extraction worksheet (streak example) | TASK-031 | R02 | R02, R03 | R08 | all |
| C3 | 90-minute capability workshop script (role assignments, 3+ alternatives) | TASK-032 | R01 | R01, R03 | R02, R05, R07, R09 | all |
| C4 | Capability safety-gate checklist (clinical, privacy, manipulation, a11y, claims) | TASK-033 | R14 | R14, R15 | R13, R02 | R01 |
| C5 | Interactive capability evaluation scorecard (weighted 0–100) | TASK-034 | R09 | R09 | R01, R02 | all |
| C6 | Adopt/Adapt/Invent/Reject/Defer decision form | TASK-035 | R01 | R01 | R02, R14, R15 | all |
| C7 | Capability red-team challenge protocol | TASK-036 | R02 | R02, R07 | R14, R13 | R01 |

### 2.8 Opportunity synthesis — WS06 (`prd.md` §7; Prompt 08)

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| O1 | Opportunity Atlas record schema | TASK-041 | R01 | R01 | R07, R02 | all |
| O2 | Opportunity prioritization rubric (≥12 opportunities → 4–6 territories) | TASK-042 | R01 | R01, R09 | R02, R07 | all |

### 2.9 Concept innovation — WS07 (`prd.md` §8; Prompt 09)

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| K1 | Six isolated concept studio briefs | TASK-043 | R01 | R01 | R02, R03, R04, R05 | all studio leads |
| K2 | Divergent concept submission template (15 ideas, 3 dossiers) | TASK-044 | R01 | R01, R03 | R02 | all |
| K3 | Eight-screen low-fidelity wireframe specification | TASK-045 | R03 | R03 | R04, R08, R13 | all |
| K4 | "Your Little Win Today" microinteraction prototype | TASK-046 | R08 | R08 | R03, R13, R02 | R01 |
| K5 | Habit Graduation state machine (no punitive reset) | TASK-047 | R02 | R02, R03 | R09, R13 | R01 |

> Within WS07, the six studios work independently (`prd.md` §8). R01 is accountable for the *briefs and the shared evidence package*, not for the internal design choices of any studio; each studio's internal accountability is delegated to its studio lead (recorded in the registry WS07 record). Isolation of first-round concepts is a governance rule, not a role assignment (§6).

### 2.10 Validation & selection — WS08 (`prd.md` §9; Prompts 10–11)

| # | Activity | Source | A | R | C | I |
|---|---|---|---|---|---|---|
| V1 | Concept testing & final selection pack (neutral scripts, counterbalancing) | TASK-048 | R07 | R07, R09 | R13, R02 | R01 |
| V2 | Accessibility validation of prototypes | §9, §11 | R13 | R13 | R03 | all |
| V3 | Clinical-safety validation of finalists | §9, §11 | R14 | R14 | R02 | R01, R15 |
| V4 | Privacy/data validation of finalists | §9, §11 | R15 | R15 | R06 | R01 |
| V5 | Final product direction & MVP handoff | Prompt 11 | R01 | R01 | all pod leads | all |

---

## 3. Review-approval responsibility matrix (sign-offs)

Approvals are distinct from the work that produces an output: a role may be **R** for an activity but must not be the sole **A** for its own safety sign-off. Mandatory gates (clinical, privacy, accessibility, ethics, unsupported-claims) are **non-compensable** (`prd.md` §9, §11) — they cannot be traded against weighted scores and each has a dedicated accountable approver.

### 3.1 The five quality gates (`prd.md` §11)

At every gate the **Program Director (R01 in governance capacity)** issues the overall `pass` / `conditional pass` / `fail` verdict, but the mandatory-gate approvers below must each sign before a `pass` is admissible.

| Gate | Name | Overall verdict (A) | Mandatory co-sign approvers (each A for its gate) | Consulted |
|---|---|---|---|---|
| 1 | Research foundation | R01 (Program Director) | R14 (clinical boundary on evidence), R15 (source/privacy handling) | R02, R03, R07 |
| 2 | Opportunity readiness | R01 | R14 (clinical opportunities), R15 (consent/data in WS04) | R02, R07, R09 |
| 3 | Concept readiness | R01 | R13 (accessibility feasibility), R14, R15 | R02, R03 |
| 4 | Validation readiness | R01 | R13 (accessibility), R14 (clinical), R15 (privacy) | R07, R09 |
| 5 | Build readiness | R01 | R13, R14, R15 | R05, R06, R09 |

### 3.2 Mandatory non-compensable gate approvers (`prd.md` §9, §11; capability safety gate TASK-033)

These five checks must be cleared **before** any weighted scoring at capability review (§5 Phase 4) and before gate pass. Each has exactly one accountable approver; none may be waived by a weighted trade-off.

| Mandatory gate | Accountable approver | Responsible for evidence | Possible verdicts |
|---|---|---|---|
| Clinical safety & care boundaries | **R14 Clinical reviewer** | R02, R07 | pass / redesign / investigate / reject |
| Privacy, data minimization & regulatory | **R15 Privacy/regulatory reviewer** | R06, R07 | pass / redesign / investigate / reject |
| Accessibility (VoiceOver, Dynamic Type, contrast, motion) | **R13 QA/accessibility specialist** | R03, R04, R08 | pass / redesign / investigate / reject |
| Manipulation / dark-pattern / autonomy harm | **R02 Behavioral scientist** | R10, R07 | pass / redesign / investigate / reject |
| Unsupported-claims (efficacy, medical, retention) | **R01 Head of Product** (with R14 co-sign on medical claims) | R09, R12 | pass / redesign / investigate / reject |

### 3.3 Audit sign-offs and reconciliation

Each of the five teardown audits (§2.3 set B) is signed off by its accountable lens owner; the paired audits are reconciled into a single audit record by R03 before the audit is considered complete.

| Audit record | Signed by (A per lens) | Reconciled into one record by |
|---|---|---|
| Behavioral audit | R02 | — (single lens) |
| UX heuristic audit | R03 | — (single lens) |
| Visual/motion audit | R04 (visual) + R08 (motion) | R03 (reconciliation, T10) |
| Growth/content audit | R09 (growth) + R10 (content) | R03 (reconciliation, T10) |
| iOS/accessibility audit | R05 (iOS) + R13 (accessibility) | R03 (reconciliation, T10) |

---

## 4. Separation-of-duties and governance rules

1. **One A per row, always.** Every activity and every approval names exactly one accountable role. Adding a specialist adds **R**, **C**, or **I** — never a second **A** (`prd.md` §2; registry §0.3).
2. **No self-approval of safety.** A role that is **R** for producing an output must not be the sole **A** for that output's *clinical, privacy, or accessibility* sign-off. Clinical (R14), privacy (R15) and accessibility (R13) approvals are held by roles independent of the producing team wherever the PRD's pod structure allows.
3. **Mandatory gates are non-compensable.** The five §3.2 gates are pass/redesign/investigate/reject only; they are never averaged into the weighted capability or selection scores (`prd.md` §9, §11). A single `reject` on any mandatory gate blocks the overall verdict regardless of weighted score.
4. **Program-Director hat is recorded separately.** R01 acting as Program Director issues gate verdicts (§3.1); R01 acting as WS06 owner produces the Opportunity Atlas (§2.8). The two hats are logged distinctly so the conflict at WS06's own gate is visible and co-reviewed by R14/R15 (consistent with registry §4).
5. **Independence of concept studios.** No role assignment overrides the §8 rule that the six studios must not see each other's first-round designs; isolation is enforced by the Concept Program Lead (registry WS07), not relaxed by any shared **C**/**I** assignment in §2.9.
6. **Disagreements preserved.** The reconciliation activity (T10) must record competing interpretations, not erase them (`prd.md` §2, §5 Phase 2; TASK-023). Consensus is not required for an audit to be complete; a logged disagreement with a follow-up experiment is a valid output.

---

## 5. Coverage verification (acceptance criterion: "no required audit lacks an assigned role")

### 5.1 Every required audit has exactly one accountable role per lens

| Required audit (`prd.md` §2, §5 Phase 2) | Lens(es) | Accountable role(s) | Unassigned? |
|---|---|---|---|
| Behavioral audit | 1 | R02 | No ✔ |
| UX heuristic audit | 1 | R03 | No ✔ |
| Visual/motion audit | 2 (visual, motion) | R04, R08 | No ✔ |
| Growth/content audit | 2 (growth, content) | R09, R10 | No ✔ |
| iOS/accessibility audit | 2 (iOS, accessibility) | R05, R13 | No ✔ |
| Clinical safety review | 1 | R14 | No ✔ |
| Compliance/privacy risk register | 1 | R15 | No ✔ |

All seven required audit outputs (five teardown audits + two mandatory additional reviews) are covered; the three two-lens audits are split so motion, content and accessibility lenses each have a dedicated owner rather than being folded into a sibling lens. **No required audit lacks an assigned role.** ✔

### 5.2 Every mandatory gate has an approver

| Mandatory gate | Approver | Covered? |
|---|---|---|
| Clinical | R14 | ✔ |
| Privacy/regulatory | R15 | ✔ |
| Accessibility | R13 | ✔ |
| Manipulation/autonomy | R02 | ✔ |
| Unsupported-claims | R01 (+R14 on medical) | ✔ |

### 5.3 Every role carries at least one accountable activity

R01 ✔ (F2, F3, F7, F8, M3, C3, C6, O1, O2, K1, K2, V5, gate verdicts) · R02 ✔ (F4, B1–B4, C1, C2, C7, K5, T5, manipulation gate) · R03 ✔ (T1–T4, T6, T10, K3) · R04 ✔ (T7a, visual pattern library) · R05 ✔ (E1 iOS, E3, T9a) · R06 ✔ (E1 backend, reference architecture) · R07 ✔ (F5, M5, U1–U4, V1) · R08 ✔ (T7b, K4) · R09 ✔ (F1, F9, M6, M7, E2, C5, growth audit) · R10 ✔ (T8b, content patterns) · R11 ✔ (F6, M1, M2) · R12 ✔ (M4, editorial positioning) · R13 ✔ (T9b, V2, accessibility gate) · R14 ✔ (B5, C4, V3, clinical gate) · R15 ✔ (U5, E4, V4, privacy gate).

**All 15 roles hold ≥1 accountable activity; every required audit and every mandatory gate is owned.** ✔

---

## 6. Open questions, unknowns, and change log

**Unknowns (to resolve before execution, not fabricated here):**
- **Staffing reality.** `prd.md` §2 notes the streams are "not eight full-time teams" and that staff contribute across streams. The 15 roles are **accountable role types**, not named individuals; one person may hold several role IDs. Which human holds which role is **unknown** and must be recorded when staffing is confirmed. If one person holds two roles that §4 requires to be independent (e.g. a producer also being the safety approver), that conflict must be resolved by adding an independent reviewer — it may not be waived.
- **Studio-lead mapping.** WS07's six studio leads (registry WS07) are drawn from R01–R13 but their specific per-studio assignment is deferred to the Concept Program Lead; this matrix assigns only the shared-brief accountability (K1–K2).
- **Lens-split confirmation.** The decision to split the visual/motion, growth/content and iOS/accessibility audits by lens (§2.3, §5.1) is a proposed default to guarantee lens coverage under the §2 role list. If staffing collapses R04/R08, R09/R10, or R05/R13 into single individuals, the audit still has one accountable owner per the merged role, and the split becomes an internal checklist rather than two sign-offs — flagged for Program-Director confirmation.

**Dependencies on other tasks:**
- Consumes TASK-002 (workstream registry) — this matrix populates its `reviewer`/`contributing_roles` fields.
- Consumes the role list and audit definitions from `prd.md` §2, §5.
- Feeds TASK-032 (90-minute capability workshop role assignments), TASK-033 (capability safety gate — approver roles R13/R14/R15/R02), and every `reviewer` field across TASK-018…022 audit templates.
- Interacts with TASK-004 (evidence grading) and TASK-001 (success metrics, R09-owned).

**Change log:**

| Date | Change | Rationale |
|---|---|---|
| 2026-11-22 | v0.1 created; 15 roles mapped to all research activities and review approvals; lens-split coverage proof added | Initial matrix per TASK-003 |

---

*End of matrix. Status: Proposed, not executed. No assignment in this document implies that any research, audit, review, or gate verdict has occurred; every entry is a planned responsibility, and all roles are accountable role types, not named individuals.*
