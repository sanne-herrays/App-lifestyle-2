# HerRays Product Success Metrics Specification

**Deliverable:** TASK-001 — Define measurable product success metrics
**Workstream:** Foundation
**Version:** 0.1 · **Status:** Proposed, not yet measured
**Owner (accountable role):** Product analyst / growth specialist
**Reviewers:** Behavioral scientist · Clinical reviewer · Privacy/regulatory reviewer · QA/accessibility specialist
**Source basis:** `prd.md` §1 (Outcomes), §4 (Evidence grades), §6 (Behavioral science), §9 (Validation), §11 (Quality gates)

---

## 0. How to read this document

This is a **specification of what to measure and how**, not a report of measured results.

> **No-fabrication statement.** This document contains **zero observed values, test results, benchmark numbers, or user data.** Every number that appears is either (a) a *definitional constant* (e.g., "7-day window") or (b) an explicitly labelled **Proposed planning target** representing a hypothesis to be validated, never a claimed outcome. Any field requiring real data is marked `— to be populated from instrumented data —`. Fabricating a value in those fields violates `prd.md` §4 ("Never fabricate … actual retention, CAC, LTV, clinical outcomes") and the acceptance criteria for this task.

Each metric below is specified with the four mandatory operational components:

| Component | Meaning |
|---|---|
| **Numerator** | The counted event or population in the top of the ratio (or the raw quantity for non-ratio metrics). |
| **Denominator** | The exposed base the numerator is divided by (or "n/a" for counts/distributions). |
| **Observation window** | The fixed time frame over which the numerator and denominator are accumulated, and the cohort anchor (e.g., days since first use). |
| **Data source** | The system of record that emits the value, plus the evidence type and grade (`prd.md` §4). |

**Evidence grade reminder (`prd.md` §4):** A = strong relevant science or replicated direct validation; B = credible but limited scientific/direct evidence; C = repeated qualitative observation or competitor pattern; D = expert judgment, analogy or invention. Metrics are graded for *what the metric can support as a claim*, not for how precisely the instrument counts.

---

## 1. Measurement philosophy (why these metrics and not vanity metrics)

HerRays is a clinically responsible behavior-change product for **women in midlife**. The PRD (§6, §9, final decision rule) is explicit that **engagement is not the goal** — "build the product that delivers meaningful user value with the least unnecessary effort, not the one with … highest engagement count." The metric system must therefore make four distinct constructs **separately visible and never collapsed into one another** (`prd.md` §1, §6):

1. **Engagement** — does the person open and interact with the product? (Necessary signal, weak evidence of value.)
2. **Adherence** — does the person perform the *target behavior* they chose (sleep, movement, nutrition, stress action), whether or not inside the app?
3. **Automaticity** — is the behavior becoming habitual (self-reported effortless, cue-driven), i.e., needing *less* app scaffolding over time?
4. **Health / life outcomes** — does sustained behavior produce the outcome the person cares about? (Requires longitudinal follow-up beyond the 12-week discovery cycle; `prd.md` §1, §9.)

A product can score well on engagement and badly on automaticity (dependency) or outcomes (busywork). The **North-Star metric is chosen from the adherence/automaticity layer, never the engagement layer**, precisely to resist that failure mode.

### 1.1 North-Star and counter-metric pairing

Every primary metric is paired with a **counter-metric** (a "do-no-harm" guardrail) so that optimizing the primary cannot silently cause harm. This is a direct application of `prd.md` §11 (mandatory clinical/privacy/accessibility gates that are **not compensable** by weighted scores).

| Layer | Primary metric (ID) | Mandatory counter-metric (ID) | What the pairing prevents |
|---|---|---|---|
| Activation | ACT-01 First Meaningful Action | SAF-02 Onboarding drop-with-distress | Rushing people past consent/understanding |
| Repeat behavior | REP-02 Flexible Weekly Consistency | SAF-01 Guilt/pressure signal; DEL-03 Perceived autonomy | Streak-shame and compulsion |
| Sustained outcomes | OUT-02 Habit Automaticity (SRBAI) | OUT-04 Scaffolding Reliance | Building app dependency instead of a habit |
| Delight | DEL-01 Return intention | SAF-03 Over-use / late-night usage | Engagement-at-any-cost dark patterns |
| Accessibility | ACC-01 Assistive-tech task success parity | — (is itself a gate) | Excluding users by ability |
| Safety | SAF-04 Clinical escalation handled correctly | — (is itself a gate) | Missing a care-boundary event |

### 1.2 North-Star metric (proposed)

**North-Star:** `REP-02` **Flexible Weekly Consistency Rate** — the share of active users who complete their self-chosen target behavior on ≥ N of 7 days in a rolling week, where missing a day does not reset progress.

*Rationale:* It sits in the adherence layer; it rewards *meaningful repeated action* (`prd.md` §3 streaks worked-example: "do alternatives improve meaningful repeated action and perceived autonomy, not merely app opens?"); and it is intentionally *flexible* to avoid the all-or-nothing streak risk flagged in the PRD. It is gated by autonomy and guilt counter-metrics so it cannot be gamed by pressure.

---

## 2. Category A — Activation

**Definition of "activated":** the user has reached first demonstrable value, having given informed consent and understood what the product does. Activation is **not** account creation (`prd.md` §9 distinguishes stated preference from first-action completion).

### ACT-01 — First Meaningful Action completion rate
- **Numerator:** Count of new users who complete ≥ 1 *first meaningful action* (the user's first logged/guided target behavior, per `prd.md` §5 journey 4 "first meaningful action") within the window.
- **Denominator:** Count of new users who began onboarding (reached the first post-install app screen) in the same cohort.
- **Observation window:** Within **48 hours** of first app open; cohorted by install date.
- **Data source:** First-party product analytics event `first_meaningful_action_completed` + `onboarding_started`. Evidence type: observed. Grade: **B** (direct behavior; short-window, does not establish value).
- **Proposed planning target:** — to be set after baseline is observed; *do not pre-populate* —
- **Notes:** "Meaningful action" must be defined per concept during WS07 and recorded in the Decision Log; the metric definition stays constant, the event mapping is versioned.

### ACT-02 — Informed-onboarding completion rate
- **Numerator:** New users who complete onboarding **and** pass the comprehension/consent checkpoint (explicit consent captured; privacy summary acknowledged, per `prd.md` §4 source handling and §11 gate 4).
- **Denominator:** New users who started onboarding in the cohort.
- **Observation window:** Within **24 hours** of first open.
- **Data source:** Product analytics `consent_captured`, `onboarding_completed`; consent ledger (system of record for consent). Evidence type: observed. Grade: **A** for the consent fact (auditable), **C** for "informed" (comprehension is inferred from a checkpoint, not proven).
- **Proposed planning target:** — to be populated —
- **Counter-check:** Must be read alongside SAF-02; high completion with high distress is a failure, not a success.

### ACT-03 — Time-to-first-value (TTFV)
- **Numerator (quantity):** Median elapsed seconds from first app open to first meaningful action (ACT-01 event). *(Distribution metric — report median and 75th/90th percentile, not mean, to resist outlier skew.)*
- **Denominator:** n/a (per-user duration, aggregated as a distribution over the activated cohort).
- **Observation window:** Per session, measured on the activating session; cohorted weekly.
- **Data source:** Product analytics event timestamps. Evidence type: observed. Grade: **B**.
- **Proposed planning target:** — to be populated — (the PRD final rule favours "least unnecessary effort," so *lower is better only until comprehension/consent degrade*; bounded by ACT-02 and SAF-02).

### ACT-04 — Activation quality: personalization fit
- **Numerator:** Activated users who set at least one self-selected goal/context during personalization (`prd.md` §5 journey 3) rather than accepting only defaults.
- **Denominator:** Activated users (ACT-01).
- **Observation window:** Within activation window (48 h).
- **Data source:** Product analytics `goal_selected` with `source=user` vs `source=default`. Evidence type: observed. Grade: **C** (choosing a goal is a proxy for fit, not proof of relevance).
- **Proposed planning target:** — to be populated —

---

## 3. Category B — Repeat behavior

Repeat behavior separates **adherence** (did the target behavior happen) from **app engagement** (did they open the app). Both are tracked; adherence is primary.

### REP-01 — Target-behavior adherence rate (adherence, primary)
- **Numerator:** Count of days within the window on which the user completed their chosen target behavior (logged in-app *or* confirmed via passive/HealthKit source where the user opted in).
- **Denominator:** Days in the window on which the behavior was scheduled/intended by the user.
- **Observation window:** Rolling **28 days**, reported weekly; cohorted by activation week.
- **Data source:** Product analytics `behavior_completed`; optional HealthKit-confirmed completion (opt-in only, `prd.md` §6). Evidence type: observed (in-app) / reported (self-log). Grade: **B**.
- **Proposed planning target:** — to be populated —

### REP-02 — Flexible Weekly Consistency Rate (NORTH-STAR)
- **Numerator:** Active users who completed the target behavior on **≥ N of any 7 consecutive days** in the window (N configurable per the user's own plan; default hypothesis N=3, to be validated — *not* a claim).
- **Denominator:** Active users with an established plan at window start.
- **Observation window:** Rolling **7-day** consistency, evaluated weekly over the user's lifetime; cohorted by activation week.
- **Data source:** Product analytics `behavior_completed`, aggregated with a non-resetting rule. Evidence type: observed. Grade: **B**.
- **Proposed planning target:** — to be populated —
- **Design constraint (binding):** Missing a day **must not** reset or zero the count (`prd.md` §3 streak risks: "shame and all-or-nothing behaviour after a missed day"). This is a product rule, enforced in TASK-047 Habit Graduation state machine.

### REP-03 — Recovery-after-miss rate
- **Numerator:** Users who, after a missed scheduled day, complete the target behavior within the next **3 days** (the "celebrate returning after disruption" mechanism, `prd.md` §3).
- **Denominator:** Users who had ≥ 1 missed scheduled day in the window.
- **Observation window:** Rolling **28 days**.
- **Data source:** Product analytics miss/complete sequence. Evidence type: observed. Grade: **B**.
- **Proposed planning target:** — to be populated —
- **Rationale:** This is one of HerRays' hypothesized differentiators — resilience, not perfection. High REP-03 with low SAF-01 (guilt) is the success shape.

### REP-04 — Repeat-engagement (app return) — classic WAU/MAU
- **Numerator:** Distinct users with ≥ 1 session in the period.
- **Denominator (for stickiness ratio):** WAU ÷ MAU, reported as the DAU/WAU/MAU set.
- **Observation window:** Day / rolling 7-day / rolling 28-day.
- **Data source:** Product analytics `session_start`. Evidence type: observed. Grade: **B** for engagement; **D** if used alone as a value claim (explicitly down-graded by `prd.md` final rule).
- **Proposed planning target:** — to be populated —
- **Guardrail:** REP-04 is a *diagnostic*, never a success claim on its own. If REP-04 rises while REP-01 is flat, the product is generating opens without behavior — a red flag, not a win.

### REP-05 — Rolling retention (behavioral)
- **Numerator:** Users from an activation cohort who performed a target behavior (not merely opened the app) in week W.
- **Denominator:** Users in the activation cohort.
- **Observation window:** Cohorted retention at **W1, W2, W4, W8, W12**; curve reported.
- **Data source:** Product analytics cohort export. Evidence type: observed. Grade: **B**.
- **Proposed planning target:** — to be populated — (no invented retention curve may be shown; `prd.md` §4/§6).

---

## 4. Category C — Sustained outcomes

This category spans **automaticity** (habit becoming effortless) and **health/life outcomes** (the point of the behavior). The PRD is explicit (§1, §9) that true outcome change needs follow-up **beyond** the 12-week cycle, so outcome metrics here are specified but labelled **longitudinal / out-of-cycle**.

### OUT-01 — Sustained adherence at 12 weeks
- **Numerator:** Activation-cohort users still meeting their REP-02 consistency threshold in week 12.
- **Denominator:** The activation cohort.
- **Observation window:** Fixed **84 days (12 weeks)** from activation.
- **Data source:** Product analytics cohort. Evidence type: observed. Grade: **B** (12 weeks shows durable adherence, not yet health outcome).
- **Proposed planning target:** — to be populated —

### OUT-02 — Habit automaticity (SRBAI) — primary outcome proxy
- **Numerator (quantity):** Mean score on the **Self-Report Behavioral Automaticity Index (SRBAI)** — a validated 4-item sub-scale of the Self-Report Habit Index (Gardner et al., 2012) — administered in-app to consenting users. *(This is a published instrument, not an invented one; Grade A instrument, but any score shown here is `— to be populated —`.)*
- **Denominator:** n/a (mean/distribution over respondents; report n and response rate).
- **Observation window:** Baseline at activation + **week 6 and week 12**; change score reported.
- **Data source:** In-app micro-survey, consented, privacy-minimized. Evidence type: reported (validated self-report). Grade: **A** for the instrument's validity; **B** for transferability to midlife women until confirmed (`prd.md` §6 "transferability").
- **Proposed planning target:** — to be populated —
- **Why this matters:** Rising SRBAI with *falling* scaffolding reliance (OUT-04) is the signature of real habit formation vs. app dependency.

### OUT-03 — Self-reported progress toward the user's own goal
- **Numerator:** Consenting users reporting meaningful progress (≥ pre-defined threshold on a goal-attainment scaling item) toward their self-chosen goal.
- **Denominator:** Consenting users who set a goal and responded.
- **Observation window:** Week 6 and week 12; cohorted.
- **Data source:** In-app goal-attainment micro-survey. Evidence type: reported. Grade: **C** (subjective, self-selected goals; honest about limits).
- **Proposed planning target:** — to be populated —

### OUT-04 — Scaffolding reliance (counter-metric, automaticity)
- **Numerator:** Target-behavior completions that occurred **without** an app reminder/prompt firing first (cue-independent completions).
- **Denominator:** All target-behavior completions in the window.
- **Observation window:** Rolling **28 days**, trended across weeks 1→12.
- **Data source:** Product analytics joining reminder-fired vs. completion events. Evidence type: observed. Grade: **B**.
- **Proposed planning target:** — to be populated — (success = this ratio **rises** over time, indicating the behavior is internalizing).

### OUT-05 — Longitudinal health outcome (OUT-OF-CYCLE placeholder)
- **Numerator / Denominator:** To be defined with the **clinical reviewer** per behavior domain (e.g., validated sleep, activity, or stress measures), in a dedicated longitudinal pilot.
- **Observation window:** **> 12 weeks** (explicitly beyond this discovery cycle; `prd.md` §1, §9).
- **Data source:** Dedicated validated clinical instruments in a consented study; **not** inferred from app engagement.
- **Evidence type:** reported/scientific. Grade: to be graded by clinical reviewer.
- **Status:** **Specified, unexecuted.** No value may be produced from this product's discovery cycle. Recording a health-outcome number now would be fabrication (`prd.md` §4).

---

## 5. Category D — User delight

Delight metrics capture desirability, emotional appeal and intrinsic return value (`prd.md` §8 Studio B; §9 validation dimensions) — while refusing to let "delight" become engagement bait.

### DEL-01 — Return intention
- **Numerator:** Users answering "likely"/"very likely" to a neutral in-app or post-test item "How likely are you to keep using HerRays next week?" (balanced scale).
- **Denominator:** Users who answered the item.
- **Observation window:** Post-activation (day 3–7) and at week 4; reported per cohort.
- **Data source:** In-app micro-survey / moderated test instrument. Evidence type: reported (stated intention). Grade: **C** (stated intention ≠ behavior; must be read against REP-05 observed retention, per `prd.md` §9 distinction between preference and observed repeat behavior).
- **Proposed planning target:** — to be populated —

### DEL-02 — Relationship / recommendation sentiment (NPS-style, diagnostic only)
- **Numerator:** % Promoters − % Detractors on a 0–10 recommendation item.
- **Denominator:** Respondents (report n and response rate).
- **Observation window:** Week 4 and week 12; cohorted.
- **Data source:** In-app survey. Evidence type: reported. Grade: **C**.
- **Proposed planning target:** — to be populated —
- **Guardrail:** Treated as diagnostic texture, never a headline success claim.

### DEL-03 — Perceived autonomy (SDT, counter-metric for delight & pressure)
- **Numerator (quantity):** Mean score on autonomy items adapted from a **validated Self-Determination Theory / basic psychological needs scale** (e.g., autonomy sub-scale), measuring "the app respects my choices / I don't feel pressured."
- **Denominator:** n/a (mean/distribution; report n).
- **Observation window:** Week 2 and week 8.
- **Data source:** In-app micro-survey. Evidence type: reported (validated self-report). Grade: **A** for the construct's scientific basis (`prd.md` §6 SDT); **B** for the adapted short form until re-validated.
- **Proposed planning target:** — to be populated —
- **Role:** Direct guard against manipulative/pressuring design; a delight score that rises while autonomy falls is a dark-pattern signal.

### DEL-04 — Qualitative delight signal
- **Numerator (quantity):** Count and coded themes of unprompted positive moments (e.g., optional "what felt good today?" free-text, shared with consent) and of spontaneous praise in sampled public reviews (per `prd.md` §5 review coding — sampled, coded, *not* inferred into metrics).
- **Denominator:** n/a (coded qualitative; report volume and coder-agreement on a subset).
- **Observation window:** Continuous; synthesized monthly.
- **Data source:** In-app free-text (consented) + public-review sampling worksheet (TASK-014). Evidence type: reported/observed-secondary. Grade: **C**.
- **Proposed planning target:** n/a (qualitative — reported as themes, never a fabricated percentage).

---

## 6. Category E — Accessibility

Accessibility is a **mandatory gate**, not a weighted score (`prd.md` §9, §11). These metrics make exclusion visible. Reference standard: **WCAG 2.2 AA** and Apple Human Interface accessibility guidance (VoiceOver, Dynamic Type), per `prd.md` §2 QA/accessibility lens and TASK-022.

### ACC-01 — Assistive-technology task-success parity (primary gate)
- **Numerator:** Core tasks (the ten journeys, `prd.md` §5) completed successfully in a moderated test **using VoiceOver and/or largest Dynamic Type**.
- **Denominator:** Same core tasks attempted under those assistive conditions.
- **Observation window:** Per audit round (pre-release and each major release); not a daily metric.
- **Data source:** Moderated accessibility audit (TASK-022), logged with device/OS/app version/method and severity. Evidence type: observed. Grade: **B** (real task observation; small n).
- **Proposed planning target:** Parity — assistive-condition success **must not be materially below** standard-condition success. Exact threshold set with QA/accessibility specialist; a gap is a **gate failure**, not a tradeable score.
- **Status of value:** `— to be populated from audit —` (no success rate may be claimed before the audit runs).

### ACC-02 — Automated accessibility conformance coverage
- **Numerator:** Screens passing automated accessibility checks (contrast ratios ≥ WCAG AA, labelled controls, min 44×44 pt touch targets, respects Reduce Motion).
- **Denominator:** Total screens audited.
- **Observation window:** Per build (CI-integrated where feasible) + manual audit per release.
- **Data source:** Automated accessibility tooling + manual checklist (TASK-020 reduced-motion, TASK-022 contrast/targets). Evidence type: observed. Grade: **B** (automation catches a subset; not a substitute for ACC-01).
- **Proposed planning target:** — to be populated — (automated pass is necessary, not sufficient).

### ACC-03 — Reduced-motion / cognitive-load accommodation coverage
- **Numerator:** Interactive/animated components that provide a functioning reduced-motion fallback (`prd.md` §5, TASK-020, TASK-046).
- **Denominator:** All components using motion.
- **Observation window:** Per release audit.
- **Data source:** Visual/motion audit (TASK-020). Evidence type: observed. Grade: **B**.
- **Proposed planning target:** 100% of motion components have a reduced-motion fallback (binding craft rule; CLAUDE.md "Apple-Level Craft").

### ACC-04 — Accessibility defect escape / resolution
- **Numerator:** Accessibility defects found post-release (escaped the gate).
- **Denominator:** n/a (count + severity distribution); plus median time-to-resolution.
- **Observation window:** Rolling; reviewed each release retro.
- **Data source:** QA defect tracker tagged `a11y`. Evidence type: observed. Grade: **B**.
- **Proposed planning target:** — to be populated — (trend toward zero high-severity escapes).

---

## 7. Category F — Safety (clinical, psychological, privacy)

Safety is the highest-priority **mandatory gate** and the hardest constraint in the PRD (§4 no fabricated clinical claims; §6 risks of guilt/compulsion/burden; §11 gate 4). Failing any safety counter-metric overrides positive performance everywhere else.

### SAF-01 — Guilt / pressure signal (psychological safety, counter-metric)
- **Numerator:** Consenting users scoring above threshold on a brief, neutral "pressure/guilt" self-report item set (e.g., "I feel guilty when I miss a day using this app"), *or* who cite guilt/pressure in coded free-text/support contacts.
- **Denominator:** Respondents / contacting users.
- **Observation window:** Week 2 and week 8; plus continuous qualitative monitoring.
- **Data source:** In-app micro-survey + coded support/review text. Evidence type: reported. Grade: **C** (subjective but directly on-risk).
- **Proposed planning target:** Minimize; a rising trend triggers a design red-team (TASK-036). This metric can **veto** a shipping decision regardless of REP-02.

### SAF-02 — Onboarding drop-with-distress (activation counter-metric)
- **Numerator:** Users who abandon onboarding **at or immediately after** a sensitive-data or consent step, or who decline consent after starting.
- **Denominator:** Users who reached that step.
- **Observation window:** Activation window (24–48 h).
- **Data source:** Product analytics step-level funnel + consent ledger. Evidence type: observed. Grade: **B**.
- **Proposed planning target:** — to be populated — (a spike indicates the product is asking too much, too soon — a privacy/consent design problem, not a conversion problem).

### SAF-03 — Over-use / unhealthy-timing signal (counter-metric)
- **Numerator:** Sessions occurring in a late-night window (e.g., 00:00–05:00 local) **or** sessions per day above a high-use threshold indicating compulsive checking.
- **Denominator:** All sessions / all active users in window.
- **Observation window:** Rolling 28 days.
- **Data source:** Product analytics `session_start` timestamps (local time). Evidence type: observed. Grade: **C** (timing is a weak proxy for harm; interpret with care, do not over-read).
- **Proposed planning target:** Monitor; sustained rise triggers review. The product should *reduce* unnecessary screen time (`prd.md` §8 Studio C "Invisible App"; final rule "least unnecessary effort").

### SAF-04 — Clinical-escalation correctness (clinical gate)
- **Numerator:** Clinical boundary / escalation events (e.g., a user signals a concern requiring physician-led care per `prd.md` executive mandate and §6 clinical boundaries) that are routed/handled per the defined clinical-safety protocol.
- **Denominator:** All detected clinical boundary / escalation events.
- **Observation window:** Continuous; audited monthly.
- **Data source:** Clinical escalation log (defined with clinical reviewer; TASK-040 privacy/clinical boundary checklist). Evidence type: observed. Grade: **B** (process adherence; auditable).
- **Proposed planning target:** **100% correct handling** — this is a binding gate, non-negotiable, non-compensable. Any miss is a priority-zero incident.
- **Boundary statement:** HerRays metrics must **never** assert clinical efficacy from engagement data (`prd.md` §4; PRD research principle: "Apple editorial recognition is not proof of clinical efficacy or retention"). Health-outcome claims require OUT-05's dedicated validated study.

### SAF-05 — Privacy & data-minimization adherence (privacy gate)
- **Numerator:** Data collection events / fields in production that are covered by an approved data-minimization + consent basis (per privacy/regulatory reviewer).
- **Denominator:** All data collection events / fields in production.
- **Observation window:** Per release + continuous audit.
- **Data source:** Data-processing inventory + consent ledger (TASK-040). Evidence type: observed. Grade: **B**.
- **Proposed planning target:** **100%** — any field without a lawful, minimized, consented basis is a gate failure (GDPR / `prd.md` §6, §11).

### SAF-06 — Sensitive-data exposure incidents
- **Numerator:** Confirmed incidents of sensitive data exposure or mishandling.
- **Denominator:** n/a (count + severity + time-to-contain).
- **Observation window:** Continuous.
- **Data source:** Security/privacy incident register. Evidence type: observed. Grade: **A** (incident is a hard fact).
- **Proposed planning target:** **Zero.**

---

## 8. Metric register (summary index)

Grades shown are the grade of the **claim the metric supports**, not instrument precision. All values are `— to be populated —`.

| ID | Metric | Category | Type | Window | Primary data source | Grade | Role |
|---|---|---|---|---|---|---|---|
| ACT-01 | First Meaningful Action rate | Activation | Ratio | 48 h | Product analytics | B | Primary |
| ACT-02 | Informed-onboarding completion | Activation | Ratio | 24 h | Analytics + consent ledger | A/C | Primary (gated) |
| ACT-03 | Time-to-first-value | Activation | Distribution | Per session | Product analytics | B | Diagnostic |
| ACT-04 | Personalization fit | Activation | Ratio | 48 h | Product analytics | C | Diagnostic |
| REP-01 | Target-behavior adherence | Repeat | Ratio | 28 d | Analytics + opt-in HealthKit | B | Primary |
| REP-02 | Flexible Weekly Consistency | Repeat | Ratio | 7 d rolling | Product analytics | B | **North-Star** |
| REP-03 | Recovery-after-miss | Repeat | Ratio | 28 d | Product analytics | B | Primary (differentiator) |
| REP-04 | App return (DAU/WAU/MAU) | Repeat | Ratio set | 1/7/28 d | Product analytics | B/D | Diagnostic only |
| REP-05 | Behavioral rolling retention | Repeat | Cohort curve | W1–W12 | Product analytics | B | Primary |
| OUT-01 | Sustained adherence @12w | Sustained | Ratio | 84 d | Product analytics | B | Primary |
| OUT-02 | Habit automaticity (SRBAI) | Sustained | Score | Baseline/W6/W12 | In-app survey | A/B | **Primary outcome proxy** |
| OUT-03 | Self-reported goal progress | Sustained | Ratio | W6/W12 | In-app survey | C | Supporting |
| OUT-04 | Scaffolding reliance | Sustained | Ratio | 28 d trend | Product analytics | B | Counter-metric |
| OUT-05 | Longitudinal health outcome | Sustained | TBD | >12 w | Validated clinical study | TBD | Out-of-cycle placeholder |
| DEL-01 | Return intention | Delight | Ratio | D3–7 / W4 | In-app survey | C | Supporting |
| DEL-02 | Recommendation sentiment | Delight | Index | W4/W12 | In-app survey | C | Diagnostic |
| DEL-03 | Perceived autonomy (SDT) | Delight | Score | W2/W8 | In-app survey | A/B | Counter-metric |
| DEL-04 | Qualitative delight signal | Delight | Themes | Continuous | Free-text + review coding | C | Supporting |
| ACC-01 | Assistive-tech task parity | Accessibility | Ratio | Per audit | Moderated audit | B | **Gate** |
| ACC-02 | Automated a11y conformance | Accessibility | Ratio | Per build | Automated + manual | B | Gate support |
| ACC-03 | Reduced-motion coverage | Accessibility | Ratio | Per release | Motion audit | B | Gate support |
| ACC-04 | A11y defect escape/resolution | Accessibility | Count | Rolling | QA tracker | B | Diagnostic |
| SAF-01 | Guilt/pressure signal | Safety | Score/themes | W2/W8 | Survey + coded text | C | **Counter-metric (veto)** |
| SAF-02 | Onboarding drop-with-distress | Safety | Ratio | 24–48 h | Funnel + consent ledger | B | Counter-metric |
| SAF-03 | Over-use / late-night signal | Safety | Ratio | 28 d | Product analytics | C | Counter-metric |
| SAF-04 | Clinical-escalation correctness | Safety | Ratio | Continuous | Clinical escalation log | B | **Gate (100%)** |
| SAF-05 | Privacy/data-minimization | Safety | Ratio | Per release | Data inventory + consent | B | **Gate (100%)** |
| SAF-06 | Sensitive-data incidents | Safety | Count | Continuous | Incident register | A | **Gate (zero)** |

---

## 9. Measurement governance and integrity rules

1. **No value without a source.** A metric cell stays `— to be populated —` until an instrumented, documented data source emits it. Populating a cell requires a linked Evidence record (EVD-, per `prd.md` §4 and TASK-005).
2. **Separate the four constructs.** Dashboards must display engagement, adherence, automaticity and outcomes in distinct sections; they may never be summed into a single "success score" (`prd.md` §1, §6).
3. **Gates are not compensable.** ACC-01, SAF-04, SAF-05, SAF-06 are pass/fail gates (`prd.md` §9, §11). No weighted blend can offset a gate failure.
4. **Primary ≥ counter pairing is mandatory.** No primary metric may be reported in a decision document without its paired counter-metric (§1.1).
5. **Stated ≠ observed ≠ sustained.** Survey-based metrics (DEL-, OUT-02/03, SAF-01) are labelled *reported*; behavioral metrics are *observed*; neither may be presented as *sustained health change*, which requires OUT-05's longitudinal study (`prd.md` §9).
6. **Privacy-by-design for measurement itself.** Every survey and event listed here must pass SAF-05 before launch; measurement must not itself create the data-minimization risk it is meant to guard (`prd.md` §6, TASK-040).
7. **Instrument provenance.** Named instruments (SRBAI, SDT autonomy sub-scale) are cited as published tools; this document does not reproduce or score them — scoring happens only against consented, real responses.
8. **Versioning.** Metric *definitions* (numerator/denominator/window) are stable and versioned; event *mappings* may change per concept (WS07) and are tracked in the Decision Log (DEC-, TASK-009).

---

## 10. Dependencies and open questions

**Depends on (downstream tasks that will populate or enforce this spec):**
- TASK-005 — Evidence record schema (EVD IDs that back any populated value).
- TASK-009 — Decision/experiment registers (event-mapping versioning; target-setting experiments).
- TASK-040 — Privacy & clinical boundary checklist (defines SAF-04/05 protocols).
- TASK-047 — Habit Graduation state machine (enforces REP-02 non-reset and REP-03 recovery rules).
- TASK-048 — Concept testing pack (produces moderated-test inputs for ACC-01, DEL-01, DEL-03).

**Open questions for review (to resolve before any target is set):**
- Q1 — Default N for REP-02 flexible consistency: validate N=3/7 vs. user-chosen cadence (behavioral scientist + user research; **not** to be assumed).
- Q2 — Exact SRBAI and SDT short-form adaptation for midlife women and its re-validation plan (behavioral scientist + clinical reviewer).
- Q3 — Thresholds for SAF-01 (guilt) and SAF-03 (over-use) that avoid over- and under-flagging (clinical reviewer + privacy reviewer).
- Q4 — Which behavior domains get an OUT-05 longitudinal study first, and with which validated clinical instruments (clinical reviewer).

**Unknowns (honest limits):**
- No baselines exist yet; all targets are deferred until instrumented data is observed.
- Short windows (ACT-, REP-) reveal short-term experience only, never long-term retention or health change (`prd.md` §5, §9).
- Self-report metrics carry known bias; they are triangulated against behavioral metrics, never used alone for a health claim.

---

*End of TASK-001 deliverable. This specification defines measurement; it asserts no measured outcome.*
