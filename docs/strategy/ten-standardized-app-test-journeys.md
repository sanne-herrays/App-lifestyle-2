# HerRays — Ten Standardized App Test Journeys

**Deliverable:** TASK-016 — Define ten standardized app test journeys
**Workstream:** Experience Teardown (WS02)
**Version:** 0.1 · **Status:** Proposed — journey scripts defined, no walkthrough yet performed
**Owner (accountable role):** Senior UX / product designer (WS02), under Program Director custody
**Reviewers:** Behavioral scientist · Motion/interaction designer · QA/accessibility specialist · iOS engineer · Content strategist · Program Director
**Source basis:** `prd.md` §5 Phase 2 ("Ten mandatory journeys" + provisional scenarios + "Record taps, time, decisions, copy, screen transitions, friction, emotion hypotheses, error states, accessibility and platform behavior"), §3 (core-five learning questions + cautions), §4 (Journey Library `JRN-001`, evidence grades, source handling, no-fabrication rule), §6 (COM-B / BCTTv1 / SDT / Fogg / implementation intentions), §11 Gate 1 (research-foundation gate), §13 Prompt 02 ("Deep-dive the five core benchmark apps with standardized test scenarios and ten journeys")
**Depends on:** TASK-005 (`EVD` schema — each observation promotes to an `EVD`) · TASK-006 (`APP` registry — supplies the five subjects + `app_version`) · TASK-004 (evidence grading — caps a single walkthrough at B) · TASK-011 (listing/pricing capture — supplies observed version + paywall context for J1/J10)
**Feeds:** TASK-017 (screen-capture & annotation protocol — the *how-to-record* layer this script assumes) · TASK-018–022 (the five specialist audit templates — each consumes the same walkthrough) · TASK-023 (cross-specialist reconciliation) · TASK-012 (feature matrix — `JRN` observations become the evidence pointers its cells require) · TASK-030/031 (capability extraction) · TASK-008 (gap/contradiction log)

---

## 0. How to read this document

This document defines the **ten standardized journey test scripts** named in `prd.md` §5 Phase 2 and §13 Prompt 02. It is a **method**, not a dataset. It specifies, for each of the ten mandatory journeys, *what task the tester performs, under which scenario, and exactly which observations to record* — so that five apps audited by several specialists over several sessions produce **comparable, reproducible, source-linked `JRN` records** rather than impressionistic notes.

It does three separable things:

1. **Defines the shared test harness** (§4) — the six provisional user scenarios from `prd.md` §5, the standardized conditions (device/OS/version/region/network), and the counterbalancing/repeat-use rules that keep walkthroughs comparable across apps and testers.
2. **Defines the `JRN` observation record** (§3) — the exact fields every step must capture: taps, time, decisions, copy, screen transitions, friction, emotion *hypotheses*, error states, accessibility behaviour, platform behaviour (`prd.md` §5 Phase 2).
3. **Defines the ten journey scripts J1–J10** (§5) — each with objective, the research question it answers, entry preconditions, scenario fit, a numbered task script, the specific **expected observations** to collect, friction/emotion/accessibility probes, error & recovery branches, and an explicit "journey complete when" stop rule.

> **No-fabrication statement.** This document contains **no walkthrough data and no findings**. It does not report, quote, count, time, or characterise any screen, tap, copy string, animation, or behaviour of any real app, because **no walkthrough has been performed**. Every "expected observation" below is a **prompt describing what a tester should look for and write down**, never an assertion that the app does or does not do it. No tap count, task duration, friction rating, conversion claim, or emotion is attributed to any benchmark app. The only filled-in observations appear in the **clearly-labelled synthetic worked example** (§8), which uses a fictitious `APP-SYNTH-Z` and `*-SYNTH-*` identifiers solely to prove the script runs. Nothing here may be cited as evidence about a real product. When a script is executed, each observation becomes a `JRN`-linked `EVD` record (TASK-005); a single tester's single walkthrough is graded no higher than **B** (`prd.md` §4), and short-run repeat use reveals short-term experience only, **never long-term retention** (`prd.md` §5 Phase 2).

**Scope boundary — what this task is and is not.**
- **TASK-016 (this document) = the ten journey scripts + the observation record they fill.** It answers *"which tasks do we run on every app, under which scenarios, and what do we write down for each?"*
- **It is not the capture mechanics.** Device setup, OS/version pinning, recording consent, timestamping, tap-logging, screenshot naming and annotation conventions are **TASK-017**. This script *calls for* a timestamped tap log and a stamped screenshot; TASK-017 specifies how those are produced and stored.
- **It is not the specialist lenses.** How a behavioral scientist BCT-codes a cue (TASK-018), how UX severity is scored (TASK-019), how motion timing is judged (TASK-020), how paywall tactics are assessed (TASK-021), or how VoiceOver/Dynamic Type are tested (TASK-022) live in those templates. This script says *where in the journey* each lens is applied and *what raw material* it is handed.
- **It is not the reconciliation.** Resolving disagreements between specialists who watched the same walkthrough is **TASK-023**.
- **It does not select, score, or design HerRays features** (`prd.md` §13 Prompt 02: "Do not select final HerRays features").

---

## 1. Purpose

The teardown is where HerRays learns *how* the best habit and lifestyle apps actually behave — not what their marketing claims, not what their reviews allege, but what a real user experiences tap-by-tap. That evidence is only worth collecting if it is **comparable** (the same ten tasks run on all five apps), **reproducible** (another tester, same scenario and version, can re-run it), and **honest about its limits** (a single 20-minute session is not a retention study).

Naïve teardowns fail all three. A tester "plays with the app for a while", writes a paragraph of impressions, and those impressions — "onboarding felt long", "the streak is motivating" — get laundered into the capability library as if they were measured facts. That path produces a feature shopping list dressed as research and fails Gate 1's bar that "polished unsupported reports do not pass" (`prd.md` §11).

This script exists to convert free exploration into **admissible, grade-B-or-lower observational evidence** by doing four things:

1. **Standardize the task, not the impression.** Every app is driven through the *same ten journeys* (`prd.md` §5 Phase 2) under the *same declared scenarios* (§4), so differences in the record reflect differences in the apps, not differences in what each tester chose to poke at.
2. **Separate observation from interpretation at the point of capture.** The record (§3) forces a hard line between what was *seen* (a tap, a copy string, a transition, a timing) and what is *inferred* (an emotion, a friction cause). Emotion is always logged as a **hypothesis with its trigger**, never as the app's established effect on users (`prd.md` §5 Phase 2: "emotion hypotheses").
3. **Make the behavioral question explicit per journey.** Each script states the COM-B / SDT / Fogg question it is probing (`prd.md` §6) so the behavioral scientist (TASK-018) receives targeted raw material, and so the zero-guilt mandate — especially at the missed-day journey (J8) — is tested, not assumed.
4. **Record coverage and its limits.** A journey blocked by a paywall, an account wall, or a region lock is logged as **`blocked` with the barrier**, never silently skipped or guessed around (§3, §9). An unreachable journey is a coverage gap (TASK-008), not an absence of the feature.

---

## 2. Four non-negotiables (anti-fabrication guards)

These guards are structural; a walkthrough record that violates any one is rejected at entry (§9), not patched afterward.

- **W1 — No observation without a captured artifact.** Every recorded step must point to a timestamped screenshot/recording frame and tap-log entry (produced per TASK-017). An observation written from memory after the session, or recalled from prior personal use of the app, is inadmissible. If it was not captured, it was not observed.
- **W2 — Observation and interpretation are different fields, and only observation is graded on what was seen.** `copy_verbatim`, `screen_ref`, `tap_count`, `elapsed_ms` and `transition` are observations. `friction_hypothesis`, `emotion_hypothesis`, `mechanism_note` are interpretations: each must name the specific observed trigger it rests on and is graded **D** (expert judgment) until corroborated. "Users feel pressured by the streak" is never a finding; "on a strict-consecutive counter reset to 0 after one missed day (screen `J8-03`), tester hypothesised shame-risk (D)" is an admissible interpretation tied to an observation.
- **W3 — A single walkthrough is weak evidence, and short-run use is not retention.** One tester, one session, one app version produces grade-**B** evidence at most (`prd.md` §4); a claim only strengthens when independent testers/specialists converge (reconciled in TASK-023). Repeat use across 7–14 days (§7) reveals the *short-term* arc only and may **never** be reported as retention, long-term adherence, habit formation, or clinical outcome (`prd.md` §5 Phase 2, §6).
- **W4 — Blocked is a recorded state, never a guess.** Where a journey or step cannot be reached (hard paywall, account required, region lock, broken state), the step is logged `blocked`/`not_reached` with the barrier and the capture artifact of the block. The tester does not infer what the hidden screen "probably" does, does not fill it from marketing or memory, and does not mark the feature absent (absence requires a completed search — see TASK-012). The block opens a coverage gap in TASK-008.

---

## 3. The journey observation record (`JRN`) contract

Each journey walkthrough produces **one `JRN` header record** plus an ordered list of **step records**. On acceptance each becomes an `EVD`-linked artifact (TASK-005, `type: observed`, grade ≤ B). The record below is the stable shape the specialist templates (TASK-018–022) and the feature matrix (TASK-012) read from. Capture mechanics (how `screen_ref`, `elapsed_ms`, tap logs are produced and stored) are **TASK-017**.

### 3.1 `JRN` header fields

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `jrn_id` | id | M | `JRN-<APP>-J<NN>-<RUN>`, e.g. `JRN-APP-002-J02-01`. Unique; `RUN` increments per repeat (§7). |
| `app_id` | ref | M | `APP-001`…`APP-005` (TASK-006). |
| `journey` | enum | M | `J1`…`J10` (§5). One record per journey per run. |
| `scenario_id` | ref | M | `SC-1`…`SC-6` (§4.1). Which provisional user this run embodies. |
| `app_version` | string | M | Observed build string. **Never `unknown`** for a performed run (if the build cannot be read, the run is invalid — TASK-017). |
| `device` / `os` | string | M | e.g. `iPhone 15 / iOS 18.1`. From the §4.2 standard rig. |
| `region` / `locale` | string | M | Storefront + language, e.g. `US/en`. |
| `network` | enum | M | `wifi` / `cellular` / `offline` — J5/J6/J8 require at least one `offline` or degraded run. |
| `tester_role` | ref | M | The accountable specialist/role performing this run (TASK-003 matrix). |
| `capture_ref` | ref | M | Pointer to the TASK-017 recording/session bundle (W1). |
| `run_datetime` | datetime | M | Session start; `collected_date` for the derived `EVD`. |
| `completion_state` | enum | M | `completed` / `partial` / `blocked` / `not_applicable`. `blocked`/`partial` require `barrier` (W4). |
| `barrier` | string | C | Required if not `completed`: e.g. `hard_paywall`, `account_required`, `region_locked`, `crash`, `feature_absent_confirmed`. |
| `evidence_grade` | enum | M | ≤ **B** for a single run (W3); set by TASK-004 rules, not by the tester's confidence. |
| `notes` | text | O | Session-level context (e.g. "cold install on wiped device"). No interpretation here — interpretation is per-step. |

### 3.2 Step record fields (the observation ↔ interpretation firewall)

Each step in a journey script yields one step record. **Left block = observation (what was seen); right block = interpretation (what it might mean).** W2 forbids mixing them.

| Field | Block | Req. | Rule |
|---|---|---|---|
| `step_no` | — | M | Sequential within the journey (matches the script step numbers in §5). |
| `screen_ref` | observation | M | Screenshot/frame id from the capture bundle (TASK-017). The anchor for W1. |
| `action` | observation | M | The tester's action: `tap`, `swipe`, `type`, `scroll`, `wait`, `background/foreground`, `grant/deny permission`, `none`. |
| `tap_count` | observation | C | Cumulative taps to reach this step from journey start (for effort measures). |
| `elapsed_ms` | observation | C | Time from journey start (or inter-step delta) — the raw timing, not a judgment of "slow". |
| `copy_verbatim` | observation | C | Exact on-screen copy at the decision point, quoted within fair-use (`prd.md` §4 excerpts rule). Headlines, button labels, coaching language, error text. |
| `transition` | observation | C | The screen transition/animation observed: type, and (where TASK-020 needs it) a timing note. Described, not rated here. |
| `error_state` | observation | C | Any error, empty, loading, or failure state encountered, with its `screen_ref`. |
| `platform_behavior` | observation | C | Native iOS behaviours: permission prompts, HealthKit sheets, notification requests, widget/Live Activity surfaces, haptic events, back-gesture handling, offline behaviour. |
| `accessibility_obs` | observation | C | What was *observed* about VoiceOver labels, Dynamic Type reflow, contrast, reduced-motion response, tap-target size, focus order. (Systematic scoring = TASK-022; this is the raw capture.) |
| `decision_point` | observation | C | Where the app forced or offered a choice (goal, plan, permission, paywall option), and what the options were. |
| `friction_hypothesis` | interpretation (D) | O | Suspected friction **and the observed trigger it rests on**. Graded D until corroborated. |
| `emotion_hypothesis` | interpretation (D) | O | Hypothesised user emotion **with its trigger**, per `prd.md` §5 Phase 2. Never "users feel X"; always "at `screen_ref`, tester hypothesised X because <observed trigger>". |
| `mechanism_note` | interpretation (D) | O | The COM-B/BCTTv1/SDT/Fogg mechanism this step appears to use (`prd.md` §6). A tag for TASK-018, not an efficacy claim. |
| `followup` | — | O | Opens a gap/contradiction (TASK-008), a capability candidate (TASK-030), or a retest. |

---

## 4. Shared test harness

### 4.1 The six provisional scenarios (`prd.md` §5 Phase 2)

Every journey is run **in character** as one of six scenarios. These are provisional personas to standardize the walkthrough; they are explicitly flagged as **planning constructs, not user-research findings**, and are to be *replaced/refined with observed segments after TASK-026–029 interviews* (`prd.md` §5 Phase 2). They are not claims about who real users are.

| ID | Scenario | Standing stance / behaviour in every journey | Primary journeys it stresses |
|---|---|---|---|
| **SC-1** | **Motivated beginner** | New, high intent, follows the happy path, accepts defaults, grants permissions. Reveals the designed "golden path." | J1, J2, J3, J4 |
| **SC-2** | **Repeated habit abandoner** | Has failed before; sensitive to pressure, guilt, and all-or-nothing framing. Deliberately triggers the miss/recovery path. | J8, J6, J10 |
| **SC-3** | **Unpredictable schedule** | Uses the app at irregular times, skips days non-deliberately, changes goals mid-stream. Stresses flexibility. | J9, J6, J8 |
| **SC-4** | **Low-energy day** | Minimal capacity; wants the smallest possible interaction; resents effort and ceremony. Stresses daily-use friction. | J5, J4, J7 |
| **SC-5** | **Tracking-averse user** | Distrusts data entry, charts, and surveillance; declines optional permissions; skips logging. Stresses whether value survives low input. | J3, J5, J7 |
| **SC-6** | **Experienced optimizer** | Power user; seeks depth, integrations, analytics, configurability. Stresses ceiling and advanced paths. | J7, J9, J3 |

**Coverage rule.** Each of the ten journeys is run under **at least its mapped primary scenarios**, and J2/J4/J8 are run under **≥3 scenarios** because they most sharply separate the apps (first impression, activation, and recovery). A scenario the app does not fit (e.g. SC-6 depth in a deliberately minimal app) is still run and recorded as `completion_state: partial` with a note — the *absence* of a path is itself an observation.

### 4.2 Standardized conditions

- **Device rig:** a declared primary device/OS (recorded per run, §3.1), one smaller/older device for performance and Dynamic Type stress, consistent across all five apps so hardware is not a confound. Exact rig pinning and consent = TASK-017.
- **App version:** the version string is read and recorded at session start; a mid-study app update opens a **new `RUN`** and a change note (never silently merged with the old build).
- **Account & data state:** cold install on a wiped profile for J1–J4; a warmed account with ≥7 days of simulated history for J5–J10 (so progress/reminders/missed-day states exist to observe). The warming procedure is scripted so it is identical across apps.
- **Region/locale & payment:** a declared storefront and a test payment method; **J10 stops before any real charge** and never circumvents platform billing or ToS (W4, TASK-040 boundary).
- **Network:** at least one J5/J6/J8 run is performed `offline` or on degraded cellular to capture sync/queue/error behaviour (`prd.md` §5 Phase 2 platform behaviour).

### 4.3 Counterbalancing & independence

- **Order counterbalancing:** the five apps are not always driven in the same order; journey order within an app follows the natural lifecycle (J1→J10) except where a scenario dictates otherwise, to avoid fatigue effects favouring whichever app is tested first.
- **Independent specialist runs:** per `prd.md` §5 Phase 2 and §13 Prompt 02, behavioral, UX, visual/motion, growth/content, and iOS/accessibility specialists audit the **same captured walkthrough independently** before reconciliation (TASK-023). This script produces the shared raw material; the five lenses are TASK-018–022. Disagreements are **preserved**, never averaged (`prd.md` §13 Prompt 06).

---

## 5. The ten journey scripts

Each script has the same shape: **Objective · Research question · Scenarios · Entry precondition · Task script (numbered steps) · Expected observations · Probes (friction / emotion / mechanism / accessibility) · Error & recovery branches · Journey complete when.** Step numbers in the task script are the `step_no` values testers record against (§3.2).

> Reminder (W2): "Expected observations" below are **prompts for what to capture**, not claims about any app. Interpretation prompts are explicitly flagged and grade **D**.

---

### J1 — Discovery (pre-install)

- **Objective:** Capture the pre-install experience that shapes first expectations: store listing, positioning, screenshots, pricing signal, and the editorial/social context a prospective user meets before tap-to-install.
- **Research question:** What promise does the app make before any interaction, and does that promise set up the first-run experience honestly? (Feeds the "collage vs. coherent promise" question, `prd.md` §9.)
- **Scenarios:** SC-1 (primary), SC-5 (tracking-averse reads the privacy nutrition label), SC-6.
- **Entry precondition:** Not installed; starting from an App Store search or a shared link, on the declared storefront.
- **Task script:**
  1. Search the store with a declared neutral query set (e.g. "habit tracker", "build habits", "women wellness routine") and record where/whether the app surfaces.
  2. Open the product page; read the title, subtitle, promotional text, and first screenshot without scrolling.
  3. Scroll the full listing: screenshots in order, description, what's-new, category, developer, ratings summary, **privacy "data collected" label**.
  4. Note any editorial placement or badges *as a claim to verify* (route to TASK-010, never asserted here).
  5. Reach the price/subscription signal visible pre-install (route detail to TASK-011).
- **Expected observations:** `copy_verbatim` of title/subtitle/first screenshot caption; `screen_ref` for each listing screenshot in order; the privacy-label categories shown; the pre-install price signal present/absent; `decision_point` = what the listing asks the user to believe before installing.
- **Probes:** *friction* — is the core value legible in the first screen, or buried? *emotion (D)* — does the listing read as empowering vs. patronizing (HerRays brand lens, `prd.md` §1), with the exact copy as trigger? *mechanism (D)* — what promise/behavioral hook is offered (outcome, identity, streak, calm)? *accessibility* — listing legibility, caption presence.
- **Error & recovery branches:** app not found for a query (record the query, not an absence of the app); region-restricted listing (`blocked`, barrier `region_locked`).
- **Journey complete when:** the full listing has been captured in order and the pre-install promise is recorded verbatim. **Install is not performed in J1** (that is J2's entry).

---

### J2 — First launch & onboarding

- **Objective:** Capture everything from first open to the end of onboarding: permission asks, account creation, value framing, length, and the first promise the running app makes.
- **Research question (Fabulous lens, `prd.md` §3):** How do abstract goals get turned into a guided program, and at what cost in time, data, and commitment before any value is delivered?
- **Scenarios:** SC-1 (happy path), SC-5 (declines optional permissions/data), SC-2 (wary of commitment). **≥3 scenarios (§4.1).**
- **Entry precondition:** Fresh install (from J1), cold start, wiped profile.
- **Task script:**
  1. Launch; record the splash/first screen and time-to-interactive.
  2. Proceed through each onboarding screen in order; at every screen record copy, the choice offered, and whether it is skippable.
  3. At each permission prompt (notifications, HealthKit, tracking/IDFA, location), record the prompt copy and context; **SC-5 run declines optional ones** and records whether the app degrades gracefully or nags.
  4. At any account/sign-in wall, record whether it is mandatory to continue, what identifiers are requested, and sign-in options.
  5. Record any onboarding paywall or "start trial" interstitial (observe; detail to TASK-011/021).
  6. Record the onboarding end: how many screens, cumulative taps, elapsed time, and what the first post-onboarding screen is.
- **Expected observations:** screen count; `tap_count` and `elapsed_ms` to onboarding completion; `copy_verbatim` of each value-framing headline and each permission prompt; `decision_point` list (goal pickers, plan choices, commitment asks); `platform_behavior` for every system permission sheet; `error_state` for any dead-end when a permission is denied.
- **Probes:** *friction* — count required steps before first value; mark any premature account/permission/paywall gate. *emotion (D)* — pressure vs. welcome, with the triggering copy. *mechanism (D)* — commitment devices, goal-setting, identity priming, implementation-intention prompts (`prd.md` §6). *accessibility* — can onboarding be completed with VoiceOver and largest Dynamic Type; are skip controls reachable (raw capture for TASK-022).
- **Error & recovery branches:** permission denied → does onboarding continue or dead-end (`error_state`); account creation failure; back-navigation mid-onboarding (does progress persist?).
- **Journey complete when:** the app reaches its first steady-state home screen, with the full onboarding sequence, all permission asks, and any pre-value gate captured.

---

### J3 — Personalization & goal selection

- **Objective:** Capture how the app elicits the user's goals, habits, schedule, and context, and how that input shapes what the app then shows.
- **Research question (Griply lens, `prd.md` §3):** How do daily actions get connected to goals — and does the personalization reduce effort later, or just add setup overhead now?
- **Scenarios:** SC-5 (minimal input / declines), SC-3 (irregular schedule), SC-6 (deep configuration).
- **Entry precondition:** Onboarding complete (J2); at or before first goal/habit creation.
- **Task script:**
  1. Initiate creating/selecting a goal or habit; record whether templates, free-text, or a guided picker are offered.
  2. Record every input the app requests: goal type, frequency/cadence, time-of-day, reminders, difficulty, "why"/motivation, health linkage.
  3. **SC-5 run:** supply the minimum and skip everything optional; record what the app does with a sparse profile (does value survive?).
  4. **SC-3 run:** set a deliberately irregular/flexible cadence (e.g. "most weeks, not daily"); record whether the model supports non-daily commitment or forces a rigid daily frame.
  5. **SC-6 run:** push the configuration ceiling (multiple goals, custom schedules, metrics) and record where depth ends.
  6. Record how the personalization manifests on the home screen immediately afterward.
- **Expected observations:** the full input inventory (what is asked, what is required vs. optional); `copy_verbatim` of the cadence/difficulty options (critical for the strict-vs-flexible distinction, `prd.md` §3 streak caution); `decision_point` structure; whether a non-daily / flexible model is selectable at all; what a minimal profile yields.
- **Probes:** *friction* — setup length vs. payoff; mandatory fields that block progress. *emotion (D)* — does goal-setting feel autonomy-supportive (user's own goals) or imposed (SDT, `prd.md` §6)? *mechanism (D)* — goal-setting, implementation intentions, tailoring; flag any forced rigidity as a zero-guilt risk (`prd.md` §3). *accessibility* — picker and slider operability with assistive tech (capture for TASK-022).
- **Error & recovery branches:** required field with no valid option for the scenario (e.g. no non-daily cadence for SC-3 → record as a flexibility gap, `followup`); personalization that cannot be edited later (note for J9).
- **Journey complete when:** at least one goal/habit exists and the resulting personalized home state is captured for each scenario run.

---

### J4 — First meaningful action

- **Objective:** Capture the first time the user does the thing the app is for — complete a habit, run a routine, log an action — and the feedback that immediately follows.
- **Research question (Routinery lens, `prd.md` §3):** How does intention become action — and is the first completion satisfying, honest, and low-effort?
- **Scenarios:** SC-1, SC-4 (low energy / smallest interaction), SC-5. **≥3 scenarios (§4.1).**
- **Entry precondition:** At least one habit/routine exists (J3); user is on the home screen ready to act.
- **Task script:**
  1. Locate the primary action affordance for a habit from the home screen; record taps-to-action.
  2. Perform the first completion via the primary path (tap/swipe/timer/log).
  3. Record the completion feedback in full: visual change, animation, sound, haptic, copy, any reward/points/streak increment.
  4. **SC-4 run:** attempt the *lowest-effort* possible completion; record whether a one-tap path exists.
  5. If a guided action exists (e.g. a timed routine), run it end-to-end and record pacing, controls (pause/skip), and the completion state.
  6. Return to home; record how the completed state is represented.
- **Expected observations:** `tap_count`/`elapsed_ms` to first completion; the complete feedback inventory (`transition`, haptic/sound via `platform_behavior`, `copy_verbatim` of any celebratory text); whether completion is reversible/editable; the home-state change after completion.
- **Probes:** *friction* — effort to first win; ceremony vs. speed (esp. SC-4). *emotion (D)* — is the feedback earned and proportionate, or inflated/manipulative, with the exact feedback as trigger? *mechanism (D)* — positive reinforcement, feedback, progress feedback (`prd.md` §6); note reward schedule. *accessibility* — does the feedback convey success non-visually (VoiceOver announcement, not colour/animation alone)? Does reduced-motion still confirm completion? (capture for TASK-020/022).
- **Error & recovery branches:** mis-tap completion → can it be undone (`decision_point` for undo)? guided action interrupted by backgrounding (J5 overlap) → state on return.
- **Journey complete when:** one meaningful action is completed, its feedback fully captured, and the post-completion home state recorded, for each scenario run.

---

### J5 — Normal daily interaction

- **Objective:** Capture the ordinary, repeated day-to-day loop a committed user lives in — the interaction they will do dozens of times — and its steady-state effort.
- **Research question (Habitify lens, `prd.md` §3):** When is tracking useful rather than work? What is the daily cost of staying in the app?
- **Scenarios:** SC-4 (minimal), SC-1, SC-6 (depth).
- **Entry precondition:** Warmed account with ≥7 days of simulated history (§4.2); multiple habits present.
- **Task script:**
  1. Open the app cold (not from a notification) as a returning user; record the default landing screen and what it foregrounds.
  2. Complete the day's primary actions across multiple habits; record the full loop and its taps/time.
  3. Record what the home surfaces by default: today's list, progress, encouragement, upsell, or data.
  4. **SC-4 run:** measure the minimum taps to "mark the day done" and leave.
  5. Background and re-foreground the app; run at least one step `offline` and record sync/queue/error behaviour (`platform_behavior`).
  6. Inspect any home-screen widget / Live Activity / lock-screen surface if present (observe; detail to TASK-039 later).
- **Expected observations:** default landing content; `tap_count`/`elapsed_ms` for the full daily loop and for the minimal loop; what competes for attention on the home screen (`decision_point`, upsell copy verbatim); offline behaviour and sync indicators; widget presence.
- **Probes:** *friction* — is the frequent path short, or padded with interstitials/upsells? *emotion (D)* — does daily use feel calm and respectful or demanding/noisy? *mechanism (D)* — self-monitoring, habit cue, salience (`prd.md` §6); flag over-tracking burden (`prd.md` §6 "excessive tracking"). *accessibility* — daily loop operable one-handed, with Dynamic Type, with VoiceOver.
- **Error & recovery branches:** offline completion then reconnect → does it sync cleanly or duplicate/lose? Interstitial/upsell blocking the daily path → record as friction.
- **Journey complete when:** the full daily loop and the minimal daily loop are both captured, including one offline/degraded run.

---

### J6 — Reminders & re-entry

- **Objective:** Capture the re-engagement system — how and when the app pulls the user back — and the experience of entering the app *from* a reminder.
- **Research question:** Does re-entry respect attention and autonomy, or rely on pressure and dark-pattern nudging? (SDT autonomy; ethical anti-patterns, `prd.md` §6.)
- **Scenarios:** SC-3 (irregular, miss-prone), SC-2 (pressure-sensitive), SC-5.
- **Entry precondition:** Notifications configured (or offered); warmed account; the app backgrounded/closed so a reminder can fire.
- **Task script:**
  1. Inspect the reminder configuration surface: what can be set (time, per-habit, smart/adaptive), and the defaults.
  2. Record the notification content when a reminder fires: copy, tone, timing, frequency, and whether it is actionable from the lock screen.
  3. Tap the notification and record the deep-link destination and whether it drops the user directly into the relevant action (J4) or a generic home.
  4. **SC-2 run:** leave the app idle to trigger any escalation/"win-back"/guilt messaging; record tone and frequency verbatim.
  5. Record the controls to reduce/stop reminders and how many taps that takes (autonomy cost).
  6. Run one re-entry `offline` (notification tapped with no network).
- **Expected observations:** reminder configuration inventory and defaults; `copy_verbatim` of every notification and any escalation message; deep-link destination (`screen_ref`); taps-to-mute; `platform_behavior` for the system notification and permission state.
- **Probes:** *friction* — re-entry lands on the action vs. a dead home. *emotion (D)* — supportive nudge vs. guilt/FOMO pressure, with the message copy as trigger (zero-guilt mandate). *mechanism (D)* — prompts/cues, implementation intentions, loss-aversion/streak-pressure (flag the last as an ethical anti-pattern candidate, `prd.md` §6). *accessibility* — notification legibility; are actionable notifications operable with assistive tech.
- **Error & recovery branches:** permission not granted → is there any re-entry path at all, or is the user silently lost? Deep link to a stale/empty state.
- **Journey complete when:** the reminder configuration, at least one fired notification, the deep-link destination, and the mute path are captured, including any escalation under SC-2.

---

### J7 — Progress, reward & reflection

- **Objective:** Capture how the app represents accumulated progress and closes the loop — stats, streaks, milestones, reflection prompts — and whether that representation aids decisions or just displays data.
- **Research question (Not Boring / Habitify lens, `prd.md` §3):** How does functional tracking become meaningful (or merely decorative/anxiety-inducing)? Do charts translate into decisions?
- **Scenarios:** SC-6 (depth/analytics), SC-5 (tracking-averse — is progress legible without data appetite?), SC-2.
- **Entry precondition:** Warmed account with ≥7 days of mixed history (some completions, some misses) so progress surfaces have content.
- **Task script:**
  1. Navigate to every progress/stats/history surface; record what metrics are shown and how (streak, %, charts, calendar, milestones).
  2. Record any streak/consecutive counter: its rules, how it reads after a miss, and its prominence (critical for `prd.md` §3 streak caution).
  3. Record any reward/badge/celebration and reflection prompt (journaling, mood, "how did that feel?").
  4. **SC-5 run:** assess whether progress is understandable and encouraging *without* requiring the user to be a data analyst (`prd.md` §7 worked example).
  5. **SC-2 run:** record how the progress surface frames a period with misses — encouraging recovery vs. highlighting failure.
  6. Record whether any insight is *actionable* (does it suggest a next step) or purely descriptive.
- **Expected observations:** the metric inventory and their visual form (`screen_ref` each); streak rules and post-miss reading verbatim; reward/reflection copy; whether misses are framed punitively or supportively; presence/absence of an actionable insight.
- **Probes:** *friction* — effort to understand one's own progress. *emotion (D)* — pride/clarity vs. shame/anxiety at a gap, with the exact framing as trigger. *mechanism (D)* — feedback, self-monitoring, reinforcement, goal-review (`prd.md` §6); flag all-or-nothing streak framing as a zero-guilt risk. *accessibility* — are charts conveyed non-visually (VoiceOver summaries, not colour-only); reduced-motion for animated stats.
- **Error & recovery branches:** empty/low-data state (how does progress read on day 1?); a chart with no accessible alternative (`accessibility_obs`, `followup` to TASK-022).
- **Journey complete when:** all progress surfaces, the streak behaviour, any reward/reflection, and the miss-framing are captured for each scenario run.

---

### J8 — Missed day & recovery  *(highest-priority journey)*

- **Objective:** Capture exactly what happens when the user misses — one day, several days — and how the app handles the return. This is the journey most diagnostic of the zero-guilt mandate and the one most prone to shame/all-or-nothing harm.
- **Research question (`prd.md` §3 streak worked example, §6 recovery/autonomy):** Does the app punish the lapse (reset to zero, loss framing) or support the return (flexible consistency, "welcome back", repair)? Which mechanisms are at play?
- **Scenarios:** SC-2 (abandoner — primary), SC-3 (non-deliberate miss), SC-4. **≥3 scenarios (§4.1).**
- **Entry precondition:** Warmed account mid-streak / mid-progress so there is something to "lose."
- **Task script:**
  1. Establish a visible run of progress (e.g. a multi-day streak), then **deliberately skip** the required action for one full day.
  2. Re-open the app the next day and record the *first* thing shown about the miss: copy, visual change, counter reset, notification received overnight.
  3. Record whether and how the streak/progress is reset, decremented, frozen, or preserved, and the exact framing copy.
  4. Extend the gap to several days (per scenario) and record escalation or "you've been away" handling on return.
  5. Record every repair/recovery affordance offered: streak freeze, retroactive completion, "start again", skip/rest day, grace period, encouraging reframe — and the cost/availability of each.
  6. **SC-2 run:** record the emotional framing of the return in detail (this run is the primary zero-guilt evidence).
- **Expected observations:** the exact post-miss copy and visual state (`copy_verbatim`, `screen_ref`); the streak/progress rule on miss (reset / decrement / freeze / preserve); any overnight guilt/loss notification verbatim (link J6); the full inventory of repair affordances and whether any is paywalled; the framing of the return.
- **Probes:** *friction* — effort to recover vs. effort to abandon. *emotion (D)* — shame/defeat vs. reassurance/agency, with the specific framing as trigger (the core HerRays concern). *mechanism (D)* — loss aversion, all-or-nothing reset (anti-patterns), vs. self-compassion / flexible-goal / recovery support (`prd.md` §6); explicitly classify which the app uses. *accessibility* — is the recovery path reachable and legible under assistive tech.
- **Error & recovery branches:** no recovery path at all (record as a hard zero-guilt failure, `followup` to TASK-008/036); recovery that requires payment (note for J10/TASK-021); a reset that is irreversible.
- **Journey complete when:** a one-day miss and a multi-day gap have each been induced and the full post-miss state, framing, and every repair affordance captured, with the SC-2 run documented in detail.

---

### J9 — Changed circumstances (goal / schedule / capacity change)

- **Objective:** Capture how the app adapts when the user's life changes — editing goals, changing cadence, pausing, reducing scope, or handling a capacity drop — i.e. whether it is a rigid plan or a life companion.
- **Research question (`prd.md` §8 Studio E lens, §9 adaptation):** Can the user change the commitment without being punished or losing their history? Does the app bend to the person, or demand the person bend to it?
- **Scenarios:** SC-3 (schedule change — primary), SC-6 (restructure/optimize), SC-2 (reduce to recover).
- **Entry precondition:** Warmed account with established goals/habits and history.
- **Task script:**
  1. Edit an existing goal/habit: change its cadence (e.g. daily → 3×/week), target, or time; record whether this is possible and whether history is preserved.
  2. Reduce scope: pause a habit, archive it, or lower difficulty; record the mechanism and whether "pause" exists as a non-destructive option.
  3. Attempt a capacity-drop scenario: temporarily lower the whole plan's demand (e.g. a "light week"); record whether the app supports it or forces delete/recreate.
  4. **SC-6 run:** restructure multiple goals and record the ceiling and the effort.
  5. Record what happens to streaks/progress/stats when a goal is changed or paused (does changing cadence reset the record?).
  6. Record any onboarding re-trigger or paywall encountered when restructuring.
- **Expected observations:** editability inventory (what can change, what is locked); whether pause/light-mode/archive exist and are non-destructive; the effect of a change on history/streak (`copy_verbatim` of any warning); taps/time to adapt; any gate hit while editing.
- **Probes:** *friction* — effort and risk of changing a commitment. *emotion (D)* — does adapting feel permitted and safe vs. like failing/cheating, with the triggering copy. *mechanism (D)* — goal-adjustment, graded tasks, autonomy support (`prd.md` §6). *accessibility* — edit flows operable with assistive tech.
- **Error & recovery branches:** no way to reduce without deleting (record as a rigidity failure, `followup`); a cadence change that silently destroys streak history; pause that is paywalled.
- **Journey complete when:** a cadence change, a scope reduction, and a capacity-drop attempt have each been performed (or shown impossible) and their effect on history captured.

---

### J10 — Paywall, cancellation & return

- **Objective:** Capture the full monetization lifecycle a user meets: where the paywall appears, what it gates, trial mechanics, the cancellation path, and the win-back on return — observed, never transacted to a real charge.
- **Research question (`prd.md` §3 Fabulous lens, §13 Prompt 02):** How does the app convert and retain commercially, and does it do so transparently and ethically?
- **Scenarios:** SC-1 (converts on happy path), SC-2 (price-sensitive, cancels), SC-6.
- **Entry precondition:** An account that has hit or can summon the paywall; a test payment method (**no real charge** — stop before purchase confirmation, W4).
- **Task script:**
  1. Record every paywall encountered across the lifecycle: trigger (onboarding, feature-gate, limit), timing, and hardness (dismissible vs. blocking).
  2. At a paywall, record the full offer: plans, prices as shown, trial terms, default-selected option, scarcity/urgency copy, and the close/dismiss affordance's prominence.
  3. Identify precisely **what is free vs. gated** by attempting gated features and recording the gate.
  4. Record the trial start flow up to — **but not through** — the actual purchase confirmation; capture trial length, whether a payment method is required upfront, and the renewal disclosure.
  5. Record the **cancellation** path: where it lives, how many steps, any retention offer/interstitial, and the post-cancel state (does access persist to period end?). (Cancellation via the system subscription manager is documented, not circumvented.)
  6. Record any **win-back**: re-engagement offer, discount, or downgraded free tier after lapse/cancel.
- **Expected observations:** the paywall inventory (trigger/timing/hardness, `screen_ref` each); full offer copy verbatim incl. urgency/scarcity language; free-vs-gated feature map; trial mechanics and renewal disclosure; cancellation step count and retention-offer copy; win-back offer copy. Commercial *estimates* (revenue/conversion) are **out of scope here** and route to TASK-015 as estimates only (W3).
- **Probes:** *friction* — asymmetry between how easy it is to subscribe vs. cancel (dark-pattern signal). *emotion (D)* — pressure/manipulation vs. fair choice, with the exact urgency copy as trigger. *mechanism (D)* — scarcity, default-bias, loss framing (ethical anti-patterns, `prd.md` §6); flag hard. *accessibility* — is the dismiss/close control reachable and labelled; can the paywall be exited with VoiceOver (a common accessibility dark pattern).
- **Error & recovery branches:** paywall with no discoverable dismiss (record as a dark pattern, `followup` to TASK-021/036); cancellation that cannot be completed in-app; trial that requires payment before any value.
- **Journey complete when:** all paywalls, the full offer, the free/gated map, the trial-start (pre-charge), the cancellation path, and any win-back are captured — **with no real purchase made.**

---

## 6. Cross-journey coverage matrix

For each app, the minimum walkthrough set. "✓" = at least one run; "✓×n" = minimum distinct scenario runs (§4.1). The grid is the Gate-1 coverage artifact (empty until runs are performed).

| Journey | SC-1 | SC-2 | SC-3 | SC-4 | SC-5 | SC-6 | Min runs |
|---|---|---|---|---|---|---|---|
| J1 Discovery | ✓ | | | | ✓ | ✓ | 2 |
| J2 Onboarding | ✓ | ✓ | | | ✓ | | ✓×3 |
| J3 Personalization | | | ✓ | | ✓ | ✓ | 3 |
| J4 First action | ✓ | | | ✓ | ✓ | | ✓×3 |
| J5 Daily use | ✓ | | | ✓ | | ✓ | 3 |
| J6 Reminders | | ✓ | ✓ | | ✓ | | 3 |
| J7 Progress | | ✓ | | | ✓ | ✓ | 3 |
| J8 Missed day | | ✓ | ✓ | ✓ | | | ✓×3 |
| J9 Changed circumstances | | ✓ | ✓ | | | ✓ | 3 |
| J10 Paywall/cancel/return | ✓ | ✓ | | | | ✓ | 3 |

**Rule:** a cell left unrun is recorded as `unassessed` in the coverage ledger, never inferred. A journey that an app genuinely lacks (e.g. no reminders) is recorded as a completed J6 with `completion_state: partial` + an `absent` observation (a finding), distinct from "not yet tested."

---

## 7. Repeat use & the longitudinal limit

Per `prd.md` §5 Phase 2, each app is driven through the daily-loop journeys (J5–J8) repeatedly over a **7–14-day** window where feasible, with each day a new `RUN`. This is to observe how the *short-term* experience evolves (novelty wearing off, notification fatigue, progress accumulating, the first real miss). 

**Hard limit (W3):** this window reveals short-term experience **only**. It is never reported as retention, long-term adherence, habit automaticity, or health outcome — those require the longer pilots deferred to the validation roadmap (`prd.md` §9, §15). Any claim phrased as "users keep coming back" / "this builds habits" from a 14-day solo walkthrough is a prohibited grading (§9, TASK-004).

---

## 8. Synthetic worked example (proves the script runs)

> **SYNTHETIC — NOT A REAL OBSERVATION.** The following uses a fictitious app `APP-SYNTH-Z` (not one of the five benchmarks) and invented values to demonstrate that J8 produces a valid, firewall-respecting `JRN` record. Nothing here describes any real product. All ids are `*-SYNTH-*`.

**Header — `JRN-APP-SYNTH-Z-J08-01`:**
```yaml
jrn_id: JRN-APP-SYNTH-Z-J08-01        # SYNTHETIC
app_id: APP-SYNTH-Z                    # SYNTHETIC — not a benchmark
journey: J8                            # Missed day & recovery
scenario_id: SC-2                      # Repeated habit abandoner
app_version: "9.9.9-synthetic"         # a real run would read the true build (W1)
device: "iPhone 15 / iOS 18.1"
region: "US"; locale: "US/en"
network: wifi
tester_role: R03_senior_ux_designer    # TASK-003 matrix
capture_ref: CAP-SYNTH-session-0007     # TASK-017 bundle (W1)
run_datetime: 2026-11-22T09:00:00Z
completion_state: completed
barrier: none
evidence_grade: B                       # single run ceiling (W3)
notes: "[SYNTHETIC] warmed 6-day streak, one day deliberately skipped"
```

**Step record (the firewall in action) — `step_no: 2`:**
```yaml
step_no: 2
# --- observation block (what was seen) ---
screen_ref: SYNTH-J8-02
action: none            # app opened cold the morning after a skipped day
copy_verbatim: "[SYNTHETIC] Your 6-day streak ended. Start a new one today."
transition: "[SYNTHETIC] counter flips 6 -> 0 with a 400ms shake"
platform_behavior: "[SYNTHETIC] overnight push received: 'Don't lose your streak!'"
accessibility_obs: "[SYNTHETIC] counter change announced by VoiceOver as '0 days'"
decision_point: "[SYNTHETIC] options shown: 'Start over' | (no repair/freeze offered)"
# --- interpretation block (what it might mean — grade D, trigger-bound) ---
friction_hypothesis: "[SYNTHETIC] no low-cost recovery path; only 'start over' (D)"
emotion_hypothesis: "[SYNTHETIC] shame/defeat risk, triggered by '6 -> 0' reset + loss-framed copy (D)"
mechanism_note: "[SYNTHETIC] loss-aversion + all-or-nothing reset = zero-guilt ANTI-PATTERN candidate (D)"
followup: "GAP-SYNTH: no repair affordance -> route to TASK-008 + TASK-036 red-team"
```

**Why this record is valid:** every interpretation (shame-risk, anti-pattern) is bound to a named observation (the `6 -> 0` reset at `SYNTH-J8-02`, the loss-framed copy) and graded **D** (W2); the observation block carries a capture artifact (`CAP-SYNTH-session-0007`, W1); the single run is graded **B**, not higher (W3); nothing is claimed about any real app (synthetic namespace). The record *describes what a tester would capture*, demonstrating the script mechanics — it is not evidence.

---

## 9. Forbidden-value & validation-failure catalogue

A `JRN` record is rejected at entry (not silently corrected) if any of the following occurs:

1. **Observation without a capture artifact** — any observed field present but `capture_ref`/`screen_ref` empty (violates W1). "Recalled from using the app before" is inadmissible.
2. **Interpretation in an observation field** — `copy_verbatim` or `transition` containing a judgment ("confusing", "slow", "pushy") instead of what was literally shown. Judgments belong in the D-graded interpretation block with a trigger (W2).
3. **Emotion asserted as fact** — an `emotion_hypothesis` phrased as "users feel X" or lacking a named observed trigger (violates W2 and `prd.md` §5 Phase 2 "emotion hypotheses").
4. **Single-run claim graded above B** — `evidence_grade` A, or any convergence/efficacy claim from one walkthrough (violates W3, TASK-004).
5. **Retention/habit/outcome claim from short-run use** — any assertion of retention, long-term adherence, automaticity, or clinical outcome from the §7 window (violates W3, `prd.md` §5 Phase 2/§6).
6. **Guessed blocked content** — a `blocked`/`not_reached` step whose hidden screen is described anyway, or a feature marked absent without a completed search (violates W4; absence confirmation routes to TASK-012).
7. **`app_version: unknown` on a performed run** — a real walkthrough with no build string read is invalid (§3.1).
8. **Real purchase in J10** — any step past the pre-charge boundary, or any ToS/billing circumvention (violates W4/§4.2).
9. **Averaged specialist disagreement** — a reconciled record that silently merges conflicting lens interpretations instead of preserving them for TASK-023 (`prd.md` §13 Prompt 06).
10. **Marketing/listing content logged as J2–J10 observation** — store screenshots or promo copy entered as in-app walkthrough observations (that is J1 pre-install material, or a claim-to-verify), not evidence of in-app behaviour.
11. **Scenario not declared** — a `JRN` with no `scenario_id`, so the run cannot be interpreted or reproduced (§4.1).
12. **Placeholder content** — any `[TBD]`, Lorem ipsum, or invented-to-look-complete observation. An unobserved field is left empty with a reason, never filled to appear thorough (`prd.md` §1, §4).

---

## 10. Dependencies, open unknowns & change log

**Upstream dependencies:** TASK-005 (`EVD` schema — the promotion target for each observation) · TASK-006 (`APP` registry — the five subjects + `app_version` field) · TASK-004 (grading — the ≤ B single-run ceiling) · TASK-011 (observed version/paywall context for J1/J10).

**Downstream consumers:** TASK-017 (capture mechanics this script assumes) · TASK-018 (behavioral/BCT audit — reads J2/J4/J6/J7/J8 steps) · TASK-019 (UX heuristic audit — reads friction/decision points across all) · TASK-020 (visual/motion audit — reads `transition`/`accessibility_obs`, esp. J4/J7) · TASK-021 (growth/UX-writing audit — reads J2/J6/J10 copy & paywall) · TASK-022 (iOS/accessibility audit — reads `platform_behavior`/`accessibility_obs`) · TASK-023 (reconciliation) · TASK-012 (feature matrix — `JRN` ids become its cell evidence) · TASK-030/031 (capability extraction — esp. the J8 recovery mechanisms).

**Open unknowns (recorded, not resolved here):**
- Real device rig, OS, and storefront pinning — deferred to TASK-017 and the access register.
- Which benchmark apps are reachable per journey (paywall/region/account walls) — discovered during execution; blocks become TASK-008 gaps, not guesses.
- The six scenarios are **provisional** and must be reconciled against observed segments from TASK-026–029 before Gate 2; they are not validated personas.
- Whether a shared recording/annotation toolchain is available (affects `capture_ref` format) — TASK-017 / tooling decision (TASK-038).

**Change log:**
- v0.1 (2026-11-22): Initial ten journey scripts (J1–J10), shared harness (six provisional scenarios + standardized conditions + counterbalancing), `JRN` observation/interpretation record contract, cross-journey coverage matrix, repeat-use longitudinal limit, synthetic worked example, forbidden-value catalogue. No walkthrough performed; no benchmark observation asserted.
