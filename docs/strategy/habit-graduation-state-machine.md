# HerRays Habit Graduation State Machine

**Deliverable:** TASK-047 — Define the Habit Graduation state machine
**Workstream:** Concept Innovation (WS07)
**Version:** 0.1 · **Status:** Proposed — state logic specified; no concept, product decision, user test or result asserted
**Owner (accountable role):** R02 Behavioral scientist (mechanism owner), drafting; with R05 iOS engineer and R06 Backend engineer as co-authors for persistence/sync, and the WS07 Concept Program Lead as governance custodian (proposed default pending Program-Director confirmation — see `→ TASK-002`)
**Reviewers:** R02 Behavioral scientist · R03 Senior UX/product designer · R05 iOS engineer · R06 Backend engineer · R09 Product analyst/growth (measurement) · R10 Content strategist/UX writer (recovery & graduation copy) · R13 QA/accessibility specialist · R14 Clinical reviewer (clinical gate) · R15 Privacy/regulatory reviewer (privacy gate) · Program Director (independence custodian)
**Source basis:** `prd.md` §3 line 127 (ten standardized journeys — specifically J5 daily use, J7 progress/reflection, J8 missed day/recovery, J9 change of circumstances), §3 line 135 (the **streaks** worked example and the non-punitive missed-day principle — "shame and all-or-nothing behavior after a missed day" is the named risk; alternatives are "flexible weekly consistency; cumulative effort/milestones; narrative progress; celebrate returning after disruption"; the required test is "meaningful repeated action and perceived autonomy, not merely app opens"), §1 line 19 (separate **engagement, adherence, habit automaticity and health outcomes**), §6 line 145 (COM-B, BCTTv1, Self-Determination Theory, Fogg, habit formation, implementation intentions; "risks of guilt, compulsion, burden and excessive tracking"), §8 line 170 (studios author "first-use/ordinary-day/missed-day/long-term journeys, behavioral logic"), §1 non-negotiables (clinical safety, privacy, autonomy, accessibility, non-patronizing brand). Cross-references: `↔ TASK-045` (eight-screen wireframe spec — this machine is the state logic its §8 Guided Habit / §9 Missed Day / §10 Progress screens render; that spec explicitly defers the machine here), `→ TASK-046` (the "Your Little Win Today" microinteraction — fires `U_PERFORM`/`U_PERFORM_PARTIAL` into this machine, defined separately), `↔ TASK-024`/`↔ TASK-025` (behavioral literature search & evidence-extraction — the calibration source for every numeric threshold here), `↔ TASK-009` (decision & experiment registers — where DEC/EXP IDs referenced here are recorded), `↔ TASK-030` (capability mechanism record schema — the CAP records the `[MECH]` tags here point at), `↔ TASK-033` (capability safety-gate checklist — the gate this machine's recovery/graduation logic must pass), `↔ TASK-036` (red-team protocol — the adversarial dependency/anxiety challenge graduation must survive), `↔ TASK-040` (privacy & clinical-boundary checklist), `→ TASK-048` (concept testing & final selection — the independent judge every hypothesis here is routed to)

---

## 0. How to read this document

This is a **behavioral-logic specification**: a formally defined finite-state machine (plus its persisted data model and conformance tests) for the lifecycle of a *single habit* inside a HerRays concept — from the moment a user starts it, through regular practice, adaptation to changed circumstances, graduation to a self-sustaining behavior, and recovery after a gap. It satisfies the TASK-047 acceptance criteria: it **specifies states, transitions, events, persistence rules and tests for initiation, repetition, adaptation, graduation and recovery, with no punitive reset on missed days.**

It is a **specification / method artifact**, not a research finding and not a product decision. Specifically it contains:

- **no fabricated research** — no interview, observation, usability result, retention figure, effect size, adherence rate, automaticity curve or clinical outcome is asserted anywhere. Every behavioral lever the machine encodes is tagged `[MECH-n]` and demoted to a **test hypothesis** routed to `→ TASK-048`, pointing at the evidence record (`↔ TASK-025`) and capability record (`↔ TASK-030`) — never presented as a validated finding or a claimed user response;
- **no magic numbers asserted as fact** — every duration, threshold, window and rate is a **named parameter** (§11) with a *symbolic* default explicitly marked `ILLUSTRATIVE — TO BE CALIBRATED`, whose calibration source is the behavioral evidence base (`↔ TASK-024`/`↔ TASK-025`) and the concept test (`→ TASK-048`). In particular, the popular "21 days to a habit" figure is a **myth this spec refuses to encode** (§8.4); the real graduation threshold is a parameter, not a constant;
- **no clinical claim** — automaticity, consistency and graduation are *behavioral* signals about an action the user chose to repeat; they are never health outcomes, diagnoses, or treatment instructions (RULE-5, §13). This machine draws, and holds, a hard line at the clinical boundary (`↔ TASK-040`);
- **no concept and no screen design** — this is the engine, not the car. `↔ TASK-045` fixes which screens render these states; the six studios (`↔ TASK-043`) supply the concept, copy, motion and brand. This spec says *what state the habit is in, what may change it, and what must never happen to it* — never what any particular HerRays concept looks like.

> **No-fabrication statement.** This specification defines logic and tests; it invents no evidence and asserts no result. It cites no real `EVD`/`CAP`/`OPP`/`DEC`/`EXP` content; where a transition refers to a user situation ("a missed day," "a low-energy day," "changed circumstances") it does so as a *scenario the machine must handle*, drawn verbatim from the PRD's ten journeys (`prd.md` §3) — not as an observed user or a claimed behavior. Fabrication is made detectable and inert by five devices: (a) every behavioral lever is `[MECH-n]`-tagged and routed to `→ TASK-048`, so no mechanism can masquerade as a result; (b) every number is a §11 parameter marked to-be-calibrated, so no threshold can masquerade as evidence; (c) the non-punitive guarantee is written as **machine-checkable invariants** (§5.3, `INV-1…INV-7`) with property-based tests (§15.3), not as a promise in prose; (d) the clinical boundary is a stated invariant (`INV-6`) backed by the §13 gate and `↔ TASK-040`; (e) the §18 reviewability validator *rejects* — not merely flags — any version of this machine that resets progress on a miss, shames the user, crosses the clinical line, or presents a parameter as a measured fact.

**Scope boundary (what this task is and is not).**

- **TASK-047 (this document) = the *state logic*** — the states, the events that move between them, the guards and actions on each transition, the persisted data model and sync rules, the invariants that make it non-punitive, and the conformance tests. It is concept-neutral and screen-neutral.
- **TASK-045 (eight-screen wireframe spec) = the *surface*** that renders these states. `↔ TASK-045` §8 (Guided Habit), §9 (Missed Day), §10 (Progress) and §11 (Personal Insight) *display* the state and *fire* events; this spec defines the state and events they use. This document does not redefine those screens.
- **TASK-046 ("Your Little Win Today" microinteraction) = one *event source*.** Completing the little-win fires `U_PERFORM` (or `U_PERFORM_PARTIAL`); deferring it fires `U_SKIP`. This spec consumes those events; it does not design the microinteraction.
- **TASK-024 / TASK-025 (behavioral evidence) = the *calibration source*.** Every §11 parameter default is a placeholder to be replaced by graded evidence from those tasks; this spec defines *what* must be calibrated and *which mechanism* each parameter serves, not the evidence itself.
- **TASK-048 (concept testing & final selection) = the *downstream judge*.** Every "does this help / is this preferred / is this understood / does graduation feel good not abandoning" question is a §14 hypothesis routed there. This machine never self-certifies its own efficacy.
- **TASK-033 / TASK-036 / TASK-040 (safety gate / red-team / privacy-clinical) = the *gates*.** This machine is written to pass them (§13); it does not redefine them.

---

## 1. Purpose and non-negotiables

The PRD's single most-repeated design risk is the **streak trap** (`prd.md` §3 line 135): a consecutive-day counter that is motivating while unbroken and *punishing the instant it breaks*, producing "shame and all-or-nothing behavior after a missed day." The PRD names the alternatives explicitly — flexible consistency, cumulative effort, narrative progress, and *celebrating the return after disruption* — and sets the test that matters: "meaningful repeated action and perceived autonomy, not merely app opens." The acceptance criterion for this task restates the hard rule in one phrase: **no punitive reset on missed days.**

This machine exists to make that rule **structural rather than aspirational.** A studio cannot "forget" to be kind on a missed day if the state machine has no transition that can zero a user's progress, no state named "failed," and a property test that fails CI the moment any event sequence reduces a user-visible progress quantity. The five jobs of this spec:

1. **Model the real habit lifecycle, not a counter.** Separate the four things `prd.md` §1 line 19 says must stay separate — *engagement, adherence, automaticity, health outcome* — into distinct, independently persisted quantities (§5), so "didn't open the app today" is never conflated with "the habit failed," and automaticity (a behavioral signal) is never conflated with a health outcome (out of scope here).
2. **Make missed days safe by construction.** Encode the non-punitive principle as invariants (§5.3) and a dedicated supportive `Recovering` state (§9), not as copy guidelines a studio may or may not follow.
3. **Support adaptation, not just repetition.** Changed circumstances, low energy, and shifting capacity (`prd.md` §3 J9) are modeled as a first-class, always-available **plan region** (§10) with a "floor" (a tiny, always-doable version) so the answer to "I can't do the full thing today" is *scale down*, never *break the chain*.
4. **Define graduation honestly.** Graduation means the behavior is becoming self-sustaining and the app can **fade its prompting** (SDT autonomy; Fogg; avoid dependency). It is *offered and user-confirmed* (§8), reversible without stigma, and gated on a calibrated automaticity + consistency signal — never on the 21-day myth (§8.4). Graduation is the one "success" state whose success is *the user needing us less* — the opposite of an engagement-maximizing dark pattern (red-team `↔ TASK-036`).
5. **Be independently implementable and testable.** The transition tables (§6), parameter table (§11), persistence rules (§12) and conformance tests (§15) are complete enough that two engineers could build interoperable implementations and a reviewer who never met the authors could certify conformance (§18).

**Seven non-negotiable rules carried from `↔ TASK-045` (`RULE-1`–`RULE-7`), as they bind this machine.** (`RULE-n` is the project-wide non-negotiable namespace; it is distinct from this document's `L`/`P` state IDs, `U_`/`S_` event IDs, `INV-n` invariants, `PRM-n` parameters and `T-`/`PT-` test IDs.)

- **RULE-3 — Non-punitive missed day.** Binding form here: `INV-1`, `INV-2`, `INV-5` and the `Recovering` state (§9). No transition resets progress; no state is "failure."
- **RULE-4 — Autonomy & reversibility.** Binding form here: every committing event (`U_RELEASE`, plan changes, schedule changes) is reversible via `U_UNDO`/`U_RESTORE` within a grace window; `U_SKIP` carries no penalty; graduation is confirmed, not forced (`INV-4`, §8.3, §13).
- **RULE-5 — Privacy & clinical boundary.** Binding form here: `INV-6` (no clinical inference/claim in any state or action), data-minimization persistence (§12.5), and the §13 clinical/privacy gate.
- **RULE-6 — Invention labelled, performance deferred.** Binding form here: every `[MECH-n]` tag + §14 hypotheses routed to `→ TASK-048`; no efficacy self-claim.
- **RULE-7 — No fabricated content.** Binding form here: §11 parameters are symbolic and marked to-be-calibrated; the §16 diagram and §15 tests use placeholder values; no real user, metric or outcome appears.
- **RULE-1 / RULE-2** (completeness / accessibility) bind the *rendering* layer (`↔ TASK-045`), not the logic layer; this spec exposes the state and event surface those screens need to be complete and accessible (§17), but does not itself render anything.

---

## 2. Model overview

The machine is a **two-region (orthogonal) hierarchical statechart** per habit instance, plus a set of **derived quantities** that are persisted projections, not states.

```
                       ┌──────────────────────── HABIT INSTANCE ───────────────────────────┐
  Region L (Lifecycle) │  Draft → Initiating → Repeating ⇄ Recovering → Graduated           │
                       │                           ↘ Paused ↗         (⇄ Repeating, no stigma)│
                       │                           ↘ Released (reversible within grace) ↙     │
                       ├────────────────────────────────────────────────────────────────────┤
  Region P (Plan)      │  Standard ⇄ Floor ⇄ Expanded     ← adaptation; independent of L      │
                       └────────────────────────────────────────────────────────────────────┘

  Derived quantities (projections, never states):
    cumulativeCompletions   (monotonic ↑, INV-1 — never decremented)
    consistencyWindowRate   (completions ÷ scheduled opportunities over window W_cons)
    automaticityEstimate    (slow signal, SRBAI-informed [MECH-3])
    currentGapLength        (consecutive missed scheduled windows; informational, non-punitive)
    longestGapRecoveredFrom  (celebrated in Recovery, never shamed)
    lastCompletionWindowId, nextScheduledWindowId
```

Why two regions. **Lifecycle (L)** answers *"where is this habit in its life?"* **Plan (P)** answers *"how big is today's version?"* They are orthogonal because adaptation must be possible in *any* living lifecycle state: a user in `Initiating`, `Repeating` or `Recovering` can all drop to the `Floor` plan without that changing their lifecycle stage. Modelling adaptation as its own region (rather than as lifecycle states) is what lets "I'll do the tiny version today" be an ordinary, low-friction, non-regressive act — the structural expression of `prd.md` §3's "flexible weekly consistency."

Why derived quantities are not states. A finite-state machine should have a small, enumerable state set; counts and rates are unbounded and belong in persisted data read by the UI, with the FSM's *invariants* constraining how they may change. Keeping `cumulativeCompletions` out of the state set is also what makes `INV-1` (monotonicity) expressible as a global invariant over every transition rather than baked into a combinatorial explosion of states.

The two regions give a **composite state** written `L:P` (e.g. `Repeating:Floor`). The lifecycle region is the primary subject of the five phases in the acceptance criterion; §7 maps each phase to the region states and events that realize it.

---

## 3. State catalog

### 3.1 Region L — Lifecycle states

| ID | State | Phase (AC) | Meaning | Entry action | Invariant while in state |
|---|---|---|---|---|---|
| `L0` | **Draft** | (pre-initiation) | Habit defined (name, intention, schedule) but not yet committed. Optional; a concept may skip straight to `Initiating`. | Persist habit definition; no schedule armed. | No scheduled windows fire; no progress accrues. |
| `L1` | **Initiating** | initiation | Habit is committed and in its early priming period — establishing the cue→action link `[MECH-1]`; prompts are at their most supportive. | Arm schedule; bind implementation-intention cue (if provided); set `enteredInitiatingAt`. | `cumulativeCompletions` may rise; graduation gate is *closed* (cannot graduate directly from `L1`, see §8.2). |
| `L2` | **Repeating** | repetition | Ongoing regular practice. The ordinary-day steady state. Progress accrues; automaticity is sampled `[MECH-3]`; graduation gate is *evaluable*. | Set `enteredRepeatingAt`; schedule first automaticity prompt. | Progress accrues normally; missed windows raise `currentGapLength` **without** altering `cumulativeCompletions` (`INV-1`). |
| `L3` | **Recovering** | recovery | A supportive re-entry state entered when the user returns after a gap, or when a gap crosses `PRM-GAP` while unattended. Explicitly **not** a demotion or a penalty. | Emit welcome-back + single low-friction next step `[MECH-5]`; record `gapBeingRecoveredFrom`; **do not** alter progress. | `INV-5`: no progress reset; copy is non-punitive (`INV-3`); offers exactly one next step + "adjust plan" + "pause" options. |
| `L4` | **Graduated** | graduation | The behavior is assessed as becoming self-sustaining; the app fades its prompting to a lighter touch `[MECH-7]`. A *success* state, user-confirmed. | Reduce prompt cadence to graduated level; emit congratulation framed as capability, not finality; keep progress visible. | Prompts at graduated cadence only; the user may still log, pause, adjust, or return to `L2` with no stigma (§8.5). |
| `L5` | **Paused** | (cross-phase) | User-initiated suspension (autonomy, RULE-4). No windows fire; no gap accrues. | Disarm schedule; record `pausedAt` and originating state. | `currentGapLength` is **frozen**, not grown (`INV-7`); no prompts; no progress change. |
| `L6` | **Released** | (cross-phase, terminal*) | User ended the habit. Reversible within `PRM-GRACE`; after grace, archived/erasable (§12.5). | Disarm schedule; record `releasedAt` and prior state; start grace timer. | No windows fire; `U_RESTORE` within grace returns to prior lifecycle state with progress intact. |

\* `L6 Released` is terminal only after the grace window; within grace it is fully reversible (`INV-4`).

### 3.2 Region P — Plan states (adaptation)

| ID | State | Meaning | Notes |
|---|---|---|---|
| `P-std` | **Standard** | The habit's normal target version. | Default on commit. |
| `P-flr` | **Floor** | A deliberately tiny, always-doable minimum version ("open the app and breathe once," "one sentence"). Completing the floor **counts as a completion** `[MECH-4]`. | The structural anti-streak-trap: on a low-energy day the user scales *down*, not *out*. Floor completion increments `cumulativeCompletions` exactly like Standard. |
| `P-exp` | **Expanded** | A larger version for high-capacity days. | Optional; completing Expanded counts as one completion (not "extra credit" that creates pressure — guard §10.3). |

Plan transitions are available in `L1`, `L2`, `L3` (living states), not in `L0`, `L5`, `L6`. The plan state is **sticky** (persists across windows) and user-reversible at any time.

### 3.3 State-set completeness

The reachable composite state set is `{L0} ∪ ({L1,L2,L3,L4} × {P-std,P-flr,P-exp}) ∪ {L5, L6}`. `L0`, `L5`, `L6` are plan-agnostic (no active plan). This finite set is enumerated for the conformance tests (§15) and the §18 validator checks that every listed state is both reachable and exitable (no orphan, no black-hole except the intended post-grace `L6`).

---

## 4. Event catalog

Events are the only way state changes. They are partitioned into **user events** (`U_`, originate from a user action, often via `↔ TASK-045` screens or the `→ TASK-046` microinteraction) and **system/time events** (`S_`, originate from the scheduler/clock). Every event carries a common envelope (§12.1).

### 4.1 User events

| ID | Event | Typical source | Payload | Reversible? |
|---|---|---|---|---|
| `U_CREATE` | Define a habit | Discovery/personalization (`↔ TASK-045` W2) | name, intention, schedule, optional cue | via delete while `L0` |
| `U_COMMIT` | Commit to start | First Action (W3) | — | via `U_RELEASE` |
| `U_PERFORM` | Completed the action for the current window | Guided Habit (W5) / little-win (`→ TASK-046`) | windowId, planAtCompletion | via `U_UNDO` within `PRM-UNDO` |
| `U_PERFORM_PARTIAL` | Completed the **floor** version | W5 / little-win | windowId | via `U_UNDO` within `PRM-UNDO` |
| `U_SKIP` | "Not today" — explicit, penalty-free | Daily Home (W4) / W5 | windowId, optional reason | n/a (no effect to reverse) |
| `U_SET_PLAN` | Choose Standard/Floor/Expanded | W4/W5 | targetPlan | yes (set again) |
| `U_ADJUST_SCHEDULE` | Change days/times/frequency | Settings/W4 | newSchedule | via `U_UNDO` within `PRM-UNDO` |
| `U_PAUSE` | Pause the habit | W4/Settings | — | via `U_RESUME` |
| `U_RESUME` | Resume from pause | W4/Settings | — | via `U_PAUSE` |
| `U_RELEASE` | End the habit | Settings | — | via `U_RESTORE` within `PRM-GRACE` |
| `U_RESTORE` | Undo a release | Settings/undo toast | — | — |
| `U_UNDO` | Undo the last reversible logged action | Undo affordance | targetEventId | — |
| `U_AUTOMATICITY_SELFREPORT` | Answer the brief automaticity check `[MECH-3]` | Progress (W6) prompt | SRBAI-style responses (behavioral, non-clinical) | — |
| `U_GRADUATION_RESPONSE` | Respond to a graduation offer | Graduation offer surface | `accept` / `keep_as_is` / `not_yet` | — |

### 4.2 System / time events

| ID | Event | Trigger | Effect summary |
|---|---|---|---|
| `S_WINDOW_OPEN` | Scheduled opportunity begins (window `k`) | Scheduler at local window start | Marks `windowId=k` active; may prompt (cadence per state). |
| `S_WINDOW_CLOSE` | Scheduled opportunity elapses with no `U_PERFORM`/`U_PERFORM_PARTIAL`/`U_SKIP` | Scheduler at window end | Increments `currentGapLength` by 1 (informational, `INV-1` holds); **never** decrements progress. |
| `S_GAP_THRESHOLD` | `currentGapLength` reaches `PRM-GAP` while in `L2`/`L1` | Derived check on `S_WINDOW_CLOSE` | Eligibility to transition to `Recovering` (§9.2) — supportive, not punitive. |
| `S_GRADUATION_GATE_EVAL` | Periodic (cadence `PRM-GRADEVAL`) while in `L2` | Scheduler | Evaluates §8.2 gate; if satisfied, raises a graduation **offer** (does not graduate). |
| `S_AUTOMATICITY_PROMPT_DUE` | Automaticity sampling cadence `PRM-AUTO` elapsed | Scheduler (L2/L4) | Surfaces the brief self-report `[MECH-3]`; purely optional to answer (`INV-4`). |
| `S_CLOCK_ADJUST` | Device timezone/DST/manual clock change detected | OS clock notification | Recomputes window boundaries from the schedule; **never** fabricates, deletes or reorders completions (§12.4). |
| `S_DORMANCY_TIMEOUT` | No interaction for `PRM-DORMANT` | Scheduler | **Suggests** (does not force) pausing to protect the user from guilt accrual; pre-empts gap shaming (§9.4). |

All `S_` events are **idempotent per window/period** (§12.2): re-delivery (e.g. after offline sync or app relaunch) must not double-count.

---

## 5. Derived quantities and the non-punitive invariants

### 5.1 The four separated quantities (`prd.md` §1 line 19)

HerRays must not collapse engagement, adherence, automaticity and outcome into one number. This machine persists them separately and the UI (`↔ TASK-045`) reads whichever is appropriate:

| Quantity | What it is | What it is **not** | Updated by |
|---|---|---|---|
| `cumulativeCompletions` | Total times the action (Standard **or** Floor **or** Expanded) was completed, ever. Monotonic. | Not a streak. Not reset-able. | `U_PERFORM`, `U_PERFORM_PARTIAL` |
| `consistencyWindowRate` | Completions ÷ scheduled opportunities over the rolling window `PRM-WCONS`. A rate in [0,1]. | Not a "streak length." A dip is a dip, framed neutrally. | recomputed on each window event |
| `automaticityEstimate` | A slow-moving behavioral signal of how automatic the action feels, informed by optional SRBAI-style self-report `[MECH-3]`. | **Not** a health outcome, not a clinical measure, not a diagnosis (`INV-6`). | `U_AUTOMATICITY_SELFREPORT` |
| `currentGapLength` | Consecutive missed scheduled windows right now. Informational. | **Not** a "broken streak," not a failure count, never shown with loss framing (`INV-3`). | `S_WINDOW_CLOSE` (↑), any completion (→0) |

A **health outcome** (symptom, biomarker, clinical status) is deliberately *absent* from this machine. If a concept wants to relate a habit to a health outcome, that relationship is out of scope here and must pass the clinical gate (`↔ TASK-040`, `↔ TASK-033`); this machine stops at behavior.

### 5.2 Why consistency is a window rate, not a streak

A streak is `max consecutive non-missed windows`; one miss sends it to zero — the exact failure mode `prd.md` §3 names. `consistencyWindowRate` over a rolling window degrades *proportionally and recoverably*: one miss in a `PRM-WCONS=14`-window moves 100% → ~93%, and a completion the next day moves it back up. There is no cliff. The Progress screen (`↔ TASK-045` W6) renders this as "flexible consistency" / "cumulative effort / milestones," the PRD-sanctioned alternatives — never as a chain that can snap.

### 5.3 The non-punitive invariants (machine-checkable)

These are enforced by the property tests in §15.3; a violation fails conformance (§18).

- **`INV-1` (monotonic progress).** For every event `e` and state `s`, `cumulativeCompletions` after `e` ≥ `cumulativeCompletions` before `e`. No event decrements it. (Completions only ever go up; `U_UNDO` of a mis-logged completion is the *sole* exception and is user-initiated correction within `PRM-UNDO`, not a system penalty — and it reverts to the pre-log value, never below it.)
- **`INV-2` (no system-initiated zeroing).** No `S_` event, and no `U_SKIP`, may set `cumulativeCompletions`, `consistencyWindowRate` or `longestGapRecoveredFrom` to zero or to a "reset" sentinel. The only zeroing is `U_RELEASE` (user-initiated, reversible within grace).
- **`INV-3` (no loss-framing on gaps).** The action attached to any `S_WINDOW_CLOSE`, `S_GAP_THRESHOLD`, or entry to `Recovering` must carry the `nonPunitive=true` content contract (§9.3): no shame, no "you broke/failed/lost," no red-alert loss styling. Enforced structurally: these actions may only emit from the `recovery`/`neutral` copy class (`↔ TASK-045` RULE-3; content owner R10).
- **`INV-4` (autonomy & reversibility).** Every `U_` event that commits or destroys (`U_COMMIT`, `U_RELEASE`, `U_ADJUST_SCHEDULE`, `U_PERFORM`, `U_PERFORM_PARTIAL`) is reversible within its grace/undo window; `U_SKIP` requires no justification and incurs no penalty; graduation requires `U_GRADUATION_RESPONSE=accept` (or lapse-to-default per §8.3) — the app may never force-graduate against a `not_yet`.
- **`INV-5` (missing is never failure).** No path from a missed window leads to a "failed"/"broken" lifecycle state. A miss keeps the habit in `L2` or moves it to the *supportive* `L3 Recovering`; it never moves it toward `L6 Released` without an explicit `U_RELEASE`.
- **`INV-6` (clinical boundary).** No state entry/exit action, and no derived quantity, produces a diagnosis, medical claim, treatment instruction, or health inference. `automaticityEstimate` is behavioral only. Any escalation ("you might want to talk to a clinician") is *routing*, never advice, and is governed by `↔ TASK-040`.
- **`INV-7` (pause protects).** While in `L5 Paused`, `currentGapLength` is frozen and no `S_WINDOW_CLOSE` accrues a gap; pausing can never worsen the user's standing. `S_DORMANCY_TIMEOUT` *suggests* pause precisely so inactivity never silently accrues guilt.

---

## 6. Transition tables

Notation: a row is `source —event[guard]/action→ target`. Absence of a row for a (state, event) pair means the event is **ignored** (no-op, logged for audit) — the machine is total and never crashes on an unexpected event (tested by `PT-05`). Guards in `[...]`; actions after `/`.

### 6.1 Lifecycle region (L)

| Source | Event | Guard | Action | Target |
|---|---|---|---|---|
| `L0 Draft` | `U_COMMIT` | — | arm schedule; bind cue `[MECH-1]` | `L1 Initiating` |
| `L0 Draft` | `U_RELEASE` | — | delete draft | `L6 Released` |
| `L1 Initiating` | `U_PERFORM` / `U_PERFORM_PARTIAL` | valid open window | `cumulativeCompletions++`; `currentGapLength=0`; emit little-win feedback `[MECH-2]` | `L1` (self) |
| `L1 Initiating` | `S_WINDOW_CLOSE` | no completion/skip this window | `currentGapLength++` (no progress change, `INV-1`) | `L1` (self) |
| `L1 Initiating` | `S_GAP_THRESHOLD` | `currentGapLength ≥ PRM-GAP` | enter recovery | `L3 Recovering` |
| `L1 Initiating` | completions reach `PRM-INIT_MIN` **and** window elapsed ≥ `PRM-INIT_DUR` | guard | promote to steady state | `L2 Repeating` |
| `L1 Initiating` | `U_PAUSE` / `U_RELEASE` | — | see §6.3 | `L5` / `L6` |
| `L2 Repeating` | `U_PERFORM` / `U_PERFORM_PARTIAL` | valid open window | `cumulativeCompletions++`; `currentGapLength=0`; feedback `[MECH-2]` | `L2` (self) |
| `L2 Repeating` | `U_SKIP` | open window | mark window skipped (neutral, `INV-3`); no gap penalty beyond ordinary window accounting | `L2` (self) |
| `L2 Repeating` | `S_WINDOW_CLOSE` | no completion/skip | `currentGapLength++` (`INV-1`) | `L2` (self) |
| `L2 Repeating` | `S_GAP_THRESHOLD` | `currentGapLength ≥ PRM-GAP` | enter recovery (supportive) | `L3 Recovering` |
| `L2 Repeating` | `S_GRADUATION_GATE_EVAL` | §8.2 gate satisfied | raise graduation **offer** (no state change yet) | `L2` (self) + pending offer |
| `L2 Repeating` | `U_GRADUATION_RESPONSE` | `=accept` **and** gate still satisfied | reduce prompt cadence; emit capability congratulation | `L4 Graduated` |
| `L2 Repeating` | `U_GRADUATION_RESPONSE` | `=not_yet` / `=keep_as_is` | clear offer; schedule re-eval after `PRM-REOFFER` | `L2` (self) |
| `L2 Repeating` | `U_PAUSE` / `U_RELEASE` | — | see §6.3 | `L5` / `L6` |
| `L3 Recovering` | `U_PERFORM` / `U_PERFORM_PARTIAL` | — | `cumulativeCompletions++`; `currentGapLength=0`; update `longestGapRecoveredFrom`; celebrate the **return** `[MECH-5]` | `L2 Repeating` (or `L1` if it entered recovery from `L1`, §9.2) |
| `L3 Recovering` | `U_SET_PLAN` | — | change plan (often to `P-flr`) | `L3` (self) |
| `L3 Recovering` | `U_ADJUST_SCHEDULE` | — | re-plan (the "changed circumstances" path, `prd.md` §3 J9) | `L3` (self) |
| `L3 Recovering` | `U_SKIP` | — | neutral acknowledge; one gentle next step remains offered (`INV-3`) | `L3` (self) |
| `L3 Recovering` | `U_PAUSE` / `U_RELEASE` | — | see §6.3 | `L5` / `L6` |
| `L4 Graduated` | `U_PERFORM` / `U_PERFORM_PARTIAL` | — | `cumulativeCompletions++` (logging still welcome) | `L4` (self) |
| `L4 Graduated` | `S_WINDOW_CLOSE` | graduated cadence | at most a light check-in; `currentGapLength++` informational | `L4` (self) |
| `L4 Graduated` | `currentGapLength ≥ PRM-REGRADE_GAP` | guard | *offer* return to active support (no stigma); on accept | `L2 Repeating` |
| `L4 Graduated` | `U_PAUSE` / `U_RELEASE` | — | see §6.3 | `L5` / `L6` |

### 6.2 Plan region (P) — adaptation

Available only while L ∈ {`L1`,`L2`,`L3`}. Plan changes **never** touch region L and never alter `cumulativeCompletions`.

| Source | Event | Guard | Action | Target |
|---|---|---|---|---|
| `P-std` | `U_SET_PLAN(Floor)` | — | set today's+default target to floor `[MECH-4]` | `P-flr` |
| `P-std` | `U_SET_PLAN(Expanded)` | — | set expanded target (guard §10.3: no pressure copy) | `P-exp` |
| `P-flr` | `U_SET_PLAN(Standard)` | — | restore standard | `P-std` |
| `P-flr` | `U_SET_PLAN(Expanded)` | — | expand | `P-exp` |
| `P-exp` | `U_SET_PLAN(Standard/Floor)` | — | scale back | `P-std` / `P-flr` |

### 6.3 Cross-cutting lifecycle transitions (pause / release / restore / undo)

| Source (any of) | Event | Guard | Action | Target |
|---|---|---|---|---|
| `L1`,`L2`,`L3`,`L4` | `U_PAUSE` | — | record originating state; disarm schedule; freeze `currentGapLength` (`INV-7`) | `L5 Paused` |
| `L5 Paused` | `U_RESUME` | — | re-arm schedule; restore originating state | originating `L1`/`L2`/`L3`/`L4` |
| any living state | `U_RELEASE` | — | record prior state; start `PRM-GRACE` timer; disarm | `L6 Released` |
| `L6 Released` | `U_RESTORE` | within `PRM-GRACE` | restore prior state and all progress (`INV-4`) | prior state |
| `L6 Released` | grace elapsed | timer | archive (then erasable §12.5) | `L6` (terminal) |
| `L1`,`L2`,`L3`,`L4` | `U_UNDO(targetEventId)` | target within `PRM-UNDO` and reversible | revert that event's effect exactly (e.g. decrement a just-logged completion back to prior value) | same state |

---

## 7. The five phases, mapped to the machine

The acceptance criterion enumerates five phases. Each is realized by specific states, events and quantities:

1. **Initiation** → state `L1 Initiating`. Entered by `U_COMMIT`. Its job is to establish the cue→action link `[MECH-1 implementation intention]` and deliver early wins `[MECH-2 positive feedback / self-monitoring]` under the most supportive prompt cadence. It *cannot* graduate directly (§8.2 guard) — early completions are not yet automaticity. Promotes to `Repeating` on `PRM-INIT_MIN` completions over `PRM-INIT_DUR`.
2. **Repetition** → state `L2 Repeating`. The ordinary-day steady state. Progress accrues; `automaticityEstimate` is sampled `[MECH-3]`; the graduation gate is evaluated (`S_GRADUATION_GATE_EVAL`). Missed windows raise `currentGapLength` **without** touching `cumulativeCompletions` (`INV-1`).
3. **Adaptation** → region `P` transitions (`U_SET_PLAN`) plus `U_ADJUST_SCHEDULE`, available in `L1`/`L2`/`L3`. The **Floor** plan `[MECH-4 self-efficacy / scaling-down]` is the structural answer to low-energy and changed-capacity days (`prd.md` §3 J9, low-energy scenario). Adaptation is lifecycle-neutral: you adapt *without* regressing.
4. **Graduation** → state `L4 Graduated`, via the offer→confirm flow (§8). The habit is assessed self-sustaining; prompts fade `[MECH-7 fading / dependency-avoidance]`. Success here is *the user needing the app less* — the deliberate opposite of engagement maximization (red-team `↔ TASK-036`).
5. **Recovery** → state `L3 Recovering` (§9). Entered on return-after-gap or `S_GAP_THRESHOLD`. Celebrates the **return** `[MECH-5 self-compassion / re-entry]`, offers one low-friction next step and the Floor plan, and **never** resets progress (`INV-2`, `INV-5`). This is the direct encoding of `prd.md` §3's "celebrate returning after disruption."

---

## 8. Graduation gate specification

### 8.1 What graduation means (and does not)

Graduation = the machine's assessment that the behavior is becoming **self-sustaining**, such that HerRays can responsibly **reduce its prompting** (SDT autonomy; Fogg's "prompts become unnecessary as the behavior becomes automatic"). It is a behavioral-engagement judgment, **not** a clinical one (`INV-6`). Graduation does **not** mean "cured," "healthy," or "done forever"; the habit stays logged and returnable (§8.5).

### 8.2 The gate (all thresholds are §11 parameters — ILLUSTRATIVE, TO BE CALIBRATED)

`S_GRADUATION_GATE_EVAL` (cadence `PRM-GRADEVAL`) raises a graduation **offer** iff **all** hold while in `L2 Repeating`:

- **G1 minimum practice:** `cumulativeCompletions ≥ PRM-GRAD_MINCOUNT` **and** `elapsedSinceCommit ≥ PRM-GRAD_MINDUR`. (Two separate gates so neither a burst of completions in two days nor the mere passage of time alone can graduate — guards against the 21-day myth, §8.4.)
- **G2 sustained consistency:** `consistencyWindowRate ≥ PRM-GRAD_CONS` sustained over the last `PRM-GRAD_SUSTAIN` windows (a *sustained* rate, not a single good week).
- **G3 automaticity signal:** `automaticityEstimate ≥ PRM-GRAD_AUTO`, where the estimate is informed by optional SRBAI-style self-report `[MECH-3]`. If the user has declined to self-report, G3 falls back to a **conservative behavioral proxy** (sustained consistency with low prompt-dependence) and the offer copy is correspondingly tentative — never claiming automaticity we did not measure (`INV-6`, RULE-6).
- **G4 not in difficulty:** `currentGapLength < PRM-GAP` (do not offer graduation to someone who is currently struggling — that would read as abandonment).

### 8.3 Offer → confirm (autonomy, `INV-4`)

The gate **offers**; the user **decides** (`U_GRADUATION_RESPONSE`):
- `accept` → transition to `L4 Graduated`.
- `not_yet` → stay `L2`; re-offer no sooner than `PRM-REOFFER`.
- `keep_as_is` → stay `L2`; suppress future offers until the user re-enables them (a durable "I like the current support" choice).
- **No response within `PRM-OFFER_TTL`** → the offer **lapses silently** to the user's default (`PRM-OFFER_DEFAULT`, default = `not_yet`); the app never force-graduates on silence (`INV-4`). The lapse is neutral and un-nagging.

### 8.4 The 21-day myth is refused

The widely repeated "21 days to form a habit" figure has no sound basis and is **not** encoded. The graduation threshold is `PRM-GRAD_MINDUR` + the consistency/automaticity gates, whose values are set only by graded evidence from `↔ TASK-024`/`↔ TASK-025` and validated by `→ TASK-048`. Any published figure (e.g. commonly cited habit-formation durations) must enter as a *calibration input with an evidence grade*, never as a constant in this spec. Until calibrated, `PRM-GRAD_MINDUR` carries an explicit `TO BE CALIBRATED` placeholder and the §18 validator rejects a hard-coded "21."

### 8.5 Graduated is not a trap-door (`INV-5`, no-stigma return)

From `L4 Graduated`, if `currentGapLength` reaches `PRM-REGRADE_GAP`, the machine **offers** (never forces) a return to active support (`→ L2 Repeating`). Returning is framed as the app re-offering help, **not** as the user "falling back" or "losing" graduation. `cumulativeCompletions` and `longestGapRecoveredFrom` persist unchanged across the return (`INV-1`, `INV-2`). This closes the dependency/anxiety red-team concern (`↔ TASK-036`): graduation can neither strand a struggling user nor shame a returning one.

---

## 9. Recovery specification (the non-punitive core)

### 9.1 Principle

Recovery is where `prd.md` §3's rule lives or dies. The entire design intent: **returning after a gap is a celebrated, low-friction act — never a reset, never a scolding.**

### 9.2 Entry

`L3 Recovering` is entered two ways:
- **On return:** the user completes or opens the habit after one or more missed windows. (If they simply complete, the completion transition in §6.1 already routes through recovery semantics and lands back in `L2`/`L1`.)
- **On unattended gap:** `S_GAP_THRESHOLD` fires when `currentGapLength ≥ PRM-GAP` in `L1`/`L2`, moving the habit into the supportive `Recovering` state so the *next* touch is a warm welcome-back, not an ordinary prompt. Recovery remembers whether it came from `L1` or `L2` and returns there on the first completion.

### 9.3 The non-punitive content contract (`INV-3`)

Any copy/visual emitted in or into recovery MUST (content owner R10; carried from `↔ TASK-045` RULE-3):
- **celebrate the return** ("welcome back," "good to see you") — not the absence ("you missed 5 days");
- show **cumulative effort / milestones**, never a reset-to-zero;
- offer **exactly one** low-friction next step (default = the `P-flr` Floor version) plus always-available "adjust plan" and "pause";
- contain **no** shame, guilt, loss-framing, red-alert styling, broken-chain imagery, or comparison to "how you used to be";
- be perceivable without color/motion alone (accessibility handoff to `↔ TASK-045` §13).

### 9.4 Pre-empting guilt

`S_DORMANCY_TIMEOUT` (after `PRM-DORMANT`) **suggests** pausing (`U_PAUSE`) rather than letting windows silently accrue gap during a long absence. This means a user who disappears for weeks returns to a *paused* habit they can gently resume (`INV-7`), not a wall of missed days. Suggestion only — never auto-pauses without consent beyond the suggestion affordance (`INV-4`).

---

## 10. Adaptation specification (the plan region)

### 10.1 The Floor is the anti-streak-trap

The **Floor** (`P-flr`) is a deliberately tiny, always-completable version of the action. Its contract: **completing the Floor counts as a full completion** (`cumulativeCompletions++`) `[MECH-4]`. This gives a user on a low-energy day (`prd.md` §3 low-energy scenario) a *real* way to keep going that isn't "all" and isn't "nothing" — the structural embodiment of the PRD's "flexible weekly consistency."

### 10.2 Lifecycle-neutrality

Plan changes never alter region L and never change progress quantities (tested by `T-14`). Scaling to Floor is not a regression, not a demotion, and is invisible to the graduation gate except insofar as it keeps `consistencyWindowRate` healthy (which it helps, by making completion achievable).

### 10.3 Expanded carries no pressure (guard)

`P-exp` (Expanded) exists for high-capacity days but is guarded: completing Expanded yields **one** completion, identical to Standard — it does **not** create "bonus" quantities, leaderboards, or "you did extra, keep it up!" escalation (that would manufacture the very pressure the whole design avoids; red-team `↔ TASK-036`; content guard R10). Expanded is a capacity accommodation, not a gamified overreach.

---

## 11. Parameters and calibration

**Every value below is a parameter, not a fact.** Defaults are `ILLUSTRATIVE — TO BE CALIBRATED` placeholders whose real values come only from graded behavioral evidence (`↔ TASK-024`/`↔ TASK-025`) and the concept test (`→ TASK-048`), recorded in the experiment register (`↔ TASK-009`). The §18 validator rejects any parameter presented as a measured value without an evidence pointer.

| ID | Parameter | Governs | Illustrative default (NOT evidence) | Calibration source |
|---|---|---|---|---|
| `PRM-INIT_MIN` | completions to leave Initiating | §6.1 L1→L2 | *TBC* (placeholder: a small count) | `↔ TASK-025`, `→ TASK-048` |
| `PRM-INIT_DUR` | min elapsed time in Initiating | §6.1 L1→L2 | *TBC* | `↔ TASK-024` |
| `PRM-WCONS` | consistency rolling window (windows) | §5.2 | *TBC* (placeholder: ~2 weeks of windows) | `↔ TASK-025` |
| `PRM-GAP` | missed windows before Recovering | §9.2 | *TBC* (placeholder: a few windows) | `→ TASK-048` |
| `PRM-GRAD_MINCOUNT` | min completions for graduation gate G1 | §8.2 | *TBC* | `↔ TASK-024`/`↔ TASK-025` |
| `PRM-GRAD_MINDUR` | min duration for graduation gate G1 (**not** 21 days, §8.4) | §8.2 | *TBC — explicitly not a folk constant* | `↔ TASK-024`/`↔ TASK-025` |
| `PRM-GRAD_CONS` | sustained consistency threshold G2 | §8.2 | *TBC* | `→ TASK-048` |
| `PRM-GRAD_SUSTAIN` | sustain window for G2 | §8.2 | *TBC* | `↔ TASK-025` |
| `PRM-GRAD_AUTO` | automaticity threshold G3 (SRBAI-informed) | §8.2 | *TBC* | `↔ TASK-024` (SRBAI validity) |
| `PRM-GRADEVAL` | graduation gate evaluation cadence | §4.2 | *TBC* | engineering default |
| `PRM-REOFFER` | min time before re-offering graduation | §8.3 | *TBC* | `→ TASK-048` |
| `PRM-OFFER_TTL` | graduation offer time-to-live | §8.3 | *TBC* | engineering default |
| `PRM-OFFER_DEFAULT` | silent-lapse default | §8.3 | `not_yet` (autonomy-preserving) | design principle (RULE-4) |
| `PRM-REGRADE_GAP` | gap before offering return from Graduated | §8.5 | *TBC* | `→ TASK-048` |
| `PRM-AUTO` | automaticity self-report cadence | §4.2 | *TBC* (sparse — burden guard) | `↔ TASK-024` |
| `PRM-DORMANT` | dormancy before suggesting pause | §9.4 | *TBC* | `→ TASK-048` |
| `PRM-GRACE` | release-undo grace window | §6.3 | *TBC* (placeholder: a generous window) | `↔ TASK-040` (erasure) |
| `PRM-UNDO` | per-action undo window | §6.3 | *TBC* (placeholder: short) | design principle (RULE-4) |

---

## 12. Persistence and synchronization rules

### 12.1 Event-sourced source of truth

The authoritative store is an **append-only event log** per user; the composite state and all derived quantities are a **projection** rebuildable from the log (tested by `T-20`). Every event carries the envelope:

```
{ eventId: ULID,              // globally unique, lexicographically sortable
  habitId: ID,
  type: "U_PERFORM" | ...,    // from §4
  logicalClock: integer,      // per-device monotonic counter (Lamport-style)
  occurredAt: ISO-8601 local + tz offset,   // device wall time, for display only
  windowId: string | null,    // the scheduled opportunity this pertains to
  payload: { ... },
  schemaVersion: integer,
  idempotencyKey: string }     // dedupe key (§12.2)
```

Ordering for projection is by `(logicalClock, occurredAt, eventId)`; `occurredAt` (wall time) is **never** used alone to order, so a clock change cannot reorder history (§12.4).

### 12.2 Idempotency and deduplication

- At most **one** completion per `windowId`: a second `U_PERFORM` with the same `(habitId, windowId)` is deduped by `idempotencyKey` and is a no-op for `cumulativeCompletions` (tested by `T-16`). This makes `U_PERFORM` safe to retry after flaky network/relaunch.
- `S_` events are idempotent per window/period: redelivering `S_WINDOW_CLOSE` for an already-closed window does not re-increment `currentGapLength` (`T-17`).

### 12.3 Offline-first and conflict resolution

- **Local-first:** every event is applied to the local projection immediately and queued; the UI never waits on the network. HerRays is usable fully offline (`↔ TASK-039` iOS offline requirement).
- **Sync:** queued events replicate when connectivity returns; the projection is recomputed from the merged log.
- **Conflict classes:**
  - *Completions* are commutative: merging two devices unions completions by `windowId` (one per window still holds via dedupe) → order-independent (`PT-03`).
  - *Plan/schedule changes* use last-writer-wins by `(logicalClock, eventId)`.
  - *Release* requires an explicit `U_RELEASE`; a completion that syncs in after a release but with an earlier logical clock does not resurrect the habit (it is recorded but the release stands), while `U_RESTORE` is the explicit un-release.
- **No merge may violate an invariant:** the merged projection is re-checked against `INV-1…INV-7`; a merge that would (e.g.) lower `cumulativeCompletions` is rejected as corrupt and flagged for repair, never silently applied (`PT-06`).

### 12.4 Clock-change robustness (`S_CLOCK_ADJUST`)

Progress is defined over **scheduled windows**, not wall-clock day counts. On timezone change, DST, or manual clock adjustment:
- Window boundaries are recomputed from the user's *schedule* (e.g. "every weekday 8am local"), binding each window to a stable `windowId` derived from the scheduled slot, not from absolute epoch arithmetic alone.
- `S_CLOCK_ADJUST` **never** fabricates, deletes, reorders or double-counts completions (`T-18`): the completion log is immutable; only *future* window scheduling is recomputed.
- A backward clock change cannot "un-complete" a window or inflate a gap; a forward jump cannot manufacture missed windows retroactively between the last real window and now beyond the genuinely scheduled ones.

### 12.5 Privacy, data-minimization, retention (RULE-5, `↔ TASK-040`)

- **Minimize:** store only what the machine needs — habit definition, event log, projection. No free-text health content is required by this machine; if a concept collects a reason on `U_SKIP`, it is optional, on-device by default, and never inferred upon (`INV-6`).
- **On-device default:** health-adjacent signals (automaticity self-reports, skip reasons) default to on-device; cross-device sync of them is opt-in (`↔ TASK-040`).
- **Erasure:** `U_RELEASE` → after `PRM-GRACE` the habit is archived and then fully erasable on request (right to erasure); erasure cascades to the event log and projection (`T-21`). No "soft-deleted but retained forever" shadow copy.
- **No clinical store:** this machine persists no diagnosis, no medical record, no health outcome (`INV-6`).

### 12.6 Schema versioning

- Every event carries `schemaVersion`; readers are **tolerant** (unknown future fields preserved, not dropped) and migrations are forward-only and tested (`T-22`).
- A projection rebuilt under a new schema from an old log must yield the same invariants (`PT-07`).

---

## 13. Safety, autonomy, privacy, clinical boundary

This machine is written to pass the capability safety gate (`↔ TASK-033`) and survive the red-team (`↔ TASK-036`). Mapping:

| Safety dimension (`↔ TASK-033`) | How this machine addresses it | Residual question → owner |
|---|---|---|
| **Clinical** | `INV-6`: no diagnosis/claim/treatment in any state or quantity; automaticity is behavioral; escalation is routing only (`↔ TASK-040`). | Does any concept's *rendering* of graduation imply a health claim? → R14 at Gate 4 |
| **Privacy** | §12.5 data-minimization, on-device default, erasure-on-release. | Is any synced field health-identifying? → R15 |
| **Manipulation / dark patterns** | No streak cliff (`INV-2`); graduation reduces engagement by design (§8.1); Expanded carries no escalation (§10.3); offers lapse to autonomy-preserving default (§8.3). | Does the *copy* nudge compulsively? → R10 red-team (`↔ TASK-036`) |
| **Accessibility** | Logic exposes neutral, non-color-only state to the render layer; recovery/graduation events carry text, not color-only, signals (handoff `↔ TASK-045` §13). | Does each screen meet WCAG 2.2 AA / HIG? → R13 |
| **Unsupported claims** | §11 parameters marked TBC; `[MECH]` tags route to `→ TASK-048`; `INV`-backed non-punitive guarantee. | Are calibrated values evidence-graded? → R02 |

**Red-team pre-answers (`↔ TASK-036`).** *"Does graduation abandon a struggling user?"* — No: G4 forbids offering graduation during a gap (§8.2), and `L4→L2` re-offers support on relapse (§8.5). *"Does it create dependency?"* — The opposite: graduation *fades* prompts; success = needing us less. *"Does it induce anxiety/guilt?"* — No streak to break (`INV-2`), dormancy suggests pause before guilt accrues (§9.4), recovery celebrates return (§9.3). *"Is it over-tracking?"* — Automaticity self-report is sparse (`PRM-AUTO`) and optional; the machine needs no health data.

---

## 14. Mechanisms and test hypotheses (`[MECH]` → `→ TASK-048`)

Each lever the machine encodes is a **mechanism to test**, not a proven effect (RULE-6). Each points at its capability record (`↔ TASK-030`) and a hypothesis for the concept test (`→ TASK-048`); none asserts a result here.

| Tag | Mechanism (framework) | Where in machine | Hypothesis routed to `→ TASK-048` (not a finding) |
|---|---|---|---|
| `[MECH-1]` | Implementation intention (BCTTv1 1.4; COM-B opportunity) | `U_CREATE` cue binding; `L1` | *Does binding the action to a specified cue at initiation increase early repetition vs. no cue?* |
| `[MECH-2]` | Self-monitoring + positive feedback (BCTTv1 2.3/10.4; Fogg celebration) | completion transitions; little-win `→ TASK-046` | *Does immediate completion feedback increase meaningful repeat action (not merely app opens)?* |
| `[MECH-3]` | Habit automaticity (SRBAI self-report) | `automaticityEstimate`; graduation G3 | *Does rising self-reported automaticity predict sustained behavior after prompts fade?* |
| `[MECH-4]` | Self-efficacy via scaling-down / "floor" (SDT competence; Fogg tiny habits) | `P-flr` | *Does a floor option improve perceived autonomy and keep consistency up on low-capacity days vs. all-or-nothing?* |
| `[MECH-5]` | Self-compassion / non-punitive re-entry (behavior-change recovery) | `L3 Recovering` | *Does celebrating the return (vs. loss-framing) improve the probability and speed of re-engagement after a gap?* |
| `[MECH-6]` | Autonomy support (SDT) | `U_SKIP`, plan/schedule changes, offer-not-force | *Does penalty-free skipping/adjusting improve perceived autonomy without harming consistency?* |
| `[MECH-7]` | Prompt fading / dependency-avoidance (Fogg; SDT) | `L4 Graduated` | *Does fading prompts at graduation sustain behavior better than continued prompting — and does it feel like capability, not abandonment?* |

---

## 15. Conformance test specification

Tests are specified as **Given / When / Then** and are implementation-agnostic. They divide into transition tests (`T-`), property/invariant tests (`PT-`), and persistence tests (within `T-16…T-22`). All thresholds use §11 parameters, never literals (so a calibration change re-runs the suite unchanged). This section is the normative acceptance surface for §18.

### 15.1 Transition tests (lifecycle & plan)

| ID | Given | When | Then |
|---|---|---|---|
| `T-01` | new habit in `L0` | `U_COMMIT` | state = `L1 Initiating`; schedule armed; cue bound if provided |
| `T-02` | `L1` with `cumulativeCompletions = PRM-INIT_MIN − 1` after `PRM-INIT_DUR` | one more `U_PERFORM` | promotes to `L2 Repeating`; `cumulativeCompletions` += 1 |
| `T-03` | `L1`, no completions, `PRM-INIT_DUR` elapsed | guard checked | **stays** `L1` (count gate unmet) — time alone never promotes |
| `T-04` | `L2` open window | `U_PERFORM` | `cumulativeCompletions` += 1; `currentGapLength = 0`; feedback emitted |
| `T-05` | `L2` open window | `U_SKIP` | window neutral-skipped; **no** loss-framing; progress unchanged |
| `T-06` | `L2`, `currentGapLength = PRM-GAP − 1` | `S_WINDOW_CLOSE` | `S_GAP_THRESHOLD` fires → `L3 Recovering`; progress unchanged |
| `T-07` | `L3 Recovering` (entered from `L2`) | `U_PERFORM` | returns to `L2`; `currentGapLength = 0`; `longestGapRecoveredFrom` updated; return celebrated |
| `T-08` | `L2` with §8.2 gate satisfied | `S_GRADUATION_GATE_EVAL` | graduation **offer** raised; state still `L2` |
| `T-09` | `L2` with pending offer | `U_GRADUATION_RESPONSE=accept` (gate still met) | → `L4 Graduated`; prompt cadence reduced |
| `T-10` | `L2` with pending offer | `U_GRADUATION_RESPONSE=not_yet` | stays `L2`; offer cleared; re-eval scheduled ≥ `PRM-REOFFER` |
| `T-11` | `L2` with pending offer | no response for `PRM-OFFER_TTL` | offer lapses to `PRM-OFFER_DEFAULT`; **not** graduated |
| `T-12` | `L4 Graduated`, `currentGapLength = PRM-REGRADE_GAP` | guard | return-to-support **offered**, not forced; progress intact |
| `T-13` | any living state | `U_PAUSE` then `U_RESUME` | returns to exact originating state; `currentGapLength` unchanged across pause |
| `T-14` | `L2:P-std` | `U_SET_PLAN(Floor)` | region L unchanged (`L2`); `P = P-flr`; `cumulativeCompletions` unchanged |
| `T-15` | living state | `U_RELEASE` then `U_RESTORE` within `PRM-GRACE` | returns to prior state with all progress; after grace, archived |

### 15.2 Persistence tests

| ID | Given | When | Then |
|---|---|---|---|
| `T-16` | window `k` already has a `U_PERFORM` | duplicate `U_PERFORM(windowId=k)` (retry) | deduped; `cumulativeCompletions` unchanged |
| `T-17` | window `k` already closed | redelivered `S_WINDOW_CLOSE(k)` | `currentGapLength` unchanged (idempotent) |
| `T-18` | log with N completions | `S_CLOCK_ADJUST` (tz/DST/manual) | all N completions intact, unreordered; only future windows recomputed |
| `T-19` | events queued offline on two devices | reconnect & sync | merged projection deterministic regardless of sync order |
| `T-20` | an event log | discard projection, rebuild from log | identical composite state + quantities |
| `T-21` | released habit past `PRM-GRACE` | erasure request | event log + projection removed; no shadow copy remains |
| `T-22` | log at `schemaVersion v` | migrate to `v+1`, rebuild | invariants hold; unknown fields preserved |

### 15.3 Property / invariant tests (the non-punitive guarantee)

Run over **randomly generated event sequences** (property-based); each asserts an invariant universally.

| ID | Property | Asserts |
|---|---|---|
| `PT-01` | for any sequence, `cumulativeCompletions` is non-decreasing except by a user `U_UNDO` back to its immediate prior value | `INV-1` |
| `PT-02` | no `S_` event and no `U_SKIP` ever zeroes/resets any progress quantity | `INV-2` |
| `PT-03` | completion merge is order-independent (commutative) across devices | §12.3 |
| `PT-04` | every gap/recovery-related emission carries `nonPunitive=true` and no loss-framing copy class | `INV-3` |
| `PT-05` | the machine is total: any event in any state yields a defined result (transition or logged no-op), never a crash/undefined | totality |
| `PT-06` | no merge produces a projection that violates `INV-1…INV-7`; a would-be-violating merge is rejected, not applied | §12.3 |
| `PT-07` | projection rebuilt under any supported schema version satisfies all invariants | §12.6 |
| `PT-08` | no reachable state is named/behaves as "failure"; no missed-window path reaches `L6` without an explicit `U_RELEASE` | `INV-5` |
| `PT-09` | no state action emits a diagnosis/medical-claim/treatment token | `INV-6` |
| `PT-10` | while `L5 Paused`, no `S_WINDOW_CLOSE` increments `currentGapLength` | `INV-7` |

---

## 16. Statechart diagram (illustrative — structure only)

```
  (U_CREATE)
      │
      ▼
   ┌──────┐  U_COMMIT   ┌────────────┐  [PRM-INIT_MIN over PRM-INIT_DUR]   ┌────────────┐
   │ L0   │ ──────────▶ │ L1         │ ──────────────────────────────────▶ │ L2         │
   │ Draft│             │ Initiating │                                      │ Repeating  │
   └──────┘             └─────┬──────┘                                      └──┬───┬──┬──┘
                              │ S_GAP_THRESHOLD                                │   │  │
                              ▼                                                │   │  │ U_GRADUATION_RESPONSE=accept
                        ┌───────────┐ ◀── S_GAP_THRESHOLD ─────────────────────┘   │  ▼  [gate §8.2]
                        │ L3        │                                              │ ┌────────────┐
                        │ Recovering│ ── U_PERFORM (celebrate return) ──▶ L2/L1    │ │ L4         │
                        └───────────┘                                             │ │ Graduated  │
                              ▲                                                   │ └─────┬──────┘
                              └───────────── (return offered, no stigma) ─────────┘       │
                                                   [PRM-REGRADE_GAP]  ◀──────────────────┘

   Orthogonal Plan region (adaptation), active in L1/L2/L3:
        P-std ⇄ P-flr ⇄ P-exp        (U_SET_PLAN; never changes L; never changes cumulativeCompletions)

   Cross-cutting (from any living state):
        ── U_PAUSE ─▶ L5 Paused ── U_RESUME ─▶ (originating state)
        ── U_RELEASE ─▶ L6 Released ── U_RESTORE (within PRM-GRACE) ─▶ (prior state); else archived→erasable
        ── U_UNDO (within PRM-UNDO) ─▶ revert last reversible event, same state
```

Values and shapes here are **illustrative structure only** (RULE-7); no number is asserted as evidence.

---

## 17. Interface to the render layer (`↔ TASK-045`) and `→ TASK-046`

This machine is consumed by, but independent of, the wireframe screens. The contract it exposes:

- **Read surface (for rendering):** composite state `L:P`, the four separated quantities (§5.1), `nextScheduledWindowId`, and a `nonPunitive` flag on any recovery/gap emission. The Progress screen (W6) renders consistency + cumulative; Missed Day (W7/§9 in `↔ TASK-045`) renders `Recovering`; Guided Habit (W5) renders the active plan and completion; Personal Insight (W8) may read `longestGapRecoveredFrom` to reflect resilience — **never** a health claim (`INV-6`).
- **Write surface (events fired by screens):** W2 fires `U_CREATE`; W3 fires `U_COMMIT`; W5 and the little-win (`→ TASK-046`) fire `U_PERFORM`/`U_PERFORM_PARTIAL`; W4/W5 fire `U_SKIP`/`U_SET_PLAN`; settings fire schedule/pause/release/undo events; the graduation surface fires `U_GRADUATION_RESPONSE`.
- **No rendering in this spec:** per `↔ TASK-045` RULE-1/RULE-2, completeness and accessibility of the *screens* are that spec's responsibility; this spec guarantees only that the *state and events* needed for a complete, accessible, non-punitive rendering exist and are neutral/non-color-only.

---

## 18. Independent reviewability validator

A reviewer who never met the authors can certify this machine by running the following non-compensable checks; any **REJECT** blocks approval (mirrors `prd.md` §11 "polished unsupported reports do not pass"). Each maps to an acceptance criterion (AC) or non-negotiable.

| # | Check | Pass condition | REJECT if | AC / rule |
|---|---|---|---|---|
| V1 | **States defined** | Every `L`/`P` state in §3 has meaning, entry action, invariant; set is enumerated and each state reachable+exitable (except intended post-grace `L6`). | any state undefined or unreachable | AC "states" |
| V2 | **Transitions defined** | §6 gives source/event/guard/action/target for every modeled pair; machine is total (`PT-05`). | a modeled (state,event) has undefined behavior | AC "transitions" |
| V3 | **Events defined** | §4 catalogs every `U_`/`S_` event with source, payload, reversibility. | an event fired in §6 is absent from §4 | AC "events" |
| V4 | **Persistence rules defined** | §12 specifies store, envelope, idempotency, offline/conflict, clock, privacy, versioning; tests `T-16…T-22` exist. | any persistence concern unspecified | AC "persistence rules" |
| V5 | **Tests present** | §15 gives Given/When/Then tests covering every transition + every invariant (`PT-01…PT-10`). | a transition or invariant lacks a test | AC "tests" |
| V6 | **Five phases covered** | initiation (`L1`), repetition (`L2`), adaptation (region P), graduation (`L4`+§8), recovery (`L3`+§9) each specified with states/events/tests. | any phase missing | AC "initiation…recovery" |
| V7 | **No punitive reset** | `INV-1`,`INV-2`,`INV-5` stated and tested (`PT-01`,`PT-02`,`PT-08`); no transition zeroes progress on a miss; no "failure" state. | any miss-path resets progress or reaches a failure state | AC "no punitive reset" + RULE-3 |
| V8 | **Autonomy/reversibility** | `INV-4` + reversible/undo/offer-not-force paths (§6.3, §8.3) tested (`T-11,T-13,T-15`). | a committing action is irreversible or graduation can be forced | RULE-4 |
| V9 | **Clinical boundary** | `INV-6` stated+tested (`PT-09`); no diagnosis/claim/treatment anywhere. | any health claim or inference present | RULE-5 |
| V10 | **No fabrication** | every number is a §11 `TBC` parameter with a calibration source; every mechanism is `[MECH]`-tagged + routed to `→ TASK-048`; no real user/metric/outcome. | a threshold asserted as fact (e.g. hard-coded "21 days") or any fabricated result | RULE-6/RULE-7 + CLAUDE.md §1 |
| V11 | **Clearly labeled & standalone** | header states task, status, version, owner, source basis; scope boundary (§0) fixes what is and isn't in TASK-047; doc is self-contained. | scope ambiguous or deliverable unlabeled | AC "independently reviewable, clearly labeled" |

**Acceptance-criteria crosswalk.** AC1 "specify states, transitions, events, persistence rules and tests for initiation, repetition, adaptation, graduation and recovery; no punitive reset on missed days" → V1–V8 (states §3 / transitions §6 / events §4 / persistence §12 / tests §15 / five phases §7 / non-punitive §5.3+§9). AC2 "independently reviewable, clearly labeled, no fabricated research observations or test results" → V9–V11 (clinical boundary, no-fabrication, labeling) + the §0 no-fabrication statement.

---

## 19. No-fabrication statement (restated for standalone review)

This document defines logic and tests only. It reports **no** interview, observation, usability result, retention/adherence figure, effect size, automaticity curve, or clinical outcome. Every behavioral lever is a `[MECH]` hypothesis routed to `→ TASK-048`; every number is a §11 parameter marked `TO BE CALIBRATED` against graded evidence (`↔ TASK-024`/`↔ TASK-025`); the non-punitive guarantee is expressed as machine-checkable invariants (`INV-1…INV-7`) with property tests (§15.3), not as a prose promise; and the clinical line is held by `INV-6`. The "21 days" folk figure is explicitly refused (§8.4). Nothing here asserts that this machine works, is preferred, or is understood — those are questions for `→ TASK-048`, not claims made here.

---

## 20. Change log

| Version | Date | Author (role) | Change |
|---|---|---|---|
| 0.1 | 2026-11-23 | R02 Behavioral scientist (drafting), R05/R06 co-authors | Initial specification: two-region statechart (lifecycle L0–L6 + plan region P), full event catalog (§4), transition tables (§6), four-quantity separation and seven non-punitive invariants (§5), graduation gate with 21-day-myth refusal (§8), non-punitive recovery contract (§9), adaptation/floor (§10), symbolic parameter table (§11), event-sourced persistence/sync/clock/privacy rules (§12), safety/red-team mapping (§13), `[MECH]`→TASK-048 hypotheses (§14), conformance test suite T-01…T-22 + PT-01…PT-10 (§15), statechart diagram (§16), render-layer interface (§17), and independent reviewability validator with AC crosswalk (§18). Status: `in_review`.
