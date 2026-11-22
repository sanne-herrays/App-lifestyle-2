# HerRays App-Review Sampling Protocol

**Deliverable:** TASK-013 — Design the app-review sampling protocol
**Workstream:** Competitive Intelligence (WS01)
**Version:** 0.1 · **Status:** Proposed — protocol defined, no review yet sampled or coded
**Owner (accountable role):** Product / market lead (WS01), under Program Director custody
**Reviewers:** Product analyst / growth specialist · UX researcher · ASO/App Store specialist · Privacy/regulatory reviewer · Program Director
**Source basis:** `prd.md` §4 (Evidence Library `EVD-001`, source handling, no-fabrication rule, "several hundred sampled public reviews stratified by rating, recency and version"), §5 Phase 1 ("Sample reviews by rating/date/version, code themes with independent agreement checks on a subset. Do not infer retention from reviews or downloads."), §11 Gate 1 (research-foundation gate), §13 Prompt 01 ("Sample reviews across ratings, recency and versions … coded dissatisfaction themes")
**Depends on:** TASK-004 (evidence grading) · TASK-005 (`EVD` schema) · TASK-006 (`APP` registry — supplies the five subjects + `app_version` field) · TASK-011 (listing/pricing capture — supplies observed version history)
**Feeds:** TASK-014 (review coding worksheet — consumes this protocol's sampled set and coding categories) · TASK-012 (feature matrix — dissatisfaction themes become `EVD` pointers) · TASK-008 (gap/contradiction log) · TASK-041/042 (Opportunity Atlas)

---

## 0. How to read this document

This document is the **sampling protocol** named in `prd.md` §5 Phase 1 ("Sample reviews by rating/date/version") and §13 Prompt 01 ("Sample reviews across ratings, recency and versions … coded dissatisfaction themes"). It is a **method**, not a dataset. It specifies *how* public App Store / Google Play reviews for the benchmark apps will be drawn, de-duplicated, and prepared for coding, so that the resulting sample is **representative on declared axes, reproducible by a second analyst, and defensible at Gate 1**.

It does two separable things:

1. **Defines the sampling frame and draw procedure** (§4–§7) — stratification by rating, recency and app version; target sample size with its justification; a deterministic, seeded draw that a second person can re-run and get the same set.
2. **Defines deduplication rules (§8) and the coding category scheme (§9)** that hand off to the review coding worksheet (TASK-014). This protocol *produces a sampled, de-duplicated, coding-ready set of review records*; TASK-014 *codes* them.

> **No-fabrication statement.** This document contains **no review data and no coded findings**. It does not quote, summarise, count, or characterise any real user review of any real app, because no sampling run has been executed. No star-rating distribution, review volume, sentiment split, complaint frequency, or theme prevalence is asserted for any benchmark app. Every number in this protocol is either (a) a **design parameter** (e.g. a target sample size, a stratum quota, a confidence level) explicitly labelled as a planning choice, or (b) part of a **clearly-labelled synthetic worked example** (§10) that uses fictitious `*-SYNTH-*` identifiers and invented review text solely to prove the procedure runs. Nothing here may be cited as evidence about a real product. When the protocol is executed, each sampled review becomes an `EVD` record (TASK-005) graded no higher than **C** (public user report; `prd.md` §4), and no retention, CAC, LTV, or efficacy figure may be inferred from it (`prd.md` §5 Phase 1).

**Scope boundary — what this task is and is not.**
- **TASK-013 (this document) = the sampling design + draw procedure + dedup rules + coding scheme.** It answers *"which reviews do we read, how do we pull them reproducibly, and into what categories will they be coded?"*
- **It is not the coding worksheet or the coded data.** The per-review coding fields, worked records, and inter-rater agreement *instrument* are TASK-014. This protocol defines the category **list** and the agreement-check **design**; TASK-014 operationalises the worksheet and TASK-014/the analyst applies it.
- **It is not the commercial-estimates template.** Download/revenue/ranking estimates are TASK-015; this protocol forbids deriving any such figure from reviews (§3, R5).
- **It is not the feature matrix or the teardown.** Observed feature behaviour comes from WS02 `JRN` records (TASK-012/016–023). A review *claim* about a feature is a reported signal (grade C), never an observation of the feature itself (§3, R3).
- **It does not select or design HerRays features** (`prd.md` §13 Prompt 01: "Do not design HerRays features yet").

---

## 1. Purpose

Public reviews are the cheapest, largest, and most **biased** evidence source WS01 can touch. People who write store reviews are disproportionately the delighted and the furious; reviews skew to the first days of use, cluster after a disruptive update, and are polluted by incentivised prompts, bots, and translations. Read naïvely — "I scrolled the one-star reviews and users hate the paywall" — they manufacture confident, wrong conclusions and fail Gate 1's bar that "polished unsupported reports do not pass" (`prd.md` §11).

This protocol exists to convert that biased stream into **admissible, grade-C qualitative evidence** by doing five things:

1. **Make the sample representative on declared axes.** Stratify by rating, recency and app version (`prd.md` §4) so the sample is not dominated by whatever the store's default "Most Helpful" sort surfaces, and so low-frequency-but-important segments (e.g. recent one-star reviews after a version change) are not drowned out.
2. **Make the draw reproducible.** A second analyst, given the same frame and the same seed, must obtain the same review set (§7). Reproducibility is the difference between evidence and anecdote.
3. **Make coverage and its limits visible.** Record what was reachable, what the store API/UI capped, which locales and versions were in scope, and what therefore cannot be claimed (§6, §11). An unreachable stratum is logged as a gap (TASK-008), never silently skipped.
4. **Separate signal types.** A review can report a *feeling*, a *behaviour*, a *feature claim*, or a *price complaint*; the coding scheme (§9) keeps these apart so that "users are frustrated" is never upgraded into "the feature does not work" or "retention is low."
5. **Protect people.** Reviews are public but written by identifiable humans. The protocol minimises stored personal data, excludes special-category health disclosures from quotation, and respects platform terms and copyright (§2, R6).

---

## 2. Three non-negotiables (anti-fabrication + ethics guards)

These four-way guards are structural; a sampling run that violates any one is rejected at entry, not patched afterward.

- **S1 — No coded finding without a sampled, stored source record.** Every claim that ever leaves this workstream ("N% of recent reviews mention X") must trace to a concrete set of `EVD`-backed review records drawn by this protocol, with the frame, seed, capture date, and store/locale recorded. A theme asserted from memory, from "reviews I've seen", or from an aggregator's pre-summarised sentiment is inadmissible (R1).
- **S2 — The store sort is not the sample.** Reviews must be drawn into declared strata (§4), never by reading from the top of the store's default/"Most Helpful"/"Most Recent" ordering and stopping when tired. Convenience reading is the single most common way review analysis fabricates a distribution; it is forbidden (R2). Where the platform only exposes a capped or sorted feed, that cap is recorded as a coverage limit (§6) and the stratum is marked under-filled, not quietly completed.
- **S3 — Volume is not proof, and reviews are not analytics.** A theme's prevalence *within this stratified qualitative sample* is a description of the sample, graded **C** and reported with its denominator; it is never generalised to "most users", never converted into retention / churn / CAC / LTV / conversion, and never treated as efficacy (`prd.md` §4, §5 Phase 1). Rating averages shown in the store are the platform's own aggregate, logged as a secondary datum with its capture date — not recomputed from our sample and presented as the app's "true" rating (R4, R5).

**Ethics & legal guard (R6, applied throughout):** reviews are quoted as short excerpts within fair-use/platform limits, never scraped wholesale; reviewer handles/display names are pseudonymised to a `rev_id` on capture and **not** stored in deliverables; any review disclosing special-category health information is coded but **not quoted verbatim** in shared artifacts (privacy/regulatory reviewer sign-off per the TASK-040 boundary). No platform term-of-service circumvention; where automated access is disallowed, manual capture under the §7 procedure is used and the method is recorded.

---

## 3. Review record contract (what one sampled review becomes)

Each sampled review is stored as one record and, on acceptance, promoted to an `EVD` record (TASK-005, `type: reported`, grade ≤ C). The protocol defines the record so that dedup (§8) and coding (§9, TASK-014) have stable fields to operate on.

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `rev_id` | id | M | `REV-<APP>-<NNNN>`, e.g. `REV-APP-002-0137`. Deterministic, unique. Replaces the reviewer's handle (S-R6 pseudonymisation). |
| `app_id` | ref | M | `APP-001`…`APP-005` (TASK-006). |
| `store` | enum | M | `apple_app_store` / `google_play`. Platform of origin (distributions differ; never pooled without declaring it). |
| `locale` | string | M | Storefront + language, e.g. `US/en`, `NL/nl`. From the frame (§5.3). |
| `rating` | int | M | 1–5 stars as shown. The stratification key (§4.1). |
| `review_date` | date | M | Posted date as shown by the store (used for the recency stratum, §4.2). |
| `app_version` | string | C | Version the review is attributed to **if the store exposes it**; else literal `unknown` (never inferred from `review_date`). Drives the version stratum (§4.3). |
| `title` | string | O | Review title/headline if present. Stored for dedup + coding; excerpted, not republished. |
| `body_excerpt` | string | M | The review text, captured within fair-use limits; the unit of coding. |
| `lang_detected` | string | C | Detected language; translation handling per §5.4. |
| `helpful_count` | int | O | Platform "helpful"/up-vote count if shown, with capture date. Descriptive only — **never** a sampling weight (would re-introduce the popularity bias S2 removes). |
| `developer_response` | bool | O | Whether a developer reply is attached (a coding signal for responsiveness; TASK-014). |
| `capture_date` | date | M | ISO date the review was captured (the `EVD` access date). |
| `source_ref` | string | M | Deep link / store URL / screenshot artifact id backing the record (S1). |
| `dup_group` | id | C | Cluster id assigned by dedup (§8); `none` until dedup runs. |
| `in_analysis_set` | bool | M | `true` once the record passes dedup + validation and enters the coding set; `false` for duplicates/rejects (kept, not deleted). |
| `exclusion_reason` | enum | C | If `in_analysis_set = false`: `duplicate` / `off_topic` / `bot_suspected` / `incentivised` / `untranslatable` / `tos_restricted` (§8.3). Mandatory when excluded. |
| `owner_role` | role | M | Accountable analyst (default: Product / market lead). |

> A review record is a **graded claim container**, not a fact. It inherits every TASK-004/005 obligation (source, date, confidence, limitation). The *content* of a review is a user's report, grade C at best; its mere existence does not make its claim true.

---

## 4. Stratification design (the acceptance-criteria core)

The sample is drawn across the **cross-product of three declared strata** — rating × recency × version — per app, per store, per locale. Stratification guarantees that each analytically important cell is represented regardless of its natural frequency, which is exactly what reading the store's default sort cannot do.

### 4.1 Stratum A — Rating (5 levels)

| Level | Rating | Why it is a stratum |
|---|---|---|
| A1 | ★☆☆☆☆ (1) | Dissatisfaction detail — the richest source of friction/cancellation signal (`prd.md` Prompt 01 "coded dissatisfaction themes"). Over-sampled relative to natural frequency *by design*, with the over-sampling declared. |
| A2 | ★★☆☆☆ (2) | Mixed-negative: usable product, specific blockers. Often the most actionable. |
| A3 | ★★★☆☆ (3) | Ambivalence / conditional value — "good but…" trade-offs. |
| A4 | ★★★★☆ (4) | Satisfied-with-caveats; feature requests. |
| A5 | ★★★★★ (5) | Delight drivers + incentivised-prompt contamination risk (flagged in dedup, §8.3). |

**Rating is captured but the draw is quota-balanced, not proportional.** Store rating distributions are heavily right-skewed (most reviews are 5★); a proportional sample would starve A1–A3 where the actionable intelligence lives. We therefore set **minimum per-rating quotas** (§5.2) so each rating level is analysable, and we record the **observed store distribution separately** (as a descriptive datum, S3/R4) rather than letting it drive the sample. The gap between "what we sampled" and "the store's natural mix" is stated explicitly in every output so prevalence is never misread as representativeness of the whole user base.

### 4.2 Stratum B — Recency (4 windows)

Anchored to the **capture date** (`T₀`), not to an absolute calendar, so the protocol stays reproducible whenever it is run.

| Level | Window (relative to `T₀`) | Why it is a stratum |
|---|---|---|
| B1 | 0–3 months | Current experience; reflects the live build + current paywall. |
| B2 | 3–6 months | Recent but settled; post-honeymoon signal. |
| B3 | 6–12 months | Medium-term; surfaces durability complaints. |
| B4 | 12–24 months | Historical baseline; lets us see whether a complaint is old-and-fixed vs. persistent. |

Reviews older than 24 months are **out of frame by default** (recorded as `out_of_window`, not sampled) because they are unlikely to describe the current product; the window is a declared parameter and can be widened for an app with very low review volume (logged as a frame change, §11). Recency interacts with version (§4.3): a complaint concentrated in one window but spanning several versions reads very differently from one that vanished after a specific update.

### 4.3 Stratum C — App version (store-dependent)

Where the store attributes reviews to a version, the sample is additionally balanced across the **version bands observed in TASK-011's version history**:

| Level | Version band | Purpose |
|---|---|---|
| C1 | Current major/minor (latest observed) | What a prospective user downloads today. |
| C2 | Previous 1–2 minor versions | Catches regressions and "the update broke X" clusters. |
| C3 | Older in-window versions (aggregated) | Baseline; distinguishes transient from chronic issues. |
| C0 | `version unknown` | Google Play / older Apple reviews often omit version. **Kept as its own band — never back-filled by guessing from the date** (S2/R2). |

**Version stratification is conditional.** If a store does not expose per-review version (common on the Apple App Store for older reviews, and variably on Google Play), the version stratum collapses to `{C-known, C0-unknown}` and the limitation is recorded (§6). We never invent a version attribution to fill C1–C3 — an un-attributable review lives honestly in C0.

### 4.4 The stratification grid

The sampling frame per (app × store × locale) is the cross-product **A(5) × B(4) × C(≤4)**. Each occupied cell carries a target quota (§5.2). Cells that are empty in the population (e.g. no 1★ reviews in the 0–3-month window for a given version) are recorded as **structurally empty** (a finding in itself — e.g. "no recent low ratings on the current build"), distinct from **under-filled** (reviews exist but the store feed capped our reach) and **unassessed** (not yet drawn). These three states mirror the honesty split used across WS01 and prevent a coverage hole from masquerading as a market signal.

---

## 5. Target sample size and quotas

### 5.1 How the target is justified (not plucked)

`prd.md` §4 sets the planning target at "several hundred sampled public reviews stratified by rating, recency and version". Qualitative theme analysis does not need a statistically-powered sample; it needs enough per cell to reach **thematic saturation** (new reviews stop producing new codes). Two anchors set the floor:

- **Per-cell saturation:** qualitative-coding practice treats ~10–15 well-chosen items per analytic cell as the point where marginal new themes flatten for that cell. With 5 rating levels as the primary analytic axis, that implies a working floor of **~50–75 reviews per app** to saturate the rating axis alone, before recency/version refinement.
- **Program-level target:** to meet the PRD's "several hundred" across the five core apps while keeping the recency/version cells analysable, we set a **planning target of ~100 reviews per core app → ~500 across the five core apps**, with a declared acceptable range of **80–120 per app** depending on reachable volume.

> These are **planning parameters**, not results. The actual achieved sample size per cell will be whatever the reproducible draw (§7) yields within store caps, and the shortfall against target in any cell is reported, not hidden (S2). Thematic saturation is assessed empirically during coding (TASK-014); if a cell is still producing new codes at its quota, the quota is raised and the frame change logged (§11).

### 5.2 Default per-app quota matrix (planning targets)

Target ≈ 100 reviews/app, allocated to protect the actionable cells. Quotas are **minima to attempt**, capped by reachable population:

| Rating | 0–3 mo (B1) | 3–6 mo (B2) | 6–12 mo (B3) | 12–24 mo (B4) | Row target |
|---|---|---|---|---|---|
| 1★ (A1) | 8 | 5 | 5 | 2 | 20 |
| 2★ (A2) | 6 | 4 | 4 | 2 | 16 |
| 3★ (A3) | 5 | 4 | 3 | 2 | 14 |
| 4★ (A4) | 6 | 4 | 4 | 2 | 16 |
| 5★ (A5) | 12 | 8 | 8 | 6 | 34 |
| **Col target** | **37** | **25** | **24** | **14** | **100** |

Within each (rating × recency) cell, the allocation is spread across the applicable version bands (§4.3) proportionally to reachable version volume, with C0 (`unknown`) taking whatever is un-attributable. The matrix deliberately **over-weights 1★–2★ relative to the store's natural skew** (dissatisfaction is the priority signal) while still sampling 5★ heavily enough to characterise delight drivers and detect incentivised-prompt contamination. The **recency weighting leans recent** (62% in the 0–6-month half) because current-build signal is most decision-relevant.

### 5.3 Locale / storefront scope

Default scope for the first run: **`US/en` + `NL/nl`** (HerRays' provisional primary geographies, consistent with the TASK-010 editorial geo scope), per store where the app is published. Locale is a declared frame parameter, not pooled silently — US and NL review cultures and volumes differ, so cells are filled per locale and only combined in reporting with the split stated. Additional locales are an explicit frame extension (§11), justified by where HerRays will launch.

### 5.4 Language & translation handling

Non-target-language reviews within an in-scope locale are: (a) language-detected (`lang_detected`), (b) machine-translated for screening only, (c) coded **only if** the translation is confident enough to preserve meaning, else excluded as `untranslatable` (§8.3) with the original retained. Translated text is flagged so no coded nuance is over-trusted; translation is a known confidence-reducer and is noted on the `EVD` limitation field.

---

## 6. Coverage ledger (what the run could and could not reach)

Every execution produces a coverage ledger recording, per (app × store × locale × cell): **target quota, reachable population estimate, achieved count, fill state** (`filled` / `under_filled` / `structurally_empty` / `unassessed`), and the **access limitation** if under-filled (`api_cap` / `sort_only_feed` / `pagination_limit` / `region_locked` / `version_not_exposed` / `tos_restricted`). The ledger is the honest record of representativeness and is a required Gate 1 artifact (`prd.md` §11: "unknowns and access limitations documented"). Any `under_filled` cell on a decision-critical signal opens a `GAP` record (TASK-008).

---

## 7. Reproducible sampling instructions (the draw procedure)

A second analyst following these steps with the same frame and seed must obtain the same analysis set. The procedure is written to run with or without API access.

**Inputs required before starting:** the `APP` registry row (TASK-006), the observed version history (TASK-011), the declared frame (apps, stores, locales, windows, quotas from §4–§5), and a fixed integer **random seed** chosen and recorded for the run (e.g. `seed = 20261122`).

1. **Freeze the frame.** Record `T₀` (capture date), the app set, stores, locales, recency windows (resolved to absolute dates from `T₀`), version bands (from TASK-011), and the quota matrix (§5.2). Write these to the run header **before** touching the store. Freezing first prevents post-hoc frame-tweaking to fit a desired conclusion.
2. **Enumerate the reachable population per cell.** For each (app × store × locale), page through the store's review feed capturing *all* reachable reviews' metadata (`rating`, `review_date`, `app_version` if exposed, `rev_id` surrogate, `source_ref`) into a candidate frame — **not** the bodies yet. Record the feed's sort and any pagination/API cap hit. If only a sorted/capped feed is available, capture the maximum reachable and mark affected cells `under_filled` (§6). Do **not** stop early because a cell "looks" full.
3. **Assign each candidate to exactly one cell** by its rating (A), its `review_date` vs. `T₀` (B), and its `app_version` band (C; `unknown → C0`). Candidates outside all windows → `out_of_window`, retained but not drawn.
4. **Deterministic draw within each cell.** For each cell, sort candidates by a reproducible key and draw the cell's quota using the recorded seed: compute `h = SHA1(seed || rev_id)` for every candidate, sort ascending by `h`, take the first *quota* candidates. Same seed + same candidate list ⇒ identical draw, with no dependence on store ordering (this is what makes step 2's "capture all metadata first" necessary). If a cell has fewer candidates than its quota, take all and mark `under_filled`.
5. **Capture the drawn reviews' content.** For the drawn `rev_id`s only, capture `title` + `body_excerpt` (within fair-use limits), `helpful_count`, `developer_response`, `lang_detected`, and the `source_ref`. Pseudonymise the handle to `rev_id` on capture (R6).
6. **Run deduplication (§8)** over the drawn set; assign `dup_group`, set `in_analysis_set`, and record `exclusion_reason` for anything dropped. Back-fill from the same cell's remaining candidates (next by `h`) to replace excluded duplicates/bots up to quota, logging each substitution.
7. **Promote to `EVD`.** Each `in_analysis_set = true` record becomes an `EVD` record (TASK-005, `type: reported`, grade ≤ C, with limitation noting self-selection + store-sort bias).
8. **Write the coverage ledger (§6)** and the run header (frame + seed + caps) to the deliverable. Hand the analysis set and the coding scheme (§9) to TASK-014.
9. **Record everything needed to re-run:** seed, `T₀`, frame, store feed caps, tool/UI used, and the candidate-frame export. Reproducibility is only real if the candidate frame is retained (store contents change over time; the seed alone cannot reproduce a draw against a moved population — so the frozen candidate frame is the reproducibility artifact).

> **Reproducibility caveat (recorded, not waved away).** Store review feeds are mutable and access-capped; a re-run at a later date against the live store will see a different population. Therefore the **retained candidate frame export** (step 2/9), not the live store, is the object a second analyst re-draws from to verify the draw. A fresh-store re-run reproduces the *method*, not the identical set, and is reported as such.

---

## 8. Deduplication rules

Review streams contain genuine duplicates (re-posts, cross-store echoes), near-duplicates (copy-paste campaigns, template complaints), and contamination (bots, incentivised prompts). Dedup protects the sample from a handful of loud or coordinated voices being counted as many independent signals.

### 8.1 Dedup unit and order

Dedup runs **within (app × store × locale)** first, then a **cross-store pass** flags the same text appearing on both Apple and Google (kept once, tagged `cross_store_echo`). Dedup never merges across apps (a template complaint about two different apps is two signals).

### 8.2 Match tiers

| Tier | Rule | Action |
|---|---|---|
| D1 — Exact | Identical normalised `body_excerpt` (trim, lowercase, collapse whitespace/punctuation) **and** same surrogate author | Hard duplicate → keep earliest `review_date`, others `exclusion_reason = duplicate`, same `dup_group`. |
| D2 — Near (text) | Normalised similarity ≥ 0.9 (token-set / Jaccard on shingles) across different authors | Suspected coordinated/template → cluster into one `dup_group`; keep a **representative** and mark the rest `duplicate` with a `campaign_suspected` note; the cluster's *size* is retained as a descriptive datum (not deleted). |
| D3 — Near (cross-store) | Same/near text across stores | Keep one, tag `cross_store_echo`; record on both so the echo is auditable. |
| D4 — Same author, multiple reviews | Same surrogate author, multiple distinct reviews over time | **Not** duplicates — kept (a user's trajectory is signal), but linked by `author_thread` so one person is not counted as independent corroboration of a theme. |

Similarity thresholds (0.9) are **declared parameters**, tuned on a labelled pilot subset (TASK-014's agreement check) and recorded; they are not silently changed mid-run.

### 8.3 Contamination exclusions (kept, not deleted)

Flagged on capture, excluded from `in_analysis_set`, retained with reason:
- `bot_suspected` — generic praise + off-pattern posting signature; conservative, dual-reviewer confirmed before exclusion.
- `incentivised` — text indicating a reward-for-review ("they gave me X to rate"); common in 5★ (A5) and a known store-rating inflator.
- `off_topic` — reviews of the wrong app, device complaints, or payment-platform gripes unrelated to the product.
- `tos_restricted` — content we are not permitted to store/quote.
- `untranslatable` — §5.4.

Every exclusion is counted in the coverage ledger so the *exclusion rate itself* (e.g. an unusually high `incentivised` share in 5★) becomes a reportable, grade-C observation about the app's review ecosystem — not a hidden act of cleaning.

---

## 9. Coding category scheme (hand-off to TASK-014)

This protocol defines the **category list and labelling rules**; TASK-014 builds the per-review worksheet, applies it, and runs inter-rater agreement. Categories are derived from `prd.md` Prompt 01 ("coded dissatisfaction themes"), the §5 Phase 1 themes, and the behavioral constructs in §6, so the codes connect cleanly to the capability and opportunity work downstream.

### 9.1 Primary code families (a review may carry several)

| Code | Family | Definition (coding rule) |
|---|---|---|
| **PRAISE** | Value delivered | What the reviewer says works / why they value it. Sub-tags: outcome, habit-stickiness, delight/joy, design, trust. |
| **FRICTION** | Usability pain | Concrete difficulty using the app (confusion, bugs, performance, notifications). Sub-tags map to the ten journeys (`prd.md` §5) where possible. |
| **ONBOARDING** | First-run experience | Setup, personalisation, first-value time, "too much before I could start". |
| **MOTIVATION/GUILT** | Behavioral-emotional | Streak pressure, shame after a missed day, all-or-nothing effects, feeling judged vs. supported (`prd.md` §6 anti-patterns; HerRays zero-guilt principle). A priority category for this project. |
| **PRICE/PAYWALL** | Monetisation | Cost complaints, paywall timing/hardness, trial/billing surprises, cancellation difficulty. Links to TASK-011 paywall record. |
| **CANCELLATION/CHURN-INTENT** | Exit signal | Stated intent to stop/stopped, and the *reason given*. **Coded as a reported reason only — never counted as an actual churn rate** (S3/R5). |
| **FEATURE-REQUEST** | Unmet need | What the reviewer wishes existed → candidate Opportunity Atlas input (TASK-041). |
| **FEATURE-CLAIM** | Reported capability | A claim that a feature does/doesn't exist or (mis)behaves → links to the feature matrix (TASK-012) as a grade-C *reported* signal, never as an observation (R3). |
| **PERCEIVED-VALUE** | Worth-it judgement | Whether the reviewer feels the app is worth the effort/money, independent of specific features. |
| **ACCESSIBILITY** | Inclusion | VoiceOver, Dynamic Type, contrast, cognitive load complaints (routes to the accessibility audit, TASK-022). |
| **TRUST/PRIVACY** | Confidence | Data concerns, health-claim scepticism, clinical-credibility signals. |

### 9.2 Required per-review attributes (coded alongside the families)

- **`sentiment`** — `positive` / `mixed` / `negative` (coder judgement, distinct from star rating, because text and stars often disagree — a disagreement that is itself a finding).
- **`intensity`** — `low` / `medium` / `high` (strength of the expressed feeling).
- **`specificity`** — `vague` / `specific` (a specific, reproducible complaint is worth more than a diffuse one; affects downstream weight, not sampling).
- **`journey_ref`** — which of the ten mandatory journeys (`prd.md` §5) the review touches, where identifiable.
- **`source_ref` / `rev_id`** — provenance (carried from §3).

### 9.3 Coding discipline

- **Mutually-visible, independently-applied.** The category list is shared; coding is done independently by two coders on an overlap subset to measure agreement (`prd.md` §5 Phase 1: "code themes with independent agreement checks on a subset"). The agreement statistic, its threshold, and reconciliation of disagreements are TASK-014's instrument; this protocol **requires** that a ≥ 20% overlap subset be double-coded and that disagreements be preserved (not averaged; `prd.md` Prompt 06), feeding TASK-008.
- **No code without text.** A code must point to the `body_excerpt` span that justifies it; a theme with no quotable basis is not coded.
- **Prevalence is sample-relative.** Any count is reported as "x of N coded reviews in [stratum/app]", with the stratification caveat, never as "x% of users."

---

## 10. Synthetic worked example (ILLUSTRATIVE — proves the procedure runs)

> **Everything in §10 is synthetic.** It uses a fictitious app `APP-SYNTH-Z` (not one of the five benchmarks), invented review text, and `*-SYNTH-*` identifiers. It exists only to demonstrate that stratification, the seeded draw, dedup, and coding execute correctly. **No real review of any real app is represented.**

**Frame (frozen):** `app_id: APP-SYNTH-Z`, `store: apple_app_store`, `locale: US/en`, `T₀ = 2026-11-22`, windows B1–B4 as §4.2, quota = the §5.2 matrix, `seed = 20261122`.

**Candidate enumeration (step 2):** suppose the reachable feed yields a candidate frame of synthetic size 412, with a feed cap hit at 500 (so: not cap-limited). Cell `A1 × B1 × C1` (1★, 0–3 mo, current version) has 54 candidates; its quota is a share of the 8 allocated to `A1×B1` across version bands — say 5 for C1.

**Deterministic draw (step 4):** compute `h = SHA1("20261122" || rev_id)` for all 54, sort ascending, take the first 5 → `REV-APP-SYNTH-Z-0007, -0041, -0088, -0102, -0190`. A second analyst with the same candidate frame + seed draws the identical five.

**Dedup (step 6):** `-0041` and `-0088` share normalised similarity 0.94 (D2) — clustered as `dup_group: DG-SYNTH-1`, `campaign_suspected`; `-0088` excluded (`duplicate`), `cluster_size: 2` retained as a datum; back-fill draws next-by-`h` `-0205` to restore quota, substitution logged.

**One coded synthetic record (hand-off shape for TASK-014):**

```yaml
rev_id: REV-APP-SYNTH-Z-0007        # SYNTHETIC
app_id: APP-SYNTH-Z                  # SYNTHETIC — not a benchmark app
store: apple_app_store
locale: US/en
rating: 1
review_date: 2026-10-30
app_version: "7.4.0"                  # exposed by store → band C1
body_excerpt: "[SYNTHETIC] Loved it for two weeks then missed one day and
  it reset my whole streak to zero. Felt awful, deleted it."
capture_date: 2026-11-22
source_ref: "synthetic://example/APP-SYNTH-Z/0007"
dup_group: none
in_analysis_set: true
# --- coding (TASK-014 applies; shown here to prove the scheme fits) ---
codes: [MOTIVATION/GUILT, CANCELLATION/CHURN-INTENT, FRICTION]
sentiment: negative
intensity: high
specificity: specific
journey_ref: J8_missed_day_recovery
evd_grade: C                          # reported user signal
limitation: "Self-selected reviewer; single report; streak-reset claim is a
  user perception, not an observed feature behaviour (needs JRN confirmation)."
```

**What this illustrates for the real run:** the `CANCELLATION/CHURN-INTENT` code captures a *stated reason*, not a churn rate (S3); the `MOTIVATION/GUILT` + `J8` tagging routes a zero-guilt-relevant signal straight to the capability/opportunity work; and `limitation` records that a feature *claim* (grade C) must be confirmed by a `JRN` teardown (TASK-012) before it is treated as fact (R3).

---

## 11. Dependencies, open unknowns, forbidden values, change log

### 11.1 Forbidden-value / validation-failure catalogue (entry-rejected)

| # | Rejected pattern | Rule violated |
|---|---|---|
| R1 | A coded theme with no stored, `EVD`-backed review set behind it | S1 |
| R2 | Sample drawn by reading the store's default/"Most Helpful" sort top-down | S2 |
| R3 | A review's feature claim rendered as an observed feature fact (no `JRN`) | S3 / M-series TASK-012 |
| R4 | Store's displayed rating average recomputed from our sample and presented as the app's "true" rating | S3 |
| R5 | Any retention / churn / CAC / LTV / conversion figure inferred from reviews | `prd.md` §5 Phase 1 |
| R6 | Reviewer handle stored in a deliverable, or special-category health text quoted verbatim, or ToS circumvented | Ethics guard |
| R7 | Prevalence reported as "% of users" rather than "x of N in [stratum]" | S3 |
| R8 | `app_version` inferred from `review_date` to fill a version cell | S2 / §4.3 |
| R9 | Duplicate/bot/incentivised records deleted rather than retained-with-reason | §8.3 |
| R10 | Frame or seed changed after enumeration to alter the resulting set | §7 step 1 |
| R11 | Under-filled cell reported as filled; access cap undocumented | §6 / Gate 1 |
| R12 | Synthetic example text presented anywhere as a real review | No-fabrication statement |

### 11.2 Dependencies
- **Consumes:** `APP` registry + `app_version` field (TASK-006); observed version history (TASK-011); `EVD` schema + grades (TASK-004/005).
- **Feeds:** review coding worksheet + agreement instrument (TASK-014); feature-matrix reported signals (TASK-012); gap/contradiction log (TASK-008); Opportunity Atlas (TASK-041/042); commercial estimates (TASK-015) **only** as a separate, non-derived source.
- **Governed by:** Gate 1 (`prd.md` §11); privacy/regulatory reviewer sign-off on the ethics guard (TASK-040 boundary).

### 11.3 Open unknowns (explicit, not invented)
- Actual per-store, per-locale review volume for each benchmark app — unknown until enumeration runs; quotas (§5.2) may be unreachable for low-volume apps and will be reported short, not back-filled.
- Whether the Apple App Store / Google Play expose per-review version for each app's history — determines whether stratum C is full (§4.3) or collapses to `{known, unknown}`.
- Final launch geographies — may extend the locale scope (§5.3) beyond `US/en + NL/nl`.
- The exact similarity threshold and agreement statistic/threshold — to be fixed on the TASK-014 pilot subset, then recorded here as a frame parameter.

### 11.4 Change log
- **v0.1 (2026-11-22):** Initial protocol. Stratification (rating × recency × version), per-app quota matrix (~100/app, ~500 across the core five), seeded deterministic draw, four-tier dedup + contamination exclusions, 11-family coding scheme with required attributes, coverage ledger, forbidden-value catalogue, and one synthetic worked example. No review sampled or coded.

---

*End of TASK-013 deliverable. No reviews have been sampled, quoted, counted, or coded. All sample sizes, quotas, windows, and thresholds are declared planning parameters; the sole review text in this document is explicitly synthetic.*
