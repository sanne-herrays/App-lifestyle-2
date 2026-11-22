# HerRays Competitor Feature Comparison Matrix

**Deliverable:** TASK-012 — Build the competitor feature comparison matrix
**Workstream:** Competitive Intelligence (WS01)
**Version:** 0.1 · **Status:** Proposed — taxonomy defined + matrix scaffolded, no cell yet observed
**Owner (accountable role):** Product / market lead (WS01), under Program Director custody
**Reviewers:** Senior UX/product designer · Behavioral scientist · ASO/App Store specialist · Privacy/regulatory reviewer · Program Director
**Source basis:** `prd.md` §3 (core-five capabilities-to-inspect, "do not build a collage of competitor features"), §4 (Journey Library `JRN-001`, Capability Library `CAP-001`, Evidence Library `EVD-001`, source handling, no-fabrication rule), §5 Phase 1–2 (market intelligence + controlled teardown, ten journeys), §6 (behavioral science: COM-B, BCTTv1, SDT), §11 Gate 1 (research-foundation gate), §13 Prompt 01/02 (analyze features; distinguish real observation from marketing)
**Depends on:** TASK-004 (evidence grading) · TASK-005 (`EVD` schema) · TASK-006 (`APP` registry — supplies the five columns) · TASK-011 (listing/pricing capture) · TASK-008 (gap/contradiction log)

---

## 0. How to read this document

This document is the **competitor feature comparison matrix** named in `prd.md` §13 Prompt 01 ("Analyze … features … Produce … positioning map, pricing comparison, coded dissatisfaction themes, gaps"). It does two separable things:

1. **Defines a normalized feature taxonomy** (§5) — a single, mechanism-anchored vocabulary of what a habit / lifestyle / behavior-change app *can* do, so that the five benchmark apps are compared on **the same axes, scored the same way**, rather than on each app's own marketing vocabulary. This is the substantive, reusable deliverable and is framework, not observation.
2. **Scaffolds the matrix** (§6) — the five registered core apps (`APP-001`…`APP-005` from TASK-006) as columns against the taxonomy as rows, with a strict cell contract (§3) in which **every populated claim must point to a captured `JRN` observation or `EVD` source record** (§4). Because no teardown has yet occurred, **every empirical cell is held at `unassessed`** and the matrix asserts no feature claim about any real app.

> **No-fabrication statement.** This matrix contains **no observed feature data**. It does not state that any of the five apps has, or lacks, any feature, because no controlled teardown (`prd.md` §5 Phase 2) has been performed and no screen has been observed by the Lab. Every cell is the literal token `unassessed` with `evidence_refs: []`. The only fully-populated cells anywhere in this file are in the **synthetic worked example (§8.3)**, which is labelled `ILLUSTRATIVE (synthetic)` end-to-end, uses fictitious `*-SYNTH-*` identifiers, and exists only to prove the cell-and-evidence mechanics run correctly. Nothing in this file may be cited as evidence about a real product; it is a container that *points at* observations to be captured later. Marketing-page feature lists, App Store screenshots, and recalled impressions are **not** admissible as a populated cell (§4.4, §7).

**Scope boundary — what this task is and is not.**
- **TASK-012 (this document) = the normalized feature taxonomy + the comparison grid.** It answers *"on which common axes do we compare the benchmark apps, and what is the evidence-linked state of each app on each axis?"*
- **It is not the teardown itself.** The direct walkthrough that *produces* a `JRN` observation (taps, timing, screens, friction) is WS02 / TASK-016–TASK-023; this matrix *consumes* those `JRN` records and renders them comparably. One teardown step → one `JRN` record → one or more cells here.
- **It is not the capability mechanism extraction.** Translating an observed feature into user job → mechanism → alternatives is the Capability Library (`CAP-001`, TASK-030/031). This matrix records *presence/shape* of a feature; it does not adopt, rank, or redesign it (that would violate the §3 "not a feature shopping list" / "do not build a collage" mandate). A feature appearing here is **not** a recommendation that HerRays build it.
- **It is not the pricing capture or the review coding.** Subscription terms live in TASK-011 (`LST`); coded user-review sentiment lives in TASK-013/014. This matrix links to those as evidence but does not restate them.
- **It is not the gap analysis output.** Where the matrix exposes an axis no benchmark serves well, that observation is routed to the Opportunity Atlas (TASK-041/042) and the gap log (TASK-008); it is not resolved into a concept here.

---

## 1. Purpose and non-negotiables

`prd.md` §13 Prompt 01 asks WS01 to "Analyze audience/JTBD, positioning, features, monetization …" and Prompt 02 to produce a "capability inventory" while distinguishing "real observations from marketing screenshots or secondary material." The executive mandate is blunt: *"Do not build a collage of competitor features."* A naïve feature-checklist ("App X has streaks ✓") works directly against that mandate — it invites feature-shopping and treats presence as a virtue. This matrix is therefore designed to do four jobs:

1. **Normalize the comparison.** Give every studied app the *same* feature vocabulary (§5) so a cell means the same thing in every column. Without normalization, "Routinery has routines" and "Fabulous has journeys" look like different features when they may instantiate the same mechanism, and look like the same feature when they don't.
2. **Anchor features to mechanisms, not to novelty.** Each taxonomy entry carries the behavior-change lens it plausibly serves (COM-B component, BCTTv1 technique family, or SDT need — `prd.md` §6) so that comparison is about *what user job a feature does*, keeping the "popularity/novelty ≠ efficacy" discipline (`prd.md` §3) visible on the face of the grid.
3. **Force traceability.** Make it structurally impossible to assert that an app has a feature without pointing at the `JRN` observation or `EVD` source that saw it, on a dated, versioned build (§3, §4). This is the acceptance criterion — *"each populated claim must link to an observation or source record"* — enforced as a validation rule, not a hope.
4. **Expose absence and gaps honestly.** Separate *"observed to be absent"* from *"not yet looked for"* (§4.1), so Gate 1 (`prd.md` §11) and the Opportunity Atlas can tell the difference between a real white-space and a hole in our research coverage.

**Four non-negotiable rules, enforced throughout.**

- **M1 — No populated cell without a dated, versioned evidence link.** The moment a cell moves off `unassessed` to any substantive status (`present`, `absent`, `partial`, `variant`), it must carry at least one `evidence_refs` pointer to a `JRN` observation (preferred) or `EVD` source (TASK-005), plus the `app_version` and `observed_date` of that observation. A cell with a status but no evidence link is a validation failure (§7.1), not a draft.
- **M2 — "Absent" is an observation, not a default.** `absent` means *"the Lab actively looked for this feature on a specified build and did not find it,"* and it carries evidence of the looking (the `JRN` of the journey where it would have appeared). The *absence of a search* is `unassessed`/`not_reached`, never `absent`. Defaulting an unseen feature to `absent` fabricates a finding (§7.2).
- **M3 — Marketing is a claim, not an observation.** A feature asserted only by the app's own store listing, website, or a press article is recorded, at most, as `claimed_marketing` with an `EVD` pointer to that secondary source and evidence grade capped at **C** (TASK-004); it is **never** rendered as `present`. `present` requires the Lab to have reached the feature in a real build (`prd.md` §13 Prompt 02: distinguish observations from marketing screenshots).
- **M4 — Presence is description, never endorsement.** Recording a feature as `present` makes no claim that it works, that it is good, or that HerRays should build it. Efficacy, desirability, and adopt/reject verdicts are downstream (Capability Library → Review Board → Opportunity Atlas). The matrix is a map of the territory, not a shopping list (`prd.md` §4 Phase 4: "Do not turn this into a feature shopping list").

---

## 2. How the taxonomy is built (normalization method)

The taxonomy (§5) is organized as a three-level tree so every cell is addressable and every comparison is like-for-like:

```
Domain (D1…D10)                — a functional area of the experience
  └─ Feature family (FT-NN)    — a normalized capability within that domain
       └─ Variant axis         — the shape/parameters on which apps differ
```

- **Domains (D1–D10)** are the functional areas every habit/lifestyle app must take a position on. They are derived from the PRD's own frames: the **ten mandatory journeys** (`prd.md` §5 Phase 2) and the **core-five capabilities-to-inspect** (`prd.md` §3), cross-checked against the behavior-change constructs in `prd.md` §6. They are app-agnostic by construction.
- **Feature families (`FT-NN`)** are the normalized rows. Each is defined by a **presence test** — a one-sentence, observable criterion that decides, from a teardown, whether the app has that family — so two analysts coding the same `JRN` reach the same cell (inter-rater reproducibility is a TASK-013 concern; the *definitions* live here).
- **Variant axes** capture *how* an app implements a family (e.g. a "streak" can be strict-consecutive, flexible-weekly, or cumulative). This is where the real competitive intelligence lives: apps rarely differ on *whether* they do onboarding, but sharply on *how*. Variants are recorded in the cell `note` with their own evidence link; they are the hook for the Capability Library's "three alternatives" work (`prd.md` §3) without pre-empting it.
- **Mechanism tag.** Each family carries a **behavioral lens** — a COM-B component (Capability / Opportunity / Motivation), a BCTTv1 technique family, and/or an SDT need (Autonomy / Competence / Relatedness) it *plausibly* engages (`prd.md` §6). The tag is a **hypothesis about intent, graded D by default** (expert mapping / `invention` per TASK-004), never a claim the mechanism is effective. It keeps the grid mechanism-aware so WS03/WS06 can ask "which user job is underserved?" rather than "which features are missing?"

**Why normalization matters for the HerRays mandate.** A feature-count comparison ("App A: 14 features, App B: 9") would reward breadth and tempt a collage. A normalized, mechanism-tagged taxonomy instead surfaces *which user jobs each app chooses to serve and how*, making it possible to find the under-served job (an opportunity) rather than the missing checkbox (a feature to copy). The matrix is explicitly built to make the right question easy and the wrong question awkward.

---

## 3. The cell contract

A matrix is a set of **cells**, one per (`feature_family` × `app`) pair. Each cell is a small record — not a tick-box — so that every substantive status is auditable back to a dated observation.

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `cell_id` | id | M | `CELL-<FT>-<APP>`, e.g. `CELL-FT-21-APP-001`. Deterministic from its coordinates; unique. |
| `feature_family` | ref | M | `FT-NN` (§5). |
| `app_id` | ref | M | `APP-001`…`APP-005` (TASK-006). |
| `status` | enum | M | One of the cell-state vocabulary (§4.1). `unassessed` until a teardown reaches it. |
| `variant` | string | C | The implementation shape observed, chosen from the family's variant axis (§5) or free-text if novel. Mandatory when `status ∈ {present, partial, variant}`. |
| `evidence_refs` | list | M | `JRN` and/or `EVD` ids backing the status. **Must be non-empty** when `status ∉ {unassessed, not_reached}`. `[]` otherwise. (M1) |
| `app_version` | string | C | The build string the observation was made on. Mandatory when `evidence_refs ≠ []`. Never inferred. |
| `observed_date` | date | C | ISO date of the observation. Mandatory when `evidence_refs ≠ []`. |
| `confidence` | enum | C | TASK-004 confidence vocabulary (`established`/`likely`/`indicative`/`speculative`). Mandatory when `status ≠ unassessed`. |
| `evidence_grade` | enum | C | A–D (TASK-004). Direct Lab observation of a built feature → up to **B**; marketing/secondary only → capped **C**; expert inference of mechanism → **D**. |
| `note` | string | O | Variant detail, edge cases, paywall-gating, accessibility caveat, or why a cell is `partial`/`unknown`. |
| `gated_by` | enum | O | `none` / `paywall` / `account` / `region` / `onboarding_branch` — records that the feature exists but sat behind a barrier (interlocks with TASK-006 `access_status`, TASK-011 paywall record). |
| `contradiction_ref` | ref | O | `CON-NNN` (TASK-008) if two observations of the same cell disagree (e.g. feature present in v7.2, gone in v7.4). Contradictions are preserved, never averaged. |
| `owner_role` | role | M | Accountable analyst for the cell (default: Product / market lead; UX designer for interaction-shape families). |
| `last_updated` | date | M | Cell edit date. |

**Cell ≠ claim-free.** A populated cell *is* a graded claim and inherits every TASK-004 / TASK-005 obligation: a source, a date, a build, a confidence, a limitation. The matrix is a rendering of many `EVD`/`JRN` records, not an independent assertion layer.

---

## 4. Cell-state vocabulary and evidence rules

### 4.1 Status values

| `status` | Meaning | Evidence requirement |
|---|---|---|
| `unassessed` | No teardown has examined this family on this app. **← every empirical cell in v0.1.** | `evidence_refs: []`. The honest default. |
| `not_reached` | A teardown ran but this family's journey was not reached (e.g. behind an unpurchased paywall, region lock, or onboarding branch not taken). | `evidence_refs` cites the `JRN` that stopped short; `gated_by` set. Distinct from `absent` (M2). |
| `present` | The Lab reached and directly observed the feature in a real build. | ≥1 `JRN` observation; `app_version` + `observed_date`; grade ≤ B. |
| `partial` | A recognizable but incomplete/limited form of the family is present. | As `present`, plus `note` stating what is partial. |
| `variant` | Present, but in a shape worth flagging as a distinctive competitive choice (recorded on the variant axis). | As `present`, plus `variant` populated. |
| `absent` | The Lab actively looked in the journey where this family would appear and did not find it, on a specified build. | `JRN` of the searched journey; `app_version` + `observed_date` (M2). |
| `claimed_marketing` | Asserted by the app's own listing/site/press but **not** reached in a build by the Lab. | `EVD` pointer to the secondary source; grade capped **C**; `confidence ≤ indicative`. Never counts as `present` (M3). |
| `unknown` | Examined but genuinely indeterminate (ambiguous UI, could not confirm behavior). | `JRN`/`EVD` of the attempt + `note` on why indeterminate. |

### 4.2 Why `absent`, `not_reached`, and `unassessed` are three states, not one

This separation is the matrix's core integrity feature. All three render as "no feature" in a naïve grid, but they mean opposite things for strategy:
- `unassessed` → **our** coverage gap; action = *go observe* (feeds Gate 1 "unknowns documented," `prd.md` §11).
- `not_reached` → a feature that exists but we could not access; action = *obtain access or mark out-of-reach* (feeds the purchase-decision rule, `prd.md` §10).
- `absent` → a genuine product choice by the competitor; action = *candidate white-space* (feeds the Opportunity Atlas, TASK-041, and the gap log, TASK-008).

Collapsing them would let a research hole masquerade as a market opportunity — exactly the kind of "polished unsupported report" Gate review rejects (`prd.md` §11).

### 4.3 Evidence precedence

When multiple sources speak to one cell, precedence is: **direct Lab teardown (`JRN`) > captured primary artifact (`EVD` screenshot/recording) > secondary/marketing (`EVD`, capped C)**. A direct observation always overrides a marketing claim; if a marketing claim and a direct observation disagree (claimed but not found, or vice versa), that is a contradiction → `CON` (TASK-008), preserved on the cell via `contradiction_ref`, never silently reconciled.

### 4.4 What is inadmissible as a populated cell

- A feature the analyst *remembers* the app having, with no `JRN`/`EVD` (violates M1).
- A feature seen only on the marketing page rendered as `present` instead of `claimed_marketing` (violates M3).
- A feature assumed present "because competitors usually have it" (violates M2 — fabrication by prior).
- Any retention/CAC/LTV/efficacy inference dressed as a feature attribute (`prd.md` §4; routed to TASK-015 estimates, clearly labelled).

---

## 5. The normalized feature taxonomy

Ten domains, each with its feature families. Each family carries a **presence test** (the observable criterion), a **variant axis** (how apps differ), and a **mechanism lens** (COM-B / BCTTv1 family / SDT need — a *hypothesis about intent*, default grade D). Families are the rows of the matrix (§6). The taxonomy is drawn from `prd.md` §3 (capabilities-to-inspect), §5 (ten journeys), and §6 (behavioral constructs); it is deliberately app-agnostic.

> Mechanism tags use: **COM-B** = Capability / Opportunity / Motivation (physical/psychological, social/physical, reflective/automatic); **SDT** = Autonomy / Competence / Relatedness; **BCT** = BCTTv1 technique family label. Tags are graded **D (expert mapping)** unless a specific study is later linked (TASK-025).

### D1 — Discovery & first impression *(journey 1; `prd.md` §5)*

| `FT` | Feature family | Presence test (observable) | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-01` | Store-listing value proposition | A single clear promise is legible in the first screenshot/subtitle without scrolling. | outcome-led vs. feature-led vs. identity-led | COM-B: Reflective Motivation |
| `FT-02` | Pre-install social proof surfacing | Ratings/awards/testimonials shown in-listing. | star-rating · editorial badge · testimonial | SDT: Relatedness (weak); BCT: credible source |
| `FT-03` | First-run "why" framing | First post-launch screen states a benefit before asking for input. | benefit-first · signup-first · permission-first | COM-B: Reflective Motivation |

### D2 — Onboarding & personalization *(journeys 2–3; `prd.md` §3 Fabulous "onboarding")*

| `FT` | Feature family | Presence test | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-04` | Guided goal/intention selection | User selects or states a goal during onboarding via a structured flow. | fixed menu · free-text · guided interview | BCT: goal setting (behavior); SDT: Autonomy |
| `FT-05` | Personalization intake | App asks about context (schedule, experience, constraints) and visibly adapts. | none · cosmetic · behavior-adaptive | SDT: Autonomy; COM-B: Psychological Capability |
| `FT-06` | Expectation & effort framing | Onboarding sets a realistic daily-effort or time expectation. | explicit time-cost · vague · none | COM-B: Reflective Motivation; anti-overwhelm |
| `FT-07` | First-value time-to-action | A meaningful first action is possible within the first session before any paywall. | immediate · post-setup · post-paywall | SDT: Competence; BCT: behavioral rehearsal |

### D3 — Action & habit execution *(journey 4–5; `prd.md` §3 Routinery "guided timers/sequences")*

| `FT` | Feature family | Presence test | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-08` | Habit/action definition | User can create/define a trackable habit or action. | template · fully custom · AI-suggested | COM-B: Psychological Capability; BCT: action planning |
| `FT-09` | Guided execution / step sequencing | App walks the user through a routine step-by-step at action time (not just logs it). | timer-guided · checklist · narrative coach | BCT: prompts/cues, graded tasks; COM-B: Automatic Motivation |
| `FT-10` | Implementation-intention / cue binding | User can bind an action to a time, place, or preceding habit. | time-only · context/location · habit-stacking | BCT: implementation intentions (strong evidence base) |
| `FT-11` | Lightweight completion logging | Marking an action done is a single, low-friction gesture. | one-tap · swipe · multi-field | COM-B: Physical Opportunity; friction-reduction |
| `FT-12` | Flexible scheduling / frequency | Habits support non-daily cadences (x/week, specific days, flexible). | daily-only · fixed-days · flexible-target | SDT: Autonomy; anti all-or-nothing |

### D4 — Reminders & re-entry *(journey 6)*

| `FT` | Feature family | Presence test | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-13` | Scheduled reminders | App can send a time-based reminder for an action. | fixed · per-habit · smart/adaptive | BCT: prompts/cues |
| `FT-14` | Context/adaptive nudging | Reminders adapt to behavior (skips, time-of-day, location). | none · rule-based · adaptive | BCT: prompts/cues; COM-B: Automatic Motivation |
| `FT-15` | Re-entry / win-back on lapse | After a lapse, the app offers a low-pressure re-entry rather than a cold home screen. | none · gentle re-entry · streak-loss prompt | SDT: Autonomy; anti-guilt (`prd.md` §1) |
| `FT-16` | Notification tone & autonomy | Reminder copy is supportive/non-coercive and user-tunable. | coercive · neutral · supportive+tunable | SDT: Autonomy; ethical anti-pattern guard |

### D5 — Progress, feedback & reward *(journey 7; `prd.md` §3 Habitify "analytics", (Not Boring) "3D feedback")*

| `FT` | Feature family | Presence test | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-17` | Completion feedback moment | A discrete positive feedback event fires on completion. | static check · animation · haptic+motion | SDT: Competence; BCT: feedback on behavior |
| `FT-18` | Streak / consistency counter | A running count of consecutive or cumulative completions is shown. | strict-consecutive · flexible-weekly · cumulative | BCT: self-monitoring, feedback; **risk: shame / all-or-nothing** |
| `FT-19` | Progress visualization / analytics | Charts/trends of behavior over time are available. | calendar · trend chart · dashboard suite | COM-B: Psychological Capability; BCT: self-monitoring |
| `FT-20` | Milestone / reward system | Discrete milestones, badges, levels, or unlockables. | none · badges · narrative/levels | BCT: rewards; SDT: Competence; **risk: extrinsic over-justification** |
| `FT-21` | Reflection / journaling prompt | App invites reflection on progress or mood, not just logging. | none · mood check · guided reflection | BCT: self-monitoring of outcomes; SDT: Autonomy |

### D6 — Missed-day & recovery handling *(journey 8; `prd.md` §1 non-punitive, §3 streaks caution)*

| `FT` | Feature family | Presence test | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-22` | Missed-day treatment | Observable behavior when a day is missed. | punitive reset · neutral · compassionate framing | SDT: Autonomy; **direct HerRays non-negotiable (§1)** |
| `FT-23` | Streak-protection / grace mechanic | A freeze/grace/repair affordance softens all-or-nothing loss. | none · freeze token · auto-grace | anti all-or-nothing; SDT: Competence preservation |
| `FT-24` | Adaptive difficulty / scaling down | On struggle, the app can reduce scope rather than demand the same. | none · manual edit · auto-scale | BCT: graded tasks; SDT: Competence |

### D7 — Social & accountability *(behavioral opportunity; `prd.md` §6)*

| `FT` | Feature family | Presence test | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-25` | Social / accountability features | Any sharing, friends, groups, or accountability partner. | none · share-out · groups/challenges | COM-B: Social Opportunity; SDT: Relatedness |
| `FT-26` | Human/coach interaction | Access to a human coach, community, or expert. | none · community · 1:1 coach | SDT: Relatedness; BCT: social support |

### D8 — Health-data & intelligence *(HerRays differentiator; `prd.md` §3 Habitify "integrations", §6)*

| `FT` | Feature family | Presence test | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-27` | Health-data integration | Reads/writes HealthKit or equivalent health signals. | none · read · read+write | COM-B: Physical Opportunity |
| `FT-28` | Data→insight translation | Converts tracked/health data into a personally relevant, plain-language insight. | raw data only · generic tips · personalized insight | COM-B: Psychological Capability; **clinical-claim risk** |
| `FT-29` | Clinical / care-boundary handling | Observable stance on medical claims, disclaimers, escalation. | none · disclaimer · escalation path | **Privacy/clinical gate (`prd.md` §4/§6)** |
| `FT-30` | Cross-signal personalization | Adapts guidance using multiple signals (energy, cycle, sleep, schedule). | none · single-signal · multi-signal | SDT: Autonomy; HerRays "Life Companion" lens |

### D9 — Monetization & paywall *(journey 10; `prd.md` §3 Fabulous "paywalls", → TASK-011/021)*

| `FT` | Feature family | Presence test | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-31` | Paywall presence & timing | Where in the journey a paywall first blocks progress. | none · post-value · pre-value/onboarding | commercial design; ethical-timing concern |
| `FT-32` | Free-tier viability | A usable, non-trivial free experience exists indefinitely. | none (hard paywall) · limited free · robust free | user autonomy; trust |
| `FT-33` | Subscription model shape | Pricing structure as presented. | one-time · subscription · freemium+IAP | → TASK-011 (`LST`) for exact terms |
| `FT-34` | Cancellation / downgrade friction | How hard it is to cancel or step down. | easy · standard · dark-pattern friction | **ethical anti-pattern guard (`prd.md` §6)** |

### D10 — Platform craft & accessibility *(cross-journey; `prd.md` §3 (Not Boring) "motion", §13 Prompt 02 accessibility)*

| `FT` | Feature family | Presence test | Variant axis | Mechanism lens |
|---|---|---|---|---|
| `FT-35` | Native iOS surface use | Widgets, Live Activities, Lock Screen, Watch, Shortcuts. | none · widget · widget+LiveActivity+Watch | COM-B: Physical Opportunity; low-friction re-entry |
| `FT-36` | Motion & feedback craft | Deliberate, performant animation/haptics as feedback (not decoration). | minimal · polished · signature/3D | SDT: Competence (delight); **cost/perf caution (`prd.md` §3)** |
| `FT-37` | Accessibility support | VoiceOver labels, Dynamic Type, contrast, reduced-motion fallback. | unknown · partial · robust | **accessibility gate (non-compensable, `prd.md` §9/§11)** |
| `FT-38` | Offline & reliability | Core logging works offline and syncs later. | online-only · offline-log · full-offline | COM-B: Physical Opportunity; trust |

**Taxonomy totals.** 10 domains · 38 normalized feature families. The set is intentionally bounded and mechanism-tagged; new families are added only when a teardown observes a capability no existing family's presence test covers (change-controlled via §10), not whenever an app uses a new marketing word.

---

## 6. The comparison matrix (scaffold)

The matrix is **38 families × 5 apps = 190 cells**. In v0.1 **every cell is `unassessed`** with `evidence_refs: []`, because no WS02 teardown has produced a `JRN` record. Rendering all 190 empty cells adds no information; instead the scaffold is defined by (a) the uniform initial cell state below, and (b) the per-app capture pointers that say *where* each column's evidence will come from.

### 6.1 Uniform initial cell state (applies to all 190 cells)

```yaml
cell_id:        CELL-<FT-NN>-<APP-00N>   # deterministic
status:         unassessed
variant:        none
evidence_refs:  []                        # ← no JRN/EVD captured
app_version:    unknown                   # ← never inferred (TASK-006 A1)
observed_date:  unknown
confidence:     n/a
evidence_grade: n/a
gated_by:       none
owner_role:     Product / market lead      # UX designer for D3/D5/D6/D10 interaction families
last_updated:   2026-11-22
```

### 6.2 Column capture pointers

Each column is one registered app; its cells will be populated from that app's WS02 teardown and WS01 listing capture. The matrix asserts nothing about these apps yet — these are *routing pointers*, and the `caution` is carried forward from TASK-006 so the "popularity ≠ efficacy" discipline stays visible while the grid fills.

| Column | App | Teardown source (future) | Listing source | Carried caution (`prd.md` §3) |
|---|---|---|---|---|
| C1 | **APP-001 · Routinery** | `JRN` records, journeys 1–10 (TASK-016+) | `LST` → TASK-011 | "Rigidity and pressure are hypotheses to test" |
| C2 | **APP-002 · Fabulous** | `JRN` records, journeys 1–10 | `LST` → TASK-011 | "Engagement does not establish clinical efficacy" |
| C3 | **APP-003 · (Not Boring) Habits** | `JRN` records, journeys 1–10 | `LST` → TASK-011 | "Novelty and animation costs need testing" |
| C4 | **APP-004 · Habitify** | `JRN` records, journeys 1–10 | `LST` → TASK-011 | "Charts may not translate into decisions" |
| C5 | **APP-005 · Griply** | `JRN` records, journeys 1–10 | `LST` → TASK-011 | "Planning overhead may reduce utility" |

### 6.3 Coverage ledger (derived, read-only)

A reviewer reads completeness off this ledger, which counts cell states per app. In v0.1 it is uniform by construction and is the Gate 1 "unknowns documented" surface (`prd.md` §11).

| App | `unassessed` | `present`+`partial`+`variant` | `absent` | `not_reached` | `claimed_marketing` | Coverage % |
|---|---|---|---|---|---|---|
| APP-001 Routinery | 38 | 0 | 0 | 0 | 0 | 0% |
| APP-002 Fabulous | 38 | 0 | 0 | 0 | 0 | 0% |
| APP-003 (Not Boring) Habits | 38 | 0 | 0 | 0 | 0 | 0% |
| APP-004 Habitify | 38 | 0 | 0 | 0 | 0 | 0% |
| APP-005 Griply | 38 | 0 | 0 | 0 | 0 | 0% |
| **Total** | **190** | **0** | **0** | **0** | **0** | **0%** |

*Coverage % = (cells not in {`unassessed`,`not_reached`}) ÷ 38. All apps at 0%: the matrix is a correct empty scaffold asserting no feature claim.*

### 6.4 Derived comparison views (defined now, populated later)

Once cells carry evidence, these read-only views are generated mechanically — never hand-asserted:
- **Family coverage row** — for one `FT`, the status across all five apps (e.g. "who guides execution vs. only logs?"). This is where variants become visible.
- **Mechanism heat view** — group families by mechanism lens; shows which user jobs the *category* over- or under-serves (feeds gap analysis). E.g. if `FT-15`/`FT-22`/`FT-23` (lapse/recovery) are `absent` across all five, that is a category-wide white-space — a candidate HerRays opportunity, routed to TASK-041, **not** decided here.
- **Gap candidates** — families where ≥4 of 5 apps are observed `absent` (not `unassessed`) → emitted to the gap log (TASK-008) and Opportunity Atlas (TASK-041).
- **Contradiction view** — cells carrying a `contradiction_ref` (e.g. feature present in one build, gone in a later one), preserved for adjudication (TASK-008), never averaged.

---

## 7. Forbidden values and validation failures

A cell **fails validation** (and the matrix cannot advance past scaffold for that cell) if any of the following is true:

1. **Status without evidence.** `status ∉ {unassessed, not_reached}` while `evidence_refs = []` (violates M1). Fix: capture a `JRN`/`EVD` or revert to `unassessed`.
2. **Default-to-absent.** `status = absent` with no `JRN` of the journey actually searched (violates M2). An unseen feature is `unassessed`, not `absent`.
3. **Marketing as present.** A feature evidenced only by the app's own listing/site/press rendered `present` instead of `claimed_marketing` (violates M3); or a `claimed_marketing` cell graded above **C**.
4. **Sourced value without build/date.** `evidence_refs ≠ []` while `app_version` or `observed_date` is empty/`unknown` (violates the §3 dated-versioned rule).
5. **Inferred version.** `app_version` populated with a guessed/recalled build not read from the observed artifact (TASK-006 A1 carried forward).
6. **Endorsement smuggled in.** A cell `note` that states or implies HerRays *should* adopt/reject the feature (violates M4 — that verdict is TASK-030/035's, not the matrix's).
7. **Efficacy / metric fabrication.** Any retention/CAC/LTV/efficacy figure recorded as a feature attribute (`prd.md` §4); third-party *estimates* belong to TASK-015, clearly labelled, never here.
8. **Collapsed unknowns.** `absent`, `not_reached`, and `unassessed` used interchangeably (violates §4.2 — destroys the gap-vs-coverage distinction).
9. **Averaged contradiction.** Two disagreeing observations of one cell merged into a single blended status instead of being preserved via `contradiction_ref` (`prd.md` Prompt 06; TASK-004 "never average contradictions").
10. **Non-normalized row.** A cell keyed to an app's marketing feature name rather than a defined `FT` family (violates the §2 normalization method — the whole point of the matrix).

---

## 8. Validation

### 8.1 Entry gate (per cell)

A cell is accepted when: (1) `cell_id` is deterministic from (`FT`,`APP`) and unique; (2) `status ∈ §4.1`; (3) if `status ∉ {unassessed, not_reached}` then `evidence_refs ≠ []` **and** `app_version ≠ unknown` **and** `observed_date ≠ unknown` **and** `confidence`/`evidence_grade` set (M1); (4) grade respects the §3 caps (direct ≤ B, marketing ≤ C, mechanism tag = D); (5) no forbidden value (§7) is present.

### 8.2 Validation of this document (v0.1)

Checked against §8.1 and §7:
1. **Taxonomy well-formed** — 10 domains, 38 `FT` families, each with a presence test, variant axis, and mechanism lens; ids unique and sequential (`FT-01`…`FT-38`). ✅
2. **All 190 cells `unassessed`** — uniform initial state (§6.1); `evidence_refs: []` everywhere; `app_version`/`observed_date` = `unknown`. **Zero populated cells**, so M1 holds vacuously and no unsourced claim exists. ✅
3. **No status/evidence mismatch** — no cell carries a substantive status (§7.1 cannot trigger). ✅
4. **No default-to-absent** — zero `absent` cells (§7.2). ✅
5. **No marketing-as-present, no efficacy/metric, no endorsement** — nothing populated to violate §7.3/§7.6/§7.7. ✅
6. **Columns = registered apps** — C1–C5 map to `APP-001`…`APP-005` (TASK-006); cautions carried forward. ✅
7. **Coverage ledger honest** — 190 `unassessed`, 0% coverage (§6.3), correctly reporting an empty scaffold. ✅

Result: **190/190 cells valid at `unassessed`.** The matrix is a correct empty scaffold with a complete, normalized, mechanism-anchored taxonomy; it asserts no feature claim about any real app.

### 8.3 Worked example — ILLUSTRATIVE (synthetic)

To prove the cell-and-evidence mechanics *run*, three synthetic cells are shown. **These are fabricated for demonstration only**, keyed to a fictitious app `APP-SYNTH-Z` (not one of the five) and fictitious `*-SYNTH-*` evidence ids, so no claim attaches to any real product. They demonstrate `present`, `absent`, and `claimed_marketing` with correct evidence linkage.

```yaml
# ── SYNTHETIC — NOT A REAL OBSERVATION — demonstration of the contract only ──

- cell_id:        CELL-FT-18-APP-SYNTH-Z        # streak counter × fake app
  feature_family: FT-18                          # Streak / consistency counter
  app_id:         APP-SYNTH-Z
  status:         variant
  variant:        flexible-weekly                # the competitive-choice axis
  evidence_refs:  [JRN-SYNTH-7]                  # teardown of journey 5 (daily use)
  app_version:    "9.9.9-synthetic"
  observed_date:  2026-11-22
  confidence:     likely
  evidence_grade: B                              # direct Lab observation, capped at B
  gated_by:       none
  note:           "Counter resets only if a weekly target is missed, not on a single
                   missed day — a flexible-weekly variant of FT-18. Interpretive caution:
                   presence is NOT evidence it reduces abandonment (that is a TASK-030
                   mechanism question + TASK-025 literature question). Not an endorsement."
  owner_role:     Senior UX/product designer
  last_updated:   2026-11-22

- cell_id:        CELL-FT-23-APP-SYNTH-Z         # streak-protection / grace mechanic
  feature_family: FT-23
  app_id:         APP-SYNTH-Z
  status:         absent                          # actively searched, not found
  variant:        none
  evidence_refs:  [JRN-SYNTH-8]                   # journey 8 (missed day / recovery) run
  app_version:    "9.9.9-synthetic"
  observed_date:  2026-11-22
  confidence:     indicative
  evidence_grade: B
  note:           "Journey 8 reached; no freeze/grace/repair affordance observed. Logged
                   as ABSENT (searched), NOT unassessed. Candidate category white-space →
                   routed to TASK-008 gap log + TASK-041 Opportunity Atlas, not decided here."
  owner_role:     Senior UX/product designer
  last_updated:   2026-11-22

- cell_id:        CELL-FT-27-APP-SYNTH-Z         # health-data integration
  feature_family: FT-27
  app_id:         APP-SYNTH-Z
  status:         claimed_marketing               # listing claims it; not reached in build
  variant:        none
  evidence_refs:  [EVD-SYNTH-12]                  # store-listing screenshot (secondary)
  app_version:    "9.9.9-synthetic"
  observed_date:  2026-11-22
  confidence:     indicative
  evidence_grade: C                               # marketing/secondary → capped at C (M3)
  gated_by:       paywall
  note:           "App Store listing asserts 'syncs with Apple Health,' but the HealthKit
                   permission flow sat behind an unpurchased paywall, so the Lab did not
                   directly observe it. Recorded as claimed_marketing (C), NOT present (M3).
                   Resolve by purchasing access (DEC → prd.md §10) or leave as claim."
  owner_role:     Product / market lead
  last_updated:   2026-11-22
```

**Validation trace for the synthetic cells** (against §8.1): each has a unique deterministic `cell_id`; a status in §4.1; non-empty `evidence_refs` with `app_version` + `observed_date` because status is substantive (M1 ✓); grades respect the §3 caps (direct observation B; marketing C — M3 ✓); `FT-23` is `absent` only because a real journey was searched (M2 ✓); none implies an adopt/reject verdict (M4 ✓). The three deliberately exercise the hardest distinctions — `variant` vs. plain presence, `absent` vs. `unassessed`, and `claimed_marketing` vs. `present` — which are exactly the integrity rules §7 guards.

---

## 9. Dependencies and cross-references

**Upstream (consumed):**
- `prd.md` §3 (capabilities-to-inspect, "do not build a collage"), §5 (ten journeys, teardown), §6 (COM-B/BCTTv1/SDT constructs), §13 Prompt 01/02.
- **TASK-006** — supplies the five `APP` columns and carries forward each app's caution. `←`
- **TASK-004** — evidence grades + confidence vocabulary used in every cell. `↔`
- **TASK-005** — `EVD` records every `evidence_refs` pointer resolves to. `↔`

**Downstream (this matrix feeds):**
- **TASK-013 / TASK-014** — review sampling/coding may corroborate or contradict a cell (cross-link via `EVD`).
- **TASK-016–TASK-023** (WS02 teardown) — produce the `JRN` observations that populate cells; this matrix is their comparable rendering. `→`
- **TASK-030 / TASK-031** — Capability Library turns a `present`/`variant` cell into a mechanism record with alternatives (where "collage" is explicitly avoided). `→`
- **TASK-008** — `absent`-convergence and cell contradictions emit gap/contradiction records. `→`
- **TASK-041 / TASK-042** — category white-spaces (mechanism-lens under-service) become opportunities. `→`
- **TASK-011 / TASK-015 / TASK-021** — D9 monetization cells point to listing terms, estimates, and the growth/paywall audit; this matrix records *shape*, not price or conversion. `→`
- **Gate 1** (`prd.md` §11) — reads §6.3 coverage ledger as "benchmark coverage … unknowns documented."

---

## 10. Open unknowns and change log

**Open unknowns (by design — resolved in WS01/WS02, not here):**
- Every feature cell for all five apps (190 cells) — populated only from real teardown `JRN` / capture `EVD`.
- Each app's build (`app_version`) and storefront at time of observation.
- Which features sit behind paywalls/accounts/region locks (`gated_by`) — resolved as access is obtained (`prd.md` §10).
- Whether any mechanism lens is confirmed by literature (TASK-025) vs. remaining a D-grade expert hypothesis.
- Whether the 38-family taxonomy needs new families once real teardowns run (change-controlled below).

**Change-control rule for the taxonomy.** A new `FT` family is added only when a teardown observes a capability no existing presence test covers; additions require a one-line rationale, a presence test, a variant axis, and a mechanism lens, and are logged below. Marketing synonyms for existing families do **not** create new rows (§7.10).

**Change log:**
- **v0.1 (2026-11-22)** — Initial normalized feature taxonomy (10 domains, 38 `FT` families, each with presence test / variant axis / mechanism lens), cell contract (§3), cell-state vocabulary with the `absent`/`not_reached`/`unassessed` separation (§4), full 190-cell scaffold at `unassessed` (§6), forbidden-value/validation rules (§7), self-validation (§8.2), and a synthetic worked example proving the contract (§8.3). No feature claim asserted about any real app. Status: **Proposed — taxonomy defined + matrix scaffolded, no cell yet observed.**
