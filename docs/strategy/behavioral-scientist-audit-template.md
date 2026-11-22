# HerRays — Behavioral Scientist Audit Template

**Deliverable:** TASK-018 — Create the behavioral scientist audit template
**Workstream:** Experience Teardown (WS02) · behavioral-science lens
**Version:** 0.1 · **Status:** Proposed — audit instrument defined, no app yet coded
**Owner (accountable role):** Behavioral scientist (R02), under Program Director custody
**Reviewers:** Senior UX/product designer (R03) · Content strategist/UX writer (R10) · Clinical reviewer (R14) · Privacy/regulatory reviewer (R15) · Program Director
**Source basis:** `prd.md` §2 (behavioral-scientist lens: "COM-B, BCTTv1, Self-Determination Theory, Fogg, habit evidence" → deliverable "Mechanism audit"; "Specialists independently audit the same core apps before cross-disciplinary reconciliation. Preserve disagreements."), §5 Phase 2 ("Independently commission behavioral, UX, visual/motion, growth/content, and iOS/accessibility audits for each core app, then reconcile disagreements") and the §5 **streaks worked example** (shame and all-or-nothing risk after a missed day), §6 Behavioral science ("Use COM-B, BCTTv1, Self-Determination Theory, habit formation, implementation intentions … Separate engagement, adherence, automaticity and clinical outcomes … Assess risks of guilt, compulsion, burden and excessive tracking"), §4 (Evidence Library `EVD-001`, evidence grades A–D, "Grade separately for efficacy, relevance and confidence", "Do not interpret a high grade on usability as a high grade on health impact", no-fabrication rule), §11 Gate 1/Gate 2 ("Polished unsupported reports do not pass"), §13 Prompt 02 ("Commission independent audits from behavioral science …") and Prompt 03 ("Investigate initiation, cues, repetition, motivation, feedback, rewards, self-monitoring, recovery, autonomy, personalization and burden … Distinguish engagement, adherence, automaticity and health outcomes")
**Depends on:** TASK-017 (capture bundle — the artifact this audit reads: `screen_ref`, event/tap log, timings, annotations) · TASK-016 (ten journey scripts / `JRN` records — every coded observation is anchored to a journey step) · TASK-006 (`APP` registry — supplies the subject + `access_status`) · TASK-005 (`EVD` schema — an accepted coded observation promotes to an `EVD` record) · TASK-004 (evidence grading — multi-dimensional grading and the confidence vocabulary this audit reuses) · TASK-003 (responsibility matrix — names the behavioral scientist as accountable, R02) · TASK-008 (gap/contradiction log — unresolved codings and specialist disagreements route there)
**Feeds:** TASK-019–022 (sibling specialist audits — reconciled against this one) · TASK-023 (cross-specialist reconciliation — this audit is one of five replayed on the same bundle) · TASK-024 / TASK-025 (behavioral literature search & evidence-extraction table — supply the efficacy evidence this audit *links to* but never invents; bidirectional) · TASK-030 / TASK-031 (capability mechanism record & five-layer worksheet — the "mechanism" and "evidence/limitations" layers are populated from this audit) · TASK-033 / TASK-036 (capability safety gate & red-team — the ethical-risk flags raised here are the red-team's starting list) · TASK-009 (experiment register — each `test_hypothesis` becomes an `EXP`)

---

## 0. How to read this document

TASK-017 defined **how a walkthrough is recorded** (the device/build rig, consent, timestamped frames, tap log, friction and accessibility annotations) and bundles it into a single re-openable artifact. This document defines **how the behavioral scientist reads that bundle through one specific lens** — behavior change — and converts what was captured into coded, evidence-graded, uncertainty-bounded audit observations that another scientist can check.

It is a **method and a record contract**, not a dataset. It produces no findings about any app. It does five separable things:

1. **Fixes the behavioral frame** (§4) — the four published models the auditor codes against (COM-B, BCTTv1, Self-Determination Theory, the Fogg Behavior Model) plus the habit-formation and recovery literature, and exactly how each is used so two auditors coding the same frame agree.
2. **Defines the six audit dimensions** (§5) — **cues, motivation, feedback, repetition, autonomy and recovery** (the acceptance-criteria set) — each as a coding guide: the construct basis, the observable question, the BCTTv1 codes that commonly express it, the risks to watch, and what a *good* vs *empty* observation looks like.
3. **Defines the `BSA` audit record** (§6) — the exact fields one coded observation produces, including the **mandatory observation link** back to a TASK-017 frame/event and `JRN` step, and the **mandatory, non-empty uncertainty note**.
4. **Enforces the observation → inference → hypothesis firewall** (§3, §7) — coding that a technique is *present* is an observation; the mechanism it *may* engage is inference; the behavior or health outcome it *might* produce is a hypothesis that needs the TASK-024/025 science, not this audit.
5. **Provides the reusable instrument** (§10–§12) — a per-app audit checklist, a reviewer checklist, the audit YAML stamp, and a clearly-labelled synthetic worked example proving the record and the six dimensions run end-to-end.

> **No-fabrication statement.** This document contains **no audit findings and no behavioral claims about any real app.** It does not report, code, grade, or characterise any screen, cue, reward, streak, copy string, or behaviour of Routinery, Fabulous, (Not Boring) Habits, Habitify, Griply, or any other product, because **no bundle has been coded.** Every field and vocabulary value below is a *specification of what the behavioral scientist must code and how*, never an assertion that any app does or does not do something. The published scientific references in §4 (Michie, Ryan & Deci, Fogg, Lally, Gollwitzer, and others) are cited as **instruments and theories the auditor consults** — their names, not their effect sizes, and never as evidence that a HerRays or competitor feature "works." No effect size, retention figure, adherence rate, or clinical outcome is asserted anywhere. The only populated records appear in the **clearly-labelled synthetic worked example** (§12), which codes a fictitious `APP-SYNTH-Z` using `*-SYNTH-*` identifiers solely to prove the instrument runs. Nothing here may be cited as evidence about a real product or a real person.

**Scope boundary — what this task is and is not.**
- **TASK-018 (this document) = the behavioral-mechanism lens.** It answers *"which behaviour-change techniques are present in this captured experience, which constructs they plausibly engage, what behaviour they target, what could go wrong ethically, and how confident we are — all anchored to captured evidence."*
- **It is not the capture.** Which device/build/region, how screens/taps/timings are recorded, is **TASK-017**. This audit reads that bundle; it never records a new walkthrough or codes from memory, marketing, or personal prior use.
- **It is not the journey script.** Which ten tasks are run and what counts as journey-complete is **TASK-016**.
- **It is not the other four lenses.** UX heuristics / cognitive load (TASK-019), visual & motion (TASK-020), growth & UX-writing / paywall (TASK-021), iOS & accessibility (TASK-022) are coded in those templates. Where this audit touches their territory (e.g. a reward animation, a paywall's loss-framing, autonomy-eroding copy), it records only the *behavioral* reading and cross-links; the sibling owns the sibling judgment. Overlaps are reconciled at **TASK-023**, not resolved here.
- **It does not supply the efficacy evidence.** Whether a mechanism actually changes behaviour in midlife women is **TASK-024/025** (literature) and ultimately an experiment (**TASK-009**). This audit *requires a link* to that evidence (or honestly marks it absent); it never generates it.
- **It does not decide anything.** Adopt/Adapt/Invent/Reject/Defer is **TASK-035**; scoring is **TASK-034**. This audit is upstream evidence. It "does not finalize features" (`prd.md` §13 Prompt 02/06).

---

## 1. Purpose

A behavioral audit is only evidence if another behavioral scientist can open the same captured bundle, follow the same coding frame, and arrive at the same codes — or disagree *in a recorded, adjudicable way*. The failure mode WS03/WS02 must prevent is the **persuasive narrative**: a scientist watches an onboarding, writes "Fabulous uses powerful habit-formation science and strong behavioral design," and that sentence is laundered into the capability library as if a mechanism had been demonstrated to work. It demonstrates nothing — it names a technique and asserts an outcome in one breath, with no captured anchor, no construct reasoning, no uncertainty, and no distinction between *the app opens went up* and *a health behaviour changed*. That path fails Gate 1/Gate 2's bar that "polished unsupported reports do not pass" (`prd.md` §11) and silently violates the PRD's central rule to "separate engagement, adherence, automaticity and clinical outcomes" (`prd.md` §6).

This template converts a captured experience into **coded, grade-bounded, uncertainty-stamped behavioral observations** by guaranteeing five properties of every `BSA` record:

1. **Anchored.** Every coded technique points to a specific captured frame/event in a TASK-017 bundle and a TASK-016 `JRN` step. "If it was not captured, it was not coded" (§2, B1).
2. **Layered.** The record forces three distinct statements — *technique observed* (observation), *construct engaged* (inference), *behaviour/outcome* (hypothesis) — and grades them separately, so a strong "this technique is clearly present" can never masquerade as "this works" (§2, B2; `prd.md` §4 "Do not interpret a high grade on usability as a high grade on health impact").
3. **Honest about the outcome layer.** Each record declares the **lowest** behavioral layer its evidence supports — engagement / adherence / automaticity / clinical — and defaults to engagement. A streak counter is evidence about app interaction, not about a sustained health behaviour (§2, B4; `prd.md` §6).
4. **Risk-first.** Guilt, shame, compulsion, burden, over-tracking, dependency and autonomy erosion are a **mandatory** output for every coded technique, not an afterthought — the streaks example in `prd.md` §5 exists precisely because a "good" engagement technique can be behaviorally harmful (§2, B5; `prd.md` §6).
5. **Uncertainty-bounded.** Every record carries a non-empty uncertainty note and a controlled confidence value; banned certainty words are rejected at validation (§2, B3; §7.3).

---

## 2. Six non-negotiables (anti-fabrication & integrity guards)

These guards are structural. A `BSA` record that violates any one is rejected at validation (§11), not patched afterward.

- **B1 — No code without a captured anchor.** Every `bct_code`, dimension tag, and mechanism note must reference a `capture_ref` + `screen_ref`/`event_ref` (TASK-017) and the `jrn_ref` step it occurred in (TASK-016). Coding from marketing copy, an App Store screenshot, a review, a competitor's blog, the auditor's memory, or prior personal use of the app is **inadmissible**. If the behaviour was not in the captured bundle, the correct record is a **coverage gap** (`gap_ref` → TASK-008), never a coded observation.
- **B2 — Observation ≠ inference ≠ hypothesis, and they are graded separately.** "A consecutive-day counter is displayed" is an observation (presence of a technique). "This may act as reinforcement / commitment" is an inference about the *construct*. "This increases sustained activity in midlife women" is a hypothesis about an *outcome*. The three live in different fields (`observed_feature`, `construct_map`, `mechanism_hypothesis`) and carry different grades (`presence_grade`, `efficacy_grade`). Collapsing them into one sentence is a validation failure (§6.4; `prd.md` §13 Prompt 00 "Separate evidence, inference, hypothesis and invention").
- **B3 — Uncertainty is mandatory and certainty words are banned.** `uncertainty_note` must be non-empty and name at least one real unknown (sample, transferability, whether behaviour was observed vs inferred, single-session caveat). The controlled confidence vocabulary (§7.2) is required. The words **"proven", "guaranteed", "users want", "drives retention", "clinically effective", "forms a habit"** (as an asserted fact) are rejected unless they appear inside a directly quoted, cited A/B-grade source (§7.3).
- **B4 — Engagement ≠ adherence ≠ automaticity ≠ clinical outcome.** Each record declares `outcome_layer_supported` and may not claim a layer its captured evidence cannot reach. A teardown can observe *interface behaviour and claimed state*; it cannot observe a user's sustained real-world behaviour or health. The default and ceiling for a single captured session is the **engagement** layer unless a linked A/B science record (TASK-025) raises it (`prd.md` §6).
- **B5 — Ethical risk is a required field, not an optional caveat.** Every coded technique carries an `ethical_risk` assessment from the controlled vocabulary (§7.4) with a note — including the honest value `none_observed` when applicable. A technique coded with the risk field empty is **incomplete** and does not pass peer review. Guilt/shame/compulsion/burden/over-tracking/dependency are first-class (`prd.md` §6; the §5 streaks shame risk is the canonical case).
- **B6 — Popularity and polish are not efficacy.** Download counts, star ratings, editorial recognition, animation quality, and "it feels motivating" are inadmissible as evidence that a mechanism works. They may be *noted as context* but never raise `efficacy_grade` (`prd.md` §3 "popularity … is not proof of clinical efficacy or retention"; §13 Prompt 02).

---

## 3. Where this sits in the capture → evidence chain

```
TASK-016 journey script (J1…J10, scenario SC-1…SC-6)
        │  defines which tasks are walked and what JRN step each observation sits in
        ▼
TASK-017 CAPTURE BUNDLE  (frames, tap/timing log, friction & a11y annotations, manifest)
        │  the single re-openable artifact (capture_ref)
        ▼
┌───────────────────────── same bundle, five independent lenses ─────────────────────────┐
│ TASK-018 BEHAVIORAL audit (this doc)   TASK-019 UX   TASK-020 visual/motion              │
│ TASK-021 growth/content   TASK-022 iOS/accessibility                                     │
└──────────────────────────────────────────────────────────────────────────────────────┘
        │  BSA-NNN records: observed technique → construct → mechanism hypothesis
        │  each anchored (B1), layered (B2), outcome-honest (B4), risk-flagged (B5)
        ▼
TASK-023 cross-specialist reconciliation  (disagreements preserved → TASK-008)
        │
        ├──► TASK-005 EVD record (type: observed; presence_grade ≤ B; access_date, app_version, region, limitations)
        ├──► TASK-030/031 Capability Mechanism Library (mechanism + evidence/limitations layers)
        ├──► TASK-024/025 behavioral literature (efficacy evidence this audit links to, never invents)
        ├──► TASK-033/036 safety gate & red-team (ethical_risk flags are the starting list)
        └──► TASK-009 experiment register (each test_hypothesis → EXP)
```

The behavioral scientist is one of the **five specialists auditing the same captured bundle independently before reconciliation** (`prd.md` §2, §5). This audit's quality is therefore capped by the capture quality (TASK-017) and the journey coverage (TASK-016): an uncaptured mechanism cannot be coded, only logged as a gap.

---

## 4. The behavioral coding frame (four models + two literatures)

The auditor codes against the exact models `prd.md` §2/§6 names. This section fixes **how each is used** so coding is reproducible. These are **published instruments the auditor consults**; citing them here asserts nothing about any app (No-fabrication statement, §0).

### 4.1 COM-B — the behaviour-system lens (Michie, van Stralen & West, 2011)
Every coded technique is tagged for which COM-B component it plausibly acts on: **C**apability (physical/psychological), **O**pportunity (physical/social), **M**otivation (reflective/automatic). Use: forces the auditor to ask *what has to be true for the target behaviour to happen*, and prevents coding a pure-motivation feature as if it fixed an opportunity barrier. COM-B tags are **inference** (`construct_map`), never observation.

### 4.2 BCTTv1 — the technique vocabulary (Michie et al., 2013)
The Behaviour Change Technique Taxonomy v1: **93 techniques in 16 groupings**. This is the controlled vocabulary for `bct_codes`. The auditor assigns the code(s) whose *definition* matches the observed feature. Coding a BCT is the **observation** that a technique is present — it is not a claim the technique is effective. Groupings referenced across the six dimensions (non-exhaustive; the full published definitions govern):

| Grouping | Example codes used in this audit | Dimension(s) |
|---|---|---|
| 1. Goals and planning | 1.1 Goal setting (behaviour), 1.3 Goal setting (outcome), 1.4 Action planning, 1.2 Problem solving, 1.6 Discrepancy between behaviour and goal | D1, D2, D6 |
| 2. Feedback and monitoring | 2.2 Feedback on behaviour, 2.3 Self-monitoring of behaviour, 2.7 Feedback on outcome, 2.4 Self-monitoring of outcome | D3, D4 |
| 5. Natural consequences | 5.1 Information about health consequences, 5.3 Information about social/environmental consequences | D2 |
| 6. Comparison of behaviour | 6.1 Demonstration, 6.2 Social comparison, 6.3 Information about others' approval | D2, D3 |
| 7. Associations | 7.1 Prompts/cues | D1 |
| 8. Repetition and substitution | 8.1 Behavioural practice/rehearsal, 8.3 Habit formation, 8.7 Graded tasks, 8.2 Behaviour substitution | D4 |
| 10. Reward and threat | 10.3 Non-specific reward, 10.4 Social reward, 10.9 Self-reward, 10.6 Non-specific incentive | D3, D4 |
| 12. Antecedents | 12.1 Restructuring the physical environment, 12.5 Adding objects to the environment | D1 |
| 13. Identity | 13.1 Identification of self as role model, 13.5 Identity associated with changed behaviour | D2, D6 |
| 15. Self-belief | 15.1 Verbal persuasion about capability, 15.3 Focus on past success | D2, D6 |

> **Coding discipline.** Assign the narrowest code that fits; record **multiple codes** where a feature expresses several; if nothing fits, write `bct_codes: [none_matched]` with a note (not every interaction is a BCT). Never invent a code outside BCTTv1. A code is a hypothesis about *which technique the designer deployed* — tag `code_confidence` separately from outcome confidence.

### 4.3 Self-Determination Theory — the motivation-quality lens (Ryan & Deci, 2000)
SDT distinguishes **autonomous** motivation (intrinsic, identified) from **controlled** motivation (external reward/punishment, introjected guilt/shame) and names three basic needs: **autonomy, competence, relatedness**. Use: the auditor judges not *whether* the app motivates but *how* — a points-and-streak economy and a meaningful self-authored goal can both "motivate" while sitting at opposite ends of the autonomy continuum. SDT is the backbone of D2 (Motivation) and D5 (Autonomy) and the reason "engagement" is never accepted as a terminal good.

### 4.4 The Fogg Behavior Model — the moment-of-action lens (Fogg, 2009)
B = MAP: a behaviour occurs when **M**otivation, **A**bility, and a **P**rompt converge. Use: the auditor locates the designed *prompt* (D1), asks whether the behaviour was made *easy enough* at that moment (links to TASK-019 cognitive load), and whether motivation was being borrowed from controlled sources (D2/D5). Fogg is a framing tool for D1 and the cue→action moment; it is not an efficacy claim.

### 4.5 Habit-formation & automaticity literature (D4)
Referenced as the evidence base the auditor *links to* (via TASK-024/025), never as findings generated here:
- **Lally et al. (2010)** — habit automaticity develops through context-dependent repetition over a **highly variable** period (the study reported a median around two months with a range spanning weeks to many months). Treat the specific number as *one observational study*, not a universal "N-day rule"; transferability to midlife women is an **open question** → TASK-024.
- **Wood & Neal (2007)** — habits form via stable context–response associations and are cued by context, not just intention; informs how the auditor reads context-stability support (D1/D4).
- **Gardner et al. (2012), SRBAI** — the Self-Report Behavioural Automaticity Index is the preferred *measure* of habit strength; this audit **recommends** SRBAI for any later automaticity claim and **flags** any in-app "habit formed" language that is not backed by such a measure.

### 4.6 Lapse/recovery literature (D6)
- **Marlatt & Gordon (relapse prevention; abstinence violation effect)** — a single lapse framed as total failure predicts dropout; the design question is whether the app treats a missed day as a lapse (recoverable) or a relapse (reset/failure).
- **Self-compassion framing (Neff)** — informs how re-entry tone is coded. Used as the construct behind D6; no claim is made about any app's tone until it is captured and coded.

---

## 5. The six audit dimensions

Each dimension is a **coding guide**, not a questionnaire with a score. For every dimension the auditor produces **zero or more `BSA` records** (§6), one per distinct coded observation, each anchored to a captured frame. A dimension with no captured evidence is recorded as **`coverage: not_observed`** with a `gap_ref` — never left blank and never back-filled.

### D1 — Cues (initiation & prompts)
*The moment the app tries to trigger the behaviour.*
- **Constructs:** Fogg prompt (§4.4); implementation intentions / action planning (BCT 1.4; Gollwitzer, 1999); context cues (Wood & Neal); COM-B automatic motivation / physical opportunity.
- **Common BCT codes:** 7.1 Prompts/cues · 1.4 Action planning · 1.2 Problem solving (barrier/if-then) · 12.1/12.5 antecedents.
- **Observe (from the bundle):** reminders/notifications (timing, frequency, copy), time/location/context triggers, in-app anchors to an existing routine, if-then planning prompts during onboarding, widgets/Live Activities as ambient cues (cross-link TASK-022 for the iOS mechanics).
- **Behavioral questions:** Is the prompt tied to a stable context the user controls, or only to an app-chosen time? Does it support the user *authoring* their own cue (autonomy-supportive) or impose one? Is the behaviour easy *at the moment the cue fires*?
- **Risks to flag (B5):** notification overload → burden/nagging; externally-imposed cue schedules → autonomy erosion; cue dependency (behaviour collapses without the app firing).
- **Good vs empty:** *Good* — "Onboarding step 4 (frame 0007) prompts the user to write an if-then plan tied to an existing routine → BCT 1.4; COM-B reflective-M + psychological-C; autonomy-supportive (user authors the cue)." *Empty* — "App has reminders." (no frame, no code, no construct.)

### D2 — Motivation
*Why the app says the behaviour is worth doing, and what kind of motivation it recruits.*
- **Constructs:** SDT autonomous vs controlled motivation (§4.3); COM-B reflective & automatic motivation; Fogg motivation axis.
- **Common BCT codes:** 1.1/1.3 Goal setting · 1.6 Discrepancy · 5.1 Information about health consequences · 6.2 Social comparison · 9.x comparison of outcomes · 13.x identity · 10.x reward.
- **Observe:** onboarding "why" elicitation, goal/value framing, extrinsic economies (points, coins, levels, streaks — also D4), social comparison/leaderboards, identity framing ("become a person who…"), health-consequence information (cross-link clinical reviewer R14 for any medical claim).
- **Behavioral questions:** Is motivation sourced from the user's own values (autonomous) or from app-granted rewards and social pressure (controlled)? Does extrinsic reward risk **over-justifying** an already-intrinsic behaviour? Are health claims evidence-backed or asserted?
- **Risks to flag:** introjected/guilt motivation ("don't break your streak", "you're falling behind"); fear appeals; extrinsic over-justification; unsupported health claims → route to clinical gate (TASK-033) and contradiction log if it conflicts with evidence (TASK-008).
- **Good vs empty:** *Good* — "Goal-setting screen (frame 0012) asks the user to choose from app-defined goals only, no free authoring → BCT 1.3; SDT: controlled-leaning (limited autonomy); outcome layer: engagement." *Empty* — "Fabulous is very motivating."

### D3 — Feedback
*What the app tells the user after an action, and what it reinforces.*
- **Constructs:** feedback loops / control theory (Carver & Scheier); operant reinforcement; SDT competence need; self-monitoring.
- **Common BCT codes:** 2.2 Feedback on behaviour · 2.3 Self-monitoring of behaviour · 2.7 Feedback on outcome · 10.3/10.4/10.9 reward.
- **Observe:** completion confirmations and celebratory microinteractions (cross-link TASK-020 for motion quality), progress charts, streak/counter updates (also D4), outcome dashboards, social reward (kudos/approval).
- **Behavioral questions:** Does feedback reinforce the *behaviour* (process) or only an *outcome/vanity metric*? Is it framed to build competence, or to shame on a miss? Does feedback imply a clinical outcome the app cannot measure (B4)?
- **Risks to flag:** shame/negative framing on lapse; vanity metrics decoupled from meaningful behaviour; over-tracking burden; outcome feedback implying unearned clinical claims.
- **Good vs empty:** *Good* — "Completion screen (frame 0021, event t=00:34) shows a process-level 'done for today' + subtle animation → BCT 2.2 + 10.3; SDT competence-supportive; no outcome claim; ethical_risk: none_observed." *Empty* — "Nice feedback animations."

### D4 — Repetition (habit formation)
*How the app supports doing the behaviour again, and whether it conflates app-use with the behaviour.*
- **Constructs:** habit formation via context-dependent repetition (Lally; Wood & Neal, §4.5); automaticity (SRBAI as the measure); graded practice.
- **Common BCT codes:** 8.3 Habit formation · 8.1 Behavioural practice/rehearsal · 8.7 Graded tasks · 2.3 Self-monitoring · 10.x reward-for-repetition.
- **Observe:** streaks/consecutive-day counters, cumulative totals, repetition scheduling, context-stability support, graded/ramping targets, "habit formed" or "N-day" claims in copy.
- **Behavioral questions:** Does the design encourage **repeating the behaviour in a stable context** (habit-supportive) or merely **opening the app** (engagement)? Is any "habit formed" claim backed by a real automaticity measure (SRBAI) or asserted? Is the target rigid (all-or-nothing) or flexible?
- **Risks to flag:** **streak shame & all-or-nothing** after a missed day (`prd.md` §5 streaks example — the canonical risk); engagement-as-repetition conflation; rigidity that punishes real-life variability; over-tracking.
- **Good vs empty:** *Good* — "Home screen (frame 0003) shows a consecutive-day streak that resets to 0 on a missed day (confirmed via J8 missed-day run, frames 0040–0044) → BCT 10.3/2.3; construct: reinforcement + commitment (inference); outcome layer: **engagement** (app interaction, not measured behaviour); ethical_risk: shame + all_or_nothing (HIGH); test_hypothesis → EXP: does a flexible weekly target outperform a resetting streak on perceived autonomy and repeated action?" *Empty* — "Has streaks, users love them."

### D5 — Autonomy
*Whether the experience supports the user's volition or controls it.* (SDT autonomy need — assessed as a **style across techniques**, not a single BCT.)
- **Constructs:** SDT autonomy support vs controlled regulation (§4.3). **Note honestly:** BCTTv1 has **no single "autonomy" code** — autonomy is read as the *regulatory style* in which other techniques are delivered. The auditor records autonomy as a cross-cutting assessment with pointers to the specific D1/D2/D3 records it qualifies.
- **Observe:** who sets and can change goals (user vs app), language tone (controlling "you must/you failed" vs autonomy-supportive "you might/your choice"; cross-link TASK-021 content audit), opt-in vs forced defaults, ease of pausing/snoozing/editing/quitting, whether skipping is respected or punished, dark patterns on cancellation (cross-link TASK-021 paywall).
- **Behavioral questions:** Can the user meaningfully say no, change their mind, or pause without penalty? Is a rationale offered for requests? Is retention earned or coerced?
- **Risks to flag:** controlling language; forced/confirm-shaming defaults; guilt-based retention; no graceful pause/exit; autonomy erosion via cue imposition (links D1).
- **Good vs empty:** *Good* — "Settings (frame 0030) allow pausing a goal without losing progress; onboarding copy uses 'your choice' framing (frame 0010) → SDT autonomy-supportive; qualifies BSA-014 (D1 cue) and BSA-022 (D2 goal)." *Empty* — "Feels empowering."

### D6 — Recovery (lapse & re-entry)
*What happens after a missed day — recoverable lapse or punishing relapse.*
- **Constructs:** relapse prevention / abstinence violation effect (Marlatt & Gordon); self-compassion framing (Neff); flexible goals (§4.6). Directly implements `prd.md`'s "celebrate returning after disruption."
- **Common BCT codes:** 1.2 Problem solving · 15.3 Focus on past success · 13.x identity · 2.2 feedback (constructive framing) · and crucially the **absence** of a punitive reset.
- **Observe (requires the J8 missed-day / J9 changed-circumstances runs — TASK-016):** streak reset vs preserved on a miss; tone of the re-entry screen ("welcome back" vs "you broke your streak"); availability of flexible/weekly targets; recovery nudges and problem-solving prompts; whether the app makes returning easy or shameful.
- **Behavioral questions:** Does a single miss cost disproportionate progress (abstinence violation risk)? Is re-entry framed with self-compassion? Is there a designed path back, or does the user fall off a cliff?
- **Risks to flag:** punitive reset → shame → dropout; "you failed" framing; no re-entry path. This dimension is where the PRD's zero-guilt commitment is directly auditable.
- **Good vs empty:** *Good* — "J8 missed-day run (frames 0040–0046): streak resets to 0, re-entry copy 'Streak lost — start again' (frame 0044) → absence of recovery BCTs; construct: abstinence-violation risk (inference); ethical_risk: shame + all_or_nothing (HIGH); contradiction_ref vs any marketing 'gentle' claim → TASK-008." *Empty* — "Handles missed days okay."

> **Dimension coverage rule.** A complete per-app behavioral audit records a result for **all six** dimensions — including explicit `coverage: not_observed` + `gap_ref` where the relevant journey (e.g. J8 for D6) was blocked or not run. Silently omitting a dimension is a validation failure (§11).

---

## 6. The `BSA` audit record (field contract)

One coded observation = one `BSA-NNN` record. Fields carry requirement markers: **M** mandatory · **C** conditional (rule stated) · **O** optional.

### 6.1 Identity & provenance
| Field | Req | Type / rule |
|---|---|---|
| `bsa_id` | M | `BSA-NNN`, immutable, one observation per id |
| `app_id` | M | → `APP-NNN` (TASK-006) |
| `dimension` | M | one or more of `D1_cues D2_motivation D3_feedback D4_repetition D5_autonomy D6_recovery` |
| `auditor_role` | M | `behavioral_scientist` (R02); named individual in `auditor_ref` |
| `audit_date` | M | ISO date; the date the bundle was coded (not captured) |

### 6.2 Observation link (B1 — the anti-fabrication core)
| Field | Req | Type / rule |
|---|---|---|
| `capture_ref` | M | → TASK-017 bundle id |
| `screen_ref` | C | ≥1 frame id; **M** unless the observation is of an *event/timing* only, in which case `event_ref` is M |
| `event_ref` | C | ≥1 event-log line (tap/timing); M if `screen_ref` absent |
| `jrn_ref` | M | → TASK-016 `JRN` step (J1…J10 + scenario) where observed |
| `observed_feature` | M | **Observation only.** Literal description of what is on the captured frame/in the event. No construct, no mechanism, no outcome word. |

> A record whose `screen_ref` **and** `event_ref` are both empty is **invalid** (B1). No anchor → it is a `gap`, not a `BSA`.

### 6.3 Coding, construct & hypothesis (B2 — three separate layers)
| Field | Req | Type / rule |
|---|---|---|
| `bct_codes` | M | list of BCTTv1 codes (`"10.3"`, `"7.1"`, …) **or** `[none_matched]` with note. **Observation** of technique presence. |
| `code_confidence` | M | `clear \| plausible \| ambiguous` — how confidently the code fits the observed feature |
| `com_b_tags` | M | subset of `{C_phys, C_psych, O_phys, O_soc, M_refl, M_auto}` — **inference** |
| `construct_map` | M | the SDT/Fogg/habit construct the technique may engage — **inference**, prose |
| `target_behavior` | M | the specific real-world behaviour targeted (e.g. "10-min evening walk"), to prevent engagement/outcome drift |
| `mechanism_hypothesis` | M | how it *might* change `target_behavior` — **hypothesis**, explicitly tentative |
| `sdt_regulation` | C | `autonomous \| identified \| introjected \| external \| mixed \| n/a` — M for D2/D5 records |

### 6.4 Grading & outcome honesty (B2, B4)
| Field | Req | Type / rule |
|---|---|---|
| `presence_grade` | M | A–D for *technique is present* — single captured session caps at **B** (TASK-004; direct observation, one tester) |
| `efficacy_grade` | M | A–D for *mechanism changes the target behaviour* — **defaults to D / `n/a`**; may only exceed D if a linked TASK-025 science record (A/B) supports it (`science_refs` required) |
| `outcome_layer_supported` | M | `engagement \| adherence \| automaticity \| clinical` — the **lowest** layer the evidence reaches; default `engagement` (B4) |
| `science_refs` | C | → TASK-025 extraction rows / `EVD` scientific records; **M** if `efficacy_grade` > D |
| `confidence` | M | controlled vocabulary (§7.2) |
| `uncertainty_note` | M | **non-empty** (B3); names ≥1 real unknown |
| `separation_check` | M | `true` asserted by auditor that observation/inference/hypothesis are not collapsed (§7.1) |

### 6.5 Risk, linkage & next step (B5)
| Field | Req | Type / rule |
|---|---|---|
| `ethical_risk` | M | subset of §7.4 vocabulary, incl. `none_observed`; **non-empty** |
| `ethical_risk_note` | C | M whenever `ethical_risk` ≠ `[none_observed]` |
| `risk_severity` | C | `low \| medium \| high`; M when a risk is present; `high` auto-routes to TASK-033 safety gate + TASK-036 red-team |
| `qualifies_refs` | O | other `BSA` ids this record qualifies (used by D5 autonomy cross-cuts) |
| `gap_ref` | C | → TASK-008; M when `coverage: not_observed` or a blocked journey prevented coding |
| `contradiction_ref` | O | → TASK-008 when this coding conflicts with marketing, science, or a sibling audit |
| `test_hypothesis` | O | the smallest experiment to test `mechanism_hypothesis` → becomes an `EXP` (TASK-009) |
| `status` | M | `draft \| peer_reviewed \| reconciled \| superseded` (never hard-deleted) |

---

## 7. Cross-cutting rules

### 7.1 The observation → inference → hypothesis firewall (B2)
Every record must keep three statements physically separate:
1. **Observation** (`observed_feature`, `bct_codes`): what is on the captured frame. Gradeable up to B.
2. **Inference** (`com_b_tags`, `construct_map`, `sdt_regulation`): the construct the technique plausibly engages. Never gradeable above the quality of its reasoning; marked as inference.
3. **Hypothesis** (`mechanism_hypothesis`, `outcome_layer_supported`, `efficacy_grade`): the behaviour/health effect. Default D / engagement; raised only by linked science. `separation_check: true` is the auditor's explicit attestation these are not fused into one claim.

### 7.2 Confidence vocabulary (reused from TASK-004 §5.2)
`established` (A-grade, replicated science or direct validation) · `likely` (B) · `indicative` (C, repeated qualitative/competitor pattern) · `speculative` (D, judgment/analogy/invention). A behavioral *presence* code may be `likely`/`indicative`; an *efficacy* claim may not be `established`/`likely` without `science_refs` of matching grade.

### 7.3 Banned certainty language (B3)
Rejected at validation unless inside a quoted, cited A/B source: **proven, guaranteed, clinically effective, forms a habit** (as asserted fact), **users want, drives retention, boosts adherence, scientifically designed**. Replace with graded, hedged statements ("plausibly engages reinforcement; efficacy ungraded, see `science_refs`").

### 7.4 Ethical-risk vocabulary (B5)
`guilt` · `shame` · `all_or_nothing` · `compulsion` · `burden` · `over_tracking` · `dependency` · `autonomy_erosion` · `fear_appeal` · `unsupported_health_claim` · `social_pressure` · `none_observed`. `unsupported_health_claim` and anything clinical auto-notify clinical reviewer R14; `high` severity auto-routes to TASK-033/036.

### 7.5 Independence & disagreement (`prd.md` §2 "Preserve disagreements")
The behavioral scientist codes the bundle **before** reading the sibling audits (TASK-019–022) and before reconciliation (TASK-023). Where a later sibling or the science contradicts a `BSA` record, the disagreement is recorded as a `contradiction_ref` (TASK-008) and preserved — **never silently overwritten or averaged** (TASK-008 G2; TASK-004 "never average contradictions").

---

## 8. Forbidden-value & validation-failure catalogue

A record or audit is rejected if any of the following holds:

| # | Failure | Rule violated |
|---|---|---|
| V1 | `screen_ref` and `event_ref` both empty | B1 — no captured anchor |
| V2 | A `bct_code` or mechanism sourced from marketing/review/memory, not the bundle | B1 |
| V3 | `observed_feature` contains a construct, mechanism, or outcome word | B2 / §7.1 |
| V4 | `efficacy_grade` > D with no `science_refs` of matching grade | B2 / B6 |
| V5 | `outcome_layer_supported` claims adherence/automaticity/clinical from a teardown alone | B4 |
| V6 | `uncertainty_note` empty, or uses banned certainty language | B3 / §7.3 |
| V7 | `ethical_risk` empty (incl. missing `none_observed`) | B5 |
| V8 | A risk present but `risk_severity` / `ethical_risk_note` missing | B5 |
| V9 | A BCT code outside BCTTv1, or a fabricated code | §4.2 |
| V10 | A dimension omitted from a per-app audit with no `coverage: not_observed` + `gap_ref` | §5 coverage rule |
| V11 | Popularity/rating/editorial/animation quality used to raise `efficacy_grade` | B6 |
| V12 | A contradiction with a sibling audit or science resolved by deletion/averaging | §7.5 |
| V13 | `separation_check: true` asserted but observation/inference/hypothesis are fused | §7.1 |

---

## 9. Grading summary (interlock with TASK-004)

| What is being graded | Field | Ceiling from one captured session | Raised by |
|---|---|---|---|
| Technique is present in the app | `presence_grade` | **B** (single tester, single session; → A only with multi-tester/cross-session corroboration) | repeated independent captures |
| Mechanism engages the construct | (inference, not A–D) | quality-of-reasoning only | — |
| Mechanism changes the behaviour/health | `efficacy_grade` | **D / n/a** by default | linked A/B science (TASK-025) + ultimately an `EXP` (TASK-009) |

This operationalises `prd.md` §4: "Grade separately for efficacy, relevance and confidence … Do not interpret a high grade on usability as a high grade on health impact." A perfectly-captured, clearly-coded technique can sit at `presence_grade: B` while `efficacy_grade: D` — and that is the correct, honest state for most teardown observations.

---

## 10. Per-app behavioral audit checklist (the reusable instrument)

Run once per core app, against its captured bundle set.

**Pre-coding**
- [ ] Bundle(s) received from TASK-017; `app_version`, `region`, `access_status` readable from the manifest.
- [ ] Journey coverage confirmed: which of J1–J10 are present; **J8 (missed day) and J9 (changed circumstances) present** or D6/flexibility logged as `not_observed` + `gap_ref`.
- [ ] Coding frame loaded (§4); BCTTv1 definitions to hand.

**Coding (per dimension D1–D6)**
- [ ] Walk the captured frames in order; for each candidate technique create a `BSA` record anchored to a frame/event (B1).
- [ ] Keep observation/inference/hypothesis in separate fields; set `separation_check` (B2).
- [ ] Assign BCT code(s) + `code_confidence`; tag COM-B; map SDT regulation for D2/D5 (§4).
- [ ] Set `outcome_layer_supported` to the lowest honest layer (default engagement) (B4).
- [ ] Grade `presence_grade` (≤ B) and `efficacy_grade` (D unless linked science) (§9).
- [ ] Complete `ethical_risk` + severity; route `high` to TASK-033/036 (B5).
- [ ] Write a non-empty `uncertainty_note`; no banned words (B3, §7.3).
- [ ] Record `coverage: not_observed` + `gap_ref` for any dimension without captured evidence (§5).

**Post-coding**
- [ ] Draft `test_hypothesis` for each high-value or high-risk mechanism → TASK-009.
- [ ] Peer review by a second behavioral scientist (or reviewer R03/R10) → `status: peer_reviewed`.
- [ ] Hold for TASK-023 reconciliation; preserve disagreements as `contradiction_ref` (§7.5).
- [ ] Promote accepted records to `EVD` (TASK-005) with `access_date`, `app_version`, `region`, `limitations`.

**Validation gate** — run §8 V1–V13; any hit blocks the audit (Gate 1/Gate 2, `prd.md` §11).

---

## 11. Reviewer checklist (sign-off)

- [ ] Every record has a captured anchor (no V1/V2).
- [ ] Observation/inference/hypothesis separated in every record (no V3/V13).
- [ ] No `efficacy_grade` > D without matching `science_refs` (no V4/V11); no outcome-layer overreach (no V5).
- [ ] Every record has a non-empty, certainty-word-free uncertainty note (no V6).
- [ ] Every record has a non-empty ethical-risk field; all `high` risks routed (no V7/V8).
- [ ] All six dimensions resolved (coded or `not_observed` + gap) (no V10).
- [ ] Only BCTTv1 codes used (no V9).
- [ ] Contradictions preserved, not averaged (no V12).
- [ ] No fabricated observation, quote, metric, effect size, or clinical outcome anywhere.

---

## 12. Synthetic worked example — ILLUSTRATIVE (synthetic)

> **SYNTHETIC — proves the instrument runs; asserts nothing about any real app.** `APP-SYNTH-Z` is a fictitious app; all `*-SYNTH-*` ids are fictitious; all frames/events are fictitious. These records exist only to show the six dimensions and the `BSA` contract working end-to-end. They are not evidence.

### 12.1 `BSA-SYNTH-001` — D4 Repetition (the streak, after a captured miss)
```yaml
bsa_id: BSA-SYNTH-001
app_id: APP-SYNTH-Z
dimension: [D4_repetition, D3_feedback]
auditor_role: behavioral_scientist            # auditor_ref: [SYNTHETIC]
audit_date: 2026-11-22
# --- observation link (B1) ---
capture_ref: BUNDLE-SYNTH-Z-J05
screen_ref: [FR-SYNTH-0003, FR-SYNTH-0040, FR-SYNTH-0044]
event_ref: [EV-SYNTH-0003-streak_render, EV-SYNTH-0044-streak_reset]
jrn_ref: [J5-normal-daily, J8-missed-day]
observed_feature: >
  Home screen shows a consecutive-day counter labelled "7-day streak" (FR-0003).
  In the J8 missed-day run the counter displays "0" the next day (FR-0044) with
  copy "Streak lost — start again". (Literal; no construct/outcome words.)
# --- coding / construct / hypothesis (B2) ---
bct_codes: ["10.3", "2.3"]                     # non-specific reward; self-monitoring
code_confidence: clear
com_b_tags: [M_auto, M_refl]
construct_map: >
  May act as reinforcement + commitment device (inference, not demonstrated).
target_behavior: "complete one guided 10-minute activity per day"
mechanism_hypothesis: >
  Hypothesis only: visible streak may increase day-to-day repetition; the reset
  may trigger an abstinence-violation response and raise dropout after a miss.
sdt_regulation: external
# --- grading / outcome honesty (B2, B4) ---
presence_grade: B                              # directly observed, single session
efficacy_grade: D                              # no science linked; ungraded
outcome_layer_supported: engagement            # app interaction only
science_refs: []
confidence: indicative
uncertainty_note: >
  Single tester, single session on build [SYNTHETIC]. Whether the streak changes
  real repeated behaviour (vs app opens) is unknown; transferability to midlife
  women unestablished (-> TASK-024). Reset behaviour confirmed only for one miss
  pattern; multi-miss behaviour not captured.
separation_check: true
# --- risk / linkage / next step (B5) ---
ethical_risk: [shame, all_or_nothing]
ethical_risk_note: >
  "Streak lost — start again" framing after a single miss risks shame and an
  all-or-nothing response (prd.md §5 streaks caution).
risk_severity: high                            # -> TASK-033 safety gate + TASK-036 red-team
gap_ref: null
contradiction_ref: null
test_hypothesis: >
  Does a flexible weekly target (e.g. 4 of 7 days, no reset) outperform a resetting
  consecutive-day streak on perceived autonomy (SDT) and repeated action after a
  missed day? -> EXP (TASK-009).
status: peer_reviewed
```

### 12.2 `BSA-SYNTH-002` — D1 Cues (autonomy-supportive if-then prompt)
```yaml
bsa_id: BSA-SYNTH-002
app_id: APP-SYNTH-Z
dimension: [D1_cues, D5_autonomy]
auditor_role: behavioral_scientist
audit_date: 2026-11-22
capture_ref: BUNDLE-SYNTH-Z-J02
screen_ref: [FR-SYNTH-0007]
event_ref: [EV-SYNTH-0007-plan_submit]
jrn_ref: [J2-onboarding, J3-personalization]
observed_feature: >
  Onboarding step 4 presents a free-text field "When and where will you do this?"
  and stores the user's typed answer "after my morning coffee, in the kitchen".
bct_codes: ["1.4", "7.1"]                      # action planning; prompts/cues
code_confidence: clear
com_b_tags: [M_refl, C_psych, O_phys]
construct_map: >
  Implementation intention (Gollwitzer): if-then plan anchored to a stable,
  user-chosen context (Wood & Neal). Inference.
target_behavior: "perform the chosen activity once daily"
mechanism_hypothesis: >
  Hypothesis: a self-authored context cue may support repetition more durably than
  an app-chosen reminder time; efficacy not demonstrated here.
sdt_regulation: autonomous                     # user authors the cue
presence_grade: B
efficacy_grade: D
outcome_layer_supported: engagement
science_refs: []
confidence: likely
uncertainty_note: >
  Presence clear; whether users complete the plan field meaningfully or skip it is
  unknown (one tester entered one plan). No long-term cue-adherence data from a teardown.
separation_check: true
ethical_risk: [none_observed]
ethical_risk_note: null
risk_severity: null
qualifies_refs: []
gap_ref: null
test_hypothesis: >
  Do users who author an if-then plan show higher 2-week repetition than users given
  a default app reminder time? -> EXP (TASK-009).
status: peer_reviewed
```

### 12.3 `BSA-SYNTH-003` — D6 Recovery (dimension not observed; honest gap)
```yaml
bsa_id: BSA-SYNTH-003
app_id: APP-SYNTH-Z
dimension: [D6_recovery]
auditor_role: behavioral_scientist
audit_date: 2026-11-22
capture_ref: BUNDLE-SYNTH-Z-J08
screen_ref: []
event_ref: []
jrn_ref: [J8-missed-day]
observed_feature: >
  coverage: not_observed — the J8 missed-day re-entry screen was blocked by a hard
  paywall during capture (barrier captured in TASK-017 bundle as a blocked step).
bct_codes: [none_matched]
code_confidence: ambiguous
com_b_tags: []
construct_map: "n/a — not observed"
target_behavior: "return to the activity after a missed day"
mechanism_hypothesis: "n/a — cannot hypothesise without captured evidence"
sdt_regulation: n/a
presence_grade: D
efficacy_grade: D
outcome_layer_supported: engagement
science_refs: []
confidence: speculative
uncertainty_note: >
  Recovery/re-entry behaviour could not be observed (paywall block). Do NOT infer
  from marketing or reviews (B1). Re-attempt with paid access in a later capture.
separation_check: true
ethical_risk: [none_observed]                  # cannot assess risk on unobserved screen
ethical_risk_note: "Risk unknown — not observed."
risk_severity: null
gap_ref: GAP-SYNTH-014                          # -> TASK-008 coverage gap
contradiction_ref: null
status: draft
```

### 12.4 Validation trace (why these pass §8)
- **V1/V2:** 001 and 002 carry frames + events from the bundle; 003 honestly has empty anchors **because** it is a `not_observed` gap (not coded) with a `gap_ref`. ✔
- **V3/V13:** `observed_feature` in each is literal; constructs/outcomes live in their own fields; `separation_check: true`. ✔
- **V4/V5/V11:** all `efficacy_grade: D`, `outcome_layer_supported: engagement`, no popularity used. ✔
- **V6:** every `uncertainty_note` non-empty, no banned words. ✔
- **V7/V8:** every record has a non-empty `ethical_risk`; 001's `high` is routed and noted. ✔
- **V9:** only BCTTv1 codes (10.3, 2.3, 1.4, 7.1) or `none_matched`. ✔
- **V10:** this synthetic set shows D4/D3, D1/D5 coded and D6 resolved as `not_observed` + gap — the coverage rule in action. ✔

---

## 13. Dependencies, open unknowns & change log

**Consumes:** TASK-017 (bundle) · TASK-016 (`JRN`) · TASK-006 (`APP`) · TASK-005 (`EVD`) · TASK-004 (grading/confidence) · TASK-003 (R02 accountable).
**Feeds:** TASK-019–022 (sibling audits) · TASK-023 (reconciliation) · TASK-024/025 (science links, bidirectional) · TASK-030/031 (capability mechanism records) · TASK-033/036 (safety gate / red-team) · TASK-009 (experiments) · TASK-008 (gaps/contradictions).

**Open unknowns (carried, not resolved here):**
- **U1** — Which BCTTv1 codes recur across the five core apps is unknown until coding is done (no data invented).
- **U2** — Transferability of habit/automaticity timelines (Lally et al.) to midlife women is an open literature question → TASK-024.
- **U3** — The audit assumes J8/J9 capture is available; where blocked by paywall/account walls (TASK-017 C4), D6 and flexibility coverage is a documented gap, not a finding.
- **U4** — Whether a second independent behavioral coder is staffed (needed to lift `presence_grade` above B and to run inter-coder agreement) is a staffing decision for the Program Director.

**Change log:** v0.1 (2026-11-22) — initial behavioral scientist audit template; six dimensions (cues/motivation/feedback/repetition/autonomy/recovery), BCTTv1-coded, observation-linked, uncertainty-bounded; `BSA` record contract; synthetic worked example. No app coded.
