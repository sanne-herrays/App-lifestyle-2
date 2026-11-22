# HerRays — Growth & UX Writing Audit Template

**Deliverable:** TASK-021 — Create the growth and UX writing audit template
**Workstream:** Experience Teardown (WS02) · Growth/analyst + content/UX-writing lenses
**Version:** 0.1 · **Status:** Proposed — audit instrument defined, no app yet audited
**Owner (accountable roles, lens-split):** Product analyst/growth specialist (R09) accountable for the **growth lens** (G7a: first-value moments, paywall timing/placement, return-trigger mechanics); Content strategist/UX writer (R10) accountable for the **content lens** (G7b: lifecycle message copy, copy tone & autonomy). Split defined in TASK-003 §2.3/§5.2; reconciled into one audit at TASK-023.
**Reviewers:** Behavioral scientist (R02, autonomy/guilt & dark-pattern cross-check) · Senior UX/product designer (R03, reconciliation T10) · Clinical reviewer (R14, medical-claims-in-copy & dependency/manipulation safety) · Privacy/regulatory reviewer (R15, subscription/renewal/consent & medical-claim regulatory triggers) · Program Director
**Source basis:** `prd.md` §2 (Product analyst/growth specialist lens: "Activation, retention hypotheses, economics, experimentation" → deliverable "Measurement plan"; Content strategist/UX writer lens: "Coaching language, tone, clarity, autonomy" → deliverable "Content patterns and anti-patterns"; "Specialists independently audit the same core apps before cross-disciplinary reconciliation. Preserve disagreements."), §3 (core five, incl. "Fabulous — How do abstract goals become guided behavior programs? … Onboarding, coaching, narratives, habit plans, **paywalls** | Caution: Engagement does not establish clinical efficacy"; "popularity … is not proof"), §5 Phase 1 ("Do not infer retention from reviews or downloads") and Phase 2 ("Record taps, time, decisions, **copy**, screen transitions, friction, emotion hypotheses, error states … Independently commission behavioral, UX, visual/motion, **growth/content**, and iOS/accessibility audits for each core app, then reconcile disagreements"; journey 10 = "paywall/cancellation/return"), §4 (Pattern Library `PAT-001` "Good/bad pattern, examples, trade-offs, accessibility"; Evidence Library `EVD-001`; grades A–D; "Grade separately for efficacy, relevance and confidence"; **"Never fabricate interview participants, actual retention, CAC, LTV, clinical outcomes or internal competitor data"**), §1 ("non-patronizing", "user autonomy … non-negotiable"), §11 Gate 1/Gate 2 ("Polished unsupported reports do not pass"), §13 Prompt 02 ("Commission independent audits from behavioral science, UX, visual/motion, **growth/content** and iOS/accessibility, then reconcile contradictions … Do not select final HerRays features"), §15 ("build the product that delivers meaningful user value with the least unnecessary effort, not the one with … highest engagement count")
**Depends on:** TASK-017 (capture bundle — the artifact this audit reads: frames, screen-transition log, per-frame timestamps, **captured copy strings**, friction/error annotations, and — critically for lifecycle/return-trigger findings — any **multi-day / notification / subscription-email capture pass**) · TASK-016 (ten journey scripts / `JRN` records — growth-relevant journeys J1 discovery, J2 onboarding, J3 personalization, J4 first action, J6 reminders/re-entry, J10 paywall/cancellation/return) · TASK-006 (`APP` registry — supplies the subject + `access_status`) · TASK-005 (`EVD` schema — an accepted audit observation promotes to an `EVD` record) · TASK-004 (evidence grading — the A–D scale, the confidence vocabulary, and the separate-grades rule) · TASK-003 (responsibility matrix — names R09/R10 as the lens-split accountable owners, R02/R14/R15 reviewers) · TASK-008 (gap/contradiction log — uncaptured lifecycle messages, unreached cancellation paths, and specialist disagreements route there)
**Feeds:** TASK-018 / TASK-019 / TASK-020 / TASK-022 (sibling specialist audits — reconciled against this one) · TASK-023 (cross-specialist reconciliation — this audit's two lenses are two of the five replayed on the same bundle) · the **Pattern Library** (`PAT-001`, `prd.md` §4 — good/bad growth & content patterns with trade-offs) and the **"Content patterns and anti-patterns"** deliverable (`prd.md` §2) · the **"Measurement plan"** (`prd.md` §2 — this audit yields activation/retention **hypotheses**, never measured metrics) · TASK-015 (commercial estimates — any download/revenue/ranking number is recorded *there*, clearly-labelled third-party, never asserted here) · TASK-033 (capability safety gate — manipulation / unsupported-claims checks; dark-pattern findings feed the manipulation gate) · TASK-030 / TASK-031 (capability mechanism record & five-layer worksheet — e.g. the paywall-timing or return-trigger mechanism and its autonomy caution) · TASK-041 / TASK-042 (Opportunity Atlas — problems reframed as opportunities, not feature requests) · TASK-045 (eight-screen wireframe spec — first-run/first-value, paywall, and copy lessons inform the HerRays content & activation brief) · TASK-048 (concept testing — the willingness-to-pay, comprehension, and return-intention **hypotheses** made here are what real-user testing later confirms or refutes) · TASK-008 / TASK-009 (gaps/contradictions; each `fix_hypothesis` can become an `EXP`)

---

## 0. How to read this document

TASK-017 defined **how a walkthrough is recorded** — the device/build rig, consent, timestamped frames, the screen-transition log, the **captured copy strings**, and the friction/error annotations — and bundles it into a single re-openable artifact. This document defines **how the product analyst/growth specialist and the content strategist/UX writer each read that bundle through their lens** — the activation/monetization/retention *structure* of the experience (R09), and the voice, clarity, and autonomy of its *language* (R10) — and convert what was captured into coded, evidence-graded, **quality-rated**, uncertainty-bounded audit observations that another specialist can check.

It is a **method and a record contract**, not a dataset. It produces no findings about any app. It does five separable things:

1. **Fixes the growth & content frame** (§4) — the established, published instruments the auditors evaluate against (the activation / time-to-first-value and AARRR funnel concepts; freemium / hard-vs-soft / onboarding-paywall taxonomy; Brignull's deceptive-design ("dark pattern") taxonomy and the FTC/EU regulatory framing; Eyal's Hook model read *through its manipulation hazard*; Self-Determination-Theory autonomy-supportive language and Motivational-Interviewing tone; UX-writing / content-design plain-language principles; the lifecycle-messaging stage model) and exactly how each is used so two auditors evaluating the same bundle converge.
2. **Defines the five audit dimensions** (§5) — the acceptance-criteria set, grouped by lens: **Growth** — D1 first-value moments, D2 paywall timing, D5 return triggers; **Content** — D3 lifecycle messaging, D4 copy tone — each as an evaluation guide: the construct basis, the observable question, the concrete measures taken off the TASK-017 bundle, the failure modes to watch, and what a *good* vs *empty* observation looks like.
3. **Defines the `GCA` audit record** (§6) — the exact fields one audited observation produces, including the **mandatory evidence anchor** (a captured frame / copy string / transition, plus a `JRN` step), the **mandatory quality/severity rating** on an explicit rubric, the mandatory `auditor_lens` (growth | content), and the mandatory non-empty uncertainty note. *This is the acceptance-criteria "define first-value moments, paywall timing, lifecycle messaging, copy tone and return triggers" made structural.*
4. **Enforces the observation → interpretation → judgment → hypothesis firewall, and the hard prohibition on conversion/retention claims** (§3, §7) — *what the captured funnel/paywall/copy actually is* is an observation; *which growth or persuasion principle it serves or breaks* is an expert interpretation; *how good/severe it is* is a rubric-bound judgment; *whether it converts, retains, or drives return* is a **prohibited claim** at teardown — it is at most a hypothesis awaiting real data (TASK-048 / a longitudinal pilot), never an asserted metric. **No conversion rate, retention rate, activation rate, churn, LTV, CAC, trial-start or revenue figure may be asserted or inferred anywhere** (acceptance criterion; `prd.md` §4, §5 Phase 1).
5. **Provides the reusable instrument** (§10–§12) — a per-app audit checklist, a reviewer checklist, the audit YAML stamp, and a clearly-labelled synthetic worked example proving the record, the five dimensions, and the rubric run end-to-end.

> **No-fabrication statement.** This document contains **no audit findings and no growth, monetization, copy, or retention claims about any real app.** It does not report, rate, grade, or characterise any onboarding, first-value moment, paywall, price, trial term, lifecycle message, notification, email, or copy string of Routinery, Fabulous, (Not Boring) Habits, Habitify, Griply, or any other product, because **no bundle has been audited.** Critically, and in direct service of this task's acceptance criterion, **no conversion rate, activation rate, retention rate, churn, trial-to-paid rate, paywall conversion, LTV, CAC, download count, or revenue figure for any app is asserted, estimated, or inferred anywhere in this document** — the audit observes *structure and language*, never *commercial outcome*. The published references in §4 (the activation / time-to-first-value and AARRR funnel concepts; freemium and paywall-model taxonomies; Brignull's deceptive-design patterns and the FTC 2022 dark-patterns report; Eyal's *Hooked*; Deci & Ryan's Self-Determination Theory and Miller & Rollnick's Motivational Interviewing; Nielsen Norman Group and Podmajersky UX-writing guidance) are cited as **instruments and methods the auditors consult** — their names and definitions, not any scored result for any product. The only populated records appear in the **clearly-labelled synthetic worked example** (§12), which audits a fictitious `APP-SYNTH-Z` using `*-SYNTH-*` identifiers solely to prove the instrument runs. Nothing here may be cited as evidence about a real product or a real person.

**Scope boundary — what this task is and is not.**
- **TASK-021 (this document) = the growth/analyst + content/UX-writing lenses.** It answers *"how fast and cleanly does a new user reach a first moment of value; when and how is the paywall presented and is it honest and autonomy-respecting; what lifecycle messages were actually sent and how are they written; is the copy clear, non-patronizing and autonomy-supportive rather than coercive; and what mechanics are used to bring the user back — all anchored to captured evidence, and all without any claim about whether these things convert or retain."*
- **It is not the capture.** Which device/build/region, how frames/copy/transitions are recorded, and whether a multi-day / notification / subscription-email pass was run, is **TASK-017**. This audit reads that bundle; it never records a new walkthrough or audits from memory, the marketing website, the App Store description, a competitor's growth blog, or personal prior use.
- **It is not the journey script.** Which ten tasks are run is **TASK-016** — this audit anchors every observation to a `JRN` step (growth-critically J1/J2/J3/J4/J6/J10) and never invents a flow (e.g. a cancellation path) that was not captured.
- **It is not the other four lenses.** Behavioral mechanisms / BCT / reward psychology-as-behavior-change (TASK-018), usability / cognitive walkthrough / friction counts (TASK-019), visual & motion design (TASK-020), and iOS / accessibility (TASK-022) are audited in those templates. Where this audit touches their territory — e.g. a **streak**: the *growth* reading is "return-trigger / loss-aversion mechanic" (ours), whether it *builds automaticity or inflicts guilt as behavior change* is **TASK-018**, whether the paywall flow is *usable* is **TASK-019**, whether the paywall *looks* coherent is **TASK-020**, whether a notification *permission prompt is a correct iOS pattern* is **TASK-022** — it records only the *growth/content* reading and cross-links; the sibling owns the sibling judgment. Overlaps are reconciled at **TASK-023**, not resolved here.
- **It is not the commercial-estimates template, and this is the load-bearing boundary.** Download estimates, revenue estimates, ranking, and any third-party metric are recorded in **TASK-015**, clearly-labelled, provenance-stamped, capped at grade C, and **never convertible to retention, CAC, or LTV**. This audit must route any such number to TASK-015 and may **never** assert or infer a conversion/retention/activation/churn/revenue figure of its own (X3; `prd.md` §4, §5, §10). A growth structure being *present and well-built* is **never** evidence that it *works*.
- **It is not the ASO / editorial audit.** App Store listing copy, screenshots, metadata, keywords, and editorial recognition are **TASK-010 / TASK-011**. This audit reads *in-product* copy and growth structure captured in the walkthrough, not the store page.
- **It does not measure willingness-to-pay, comprehension, or return behaviour.** An auditor judging a paywall "clear" or a return-trigger "manipulative" is **expert judgment (grade D)**, never a user reaction. Willingness to pay, comprehension, perceived pressure, and actual return are hypotheses that await real-user testing (TASK-048) and longitudinal pilots. This audit may never state that users *convert*, *retain*, *find it clear*, or *feel pressured*.
- **It does not decide anything.** A growth or copy problem is evidence and a *fix hypothesis*, not an adopted feature. Opportunity framing is **TASK-041/042**; decisions are **TASK-035**; the manipulation / unsupported-claims safety verdict is **TASK-033**. This audit "does not select final HerRays features" (`prd.md` §13 Prompt 02).

---

## 1. Purpose

A growth or copy audit is only evidence if another specialist can open the same captured bundle, apply the same frame and rubric, and arrive at the same findings — or disagree *in a recorded, adjudicable way*. There are **two** failure modes WS02 must prevent here, and they are more dangerous than in any other lens:

1. **The laundered metric.** An analyst watches Fabulous's onboarding, writes "Fabulous's paywall converts extremely well and the app retains users through streaks," and that sentence is laundered into the teardown dossier and the opportunity atlas as if a conversion fact and a retention fact had been established. **It establishes nothing.** No conversion, retention, or revenue figure can be observed from a teardown — those are private competitor metrics the PRD explicitly forbids fabricating or inferring (`prd.md` §4 "Never fabricate … actual retention, CAC, LTV"; §5 Phase 1 "Do not infer retention from reviews or downloads"; §3 "popularity … is not proof"). What the auditor actually saw was *a paywall placed after step N, gating capability X, with trial terms Y* — a **structure**, not an outcome.
2. **The praised dark pattern.** A growth reviewer sees a confirmshaming cancel button ("No, I don't care about my health") or a guilt-loaded loss-aversion streak reset and praises it as "effective retention." That is the exact opposite of what HerRays' non-negotiable constraints demand: a **non-patronizing**, **autonomy-respecting**, clinically-responsible experience for women in midlife (`prd.md` §1, §24). A coercive pattern that may well "work" is a **harm to flag**, never a strength to adopt — and it is routed to the manipulation safety gate (TASK-033), not into a feature list.

Both paths fail Gate 1/Gate 2's bar that "polished unsupported reports do not pass" (`prd.md` §11) and the final decision rule that HerRays optimises for *meaningful user value with the least unnecessary effort, not the highest engagement count* (`prd.md` §15).

This template converts a captured experience into **anchored, grade-bounded, rubric-rated, uncertainty-stamped growth & content observations** by guaranteeing five properties of every `GCA` record:

1. **Anchored to a captured artifact.** Every finding points to a specific captured frame (`screen_ref`), copy string (`copy_ref`), and/or transition (`transition_ref`) in a TASK-017 bundle and a TASK-016 `JRN` step. "If it was not captured, it was not found" (§2, X1). Lifecycle/return-trigger messages that arrive out of the session (push, email, scheduled nudge) require an explicit multi-day/notification/subscription capture pass; absent it, the finding is a **coverage gap**, not an inference (§2, X6). The **evidence anchor is a mandatory field.**
2. **Layered.** The record forces four distinct statements — *what the funnel/paywall/copy is* (observation), *which growth or persuasion principle it serves or breaks* (interpretation), *how good or severe* (rubric-bound judgment), *what it would do to a real user's conversion/return/trust/autonomy* (hypothesis) — and grades/scopes them separately, so "this converts" or "this retains" can never masquerade as a measured outcome (§2, X2, X3).
3. **Free of conversion/retention claims.** No record may assert or infer a conversion, activation, retention, churn, trial-to-paid, paywall-conversion, LTV, CAC, or revenue figure. Growth efficacy is `n/a` at teardown. The audit observes *structure and copy*; outcomes are hypotheses for TASK-048 and longitudinal pilots (§2, X3). **This is the acceptance-criterion guard, and it is structural.**
4. **Rated on an explicit rubric, with coercion rated as harm.** Every finding carries a **mandatory quality/severity rating** derived from the §4.8 rubric, with the rating treated honestly as expert judgment pending real-user confirmation; a manipulative/coercive pattern is rated on *harm* and can never be scored as a `strength` for being "effective" (§2, X4, §7.5).
5. **Uncertainty-bounded.** Every record carries a non-empty uncertainty note and a controlled confidence value; banned growth-hype and certainty words are rejected at validation (§2, X5; §7.3).

---

## 2. Six non-negotiables (anti-fabrication & integrity guards)

These guards are structural. A `GCA` record that violates any one is rejected at validation (§11), not patched afterward.

- **X1 — No finding without a captured artifact reference.** Every finding must reference a `capture_ref` + at least one of `screen_ref` (a frame id from TASK-017), `copy_ref` (a captured copy string), or `transition_ref` (a captured transition), plus the `jrn_ref` step it occurred in (TASK-016). Auditing from the marketing website, the App Store description, a review, a competitor's growth/monetization blog, the auditor's memory, or prior personal use is **inadmissible**. If the screen/copy/flow was not in the captured bundle (e.g. the cancellation flow was never walked), the correct record is a **coverage gap** (`gap_ref` → TASK-008), never a finding.
- **X2 — Observation ≠ interpretation ≠ judgment ≠ hypothesis, and they are kept in separate fields.** "The paywall first appears at J2 step 4, before any first meaningful action, gating all tracking behind a 7-day trial (copy string CP-0012)" is an **observation**. "This is an onboarding hard-paywall placed before first value → high extraction, low trust per the activation/TTFV frame" is an **interpretation**. "Severity rating 3 (major)" is a **judgment**. "Users may abandon before experiencing value, or feel the app is money-first" is a **hypothesis** about real-user behaviour/emotion. The four live in different fields (`observed`, `principle_refs`/`interpretation`, `rating`, `user_impact_hypothesis`) and are graded/scoped separately. Collapsing them into one sentence is a validation failure (§6, §7.1; `prd.md` §13 Prompt 00 "Separate evidence, inference, hypothesis and invention").
- **X3 — No conversion/retention/monetization *outcome* may be asserted or inferred.** `conversion_rate`, `activation_rate`, `retention`, `churn`, `trial_to_paid`, `paywall_conversion`, `LTV`, `CAC`, `DAU/MAU`, `revenue`, and `download` figures are **prohibited values** at teardown — they are private competitor metrics (`prd.md` §4) and cannot be inferred from reviews, downloads, or structure (`prd.md` §5 Phase 1; §3 "popularity … is not proof"). The audit records *observed structure* (paywall placement, gated capabilities, trial terms, funnel steps, trigger cadence) and, separately, a *hypothesis* about effect — always graded D and awaiting TASK-048. Any third-party market estimate belongs in **TASK-015**, clearly-labelled, capped C, and **never** converted to a retention/CAC/LTV number. A finding that states or implies "this converts / retains / is sticky" is rejected.
- **X4 — The rating is a required, rubric-bound expert judgment — never a measured outcome, and coercion is rated as harm.** Every finding carries a `rating` (0–4) scored against the explicit §4.8 rubric, plus the component ratings so the number is reconstructable. The rating is **expert judgment** (default grade D, §9) with a `rating_basis` note; it is never presented as, or derived from, a conversion/retention metric, a willingness-to-pay figure, or a user-preference %, because no users were tested. A manipulative or coercive pattern (dark pattern, confirmshaming, forced continuity, guilt/loss-aversion return bait) is rated as a **problem on its harm**, with `polarity: problem`, and may **never** be recorded as a `strength` on the grounds that it is "effective" or "high-converting" (§7.5). A finding with an empty `rating` is **incomplete** and does not pass peer review.
- **X5 — Uncertainty is mandatory and certainty/growth-hype words are banned.** `uncertainty_note` must be non-empty and name at least one real unknown (single auditor, single session, single device/build/region, one account state, lifecycle messages captured/not-captured, no outcome data, geo/price not generalisable). The controlled confidence vocabulary (§7.2) is required. The words **"converts", "high-converting", "retains", "sticky", "drives engagement/retention", "proven", "optimized", "growth-hacked", "viral", "best-in-class", "users will pay/return", "addictive (as praise)"** are rejected as findings unless they appear inside a directly quoted, cited A-grade real-data source (none exists at teardown). Coercive patterns may never be described with approving language.
- **X6 — Out-of-session messages and popularity are not free evidence.** **Lifecycle messages (push notifications, emails, scheduled nudges) and time-delayed return triggers can only be audited from a capture that actually recorded them** — a multi-day pass, a notification capture, or a researcher subscription to the app's emails (TASK-017). If no such pass exists, the finding is `coverage: not_observed` + `gap_ref` — **never inferred** from a settings screen, a permission prompt, or the marketing site, and never assumed present or absent. Separately, download counts, star ratings, chart rank, and editorial recognition are inadmissible as evidence that growth or copy is *good*; they may be *noted as context* (and the number itself routed to TASK-015/TASK-010) but never raise a rating or grade (`prd.md` §3, §5 Phase 1).

---

## 3. Where this sits in the capture → evidence chain

```
TASK-016 journey script (J1 discovery, J2 onboarding, J3 personalization, J4 first action,
                         J6 reminders/re-entry, J10 paywall/cancellation/return) — defines which flows/copy are walked
        ▼
TASK-017 CAPTURE BUNDLE  (frames + per-frame timestamps, screen-transition log, CAPTURED COPY STRINGS,
                          friction/error annotations, manifest, AND — for lifecycle/return triggers —
                          an optional multi-day / notification / subscription-email pass)
        │  the single re-openable artifact (capture_ref)
        ▼
┌───────────────────────── same bundle, five independent lenses ─────────────────────────┐
│ TASK-018 behavioral      TASK-019 UX / cognitive walkthrough      TASK-020 visual/motion │
│ TASK-021 GROWTH (R09: D1 first-value · D2 paywall timing · D5 return triggers) +         │
│          CONTENT (R10: D3 lifecycle messaging · D4 copy tone)  ← this doc                │
│ TASK-022 iOS / accessibility (notification permission as iOS pattern, copy accessibility) │
└──────────────────────────────────────────────────────────────────────────────────────┘
        │  GCA-NNN records: observed funnel/paywall/copy → principle interpretation → rating (0–4)
        │  → user-impact HYPOTHESIS (never a conversion/retention metric, X3)
        │  each anchored (X1), layered (X2/X3), rubric-rated (X4), uncertainty-bounded (X5)
        ▼
TASK-023 cross-specialist reconciliation  (the two lenses reconciled with each other + the other three; disagreements → TASK-008)
        │
        ├──► TASK-005 EVD record (type: observed; grade ≤ B for a captured structural fact; access_date, app_version, region, limitations)
        ├──► PAT-001 Pattern Library + "Content patterns and anti-patterns" (good/bad growth & copy patterns, trade-offs)
        ├──► TASK-033 capability safety gate (dark-pattern / manipulation / unsupported-claims findings)
        ├──► TASK-015 commercial estimates (any third-party number lands here, clearly-labelled — NOT a conversion/retention claim)
        ├──► TASK-030/031 Capability Mechanism Library (e.g. the paywall-timing or return-trigger mechanism + its autonomy caution)
        ├──► TASK-041/042 Opportunity Atlas (problems reframed as opportunities, not feature requests)
        ├──► TASK-045 wireframe spec + content/activation brief
        └──► TASK-048 concept testing (willingness-to-pay, comprehension, return-intention hypotheses) + TASK-009 experiments
```

The product analyst/growth specialist (R09) and content strategist/UX writer (R10) are two of the **five specialists auditing the same captured bundle independently before reconciliation** (`prd.md` §2, §5). This audit's quality is therefore capped by the capture quality (TASK-017): an unwalked cancellation flow cannot be audited, only logged as a gap; a paywall can be read only in the region/account state captured; and lifecycle/return-trigger copy cannot be audited at all without a multi-day/notification/subscription pass (X6).

---

## 4. The growth & content evaluation frame (published instruments)

The auditors evaluate against established, published methods and practitioner frameworks. This section fixes **how each is used** so evaluation is reproducible. Several of these are *practitioner* frameworks, not science — the §9 grading rules cap them accordingly (descriptive growth frameworks are grade C/D, never A). These are **instruments the auditors consult**; citing them here asserts nothing about any app (No-fabrication statement, §0).

### 4.1 Activation, time-to-first-value & the funnel map — the first-value lens (AARRR "pirate metrics", McClure, 2007; activation-metric / "aha moment" and time-to-first-value practice)
The frame for D1. The **funnel map** (Acquisition → **Activation** → Retention → Revenue → Referral) is a *descriptive* scaffold for locating where in the experience a new user first reaches value. The auditor identifies the **first meaningful action** (the first point at which the user does the thing the app is for — logs a habit, completes a routine, sets a goal) and the **first value moment** (the first point the app delivers something back), and counts the *observable* friction to reach them (steps, screens, taps, time, mandatory signup/questionnaire/paywall). **This frame locates structure; it never measures activation rate** (X3) — "time-to-first-value is long" is an observed structural fact, "activation is low" is a prohibited inferred metric.

### 4.2 Monetization & paywall models — the paywall-timing lens (freemium / hard-vs-soft / onboarding-paywall / trial-mechanics taxonomy; forced-continuity pattern)
The frame for D2. The auditor classifies the observed model — **hard paywall** (no meaningful use without paying), **soft/metered paywall** (some free use, then gated), **freemium** (durable free tier + paid upgrades), **onboarding paywall** (presented during/immediately after signup, before value), or **none observed** — and records *when* it first appears relative to the first-value moment (§4.1), *what* is gated, and the *trial mechanics* (trial length, whether it auto-converts, whether price and renewal are disclosed, whether a cancellation path was observed). **Forced continuity** (a free trial that silently converts to a hard-to-cancel paid subscription) is a named anti-pattern bridging to §4.3. The audit reads *terms and placement*; it **never** reads or infers conversion (X3), and any third-party revenue estimate goes to TASK-015.

### 4.3 Deceptive / "dark" design patterns — the integrity lens (Brignull, *deceptive.design* / "Dark Patterns" taxonomy, 2010–; FTC, *Bringing Dark Patterns to Light*, 2022; EU DSA Art. 25)
The cross-cutting frame flagged in D2/D3/D4/D5. The auditor tags any observed deceptive pattern: **confirmshaming** (guilt-loaded decline option — "No, I don't want to improve my health"), **forced continuity / roach motel** (easy to subscribe, obstructed to cancel), **nagging** (repeated interruption until the user relents), **obstruction** (burying the free/cancel path), **sneaking** (hidden costs / pre-checked add-ons), **false urgency / scarcity** (fake countdowns / "limited offer"), **trick wording**, and **preselection**. A dark pattern is **always a `problem`** (§7.5), routes to the **manipulation safety gate (TASK-033)**, and directly implicates HerRays' non-patronizing / autonomy non-negotiables (`prd.md` §1). Its *presence* is an observation; its *harm* is a rated judgment; its *effect on real users* is a hypothesis — never "it converts" (X3).

### 4.4 The Hook model — the return-trigger lens, read through its hazard (Eyal, *Hooked*, 2014: trigger → action → variable reward → investment)
A *descriptive* vocabulary for D5: external/internal **triggers**, the **action**, the **variable reward** (variability of reward sustaining engagement), and the **investment** that loads the next trigger. The auditor uses it to *name* a return mechanic (e.g. a streak = loss-aversion investment + trigger; a surprise reward = variable reward). **Critical usage rule:** `Hooked` describes how habit-forming products work, **not** whether they are beneficial, autonomous, or clinically safe — and Eyal himself distinguishes "habit-forming" from "manipulative." For HerRays this frame is read **through the autonomy/clinical-safety lens**: a mechanic that is "engaging" by exploiting loss-aversion, FOMO, or compulsion is a **flag** (→ TASK-033, cross-link TASK-018 for the behavioral-harm reading), never an endorsement. Engagement is explicitly *not* the HerRays objective (`prd.md` §15).

### 4.5 Autonomy-supportive language & motivational tone — the copy-tone lens (Deci & Ryan, Self-Determination Theory — autonomy support; Miller & Rollnick, Motivational Interviewing — non-judgmental, change-eliciting tone)
The frame for D4 (and the integrity check on D3/D5 copy). SDT distinguishes **autonomy-supportive** language (offers choice, provides rationale, acknowledges the user's perspective, avoids control) from **controlling** language (pressure, "should"/"must", contingent self-worth, guilt). Motivational Interviewing adds a **non-judgmental, non-confrontational** stance that elicits the user's own motivation rather than imposing it. The auditor reads captured copy strings for autonomy support vs control, judgement/shame, and pressure — this is the concrete operationalisation of `prd.md` §2's "autonomy" content lens and §1's non-patronizing constraint, reused from TASK-018 §4 for cross-lens consistency. A controlling or shaming tone is a `problem`; it is never a *science* claim about behaviour (grade capped per §9).

### 4.6 UX-writing & content-design principles — the clarity lens (Nielsen Norman Group plain-language & microcopy guidance; Podmajersky, *Strategic Writing for UX* — purpose / voice / tone / conversational-but-clear)
The frame for D4 clarity. The auditor reasons with established content-design conventions — **plain language** (short, common words; active voice; one idea per sentence), **clarity over cleverness**, a consistent **voice** with context-appropriate **tone**, **scannable** structure, **honest** button/label wording that matches outcome, and an estimated **reading level** appropriate to a broad midlife-women audience (not jargon-laden, not childish). Formal accessibility of copy (contrast of text, Dynamic Type scaling, screen-reader reading order) is **TASK-022** — cross-link, don't duplicate.

### 4.7 Lifecycle messaging stages & permission priming — the lifecycle lens (lifecycle-marketing stage model: onboarding → activation → engagement → re-engagement/winback → renewal/dunning; notification permission-priming practice)
The frame for D3, usable **only on captured messages (X6)**. The auditor maps each *captured* message to its lifecycle stage, records its **channel** (in-app / push-if-captured / email-if-captured), its **trigger** (time-based / behaviour-based / dormancy-based), and its **copy** (via `copy_ref`), and checks **permission priming** (does the app pre-explain *before* the OS notification prompt, or fire the system prompt cold / coercively?). Coercive winback, dunning (failed-payment) pressure, and essential information delivered *only* through an uncaptured channel are flags. Message *volume/cadence* is observed only to the extent captured; **open/click/conversion rates are prohibited** (X3).

### 4.8 The rating rubric — the mandatory rating (D-all)
Every finding carries a **0–4 rating**. For **problem** findings this is a Nielsen-style severity (frequency × impact × persistence); for **strength** findings it is a quality rating (how well the principle is served) stored on the same scale with `polarity: strength`. Components are stored separately in `rating_components` so the number is reconstructable:

| Rating | Problem meaning | Strength meaning |
|---|---|---|
| 0 | Not a problem (tagged, inconsequential) | Neutral / unremarkable |
| 1 | Cosmetic / minor friction or wording nit | Minor positive |
| 2 | Minor | Solid, conventional-done-well |
| 3 | Major — delays first value, obscures price/terms, controlling/patronizing tone, or a manipulative mechanic | Strong, autonomy-respecting pattern worth adapting |
| 4 | Catastrophic — a deceptive/dark pattern, forced continuity, confirmshaming, guilt-based coercion, or a value-blocking onboarding hard-paywall | Exemplary, transparent, autonomy-first pattern |

- **Frequency** — how often users would plausibly encounter it (one-off onboarding screen vs every session / every renewal cycle).
- **Impact** — how much it degrades (or elevates) the user's ability to reach value, make an informed paid decision, retain autonomy, and trust the app.
- **Persistence** — whether users habituate (one-time vs repeatedly felt, e.g. a recurring nagging notification).

> **Honesty rule (X4).** The rating is **expert judgment** (default grade D, §9), reconstructable from its components and justified in `rating_basis`; it is never derived from or stated as a conversion/retention metric or a user preference. A rating of **4 for a dark pattern** is a predicted-harm/integrity judgment grounded in the captured pattern (e.g. a confirmshaming cancel button in copy string CP-xxxx) and the Brignull/FTC frame — the record must say the harm is *captured-structural* (the pattern is there) while its *user effect* remains a hypothesis (X3). **A coercive pattern is never rated as a `strength`.**

---

## 5. The five audit dimensions

Each dimension is an **evaluation guide**, not a questionnaire with a score. For every dimension the auditor produces **zero or more `GCA` records** (§6), one per distinct finding, each anchored to a captured artifact and carrying a rating. A dimension with no captured evidence is recorded as **`coverage: not_observed`** with a `gap_ref` — never left blank and never back-filled. These five are the acceptance-criteria set ("first-value moments, paywall timing, lifecycle messaging, copy tone and return triggers"), grouped by lens.

### — GROWTH LENS (R09) —

### D1 — First-value moment
*How quickly and cleanly does a new user reach a first meaningful action and a first moment of value — and is value gated behind signup, a long questionnaire, or a paywall?*
- **Constructs:** activation / time-to-first-value; first meaningful action vs first value delivered; onboarding friction; empty-state handling (§4.1). (The *usability* of the onboarding is TASK-019; the *behavioral* soundness of the first action is TASK-018 — cross-link.)
- **Observe (from the bundle):** the ordered steps from first launch to first value; how many screens/taps/fields precede the first meaningful action; whether account creation, a personalization questionnaire, a notification prompt, or a paywall is mandatory *before* value; what the first value delivered actually is; the first-run empty state.
- **Measures:** `steps_to_first_value` (count, off the transition log); `screens_before_first_action` (count); `signup_required_before_value` (bool); `paywall_before_value` (bool — links D2); `first_value_event` (the observed moment, named + `screen_ref`); `onboarding_length_screens` (count); `mandatory_fields_before_value` (count).
- **Failure modes to flag:** value locked behind mandatory account creation / a long questionnaire / an onboarding paywall; no first meaningful action possible in session 1; forced product tour with no skip; cold notification/tracking permission prompt before value is shown.
- **Rating:** value blocked behind an onboarding hard-paywall or a 20-field questionnaire is typically ≥3; one or two extra onboarding screens is 1–2.
- **No-outcome rule (X3):** record "first value requires 11 steps incl. mandatory signup" (observed); **never** "this onboarding has low activation" (prohibited inferred metric).
- **Good vs empty:** *Good* — "J2→J4 (FR-0002…0013): `steps_to_first_value: 11`, `signup_required_before_value: true`, `paywall_before_value: false`, `first_value_event: 'first routine completion' (FR-0013)`; 6 personalization screens precede any action. rating 3 (freq high / impact high / persist low — first-run only). Observed structure; no activation metric asserted." *Empty* — "Onboarding feels long."

### D2 — Paywall timing & placement
*When is the paywall presented, what does it gate, and are its terms and cancellation path honest and clear?*
- **Constructs:** hard/soft/freemium/onboarding paywall taxonomy; placement relative to first value (§4.1/§4.2); trial mechanics; forced continuity / roach motel; price/terms disclosure (§4.2, §4.3).
- **Observe:** where the paywall first appears (`jrn_ref` + step); the model; which capabilities are gated vs free; trial length and whether auto-conversion to paid is disclosed; whether price and renewal cadence are stated clearly *on the paywall*; whether a cancellation path was captured and how obstructed it is; any deceptive elements (false urgency, pre-checked upsell, hidden price, confirmshaming on decline).
- **Measures:** `paywall_first_seen` (`jrn_ref` + step/time); `paywall_model` (`hard | soft | freemium | onboarding | none_observed`); `gated_capabilities` (list); `free_tier_capabilities` (list); `trial_terms_disclosed` (bool); `auto_convert_disclosed` (bool); `price_clarity` (`clear | partial | obscured`); `cancel_path_observed` (`yes | no_not_captured`); `dark_pattern_tags` (list from §4.3, e.g. `forced_continuity`, `false_urgency`, `confirmshaming`).
- **Failure modes to flag:** paywall before any value (links D1); forced continuity with undisclosed auto-conversion; obscured or absent price; cancellation path buried or not reachable in-app (roach motel); false-urgency countdowns; confirmshaming on the decline/cancel action.
- **Rating:** a forced-continuity paywall with undisclosed auto-conversion, or confirmshaming on cancel, is ≥4 (dark pattern → TASK-033); a value-first soft paywall with clear terms is a `strength`.
- **No-outcome rule (X3):** record "paywall is onboarding-placed, hard, gating all tracking; 7-day trial, auto-convert disclosed in small print" (observed); **never** "paywall conversion is high / this paywall works" (prohibited). Any third-party revenue/ranking estimate → TASK-015.
- **Good vs empty:** *Good* — "J10 (FR-0041, CP-0033): `paywall_model: onboarding`, `paywall_before_value: true`, `gated_capabilities: [all tracking, reminders]`, `trial_terms_disclosed: true`, `auto_convert_disclosed: false`, `price_clarity: obscured`, `dark_pattern_tags: [forced_continuity]`; routes to TASK-033. rating 4 (integrity). Observed terms; no conversion claim." *Empty* — "Aggressive monetization."

### D5 — Return triggers
*What mechanics are used to bring the user back — and are they autonomy-respecting prompts or guilt/loss-aversion/compulsion bait?*
- **Constructs:** return-trigger types; the Hook model read through its hazard (§4.4); loss-aversion / streak framing; variable reward; open loops; user control over triggers; the guilt/shame anti-pattern central to HerRays' zero-guilt stance (`prd.md` §15; cross-link TASK-018). (The *behavioral* automaticity reading of a return mechanic is TASK-018; here it is the *growth/retention-mechanic* reading.)
- **Observe:** the return mechanics present (scheduled reminders, streaks, loss-aversion framing of a missed day, variable/surprise rewards, social pressure, content drip / open loops, badges); whether the user can configure or turn off each trigger (autonomy); whether the return copy uses guilt/shame/FOMO/loss framing or supportive/invitational framing.
- **Measures:** `return_trigger_types` (list: `scheduled_reminder | streak | loss_aversion | variable_reward | social_pressure | open_loop | milestone_badge | content_drip`); `trigger_user_configurable` (bool per trigger); `missed_day_framing` (`supportive | neutral | guilt_loss` — cross-link TASK-018 recovery-after-miss); `guilt_or_loss_framing_present` (bool); `fomo_scarcity_present` (bool); `hook_elements` (descriptive Hook tags, hazard-flagged).
- **Failure modes to flag:** guilt/shame/loss-aversion framing of a missed day or a broken streak (the exact HerRays anti-pattern); non-configurable nagging notifications; manufactured FOMO/scarcity; variable-reward mechanics engineered for compulsion; return triggers that can't be turned off.
- **Rating:** guilt/loss-aversion return bait or non-configurable nagging is ≥3 (and a manipulation flag → TASK-033); a configurable, supportive, user-set reminder is a `strength`.
- **No-outcome rule (X3):** record "missed-day screen uses loss-framing copy 'You broke your 14-day streak' (CP-0051)" (observed); **never** "streaks drive retention here" (prohibited).
- **Good vs empty:** *Good* — "J6/J8 (FR-0051, CP-0051): `return_trigger_types: [streak, loss_aversion, scheduled_reminder]`, `missed_day_framing: guilt_loss`, `trigger_user_configurable: {reminder: true, streak: false}`; copy 'You broke your streak!'. Flags HerRays zero-guilt anti-pattern → TASK-033 + crosslink TASK-018. rating 3 (freq med / impact high / persist high). Observed copy/mechanic; retention effect = hypothesis." *Empty* — "Uses streaks to retain."

### — CONTENT LENS (R10) —

### D3 — Lifecycle messaging
*What messages does the app send across the user lifecycle, and how are they written — welcoming, activating, re-engaging, renewing — and only as actually captured?*
- **Constructs:** lifecycle stages (onboarding → activation → engagement → re-engagement/winback → renewal/dunning); channel & trigger type; permission priming (§4.7). **(X6: push/email/out-of-session messages are auditable only from a multi-day/notification/subscription capture pass; otherwise `not_observed` + gap.)**
- **Observe (from captured messages only):** each captured message's lifecycle stage, channel (in_app / push-if-captured / email-if-captured), trigger (time / behaviour / dormancy / payment), and copy (`copy_ref`); whether the app primes the notification-permission request with rationale before firing the OS prompt; the tone of winback and renewal/dunning messages.
- **Measures:** `lifecycle_stages_observed` (list); `message_channel` (per message); `message_trigger` (per message); `message_copy_ref` (→ captured copy string); `permission_priming_observed` (`primed | cold_prompt | not_captured`); `winback_tone` / `dunning_tone` (`supportive | neutral | coercive`, only if captured).
- **Failure modes to flag:** coercive winback ("We miss you — don't give up on yourself"); cold OS notification prompt with no priming (or a coercive pre-prompt); renewal/dunning copy using pressure or guilt; essential information delivered *only* via a channel that may not reach the user; high-frequency nagging (links D5).
- **Rating:** coercive dunning/winback or a cold/coercive permission prompt is ≥3; a clear, respectful, well-timed activation nudge is a `strength`.
- **Coverage rule (X6):** if no multi-day/notification/subscription pass exists, record `coverage: not_observed` + `gap_ref` for every out-of-session lifecycle message — **do not infer** from the settings screen or the store listing.
- **No-outcome rule (X3):** record the message copy and cadence as captured; **never** assert open/click/reactivation rates (prohibited; route any third-party figure to TASK-015).
- **Good vs empty:** *Good* — "Multi-day pass present (BUNDLE-…-D7). Day-3 dormancy push (MSG-0007, CP-0061): `lifecycle_stages_observed: [re_engagement]`, `message_channel: push`, `message_trigger: dormancy`, `winback_tone: coercive` (copy 'Don't let yourself down again'). rating 3; crosslink TASK-018 (guilt), TASK-033 (manipulation). Captured copy; no reactivation-rate claim." *Empty* — "Sends re-engagement pushes." / *(no pass)* — "`coverage: not_observed`, `gap_ref: GAP-…` (no multi-day capture)."

### D4 — Copy tone
*Is the copy clear, plain, and non-patronizing — and autonomy-supportive rather than controlling, shaming, or coercive?*
- **Constructs:** SDT autonomy-supportive vs controlling language; Motivational-Interviewing non-judgmental tone (§4.5); UX-writing plain-language, voice/tone, honest-label conventions, reading level (§4.6); confirmshaming & deceptive wording (§4.3). (Formal text *accessibility* — contrast, Dynamic Type, reading order — is TASK-022; cross-link.)
- **Observe (from captured copy strings):** the voice and tone of key copy (onboarding, empty states, buttons/labels, errors, missed-day, paywall, notifications); whether language offers choice and rationale (autonomy-supportive) or pressures/shames/commands (controlling); presence of confirmshaming, guilt, condescension, or jargon; whether button/label wording honestly matches its outcome; estimated reading level and appropriateness for a broad midlife-women audience (non-patronizing — `prd.md` §1).
- **Measures:** `tone_profile` (structured tags: `warm | neutral | clinical | pushy | patronizing | shaming`); `autonomy_support` (`autonomy_supportive | neutral | controlling`); `confirmshaming_present` (bool + `copy_ref`); `plain_language` (bool); `reading_level_est` (approx, with method named); `honest_labels` (bool — do buttons match outcome?); `jargon_markers` / `patronizing_markers` (lists with `copy_ref`).
- **Failure modes to flag:** confirmshaming ("No, I don't care about my health"); controlling/pressuring language ("You MUST log today"); condescension or infantilising tone (acute risk for the midlife-women audience); unexplained jargon; dishonest button wording (a "No thanks" that re-opens the upsell); fear/guilt-based motivation.
- **Rating:** confirmshaming or systematically controlling/patronizing voice is ≥3 (and a manipulation/autonomy flag → TASK-033); an isolated jargon term is 1–2; a consistently warm, autonomy-supportive, plain voice is a `strength` feeding "Content patterns".
- **No-science rule:** a tone reading is a content-expert judgment (grade ≤ C), **not** a behavioral-science efficacy claim (that framing is TASK-018) and **not** a user reaction (TASK-048).
- **Good vs empty:** *Good* — "J10 decline button (CP-0033): copy 'No, I don't want to feel better' → `confirmshaming_present: true`, `autonomy_support: controlling`, `tone_profile: [shaming]`; routes TASK-033. rating 4 (integrity). Expert content reading; perceived pressure is a hypothesis (TASK-048)." *Empty* — "Copy is a bit pushy."

> **Dimension coverage rule.** A complete per-app growth/content audit records a result for **all five** dimensions — including explicit `coverage: not_observed` + `gap_ref` where evidence was absent (most commonly **D3** when no multi-day/notification/subscription pass exists, or **D2** when the cancellation flow or paywall was never reached). Silently omitting a dimension is a validation failure (§11).

---

## 6. The `GCA` audit record (field contract)

One finding = one `GCA-NNN` record. Fields carry requirement markers: **M** mandatory · **C** conditional (rule stated) · **O** optional. The acceptance-criteria essentials — the **evidence anchor** (§6.2), the **rating** (§6.4), and the **lens** (§6.1) — are all **M**, and the **no-outcome fields** (§6.5) are the structural form of the acceptance-criterion prohibition.

### 6.1 Identity & provenance
| Field | Req | Type / rule |
|---|---|---|
| `gca_id` | M | `GCA-NNN`, immutable, one finding per id |
| `app_id` | M | → `APP-NNN` (TASK-006) |
| `auditor_lens` | M | `growth` (R09) **or** `content` (R10) — which lens produced this record (the two are audited independently; reconciled at TASK-023) |
| `dimension` | M | one or more of `D1_first_value D2_paywall_timing D3_lifecycle_messaging D4_copy_tone D5_return_triggers`; the `dimension` must match the `auditor_lens` (D1/D2/D5 ↔ growth; D3/D4 ↔ content) |
| `auditor_role` | M | `product_analyst_growth` (R09) or `content_strategist_uxwriter` (R10); named individual in `auditor_ref` |
| `audit_date` | M | ISO date; the date the bundle was audited (not captured) |

### 6.2 Evidence anchor (X1 — the acceptance-criteria "evidence-backed observation" field)
| Field | Req | Type / rule |
|---|---|---|
| `capture_ref` | M | → TASK-017 bundle id (name the **multi-day / notification / subscription** bundle explicitly for any D3 lifecycle or out-of-session D5 record) |
| `screen_ref` | C | ≥1 frame id. **M** for any finding tied to a static screen (most D1/D2/D4). |
| `copy_ref` | C | ≥1 captured copy-string id. **M** for any D3/D4 finding and any D2/D5 finding that rests on specific wording (paywall terms, confirmshaming, missed-day copy) |
| `transition_ref` | C | ≥1 captured transition id; **M** for any funnel/flow finding read off the transition log (D1 step counts, paywall placement) |
| `jrn_ref` | M | → TASK-016 `JRN` step (J1…J10 + scenario) where observed |
| `observed` | M | **Observation only.** Literal description of the captured funnel step / paywall term / message / copy string (counts, placement, verbatim copy via `copy_ref`). No principle name, no rating, no conversion/retention number, no "users will…". |

### 6.3 Interpretation (X2 — the growth/content reading, kept separate)
| Field | Req | Type / rule |
|---|---|---|
| `principle_refs` | M | list of the §4 instruments at stake (e.g. `"AARRR:activation"`, `"paywall:onboarding_hard"`, `"dark_pattern:forced_continuity"`, `"Hook:variable_reward"`, `"SDT:controlling"`, `"content:plain_language"`) **or** `[none]` with note. **Interpretation** of which principle is served/broken. |
| `polarity` | M | `problem \| strength \| neutral` — strengths feed the good-pattern side of `PAT-001` / "Content patterns". **A dark/coercive pattern may never be `strength`** (§7.5). |
| `interpretation` | M | prose: why the observed structure/copy serves or breaks the tagged principle(s). Explicitly an expert reading, not a measured outcome. |
| `measures` | C | the dimension-specific measures from §5 (e.g. `steps_to_first_value`, `paywall_model`, `autonomy_support`, `return_trigger_types`); **M** for any D1/D2/D5 structural record and any D4 record |
| `dark_pattern_tags` | C | list from §4.3; **M (non-empty)** whenever a deceptive/coercive pattern is interpreted to be present (triggers a mandatory `safety_gate_ref` → TASK-033, §6.6) |

### 6.4 Rating (X4 — the acceptance-criteria quality/severity field)
| Field | Req | Type / rule |
|---|---|---|
| `rating` | M | integer **0–4** on the §4.8 rubric. **Mandatory on every record.** |
| `rating_components` | M | `{frequency: low\|med\|high, impact: low\|med\|high, persistence: low\|med\|high\|n/a}` — so the number is reconstructable |
| `rating_basis` | M | non-empty note justifying the rating from its components, and stating whether a `4` is *captured-structural integrity harm* (e.g. confirmshaming copy present) or a *predicted* effect |
| `evidence_source` | M | `measured_structural \| structured_expert \| copy_verbatim`. A **measured_structural** value (step counts, paywall placement, trial terms read off the bundle) caps at **B**; a **structured_expert** reading (tone, autonomy, dark-pattern interpretation) caps at **C**; **copy_verbatim** is the quoted string itself (B for "the string exists", the *reading* of it is structured_expert). **No `conversion`/`retention` source exists at teardown.** |

### 6.5 No-outcome, grading, hypothesis & honesty (X2, X3)
| Field | Req | Type / rule |
|---|---|---|
| `conversion_retention_claim` | M | **const `none`.** A hard-coded attestation that this record asserts/infers **no** conversion, activation, retention, churn, trial-to-paid, LTV, CAC, DAU/MAU, download, or revenue figure (X3; acceptance criterion). Any such number belongs in TASK-015, labelled third-party — reference it via `market_estimate_ref`, never state it as fact here. |
| `market_estimate_ref` | O | → TASK-015 record, **if** a clearly-labelled third-party estimate is relevant context. Referencing it does **not** make it a HerRays finding and it may never be converted to retention/CAC/LTV. |
| `observation_grade` | M | A–D for *the structure/copy is as described* — a single captured `measured_structural` value caps at **B**; a `structured_expert` reading caps at **C**; a growth/persuasion-framework interpretation is **C/D** (§9) |
| `prediction_grade` | M | A–D for *this will affect real users (conversion intent / return / trust / autonomy) as hypothesised* — **defaults to D**; only real-user testing (TASK-048) or a longitudinal pilot can raise it (`validation_ref` required) |
| `user_impact_hypothesis` | C | the predicted effect on a real user (abandon before value, feel pressured, lose autonomy, distrust, return out of guilt) — **hypothesis**, explicitly tentative; **M** when `polarity: problem` and `rating ≥ 2`, or for any dark-pattern finding |
| `confidence` | M | controlled vocabulary (§7.2) |
| `uncertainty_note` | M | **non-empty** (X5); names ≥1 real unknown (single auditor/session/account/region, lifecycle messages captured/not, no outcome data, price/geo not generalisable) |
| `separation_check` | M | `true` — auditor attests observation/interpretation/rating/hypothesis are not collapsed and no outcome metric is asserted (§7.1) |

### 6.6 Linkage & next step
| Field | Req | Type / rule |
|---|---|---|
| `coverage` | C | `observed \| not_observed`; **M** `not_observed` + `gap_ref` for any dimension with no captured evidence (esp. **D3** with no multi-day/notification/subscription pass, or **D2** cancellation flow not walked, X6) |
| `safety_gate_ref` | C | → TASK-033 capability safety gate; **M** whenever `dark_pattern_tags` is non-empty or a manipulation/medical-claim concern is interpreted |
| `pattern_ref` | O | → `PAT-001` Pattern Library / "Content patterns and anti-patterns" entry this finding populates (good or bad pattern) |
| `gap_ref` | C | → TASK-008; **M** when `coverage: not_observed` or a missing capture (e.g. no multi-day pass, unreached cancellation path) prevented auditing |
| `contradiction_ref` | O | → TASK-008 when this finding conflicts with marketing claims, a sibling audit, or the other lens |
| `crosslink_refs` | O | sibling-audit ids this touches (TASK-018 behavioral/guilt, TASK-019 usability, TASK-020 visual, **TASK-022 for notification-permission-as-iOS-pattern & copy accessibility**, TASK-015 commercial) without claiming their judgment |
| `fix_hypothesis` | O | the smallest change that would resolve the problem (e.g. value before paywall; neutral cancel copy; configurable, supportive reminder) → candidate `EXP` (TASK-009) / opportunity input (TASK-041) / spec note for TASK-045; **never** an adopted feature |
| `status` | M | `draft \| peer_reviewed \| reconciled \| superseded` (never hard-deleted) |

---

## 7. Cross-cutting rules

### 7.1 The observation → interpretation → rating → hypothesis firewall, and the outcome prohibition (X2, X3)
Every record must keep four statements physically separate, and must assert **no** commercial outcome:
1. **Observation** (`observed`, `measures`, `screen_ref`/`copy_ref`/`transition_ref`): the captured funnel step / paywall term / message / copy. A `measured_structural` value is gradeable to B; a quoted copy string's existence to B.
2. **Interpretation** (`principle_refs`, `interpretation`, `dark_pattern_tags`): which growth/persuasion/content principle is at stake. Expert reading; marked as such; caps at C.
3. **Rating** (`rating` + `rating_components` + `rating_basis`): rubric-bound expert judgment (grade D, §9), reconstructable, never a conversion/retention metric.
4. **Hypothesis** (`user_impact_hypothesis`, `prediction_grade`): the predicted real-user effect. Default D; raised only by real-user testing (TASK-048) / a pilot. `separation_check: true` and `conversion_retention_claim: none` are the explicit attestations that the four are not fused and that no outcome metric is asserted.

### 7.2 Confidence vocabulary (reused from TASK-004 §5.2)
`established` (A-grade, replicated science or representative real-user/real-data validation — **unavailable at teardown**) · `likely` (B, a directly captured structural fact — a counted funnel step, a quoted trial term) · `indicative` (C, a structured expert reading — tone/autonomy, dark-pattern interpretation, framework mapping) · `speculative` (D, analogy/judgment, incl. every conversion/retention *hypothesis*). A captured structural fact may be `likely`; a growth-framework interpretation or a copy-tone reading may not exceed `indicative`; any conversion/retention/return statement is `speculative` at best and may never be stated as fact (X3).

### 7.3 Banned certainty / growth-hype language (X5)
Rejected at validation unless inside a quoted, cited A-grade real-data source (none exists at teardown): **converts / high-converting / conversion rate, retains / retention / sticky / stickiness, drives engagement / drives retention, activation rate, churn, LTV / CAC / ARPU, viral / growth-hacked, proven, optimized (as verdict), best-in-class, addictive (as praise), users will pay / subscribe / return, world-class**. A coercive or deceptive pattern may never be described with approving language ("clever", "effective", "smart monetization"). Replace with graded, hedged statements ("onboarding hard-paywall placed before first value; predicted to suppress informed adoption — not user-validated, see `validation_ref`; no conversion figure available or asserted").

### 7.4 Growth/persuasion frameworks predict, they do not measure (X3, §9)
AARRR, the activation/TTFV concept, paywall taxonomies, and the Hook model are **descriptive practitioner frameworks**, not science and not measurement. They help *locate and name* structure; they never license a claim that the structure *works*. Every reading built on them carries `observation_grade ≤ C` and `prediction_grade = D`, with an explicit note that effect on real users awaits TASK-048 / a pilot. The audit's value is in *finding candidate strengths and problems fast and traceably* — including the quietly harmful ones (value-blocking paywalls, forced continuity, guilt-based return bait, confirmshaming) that an engagement-first review would praise — not in proving commercial impact.

### 7.5 Autonomy-first & anti-dark-pattern rule (`prd.md` §1 non-patronizing/autonomy; §15 not engagement; TASK-033 manipulation gate)
A manipulative, coercive, deceptive, or guilt-based pattern is **always `polarity: problem`**, carries a non-empty `dark_pattern_tags`, and **must** set `safety_gate_ref → TASK-033`. It may **never** be rated a `strength`, however "effective" it appears, and its apparent effectiveness may never be asserted (X3). This operationalises HerRays' non-negotiable constraints — non-patronizing, autonomy-respecting, clinically responsible — and the final decision rule that the product optimises for *meaningful value with the least unnecessary effort, not engagement count* (`prd.md` §15). The behavioral-harm reading of the same pattern (guilt, compulsion, burden) is cross-linked to TASK-018; the manipulation/ethics verdict is TASK-033's; this audit supplies the growth/content evidence.

### 7.6 The boundary with the commercial (TASK-015), ASO (TASK-010/011), and iOS/accessibility (TASK-022) templates (no duplication)
This audit evaluates *in-product* growth **structure** and **copy** captured in the walkthrough. It must **not** assert: any download/revenue/ranking estimate or any conversion/retention/CAC/LTV figure (→ **TASK-015**, clearly-labelled third-party, never a HerRays finding); App Store listing copy, screenshots, keywords, or editorial recognition (→ **TASK-010/011**); a notification-permission *iOS-correctness* verdict, or a formal copy-accessibility verdict — text contrast, Dynamic Type scaling, screen-reader reading order (→ **TASK-022**). Each is `crosslink_refs`, not stated here. R15 (privacy/regulatory) reviews subscription/renewal/consent and any **medical claim in marketing/coaching copy** (a regulatory trigger); R14 (clinical) reviews dependency/manipulation and medical-claim safety; R02 (behavioral) polices the guilt/autonomy cross-check.

---

## 8. Forbidden-value & validation-failure catalogue

A record or audit is rejected if any of the following holds:

| # | Failure | Rule violated |
|---|---|---|
| V1 | A finding with no `screen_ref`, `copy_ref`, **or** `transition_ref` (and it is not a `not_observed` gap) | X1 — no evidence anchor |
| V2 | A finding, measure, or copy string sourced from the marketing site / App Store description / review / memory / growth blog, not the bundle | X1 |
| V3 | `observed` contains a principle name, a rating, a conversion/retention number, a marketing adjective, or "users will…" | X2 / §7.1 |
| V4 | **Any conversion, activation, retention, churn, trial-to-paid, paywall-conversion, LTV, CAC, DAU/MAU, download, or revenue figure asserted or inferred** | **X3 (acceptance criterion)** |
| V5 | `conversion_retention_claim` ≠ `none`, or a market estimate stated as a HerRays finding rather than referenced to TASK-015 | X3 / §7.6 |
| V6 | A third-party estimate (TASK-015) converted into a retention/CAC/LTV number | X3 / `prd.md` §10 |
| V7 | `rating` empty, or outside 0–4, or missing `rating_components`/`rating_basis` | X4 (acceptance-criteria field) |
| V8 | A rating presented as or derived from a conversion/retention metric or a user-preference % | X4 / X3 |
| V9 | A dark/coercive/deceptive pattern recorded with `polarity: strength`, or described with approving language | §7.5 / X4 |
| V10 | A non-empty `dark_pattern_tags` with no `safety_gate_ref → TASK-033` | §7.5 / §6.6 |
| V11 | `prediction_grade` > C with no real-user/pilot `validation_ref` | X3 / §7.4 |
| V12 | `uncertainty_note` empty, or uses banned certainty/growth-hype language | X5 / §7.3 |
| V13 | A **D3 lifecycle** or out-of-session **D5** finding asserted with no multi-day/notification/subscription capture pass (inferred) | X6 |
| V14 | A dimension omitted from a per-app audit with no `coverage: not_observed` + `gap_ref` | §5 coverage rule |
| V15 | Popularity, downloads, rating, editorial, or sheer polish used to raise a rating/grade | X6 |
| V16 | A contradiction (between the two lenses, with a sibling audit, or a second auditor) resolved by deletion/averaging | §7.5 / TASK-008 G2 |
| V17 | `separation_check: true` asserted but observation/interpretation/rating/hypothesis fused, or an outcome metric present | §7.1 |
| V18 | A TASK-015 / TASK-010-011 / TASK-022-owned verdict asserted here instead of cross-linked | §7.6 / §0 scope |
| V19 | `dimension` inconsistent with `auditor_lens` (e.g. a `content` record tagged D2) | §6.1 |

---

## 9. Grading & rating interlock (with TASK-004)

| What is being graded/rated | Field | Ceiling from one captured session | Raised by |
|---|---|---|---|
| A captured structural fact (step count, paywall placement, trial term, trigger present) is as described | `observation_grade` (measured_structural) | **B** (single capture, one account/region) | repeated independent captures / multiple account states |
| A quoted copy string exists as transcribed | `observation_grade` (copy_verbatim) | **B** | second auditor transcription check |
| A structured expert reading (tone, autonomy, dark-pattern interpretation, framework mapping) is sound | `observation_grade` (structured_expert) | **C** (quality-of-method only) | second independent auditor agreement |
| How good/severe the finding is (0–4) | `rating` | **expert judgment (grade D)**, rubric-bound & reconstructable | real-user testing (TASK-048) confirms/revises |
| It will convert / retain / drive return / affect trust as hypothesised | `prediction_grade` | **D** | **real-user testing (TASK-048) + a longitudinal pilot** + `validation_ref` |
| Any conversion / retention / revenue *level* | — | **inadmissible / `n/a`** (never gradeable from a teardown) | only first-party real data (out of this cycle) |

This operationalises `prd.md` §4 ("Grade separately for efficacy, relevance and confidence … Do not interpret a high grade on usability as a high grade on health impact"), §5 Phase 1 ("Do not infer retention from reviews or downloads"), and §3 ("popularity … is not proof"). A perfectly-captured, clearly-reasoned paywall finding can sit at `observation_grade: B` (the placement and terms), `rating: 4` (a forced-continuity integrity harm), `prediction_grade: D` — and that is the correct, honest state for every teardown finding: *we observed exactly what the app does, we judge it harmful on integrity grounds, and we have asserted nothing about whether or how well it converts or retains.*

---

## 10. Per-app growth/content audit checklist (the reusable instrument)

Run **twice** per core app — once for the **growth lens (R09)**, once for the **content lens (R10)** — against its captured bundle set, independently, before reconciliation.

**Pre-audit**
- [ ] Bundle(s) received from TASK-017; `app_version`, `region`, `access_status`, account state, and **which journeys (J1/J2/J3/J4/J6/J10)** are present, readable from the manifest.
- [ ] For the content lens (D3) and out-of-session D5: confirm whether a **multi-day / notification / subscription-email pass** exists; if not, D3 lifecycle and delayed D5 triggers will be `not_observed` + `gap_ref` (X6) and a capture request is logged to TASK-008.
- [ ] Confirm the **paywall and cancellation flows (J10)** were actually walked; if not, D2 cancellation findings are a gap, not an inference.
- [ ] Evaluation frame loaded (§4): the activation/TTFV & AARRR map, paywall-model taxonomy, dark-pattern taxonomy, Hook-model hazard frame, SDT/MI tone frame, UX-writing principles, lifecycle-stage model, the §4.8 rubric.

**Audit (per dimension — growth D1/D2/D5 or content D3/D4)**
- [ ] Walk the captured frames/transitions/copy in order; for each finding create a `GCA` record anchored to a `screen_ref`, `copy_ref`, and/or `transition_ref` (X1).
- [ ] Write a literal `observed`; keep interpretation/rating/hypothesis in separate fields; set `separation_check` and `conversion_retention_claim: none` (X2/X3).
- [ ] Tag `principle_refs` + `polarity`; record the dimension's `measures` (§5); set `dark_pattern_tags` (+ mandatory `safety_gate_ref → TASK-033`) for any deceptive/coercive pattern (§7.5).
- [ ] Assign `rating` 0–4 with `rating_components` + `rating_basis`; set `evidence_source`; **never** rate a coercive pattern a strength (X4/§7.5).
- [ ] Grade `observation_grade` (≤ B structural / ≤ C expert) and `prediction_grade` (= D, raised only by TASK-048) (§9); write `user_impact_hypothesis` for problems ≥ rating 2 and all dark-pattern findings.
- [ ] Confirm **no** conversion/retention/revenue figure appears; route any third-party estimate to TASK-015 via `market_estimate_ref`, never state it (V4/V5/V6).
- [ ] Write a non-empty `uncertainty_note`; no banned words (X5, §7.3).
- [ ] Record `coverage: not_observed` + `gap_ref` for any dimension without captured evidence (§5) — most commonly D3 without a multi-day pass or D2 without the cancellation flow.
- [ ] Route all TASK-015 / TASK-010-011 / TASK-022-owned verdicts to `crosslink_refs`, never assert them here (§7.6, V18).

**Post-audit**
- [ ] Populate `PAT-001` Pattern Library + the "Content patterns and anti-patterns" deliverable (good and bad growth & copy patterns, with trade-offs).
- [ ] Route every dark-pattern / manipulation / medical-claim-in-copy finding to the **TASK-033 safety gate**.
- [ ] Draft `fix_hypothesis` for each high-rating finding → opportunity input (TASK-041) / candidate `EXP` (TASK-009) / spec note for TASK-045 — **not** an adopted feature.
- [ ] Peer review by the lens reviewer (R02 autonomy/guilt cross-check; R14/R15 for manipulation / subscription / medical-claim concerns) → `status: peer_reviewed`.
- [ ] Hold for TASK-023 reconciliation; reconcile the two lenses with each other and the other three; preserve disagreements as `contradiction_ref` (§7.5).
- [ ] Promote accepted records to `EVD` (TASK-005) with `access_date`, `app_version`, `region`, `limitations`.

**Validation gate** — run §8 V1–V19; any hit blocks the audit (Gate 1/Gate 2, `prd.md` §11).

---

## 11. Reviewer checklist (sign-off)

- [ ] Every finding has a `screen_ref`, `copy_ref`, and/or `transition_ref` (no V1/V2); observation/interpretation/rating/hypothesis separated in every record (no V3/V17).
- [ ] **No conversion, activation, retention, churn, trial-to-paid, LTV, CAC, DAU/MAU, download, or revenue figure asserted or inferred anywhere (no V4/V5/V6); `conversion_retention_claim: none` on every record.**
- [ ] Every record has a rating 0–4 with components + basis (no V7); no rating derived from a conversion/retention metric or user preference (no V8).
- [ ] No dark/coercive/deceptive pattern rated a `strength` or praised (no V9); every dark-pattern finding routes to TASK-033 via `safety_gate_ref` (no V10).
- [ ] No `prediction_grade` > C without a real-user/pilot `validation_ref` (no V11); every record has a non-empty, certainty/growth-hype-free uncertainty note (no V12).
- [ ] No **D3 lifecycle** or out-of-session **D5** finding asserted without a multi-day/notification/subscription pass (no V13); all five dimensions resolved (audited or `not_observed` + gap) (no V14).
- [ ] Popularity / downloads / rating / editorial / polish never used to move a rating or grade (no V15); contradictions (incl. growth-vs-content) preserved, not averaged (no V16).
- [ ] No TASK-015 / TASK-010-011 / TASK-022-owned verdict asserted here instead of cross-linked (no V18); `dimension` consistent with `auditor_lens` (no V19).
- [ ] Autonomy/non-patronizing stance upheld: coercive, guilt-based, or patronizing copy flagged as a problem, not normalised (`prd.md` §1/§15).
- [ ] No fabricated funnel step, paywall term, price, message, copy string, or metric anywhere.

---

## 12. Synthetic worked example — ILLUSTRATIVE (synthetic)

> **SYNTHETIC — proves the instrument runs; asserts nothing about any real app.** `APP-SYNTH-Z` is a fictitious app; all `*-SYNTH-*` ids are fictitious; all frames, copy strings, paywall terms, messages, and funnel steps are fictitious. These records exist only to show the five dimensions, the rubric, the lens-split, the dark-pattern → safety-gate route, and the `GCA` contract (including the `conversion_retention_claim: none` guard) working end-to-end. They are not evidence. **No conversion or retention figure appears in any of them — by construction.**

### 12.1 `GCA-SYNTH-001` — growth lens · D2 paywall timing (onboarding hard-paywall before first value, forced continuity)
```yaml
gca_id: GCA-SYNTH-001
app_id: APP-SYNTH-Z
auditor_lens: growth
dimension: [D2_paywall_timing, D1_first_value]
auditor_role: product_analyst_growth        # auditor_ref: [SYNTHETIC]
audit_date: 2026-11-22
# --- evidence anchor (X1) ---
capture_ref: BUNDLE-SYNTH-Z-J10
screen_ref: [FR-SYNTH-0041]
copy_ref: [CP-SYNTH-0033]
transition_ref: [TR-SYNTH-0040]
jrn_ref: [J10-paywall-cancel-return, J2-onboarding]
observed: >
  Paywall (FR-0041) appears at onboarding step 4, before any habit can be
  logged. All tracking, reminders and progress are gated. Copy string CP-0033
  states "7-day free trial"; renewal price and auto-conversion appear only in
  6pt text at screen bottom. No in-app cancellation path was reachable from the
  captured flow. (Literal; no principle/rating/metric words.)
# --- interpretation (X2) ---
principle_refs: ["paywall:onboarding_hard", "AARRR:activation", "dark_pattern:forced_continuity", "dark_pattern:sneaking"]
polarity: problem
interpretation: >
  Hard paywall placed before the first-value moment, with auto-conversion terms
  obscured and no observed cancel path — reads as forced continuity + sneaking
  under the Brignull/FTC frame. Expert reading, not a measured conversion fact.
measures: {paywall_model: onboarding, paywall_before_value: true, gated_capabilities: [tracking, reminders, progress], trial_terms_disclosed: true, auto_convert_disclosed: false, price_clarity: obscured, cancel_path_observed: no_not_captured, dark_pattern_tags: [forced_continuity, sneaking]}
dark_pattern_tags: [forced_continuity, sneaking]
# --- rating (X4) ---
rating: 4
rating_components: {frequency: high, impact: high, persistence: n/a}
rating_basis: >
  Every new user hits it (freq high); blocks value AND obscures auto-conversion
  with no cancel path (impact high) -> integrity harm (4). CAPTURED-STRUCTURAL
  (the terms and placement are on FR-0041/CP-0033); user effect is a hypothesis.
evidence_source: measured_structural
# --- no-outcome / grading / hypothesis (X2, X3) ---
conversion_retention_claim: none            # asserts/infers NO conversion/retention/revenue figure (X3)
market_estimate_ref: null                   # no third-party number used
observation_grade: B                         # captured placement/terms, single session/region
prediction_grade: D
user_impact_hypothesis: >
  Hypothesis: some users may abandon before experiencing value, and some may be
  charged after a trial they did not realise would auto-convert. NOT user-validated
  (TASK-048); no conversion/churn figure asserted.
confidence: likely                           # for the captured structural fact; the harm reading is indicative
uncertainty_note: >
  Single account, single region, one app version; cancellation flow not captured
  (may exist elsewhere — see gap); no outcome data of any kind.
separation_check: true
# --- linkage (§6.6) ---
coverage: observed
safety_gate_ref: TASK-033                    # MANDATORY: dark_pattern_tags non-empty
gap_ref: GAP-SYNTH-0012                      # cancellation path not reached in capture
pattern_ref: PAT-SYNTH-ANTI-0007
contradiction_ref: null
crosslink_refs: [TASK-019, TASK-015]         # usability of flow; any revenue estimate lives in TASK-015
fix_hypothesis: >
  Deliver a first habit completion before any paywall; disclose auto-conversion
  and price in body text; expose an in-app cancel path -> candidate EXP (TASK-009).
status: draft
```

### 12.2 `GCA-SYNTH-002` — content lens · D4 copy tone (confirmshaming on the decline action)
```yaml
gca_id: GCA-SYNTH-002
app_id: APP-SYNTH-Z
auditor_lens: content
dimension: [D4_copy_tone]
auditor_role: content_strategist_uxwriter   # auditor_ref: [SYNTHETIC]
audit_date: 2026-11-22
# --- evidence anchor (X1) ---
capture_ref: BUNDLE-SYNTH-Z-J10
screen_ref: [FR-SYNTH-0041]
copy_ref: [CP-SYNTH-0034]
transition_ref: []
jrn_ref: [J10-paywall-cancel-return]
observed: >
  The paywall's decline button (CP-0034) reads verbatim:
  "No thanks, I don't want to feel better." The accept button reads "Start my
  healthier life." (Literal quoted copy; no principle/rating/metric words.)
# --- interpretation (X2) ---
principle_refs: ["dark_pattern:confirmshaming", "SDT:controlling", "content:honest_labels"]
polarity: problem
interpretation: >
  The decline wording loads guilt onto the user's choice (confirmshaming) and is
  controlling rather than autonomy-supportive under the SDT frame. Expert content
  reading, not a user reaction.
measures: {tone_profile: [shaming, controlling], autonomy_support: controlling, confirmshaming_present: true, honest_labels: false, plain_language: true}
dark_pattern_tags: [confirmshaming]
# --- rating (X4) ---
rating: 4
rating_components: {frequency: high, impact: high, persistence: n/a}
rating_basis: >
  Shown to every user at the paywall (freq high); directly pressures the autonomy
  of a paid decision via guilt (impact high) -> integrity harm (4). CAPTURED copy
  (CP-0034); perceived pressure is a hypothesis.
evidence_source: copy_verbatim
# --- no-outcome / grading / hypothesis (X2, X3) ---
conversion_retention_claim: none            # no claim that this "converts" (X3) — that framing is banned
market_estimate_ref: null
observation_grade: B                         # the string exists as quoted
prediction_grade: D
user_impact_hypothesis: >
  Hypothesis: the wording may pressure or shame some users into subscribing, or
  erode trust. NOT user-validated (TASK-048).
confidence: likely                           # that the string exists; the harm reading is indicative
uncertainty_note: >
  Single capture/version; perceived pressure not measured; wording may differ by
  region/experiment; no conversion data asserted or available.
separation_check: true
# --- linkage (§6.6) ---
coverage: observed
safety_gate_ref: TASK-033                    # MANDATORY: confirmshaming is a manipulation flag
gap_ref: null
pattern_ref: PAT-SYNTH-ANTI-0008
contradiction_ref: null
crosslink_refs: [TASK-018, TASK-022]         # behavioral guilt reading; copy accessibility verdict
fix_hypothesis: >
  Replace with neutral, honest decline copy ("Not now") and an accept label that
  states the actual action ("Start 7-day trial") -> content pattern + EXP (TASK-009).
status: draft
```

### 12.3 `GCA-SYNTH-003` — content lens · D3 lifecycle messaging (no multi-day pass → coverage gap, NOT inferred)
```yaml
gca_id: GCA-SYNTH-003
app_id: APP-SYNTH-Z
auditor_lens: content
dimension: [D3_lifecycle_messaging]
auditor_role: content_strategist_uxwriter   # auditor_ref: [SYNTHETIC]
audit_date: 2026-11-22
capture_ref: BUNDLE-SYNTH-Z-J10
screen_ref: []
copy_ref: []
transition_ref: []
jrn_ref: [J6-reminders-reentry]
observed: >
  The captured bundle is a single-session walkthrough only. No push
  notifications, emails, or dormancy/winback messages were captured. The app's
  settings screen (FR-0022) offers a "reminders" toggle, but no actual lifecycle
  message was observed. (Literal; absence recorded, nothing inferred.)
principle_refs: ["lifecycle:stages"]
polarity: neutral
interpretation: >
  Lifecycle messaging cannot be audited: no out-of-session message was captured.
  The presence of a settings toggle is NOT evidence of any message content, tone,
  or cadence (X6).
measures: {permission_priming_observed: not_captured}
dark_pattern_tags: []
rating: 0
rating_components: {frequency: n/a, impact: n/a, persistence: n/a}
rating_basis: >
  No finding possible — this is a coverage gap, not a rated observation.
evidence_source: structured_expert
conversion_retention_claim: none            # no open/click/reactivation rate asserted (X3)
market_estimate_ref: null
observation_grade: C                         # a sound statement about what is absent
prediction_grade: D
user_impact_hypothesis: null
confidence: indicative
uncertainty_note: >
  Lifecycle messages require a multi-day/notification/subscription capture pass
  that does not exist; content/tone/cadence are unknown and must not be inferred.
separation_check: true
coverage: not_observed                       # X6: do NOT infer lifecycle messaging
safety_gate_ref: null
gap_ref: GAP-SYNTH-0013                      # request a 7–14-day + notification + email-subscription capture pass
pattern_ref: null
contradiction_ref: null
crosslink_refs: [TASK-017, TASK-022]         # capture request; notification permission as iOS pattern
fix_hypothesis: null
status: draft
```

**Validation trace (illustrative).**
- `GCA-SYNTH-001`: anchored (FR-0041/CP-0033/TR-0040) ✔ (no V1); `observed` literal, no metric word ✔ (no V3); **no conversion/retention figure; `conversion_retention_claim: none`** ✔ (no V4/V5); rating 0–4 with components+basis ✔ (no V7); forced-continuity rated `problem`, routed to TASK-033 ✔ (no V9/V10); `prediction_grade: D` ✔ (no V11); uncertainty non-empty, no banned words ✔ (no V12); cancellation-gap logged ✔; revenue routed to TASK-015 not asserted ✔ (no V6/V18). **Valid.**
- `GCA-SYNTH-002`: quoted copy anchored (CP-0034) ✔; confirmshaming → `problem` + `safety_gate_ref: TASK-033` ✔ (no V9/V10); no "converts" language ✔ (no V4/V12); lens/dimension consistent (content↔D4) ✔ (no V19). **Valid.**
- `GCA-SYNTH-003`: correctly recorded as `coverage: not_observed` + `gap_ref` with **nothing inferred** from the settings toggle ✔ (no V13); rating 0 as a gap, not a scored finding ✔; no reactivation metric ✔ (no V4). **Valid — demonstrates the X6 lifecycle-capture guard.**

---

## 13. Dependencies, open unknowns & change log

**Upstream (consumed):** TASK-017 (capture bundle + the multi-day/notification/subscription pass) · TASK-016 (`JRN` journey scripts, esp. J1/J2/J3/J4/J6/J10) · TASK-006 (`APP` registry) · TASK-005 (`EVD` schema) · TASK-004 (grading & confidence) · TASK-003 (R09/R10 lens-split owners; R02/R14/R15 reviewers).
**Downstream (feeds):** TASK-023 (reconciliation) · `PAT-001` + "Content patterns and anti-patterns" · "Measurement plan" (activation/retention **hypotheses** only) · TASK-033 (manipulation/unsupported-claims safety gate) · TASK-015 (commercial estimates — the home for any third-party number) · TASK-030/031 (capability records) · TASK-041/042 (Opportunity Atlas) · TASK-045 (wireframe + content/activation brief) · TASK-048 (willingness-to-pay / comprehension / return-intention testing) · TASK-008/009 (gaps/experiments).
**Sibling lenses (reconciled, not duplicated):** TASK-018 behavioral · TASK-019 UX · TASK-020 visual/motion · TASK-022 iOS/accessibility.

**Open unknowns (carried, not invented):**
- **U1 — Lifecycle capture depth.** Whether TASK-017 will run a true 7–14-day + notification + email-subscription pass is unknown; without it, D3 and delayed D5 are structurally `not_observed` (X6). Flagged to TASK-017 / TASK-008.
- **U2 — Account/region/experiment variance.** Paywalls, prices, and copy are frequently A/B-tested and region/cohort-specific; a single capture is one draw. All paywall/price/copy findings carry this limitation and cap at grade B.
- **U3 — Cancellation-flow reachability.** Some apps route cancellation through the App Store subscription settings rather than in-app; "no in-app cancel path captured" is an observation to verify, not proof of a roach motel. Logged as a gap, cross-linked TASK-022.
- **U4 — Framework status.** AARRR, TTFV, the Hook model, and paywall taxonomies are practitioner frameworks (grade ≤ C), not science; the Hook model especially is used only as a *hazard-flagging* vocabulary, never an endorsement (§4.4, §7.4).
- **U5 — Role/staffing.** R09/R10 are accountable *role types*, not named individuals (TASK-003); real staffing is open.

**Change log:**
- v0.1 (2026-11-22) — Initial growth & UX-writing audit template. Defines the two-lens (growth R09 / content R10) split; the five acceptance-criteria dimensions (D1 first-value, D2 paywall timing, D3 lifecycle messaging, D4 copy tone, D5 return triggers); the `GCA` record contract with the mandatory `conversion_retention_claim: none` guard; six non-negotiables (X1–X6) centred on the conversion/retention prohibition (X3) and the autonomy/anti-dark-pattern rule (§7.5); the published-instrument frame (§4); a 19-item validation catalogue; and three clearly-labelled synthetic worked records (incl. a coverage-gap example). No app audited; no metric asserted.
