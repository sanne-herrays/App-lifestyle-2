# HerRays Extended App Selection Rubric

**Deliverable:** TASK-007 — Create the extended app selection rubric
**Workstream:** Foundation (feeds Competitive Intelligence / WS01)
**Version:** 0.1 · **Status:** Proposed — rubric defined, portfolio not yet selected
**Owner (accountable role):** Product / market lead (WS01), under Program Director custody
**Reviewers:** ASO/App Store specialist · Behavioral scientist · Senior UX lead · Privacy/regulatory reviewer · Program Director
**Source basis:** `prd.md` §3 (expanded portfolio — "Target 15–20 apps", category declaration, "Add only if the app answers a distinct question", negative/discontinued examples), §4 (App Registry fields, evidence grades, no-fabrication rule), §5 Phase 0/1 (app selection, owners, access register), §11 Gate 1 (benchmark coverage + access limitations documented), §13 Prompt 01 (investigate 15–20 apps; declare category; do not assume popularity proves efficacy)

---

## 0. How to read this document

This is the **selection rubric** that decides which apps — beyond the five mandatory core apps already registered in TASK-006 — earn a place in the Lab's **15–20-app comparison portfolio**. It is the gate that stands between "an app someone suggested" and "an app the Lab commits scarce teardown, coding, and review capacity to."

`prd.md` §3 sets three hard instructions this rubric operationalizes:

1. **Target 15–20 apps total**, spanning direct habit products, adjacent health experiences, and exceptional consumer references.
2. **"Add only if the app answers a distinct question."** Novelty of *question*, not novelty of *app*, is the admission test.
3. **"Each entry must declare whether it is a direct competitor, behavior reference, visual reference, health-data reference or commercial reference."** Category is mandatory and governs how the app's evidence may later be used.

It does four things and only four:

- **Fixes the portfolio arithmetic** (§2): how the 5 core + extended apps add up to 15–20, and how the three required categories are balanced.
- **Defines inclusion and exclusion criteria** (§3–§4): the necessary gates every candidate must pass, and the disqualifiers that reject a candidate regardless of score.
- **Defines a scored candidate record** (§5–§6): the fields captured per candidate, and a transparent 0–100 fit score with per-dimension weights and anchors, so selection is reviewable rather than taste-driven.
- **Defines the selection procedure and governance** (§7–§9): how candidates move from `proposed` to `selected`/`rejected`, who approves, and how the decision is recorded and revisited.

> **No-fabrication statement.** This document contains **no captured App Store data and no selection decisions.** It does not assert that any candidate app is popular, well-reviewed, award-winning, clinically effective, or even currently available. The PRD-named candidate apps listed in §10 are reproduced **as candidates to be assessed**, exactly as `prd.md` §3 names them, each tagged `assessment_pending` — their category assignments there are *proposed starting hypotheses drawn from the PRD's own framing*, not verified facts, and every empirical field a real assessment would need (`developer`, `version`, `price`, `availability`, rating) is `unknown` until WS01 captures it under the TASK-005 evidence schema. Scoring **anchors** are defined here; **no candidate is scored.** Applying this rubric to produce an actual ranked portfolio is downstream WS01 work, not this task.

**Scope boundary (what this task is and is not).**
- **TASK-007 (this document) = the selection rubric** — the decision instrument that chooses portfolio membership and records *why*. It answers *"which 15–20 apps, chosen how, and on what justification?"*
- **It is not the App Registry.** Once an app is `selected`, it is entered as an `APP` record under **TASK-006**'s schema (reserved id block `APP-006+`). This rubric *feeds* the registry; it does not replace it.
- **It is not the evidence record.** Any concrete fact used to score a candidate (a rating seen on a date, a price, an editorial feature) is an `EVD` record under **TASK-005** and is cited by the candidate's scoring record. A score with no evidence pointers behind its empirical dimensions is invalid (§6.4).
- **It is not the editorial-recognition ledger** (**TASK-010**) or the **listing/pricing capture** (**TASK-011**) or the **commercial-estimates template** (**TASK-015**); it points at them.
- **It is not the feature-comparison matrix** (**TASK-012**) or any teardown. Selection decides *who is in the room*; the teardown workstream decides *what we learn from them*.

---

## 1. Purpose and non-negotiables

The expanded portfolio exists so the Lab can learn mechanisms, patterns, and anti-patterns that the five core apps cannot teach on their own — for example, how an adjacent health app handles HealthKit and clinical-adjacent boundaries, or how an exceptional consumer product sustains return value — **without** drifting into "collect every habit app" bloat that dilutes attention and invites a feature-collage mindset the executive mandate explicitly forbids.

The rubric therefore serves four jobs:

1. **Enforce distinctiveness.** Every added app must answer a *question the existing portfolio does not already answer well* (`prd.md` §3). A second app that teaches the same lesson as one already in scope is a reject, however good it is.
2. **Enforce category balance.** The portfolio must deliberately span the three PRD categories (direct / adjacent-health / exceptional-consumer) rather than piling up near-duplicate direct competitors, so the Lab sees across category walls (`prd.md` §3, §8 territories).
3. **Keep popularity and efficacy separate at the point of selection.** An app is admitted for the *question it answers and the mechanism it demonstrates*, never because it is popular or award-winning. Popularity is at most weak evidence of market fit and is explicitly *not* evidence of behavioral efficacy (`prd.md` §3 "popularity does not prove behavioral efficacy", §13 Prompt 01).
4. **Make the selection auditable at Gate 1.** Every include/exclude decision carries a written rationale, a fit score with visible component weights, and the distinct question the app answers, so the Program Director can read the portfolio and confirm "benchmark coverage … unknowns and access limitations documented" (`prd.md` §11 Gate 1).

**Four non-negotiable rules, enforced throughout.**

- **S1 — Distinct question required.** No app is selected without a stated, non-duplicative `distinct_question` that the current portfolio does not already cover (§3 IC-1, §4 EX-1). "It's also a habit app" is not a distinct question.
- **S2 — Category is mandatory and single-primary.** Every candidate declares exactly one **primary** category from the PRD's five reference types (§3 IC-2); secondary lenses are allowed and listed. A candidate with no primary category cannot be scored.
- **S3 — No empirical score dimension without an `EVD` source.** Any scoring dimension that rests on an observed fact about the app (availability, rating signal, editorial recognition, health-data integration) must cite the `EVD` record(s) that captured it, or be scored `unknown` and excluded from the weighted total with that exclusion shown (§6.4). Scores are never invented to fill a cell.
- **S4 — Popularity/awards are inadmissible as efficacy or as a score override.** Download rank, star rating, and Apple editorial recognition may inform the `market_signal` dimension *only*, are capped there, and may never be converted into a behavioral-evidence or clinical claim, nor used to waive an exclusion gate (`prd.md` §3/§4). Editorial recognition remains a pointer to TASK-010, never asserted here.

---

## 2. Portfolio shape and category balance

### 2.1 The arithmetic

`prd.md` §3 fixes the target at **15–20 apps total**, and TASK-006 has already registered the **5 core apps** (`APP-001`…`APP-005`). This rubric therefore governs the selection of **10 to 15 additional (extended) apps**:

| Segment | Count | Governed by |
|---|---|---|
| Core (mandatory deep dives) | 5 | TASK-006 (already registered) |
| Extended (selected via this rubric) | 10–15 | **TASK-007 (this document)** |
| **Portfolio total** | **15–20** | `prd.md` §3 target |

The 15–20 band is a **target, not a quota to force-fill.** Per S1, it is better to run a focused 16-app portfolio where every app answers a distinct question than to pad to 20 with near-duplicates. If fewer than 10 extended candidates clear the inclusion gates, the portfolio is smaller and the shortfall is recorded as a coverage gap (`→ TASK-008`), not papered over.

### 2.2 Category coverage targets

Each app declares one **primary category** (S2) from the `prd.md` §3 five-way reference taxonomy, grouped into the three portfolio segments the PRD names ("direct habit products, adjacent health experiences, and exceptional consumer references"):

| Portfolio segment | PRD reference type(s) (§3) | What it is in scope to teach | Proposed extended target* |
|---|---|---|---|
| **Direct** | `direct_competitor` | Feature parity, positioning, monetization, and dissatisfaction themes in the same category and job as HerRays. | 3–5 |
| **Adjacent health** | `health_data_reference` (and health-oriented `behavior_reference`) | HealthKit/health-data integration, clinical-adjacent boundaries, emotional/behavioral support in a health context relevant to midlife women. | 3–5 |
| **Exceptional consumer** | `commercial_reference`, `visual_reference` | Onboarding, habit loops, delight, motion craft, and sustained return value from best-in-class consumer apps — **not** a claim of clinical relevance. | 2–4 |

*Targets are **planning guidance**, not hard quotas; the Program Director may rebalance at selection (§7) if a segment yields more distinct questions than another, provided all three segments are represented and the total lands in 15–20. The core five are all `direct_competitor`, so the extended set must deliberately pull weight into adjacent-health and exceptional-consumer to achieve cross-category coverage.

### 2.3 Coverage, not collection

A **coverage matrix** (candidate questions × portfolio) is maintained during selection (§7.2): the Lab asks not "is this a good app?" but "does the portfolio, *as a set*, cover the questions we need answered?" This is what prevents three variations of the same streak-tracker from each scoring well individually while adding nothing collectively.

---

## 3. Inclusion criteria (necessary gates)

A candidate must satisfy **all** inclusion criteria to be eligible for scoring. These are **gates**, not scored dimensions — failing any one removes the candidate from consideration regardless of how attractive it is otherwise.

| ID | Inclusion criterion | Test | Source |
|---|---|---|---|
| **IC-1** | **Answers a distinct question.** The candidate demonstrates a mechanism, pattern, context, or anti-pattern not already well-covered by the current portfolio. | A one-sentence `distinct_question` is stated and checked against the coverage matrix (§2.3); it is materially different from every already-selected app's question. | §3 "Add only if the app answers a distinct question" |
| **IC-2** | **Declares a primary category.** Exactly one primary reference type (§2.2 / `prd.md` §3) is assigned, with rationale. | `primary_category` ∈ {direct_competitor, health_data_reference, behavior_reference, visual_reference, commercial_reference}; non-empty. | §3 category-declaration requirement |
| **IC-3** | **Relevant to the HerRays audience or craft bar.** The lesson it teaches is applicable to a lifestyle/behavior-change experience for women in midlife, *or* it is a cross-domain exemplar of consumer/interaction craft the Lab wants to meet. | `relevance_statement` ties the app to a named user job, mechanism, health context, or craft dimension in the PRD. | §3 expanded-portfolio intent; executive mandate |
| **IC-4** | **Studiable in practice.** There is a credible path to observe the app directly (download + usable flow) *or*, for negative/discontinued/region-locked cases, a path to credible secondary evidence with provenance. | `access_feasibility` ∈ {direct_observation_expected, secondary_only_justified}; not "no path." | §4 source handling; §5 access register; §11 Gate 1 access-limitations |
| **IC-5** | **Adds marginal learning the core five cannot.** The question is not already answered by a mandatory core app. | `distinct_question` is checked specifically against the five core learning questions (TASK-006 §8.1). | §3 core-five vs. expanded split |

**Negative and discontinued examples are explicitly in scope.** `prd.md` §3 says "Include negative and discontinued examples where useful." Such an app passes IC-4 via `secondary_only_justified` and typically answers a distinct *anti-pattern* question (IC-1) — e.g. "what did a discontinued tracker get wrong about daily burden?" It is admitted as a `behavior_reference` or `direct_competitor` with `is_cautionary: true`, never excluded merely for being unavailable.

---

## 4. Exclusion criteria (disqualifiers)

A candidate is **rejected** — without being scored — if **any** exclusion criterion applies. Exclusions cannot be outweighed by a high fit score (that is the point of S1/S4: no amount of polish buys past a distinctiveness or safety failure).

| ID | Exclusion criterion | Why it disqualifies | Source |
|---|---|---|---|
| **EX-1** | **Redundant question.** Teaches essentially the same lesson as an already-selected app (fails IC-1). | Duplicates dilute attention and push the count toward collection, not coverage. The *better* of the two is kept; the redundant one is rejected with a pointer to the retained app. | §3 "distinct question" |
| **EX-2** | **Selected for popularity/awards alone.** The only stated justification is download rank, rating, or Apple editorial recognition, with no distinct mechanism or craft lesson. | Popularity ≠ efficacy (S4); admitting on popularity invites the feature-collage mindset the mandate forbids. | §3, §13 Prompt 01 |
| **EX-3** | **No studiable path.** Neither direct observation nor credibly-sourced secondary evidence is possible (fails IC-4). | An app the Lab cannot observe or source produces only speculation, which cannot pass Gate 1. | §4, §11 |
| **EX-4** | **Out of category scope.** Not a lifestyle/behavior-change, adjacent-health, or exceptional-consumer reference under any of the five reference types; no relevance statement (fails IC-2/IC-3). | Keeps the portfolio purposeful; prevents scope creep into unrelated genres. | §3 |
| **EX-5** | **Ethical/safety exclusion.** The app's core model relies on a mechanism HerRays will not emulate or study as a model (e.g. manipulative dark patterns, shame-based coercion, unsafe medical claims) *and* studying it offers no cautionary value. | Protects the brand's non-negotiable autonomy/clinical-responsibility constraints; note that a harmful app *with* cautionary value is instead **included** as a negative example under IC-1, flagged `is_cautionary`. | §6 ethical anti-patterns; §9 non-negotiable gates; executive mandate |
| **EX-6** | **Privacy-infeasible to study.** Observing the app would require the Lab to supply or expose sensitive personal data it cannot ethically create or protect, and no minimal/synthetic-account path exists. | Primary-research consent/data-minimization rules (`prd.md` §4/§6) bind the Lab's own data collection, including test accounts. | §4, §6 |

**Exclusion is recorded, not silent.** Every rejected candidate is kept in the candidate log with its `exclusion_id`, a one-line rationale, and (for EX-1) the retained app it duplicates — so the portfolio's boundaries are auditable and a later reviewer can see what was considered and why it was dropped.

---

## 5. Candidate record: field dictionary

Every candidate — whether ultimately selected or rejected — is one record with the following fields. **Req.:** **M** = mandatory, **C** = conditional, **O** = optional. Empirical fields the Lab has not verified are the literal token `unknown` (per TASK-006 rule A1), never guessed.

### 5.1 Identity and candidacy

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `cand_id` | id | M | `CAND-NNN`, sequential, immutable. A selected candidate is *also* given an `APP-NNN` id when entered into the TASK-006 registry; the two ids cross-link via `app_id`. |
| `app_name` | string | M | Candidate app name as proposed; confirmed against the listing at assessment. |
| `proposed_by` | role | M | Who nominated it (role, not person). |
| `candidacy_state` | enum | M | `proposed` → `assessment_pending` → `scored` → `selected` / `rejected` / `deferred` (§7.1). |
| `app_id` | ref | C | Back-link to the TASK-006 `APP` record; populated only once `selected`. |

### 5.2 Classification (acceptance-criteria core)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `primary_category` | enum | M | Exactly one of the five `prd.md` §3 reference types (§2.2). Enforces S2. |
| `secondary_lenses` | list | O | Additional reference types the app usefully illustrates; `[]` if none. |
| `portfolio_segment` | enum | M | `direct` / `adjacent_health` / `exceptional_consumer` (derived from `primary_category`, §2.2). |
| `distinct_question` | string | M | The one question this app answers that the portfolio does not already cover (IC-1/S1). Non-empty, non-duplicative. |
| `relevance_statement` | string | M | How the lesson applies to HerRays' audience or craft bar (IC-3). |
| `is_cautionary` | bool | M | `true` for negative/discontinued/anti-pattern examples (§3); default `false`. |

### 5.3 Inclusion / exclusion verdicts

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `inclusion_checks` | map | M | IC-1…IC-5 each → `pass` / `fail` / `unknown`. All five must be `pass` to score. |
| `exclusion_id` | enum | C | If rejected, the EX-n that applied; else `none`. |
| `exclusion_rationale` | string | C | Required whenever `exclusion_id ≠ none`; for EX-1, names the retained duplicate `cand_id`. |

### 5.4 Scoring (defined in §6; values are `unknown` here)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `scores` | map | C | The six §6.1 dimensions → integer 1–5 or `unknown`. Populated only at `scored` state by WS01. |
| `score_evidence` | map | C | Per empirical dimension → list of `EVD` ids backing the rating (S3). Empty/`unknown` dimensions excluded from the total with the exclusion shown. |
| `fit_score` | number | C | Weighted 0–100 total (§6.2); computed, never hand-set. |
| `score_rationale` | string | C | Prose justification referencing the evidence; required when `fit_score` is populated. |

### 5.5 Access, provenance, governance

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `access_feasibility` | enum | M | `direct_observation_expected` / `secondary_only_justified` / `no_path` (IC-4; `no_path` ⇒ EX-3). |
| `editorial_recognition_ref` | ref | M | Pointer to TASK-010 ledger or `unverified`; never an asserted award (S4). |
| `listing_ref` | ref | C | Pointer to TASK-011 listing/pricing capture; `unverified` until captured. |
| `estimates_ref` | ref | C | Pointer to TASK-015 commercial-estimates record for any third-party download/revenue figure; estimates never stored here. |
| `source_evd` | list | M | All `EVD` ids backing any populated empirical field; `[]` while everything is `unknown`. |
| `owner_role` | role | M | Accountable role for the candidate's assessment (default: Product / market lead). |
| `reviewer_role` | role | M | Role approving the selection verdict (default: Program Director; +clinical/privacy reviewer when `primary_category = health_data_reference` or `is_cautionary`). |
| `decision_ref` | ref | C | Pointer to the TASK-009 decision-log entry recording the final select/reject (`→ DEC`). |
| `last_updated` | date | M | Candidate-record edit date. |

---

## 6. The fit score

### 6.1 Scoring dimensions and weights

For candidates that pass all inclusion gates (§3) and trigger no exclusion (§4), a **fit score** ranks *how much the portfolio gains* from adding them. It is a prioritization heuristic for allocating teardown capacity — **explicitly not a validated instrument** and **never** a measure of the app's quality or efficacy. Six dimensions, each scored 1–5 against the anchors in §6.3:

| # | Dimension | Weight | What it rewards | Admissibility note |
|---|---|---:|---|---|
| D1 | **Distinctiveness of question** | 30% | How much *new* coverage the question adds versus the current portfolio (the IC-1 gate asks *whether*; D1 scores *how much*). | Judgement vs. coverage matrix (§2.3); not an empirical app fact. |
| D2 | **Mechanism / learning richness** | 25% | Depth and transferability of the behavior-change mechanism or craft lesson to HerRays. | Graded with behavioral-scientist input; cite teardown/science `EVD` once available, else scored provisionally and flagged. |
| D3 | **Audience & health relevance** | 20% | Fit to midlife-women lifestyle/health context and the HerRays care model. | Judgement; health-data claims require `EVD` (S3). |
| D4 | **Craft exemplar value** | 10% | Quality of UX/visual/motion/content craft worth meeting or beating. | Judgement; may cite observed-craft `EVD`. |
| D5 | **Studiability** | 10% | How fully the Lab can actually observe the relevant flows (beyond the IC-4 yes/no gate). | Empirical: rests on access reality; cite `EVD`/access register. |
| D6 | **Market signal** | 5% | Weak, capped signal of market traction (adoption/longevity) — context only. | **Capped at 5%.** Popularity/awards admissible *here only* (S4); may never be converted to efficacy or override a gate. |

Weights sum to 100%. The deliberately **small** D6 and the deliberately **large** D1 encode the PRD's core stance: the portfolio is chosen for *distinct questions and mechanisms*, not for popularity.

### 6.2 Computing the 0–100 fit score

```
fit_score = 100 × ( Σ over scored dimensions [ weight_i × (score_i − 1) / 4 ] )
                   ÷ ( Σ over scored dimensions [ weight_i ] )
```

- Each 1–5 score is normalised to 0–1 as `(score − 1) / 4` (so 1→0, 3→0.5, 5→1.0).
- **`unknown` dimensions are excluded from both the numerator and the denominator** (S3): the score is the weighted average over *scored* dimensions only, renormalised, so a missing dimension neither helps nor penalises — but the set of excluded dimensions is printed with the score, so a `fit_score` resting on half the dimensions is visibly less trustworthy than a complete one.
- `fit_score` is **computed, never hand-entered** (§6.4), and is a **ranking aid, not a threshold**: there is no magic cut-off number that auto-selects an app. Selection is a Program-Director decision (§7) informed by score *and* coverage *and* category balance.

### 6.3 Scoring anchors

So two reviewers score consistently, each dimension has explicit anchors. (Illustrative anchor wording — these calibrate scoring; they are not claims about any app.)

| Score | D1 Distinctiveness | D2 Mechanism richness | D3 Audience/health relevance | D4 Craft | D5 Studiability | D6 Market signal |
|---:|---|---|---|---|---|---|
| **5** | Opens a whole coverage gap nothing else touches | Deep, well-evidenced, directly transferable mechanism | Squarely midlife-women health/lifestyle context | Best-in-class, a bar to beat | Full relevant flows directly observable | Strong, well-sourced longevity/traction |
| **3** | Adds a useful new angle on a partly-covered area | A clear mechanism with moderate transfer | Adjacent/partially relevant audience | Solid, above-average craft | Core flows observable; some gated | Moderate / mixed signal |
| **1** | Barely distinct from existing coverage | Thin or hard-to-transfer mechanism | Weak audience tie | Unremarkable craft | Mostly inaccessible; secondary only | Little or unreliable signal |
| **unknown** | — | *(use only when evidence is genuinely absent; excluded from total per §6.2, not scored 1)* | | | | |

**`unknown` ≠ 1.** A dimension with no evidence yet is `unknown` (and drops out of the average), *not* a low score. Scoring an unknown as 1 would fabricate a negative judgement — a §6.4 violation.

### 6.4 Scoring validation failures

A candidate's scoring is **invalid** (and cannot advance to `selected`) if any of the following holds:

1. **Hand-set total.** `fit_score` is present but does not equal the §6.2 formula applied to `scores`.
2. **Unsourced empirical score.** A score for D5 (studiability) or the empirical part of D2/D3/D6 is a concrete 1–5 value with no `score_evidence` `EVD` pointer (violates S3). The fix is `unknown`, not a guess.
3. **`unknown` scored as 1.** An absent-evidence dimension entered as `1` instead of `unknown` (fabricated judgement; §6.3).
4. **Popularity override.** D6 used above its 5% cap, or any popularity/award value imported into D2/D3 to inflate efficacy/relevance (violates S4).
5. **Scored despite a failed gate.** `scores` populated while any `inclusion_checks` is `fail`, or `exclusion_id ≠ none` (a gate failure means the app is never scored).
6. **Missing rationale.** `fit_score` populated without a non-empty `score_rationale`.

---

## 7. Selection procedure and governance

### 7.1 Candidate lifecycle

```
proposed ─▶ assessment_pending ─▶ scored ─▶ selected ─▶ (APP-NNN registered in TASK-006)
                   │                  │
                   ├─▶ rejected (EX-n, with rationale)
                   └─▶ deferred (revisit if portfolio shifts or a gap opens)
```

- **proposed** — nominated with a `distinct_question` and proposed `primary_category`; nothing verified.
- **assessment_pending** — WS01 is capturing the `EVD` needed to run the gates and score. **All PRD-named candidates in §10 are at this state by default.**
- **scored** — inclusion gates passed, no exclusion, six dimensions scored or `unknown`, `fit_score` computed.
- **selected** — Program Director approves inclusion (§7.3); candidate is entered into the TASK-006 registry at `APP-006+` and the decision is logged (`→ TASK-009`).
- **rejected** — a gate failed (EX-n); rationale recorded, kept in the log (§4).
- **deferred** — plausibly valuable but not needed now (e.g. its question is adequately covered, or the count is full); revisited if a coverage gap opens.

### 7.2 Coverage-first selection, not top-N

Selection is **not** "take the top 15 by `fit_score`." The procedure:

1. Run inclusion/exclusion gates (§3–§4) on every candidate; reject gate-failures.
2. Score survivors (§6); rank within each portfolio segment.
3. Build the **coverage matrix** (candidate `distinct_question`s × portfolio): select to *cover distinct questions across all three segments* (§2.2), preferring the highest-fit candidate for each distinct question and dropping lower-fit duplicates to `deferred`/`rejected (EX-1)`.
4. Check the total lands in **15–20** (incl. the 5 core). If short of coverage, record a gap (`→ TASK-008`) rather than pad with duplicates.
5. Record every select/reject/defer with rationale in the decision log (`→ TASK-009`).

### 7.3 Approvals and separation of duties

- The **Product / market lead** owns candidate assessment and scoring.
- The **Program Director** approves final portfolio composition against coverage and balance (the §11 Gate 1 custody role) — and does not score candidates they then approve (separation of duties, consistent with TASK-003).
- When `primary_category = health_data_reference` **or** `is_cautionary = true`, the **clinical reviewer** and **privacy/regulatory reviewer** must co-sign the inclusion verdict (EX-5/EX-6 are theirs to call), per the non-compensable mandatory gates (TASK-003 §3.2, `prd.md` §9/§11).
- The **behavioral scientist** co-scores D2 (mechanism richness) so mechanism depth is not judged by market feel alone.

### 7.4 Gate 1 linkage

At `prd.md` §11 **Gate 1 (research foundation)**, the Program Director reads this rubric's output to confirm: the portfolio totals 15–20; all three categories are represented; every selected app has a distinct question, a category, a rationale, and an access status; and every rejected/deferred candidate has a recorded reason. A portfolio that is polished but cannot show distinct-question coverage does not pass (`prd.md` §11 "Polished unsupported reports do not pass").

---

## 8. Worked walkthrough of the rubric (illustrative — no app assessed)

To show the rubric *runs*, here is how a hypothetical candidate would move through it. **This is a mechanics demonstration, not an assessment of any real app:** every empirical value is `unknown` and no score is asserted.

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates rubric mechanics only. No real app data.
cand_id: CAND-000
app_name: "[SYNTHETIC adjacent-health example]"
proposed_by: "Behavioral scientist"
candidacy_state: assessment_pending      # not yet scored — nothing verified
primary_category: health_data_reference  # S2: exactly one primary
secondary_lenses: [behavior_reference]
portfolio_segment: adjacent_health
distinct_question: >
  "How does an adjacent health app turn passive sensor data into a
   non-judgmental daily nudge without inducing tracking guilt?"   # IC-1 / S1
relevance_statement: >
  "Directly tests the zero-guilt + health-intelligence boundary central
   to HerRays' midlife-women mandate."                            # IC-3
is_cautionary: false
inclusion_checks: {IC-1: pass, IC-2: pass, IC-3: pass, IC-4: unknown, IC-5: pass}
# IC-4 unknown ⇒ cannot yet advance to `scored`; WS01 must confirm a studiable path.
exclusion_id: none
scores: {}                 # empty — gates not all cleared; scoring not begun (§6.4-5)
score_evidence: {}
fit_score: unknown         # not computed until scored
access_feasibility: direct_observation_expected
editorial_recognition_ref: unverified        # → TASK-010; never an asserted award (S4)
listing_ref: unverified                       # → TASK-011
estimates_ref: unverified                      # → TASK-015 (no estimate stored here)
source_evd: []             # nothing captured yet
owner_role: "Product / market lead"
reviewer_role: "Program Director + clinical reviewer + privacy reviewer"  # health_data_reference ⇒ §7.3
decision_ref: pending       # → TASK-009 on final verdict
last_updated: 2026-11-22
```

**Trace of what the rubric did:** it (1) required a single primary category (S2 ✓), (2) required a distinct, non-duplicative question before anything else (S1 ✓ IC-1), (3) **blocked scoring** because IC-4 studiability is still `unknown` (§6.4 rule 5), (4) held every empirical field at `unknown` with `source_evd: []` (S3 ✓), (5) kept editorial recognition and estimates as *pointers* to TASK-010/015, never asserted (S4 ✓), and (6) escalated reviewer requirements automatically because the category is health-data (§7.3). The candidate is correctly parked at `assessment_pending` — the rubric refuses to manufacture a score from absent evidence.

---

## 9. Dependencies and cross-references

**Upstream (consumed by this rubric):**
- `prd.md` §3 — expanded-portfolio target (15–20), category-declaration requirement, "distinct question" test, negative/discontinued examples, candidate app names.
- `prd.md` §4 — evidence grades and the no-fabrication rule governing any captured score input.
- **TASK-004** (evidence grading) & **TASK-005** (`EVD` schema) — define how `score_evidence`/`source_evd` pointers and any graded input behave. `↔`
- **TASK-006** (benchmark app registry) — defines the `APP` record a selected candidate becomes; reserves the `APP-006+` id block (TASK-006 §8.2) for exactly this task's output.

**Downstream (this rubric feeds):**
- **TASK-006** — every `selected` candidate is entered as an `APP` record at `APP-006+`.
- **TASK-008** — coverage shortfalls and rejected-but-notable candidates become research-gap entries.
- **TASK-009** — every select/reject/defer verdict is logged as a `DEC` entry.
- **TASK-010 / TASK-011 / TASK-015** — resolve this rubric's `editorial_recognition_ref` / `listing_ref` / `estimates_ref` pointers with dated, sourced captures.
- **TASK-012** — the selected portfolio becomes the columns of the feature-comparison matrix.
- **TASK-013 / TASK-016** — review sampling and teardown journeys operate over the selected portfolio.
- **Gate 1** (`prd.md` §11) — reads the selected portfolio for distinct-question coverage, category balance, and access-limitation documentation (§7.4).

---

## 10. Candidate roster (PRD-named — assessment pending, nothing verified)

`prd.md` §3 names example candidates for the expanded portfolio. They are reproduced here **as candidates to be assessed under this rubric**, each at `candidacy_state: assessment_pending`. The proposed `primary_category` and `distinct_question` below are **starting hypotheses derived from the PRD's own framing**, offered to seed assessment — they are **not verified facts and not selection decisions.** Nothing about availability, popularity, awards, pricing, or efficacy is asserted; those are WS01 capture targets (`unknown`).

| `cand_id` | App (as named in §3) | Proposed segment | Proposed primary category | Proposed distinct question (hypothesis, to validate) |
|---|---|---|---|---|
| CAND-001 | Streaks | direct | `direct_competitor` | How does a minimalist streak tracker handle the miss/recovery moment? (tests the streak anti-pattern, `prd.md` §5 worked example) |
| CAND-002 | Productive | direct | `direct_competitor` | How does routine scheduling scale without becoming daily admin burden? |
| CAND-003 | Finch | adjacent_health | `behavior_reference` | How does emotional/companion framing sustain gentle, non-pressuring return value? |
| CAND-004 | Gentler Streak | adjacent_health | `health_data_reference` | How does an activity app use health data *without* inducing guilt or over-exertion? |
| CAND-005 | Headspace | adjacent_health | `health_data_reference` | How does a clinically-adjacent wellbeing app set credible, non-overclaiming health boundaries? |
| CAND-006 | Oura | adjacent_health | `health_data_reference` | How does passive sensor data become a trusted daily readiness signal? |
| CAND-007 | *Selected women's-health apps* | adjacent_health | `health_data_reference` | Which specific apps serve midlife women's health, and how? *(the specific app(s) are themselves a WS01 selection to run through this rubric — placeholder for a category, not one app)* |
| CAND-008 | Duolingo | exceptional_consumer | `commercial_reference` | How does a best-in-class habit loop sustain multi-year daily return? (commercial craft, **not** a clinical-efficacy claim — S4) |
| CAND-009 | Apple Fitness | exceptional_consumer | `commercial_reference` | How does first-party iOS/health integration and motion craft set the platform bar? |

**Notes.**
- This roster is **not** the selected portfolio. It is the *input* to §7. Each row must still pass the inclusion gates, clear exclusions, and be scored on captured evidence before it can be `selected`.
- CAND-007 is a **category placeholder** (the PRD says "selected women's health apps"): identifying the specific app(s) is itself WS01 work, and each named app becomes its own `CAND` record.
- The roster lists **9 candidate slots** against a need for **10–15 extended selections**; the Lab is expected to propose additional candidates (per the three segments) during WS01, and is *not* required to select all nine of these — any that fail IC-1/IC-4 or trigger an exclusion are rejected with rationale (§4).
- No candidate here is marked `is_cautionary` yet; whether, e.g., a discontinued tracker is added as a negative example is a WS01 assessment decision (§3 IC-1).

---

## 11. Open unknowns and change log

**Open unknowns (by design — resolved in WS01, not here):**
- The final extended-portfolio membership and total count (10–15 extended; 15–20 total).
- Every candidate's verified category, availability/access status, pricing, rating signal, and any editorial recognition (all `unknown`; captured per TASK-005/010/011/015).
- The specific women's-health app(s) standing behind CAND-007.
- Which (if any) negative/discontinued examples are added under IC-1.
- Additional candidates beyond the PRD-named nine that WS01 proposes to fill coverage gaps.

**Change log:**
- **v0.1 (2026-11-22)** — Initial rubric: portfolio arithmetic and category-balance targets (§2), five inclusion gates (§3) and six exclusion disqualifiers (§4), candidate record field dictionary (§5), the weighted six-dimension 0–100 fit score with anchors and validation failures (§6), the coverage-first selection procedure and governance/approvals (§7), a synthetic mechanics walkthrough (§8), dependencies (§9), and the PRD-named candidate roster at `assessment_pending` (§10). No app assessed, scored, or selected; every empirical field held at `unknown`. Status: **Proposed — rubric defined, portfolio not yet selected.**
