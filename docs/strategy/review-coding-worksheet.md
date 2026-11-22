# HerRays Review Coding Worksheet

**Deliverable:** TASK-014 — Build the review coding worksheet
**Workstream:** Competitive Intelligence (WS01)
**Version:** 0.1 · **Status:** Proposed — worksheet + agreement instrument defined, no real review coded
**Owner (accountable role):** Product / market lead (WS01), under Program Director custody
**Reviewers:** Product analyst / growth specialist · UX researcher · Content strategist / UX writer · Privacy/regulatory reviewer · Program Director
**Source basis:** `prd.md` §4 (Evidence Library `EVD-001`, grades A–D, no-fabrication rule), §5 Phase 1 ("code themes with independent agreement checks on a subset. Do not infer retention from reviews or downloads"), §6 (behavioral anti-patterns: guilt, compulsion, burden), §11 Gate 1, §13 Prompt 01 ("coded dissatisfaction themes"), Prompt 06 ("Preserve specialist disagreements")
**Depends on:** TASK-004 (evidence grading) · TASK-005 (`EVD` schema) · TASK-006 (`APP` registry) · **TASK-013 (app-review sampling protocol — supplies the sampled set, the review-record contract, and the 11-family coding category list this worksheet operationalises)**
**Feeds:** TASK-012 (feature matrix — `FEATURE-CLAIM` codes become grade-C reported signals) · TASK-008 (gap/contradiction log — coder disagreements + contradicted claims) · TASK-041/042 (Opportunity Atlas — `FEATURE-REQUEST` / unmet-need codes) · TASK-021/022 (growth and accessibility audits) · TASK-018 (behavioral audit — `MOTIVATION/GUILT` signals)

---

## 0. How to read this document

TASK-013 defined **which reviews we read and into what category list they will be coded**. This document (TASK-014) is the **coding instrument itself**: the per-review worksheet an analyst fills in, the decision rules that make two analysts code the same review the same way, the inter-rater agreement check that proves they do, and the reconciliation procedure for when they disagree.

The division of labour is deliberate and fenced:

- **TASK-013 = sampling + the category *list*.** It answers *"which reviews, drawn how, into what buckets?"*
- **TASK-014 (this document) = the coding *worksheet* + *application discipline* + *agreement instrument*.** It answers *"given a sampled review, exactly which fields does a coder record, by what rule, and how do we measure and reconcile coder disagreement?"*
- **It is not the coded dataset.** No real review has been sampled or coded; this document contains only the blank instrument and clearly-labelled synthetic worked records that prove the instrument runs.

> **No-fabrication statement.** This document contains **no real coded review data and no findings about any real app.** It does not quote, count, characterise, or report a theme prevalence, sentiment split, or complaint frequency for Routinery, Fabulous, (Not Boring) Habits, Habitify, Griply, or any other real product, because no sampling run (TASK-013) has been executed. Every record in §8 is a **clearly-labelled synthetic example** built on the fictitious app `APP-SYNTH-Z` (deliberately *not* one of the five benchmarks) with `*-SYNTH-*` identifiers and `[SYNTHETIC]`-prefixed body text, and exists solely to prove the worksheet, the attribute rules, and the agreement maths execute. When the instrument is applied for real, each coded review inherits its `EVD` record (TASK-005), is graded no higher than **C** (public user report; `prd.md` §4), and no retention / churn / CAC / LTV / conversion / efficacy figure may ever be derived from it (`prd.md` §5 Phase 1).

---

## 1. Purpose

A category list is not an instrument. "Code dissatisfaction themes" (`prd.md` Prompt 01) silently assumes two people reading the same one-star review will tag it the same way — and untrained, they will not. One coder reads *"it reset my streak and I felt awful"* as `FRICTION`; another as `MOTIVATION/GUILT`; a third as `CANCELLATION`. Without a worksheet that forces an explicit, span-anchored decision and an agreement check that quantifies how often coders converge, "coded themes" is just one analyst's impression wearing a table's clothes — exactly the "polished unsupported report" Gate 1 rejects (`prd.md` §11).

This worksheet exists to make qualitative coding **reproducible, auditable, and honest about its own reliability**:

1. **One review → one fully-specified row.** Every acceptance-criteria signal — **praise, friction, cancellation, feature requests, perceived value, sentiment** — is a named field with a coding rule and a required **source** span, so a code can never float free of the text that justifies it (§3–§5).
2. **Rules, not vibes.** Each code family carries an inclusion rule, exclusion boundary, and tie-breaker against its most-confusable neighbour (§4), so inter-coder disagreement is reduced *by design* before it is measured.
3. **Reliability is measured, not assumed.** A ≥20% overlap subset is independently double-coded; agreement is computed per code family (not just overall), reported with its threshold, and low-agreement families are re-specified before the full corpus is trusted (§6). This operationalises `prd.md` §5 Phase 1's "independent agreement checks on a subset."
4. **Disagreements are preserved, not averaged.** Where two coders or two reviews conflict, the conflict is logged to TASK-008, never silently resolved to a majority (`prd.md` Prompt 06; TASK-004 "never average contradictions") (§6.4, §7).
5. **Signal types stay separated.** A *feeling* (`sentiment`), a *reported feature behaviour* (`FEATURE-CLAIM`, grade C, needs `JRN` confirmation), a *stated exit reason* (`CANCELLATION`, never a churn rate), and a *wish* (`FEATURE-REQUEST`) are distinct fields, so "users are frustrated" is never laundered into "the feature is broken" or "retention is low" (§3, §4, §9).

---

## 2. Four non-negotiables (anti-fabrication + reliability guards)

Structural; a coding pass that violates any one is rejected, not patched.

- **C1 — No code without a quoted span.** Every applied code family must point to the `body_excerpt` character span that justifies it (`evidence_span`). A theme with no quotable textual basis is not coded. This is the single rule that separates coding from invention (§4, §7).
- **C2 — The star rating is not the sentiment, and neither is a count a proof.** `sentiment` is coded from the *text*, independently of `rating`; a text/star disagreement is itself a recorded finding, not an error to smooth over. Any prevalence is reported as "x of N coded reviews in [stratum/app]", never as "x% of users" and never generalised beyond the stratified qualitative sample (`prd.md` §4, §5 Phase 1).
- **C3 — Reported ≠ observed; stated reason ≠ rate.** A `FEATURE-CLAIM` is a grade-C user *report* that routes to TASK-012 for `JRN` confirmation, never entered as an observed feature fact. A `CANCELLATION/CHURN-INTENT` code records a *stated reason*; it is never counted, summed, or presented as an actual churn / retention / conversion figure (`prd.md` §5 Phase 1).
- **C4 — Reliability is disclosed before findings are used.** No coded corpus is promoted to Gate 1 evidence until its per-family agreement statistics and the reconciliation of the overlap subset are recorded (§6). A corpus coded by one person, or whose agreement was never measured, is inadmissible — it may be a draft, never evidence.

**Ethics & privacy guard (C-R6, carried from TASK-013 §2):** coders work from the pseudonymised `rev_id`; reviewer handles are never recorded in the worksheet; any review disclosing special-category health information is coded but **not quoted verbatim** in shared artifacts (the `evidence_span` for such a record stores a neutral paraphrase + the `rev_id`, flagged `health_sensitive: true`, per the TASK-040 privacy boundary).

---

## 3. The coding worksheet — per-review record contract

One sampled review (the TASK-013 §3 review record) becomes **one coding row**. The row has four blocks: **provenance** (carried from TASK-013, read-only to the coder), **code-family fields** (the acceptance-criteria core), **required attributes**, and **grading/agreement**. Every code-family field is nullable: `false`/`none` means *"coder looked and it is absent"* (an observation, C1-compliant because the whole text is the span searched), distinct from being left blank (not yet coded).

### 3.1 Block A — Provenance (read-only; from TASK-013)

| Field | Type | Req. | Rule |
|---|---|---|---|
| `rev_id` | id | M | `REV-<APP>-<NNNN>`; the pseudonymised review key and the **source** anchor. |
| `app_id` | ref | M | `APP-001`…`APP-005` (TASK-006), or a synthetic id in examples. |
| `source_ref` | string | M | Deep link / store URL / screenshot artifact id backing the review (the **source**, C1). Promoted to the `EVD` record's source field. |
| `store` · `locale` · `rating` · `review_date` · `app_version` · `capture_date` | — | M/C | Carried verbatim from the sampled record; the coder does not edit these. |
| `coder_id` | id | M | Pseudonymous coder identifier (`CODER-A`, `CODER-B`…), so double-coded rows are attributable for agreement (§6). |

### 3.2 Block B — Code-family fields (the acceptance-criteria core)

Each code family is coded as a small sub-record: **present** (bool), **evidence_span** (the quoted/paraphrased justifying text, C1), **valence** where applicable, and **sub_tag** from a closed list. The seven acceptance-criteria signals are shown first and in **bold**; the remaining four complete the TASK-013 §9.1 scheme.

| # | Field | Present? | `evidence_span` | `valence` / `sub_tag` (closed list) | Coding rule (one-line) |
|---|---|---|---|---|---|
| B1 | **`praise`** | bool | req. if present | sub_tag ∈ {outcome, habit_stickiness, delight_joy, design, trust, coaching} | Reviewer states what *works* / why they value it. Positive only — a backhanded "used to be good" is coded by its current valence, not here. |
| B2 | **`friction`** | bool | req. if present | sub_tag ∈ {confusion, bug, performance, notifications, data_entry, navigation, other}; `journey_ref` where identifiable | A concrete difficulty *using* the app. Not a price complaint (→ B5), not a wish (→ B6). |
| B3 | **`cancellation`** (CANCELLATION / CHURN-INTENT) | bool | req. if present | sub_tag ∈ {stated_intent, already_stopped, downgraded, reason_given} | A stated intent to stop, or that they stopped, **and the reason given**. Coded as a *reported reason only* — **never** a churn rate (C3). |
| B4 | **`feature_request`** | bool | req. if present | sub_tag ∈ {missing_capability, enhancement, integration, platform} | What the reviewer *wishes* existed. Candidate Opportunity Atlas input (TASK-041). A complaint that a feature is broken is `friction`/`feature_claim`, not a request. |
| B5 | `price_paywall` | bool | req. if present | sub_tag ∈ {cost, paywall_timing, paywall_hardness, trial_surprise, billing, cancel_difficulty} | Monetisation complaint/praise. `cancel_difficulty` here is distinct from B3 (the *mechanics* of cancelling vs. the *decision* to churn). |
| B6 | **`perceived_value`** | enum | req. if `≠ unstated` | one of {worth_it, conditional, not_worth_it, unstated} | The reviewer's overall worth-the-effort/money judgement, **independent of any specific feature**. A whole-review attribute, coded once. |
| B7 | **`sentiment`** | enum | n/a (whole-text) | one of {positive, mixed, negative} | Overall affective tone **of the text**, coded independently of `rating` (C2). |
| B8 | `feature_claim` | bool | req. if present | sub_tag ∈ {exists, missing, misbehaves}; `target_feature` free-text | A claim a feature does/doesn't exist or (mis)behaves → TASK-012 as a grade-C *reported* signal, **never** an observation (C3). |
| B9 | `onboarding` | bool | req. if present | sub_tag ∈ {setup_length, personalisation, first_value_time, overwhelm} | First-run experience signal. Maps to journey J2/J3. |
| B10 | `motivation_guilt` | bool | req. if present | sub_tag ∈ {streak_pressure, missed_day_shame, all_or_nothing, judged_not_supported, compulsion, over_tracking_burden} | **Priority category.** Behavioral-emotional signal; the HerRays zero-guilt lens (`prd.md` §6). Routes to TASK-018. |
| B11 | `accessibility` | bool | req. if present | sub_tag ∈ {voiceover, dynamic_type, contrast, cognitive_load, motor} | Inclusion complaint → TASK-022. |
| B12 | `trust_privacy` | bool | req. if present | sub_tag ∈ {data_concern, health_claim_scepticism, clinical_credibility, security} | Confidence/credibility signal → TASK-040 boundary. |

> **Multi-code by design.** A single review commonly carries several families (the §8 records exercise this). Over-coding (tagging a family whose span is weak) and under-coding (missing a present family) are both agreement failures caught in §6.

### 3.3 Block C — Required attributes (coded on every row)

| Field | Type | Rule |
|---|---|---|
| `intensity` | enum {low, medium, high} | Strength of the expressed feeling. Independent of `sentiment` valence (a *mildly* negative and a *furious* negative differ). |
| `specificity` | enum {vague, specific} | A specific, reproducible complaint ("crashes when I add a 3rd reminder") outweighs a diffuse one ("it's buggy") in downstream weighting — **not** in sampling. |
| `journey_ref` | enum J1–J10 \| `none` | Which of the ten mandatory journeys (`prd.md` §5) the review touches, where identifiable. Multiple allowed. |
| `text_star_divergence` | bool (derived) | `true` when coded `sentiment` valence contradicts the `rating` band (e.g. negative text on a 4–5★ rating). A first-class finding (C2), not an error. |

### 3.4 Block D — Grading, provenance of the code, agreement

| Field | Type | Rule |
|---|---|---|
| `evd_grade` | enum A–D | Review-sourced codes are **C** by default (public user report), **D** if vague/unverifiable; never above C (`prd.md` §4). No efficacy grade is ever assigned from a review. |
| `confidence` | enum (TASK-004 vocab) | Coder confidence in the coding itself; interlocks with the TASK-004 confidence scale. |
| `limitation` | string (non-empty) | Mandatory. Minimum content: self-selection + store-sort bias; plus, for any `feature_claim`, "reported, needs `JRN` confirmation (TASK-012)". |
| `double_coded` | bool | `true` if this row is in the §6 overlap subset. |
| `adjudication_ref` | id \| `none` | Links to the reconciliation record (§6.4) if this row's codes disagreed between coders. |
| `contradiction_ref` | id \| `none` | Links to a `CON` record (TASK-008) if this review's claim contradicts another review or a `JRN`/`EVD`. |

---

## 4. Code-family coding rules (the reliability core)

The worksheet's reliability lives in disambiguation. For each family below: **include when**, **exclude when**, and **tie-breaker** against the neighbour it is most often confused with. Coders apply these before, not after, measuring agreement.

### 4.1 `praise` (B1)
- **Include when:** the reviewer attributes value or a working outcome to the app in a positive register.
- **Exclude when:** the positive clause only sets up a complaint ("*loved it, but…*") — code the dominant valence and the complaint's family; `praise` is coded only if a standalone positive claim survives.
- **Tie-breaker vs. `perceived_value`:** `praise` is about a *specific thing that works*; `perceived_value` is the *overall worth judgement*. "The timers are great" → `praise:design`. "Worth every penny" → `perceived_value:worth_it`. Both can co-occur.

### 4.2 `friction` (B2)
- **Include when:** a concrete difficulty operating the app is described.
- **Exclude when:** the difficulty is purely about *cost/paywall* (→ `price_paywall`) or is a *wish for something that doesn't exist* (→ `feature_request`).
- **Tie-breaker vs. `feature_claim`:** `friction` = "I couldn't do X / it was hard"; `feature_claim:misbehaves` = "feature X does the wrong thing". A reset streak described as *the app's behaviour* is `feature_claim:misbehaves`; the *resulting struggle to re-engage* is `friction`. Code both with separate spans when both are present.

### 4.3 `cancellation` (B3)
- **Include when:** the text states an intent to stop, that they stopped, or that they downgraded — **with** a reason captured in `sub_tag`/`evidence_span`.
- **Exclude when:** the review merely complains without any exit statement (that is `friction`/`price_paywall` with its own valence).
- **Hard rule (C3):** the count of `cancellation` codes is **never** reported as a churn, retention, or conversion rate. It is "N of M coded reviews stated an intent to stop, most citing [reason]" — a description of the sample's stated reasons only.
- **Tie-breaker vs. `price_paywall:cancel_difficulty`:** B3 is the *decision/why they left*; B5 `cancel_difficulty` is the *mechanical hardship of the cancel flow*. "I quit because it got too expensive" → `cancellation:reason_given` + `price_paywall:cost`. "It took me 20 minutes to find the cancel button" → `price_paywall:cancel_difficulty` (no `cancellation` unless they also state they left).

### 4.4 `feature_request` (B4)
- **Include when:** the reviewer expresses a desire for a capability/enhancement that is framed as *not currently present or insufficient*.
- **Exclude when:** the reviewer says an existing feature is broken (→ `feature_claim:misbehaves` + `friction`).
- **Downstream:** every `feature_request` is a candidate Opportunity Atlas input (TASK-041) but is a grade-C *reported unmet need*, never evidence that the need is real or widespread until triangulated with WS03/WS04.

### 4.5 `perceived_value` (B6)
- **Coded once per review** as an enum, not a bool. `conditional` captures "worth it *if* you're disciplined / *for* the right person" — a common and analytically rich judgement. `unstated` is the honest default when the reviewer makes no worth judgement; it is **not** a missing value.

### 4.6 `sentiment` (B7)
- Coded from the **text**, by valence of the dominant affect, independent of stars (C2). A 1★ review whose text is calm and constructive is `sentiment: mixed` or `negative`-`low-intensity`, not forced to `negative`-`high` by its star count. Set `text_star_divergence` when text and star band disagree.

*(B5, B8–B12 rules are specified inline in §3.2; the four families above are the ones whose boundaries most often drive coder disagreement, so they carry the longest rules.)*

---

## 5. The blank worksheet (reusable template)

One YAML row per review. Coders fill one of these per sampled `rev_id`; the `# <rule>` comments are retained in the template as an in-line codebook.

```yaml
# --- HerRays Review Coding Worksheet — one record per review (BLANK TEMPLATE) ---
rev_id:            # REV-<APP>-<NNNN>   (from TASK-013; the pseudonymised key)
app_id:            # APP-00X
source_ref:        # store URL / artifact id  (the SOURCE; C1)
store:             # apple_app_store | google_play
locale:            # e.g. US/en
rating:            # 1..5  (store stars — NOT the sentiment, C2)
review_date:       # YYYY-MM-DD
app_version:       # version | unknown
capture_date:      # YYYY-MM-DD
coder_id:          # CODER-A | CODER-B ...

# --- Block B: code families (present + evidence_span + sub_tag) ---
praise:            { present: false, evidence_span: "", sub_tag: "" }           # B1  value delivered
friction:          { present: false, evidence_span: "", sub_tag: "", journey_ref: "" }  # B2
cancellation:      { present: false, evidence_span: "", sub_tag: "" }           # B3  stated reason only — NEVER a rate (C3)
feature_request:   { present: false, evidence_span: "", sub_tag: "" }           # B4  -> Opportunity Atlas (TASK-041)
price_paywall:     { present: false, evidence_span: "", sub_tag: "" }           # B5
perceived_value:   unstated          # B6  worth_it | conditional | not_worth_it | unstated
sentiment:         # B7  positive | mixed | negative  (coded from TEXT)
feature_claim:     { present: false, evidence_span: "", sub_tag: "", target_feature: "" }  # B8 -> TASK-012, reported not observed (C3)
onboarding:        { present: false, evidence_span: "", sub_tag: "" }           # B9
motivation_guilt:  { present: false, evidence_span: "", sub_tag: "" }           # B10 PRIORITY (zero-guilt, prd §6) -> TASK-018
accessibility:     { present: false, evidence_span: "", sub_tag: "" }           # B11 -> TASK-022
trust_privacy:     { present: false, evidence_span: "", sub_tag: "" }           # B12 -> TASK-040

# --- Block C: required attributes ---
intensity:         # low | medium | high
specificity:       # vague | specific
journey_ref: []    # subset of J1..J10 | none
text_star_divergence: false   # derived: true if sentiment valence contradicts rating band

# --- Block D: grading / agreement ---
evd_grade: C       # review source caps at C (prd §4); never an efficacy grade
confidence:        # TASK-004 confidence vocabulary
limitation:        # MANDATORY, non-empty: self-selection + store-sort bias; feature_claims need JRN confirmation
double_coded: false
adjudication_ref: none
contradiction_ref: none
health_sensitive: false   # if true, evidence_span stores a paraphrase, not verbatim health text (C-R6)
```

---

## 6. Inter-rater agreement instrument

The worksheet is only trustworthy if two trained coders applying it converge. This section operationalises `prd.md` §5 Phase 1 ("code themes with independent agreement checks on a subset") and is the artifact Gate 1 inspects (C4).

### 6.1 Overlap design
- **Overlap subset:** a **minimum 20%** random subset of the analysis set (drawn with the TASK-013 seed so it is reproducible) is coded **independently** by two coders who do not see each other's codes.
- **Blind-then-reconcile:** coders complete their rows in isolation; agreement is computed *before* any discussion; only then do they reconcile (§6.4). Reconciliation never retro-edits the pre-reconciliation codes used for the statistic.

### 6.2 What is measured (per family, not just overall)
Agreement is computed **per code family** (B1–B12) and **per attribute** (`sentiment`, `intensity`, `specificity`), because a corpus can have excellent overall agreement while one decision-critical family (e.g. `motivation_guilt`) is unreliable. For each:

- **Binary-presence families (B1–B5, B8–B12):** Cohen's κ on present/absent.
- **Multi-class fields (`sentiment`, `perceived_value`, `intensity`, `specificity`):** Cohen's κ (or weighted κ for the ordinal `intensity`/`specificity`) on the class labels. For ≥3 coders, Krippendorff's α is used instead, so the instrument scales without a redesign.
- **Span agreement:** for families coded `present` by both coders, whether the `evidence_span`s overlap (a sanity check that they agreed on the same *reason*, not merely the same label).

### 6.3 Thresholds and what happens below them
Interpretation band (declared planning parameter, standard κ convention):

| κ / α | Band | Action |
|---|---|---|
| ≥ 0.75 | Strong | Family accepted; full-corpus codes from either coder are admissible. |
| 0.60–0.74 | Acceptable | Accepted with a recorded caveat; spot-recheck 10% more. |
| 0.40–0.59 | Weak | **Re-specify the family's rule (§4), retrain, re-code the subset.** Findings from this family are held, not used, until it clears 0.60. |
| < 0.40 | Unreliable | Family is **inadmissible as evidence**; either the construct is ill-defined or the text can't support it. Escalate as a `GAP` (TASK-008); do not report any prevalence for it. |

> These thresholds are a **planning convention**, not a result. No κ/α value in this document is a real measurement; the only agreement numbers appearing anywhere are inside the §8 synthetic illustration.

### 6.4 Disagreement reconciliation (preserve, don't average)
When two coders disagree on a row:
1. Record both codings verbatim in an **adjudication record** (`adjudication_ref`).
2. A third coder or the WS01 owner adjudicates **by returning to the `evidence_span`**, not by splitting the difference. The rule applied is written down (and, if the rule was ambiguous, §4 is amended and the change logged — a rule fix, not a data fix).
3. If the disagreement reflects a genuine *ambiguity in the review itself* (the text truly supports both readings), the row is coded `mixed`/multi-code and the ambiguity is preserved as a finding, not forced to one label (`prd.md` Prompt 06).
4. A disagreement that reveals two *reviews* making incompatible claims (not two coders) opens a `CON` record in TASK-008 (`contradiction_ref`).

### 6.5 Coder onboarding (so agreement is earned, not hoped for)
Before the real corpus: both coders independently code a shared **calibration set** (the §8 synthetic records plus a ~15-review pilot once sampling runs), compute agreement, reconcile, and amend §4 rules until the pilot clears the §6.3 thresholds. Only a calibrated pair codes the real corpus. The calibration κ and the §4 amendments are recorded in the change log.

---

## 7. Coding discipline (do / don't)

| Do | Don't |
|---|---|
| Anchor every code to a quoted `evidence_span` (C1). | Code a "general impression" with no span. |
| Code `sentiment` from the text; flag text/star divergence. | Infer sentiment from the star rating. |
| Report prevalence as "x of N in [stratum/app]". | Say "x% of users" or generalise beyond the sample. |
| Record `cancellation` as a stated reason. | Sum `cancellation` into a churn/retention/conversion rate (C3). |
| Route `feature_claim` to TASK-012 as grade-C reported. | Enter a review's feature claim as an observed fact. |
| Preserve coder disagreement in an adjudication record. | Average two codings or quietly pick the majority. |
| Paraphrase special-category health text; set `health_sensitive`. | Quote verbatim health disclosures in shared artifacts. |
| Leave a family `present: false` when you looked and it's absent. | Leave it blank (ambiguous between "absent" and "not yet coded"). |

---

## 8. Worked synthetic examples (ILLUSTRATIVE — prove the instrument runs)

> **Everything in §8 is synthetic.** App `APP-SYNTH-Z` is fictitious (not one of the five benchmarks); every `rev_id` is `*-SYNTH-*`; every `body_excerpt` is invented and `[SYNTHETIC]`-prefixed. These records exist only to demonstrate that the worksheet fields, the §4 disambiguation rules, and the §6 agreement maths execute. **No real review of any real app is represented, and no number here is a measurement.**

The five records are chosen to collectively exercise **every acceptance-criteria field** (praise, friction, cancellation, feature-request, perceived-value, sentiment, source) and the hardest §4 boundaries.

### Record 1 — the zero-guilt churn case (streak reset)
```yaml
rev_id: REV-APP-SYNTH-Z-0007          # SYNTHETIC
app_id: APP-SYNTH-Z                    # SYNTHETIC — not a benchmark
source_ref: "synthetic://example/APP-SYNTH-Z/0007"   # SOURCE
store: apple_app_store
locale: US/en
rating: 1
review_date: 2026-10-30
app_version: "7.4.0"
capture_date: 2026-11-22
coder_id: CODER-A
praise:           { present: true,  evidence_span: "[SYNTHETIC] loved it for two weeks", sub_tag: habit_stickiness }
friction:         { present: true,  evidence_span: "[SYNTHETIC] couldn't make myself open it again", sub_tag: other, journey_ref: J8 }
cancellation:     { present: true,  evidence_span: "[SYNTHETIC] deleted it", sub_tag: reason_given }
feature_request:  { present: false, evidence_span: "", sub_tag: "" }
price_paywall:    { present: false, evidence_span: "", sub_tag: "" }
perceived_value:  not_worth_it
sentiment:        negative
feature_claim:    { present: true,  evidence_span: "[SYNTHETIC] missed one day and it reset my whole streak to zero", sub_tag: misbehaves, target_feature: "streak counter" }
motivation_guilt: { present: true,  evidence_span: "[SYNTHETIC] felt awful", sub_tag: missed_day_shame }
intensity: high
specificity: specific
journey_ref: [J8]
text_star_divergence: false
evd_grade: C
confidence: indicative
limitation: "Self-selected reviewer; single report. Streak-reset is a user perception (feature_claim) — needs JRN confirmation (TASK-012) before treated as actual app behaviour. 'deleted it' is a stated exit, NOT a churn rate (C3)."
double_coded: true
adjudication_ref: ADJ-SYNTH-1
contradiction_ref: none
health_sensitive: false
```
*Illustrates:* co-coded `feature_claim:misbehaves` (the app's behaviour) **and** `friction` (the resulting struggle) per §4.2 tie-breaker; `cancellation` as a stated reason not a rate (§4.3, C3); a priority `motivation_guilt:missed_day_shame` routed to TASK-018; a residual positive clause that still earns `praise` (§4.1).

### Record 2 — price-driven exit with a cancel-flow complaint
```yaml
rev_id: REV-APP-SYNTH-Z-0041          # SYNTHETIC
app_id: APP-SYNTH-Z
source_ref: "synthetic://example/APP-SYNTH-Z/0041"
store: google_play
locale: NL/nl
rating: 2
review_date: 2026-09-12
app_version: unknown
capture_date: 2026-11-22
coder_id: CODER-A
praise:           { present: false, evidence_span: "", sub_tag: "" }
friction:         { present: false, evidence_span: "", sub_tag: "" }
cancellation:     { present: true,  evidence_span: "[SYNTHETIC] cancelled after the trial — too pricey for what it is", sub_tag: reason_given }
feature_request:  { present: false, evidence_span: "", sub_tag: "" }
price_paywall:    { present: true,  evidence_span: "[SYNTHETIC] hid the cancel button three menus deep", sub_tag: cancel_difficulty }
perceived_value:  not_worth_it
sentiment:        negative
feature_claim:    { present: false, evidence_span: "", sub_tag: "", target_feature: "" }
intensity: medium
specificity: specific
journey_ref: [J10]
text_star_divergence: false
evd_grade: C
confidence: indicative
limitation: "Self-selected; machine-translated from nl (translation confidence noted). Price point not verified here — route to TASK-011/015, not asserted. Stated cancellation reason only (C3)."
double_coded: false
adjudication_ref: none
contradiction_ref: none
health_sensitive: false
```
*Illustrates:* the §4.3 tie-breaker — `cancellation:reason_given` (the decision, cost) is separated from `price_paywall:cancel_difficulty` (the mechanics); `app_version: unknown` honoured, not inferred; translation flagged in `limitation`.

### Record 3 — text/star divergence + feature request
```yaml
rev_id: REV-APP-SYNTH-Z-0102          # SYNTHETIC
app_id: APP-SYNTH-Z
source_ref: "synthetic://example/APP-SYNTH-Z/0102"
store: apple_app_store
locale: US/en
rating: 5
review_date: 2026-11-05
app_version: "7.4.0"
capture_date: 2026-11-22
coder_id: CODER-A
praise:           { present: true,  evidence_span: "[SYNTHETIC] the gentle check-ins actually get me moving", sub_tag: coaching }
friction:         { present: false, evidence_span: "", sub_tag: "" }
cancellation:     { present: false, evidence_span: "", sub_tag: "" }
feature_request:  { present: true,  evidence_span: "[SYNTHETIC] please add an Apple Health sync and a weekly (not daily) mode", sub_tag: integration }
price_paywall:    { present: false, evidence_span: "", sub_tag: "" }
perceived_value:  conditional
sentiment:        mixed
feature_claim:    { present: false, evidence_span: "", sub_tag: "", target_feature: "" }
accessibility:    { present: false, evidence_span: "", sub_tag: "" }
intensity: medium
specificity: specific
journey_ref: [J5, J9]
text_star_divergence: true
evd_grade: C
confidence: indicative
limitation: "Self-selected. 5★ with mixed text — divergence flagged (C2); do not infer whole-base satisfaction. Feature request is a reported unmet need (grade C), not validated demand — candidate OPP input (TASK-041)."
double_coded: true
adjudication_ref: none
contradiction_ref: none
health_sensitive: false
```
*Illustrates:* `text_star_divergence: true` (a 5★ with `sentiment: mixed`, §4.6/C2); `perceived_value: conditional`; a `feature_request:integration` (the "weekly not daily mode" also aligns with the zero-guilt flexible-consistency thesis) routed to TASK-041.

### Record 4 — vague negative (low evidentiary weight) + accessibility
```yaml
rev_id: REV-APP-SYNTH-Z-0155          # SYNTHETIC
app_id: APP-SYNTH-Z
source_ref: "synthetic://example/APP-SYNTH-Z/0155"
store: google_play
locale: US/en
rating: 1
review_date: 2026-08-01
app_version: unknown
capture_date: 2026-11-22
coder_id: CODER-A
praise:           { present: false, evidence_span: "", sub_tag: "" }
friction:         { present: true,  evidence_span: "[SYNTHETIC] buttons too small, hard to read on my phone", sub_tag: other }
cancellation:     { present: false, evidence_span: "", sub_tag: "" }
feature_request:  { present: false, evidence_span: "", sub_tag: "" }
price_paywall:    { present: false, evidence_span: "", sub_tag: "" }
perceived_value:  not_worth_it
sentiment:        negative
feature_claim:    { present: false, evidence_span: "", sub_tag: "", target_feature: "" }
accessibility:    { present: true,  evidence_span: "[SYNTHETIC] too small, hard to read", sub_tag: dynamic_type }
intensity: low
specificity: vague
journey_ref: [none]
text_star_divergence: false
evd_grade: D
confidence: speculative
limitation: "Self-selected; vague ('hard to read') — low specificity, graded D not C. Accessibility signal routed to TASK-022 but as a weak single report; no device/OS context captured."
double_coded: false
adjudication_ref: none
contradiction_ref: none
health_sensitive: false
```
*Illustrates:* a **D grade** for a vague report (§3.4) so low-information reviews are not over-weighted; an `accessibility:dynamic_type` signal routed to TASK-022; `specificity: vague` driving the down-grade.

### Record 5 — delight + worth-it (positive, with a trust note) and a double-coding disagreement
```yaml
rev_id: REV-APP-SYNTH-Z-0190          # SYNTHETIC
app_id: APP-SYNTH-Z
source_ref: "synthetic://example/APP-SYNTH-Z/0190"
store: apple_app_store
locale: US/en
rating: 5
review_date: 2026-11-18
app_version: "7.4.0"
capture_date: 2026-11-22
coder_id: CODER-A
praise:           { present: true,  evidence_span: "[SYNTHETIC] first habit app that didn't make me feel like a failure", sub_tag: delight_joy }
friction:         { present: false, evidence_span: "", sub_tag: "" }
cancellation:     { present: false, evidence_span: "", sub_tag: "" }
feature_request:  { present: false, evidence_span: "", sub_tag: "" }
price_paywall:    { present: false, evidence_span: "", sub_tag: "" }
perceived_value:  worth_it
sentiment:        positive
feature_claim:    { present: false, evidence_span: "", sub_tag: "", target_feature: "" }
motivation_guilt: { present: true,  evidence_span: "[SYNTHETIC] didn't make me feel like a failure", sub_tag: judged_not_supported }
trust_privacy:    { present: true,  evidence_span: "[SYNTHETIC] wish I knew where my data goes", sub_tag: data_concern }
intensity: high
specificity: specific
journey_ref: [J8]
text_star_divergence: false
evd_grade: C
confidence: indicative
limitation: "Self-selected; glowing reviews over-represent delight and risk incentivised-prompt contamination (check TASK-013 §8.3 flag). 'feel like a failure' coded as a POSITIVE motivation_guilt relief signal, not a complaint."
double_coded: true
adjudication_ref: ADJ-SYNTH-2
contradiction_ref: none
health_sensitive: false
```
*Illustrates:* a *positive* `motivation_guilt:judged_not_supported` (the absence of shame as a delight driver — the HerRays zero-guilt thesis surfacing as praise); `perceived_value: worth_it`; a co-occurring `trust_privacy:data_concern` even in a 5★ review.

### 8.1 Synthetic agreement illustration (shows §6 maths only)
> **Synthetic — not a measurement.** Suppose CODER-A and CODER-B independently coded the four double-coded rows (0007, 0102, 0190, plus one more). On `motivation_guilt` they agreed present on 0007 and 0190 but CODER-B missed it on a fourth row → this would feed a per-family κ. On Record 1, CODER-B coded the reset as `friction` only (not `feature_claim`); that disagreement is recorded verbatim in `ADJ-SYNTH-1`, adjudicated **by re-reading the span** per §6.4 (ruling: "resets my streak" describes app *behaviour* → `feature_claim:misbehaves` stands, `friction` retained for the re-engagement struggle), and §4.2's tie-breaker is confirmed clear. **No κ value is asserted as real; this only shows where the numbers and the adjudication would come from.**

---

## 9. Dependencies, open unknowns, forbidden values, change log

### 9.1 Forbidden-value / validation-failure catalogue (entry-rejected)
| # | Rejected pattern | Rule |
|---|---|---|
| V1 | Any applied code family with an empty `evidence_span` | C1 |
| V2 | `sentiment` set equal to the star band by default | C2 |
| V3 | `cancellation` codes summed/presented as a churn/retention/conversion rate | C3 |
| V4 | A `feature_claim` entered into TASK-012 as an observed fact (no `JRN`) | C3 |
| V5 | Prevalence reported as "% of users" rather than "x of N in [stratum]" | C2 / `prd.md` §4 |
| V6 | Corpus promoted to Gate 1 with no per-family agreement statistics | C4 |
| V7 | Coder disagreement averaged / majority-picked instead of adjudicated + preserved | §6.4 / Prompt 06 |
| V8 | Verbatim special-category health text in a shared artifact | C-R6 / TASK-040 |
| V9 | `evd_grade` above C from a review, or any efficacy grade assigned from a review | `prd.md` §4 |
| V10 | Empty `limitation` field | §3.4 |
| V11 | A code family left blank (vs. explicit `present: false`) in a "complete" row | §3.2 |
| V12 | Synthetic (`*-SYNTH-*`) record presented anywhere as a real coded review | No-fabrication statement |

### 9.2 Dependencies
- **Consumes:** the sampled, de-duplicated review set + review-record contract + 11-family category list (TASK-013); `EVD` schema + grades (TASK-004/005); `APP` registry (TASK-006).
- **Feeds:** feature matrix reported signals (TASK-012); gap/contradiction log (TASK-008, via `adjudication_ref`/`contradiction_ref`); Opportunity Atlas (TASK-041/042, via `feature_request`/`motivation_guilt`); growth + accessibility + behavioral audits (TASK-021/022/018).
- **Governed by:** Gate 1 (`prd.md` §11); privacy/regulatory reviewer sign-off on the health-sensitive handling (TASK-040 boundary).

### 9.3 Open unknowns (explicit, not invented)
- The real per-family κ/α values — unknown until the pilot and overlap subset are coded; §6.3 thresholds are the planning convention, not a result.
- The exact double-coding share beyond the ≥20% floor — may rise for low-agreement families.
- Whether `sentiment` needs a four-class scale (adding `neutral`) — to be decided on the calibration set if `mixed` proves overloaded.
- Final journey taxonomy stability — `journey_ref` depends on WS02 (TASK-016) confirming the ten journeys operationally.

### 9.4 Change log
- **v0.1 (2026-11-22):** Initial worksheet. Per-review record contract (Blocks A–D) with all acceptance-criteria fields (praise, friction, cancellation, feature_request, perceived_value, sentiment, source) as first-class fields; §4 disambiguation rules for the four highest-disagreement families; blank YAML template with inline codebook (§5); inter-rater agreement instrument with per-family κ/α, thresholds, and preserve-don't-average reconciliation (§6); coding-discipline do/don't table; five labelled synthetic worked records exercising every field + a synthetic agreement illustration; 12-item forbidden-value catalogue. No real review coded.

---

*End of TASK-014 deliverable. No reviews have been sampled, quoted, counted, or coded. All thresholds, quotas, and κ bands are declared planning parameters; every worked record and agreement figure is explicitly synthetic.*
