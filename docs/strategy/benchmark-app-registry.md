# HerRays Benchmark App Registry

**Deliverable:** TASK-006 — Create the benchmark app registry
**Workstream:** Foundation (feeds Competitive Intelligence / WS01)
**Version:** 0.1 · **Status:** Proposed — registered, not yet captured
**Owner (accountable role):** Product / market lead (WS01), under Program Director custody
**Reviewers:** ASO/App Store specialist · PR/editorial specialist · Privacy/regulatory reviewer · Program Director
**Source basis:** `prd.md` §3 (Benchmark portfolio, core five, expanded portfolio, provenance discipline), §4 (App Registry `APP-001` fields, source handling, no-fabrication rule), §5 Phase 1 (market-intelligence capture), §11 Gate 1 (research-foundation gate), §13 Prompt 01 (verify identity/region/platform/version/pricing/editorial before use)

---

## 0. How to read this document

This document is the **App Registry** named in `prd.md` §4 (`APP-001`): the single source-of-truth list of every app the Lab studies, each with a stable identifier and the minimum identity fields a reviewer needs to know *which* artifact a downstream observation is about.

It is a **registry scaffold**, not a captured dataset. It does two things and only two:

1. **Registers the five mandatory core apps** (`prd.md` §3) with unique `APP` identifiers and the fields required by the acceptance criteria — platform, country, version, access status — plus the benchmark role, learning question, and caution the PRD assigns to each.
2. **Defines the field contract** (§3), the access-status vocabulary (§4), and the benchmark-role taxonomy (§5) so that when WS01 begins market-intelligence capture (`prd.md` §5 Phase 1), every registered app is populated consistently and every claim about it is traceable to a captured source.

> **No-fabrication statement.** This registry contains **no captured App Store data**. No version number, release date, price, subscription term, country availability, or editorial-recognition claim is asserted here, because none has been verified by the Lab. Every such field is held at the literal token `unknown` and marked as a WS01 capture target. The only fields populated are (a) the app name and `APP` id, (b) the benchmark role / learning question / caution, which are quoted or paraphrased directly from `prd.md` §3, and (c) the *platform expectation*, which is explicitly labelled **inferred** from the PRD's App-Store benchmark framing, not observed. Nothing in this file may be cited as evidence; it is a container that *points at* evidence to be captured later.

**Scope boundary (what this task is and is not).**
- **TASK-006 (this document) = the App Registry** — the identity record for an app as a whole: its `APP` id, platform, country, version, price, source, benchmark role, and our access status to it. It answers *"which apps, identified how, and can we get into them?"*
- **It is not the evidence record.** A single captured fact about an app (a screenshot, a review, a price seen on a date) is an `EVD` record under **TASK-005** and cites this `APP` id as its subject. One app ↔ many `EVD` records.
- **It is not the listing/pricing capture.** Populating positioning, screenshots, and subscription terms is **TASK-011** (Capture benchmark listings and pricing); this registry defines the slots that task fills.
- **It is not the editorial-recognition ledger.** Verifying "App of the Day" and other Apple editorial claims with dated sources is **TASK-010**; this registry carries only a *pointer* (`editorial_recognition_ref → TASK-010`), never a claimed award.
- **It is not the extended portfolio rubric.** Growing the list to the 15–20-app portfolio with inclusion/exclusion scoring is **TASK-007**; this registry defines the record those apps will also use, and §8.2 reserves the id block for them.

---

## 1. Purpose and non-negotiables

`prd.md` §4 mandates an App Registry with fields "App, platform, country, version, date, price, source, benchmark role" and id scheme `APP-001`. `prd.md` §13 Prompt 01 requires the Lab to "Verify identity, region, platform, version, pricing and any claimed Apple editorial recognition" *before* using an app as evidence, and `prd.md` §3 warns explicitly that the core five "are research starting points, not a claim that all five have verified App of the Day recognition." This registry operationalizes those instructions.

The registry exists to do four jobs:

1. **Fix identity.** Give every studied app one permanent `APP` id so every teardown step, review code, capability record, and decision can name *exactly which app and which build* it refers to — with no ambiguity between, e.g., two apps with similar names or two versions of one app.
2. **Record access reality.** State honestly whether the Lab can actually get into the app (free, paid, region-locked, account-required, discontinued), because `prd.md` §5/§10 ties the whole capture plan to access, and an unverifiable claim about an inaccessible app must be visibly flagged.
3. **Hold the benchmark intent.** Carry *why* each app is in scope — its benchmark role and the specific learning question (`prd.md` §3) — so capture stays purposeful and the "do not build a collage of competitor features" mandate (`prd.md` §9/executive mandate) is enforceable.
4. **Expose unknowns, not hide them.** Make the unverified state of every empirical field (version, price, country, editorial recognition) a first-class, visible value, so Gate 1 (`prd.md` §11: "unknowns and access limitations documented") can read the registry and see precisely what is still missing.

**Three non-negotiable rules, enforced throughout.**

- **A1 — Unknown is written as `unknown`, never guessed.** Any field the Lab has not itself verified against a real source is the literal token `unknown` (optionally with a `*_note` describing what is needed to resolve it). A plausible-looking fabricated version string, price, or release date is a validation failure (§6), not a convenience. This is the acceptance criterion's "leave unverified fields explicitly unknown," applied to every row.
- **A2 — No empirical field is populated without an `EVD` source.** The moment a field moves off `unknown` to a concrete value (e.g. `version: 7.2.1`), it must carry a `source_evd` pointer to a TASK-005 evidence record that captured it, with a capture date. A value with no source pointer is invalid. This registry ships with every empirical field at `unknown`, so it holds *zero* unsourced values by construction.
- **A3 — Editorial recognition is never asserted here.** Apple "App of the Day" / "App of the Year" / feature claims live only in the TASK-010 ledger after dated-source verification. This registry's `editorial_recognition_ref` field points to that ledger or reads `unverified`; it never states or implies an award was received (`prd.md` §3: "Reverify any claimed App of the Day dates and geographies before using them as evidence").

---

## 2. Record identity and lifecycle

### 2.1 The `APP` identifier

| Property | Rule |
|---|---|
| **Format** | `APP-NNN` — `APP-` prefix + zero-padded sequential integer (`APP-001`, `APP-002`, …), matching the `prd.md` §4 convention (`APP-001`). |
| **Scope of an id** | One id = **one product**, not one build. Different OS versions / releases of the same product share the `APP` id and are distinguished by the `version` field and by the `JRN`/`EVD` records that cite a specific build. |
| **Immutable** | An `app_id` is permanent and never reused, even if an app is dropped from scope (its record moves to `access_status: discontinued` or `scope_status: dropped`, it is not deleted). |
| **Distinct products, distinct ids** | A developer's separate apps (e.g. a "Pro" companion app shipped as a separate SKU) get separate `APP` ids, cross-linked via `related_app_ids`. |
| **Renames** | If a product is renamed, the id stays; the former name is preserved in `prior_names`. |

### 2.2 Registry row lifecycle

Each row carries a `capture_state` describing how populated it is (independent of the app's own `access_status` in §4):

| `capture_state` | Meaning |
|---|---|
| `registered` | The row exists with id, name, benchmark role, and intent; empirical fields are `unknown`. **← every row in this v0.1 document is here.** |
| `in_capture` | WS01 has begun populating identity fields from real sources (`prd.md` §5 Phase 1). |
| `captured` | All mandatory identity fields carry sourced values *or* a justified `unknown`; ready to feed teardown (WS02). |
| `verified` | A second role (ASO specialist / Program Director) confirmed the identity fields match the sources. |
| `stale` | A previously captured field (e.g. price, version) is past its re-verification window and must be refreshed before reuse as current. |

A row is **never deleted**. An app removed from scope is marked `scope_status: dropped` with a rationale, preserving the audit trail.

---

## 3. Field dictionary

Each registered app is one record with the following fields. **Req.** marks requirement: **M** = mandatory to populate (with a value *or* a justified `unknown`), **C** = conditional, **O** = optional. Every field named in the acceptance criteria — **platform, country, version, access status** — is **M**.

### 3.1 Identity

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `app_id` | id | M | `APP-NNN`, immutable (§2.1). |
| `app_name` | string | M | Canonical product name as it appears on the store listing. |
| `prior_names` | list | O | Former names if renamed; else `[]`. |
| `developer` | string | M | Publisher/developer entity exactly as listed. `unknown` until verified. |
| `app_store_id` | string | C | Apple numeric app id / bundle id once the listing is located; `unknown` until then. Mandatory once `capture_state ≥ captured`. |
| `canonical_url` | url | C | Store listing URL (region-specific; pair with `country`). `unknown` until located. |

### 3.2 Platform, region, version (acceptance-criteria core)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `platform` | enum+note | M | One or more of `ios`, `ipados`, `watchos`, `android`, `web`, `macos`. Each value tagged `observed` or `inferred`. In this v0.1, platform is `inferred` from the PRD benchmark framing (see §8 note) and must be confirmed against the live listing. |
| `country` | list(ISO-3166) | M | Storefront(s) the record pertains to (e.g. `[US]`, `[NL]`). Capture is storefront-specific because pricing, availability, and editorial features differ by country (`prd.md` §13 Prompt 01 "region"). `unknown` until a storefront is actually opened. |
| `version` | string | M | The exact app build string observed (e.g. `7.4.2`), **paired with** `version_observed_date`. `unknown` until a build is actually run or read from the listing. Never inferred. |
| `version_observed_date` | date | C | ISO date the `version` was seen. Mandatory whenever `version ≠ unknown`. |
| `os_tested` | string | C | OS version the build was exercised on during teardown; `unknown` until WS02. |

### 3.3 Commercial (capture targets — not populated here)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `price_model` | enum | M | `free`, `freemium`, `subscription`, `paid_once`, `unknown`. `unknown` here. |
| `price_detail` | string | C | Exact tiers/terms *with currency, country, and capture date* — owned by **TASK-011**; this registry holds only a `listing_ref`. Never store an inferred price. |
| `listing_ref` | ref | C | Pointer to the TASK-011 listing/pricing capture (`→ TASK-011`); `unverified` until captured. |

### 3.4 Benchmark intent (populated from `prd.md` §3)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `benchmark_tier` | enum | M | `core` (mandatory deep dive) or `extended` (`prd.md` §3). The five rows here are `core`. |
| `benchmark_role` | enum | M | Declared reference type (§5), per `prd.md` §3 requirement that "each entry must declare whether it is a direct competitor, behavior reference, visual reference, health-data reference or commercial reference." |
| `learning_question` | string | M | The specific question this app is in scope to answer (`prd.md` §3 core-five table). |
| `caution` | string | M | The PRD-stated interpretive caution — what *not* to conclude from this app (`prd.md` §3). Keeps popularity-≠-efficacy discipline visible. |
| `capabilities_to_inspect` | list | O | PRD-named features to examine first (`prd.md` §3). |

### 3.5 Access, provenance, governance

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `access_status` | enum | M | How the Lab can actually use the app (§4). `not_yet_assessed` here. |
| `access_notes` | string | C | Region lock, account/paywall requirement, consent constraints; what blocks capture. |
| `editorial_recognition_ref` | ref | M | Pointer to the TASK-010 editorial ledger, or `unverified`. **Never** an award claim (A3). |
| `source_evd` | list | M | `EVD` ids (TASK-005) backing any populated empirical field; `[]` while all such fields are `unknown`. |
| `capture_state` | enum | M | §2.2. `registered` for every row here. |
| `scope_status` | enum | M | `active` or `dropped` (+rationale). All five `active`. |
| `related_app_ids` | list | O | Cross-links to companion/related `APP` ids. |
| `owner_role` | role | M | Accountable role for this row's capture (default: Product / market lead). |
| `last_updated` | date | M | Registry-row edit date (distinct from `version_observed_date`). |

---

## 4. Access-status taxonomy

`access_status` records the **Lab's ability to study the app**, which directly governs how much of the capture plan (`prd.md` §5) is even possible. It is deliberately separate from the app's commercial `price_model`: an app can be free to download yet gate its core flow behind an account or a subscription.

| `access_status` | Meaning | Capture implication |
|---|---|---|
| `not_yet_assessed` | Access has not been checked. **← all five rows in v0.1.** | Must be resolved in WS01 Phase 0/1 before teardown is planned. |
| `full_free` | Core flows usable without payment. | Full ten-journey teardown (`prd.md` §5) feasible. |
| `full_paid` | Full access obtained via a justified paid subscription (`prd.md` §10 purchase rule: buy access only when required). | Feasible; record cost and the purchase decision (`→ DEC`). |
| `partial_paywalled` | Download free; key journeys (coaching, programs, analytics) behind a paywall not purchased. | Teardown limited to pre-paywall journeys; paywalled steps marked `unknown`/`inaccessible`, never guessed. |
| `account_required` | Core use requires account creation / personal data. | Privacy reviewer must clear the data the Lab creates/supplies (`prd.md` §4/§6); use minimal synthetic test accounts. |
| `region_locked` | Not available in the Lab's storefront(s). | Needs an alternate verified storefront or is marked out-of-reach; no cross-region inference of features. |
| `discontinued` | No longer available / maintained. | Register as a negative/discontinued example (`prd.md` §3 "Include negative and discontinued examples"); capture from archives with provenance. |
| `inaccessible` | Cannot be accessed by any approved means. | No direct observation possible; any claim must rest on clearly-labelled secondary sources only. |

**Rule.** Where `access_status` restricts a journey, the affected captured fields read `inaccessible` (a kind of `unknown` with a reason), and no feature may be asserted for a flow the Lab could not reach.

---

## 5. Benchmark-role taxonomy

`prd.md` §3 requires each entry to declare its reference type. The controlled vocabulary:

| `benchmark_role` | Definition | Primary question it serves |
|---|---|---|
| `direct_competitor` | A habit/behavior-change product competing for the same user and job. | Feature parity, positioning, monetization, dissatisfaction themes. |
| `behavior_reference` | Studied for its behavior-change *mechanism* regardless of market overlap. | How intention becomes repeated action; BCT instantiation. |
| `visual_reference` | Studied for visual/motion craft and distinctiveness. | Hierarchy, delight, animation cost/benefit. |
| `health_data_reference` | Studied for health-data integration and intelligence. | HealthKit use, data→insight, clinical-adjacent boundaries. |
| `commercial_reference` | Exceptional consumer product studied for engagement/retention craft. | Onboarding, habit loops, lifecycle — *not* a claim of clinical relevance. |

An app may hold a **primary** role plus **secondary** roles; the five core apps are all `direct_competitor` primary (they compete in the habit/lifestyle category) with the secondary lens `prd.md` §3 assigns to each (recorded per row in §8).

---

## 6. Forbidden values and validation failures

A registry row **fails validation** (and cannot advance past `registered`) if any of the following is true:

1. **Fabricated empirical value.** Any `version`, `price_detail`, `country`, `developer`, or `app_store_id` carries a concrete value with no `source_evd` pointer and capture date (violates A2). The fix is `unknown`, not a guess.
2. **Asserted editorial recognition.** Any field states or implies an Apple feature/award without a resolved `editorial_recognition_ref` to a dated TASK-010 record (violates A3). "App of the Day" text anywhere outside a pointer is an automatic fail.
3. **Inferred value mislabelled as observed.** A `platform` (or any field) tagged `observed` without an artifact/listing behind it. In v0.1, platform must be tagged `inferred`.
4. **Version without date.** `version ≠ unknown` while `version_observed_date` is empty.
5. **Feature claimed for an inaccessible flow.** A capability asserted for a journey behind a paywall/region lock the Lab did not reach (contradicts §4).
6. **Retention/CAC/LTV smuggled in.** Any competitor retention, CAC, LTV, or internal metric recorded as fact (`prd.md` §4: "Never fabricate … actual retention, CAC, LTV … or internal competitor data"). Third-party *estimates* are out of scope for this registry and belong, clearly labelled, to the commercial-estimates template (`→ TASK-015`).
7. **Missing mandatory identity.** `app_id`, `app_name`, `platform`, `country`, `version`, `access_status`, `benchmark_role` absent (not even `unknown`).

---

## 7. Validation rules (entry gate)

A row is accepted into the registry when:

1. `app_id` matches `APP-NNN`, is unique, and is not a reused id (§2.1).
2. All **M** fields are present; empirical ones are either sourced (A2) or the literal `unknown` (A1).
3. `platform` values each carry an `observed`/`inferred` tag; any `observed` tag has a backing `source_evd` (none in v0.1).
4. `benchmark_role` ∈ §5 vocabulary; `benchmark_tier`, `learning_question`, `caution` are populated from `prd.md` §3 for `core` apps.
5. `access_status` ∈ §4 vocabulary.
6. `editorial_recognition_ref` is a pointer or `unverified` — never an award claim (§6.2).
7. No forbidden value (§6) is present.

**This v0.1 document is validated against these rules in §8.3.**

---

## 8. The registry

### 8.1 Core five (mandatory deep dives)

Registered from `prd.md` §3. Benchmark role, learning question, caution, and capabilities-to-inspect are quoted/paraphrased from the PRD core-five table. **Every empirical field is `unknown` and is a WS01 capture target.** Platform is `inferred` (see note after the table).

---

#### APP-001 · Routinery

| Field | Value |
|---|---|
| `app_id` | **APP-001** |
| `app_name` | Routinery |
| `developer` | `unknown` — *verify on listing (WS01)* |
| `app_store_id` | `unknown` |
| `canonical_url` | `unknown` |
| `platform` | `ios` *(inferred — PRD benchmark framing; confirm on listing)* |
| `country` | `unknown` — *capture is storefront-specific* |
| `version` | `unknown` — *never inferred* |
| `price_model` | `unknown` |
| `listing_ref` | `unverified` → TASK-011 |
| `benchmark_tier` | `core` |
| `benchmark_role` | `direct_competitor` (secondary: `behavior_reference`) |
| `learning_question` | "How does intention become action?" (`prd.md` §3) |
| `capabilities_to_inspect` | Guided timers; routine sequences; reminders; completion (`prd.md` §3) |
| `caution` | "Rigidity and pressure are hypotheses to test" (`prd.md` §3) |
| `access_status` | `not_yet_assessed` |
| `editorial_recognition_ref` | `unverified` → TASK-010 |
| `source_evd` | `[]` |
| `capture_state` | `registered` |
| `scope_status` | `active` |
| `owner_role` | Product / market lead |
| `last_updated` | 2026-11-22 |

#### APP-002 · Fabulous

| Field | Value |
|---|---|
| `app_id` | **APP-002** |
| `app_name` | Fabulous |
| `developer` | `unknown` — *verify on listing (WS01)* |
| `app_store_id` | `unknown` |
| `canonical_url` | `unknown` |
| `platform` | `ios` *(inferred — PRD benchmark framing; confirm on listing)* |
| `country` | `unknown` — *capture is storefront-specific* |
| `version` | `unknown` — *never inferred* |
| `price_model` | `unknown` |
| `listing_ref` | `unverified` → TASK-011 |
| `benchmark_tier` | `core` |
| `benchmark_role` | `direct_competitor` (secondary: `behavior_reference`) |
| `learning_question` | "How do abstract goals become guided behavior programs?" (`prd.md` §3) |
| `capabilities_to_inspect` | Onboarding; coaching; narratives; habit plans; paywalls (`prd.md` §3) |
| `caution` | "Engagement does not establish clinical efficacy" (`prd.md` §3) |
| `access_status` | `not_yet_assessed` |
| `editorial_recognition_ref` | `unverified` → TASK-010 |
| `source_evd` | `[]` |
| `capture_state` | `registered` |
| `scope_status` | `active` |
| `owner_role` | Product / market lead |
| `last_updated` | 2026-11-22 |

#### APP-003 · (Not Boring) Habits

| Field | Value |
|---|---|
| `app_id` | **APP-003** |
| `app_name` | (Not Boring) Habits |
| `prior_names` | `[]` |
| `developer` | `unknown` — *verify on listing (WS01)* |
| `app_store_id` | `unknown` |
| `canonical_url` | `unknown` |
| `platform` | `ios` *(inferred — PRD benchmark framing; confirm on listing)* |
| `country` | `unknown` — *capture is storefront-specific* |
| `version` | `unknown` — *never inferred* |
| `price_model` | `unknown` |
| `listing_ref` | `unverified` → TASK-011 |
| `benchmark_tier` | `core` |
| `benchmark_role` | `direct_competitor` (secondary: `visual_reference`) |
| `learning_question` | "How does functional tracking become delightful?" (`prd.md` §3) |
| `capabilities_to_inspect` | 3D feedback; motion; rewards; visual identity (`prd.md` §3) |
| `caution` | "Novelty and animation costs need testing" (`prd.md` §3) |
| `access_status` | `not_yet_assessed` |
| `editorial_recognition_ref` | `unverified` → TASK-010 |
| `source_evd` | `[]` |
| `capture_state` | `registered` |
| `scope_status` | `active` |
| `owner_role` | Product / market lead |
| `last_updated` | 2026-11-22 |

#### APP-004 · Habitify

| Field | Value |
|---|---|
| `app_id` | **APP-004** |
| `app_name` | Habitify |
| `developer` | `unknown` — *verify on listing (WS01)* |
| `app_store_id` | `unknown` |
| `canonical_url` | `unknown` |
| `platform` | `ios` *(inferred — PRD benchmark framing; confirm on listing; this product is reported cross-platform — verify each storefront independently)* |
| `country` | `unknown` — *capture is storefront-specific* |
| `version` | `unknown` — *never inferred* |
| `price_model` | `unknown` |
| `listing_ref` | `unverified` → TASK-011 |
| `benchmark_tier` | `core` |
| `benchmark_role` | `direct_competitor` (secondary: `behavior_reference` — tracking/analytics) |
| `learning_question` | "When is tracking useful rather than work?" (`prd.md` §3) |
| `capabilities_to_inspect` | Analytics; progress; reminders; integrations (`prd.md` §3) |
| `caution` | "Charts may not translate into decisions" (`prd.md` §3) |
| `access_status` | `not_yet_assessed` |
| `editorial_recognition_ref` | `unverified` → TASK-010 |
| `source_evd` | `[]` |
| `capture_state` | `registered` |
| `scope_status` | `active` |
| `owner_role` | Product / market lead |
| `last_updated` | 2026-11-22 |

#### APP-005 · Griply

| Field | Value |
|---|---|
| `app_id` | **APP-005** |
| `app_name` | Griply |
| `developer` | `unknown` — *verify on listing (WS01)* |
| `app_store_id` | `unknown` |
| `canonical_url` | `unknown` |
| `platform` | `ios` *(inferred — PRD benchmark framing; confirm on listing)* |
| `country` | `unknown` — *capture is storefront-specific* |
| `version` | `unknown` — *never inferred* |
| `price_model` | `unknown` |
| `listing_ref` | `unverified` → TASK-011 |
| `benchmark_tier` | `core` |
| `benchmark_role` | `direct_competitor` (secondary: `behavior_reference` — goal→habit hierarchy) |
| `learning_question` | "How do daily actions connect to life goals?" (`prd.md` §3) |
| `capabilities_to_inspect` | Goals; tasks; habits; progress hierarchy (`prd.md` §3) |
| `caution` | "Planning overhead may reduce utility" (`prd.md` §3) |
| `access_status` | `not_yet_assessed` |
| `editorial_recognition_ref` | `unverified` → TASK-010 |
| `source_evd` | `[]` |
| `capture_state` | `registered` |
| `scope_status` | `active` |
| `owner_role` | Product / market lead |
| `last_updated` | 2026-11-22 |

**Platform note.** All five `platform` values are tagged **inferred**, not observed. `prd.md` §3/§5 frames the benchmark portfolio as iOS App Store products (the whole lab targets an iOS app and iOS editorial recognition), so `ios` is the expected value — but per rule A1/§6.3 it is not asserted as observed until a listing is opened. Any additional platforms (Android, web, watchOS, iPadOS) are `unknown` until each storefront is checked independently; cross-platform availability is explicitly *not* inferred from one storefront.

### 8.2 Reserved id block — extended portfolio

Per `prd.md` §3, the portfolio grows to **15–20 apps** with direct, adjacent-health, and exceptional-consumer references. Those apps are **not registered here** — their selection is governed by the inclusion/exclusion rubric in **TASK-007** and they are added only if each "answers a distinct question" (`prd.md` §3). The id block **`APP-006` onward** is reserved for them. The PRD's candidate examples (Streaks, Productive, Finch, Gentler Streak, Headspace, Oura, selected women's-health apps, Duolingo, Apple Fitness) are **candidates, not registered entries**, and are deliberately omitted here to avoid implying a scoping decision that TASK-007 owns.

### 8.3 Validation of this document

Checked against §7:

1. **Ids** — `APP-001`…`APP-005`, unique, sequential, none reused. ✅
2. **Mandatory fields present** — every row carries `app_id`, `app_name`, `platform`, `country`, `version`, `price_model`, `access_status`, `benchmark_tier`, `benchmark_role`, `learning_question`, `caution`, `editorial_recognition_ref`, `source_evd`, `capture_state`, `scope_status`, `owner_role`, `last_updated`. Every empirical field (`developer`, `app_store_id`, `canonical_url`, `country`, `version`, `price_model`) is the literal `unknown`. ✅ (A1)
3. **Platform tagging** — all five tagged `inferred`; zero `observed` tags; `source_evd = []` consistent with no captured values. ✅ (§6.3)
4. **Benchmark intent** — `benchmark_role` ∈ §5 vocabulary; tier/question/caution populated verbatim/paraphrased from `prd.md` §3. ✅
5. **Access status** — all `not_yet_assessed` ∈ §4 vocabulary. ✅
6. **Editorial recognition** — all `unverified` pointers to TASK-010; **no award asserted anywhere**. ✅ (A3)
7. **No forbidden value** — no sourced-less concrete empirical value; no retention/CAC/LTV; no feature claims (no flow has been accessed). ✅ (§6)

Result: **5/5 rows valid at `capture_state: registered`.** The registry is a correct empty scaffold ready for WS01 capture; it asserts no evidence.

---

## 9. Dependencies and cross-references

**Upstream (consumed by this registry):**
- `prd.md` §3 — core-five identity, roles, learning questions, cautions; expanded-portfolio intent.
- `prd.md` §4 — `APP-001` field set and id convention; no-fabrication rule.
- **TASK-004** (evidence grading) & **TASK-005** (`EVD` schema) — define how the `source_evd` pointers and any future graded claim behave. `↔`

**Downstream (this registry feeds):**
- **TASK-007** — extended app selection rubric populates the reserved `APP-006+` block (§8.2).
- **TASK-010** — editorial-recognition ledger resolves every `editorial_recognition_ref`.
- **TASK-011** — listing & pricing capture populates `price_model`/`price_detail`/`listing_ref` and identity fields; moves rows to `in_capture`→`captured`.
- **TASK-012** — competitor feature-comparison matrix references these `APP` ids as columns.
- **TASK-013/014** — review sampling & coding reference the registered app + version.
- **TASK-016** (ten journeys) / WS02 teardown — cite `APP` id + specific build.
- **TASK-015** — commercial-estimates template (any third-party download/revenue estimate is recorded there, clearly labelled, never here).
- **Gate 1** (`prd.md` §11) — reads this registry's unknowns/access fields as part of "benchmark coverage … unknowns and access limitations documented."

---

## 10. Open unknowns and change log

**Open unknowns (by design — resolved in WS01, not here):**
- Every app's `developer`, `app_store_id`, `canonical_url`, `country`, exact `version`, and `price_model`/terms.
- Each app's true `platform` set (iOS-only vs cross-platform) — confirm per storefront.
- Each app's `access_status` (free / paywalled / account-required / region availability).
- Whether any core app has verifiable Apple editorial recognition in a stated country/date window (owned by TASK-010; `prd.md` §3 flags this as explicitly unproven at registration).
- The final extended-portfolio membership (owned by TASK-007).

**Change log:**
- **v0.1 (2026-11-22)** — Initial registration of the five core apps (`APP-001`…`APP-005`) from `prd.md` §3 with full field contract (§3), access-status (§4) and benchmark-role (§5) taxonomies, forbidden-value/validation rules (§6–§7), and self-validation (§8.3). All empirical fields held at `unknown`; no evidence asserted. Status: **Proposed — registered, not yet captured.**
