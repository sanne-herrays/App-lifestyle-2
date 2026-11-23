# HerRays Capability Safety-Gate Checklist

**Deliverable:** TASK-033 — Create the capability safety gate checklist
**Workstream:** Capability Extraction (WS02 → feeds Phase 4 Capability Review)
**Version:** 0.1 · **Status:** Proposed — checklist defined, not yet run against any capability
**Owner (accountable role):** R14 Clinical reviewer (gate convenor) · co-responsible R15 Privacy/regulatory reviewer · consulted R13 QA/accessibility, R02 Behavioral scientist · informed R01 Head of Product — per TASK-003 §C4 RACI row
**Per-gate accountable owners:** Clinical → R14 · Privacy → R15 · Manipulation/ethics → R02 · Accessibility → R13 · Unsupported-claims → R09 (health claims co-signed by R14)
**Source basis:** `prd.md` §5 Phase 4 (the "First apply mandatory clinical, privacy, ethics, accessibility and unsupported-claim gates … then assess" instruction and the Adopt/Adapt/Invent/Reject/Defer output), §9 ("Clinical safety, privacy and accessibility are mandatory gates, not compensable weighted scores"), §11 (five quality gates; "Polished unsupported reports do not pass"), §6 ("risks of guilt, compulsion, burden and excessive tracking"; consent and data minimization), §4 ("Do not interpret a high grade on usability as a high grade on health impact"; "Never fabricate … clinical outcomes"), §3 ("Engagement does not establish clinical efficacy"; reverify editorial recognition), executive mandate ("clinically responsible", "non-patronizing"), §13 Prompt 00 ("Separate evidence, inference, hypothesis and invention"), Prompt 05 (clinical boundaries, GDPR, medical-claim/device implications), Prompt 07 ("Apply mandatory clinical, privacy, ethical and accessibility gates first"), §2 specialist table (R02/R13/R14/R15 lenses). Interlocks with TASK-030 `safety_gate` field, TASK-004 grading, TASK-008 gap/contradiction log, TASK-034 scorecard, TASK-035 decision form, TASK-036 red-team.

---

## 0. How to read this document

This document defines the **capability safety-gate checklist** — the mandatory, non-compensable screen that every extracted capability (`CAP` record, `→ TASK-030`) must pass **before** it is value-scored or decided. The PRD is unambiguous about ordering: at capability review the Lab must *"First apply mandatory clinical, privacy, ethics, accessibility and unsupported-claim gates"* and only *then* assess user value, evidence, experience, differentiation, long-term usefulness and feasibility (`prd.md` §5 Phase 4). The gates are not weighted criteria that a strong product can outscore — `prd.md` §9 states plainly that *"Clinical safety, privacy and accessibility are mandatory gates, not compensable weighted scores."* This checklist is the instrument that makes that ordering and that non-compensability operational and auditable.

It is a **governance / review-protocol artifact**. It defines **five gate domains, the check items within each, and the rules that map the evidence a reviewer finds to one of four outcomes — `pass` / `redesign` / `investigate` / `reject`.** It also defines how the five domain outcomes aggregate into one gate verdict, and how that verdict constrains the capability's `decision_status`.

It contains **no real research finding, clinical judgement, or test result.** The single worked example in §7 re-uses the PRD's own *illustrative* streak capability (`prd.md` §5 Phase 3) with clearly-marked synthetic evidence ids, and exists only to show the checklist runs and blocks correctly.

> **No-fabrication statement.** This checklist asserts no real clinical outcome, privacy assessment, accessibility test result, user quote, metric, or efficacy finding. It cites no real `EVD` record. The one worked gate run (§7) is labelled **ILLUSTRATIVE (synthetic)** end-to-end; its outcomes are *demonstrations of the decision rules*, not judgements about any real app, and the capability it screens is deliberately left short of adoption (`overall_gate: redesign`, `decision_status: Redesign-required`). The checklist is built to make fabrication *detectable*, not to generate findings: a `pass` is invalid unless the reviewer records the evidence the pass rests on (§6.1 "no pass by omission"), a health or efficacy claim cannot clear §4.5 without a graded `EVD` source (`↔ TASK-004`), and a capability may never be fabricated into safety by a high value score (§6.2, the non-compensability guard).

**Scope boundary (what this task is and is not).**
- **TASK-033 (this document) = the *safety screen*: the five gate domains, their check items, the four outcomes, and the aggregation/non-compensability rules.** It defines the *logic and content* behind the `safety_gate` map that TASK-030 declares as a field.
- **TASK-030 (capability mechanism record schema) = the *container*.** It declares `safety_gate` as `{clinical, privacy, manipulation, accessibility, unsupported_claims} → pass | redesign | investigate | reject | not_yet_assessed` and rule **C3** (gates evaluated first, non-compensable). This document supplies the *meaning* of each value and *how a reviewer arrives at it*. Flagged `↔ TASK-030`.
- **TASK-034 (evaluation scorecard) runs strictly after this gate.** Weighted value scoring is *inadmissible* until every gate domain reads `pass` (§3.4, `↔ TASK-030` C3). This document does **not** score value; it decides admissibility to scoring. Flagged `→ TASK-034`.
- **TASK-035 (decision form) consumes this verdict.** The Adopt/Adapt/Invent/Reject/Defer decision cannot be `approved` over an un-passed gate; the gate verdict is a mandatory input to the decision form. This document does **not** make the Adopt/Adapt/Invent/Reject/Defer call — it constrains which calls are reachable. Flagged `→ TASK-035`.
- **TASK-036 (red-team protocol) is adversarial and separate.** Red-teaming challenges high-priority capabilities on harm, dependency, anxiety, screen time and generalizability (`prd.md` §5 Phase 4 "Red-team every high-priority item"). A red-team finding can *re-open* a gate, but red-teaming is not a substitute for the structured gate here. Flagged `→ TASK-036`.
- **TASK-040 (privacy & clinical boundary checklist, WS05) is the deeper instrument the privacy/clinical gates *call*.** The §4.1/§4.2 gates here are the capability-review screen; where a capability trips a boundary, the gate routes to the fuller TASK-040 assessment rather than re-deriving it. Flagged `→ TASK-040`.
- **This is a *gate*, not a *grader*.** Evidence grades (A–D) come from TASK-004; this checklist *reads* grades to decide outcomes (e.g., a health claim resting on grade-D evidence fails §4.5) but does not assign them.

---

## 1. Purpose and non-negotiables

The checklist exists to do five jobs:

1. **Enforce the PRD's ordering: safety before value.** Gates run *first*; scoring is gated behind an all-`pass` result (`prd.md` §5 Phase 4). This prevents the single most common failure mode of a capability review — a delightful, differentiated, feasible capability being adopted while a clinical or autonomy harm rides along unexamined.
2. **Make the five mandatory domains concrete and checkable.** "Apply clinical, privacy, ethics, accessibility and unsupported-claim gates" (`prd.md` §5 Phase 4) is a mandate, not a method. This document turns each domain into a finite list of check items with explicit decision rules, so two reviewers applying it to the same capability reach the same outcome for the same reason.
3. **Give reviewers a vocabulary richer than pass/fail.** A binary gate forces reviewers to either wave through a fixable concern or kill a promising capability. The four outcomes — **pass, redesign, investigate, reject** — let the gate say precisely *what must happen next*: nothing (pass), a specific design change (redesign), a specific question answered (investigate), or abandonment within scope (reject).
4. **Keep the gates non-compensable.** No value, delight, or differentiation score may offset a gate concern (`prd.md` §9). A capability that fails a gate cannot be scored around; the §5 aggregation rule makes the overall verdict the *worst* domain outcome, never an average.
5. **Preserve rejected and redesigned capabilities, never delete them.** A `reject` is recorded with rationale and preserved in the innovation backlog (`prd.md` §11 / Prompt 11); a `redesign` returns the capability to the extraction loop with the required change named. The gate removes a capability from the *current adoption path*, it does not erase the learning.

**Four non-negotiable rules, enforced throughout:**

- **S1 — Gates first, scoring second, and the ordering is structural.** `safety_gate` for all five domains must be set to a terminal outcome (not `not_yet_assessed`) before `scores` may be populated (`↔ TASK-030` C3). A scorecard produced over an un-assessed or failed gate is void (§6.2).
- **S2 — Non-compensable: the overall verdict is the worst domain outcome.** `overall_gate = reject` if any domain is `reject`; else `redesign` if any is `redesign`; else `investigate` if any is `investigate`; else `pass` only when **all five** are `pass` (§5.1). There is no weighting, no "three passes outvote one reject," no partial credit (`prd.md` §9).
- **S3 — No pass by omission; every outcome is evidenced.** A `pass` is valid only if the reviewer records *what was checked and what evidence supports the pass* (an `EVD` ref, an observed behavior, or an explicit "not applicable because …"). A blank, an unexamined item, or "no concern noticed" defaults to `not_yet_assessed`, **never** to `pass` (§6.1). Silence is not safety.
- **S4 — Separation of duties; the proposer does not clear their own gate.** The role that extracted or authored the capability may not be the accountable signer of a safety-relevant gate on it. Clinical (R14), privacy (R15) and accessibility (R13) gates are signed by their dedicated reviewer roles; manipulation (R02) and unsupported-claims (R09) likewise (`prd.md` §2 specialist lenses; TASK-003 separation-of-duties). A gate signed by the proposing role alone is void (§6.4).

---

## 2. The four outcomes

Every check item, and every gate domain, resolves to exactly one of four terminal outcomes, plus the pre-assessment state `not_yet_assessed`. These are the values TASK-030's `safety_gate` map accepts (`↔ TASK-030` §3.7).

| Outcome | Meaning | What it asserts | Downstream effect on the `CAP` record |
|---|---|---|---|
| **`pass`** | No safety concern found on this domain for this capability *as specified*, and the reviewer has recorded the evidence for that judgement. | "I checked each item in this domain and either found no concern or found a concern already fully mitigated in the specification." | Does not block. When **all five** domains `pass`, value scoring (`→ TASK-034`) becomes admissible. |
| **`investigate`** | The reviewer *cannot yet tell* whether this domain passes or fails, because a specific piece of evidence or information is missing. | "I found a potential concern I cannot resolve with the evidence at hand; here is the exact question that must be answered." | Blocks a decision. Opens a `GAP` record (`→ TASK-008`) stating the question, owner and next action. The capability may sit at `in_review` but cannot reach `decided`. |
| **`redesign`** | A concern exists that a **specific, named change** to the capability would resolve; the capability cannot proceed *as-is*. | "The capability as specified has a safety problem, and I can name the change that fixes it." | Forces `decision_status: Redesign-required` (`↔ TASK-030` §4.1). Returns the capability to the extraction/design loop with the required change recorded; it is re-gated after the change. |
| **`reject`** | The concern is **disqualifying within the current scope** and not resolvable by a design change — the capability makes an unprovable medical claim, requires unlawful or non-consented processing, is inherently coercive, or cannot be made accessible. | "This capability cannot proceed on this path; the harm is intrinsic, not a fixable detail." | Forces `decision_status: Reject`. Preserved in the innovation backlog with rationale (`prd.md` §11 / Prompt 11); never deleted. Value scoring is void. |
| *(`not_yet_assessed`)* | *Initial state only.* The gate has not been run. | Nothing — it is the absence of a judgement. | Blocks scoring and any decision. Must be replaced by a terminal outcome before §3.4 admits scoring. Never a valid *resting* state for a decided capability. |

**2.1 Severity precedence (used by the aggregation rule S2).**

```
pass  <  investigate  <  redesign  <  reject
(least blocking) --------------------> (most blocking)
```

`investigate` and `redesign` both **block a decision**; they differ in *why*. `investigate` = "we do not yet know the fix (or whether one exists)"; `redesign` = "we know the fix." An `investigate` can later resolve to `pass`, `redesign` or `reject` once its `GAP` is answered. Both rank below `reject` (disqualifying) and above `pass` (clear). The overall verdict takes the maximum (§5.1).

**2.2 Distinguishing the two blocking outcomes in practice.**

| If the reviewer… | Outcome |
|---|---|
| …can state the concern *and* the specific change that removes it | `redesign` |
| …can state the concern but **not** whether/how it can be removed without more evidence | `investigate` |
| …judges the concern intrinsic to the capability's premise (not a detail) | `reject` |
| …finds no concern, or a concern fully pre-mitigated, and records the basis | `pass` |

A reviewer who is tempted to write `pass` "to keep things moving" while privately unsure **must** write `investigate` instead (S3). Uncertainty is a first-class, recordable state, not a reason to wave through.

---

## 3. Gate evaluation protocol

### 3.1 When the gate runs
The gate runs when a `CAP` record reaches `record_status: in_review` (five layers populated, alternatives complete; `↔ TASK-030` §2.3) and **before** any value scoring. In the 90-minute extraction workshop (`→ TASK-032`) safety concerns are *flagged* and routed to on-call reviewers; they are *adjudicated* here, in the Capability Review Board sitting (`prd.md` §5 Phase 4), not in the workshop.

### 3.2 Who runs it
Each domain has one **accountable signer** (the dedicated reviewer role) and named **consulted** roles:

| Gate domain | Accountable signer | Consulted | PRD lens basis |
|---|---|---|---|
| §4.1 Clinical safety | **R14** Clinical reviewer | R02 Behavioral scientist; R15 for device/regulatory overlap | `prd.md` §2 (clinical reviewer: "care boundaries, clinical escalation"), §5 Phase 4, §9 |
| §4.2 Privacy & data | **R15** Privacy/regulatory reviewer | R06 Backend engineer (data flows); R14 for health-data clinical overlap | `prd.md` §2 (privacy reviewer: "GDPR, data minimization, medical claims/device implications"), §6, Prompt 05 |
| §4.3 Manipulation / autonomy / ethics | **R02** Behavioral scientist | R10 Content strategist (coercive copy); R07 UX researcher (observed distress) | `prd.md` §6 ("guilt, compulsion, burden, excessive tracking"), §2 (behavioral-scientist autonomy lens), executive mandate ("non-patronizing") |
| §4.4 Accessibility | **R13** QA/accessibility specialist | R08 Motion (reduced-motion); R04 Visual (contrast); R10 (plain-language) | `prd.md` §2 (QA/accessibility: "VoiceOver, dynamic type, failure states"), §9, §11 |
| §4.5 Unsupported claims | **R09** Product analyst/growth | **R14 co-sign mandatory for any health/medical claim**; R10 for user-facing copy; R12 for editorial/positioning | `prd.md` §4 ("Never fabricate … clinical outcomes"; "high grade on usability ≠ high grade on health impact"), §3 ("Engagement does not establish clinical efficacy"; reverify editorial recognition), §11 ("Polished unsupported reports do not pass") |

The accountable signer may not be the capability's `extracted_by_role` or sole proposer (S4). Where the proposing role *is* the domain's reviewer role, a second qualified reviewer co-signs.

### 3.3 Evidence a signer must record for each domain
For every domain the signer records, at minimum:
- the **outcome** (`pass` / `investigate` / `redesign` / `reject`);
- the **check items examined** (by id, §4);
- for a `pass`: the **basis** (an `EVD` ref, an observed capability behavior, or an explicit "N/A because …");
- for `investigate`: the **open question** and the `GAP-NNN` it opened (`→ TASK-008`);
- for `redesign`: the **required change** (specific enough to re-gate against);
- for `reject`: the **disqualifying reason** and the PRD/clinical/legal basis;
- the **signer role** and date.

A domain outcome with no recorded basis is **void** and reverts to `not_yet_assessed` (S3).

### 3.4 Admission to scoring (the hard interlock)
Weighted value scoring (`→ TASK-034`) is admissible **iff all five domains read `pass`** with recorded bases. Any `investigate`, `redesign` or `reject` on any domain makes `scores` inadmissible; a scorecard produced anyway is void and its capability cannot advance (`↔ TASK-030` C3, §6.2). This is the structural expression of `prd.md` §9 ("not compensable weighted scores").

### 3.5 Re-gating
`redesign` → the changed capability is re-submitted and **all five gates are re-run** (a change made to satisfy one gate can disturb another — e.g., adding a nudge to fix engagement can create a manipulation concern). `investigate` → only the investigated domain is re-evaluated once its `GAP` is answered, unless the answer changes the capability. `reject` is terminal for the current scope; re-entry requires a materially different capability with a new rationale (not a re-vote on the same one).

---

## 4. The five gates

Each gate below states its **purpose**, **PRD basis**, **check items** (numbered, so a review can be cited item-by-item), and the **decision rules** that map what a reviewer finds to one of the four outcomes. Check items are phrased as questions; a "yes" to a *concern* question drives a non-`pass` outcome per the rules.

---

### 4.1 Clinical safety gate — accountable **R14**

**Purpose.** Ensure the capability stays within HerRays' care boundaries, does not create clinical risk for midlife women, does not substitute for or obstruct appropriate clinical care, and escalates appropriately when a user signals a health concern. HerRays "combines … appropriate physician-led care" and the experience must be *"clinically responsible"* (`prd.md` executive mandate; §13 Prompt 00).

**PRD basis.** §9 (clinical safety is a mandatory non-compensable gate); §5 Phase 4 (clinical gate applied first); §2 (clinical reviewer lens: "Evidence, care boundaries, clinical escalation"); §6 (separate clinical outcomes from engagement; risks of excessive tracking); Prompt 05 ("clinical boundaries", "medical claims/device implications").

**Check items.**
- **CL-1 — Care-boundary.** Does the capability advise, diagnose, triage, or modify a health behavior (sleep, activity, nutrition, stress, medication, symptoms) in a way that crosses from general lifestyle guidance into clinical care or medical advice?
- **CL-2 — Vulnerable-state safety.** Could the capability cause harm for a user in a vulnerable state — disordered eating risk, over-exercise, menopause-related symptoms, low mood, chronic condition — e.g., by pushing streaks/targets that incentivise unsafe behavior?
- **CL-3 — Escalation path.** If a user discloses or the capability detects a potential health concern (e.g., a logged symptom, a distress signal), is there a defined, safe escalation to physician-led care or appropriate resources, rather than a dead end or an app-only response?
- **CL-4 — Non-obstruction.** Does the capability avoid discouraging, delaying, or replacing appropriate clinical care (e.g., by framing an app streak as a substitute for seeing a clinician)?
- **CL-5 — Evidence-for-safety.** Where the capability makes or implies a health effect, is the *safety* of the mechanism (not its efficacy — that is §4.5) supported by evidence appropriate to the population (midlife women), or at least free of known contraindication?
- **CL-6 — Device/regulatory trigger.** Could the capability's function (measurement, risk scoring, symptom interpretation) bring it within medical-device or regulated-function scope, requiring the fuller TASK-040 / regulatory assessment?

**Decision rules.**

| Finding | Outcome |
|---|---|
| All CL items examined; no care-boundary crossing, a safe escalation path exists (or none is needed), no vulnerable-state harm, no device trigger — basis recorded | **`pass`** |
| A potential clinical risk is identified but cannot be judged without clinical-evidence review or population data not yet to hand (e.g., CL-5 unresolved; CL-6 device status unclear) | **`investigate`** → open `GAP`, route to TASK-040 |
| A clinical concern exists that a bounded change removes — e.g., add an escalation prompt (CL-3), cap a target to a clinically safe range (CL-2), re-frame to stay within lifestyle guidance (CL-1/CL-4) | **`redesign`** → name the change |
| The capability's premise is intrinsically clinical-risk-bearing or crosses into medical advice/diagnosis it cannot safely give, or incentivises known-unsafe behavior with no safe version | **`reject`** |

---

### 4.2 Privacy & data gate — accountable **R15**

**Purpose.** Ensure the capability collects and processes the minimum personal (and especially health) data necessary, on a lawful basis, with meaningful consent and appropriate access control — and makes no onward use that a user would not expect. Women's-health and lifestyle data is sensitive; HerRays must *"minimize sensitive data"* and obtain consent (`prd.md` §6).

**PRD basis.** §9 (privacy is a mandatory non-compensable gate); §6 ("Obtain consent and minimize sensitive data"); §2 (privacy/regulatory reviewer: "GDPR, data minimization, medical claims/device implications"); Prompt 05 ("privacy/GDPR", "data ownership"); §4 (source-handling discipline; never fabricate internal data).

**Check items.**
- **PR-1 — Data minimization.** Does the capability collect only data necessary for the user-facing job, and no more (no "collect because we can")? Is each collected field tied to a stated purpose?
- **PR-2 — Sensitivity classification.** Is any collected data special-category/health data (symptoms, cycle, mood, weight, medication)? If so, is the heightened basis and handling identified?
- **PR-3 — Lawful basis & consent.** Is there a lawful basis, and is consent (where required) specific, informed, freely given, and revocable — not bundled or coerced by the capability's design?
- **PR-4 — On-device vs. off-device.** Can the capability's personalization/processing run on-device (preferred) rather than transmitting sensitive data off-device? If data leaves the device, is that necessary and disclosed?
- **PR-5 — Access control & retention.** Are access controls, retention limits, and deletion/export rights defined for the data this capability creates?
- **PR-6 — Onward use / sharing.** Does the capability avoid secondary use (ad targeting, undisclosed analytics, sharing with third parties or clinicians) beyond what the user consented to?

**Decision rules.**

| Finding | Outcome |
|---|---|
| Minimal data, purpose-bound, lawful basis and revocable consent present, sensitive data classified and protected, on-device where feasible, no undisclosed onward use — basis recorded | **`pass`** |
| Data flow or lawful basis cannot be determined at capability-review stage (depends on unmade architecture decisions `→ TASK-039`), or special-category status is unclear | **`investigate`** → open `GAP`, route to TASK-040 |
| A fixable privacy defect — collects more than needed (minimize it, PR-1), consent is bundled (unbundle it, PR-3), sensitive data sent off-device unnecessarily (move on-device, PR-4), retention unbounded (bound it, PR-5) | **`redesign`** → name the change |
| The capability *requires* unlawful or non-consentable processing, or its core value depends on a secondary use a user would reject and that cannot be removed without destroying the capability | **`reject`** |

---

### 4.3 Manipulation / autonomy / ethics gate — accountable **R02**

**Purpose.** Ensure the capability supports the user's autonomy and genuine benefit rather than exploiting psychological pressure to drive engagement. HerRays must be *"empowering, non-patronizing"* (executive mandate) and the Lab must *"assess risks of guilt, compulsion, burden and excessive tracking"* (`prd.md` §6). This is the gate that catches dark patterns, guilt mechanics, and dependency-by-design.

**PRD basis.** §5 Phase 4 ("ethics" among the mandatory gates); §6 (guilt, compulsion, burden, excessive tracking; autonomy); executive mandate ("non-patronizing", "empowering"); §2 (behavioral-scientist lens: Self-Determination Theory / autonomy); the streak worked example's named risk of "shame and all-or-nothing behavior" (`prd.md` §5 Phase 3).

**Check items.**
- **MN-1 — Autonomy.** Does the capability leave the user in control of goals, pace and data — supporting competence and autonomy (SDT) rather than directing or pressuring them?
- **MN-2 — Guilt / loss-aversion.** Does the capability use guilt, shame, loss-aversion (e.g., punitive streak reset), or fear to drive return — especially after a lapse? Does a miss punish rather than support recovery?
- **MN-3 — Compulsion / dependency.** Could the capability foster compulsive checking, dependency, or anxiety (variable rewards, artificial urgency, fear-of-missing-out, notification pressure)?
- **MN-4 — Burden / excessive tracking.** Does the capability demand tracking or effort disproportionate to the value it returns, risking the "tracking becomes work" failure mode?
- **MN-5 — Honest framing (consent to influence).** Are nudges and persuasive design transparent and in the user's interest, not covert or against it? No fake social proof, no manufactured scarcity.
- **MN-6 — Exit / downgrade dignity.** Can the user reduce engagement, skip, pause, or cancel without punishment, dark-pattern friction, or shaming copy?

**Decision rules.**

| Finding | Outcome |
|---|---|
| Autonomy-supporting, recovery-oriented, honest framing, proportionate burden, dignified exit — no coercive mechanic found; basis recorded | **`pass`** |
| A potential autonomy/compulsion risk is plausible but depends on user response not yet observed (needs the diary/usability evidence `→ TASK-028/048`) | **`investigate`** → open `GAP` |
| A coercive mechanic exists that a bounded change removes — replace punitive reset with flexible/recovery framing (MN-2), soften notification pressure (MN-3), add a dignified pause/skip (MN-6), make a nudge transparent (MN-5) | **`redesign`** → name the change (this is the expected outcome for guilt-driven streak mechanics) |
| The capability's *core value proposition is the manipulation itself* (its benefit exists only because it pressures/guilts/addicts) and cannot survive removal of the coercion | **`reject`** |

---

### 4.4 Accessibility gate — accountable **R13**

**Purpose.** Ensure the capability is usable by the full range of HerRays users, including those relying on VoiceOver, Dynamic Type, reduced motion, and sufficient contrast, and that it degrades gracefully. Accessibility is a mandatory non-compensable gate (`prd.md` §9), not a polish item.

**PRD basis.** §9 (accessibility is a mandatory non-compensable gate); §11 (Gate 4 "accessibility review"); §2 (QA/accessibility lens: "VoiceOver, dynamic type, failure states, reliability"); §5 Phase 2 ("accessibility and platform behavior" recorded per journey); interlocks with the iOS/accessibility audit `→ TASK-022`.

**Check items.**
- **AX-1 — Screen reader.** Is the capability fully operable and understandable via VoiceOver — every control labelled, every state announced, nothing conveyed by position alone?
- **AX-2 — Dynamic Type.** Does the capability remain usable and legible at the largest Dynamic Type sizes without truncation, overlap, or loss of function?
- **AX-3 — Reduced motion.** For any animation, motion-based feedback, or haptic, is there a reduced-motion alternative that preserves the meaning (not just a removed animation leaving a gap)?
- **AX-4 — Contrast & non-color cues.** Does the capability meet contrast guidance and avoid conveying state by color alone (e.g., a streak/progress signalled also by text/shape)?
- **AX-5 — Target size & input.** Are interactive targets adequately sized and reachable; does the capability support users who cannot perform precise/fast gestures?
- **AX-6 — Failure & offline states.** Does the capability degrade gracefully (clear, accessible error and offline states) rather than trapping or silently failing a user with assistive needs?

**Decision rules.**

| Finding | Outcome |
|---|---|
| Every AX item examined and met (or an accessible-equivalent path is specified); basis recorded | **`pass`** |
| Accessibility cannot be confirmed without a build/audit pass that has not yet run (`→ TASK-022`) — the design is plausibly accessible but unverified | **`investigate`** → open `GAP`, route to TASK-022 |
| A fixable accessibility defect — add VoiceOver labels/state (AX-1), provide a reduced-motion equivalent (AX-3), add a non-color cue (AX-4), enlarge targets (AX-5) | **`redesign`** → name the change (expected outcome for motion/haptic-dependent capabilities with no alt path) |
| The capability's value is *intrinsically* inaccessible (depends on a sense/interaction that cannot be given an equivalent) and cannot be made accessible without becoming a different capability | **`reject`** |

---

### 4.5 Unsupported-claims gate — accountable **R09** (health claims co-signed by **R14**)

**Purpose.** Ensure the capability — and any copy, positioning, or implied benefit around it — does not assert more than the graded evidence supports, and never presents engagement, popularity, or editorial recognition as proof of behavior change or clinical efficacy. *"Polished unsupported reports do not pass"* (`prd.md` §11); *"Engagement does not establish clinical efficacy"* (`prd.md` §3); a high usability grade is *"not a high grade on health impact"* (`prd.md` §4).

**PRD basis.** §11 ("Polished unsupported reports do not pass"); §4 ("Do not interpret a high grade on usability as a high grade on health impact"; "Never fabricate … clinical outcomes"); §3 ("Engagement does not establish clinical efficacy"; reverify editorial recognition; "popularity" ≠ efficacy); §13 Prompt 00 ("Separate evidence, inference, hypothesis and invention. Do not invent research, metrics"); interlocks with evidence grading `↔ TASK-004` and editorial-recognition ledger `→ TASK-010`.

**Check items.**
- **UC-1 — Claim ↔ evidence match.** For every benefit the capability asserts or implies (in mechanism, copy, or positioning), is there a graded `EVD` source whose grade and population actually support the strength of the claim (`↔ TASK-004`)?
- **UC-2 — Efficacy vs. engagement.** Is a behavior-change or health claim backed by *efficacy* evidence, not merely engagement/retention/usage data? (Usage ≠ outcome; `prd.md` §4.)
- **UC-3 — Popularity / editorial laundering.** Is any claim resting on downloads, rankings, ratings, or "App of the Day"/editorial recognition as if it proved efficacy? (It cannot; `prd.md` §3, `→ TASK-010`.)
- **UC-4 — Medical/clinical claim.** Does the capability make or imply a medical/clinical claim (treats, diagnoses, prevents, cures) that would require clinical evidence and regulatory review? *(Any yes here requires the R14 co-sign and routes to §4.1/TASK-040.)*
- **UC-5 — Invention labelled as validated.** Is any invented/hypothesized mechanism (`mechanism_status ∈ {hypothesized, invented}`) presented to users or stakeholders as established fact rather than as a hypothesis under test?
- **UC-6 — Transferability honesty.** Where evidence exists but in a different population, is the claim honest about limited transferability to midlife women (`prd.md` §6), rather than over-generalising?

**Decision rules.**

| Finding | Outcome |
|---|---|
| Every asserted/implied benefit is matched to adequately-graded evidence of the right type and population, no popularity/engagement laundering, inventions labelled as hypotheses; basis recorded | **`pass`** |
| A claim's evidence sufficiency cannot be judged until a grade is assigned or a source verified (`↔ TASK-004`, `→ TASK-010`) | **`investigate`** → open `GAP` |
| A claim overstates the evidence but a bounded wording/scope change fixes it — downgrade "improves sleep" to "may support a sleep routine", strip a popularity proof, add a transferability caveat (UC-6), relabel an invention as hypothesis (UC-5) | **`redesign`** → name the required wording/scope change |
| The capability's value *depends on* a claim the evidence cannot support (e.g., an efficacy/medical claim with only grade-D or engagement evidence and no path to substantiation within scope) | **`reject`** |

---

## 5. Aggregation, the gate verdict record, and separation of duties

### 5.1 Aggregation rule (non-compensable, S2)
The overall gate verdict is the **worst** of the five domain outcomes under the §2.1 precedence:

```
overall_gate =
  reject       if any domain  = reject
  else redesign if any domain = redesign
  else investigate if any domain = investigate
  else pass    only if ALL five domains = pass
  else not_yet_assessed   (any domain still unassessed ⇒ gate incomplete)
```

There is no averaging, no weighting, and no domain can be "bought back" by strength elsewhere. This is the operational form of `prd.md` §9.

### 5.2 Effect on the `CAP` record (`↔ TASK-030`)

| `overall_gate` | `safety_gate` map | Effect on `decision_status` | Scoring (`→ TASK-034`) |
|---|---|---|---|
| `pass` | all five = `pass` | eligible for any verdict; gate does not constrain | **admissible** |
| `investigate` | ≥1 = `investigate`, none worse | blocked from `decided`; `GAP`(s) open (`→ TASK-008`) | inadmissible |
| `redesign` | ≥1 = `redesign`, none `reject` | forced to `Redesign-required` | inadmissible (void if produced) |
| `reject` | ≥1 = `reject` | forced to `Reject`; preserved in backlog | inadmissible (void if produced) |
| `not_yet_assessed` | any still unassessed | no decision possible | inadmissible |

### 5.3 The gate verdict record
Each gate run appends a verdict block to the `CAP` record (`safety_gate` map plus a per-domain note) and, for any non-`pass` domain, the required change / open question / rejection reason. The verdict carries each domain's **signer role and date**, the `overall_gate`, and links to any `GAP-NNN` (`→ TASK-008`) opened. It is append-only and versioned with the record (`↔ TASK-030` §2.2); a re-gate after redesign adds a new verdict block, it does not overwrite the prior one (the history of concerns is preserved).

### 5.4 Separation of duties (S4) and escalation
- No domain is signed by the capability's `extracted_by_role` or sole proposer.
- Clinical (R14), privacy (R15) and accessibility (R13) are signed by their dedicated reviewer roles; manipulation by R02; unsupported-claims by R09 with **mandatory R14 co-sign for any health/medical claim** (UC-4).
- A **single `reject` on any domain blocks adoption** regardless of the other four (non-compensable). It is not overridable by the Board's value judgement; a Board that wishes to pursue a rejected capability must change the capability so the rejection no longer applies and re-gate it.
- Disagreement between signers is **preserved**, not averaged (`prd.md` Prompt 06 "Preserve specialist disagreements"); an unresolved safety disagreement is itself an `investigate` (open a `CON`/`GAP`, `→ TASK-008`), never silently resolved toward `pass`.

---

## 6. Forbidden shortcuts & anti-patterns

These make a gate run **void** (not merely weak); they are the structural anti-fabrication and anti-compensation guards, mapping to `prd.md` §4/§9/§11 and `↔ TASK-004 §6`.

### 6.1 Pass-by-omission (violates S3)
A `pass` recorded without a basis — no `EVD` ref, no observed behavior, no explicit "N/A because …". An unexamined item is `not_yet_assessed`, never `pass`. "We didn't see a problem" is not evidence of safety. → void; revert to `not_yet_assessed`.

### 6.2 Compensation (violates S2 / `prd.md` §9)
Scoring a capability around a failed or unassessed gate; letting a high value/delight/differentiation score offset a gate concern; computing an `overall_gate` as an average or majority vote. → the scorecard is void and the capability cannot advance.

### 6.3 Claim laundering (violates §4.5 / `prd.md` §3/§4)
Using popularity, downloads, rankings, ratings, or editorial recognition ("App of the Day") as if it were efficacy evidence; copying an observation grade onto an efficacy/health claim; presenting a `hypothesized`/`invented` mechanism as validated. → the claim fails UC and the gate is not `pass`.

### 6.4 Self-clearance (violates S4)
The proposing/extracting role signing its own safety-relevant gate; a health claim's unsupported-claims gate signed without the R14 co-sign; a safety disagreement resolved by the proposer. → void.

### 6.5 Fabricated clearance (gravest, `prd.md` §4)
Recording a clinical, privacy, accessibility, or efficacy basis that does not exist — an invented clinical review, a non-existent accessibility test result, a fabricated consent flow, a made-up effect size. → escalate; this is the fabrication the entire evidence discipline exists to prevent (`prd.md` §4 "Never fabricate …"; §13 Prompt 00).

### 6.6 Reject-then-delete (violates preservation, `prd.md` §11)
Deleting a rejected or redesign-required capability instead of preserving it with rationale in the innovation backlog. Rejections are learning; they are retained, not erased.

---

## 7. Worked gate run (ILLUSTRATIVE — synthetic; PRD streak capability)

The run below applies the five gates to the PRD's **own** illustrative streak capability — a consecutive-day counter that resets after a missed day (`prd.md` §5 Phase 3, carried as `CAP-001` in the TASK-030 sample). Its risks (shame / all-or-nothing after a miss) are quoted from the PRD as **hypotheses**, not findings. All evidence ids are **synthetic** (`EVD-SYNTH-*`, `GAP-SYNTH-*`) and assert nothing about any real app. The run is built to show the checklist *working*: it reaches `overall_gate: redesign` and correctly refuses adoption, routing the capability back to the recovery-oriented redesign the PRD itself proposes.

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates gate decision rules only. No real review, test, or outcome.
cap_id: CAP-001                       # the streak counter (↔ TASK-030 §8 sample)
gate_run_version: 0.1
gate_run_date: "2026-11-23"
record_status_at_gate: in_review

safety_gate:
  # §4.1 Clinical — R14
  clinical: investigate
  # §4.2 Privacy — R15
  privacy: pass
  # §4.3 Manipulation / autonomy — R02
  manipulation: redesign
  # §4.4 Accessibility — R13
  accessibility: redesign
  # §4.5 Unsupported claims — R09 (+R14 if health claim)
  unsupported_claims: investigate

domain_notes:
  clinical:
    signer_role: R14
    items_examined: [CL-1, CL-2, CL-3, CL-4, CL-5, CL-6]
    finding: "CL-2 unresolved: a punitive daily streak could incentivise unsafe over-adherence in a
      user prone to over-exercise or disordered patterns; whether this capability (vs. its recovery
      redesign) carries that risk for midlife women cannot be judged without population evidence."
    outcome_basis: "No care-boundary crossing (CL-1/CL-4 clear) and no device trigger (CL-6 clear),
      but CL-2 vulnerable-state risk is unverified → investigate, not pass."
    gap_opened: GAP-SYNTH-041          # → TASK-008
  privacy:
    signer_role: R15
    items_examined: [PR-1, PR-2, PR-3, PR-4, PR-5, PR-6]
    finding: "The counter itself stores only a completion count and date — no special-category data,
      computable on-device, no onward use."
    outcome_basis: "PR-1..PR-6 met for the counter as specified; basis = observed capability behavior
      (EVD-SYNTH-010 walkthrough). N/A for PR-2 (no health data in this capability)."
  manipulation:
    signer_role: R02
    items_examined: [MN-1, MN-2, MN-3, MN-4, MN-5, MN-6]
    finding: "MN-2 fails as specified: the reset after a missed day uses loss-aversion/guilt and
      punishes a single lapse rather than supporting recovery (prd.md §5 Phase 3 named risk)."
    required_change: "Replace the punitive reset with a flexible/recovery framing — e.g., flexible
      weekly consistency or an explicit 'welcome back' recovery moment (the alternatives already in
      CAP-001 §Layer-5). Re-gate after change."
    outcome_basis: "Concern is real but bounded and fixable by a named change → redesign, not reject
      (the capability's value does not depend on the guilt mechanic)."
  accessibility:
    signer_role: R13
    items_examined: [AX-1, AX-2, AX-3, AX-4, AX-5, AX-6]
    finding: "AX-3/AX-4 fail as specified: the animated increment has no reduced-motion equivalent and
      the streak state is signalled by color/animation without a text/shape cue; AX-1 VoiceOver label
      must state the count and that a miss does not erase prior effort."
    required_change: "Add reduced-motion equivalent, a non-color state cue, and a VoiceOver label per
      the CAP-001 accessibility_notes. Re-gate after change."
    outcome_basis: "Defects are fixable → redesign, not reject."
  unsupported_claims:
    signer_role: R09
    cosign_role: none                  # no health/medical claim asserted yet (UC-4 N/A)
    items_examined: [UC-1, UC-2, UC-3, UC-4, UC-5, UC-6]
    finding: "No claim is made YET, but the mechanism (reinforcement/commitment) is hypothesized with
      no efficacy EVD; any future 'builds a habit' / 'improves consistency' copy would fail UC-1/UC-2
      until a confirmatory EXP exists."
    outcome_basis: "Cannot pass a claim that has no graded evidence and cannot reject a claim not yet
      made → investigate; record the constraint so copy is gated later."
    gap_opened: GAP-SYNTH-042          # efficacy evidence missing → TASK-008 / TASK-004

overall_gate: redesign                 # S2: worst of {investigate, pass, redesign, redesign, investigate}
decision_effect:
  decision_status: Redesign-required    # forced by overall_gate = redesign (↔ TASK-030 §4.1)
  scores_admissible: false              # §3.4 — scoring blocked until all five = pass
  routed_to: "extraction/design loop with the manipulation + accessibility changes named;
    GAP-SYNTH-041 (clinical) and GAP-SYNTH-042 (efficacy) open for investigation."
signoff:
  note: "No value score computed — gate not passed (prd.md §9 non-compensable). Capability preserved,
    not deleted; re-gate all five domains after the recovery redesign."
```

**Verdict trace (why this run is valid and correctly blocks).**
1. **Gates ran before scoring** (S1): `scores_admissible: false`, no scorecard produced. ✔
2. **Every outcome carries a basis** (S3): each domain records items examined + finding + basis; the two `pass`/blocking distinctions are justified, none is pass-by-omission. ✔
3. **Non-compensation holds** (S2): `overall_gate = redesign` is the *worst* domain outcome (two `redesign`, two `investigate`, one `pass`), not an average — a single unresolved domain blocks adoption. ✔
4. **Two blocking outcomes used correctly** (§2.2): manipulation and accessibility are `redesign` (the fix is *named*); clinical and unsupported-claims are `investigate` (the fix/answer is *not yet known*, so a `GAP` is opened). ✔
5. **Separation of duties** (S4): each domain signed by its dedicated reviewer role; no self-clearance; UC-4 co-sign correctly marked N/A because no health claim is asserted yet. ✔
6. **Zero-guilt stance enforced, not decided in-room:** the guilt-driven reset is caught by MN-2 and sent back for the recovery redesign the PRD itself proposes — the gate neither waves it through nor over-rejects a fixable capability. ✔
7. **Preservation** (§6.6): the capability is routed back and preserved, not deleted; the clinical and efficacy gaps are logged for investigation. ✔

---

## 8. Governance, dependencies, and change control

- **Custodian.** R14 (Clinical reviewer) convenes the gate and owns this checklist's shape jointly with the Program Director, who versions it in the change log below. Per-domain accountability sits with the dedicated reviewer roles (§3.2), never a named individual.
- **Where it is applied.** At the Capability Review Board, Phase 4 (`prd.md` §5), on every `CAP` record (`→ TASK-030`) before value scoring (`→ TASK-034`) and the Adopt/Adapt/Invent/Reject/Defer decision (`→ TASK-035`). It implements the "apply mandatory gates first" instruction (`prd.md` §5 Phase 4, Prompt 07) and the non-compensability rule (`prd.md` §9), and feeds the program-level Gate 2/Gate 4 reviews (`prd.md` §11).
- **Dependencies.**
  - `↔ TASK-030` Capability mechanism record schema — declares the `safety_gate` field and rule C3; this document supplies its values' meaning and the decision rules behind them.
  - `↔ TASK-004` Evidence grading rules — supplies the A–D grades and epistemic labels the §4.5 unsupported-claims gate *reads*; this gate does not assign grades.
  - `→ TASK-008` Research gap & contradiction log — receives the `GAP`/`CON` records that every `investigate` outcome and every preserved safety disagreement opens.
  - `→ TASK-034` Evaluation scorecard — runs *after* an all-`pass` gate; value scoring is inadmissible until then (§3.4).
  - `→ TASK-035` Adopt/Adapt/Invent/Reject/Defer decision form — consumes the gate verdict as a mandatory input; cannot approve over an un-passed gate.
  - `→ TASK-036` Red-team challenge protocol — adversarial pass on high-priority capabilities; a red-team finding can re-open a gate domain.
  - `→ TASK-040` Privacy & clinical boundary checklist (WS05) — the deeper assessment the §4.1/§4.2 gates route to on an `investigate`/device trigger.
  - `→ TASK-022` iOS & accessibility audit — the build-level audit the §4.4 gate routes to when accessibility cannot be confirmed by review.
  - `→ TASK-010` Benchmark editorial-recognition ledger — the source the §4.5 gate checks against before any editorial claim is admitted.
  - `← TASK-002 / TASK-003` Workstream registry & responsibility matrix — supply the accountable/consulted roles (§3.2) and the C4 RACI row and separation-of-duties rules.
- **Open unknowns (honestly recorded, not defects).**
  - Whether a sixth standing domain — *burden/sustainability* — should be split out of §4.3 MN-4 as its own gate, or remain a manipulation check item. Proposed default: keep it in §4.3 to avoid gate proliferation, revisit if burden concerns recur as a distinct failure class; to be confirmed by the Behavioral scientist and Head of Product.
  - The precise threshold that makes a capability "high-priority" and therefore mandatorily red-teamed after passing the gate (`→ TASK-036`). Proposed default: any capability touching health behavior, special-category data, or carrying a `severity: high` ethics flag; to be confirmed by the Board. (Mirrors the open unknown recorded in TASK-030 §9.)
  - Whether the §4.5 unsupported-claims gate should also run against the capability's *marketing/ASO* copy at this stage or defer that to a launch-time claims review (`→ TASK-010/012`). Proposed default: gate the *product-embedded* claims now, defer launch-copy claims to the ASO/editorial review; confirm with R12.
  - Which, if any, capability functions trip medical-device scope (CL-6) under applicable regulation. Proposed default: route every CL-6 "possible" to the fuller TASK-040 / regulatory assessment rather than judging it here; confirm with R15.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial checklist: four-outcome model (pass/redesign/investigate/reject + not_yet_assessed) with severity precedence and the two-blocking-outcome distinction; five gate domains (clinical/privacy/manipulation/accessibility/unsupported-claims) each with numbered check items and evidence→outcome decision rules; evaluation protocol with accountable signers and the scoring-admission interlock; non-compensable aggregation rule; forbidden-shortcut catalogue; one validated synthetic gate run on the PRD streak capability; governance, dependencies, open unknowns. | R14 Clinical reviewer / Program Director |
