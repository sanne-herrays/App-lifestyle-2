# HerRays — UX Heuristic Audit Template

**Deliverable:** TASK-019 — Create the UX heuristic audit template
**Workstream:** Experience Teardown (WS02) · UX / cognitive-walkthrough lens
**Version:** 0.1 · **Status:** Proposed — audit instrument defined, no app yet audited
**Owner (accountable role):** Senior UX/product designer (R03), under Program Director custody
**Reviewers:** UX researcher (R07) · QA/accessibility specialist (R13) · Content strategist/UX writer (R10) · Program Director
**Source basis:** `prd.md` §2 (senior UX/product designer lens: "Information architecture, cognitive walkthrough, friction" → deliverable "Annotated journey maps"; "Specialists independently audit the same core apps before cross-disciplinary reconciliation. Preserve disagreements."), §5 Phase 2 ("Record taps, time, decisions, copy, screen transitions, friction, emotion hypotheses, error states, accessibility and platform behavior … Independently commission behavioral, UX, visual/motion, growth/content, and iOS/accessibility audits for each core app, then reconcile disagreements"), §4 (Journey Library `JRN-001`; Pattern Library `PAT-001` "Good/bad pattern, examples, trade-offs, accessibility"; Evidence Library `EVD-001`; evidence grades A–D; "Grade separately for efficacy, relevance and confidence"; no-fabrication rule), §11 Gate 1/Gate 2 ("Polished unsupported reports do not pass"; "opportunities distinct from feature requests"), §13 Prompt 02 ("Act as senior UX, interaction, visual, motion, iOS and accessibility specialists … Capture direct walkthrough evidence, annotated screens, interaction counts, friction, copy, timing, accessibility and failure states … Produce journey library, five detailed teardown dossiers, pattern library, **friction catalogue** and capability inventory … Do not select final HerRays features")
**Depends on:** TASK-017 (capture bundle — the artifact this audit reads: `screen_ref`, event/tap log, timings, transition log, friction & error annotations) · TASK-016 (ten journey scripts / `JRN` records — every audited observation is anchored to a journey step and its "journey complete when" stop rule, which defines task success) · TASK-006 (`APP` registry — supplies the subject + `access_status`) · TASK-005 (`EVD` schema — an accepted audit observation promotes to an `EVD` record) · TASK-004 (evidence grading — the A–D grading and the confidence vocabulary this audit reuses, and the separate-grades rule) · TASK-003 (responsibility matrix — names the senior UX designer as accountable, R03) · TASK-008 (gap/contradiction log — unresolved audits and specialist disagreements route there)
**Feeds:** TASK-018 / TASK-020 / TASK-021 / TASK-022 (sibling specialist audits — reconciled against this one) · TASK-023 (cross-specialist reconciliation — this audit is one of five replayed on the same bundle) · the **Pattern Library** (`PAT-001`, `prd.md` §4 — good/bad UX patterns with trade-offs and accessibility notes are populated from this audit) and the **friction catalogue** (`prd.md` §13 Prompt 02) · TASK-030 / TASK-031 (capability mechanism record & five-layer worksheet — the "failure modes" and "friction" inputs come from here) · TASK-045 (eight-screen wireframe specification — the usability lessons inform the HerRays flows) · TASK-048 (concept testing — the heuristic predictions made here are what real-user testing later confirms or refutes) · TASK-008 / TASK-009 (gaps/contradictions; each `fix_hypothesis` can become an `EXP`)

---

## 0. How to read this document

TASK-017 defined **how a walkthrough is recorded** — the device/build rig, consent, timestamped frames, the tap/timing event log, screen-transition log, and the friction/error/accessibility annotations — and bundles it into a single re-openable artifact. This document defines **how the senior UX designer reads that bundle through one specific lens** — usability and the cognitive walkthrough — and converts what was captured into coded, evidence-graded, **severity-rated**, uncertainty-bounded audit observations that another designer can check.

It is a **method and a record contract**, not a dataset. It produces no findings about any app. It does five separable things:

1. **Fixes the UX frame** (§4) — the established, published instruments the auditor evaluates against (Nielsen's 10 usability heuristics; the Cognitive Walkthrough's four questions; Norman's gulfs of execution/evaluation; cognitive-load theory, Hick's and Fitts's laws; the GOMS/keystroke view of effort) and exactly how each is used so two auditors evaluating the same bundle converge.
2. **Defines the six audit dimensions** (§5) — **task success, cognitive load, navigation, error recovery, decision points, and friction measures** (the acceptance-criteria set) — each as an evaluation guide: the construct basis, the observable question, the concrete measures taken off the TASK-017 bundle, the failure modes to watch, and what a *good* vs *empty* observation looks like.
3. **Defines the `UXA` audit record** (§6) — the exact fields one audited observation produces, including the **mandatory screen reference** back to a TASK-017 frame and `JRN` step (acceptance-criteria field), the **mandatory severity rating** on a published 0–4 rubric (acceptance-criteria field), and the mandatory non-empty uncertainty note.
4. **Enforces the observation → interpretation → severity firewall** (§3, §7) — *what is on the captured frame* is an observation; *which heuristic it violates/satisfies* is an expert interpretation; *how bad it is and how many users it would likely affect* is a severity judgment; *whether it changes real user behaviour* is a hypothesis that needs real-user testing (TASK-048), never this audit.
5. **Provides the reusable instrument** (§10–§12) — a per-app audit checklist, a reviewer checklist, the audit YAML stamp, and a clearly-labelled synthetic worked example proving the record, the six dimensions, and the severity rubric run end-to-end.

> **No-fabrication statement.** This document contains **no audit findings and no usability claims about any real app.** It does not report, rate, grade, or characterise any screen, flow, tap count, timing, error state, decision point, or friction instance of Routinery, Fabulous, (Not Boring) Habits, Habitify, Griply, or any other product, because **no bundle has been audited.** Every field and vocabulary value below is a *specification of what the UX designer must evaluate and how*, never an assertion that any app does or does not do something. The published references in §4 (Nielsen; Wharton, Rieman, Lewis & Polson; Norman; Sweller; Hick; Fitts; Card, Moran & Newell) are cited as **instruments and methods the auditor consults** — their names and definitions, not any scored result for any product. **No task-success rate, time-on-task value, error count, SUS score, or NASA-TLX score is asserted anywhere.** The only populated records appear in the **clearly-labelled synthetic worked example** (§12), which audits a fictitious `APP-SYNTH-Z` using `*-SYNTH-*` identifiers solely to prove the instrument runs. Nothing here may be cited as evidence about a real product or a real person.

**Scope boundary — what this task is and is not.**
- **TASK-019 (this document) = the UX / cognitive-walkthrough lens.** It answers *"can the intended task be completed, at what cognitive and interaction cost, where does the user get lost, mislead, or stuck, how severe is each usability problem, and how confident are we — all anchored to captured evidence."*
- **It is not the capture.** Which device/build/region, how screens/taps/timings/transitions are recorded, is **TASK-017**. This audit reads that bundle; it never records a new walkthrough or audits from memory, marketing, or personal prior use.
- **It is not the journey script.** Which ten tasks are run and what counts as journey-complete is **TASK-016** — this audit *consumes* the `JRN` "journey complete when" stop rule as the definition of task success, and never invents a different goal.
- **It is not the other four lenses.** Behavioral mechanisms / BCT (TASK-018), visual & motion (TASK-020), growth & UX-writing / paywall persuasion (TASK-021), iOS native & accessibility / VoiceOver / Dynamic Type (TASK-022) are audited in those templates. Where this audit touches their territory (e.g. a confusing reward animation, paywall copy that misleads a decision, an unlabeled control) it records only the *usability* reading and cross-links; the sibling owns the sibling judgment. Overlaps are reconciled at **TASK-023**, not resolved here. (In particular: whether a control meets the 44pt target or is screen-reader-reachable is **TASK-022**; this audit records only whether the task could be *completed* and where *friction* arose.)
- **It does not measure representative task success.** A single expert walkthrough is **not** a usability test with representative users. This audit can record *the auditor's own* task outcome and observed obstacles (grade ≤ B), and *predict* likely user problems via the cognitive walkthrough (expert judgment, grade C–D); it may never state a user success rate, completion percentage, or satisfaction score — that is **TASK-026–029** (discovery) and **TASK-048** (concept testing).
- **It does not decide anything.** A usability problem is evidence and a *fix hypothesis*, not an adopted feature. Opportunity framing is **TASK-041/042** ("opportunities distinct from feature requests", `prd.md` §11); decisions are **TASK-035**. This audit "does not select final HerRays features" (`prd.md` §13 Prompt 02).

---

## 1. Purpose

A UX audit is only evidence if another designer can open the same captured bundle, apply the same heuristic frame and severity rubric, and arrive at the same findings — or disagree *in a recorded, adjudicable way*. The failure mode WS02 must prevent is the **confident design opinion**: a designer watches an onboarding, writes "Fabulous has a beautiful, intuitive, frictionless onboarding," and that sentence is laundered into the teardown dossier and the opportunity atlas as if a usability fact had been established. It establishes nothing — it is an unanchored aesthetic reaction with no frame, no severity, no screen reference, no measure, and no distinction between *the auditor found it pleasant* and *representative users can complete the task*. That path fails Gate 1/Gate 2's bar that "polished unsupported reports do not pass" (`prd.md` §11) and silently violates the PRD's requirement to produce a source-linked friction catalogue and pattern library, not impressions (`prd.md` §13 Prompt 02).

This template converts a captured experience into **anchored, grade-bounded, severity-rated, uncertainty-stamped usability observations** by guaranteeing five properties of every `UXA` record:

1. **Anchored to a screen.** Every finding points to a specific captured frame (`screen_ref`) and/or event in a TASK-017 bundle and a TASK-016 `JRN` step. "If it was not captured, it was not found" (§2, X1). The **screen reference is a mandatory field** (acceptance criteria).
2. **Layered.** The record forces four distinct statements — *what is on the frame* (observation), *which heuristic it affects* (interpretation), *how severe* (rubric-bound judgment), *what it would do to real users* (hypothesis) — and grades/scopes them separately, so "this looks hard" can never masquerade as "users fail this task" (§2, X2).
3. **Severity-rated on a published rubric.** Every finding carries a **mandatory severity** (0–4) derived from the Nielsen frequency × impact × persistence rubric (§4.5, §9), with the rating treated honestly as expert judgment pending real-user confirmation (§2, X3). **Severity is a mandatory field** (acceptance criteria).
4. **Honest about who was observed.** Each record declares whether the evidence is the *auditor's own walkthrough* (expert) or a *predicted user problem* (cognitive walkthrough), and never reports a representative success rate. The default and ceiling for a single expert session is an expert-evaluation grade, not a user-test grade (§2, X4; `prd.md` §4 "Grade separately … Do not interpret a high grade on usability as a high grade on health impact").
5. **Uncertainty-bounded.** Every record carries a non-empty uncertainty note and a controlled confidence value; banned certainty words are rejected at validation (§2, X5; §7.3).

---

## 2. Six non-negotiables (anti-fabrication & integrity guards)

These guards are structural. A `UXA` record that violates any one is rejected at validation (§11), not patched afterward.

- **X1 — No finding without a captured screen reference.** Every finding must reference a `capture_ref` + `screen_ref` (a frame id from TASK-017) and the `jrn_ref` step it occurred in (TASK-016). A measure (tap count, time, backtracks) must additionally reference the `event_ref` line(s) it is read from. Auditing from marketing copy, an App Store screenshot, a review, a competitor's blog, the auditor's memory, or prior personal use of the app is **inadmissible**. If the screen was not in the captured bundle, the correct record is a **coverage gap** (`gap_ref` → TASK-008), never a finding. *(This is the acceptance-criteria "screen reference" field made non-negotiable.)*
- **X2 — Observation ≠ interpretation ≠ severity ≠ hypothesis, and they are kept in separate fields.** "The goal screen presents 14 options on one scroll (frame 0012)" is an observation. "This likely exceeds working-memory limits → violates Nielsen H6 recognition-not-recall and Hick's law" is an interpretation. "Severity 3 (major)" is a rubric judgment. "Users will abandon goal-setting" is a hypothesis about real-user behaviour. The four live in different fields (`observed`, `heuristic_refs`/`interpretation`, `severity`, `user_impact_hypothesis`) and are graded/scoped separately. Collapsing them into one sentence is a validation failure (§6, §7.1; `prd.md` §13 Prompt 00 "Separate evidence, inference, hypothesis and invention").
- **X3 — Severity is a required, rubric-bound expert judgment — never a measured user rate.** Every finding carries a `severity` (0–4) scored against the explicit §4.5/§9 rubric (frequency × impact × persistence), plus the three component ratings so the number is reconstructable. The severity is **expert judgment** (default grade D, see §9) and must carry a `severity_basis` note; it is never presented as, or derived from, a user failure percentage, because no users were tested (X4). A finding with an empty `severity` is **incomplete** and does not pass peer review.
- **X4 — Expert walkthrough ≠ representative user success.** Each record declares `evidence_source` = `expert_walkthrough` (the auditor completed/failed the task) or `cognitive_walkthrough` (the auditor *predicts* a user problem) or `measured_interaction` (a count/timing read off the event log). None of these may be reported as a representative task-success rate, completion %, SUS/TLX score, or satisfaction figure. The single-expert task outcome caps at **grade B** for *that auditor's run* and at **C/D** for any predicted user problem; a representative rate is `n/a` until TASK-048 (`prd.md` §9 "Distinguish stated preference, usability, observed repeat behavior").
- **X5 — Uncertainty is mandatory and certainty words are banned.** `uncertainty_note` must be non-empty and name at least one real unknown (single tester, single session, no representative users, heuristic prediction not yet user-validated, device/version specificity). The controlled confidence vocabulary (§7.2) is required. The words **"intuitive", "frictionless", "seamless", "users will", "obviously", "best-in-class", "world-class"** are rejected as findings unless they appear inside a directly quoted, cited A-grade user-test source (none exists at teardown).
- **X6 — Popularity and polish are not usability, and a blocked journey is a recorded state.** Download counts, star ratings, editorial recognition, and visual polish are inadmissible as evidence that a task is usable; they may be *noted as context* but never lower a severity or raise a grade (`prd.md` §3 "popularity … is not proof"). A journey blocked by a paywall/account/region wall is recorded as `coverage: not_reached` + `gap_ref` (never guessed), distinct from a journey that was run and *failed* (`task_outcome: failed`). The two must never be conflated.

---

## 3. Where this sits in the capture → evidence chain

```
TASK-016 journey script (J1…J10, scenario SC-1…SC-6; each with a "journey complete when" stop rule = task success definition)
        │  defines which tasks are walked and what JRN step each observation sits in
        ▼
TASK-017 CAPTURE BUNDLE  (frames, tap/timing event log, screen-transition log, friction & error & a11y annotations, manifest)
        │  the single re-openable artifact (capture_ref)
        ▼
┌───────────────────────── same bundle, five independent lenses ─────────────────────────┐
│ TASK-018 behavioral   TASK-019 UX / COGNITIVE WALKTHROUGH (this doc)                      │
│ TASK-020 visual/motion   TASK-021 growth/content   TASK-022 iOS/accessibility             │
└──────────────────────────────────────────────────────────────────────────────────────┘
        │  UXA-NNN records: observed screen → heuristic interpretation → severity (0–4) → user-impact hypothesis
        │  each anchored (X1), layered (X2), severity-rated (X3), source-honest (X4)
        ▼
TASK-023 cross-specialist reconciliation  (disagreements preserved → TASK-008)
        │
        ├──► TASK-005 EVD record (type: observed; grade ≤ B for the expert run; access_date, app_version, region, limitations)
        ├──► PAT-001 Pattern Library (good/bad usability pattern, examples, trade-offs, accessibility) + friction catalogue
        ├──► TASK-030/031 Capability Mechanism Library (failure-modes + friction inputs)
        ├──► TASK-041/042 Opportunity Atlas (problems reframed as opportunities, not feature requests)
        ├──► TASK-045 wireframe spec (usability lessons inform HerRays flows)
        └──► TASK-048 concept testing (the predicted user problems are what real-user tests confirm/refute) + TASK-009 experiments
```

The senior UX designer is one of the **five specialists auditing the same captured bundle independently before reconciliation** (`prd.md` §2, §5). This audit's quality is therefore capped by the capture quality (TASK-017) and the journey coverage (TASK-016): an uncaptured screen cannot be audited, only logged as a gap; a journey blocked at capture caps what task-success evidence can exist.

---

## 4. The UX evaluation frame (five published instruments)

The auditor evaluates against established, published methods. This section fixes **how each is used** so evaluation is reproducible. These are **instruments the auditor consults**; citing them here asserts nothing about any app (No-fabrication statement, §0).

### 4.1 Nielsen's 10 usability heuristics (Nielsen & Molich, 1990; Nielsen, 1994)
The controlled vocabulary for `heuristic_refs`. The auditor tags each finding with the heuristic(s) whose *definition* the observed screen violates or satisfies:

| # | Heuristic | Primary dimension(s) |
|---|---|---|
| H1 | Visibility of system status | Navigation (D3), Task success (D1) |
| H2 | Match between system and the real world | Cognitive load (D2), Decision points (D5) |
| H3 | User control and freedom (undo/redo, exits) | Error recovery (D4), Navigation (D3) |
| H4 | Consistency and standards (incl. platform) | Navigation (D3), Cognitive load (D2) |
| H5 | Error prevention | Error recovery (D4), Decision points (D5) |
| H6 | Recognition rather than recall | Cognitive load (D2) |
| H7 | Flexibility and efficiency of use | Friction (D6), Task success (D1) |
| H8 | Aesthetic and minimalist design | Cognitive load (D2), Friction (D6) |
| H9 | Help users recognize, diagnose, and recover from errors | Error recovery (D4) |
| H10 | Help and documentation | Task success (D1), Error recovery (D4) |

> **Tagging discipline.** Tag the narrowest heuristic that fits; record **multiple** where a screen violates several; a finding may also be a *positive* satisfaction (`polarity: strength`) not only a violation (`polarity: problem`), because the Pattern Library needs good patterns too (`prd.md` §4 `PAT-001`). A heuristic tag is an **interpretation** of which principle is at stake — never, by itself, proof of user harm (that is the severity + hypothesis).

### 4.2 The Cognitive Walkthrough — the task-success lens (Wharton, Rieman, Lewis & Polson, 1994)
For each action a journey step requires, the auditor answers the four canonical questions, which structure D1/D2/D5:
1. **Will the user try to achieve the right effect?** (Is the sub-goal obvious at this point?)
2. **Will the user notice that the correct action is available?** (Is the control visible/discoverable?)
3. **Will the user associate the correct action with the effect they want?** (Is the label/affordance unambiguous?)
4. **After the action, will the user see progress toward the goal?** (Is feedback/system status visible — H1?)
A "no" at any question is a predicted task-success problem anchored to the frame where it occurs; the question number is stored in `cw_question`. This is the backbone of `evidence_source: cognitive_walkthrough`.

### 4.3 Norman's action cycle — the gulfs (Norman, 1988/2013)
- **Gulf of execution:** the gap between what the user wants and the actions the interface makes available (D1/D5/D6 — "how do I even do this?").
- **Gulf of evaluation:** the gap between the system's state and the user's ability to perceive/interpret it (D3/D4 — "did it work? where am I? what happened?").
Used to classify *where* in the action cycle a friction or failure sits, stored in `gulf`.

### 4.4 Cognitive-load & decision models (D2, D5)
- **Cognitive Load Theory (Sweller, 1988)** and **recognition-vs-recall (H6):** intrinsic vs extraneous load; the auditor flags extraneous load the UI adds (jargon, unexplained icons, forced recall across screens, dense layouts). NASA-TLX is named only as the *structured dimension set* (mental demand, effort, frustration) the auditor reasons with — **no TLX score is produced or asserted** at teardown.
- **Hick–Hyman law (choice reaction time):** decision time rises with the number/entropy of options; grounds D5 option-count measures.
- **Fitts's law (target acquisition):** time to hit a target scales with distance/size; grounds friction notes on reach/target cost (full target-size pass is TASK-022).
- **Miller (7±2) / working-memory limits:** used descriptively to flag plausibly excessive simultaneous demands — flagged as an interpretation, never a hard pass/fail number.

### 4.5 The severity rubric (Nielsen, 1995) — the mandatory rating (D-all)
Every finding carries a **0–4 severity**, computed from three expert-rated components so the number is reconstructable and adjudicable:

| Severity | Label | Meaning |
|---|---|---|
| 0 | Not a usability problem | Tagged but judged inconsequential (or a `strength`) |
| 1 | Cosmetic | Need not be fixed unless time permits |
| 2 | Minor | Low priority to fix |
| 3 | Major | High priority to fix; impedes task |
| 4 | Catastrophic | Imperative to fix; blocks task completion |

Components (each `low | med | high`, stored separately in `severity_components`):
- **Frequency** — how often users would plausibly hit it (one-off vs every session).
- **Impact** — how hard it is to overcome once hit (annoyance vs task-blocking).
- **Persistence** — whether users learn around it once (one-time vs repeatedly bothersome).

> **Honesty rule (X3).** The severity is **expert judgment** (default grade D, §9). It is a *prediction of user cost*, reconstructable from its three components and justified in `severity_basis`; it is never derived from or stated as a user failure rate. A severity of 4 is a predicted task-blocker, confirmed only by capture (the auditor's own run was blocked) or later by real-user testing (TASK-048) — the record must say which.

---

## 5. The six audit dimensions

Each dimension is an **evaluation guide**, not a questionnaire with a score. For every dimension the auditor produces **zero or more `UXA` records** (§6), one per distinct finding, each anchored to a captured frame and carrying a severity. A dimension with no captured evidence is recorded as **`coverage: not_observed`** with a `gap_ref` — never left blank and never back-filled. These six are the acceptance-criteria set: **task success, cognitive load, navigation, error recovery, decision points, friction measures.**

### D1 — Task success
*Could the task the journey defines actually be completed, and at what assist cost?*
- **Constructs:** Cognitive Walkthrough Q1–Q4 (§4.2); Norman gulf of execution (§4.3); H1 visibility of status; H7 flexibility; H10 help. **Task success is defined by the `JRN` "journey complete when" stop rule (TASK-016)** — this audit never invents a different goal.
- **Observe (from the bundle):** did the auditor reach the stop state? at which step did a cognitive-walkthrough question fail? how many assists were needed (help opened, trial-and-error taps, dead-ends hit, external knowledge required)? was a required step undiscoverable?
- **Measures:** `task_outcome ∈ {completed, completed_with_difficulty, partial, failed, not_reached}`; `assist_count`; `dead_end_count`; `blocking_step` (the `jrn_ref` + `screen_ref` where it broke).
- **Failure modes to flag:** hidden primary action; required knowledge the UI never supplies (H10); steps that cannot be completed without payment/account (route the *mechanics* here, the *persuasion* to TASK-021); irreversible wrong turns (links D4).
- **Severity:** a `failed`/blocking step at a mandatory journey step is typically 3–4; a completed-with-minor-detours step is 1–2.
- **Good vs empty:** *Good* — "J4 first-action: CW-Q2 fails at frame 0015 — the 'Start' control is below the fold and visually identical to a disabled label; auditor completed the task only after 3 exploratory taps (events t=12–19s). `task_outcome: completed_with_difficulty`; H1/H7; severity 3 (freq high / impact med / persist med)." *Empty* — "Onboarding is intuitive."

### D2 — Cognitive load
*How much working memory, interpretation, and effort does each step demand beyond the task itself?*
- **Constructs:** Cognitive Load Theory (§4.4); H6 recognition-not-recall; H2 match to real world; H8 aesthetic/minimalist; Miller 7±2.
- **Observe:** information density per screen (fields, options, simultaneous choices); jargon/unexplained icons; recall demands across screens (must remember a code/choice from an earlier screen); reading load of instructional copy (cross-link TASK-021 for tone/clarity of the *writing*; here it is the *load*); redundant or decorative elements competing with the task.
- **Measures:** `simultaneous_choices` (count on the decisive screen); `recall_spans` (places the user must carry state across screens); `new_terms` (undefined jargon/icons encountered); `steps_to_first_value` (screens before the first meaningful outcome).
- **Failure modes to flag:** choice overload; recall-across-screens; dense permission/consent walls; onboarding that front-loads configuration before any value; icon-only controls with no label.
- **Severity:** load that forces re-reading or back-navigation to resolve is ≥3; a slightly dense but learnable screen is 1–2.
- **Good vs empty:** *Good* — "Goal screen (frame 0012) presents 14 goal tiles + a search field + a 'recommended' row simultaneously → `simultaneous_choices: 14`; H6/H8; Hick's-law interpretation: decision time/abandonment risk; severity 3 (freq high / impact med / persist low)." *Empty* — "A bit busy."

### D3 — Navigation
*Can the user tell where they are, get where they want, and get back?*
- **Constructs:** H1 visibility of system status; H3 user control & freedom (back/exit); H4 consistency & standards (incl. iOS navigation norms — cross-link TASK-022 for native-correctness); Norman gulf of evaluation (§4.3); information architecture / wayfinding.
- **Observe:** orientation cues ("where am I" — titles, progress, breadcrumbs); presence and behaviour of Back/Cancel/Close; whether gestures match platform expectations; consistency of layout and labels across screens; trap states (modal with no visible dismissal); tab/section structure legibility.
- **Measures:** `backtrack_count` (how often the auditor had to reverse to orient, from the transition log); `orientation_loss_events` (moments the next step was unclear); `dead_end_count` (screens with no forward or back affordance).
- **Failure modes to flag:** modal traps with no dismissal; inconsistent back behaviour; hidden navigation; loss of place after an interruption (notification/paywall) — links D6; nonstandard gestures.
- **Severity:** a trap state with no exit is 4; inconsistent-but-recoverable navigation is 2–3.
- **Good vs empty:** *Good* — "After the paywall modal (frame 0024) dismisses, the app returns to the home tab, not the in-progress goal (transition log t=41s) → orientation loss; H1/H3; severity 3." *Empty* — "Navigation is fine."

### D4 — Error recovery
*When something goes wrong, can the user understand it and get out — without losing work?*
- **Constructs:** H5 error prevention; H9 help users recognize/diagnose/recover; H3 user control & freedom (undo); Norman gulf of evaluation; forgiveness of destructive actions.
- **Observe (requires the error/edge branches in the TASK-016 scripts — e.g. wrong input, lost connection, mistaken tap, J8 missed day, J9 changed circumstances):** error messages (present? plain-language? actionable?); reversibility (undo/confirm on destructive actions — delete goal, reset progress, cancel subscription); data loss on error; whether the app prevents the error up front (H5) vs only reports it; offline/empty/failure states.
- **Measures:** `destructive_actions_without_confirm` (count); `reversible` (bool per destructive action); `error_message_quality ∈ {plain_actionable, present_unclear, absent}`; `data_loss_observed` (bool, from the captured run only).
- **Failure modes to flag:** irreversible destructive actions with no confirmation/undo; cryptic error codes; dead ends on network failure; progress lost on a mistaken tap; punitive handling of a missed day (the *mechanics*; the behavioral shame reading is TASK-018's D6 — cross-link, don't duplicate).
- **Severity:** irreversible data loss with no warning is 4; an unclear but non-destructive error is 2–3.
- **Good vs empty:** *Good* — "Deleting a habit (frame 0031, event t=55s) removes it with no confirmation and no undo; re-adding requires full re-setup → `reversible: false`, `destructive_actions_without_confirm: 1`; H5/H3/H9; severity 4 (freq low / impact high / persist n/a)." *Empty* — "Error handling could be better."

### D5 — Decision points
*At each moment the user must choose, is the choice clear, fair, and reversible?*
- **Constructs:** Hick–Hyman law (§4.4); H2 match to real world; H5 error prevention; defaults & choice architecture; Norman gulf of execution. (Where a decision is *steered by persuasion/dark-pattern copy*, the persuasion reading is TASK-021; here it is the *decision clarity and reversibility*.)
- **Observe:** each explicit choice (goal selection, plan selection, notification opt-in, account creation, paywall choice, cancellation): number of options; what is pre-selected (default); whether the consequence of each option is stated before choosing; whether the choice is reversible/editable later; whether a non-choice (skip/not now) is available and equally findable.
- **Measures:** `option_count`; `default_option` (what is pre-selected and whether it favours the user or the vendor); `consequence_disclosed` (bool); `reversible_later` (bool); `skip_available` + `skip_equally_findable` (bool).
- **Failure modes to flag:** no "not now"/skip; pre-selected highest-cost option; consequence hidden until after commitment; irreversible choice forced early (e.g. permissions before value); false/forced binary.
- **Severity:** a forced irreversible high-cost decision with hidden consequence is 3–4; a reversible well-defaulted choice is 0–1.
- **Good vs empty:** *Good* — "Notification step (frame 0018) offers only 'Allow' as a prominent button; 'Not now' is low-contrast text → `skip_available: true`, `skip_equally_findable: false`, `default_option: allow (vendor-favouring)`; H5; severity 2 (contrast/fairness; route persuasion read → TASK-021)." *Empty* — "Standard permissions screen."

### D6 — Friction measures
*The quantified cost of getting through — the friction catalogue (`prd.md` §13 Prompt 02).*
- **Constructs:** Norman's gulfs (§4.3); H7 flexibility/efficiency; GOMS / Keystroke-Level Model (Card, Moran & Newell, 1983) as the *minimum-necessary-operations* baseline against which observed effort is compared; Fitts's law for reach cost.
- **Observe & measure (read off the TASK-017 event/timing/transition logs — these are counts of what was captured, never estimates):**
  - `taps_observed` vs `taps_minimum` (the designer's expert minimum for the task) → `tap_redundancy`.
  - `time_active_ms` and `time_wait_ms` separated (active effort vs system wait; from TASK-017 §7.3 raw intervals — no cross-session averaging).
  - `input_cost`: fields to fill, keystrokes, mandatory vs optional inputs.
  - `interruptions`: modals/permission prompts/paywalls/upsells encountered mid-task (count + the `screen_ref` of each).
  - `friction_type ∈ {input, wait, comprehension, access, interruption, navigation}` for each instance (a typed catalogue, per PRD).
- **Failure modes to flag:** high tap-redundancy for a core daily action (the "it takes 6 taps to log one thing" problem — directly relevant to HerRays' "least unnecessary effort" rule, `prd.md` §15); long unexplained waits with no status (links H1); mid-task upsell interruptions; heavy input before first value.
- **Severity:** friction on a *daily-repeated* core action (J5) weights frequency `high` and is typically ≥3; one-off setup friction is lower.
- **Good vs empty:** *Good* — "J5 log-one-activity: `taps_observed: 6`, `taps_minimum: 2`, `tap_redundancy: 4`, one mid-task upsell interruption (frame 0027) → `friction_type: [input, interruption]`; H7; severity 3 (freq high / impact med / persist high — it recurs daily)." *Empty* — "Feels a little clunky."

> **Dimension coverage rule.** A complete per-app UX audit records a result for **all six** dimensions — including explicit `coverage: not_observed` + `gap_ref` where the relevant journey (e.g. J8 for error recovery, J10 for cancellation decisions) was blocked or not run. Silently omitting a dimension is a validation failure (§11).

---

## 6. The `UXA` audit record (field contract)

One finding = one `UXA-NNN` record. Fields carry requirement markers: **M** mandatory · **C** conditional (rule stated) · **O** optional. The acceptance-criteria fields **severity** (§6.4) and **screen reference** (§6.2) are both **M**.

### 6.1 Identity & provenance
| Field | Req | Type / rule |
|---|---|---|
| `uxa_id` | M | `UXA-NNN`, immutable, one finding per id |
| `app_id` | M | → `APP-NNN` (TASK-006) |
| `dimension` | M | one or more of `D1_task_success D2_cognitive_load D3_navigation D4_error_recovery D5_decision_points D6_friction` |
| `auditor_role` | M | `senior_ux_designer` (R03); named individual in `auditor_ref` |
| `audit_date` | M | ISO date; the date the bundle was audited (not captured) |

### 6.2 Screen reference & observation link (X1 — the acceptance-criteria "screen reference" field)
| Field | Req | Type / rule |
|---|---|---|
| `capture_ref` | M | → TASK-017 bundle id |
| `screen_ref` | M | **≥1 frame id** (the acceptance-criteria screen reference). A finding with empty `screen_ref` is **invalid** (X1) — it is a `gap`, not a `UXA`. |
| `event_ref` | C | ≥1 event-log line (tap/timing/transition); **M** for any `D6` measure or any time/tap count |
| `jrn_ref` | M | → TASK-016 `JRN` step (J1…J10 + scenario) where observed |
| `observed` | M | **Observation only.** Literal description of what is on the captured frame/in the event (controls, copy verbatim, counts). No heuristic name, no severity, no "users will…". |

### 6.3 Interpretation (X2 — the usability reading, kept separate)
| Field | Req | Type / rule |
|---|---|---|
| `heuristic_refs` | M | list of Nielsen heuristics (`"H6"`, `"H3"`, …) **or** `[none]` with note. **Interpretation** of which principle is at stake. |
| `polarity` | M | `problem \| strength \| neutral` — strengths feed the good-pattern side of `PAT-001` |
| `cw_question` | C | `Q1 \| Q2 \| Q3 \| Q4` — **M** when `evidence_source: cognitive_walkthrough` (§4.2) |
| `gulf` | C | `execution \| evaluation \| n/a` — Norman classification (§4.3) |
| `interpretation` | M | prose: why the observed screen violates/satisfies the tagged heuristic(s). Explicitly an expert reading, not a measured fact. |
| `measures` | C | the dimension-specific measures from §5 (e.g. `taps_observed`, `simultaneous_choices`, `backtrack_count`); **M** for any D6 record and any D1 `task_outcome` |

### 6.4 Severity (X3 — the acceptance-criteria "severity" field)
| Field | Req | Type / rule |
|---|---|---|
| `severity` | M | integer **0–4** on the Nielsen rubric (§4.5). **Mandatory on every record.** |
| `severity_components` | M | `{frequency: low\|med\|high, impact: low\|med\|high, persistence: low\|med\|high}` — so the number is reconstructable |
| `severity_basis` | M | non-empty note justifying the rating from its components and saying whether a `4` was *captured as blocking* or *predicted* |
| `evidence_source` | M | `expert_walkthrough \| cognitive_walkthrough \| measured_interaction` (X4) |

### 6.5 Grading, hypothesis & outcome honesty (X2, X4)
| Field | Req | Type / rule |
|---|---|---|
| `observation_grade` | M | A–D for *the screen/flow/measure is as described* — single captured session caps at **B** (TASK-004; direct observation, one tester) |
| `prediction_grade` | M | A–D for *this will affect real users as hypothesised* — **defaults to D**; a cognitive-walkthrough prediction is C at most; only real-user testing (TASK-048) can raise it (`validation_ref` required) |
| `user_impact_hypothesis` | C | the predicted effect on a real user — **hypothesis**, explicitly tentative; **M** when `polarity: problem` and `severity ≥ 2` |
| `confidence` | M | controlled vocabulary (§7.2) |
| `uncertainty_note` | M | **non-empty** (X5); names ≥1 real unknown (single tester, no representative users, prediction-not-yet-tested, device/version specificity) |
| `separation_check` | M | `true` — auditor attests observation/interpretation/severity/hypothesis are not collapsed (§7.1) |

### 6.6 Linkage & next step
| Field | Req | Type / rule |
|---|---|---|
| `coverage` | C | `observed \| not_observed`; **M** `not_observed` + `gap_ref` for any dimension with no captured evidence |
| `pattern_ref` | O | → `PAT-001` Pattern Library entry this finding populates (good or bad pattern) |
| `gap_ref` | C | → TASK-008; M when `coverage: not_observed` or a blocked journey prevented auditing |
| `contradiction_ref` | O | → TASK-008 when this finding conflicts with marketing, a sibling audit, or another auditor |
| `crosslink_refs` | O | sibling-audit ids this touches (TASK-018/020/021/022) without claiming their judgment |
| `fix_hypothesis` | O | the smallest design change that would remove the problem → candidate `EXP` (TASK-009) / opportunity input (TASK-041); **never** an adopted feature |
| `status` | M | `draft \| peer_reviewed \| reconciled \| superseded` (never hard-deleted) |

---

## 7. Cross-cutting rules

### 7.1 The observation → interpretation → severity → hypothesis firewall (X2)
Every record must keep four statements physically separate:
1. **Observation** (`observed`, `measures`, `screen_ref`, `event_ref`): what is on the captured frame / in the log. Gradeable up to B.
2. **Interpretation** (`heuristic_refs`, `cw_question`, `gulf`, `interpretation`): which usability principle is at stake. Expert reading; marked as such; not gradeable above the quality of its reasoning.
3. **Severity** (`severity` + `severity_components` + `severity_basis`): rubric-bound expert judgment (grade D, §9), reconstructable, never a user rate.
4. **Hypothesis** (`user_impact_hypothesis`, `prediction_grade`): the predicted real-user effect. Default D; raised only by real-user testing (TASK-048). `separation_check: true` is the auditor's explicit attestation these four are not fused into one claim.

### 7.2 Confidence vocabulary (reused from TASK-004 §5.2)
`established` (A-grade, replicated science or representative user validation) · `likely` (B) · `indicative` (C, structured expert method such as cognitive walkthrough / heuristic eval) · `speculative` (D, judgment/analogy). A usability *observation* may be `likely`; a *predicted user impact* may not be `established`/`likely` without a `validation_ref` from real-user testing of matching grade.

### 7.3 Banned certainty language (X5)
Rejected at validation unless inside a quoted, cited A-grade user-test source (none exists at teardown): **intuitive, frictionless, seamless, effortless (as asserted fact), users will / users want, obviously, clearly best, best-in-class, world-class, delightful (as asserted user reaction)**. Replace with graded, hedged statements ("predicted to raise decision time (Hick's law); not yet user-validated — see `validation_ref`").

### 7.4 Expert eval is a prediction, not a test (X4)
Heuristic evaluation and the cognitive walkthrough are *discount usability methods* that **predict** problems cheaply and are known to both miss real problems and flag non-problems. Every predicted problem therefore carries `prediction_grade ≤ C` and an explicit note that it awaits real-user confirmation (TASK-048). The audit's value is in *finding candidate problems and patterns fast and traceably*, not in proving user impact.

### 7.5 Independence & disagreement (`prd.md` §2 "Preserve disagreements")
The UX designer audits the bundle **before** reading the sibling audits (TASK-018/020/021/022) and before reconciliation (TASK-023). Where a later sibling or a second UX auditor contradicts a `UXA` record, the disagreement is recorded as a `contradiction_ref` (TASK-008) and preserved — **never silently overwritten or averaged** (TASK-008 G2; TASK-004 "never average contradictions"). Severity disagreements in particular are preserved as competing ratings, not split-the-difference.

---

## 8. Forbidden-value & validation-failure catalogue

A record or audit is rejected if any of the following holds:

| # | Failure | Rule violated |
|---|---|---|
| V1 | `screen_ref` empty on a finding (not a `not_observed` gap) | X1 — no screen reference (acceptance-criteria field) |
| V2 | A finding, measure, or heuristic tag sourced from marketing/review/memory, not the bundle | X1 |
| V3 | `observed` contains a heuristic name, severity, or "users will…" | X2 / §7.1 |
| V4 | `severity` empty, or outside 0–4, or missing `severity_components`/`severity_basis` | X3 (acceptance-criteria field) |
| V5 | A severity presented as or derived from a user failure rate / completion % | X3 / X4 |
| V6 | A representative task-success rate, SUS, or TLX score asserted | X4 |
| V7 | `prediction_grade` > C with no real-user `validation_ref` | X4 / §7.4 |
| V8 | `uncertainty_note` empty, or uses banned certainty language | X5 / §7.3 |
| V9 | A D6 measure (taps/time) with no `event_ref` | X1 / §6.3 |
| V10 | A dimension omitted from a per-app audit with no `coverage: not_observed` + `gap_ref` | §5 coverage rule |
| V11 | A `not_reached` (blocked) journey recorded as `failed` (or vice-versa) | X6 |
| V12 | Popularity/rating/editorial/polish used to lower a severity or raise a grade | X6 |
| V13 | A contradiction with a sibling audit or a second auditor resolved by deletion/averaging | §7.5 |
| V14 | `separation_check: true` asserted but observation/interpretation/severity/hypothesis are fused | §7.1 |
| V15 | A sibling-owned judgment (a11y target size, motion timing, paywall persuasion, BCT efficacy) asserted here instead of cross-linked | §0 scope / §5 |

---

## 9. Grading & severity interlock (with TASK-004)

| What is being graded/rated | Field | Ceiling from one captured session | Raised by |
|---|---|---|---|
| The screen/flow/measure is as described | `observation_grade` | **B** (single tester, single session; → A only with multi-tester/cross-session corroboration) | repeated independent captures |
| Which usability principle is at stake | (interpretation, not A–D) | quality-of-reasoning only | — |
| How severe the problem is (0–4) | `severity` | **expert judgment (grade D)**, rubric-bound & reconstructable | real-user testing (TASK-048) can confirm/revise |
| It will affect real users as hypothesised | `prediction_grade` | **D** (C for a structured cognitive-walkthrough prediction) | real-user testing (TASK-048) + `validation_ref` |

This operationalises `prd.md` §4: "Grade separately for efficacy, relevance and confidence … Do not interpret a high grade on usability as a high grade on health impact," and `prd.md` §9's ladder "Distinguish stated preference, usability, observed repeat behavior and long-term change." A perfectly-captured, clearly-reasoned usability finding can sit at `observation_grade: B`, `severity: 4`, `prediction_grade: D` — and that is the correct, honest state for most teardown findings: *we clearly saw this, we judge it serious, and we have not yet proven what it does to real users.*

---

## 10. Per-app UX audit checklist (the reusable instrument)

Run once per core app, against its captured bundle set.

**Pre-audit**
- [ ] Bundle(s) received from TASK-017; `app_version`, `region`, `access_status` readable from the manifest.
- [ ] Journey coverage confirmed: which of J1–J10 are present; error/edge branches (J8 missed day, J9 changed circumstances, J10 cancellation) present or the relevant dimension logged as `not_observed` + `gap_ref`.
- [ ] Evaluation frame loaded (§4): Nielsen's 10, the four cognitive-walkthrough questions, the §4.5 severity rubric.
- [ ] The `JRN` "journey complete when" stop rule read for each journey (defines D1 task success).

**Audit (per dimension D1–D6)**
- [ ] Walk the captured frames in order; for each finding create a `UXA` record anchored to a `screen_ref` (X1) — and `event_ref` for any count/timing (V9).
- [ ] Write a literal `observed`; keep interpretation/severity/hypothesis in separate fields; set `separation_check` (X2).
- [ ] Tag `heuristic_refs` + `polarity`; set `cw_question`/`gulf` where applicable (§4).
- [ ] Record the dimension's `measures` (§5) off the event/transition log (D6 especially: taps vs minimum, active vs wait time, interruptions).
- [ ] Assign `severity` 0–4 with `severity_components` + `severity_basis`; set `evidence_source` (X3/X4).
- [ ] Grade `observation_grade` (≤ B) and `prediction_grade` (≤ C) (§9); write `user_impact_hypothesis` for problems ≥ severity 2.
- [ ] Write a non-empty `uncertainty_note`; no banned words (X5, §7.3).
- [ ] Record `coverage: not_observed` + `gap_ref` for any dimension without captured evidence (§5); keep `not_reached` distinct from `failed` (X6).

**Post-audit**
- [ ] Populate `PAT-001` Pattern Library entries (good and bad patterns, with trade-offs + accessibility cross-link to TASK-022) and the friction catalogue.
- [ ] Draft `fix_hypothesis` for each high-severity finding → opportunity input (TASK-041) / candidate `EXP` (TASK-009) — **not** an adopted feature.
- [ ] Peer review by a second UX designer (or reviewer R07/R13) → `status: peer_reviewed`.
- [ ] Hold for TASK-023 reconciliation; preserve disagreements as `contradiction_ref` (§7.5).
- [ ] Promote accepted records to `EVD` (TASK-005) with `access_date`, `app_version`, `region`, `limitations`.

**Validation gate** — run §8 V1–V15; any hit blocks the audit (Gate 1/Gate 2, `prd.md` §11).

---

## 11. Reviewer checklist (sign-off)

- [ ] Every finding has a `screen_ref` (no V1/V2); every D6 measure has an `event_ref` (no V9).
- [ ] Observation / interpretation / severity / hypothesis separated in every record (no V3/V14).
- [ ] Every record has a severity 0–4 with components + basis (no V4); no severity derived from or stated as a user rate (no V5).
- [ ] No representative success rate / SUS / TLX asserted (no V6); no `prediction_grade` > C without real-user `validation_ref` (no V7).
- [ ] Every record has a non-empty, certainty-word-free uncertainty note (no V8).
- [ ] All six dimensions resolved (audited or `not_observed` + gap) (no V10); `not_reached` never recorded as `failed` (no V11).
- [ ] Popularity/polish never used to move a severity or grade (no V12); contradictions preserved, not averaged (no V13).
- [ ] No sibling-owned judgment (a11y/motion/persuasion/BCT-efficacy) asserted here instead of cross-linked (no V15).
- [ ] No fabricated observation, measure, rate, score, or quote anywhere.

---

## 12. Synthetic worked example — ILLUSTRATIVE (synthetic)

> **SYNTHETIC — proves the instrument runs; asserts nothing about any real app.** `APP-SYNTH-Z` is a fictitious app; all `*-SYNTH-*` ids are fictitious; all frames/events are fictitious. These records exist only to show the six dimensions, the severity rubric, and the `UXA` contract working end-to-end. They are not evidence.

### 12.1 `UXA-SYNTH-001` — D1 Task success + D2 cognitive load (choice overload at goal-setting)
```yaml
uxa_id: UXA-SYNTH-001
app_id: APP-SYNTH-Z
dimension: [D1_task_success, D2_cognitive_load]
auditor_role: senior_ux_designer            # auditor_ref: [SYNTHETIC]
audit_date: 2026-11-22
# --- screen reference & observation link (X1) ---
capture_ref: BUNDLE-SYNTH-Z-J03
screen_ref: [FR-SYNTH-0012]
event_ref: [EV-SYNTH-0012-scroll, EV-SYNTH-0019-goal_select]
jrn_ref: [J3-personalization]
observed: >
  Goal-selection screen presents 14 goal tiles, a search field, and a
  "recommended" row simultaneously on first load (FR-0012). The auditor
  scrolled twice and made the selection at t=00:22 after 3 taps. (Literal;
  no heuristic/severity/outcome words.)
# --- interpretation (X2) ---
heuristic_refs: ["H6", "H8"]
polarity: problem
cw_question: Q1                              # "will the user try to achieve the right effect" — sub-goal unclear amid options
gulf: execution
interpretation: >
  14 simultaneous choices plus search plus a recommended row plausibly exceed
  comfortable working memory (Miller) and raise decision time (Hick–Hyman);
  recognition-not-recall (H6) and minimalist design (H8) are strained. Expert
  reading, not a measured fact.
measures: {simultaneous_choices: 14, recall_spans: 0, new_terms: 2, task_outcome: completed_with_difficulty, assist_count: 0}
# --- severity (X3) ---
severity: 3
severity_components: {frequency: high, impact: med, persistence: low}
severity_basis: >
  Every new user hits this screen (freq high); it slows but does not block the
  task (impact med); users likely learn the layout after once (persist low) ->
  major (3). PREDICTED, not captured-as-blocking (auditor completed the task).
evidence_source: cognitive_walkthrough
# --- grading / hypothesis (X2, X4) ---
observation_grade: B                         # directly observed layout, single session
prediction_grade: C                          # structured cognitive-walkthrough prediction
user_impact_hypothesis: >
  Hypothesis: a subset of users may abandon or mis-select during goal-setting;
  requires real-user testing (TASK-048) to confirm. Not demonstrated here.
confidence: indicative
uncertainty_note: >
  Single auditor, single session on build [SYNTHETIC]. No representative users;
  heuristic/CW prediction not user-validated. Device/version specific.
separation_check: true
# --- linkage / next step ---
coverage: observed
pattern_ref: PAT-SYNTH-004                   # bad pattern: choice overload at setup
gap_ref: null
contradiction_ref: null
crosslink_refs: []                           # copy tone -> TASK-021 if the labels are the issue
fix_hypothesis: >
  Progressive disclosure (3-5 recommended goals first, "see all" secondary) may
  reduce decision load -> opportunity input (TASK-041) / candidate EXP (TASK-009).
status: peer_reviewed
```

### 12.2 `UXA-SYNTH-002` — D4 Error recovery (irreversible destructive action)
```yaml
uxa_id: UXA-SYNTH-002
app_id: APP-SYNTH-Z
dimension: [D4_error_recovery]
auditor_role: senior_ux_designer
audit_date: 2026-11-22
capture_ref: BUNDLE-SYNTH-Z-J05
screen_ref: [FR-SYNTH-0031, FR-SYNTH-0032]
event_ref: [EV-SYNTH-0031-delete_tap, EV-SYNTH-0032-item_removed]
jrn_ref: [J5-normal-daily]
observed: >
  Tapping the trash icon on a habit row (FR-0031) removes the habit immediately
  (FR-0032); no confirmation dialog and no undo affordance appeared in the
  captured frames or event log within 10s after removal.
heuristic_refs: ["H5", "H3", "H9"]
polarity: problem
cw_question: null
gulf: evaluation
interpretation: >
  Destructive action without confirmation or undo violates error prevention (H5)
  and user control & freedom (H3); recovery help (H9) absent. A mistaken tap
  loses the item and its history.
measures: {destructive_actions_without_confirm: 1, reversible: false, error_message_quality: absent, data_loss_observed: true}
severity: 4
severity_components: {frequency: low, impact: high, persistence: n/a}
severity_basis: >
  Hit infrequently (freq low) but when hit it is unrecoverable and loses user
  data (impact high) -> catastrophic (4). CAPTURED-as-blocking for the deleted
  item (the auditor's own run lost the item), not merely predicted.
evidence_source: expert_walkthrough
observation_grade: B
prediction_grade: D
user_impact_hypothesis: >
  Hypothesis: accidental deletions will cause data loss and frustration for real
  users; magnitude needs real-user testing (TASK-048).
confidence: likely                           # the observation (no confirm/undo) is likely; impact magnitude is not
uncertainty_note: >
  Single session; undo might exist elsewhere (e.g. shake-to-undo) and not have
  been captured -> re-check in a targeted capture. No representative users.
separation_check: true
coverage: observed
pattern_ref: PAT-SYNTH-009                   # bad pattern: unguarded destructive action
gap_ref: null
contradiction_ref: null
crosslink_refs: []
fix_hypothesis: >
  Add a confirm step or a 5s undo snackbar on delete -> candidate EXP (TASK-009).
status: peer_reviewed
```

### 12.3 `UXA-SYNTH-003` — D5 Decision points (cancellation flow not reached; honest gap)
```yaml
uxa_id: UXA-SYNTH-003
app_id: APP-SYNTH-Z
dimension: [D5_decision_points, D6_friction]
auditor_role: senior_ux_designer
audit_date: 2026-11-22
capture_ref: BUNDLE-SYNTH-Z-J10
screen_ref: []                               # none — the flow was never reached
event_ref: []
jrn_ref: [J10-paywall-cancellation]
observed: >
  coverage: not_reached — the J10 cancellation flow could not be exercised: the
  subscription required a real payment method the capture rig does not use, so
  the post-purchase cancellation screens were never reached (barrier captured in
  the TASK-017 bundle as a blocked step).
heuristic_refs: [none]
polarity: neutral
cw_question: null
gulf: n/a
interpretation: "n/a — not reached; no decision-point evaluation possible"
measures: {}
severity: 0                                  # cannot rate an unobserved flow; 0 + basis, not blank
severity_components: {frequency: n/a, impact: n/a, persistence: n/a}
severity_basis: >
  Severity not assessable — flow not reached. Recorded as 0 with this basis
  rather than left blank (V4). Do NOT infer cancellation friction from reviews.
evidence_source: measured_interaction        # the block itself is what was observed
observation_grade: B                         # the block is directly observed
prediction_grade: D
user_impact_hypothesis: "n/a — cannot hypothesise without captured evidence"
confidence: speculative
uncertainty_note: >
  Cancellation/decision flow unobserved (payment-method block). Known industry
  risk area (dark patterns) but NOT evidenced here; re-attempt with a payment
  method in a later capture. Persuasion read would be TASK-021 once reached.
separation_check: true
coverage: not_observed
gap_ref: GAP-SYNTH-021                        # -> TASK-008 coverage gap
contradiction_ref: null
crosslink_refs: [TASK-021]                    # paywall persuasion lens owns this once reached
fix_hypothesis: null
status: draft
```

### 12.4 Validation trace (why these pass §8)
- **V1/V2:** 001 and 002 carry `screen_ref` frames from the bundle; 003 honestly has empty `screen_ref` **because** it is a `not_observed`/`not_reached` gap (not a finding) with a `gap_ref`. ✔
- **V3/V14:** `observed` in each is literal; heuristics/severity/hypotheses live in their own fields; `separation_check: true`. ✔
- **V4:** every record has `severity` 0–4 with `severity_components` + `severity_basis` — including 003 which records 0 + a basis rather than blank. ✔
- **V5/V6:** no severity is derived from a user rate; no success %, SUS, or TLX asserted anywhere. ✔
- **V7:** all `prediction_grade ≤ C`, no `validation_ref` claimed. ✔
- **V8:** every `uncertainty_note` non-empty, no banned words. ✔
- **V9:** D6/measured records carry `event_ref` (001, 002); 003's D6 is `not_reached`. ✔
- **V10/V11:** this synthetic set shows D1/D2, D4 audited and D5/D6 resolved as `not_reached` + gap — `not_reached` is kept distinct from `failed`. ✔
- **V12/V15:** no popularity/polish used; persuasion (TASK-021) and any a11y/motion reads are cross-linked, not asserted. ✔

---

## 13. Dependencies, open unknowns & change log

**Consumes:** TASK-017 (bundle) · TASK-016 (`JRN` + stop rules = task-success definition) · TASK-006 (`APP`) · TASK-005 (`EVD`) · TASK-004 (grading/confidence) · TASK-003 (R03 accountable).
**Feeds:** TASK-018/020/021/022 (sibling audits) · TASK-023 (reconciliation) · `PAT-001` Pattern Library + friction catalogue · TASK-030/031 (capability failure-modes/friction) · TASK-041/042 (opportunities, not feature requests) · TASK-045 (wireframe spec) · TASK-048 (concept testing confirms/refutes predictions) · TASK-008/009 (gaps/contradictions/experiments).

**Open unknowns (carried, not resolved here):**
- **U1** — Which usability problems and patterns recur across the five core apps is unknown until auditing is done (no data invented).
- **U2** — The severity rubric is calibrated by expert judgment; inter-rater severity agreement is unknown until a second UX auditor is staffed (needed to lift `observation_grade` above B and to report severity agreement).
- **U3** — The audit assumes error/edge/cancellation captures (J8/J9/J10) are available; where blocked by paywall/account/region walls (TASK-017 C4), D4/D5/D6 coverage is a documented `not_reached` gap, not a finding (X6).
- **U4** — Every predicted user impact (`prediction_grade ≤ C`) awaits real-user testing (TASK-048); heuristic/cognitive-walkthrough methods predict problems but do not measure them (§7.4).
- **U5** — The expert "minimum taps" baseline for `tap_redundancy` (D6) is itself a judgment; it must be stated per task and is open to peer challenge at reconciliation.

**Change log:** v0.1 (2026-11-22) — initial UX heuristic audit template; six dimensions (task success / cognitive load / navigation / error recovery / decision points / friction measures), Nielsen-heuristic + cognitive-walkthrough frame, mandatory `screen_ref` and `severity` (0–4) fields, observation→interpretation→severity→hypothesis firewall, `UXA` record contract, synthetic worked example. No app audited.
```