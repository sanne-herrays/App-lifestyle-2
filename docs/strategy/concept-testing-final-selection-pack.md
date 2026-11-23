# HerRays Concept Testing & Final Selection Pack

**Deliverable:** TASK-048 — Create the concept testing and final selection pack
**Workstream:** Validation & Selection (WS08)
**Version:** 0.1 · **Status:** Proposed — study **designed, unexecuted**; no participant recruited, no session run, no score, preference or selection asserted
**Owner (accountable role):** Independent UX researcher / product lead (WS08), operating under the Program Director as Gate-4 and Gate-5 chair; clinical, privacy and accessibility reviewers hold **non-compensable veto** (`↔ TASK-003`)
**Reviewers:** R07 UX researcher · R02 Behavioral scientist · R09 Product analyst/growth · R13 QA/accessibility specialist · R10 Content strategist/UX writer · R03 Senior UX designer · R14 Clinical reviewer · R15 Privacy/regulatory reviewer · Program Director (gate chair)
**Source basis:** `prd.md` §9 lines 172–178 (validation dimensions, counterbalancing, representative users, the four-way distinction, final selection weights, wireframe minimum), §11 lines 197–205 (Gate 4 validation readiness, Gate 5 build readiness, "Polished unsupported reports do not pass"), §13 Prompt 10 lines 273–275 (independent validation: realistic tasks, neutral questions, observed behavior, counterbalanced presentation, representative participants; "Never fabricate tests or results; if access is unavailable, prepare the study and mark it unexecuted") and Prompt 11 lines 277–279 (final product director: select the strongest direction without mechanically combining incompatible features), §15 lines 319–323 (launch order step 7–8; the final decision rule — "least unnecessary effort"), §8 lines 157–170 (six studios × three concepts → ~6 shortlisted directions), §1 lines 18–24 (separate engagement/adherence/automaticity/health outcomes; longitudinal caveat), §4 lines 107–111 (evidence grades A–D; never fabricate retention/CAC/LTV/clinical outcomes), §14 lines 289–310 (handoff schema and the "not complete" rules); `↔ TASK-001` (success-metrics spec — the measurement definitions these tests instrument, esp. ACT-01, DEL-01, DEL-03, ACC-01), `↔ TASK-044` (divergent concept submission template — the `SUB` dossiers whose `→ TASK-048` test hypotheses land here), `↔ TASK-045` (eight-screen wireframe spec — the stimuli under test), `↔ TASK-043` (six studio briefs — the directions compared), `↔ TASK-026` (user recruitment & consent pack — the participant pipeline this reuses), `↔ TASK-027` (neutral discovery interview guide — the non-leading question discipline reused here), `↔ TASK-016` (ten standardized journeys — the task scaffolding), `↔ TASK-022` (iOS/accessibility audit — the ACC gate), `↔ TASK-040` (privacy/clinical boundary checklist — the safety gate), `↔ TASK-033` (capability safety gate), `↔ TASK-009` (`EXP`/`DEC` registers — where protocols preregister and decisions log), `↔ TASK-004`/`TASK-005` (evidence grades & `EVD` schema), `↔ TASK-047` (Habit Graduation state machine — the missed-day/recovery behavior the missed-day task observes), `→ TASK` longitudinal pilot (out-of-cycle; `prd.md` §1/§9).

---

## 0. How to read this document

This is the **test instrument and the decision machinery** for WS08 — the protocol, scripts, measures, scorecard, gates and handoff checklist used to compare the ~6 shortlisted concept directions with real participants and then select one. It is **not a report of results.** It satisfies the TASK-048 acceptance criteria: neutral usability scripts, counterbalancing, success measures, a concept scorecard, an explicit statement of evidence limitations, a decision gate, and a final MVP handoff checklist — with invented test results structurally prohibited.

> **No-fabrication statement.** This document contains **zero test results, scores, participant quotes, success rates, preference data, conversion/retention numbers or selection verdicts.** No participant has been recruited; no session has been run. Every results-shaped field appears only as an **empty cell**, a `— to be populated from a run session —` token, or an explicitly flagged **ILLUSTRATIVE — FORMAT DEMONSTRATION** example (§12) using transparently synthetic placeholders. Producing a number in any results field before a real, consented session emits it violates `prd.md` §13 Prompt 10 ("Never fabricate tests or results") and §4 ("Never fabricate … actual retention, CAC, LTV, clinical outcomes"). Per the PRD, if participant access is unavailable the correct output is a **ready-to-run study marked unexecuted** — which is exactly the status of this pack.

**The study's status is `designed, unexecuted`.** Nothing here claims a concept is desirable, usable, trusted, or selected. Those are the *outputs* of running this pack, not contents of it.

### Scope boundary (what this task is and is not)

- **TASK-048 (this document) = the comparative validation protocol + the selection gate.** It defines how to test the shortlisted directions neutrally, how to score them, what must be true to pass Gate 4, how the single direction is chosen (Prompt 11), and what must be handed to the build (Gate 5).
- **`↔ TASK-044` (submission template) = the *upstream* format.** The studios' `SUB` dossiers carry **test hypotheses** bound "to be tested per `→ TASK-048`." This pack is where those hypotheses become preregistered tests. It does not re-define the submission format.
- **`↔ TASK-045` (wireframe spec) = the *stimulus* definition.** The eight screens are what participants interact with; this pack tests them, it does not specify them.
- **`↔ TASK-001` (success metrics) = the *measurement definitions*.** This pack instruments a subset of those metrics in a moderated/short-pilot setting (e.g., ACT-01 first-action completion, DEL-01 return intention, DEL-03 autonomy, ACC-01 assistive parity). It does not redefine them, and it inherits their grades and caveats.
- **Longitudinal behavior & health outcomes = explicitly out of scope.** Observed repeat behavior over a short diary window is the furthest this cycle reaches; sustained behavior change and clinical outcomes require a **separate longer pilot** (`prd.md` §1 line 19, §9 line 174, §15 line 321). This pack produces that pilot's *entry criteria*, not its results.

---

## 1. Purpose and where this sits in the pipeline

The PRD forbids jumping from six studios straight to a shipped product. Between "18 concept dossiers → ~6 shortlisted directions" (`prd.md` §8) and "select the strongest direction" (Prompt 11) sits **independent validation with real people** (Prompt 10). This pack is that bridge, and it does five jobs:

1. **Turn studio hypotheses into preregistered tests.** Every `→ TASK-048` hypothesis from the `SUB` dossiers (`↔ TASK-044` D-10) is registered as an `EXP` record (`↔ TASK-009`) with a method, a success criterion and a direction **before** any data is seen — so the test cannot be reinterpreted to flatter a favored concept.
2. **Measure what the PRD's final decision rule actually values.** Not "most features / highest engagement / prettiest prototype" but "meaningful user value with the least unnecessary effort" (`prd.md` §15 line 323). The measures (§6) and the scorecard weights (§7) are engineered to that rule.
3. **Keep the four constructs separate.** Desirability, comprehension and first-action success are testable now; **sustained adherence, automaticity and health outcomes are not** and are never claimed from this study (`prd.md` §1, §9; `↔ TASK-001`).
4. **Make safety, privacy and accessibility hard gates, not scores.** A concept that fails a clinical/privacy/accessibility/autonomy gate cannot be "outweighed" by delight (`prd.md` §9 line 176, §11).
5. **Produce a defensible selection and a build-ready handoff.** Gate 4 (validation readiness) → selection decision (Prompt 11) → Gate 5 (build readiness) → a longitudinal pilot plan that is *retained, not executed* here.

**Gate map.**

| Gate | PRD basis | This pack supplies | Authority |
|---|---|---|---|
| **Gate 4 — Validation readiness** | §11 line 202 | Testable prototypes, preregistered tasks/criteria, safety/privacy/accessibility review **before** testing | Program Director: pass / conditional / fail |
| **Selection decision** | §13 Prompt 11 | Scorecard (§7) + decision rule (§9) + rejected-concept backlog | Product Director & Design Review Board |
| **Gate 5 — Build readiness** | §11 line 203 | MVP handoff checklist (§10): usability risks addressed, approved MVP/architecture, remaining claims have a validation plan | Program Director: pass / conditional / fail |

---

## 2. What is tested, and the unit of a test

### 2.1 The stimuli
The **~6 shortlisted directions** (`prd.md` §8 line 170; one or more per studio A–F) as **low-fidelity, clickable prototypes** built to the `↔ TASK-045` eight-screen inventory (welcome, discovery, first action, daily home, guided habit, progress/reflection, missed day/recovery, personal insight) plus the "as needed" states (personalization, reminders, errors, privacy controls, settings, paywall, accessibility states) where a concept's claim depends on them. Fidelity is deliberately **low** (`prd.md` §8 line 170: "do not jump immediately to polished screens") so the test reads the *idea*, not the pixels.

### 2.2 The unit of analysis
A **concept direction**, not a studio and not a single feature. A direction carries its interaction philosophy; the PRD forbids "mechanically combining incompatible features" (Prompt 11), so the test keeps directions whole and compares them as wholes.

### 2.3 Fairness preconditions (must hold before any session)
- **Fidelity parity.** All directions tested at the *same* fidelity, same prototyping tool, same number of built screens for the shared journeys. A direction may not win on polish.
- **Copy neutrality.** Prototype copy reviewed by R10 (`↔ TASK-021` tone rules) to strip persuasion/pressure language that could bias trust/autonomy measures.
- **Stimulus pinning.** Each direction's prototype is version-pinned (`PROTO-<dir>-v<n>` + hash) and recorded in the session log, so a result is always traceable to the exact stimulus seen.

---

## 3. Participants, recruitment, sampling, consent

Recruitment and consent **reuse `↔ TASK-026`** (the recruitment & consent pack) — this pack does not re-issue quotas or consent language; it references them and adds the test-specific screening and the privacy posture for session recording.

| Item | Specification |
|---|---|
| Population | Women in the HerRays midlife target audience (`prd.md` §1, §6), purposively sampled across health goals (sleep/movement/nutrition/stress), schedule regularity, tech comfort, prior success/failure with habit tools, and **tracking tolerance** (incl. tracking-averse) — the segments named in `prd.md` §5 line 125. |
| Target n | **Proposed planning target:** 6–10 participants **per tested cell** for moderated qualitative usability (saturation-oriented, not powered for significance); a larger separate sample only if a later quantitative preference test is justified. Exact n set with R07/R09 against recruitment reality (`↔ TASK-026`); **n is a plan, not a claim**. |
| Screening | Confirms audience fit, excludes direct competitors' employees and prior HerRays concept exposure (protects naïveté), captures assistive-tech users deliberately (so ACC-01 parity is tested, not assumed). |
| Consent | Explicit, informed, revocable; separate consent for **session recording** and for any **short diary** follow-on; data-minimized; right to withdraw without penalty (`↔ TASK-026`, `↔ TASK-040`; GDPR, `prd.md` §6). |
| Accessibility inclusion | At least one cell run with **VoiceOver and/or largest Dynamic Type** so assistive-condition task success is observed, not inferred (`↔ TASK-022`, ACC-01). |
| Compensation | Fair incentive per `↔ TASK-026`; disclosed; never contingent on "positive" feedback (bias guard). |
| No-fabrication | If recruitment cannot be completed, the study is delivered **unexecuted** with these instruments ready. Inventing participants, quotes or a sample is forbidden (`prd.md` §13 Prompt 10/04; §4). |

---

## 4. Study design and counterbalancing

### 4.1 Design
**Within-participant comparison on a subset of directions, with a balanced incomplete-block design.** Showing all ~6 directions to one participant risks fatigue and heavy order/anchoring effects; showing only one loses the comparative signal the PRD wants. The compromise:

- Each participant evaluates **k = 2–3 directions** (set with R07; proposed default k=3).
- Assignment follows a **balanced incomplete block design (BIBD)** so every direction is seen by the same number of participants and every *pair* of directions co-occurs roughly equally — this is what makes cross-direction comparison fair when no one sees all six.
- A **between-participant** fallback (each participant sees exactly one direction) is specified for cases where carry-over is judged too strong; it trades comparability for cleaner per-concept reads and needs larger n.

### 4.2 Counterbalancing (the PRD's explicit requirement, §9 line 174 / §13 Prompt 10)
Order of the directions **within** each participant's block is counterbalanced by a **Latin square** over the k positions, so no direction systematically benefits from being first (freshness) or last (recency/anchoring). The task order **within** a direction (the journeys of §5) is held constant across directions for a given participant (so task difficulty is not confounded with direction), but is itself rotated across participants where feasible.

| Counterbalancing target | Mechanism | Guards against |
|---|---|---|
| Which directions a participant sees | BIBD assignment | Unequal exposure / unequal pair coverage |
| Order of directions seen | Latin square over positions | First/last position bias, fatigue-by-direction confound |
| Order of tasks within a direction | Fixed per participant, rotated across participants | Task-difficulty ↔ direction confound |
| Moderator | Rotate moderators across directions, or hold one moderator constant across *all* directions a participant sees | Moderator-style ↔ direction confound |

The realized assignment is recorded in the session log; the **preregistered** assignment (before any session) lives as an `EXP` record (`↔ TASK-009`) so deviations are visible.

### 4.3 Blinding and bias controls
- **Neutral labels.** Directions are presented with neutral codes (e.g., "Prototype Blue / Green"), never studio names or value-laden titles.
- **Moderator does not know the hypothesis under test for that task** where feasible (reduces unconscious steering); at minimum the moderator follows the fixed script (§5) and may not editorialize.
- **Analyst triangulation.** Qualitative coding uses ≥2 independent coders on a subset with an agreement check (`↔ TASK-013`/`TASK-014` coding discipline reused), so themes are not one analyst's impression.

---

## 5. Neutral usability scripts

Scripts are **moderator-read, fixed, and neutral.** They reuse the non-leading discipline of `↔ TASK-027` (discovery guide) and the ten standardized journeys of `↔ TASK-016`, adapted into prototype tasks. The golden rule: **ask participants to *do*, then observe; never ask them to predict they'll love it.**

### 5.1 Neutral-wording rules (binding)
1. **Task, not opinion, first.** "Show me how you would …" precedes any rating.
2. **No leading verbs.** Never "How easy was that?" (presupposes easy) → "What was that like?" / "Walk me through what you were thinking."
3. **No feature-selling.** The moderator never explains a benefit or defends the design; on confusion: "What would you expect to happen here?"
4. **Silence is allowed.** Think-aloud is prompted once ("Please keep talking as you go"), not repeatedly nudged toward praise.
5. **Balanced scales only.** Every rating item offers symmetric positive/negative anchors; no "How delightful…" items.
6. **Future-preference questions are quarantined.** Stated intention (DEL-01) is explicitly labelled *stated, not observed* at capture time and never reported as behavior.

### 5.2 Session structure (≈60 min, per participant)

| Phase | Time | Content | What is captured |
|---|---|---|---|
| 0. Welcome & consent | 5 | Reaffirm consent, recording, right to stop | Consent ledger (`↔ TASK-040`) |
| 1. Context warm-up | 5 | Neutral past-behavior questions (reuse `↔ TASK-027` openers) | Segment confirmation; no concept shown yet |
| 2. First-impression (per direction) | 3 ea | Silent 20-sec view, then "What do you think this is? Who is it for?" | **Comprehension** (unaided) |
| 3. Core tasks (per direction) | ~12 ea | The task scripts §5.3 on that direction's prototype | **First-action completion, effort, friction, errors** |
| 4. Post-direction items | 3 ea | Balanced rating items §6 + SEQ + one open question | **Stated** desirability, trust, autonomy, return intent |
| 5. Comparative reflection | 5 | Only after all of the participant's directions: "Which fit your life, and why?" (neutral) | Preference *with reasons* (stated) |
| 6. Close | 2 | Diary-study invitation (optional), thanks, debrief | Consent for follow-on |

### 5.3 Core task scripts (mapped to the ten journeys `↔ TASK-016` and the eight screens `↔ TASK-045`)

Each task states the **neutral prompt**, the **screen(s) exercised**, the **expected observation**, and the **success criterion** (observed, binary where possible). These are *scripts*, not results — every "result" column is blank until a session runs.

| # | Journey (`↔ TASK-016`) | Neutral prompt (moderator reads verbatim) | Screen(s) (`↔ TASK-045`) | Expected observation | Success criterion (observed) |
|---|---|---|---|---|---|
| T1 | Discovery / first impression | "Take a look. In your own words, what is this and who is it for?" | Welcome, Discovery | Can the person state the value unaided? | Correct gist without moderator help |
| T2 | First meaningful action | "Show me how you'd get started with something that matters to you." | First action | Reaches a first meaningful action (ACT-01) | Completes ≥1 first action unaided |
| T3 | Personalization / goal | "Set this up for a goal you actually care about." | Personalization | Can express *their* goal, not only a default (ACT-04) | Sets a self-chosen goal |
| T4 | Normal daily interaction | "It's a normal day. Show me what you'd do here." | Daily home, Guided habit | Effort of the steady-state loop | Completes the daily loop; SEQ captured |
| T5 | Reminders / re-entry | "You got a nudge from this app. Walk me through what you'd do." | Reminders (as-needed state) | Is re-entry clear and non-pressuring? | Re-enters and acts without confusion |
| T6 | Progress / reflection | "You've used this for a couple of weeks. What does this screen tell you?" | Progress/reflection | Does progress read as meaning, not homework? (`prd.md` §7 example) | Correctly interprets progress unaided |
| T7 | **Missed day / recovery** | "You missed a few days. Show me what happens when you come back." | Missed day/recovery | **Is the return non-punitive?** (`↔ TASK-047`) | Returns without reset/shame; no all-or-nothing collapse |
| T8 | Change of goal/schedule/capacity | "Your energy is low this week. What would you do here?" | Daily home, Personalization | Does the product adapt to reduced capacity (Studio E)? | Finds a lower-effort path unaided |
| T9 | Personal insight | "What does this tell you about you?" | Personal insight | Is the insight personally relevant, not generic? | States a relevant takeaway |
| T10 | Paywall / cancellation / return | "Suppose you're asked to subscribe. Walk me through your thinking." | Paywall (as-needed state) | Perceived fairness/clarity; **no dark pattern** (`↔ TASK-021`) | Understands offer and exit; no deceptive block |

**Accessibility task overlay (ACC-01, `↔ TASK-022`).** In assistive-condition cells, T1–T7 are attempted under VoiceOver and/or largest Dynamic Type; success is recorded per task so **assistive-condition parity** is observed, not assumed. A material gap vs. standard condition is a **gate signal** (§7/§9), not a tradeable score.

---

## 6. Success measures

Measures are organized by the **PRD §9 validation dimensions** and tagged by **evidence type** so the four-way distinction (`prd.md` §9 line 174) is never collapsed. Each dimension names its **primary capture** (observed where possible) and its link to the `↔ TASK-001` metric it instruments.

| Dim | Dimension (`prd.md` §9) | Primary capture | Type | `↔ TASK-001` link | Reporting rule |
|---|---|---|---|---|---|
| V1 | Desirability / delight | Balanced rating item + coded spontaneous affect | **stated** | DEL-01, DEL-04 | Labelled *stated*; never "validated appeal" |
| V2 | Comprehension | Unaided first-impression gist (T1) + aided correctness | **observed** | ACT-02 (comprehension proxy) | Scored by ≥2 coders |
| V3 | First-action completion | Task T2 success, unaided | **observed** | ACT-01 | Binary per participant; report count, not % of invented base |
| V4 | Perceived effort | Single Ease Question (SEQ, 7-pt) + task time + friction count | **observed + stated** | ACT-03 (TTFV proxy) | Time/friction observed; SEQ stated |
| V5 | Emotional appeal | Coded affect during tasks (not a self-rating alone) | **observed-coded** | DEL-04 | Themes + coder agreement |
| V6 | Trust | Balanced trust item + probes on data/claims | **stated** | SAF-05 posture, DEL-03 adjacent | Stated; triangulated with T10 behavior |
| V7 | Differentiation | "How is this different from what you've tried?" (neutral) | **stated** | — | Stated; coded |
| V8 | Accessibility | Assistive-condition task success parity (ACC overlay) | **observed** | **ACC-01 (gate)** | Gate, not weighted score |
| V9 | Return intention | Balanced likelihood item (DEL-01) | **stated** | DEL-01 | Explicitly *stated intention ≠ behavior* |
| V10 | Willingness to pay | Neutral pricing-reaction probe at T10 | **stated** | — | Stated; never a conversion/LTV claim (`prd.md` §4) |
| V11 | Perceived autonomy (counter-measure) | SDT-adapted autonomy item (`↔ TASK-001` DEL-03) | **stated** | DEL-03 | Guard: delight up while autonomy down = dark-pattern signal |
| V12 | Guilt/pressure (counter-measure) | Neutral guilt/pressure item + coded distress | **stated + observed** | SAF-01 | **Veto signal**: rising guilt can block selection |

### 6.1 What is *not* measured here (binding honesty)
- **Sustained adherence, habit automaticity, and health outcomes are NOT measured** in this study. A moderated session + short diary reveals first-run experience and *at most* short-term observed repeat behavior — never durable change (`prd.md` §1, §9; `↔ TASK-001` OUT-01/02/05). Any such claim is fabrication.
- **Private competitor metrics** (retention, CAC, LTV) are never produced or inferred (`prd.md` §4, `↔ TASK-015`).
- **Statistical significance** is not claimed from a saturation-sized qualitative sample; findings are reported as **observed patterns with n and confidence**, not p-values, unless a separate powered quantitative test is run (its own `EXP` record).

### 6.2 Optional short diary follow-on (specified, not assumed)
If recruitment supports it, a **7–14-day diary** (`↔ TASK-028`) on the selected finalist(s) yields *short-term observed repeat behavior* — still not sustained change. It is optional, separately consented, and labelled with the same limitations. Its absence does not block selection; its presence strengthens the V3/V9 read from stated toward observed.

---

## 7. Concept scorecard

The scorecard operationalizes the **PRD §9 final selection weights** (line 176) and the **non-compensable gates** (line 176–177). It yields a 0–100 comparative score **only for concepts that first clear every gate.** A gate failure is not a low score — it is **not scorable**.

### 7.1 Mandatory gates (pass/fail, non-compensable — applied first)
A concept that fails any gate is removed from scoring and returned for redesign or rejected; no weighted blend can rescue it (`prd.md` §9 line 176, §11).

| Gate | Source | Fail condition | Authority |
|---|---|---|---|
| G1 Clinical safety | `↔ TASK-033`, `↔ TASK-040`, `prd.md` §6 | Unsafe care-boundary behavior; implied medical claim; missed escalation path | R14 Clinical reviewer |
| G2 Privacy / data minimization | `↔ TASK-040`, `prd.md` §6 | Collection without lawful minimized consented basis; sensitive-data over-ask (SAF-05) | R15 Privacy reviewer |
| G3 Accessibility | `↔ TASK-022`, ACC-01 | Material assistive-condition task-success gap; missing reduced-motion fallback | R13 QA/accessibility |
| G4 Autonomy / anti-dark-pattern | `prd.md` §9, DEL-03/SAF-01 | Pressure/guilt mechanics; deceptive paywall (T10); autonomy measure falls | R02 + R10 co-sign |

### 7.2 Weighted dimensions (only for gate-passing concepts)
Weights are the PRD's **proposed** heuristic, not a validated instrument (`prd.md` §9 line 176 says "proposed"). Each criterion scored **1–5** against **observed/stated evidence captured in this study**, weighted, and rescaled to 0–100.

| Criterion | PRD weight (§9) | Scored from (this study) | Evidence type bias |
|---|---|---|---|
| S1 Behavior-change potential | **25%** | Mechanism plausibility + T2/T4/T7 observed behavior + `prd.md` §6 evidence grade of the mechanism (`↔ TASK-025`) | Mixed; down-weight stated-only |
| S2 Desirability / delight | **20%** | V1/V5 (coded affect + balanced rating) | stated/observed-coded |
| S3 Ease of daily use | **20%** | V4 (SEQ + time + friction), T4 observed | **observed-leaning** |
| S4 Differentiation | **15%** | V7 coded + competitive teardown (`↔ TASK-012`) | stated + evidence |
| S5 Long-term value | **10%** | V9 stated + mechanism durability argument (`↔ TASK-047`) — **flagged: no long-term data exists** | stated/argued only |
| S6 Feasibility | **10%** | Build-buy-integrate-defer fit (`↔ TASK-037`, `↔ TASK-039`) | engineering judgment |

**Score = Σ(criterion 1–5 × weight) rescaled to 0–100.** Scored by the WS08 lead + ≥2 reviewers independently, then reconciled (disagreements preserved, `↔ TASK-023`). The scorecard **must display, next to every score, the evidence type and grade** behind it, so a concept cannot win on *stated* delight alone.

### 7.3 Scorecard template (one per concept — all result cells blank until scored)

```
CONCEPT direction:  <neutral code>            Prototype: PROTO-<dir>-v<n> (hash ...)
GATES (pass/fail, non-compensable):
  G1 Clinical      [ ]   reviewer R14   note: ____
  G2 Privacy       [ ]   reviewer R15   note: ____
  G3 Accessibility [ ]   reviewer R13   note: ____  (ACC-01 parity: __/__ tasks)
  G4 Autonomy      [ ]   reviewer R02+R10 note: ____
  → If any gate = FAIL: NOT SCORED. Disposition: redesign | reject.

WEIGHTED (only if all gates PASS):
  S1 Behavior-change (25%)  score 1–5 [ ]  evidence type/grade: ____  n: __
  S2 Desirability   (20%)   score 1–5 [ ]  evidence type/grade: ____  n: __
  S3 Ease of use    (20%)   score 1–5 [ ]  evidence type/grade: ____  n: __
  S4 Differentiation(15%)   score 1–5 [ ]  evidence type/grade: ____  n: __
  S5 Long-term      (10%)   score 1–5 [ ]  evidence type/grade: ____  n: __  [NO LONG-TERM DATA FLAG]
  S6 Feasibility    (10%)   score 1–5 [ ]  evidence type/grade: ____
  COMPOSITE 0–100: ____   (rescaled)     Counter-measures: autonomy __  guilt __
  Reviewer scores (preserved, not averaged away): R__:__  R__:__  R__:__
```

### 7.4 Why gates are separated from the composite
A single blended score invites the exact failure the PRD warns against — trading a safety or autonomy harm for delight points. By making G1–G4 **admissibility** (binary, veto-holding) and S1–S6 **quality** (weighted), the pack guarantees that "clinical safety, privacy and accessibility are mandatory gates, not compensable weighted scores" (`prd.md` §9 line 176) is enforced by structure, not goodwill.

---

## 8. Evidence limitations (stated plainly, as a deliverable section)

This section exists because `prd.md` §9 line 174 and §11 line 205 require that weak areas and uncertainty are recorded, not hidden. It is binding on every downstream report.

1. **Stated ≠ observed ≠ repeat ≠ sustained (the four-way wall).** Desirability, trust, return intention and willingness to pay captured here are **stated**; task completion, time, friction and assistive parity are **observed in a session**; short diary data (if run) is **short-term observed repeat**; **sustained behavior change and health outcomes are none of these** and are not produced (`prd.md` §9 line 174, §1 line 19).
2. **Lab ≠ life.** Moderated sessions over-represent attention and good will; a prototype removes real-life friction (notifications fatigue, competing demands). First-run delight decays — the study cannot see novelty decay (`prd.md` §8 D-, §1).
3. **Small, purposive n.** Qualitative sampling finds patterns and problems, not population rates. No percentage is generalized to "users" without the n and the caveat; no significance is claimed from saturation samples (§6.1).
4. **Prototype fidelity ceiling.** Low-fi prototypes under-test performance, reliability, offline behavior and real data — all deferred to build and the technical audits (`↔ TASK-039`).
5. **Order/anchoring residue.** Counterbalancing (§4.2) reduces but does not eliminate order effects; within-subject comparison still carries some carry-over.
6. **Moderator & demand effects.** Even neutral scripts leak some social-desirability bias; triangulating observed behavior against stated ratings is the mitigation, not a cure.
7. **Accessibility coverage is a sample.** ACC-01 parity is observed on the cells that ran assistive conditions; absence of a finding is not proof of accessibility (`↔ TASK-022`).
8. **No commercial truth.** Willingness-to-pay reactions are stated reactions to a prototype paywall; they are **never** converted into conversion, CAC or LTV (`prd.md` §4, `↔ TASK-015`).

Every finding in the eventual results report **must** carry: n, evidence type, grade (A–D, `↔ TASK-004`), and the limitation(s) above that bound it.

---

## 9. Decision gate (Gate 4 → selection → Gate 5)

### 9.1 Gate 4 — Validation readiness (BEFORE testing; `prd.md` §11 line 202)
The Program Director issues **pass / conditional pass / fail** against:

| # | Readiness check | Pass condition |
|---|---|---|
| R-1 | Testable prototypes at fidelity parity | All directions built to §2.1/§2.3; pinned; parity confirmed |
| R-2 | Preregistered tasks & criteria | §5 scripts + §6 criteria logged as `EXP` records **before** session 1 (`↔ TASK-009`) |
| R-3 | Safety/privacy/accessibility pre-review | G1–G4 reviewers have pre-screened the stimuli; consent & recording approved (`↔ TASK-040`, `↔ TASK-026`) |
| R-4 | Counterbalancing plan fixed | §4.2 assignment generated and frozen |
| R-5 | Analysis plan fixed | Coding scheme + ≥2-coder agreement plan set (`↔ TASK-013/014`) |
| R-6 | No-fabrication controls | Result fields empty; unexecuted status asserted; synthetic examples flagged (§12) |

A **fail** stops testing. "Polished unsupported reports do not pass" (`prd.md` §11 line 205).

### 9.2 Selection decision rule (Prompt 11; after testing, after Gate 4)
Selection is made by the **Product Director & Design Review Board** on the completed scorecards (§7), reconciled reviewer notes (`↔ TASK-023`), and the §8 limitations. The rule is the PRD's, verbatim in spirit:

1. **Gate first.** Only gate-passing concepts are eligible. A gate failure is disqualifying regardless of composite score.
2. **Decision rule, not arithmetic winner.** "Build the product that delivers meaningful user value with the least unnecessary effort, not the one with the most features, highest engagement count, or prettiest prototype" (`prd.md` §15 line 323). The composite informs; it does not auto-decide. S3 (ease) and S1 (behavior-change) are weighted to reflect this.
3. **No Frankenstein.** Do not mechanically combine incompatible interaction philosophies to keep popular features (`prd.md` §9 line 177, §13 Prompt 11). A chosen direction may *graft a specific, compatible element* from a runner-up only with an explicit rationale and its own test hypothesis for the next cycle.
4. **Preserve rejected concepts.** Non-selected directions go to an **innovation backlog** with their findings, not deleted (`prd.md` §13 Prompt 11).
5. **Explain the choice.** The decision record states evidence, uncertainties, and why the chosen direction is preferable — and **claims no validated outcome where none exists** (`prd.md` §13 Prompt 11). Logged as a `DEC` record (`↔ TASK-009`).

### 9.3 Decision record template (blank until a real decision)
```
SELECTION DECISION  (DEC-____, logged → TASK-009)
Eligible (gate-passing) concepts:   <neutral codes>
Disqualified (gate fail) + reason:   <codes + gate>
Selected direction:                  <code>   composite: ____   (informing, not deciding)
Rationale (evidence + uncertainty):  ____
Grafted elements (if any) + why + next-cycle test:  ____
Rejected-concept backlog pointers:   <codes → backlog>
Residual risks + validation plan:    ____
Board sign-off (roles):              ____
Claims-no-validated-outcome attestation: [ ]   (prd §13 Prompt 11)
```

---

## 10. Final MVP handoff checklist (Gate 5 — build readiness, `prd.md` §11 line 203)

The selected direction may enter build only when the Program Director issues **pass / conditional pass / fail** against this checklist. Conditional pass itemizes what must close and by when.

| # | Handoff item | Done when | Source |
|---|---|---|---|
| H-1 | Critical usability risks addressed | Each high-severity finding from §5–§7 has a redesign or an accepted-risk rationale (`↔ TASK-019`) | §11 line 203 |
| H-2 | Editable wireframes for the finalist | Welcome, discovery, first action, daily home, guided action, progress/reflection, missed day/recovery, personal insight — **plus** personalization, reminders, errors, privacy controls, settings, paywall, accessibility states — all with annotated interactions and source-to-decision traceability | `prd.md` §9 line 178; `↔ TASK-045` |
| H-3 | Behavior-mechanism spec | Cue→action→feedback→repetition→recovery→autonomy documented; **missed-day is non-punitive** and matches the Habit Graduation state machine (`↔ TASK-047`) | `prd.md` §6, §13 Prompt 11 |
| H-4 | MVP inclusions / exclusions | Explicit scope line; excluded ideas → innovation backlog (§9.2 #4) | §13 Prompt 11 |
| H-5 | Build/buy/integrate/defer decisions | Per capability, with rationale (`↔ TASK-037`); iOS/HealthKit/widgets/notifications feasibility resolved or flagged (`↔ TASK-039`) | §10, §13 Prompt 11 |
| H-6 | Technical architecture & privacy posture | Reference architecture; data minimization, consent, clinical boundaries approved (`↔ TASK-040`) | §6, §11 |
| H-7 | Measurement & outcome plan | Instrumentation for the `↔ TASK-001` metrics (North-Star REP-02 + counter-metrics); every shipped behavioral claim has a metric | `↔ TASK-001`; §11 |
| H-8 | Remaining claims have a validation plan | Any unproven behavioral/clinical claim is listed with its smallest useful experiment (`↔ TASK-009`) — **shipped as hypothesis, labelled as such** | §11 line 203 |
| H-9 | **Longitudinal pilot plan retained, not executed** | A separate >12-week behavior/health-outcome pilot is specified with validated instruments and clinical sign-off, and explicitly marked **unexecuted** | `prd.md` §1, §9 line 174, §15 line 321; `↔ TASK-001` OUT-05 |
| H-10 | Accessibility sign-off | ACC-01 parity acceptable or remediation scheduled; reduced-motion coverage 100% of motion components | `↔ TASK-022`; §7 G3 |
| H-11 | Decision traceability | The `DEC` selection record (§9.3) links every MVP inclusion back to a finding/evidence record | `prd.md` §14; `↔ TASK-009` |
| H-12 | No fabricated outcome in the handoff | The handoff asserts no validated retention/adherence/health result; all are plans or labelled hypotheses | `prd.md` §4, §13 |

---

## 11. Forbidden values & actions (make a run invalid, not merely weak)

1. **Any result before a session.** A score, rate, quote or preference entered while status is `unexecuted`. → the pack's hard failure (`prd.md` §13 Prompt 10, §4).
2. **Fabricated or composite participants.** Inventing a person, quote, or "representative" response. → forbidden (`prd.md` §13 Prompt 04/10).
3. **Stated reported as observed/sustained.** Calling return-intention "retention," or session repeat "behavior change." → violates §6.1/§8.1 (`prd.md` §9 line 174).
4. **Private competitor metrics inferred.** Any competitor retention/CAC/LTV. → forbidden (`prd.md` §4, `↔ TASK-015`).
5. **Gate traded for delight.** Scoring a gate-failing concept, or offsetting a clinical/privacy/accessibility/autonomy harm with S-scores. → violates §7.1 (`prd.md` §9 line 176).
6. **Un-counterbalanced comparison presented as fair.** Dropping §4.2 and comparing anyway. → violates `prd.md` §9 line 174 / Prompt 10.
7. **Leading scripts / moderator selling.** Deviating from §5.1 neutral wording. → biases V1/V6/V9; invalidates the item.
8. **Fidelity-unfair stimuli.** One direction more polished than others. → violates §2.3; a win on polish is disqualified.
9. **Mechanical feature-combination at selection.** Stitching incompatible philosophies to keep features. → violates §9.2 #3 (`prd.md` §13 Prompt 11).
10. **Deleting rejected concepts.** Not preserving the innovation backlog. → violates §9.2 #4.
11. **Claiming a validated outcome at handoff.** Any MVP claim of proven adherence/health benefit. → violates H-12 (`prd.md` §13 Prompt 11, §4).
12. **Reinterpreting the hypothesis after seeing data.** Changing a success criterion post-hoc without an `EXP` amendment logged. → violates R-2 preregistration.

---

## 12. ILLUSTRATIVE format demonstration (synthetic scaffolding — NOT a result, participant, score or selection)

> **FORMAT DEMONSTRATION ONLY.** Every token below is transparently fake (`P-01`, `Prototype Blue`, `EXP-nnn`). It reports **no real participant, task result, score or selection.** It exists solely to show *where fields go and how the instrument reads*. Status remains `designed, unexecuted`.

**A preregistered test record (shape only):**
```
EXP-nnn  (→ TASK-009)
Hypothesis (from SUB dossier D-10):  "Direction Blue's missed-day screen is read as non-punitive."
Task:        T7 (missed day / recovery)       Screens: Missed day/recovery (TASK-045)
Measure:     V3 observed (returns w/o reset) + V12 guilt item (stated)
Success criterion (PREREGISTERED):  participant returns & acts without a reset/shame path; guilt item not elevated
Direction code: Prototype Blue        Assignment: BIBD block 2, position 1 (Latin square)
RESULT:      — to be populated from a run session —      n: __   coder agreement: __
```

**A session task log row (shape only — result cells blank):**

| Participant | Direction | Task | Completed unaided? | Time | Friction count | SEQ (1–7) | Coder-1 affect | Coder-2 affect |
|---|---|---|---|---|---|---|---|---|
| `P-01` | Prototype Blue | T2 first action | — | — | — | — | — | — |

**How the instrument reads this:** with all result cells empty it is correctly `unexecuted`; if someone typed "85% loved it" into a cell it would violate Forbidden #1/#3 and the pack fails its own no-fabrication gate. The point is that *admissibility is mechanical* — a filled result cell under `unexecuted` status is detectable and invalid.

---

## 13. Governance, dependencies, and change control

- **Custodian:** the **WS08 independent UX researcher / product lead** owns this pack; the **Program Director** chairs Gate 4 and Gate 5; the **Product Director & Design Review Board** owns the selection decision; **R14/R15/R13/R02** hold non-compensable gate vetoes. Roles are accountable **role types**, not named individuals (`↔ TASK-002/003`).
- **Where this sits:** downstream of the six studios' submissions (`↔ TASK-044`) and the wireframe stimuli (`↔ TASK-045`); it consumes the `→ TASK-048` test hypotheses, runs independent validation (`prd.md` §13 Prompt 10), feeds the final selection (Prompt 11), and emits the Gate-5 build-readiness handoff and the retained longitudinal pilot plan.
- **Dependencies**
  - `↔ TASK-001` Success metrics — the measurement definitions (ACT-01, DEL-01, DEL-03/autonomy, SAF-01/guilt, ACC-01) these tests instrument and inherit caveats from.
  - `↔ TASK-044` Submission template — supplies the preregisterable `→ TASK-048` hypotheses (D-10) and the gate rows (§7).
  - `↔ TASK-045` Wireframe spec — the eight-screen stimuli and the "as-needed" states under test.
  - `↔ TASK-043` Studio briefs — the directions compared; their mandates frame T8 (capacity, Studio E) etc.
  - `↔ TASK-026` Recruitment & consent pack — the participant pipeline and consent language reused wholesale.
  - `↔ TASK-027` Discovery guide — the neutral, non-leading wording discipline reused in §5.
  - `↔ TASK-016` Ten journeys — the task scaffolding for §5.3.
  - `↔ TASK-013 / TASK-014` Review sampling & coding — the ≥2-coder agreement discipline reused for qualitative coding.
  - `↔ TASK-019 / TASK-022` UX heuristic & iOS/accessibility audits — severity scaling (H-1) and the ACC-01 gate (G3).
  - `↔ TASK-021` Growth/UX-writing audit — paywall/dark-pattern neutrality (T10, G4).
  - `↔ TASK-023` Cross-specialist reconciliation — how reviewer scores are preserved, not averaged away (§7.2).
  - `↔ TASK-033 / TASK-040` Safety gate & privacy/clinical boundary — G1/G2 definitions.
  - `↔ TASK-047` Habit Graduation state machine — the non-punitive missed-day/recovery behavior T7 observes and H-3 specs.
  - `↔ TASK-037 / TASK-039` Build-buy matrix & iOS integration inventory — S6 feasibility and H-5.
  - `↔ TASK-009 / TASK-004 / TASK-005` `EXP`/`DEC` registers, evidence grades, `EVD` schema — preregistration, decision logging, grading.
- **Open unknowns (honestly recorded, not defects)**
  - Final **k** (directions per participant) and **n per cell** depend on real recruitment (`↔ TASK-026`); the BIBD is parameterized, not fixed, until then.
  - Whether a separate **powered quantitative preference test** is warranted after the qualitative pass — decided by R07/R09 against the qualitative signal; its own `EXP` record if so.
  - The exact **SEQ/SDT/guilt short-form** wording and any re-validation for midlife women — owned with R02/R14 (`↔ TASK-001` Q2).
  - Whether a direction may **graft** a runner-up element at selection, and the bar for "compatible" — proposed default in §9.2 #3; Board adjudicates with a logged rationale.
  - The **longitudinal pilot** instruments and clinical sign-off (H-9) — specified, deliberately **unexecuted** this cycle.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial concept testing & final selection pack: comparative validation design (BIBD + Latin-square counterbalancing, §4) for the ~6 shortlisted directions; fairness preconditions (fidelity parity, copy neutrality, stimulus pinning, §2); participant/recruitment/consent via `↔ TASK-026` with deliberate assistive-tech inclusion (§3); neutral moderator-read usability scripts with binding non-leading wording rules and ten journey-mapped task scripts incl. a non-punitive missed-day task and an accessibility overlay (§5); success measures organized by the PRD §9 dimensions and tagged observed/stated with an explicit "what is NOT measured" wall (§6); a two-tier concept scorecard — non-compensable clinical/privacy/accessibility/autonomy gates applied first, then the PRD §9 weighted 1–5 criteria rescaled to 0–100 with evidence type/grade shown per score (§7); a plainly-stated evidence-limitations section (§8); a three-stage decision gate — Gate 4 validation readiness (preregistration), the Prompt 11 selection rule (gate-first, decision-rule-not-arithmetic, no mechanical feature-combination, preserve rejected concepts), and Gate 5 build readiness (§9); a 12-item final MVP handoff checklist incl. a retained-but-unexecuted longitudinal pilot (§10); a 12-item forbidden-values catalogue (§11); an ILLUSTRATIVE-only synthetic demonstration (§12); dependencies to TASK-001/002/003/004/005/009/013/014/016/019/021/022/023/026/027/033/037/039/040/043/044/045/047. Status `designed, unexecuted`; no participant, test, score, preference or selection asserted. | WS08 independent UX researcher / product lead |

---

*End of TASK-048 deliverable. This pack defines how to test and how to decide; it asserts no test result and selects no concept. Status: designed, unexecuted.*
