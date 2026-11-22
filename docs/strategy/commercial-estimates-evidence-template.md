# HerRays Commercial Estimates Evidence Template

**Deliverable:** TASK-015 — Create the commercial estimates evidence template
**Workstream:** Competitive Intelligence (WS01)
**Version:** 0.1 · **Status:** Proposed — template + seeded records, no estimate yet recorded
**Owner (accountable role):** Product analyst/growth specialist (WS01), under Program Director custody
**Reviewers:** Product / market lead · ASO/App Store specialist · Privacy/regulatory reviewer (third-party-data provenance & claim handling)
**Source basis:** `prd.md` §4 (no-fabrication rule — "Never fabricate … actual retention, CAC, LTV … or internal competitor data"; "market estimates clearly distinguished from verified metrics"; Evidence Library provenance/confidence/limitations fields), §5 Phase 1 ("available download/revenue estimates"; "Do not infer retention from reviews or downloads"; "available download/revenue estimates clearly labeled"), §10 ("Appfigures/Sensor Tower estimates are not actual competitor analytics"), §11 Gate 1 (research-foundation gate; "Polished unsupported reports do not pass"), §13 Prompt 01 ("clearly labeled third-party download/revenue estimates … Do not … infer private retention/CAC/LTV")
**Interlocks:** `↔ TASK-005` (`EVD` records back every estimate screenshot / provider export) · `↔ TASK-004` (evidence grading — a third-party estimate is capped at **grade C**; a modeled figure with opaque method is **D**; it can never be graded as a verified metric) · `↔ TASK-008` (an estimate that contradicts another provider's figure, or a price, opens a `CON`) · `← TASK-011` (receives any download/revenue/chart signal *seen on the product page* and re-files it here as an **estimate**, strictly separate from the **observed** prices captured there) · `→ TASK-012` (feature matrix may annotate a column with a labelled estimate, never as a feature fact) · `→ TASK-038` (phased tool purchasing — the coverage/accuracy limits of free estimate sources inform whether paid Appfigures/Sensor Tower/AppFollow access is justified) · `→ TASK-042` (opportunity prioritization reads market-size *estimates* as a weak, capped signal, never as proof of demand)

---

## 0. How to read this document

This document is the **Commercial Estimates Evidence Template**: the single structured register for every **inferred or third-party-estimated commercial figure** about a benchmark app — downloads, revenue, chart rank, and any provider-modeled audience figure — together with the **provenance, date, and uncertainty** that make such a figure usable as *context* rather than mistakable for fact. Its one job is to let a reviewer answer, for any commercial number in the program: *who estimated this, by what method, as of when, with what stated uncertainty — and why is it not the app's actual metric?*

It exists because the PRD both **permits** collecting "available download/revenue estimates" (§5 Phase 1) and **forbids** treating them as analytics ("Appfigures/Sensor Tower estimates are not actual competitor analytics," §10) or fabricating private metrics ("Never fabricate … actual retention, CAC, LTV … or internal competitor data," §4). This template is the mechanism that holds both at once: estimates are **recordable with provenance**, verified private metrics are **not recordable at all**.

It does three things and only three:

1. **Registers one commercial-estimate record (`EST`) per app × estimate-type × provider × as-of date** for the five core apps (`APP-001`…`APP-005` from TASK-006), each at an explicit record state.
2. **Defines the record contract** (§3), the **per-estimate-type sub-schema** that makes "downloads / revenue / ranking" concrete and comparable (§4), and the **provenance + uncertainty model** that is the heart of this task (§5).
3. **Fixes the hard prohibition** (§1, §6): a list of **derived/private metrics that may never be recorded even as estimates** — retention, CAC, LTV, ARPU, churn, conversion — so that the act of being "an estimate" never launders a forbidden inference into the repository.

> **No-fabrication statement.** This document contains **no download count, revenue figure, rank, user count, or any other commercial estimate for any real app.** No number is asserted — as fact *or* as estimate — for Routinery, Fabulous, (Not Boring) Habits, Habitify, or Griply, because the Lab has collected and provenance-checked none. Every registered record is held at `record_state: sought` with every figure at the literal token `unknown` and `source_ref: []`. Third-party estimates **vary widely between providers, are modeled from opaque samples, and are explicitly "not actual competitor analytics"** (`prd.md` §10) — so any remembered or casually-cited figure is treated as an unverified claim-to-source, never recorded as a value. The only fully-populated rows in this file (§8.4) are **ILLUSTRATIVE (synthetic)** and labelled as such, using fictitious `EST-SYNTH-*` / `EVD-SYNTH-*` / `APP-SYNTH-*` ids; they exist solely to show the shape of a completed estimate record and the refusal of a prohibited one. Nothing in this file may be cited as the downloads, revenue, rank, audience, retention, CAC, or LTV of any real product.

**Scope boundary (what this task is and is not).**
- **TASK-015 (this document) = the inferred/estimated commercial figures** — downloads, revenue, chart rank, provider-modeled audience — each labelled an estimate and carrying provenance + date + uncertainty. It answers *"what do third parties estimate about this app's scale, who says so, and how uncertain is it?"*
- **It is not the listing & pricing capture.** The **observed list price and subscription terms** an app *displays* are directly-observable facts owned by **TASK-011**. A list price is observed (grade B); revenue is estimated (grade C). This template never multiplies a price by a download estimate to manufacture revenue (§6.4).
- **It is not the editorial-recognition ledger.** A **top-chart / category rank** is an *algorithmic* signal recorded here (labelled as such); an **"App of the Day" / Editor's Choice** feature is *editorial* recognition owned by **TASK-010**. The two are never conflated (§5.4).
- **It is not the review workstream.** A **star rating or review count** is a *crowd* signal owned by **TASK-013 / TASK-014**; it may be cross-referenced but is not a commercial estimate and is not recorded here as one.
- **It is not a verified-metrics store.** Actual downloads, revenue, MAU/DAU, retention, CAC, LTV, ARPU and conversion are **internal competitor data**. The modelable subset (downloads, revenue, rank, and provider-modeled audience) may be recorded **only as labelled estimates**; the private subset (retention, CAC, LTV, ARPU, churn, conversion) may **not be recorded at all**, even as an estimate (§6.1–§6.2). This is the PRD's firewall, made structural.

---

## 1. Purpose and non-negotiables

The PRD gives WS01 a deliberately narrow commercial mandate. §5 Phase 1 lists among collectable items "available download/revenue estimates" — but immediately constrains them: "Do not infer retention from reviews or downloads." §10 is blunt: "Appfigures/Sensor Tower estimates are not actual competitor analytics." §4 forbids fabricating "actual retention, CAC, LTV, clinical outcomes or internal competitor data" and requires "market estimates clearly distinguished from verified metrics." §13 Prompt 01 permits "clearly labeled third-party download/revenue estimates" while forbidding inferring "private retention/CAC/LTV." This template is where that narrow, heavily-caveated permission is operationalized.

The template exists to do four jobs:

1. **Make every commercial figure an estimate with a named owner.** A download or revenue figure has no meaning without a provider, a method, an as-of date, and a stated uncertainty. A bare "~1M downloads" is unusable — it cannot be reproduced, re-checked, or weighted. Every figure is meaningful only as the tuple `value` + `provider` + `method` + `as_of_date` + `uncertainty`.
2. **Separate the modelable from the private.** Downloads, revenue, chart rank, and provider-modeled audience figures can be *estimated* by third parties and are recordable **as estimates**. Retention, CAC, LTV, ARPU, churn, and conversion are **private/internal** — no public provider observes them for a competitor — so any such number is necessarily a fabrication or an impermissible inference and is **barred from the register entirely** (§6.1). Being "an estimate" is not a licence to record a private metric.
3. **Carry uncertainty as a first-class value, never a footnote.** Estimate providers disagree by multiples; some disclose a confidence band, most do not. The register records the provider's own range when given, flags order-of-magnitude uncertainty when not, and never collapses a modeled range into a false point. Two providers' figures for one app are kept as two records, and their disagreement opens a contradiction (`→ TASK-008`), never an average.
4. **Firewall estimate from fact, from efficacy, and from demand.** A labelled download estimate is a weak scale *signal* (grade C). It is never (a) stated as the app's actual downloads, (b) converted into revenue/retention/ARPU, (c) read as evidence the app *works* or retains users, or (d) read as proof that users *want* the thing the app does. Popularity is not efficacy and not demand (`prd.md` §3: "do not assume popularity proves behavioral efficacy").

**Five non-negotiable rules, enforced throughout.**

- **C1 — An estimate is never a metric.** Every recordable figure (downloads, revenue, rank, modeled audience) is stored with `figure_class: estimate` (or `observed_snapshot` for a rank seen live, or `first_party_claim` for a public company statement), its `provider`, `method`, `as_of_date`, and `uncertainty`. A figure stated as the app's *actual* downloads/revenue/users — with no provenance, or presented as verified truth — is a validation failure (§6.3). This is `prd.md` §10 / §4 ("clearly distinguished from verified metrics").
- **C2 — Private/internal metrics are barred from the register, not merely graded low.** `retention`, `CAC`, `LTV`, `ARPU`, `churn`, `conversion_rate`, `MAU/DAU-as-fact`, and any "internal competitor data" may **not** be recorded here in any field, even labelled "estimate," because no admissible public source observes them for a competitor and the PRD names them as things we must never fabricate (§4). The template provides a `prohibited_metric_attempt` rejection path (§6.1) so an attempt is logged-and-refused, not silently entered. (Modeled MAU/DAU offered *by a named provider as an explicit model* is the single borderline case — recordable only as a grade-D `audience_estimate` with the provider's method attached, never as a user count fact; §4.4.)
- **C3 — No figure without provenance, date, and uncertainty.** Any non-`unknown` figure carries ≥1 `source_ref` to a TASK-005 `EVD` artifact (provider screenshot/export) **and** a `provider`, a `method`, an `as_of_date`, and a non-empty `uncertainty`. `source_ref: []` ⇒ every figure must be `unknown` (the v0.1 baseline for all five rows). A number with no uncertainty is incomplete, not merely imprecise (§6.5).
- **C4 — No estimate is converted into another figure or into efficacy/demand.** Revenue is not derived by multiplying price × downloads (§6.4); retention/ARPU/LTV are not inferred from downloads or revenue (§6.1/§6.2); a high rank or download estimate is never recorded as evidence the app works, retains, or that users want its approach (§6.6). Each belongs to a different (and for the private ones, a *forbidden*) layer.
- **C5 — Provider disagreement is preserved, never averaged.** Two providers' figures for one app/type/date are two separate `EST` records; a material discrepancy opens a `CON` (`→ TASK-008`) and both are retained. Collapsing them into a single "blended" number is a validation failure (§6.7). (TASK-004: "never average contradictions.")

---

## 2. Record identity and lifecycle

### 2.1 The `EST` identifier

One **commercial estimate** = one record for one app, one estimate type, from one provider, as of one date. A single app accumulates many `EST` records over time (re-pulls as figures update) and across providers (Appfigures vs Sensor Tower differ). The *current* best-available estimate for an app×type is its most recent non-superseded record per provider — kept per-provider, never merged.

| Property | Rule |
|---|---|
| **Format** | `EST-NNN` — `EST-` prefix + zero-padded sequential integer (`EST-001`, `EST-002`, …). |
| **Scope of an id** | One id = **one estimate event**, defined by the tuple `(app_id, estimate_type, provider, as_of_date)`. Re-pulling the same app/type/provider on a later date is a **new** `EST` id that supersedes the prior one (§2.3), never an in-place edit. |
| **Immutable** | An `est_id` is permanent and never reused. An estimate found to be mis-recorded is marked `invalid` with a reason, not deleted (§2.3). |
| **Subject link** | Every record carries exactly one `app_id` ∈ `{APP-001…APP-005}` (TASK-006). Extended-portfolio apps (`APP-006+`, TASK-007) may be recorded later under the same contract. |
| **Type + provider stamp** | Every record carries exactly one `estimate_type` (§4) and exactly one `provider` (§5.1). One record never blends two providers or two types. |

### 2.2 Why one record per estimate event (and not one "market size" cell per app)

A single mutable "downloads" cell per app silently overwrites history, hides which provider said it, and invites blending two incompatible models into a false consensus. Estimates are modeled, provider-specific, and move month to month; last quarter's revenue estimate is still true *as the provider's estimate on its as-of date* and may be needed to explain a ranking change. The register therefore decomposes into immutable, dated, per-provider estimate events. An app with no estimate simply has a `sought` record with everything `unknown` — the honest current state for all five.

### 2.3 Record lifecycle

Each record carries a `record_state`:

```
sought ─▶ in_collection ─▶ ┬─▶ recorded ──▶ (stale when provider updates / figure ages) ──▶ superseded
                           ├─▶ unavailable  (no admissible source offers this estimate; figure stays unknown)
                           └─▶ contested    (≥2 provider figures materially disagree; CON opened, both retained)
         (any state) ─▶ refused   (a prohibited private metric was requested; attempt logged, nothing recorded)
         (any state) ─▶ invalid   (estimate shown to be mis-recorded; reason retained, not deleted)
```

| `record_state` | Meaning |
|---|---|
| `sought` | The estimate is on the collection list; nothing sourced yet. **← every row in v0.1.** All figures `unknown`, `source_ref: []`. |
| `in_collection` | WS01 is actively sourcing this app×type×provider. |
| `recorded` | A figure is captured from a named provider into an `EVD` artifact, with method, as-of date, and uncertainty attached. |
| `unavailable` | No admissible source offers this estimate for this app (common for niche apps / private providers); figure stays `unknown` with the reason. Honest, not a gap to hide. |
| `contested` | Two or more providers give materially different figures; a `CON` is opened (`→ TASK-008`); all figures retained, none averaged (C5). |
| `refused` | A prohibited private metric (retention/CAC/LTV/ARPU/churn/conversion) was requested; the attempt is logged with the refusal reason and **no figure is recorded** (C2, §6.1). |
| `stale` | A previously-`recorded` estimate whose provider figure is known to have updated or which has aged past its freshness window; must be re-pulled (a new `EST`) before reuse. |
| `superseded` | Replaced by a newer `EST` for the same app×type×provider. Retained read-only for history. |
| `invalid` | Estimate demonstrated mis-recorded (e.g. wrong storefront/currency); reason retained; opens a `CON` if it contradicted another record. |

A record is **never deleted**. Superseded, refused, and invalid records persist so the estimate history — and every prohibited-metric refusal — is auditable.

---

## 3. Field dictionary

Each record has the fields below. **Req.**: **M** = mandatory (a sourced value *or* a justified `unknown`), **C** = conditional, **O** = optional. The acceptance-criteria essentials — **downloads**, **revenue estimates**, **ranking**, **provenance**, **date**, and **uncertainty** — are all **M** (the figure itself is typed per §4; provenance and uncertainty are decomposed in §5).

### 3.1 Identity, subject, classification

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `est_id` | id | M | `EST-NNN`, immutable (§2.1). |
| `app_id` | ref | M | One of `APP-001…APP-005` (TASK-006). |
| `app_name` | string | M | Mirrored from TASK-006 for readability; `app_id` is authoritative. |
| `estimate_type` | enum | M | Exactly one of §4: `downloads_estimate` / `revenue_estimate` / `chart_rank` / `audience_estimate`. |
| `figure_class` | enum | M | `estimate` (third-party modeled) / `observed_snapshot` (a rank seen live by the Lab) / `first_party_claim` (a public statement by the app's own maker). Governs grading (§5.5). |
| `record_state` | enum | M | §2.3 vocabulary. `sought` for every v0.1 row. |
| `platform` | enum | M | `ios_app_store` default (PRD iOS framing); `cross_platform` or `other` requires a note (many providers blend stores — recorded in `method`). |
| `country_scope` | enum \| `unknown` | M | `worldwide` / an ISO-3166 storefront / `unknown`. Estimates are store- and region-scoped; a figure with no scope is unusable. |

### 3.2 The figure, provenance, and date

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `value` | per §4 \| `unknown` | M | The figure itself, typed by `estimate_type` (§4). Captured from the provider artifact, never rounded from memory. `unknown` ⇒ `record_state ∈ {sought, in_collection, unavailable, refused}`. |
| `value_as_shown` | string \| `unknown` | M | The literal displayed string (e.g. "500K–1M downloads/mo", "#14 in Health & Fitness"), preserved verbatim — the provider's own hedging and units are signal. |
| `provider` | enum | M | §5.1 source taxonomy. Exactly one per record. |
| `method` | enum | M | §5.2 — how the figure was produced (`panel_modeled` / `store_sampled` / `provider_proprietary_opaque` / `live_store_observation` / `first_party_public_statement` / `unknown`). |
| `as_of_date` | date | M | The date the figure *describes* (the provider's reference period/point), ISO `YYYY-MM-DD` or a stated period. **Never `unknown`** for a `recorded` figure — a dateless estimate is inadmissible (§6.5). |
| `collected_date` | date | M | The date the Lab pulled it (distinct from `as_of_date`). **Never `unknown`** (you always know when you looked). |
| `uncertainty` | record | M | The §5.3 uncertainty sub-record (band, provider range, model opacity). Non-empty for any non-`unknown` value. |
| `source_ref` | ref[] | M | `EVD` ids (TASK-005) backing the figure (provider screenshot/export/page). **`[]` ⇒ `value` must be `unknown`** (C3). |
| `evidence_grade` | enum | M | Per §5.5 and TASK-004: `C` max for a third-party estimate or first-party claim; `D` for an opaque-method or audience estimate; never `A`/`B` (those are reserved for direct observation / replicated validation, not market estimates). |

### 3.3 Governance, firewall, linkage

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `firewall_note` | string | M | Non-empty. States, for this figure, what it is **not**: not a verified metric, not revenue (if downloads), not evidence of retention/efficacy/demand. The C1–C4 firewall made per-record. |
| `prohibited_metric_attempt` | string \| `n/a` | C | If `record_state: refused`, the private metric that was requested and the refusal reason (C2); else `n/a`. |
| `contradicts` | ref[] | C | Other `EST` ids (or a TASK-011 `LST` price) this figure materially conflicts with; populated ⇒ a `CON` exists (`→ TASK-008`). |
| `supersedes` / `superseded_by` | ref | C | Prior/next `EST` for the same app×type×provider (§2.3). |
| `owner_role` | role | M | Accountable role (default: Product analyst/growth specialist). |
| `limitations` | string | M | Non-empty. Always restates that the figure is an estimate, provider-specific, and not actual analytics (`prd.md` §10). |
| `last_updated` | date | M | Record edit date. |

---

## 4. Estimate-type sub-schema

"Downloads, revenue estimates, ranking" are three distinct figure types with different units, providers, and uncertainty profiles; a fourth (`audience_estimate`) is admitted only under the grade-D borderline rule (C2). Each `value` is typed by its `estimate_type`.

### 4.1 `downloads_estimate`

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `metric` | enum | M | `cumulative_downloads` / `downloads_per_period`. |
| `point_or_range` | enum | M | `point` / `range`. Providers usually give ranges or buckets (e.g. "500K–1M"); a point is recorded only if the provider states one. |
| `low` / `high` | int \| `unknown` | M | The range bounds (equal if a point). Captured verbatim; never widened or narrowed by the Lab. |
| `period` | string \| `n/a` | C | For `downloads_per_period` (e.g. "per month"); `n/a` for cumulative. |
| `unit_note` | string | O | Store coverage (iOS-only vs blended with Play), since blended downloads are not an App Store figure. |

### 4.2 `revenue_estimate`

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `metric` | enum | M | `gross_revenue` / `net_revenue` / `unknown` (most providers report gross pre-store-cut; record which). |
| `point_or_range` | enum | M | As §4.1. |
| `low` / `high` | decimal \| `unknown` | M | Range bounds with `currency`. |
| `currency` | ISO-4217 \| `unknown` | M | The provider's reporting currency. |
| `period` | string | M | e.g. "per month", "2026 full year". Revenue with no period is meaningless. |
| `store_cut_note` | string | O | Whether the figure is pre- or post-Apple-commission (changes it by ~15–30%). |

> **Revenue is never derived (C4).** A `revenue_estimate` is only ever a *provider's own revenue estimate*, captured with provenance. The Lab never computes revenue as `price × downloads` — that is a fabricated metric (§6.4), not an estimate.

### 4.3 `chart_rank`

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `chart_type` | enum | M | `top_free` / `top_paid` / `top_grossing` / `category` / `unknown`. |
| `category` | string \| `n/a` | C | e.g. "Health & Fitness" for a category chart; `n/a` for overall. |
| `rank_position` | int \| `unknown` | M | The position shown (1 = top). |
| `storefront` | ISO-3166 | M | Chart rank is per-storefront; a rank with no storefront is unusable. |
| `rank_source` | enum | M | `live_store_observation` (the Lab saw it in the App Store on `as_of_date` → `figure_class: observed_snapshot`, grade **C**: real but volatile) / `provider_chart_history` (`figure_class: estimate`). |

> **Rank is algorithmic, not editorial and not efficacy (§5.4, C4).** A chart rank is an observable but volatile algorithmic signal. It is **never** recorded as "App of the Day" or any editorial feature (that is TASK-010), and a high rank is never evidence the app works or retains users.

### 4.4 `audience_estimate` (borderline — grade D only)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `metric` | enum | M | `mau_modeled` / `dau_modeled` / `installs_active_modeled`. **Only** when a named provider offers an explicit model; never a Lab inference. |
| `point_or_range` | enum | M | As §4.1. |
| `low` / `high` | int \| `unknown` | M | Provider's modeled bounds. |
| `model_disclosure` | string | M | The provider's stated modeling basis; if undisclosed, `evidence_grade: D` and `uncertainty.band: order_of_magnitude` are forced. |

> **Why `audience_estimate` is fenced to grade D (C2).** Active-user counts for a competitor are *private*. A provider "MAU model" is a heavy extrapolation, admitted only as a labelled, grade-D, order-of-magnitude *context* figure — never as a user-count fact, and never as a basis for retention/ARPU/LTV (which remain barred entirely, §6.1). If no provider offers an explicit model, `audience_estimate` is `unavailable`, not computed.

### 4.5 Figures that are **not** commercial estimates (routed elsewhere)

| Figure | Why not here | Where it belongs |
|---|---|---|
| Star rating / review count | **Crowd** signal, not a commercial estimate. | TASK-013 / TASK-014 (review workstream). |
| "App of the Day" / Editor's Choice | **Editorial** recognition, not algorithmic rank. | TASK-010 (editorial ledger). |
| Observed list price / subscription terms | **Directly observed** fact, not an estimate. | TASK-011 (listing & pricing capture). |
| Retention / CAC / LTV / ARPU / churn / conversion | **Private/internal** metric — not estimable from any admissible public source. | **Nowhere** — barred from the repository (§6.1, C2). |

---

## 5. Provenance and uncertainty model

Provenance and uncertainty are the substance of this task: a commercial figure without them is not weak evidence, it is *non-evidence*. §5.1–§5.3 make them structured and mandatory.

### 5.1 `provider` taxonomy (who produced the figure)

| `provider` | Nature | Admissible as |
|---|---|---|
| `appfigures` | Third-party estimate aggregator. | `estimate` (grade C). |
| `sensortower` | Third-party estimate aggregator. | `estimate` (grade C). |
| `data_ai` | Third-party estimate aggregator (formerly App Annie). | `estimate` (grade C). |
| `similarweb` | Third-party traffic/usage estimator. | `estimate`, often grade D (opaque model). |
| `apple_live_chart` | The App Store chart, observed live by the Lab. | `observed_snapshot` for `chart_rank` only (grade C). |
| `first_party_public` | A public statement by the app's own maker (site, press, keynote — e.g. "10M+ downloads"). | `first_party_claim` (grade C, **reported** — a claim, not verified; the maker is an interested party). |
| `press_media` | A press article citing a figure. | Only as a pointer to its underlying provider; the press outlet is not itself a provider. Record the underlying provider or mark `unknown`. |
| `unknown` | No identifiable provider. | **Inadmissible** — a figure with no provider is `unknown`, never recorded (C3). |

> **Aggregator caution (`prd.md` §10).** Appfigures/Sensor Tower/data.ai figures are *modeled estimates*, "not actual competitor analytics." Two of them disagreeing is expected and is recorded as two `EST` records, not reconciled (C5). A `first_party_public` claim is the maker's own marketing number and is recorded as a *claim* (reported, grade C), never upgraded to a verified metric.

### 5.2 `method` taxonomy (how the figure was produced)

| `method` | Meaning | Typical grade |
|---|---|---|
| `panel_modeled` | Extrapolated from a usage panel. | C–D (depends on disclosure). |
| `store_sampled` | Derived from store-exposed signals (rank-to-download curves). | C. |
| `provider_proprietary_opaque` | Method undisclosed. | **D** (opacity forces the ceiling). |
| `live_store_observation` | The Lab directly observed it (rank). | C (real but volatile). |
| `first_party_public_statement` | The maker publicly stated it. | C, **reported** (interested party). |
| `unknown` | Method not stated. | **D**, and `uncertainty.band` forced to `order_of_magnitude`. |

### 5.3 The `uncertainty` sub-record (mandatory, first-class)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `band` | enum | M | `provider_stated_range` (the provider gives explicit bounds) / `moderate` / `wide` / `order_of_magnitude` (could be off by ≥10×) / `provider_undisclosed`. Never empty; `provider_proprietary_opaque`/`unknown` method ⇒ at least `wide`. |
| `provider_range_low` / `provider_range_high` | per type \| `n/a` | C | The provider's own stated interval if any; preserved verbatim. |
| `directional_only` | bool | M | `true` if the figure is usable only as "big vs small / rising vs falling," not as a number. |
| `reconciliation_note` | string | C | If other providers differ, how much and why (feeds the `CON`, C5). |
| `uncertainty_statement` | string | M | A plain-language sentence a reviewer can read — e.g. "Single aggregator, opaque method, iOS+Play blended; treat as order-of-magnitude only." Non-empty. |

### 5.4 Signal-class firewall (estimate vs editorial vs crowd vs observed)

Four signals routinely co-occur on the same provider dashboard or store page and are kept strictly distinct:
- **Commercial estimate** (downloads/revenue/audience) — modeled, here, grade C/D.
- **Chart rank** — algorithmic, here, labelled `observed_snapshot`/`estimate`; **never** editorial.
- **Editorial feature** — curated by Apple editors — **TASK-010**, not here.
- **Crowd signal** (rating/review count) — **TASK-013/014**, not here.

Mislabelling any one as another (a rank as an "editorial feature," a rating as a "download proxy") is a validation failure (§6.8).

### 5.5 Grading interlock (TASK-004)

Commercial estimates are capped by construction: a third-party aggregator estimate or a first-party public claim is **grade C**; an opaque-method or audience-model figure is **grade D**; a live-observed rank is **grade C** (real but volatile). **No commercial estimate is ever grade A or B** — those grades require direct observation or replicated validation, which a modeled market figure is not. Grade feeds §4's prohibition that market estimates may never become verified retention/CAC/LTV (they are barred regardless of grade).

---

## 6. Forbidden values and validation failures

A record **fails validation** (and cannot reach `recorded`) if any of the following is true:

1. **A prohibited private metric is recorded in any field.** Any `retention`, `CAC`, `LTV`, `ARPU`, `churn`, `conversion_rate`, or other "internal competitor data" entered as a value — even labelled "estimate." These are not recordable; the only valid handling is `record_state: refused` with a `prohibited_metric_attempt` note (C2; `prd.md` §4). This is the task's central prohibition.
2. **A private metric inferred from a public one.** Deriving retention from downloads, ARPU/LTV from revenue, or conversion from rank — any computation that produces a barred metric from an admissible figure (violates C4/§6.1; `prd.md` §5 "Do not infer retention from reviews or downloads").
3. **A figure stated as a verified metric.** A download/revenue/rank/user figure presented as the app's *actual* number with no provenance, or asserted as fact rather than as a provider's estimate (violates C1; `prd.md` §10 "not actual competitor analytics," §4 "clearly distinguished from verified metrics").
4. **Revenue (or any figure) derived by Lab arithmetic.** Computing revenue as `price × downloads`, or any Lab-side multiplication/extrapolation producing a new "estimate" not sourced from a named provider (violates C4/§4.2). A derived figure is a fabrication, not an estimate.
5. **A figure without provider, as-of date, or uncertainty.** Any non-`unknown` `value` missing `provider`, `method`, `as_of_date`, `source_ref`, or a non-empty `uncertainty` (violates C3/§5.3). A dateless or uncertainty-less estimate is inadmissible.
6. **Popularity read as efficacy or demand.** A high rank/download/revenue figure recorded or cited as evidence the app works, retains users, or that users *want* its approach (violates C4; `prd.md` §3 "do not assume popularity proves behavioral efficacy").
7. **Averaged or blended providers.** Two providers' figures collapsed into one "consensus" number, or a discrepancy hidden rather than opened as a `CON` (violates C5/§2.3; TASK-004 "never average contradictions").
8. **Signal-class mislabel.** A chart rank recorded as an editorial feature, a rating recorded as a download proxy, or an observed price re-entered here as revenue (violates §5.4; belongs to TASK-010 / TASK-013-14 / TASK-011).
9. **Remembered / aggregator-recalled figure.** A number entered from memory or "what the provider usually shows" with no capturing `EVD` (violates C3). The fix is `unknown`, not a guess.
10. **First-party claim upgraded to fact.** A maker's public "10M users" recorded as a verified metric rather than a `first_party_claim` (reported, interested party) (violates §5.1).
11. **Deleted refused/invalid record.** A prohibited-metric refusal or a wrong record removed rather than retained as `refused`/`invalid` with a reason (violates §2.3) — erasing the audit trail of what was *not* recorded.
12. **Missing mandatory field.** Any **M** field (§3, §4, §5.3) absent (not even `unknown`), or `firewall_note` / `limitations` / `uncertainty_statement` empty.

---

## 7. Validation rules (entry gate)

A record is accepted into the estimates register when:

1. `est_id` matches `EST-NNN`, is unique, and is not reused (§2.1).
2. `app_id` ∈ `{APP-001…APP-005}`; exactly one `estimate_type` (§4) and one `provider` (§5.1); `country_scope` and `platform` set.
3. `estimate_type ≠` any private metric; no `retention`/`CAC`/`LTV`/`ARPU`/`churn`/`conversion` value present in any field (C2/§6.1). A prohibited request is handled as `refused`, not entered.
4. All **M** fields present; every figure is a sourced value **or** the literal `unknown`; `firewall_note`, `limitations`, and (for any non-`unknown` value) `uncertainty_statement` are non-empty.
5. `source_ref` consistency: if `source_ref: []` then `value` is `unknown` (C3). Any non-`unknown` value carries a backing `EVD`, a `provider`, a `method`, an `as_of_date`, and a non-empty `uncertainty` (§5.3).
6. No figure is derived by Lab arithmetic (§6.4) and no public figure is converted into a private metric (§6.1/§6.2).
7. `evidence_grade` ∈ {C, D} and consistent with `provider`/`method` (§5.5); never A/B.
8. Provider disagreement, if any, is preserved as separate records with a `CON` (C5/§6.7); nothing is averaged.
9. No forbidden value (§6) is present.

**This v0.1 document is validated against these rules in §8.5.**

---

## 8. The estimates register

### 8.1 Current state (honest baseline)

**No commercial estimate has been recorded by the Lab for any of the five core apps.** This is the correct, expected state at WS01 entry. Each app below is registered with a single `EST` record at `record_state: sought`, every figure at the literal `unknown`, and `source_ref: []`. Download, revenue, and rank estimates will be sourced per provider during Phase 1 market intelligence (`prd.md` §5), at which point each `unknown` resolves to a sourced, provenance-and-uncertainty-stamped estimate **or** to `unavailable` with a reason.

> **Why nothing is pre-filled from memory.** Third-party commercial estimates vary widely between providers, are modeled from opaque samples, and are explicitly "not actual competitor analytics" (`prd.md` §10). Any figure not captured from a named provider's surface on a known date — with its uncertainty attached — is unreliable by construction. Recording a remembered "~1M downloads" would violate C1/C3 and risk being wrong by an order of magnitude. The register therefore asserts **no commercial figure** until a sourced, dated, uncertainty-bearing estimate exists. It records **no retention, CAC, or LTV at all**, ever.

### 8.2 Registered estimate records (all `sought`, all figures `unknown`)

One seed record per app is shown for the `downloads_estimate` type as the entry point; `revenue_estimate`, `chart_rank`, and (where a provider model exists) `audience_estimate` become additional `EST` ids per app×provider during collection.

| `est_id` | `app_id` | `app_name` | `estimate_type` | `figure_class` | `value` | `provider` | `as_of_date` | `uncertainty.band` | `evidence_grade` | `source_ref` | `record_state` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| EST-001 | APP-001 | Routinery | `downloads_estimate` | `unknown` | `unknown` | `unknown` | `unknown` | `unknown` | `—` | `[]` | **`sought`** |
| EST-002 | APP-002 | Fabulous | `downloads_estimate` | `unknown` | `unknown` | `unknown` | `unknown` | `unknown` | `—` | `[]` | **`sought`** |
| EST-003 | APP-003 | (Not Boring) Habits | `downloads_estimate` | `unknown` | `unknown` | `unknown` | `unknown` | `unknown` | `—` | `[]` | **`sought`** |
| EST-004 | APP-004 | Habitify | `downloads_estimate` | `unknown` | `unknown` | `unknown` | `unknown` | `unknown` | `—` | `[]` | **`sought`** |
| EST-005 | APP-005 | Griply | `downloads_estimate` | `unknown` | `unknown` | `unknown` | `unknown` | `unknown` | `—` | `[]` | **`sought`** |

**Shared `firewall_note` / `limitations` on EST-001…005 (v0.1):** *"No commercial estimate sourced. This record asserts no downloads, revenue, rank, or audience figure for this app. Any figure, when sourced, will be a named provider's modeled estimate — not actual analytics (`prd.md` §10), not revenue derived from price, not evidence of retention, efficacy, or user demand. Retention, CAC, LTV, ARPU, churn, and conversion are never recorded here, even as estimates (`prd.md` §4)."*

### 8.3 Per-app collection notes

- **EST-001 · Routinery** — Seek a downloads range and category rank from ≥2 aggregators; expect provider disagreement — record both, open a `CON` if material (C5). iOS-only vs blended coverage must be noted (`unit_note`).
- **EST-002 · Fabulous** — Likely to have `first_party_public` user-count claims (large install base is part of its marketing). Record any such claim as a `first_party_claim` (reported, grade C, interested party) — **never** as a verified user count, and never derive retention from it.
- **EST-003 · (Not Boring) Habits** — Smaller/niche; aggregator coverage may be thin → `unavailable` is a plausible, honest outcome for revenue. A `top_paid`/`top_grossing` rank snapshot (if paid-upfront) is the more reliable signal.
- **EST-004 · Habitify** — Cross-platform; a blended-store download estimate is **not** an App Store figure — record `platform: cross_platform` with a `unit_note`, and seek an iOS-scoped figure separately.
- **EST-005 · Griply** — Likely below most aggregators' reliable floor; expect `unavailable` or `order_of_magnitude` uncertainty. Do not manufacture a figure to fill the cell.

### 8.4 Illustrative (synthetic) worked records — shape only

> **These records are SYNTHETIC and labelled as such. They are not claims about any real app, provider, figure, or rank.** They exist only to show reviewers (a) what a completed `recorded` estimate looks like with full provenance and uncertainty, and (b) how a prohibited private-metric request is `refused`. All ids are fictitious (`EST-SYNTH-*`, `EVD-SYNTH-*`, `APP-SYNTH-*`).

**EST-SYNTH-A — a `recorded` downloads estimate (shape demonstration):**

| Field | Value |
|---|---|
| `est_id` | EST-SYNTH-A *(SYNTHETIC)* |
| `app_id` | APP-SYNTH-X *(fictitious)* |
| `estimate_type` | `downloads_estimate` |
| `figure_class` | `estimate` |
| `value` | `{metric: downloads_per_period, point_or_range: range, low: 500000, high: 1000000, period: "per month", unit_note: "iOS App Store only"}` |
| `value_as_shown` | "500K–1M /mo (iOS)" *(captured verbatim from provider)* |
| `provider` | `sensortower` *(synthetic)* |
| `method` | `panel_modeled` |
| `as_of_date` | 2026-10 *(provider reference month, synthetic)* |
| `collected_date` | 2026-11-22 *(synthetic)* |
| `country_scope` | `worldwide` |
| `uncertainty` | `{band: provider_stated_range, provider_range_low: 500000, provider_range_high: 1000000, directional_only: false, uncertainty_statement: "Single aggregator, panel-modeled, iOS-only; a second provider should be sought before weighting this."}` |
| `evidence_grade` | **C** |
| `source_ref` | [EVD-SYNTH-901 *(provider dashboard screenshot showing figure + as-of month)*] |
| `firewall_note` | "This is one provider's modeled download range, not actual downloads. It is not revenue, not a user count, and not evidence Routinery-X works, retains users, or that users want routine timers." |
| `contradicts` | *(none yet; if an Appfigures figure differs materially, open CON-xxx)* |
| `record_state` | **`recorded`** |
| `limitations` | "Estimate only, provider-specific, as of 2026-10; aggregator estimates are not actual competitor analytics (`prd.md` §10). No retention/CAC/LTV/ARPU derived or recorded." |

**EST-SYNTH-B — a `refused` prohibited-metric request (shape demonstration of the C2 bar):**

| Field | Value |
|---|---|
| `est_id` | EST-SYNTH-B *(SYNTHETIC)* |
| `app_id` | APP-SYNTH-X *(fictitious)* |
| `estimate_type` | *(request was for)* `retention_rate` → **not an admissible `estimate_type`** |
| `record_state` | **`refused`** |
| `value` | `unknown` *(nothing recorded)* |
| `source_ref` | `[]` |
| `prohibited_metric_attempt` | "A 30-day retention estimate for APP-SYNTH-X was requested. **Refused:** retention is private/internal competitor data that no admissible public source observes; recording it — even labelled 'estimate' — would violate `prd.md` §4 and C2. Retention is not inferrable from downloads or reviews (`prd.md` §5)." |
| `firewall_note` | "Logged-and-refused so the attempt is auditable. The repository records that this figure was sought and deliberately not recorded." |
| `evidence_grade` | `—` *(no figure)* |
| `limitations` | "No retention figure exists in the repository for any app; this record documents the refusal, not a value." |

### 8.5 Validation of this document

Checked against §7:

1. **Ids** — `EST-001`…`EST-005` unique, sequential, none reused; synthetic rows namespaced `EST-SYNTH-A/B`. ✅
2. **Classification present** — every row carries one `estimate_type` (`downloads_estimate`), `figure_class`, `platform`, and `country_scope`. ✅
3. **No prohibited metric recorded** — no retention/CAC/LTV/ARPU/churn/conversion value appears in any field; the one such request (synthetic EST-SYNTH-B) is handled as `refused` with a logged `prohibited_metric_attempt` and **no figure**. ✅ (C2, §6.1)
4. **Mandatory fields / `unknown` discipline** — all five rows carry every **M** field; every figure is the literal `unknown`; shared `firewall_note`/`limitations` are non-empty and restate the estimate/efficacy/private-metric firewall. ✅ (§6.12)
5. **Source consistency** — `source_ref: []` on all five rows ⇒ every `value` is `unknown` (C3); no figure exists without provider + method + as-of date + uncertainty (demonstrated fully only in the labelled synthetic EST-SYNTH-A). ✅ (§6.5, §6.9)
6. **No Lab-derived / public→private conversion** — no revenue computed from price × downloads; no retention/ARPU/LTV inferred from any figure anywhere. ✅ (C4, §6.2, §6.4)
7. **Grading** — no row carries a grade above C; the synthetic recorded estimate is grade C with a wide-honest uncertainty statement; no A/B anywhere. ✅ (§5.5, §6.3)
8. **No averaging / no mislabel** — no blended provider figure; no rank-as-editorial or rating-as-download mislabel; rank/editorial/crowd/observed classes kept distinct (§5.4). ✅ (§6.7, §6.8)

Result: **5/5 registered rows valid at `record_state: sought`.** The register is a correct, honest empty scaffold: it asserts **no commercial figure** for any real app, it makes provenance + date + uncertainty mandatory for every future figure, and it **structurally bars retention/CAC/LTV** from ever entering the repository — handling any such request as a logged refusal rather than a value.

---

## 9. Dependencies and cross-references

**Upstream (consumed by this template):**
- `prd.md` §4 — the no-fabricate rule ("Never fabricate … actual retention, CAC, LTV … or internal competitor data"); "market estimates clearly distinguished from verified metrics"; Evidence Library provenance/confidence/limitations fields.
- `prd.md` §5 Phase 1 — "available download/revenue estimates" are collectable, but "Do not infer retention from reviews or downloads."
- `prd.md` §10 — "Appfigures/Sensor Tower estimates are not actual competitor analytics"; the purchasing discipline this template's coverage limits inform.
- `prd.md` §13 Prompt 01 — "clearly labeled third-party download/revenue estimates … Do not … infer private retention/CAC/LTV."
- **TASK-006** (App Registry) — supplies `APP-001…APP-005`. `↔`
- **TASK-005** (`EVD` schema) — every provider screenshot/export is an `EVD` record with capture date and provenance. `↔`
- **TASK-004** (evidence grading) — caps estimates at grade C (opaque/audience → D); never A/B. `↔`
- **TASK-011** (listing & pricing) — hands off any download/revenue/chart signal *seen on the product page* to be re-filed here as an estimate, separate from observed prices. `←`

**Downstream (this template feeds):**
- **TASK-008** (gap/contradiction log) — provider disagreements and estimate-vs-price conflicts open `CON` records; no averaging.
- **TASK-012** (feature comparison matrix) — may annotate a column with a labelled estimate, never as a feature fact.
- **TASK-038** (phased tool purchasing) — the coverage/accuracy limits of free estimate sources inform whether paid Appfigures/Sensor Tower/AppFollow access is justified (and §10's "avoid overlapping subscriptions").
- **TASK-042** (opportunity prioritization) — reads market-size estimates as a weak, capped signal of a segment's scale, never as proof of demand or efficacy.
- **Gate 1** (`prd.md` §11) — reads this register's estimates, `unavailable` notes, and refusals as part of "benchmark coverage, source-linked evidence, unknowns and access limitations documented."

---

## 10. Open unknowns and change log

**Open unknowns (by design — resolved during WS01 collection, not here):**
- The actual download, revenue, and rank **estimates** for **each of the five apps from each admissible provider** — currently **all `unknown`** (no estimate sourced).
- The confirmed **provider set** to use and whether any paid tier is justified (§10 purchasing discipline) — Program Director ratifies in Phase 0 (`→ TASK-038`).
- Which apps fall **below aggregator reliability floors** (likely Griply, possibly (Not Boring) Habits) and must stand as `unavailable` rather than be force-filled.
- The **freshness window** after which a `recorded` estimate goes `stale` and must be re-pulled (estimates update monthly) — set against the Gate 1 timeline.
- Which apps publish **first-party claims** (likely Fabulous) that must be recorded as claims, not metrics.
- Whether providers' figures are **iOS-scoped or store-blended** per app — determines whether a figure is comparable to the App Store–scoped program at all.

**Change log:**
- **v0.1 (2026-11-22)** — Initial template + seeded register. Defined the `EST` record contract (§3), the per-type sub-schema for downloads / revenue / rank / (borderline) audience (§4), the provider + method + uncertainty provenance model (§5), the hard prohibition on recording retention/CAC/LTV/ARPU/churn/conversion with a logged-refusal path (§1 C2, §6.1), forbidden-value/validation rules (§6–§7), five `sought` records for the core apps with all figures `unknown` (§8.2), one synthetic `recorded` estimate and one synthetic `refused` prohibited-metric request (§8.4), and self-validation (§8.5). **No commercial estimate recorded; no downloads, revenue, rank, audience, retention, CAC, or LTV asserted for any real app.** Status: **Proposed — template + seeded records, no estimate yet recorded.**
