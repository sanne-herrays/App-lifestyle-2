# HerRays Benchmark Listing & Pricing Capture

**Deliverable:** TASK-011 — Capture benchmark listings and pricing
**Workstream:** Competitive Intelligence (WS01)
**Version:** 0.1 · **Status:** Proposed — capture schema + seeded records, no listing yet captured
**Owner (accountable role):** ASO/App Store specialist (WS01), under Program Director custody
**Reviewers:** Product / market lead · Product analyst/growth specialist · Privacy/regulatory reviewer (pricing-claim & data-collection disclosures)
**Source basis:** `prd.md` §3 point 1 (register each app with "source URL, captured date, app version, country and whether it is directly observed or secondary"; point 2 "respecting copyright and access restrictions"), §4 App Registry fields (App, platform, country, version, date, **price**, source, benchmark role) + Evidence Library provenance + no-fabrication rule ("Never fabricate … actual retention, CAC, LTV …"), §5 Phase 1 ("Collect App Store listing and metadata, price/subscription terms, app updates … positioning … Do not infer retention from reviews or downloads"), §10 (RevenueCat conditional on in-app subscription architecture; estimates ≠ actual analytics), §11 Gate 1 (research-foundation gate), §13 Prompt 01 ("Verify identity, region, platform, version, pricing")
**Interlocks:** `↔ TASK-005` (`EVD` records back every captured screenshot / listing artifact) · `↔ TASK-004` (evidence grading — an observed list price is grade B/direct-observation; a positioning *interpretation* is weaker) · `→ TASK-006` (resolves each app's `price` + `version` + `country` registry fields) · `↔ TASK-010` (a screenshot of an editorial feature captured here is cited there as a verification `EVD`; chart rank / rating surfaced here is **not** editorial recognition) · `→ TASK-012` (feature comparison matrix reads positioning/pricing columns) · `→ TASK-015` (commercial estimates — downloads/revenue **inferred**, kept strictly separate from the **observed** prices captured here) · `→ TASK-021` (growth/UX-writing audit reads paywall timing/copy) · `→ TASK-038` (phased tool purchasing — informs when paid listing-intelligence access is justified)

---

## 0. How to read this document

This document is the **Listing & Pricing Capture** contract: the single structured register of what each of the five core benchmark apps **shows on its App Store product page and inside its paywall** — store positioning (name, subtitle, promotional text, description, category, screenshots and their captions), the **directly observable list price and subscription terms**, and the provenance of each (storefront **country**, **capture date**, **app version**, and a **source link**). Its one job is to let a reviewer answer, for any such fact: *what did the store/paywall actually show, in which country, on which date, at which app version — and where is the artifact that proves it?*

It captures **what is observable on the surface**, nothing deeper. It does three things and only three:

1. **Registers one listing-capture record (`LST`) per app × storefront × capture date** for the five core apps (`APP-001`…`APP-005` from TASK-006), each at an explicit capture state.
2. **Defines the record contract** (§3), the **pricing & subscription-terms sub-schema** that makes "pricing" concrete rather than a single number (§4), and the **positioning + screenshot capture taxonomy** with its copyright/consent rules (§5).
3. **Fixes what "unknown" means and when it is mandatory** (§1, §6) so that an un-captured or paywalled-off detail is recorded as the literal `unknown` with a reason, never guessed — honoring the acceptance criterion to "mark inaccessible details unknown."

> **No-fabrication statement.** This document contains **no captured listing or price for any real app.** No price, currency, trial length, subtitle, description excerpt, screenshot, or category rank is asserted as fact for Routinery, Fabulous, (Not Boring) Habits, Habitify, or Griply, because the Lab has captured and confirmed none. Every registered record is held at `capture_state: registered` with every observable field at the literal token `unknown` and `source_evd: []`. Prices and subscription terms **change frequently, vary by storefront, and are A/B-tested per user** — so any remembered or third-party figure is treated as an unverified claim-to-capture, never recorded as the price. The only fully-populated rows in this file (§8.4) are **ILLUSTRATIVE (synthetic)** and labelled as such, using fictitious `LST-SYNTH-*` / `EVD-SYNTH-*` ids; they exist solely to show the shape of a completed capture. Nothing in this file may be cited as the pricing or positioning of any real product.

**Scope boundary (what this task is and is not).**
- **TASK-011 (this document) = the observable listing + price capture** — it records what the store page and paywall *display*. It answers *"what does this app present to a prospective user, and what does it charge, in storefront X on date Y at version Z?"*
- **It is not the App Registry.** App identity (platform, country, version, access status) is **TASK-006**; this capture *resolves* that registry's `price`/`version`/`country`/`source` fields with dated evidence, but does not own the identity record.
- **It is not the editorial-recognition ledger.** Whether an Apple editor *featured* the app is **TASK-010**. A screenshot captured here *of* a "featured" surface may be cited there as a verification `EVD`; but "App of the Day" is never recorded here as a listing attribute, and a **top-chart rank or star rating** surfaced on the product page is an **algorithmic/crowd signal**, logged with that label (§5.4) — never as editorial recognition.
- **It is not the commercial-estimates template.** Downloads, revenue, MAU, retention, CAC and LTV are **inferred/estimated** third-party figures owned by **TASK-015**. A **list price is observable**; **revenue is not**. §1/§6 make converting an observed price into any revenue or retention claim an automatic validation failure. This is the PRD's firewall: *"Do not infer retention from reviews or downloads … Appfigures/Sensor Tower estimates are not actual competitor analytics."*
- **It is not a feature teardown.** What the app *does* once installed is WS02 (TASK-016+); this record stops at the store page and the paywall screen a prospective buyer sees before purchase.
- **It is not a paywall UX audit.** The growth/UX-writing *evaluation* of paywall copy and timing is **TASK-021**; this record captures the paywall's observable facts (price, trial, timing, copy excerpt within legal limits) that that audit later interprets.

---

## 1. Purpose and non-negotiables

The PRD gives WS01 a precise capture mandate. §3 instructs that each app and example be registered "including source URL, captured date, app version, country and whether it is directly observed or secondary." §4 lists `price` and `source` among App Registry fields. §5 Phase 1 says: *"Collect App Store listing and metadata, price/subscription terms, app updates, verified editorial features, positioning … user reviews … and visible features."* §13 Prompt 01 opens with: *"Verify identity, region, platform, version, pricing."* This document is where that listing-and-pricing capture is specified and recorded.

The capture exists to do four jobs:

1. **Pin every fact to a storefront, a date, and a version.** App Store pages are **per-country**, **per-app-version**, and **mutable**. A price or subtitle with no country, date, and version is not usable evidence — it cannot be reproduced or re-checked. Every observable field is meaningful only as a triple with `country` + `capture_date` + `app_version`.
2. **Make pricing concrete, not a single number.** "Price" on a modern subscription app is a *structure*: free-to-download with in-app purchases; one or more billing periods (weekly / monthly / annual / lifetime); an intro offer or free trial; a hard or soft paywall shown at a specific moment; and prices that differ by storefront and are sometimes A/B-tested per user. §4 decomposes "pricing and subscription terms" into these atomic, independently-verifiable fields.
3. **Record inaccessibility honestly.** Much pricing lives *behind* a paywall, an account wall, or a region lock. When a detail cannot be reached by approved means, it is the literal `unknown` with an `access_barrier` reason — never a guess, never a figure recycled from memory or a third-party site. This is the acceptance criterion's "mark inaccessible details unknown," made structural.
4. **Firewall observation from estimate and from efficacy.** An **observed list price** is a strong, directly-verifiable fact (grade B under TASK-004). A **revenue/download estimate** is a weak inferred figure (TASK-015, grade C, never retention/CAC/LTV). A **positioning claim** ("the calmest habit app") is the developer's marketing, not a HerRays finding. The capture keeps these three strictly separated and never lets an observed price imply how much money the app makes or how well it works.

**Four non-negotiable rules, enforced throughout.**

- **L1 — Every observable fact is a capture or an `unknown`; nothing is inferred.** `price_*`, `subtitle`, `description_excerpt`, `category`, screenshot captions, trial length — each is either captured from the live store/paywall into an `EVD` artifact (TASK-005) **or** the literal token `unknown` with an `access_barrier`. A plausible figure ("about €9.99/month"), a price copied from a third-party aggregator, or a remembered subtitle is a validation failure (§6), not a value. This is the acceptance criterion's "mark inaccessible details unknown."
- **L2 — No observed field exists without a dated, storefront-stamped `EVD` source.** Any non-`unknown` observable value carries at least one `source_evd` id pointing to a TASK-005 record whose artifact (screenshot, page capture, receipt) legibly shows the value **with the storefront and a capture date**. `source_evd: []` ⇒ every observable field must be `unknown` (the v0.1 baseline for all five rows).
- **L3 — An observed price is never converted into revenue, retention, CAC, or LTV.** This capture records *what the app charges*, never *what it earns* or *how many pay*. Multiplying a price by a download estimate, or inferring retention/ARPU/LTV from pricing, is an automatic review failure (§6.6) and belongs — as a clearly-labelled estimate — to TASK-015. (`prd.md` §4: "Never fabricate … retention, CAC, LTV"; §5: "Do not infer retention from reviews or downloads.")
- **L4 — Screenshots and copy excerpts respect copyright, access rules, and privacy.** Captures are stored within legal limits as *reference evidence* (`prd.md` §3.2 "respecting copyright and access restrictions"; §4 "evidence quotes/excerpts within legal limits"): factual store metadata and short excerpts for analysis, not wholesale reproduction or redistribution. No capture circumvents a paywall or account wall by prohibited means; a blocked detail is `unknown` with the barrier recorded. No personal account data (the researcher's payment details, Apple ID) is ever stored in an artifact.

---

## 2. Record identity and lifecycle

### 2.1 The `LST` identifier

One **listing capture** = one record for one app in one storefront on one capture date. A single app accumulates many `LST` records over time (re-captures as price or version changes) and across storefronts (US vs NL prices differ). The *current* truth for an app×storefront is its most recent non-superseded record.

| Property | Rule |
|---|---|
| **Format** | `LST-NNN` — `LST-` prefix + zero-padded sequential integer (`LST-001`, `LST-002`, …). |
| **Scope of an id** | One id = **one capture event**, defined by the tuple `(app_id, country, capture_date)`. Re-capturing the same app/storefront on a later date is a **new** `LST` id that supersedes the prior one (§2.3), never an in-place edit. |
| **Immutable** | An `lst_id` is permanent and never reused. A capture found to be wrong is marked `invalid` with a reason, not deleted (§2.3). |
| **Subject link** | Every record carries exactly one `app_id` ∈ `{APP-001…APP-005}` (TASK-006). Extended-portfolio apps (`APP-006+`, TASK-007) may be captured later under the same contract. |
| **Version stamp** | Every record carries the `app_version` observed at capture. A price captured at v1.2 is not evidence about v2.0. |

### 2.2 Why one record per capture event (and not one editable row per app)

A single mutable "current price" cell per app silently overwrites history and erases the storefront/date/version context the PRD demands. Prices are A/B-tested and change often; last month's annual price is still true *as of its capture* and may be needed to explain a review that complains about it. The capture therefore decomposes into immutable, dated capture events. An app with no capture simply has a `registered` record with everything `unknown` — the honest current state for all five.

### 2.3 Record lifecycle

Each record carries a `capture_state`:

```
registered ─▶ in_capture ─▶ ┬─▶ captured ──▶ (stale when price/version moves) ──▶ superseded
                            ├─▶ partial  (some fields captured, others access-barred → unknown)
                            └─▶ blocked  (storefront/paywall/region inaccessible; all observables unknown)
          (any state) ─▶ invalid  (capture shown to be wrong; reason retained, not deleted)
```

| `capture_state` | Meaning |
|---|---|
| `registered` | The capture is scheduled; no store facts captured yet. **← every row in v0.1.** All observables `unknown`, `source_evd: []`. |
| `in_capture` | WS01 is actively capturing this app×storefront. |
| `captured` | All reachable listing + pricing fields captured into `EVD` artifacts; any unreachable field is `unknown` with a barrier. |
| `partial` | Listing captured but pricing (or vice-versa) is access-barred; the barred side is `unknown`. Honest and common. |
| `blocked` | The storefront, paywall, or region could not be reached by approved means; all observables `unknown` with the barrier recorded. |
| `stale` | A previously-`captured` record whose app version or price is known to have since changed; must be re-captured (a new `LST`) before reuse. |
| `superseded` | Replaced by a newer `LST` for the same app×storefront. Retained read-only for history. |
| `invalid` | Capture demonstrated wrong (e.g. wrong storefront mislabelled); reason retained; opens a `CON` if it contradicted another record (`→ TASK-008`). |

A record is **never deleted**. Superseded and invalid captures persist so the price/positioning history is auditable.

---

## 3. Field dictionary

Each record has the fields below. **Req.**: **M** = mandatory (a captured value *or* a justified `unknown`), **C** = conditional, **O** = optional. The acceptance-criteria essentials — **positioning**, **screenshots**, **pricing**, **subscription terms**, each with **country**, **capture date**, and **source link**, and inaccessible details marked `unknown` — are all **M** (pricing/subscription terms are decomposed in §4; screenshots in §5.3).

### 3.1 Identity, subject, provenance

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `lst_id` | id | M | `LST-NNN`, immutable (§2.1). |
| `app_id` | ref | M | One of `APP-001…APP-005` (TASK-006). |
| `app_name` | string | M | Mirrored from TASK-006 for readability; `app_id` is authoritative. |
| `country` | ISO-3166 | M | The storefront captured (e.g. `US`, `NL`). A listing is per-storefront; a record with no country is unusable. **Not `unknown`** — if you cannot identify the storefront, do not record the capture. |
| `capture_date` | date | M | ISO `YYYY-MM-DD`, the date the Lab captured the surface. Distinct from any app `release_date`. **Never `unknown`** (you always know when you looked). |
| `app_version` | string \| `unknown` | M | The app version the listing/paywall pertains to. `unknown` only if the store page genuinely does not expose it and the installed build is unknown. |
| `platform` | enum | M | `ios_app_store` default (PRD iOS framing); `other` requires justification. |
| `capture_state` | enum | M | §2.3 vocabulary. `registered` for every v0.1 row. |
| `observed_or_secondary` | enum | M | `directly_observed` (captured from the live store/app by the Lab) / `secondary` (from an archive or third party — then `source_evd` must note the intermediary and the record cannot reach `captured` on secondary alone). `prd.md` §3.1. |
| `source_evd` | ref[] | M | `EVD` ids (TASK-005) backing the capture. **`[]` ⇒ all observable fields must be `unknown`** (L2). |
| `supersedes` / `superseded_by` | ref | C | Prior/next `LST` for the same app×storefront (§2.3). |
| `owner_role` | role | M | Accountable role (default: ASO/App Store specialist). |
| `limitations` | string | M | Non-empty. States what the capture does and does not establish (always includes the estimate/efficacy firewall, L3). |
| `last_updated` | date | M | Record edit date. |

### 3.2 Positioning (store product-page metadata)

All **M** as "captured value or `unknown`." Short excerpts only, within legal limits (L4).

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `store_title` | string \| `unknown` | M | The app name exactly as shown on the product page. |
| `subtitle` | string \| `unknown` | M | The App Store subtitle (≤30 chars) — the single most concentrated positioning statement. |
| `promotional_text` | string \| `unknown` | C | The short promo line above the description, if present. |
| `description_excerpt` | string \| `unknown` | M | A short, legally-permissible excerpt of the description used for positioning analysis — **not** the full copyrighted text (L4). Record the excerpt and a note of total length. |
| `primary_category` | enum \| `unknown` | M | e.g. Health & Fitness, Productivity, Lifestyle. The category the app chooses to compete in is itself a positioning signal. |
| `secondary_category` | enum \| `unknown` | C | If shown. |
| `developer_name` | string \| `unknown` | M | The seller/developer as listed. |
| `age_rating` | string \| `unknown` | C | e.g. 4+, 12+. |
| `languages_count` | int \| `unknown` | O | Localization breadth as a reach signal. |
| `whats_new_excerpt` | string \| `unknown` | O | Short excerpt of the latest "What's New" (release cadence/positioning signal); cite the version. |
| `data_collection_summary` | string \| `unknown` | C | The App Store **privacy "nutrition label"** summary (data linked to you / used to track you). A positioning *and* a privacy signal; co-reviewed by the privacy/regulatory reviewer (`→ TASK-040`). |

### 3.3 Screenshots (positioning artifacts)

See §5.3 for the per-screenshot capture record. The listing-level fields are:

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `screenshot_set` | record[] | M | Ordered list of per-screenshot capture records (§5.3). Empty list allowed only when `capture_state ∈ {registered, blocked}`; otherwise at least the first screenshot's capture is expected or the omission noted in `limitations`. |
| `screenshot_count` | int \| `unknown` | M | Number of screenshots the listing displays (ordering is a deliberate positioning choice). |
| `has_app_preview_video` | bool \| `unknown` | C | Whether an auto-playing preview video leads the set. |

### 3.4 Pricing & subscription terms

The headline fields live here; the full price decomposition is **§4** (a record may carry several `price_point` sub-records — e.g. monthly and annual).

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `monetization_model` | enum \| `unknown` | M | `free` / `paid_upfront` / `freemium_iap` / `subscription` / `subscription_plus_lifetime` / `unknown`. The store's "Free · Offers In-App Purchases" vs "€X.XX" is observable even before the paywall. |
| `price_points` | record[] | M | The set of §4 `price_point` sub-records captured. `[]` with `monetization_model: unknown` is the v0.1 baseline; `[]` with a non-free model while `capture_state = captured` requires a paywall-barrier note. |
| `iap_price_range_shown` | string \| `unknown` | C | The "In-App Purchases" price range the product page lists (e.g. the min–max Apple shows) — observable without hitting the paywall. |
| `paywall` | record | M | The §4.3 paywall sub-record (timing, hardness, trigger, copy excerpt). `unknown` fields where not reached. |
| `price_source` | enum | M | `store_product_page` / `in_app_paywall` / `receipt` / `unreached`. Which surface the price came from; `unreached` ⇒ prices `unknown`. |

---

## 4. Pricing & subscription-terms sub-schema

"Pricing and subscription terms" is the richest part of the acceptance criteria and cannot be one number. It is decomposed into **price points** (§4.1), **offer terms** (§4.2) and the **paywall context** (§4.3). Every field is a captured value or `unknown`.

### 4.1 The `price_point` sub-record (one per purchasable option)

A subscription app typically exposes several: e.g. a weekly, an annual, and a lifetime option. Each is a separate `price_point`.

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `product_label` | string | M | As shown (e.g. "Yearly", "Monthly", "Lifetime"). |
| `billing_period` | enum | M | `weekly` / `monthly` / `quarterly` / `semiannual` / `annual` / `lifetime` / `consumable` / `unknown`. |
| `headline_price` | decimal \| `unknown` | M | The displayed price **as a number**, with `currency`. Never rounded or remembered — captured from the artifact. |
| `currency` | ISO-4217 \| `unknown` | M | e.g. `USD`, `EUR`. Tied to the `country` storefront. |
| `price_as_shown` | string \| `unknown` | M | The literal displayed string (e.g. "€59,99/year") preserved verbatim — formatting and placement are themselves signals. |
| `normalized_monthly` | decimal \| `n/a` | C | A **derived, clearly-labelled** monthly-equivalent for comparison (annual ÷ 12). Marked `derived`, never presented as a charged price; `n/a` for `lifetime`/`consumable`. |
| `is_auto_renewing` | bool \| `unknown` | M | Whether the subscription auto-renews. |
| `tier_note` | string | O | What the tier unlocks, if differentiated. |

> **Comparison discipline.** Cross-app price comparison uses `normalized_monthly` **only as an explicitly-derived aid**, never as a claim that the app charges that monthly figure. Weekly-billed prices (common dark-pattern-adjacent pricing) are flagged in `tier_note` so the growth audit (`→ TASK-021`) can examine them. No comparison implies value-for-money without a feature/evidence link.

### 4.2 Offer terms (trials, intro offers, discounts)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `free_trial_offered` | bool \| `unknown` | M | Whether any free trial is presented. |
| `free_trial_length` | string \| `unknown` | C | e.g. "7 days". Captured exactly; `unknown` if not reached. |
| `intro_offer` | string \| `unknown` | C | Introductory/discounted first-period price (e.g. "first year 50% off"), captured verbatim. |
| `trial_requires_payment_method` | bool \| `unknown` | C | Whether starting the trial requires card/Apple-ID payment setup — a known friction/consent signal. |
| `auto_renew_disclosure_present` | bool \| `unknown` | C | Whether the auto-renew terms are clearly disclosed on the paywall (observable compliance signal; co-reviewed `→ TASK-040`). |
| `cancellation_path_note` | string \| `unknown` | O | Any observable statement about how to cancel (the actual cancellation journey is WS02 / TASK-016 J10, not captured here). |

### 4.3 The `paywall` sub-record (purchase context)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `paywall_reached` | bool | M | Whether the Lab reached the paywall at all. `false` ⇒ all §4.1/§4.2 prices `unknown` unless shown on the product page. |
| `paywall_timing` | enum \| `unknown` | M | When the paywall appears: `pre_onboarding` / `during_onboarding` / `after_first_value` / `on_feature_gate` / `settings_only` / `unknown`. A key growth signal for TASK-021. |
| `paywall_hardness` | enum \| `unknown` | M | `hard` (no use without paying) / `soft` (dismissible) / `metered` (limited free use) / `unknown`. |
| `paywall_trigger` | string \| `unknown` | C | What action surfaced it (e.g. "tapping 'Start routine'"). |
| `paywall_copy_excerpt` | string \| `unknown` | C | Short, legally-permissible excerpt of the paywall's value proposition/headline (L4) — for the TASK-021 audit; not the full copy. |
| `default_selected_option` | string \| `unknown` | C | Which plan is pre-selected (a nudge signal). |
| `restore_purchase_present` | bool \| `unknown` | O | Whether a "Restore Purchases" affordance is shown (App Store policy expectation). |

---

## 5. Positioning & screenshot capture taxonomy

### 5.1 What "positioning" means here

Positioning is **how the app presents itself to a prospective buyer** — the subtitle, promo text, description framing, chosen category, and the ordered screenshot narrative. It is the developer's *claim about the app*, captured verbatim-in-excerpt as a factual observation of the store page. It is **not** a HerRays judgement about whether the app delivers on it (that is the teardown, WS02) and **not** evidence the app works (L3).

### 5.2 Positioning-capture rules

- Capture the **subtitle and primary category verbatim** — they are short, high-signal, and legally safe to record in full.
- Capture **excerpts** of promotional text and description (L4), with a note of the full length and structure (e.g. "opens with 3 benefit bullets, then social proof, then feature list").
- Record the **screenshot ordering and caption text** as given — ordering is a deliberate narrative choice (what the app leads with reveals its priority job-to-be-done).
- Never paraphrase a positioning claim into a fact. "Positioned as 'the gentlest habit tracker'" is a captured *claim*; "is the gentlest habit tracker" would be a fabricated judgement (§6.3).

### 5.3 The per-screenshot capture record (member of `screenshot_set`)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `order_index` | int | M | Position in the listing (1 = first shown). |
| `artifact_evd` | ref | M | `EVD` id of the stored screenshot image (TASK-005), captured within legal limits (L4). |
| `caption_text` | string \| `unknown` | M | The marketing caption overlaid/under the screenshot, captured verbatim. |
| `depicted_surface` | string \| `unknown` | C | What app surface it shows (e.g. "onboarding goal picker"), as a neutral description. |
| `device_frame` | string \| `unknown` | O | Device shown (iPhone/iPad), a reach/positioning signal. |
| `capture_device` | string | M | The Lab device/OS used to view the store (for reproducibility). |
| `storefront_stamp_legible` | bool | M | Whether the artifact legibly shows the storefront/date context (required for the screenshot to count as evidence). |

### 5.4 Signals present on the listing but **excluded** from positioning/pricing (routed elsewhere)

| Signal seen on the page | Why excluded here | Where it belongs |
|---|---|---|
| Star rating / rating count | **Crowd signal**, not positioning or price. | Review workstream (TASK-013/014); may be noted with a label but not treated as positioning. |
| Top-chart / category rank | **Algorithmic**, not editorial or positioning. | TASK-015 (estimates), labelled algorithmic; **never** TASK-010 editorial. |
| "Editor's Choice" / "App of the Day" badge | **Editorial recognition** — a separate verification. | TASK-010; a screenshot here may be *cited* there as `EVD`, but it is not a listing attribute. |
| Download/revenue estimates from aggregators | **Inferred**, not observed. | TASK-015, labelled estimate; never retention/CAC/LTV (L3). |

---

## 6. Forbidden values and validation failures

A record **fails validation** (and cannot reach `captured`) if any of the following is true:

1. **Observed value without a dated, storefront-stamped source.** Any non-`unknown` observable field while `source_evd: []`, or whose cited `EVD` artifact does not legibly show the value with storefront + capture date (violates L2).
2. **Inferred or recalled price/term.** A `headline_price`, `free_trial_length`, `subtitle`, etc. carrying a guessed, rounded, remembered, or third-party-aggregator value with no capturing `EVD` ("≈€9.99", "usually 7-day trial"). The fix is `unknown` + `access_barrier`, not a guess (violates L1).
3. **Positioning claim stated as fact.** Recording a developer's marketing claim as a HerRays finding ("is the calmest habit app") rather than as a captured claim excerpt (violates §5.2).
4. **Missing country/date/version context.** `country`, `capture_date`, or (for a `captured` record) `app_version` absent, so the fact cannot be reproduced; or `country = unknown` (you must know the storefront to record a capture).
5. **Algorithmic/crowd/editorial signal mislabelled.** A star rating, chart rank, or editorial badge recorded as positioning or price (belongs to §5.4 destinations).
6. **Price converted into revenue/retention/efficacy.** Any field, derivation, or note that multiplies price by downloads, or infers revenue, ARPU, retention, CAC, LTV, or effectiveness from pricing (violates L3; belongs to TASK-015 as an estimate — and retention/CAC/LTV are never fabricated at all, `prd.md` §4).
7. **Full copyrighted text or circumvented access.** Storing the entire description/paywall copy rather than a legally-permissible excerpt, reproducing screenshots beyond reference use, or capturing a detail by circumventing a paywall/account/region barrier (violates L4). The barred detail must be `unknown`.
8. **Edited-in-place price history.** Overwriting a prior capture's price instead of creating a new superseding `LST` (violates §2.2/§2.3), destroying the dated history.
9. **Normalized price presented as charged.** `normalized_monthly` shown as the price the app charges rather than a labelled derivation (violates §4.1 comparison discipline).
10. **Stored personal payment data.** Any artifact containing the researcher's Apple ID, card, or receipt-identifying personal data (violates L4 privacy rule).
11. **Deleted invalid capture.** A wrong capture removed rather than set `invalid` with a reason (violates §2.3).
12. **Missing mandatory field.** Any **M** field in §3/§4 absent (not even `unknown`), or `limitations` empty.

---

## 7. Validation rules (entry gate)

A record is accepted into the capture register when:

1. `lst_id` matches `LST-NNN`, is unique, and is not reused (§2.1).
2. `app_id` ∈ `{APP-001…APP-005}`; `country` is a real storefront (not `unknown`); `capture_date` present; `platform` set.
3. All **M** fields (§3, §4) present; every observable field is a captured value **or** the literal `unknown` with an `access_barrier` (L1); `limitations` non-empty.
4. `source_evd` consistency: if `source_evd: []` then **every** observable field (positioning, screenshots, prices, paywall) is `unknown` (L2). Any non-`unknown` observable requires a backing `EVD`.
5. `observed_or_secondary` set; a `captured` state is not reached on `secondary` evidence alone.
6. No price is derived into revenue/retention/CAC/LTV/efficacy (L3, §6.6); `normalized_monthly` (if present) is labelled `derived` (§6.9).
7. Copyright/access/privacy rules satisfied (L4): excerpts not full texts, no circumvention, no personal payment data (§6.7, §6.10).
8. No forbidden value (§6) is present.

**This v0.1 document is validated against these rules in §8.5.**

---

## 8. The capture register

### 8.1 Current state (honest baseline)

**No listing or price has been captured by the Lab for any of the five core apps.** This is the correct, expected state at WS01 entry. Each app below is registered with a single `LST` record at `capture_state: registered`, every observable field at the literal `unknown`, and `source_evd: []`. Prices, subtitles, trials, and screenshots will be captured per storefront during Phase 1 market intelligence (`prd.md` §5), at which point each `unknown` resolves to a captured value **or** to `unknown` + an `access_barrier` reason.

> **Why nothing is pre-filled from memory.** App Store prices and subscription terms are frequently changed, differ by storefront, and are increasingly **A/B-tested per user** — so any figure not captured from the live surface on a known date is unreliable by construction. Recording a remembered "€9.99/month" would both violate L1 and risk being simply wrong. The register therefore asserts **no price and no positioning** until a dated capture exists.

### 8.2 Registered capture records (all `registered`, all observables `unknown`)

Storefront is seeded to `US` as the primary reference storefront (`prd.md` iOS framing; the largest App Store surface); an `NL` capture (the HerRays operating region implied by the registry) is a planned second `LST` per app. The storefront set is confirmed by the Program Director during Phase 0 (§10).

| `lst_id` | `app_id` | `app_name` | `country` | `app_version` | `monetization_model` | `price_points` | `subtitle` | `primary_category` | `paywall.paywall_timing` | `source_evd` | `capture_state` |
|---|---|---|---|---|---|---|---|---|---|---|---|
| LST-001 | APP-001 | Routinery | `US` | `unknown` | `unknown` | `[]` | `unknown` | `unknown` | `unknown` | `[]` | **`registered`** |
| LST-002 | APP-002 | Fabulous | `US` | `unknown` | `unknown` | `[]` | `unknown` | `unknown` | `unknown` | `[]` | **`registered`** |
| LST-003 | APP-003 | (Not Boring) Habits | `US` | `unknown` | `unknown` | `[]` | `unknown` | `unknown` | `unknown` | `[]` | **`registered`** |
| LST-004 | APP-004 | Habitify | `US` | `unknown` | `unknown` | `[]` | `unknown` | `unknown` | `unknown` | `[]` | **`registered`** |
| LST-005 | APP-005 | Griply | `US` | `unknown` | `unknown` | `[]` | `unknown` | `unknown` | `unknown` | `[]` | **`registered`** |

**Shared `limitations` on LST-001…005 (v0.1):** *"No store page or paywall captured. This record asserts no price, subtitle, screenshot, trial, or positioning for this app. Any public or remembered figure is unverified until captured from the live storefront on a known date at a known version. Captured prices, when present, are observations of what the app charges — never evidence of revenue, retention, CAC, LTV, or effectiveness (routed to TASK-015 as estimates only), and never proof the app works."*

### 8.3 Per-app capture notes

- **LST-001 · Routinery** — Capture the routine/timer positioning (subtitle + lead screenshots) and whether the paywall is `pre_onboarding` or `after_first_value`; note any weekly-billed `price_point` for the TASK-021 growth audit.
- **LST-002 · Fabulous** — Known for a heavily-designed onboarding; expect the paywall `during_onboarding` or `after_first_value`. Capture the paywall copy excerpt (L4) and default-selected plan, but record **no trial length or price from memory** — capture or `unknown`.
- **LST-003 · (Not Boring) Habits** — Capture the monetization model precisely (it may be `paid_upfront`/`subscription_plus_lifetime` rather than pure subscription); record the full screenshot ordering since its positioning is visual-first.
- **LST-004 · Habitify** — Cross-platform; capture the **iOS** storefront price explicitly and label the storefront (a web/Play price is a different record, not the App Store price).
- **LST-005 · Griply** — Smaller entrant; `partial`/`blocked` is a plausible honest outcome if the paywall is account-gated. Record `unknown` + `access_barrier` rather than inferring the price.

### 8.4 Illustrative (synthetic) worked record — shape only

> **This record is SYNTHETIC and labelled as such. It is not a claim about any real app, price, or storefront.** It exists only to show reviewers what a completed `captured` record looks like under the contract. All ids are fictitious (`LST-SYNTH-A`, `EVD-SYNTH-*`, `APP-SYNTH-X`).

**LST-SYNTH-A — a `captured` record (shape demonstration):**

| Field | Value |
|---|---|
| `lst_id` | LST-SYNTH-A *(SYNTHETIC)* |
| `app_id` | APP-SYNTH-X *(fictitious)* |
| `country` | `US` |
| `capture_date` | 2026-11-22 *(synthetic)* |
| `app_version` | 4.2.1 *(synthetic)* |
| `observed_or_secondary` | `directly_observed` |
| `monetization_model` | `subscription_plus_lifetime` |
| `subtitle` | "Tiny habits, gentle progress" *(synthetic positioning claim, captured verbatim)* |
| `primary_category` | Health & Fitness |
| `description_excerpt` | "…build routines that flex around your day…" *(short excerpt; full description ~1,100 chars, not reproduced — L4)* |
| `screenshot_count` | 6 |
| `screenshot_set[1]` | `{order_index: 1, artifact_evd: EVD-SYNTH-811, caption_text: "Start in under a minute", storefront_stamp_legible: true}` |
| `price_points[1]` | `{product_label: "Yearly", billing_period: annual, headline_price: 39.99, currency: USD, price_as_shown: "$39.99/yr", normalized_monthly: 3.33 (derived), is_auto_renewing: true}` |
| `price_points[2]` | `{product_label: "Lifetime", billing_period: lifetime, headline_price: 79.99, currency: USD, price_as_shown: "$79.99", normalized_monthly: n/a, is_auto_renewing: false}` |
| `free_trial_offered` | true · `free_trial_length` "7 days" · `trial_requires_payment_method` true |
| `paywall` | `{paywall_reached: true, paywall_timing: after_first_value, paywall_hardness: soft, paywall_trigger: "tapping 'See my progress'", default_selected_option: "Yearly", restore_purchase_present: true}` |
| `price_source` | `in_app_paywall` |
| `source_evd` | [EVD-SYNTH-810 *(product page)*, EVD-SYNTH-811 *(screenshot 1)*, EVD-SYNTH-820 *(paywall capture showing US storefront + 2026-11-22)*] |
| `capture_state` | **`captured`** |
| `limitations` | "Captured on the US storefront on 2026-11-22 at v4.2.1 only; prices A/B-test and differ by storefront, so not generalizable to other dates/regions. `normalized_monthly` is a derived comparison aid, not a charged price. Records what the app charges — says nothing about revenue, retention, or whether it works." |

### 8.5 Validation of this document

Checked against §7:

1. **Ids** — `LST-001`…`LST-005` unique, sequential, none reused; synthetic row namespaced `LST-SYNTH-A`. ✅
2. **Context present** — every row carries a real `country` (`US`), a `capture_date` is defined by the register, `platform = ios_app_store`; `app_version = unknown` is permitted at `registered`. ✅
3. **Mandatory fields / `unknown` discipline** — all five rows carry every **M** field; every observable (subtitle, category, prices, paywall timing, screenshots) is the literal `unknown`; shared `limitations` is non-empty and states the estimate/efficacy firewall. ✅ (L1, §6.12)
4. **Source consistency** — `source_evd: []` on all five rows ⇒ every observable field is `unknown` (L2); no observed value exists without a backing `EVD`. ✅ (§6.1)
5. **No inferred price/positioning** — no `headline_price`, trial, subtitle, or rank recalled or copied from a third party; the only populated values live in the clearly-labelled synthetic row (§8.4). ✅ (§6.2, §6.3)
6. **No estimate/efficacy leakage** — no price converted to revenue/retention/CAC/LTV/efficacy anywhere; the synthetic `normalized_monthly` is labelled `derived`. ✅ (L3, §6.6, §6.9)
7. **Copyright/access/privacy** — no full copyrighted text (synthetic excerpt only), no circumvented access, no personal payment data stored. ✅ (L4, §6.7, §6.10)
8. **No forbidden value** — no mislabelled crowd/algorithmic/editorial signal, no in-place price overwrite, no deleted capture. ✅ (§6)

Result: **5/5 registered rows valid at `capture_state: registered`.** The register is a correct, honest empty scaffold: it asserts **no price and no positioning** for any real app, it fixes the storefront/date/version context every capture must carry, and it decomposes "pricing and subscription terms" so that once WS01 captures live surfaces, each record resolves deterministically to `captured`, `partial`, or `blocked`.

---

## 9. Dependencies and cross-references

**Upstream (consumed by this capture):**
- `prd.md` §3 point 1 — the "source URL, captured date, app version, country, observed-or-secondary" registration rule this task executes; point 2 — copyright/access respect.
- `prd.md` §4 — App Registry `price`/`source` fields; Evidence Library provenance; the no-fabricate-retention/CAC/LTV rule.
- `prd.md` §5 Phase 1 — "Collect App Store listing and metadata, price/subscription terms … positioning … Do not infer retention from reviews or downloads."
- `prd.md` §13 Prompt 01 — "Verify identity, region, platform, version, pricing."
- **TASK-006** (App Registry) — supplies `APP-001…APP-005`; this capture resolves their `price`/`version`/`country`/`source` fields. `↔`
- **TASK-005** (`EVD` schema) — every screenshot/listing/paywall artifact is an `EVD` record with capture date, storefront, and provenance. `↔`
- **TASK-004** (evidence grading) — an observed list price is a strong direct observation (grade B); a positioning interpretation is weaker; an estimate is capped C. `↔`

**Downstream (this capture feeds):**
- **TASK-006** — resolves each app's `price`/`version`/`country` registry fields from captured records.
- **TASK-010** (editorial ledger) — a screenshot of a featured surface captured here is cited there as a verification `EVD`; chart rank/rating surfaced here is routed to §5.4, never logged as editorial.
- **TASK-012** (feature comparison matrix) — reads positioning (subtitle/category) and pricing columns, with the inadmissibility/estimate caveats carried through.
- **TASK-015** (commercial estimates) — receives any download/revenue/chart signal seen on the page, clearly labelled as an **estimate**, strictly separate from the observed prices captured here.
- **TASK-021** (growth/UX-writing audit) — reads `paywall_timing`, `paywall_hardness`, `default_selected_option`, offer terms, and copy excerpts to assess first-value and paywall design (without unsupported conversion claims).
- **TASK-040** (privacy/clinical boundary checklist) — co-reviews `data_collection_summary` and `auto_renew_disclosure_present` as observable disclosure signals.
- **TASK-038** (phased tool purchasing) — the volume/coverage of manual capture informs whether paid listing-intelligence access (Appfigures/Mobbin) is justified.
- **Gate 1** (`prd.md` §11) — reads this register's captured facts and `unknown`/`access_barrier` notes as part of "benchmark coverage, source-linked evidence, unknowns and access limitations documented."

---

## 10. Open unknowns and change log

**Open unknowns (by design — resolved during WS01 capture, not here):**
- The actual price, currency, billing periods, trial length, intro offer, and paywall timing/hardness for **each of the five apps in each in-scope storefront** — currently **all `unknown`** (no capture performed).
- The actual subtitle, category, description framing, screenshot count/ordering, and data-collection summary for each app.
- The confirmed **storefront set** to capture (§8.2 seeds `US`; `NL` is the planned second storefront per the HerRays operating region — the Program Director ratifies the set in Phase 0).
- Which pricing details are **access-barred** (account-gated paywalls, region locks) and must stand as `unknown` + `access_barrier` versus which are reachable.
- Whether any app runs **per-user A/B-tested pricing**, in which case a single capture is a sample, not the price — to be flagged in `limitations` when observed.
- The cadence of **re-capture** (prices move; a `captured` record goes `stale`), set by the Program Director against the §11 Gate 1 timeline.

**Change log:**
- **v0.1 (2026-11-22)** — Initial capture scaffold. Defined the `LST` record contract (§3), the pricing & subscription-terms sub-schema with `price_point`/offer-terms/`paywall` sub-records (§4), the positioning + per-screenshot capture taxonomy with copyright/consent rules and the excluded-signal routing (§5), forbidden-value/validation rules (§6–§7), five `registered` capture records for the core apps with all observables `unknown` (§8.2), one synthetic `captured` demonstration (§8.4), and self-validation (§8.5). **No listing or price captured; no price, subtitle, trial, or screenshot asserted for any real app.** Status: **Proposed — capture schema + seeded records, no listing yet captured.**
