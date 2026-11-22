# HerRays — Behavior-Change Evidence Extraction Table

**Deliverable:** TASK-025 — Create the behavior-change evidence extraction table
**Workstream:** Behavior & User Research (WS03) · behavioral-science & clinical-evidence lens
**Version:** 0.1 · **Status:** Proposed — extraction schema defined, no study extracted, no effect estimate recorded
**Owner (accountable role):** Behavioral scientist (R02), under Program Director custody
**Reviewers:** Product analyst / growth specialist (R09, outcome-layer & effect-measure sign-off) · UX researcher (R07, transferability sanity-check) · Clinical reviewer (R14, mandatory for every L-CLIN row) · Privacy/regulatory reviewer (R15, medical-claim & population-data check) · Program Director
**Source basis:** `prd.md` §6 Behavioral science ("Extract populations, interventions, comparators, duration, effect sizes when available, uncertainty and transferability to midlife women. Assess risks of guilt, compulsion, burden and excessive tracking."), §1 ("Separate engagement, adherence, habit automaticity and health outcomes"), §4 (Evidence Library `EVD-001`; grades A–D; "Grade separately for efficacy, relevance and confidence"; "Do not interpret a high grade on usability as a high grade on health impact"; "Never fabricate … actual retention, CAC, LTV, clinical outcomes"), §11 Gate 1/Gate 2 ("Polished unsupported reports do not pass"), §13 Prompt 00 ("Separate evidence, inference, hypothesis and invention") and Prompt 03 ("extract population, comparator, duration, outcomes, effect sizes where available, limitations and transferability to midlife women. Distinguish engagement, adherence, automaticity and health outcomes."), §14 ("A deliverable is not complete if its claims lack traceable sources … or hypothetical users/tests are presented as real").
**Depends on:** TASK-024 (literature search protocol — hands this table its *included set* of studies plus the PRISMA flow; this table begins where TASK-024 stops: "extract its data") · TASK-004 (evidence grading — the A–D scale, the efficacy/relevance/confidence split, and the confidence vocabulary this table reuses verbatim; it never redefines them) · TASK-005 (`EVD` record schema — every extracted study is/links an `EVD`; this table is the *content* of the behaviour-change evidence, not the storage contract) · TASK-018 (behavioral-scientist audit template — supplies the BCTTv1 coding discipline this table reuses) · TASK-008 (gap/contradiction log — an outcome a study cannot reach, a poor-transfer body of evidence, or two rows that disagree route there)
**Feeds:** TASK-030/031 (capability mechanism records & five-layer worksheet — the "evidence/limitations" layer of each capability is populated from these rows, by `evd_ref`) · TASK-009 (experiment register — a mechanism the table shows *unproven at the health layer* becomes a candidate `EXP`) · TASK-029 (user-needs synthesis — scientific rows are triangulated against primary user evidence; contradictions preserved, never averaged) · TASK-033/036 (capability safety gate & red-team — harm and certainty columns are inputs) · TASK-042 (opportunity prioritization — the certainty and transferability behind each mechanism flow into the prioritization score) · TASK-034 (capability scorecard — the "behavioral evidence" dimension reads certainty + transferability from here)

---

## 0. How to read this document

TASK-024 defines how the WS03 science search is run and which publications are *admitted*. Its output is a list of included studies and a PRISMA flow — **not** findings. This document, TASK-025, is the **extraction contract**: the one-row-per-study table that turns each admitted publication into a structured, comparable, source-linked record of *what the study did and what it found*, graded for how much that finding can be trusted and how far it transfers to women in midlife.

The PRD asks WS03 to "extract populations, interventions, comparators, duration, effect sizes when available, uncertainty and transferability to midlife women" (`prd.md` §6). Left as prose, that instruction invites three predictable failures:

1. **Spin** — an abstract's confident sentence ("the app significantly improved wellbeing") is copied into the record as the finding, losing the actual measure, the comparator, the effect size, and the uncertainty.
2. **Layer collapse** — a result about *app engagement* is filed as if it were evidence of *behaviour change* or *health benefit* (the canonical WS03 failure; `prd.md` §1/§6).
3. **Transfer laundering** — "works in 20-year-old men" is recorded as "works for our users," erasing the distance to the midlife-women audience (`prd.md` §4: grade relevance separately).

This table is the instrument that **structurally prevents all three**. It is a **schema, not a dataset**: it contains **no real study, no real effect size, no real finding**, because no study has been extracted. Every field, vocabulary and rule below is a *specification of how an included study will be recorded and judged*. The only populated artifact is the **clearly-labelled synthetic row** in §11, which uses a fictitious study and `*-SYNTH-*` identifiers solely to demonstrate the format; nothing in it may be cited as a real result.

> **No-fabrication statement.** This document reports **no effect size, confidence interval, sample size, p-value, hazard/odds/risk ratio, mean difference, or study result of any kind**, because **no study has been extracted.** The named frameworks and instruments — the Behaviour Change Technique Taxonomy v1 (Michie et al., 2013), COM-B (Michie, van Stralen & West, 2011), Self-Determination Theory (Ryan & Deci, 2000), the Fogg Behavior Model (Fogg, 2009), the SRBAI/SRHI habit-strength family (Gardner, Abraham, Lally & de Bruijn, 2012; Verplanken & Orbell, 2003), the GRADE approach to certainty of evidence (Guyatt et al., 2008; Balshem et al., 2011), the Cochrane Risk of Bias 2 tool (Sterne et al., 2019) and PRISMA 2020 (Page et al., 2021) — are cited **as instruments and reporting standards this table conforms to**, i.e. by name and method, *never* as evidence that any HerRays or competitor feature works. No effect attributed to any of them appears here. If this table is populated, its contents are *extracted study records* — inputs to capability and opportunity work — not conclusions about the HerRays product.

**Scope boundary — what this task is and is not.**
- **TASK-025 (this document) = the extraction table.** It answers *"for each included study, what intervention/BCT was delivered, to whom, versus what comparator, for how long, measuring which outcome at which layer, with what effect estimate, at what certainty, and how far does it transfer to midlife women?"* Its output is **one structured row per included study**.
- **It is not the search-and-screen protocol.** Which studies are found and admitted is **TASK-024**. This table extracts the set TASK-024 hands over; it never searches, and it never adds a study that did not pass TASK-024 screening.
- **It is not the grading ruleset.** The A–D scale, admissible-source ceilings and confidence vocabulary are **TASK-004**. This table *applies* them (§7) and never redefines them.
- **It is not the `EVD` storage schema.** Identifiers, provenance and lifecycle of an evidence record are **TASK-005**. Each row here *is the behaviour-change content* of one or more `EVD` records and links to them by `evd_ref`.
- **It is not the app teardown or the app audit.** What Routinery/Fabulous/etc. *do* is TASK-016–023; the efficacy evidence an app audit (TASK-018) *links to* is sourced **from this table**, never read off an app screen or a marketing page.
- **It decides nothing.** No Adopt/Adapt/Invent/Reject/Defer (TASK-035), no scoring (TASK-034). Extracted evidence is an *input* to those.

---

## 1. Purpose

An extraction table is only trustworthy if a second scientist, reading the same paper, would produce the same row — and if a reader of the row can see the difference between *what the study measured* and *what we hope it means*. The purpose of this schema is to make WS03's behaviour-change evidence **structured, comparable, source-linked, and honest about reach and certainty.**

It guarantees five properties of every extracted row:

1. **Source-linked.** Every row carries a resolvable `evd_ref` to the TASK-005 `EVD` record (DOI/PMID/trial-ID + access date). A row with no retrievable source is inadmissible — not low-grade, *absent* (`prd.md` §14).
2. **Outcome-honest.** Every row inherits and re-asserts the TASK-024 `outcome_layer` (engagement / adherence / automaticity / clinical-health). A row may not describe an engagement result as behaviour change, or a behaviour result as a health outcome (`prd.md` §1/§6).
3. **Effect-faithful.** The effect is recorded as the *measure the study actually reported* (with direction, magnitude, dispersion and the comparator it is relative to), not as the abstract's adjective. "Significant" without a number is not an effect estimate (§6).
4. **Certainty-explicit.** Every row separates the **evidence grade** (TASK-004 A–D, multi-dimensional) from the **GRADE certainty of evidence** for the specific outcome, and records risk of bias. A confident sentence never raises certainty; design and execution do (§7).
5. **Transfer-bounded.** Every row carries an explicit `transferability_to_herrays` judgement and reason. Distance from midlife women lowers *relevance*, never efficacy, and a poor-transfer body of evidence on an important question is itself a `GAP` (§8; `prd.md` §4).

---

## 2. Seven non-negotiables (anti-fabrication & integrity guards)

These guards are structural. A row that violates any one is rejected at extraction audit (§10), not patched afterward.

- **X1 — No row without a retrievable source.** Every row has an `evd_ref` resolving to a TASK-005 `EVD` with a working identifier and access date. Extraction "from memory," from an abstract alone where the full text is obtainable, or from a secondary summary of a study is a validation failure. If the primary record cannot be located, the row is not created.
- **X2 — The effect is recorded as reported, never as spin.** `effect_estimate` captures the study's own measure, value, dispersion (CI/SD/IQR) and comparator. The word "significant," "improved," "boosted" or "transformed" may never stand in for a number. If the study reports no usable effect size, `effect_estimate` is `not_reported` and the row is flagged — it is never invented, back-calculated without basis, or upgraded to a number (`prd.md` §6 "effect sizes **when available**"; §14).
- **X3 — The outcome layer is inherited and never upgraded.** `outcome_layer` carries the TASK-024 §9.3 tag. A row whose measured outcome is L-ENG (app opens, sessions, streaks) may **not** be written up as adherence, automaticity or health benefit. Layer collapse is an automatic rejection (`prd.md` §1/§6; TASK-024 L4).
- **X4 — Certainty is earned, not asserted.** The GRADE certainty and the TASK-004 grade follow the *study design, risk of bias, and actual results* — never the journal's prestige, the citation count, the mechanism's popularity in apps, or a confident abstract (`prd.md` §3 "popularity … is not proof of clinical efficacy"; §4; TASK-004 L5).
- **X5 — Transferability is declared, not assumed.** Every row states `transferability_to_herrays` ∈ {direct, probable, uncertain, poor} with a one-line reason. A study in a non-midlife, non-female population may be extracted but may never be recorded as directly applicable. Transfer distance lowers relevance only (§8).
- **X6 — Harm is recorded orthogonally, never assumed absent.** `harm_assessment` is a required field for every row regardless of outcome layer (guilt, shame, compulsion, dependency, burden, over-tracking, dropout, adverse events). A study that reports a benefit with no harm measurement is tagged `harm_unassessed`, not `no_harm` (`prd.md` §5 streaks case, §6).
- **X7 — Absence is a first-class value, never silently filled.** Any field whose value the study does not supply is recorded as `not_reported` (study is silent) or `n/a` (field does not apply), never guessed, never left blank, never defaulted to a favourable value. A systematically missing field across many rows is a measurement note routed to the gap log (`prd.md` §13 Prompt 00 "Do not invent research").

---

## 3. Where this sits in the evidence chain

```
   TASK-024  literature search protocol
        │ included set (list of studies + PRISMA flow, each pre-tagged
        │ outcome_layer, transferability, provisional grade)
        ▼
   ┌───────────────────────────────────────────────────────────────┐
   │             THIS TABLE (TASK-025)   one row per study           │
   │  identity → intervention + BCT → PICO (pop/comp/duration)       │
   │   → outcome + layer + harm → effect estimate (as reported)      │
   │   → certainty (GRADE) + grade (TASK-004) + risk of bias         │
   │   → transferability_to_herrays → limitations → gap/contra route │
   └───────────────────────────────────────────────────────────────┘
        │ each row is / links an EVD (TASK-005)
        ▼
   TASK-030/031 capability mechanism records (evidence layer)
   TASK-018 app audits link efficacy claims here (never invent)
   TASK-009 experiments for outcomes the literature cannot reach
   TASK-029 triangulate vs. primary user evidence (preserve contradictions)
   TASK-033/036 safety gate & red-team (harm + certainty inputs)
   TASK-042/034 opportunity prioritization & capability scorecard
```

The table is the **join between the science and everything downstream that claims to rest on science.** Every efficacy claim later made about a HerRays mechanism must resolve, through an `evd_ref`, to a row here — or be labelled hypothesis/invention (TASK-004).

---

## 4. The extraction record — field dictionary

One **row** = one **study × outcome-layer result**. A single publication that reports results at two layers (e.g. adherence *and* a clinical measure) produces **two linked rows sharing a `study_ref`**, because certainty, effect and grade differ by outcome and the layers must never be merged (X3). Requirement markers: **M** mandatory · **C** conditionally mandatory (rule stated) · **O** optional.

### 4.1 Identity & linkage

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `ext_id` | M | `EXT-NNN` (zero-padded, immutable) | Stable row id. One per study×layer result. Never reused or renumbered. |
| `study_ref` | M | human-readable study key (first author + year + short title) | Rows from the same publication share this key; used to group multi-layer rows. |
| `evd_ref` | M | list of `EVD-NNN` (TASK-005) | ≥1 resolvable evidence record (DOI/PMID/trial-ID + access date live in the `EVD`, not here). X1. |
| `source_task` | M | `TASK-024` | Provenance: this row's study came from the TASK-024 included set. A study not in that set may not be extracted. |
| `prisma_id` | C | TASK-024 PRISMA record id | Mandatory once TASK-024 is run; links the row back to the screening decision that admitted it. |

### 4.2 Intervention & mechanism

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `intervention` | M | free text (structured) | What was actually delivered: the active ingredient(s), mode, and any technology. Describe the *intervention as tested*, not the app it resembles. |
| `bct_codes` | M | list of BCTTv1 codes (`#.#` + label, Michie et al., 2013) | Behaviour-change technique(s) coded against BCTTv1. ≥1 code, or the explicit value `uncodable` with reason. Codes are the *shared join key* to the TASK-018 audit and TASK-030 capability records. |
| `mechanism_hypothesized` | M | free text; tag framework (COM-B / SDT / Fogg / habit / impl-intention) | The hypothesized mechanism of action, labelled with its framework. Marked explicitly as the study's/our *hypothesis*, not a measured mediator, unless the study tested mediation (then cite it). |
| `comparator_arm_bct` | O | BCTTv1 codes or description | What the control/comparator arm received (supports fair effect interpretation). |
| `co_interventions` | C | free text | Mandatory if the arm bundled other active components; prevents attributing a bundle's effect to one BCT. |

### 4.3 PICO context — population, comparator, duration

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `population` | M | free text (structured: n, sex, age range/mean, health context, setting, country) | The studied sample as reported. Record sex/age explicitly — it drives transferability (§8). `not_reported` where the study is silent (X7). |
| `sample_size` | M | integer (analysed n) + enrolled n if different | The *analysed* n (per-protocol/ITT noted). Attrition recorded in `limitations`. `not_reported` never guessed. |
| `comparator` | M | one of: `no-intervention` / `waitlist` / `usual-care` / `active-control` / `attention-control` / `alternative-BCT` / `within-subject-pre-post` / `none-single-arm` / `not_reported` | What the effect is *relative to*. A within-subject or single-arm design is flagged here and caps certainty (§7). |
| `duration` | M | intervention length + total follow-up (value + unit) | Both the *dose period* and the *measurement horizon*. "12-week intervention, 6-month follow-up" — the two are distinct and both required. Short follow-up caps claims about maintenance/automaticity. |
| `setting` | O | free text | Delivery context (clinic, community, fully remote app, workplace). |

### 4.4 Outcome & harm

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `outcome_measured` | M | free text + measure instrument | The *specific* outcome and the instrument used (e.g. "device-measured MVPA minutes/week, ActiGraph"; "SRBAI habit-strength score"). Named instrument required where one exists. |
| `outcome_layer` | M | `L-ENG` / `L-ADH` / `L-AUT` / `L-CLIN` (TASK-024 §9.3) | The **lowest** layer the measurement actually reaches. Inherited from TASK-024, re-asserted here, never upgraded (X3). |
| `outcome_timing` | M | when measured relative to intervention end | Distinguishes end-of-intervention effect from maintenance. |
| `harm_assessment` | M | `measured` (+ what) / `harm_unassessed` / `harm_reported` (+ what) | Guilt, shame, compulsion, dependency, burden, over-tracking, dropout, adverse events. Absence of a harm measure is `harm_unassessed`, never `no_harm` (X6). |

### 4.5 Effect estimate (recorded as reported)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `effect_measure` | C | e.g. `MD` / `SMD` / `RR` / `OR` / `HR` / `d` / `%-change` / `event-rate` / `narrative` / `not_reported` | The *type* of estimate the study reported. Mandatory if any effect is reported. `narrative` only when the study genuinely reports no quantitative estimate. |
| `effect_value` | C | number(s) as reported | Point estimate(s). Mandatory if `effect_measure` ≠ `narrative`/`not_reported`. Transcribed from the paper, never computed beyond the paper without a documented, auditable method in `extractor_notes`. |
| `effect_dispersion` | C | 95% CI / SD / SE / IQR as reported | Mandatory wherever the study reports it. A point estimate with no dispersion is flagged (certainty-limiting). |
| `effect_direction` | M | `favours-intervention` / `favours-comparator` / `no-difference` / `mixed` / `not_estimable` | Plain-language direction relative to `comparator`. |
| `significance_as_reported` | O | p-value / "n.s." / Bayesian / CI-based, *as the study states it* | Recorded verbatim; **never** the sole content of the effect (X2). Statistical significance is not effect magnitude and is not clinical importance. |
| `effect_as_reported_quote` | O | short verbatim quote (within legal limits) + page/table ref | The study's own results sentence, so a reviewer can audit the transcription against our structured fields. |

### 4.6 Certainty & validity

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `risk_of_bias` | M | tool + judgement (`low` / `some-concerns` / `high` / `n/a`) | Assessed with a design-appropriate tool (Cochrane RoB 2 for RCTs; ROBINS-I for non-randomized; AMSTAR-2 for reviews). Tool named. |
| `certainty_grade` | M | GRADE: `high` / `moderate` / `low` / `very-low` (per outcome) | Certainty of evidence for *this row's outcome*, by GRADE. Downgraded for risk of bias, inconsistency, indirectness, imprecision, publication bias (reasons in `certainty_reasons`). This is outcome-specific, not study-wide. |
| `certainty_reasons` | C | free text | Mandatory whenever `certainty_grade` < `high`: which GRADE domain(s) and why. |
| `grade_efficacy` | M | TASK-004 `A`/`B`/`C`/`D` | Efficacy-axis grade (TASK-004 §4, multi-dimensional). For the mechanism's effect on *this outcome layer*. |
| `grade_relevance` | M | TASK-004 `A`/`B`/`C`/`D` | Relevance/transferability-axis grade to midlife women. Independent of `grade_efficacy` (X4/X5; `prd.md` §4). |
| `grade_confidence` | M | TASK-004 confidence vocabulary: `established` / `likely` / `indicative` / `speculative` | Meta-confidence in the extraction itself (clarity of reporting, single vs. replicated). Reuses TASK-004 §5 vocabulary, not redefined. |

> **Why two certainty constructs.** `certainty_grade` (GRADE) answers *"how much can we trust this effect on this outcome?"* — the methodological question. `grade_efficacy`/`grade_relevance` (TASK-004) place the study in the program's own A–D decision scale and, crucially, **separate efficacy from relevance** so a methodologically strong study in the wrong population cannot masquerade as strong evidence for HerRays. Both are required; they answer different questions and must not be collapsed (§7).

### 4.7 Transferability to HerRays

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `transferability_to_herrays` | M | `direct` / `probable` / `uncertain` / `poor` (TASK-024 §9.2) | How far the result applies to women in midlife using a consumer app. Rubric in §8. |
| `transferability_reason` | M | free text (one line) | *Why* — the population/context/delivery distance driving the judgement. `poor`/`uncertain` on an important question opens a `GAP`. |
| `herrays_relevant_outcome` | O | free text | The HerRays-relevant behaviour/outcome this evidence bears on (links to the mechanism/capability it will inform — TASK-030). |

### 4.8 Governance, limitations & routing

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `extractor_role` | M | role id (R02 / delegated) | Who extracted the row. |
| `checked_by` | C | role id ≠ `extractor_role` | Second-extractor/verifier. Mandatory for every `L-CLIN` row (R14 clinical reviewer) and every row feeding a non-compensable safety gate. No self-verification (separation of duties). |
| `extraction_date` | M | ISO date | When the row was extracted (for freshness/re-verification, TASK-005). |
| `limitations` | M | free text (non-empty) | Attrition, confounding, indirectness, conflicts of interest/funding, selective reporting, measurement weaknesses. Non-empty (X7). |
| `contradicts` | C | list of `EXT-NNN` | Mandatory if this row conflicts with another extracted row; opens a `CON` record (TASK-008). Contradictions are preserved, never averaged (`prd.md` §13 Prompt 06; TASK-008 G2). |
| `opens_gap` | C | `GAP-NNN` | Mandatory if the row establishes that an outcome layer (esp. L-CLIN) is unreached or transfer is poor on an important question (TASK-008 → candidate `EXP`, TASK-009). |
| `extractor_notes` | O | free text | Any computation performed on the study's numbers (with method), ambiguities, or judgement calls — so extraction is auditable. |

---

## 5. Controlled vocabularies (summary)

- **`outcome_layer`** — `L-ENG` engagement · `L-ADH` adherence/behavioural enactment · `L-AUT` automaticity · `L-CLIN` clinical/health outcome. (TASK-024 §9.3, verbatim. Harm is tracked orthogonally in `harm_assessment`.)
- **`comparator`** — `no-intervention` · `waitlist` · `usual-care` · `active-control` · `attention-control` · `alternative-BCT` · `within-subject-pre-post` · `none-single-arm` · `not_reported`.
- **`effect_measure`** — `MD` · `SMD` · `RR` · `OR` · `HR` · `d` · `%-change` · `event-rate` · `narrative` · `not_reported`.
- **`effect_direction`** — `favours-intervention` · `favours-comparator` · `no-difference` · `mixed` · `not_estimable`.
- **`risk_of_bias`** — tool + `low` · `some-concerns` · `high` · `n/a`.
- **`certainty_grade`** (GRADE) — `high` · `moderate` · `low` · `very-low`.
- **TASK-004 grades** — efficacy/relevance: `A` · `B` · `C` · `D`; confidence: `established` · `likely` · `indicative` · `speculative`.
- **`transferability_to_herrays`** — `direct` · `probable` · `uncertain` · `poor`.
- **`harm_assessment`** — `measured` · `harm_reported` · `harm_unassessed`.
- **Absence tokens** (any field) — `not_reported` (study silent) · `n/a` (field inapplicable). Never blank, never guessed (X7).

---

## 6. Effect-estimate recording rules (the anti-spin heart)

The single most common corruption of an evidence table is replacing *what a study found* with *how an abstract described it*. These rules make that structurally impossible.

1. **A number or `not_reported` — never an adjective.** `effect_estimate` requires `effect_measure` + `effect_value` + `effect_dispersion` + `effect_direction` *as reported*, or the honest value `not_reported`. "Significantly improved" alone is a validation failure (X2).
2. **Significance ≠ magnitude ≠ importance.** `significance_as_reported` is a separate, optional field. A p-value never substitutes for an effect size, and neither establishes clinical importance — that is a judgement recorded in `limitations`/`certainty_reasons`, not asserted.
3. **The comparator is part of the effect.** An effect is meaningless without `comparator`. A within-subject pre-post change and a between-group difference versus usual care are different claims and are tagged as such; single-arm "improvements" cap certainty (§7) and may never be reported as controlled efficacy.
4. **No back-calculation without an audit trail.** If an effect must be converted (e.g. to a standardized measure), the method and inputs are recorded in `extractor_notes`. Unconvertible or absent numbers stay `not_reported` — they are never estimated to fill the cell.
5. **Direction relative to benefit, with harm separate.** `effect_direction` describes the target outcome; a favourable behaviour effect does not license `no_harm` — harm is its own field (X6).
6. **One row per outcome layer.** A study's engagement effect and its clinical effect are *different rows* with *different certainty*; they are never combined into a single "the app worked" summary (X3).

---

## 7. Certainty: two instruments, deliberately kept separate

| Construct | Field | Question it answers | Scale | Set by |
|---|---|---|---|---|
| **Certainty of evidence** | `certainty_grade` | How much can we trust *this effect on this outcome*, methodologically? | GRADE: high / moderate / low / very-low | Risk of bias, inconsistency, indirectness, imprecision, publication bias |
| **Program evidence grade** | `grade_efficacy`, `grade_relevance` | Where does this study sit in HerRays' own A–D decision scale, *separately* for efficacy and for relevance to midlife women? | TASK-004 A / B / C / D (per axis) | TASK-004 rules applied to design + results + transfer distance |
| **Extraction confidence** | `grade_confidence` | How confident are we in the *extraction* (reporting clarity, replication)? | established / likely / indicative / speculative | TASK-004 §5 vocabulary |

They are kept separate on purpose (X4). A large, low-risk-of-bias RCT (`certainty_grade: high`) conducted entirely in young men gives `grade_efficacy: A` for the mechanism but `grade_relevance: C` for midlife women — and the program must see both. Collapsing them into a single "strong evidence" label is exactly the error `prd.md` §4 forbids ("Do not interpret a high grade on usability as a high grade on health impact"). **Engagement efficacy is never relevance to a health outcome.**

---

## 8. Transferability-to-HerRays rubric

The HerRays audience is **women in midlife, including the perimenopause–menopause transition** (`prd.md` §6). Most mechanism evidence will come from other populations; those studies are extracted but their reach is bounded explicitly.

| Judgement | Meaning | Typical basis |
|---|---|---|
| `direct` | Result applies with little adjustment | Sample is women in midlife (or includes a substantial, separately-reported midlife-women subgroup) in a comparable consumer/remote context. |
| `probable` | Likely to apply, minor caveats | Mixed-sex or adjacent-age adults, general healthy-population behaviour, delivery mode similar to a consumer app. |
| `uncertain` | May or may not apply | Different life-stage, disease-specific cohort, or clinic-delivered intervention whose transfer to a self-directed app is unclear. |
| `poor` | Should not be assumed to apply | Population or context far from the audience (e.g. young-adult men only, inpatient, acute clinical) with reason to expect the mechanism behaves differently. |

Rules: (a) the judgement is justified in `transferability_reason`; (b) transfer distance lowers `grade_relevance` only, never `grade_efficacy` (X5); (c) a `poor`/`uncertain` judgement on an *important* question is itself a finding — `opens_gap` → TASK-008 → candidate `EXP` (TASK-009); (d) a body of evidence that is high-certainty but uniformly `poor`/`uncertain` transfer is reported as *"effective in other populations; untested in ours,"* never as applicable to HerRays.

---

## 9. Forbidden values & validation-failure catalogue

A row exhibiting any of the following is **rejected at extraction audit** (not silently corrected):

**Structural**
1. Missing `ext_id`, `evd_ref`, `study_ref`, `source_task`, `outcome_layer`, or any other **M** field.
2. A study not present in the TASK-024 included set (`source_task` ≠ `TASK-024`, or no `prisma_id` once the search is run).
3. A blank cell anywhere — absence must be `not_reported` or `n/a` (X7).

**Effect / spin**
4. An adjective ("significant," "improved," "transformed") in `effect_estimate` with no `effect_measure`/`effect_value`, or no `comparator` (X2, §6).
5. An invented, back-calculated-without-audit, or rounded-up effect value; a point estimate presented as if it had dispersion it does not report.
6. A `significance_as_reported` value standing alone as the effect.

**Layer / claim**
7. `outcome_layer: L-ENG` described anywhere in the row as adherence, automaticity, or health benefit (X3, layer collapse).
8. An L-CLIN row without `checked_by` = clinical reviewer (R14).
9. A medical/clinical-benefit claim exceeding what the measured outcome and certainty support (flagged to R14/R15; `prd.md` §4 medical claims).

**Certainty / grade**
10. `certainty_grade: high` on a single-arm, `within-subject-pre-post`, or `high` risk-of-bias study.
11. A `certainty_grade` or grade justified by journal prestige, citation count, or popularity rather than design/results (X4).
12. `grade_efficacy` and `grade_relevance` collapsed into one value, or a high usability/engagement grade read as health-impact evidence (`prd.md` §4).

**Transfer / harm**
13. `transferability_to_herrays: direct` for a non-midlife, non-female sample without a separately-reported applicable subgroup.
14. `harm_assessment: no_harm` (not an allowed value) or any assumption of harmlessness where harm was unmeasured (X6).

**Integrity**
15. A fabricated or unlocatable study, participant, or result (`prd.md` §4/§14).
16. A hidden contradiction — a row conflicting with another without a `contradicts` link and `CON` record (X-contradiction; TASK-008 G2).

---

## 10. Entry & dual-extraction validation

Before a row is accepted into the table:

1. **Entry validation (V1–V8).** V1 all **M** fields present and from controlled vocabularies. V2 `evd_ref` resolves to an `EVD` with a working identifier + access date. V3 `source_task = TASK-024` and (once run) `prisma_id` present. V4 `effect_estimate` is a reported number-set or `not_reported`; no adjective-only effect; `comparator` present. V5 `outcome_layer` matches the measured outcome and is not upgraded. V6 `certainty_grade` consistent with `risk_of_bias`/design (no `high` on single-arm/high-RoB). V7 `grade_efficacy` and `grade_relevance` both present and distinct fields; relevance reflects `transferability_to_herrays`. V8 `harm_assessment` and `limitations` non-empty.
2. **Dual extraction.** A sample (≥20%, and **100% of L-CLIN rows**) is independently extracted by a second role; disagreements are reconciled and the reconciliation noted. L-CLIN rows require R14 sign-off (`checked_by`).
3. **Layer & claim audit.** The behavioral scientist (R02) and product analyst (R09) confirm no row's prose over-reaches its `outcome_layer` or certainty.
4. **Transfer audit.** `transferability_to_herrays` judgements are spot-checked against `population`; `poor`/`uncertain` on important questions have opened a `GAP`.
5. **Gate linkage.** The table feeds Gate 1 (research foundation) and Gate 2 (opportunity readiness); "polished unsupported reports do not pass" (`prd.md` §11). A row is complete only if its claims are traceable and its method reproducible (`prd.md` §14).

---

## 11. Sample row — synthetic, clearly labelled (acceptance-criteria demonstration)

> **⚠ ILLUSTRATIVE / SYNTHETIC — NOT A REAL STUDY OR RESULT.** The following row demonstrates the schema's format using a **fictitious study** and `*-SYNTH-*` identifiers. The author, numbers, effect size and confidence interval below are **invented for format demonstration only** and **must never be cited as evidence**. No real publication has been extracted. Per X2/X7 the row also shows how a *second, co-reported* outcome at a different layer is held as a **separate row** and how an unreached layer opens a gap.

**Row `EXT-SYNTH-001`** (behavioural-enactment result)

```yaml
# IDENTITY & LINKAGE
ext_id: EXT-SYNTH-001
study_ref: "Synthetic-Author 20XX — if-then planning for daily walking (SYNTHETIC)"
evd_ref: [EVD-SYNTH-204]            # resolvable DOI/PMID lives in the EVD (TASK-005)
source_task: TASK-024
prisma_id: PRISMA-SYNTH-included-017

# INTERVENTION & MECHANISM
intervention: "Self-directed smartphone prompt asking users to write an if-then plan
  (implementation intention) for a daily 10-minute walk; weekly plan review."
bct_codes: ["1.4 Action planning", "1.1 Goal setting (behavior)"]   # BCTTv1 (Michie 2013)
mechanism_hypothesized: "Implementation intentions create a cue-response link that
  automates initiation (impl-intention framework; Gollwitzer). HYPOTHESIS — mediation not tested."
comparator_arm_bct: "Goal-setting only, no if-then plan"
co_interventions: n/a

# PICO CONTEXT
population: "n=240 analysed (260 enrolled); community adults; 62% women; mean age 41
  (range 24–58); mixed-sex; one country; fully remote app. (SYNTHETIC)"
sample_size: "240 analysed (ITT); 260 enrolled"
comparator: active-control
duration: "6-week intervention; 12-week follow-up"
setting: "Fully remote consumer app (SYNTHETIC)"

# OUTCOME & HARM
outcome_measured: "Days/week target walk performed, self-reported diary (behavioural enactment)"
outcome_layer: L-ADH
outcome_timing: "End of 6-week intervention; repeated at 12 weeks"
harm_assessment: "harm_unassessed — no guilt/burden/dropout-reason measure reported"

# EFFECT ESTIMATE (as reported — SYNTHETIC numbers)
effect_measure: MD
effect_value: "+1.2 days/week"
effect_dispersion: "95% CI 0.4 to 2.0"
effect_direction: favours-intervention
significance_as_reported: "p = 0.004 (as reported)"
effect_as_reported_quote: "'participants in the planning arm walked 1.2 more days/week
  than controls (95% CI 0.4–2.0)' — SYNTHETIC, Table 2, p.X"

# CERTAINTY & VALIDITY
risk_of_bias: "Cochrane RoB 2: some-concerns (self-report outcome; 8% attrition)"
certainty_grade: moderate
certainty_reasons: "Downgraded one level for risk of bias (unblinded, self-reported outcome);
  not downgraded for imprecision (CI excludes null)."
grade_efficacy: B            # single RCT, credible but limited (TASK-004)
grade_relevance: C           # mixed-sex, mean age 41, midlife/menopause subgroup not reported
grade_confidence: likely     # TASK-004 §5 vocabulary

# TRANSFERABILITY TO HERRAYS
transferability_to_herrays: uncertain
transferability_reason: "Mixed-sex sample, mean age 41, no separately-reported midlife-women
  subgroup; perimenopausal context untested."
herrays_relevant_outcome: "Daily-activity initiation mechanism (feeds capability record, TASK-030)"

# GOVERNANCE, LIMITATIONS & ROUTING
extractor_role: R02
checked_by: R07              # second extractor (not an L-CLIN row, so R14 not mandatory here)
extraction_date: 2026-11-22
limitations: "Self-reported outcome (no device measure); 8% attrition; single country;
  harm not assessed; mediation of the hypothesized mechanism not tested."
contradicts: []
opens_gap: GAP-SYNTH-031     # L-CLIN (health outcome) NOT reached by this study; and transfer
                             # to midlife women untested → candidate EXP (TASK-009)
extractor_notes: "No back-calculation performed; effect transcribed directly from Table 2.
  A co-reported app-engagement outcome (session count) is NOT merged here — it would be a
  separate L-ENG row and may not be read as behaviour change (X3)."
```

**Validation trace (why `EXT-SYNTH-001` passes V1–V8).**
- **V1** all **M** fields present, controlled vocabularies respected. ✔
- **V2** `evd_ref: [EVD-SYNTH-204]` points at a (synthetic) `EVD` carrying the resolvable identifier + access date. ✔
- **V3** `source_task: TASK-024`, `prisma_id` present — the study came from the included set. ✔
- **V4** `effect_estimate` is a reported number-set (`MD +1.2 days/week, 95% CI 0.4–2.0`), `comparator: active-control` present; no adjective-only effect (X2, §6). ✔
- **V5** `outcome_layer: L-ADH` matches a *behaviour-enactment* measure (days performed), not upgraded to automaticity or health; the co-reported engagement outcome is explicitly held back as a separate L-ENG row (X3). ✔
- **V6** `certainty_grade: moderate` is consistent with `some-concerns` RoB and a single RCT — not `high` (X4). ✔
- **V7** `grade_efficacy: B` and `grade_relevance: C` are **distinct** and relevance reflects `transferability_to_herrays: uncertain` (X5; `prd.md` §4). ✔
- **V8** `harm_assessment` (`harm_unassessed`, not `no_harm`) and `limitations` non-empty (X6/X7). ✔

**What the row deliberately refuses to do.** It does **not** claim the mechanism improves a *health outcome* (no L-CLIN measure exists → `opens_gap`); it does **not** record the engagement outcome as behaviour change; it does **not** mark harm absent because it was unmeasured; and it does **not** call the evidence applicable to midlife women. These refusals are the point of the schema.

---

## 12. Derived views (read-only, generated from the table)

To be generated by filtering/aggregating the rows — never hand-authored, never aggregated across outcome layers (X3):

- **Mechanism × outcome-layer matrix** — for each BCT/mechanism, the count and best certainty of rows at each of L-ENG/L-ADH/L-AUT/L-CLIN. Makes "popular but only engagement-evidenced" mechanisms visible at a glance.
- **Transfer map** — mechanisms by `transferability_to_herrays`, surfacing the "effective elsewhere, untested in our audience" set (candidate `GAP`/`EXP`).
- **Harm register slice** — rows with `harm_reported`, and the `harm_unassessed` gap for any mechanism HerRays may adopt (feeds TASK-033/036).
- **Contradiction view** — `contradicts` links rendered as pairs for TASK-008 adjudication (preserved, never averaged).
- **Certainty ladder** — rows by `certainty_grade` × `grade_efficacy`, for the Gate 1/2 reviewer.

Each view is a *lens on the same rows*; none introduces a value not in a row, and none merges layers or averages contradictions.

---

## 13. Dependencies, open unknowns, and change log

### 13.1 Dependencies (directional)
- **Upstream:** TASK-024 (included set + PRISMA flow, pre-tagged layer/transfer/provisional grade) · TASK-004 (A–D scale, efficacy/relevance/confidence split, confidence vocabulary) · TASK-005 (`EVD` storage contract) · TASK-018 (BCTTv1 coding discipline).
- **Downstream:** TASK-030/031 (capability evidence layer) · TASK-009 (experiments for unreached outcomes) · TASK-029 (triangulation vs. users) · TASK-033/036 (safety & red-team) · TASK-042/034 (prioritization & scorecard) · TASK-008 (gaps & contradictions).

### 13.2 Open unknowns (explicitly unresolved, not guessed)
- **Risk-of-bias tool per design** — RoB 2 / ROBINS-I / AMSTAR-2 named here as the intended instruments; the exact mapping for mixed-methods or N-of-1 designs is deferred to first use and flagged for R02/R14.
- **Dual-extraction fraction** — set at ≥20% (and 100% of L-CLIN) as a proposed default; the final fraction depends on the real included-set size from TASK-024 and reviewer capacity.
- **Midlife-women subgroup threshold** — what counts as a "substantial, separately-reported" subgroup for a `direct` transfer judgement is a judgement call to be calibrated by R02/R07 against the first batch; recorded as an open question, not fixed numerically here.
- **`EVD`-to-row cardinality** — the many-to-many detail (one publication → multiple rows; one row → multiple `EVD`) is owned by TASK-005's join; this table only references it.

### 13.3 Change log
- **v0.1 (2026-11-22)** — Initial extraction-table schema. Field dictionary (§4), controlled vocabularies (§5), effect-recording rules (§6), the two-certainty model (§7), transferability rubric (§8), forbidden-value catalogue (§9), validation (§10), one synthetic worked row with validation trace (§11), derived views (§12). No study extracted; no effect estimate recorded.

---

## Acceptance-criteria crosswalk (for the reviewer)

| Acceptance criterion | Where satisfied |
|---|---|
| Fields for **intervention** | §4.2 `intervention`, `co_interventions` |
| **BCT** | §4.2 `bct_codes` (BCTTv1, Michie 2013) |
| **population** | §4.3 `population`, `sample_size` |
| **comparator** | §4.3 `comparator` (controlled vocabulary) + §4.2 `comparator_arm_bct` |
| **duration** | §4.3 `duration` (dose period + follow-up horizon) |
| **outcome** | §4.4 `outcome_measured` + `outcome_layer` (4-layer taxonomy) + `outcome_timing` |
| **effect estimate** | §4.5 full block (`effect_measure`/`value`/`dispersion`/`direction`) + §6 anti-spin rules |
| **certainty** | §4.6 `certainty_grade` (GRADE) + TASK-004 grades; §7 two-instrument model |
| **transferability to HerRays** | §4.7 `transferability_to_herrays` + reason; §8 rubric |
| **a sample row** | §11 `EXT-SYNTH-001`, clearly labelled synthetic, with a V1–V8 validation trace |
| Independently reviewable, clearly labelled | Header block, §0 no-fabrication statement, this crosswalk |
| No fabricated research observations or test results | §0 no-fabrication statement; only populated artifact is the labelled synthetic row (§11); frameworks cited by name only |
