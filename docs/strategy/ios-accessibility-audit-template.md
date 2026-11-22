# HerRays — iOS & Accessibility Audit Template

**Deliverable:** TASK-022 — Create the iOS and accessibility audit template
**Workstream:** Experience Teardown (WS02) · iOS-engineering + QA/accessibility lenses
**Version:** 0.1 · **Status:** Proposed — audit instrument defined, no app yet audited
**Owner (accountable roles, lens-split):** iOS engineer (R05) accountable for the **iOS lens** (T9a: native platform behaviors, offline use & resilience, performance & reliability, interaction-target sizing); QA/accessibility specialist (R13) accountable for the **accessibility lens** (T9b: VoiceOver, Dynamic Type, contrast, failure states). Split defined in TASK-003 §5.2 (activity T9a/T9b) and reconciled into one audit at TASK-023 (T10). Program Director custody.
**Reviewers:** QA/accessibility specialist (R13) cross-reviews the iOS lens and the accessibility lens cross-reviews with iOS engineer (R05) — mutual lens cross-check per TASK-003 T9a/T9b · Backend engineer (R06, offline/sync-failure and data-loss correctness, T9a reviewer) · Senior UX/product designer (R03, reconciliation T10; error-*recovery* usability stays TASK-019) · Clinical reviewer (R14) / Privacy-regulatory reviewer (R15) **only** where an accessibility failure sits on a health-data or consent surface · Program Director. **Accessibility is a non-compensable mandatory gate** (`prd.md` §9/§11); this audit is the primary evidence feed for that gate (TASK-033 accessibility check; TASK-048 §/V2 accessibility validation).
**Source basis:** `prd.md` §2 (iOS engineer lens: "Native interactions, HealthKit, widgets, performance" → deliverable "iOS feasibility audit"; QA/accessibility specialist lens: "VoiceOver, dynamic type, failure states, reliability" → deliverable "Quality/accessibility audit"; "Specialists independently audit the same core apps before cross-disciplinary reconciliation. Preserve disagreements."), §3 (core five; "popularity … is not proof"), §5 Phase 2 ("Record taps, time, decisions, copy, screen transitions, friction, emotion hypotheses, **error states, accessibility and platform behavior** … Independently commission behavioral, UX, visual/motion, growth/content, and **iOS/accessibility** audits for each core app, then reconcile disagreements"), §4 (Pattern Library `PAT-001` "Good/bad pattern, examples, trade-offs, **accessibility**"; Evidence Library `EVD-001`; grades A–D; "Grade separately for efficacy, relevance and confidence"; no-fabrication rule), §9/§11 (accessibility a **mandatory, non-compensable gate**, not a weighted score; Gate 1/Gate 2 "Polished unsupported reports do not pass"), §13 Prompt 02 ("Act as senior UX, interaction, visual, motion, iOS and **accessibility** specialists … Capture direct walkthrough evidence … accessibility and failure states … Distinguish real observations from marketing screenshots or secondary material. Do not select final HerRays features"), §13 Prompt 05 (iOS/backend architecture — feasibility is **TASK-039/037**, not this teardown)
**Depends on:** TASK-017 (capture bundle — the artifact this audit reads: frames, screen-transition log, per-frame timestamps, friction/error annotations, device/OS/build manifest, and — critically for this audit — any **VoiceOver-enabled pass**, **largest-Dynamic-Type (AX5) pass**, **Reduce-Motion pass**, and **offline / airplane-mode pass**) · TASK-016 (ten journey scripts / `JRN` records — every audited screen/interaction is anchored to a journey step; J8 "missed day/recovery" and J-level error paths matter for failure states) · TASK-006 (`APP` registry — supplies the subject, `platform`, `app_version`, `access_status`) · TASK-005 (`EVD` schema — an accepted audit observation promotes to an `EVD` record) · TASK-004 (evidence grading — the A–D scale, the confidence vocabulary, and the separate-grades rule) · TASK-003 (responsibility matrix — names R05/R13 as the lens-split accountable owners; R06 reviewer) · TASK-008 (gap/contradiction log — uncaptured AT passes, un-reached offline/failure paths, un-instrumentable performance, and specialist disagreements route there)
**Feeds:** TASK-018 / TASK-019 / TASK-020 / TASK-021 (sibling specialist audits — reconciled against this one; this audit owns the **formal** verdicts they defer: WCAG contrast ratios, VoiceOver, Dynamic-Type scaling correctness, 44pt targets, native-behavior/offline/performance, and — co-owned with TASK-020 — the formal WCAG 2.3.3/2.2.2 reduced-motion conformance verdict) · TASK-023 (cross-specialist reconciliation — this audit's two lenses are two of the five replayed on the same bundle) · the **Pattern Library** (`PAT-001`, `prd.md` §4 — good/bad native & accessibility patterns with trade-offs) and the **"Quality/accessibility audit"** + **"iOS feasibility audit"** deliverables (`prd.md` §2) · TASK-033 (capability **accessibility safety gate** — a catastrophic accessibility failure becomes an anti-pattern blocker) · TASK-039 (iOS capability & integration inventory — what a competitor *does natively* here informs, but never substitutes for, HerRays' **build** feasibility decision there) · TASK-040 (privacy/clinical boundary — where an accessibility failure exposes a health-data or consent surface) · TASK-030 / TASK-031 (capability mechanism records — a native or accessibility pattern + its caution) · TASK-045 (eight-screen wireframe spec — the accessibility & native-behavior rules here become the HerRays non-negotiable spec; R13 reviews TASK-045) · TASK-046 ("Your Little Win Today" microinteraction — its VoiceOver/Dynamic-Type/reduced-motion/44pt fallbacks must satisfy this audit's criteria) · TASK-048 / V2 (accessibility validation — the only place a **real assistive-technology user's** experience is evidenced; this audit never claims it) · TASK-008 / TASK-009 (gaps/contradictions; each `fix_hypothesis` can become an `EXP`)

---

## 0. How to read this document

TASK-017 defined **how a walkthrough is recorded** — the device/OS/build rig, consent, timestamped frames, the screen-transition log, the friction/error annotations, and (for this audit) the specialised capture passes: VoiceOver on, Dynamic Type at the largest accessibility size, Reduce Motion on, and an offline/airplane-mode pass. This document defines **how the iOS engineer and the QA/accessibility specialist each read that bundle through their lens** — native platform fit, offline resilience, performance/reliability and interaction-target sizing (R05); and VoiceOver exposure, Dynamic-Type scaling, colour/non-text contrast and failure-state handling (R13) — and convert what was captured into coded, evidence-graded, **severity-rated** and (for accessibility) **formally-verdicted**, uncertainty-bounded audit observations that another engineer or accessibility specialist can re-check.

It is a **method and a record contract**, not a dataset. It produces no findings about any app. It does five separable things:

1. **Fixes the iOS & accessibility frame** (§4) — the established, published standards and engineering budgets the auditors evaluate against (Apple **Human Interface Guidelines** — native navigation patterns, gestures, system affordances, the **44×44 pt** minimum hit target; the Apple **UIKit/SwiftUI Accessibility** model — label/role/value/traits/hints, focus order, the rotor, Dynamic Type text styles; **WCAG 2.1/2.2** success criteria — 1.4.3 Contrast (Minimum), 1.4.11 Non-text Contrast, 1.4.4 Resize Text, 1.3.1 Info & Relationships, 4.1.2 Name/Role/Value, 2.5.5/2.5.8 Target Size, 2.3.3/2.2.2 motion, 1.3.4 Orientation, 2.4.7 Focus Visible; the **Doherty ~400 ms** and **60 fps / 16.7 ms frame-budget** performance bands and the iOS launch-watchdog; and resilience/graceful-degradation engineering principles for offline) and exactly how each is used so two auditors evaluating the same bundle converge.
2. **Defines the eight audit dimensions** (§5) — the acceptance-criteria set, grouped by lens: **iOS** — D1 native platform behaviors, D2 offline use & resilience, D3 performance & reliability, D4 interaction-target sizing; **Accessibility** — D5 VoiceOver, D6 Dynamic Type, D7 contrast, D8 failure states — each as an evaluation guide with its construct basis, observable question, the concrete measures and **test method** taken off the TASK-017 bundle, the failure modes to watch, and what a *good* vs *empty* observation looks like.
3. **Defines the `IAA` audit record** (§6) — the exact fields one audited observation produces, including the **mandatory evidence anchor** back to a TASK-017 frame/interaction/pass and a `JRN` step, the **mandatory `test_method`** (the acceptance-criteria "include test method" field), the **mandatory `severity`** (the acceptance-criteria "severity" field), the mandatory `auditor_lens` (ios | accessibility), the per-SC **formal `conformance_verdict`** for accessibility findings (kept distinct from severity), and the mandatory non-empty uncertainty note.
4. **Enforces the observation → interpretation → verdict/severity → user-impact firewall** (§3, §7) — *what the captured frame / timing log / AT pass shows* is an observation; *which HIG/WCAG/engineering standard it meets or breaks* is an interpretation and (for a WCAG SC) a **formal pass/fail/cannot-verify verdict**; *how severe* is a rubric-bound severity judgment; *how it affects a real disabled user or a real user offline/under load* is a hypothesis awaiting real-assistive-technology-user testing (TASK-048/V2), never asserted by this audit.
5. **Provides the reusable instrument** (§10–§12) — a per-app audit checklist, a reviewer checklist, the audit YAML stamp, and a clearly-labelled synthetic worked example proving the record, the eight dimensions, the severity rubric, and the conformance verdict run end-to-end.

> **No-fabrication statement.** This document contains **no audit findings and no iOS, platform, performance, offline, or accessibility claims about any real app.** It does not report, measure, grade, verdict, or characterise any native behavior, launch time, frame rate, offline behavior, contrast ratio, hit-target size, VoiceOver label, Dynamic-Type scaling, or failure state of Routinery, Fabulous, (Not Boring) Habits, Habitify, Griply, or any other product, because **no bundle has been audited.** Every field and vocabulary value below is a *specification of what the auditors must evaluate and how*, never an assertion that any app does or does not do something. The standards named in §4 (Apple Human Interface Guidelines; Apple UIKit/SwiftUI Accessibility documentation; WCAG 2.1 and 2.2 and their success criteria; the Doherty threshold; Nielsen response-time limits; the 60 fps frame budget) are cited as **instruments and methods the auditors consult** — their names and definitions, not any scored result for any product. **No measured launch time, frame rate, contrast ratio, target size, WCAG pass/fail, VoiceOver verdict, or Dynamic-Type result is asserted anywhere.** The only populated records appear in the **clearly-labelled synthetic worked example** (§12), which audits a fictitious `APP-SYNTH-Z` using `*-SYNTH-*` identifiers solely to prove the instrument runs. Nothing here may be cited as evidence about a real product or a real person — including any disabled person.

**Scope boundary — what this task is and is not.**
- **TASK-022 (this document) = the iOS-engineering + QA/accessibility lenses.** It answers *"does the app behave like a correct native iOS app; does it degrade gracefully offline; is it fast and reliable; are its tap targets adequately sized; is it operable with VoiceOver; does it scale under the largest Dynamic Type; does its text and UI meet the formal contrast ratios; and does it handle failure states safely — all anchored to captured evidence, with a test method and a severity for each finding."*
- **It is not the capture.** Which device/OS/build/region, how frames/timings are recorded, and — critically — **whether a VoiceOver / largest-Dynamic-Type / Reduce-Motion / offline pass was captured**, is **TASK-017**. This audit reads that bundle; it never records a new walkthrough and never audits from memory, marketing art, App Store screenshots, a spec sheet, or personal prior use.
- **It is not the journey script.** Which ten tasks are run is **TASK-016** — this audit anchors every observation to a `JRN` step and never invents a flow that was not captured.
- **It owns the formal verdicts the sibling audits defer to it.** TASK-020 evaluates *perceptual* hierarchy and *type-system coherence* and the motion-*design* reading of reduced motion, and explicitly routes the **formal WCAG colour-contrast ratio, VoiceOver labelling/reachability, Dynamic-Type scaling correctness, 44pt target sizing, and the formal WCAG 2.3.3/2.2.2 conformance verdict here.** TASK-019 owns error-*recovery usability* (can a user understand and get out of an error); **this audit owns the failure-*state* reliability/correctness** (does the app lose data, silently fail, or expose a technical/unsafe state). The reduced-motion WCAG 2.3.3/2.2.2 verdict is **co-owned with TASK-020** (TASK-020 gives the motion-design reading; this audit gives the formal conformance verdict); neither asserts the other's judgment. Overlaps are reconciled at **TASK-023**, not resolved here.
- **It is a teardown of competitor apps, not HerRays feasibility.** Observing that a competitor exposes a good VoiceOver flow, or ships an offline mode, is an **observation about that app**. Whether *HerRays* should build HealthKit, widgets, Live Activities, haptics, or an offline sync layer — and at what cost/complexity — is **TASK-039** (iOS capability & integration inventory) and **TASK-037** (build/buy/integrate/defer). This audit *feeds* those with evidence; it never makes the build decision and never records a HerRays capability as "done."
- **It does not measure a representative disabled user's experience.** An auditor operating VoiceOver, enabling the largest Dynamic Type, or turning on Reduce Motion is observing **the app's output** — it is a *structured expert observation of the rendered accessibility tree / scaled layout*, **not** evidence of how a blind, low-vision, motor-impaired, or vestibular-sensitive person actually experiences the app. That is a **hypothesis** awaiting real-assistive-technology-user testing (TASK-048 / V2 accessibility validation). This audit may never state that the app "is accessible," "works for blind users," or "is WCAG compliant" as a blanket claim.
- **It does not decide anything.** An accessibility or platform defect is evidence and a *fix hypothesis*, not an adopted feature. Opportunity framing is **TASK-041/042**; decisions are **TASK-035**; the accessibility *gate* verdict is owned by R13 at the gate (TASK-033), fed by — not decided inside — this audit. This audit "does not select final HerRays features" (`prd.md` §13 Prompt 02).

---

## 1. Purpose

An iOS or accessibility audit is only evidence if another engineer or accessibility specialist can open the same captured bundle, apply the same standard and the same test method, and arrive at the same verdict — or disagree *in a recorded, adjudicable way*. The failure mode WS02 must prevent is the **confident competence claim**: an auditor swipes through an onboarding, writes "Fabulous feels fast and is fully accessible," and that sentence is laundered into the teardown dossier and the opportunity atlas as if a performance measurement and a WCAG conformance result had been established. It establishes nothing — it is an unanchored impression with no device/OS context, no measured launch time or frame rate, no VoiceOver pass, no contrast ratio, no Dynamic-Type pass, and no distinction between *the app rendered an accessibility label* and *a blind person can complete the task*. Worse, it is the exact class of claim that can cause real harm: declaring an experience "accessible" when a core daily action is unreachable by VoiceOver, or "works offline" when it silently discards the user's logged data on reconnect, is a false-safety claim. Because **accessibility is a non-compensable mandatory gate** (`prd.md` §9/§11), a laundered "it's accessible" is more dangerous than any aesthetic opinion. That path fails Gate 1/Gate 2's bar that "polished unsupported reports do not pass" (`prd.md` §11).

This template converts a captured experience into **anchored, standard-referenced, test-method-stated, severity-rated, uncertainty-stamped iOS & accessibility observations** by guaranteeing six properties of every `IAA` record:

1. **Anchored to captured evidence.** Every finding points to a specific captured frame (`screen_ref`), interaction/transition (`interaction_ref`), timing interval (`timing_ref`), or **assistive-technology pass** (`at_pass_ref` — the VoiceOver / Dynamic-Type / Reduce-Motion / offline capture) in a TASK-017 bundle, plus a TASK-016 `JRN` step. "If the relevant pass was not captured, it was not audited — it is a gap" (§2, X1/X6). The **evidence anchor is a mandatory field.**
2. **Layered.** The record forces four distinct statements — *what the frame / timing / AT pass shows* (observation), *which HIG/WCAG/engineering standard is served or broken* (interpretation + formal verdict), *how severe* (rubric-bound severity), *what it does to a real user offline / under load / using assistive technology* (hypothesis) — and grades/scopes them separately (§2, X2).
3. **Stated with a test method.** Every finding records the **`test_method`** actually used (e.g. "VoiceOver swipe-through of J5, rotor on; recorded the spoken label/trait for each control"; "contrast sampled from the un-recompressed capture frame at the stated pixel coordinates with a WCAG contrast formula"; "cold-launch time measured from app-icon tap to first interactive frame off the timestamp log"). **`test_method` is a mandatory field** (acceptance criteria: "include test method").
4. **Rated for severity — and, for WCAG, verdicted separately.** Every finding carries a **mandatory `severity`** (0–4, §4.8) *and*, for any WCAG success criterion, a **formal `conformance_verdict`** (`pass | fail | partial | cannot_verify`) kept in a separate field — because a criterion can *fail* at low severity or be *cannot-verify* at high stakes (§2, X3). **Both are mandatory where applicable** (acceptance criteria: "severity").
5. **Honest about measurement vs. structured reading vs. assistive-tech observation.** Each record declares `evidence_source ∈ {measured, structured_expert, at_observation}`. A measured value (launch ms, fps, contrast ratio, hit-target pt) caps at **B** from one capture; a structured expert reading caps at **C**; an `at_observation` (what VoiceOver spoke, what the layout did at AX5) is a structured observation of app output — **never** a statement about a disabled user's lived experience, which stays a hypothesis (§2, X4).
6. **Uncertainty-bounded and single-device-honest.** Every record carries a non-empty uncertainty note naming at least the single-device/single-OS/single-build limit; banned blanket-conformance words are rejected at validation (§2, X5; §7.3).

---

## 2. Seven non-negotiables (anti-fabrication & integrity guards)

These guards are structural. An `IAA` record that violates any one is rejected at validation (§11), not patched afterward.

- **X1 — No finding without a captured evidence anchor.** Every finding must reference a `capture_ref` + at least one of `screen_ref` (frame id from TASK-017), `interaction_ref` (captured interaction/transition), `timing_ref` (timestamp interval), or `at_pass_ref` (the relevant AT capture pass), plus the `jrn_ref` step (TASK-016). A **performance** measure must reference `timing_ref`; a **VoiceOver / Dynamic-Type / Reduce-Motion / offline** finding must reference the matching `at_pass_ref` (X6). Auditing from marketing art, an App Store preview, a review, a developer spec sheet, a competitor's accessibility statement, the auditor's memory, or prior personal use is **inadmissible**. If the screen/pass was not in the captured bundle, the correct record is a **coverage gap** (`gap_ref` → TASK-008), never a finding.
- **X2 — Observation ≠ interpretation/verdict ≠ severity ≠ hypothesis, and they are kept in separate fields.** "On the VoiceOver pass (BUNDLE-…-VO) the mark-complete button at FR-0033 is spoken as 'button' with no label" is an **observation**. "This violates WCAG 4.1.2 Name/Role/Value (no accessible name) → `conformance_verdict: fail`" is an **interpretation + formal verdict**. "`severity: 4` — the core daily action is unidentifiable by screen reader" is a **severity judgment**. "A blind user would likely be unable to complete the primary task" is a **hypothesis** about a real disabled user. The four live in different fields (`observed`; `standard_refs`/`interpretation`/`conformance_verdict`; `severity`; `user_impact_hypothesis`) and are graded/scoped separately. Collapsing them is a validation failure (§6, §7.1; `prd.md` §13 Prompt 00 "Separate evidence, inference, hypothesis and invention").
- **X3 — Severity is required; the WCAG conformance verdict is separate and also required where a SC is cited.** Every finding carries a `severity` (0–4, §4.8) with `severity_components` + `severity_basis`. Any finding that cites a WCAG success criterion additionally carries a `conformance_verdict ∈ {pass, fail, partial, cannot_verify}` and the `sc_refs` it applies to. The two are **distinct**: a SC can `fail` at severity 2 (a cosmetic control) or be `cannot_verify` at severity 4 (we could not capture the pass needed to decide a safety-critical surface). A finding missing a required `severity` — or citing a SC with no `conformance_verdict` — is **incomplete** and does not pass peer review.
- **X4 — Measured fact ≠ structured expert reading ≠ assistive-tech observation; and none of them is a disabled user's experience.** Each record declares `evidence_source`. A **measured** value (launch ms, fps/frame-drops, contrast ratio computed from captured pixels, hit-target pt measured against the frame's point grid) is read off the bundle and caps at grade **B** (single capture; compression/frame-rate limits noted). A **structured_expert** reading (native-pattern conformance, graceful-degradation judgment) caps at **C**. An **at_observation** (what VoiceOver announced, what the layout did at the largest Dynamic Type, whether Reduce Motion changed anything) is a structured observation of the **app's output** and caps at **C** — it is **never** evidence of how a blind, low-vision, motor-, or vestibular-affected person *experiences* the app. No record may state a representative disabled-user outcome, task-success rate for AT users, or "is accessible / WCAG compliant" — that is `n/a` until real-AT-user testing (TASK-048 / V2).
- **X5 — Uncertainty is mandatory and blanket-conformance/certainty words are banned.** `uncertainty_note` must be non-empty and name at least one real unknown (single device/OS/build/region; one capture session; contrast sampled from a compressed frame not an instrument; timing read from capture frame-rate not a profiler; AT pass present/absent; app-version drift). The words **"accessible" (as a blanket verdict), "fully accessible", "WCAG compliant", "WCAG AA/AAA" (as an unqualified claim), "works for everyone", "works perfectly offline", "rock-solid", "blazing fast", "never crashes", "fully native", "flawless"** are rejected as findings unless they appear inside a directly quoted, cited A-grade source (a published third-party conformance audit or real-AT-user test — none exists at teardown). Conformance is always **per-SC, per-screen, per-device**, never global.
- **X6 — An accessibility/offline/performance verdict requires the capture pass that can decide it; an un-run pass is a recorded gap, not an assumption.** VoiceOver (D5), Dynamic Type (D6), reduced-motion conformance (co-owned, D-motion), and offline (D2) can **only** be audited from the matching capture pass: a VoiceOver-enabled pass, a largest-Dynamic-Type (AX5) pass, a Reduce-Motion-on pass, and an offline/airplane-mode pass respectively. If TASK-017 did not capture the relevant pass, the dimension is recorded as `coverage: not_observed` + `gap_ref` and a capture request is logged to TASK-008 — **never** inferred from the standard pass, and **never** assumed pass or fail. Contrast (D7) measured off a recompressed frame carries a mandatory precision caveat and may be `cannot_verify` if the capture colour-fidelity is inadequate.
- **X7 — Popularity, polish, native-feel, and "it has an accessibility screen" are not conformance.** Download counts, star ratings, editorial recognition, a slick look, or the mere *presence* of an accessibility settings screen / an offline toggle / a VoiceOver label are inadmissible as evidence that the app is actually performant, resilient, or accessible; they may be *noted as context* but never raise a severity, verdict, or grade (`prd.md` §3 "popularity … is not proof"). Accessibility is judged on **operability of the actual task** (can the captured flow be completed via VoiceOver, at AX5, at the required contrast, with targets the right size), not on the existence of a feature.

---

## 3. Where this sits in the capture → evidence chain

```
TASK-016 journey script (J1…J10, scenario SC-1…SC-6) — defines which screens/interactions are walked
        ▼
TASK-017 CAPTURE BUNDLE  (frames + per-frame timestamps, screen-transition log, friction/error/a11y annotations,
                          device/OS/build manifest, AND the specialised passes this audit needs:
                          VoiceOver-ON pass · largest-Dynamic-Type (AX5) pass · Reduce-Motion-ON pass · OFFLINE/airplane pass)
        │  the single re-openable artifact (capture_ref / at_pass_ref)
        ▼
┌───────────────────────── same bundle, five independent lenses ─────────────────────────┐
│ TASK-018 behavioral      TASK-019 UX / cognitive walkthrough (error *recovery usability*) │
│ TASK-020 visual/motion (perceptual hierarchy, type-system, reduced-motion *design*)        │
│ TASK-021 growth/content                                                                    │
│ TASK-022 iOS (R05: D1 native · D2 offline · D3 performance · D4 targets) +                 │
│          ACCESSIBILITY (R13: D5 VoiceOver · D6 Dynamic Type · D7 contrast · D8 failure)    │
│          ← this doc — owns the FORMAL verdicts the others defer here                       │
└──────────────────────────────────────────────────────────────────────────────────────┘
        │  IAA-NNN records: observed frame/timing/AT-pass → standard interpretation + WCAG verdict → severity (0–4)
        │  → user-impact hypothesis;  each anchored (X1/X6), layered (X2), method-stated (X3), source-typed (X4)
        ▼
TASK-023 cross-specialist reconciliation  (the two lenses reconciled with each other + the other three; disagreements → TASK-008)
        │
        ├──► TASK-005 EVD record (type: observed; grade ≤ B for a measured value; access_date, app_version, device/OS, limitations)
        ├──► PAT-001 Pattern Library (good/bad native & accessibility patterns, trade-offs, accessibility notes)
        ├──► TASK-033 accessibility SAFETY GATE (catastrophic a11y failure = anti-pattern blocker; non-compensable, prd §9/§11)
        ├──► TASK-030/031 Capability Mechanism Library · TASK-039 iOS capability inventory (competitor evidence → HerRays feasibility, not a build decision here)
        ├──► TASK-041/042 Opportunity Atlas (problems reframed as opportunities, not feature requests)
        ├──► TASK-045 wireframe spec (a11y + native rules become HerRays non-negotiable spec) · TASK-046 microinteraction (its a11y fallbacks must pass this audit)
        └──► TASK-048 / V2 accessibility validation (the ONLY place a real AT user's experience is evidenced) + TASK-009 experiments
```

The iOS engineer (R05) and QA/accessibility specialist (R13) are two of the **five specialists auditing the same captured bundle independently before reconciliation** (`prd.md` §2, §5). This audit's quality is therefore capped by the capture quality (TASK-017): an uncaptured screen cannot be audited, only logged as a gap; performance timing is only as precise as the capture frame rate (U2); contrast is only as accurate as the capture colour fidelity (U3); and D5/D6/D2/reduced-motion cannot be audited at all without their specialised passes (X6).

---

## 4. The iOS & accessibility evaluation frame (published standards)

The auditors evaluate against established, published standards. This section fixes **how each is used** so evaluation is reproducible. These are **instruments the auditors consult**; citing them here asserts nothing about any app (No-fabrication statement, §0).

### 4.1 Native platform patterns — the D1 lens (Apple Human Interface Guidelines)
The controlled frame for native correctness. The auditor checks the captured flow against HIG expectations the user has learned from the platform: standard **navigation** (navigation bar + back, tab bars, modal sheets with a visible dismiss, the edge-swipe back gesture), **system affordances** (share sheet, context menus, pull-to-refresh, swipe actions), **respect for safe areas / notch / Home indicator / Dynamic Island**, **keyboard handling** (correct keyboard type, return-key semantics, content not obscured, dismiss-on-scroll), **orientation** (and whether rotation is supported or justified-locked — WCAG 1.3.4), and **standard controls used for standard jobs** (vs reinvented, non-discoverable custom controls). A deviation is noted as an **interpretation** of a broken platform convention — never, by itself, proof of user failure (that is the hypothesis + TASK-019).

### 4.2 Offline use & resilience — the D2 lens (graceful-degradation / reliability engineering; HIG "Designing for people")
The frame for D2 — audited **only from the offline/airplane-mode capture pass** (X6). The auditor evaluates: does the app **launch and show meaningful content** without connectivity, or hard-block? Are already-loaded data and in-progress user input **preserved** (not blanked)? Is a connectivity loss communicated with a **clear, recoverable state** (not a dead spinner or a raw technical error)? On reconnect, is queued user action **reconciled without silent data loss or duplication**? Is there any **destructive** failure (the user logs a habit offline and it vanishes). Silent data loss is the gravest D2 finding and is treated as a reliability/safety failure, cross-linked to D8.

### 4.3 Performance & reliability — the D3 lens (Doherty threshold ~400 ms; Nielsen 0.1/1/10 s limits; the 60 fps / 16.7 ms frame budget; the iOS launch watchdog)
The frame for D3 — **measured** off the capture where possible (X4). The auditor reasons with published bands: **cold/warm launch** to first interactive frame (Doherty ~400 ms comfort; Apple's launch watchdog terminates very slow launches); **response latency** to a tap (Nielsen 0.1 s "instant" / 1 s "uninterrupted" / 10 s "attention lost"); **scroll/animation smoothness** (target 60 fps → a 16.7 ms per-frame budget; captured dropped frames/stutter are a `jank` flag); **reliability** events captured in the bundle (crash, hang/ANR-equivalent, spinner that never resolves, reload loops). Precision is bounded by the capture frame rate (U2) — a captured duration is a lower-fidelity proxy for an instrumented profiler trace and is graded accordingly.

### 4.4 Interaction-target sizing — the D4 lens (Apple HIG 44×44 pt; WCAG 2.5.5 Target Size (Enhanced) AAA 44 CSS px; WCAG 2.2 2.5.8 Target Size (Minimum) AA 24 CSS px)
The frame for D4. The auditor **measures** the tappable area of controls against the frame's point grid and flags controls below the **44×44 pt** HIG minimum, controls that are large enough but **too closely spaced** (adjacent targets with insufficient separation → mis-taps), and essential actions placed in **hard-to-reach** zones. Target sizing is reported against HIG 44 pt and cross-referenced to WCAG 2.5.5/2.5.8; the formal WCAG target-size verdict is owned here (it is one of the verdicts TASK-020 defers to this task).

### 4.5 VoiceOver & the accessibility API — the D5 lens (Apple UIKit/SwiftUI Accessibility; WCAG 4.1.2 Name/Role/Value (A), 1.3.1 Info & Relationships (A), 2.4.3 Focus Order (A), 2.4.7 Focus Visible (AA))
The frame for D5 — audited **only from the VoiceOver-enabled capture pass** (X6). The auditor swipe-navigates the captured VoiceOver pass and checks, per control: is there an **accessible name** (label) that conveys purpose; is the **role/trait** correct (button vs text vs header vs adjustable); is **value/state** exposed (selected, checked, disabled, "3 of 7"); are **hints** present where needed and not redundant; is **focus order** logical and does focus never get **trapped**; are decorative elements hidden from the rotor; are grouped elements grouped; do custom controls expose **custom actions** rather than being silent. The core operability question: **can the captured task be completed using VoiceOver alone?** The auditor records the **spoken output** as the observation; whether a blind person succeeds is the hypothesis (X4, TASK-048/V2).

### 4.6 Dynamic Type & text scaling — the D6 lens (Apple HIG Typography / text styles & Dynamic Type incl. accessibility sizes AX1–AX5; WCAG 1.4.4 Resize Text (AA, 200%), 1.4.10 Reflow (AA))
The frame for D6 — audited **only from the largest-Dynamic-Type (AX5) capture pass** (X6). At the largest accessibility text size the auditor checks: does text **actually scale** (vs a fixed-size layout that ignores the setting); does the layout **reflow without truncation, clipping, or overlap**; do controls and labels remain **visible and operable**; is essential information still present (not pushed off-screen or into an un-scrollable region); does text remain **legible** (not scaled into a one-word-per-line unusable state). Non-scaling text used for essential information is a D6 failure (WCAG 1.4.4). The low-vision user's *experience* remains a hypothesis (X4).

### 4.7 Contrast — the D7 lens (WCAG 1.4.3 Contrast (Minimum) AA — 4.5:1 text / 3:1 large text; 1.4.11 Non-text Contrast AA — 3:1 for UI components & meaningful graphics)
The frame for D7 — **measured** from the captured frames. The auditor samples the foreground/background pixels of text and of meaningful UI components/icons/focus indicators from the **least-recompressed available capture frame**, computes the WCAG contrast ratio, and verdicts each against the **4.5:1** (normal text) / **3:1** (large text ≥ 24 px or 18.66 px bold, and non-text UI) thresholds. **Mandatory precision caveat (X6/U3):** a ratio sampled from a lossy screen capture can drift from the true rendered value; where capture colour fidelity is inadequate the verdict is `cannot_verify`, not a guessed pass/fail. This is the formal contrast verdict TASK-020 defers here; TASK-020's *perceptual* hierarchy reading is separate and does not assert a ratio.

### 4.8 The severity rubric — the mandatory severity (D-all)
Every finding carries a **0–4 severity** (Nielsen-style: frequency × impact × persistence), stored with its components in `severity_components` so the number is reconstructable. For a **strength** finding the same scale stores a quality rating with `polarity: strength`.

| Severity | Problem meaning | Strength meaning |
|---|---|---|
| 0 | Not a problem (tagged, inconsequential) | Neutral / unremarkable |
| 1 | Cosmetic / edge-case only | Minor positive |
| 2 | Minor — works but below standard | Solid, conventional-done-well |
| 3 | Major — impedes a core task, or a clear WCAG AA failure on a used surface | Strong, a pattern worth adapting |
| 4 | Catastrophic — a core daily task is **blocked** for an assistive-technology user, **silent data loss** offline, a crash/hang on a core path, or an essential control unreachable/unidentifiable | Exemplary, safe, signature pattern |

- **Frequency** — how often users would plausibly encounter it (one-off screen vs every session; and, for accessibility, whether it sits on a *core* task path).
- **Impact** — how much it degrades (or elevates) operability, safety, reliability, or speed.
- **Persistence** — whether users can route around it or are repeatedly blocked.

> **Honesty rule (X3).** Severity is **expert judgment** (default grade D, §9), reconstructable from its components and justified in `severity_basis`; it is distinct from the formal `conformance_verdict`. A severity 4 for "core action unreachable by VoiceOver" is a predicted-harm judgment grounded in the *captured* VoiceOver output (an observed fact) but the *user harm* is confirmed only by real-AT-user testing (TASK-048/V2) — the record must say which part is observed and which is predicted.

---

## 5. The eight audit dimensions

Each dimension is an **evaluation guide**, not a questionnaire with a score. For every dimension the auditor produces **zero or more `IAA` records** (§6), one per distinct finding, each anchored to captured evidence, carrying a `test_method` and a `severity` (and a `conformance_verdict` where a WCAG SC applies). A dimension with no captured evidence (or no required AT pass) is recorded as **`coverage: not_observed`** with a `gap_ref` — never left blank and never back-filled. These eight are the acceptance-criteria set, grouped by lens.

### — iOS LENS (R05) —

### D1 — Native platform behaviors
*Does the app behave like a correct, predictable native iOS app, respecting the conventions the user already knows?*
- **Constructs:** HIG navigation/gestures/system affordances; safe-area/notch/Home-indicator/Dynamic-Island respect; keyboard handling; orientation (WCAG 1.3.4); standard-controls-for-standard-jobs (§4.1).
- **Test method (example):** walk J1–J10 frames + transition log; for each navigation/system interaction, compare the captured behavior to the HIG expectation; note edge-swipe-back presence, modal dismiss affordance, safe-area insets, keyboard obscuring, and any reinvented control.
- **Observe:** which navigation model is used; whether back/dismiss is standard and present; whether the edge-swipe-back works; whether content respects safe areas; whether the keyboard obscures inputs; whether rotation is supported or justified-locked; which controls are custom vs standard.
- **Measures:** `nav_model` (`stack | tab | modal | custom`); `back_affordance_present` (bool); `edge_swipe_back` (`works | broken | n/a`); `safe_area_respected` (bool); `keyboard_obscures_input` (bool); `custom_controls` (list with the standard control each replaces).
- **Failure modes to flag:** no standard back/dismiss; broken edge-swipe-back; content under the notch/Home indicator; keyboard hiding the field being typed into; a reinvented gesture with no discoverable affordance; forced orientation with no reason.
- **Severity:** a broken dismiss/back on a core modal is ≥3; a minor safe-area inset glitch on a rare screen is 1.
- **Good vs empty:** *Good* — "J3 personalization sheet (FR-0012): no visible dismiss control and edge-swipe-back disabled → `back_affordance_present: false`, `edge_swipe_back: broken`; HIG modal-dismiss convention broken; severity 3 (freq med / impact high / persist med)." *Empty* — "Navigation feels a bit off."

### D2 — Offline use & resilience
*Does the app degrade gracefully without connectivity, preserve the user's data and input, and reconcile safely on reconnect — or does it hard-block or silently lose data?*
- **Constructs:** graceful degradation; data/input persistence; clear recoverable connectivity states; safe reconnect reconciliation; no silent data loss (§4.2). **Requires the offline/airplane capture pass (X6).**
- **Test method (example):** on the offline pass, cold-launch with connectivity off; attempt J4 first-action and J5 daily-log; toggle connectivity back on; observe whether launched content shows, whether logged input persists, how loss is communicated, and whether the reconnect reconciles without loss/duplication.
- **Observe:** launches-offline-or-blocks; whether previously-loaded content is shown; whether a user action taken offline is preserved and later synced; how connectivity loss is surfaced; any destructive data loss.
- **Measures:** `launches_offline` (`yes | degraded | blocks`); `content_available_offline` (`full | partial | none`); `offline_input_preserved` (`yes | partial | lost`); `loss_communicated` (`clear | unclear | none`); `reconnect_reconciles` (`clean | duplicates | loses_data | not_observed`); `destructive_loss_observed` (bool).
- **Failure modes to flag:** dead spinner / raw error offline; a blank screen where cached content should be; an offline log that silently disappears on reconnect (**gravest** — cross-link D8); duplicated entries after reconnect; no indication the app is offline.
- **Severity:** silent destructive data loss on a core logging action is 4; a non-destructive "you're offline" with a dead screen is 2–3; a graceful read-only offline mode is a `strength`.
- **Good vs empty:** *Good* — "Offline pass (BUNDLE-…-OFF): J5 habit logged at t=8.2 s while offline; on reconnect (t=40 s) the entry is absent from the synced list → `offline_input_preserved: lost`, `destructive_loss_observed: true`; severity 4 (freq med / impact high / persist high). Cross-link D8." *Empty* — "Offline seems fine."

### D3 — Performance & reliability
*Is the app fast to launch, responsive to input, smooth when scrolling/animating, and free of crashes/hangs on core paths?*
- **Constructs:** launch-time comfort (Doherty ~400 ms); response latency (Nielsen 0.1/1/10 s); 60 fps / 16.7 ms frame budget; captured reliability events (§4.3). **Measured** off the timestamp log (X4), precision bounded by capture frame rate (U2).
- **Test method (example):** from the timestamp log measure cold-launch (icon-tap → first interactive frame) and warm-launch; measure latency on the three most-used captured actions; scan the frames for dropped-frame/stutter runs and for any crash/hang/dead-spinner event.
- **Observe & measure:** `cold_launch_ms` / `warm_launch_ms` (off `timing_ref`, with the comfort-band comparison `within_band | slow`); `action_latency_ms` per audited action; `jank_observed` (bool — dropped frames/stutter in the captured scroll/transition); `reliability_events` (list: crash / hang / infinite-spinner / reload-loop with `screen_ref`).
- **Failure modes to flag:** a multi-second cold launch; a tap with >1 s unacknowledged latency on a core action; sustained jank on the primary scroll; any captured crash/hang/dead-spinner on a core path.
- **Severity:** a captured crash on a core daily path is 4; a sluggish (>1 s) core action is 3; occasional minor jank on a rare screen is 1–2.
- **Good vs empty:** *Good* — "Cold launch (icon-tap FR-0001 t=0.00 → first interactive frame FR-0006 t=2.10 s) → `cold_launch_ms: ~2100`, `within_band: slow` (precision ±1 frame, see uncertainty); severity 3 (freq high / impact med / persist med)." *Empty* — "App feels slow."

### D4 — Interaction-target sizing
*Are tappable controls large enough and spaced enough to be hit reliably?*
- **Constructs:** HIG 44×44 pt minimum; WCAG 2.5.5 (44 px AAA) / 2.5.8 (24 px AA); target spacing/reachability (§4.4).
- **Test method (example):** measure the tappable bounds of each interactive control against the frame's point grid; flag any below 44×44 pt and any adjacent pair with insufficient separation; record which essential actions sit in hard-to-reach zones.
- **Observe & measure:** `undersized_targets` (list of `{control, measured_pt, screen_ref}` below 44×44); `target_spacing_issue` (list of adjacent-target pairs too close); `reachability` (note on essential actions in hard-to-reach zones).
- **Failure modes to flag:** sub-44 pt controls on a core action; tightly packed adjacent taps causing mis-taps; a tiny "×"/close hit area; essential action only reachable at the top of a tall screen one-handed.
- **Severity:** a sub-44 pt **core daily** control (or two touching core controls) is ≥3; a small control on a rare settings screen is 1.
- **Good vs empty:** *Good* — "J5 mark-complete toggle (FR-0033) measures ~30×30 pt against the frame grid → `undersized_targets: [{toggle, 30×30, FR-0033}]`; below HIG 44 pt; WCAG 2.5.5 `fail` (2.5.8 24 px `pass`); severity 3 (freq high / impact med / persist med)." *Empty* — "Buttons are a little small."

### — ACCESSIBILITY LENS (R13) —

### D5 — VoiceOver
*Can the captured task be completed with VoiceOver — is every control named, correctly roled, state-exposed, and in a logical, untrapped focus order?*
- **Constructs:** accessible name/role/value/traits/hints; focus order & focus-not-trapped; rotor/custom actions; decorative-hidden; WCAG 4.1.2 / 1.3.1 / 2.4.3 / 2.4.7 (§4.5). **Requires the VoiceOver capture pass (X6).**
- **Test method (example):** on the VoiceOver pass, swipe-navigate J1–J10; for each control record the spoken label + trait + value; attempt to complete each journey's primary action using VoiceOver gestures only; note focus order, any focus trap, and any silent/unlabeled control.
- **Observe & measure:** `unlabeled_controls` (list of `{control, spoken_as, screen_ref}`); `wrong_roles` (list); `state_not_exposed` (list — e.g. selected/checked not announced); `focus_order` (`logical | illogical | trapped`); `task_completable_via_vo` (`yes | partial | no` per journey, with the blocking step); `decorative_not_hidden` (list of noise elements).
- **Failure modes to flag:** an unlabeled core control (spoken as bare "button"); an image/icon button with no name; state (selected/progress) never announced; illogical or trapped focus; a custom control VoiceOver cannot operate; a core task **not completable** via VoiceOver.
- **Severity:** a core daily action unidentifiable or inoperable via VoiceOver is 4; a missing label on a secondary control is 2–3.
- **Good vs empty:** *Good* — "VoiceOver pass (BUNDLE-…-VO), J5: mark-complete button (FR-0033) spoken as 'button' with no name; selected-state not announced → `unlabeled_controls: [{complete, 'button', FR-0033}]`, `state_not_exposed: [complete]`, `task_completable_via_vo: no (blocked at mark-complete)`; WCAG 4.1.2 `fail`; severity 4 (freq high / impact high / persist high). Harm to a blind user is a **hypothesis** pending TASK-048/V2." *Empty* — "VoiceOver mostly works."

### D6 — Dynamic Type
*At the largest accessibility text size, does text scale and the layout reflow without truncation, clipping, overlap, or loss of essential content/controls?*
- **Constructs:** Dynamic Type text styles & accessibility sizes AX1–AX5; reflow without loss; WCAG 1.4.4 (200%) / 1.4.10 Reflow (§4.6). **Requires the largest-Dynamic-Type (AX5) capture pass (X6).**
- **Test method (example):** on the AX5 pass, walk J1–J10; for each screen check whether text scaled, whether layout reflowed, and whether any text/control was truncated, clipped, overlapped, or pushed off-screen into an un-scrollable region.
- **Observe & measure:** `text_scales` (`yes | partial | no` — does it honour the setting at all); `truncation_or_clipping` (list of `{element, screen_ref}`); `overlap` (list); `essential_content_lost` (list of essential text/controls not reachable at AX5); `controls_operable_at_ax5` (bool).
- **Failure modes to flag:** fixed-size text that ignores the setting (WCAG 1.4.4 fail); a primary button label clipped to "…"; overlapping text blocks; an essential CTA pushed below an un-scrollable fold; a one-word-per-line unusable paragraph.
- **Severity:** an essential control lost or a core label clipped at AX5 is ≥3; fixed-size non-essential chrome is 2.
- **Good vs empty:** *Good* — "AX5 pass (BUNDLE-…-AX5), J4 (FR-0021): body text does not change size and the primary 'Start' label truncates to 'Sta…' → `text_scales: no`, `truncation_or_clipping: [{start_button, FR-0021}]`; WCAG 1.4.4 `fail`; severity 3 (freq high / impact med / persist high)." *Empty* — "Big text looks okay."

### D7 — Contrast
*Do text and meaningful UI components meet the formal WCAG contrast ratios?*
- **Constructs:** WCAG 1.4.3 (4.5:1 / 3:1 large) and 1.4.11 (3:1 non-text); contrast computed from captured pixels with the mandatory precision caveat (§4.7). **Measured**; `cannot_verify` where capture fidelity is inadequate (X6/U3).
- **Test method (example):** sample foreground/background pixels of each text block and meaningful component/icon/focus-indicator from the least-recompressed capture frame at stated coordinates; compute the WCAG ratio; verdict against the applicable threshold; record the capture's colour-fidelity caveat.
- **Observe & measure:** `contrast_samples` (list of `{element, fg, bg, ratio, threshold, verdict, screen_ref}`); `lowest_text_ratio`; `non_text_failures` (list of UI components/icons below 3:1).
- **Failure modes to flag:** low-contrast grey-on-white body/secondary text; low-contrast placeholder used for essential info; a UI control or focus indicator below 3:1; a contrast failure that *also* carries meaning only by colour (cross-link D5/D1).
- **Severity:** a core-text contrast failure (below 4.5:1 on body text users must read) is ≥3; a single decorative element below threshold is 1.
- **Good vs empty:** *Good* — "J2 (FR-0009): secondary instructional text sampled fg #9A9A9A on bg #FFFFFF → `ratio: 2.6:1`, `threshold: 4.5:1`, `verdict: fail` (capture colour-fidelity adequate; ±0.2 caveat); severity 3 (freq high / impact med / persist high)." *Empty* — "Some text is light."

### D8 — Failure states
*When something goes wrong (error, empty, loading, permission-denied, offline, server error), is the state handled safely, honestly, and without data loss or dead-ends — or does it expose a raw/technical/unsafe failure?*
- **Constructs:** failure-state **reliability/correctness** (not recovery *usability* — that is TASK-019); safe handling; no data loss; honest, non-technical messaging; reachable states (`prd.md` §2 "failure states, reliability"). **Error/empty/loading states need the capturing of those paths; offline failure needs the offline pass (X6).**
- **Test method (example):** across the captured error/empty/loading/permission/offline paths (incl. J8 missed-day/recovery), record each failure state's presence, whether it loses or corrupts data, whether the message is honest and non-technical, and whether the user is left in a reachable (non-dead-end) state. *Whether the user can understand and recover* is cross-linked to TASK-019.
- **Observe & measure:** `failure_states_captured` (list of `{type, screen_ref}` — error/empty/loading/permission/server/offline); `raw_technical_error_shown` (list — stack traces, HTTP codes, developer strings); `data_safe_in_failure` (`yes | loss | corruption | not_observed`); `dead_end_states` (list of states with no forward/back path); `permission_denied_handled` (`graceful | blocks | not_observed`).
- **Failure modes to flag:** a raw technical/developer error surfaced to the user; a failure that loses or corrupts user data (cross-link D2); a dead-end state with no way forward; a permission-denied that hard-blocks with no guidance; an infinite loading state (cross-link D3 `reliability_events`).
- **Severity:** a failure that loses/corrupts data is 4; a raw-technical dead-end on a core path is 3; a cosmetic empty-state omission is 1.
- **Good vs empty:** *Good* — "J4 server-error path (FR-0025): raw string 'Error 500: NullPointerException' shown with only a disabled screen behind it → `raw_technical_error_shown: ['500 NPE']`, `dead_end_states: [FR-0025]`, `data_safe_in_failure: not_observed`; severity 3 (freq low / impact high / persist med). Recovery-*usability* reading → TASK-019 (crosslink)." *Empty* — "Errors could be nicer."

> **Dimension coverage rule.** A complete per-app iOS/accessibility audit records a result for **all eight** dimensions — including explicit `coverage: not_observed` + `gap_ref` where evidence was absent (most commonly **D5/D6/D2** when no VoiceOver / AX5 / offline pass exists, or **D7** when capture colour fidelity forces `cannot_verify`). Silently omitting a dimension is a validation failure (§11).

---

## 6. The `IAA` audit record (field contract)

One finding = one `IAA-NNN` record. Fields carry requirement markers: **M** mandatory · **C** conditional (rule stated) · **O** optional. The acceptance-criteria essentials — the **evidence anchor** (§6.2), the **`test_method`** (§6.3), the **`severity`** (§6.4), the **`conformance_verdict`** where a SC applies (§6.4), and the **lens** (§6.1) — are all **M** (conditionally for the verdict).

### 6.1 Identity & provenance
| Field | Req | Type / rule |
|---|---|---|
| `iaa_id` | M | `IAA-NNN`, immutable, one finding per id |
| `app_id` | M | → `APP-NNN` (TASK-006) |
| `auditor_lens` | M | `ios` (R05) **or** `accessibility` (R13) — which lens produced this record (the two are audited independently; reconciled at TASK-023) |
| `dimension` | M | one or more of `D1_native D2_offline D3_performance D4_targets D5_voiceover D6_dynamic_type D7_contrast D8_failure_states`; the `dimension` must match the `auditor_lens` (D1–D4 ↔ ios; D5–D8 ↔ accessibility) |
| `auditor_role` | M | `ios_engineer` (R05) or `qa_accessibility_specialist` (R13); named individual in `auditor_ref` |
| `device_os_build` | M | the captured device model, iOS version, and app build from the TASK-017 manifest — every verdict is scoped to this (X5/X7) |
| `audit_date` | M | ISO date; the date the bundle was audited (not captured) |

### 6.2 Evidence anchor (X1/X6 — the acceptance-criteria "evidence-backed observation" field)
| Field | Req | Type / rule |
|---|---|---|
| `capture_ref` | M | → TASK-017 bundle id |
| `at_pass_ref` | C | → the specialised capture pass this finding reads; **M** for any D5 (VoiceOver), D6 (AX5 Dynamic Type), D2 (offline), or reduced-motion co-owned finding. If the pass does not exist → `coverage: not_observed` + `gap_ref` (X6), **never** a finding. |
| `screen_ref` | C | ≥1 frame id. **M** for any static-frame finding (D1/D4/D5/D6/D7/D8). |
| `interaction_ref` | C | ≥1 captured interaction/transition id; **M** for any D1 gesture/nav finding and any D3 action-latency finding |
| `timing_ref` | C | the frame-timestamp interval or event-log line(s) a duration/latency is computed from; **M** for any D3 `*_ms` measure (X1) |
| `jrn_ref` | M | → TASK-016 `JRN` step (J1…J10 + scenario) where observed |
| `observed` | M | **Observation only.** Literal description of what the frame / timing log / AT pass shows (measured ms, computed ratio, spoken VoiceOver output, scaled-layout result, offline behavior). No standard name, no verdict, no severity, no "users will…", no blanket-conformance adjective. |

### 6.3 Interpretation, verdict & test method (X2/X3 — the standard reading and the acceptance-criteria "test method")
| Field | Req | Type / rule |
|---|---|---|
| `standard_refs` | M | list of the §4 standards at stake (e.g. `"HIG:modal_dismiss"`, `"WCAG:4.1.2"`, `"WCAG:1.4.3"`, `"Doherty"`, `"HIG:44pt"`) **or** `[none]` with note. **Interpretation** of which standard is met/broken. |
| `sc_refs` | C | the specific WCAG success criteria (with level), **M** for any accessibility finding citing WCAG |
| `conformance_verdict` | C | `pass \| fail \| partial \| cannot_verify` — **M** whenever `sc_refs` is non-empty; kept **separate** from `severity` (X3). `cannot_verify` is required, not a guess, when the deciding pass/fidelity is absent (X6). |
| `polarity` | M | `problem \| strength \| neutral` — strengths feed the good-pattern side of `PAT-001` |
| `interpretation` | M | prose: why the observed evidence meets or breaks the tagged standard(s). Expert reading, marked as such. |
| `test_method` | M | **non-empty** — the exact method used to produce this finding (what pass, what was walked, what was measured/sampled and how, what tool/formula). *This is the acceptance-criteria "include test method" field.* |
| `measures` | C | the dimension-specific measures from §5 (e.g. `cold_launch_ms`, `undersized_targets`, `task_completable_via_vo`, `contrast_samples`); **M** for any measured finding |

### 6.4 Severity (X3 — the acceptance-criteria "severity" field)
| Field | Req | Type / rule |
|---|---|---|
| `severity` | M | integer **0–4** on the §4.8 rubric. **Mandatory on every record.** |
| `severity_components` | M | `{frequency: low\|med\|high, impact: low\|med\|high, persistence: low\|med\|high\|n/a}` — so the number is reconstructable |
| `severity_basis` | M | non-empty note justifying the severity from its components, and stating which part is *observed* (e.g. captured crash, measured ratio) vs *predicted* (user harm) |
| `evidence_source` | M | `measured \| structured_expert \| at_observation` (X4). An `at_observation` is app output, never a disabled user's experience. |

### 6.5 Grading, hypothesis & honesty (X2, X4)
| Field | Req | Type / rule |
|---|---|---|
| `observation_grade` | M | A–D for *the measure/behavior/AT-output is as described* — a single captured `measured` value caps at **B**; a `structured_expert` or `at_observation` reading caps at **C** |
| `prediction_grade` | M | A–D for *this will affect a real user (offline / under load / using assistive technology) as hypothesised* — **defaults to D**; only real-AT-user/real-condition testing (TASK-048/V2) can raise it (`validation_ref` required) |
| `user_impact_hypothesis` | C | the predicted effect on a real user (a blind user blocked, a low-vision user unable to read, a user losing data offline) — **hypothesis**, explicitly tentative; **M** when `polarity: problem` and `severity ≥ 3`, or for any `conformance_verdict: fail` on a core path |
| `confidence` | M | controlled vocabulary (§7.2) |
| `uncertainty_note` | M | **non-empty** (X5); names ≥1 real unknown (single device/OS/build, one session, contrast from compressed frame, timing from capture frame-rate, AT pass present/absent, app-version drift) |
| `separation_check` | M | `true` — auditor attests observation / interpretation+verdict / severity / hypothesis are not collapsed (§7.1) |

### 6.6 Linkage & next step
| Field | Req | Type / rule |
|---|---|---|
| `coverage` | C | `observed \| not_observed`; **M** `not_observed` + `gap_ref` for any dimension with no captured evidence or no required AT pass (esp. **D5/D6/D2**, X6) |
| `pattern_ref` | O | → `PAT-001` Pattern Library entry this finding populates (good or bad native/accessibility pattern, with trade-offs + accessibility note) |
| `gate_ref` | C | → TASK-033 **accessibility gate**; **M** for any `severity: 4` accessibility finding or any `conformance_verdict: fail` on a core daily path (non-compensable, `prd.md` §9/§11) |
| `gap_ref` | C | → TASK-008; **M** when `coverage: not_observed` or a missing capture/fidelity prevented auditing |
| `contradiction_ref` | O | → TASK-008 when this finding conflicts with marketing, a developer accessibility statement, a sibling audit, or the other lens |
| `crosslink_refs` | O | sibling-audit ids this touches (TASK-019 error-recovery usability; TASK-020 perceptual/motion-design; TASK-018; TASK-021) **and** TASK-039 (HerRays feasibility of a native capability observed here) — without claiming their judgment/decision |
| `fix_hypothesis` | O | the smallest change that would resolve the problem → candidate `EXP` (TASK-009) / opportunity input (TASK-041) / non-negotiable spec note for TASK-045/046; **never** an adopted feature |
| `status` | M | `draft \| peer_reviewed \| reconciled \| superseded` (never hard-deleted) |

---

## 7. Cross-cutting rules

### 7.1 The observation → interpretation/verdict → severity → hypothesis firewall (X2)
Every record must keep four statements physically separate:
1. **Observation** (`observed`, `measures`, anchors): what the frame / timing log / AT pass shows. A `measured` value is gradeable to B; a structured/`at_observation` reading to C.
2. **Interpretation + formal verdict** (`standard_refs`, `sc_refs`, `conformance_verdict`, `interpretation`): which standard is at stake and the per-SC pass/fail/partial/cannot-verify. Expert reading + formal verdict; marked as such.
3. **Severity** (`severity` + components + basis): rubric-bound expert judgment (grade D, §9), reconstructable, **distinct** from the verdict.
4. **Hypothesis** (`user_impact_hypothesis`, `prediction_grade`): the predicted real-user effect (a blind user blocked, data lost offline). Default D; raised only by real-condition/real-AT-user testing (TASK-048/V2). `separation_check: true` attests these four are not fused.

### 7.2 Confidence vocabulary (reused from TASK-004 §5.2)
`established` (A-grade, a published third-party conformance audit or representative real-AT-user validation) · `likely` (B, a directly measured value — launch ms, contrast ratio — from the capture) · `indicative` (C, a structured expert reading or an `at_observation` — the VoiceOver output, the AX5 layout, the native-pattern judgment) · `speculative` (D, analogy/prediction of user harm). A measured value may be `likely`; a VoiceOver/Dynamic-Type/contrast *verdict about a user* may not exceed `indicative`/`speculative` without a `validation_ref` from real-AT-user testing.

### 7.3 Banned blanket-conformance / certainty language (X5)
Rejected as findings unless inside a quoted, cited A-grade source (none at teardown): **accessible (as a blanket verdict), fully accessible, WCAG compliant, WCAG AA/AAA (unqualified), works for everyone, works perfectly offline, rock-solid, blazing fast, never crashes, fully native, flawless, bulletproof, buttery-smooth (as asserted fact)**. Replace with scoped, graded statements ("on this device/OS/build, the mark-complete button failed WCAG 4.1.2 on the captured VoiceOver pass; blind-user impact not yet validated, see `validation_ref`"). Conformance is **per-SC, per-screen, per-device** — never global.

### 7.4 Operating assistive technology is observing the app, not being a disabled user (X4)
An auditor who enables VoiceOver, sets Dynamic Type to AX5, turns on Reduce Motion, or goes offline is producing a **structured observation of the app's output under that condition** — graded to **C** at most. It is **not** evidence of how a blind, low-vision, motor-impaired, or vestibular-sensitive person experiences the product, and it is **not** a WCAG conformance certification of the app. Representative disabled-user operability, task-success, and satisfaction are **hypotheses** that await real-AT-user testing (TASK-048 / V2 accessibility validation). The audit's value is finding candidate defects and good patterns fast and traceably — especially the false-safety ones ("looks accessible, blocks VoiceOver") — not certifying accessibility.

### 7.5 Lens independence & disagreement (`prd.md` §2 "Preserve disagreements")
R05 (iOS) and R13 (accessibility) audit the bundle **independently of each other and of the other three lenses**, before reconciliation (TASK-023). Where the two lenses, a sibling audit, or a second auditor disagree (e.g. iOS rates a custom gesture a slick `strength` while accessibility rates it a VoiceOver-inoperable severity-4), the disagreement is recorded as a `contradiction_ref` (TASK-008) and preserved — **never silently overwritten or averaged** (TASK-008 G2; TASK-004 "never average contradictions"). A native-feel win that harms accessibility is a *preserved tension*, resolved by evidence (and the non-compensable accessibility gate) at reconciliation, not split-the-difference.

### 7.6 The boundaries with TASK-019, TASK-020 and TASK-039 (no duplication)
- **TASK-019 (UX heuristic)** owns error-*recovery usability* — can a user understand the error and get out. **This audit owns the failure-*state* reliability/correctness** (D8) — does the app lose/corrupt data, show a raw technical error, or dead-end. Cross-link, do not assert the other.
- **TASK-020 (visual/motion)** owns *perceptual* hierarchy and *type-system coherence* and the motion-*design* reading. **This audit owns the formal verdicts it defers here**: WCAG contrast ratios (D7), VoiceOver (D5), Dynamic-Type scaling correctness (D6), 44pt targets (D4), and — **co-owned** — the formal WCAG 2.3.3/2.2.2 reduced-motion conformance verdict (TASK-020 gives the design reading; this audit gives the formal verdict). Neither asserts the other's judgment.
- **TASK-039 (iOS capability & integration inventory)** owns the **HerRays build/feasibility** decision for native capabilities (HealthKit, widgets, Live Activities, haptics, sync). This audit only *observes what a competitor does* and feeds it as evidence; it never records a HerRays capability as built or decides to build one. `crosslink_refs: [TASK-039]`.

---

## 8. Forbidden-value & validation-failure catalogue

A record or audit is rejected if any of the following holds:

| # | Failure | Rule violated |
|---|---|---|
| V1 | A finding with no evidence anchor (no `screen_ref`/`interaction_ref`/`timing_ref`/`at_pass_ref`) and it is not a `not_observed` gap | X1 |
| V2 | A finding sourced from marketing / App Store preview / review / spec sheet / developer accessibility statement / memory, not the bundle | X1 |
| V3 | `observed` contains a standard name, a verdict, a severity, a "users will…", or a blanket-conformance adjective | X2 / §7.1 |
| V4 | `test_method` empty or absent | acceptance-criteria "test method" / §6.3 |
| V5 | `severity` empty, outside 0–4, or missing `severity_components`/`severity_basis` | X3 (acceptance-criteria field) |
| V6 | A WCAG `sc_refs` cited with no `conformance_verdict`, or verdict fused into `severity` | X3 / §6.4 |
| V7 | A representative disabled-user outcome, AT-user task-success, or "is accessible / WCAG compliant" asserted | X4 |
| V8 | An `at_observation` or structured reading graded above C, or a measured value above B, from one capture | X4 / §9 |
| V9 | `prediction_grade` > D with no real-condition/real-AT-user `validation_ref` | X4 / §7.4 |
| V10 | `uncertainty_note` empty, or uses banned blanket-conformance/certainty language | X5 / §7.3 |
| V11 | A D3 `*_ms` measure with no `timing_ref`; or a D7 ratio with no sampled-pixel basis | X1 / §6.2 |
| V12 | A **D5/D6/D2** (or reduced-motion) finding asserted with no matching AT pass (inferred from the standard pass) | X6 |
| V13 | A D7 contrast `pass`/`fail` asserted from an inadequate-fidelity capture instead of `cannot_verify` | X6 / §4.7 |
| V14 | A dimension omitted from a per-app audit with no `coverage: not_observed` + `gap_ref` | §5 coverage rule |
| V15 | Popularity, polish, native-feel, or the mere presence of an a11y screen/offline toggle used to raise a severity/verdict/grade | X7 |
| V16 | A `severity: 4` accessibility finding or a core-path `conformance_verdict: fail` with no `gate_ref` → TASK-033 | §6.6 / `prd.md` §9/§11 |
| V17 | A contradiction (between the two lenses, with a sibling audit, or a second auditor) resolved by deletion/averaging | §7.5 |
| V18 | `separation_check: true` asserted but observation/verdict/severity/hypothesis are fused | §7.1 |
| V19 | A TASK-019 recovery-usability verdict, a TASK-020 perceptual/motion-design judgment, or a TASK-039 HerRays build decision asserted here instead of cross-linked | §7.6 |
| V20 | `dimension` inconsistent with `auditor_lens` (e.g. an `ios` record tagged D5) | §6.1 |

---

## 9. Grading & severity interlock (with TASK-004)

| What is being graded/rated | Field | Ceiling from one captured session | Raised by |
|---|---|---|---|
| A measured value (launch ms, fps, contrast ratio, target pt) is as described | `observation_grade` (measured) | **B** (single capture; frame-rate/compression precision) | repeated independent captures / instrumentation |
| A structured reading (native-pattern, graceful-degradation) is sound | `observation_grade` (structured_expert) | **C** (quality-of-method only) | second independent auditor agreement |
| What the AT output was (VoiceOver spoke X; layout did Y at AX5) | `observation_grade` (at_observation) | **C** (app output, single device) | second auditor / second device agreement |
| Which standard is met/broken, and the per-SC verdict | `conformance_verdict` (not A–D) | per-SC/-screen/-device, scoped | a published third-party conformance audit |
| How severe the finding is (0–4) | `severity` | **expert judgment (grade D)**, rubric-bound & reconstructable | real-condition/real-AT-user testing (TASK-048/V2) |
| It will harm a real user (blind / low-vision / offline / under load) as hypothesised | `prediction_grade` | **D** | real-AT-user/real-condition testing (TASK-048/V2) + `validation_ref` |

This operationalises `prd.md` §4 ("Grade separately for efficacy, relevance and confidence … Do not interpret a high grade on usability as a high grade on health impact") and §9's ladder. A precisely-measured, clearly-verdicted accessibility finding can sit at `observation_grade: C` (the VoiceOver output), `conformance_verdict: fail` (WCAG 4.1.2 on this screen/device), `severity: 4`, `prediction_grade: D` — and that is the correct, honest state for most teardown findings: *we observed the app output precisely, it fails this SC on this device, we judge it catastrophic, and we have not yet proven the harm to a real blind user.*

---

## 10. Per-app iOS/accessibility audit checklist (the reusable instrument)

Run **twice** per core app — once for the **iOS lens (R05)**, once for the **accessibility lens (R13)** — against its captured bundle set, independently, before reconciliation.

**Pre-audit**
- [ ] Bundle(s) received from TASK-017; `device_os_build`, `app_version`, `region`, `access_status`, and **capture frame rate + colour fidelity** readable from the manifest.
- [ ] Confirm which specialised passes exist: **VoiceOver-ON** (D5), **largest-Dynamic-Type AX5** (D6), **Reduce-Motion-ON** (reduced-motion co-owned), **offline/airplane** (D2). For any missing pass, the dependent dimension will be `not_observed` + `gap_ref` (X6) and a capture request is logged to TASK-008.
- [ ] Journey coverage confirmed: which of J1–J10 (and the error/empty/permission/offline paths for D8) are present.
- [ ] Evaluation frame loaded (§4): HIG native patterns + 44 pt; offline/resilience principles; performance bands; the accessibility API model; the WCAG SC set (1.4.3/1.4.11/1.4.4/1.3.1/4.1.2/2.5.5/2.5.8/1.4.10/1.3.4/2.4.7); the §4.8 severity rubric.

**Audit (per dimension — iOS D1–D4 or accessibility D5–D8)**
- [ ] Walk the captured frames/interactions/passes in order; for each finding create an `IAA` record anchored to the right evidence (X1) — `at_pass_ref` for D5/D6/D2 (V12), `timing_ref` for any ms measure (V11).
- [ ] Write a literal `observed`; keep interpretation+verdict / severity / hypothesis in separate fields; set `separation_check` (X2).
- [ ] Record the **`test_method`** actually used (V4); tag `standard_refs`; for accessibility set `sc_refs` + a formal `conformance_verdict` (`cannot_verify` where the pass/fidelity is inadequate — V13) (X3).
- [ ] Record the dimension's `measures` (§5): D3 launch/latency/jank + reliability events; D4 target pt; D5 labels/roles/focus + `task_completable_via_vo`; D6 scaling/reflow at AX5; D7 contrast ratios with sampled pixels; D2 offline preservation/reconcile; D8 failure-state safety/data-loss.
- [ ] Assign `severity` 0–4 with `severity_components` + `severity_basis` (V5); set `evidence_source` (`measured`/`structured_expert`/`at_observation`) (X4).
- [ ] Grade `observation_grade` (≤ B measured / ≤ C structured/at) and `prediction_grade` (D) (§9); write `user_impact_hypothesis` for problems ≥ severity 3 and all core-path verdict-fails.
- [ ] Write a non-empty `uncertainty_note` naming the single-device/OS/build limit; no banned words (X5, §7.3).
- [ ] Record `coverage: not_observed` + `gap_ref` for any dimension without the evidence/pass needed (§5, X6).
- [ ] Set `gate_ref` → TASK-033 for any severity-4 accessibility finding or core-path verdict-fail (V16). Route TASK-019/020/039-owned judgments to `crosslink_refs`, never assert them (V19).

**Post-audit**
- [ ] Populate `PAT-001` Pattern Library (good and bad native & accessibility patterns, trade-offs, accessibility note).
- [ ] Draft `fix_hypothesis` for each high-severity finding → opportunity input (TASK-041) / candidate `EXP` (TASK-009) / non-negotiable spec note for TASK-045/046 — **not** an adopted feature.
- [ ] Peer review by the other lens (R13 cross-reviews iOS; R05 cross-reviews accessibility; R06 for offline/sync correctness) → `status: peer_reviewed`.
- [ ] Hold for TASK-023 reconciliation; reconcile the two lenses with each other and the other three; preserve disagreements as `contradiction_ref` (§7.5).
- [ ] Promote accepted records to `EVD` (TASK-005) with `access_date`, `app_version`, `device_os_build`, `limitations`; feed the non-compensable accessibility gate (TASK-033).

**Validation gate** — run §8 V1–V20; any hit blocks the audit (Gate 1/Gate 2, `prd.md` §11).

---

## 11. Reviewer checklist (sign-off)

- [ ] Every finding has a valid evidence anchor (no V1/V2); every ms measure has a `timing_ref` and every contrast ratio a sampled-pixel basis (no V11).
- [ ] Every D5/D6/D2 (and reduced-motion) finding reads the matching AT pass; none inferred from the standard pass (no V12); contrast from inadequate-fidelity capture is `cannot_verify`, not a guess (no V13).
- [ ] `auditor_lens` set and `dimension` consistent with it (no V20); observation / interpretation+verdict / severity / hypothesis separated in every record (no V3/V18).
- [ ] Every record has a non-empty `test_method` (no V4) and a `severity` 0–4 with components + basis (no V5); every WCAG-citing record has a `conformance_verdict` distinct from severity (no V6).
- [ ] No representative disabled-user outcome / "is accessible / WCAG compliant" asserted (no V7); no over-grading (no V8); no `prediction_grade` > D without a real-condition/AT `validation_ref` (no V9).
- [ ] Every record has a non-empty, blanket-conformance/certainty-word-free uncertainty note naming the device/OS/build scope (no V10).
- [ ] All eight dimensions resolved (audited or `not_observed` + gap) (no V14); popularity/polish/native-feel/feature-presence never moved a severity/verdict/grade (no V15).
- [ ] Every severity-4 accessibility finding / core-path verdict-fail routes to the accessibility gate (`gate_ref` → TASK-033) (no V16).
- [ ] Contradictions (incl. iOS-vs-accessibility) preserved, not averaged (no V17); no TASK-019/020/039-owned judgment asserted here instead of cross-linked (no V19).
- [ ] No fabricated launch time, frame rate, contrast ratio, target size, VoiceOver label, Dynamic-Type result, offline behavior, or failure state anywhere.

---

## 12. Synthetic worked example — ILLUSTRATIVE (synthetic)

> **SYNTHETIC — proves the instrument runs; asserts nothing about any real app.** `APP-SYNTH-Z` is a fictitious app; all `*-SYNTH-*` ids are fictitious; all frames, timings, contrast values, VoiceOver output, and offline behaviors are fictitious. These records exist only to show the eight dimensions, the severity rubric, the conformance verdict, the lens-split, and the `IAA` contract working end-to-end. They are not evidence.

### 12.1 `IAA-SYNTH-001` — accessibility lens · D5 VoiceOver (core action unlabeled)
```yaml
iaa_id: IAA-SYNTH-001
app_id: APP-SYNTH-Z
auditor_lens: accessibility
dimension: [D5_voiceover]
auditor_role: qa_accessibility_specialist      # auditor_ref: [SYNTHETIC]
device_os_build: "[SYNTHETIC] iPhone SYNTH / iOS SYNTH / build SYNTH"
audit_date: 2026-11-22
# --- evidence anchor (X1/X6) ---
capture_ref: BUNDLE-SYNTH-Z-J05
at_pass_ref: BUNDLE-SYNTH-Z-J05-VO          # the VoiceOver-ON pass — required for D5
screen_ref: [FR-SYNTH-0033]
interaction_ref: []
timing_ref: []
jrn_ref: [J5-normal-daily]
observed: >
  On the VoiceOver pass, swiping to the mark-complete control at FR-0033 is
  announced as "button" with no preceding name; the selected/checked state is
  not announced after activation. (Literal spoken output; no standard/verdict/severity words.)
# --- interpretation + verdict + method (X2/X3) ---
standard_refs: ["WCAG:4.1.2", "accessibility_api:label", "accessibility_api:value"]
sc_refs: ["4.1.2 Name,Role,Value (A)"]
conformance_verdict: fail                    # distinct from severity
polarity: problem
interpretation: >
  No accessible name is exposed (role announced, name and value absent); the
  control cannot be identified or its state tracked via screen reader. Expert
  reading of the captured VoiceOver output, not a blind-user outcome.
test_method: >
  VoiceOver-ON pass of J5; swipe-navigated each control and recorded the spoken
  label/trait/value; attempted mark-complete using VoiceOver gestures only.
measures: {unlabeled_controls: [{complete, "button", FR-SYNTH-0033}], state_not_exposed: [complete], task_completable_via_vo: "no (blocked at mark-complete)"}
# --- severity (X3) ---
severity: 4
severity_components: {frequency: high, impact: high, persistence: high}
severity_basis: >
  Core daily action; unidentifiable and its state untracked via screen reader
  -> task not completable via VoiceOver on this build -> catastrophic (4).
  OBSERVED: the captured spoken output. PREDICTED: the blind-user block.
evidence_source: at_observation
# --- grading / hypothesis (X2, X4) ---
observation_grade: C                          # at_observation, single device/session
prediction_grade: D
user_impact_hypothesis: >
  Hypothesis: a blind user relying on VoiceOver would likely be unable to log a
  habit — needs real-AT-user confirmation (TASK-048 / V2), not asserted here.
confidence: indicative
uncertainty_note: >
  Single device/OS/build, one VoiceOver session; app-version drift possible;
  this is app output, not a disabled user's experience.
separation_check: true
# --- linkage (X3 gate, §6.6) ---
coverage: observed
gate_ref: TASK-033                            # mandatory: severity-4 accessibility finding (prd §9/§11)
pattern_ref: PAT-SYNTH-ANTI-VO-LABEL
gap_ref: null
crosslink_refs: [TASK-020]                    # perceptual/visual reading is theirs; verdict is ours
fix_hypothesis: >
  Expose an accessible name + value/selected-state on the control -> candidate
  EXP (TASK-009); non-negotiable spec note for TASK-045/046. Not an adopted feature.
status: draft
```

### 12.2 `IAA-SYNTH-002` — iOS lens · D2 offline (silent data loss) + D3 reliability crosslink
```yaml
iaa_id: IAA-SYNTH-002
app_id: APP-SYNTH-Z
auditor_lens: ios
dimension: [D2_offline]
auditor_role: ios_engineer                    # auditor_ref: [SYNTHETIC]
device_os_build: "[SYNTHETIC] iPhone SYNTH / iOS SYNTH / build SYNTH"
audit_date: 2026-11-22
capture_ref: BUNDLE-SYNTH-Z-J05
at_pass_ref: BUNDLE-SYNTH-Z-J05-OFF          # the offline/airplane pass — required for D2
screen_ref: [FR-SYNTH-0041]
interaction_ref: [EV-SYNTH-0033]
timing_ref: ["t=8.2s..t=40.0s"]
jrn_ref: [J5-normal-daily]
observed: >
  On the offline pass a habit is logged at t=8.2 s (airplane mode on); on
  reconnect at t=40 s the entry is absent from the synced list at FR-0041.
  (Literal; no standard/verdict/severity words.)
standard_refs: ["resilience:no_silent_loss", "HIG:designing_for_people"]
sc_refs: []                                   # no WCAG SC -> no conformance_verdict required
conformance_verdict: null
polarity: problem
interpretation: >
  User input taken offline is neither queued nor reconciled; it is silently
  dropped on reconnect. Reliability/correctness defect (data loss).
test_method: >
  Offline/airplane pass: cold-launched offline, performed J5 habit-log, toggled
  connectivity on, compared the synced list before/after against the logged action.
measures: {launches_offline: degraded, offline_input_preserved: lost, reconnect_reconciles: loses_data, destructive_loss_observed: true}
severity: 4
severity_components: {frequency: med, impact: high, persistence: high}
severity_basis: >
  Silent destructive loss of a core logging action -> catastrophic (4).
  OBSERVED: the missing entry on the captured reconnect. PREDICTED: user trust/data harm.
evidence_source: measured
observation_grade: B                           # measured from the captured offline pass, single session
prediction_grade: D
user_impact_hypothesis: >
  Hypothesis: a user logging offline would lose that effort without warning;
  needs real-condition confirmation, not asserted here.
confidence: likely
uncertainty_note: >
  Single device/OS/build, one offline session; reconnect timing read from the
  capture log; not instrumented.
separation_check: true
coverage: observed
gate_ref: null                                 # not an accessibility-gate item; routes to reliability/PAT + opportunity
gap_ref: null
contradiction_ref: null
crosslink_refs: [TASK-019]                     # the recovery-*usability* reading (how a user understands the loss) is theirs
fix_hypothesis: >
  Queue offline writes and reconcile on reconnect with a visible sync state ->
  candidate EXP (TASK-009) / opportunity input (TASK-041). Not an adopted feature.
status: draft
```

### 12.3 `IAA-SYNTH-003` — accessibility lens · D6 Dynamic Type (dimension not captured → honest gap)
```yaml
iaa_id: IAA-SYNTH-003
app_id: APP-SYNTH-Z
auditor_lens: accessibility
dimension: [D6_dynamic_type]
auditor_role: qa_accessibility_specialist      # auditor_ref: [SYNTHETIC]
device_os_build: "[SYNTHETIC] iPhone SYNTH / iOS SYNTH / build SYNTH"
audit_date: 2026-11-22
capture_ref: BUNDLE-SYNTH-Z-J05
at_pass_ref: null                              # NO largest-Dynamic-Type (AX5) pass was captured
screen_ref: []
jrn_ref: [J5-normal-daily]
observed: >
  No AX5 (largest Dynamic Type) capture pass exists in the bundle for this app.
  (Literal statement of absence; nothing inferred about scaling behavior.)
standard_refs: ["WCAG:1.4.4", "WCAG:1.4.10", "DynamicType:AX5"]
sc_refs: ["1.4.4 Resize Text (AA)", "1.4.10 Reflow (AA)"]
conformance_verdict: cannot_verify             # required honesty: no deciding pass (X6)
polarity: neutral
interpretation: >
  D6 cannot be audited without the AX5 pass; scaling/reflow are neither pass nor
  fail here — they are unobserved. No inference from the standard-size pass (X6).
test_method: >
  Checked the bundle manifest for an AX5 Dynamic-Type pass; none present ->
  logged as a coverage gap rather than a finding.
measures: {}
severity: 0
severity_components: {frequency: n/a, impact: n/a, persistence: n/a}
severity_basis: "No finding — coverage gap, not a defect."
evidence_source: structured_expert
observation_grade: C
prediction_grade: D
confidence: indicative
uncertainty_note: >
  Dimension unobserved: the AX5 pass was never captured; status is unknown, not
  pass or fail.
separation_check: true
coverage: not_observed                         # the honest state (X6)
gap_ref: GAP-SYNTH-AX5-MISSING                 # mandatory with not_observed -> TASK-008 capture request
gate_ref: null
crosslink_refs: [TASK-017]                      # capture request routes to the capture protocol owner
fix_hypothesis: >
  Request an AX5 Dynamic-Type capture pass for APP-SYNTH-Z (TASK-017) so D6 can
  be audited next cycle.
status: draft
```

**Validation trace (all three):** each has a capture anchor or an explicit `not_observed`+`gap_ref` (no V1/V12/V14); each has a non-empty `test_method` (no V4) and a `severity` with components+basis (no V5); the WCAG-citing records carry a `conformance_verdict` distinct from severity, including `cannot_verify` where no pass exists (no V6/V13); none asserts a disabled-user outcome or "is accessible" (no V7); grades respect the ≤B-measured/≤C-structured ceilings (no V8); the severity-4 accessibility record routes to the accessibility gate (`gate_ref` → TASK-033, no V16); sibling-owned judgments are cross-linked, not asserted (no V19); `dimension` matches `auditor_lens` in each (no V20); uncertainty notes are non-empty and scope to one device/OS/build with no banned words (no V10). ✔ All three pass §8.

---

## 13. Dependencies, open unknowns & change log

**Upstream (consumed):** TASK-017 (capture bundle + the VoiceOver / AX5 / Reduce-Motion / offline passes — the hard prerequisite; without a pass the dimension is a gap) · TASK-016 (`JRN` steps) · TASK-006 (`APP` registry, `device_os_build` via manifest) · TASK-005 (`EVD` schema) · TASK-004 (grading + confidence vocabulary) · TASK-003 (R05/R13 lens-split accountability; R06 reviewer).

**Downstream (fed):** TASK-023 (reconciliation of the two lenses + the other three) · TASK-005 (`EVD` promotion) · `PAT-001` Pattern Library + the "Quality/accessibility audit" and "iOS feasibility audit" deliverables · TASK-033 (non-compensable **accessibility gate** — severity-4/core-fail findings) · TASK-039/037 (competitor native-capability evidence → HerRays feasibility/build-buy, decided there not here) · TASK-030/031 (capability mechanisms) · TASK-041/042 (Opportunity Atlas) · TASK-045/046 (HerRays a11y + native non-negotiable spec) · TASK-048/V2 (the only place a real-AT-user experience is evidenced) · TASK-008/009 (gaps/contradictions → experiments).

**Open unknowns (declared, not invented):**
- **U1 — Which AT passes TASK-017 will actually capture.** VoiceOver, AX5 Dynamic Type, Reduce-Motion, and offline passes are *requested* here but owned by TASK-017; until the capture protocol commits to them, D5/D6/D2 and the reduced-motion co-verdict may be mostly `not_observed`+gap. Logged to TASK-008.
- **U2 — Performance precision is capture-frame-rate bound.** A captured launch/latency/fps value is a lower-fidelity proxy for an instrumented profiler trace; graded ≤ B and caveated. True profiling would require tooling beyond a screen capture.
- **U3 — Contrast fidelity.** A ratio sampled from a recompressed capture frame can drift from the rendered value; inadequate colour fidelity forces `cannot_verify` (V13). A device-native colour sample would raise fidelity.
- **U4 — Single device/OS/build scope.** Every verdict is scoped to the captured `device_os_build`; behavior (and accessibility) can differ across devices, OS versions, and app builds. Generalisation requires repeated captures (raises grade toward A).
- **U5 — Target-size point measurement from frames.** Measuring tappable bounds against a frame point grid approximates the true hit area (which may exceed the visible control); flagged controls near the threshold carry this caveat.
- **U6 — Real-AT-user experience is never in scope here.** Representative disabled-user operability/success is TASK-048/V2; this audit only evidences app output. This is a boundary, not a gap to close within WS02 teardown.

**Change log:** v0.1 (2026-11-22) — initial instrument. Eight dimensions across the iOS lens (D1 native, D2 offline, D3 performance, D4 targets) and accessibility lens (D5 VoiceOver, D6 Dynamic Type, D7 contrast, D8 failure states); `IAA` record with mandatory evidence anchor, `test_method`, `severity`, and per-SC `conformance_verdict`; seven non-negotiables (X1–X7); forbidden-value catalogue V1–V20; grading interlock with TASK-004; three-record synthetic worked example. **No app audited; no finding asserted.**
