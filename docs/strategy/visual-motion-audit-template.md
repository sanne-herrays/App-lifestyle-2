# HerRays — Visual & Motion Audit Template

**Deliverable:** TASK-020 — Create the visual and motion audit template
**Workstream:** Experience Teardown (WS02) · Visual/brand + motion/interaction lenses
**Version:** 0.1 · **Status:** Proposed — audit instrument defined, no app yet audited
**Owner (accountable roles, lens-split):** Visual/brand designer (R04) accountable for the **visual lens** (T7a: hierarchy, typography, brand distinction); Motion/interaction designer (R08) accountable for the **motion lens** (T7b: feedback, animation timing, reduced-motion support). Split defined in TASK-003 §2.3/§5.2; reconciled into one audit at TASK-023. Program Director custody.
**Reviewers:** QA/accessibility specialist (R13, reduced-motion & contrast cross-check) · Senior UX/product designer (R03, reconciliation T10) · Content strategist/UX writer (R10, where type carries copy) · Program Director
**Source basis:** `prd.md` §2 (Visual/brand designer lens: "Visual codes, distinctiveness, emotional response" → deliverable "Visual pattern library"; Motion/interaction designer lens: "Transitions, feedback, timing, reduced motion" → deliverable "Interaction/motion inventory"; "Specialists independently audit the same core apps before cross-disciplinary reconciliation. Preserve disagreements."), §3 (core five, incl. "(Not Boring) Habits — How does functional tracking become delightful? … 3D feedback, motion, rewards, visual identity | Caution: Novelty and animation costs need testing"; "popularity … is not proof"), §5 Phase 2 ("Record taps, time, decisions, copy, screen transitions, friction, emotion hypotheses, error states, accessibility and platform behavior … Independently commission behavioral, UX, visual/motion, growth/content, and iOS/accessibility audits for each core app, then reconcile disagreements"), §4 (Pattern Library `PAT-001` "Good/bad pattern, examples, trade-offs, accessibility"; Evidence Library `EVD-001`; grades A–D; "Grade separately for efficacy, relevance and confidence"; no-fabrication rule), §11 Gate 1/Gate 2 ("Polished unsupported reports do not pass"), §13 Prompt 02 ("Act as senior UX, interaction, visual, motion, iOS and accessibility specialists … Capture direct walkthrough evidence, annotated screens … Produce journey library, five detailed teardown dossiers, pattern library, friction catalogue and capability inventory … Distinguish real observations from marketing screenshots or secondary material. Do not select final HerRays features")
**Depends on:** TASK-017 (capture bundle — the artifact this audit reads: frames, screen-transition log, per-frame timestamps, friction/error annotations, and — critically for the motion lens — any **Reduce-Motion-enabled capture pass**) · TASK-016 (ten journey scripts / `JRN` records — every audited screen/transition is anchored to a journey step) · TASK-006 (`APP` registry — supplies the subject + `access_status`) · TASK-005 (`EVD` schema — an accepted audit observation promotes to an `EVD` record) · TASK-004 (evidence grading — the A–D scale, the confidence vocabulary, and the separate-grades rule) · TASK-003 (responsibility matrix — names R04/R08 as the lens-split accountable owners, R13 reviewer) · TASK-008 (gap/contradiction log — unreached Reduce-Motion passes, uncaptured timings, and specialist disagreements route there)
**Feeds:** TASK-018 / TASK-019 / TASK-021 / TASK-022 (sibling specialist audits — reconciled against this one) · TASK-023 (cross-specialist reconciliation — this audit's two lenses are two of the five replayed on the same bundle) · the **Pattern Library** (`PAT-001`, `prd.md` §4 — good/bad visual & motion patterns with trade-offs and accessibility notes) and the **Interaction/Motion Inventory** (`prd.md` §2) · TASK-030 / TASK-031 (capability mechanism record & five-layer worksheet — e.g. the "(Not Boring) Habits" delight/animation mechanism and its "animation costs need testing" caution) · TASK-045 (eight-screen wireframe specification — visual & motion lessons inform the HerRays interaction/visual brief) · TASK-046 ("Your Little Win Today" microinteraction prototype — the feedback/timing/reduced-motion rules here are the spec that prototype must satisfy) · TASK-048 (concept testing — the emotional-response and delight hypotheses made here are what real-user testing later confirms or refutes) · TASK-008 / TASK-009 (gaps/contradictions; each `fix_hypothesis` can become an `EXP`)

---

## 0. How to read this document

TASK-017 defined **how a walkthrough is recorded** — the device/build rig, consent, timestamped frames, the screen-transition log, and the friction/error annotations — and bundles it into a single re-openable artifact. This document defines **how the visual/brand designer and the motion/interaction designer each read that bundle through their lens** — visual composition and brand identity (R04), and motion, feedback and reduced-motion behaviour (R08) — and convert what was captured into coded, evidence-graded, **quality-rated**, uncertainty-bounded audit observations that another designer can check.

It is a **method and a record contract**, not a dataset. It produces no findings about any app. It does five separable things:

1. **Fixes the visual & motion frame** (§4) — the established, published instruments the auditors evaluate against (Gestalt grouping principles; typographic scale/measure/leading conventions and Apple's type system; Ehrenberg-Bass distinctive-brand-asset theory; Norman's feedback principle and Saffer's microinteraction model; the Disney-derived UI motion principles, Apple HIG Motion and the Doherty/response-time thresholds; WCAG 2.3.3/2.2.2 and the vestibular-safety basis for `prefers-reduced-motion`) and exactly how each is used so two auditors evaluating the same bundle converge.
2. **Defines the six audit dimensions** (§5) — the acceptance-criteria set, grouped by lens: **Visual** — D1 hierarchy, D2 typography, D3 brand distinction; **Motion** — D4 feedback, D5 animation timing, D6 reduced-motion support — each as an evaluation guide: the construct basis, the observable question, the concrete measures taken off the TASK-017 bundle, the failure modes to watch, and what a *good* vs *empty* observation looks like.
3. **Defines the `VMA` audit record** (§6) — the exact fields one audited observation produces, including the **mandatory screen/transition reference** back to a TASK-017 frame and `JRN` step, the **mandatory quality rating** on an explicit rubric, the mandatory `auditor_lens` (visual | motion), and the mandatory non-empty uncertainty note. *This is the acceptance-criteria "require evidence-backed observations" made structural.*
4. **Enforces the observation → interpretation → judgment → hypothesis firewall** (§3, §7) — *what is on the captured frame or in the timing log* is an observation; *which visual/motion principle it serves or breaks* is an expert interpretation; *how good/severe it is* is a rubric-bound judgment; *how it makes a real user feel or behave (delight, trust, nausea, abandonment)* is a hypothesis that needs real-user testing (TASK-048), never this audit.
5. **Provides the reusable instrument** (§10–§12) — a per-app audit checklist, a reviewer checklist, the audit YAML stamp, and a clearly-labelled synthetic worked example proving the record, the six dimensions, and the rubric run end-to-end.

> **No-fabrication statement.** This document contains **no audit findings and no visual, brand, or motion claims about any real app.** It does not report, rate, grade, or characterise any screen, colour, typeface, layout, icon, animation, transition, duration, or reduced-motion behaviour of Routinery, Fabulous, (Not Boring) Habits, Habitify, Griply, or any other product, because **no bundle has been audited.** Every field and vocabulary value below is a *specification of what the auditors must evaluate and how*, never an assertion that any app does or does not do something. The published references in §4 (Wertheimer/Gestalt; Bringhurst; Apple Human Interface Guidelines; Romaniuk & Ehrenberg-Bass; Norman; Saffer; Thomas & Johnston; Doherty; Nielsen response-time limits; WCAG 2.1 SC 2.3.3 / 2.2.2; vestibular-disorder motion-sensitivity literature) are cited as **instruments and methods the auditors consult** — their names and definitions, not any scored result for any product. **No measured animation duration, frame rate, colour value, type size, emotional-response score, or delight rating is asserted anywhere.** The only populated records appear in the **clearly-labelled synthetic worked example** (§12), which audits a fictitious `APP-SYNTH-Z` using `*-SYNTH-*` identifiers solely to prove the instrument runs. Nothing here may be cited as evidence about a real product or a real person.

**Scope boundary — what this task is and is not.**
- **TASK-020 (this document) = the visual/brand + motion/interaction lenses.** It answers *"is the visual hierarchy legible and intentional; is the typography a coherent, readable system; is the brand visually distinctive and emotionally coherent; does every action get perceptible feedback; is motion well-timed, purposeful and performant; and does the app honour a user's Reduce-Motion request — all anchored to captured evidence."*
- **It is not the capture.** Which device/build/region, how frames/timings/transitions are recorded, and whether a Reduce-Motion-enabled pass was run, is **TASK-017**. This audit reads that bundle; it never records a new walkthrough or audits from memory, marketing art, App Store screenshots, or personal prior use.
- **It is not the journey script.** Which ten tasks are run is **TASK-016** — this audit anchors every observation to a `JRN` step and never invents a flow that was not captured.
- **It is not the other three lenses.** Usability / cognitive walkthrough / friction counts (TASK-019), behavioral mechanisms / BCT / reward psychology (TASK-018), growth & UX-writing / paywall copy & persuasion (TASK-021) are audited in those templates. Where this audit touches their territory (e.g. a reward *animation* — the motion is ours; whether the reward is behaviourally sound is TASK-018; whether it is usable is TASK-019) it records only the *visual/motion* reading and cross-links; the sibling owns the sibling judgment. Overlaps are reconciled at **TASK-023**, not resolved here.
- **It shares a boundary with TASK-022 (iOS & accessibility) and must not duplicate it.** **Formal WCAG colour-contrast ratios, VoiceOver labelling/reachability, Dynamic Type scaling correctness, and 44pt target sizing are TASK-022.** This audit evaluates *perceptual* visual hierarchy and *type-system coherence* (D1/D2), not the pass/fail contrast ratio or the screen-reader tree. **Reduced-motion support (D6) is explicitly in this task's acceptance criteria and is owned here as a motion-design reading** — *does the app detect and respect the OS Reduce-Motion setting, and is its default motion vestibular-safe* — while TASK-022 owns the broader accessibility audit and the formal WCAG 2.3.3/2.2.2 conformance verdict. The two are **co-reviewed** (R13 reviews this audit) and reconciled at TASK-023; neither asserts the other's verdict.
- **It does not measure representative emotional response or delight.** A designer finding a screen beautiful, or an animation delightful, is **expert judgment (grade D)**, never a user reaction. Emotional response, perceived brand, and delight are hypotheses that await real-user testing (TASK-048). This audit may never state that users *find* an app delightful, premium, calming, or distinctive.
- **It does not decide anything.** A visual or motion problem is evidence and a *fix hypothesis*, not an adopted feature. Opportunity framing is **TASK-041/042**; decisions are **TASK-035**. This audit "does not select final HerRays features" (`prd.md` §13 Prompt 02).

---

## 1. Purpose

A visual or motion audit is only evidence if another designer can open the same captured bundle, apply the same frame and rubric, and arrive at the same findings — or disagree *in a recorded, adjudicable way*. The failure mode WS02 must prevent is the **confident aesthetic opinion**: a designer watches an onboarding, writes "Fabulous looks premium and the animations are delightful," and that sentence is laundered into the teardown dossier and the opportunity atlas as if a visual-quality fact and a user emotion had been established. It establishes nothing — it is an unanchored taste reaction with no frame, no rubric, no screen reference, no measured timing, and no distinction between *the auditor found it pleasant* and *representative users feel delight or trust*. Worse, in the motion case it may praise animation that is slow, janky, purely decorative, or actively harmful to motion-sensitive users — exactly the "Novelty and animation costs need testing" caution the PRD attaches to (Not Boring) Habits (`prd.md` §3). That path fails Gate 1/Gate 2's bar that "polished unsupported reports do not pass" (`prd.md` §11).

This template converts a captured experience into **anchored, grade-bounded, rubric-rated, uncertainty-stamped visual & motion observations** by guaranteeing five properties of every `VMA` record:

1. **Anchored to a screen or transition.** Every finding points to a specific captured frame (`screen_ref`) and/or screen-transition (`transition_ref`) in a TASK-017 bundle and a TASK-016 `JRN` step. "If it was not captured, it was not found" (§2, X1). Motion timings must additionally reference the frame timestamps or event lines they are read from. The **screen/transition reference is a mandatory field.**
2. **Layered.** The record forces four distinct statements — *what is on the frame / in the timing log* (observation), *which visual or motion principle it serves or breaks* (interpretation), *how good or severe* (rubric-bound judgment), *what it would do to a real user's perception, emotion, or body* (hypothesis) — and grades/scopes them separately, so "this looks premium" or "this feels delightful" can never masquerade as a measured user reaction (§2, X2).
3. **Rated on an explicit rubric.** Every finding carries a **mandatory quality/severity rating** derived from the §4.6 rubric (visual-coherence or motion-quality, as applicable), with the rating treated honestly as expert judgment pending real-user confirmation (§2, X3). **The rating is a mandatory field.**
4. **Honest about measurement vs. taste.** Each record declares its `evidence_source` — a *measured* value (a duration read off frame timestamps; a count of distinct type sizes), a *structured expert reading* (hierarchy via the squint test; distinctiveness against the brand-asset frame), or a *taste reaction* (which is logged as context, never as a finding). Aesthetic preference alone is never a gradeable finding (§2, X4).
5. **Uncertainty-bounded.** Every record carries a non-empty uncertainty note and a controlled confidence value; banned certainty/marketing words are rejected at validation (§2, X5; §7.3).

---

## 2. Six non-negotiables (anti-fabrication & integrity guards)

These guards are structural. A `VMA` record that violates any one is rejected at validation (§11), not patched afterward.

- **X1 — No finding without a captured screen or transition reference.** Every finding must reference a `capture_ref` + `screen_ref` (a frame id from TASK-017) and/or a `transition_ref` (a captured screen-to-screen transition), plus the `jrn_ref` step it occurred in (TASK-016). A **motion-timing** measure must additionally reference the `timing_ref` — the frame timestamps or event-log interval it is computed from (TASK-017 §7.3 raw intervals; no cross-session averaging). Auditing from marketing art, an App Store screenshot/preview video, a review, a competitor's design blog, Dribbble, the auditor's memory, or prior personal use is **inadmissible**. If the screen/transition was not in the captured bundle, the correct record is a **coverage gap** (`gap_ref` → TASK-008), never a finding.
- **X2 — Observation ≠ interpretation ≠ judgment ≠ hypothesis, and they are kept in separate fields.** "The celebration transition on habit-complete runs ~900 ms across frames 0041–0049 (timestamps t=12.30–13.20 s)" is an **observation**. "This exceeds the Doherty-threshold comfort band and the Apple-HIG guidance for a confirmation transition → it reads as slow/blocking rather than responsive" is an **interpretation**. "Motion-quality rating 3 (major)" is a **judgment**. "Users will feel the app is sluggish and may skip the reward" is a **hypothesis** about real-user behaviour/emotion. The four live in different fields (`observed`, `principle_refs`/`interpretation`, `rating`, `user_impact_hypothesis`) and are graded/scoped separately. Collapsing them into one sentence is a validation failure (§6, §7.1; `prd.md` §13 Prompt 00 "Separate evidence, inference, hypothesis and invention").
- **X3 — The rating is a required, rubric-bound expert judgment — never a measured user reaction.** Every finding carries a `rating` (0–4) scored against the explicit §4.6 rubric, plus the component ratings so the number is reconstructable. The rating is **expert judgment** (default grade D, §9) and must carry a `rating_basis` note; it is never presented as, or derived from, a user emotion, delight score, brand-perception metric, or preference percentage, because no users were tested (X4). A finding with an empty `rating` is **incomplete** and does not pass peer review.
- **X4 — Measured fact ≠ expert reading ≠ taste, and taste alone is not a finding.** Each record declares `evidence_source ∈ {measured, structured_expert, taste_context}`. A **measured** value (duration in ms, count of type sizes, count of focal points, frame-drop presence) is read directly off the bundle and caps at grade **B** (single capture). A **structured_expert** reading (hierarchy via squint test; distinctiveness via the brand-asset frame; motion purpose via the functional-vs-decorative test) is grade **C** at best. A bare **taste_context** reaction ("I find this elegant") may be *logged for context* but is **never a standalone finding** and is grade **D**; it must be attached to a structured or measured observation to count. No record may state a representative user emotion, delight rating, brand-recall figure, or preference % — that is `n/a` until TASK-048.
- **X5 — Uncertainty is mandatory and certainty/marketing words are banned.** `uncertainty_note` must be non-empty and name at least one real unknown (single auditor, single session, single device/build/region, timing read from capture frame-rate not instrumentation, emotional effect not user-validated, Reduce-Motion pass present/absent). The controlled confidence vocabulary (§7.2) is required. The words **"premium", "delightful", "beautiful", "elegant", "stunning", "intuitive", "seamless", "world-class", "best-in-class", "users will love", "feels expensive"** are rejected as findings unless they appear inside a directly quoted, cited A-grade user-test source (none exists at teardown).
- **X6 — Popularity, polish, and novelty are not quality; motion presence is not motion value; and an unrun Reduce-Motion pass is a recorded gap, not an assumption.** Download counts, star ratings, editorial recognition, and sheer visual flourish are inadmissible as evidence that a design is good or that motion is beneficial; they may be *noted as context* but never raise a rating or grade (`prd.md` §3 "popularity … is not proof"; §3 "Novelty and animation costs need testing"). The **presence** of animation is never scored as a positive by itself — motion is rated on whether it is *purposeful, timed, and performant* (§5 D5). **Reduced-motion support (D6) can only be audited from a capture pass taken with the OS Reduce-Motion setting enabled.** If TASK-017 did not include that pass, D6 is recorded as `coverage: not_observed` + `gap_ref` — **never inferred** from the standard-motion capture and never assumed absent or present.

---

## 3. Where this sits in the capture → evidence chain

```
TASK-016 journey script (J1…J10, scenario SC-1…SC-6) — defines which screens/transitions are walked
        ▼
TASK-017 CAPTURE BUNDLE  (frames + per-frame timestamps, screen-transition log, friction/error/a11y annotations,
                          manifest, AND — for the motion lens — an optional Reduce-Motion-enabled pass)
        │  the single re-openable artifact (capture_ref)
        ▼
┌───────────────────────── same bundle, five independent lenses ─────────────────────────┐
│ TASK-018 behavioral      TASK-019 UX / cognitive walkthrough                             │
│ TASK-020 VISUAL (R04: D1 hierarchy · D2 typography · D3 brand) + MOTION (R08: D4 feedback │
│          · D5 timing · D6 reduced-motion)  ← this doc                                     │
│ TASK-021 growth/content  TASK-022 iOS / accessibility (formal contrast, VoiceOver, 44pt)  │
└──────────────────────────────────────────────────────────────────────────────────────┘
        │  VMA-NNN records: observed frame/transition/timing → principle interpretation → rating (0–4) → user-impact hypothesis
        │  each anchored (X1), layered (X2), rubric-rated (X3), source-typed (X4)
        ▼
TASK-023 cross-specialist reconciliation  (the two lenses reconciled with each other + the other three; disagreements → TASK-008)
        │
        ├──► TASK-005 EVD record (type: observed; grade ≤ B for a measured value; access_date, app_version, region, limitations)
        ├──► PAT-001 Pattern Library (good/bad visual & motion patterns, trade-offs, accessibility) + Interaction/Motion Inventory
        ├──► TASK-030/031 Capability Mechanism Library (e.g. the delight/animation mechanism + its "animation costs" caution)
        ├──► TASK-041/042 Opportunity Atlas (problems reframed as opportunities, not feature requests)
        ├──► TASK-045 wireframe spec + interaction/visual brief · TASK-046 microinteraction prototype (this is its spec)
        └──► TASK-048 concept testing (the delight/emotion/distinctiveness hypotheses are what real-user tests confirm/refute) + TASK-009 experiments
```

The visual/brand designer (R04) and motion/interaction designer (R08) are two of the **five specialists auditing the same captured bundle independently before reconciliation** (`prd.md` §2, §5). This audit's quality is therefore capped by the capture quality (TASK-017): an uncaptured screen cannot be audited, only logged as a gap; animation timing is only as precise as the capture frame rate (a known limitation, §13 U2); and D6 cannot be audited at all without a Reduce-Motion capture pass (X6).

---

## 4. The visual & motion evaluation frame (published instruments)

The auditors evaluate against established, published methods. This section fixes **how each is used** so evaluation is reproducible. These are **instruments the auditors consult**; citing them here asserts nothing about any app (No-fabrication statement, §0).

### 4.1 Gestalt grouping principles — the hierarchy & composition lens (Wertheimer, 1923; Koffka, 1935)
The controlled vocabulary for *why* a layout reads as it does. The auditor tags which principle the composition uses or violates: **proximity** (grouped elements read as related), **similarity** (shared colour/shape/size read as a set), **common region** (a shared container groups), **continuity / closure**, **figure–ground** (is the primary element clearly foreground?). Used for D1. A Gestalt tag is an **interpretation** of how grouping is achieved — never, by itself, proof of user comprehension (that is the hypothesis + TASK-019/TASK-048).

### 4.2 Typographic conventions & the platform type system (Bringhurst, *The Elements of Typographic Style*; Apple HIG — Typography, SF Pro & Dynamic Type)
The frame for D2. The auditor reasons with established conventions — a coherent **modular type scale** (a limited set of sizes in a consistent ratio); **measure** (line length; the ~45–75-characters-per-line comfort range); **leading** (line-height proportional to size); a bounded number of **weights/styles**; and alignment to the platform's type system (SF Pro, text styles, and — for correctness, cross-linked to TASK-022 — Dynamic Type). The auditor **counts** what is countable from the frame (distinct sizes, distinct weights, approximate measure) and reads coherence structurally; readability for low-vision users and Dynamic-Type scaling correctness are **TASK-022**.

### 4.3 Distinctive brand assets — the brand-distinction lens (Romaniuk, *Building Distinctive Brand Assets*, 2018; Ehrenberg-Bass)
The frame for D3. Brand distinctiveness is assessed on two structural axes the auditor can reason about from captured screens — **uniqueness** (would this colour system, logo/mark, type treatment, iconography, illustration style, or signature motion be attributable to *this* app rather than a generic category template?) and **consistency** (are these assets used coherently across the captured journeys?). The auditor also records the **visual codes** present (colour palette, shape language, imagery style, iconography, layout signature). *Emotional response* (`prd.md` §2) is recorded only as an **explicitly-tentative hypothesis** (grade D) — never a measured user feeling. Fame/salience and actual brand recall require real users (TASK-048) and are out of scope here.

### 4.4 Feedback & microinteractions — the feedback lens (Norman, *The Design of Everyday Things*, feedback principle; Saffer, *Microinteractions*, 2013)
The frame for D4. Norman's **feedback principle**: every action should produce a perceptible, timely, informative response. Saffer's microinteraction model gives the structure the auditor checks per interaction — **trigger → rules → feedback → loops/modes**; the audit focuses on the **feedback** component: is there a visible/audible/haptic response to each user action; does state change perceptibly (pressed, loading, success, error, disabled); is the feedback proportionate and timely? (Visibility-of-system-status overlaps UX H1 — this audit owns the *rendered feedback*; the *usability* reading is TASK-019; haptics *as an iOS capability* is TASK-022/TASK-039 — here it is noted if captured, cross-linked otherwise.)

### 4.5 Motion principles, purpose, and timing thresholds — the animation lens (Thomas & Johnston, Disney's 12 principles, as adapted to UI by Google Material Motion; Apple HIG — Motion; Doherty, 1982; Nielsen response-time limits, 1993)
The frame for D5. Motion is evaluated on **purpose** and **timing**, not presence (X6):
- **Functional vs decorative:** does the motion do a job — show spatial/hierarchical relationships, maintain continuity across a transition, direct attention, express cause-and-effect, or mask latency — or is it ornament competing with the task? (Material "informative / focused / expressive"; Apple HIG "motion should be purposeful".)
- **Timing bands (the reproducible yardstick):** the auditor compares the **measured** duration (read off frame timestamps) against published comfort bands — the **Doherty threshold (~400 ms)** for a system response to still feel conversational; **Nielsen's 0.1 s** (feels instantaneous) / **1 s** (uninterrupted flow) / **10 s** (attention lost) limits; and typical UI transition durations (short feedback ~100–200 ms; standard transitions ~200–300 ms; large/expressive ~300–500 ms). A confirmation/transition well over ~500 ms, or a blocking decorative animation the user cannot skip, is flagged.
- **Easing & continuity:** natural easing (ease-in-out / spring) vs linear; whether a transition preserves object continuity (shared-element) or cuts jarringly.
- **Performance:** visible jank / dropped frames / stutter captured in the frames (a performance flag; the formal fps/GPU measurement is an engineering/TASK-022/TASK-039 concern — here it is a captured-evidence flag).

### 4.6 Reduced-motion & vestibular safety — the D6 lens (WCAG 2.1 SC 2.3.3 *Animation from Interactions* (AAA) & SC 2.2.2 *Pause, Stop, Hide* (A); `prefers-reduced-motion` / iOS *Reduce Motion*; vestibular-disorder motion-sensitivity literature, e.g. A. Head / WebKit guidance)
The frame for D6. Large-scale motion (parallax, zoom/scale, spin, rapid slide, 3D rotation) can trigger nausea, dizziness, and migraine in users with vestibular sensitivity. The accessibility expectation is that an app **detects the OS Reduce-Motion setting and substitutes reduced/cross-fade motion or none**. The auditor evaluates two things, **only from a Reduce-Motion-enabled capture pass (X6)**: (a) **detection & response** — does the app change its motion when Reduce Motion is on? (b) **vestibular safety of the default** — even with Reduce Motion off, is the default motion free of large-field triggering effects, or does it rely on them? Formal WCAG conformance verdicts are co-owned with **TASK-022**; this audit provides the motion-design reading and cross-links.

### 4.7 The rating rubric — the mandatory rating (D-all)
Every finding carries a **0–4 rating**. For **problem** findings this is a Nielsen-style severity (frequency × impact × persistence); for **strength** findings it is a coherence/quality rating (how well the principle is served) stored on the same scale with `polarity: strength`. Components are stored separately in `rating_components` so the number is reconstructable:

| Rating | Problem meaning | Strength meaning |
|---|---|---|
| 0 | Not a problem (tagged, inconsequential) | Neutral / unremarkable |
| 1 | Cosmetic | Minor positive |
| 2 | Minor | Solid, conventional-done-well |
| 3 | Major — impedes comprehension, trust, or comfort | Strong, distinctive, a pattern worth adapting |
| 4 | Catastrophic — breaks legibility, feedback, or is vestibular-harmful | Exemplary signature pattern |

- **Frequency** — how often users would plausibly encounter it (one-off screen vs every session).
- **Impact** — how much it degrades (or elevates) comprehension, trust, comfort, or distinctiveness.
- **Persistence** — whether users habituate (one-time vs repeatedly felt).

> **Honesty rule (X3).** The rating is **expert judgment** (default grade D, §9), reconstructable from its components and justified in `rating_basis`; it is never derived from or stated as a user emotion or preference. A motion rating of 4 for vestibular harm is a predicted-harm judgment confirmed only by the captured behaviour (e.g. a large unavoidable parallax that ignores Reduce Motion) and later by real-user/accessibility testing — the record must say which.

---

## 5. The six audit dimensions

Each dimension is an **evaluation guide**, not a questionnaire with a score. For every dimension the auditor produces **zero or more `VMA` records** (§6), one per distinct finding, each anchored to a captured frame/transition and carrying a rating. A dimension with no captured evidence is recorded as **`coverage: not_observed`** with a `gap_ref` — never left blank and never back-filled. These six are the acceptance-criteria set, grouped by lens.

### — VISUAL LENS (R04) —

### D1 — Visual hierarchy
*On each screen, is the single most important element unmistakably primary, and does the eye move in the intended order?*
- **Constructs:** Gestalt proximity/similarity/common-region/figure–ground (§4.1); visual weight (size, colour, contrast, whitespace); the **squint test** (blur the frame — does the primary action/information still dominate?); one-primary-action-per-screen heuristic.
- **Observe (from the bundle):** what is visually dominant on the decisive frame; how many elements compete for primary attention; whether the primary action is visually distinguished from secondary/tertiary; grouping of related controls; use of whitespace to separate regions.
- **Measures:** `focal_points` (count of elements competing as primary on the decisive frame); `squint_primary_identifiable` (bool — survives the squint test); `grouping_principle` (which Gestalt principle carries the layout); `primary_action_distinct` (bool).
- **Failure modes to flag:** multiple equally-weighted calls-to-action; primary action visually identical to secondary; dense ungrouped fields; decorative imagery outweighing the task; no clear entry point.
- **Rating:** two or more co-equal primaries on a core daily screen is typically ≥3; a mostly-clear hierarchy with one minor competing element is 1–2.
- **Good vs empty:** *Good* — "Home screen (FR-0007): 3 elements compete as primary (today-card, streak banner, promo tile) → `focal_points: 3`, `squint_primary_identifiable: false`; figure–ground weak; rating 3 (freq high / impact med / persist med)." *Empty* — "Looks a bit cluttered."

### D2 — Typography
*Is the type a coherent, readable system — or an accumulation of ad-hoc sizes and weights?*
- **Constructs:** modular type scale; measure (~45–75 cpl); leading; bounded weight set; platform type system (SF Pro / text styles) (§4.2). (Dynamic-Type scaling correctness and low-vision readability are **TASK-022** — cross-link, don't duplicate.)
- **Observe:** the set of distinct type sizes and weights across the captured screens; whether a consistent scale/ratio is discernible; line length on text-heavy screens; leading density; alignment/consistency of labels and headings; icon-vs-text-label consistency.
- **Measures:** `distinct_type_sizes` (count across the audited frames); `distinct_weights` (count); `scale_coherent` (bool — do the sizes form a recognisable scale?); `measure_cpl_est` (approx characters-per-line on the densest text screen); `platform_type_aligned` (bool — appears to use the system type stack vs a custom/off-platform treatment).
- **Failure modes to flag:** a large, unsystematic set of sizes/weights (no scale); over-long or cramped measure; inconsistent heading treatment across screens; tiny supporting text used for essential info (flag + route the contrast/Dynamic-Type verdict → TASK-022); decorative type that harms reading.
- **Rating:** an incoherent scale on content-heavy screens is ≥3; one or two off-scale sizes is 1–2.
- **Good vs empty:** *Good* — "Across J2–J5 frames: `distinct_type_sizes: 11`, `distinct_weights: 5`, `scale_coherent: false` — no discernible modular ratio; headings differ between FR-0003 and FR-0012; rating 3." *Empty* — "Typography is nice."

### D3 — Brand distinction
*Is this app visually attributable to itself — distinctive and coherent — or a generic category skin?*
- **Constructs:** distinctive-brand-asset uniqueness + consistency (§4.3); visual codes inventory (colour, shape, imagery, iconography, layout signature); emotional-response **hypothesis** only.
- **Observe:** the colour system, logo/mark usage, signature shapes, illustration/photo style, icon style, and any signature motion; whether a captured screen stripped of its logo would still be recognisable as this brand; consistency of these assets across the captured journeys; coherence of the implied personality.
- **Measures:** `visual_codes` (structured list: palette / shape / imagery / iconography / signature-motion); `uniqueness` (`generic | conventional | distinctive` — structured expert rating against the category, with the comparison basis named); `consistency_across_journeys` (`low | med | high`, with the frames compared); `logo_independent_recognisability` (bool — the stripped-logo test).
- **Failure modes to flag:** off-the-shelf template look; inconsistent palette/iconography between onboarding and home; borrowed/derivative codes; personality that contradicts the HerRays brand principles (non-patronizing, calm, credible — `prd.md` §1); a distinctive look achieved at the cost of legibility (links D1/D2) or of accessibility (→ TASK-022).
- **Rating:** inconsistent brand assets across core journeys is ≥3 on a *problem*; a strong, consistent, genuinely distinctive system is a `strength` rated 3–4 and feeds the good side of `PAT-001`.
- **Good vs empty:** *Good* — "Palette and rounded-square icon language are consistent across J1–J5 (FR-0001/0007/0019); `uniqueness: distinctive` vs a scanned sample of category defaults; `logo_independent_recognisability: true`; `polarity: strength`; rating 3. Emotional-response (`feels calm`) logged as **hypothesis**, grade D, not a user finding." *Empty* — "Strong branding."

### — MOTION LENS (R08) —

### D4 — Feedback
*Does every user action produce a perceptible, timely, proportionate response?*
- **Constructs:** Norman feedback principle; Saffer microinteraction feedback component (§4.4); perceptible state changes (pressed / loading / success / error / disabled).
- **Observe (per captured interaction):** is there a visible response to the tap/gesture; is there a loading/progress indicator for operations with latency; is success/error state perceptible and distinct; are control states (enabled/disabled/selected) visually differentiated; is the feedback proportionate (not absent, not overblown)? Haptic/audio feedback noted **if captured** (its correctness as an iOS capability is TASK-022/TASK-039).
- **Measures:** `feedback_present` (bool per action); `feedback_modalities` (visual / haptic-if-captured / audio-if-captured); `feedback_latency_ms` (from action event to first perceptible response, read off `timing_ref`); `state_differentiated` (bool — pressed/disabled etc. visibly distinct); `missing_feedback_actions` (list of actions with no observed response).
- **Failure modes to flag:** taps with no visible response (user unsure it registered); long operations with no progress indicator (links UX H1 — cross-link TASK-019); success and error states that look alike; no pressed/disabled differentiation; feedback so heavy it distracts.
- **Rating:** a core daily action with no feedback is ≥3; a minor control lacking a pressed state is 1–2.
- **Good vs empty:** *Good* — "J5 mark-complete (EV-0033): tap at t=5.10 s, first perceptible response (checkmark fill) at t=5.46 s → `feedback_latency_ms: ~360`, `feedback_present: true`, `state_differentiated: true`; within comfort band; `polarity: strength`; rating 2." *Empty* — "Feedback feels responsive."

### D5 — Animation timing
*Is motion purposeful, correctly timed, naturally eased, and performant — or slow, gratuitous, or janky?*
- **Constructs:** functional-vs-decorative test; timing bands (Doherty ~400 ms; Nielsen 0.1/1/10 s; transition norms ~100–500 ms); easing & continuity; captured performance/jank (§4.5). (X6: presence of motion is never a positive by itself.)
- **Observe & measure (read off frame timestamps / transition log — captured durations, never estimates):**
  - `duration_ms` per audited transition/animation (`transition_ref` + `timing_ref`), and the comfort-band comparison (`within_band | too_slow | too_fast`).
  - `motion_purpose ∈ {spatial_continuity, attention_direction, cause_effect, status_progress, latency_mask, decorative}` — the job the motion does (or `decorative` if none).
  - `skippable` (bool — can the user bypass a blocking animation?); `easing` (`natural | linear | abrupt`); `continuity` (`preserved | jump_cut`).
  - `jank_observed` (bool — visible dropped frames/stutter in the captured frames).
- **Failure modes to flag:** a confirmation/transition well over ~500 ms on a frequent action; a blocking decorative animation with no skip; linear/abrupt easing that feels mechanical; jump-cuts that lose spatial continuity; captured jank; animation that delays the user's primary task (directly relevant to HerRays' "least unnecessary effort" rule, `prd.md` §15, and the (Not Boring) Habits "animation costs need testing" caution, `prd.md` §3).
- **Rating:** a slow, unskippable, purely decorative animation on a *daily-repeated* action weights frequency `high` and is typically ≥3; a one-off onboarding flourish is lower.
- **Good vs empty:** *Good* — "J7 celebration transition (TR-0041, FR-0041→0049, t=12.30→13.20 s): `duration_ms: ~900`, `within_band: too_slow`, `motion_purpose: decorative`, `skippable: false`; exceeds Doherty/HIG comfort for a daily confirmation; rating 3 (freq high / impact med / persist high — recurs daily). Timing precision limited by capture frame rate (see uncertainty)." *Empty* — "The animations are delightful."

### D6 — Reduced-motion support
*Does the app detect and honour the OS Reduce-Motion setting, and is its default motion vestibular-safe?*
- **Constructs:** WCAG 2.3.3 / 2.2.2; `prefers-reduced-motion` / iOS Reduce Motion; vestibular-trigger classes — parallax, large zoom/scale, spin/rotate, rapid slide, 3D (§4.6). (X6: **requires a Reduce-Motion-enabled capture pass**; formal WCAG verdict co-owned with TASK-022.)
- **Observe (from the Reduce-Motion pass, compared against the standard pass):** does motion change when Reduce Motion is on (reduced/cross-faded/removed)? Which specific animations still play at full scale? In the **default** (Reduce-Motion-off) experience, does any animation use a large-field vestibular-trigger effect, and is it avoidable?
- **Measures:** `reduce_motion_pass_present` (bool — **if false → `coverage: not_observed` + `gap_ref`, stop; do not infer**, X6); `respects_reduce_motion` (`yes | partial | no` — only when the pass is present); `animations_still_full` (list of `transition_ref` that ignored the setting); `vestibular_trigger_classes_default` (list — parallax/zoom/spin/slide/3D present in the default experience); `trigger_avoidable` (bool).
- **Failure modes to flag:** no change under Reduce Motion (ignores the setting); partial respect (some animations still play); large unavoidable parallax/zoom in the default that is a known vestibular trigger; essential information conveyed *only* through motion (fails if motion is reduced).
- **Rating:** ignoring Reduce Motion while using a strong vestibular trigger is 4 (vestibular harm); partial respect is 3; a fully-respected setting with safe defaults is a `strength`.
- **Good vs empty:** *Good* — "Reduce-Motion pass present (BUNDLE-…-RM). Onboarding parallax (TR-0002) still plays at full scale with Reduce Motion on → `respects_reduce_motion: partial`, `animations_still_full: [TR-0002]`, `vestibular_trigger_classes_default: [parallax, zoom]`, `trigger_avoidable: true`; rating 4 (vestibular-harm; CAPTURED under Reduce-Motion-on). Formal WCAG 2.3.3 verdict → TASK-022 (crosslink)." *Empty* — "Probably fine on accessibility."

> **Dimension coverage rule.** A complete per-app visual/motion audit records a result for **all six** dimensions — including explicit `coverage: not_observed` + `gap_ref` where evidence was absent (most commonly **D6** when no Reduce-Motion pass exists, or any dimension where the relevant journey was blocked). Silently omitting a dimension is a validation failure (§11).

---

## 6. The `VMA` audit record (field contract)

One finding = one `VMA-NNN` record. Fields carry requirement markers: **M** mandatory · **C** conditional (rule stated) · **O** optional. The acceptance-criteria essentials — the **evidence anchor** (§6.2), the **rating** (§6.4), and the **lens** (§6.1) — are all **M**.

### 6.1 Identity & provenance
| Field | Req | Type / rule |
|---|---|---|
| `vma_id` | M | `VMA-NNN`, immutable, one finding per id |
| `app_id` | M | → `APP-NNN` (TASK-006) |
| `auditor_lens` | M | `visual` (R04) **or** `motion` (R08) — which lens produced this record (the two are audited independently; reconciled at TASK-023) |
| `dimension` | M | one or more of `D1_hierarchy D2_typography D3_brand_distinction D4_feedback D5_animation_timing D6_reduced_motion`; the `dimension` must match the `auditor_lens` (D1–D3 ↔ visual; D4–D6 ↔ motion) |
| `auditor_role` | M | `visual_brand_designer` (R04) or `motion_interaction_designer` (R08); named individual in `auditor_ref` |
| `audit_date` | M | ISO date; the date the bundle was audited (not captured) |

### 6.2 Evidence anchor (X1 — the acceptance-criteria "evidence-backed observation" field)
| Field | Req | Type / rule |
|---|---|---|
| `capture_ref` | M | → TASK-017 bundle id (name the **Reduce-Motion** bundle explicitly for any D6 record) |
| `screen_ref` | C | ≥1 frame id. **M** for any D1/D2/D3/D4 finding and any D5/D6 finding tied to a static frame. A finding with no `screen_ref` **and** no `transition_ref` is **invalid** (X1) — it is a `gap`, not a `VMA`. |
| `transition_ref` | C | ≥1 captured screen-transition id; **M** for any D5 motion finding and any D6 "animation still full" finding |
| `timing_ref` | C | the frame-timestamp interval or event-log line(s) a duration/latency is computed from; **M** for any `duration_ms` or `feedback_latency_ms` measure (X1) |
| `jrn_ref` | M | → TASK-016 `JRN` step (J1…J10 + scenario) where observed |
| `observed` | M | **Observation only.** Literal description of what is on the captured frame / in the timing log (counts, measured ms, listed visual codes). No principle name, no rating, no "users will…", no marketing adjective. |

### 6.3 Interpretation (X2 — the visual/motion reading, kept separate)
| Field | Req | Type / rule |
|---|---|---|
| `principle_refs` | M | list of the §4 instruments at stake (e.g. `"Gestalt:figure_ground"`, `"HIG:motion"`, `"Doherty"`, `"WCAG:2.3.3"`, `"brand_asset:uniqueness"`) **or** `[none]` with note. **Interpretation** of which principle is served/broken. |
| `polarity` | M | `problem \| strength \| neutral` — strengths feed the good-pattern side of `PAT-001` / the Interaction-Motion Inventory |
| `interpretation` | M | prose: why the observed frame/timing serves or breaks the tagged principle(s). Explicitly an expert reading, not a measured fact. |
| `measures` | C | the dimension-specific measures from §5 (e.g. `focal_points`, `distinct_type_sizes`, `duration_ms`, `respects_reduce_motion`); **M** for any D5/D6 record and any measured D1/D2/D4 record |

### 6.4 Rating (X3 — the acceptance-criteria quality/severity field)
| Field | Req | Type / rule |
|---|---|---|
| `rating` | M | integer **0–4** on the §4.6 rubric. **Mandatory on every record.** |
| `rating_components` | M | `{frequency: low\|med\|high, impact: low\|med\|high, persistence: low\|med\|high\|n/a}` — so the number is reconstructable |
| `rating_basis` | M | non-empty note justifying the rating from its components, and stating whether a `4` was *captured* (e.g. motion ignored Reduce Motion) or *predicted* |
| `evidence_source` | M | `measured \| structured_expert \| taste_context` (X4). `taste_context` may never stand alone as a finding. |

### 6.5 Grading, hypothesis & honesty (X2, X4)
| Field | Req | Type / rule |
|---|---|---|
| `observation_grade` | M | A–D for *the frame/timing/measure is as described* — a single captured, `measured` value caps at **B**; a `structured_expert` reading caps at **C**; `taste_context` is **D** |
| `prediction_grade` | M | A–D for *this will affect real users (perception/emotion/comfort) as hypothesised* — **defaults to D**; only real-user/accessibility testing (TASK-048) can raise it (`validation_ref` required) |
| `user_impact_hypothesis` | C | the predicted effect on a real user (comprehension, trust, delight, nausea, abandonment) — **hypothesis**, explicitly tentative; **M** when `polarity: problem` and `rating ≥ 2`, or for any D6 vestibular-harm finding |
| `confidence` | M | controlled vocabulary (§7.2) |
| `uncertainty_note` | M | **non-empty** (X5); names ≥1 real unknown (single auditor/session/device/build, timing from capture frame-rate, emotion not user-validated, Reduce-Motion pass present/absent) |
| `separation_check` | M | `true` — auditor attests observation/interpretation/rating/hypothesis are not collapsed (§7.1) |

### 6.6 Linkage & next step
| Field | Req | Type / rule |
|---|---|---|
| `coverage` | C | `observed \| not_observed`; **M** `not_observed` + `gap_ref` for any dimension with no captured evidence (esp. **D6** with no Reduce-Motion pass, X6) |
| `pattern_ref` | O | → `PAT-001` Pattern Library / Interaction-Motion Inventory entry this finding populates (good or bad pattern) |
| `gap_ref` | C | → TASK-008; **M** when `coverage: not_observed` or a missing capture (e.g. no Reduce-Motion pass) prevented auditing |
| `contradiction_ref` | O | → TASK-008 when this finding conflicts with marketing, a sibling audit, or the other lens |
| `crosslink_refs` | O | sibling-audit ids this touches (TASK-018/019/021/**022 for formal contrast/VoiceOver/Dynamic-Type/WCAG verdicts**) without claiming their judgment |
| `fix_hypothesis` | O | the smallest design change that would resolve the problem → candidate `EXP` (TASK-009) / opportunity input (TASK-041) / spec note for TASK-045/046; **never** an adopted feature |
| `status` | M | `draft \| peer_reviewed \| reconciled \| superseded` (never hard-deleted) |

---

## 7. Cross-cutting rules

### 7.1 The observation → interpretation → rating → hypothesis firewall (X2)
Every record must keep four statements physically separate:
1. **Observation** (`observed`, `measures`, `screen_ref`/`transition_ref`/`timing_ref`): what is on the captured frame / in the timing log. A `measured` value is gradeable to B; a `structured_expert` reading to C.
2. **Interpretation** (`principle_refs`, `interpretation`): which visual/motion principle is at stake. Expert reading; marked as such.
3. **Rating** (`rating` + `rating_components` + `rating_basis`): rubric-bound expert judgment (grade D, §9), reconstructable, never a user reaction.
4. **Hypothesis** (`user_impact_hypothesis`, `prediction_grade`): the predicted real-user effect (comprehension/trust/delight/comfort). Default D; raised only by real-user/accessibility testing (TASK-048). `separation_check: true` is the explicit attestation these four are not fused.

### 7.2 Confidence vocabulary (reused from TASK-004 §5.2)
`established` (A-grade, replicated science or representative user validation) · `likely` (B, a directly measured value from the capture) · `indicative` (C, a structured expert reading — squint test, brand-asset frame, motion-purpose test) · `speculative` (D, taste/analogy). A measured duration or count may be `likely`; a brand-distinctiveness or emotional-response reading may not exceed `indicative`/`speculative` without a `validation_ref` from real-user testing.

### 7.3 Banned certainty/marketing language (X5)
Rejected at validation unless inside a quoted, cited A-grade user-test source (none exists at teardown): **premium, delightful, beautiful, elegant, stunning, gorgeous, intuitive, seamless, effortless (as asserted fact), buttery, polished (as a verdict), world-class, best-in-class, users will love / users feel, feels expensive, on-brand (as asserted user perception)**. Replace with graded, hedged statements ("measured ~900 ms, above the ~400 ms Doherty comfort band; predicted to read as slow — not yet user-validated, see `validation_ref`").

### 7.4 Expert aesthetic/motion reading is a prediction, not a test (X4)
Visual and motion heuristics **predict** how a design will be perceived; they do not measure emotion, delight, trust, brand recall, or comfort. Every such prediction carries `prediction_grade ≤ C` (≤ D for pure taste) and an explicit note that it awaits real-user confirmation (TASK-048). The audit's value is in *finding candidate strengths and problems fast and traceably* — including the quietly dangerous ones (slow/janky/decorative motion; vestibular triggers) that a taste-only review would praise — not in proving user impact.

### 7.5 Lens independence & disagreement (`prd.md` §2 "Preserve disagreements")
R04 (visual) and R08 (motion) audit the bundle **independently of each other and of the other three lenses**, before reconciliation (TASK-023). Where the two lenses, or a sibling audit, or a second auditor disagree (e.g. visual rates a distinctive animation a `strength` while motion rates it `too_slow`/vestibular-unsafe), the disagreement is recorded as a `contradiction_ref` (TASK-008) and preserved — **never silently overwritten or averaged** (TASK-008 G2; TASK-004 "never average contradictions"). A distinctive look that harms comfort or legibility is a *preserved tension*, resolved by evidence at reconciliation, not split-the-difference.

### 7.6 The accessibility boundary with TASK-022 (co-review, no duplication)
This audit evaluates *perceptual* hierarchy, *type-system coherence*, *brand distinctiveness*, *rendered feedback*, *motion purpose/timing*, and the *motion-design reading of reduced-motion*. It must **not** assert: a WCAG colour-contrast pass/fail ratio, a VoiceOver label/reachability verdict, a Dynamic-Type scaling-correctness verdict, a 44pt target verdict, or a formal WCAG 2.3.3/2.2.2 conformance verdict. Each of those is **TASK-022** and must be `crosslink_refs: [TASK-022]`, not stated here. R13 reviews this audit precisely to police that boundary.

---

## 8. Forbidden-value & validation-failure catalogue

A record or audit is rejected if any of the following holds:

| # | Failure | Rule violated |
|---|---|---|
| V1 | A finding with neither `screen_ref` nor `transition_ref` (and it is not a `not_observed` gap) | X1 — no evidence anchor |
| V2 | A finding, measure, visual code, or timing sourced from marketing art / App Store preview / review / memory / Dribbble, not the bundle | X1 |
| V3 | `observed` contains a principle name, a rating, a marketing adjective, or "users will…" | X2 / §7.1 |
| V4 | `rating` empty, or outside 0–4, or missing `rating_components`/`rating_basis` | X3 (acceptance-criteria field) |
| V5 | A rating presented as or derived from a user emotion, delight score, brand-recall, or preference % | X3 / X4 |
| V6 | A representative emotional response, delight rating, brand-perception metric, or "users find it premium/distinctive" asserted | X4 |
| V7 | `prediction_grade` > C with no real-user/accessibility `validation_ref` | X4 / §7.4 |
| V8 | `uncertainty_note` empty, or uses banned certainty/marketing language | X5 / §7.3 |
| V9 | A `duration_ms` / `feedback_latency_ms` measure with no `timing_ref` | X1 / §6.2 |
| V10 | A **D6** finding asserted with no Reduce-Motion capture pass (inferred from the standard pass) | X6 |
| V11 | A dimension omitted from a per-app audit with no `coverage: not_observed` + `gap_ref` | §5 coverage rule |
| V12 | Presence of animation, popularity, rating, editorial, or sheer polish used to raise a rating/grade | X6 |
| V13 | A contradiction (between the two lenses, with a sibling audit, or a second auditor) resolved by deletion/averaging | §7.5 |
| V14 | `separation_check: true` asserted but observation/interpretation/rating/hypothesis are fused | §7.1 |
| V15 | A TASK-022-owned verdict (WCAG contrast ratio, VoiceOver, Dynamic-Type correctness, 44pt, formal WCAG 2.3.3/2.2.2) asserted here instead of cross-linked | §7.6 / §0 scope |
| V16 | `dimension` inconsistent with `auditor_lens` (e.g. a `visual` record tagged D5) | §6.1 |
| V17 | A `taste_context`-only record submitted as a standalone finding | X4 |

---

## 9. Grading & rating interlock (with TASK-004)

| What is being graded/rated | Field | Ceiling from one captured session | Raised by |
|---|---|---|---|
| A measured value (ms, counts) is as described | `observation_grade` (measured) | **B** (single capture, capture-frame-rate precision) | repeated independent captures / instrumentation |
| A structured expert reading (hierarchy, distinctiveness, motion purpose) is sound | `observation_grade` (structured_expert) | **C** (quality-of-method only) | second independent auditor agreement |
| Which visual/motion principle is at stake | (interpretation, not A–D) | quality-of-reasoning only | — |
| How good/severe the finding is (0–4) | `rating` | **expert judgment (grade D)**, rubric-bound & reconstructable | real-user/accessibility testing (TASK-048) confirms/revises |
| It will affect real users (emotion/comfort/trust) as hypothesised | `prediction_grade` | **D** | real-user/accessibility testing (TASK-048) + `validation_ref` |

This operationalises `prd.md` §4: "Grade separately for efficacy, relevance and confidence … Do not interpret a high grade on usability as a high grade on health impact," and `prd.md` §9's ladder. A perfectly-measured, clearly-reasoned motion finding can sit at `observation_grade: B` (the duration), `rating: 3`, `prediction_grade: D` — and that is the correct, honest state for most teardown findings: *we measured this precisely, we judge it a problem, and we have not yet proven what it does to real users.*

---

## 10. Per-app visual/motion audit checklist (the reusable instrument)

Run **twice** per core app — once for the **visual lens (R04)**, once for the **motion lens (R08)** — against its captured bundle set, independently, before reconciliation.

**Pre-audit**
- [ ] Bundle(s) received from TASK-017; `app_version`, `region`, `access_status`, and **capture frame rate** readable from the manifest.
- [ ] For the motion lens: confirm whether a **Reduce-Motion-enabled pass** exists; if not, D6 will be a `not_observed` + `gap_ref` (X6) and a capture request is logged to TASK-008.
- [ ] Journey coverage confirmed: which of J1–J10 are present (D5/D6 especially need transitions; D3 needs onboarding→home→action for consistency).
- [ ] Evaluation frame loaded (§4): Gestalt set, type-scale conventions, brand-asset axes, feedback/microinteraction model, motion timing bands, reduced-motion/vestibular frame, the §4.6 rubric.

**Audit (per dimension — visual D1–D3 or motion D4–D6)**
- [ ] Walk the captured frames/transitions in order; for each finding create a `VMA` record anchored to a `screen_ref` and/or `transition_ref` (X1) — and `timing_ref` for any ms measure (V9).
- [ ] Write a literal `observed`; keep interpretation/rating/hypothesis in separate fields; set `separation_check` (X2).
- [ ] Tag `principle_refs` + `polarity`; record the dimension's `measures` (§5) off the frames/timing log (D5 especially: `duration_ms` + comfort-band comparison; D6: `respects_reduce_motion` from the RM pass only).
- [ ] Assign `rating` 0–4 with `rating_components` + `rating_basis`; set `evidence_source` (`measured`/`structured_expert`/`taste_context`) (X3/X4).
- [ ] Grade `observation_grade` (≤ B measured / ≤ C structured) and `prediction_grade` (≤ C) (§9); write `user_impact_hypothesis` for problems ≥ rating 2 and all D6 vestibular-harm findings.
- [ ] Write a non-empty `uncertainty_note`; no banned words (X5, §7.3).
- [ ] Record `coverage: not_observed` + `gap_ref` for any dimension without captured evidence (§5) — most commonly D6 without a Reduce-Motion pass.
- [ ] Route all TASK-022-owned verdicts (contrast ratio, VoiceOver, Dynamic Type, 44pt, formal WCAG) to `crosslink_refs`, never assert them here (§7.6, V15).

**Post-audit**
- [ ] Populate `PAT-001` Pattern Library + the Interaction/Motion Inventory (good and bad visual & motion patterns, with trade-offs + accessibility cross-link to TASK-022).
- [ ] Draft `fix_hypothesis` for each high-rating finding → opportunity input (TASK-041) / candidate `EXP` (TASK-009) / spec note for TASK-045/046 — **not** an adopted feature.
- [ ] Peer review by the lens reviewer (R13 for reduced-motion/contrast cross-check) → `status: peer_reviewed`.
- [ ] Hold for TASK-023 reconciliation; reconcile the two lenses with each other and the other three; preserve disagreements as `contradiction_ref` (§7.5).
- [ ] Promote accepted records to `EVD` (TASK-005) with `access_date`, `app_version`, `region`, `limitations`.

**Validation gate** — run §8 V1–V17; any hit blocks the audit (Gate 1/Gate 2, `prd.md` §11).

---

## 11. Reviewer checklist (sign-off)

- [ ] Every finding has a `screen_ref` and/or `transition_ref` (no V1/V2); every ms measure has a `timing_ref` (no V9).
- [ ] `auditor_lens` set and `dimension` consistent with it (no V16); observation/interpretation/rating/hypothesis separated in every record (no V3/V14).
- [ ] Every record has a rating 0–4 with components + basis (no V4); no rating derived from or stated as a user emotion/preference (no V5).
- [ ] No representative emotional response / delight / brand-recall / preference asserted (no V6); no `prediction_grade` > C without a real-user/accessibility `validation_ref` (no V7).
- [ ] No **D6** finding asserted without a Reduce-Motion capture pass (no V10); all six dimensions resolved (audited or `not_observed` + gap) (no V11).
- [ ] Every record has a non-empty, certainty/marketing-word-free uncertainty note (no V8).
- [ ] Presence-of-animation / popularity / polish never used to move a rating or grade (no V12); contradictions (incl. visual-vs-motion) preserved, not averaged (no V13).
- [ ] No TASK-022-owned verdict (WCAG contrast, VoiceOver, Dynamic Type, 44pt, formal 2.3.3/2.2.2) asserted here instead of cross-linked (no V15); no `taste_context`-only finding (no V17).
- [ ] No fabricated frame, timing, colour, type size, visual code, animation, or emotion anywhere.

---

## 12. Synthetic worked example — ILLUSTRATIVE (synthetic)

> **SYNTHETIC — proves the instrument runs; asserts nothing about any real app.** `APP-SYNTH-Z` is a fictitious app; all `*-SYNTH-*` ids are fictitious; all frames, transitions, timings, and visual codes are fictitious. These records exist only to show the six dimensions, the rubric, the lens-split, and the `VMA` contract working end-to-end. They are not evidence.

### 12.1 `VMA-SYNTH-001` — visual lens · D1 hierarchy (competing primaries on the home screen)
```yaml
vma_id: VMA-SYNTH-001
app_id: APP-SYNTH-Z
auditor_lens: visual
dimension: [D1_hierarchy]
auditor_role: visual_brand_designer         # auditor_ref: [SYNTHETIC]
audit_date: 2026-11-22
# --- evidence anchor (X1) ---
capture_ref: BUNDLE-SYNTH-Z-J05
screen_ref: [FR-SYNTH-0007]
transition_ref: []
timing_ref: []
jrn_ref: [J5-normal-daily]
observed: >
  Home screen (FR-0007) shows three elements of comparable visual weight on
  first load: the "today" card, a streak banner, and a promo tile — each with a
  similar-size filled button. (Literal; no principle/rating/adjective words.)
# --- interpretation (X2) ---
principle_refs: ["Gestalt:figure_ground", "visual_weight", "one_primary_action"]
polarity: problem
interpretation: >
  Three co-equal weighted elements leave no single figure against the ground;
  the squint test does not resolve a primary. Expert reading, not a measured
  user-comprehension fact.
measures: {focal_points: 3, squint_primary_identifiable: false, primary_action_distinct: false, grouping_principle: "weak-proximity"}
# --- rating (X3) ---
rating: 3
rating_components: {frequency: high, impact: med, persistence: med}
rating_basis: >
  Hit every session (freq high); slows orientation but task still reachable
  (impact med); layout is learnable over time (persist med) -> major (3).
  PREDICTED (structured squint-test reading), not a captured failure.
evidence_source: structured_expert
# --- grading / hypothesis (X2, X4) ---
observation_grade: C                         # structured expert reading (squint test), single session
prediction_grade: D
user_impact_hypothesis: >
  Hypothesis: some users may hesitate or mis-tap on first daily open; needs
  real-user testing (TASK-048). Not demonstrated here.
confidence: indicative
uncertainty_note: >
  Single auditor, single session, build [SYNTHETIC]. Squint-test reading, not
  user-validated; device/version specific. Contrast ratios are TASK-022.
separation_check: true
# --- linkage ---
coverage: observed
pattern_ref: PAT-SYNTH-012                   # bad pattern: competing primaries on home
gap_ref: null
contradiction_ref: null
crosslink_refs: [TASK-019]                   # usability reading of the same screen is TASK-019's
fix_hypothesis: >
  Demote promo + streak to secondary weight; single primary CTA -> opportunity
  input (TASK-041) / candidate EXP (TASK-009).
status: peer_reviewed
```

### 12.2 `VMA-SYNTH-002` — motion lens · D5 animation timing (slow unskippable celebration)
```yaml
vma_id: VMA-SYNTH-002
app_id: APP-SYNTH-Z
auditor_lens: motion
dimension: [D5_animation_timing]
auditor_role: motion_interaction_designer
audit_date: 2026-11-22
capture_ref: BUNDLE-SYNTH-Z-J07
screen_ref: [FR-SYNTH-0041, FR-SYNTH-0049]
transition_ref: [TR-SYNTH-0041]
timing_ref: [FR-0041@t=12.30s .. FR-0049@t=13.20s]
jrn_ref: [J7-progress-reward]
observed: >
  Habit-complete celebration transition plays from FR-0041 (t=12.30s) to
  FR-0049 (t=13.20s); no skip control appears in the captured frames; the
  underlying "done" state is already set at FR-0042.
principle_refs: ["Doherty", "HIG:motion", "Nielsen:1s", "motion_purpose:decorative"]
polarity: problem
interpretation: >
  ~900 ms blocking confirmation animation on a daily action exceeds the ~400 ms
  Doherty comfort band and the 1 s flow limit; purpose reads as decorative, not
  functional (the state was already set). Expert reading of a measured value.
measures: {duration_ms: 900, within_band: too_slow, motion_purpose: decorative, skippable: false, easing: natural, continuity: preserved, jank_observed: false}
rating: 3
rating_components: {frequency: high, impact: med, persistence: high}
rating_basis: >
  Occurs on a daily-repeated action (freq high); adds ~0.9 s each time (impact
  med); it recurs and cannot be skipped (persist high) -> major (3). Duration is
  CAPTURED; the "too slow" judgment is expert.
evidence_source: measured
observation_grade: B                         # duration directly measured from frame timestamps
prediction_grade: D
user_impact_hypothesis: >
  Hypothesis: daily users may perceive the app as slow and may disengage from
  the reward; magnitude needs real-user testing (TASK-048).
confidence: likely                           # the ~900 ms measure is likely; the felt-slowness is not
uncertainty_note: >
  Timing precision limited by capture frame rate (±1 frame); single session,
  build [SYNTHETIC]. A skip affordance may exist off-capture -> re-check. No
  representative users. "(Not Boring)-style" delight is a hypothesis, not a finding.
separation_check: true
coverage: observed
pattern_ref: PAT-SYNTH-030                   # bad pattern: slow unskippable decorative confirmation
gap_ref: null
contradiction_ref: CON-SYNTH-004             # visual lens may rate this transition a `strength`; preserved
crosslink_refs: [TASK-018]                   # whether the reward is behaviourally sound is TASK-018
fix_hypothesis: >
  Cut to ~250-300 ms, make skippable, keep state-set immediate -> spec note for
  TASK-046 microinteraction / candidate EXP (TASK-009).
status: peer_reviewed
```

### 12.3 `VMA-SYNTH-003` — motion lens · D6 reduced-motion (no Reduce-Motion pass → honest gap)
```yaml
vma_id: VMA-SYNTH-003
app_id: APP-SYNTH-Z
auditor_lens: motion
dimension: [D6_reduced_motion]
auditor_role: motion_interaction_designer
audit_date: 2026-11-22
capture_ref: BUNDLE-SYNTH-Z-J01           # standard-motion pass only; NO Reduce-Motion pass in this bundle
screen_ref: []
transition_ref: []
timing_ref: []
jrn_ref: [J1-discovery, J2-onboarding]
observed: >
  coverage: not_reached — no Reduce-Motion-enabled capture pass exists in the
  TASK-017 bundle set for APP-SYNTH-Z, so whether the app respects the OS
  Reduce-Motion setting cannot be observed. (A large onboarding parallax is
  present in the standard pass, FR-0002, but its behaviour UNDER Reduce Motion
  is unknown and MUST NOT be inferred.)
principle_refs: ["WCAG:2.3.3", "iOS:reduce_motion", "vestibular_safety"]
polarity: neutral
interpretation: "n/a — reduced-motion response not observable without the RM pass"
measures: {reduce_motion_pass_present: false}
rating: 0                                   # cannot rate an unobserved behaviour; 0 + basis, not blank
rating_components: {frequency: n/a, impact: n/a, persistence: n/a}
rating_basis: >
  Not assessable — no Reduce-Motion pass. Recorded as 0 with this basis rather
  than left blank (V4). Do NOT infer respect/neglect from the standard pass (X6/V10).
evidence_source: measured                   # the absence of the pass is the observed fact
observation_grade: B
prediction_grade: D
user_impact_hypothesis: "n/a — cannot hypothesise vestibular impact without the RM pass"
confidence: speculative
uncertainty_note: >
  Reduce-Motion behaviour unobserved (pass not captured). The default-pass
  parallax (FR-0002) is a potential vestibular trigger but its RM behaviour is
  unknown. Re-capture with iOS Reduce Motion ON. Formal WCAG verdict -> TASK-022.
separation_check: true
coverage: not_observed
gap_ref: GAP-SYNTH-033                       # -> TASK-008: request Reduce-Motion capture pass
contradiction_ref: null
crosslink_refs: [TASK-022]                   # formal WCAG 2.3.3 / 2.2.2 conformance verdict is TASK-022's
fix_hypothesis: null
status: draft
```

### 12.4 Validation trace (why these pass §8)
- **V1/V2:** 001 anchors to a frame, 002 to frames + a transition + a timing interval; 003 honestly has empty anchors **because** it is a `not_observed`/`not_reached` gap (not a finding) with a `gap_ref`. ✔
- **V3/V14:** `observed` in each is literal; principles/ratings/hypotheses live in their own fields; `separation_check: true`. ✔
- **V4:** every record has `rating` 0–4 with `rating_components` + `rating_basis` — including 003 which records 0 + a basis rather than blank. ✔
- **V5/V6:** no rating is derived from a user emotion; no delight/brand-recall/premium claim asserted anywhere (the "(Not Boring)-style delight" is explicitly flagged as a hypothesis, not a finding). ✔
- **V7:** all `prediction_grade ≤ D`, no `validation_ref` claimed. ✔
- **V8:** every `uncertainty_note` non-empty, no banned marketing words. ✔
- **V9:** the only ms measure (002 `duration_ms: 900`) carries a `timing_ref`. ✔
- **V10:** 003 refuses to assert a D6 finding with no Reduce-Motion pass — it is a gap, not an inference. ✔
- **V11/V16:** lenses/dimensions are consistent (001 visual↔D1; 002/003 motion↔D5/D6); this synthetic set shows D1, D5 audited and D6 resolved as `not_observed` + gap (D2/D3/D4 would be completed in the full per-app run). ✔
- **V12/V15/V17:** no popularity/polish/animation-presence used to raise a rating; TASK-022 verdicts (contrast, WCAG 2.3.3) are cross-linked, not asserted; no `taste_context`-only finding. ✔
- **V13:** 002 preserves the visual-vs-motion disagreement as `contradiction_ref: CON-SYNTH-004` rather than averaging it. ✔

---

## 13. Dependencies, open unknowns & change log

**Consumes:** TASK-017 (bundle + per-frame timestamps + the Reduce-Motion pass) · TASK-016 (`JRN` steps) · TASK-006 (`APP`) · TASK-005 (`EVD`) · TASK-004 (grading/confidence) · TASK-003 (R04/R08 lens-split accountable, R13 reviewer).
**Feeds:** TASK-018/019/021/022 (sibling audits) · TASK-023 (reconciliation of the two lenses + the other three) · `PAT-001` Pattern Library + Interaction/Motion Inventory · TASK-030/031 (capability mechanisms incl. the delight/animation caution) · TASK-045 (wireframe + interaction/visual brief) · TASK-046 (microinteraction prototype — this is its spec) · TASK-048 (concept testing confirms/refutes the emotion/delight/distinctiveness hypotheses) · TASK-008/009 (gaps/contradictions/experiments).

**Open unknowns (carried, not resolved here):**
- **U1** — Which visual and motion strengths and problems recur across the five core apps is unknown until auditing is done (no data invented).
- **U2** — **Animation-timing precision is bounded by the capture frame rate.** Durations read from a 30/60 fps screen capture carry ±1-frame error; sub-100 ms measures are coarse. Instrumented timing (if ever available) would lift `observation_grade` above B; flagged on every D5 record.
- **U3** — **D6 depends entirely on a Reduce-Motion capture pass** (TASK-017). Where that pass is absent, D6 is a documented `not_observed` gap, never an inference (X6/V10); a capture request routes to TASK-008.
- **U4** — Every emotional-response, delight, trust, and brand-distinctiveness reading (`prediction_grade ≤ C/D`) awaits real-user testing (TASK-048); visual/motion heuristics predict perception, they do not measure it (§7.4).
- **U5** — The lens-split (R04 visual / R08 motion) is the TASK-003 §2.3 proposed default; if staffing merges the roles, the two checklists become one person's two passes but the independence-before-reconciliation discipline (§7.5) still holds, and the merge is flagged for Program-Director confirmation.
- **U6** — The boundary with TASK-022 (formal contrast, VoiceOver, Dynamic Type, 44pt, WCAG conformance) is a co-review seam; R13 polices it. Any ambiguous case is recorded as a cross-link + a reconciliation item, not resolved unilaterally here.

**Change log:** v0.1 (2026-11-22) — initial visual & motion audit template; six dimensions (D1 hierarchy / D2 typography / D3 brand distinction / D4 feedback / D5 animation timing / D6 reduced-motion support), lens-split (R04 visual / R08 motion), Gestalt + type-system + brand-asset + feedback/microinteraction + motion-timing + reduced-motion/vestibular frame, mandatory evidence anchor + rating (0–4) + `auditor_lens`, observation→interpretation→rating→hypothesis firewall, `VMA` record contract, synthetic worked example. No app audited.
