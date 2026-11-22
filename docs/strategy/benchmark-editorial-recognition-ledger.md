# HerRays Benchmark Editorial Recognition Ledger

**Deliverable:** TASK-010 — Verify benchmark editorial recognition
**Workstream:** Competitive Intelligence (WS01)
**Version:** 0.1 · **Status:** Proposed — ledger scaffold, no claim yet verified
**Owner (accountable role):** PR/editorial specialist (WS01), under Program Director custody
**Reviewers:** ASO/App Store specialist · Product / market lead · Program Director
**Source basis:** `prd.md` Research principle (editorial recognition is not proof of efficacy/retention; reverify any claimed App of the Day dates and geographies), §3 (core-five "research starting points, not a claim that all five have verified App of the Day recognition … Record the country/date/source for any editorial recognition"), §4 (Evidence Library provenance + no-fabrication rule), §5 Phase 1 (verify editorial features during market intelligence), §11 Gate 1 (research-foundation gate), §13 Prompt 01 ("Verify … any claimed Apple editorial recognition")
**Interlocks:** `↔ TASK-004` (evidence grading — editorial recognition is inadmissible as efficacy evidence) · `↔ TASK-005` (`EVD` records back every verification source) · `→ TASK-006` (resolves each app's `editorial_recognition_ref`) · `→ TASK-008` (a refuted or contradicted claim opens a contradiction record) · `→ TASK-011` (listing/positioning capture) · `→ TASK-015` (commercial estimates — never conflated with editorial recognition)

---

## 0. How to read this document

This document is the **Editorial Recognition Ledger**: the single dated, source-linked register of every claim that an Apple (or other platform) **editorial team** has recognized one of the five core benchmark apps — "App of the Day," "App of the Week," "App of the Year," Editor's Choice, "Apps We Love," a Today-tab story, or a curated collection. Its one job is to let a reviewer answer, for any such claim: *is it verified, by what dated primary source, for which storefront, on which date — and is that date inside the window we care about?*

It is a **verification instrument**, not a trophy case. It does three things and only three:

1. **Registers the recognition claims to investigate** for all five core apps (`APP-001`…`APP-005` from TASK-006), each at an explicit verification status.
2. **Defines the record contract** (§3), the verification-status taxonomy including the required **verified / unverified / out-of-window** distinction (§4), and the recognition-type taxonomy that separates genuine *editorial* curation from *algorithmic* chart rankings (§5).
3. **Fixes the verification window and geography scope** (§4.3) so that "out-of-window" is a defined, checkable state rather than a vague caveat, honoring the PRD's instruction to reverify both **dates and geographies**.

> **No-fabrication statement.** This ledger contains **no verified editorial recognition**. No "App of the Day" date, country, or citation is asserted as fact for any of the five apps, because the Lab has captured and confirmed none. Every registered claim is held at `verification_status: unverified` with `claimed_date: unknown` and `verification_source: none`. The PRD is explicit that the core five "are research starting points, **not a claim that all five have verified App of the Day recognition** in the requested 2023–2026 period," and that any claimed dates and geographies must be reverified before use as evidence. This document operationalizes that warning; it does not pre-empt it. The only fully-populated rows in this file (§8.4) are **ILLUSTRATIVE (synthetic)** and labelled as such — they exist solely to show what a `verified` and an `out_of_window` record look like, and reference fictitious `ERC-SYNTH-*` / `EVD-SYNTH-*` ids. Nothing in this file may be cited as evidence of recognition.

**Scope boundary (what this task is and is not).**
- **TASK-010 (this document) = the editorial-recognition ledger** — it verifies and dates *editorial* claims only. It answers *"was this app genuinely curated by a platform editorial team, when, where, and how do we know?"*
- **It is not the App Registry.** App identity (platform, country, version, access) is **TASK-006**; this ledger cites those `APP` ids and resolves each app's `editorial_recognition_ref` pointer.
- **It is not the listing/pricing capture.** Store positioning, screenshots, and subscription terms are **TASK-011**; a screenshot *of* an editorial feature may be captured there and cited here as a verification `EVD`, but pricing and positioning are not this ledger's concern.
- **It is not a chart-ranking or popularity record.** "#1 in Health & Fitness," top-chart position, star ratings, and download milestones are **algorithmic or crowd signals, not editorial recognition** (§5.2). They are explicitly excluded here and routed to the commercial-estimates template (`→ TASK-015`) or the listing capture (`→ TASK-011`), clearly labelled.
- **It is not an efficacy or retention claim, ever.** Per the PRD research principle and TASK-004, editorial recognition is **inadmissible as evidence of behavioral efficacy, clinical outcome, or retention**. A verified "App of the Day" tells us an Apple editor chose to feature the app on a date — nothing about whether it changes behavior. §6 makes any efficacy inference from this ledger an automatic validation failure.

---

## 1. Purpose and non-negotiables

The PRD gives this task an unusually pointed mandate. Its research principle states plainly: *"Apple editorial recognition is not proof of clinical efficacy or retention. Reverify any claimed App of the Day dates and geographies before using them as evidence."* §3 repeats the caution for the core five and instructs: *"Record the country/date/source for any editorial recognition."* §13 Prompt 01 lists "any claimed Apple editorial recognition" among the identity facts to verify before an app is used as evidence. This ledger is where that verification is done and recorded.

The ledger exists to do four jobs:

1. **Separate claim from proof.** Public marketing pages, press roundups, and third-party blogs routinely *assert* editorial recognition. Those are **claims with a provenance**, not confirmations. The ledger records the claim, records who made it, and keeps the claim `unverified` until a dated primary source (Apple's own editorial surface or a faithful archived capture) substantiates the *type + date + storefront*.
2. **Date and locate every claim.** Editorial recognition is inherently **per-storefront and per-day** (Apple's Today tab differs by country and changes daily). A recognition with no date or no country is not usable evidence. The ledger forces `claimed_date` and `claimed_country` to be explicit, and flags `unknown` where they are not yet captured.
3. **Make "out-of-window" a defined state.** The PRD frames a "requested 2023–2026 period." A recognition dated before that window, or in a storefront outside the Lab's study scope, is not false — it is simply **out of scope for current evidence** and must be visibly distinguished from both verified-in-window and unverified. §4.3 fixes the window so this is checkable.
4. **Firewall recognition from efficacy.** A verified feature is a *discovery/positioning* signal (grade C at best, under TASK-004), useful for ASO and launch narrative (`prd.md` §2 specialist roles). It is **inadmissible** as evidence that the app works. The ledger carries this firewall as a mandatory field on every record and as a hard validation rule.

**Four non-negotiable rules, enforced throughout.**

- **E1 — No recognition is asserted without a dated primary-source `EVD`.** A record may only reach `verification_status: verified` when it carries a `verification_source` pointing to a TASK-005 `EVD` record that captured the recognition from a primary or faithfully-archived source, **with a capture date and the recognized date/storefront legible in the artifact**. A marketing or press claim alone never promotes a record past `unverified`. Absent such a source, the status is `unverified`, `unverifiable`, or `refuted` — never `verified`.
- **E2 — Dates and geographies are never inferred.** `claimed_date` and `claimed_country` are either captured from a source or the literal token `unknown`. A plausible-looking date ("sometime in 2024") or an assumed storefront ("probably US") is a validation failure (§6), not a convenience. This is the PRD's "reverify any claimed App of the Day dates and geographies," applied to every row.
- **E3 — Editorial recognition is inadmissible as efficacy/retention evidence.** Every record carries `efficacy_admissibility: inadmissible` and a max evidence grade governed by TASK-004 (C for positioning/discovery; never A/B for behavior change). Any downstream claim that uses this ledger to argue the app is effective, habit-forming, or retentive is an automatic review failure (§6.6).
- **E4 — Chart rankings and crowd signals are not editorial recognition.** Top-chart position, category rank, star rating, and download counts are **excluded** from this ledger (§5.2). Logging any of them here as "recognition" is a validation failure; they belong, clearly labelled as algorithmic/crowd/third-party, to TASK-011/TASK-015.

---

## 2. Record identity and lifecycle

### 2.1 The `ERC` identifier

One **editorial recognition claim** = one record. A single app may generate many records (e.g. an App-of-the-Day claim for the US storefront and a separate App-of-the-Week claim for the NL storefront are two distinct `ERC` records, because each has its own type, date, storefront, and verification trail).

| Property | Rule |
|---|---|
| **Format** | `ERC-NNN` — `ERC-` prefix + zero-padded sequential integer (`ERC-001`, `ERC-002`, …). |
| **Scope of an id** | One id = **one recognition claim**, defined by the tuple `(app_id, recognition_type, claimed_date, claimed_country)`. Two claims differing in any element are two records. |
| **Immutable** | An `erc_id` is permanent and never reused. A claim that turns out false is marked `refuted`, not deleted (§2.3), preserving the audit trail and feeding TASK-008. |
| **Subject link** | Every record carries exactly one `app_id` ∈ `{APP-001…APP-005}` (TASK-006). Extended-portfolio apps (`APP-006+`, TASK-007) may be added later under the same contract. |
| **Claim vs. instance** | A recurring recognition type (e.g. featured in two different themed collections) is **two** records, each separately dated and sourced — never a single "featured multiple times" record. |

### 2.2 Why one record per claim (and not one row per app)

A tempting shortcut is "one row per app with a `featured: yes/no` flag." The PRD forbids this in spirit: it demands *country/date/source for any editorial recognition*. A boolean cannot carry a date, a storefront, or a source, and it silently merges a verified US App-of-the-Day with an unverified blog assertion. The ledger therefore decomposes recognition into atomic, independently-verifiable claims. An app with zero verified claims simply has zero `verified` records — which is the honest current state for all five.

### 2.3 Record lifecycle

Each record carries a `verification_status` (§4) that also functions as its lifecycle state:

```
registered ─▶ investigating ─▶ ┬─▶ verified ───▶ (out_of_window if date/geo out of scope)
                               ├─▶ refuted
                               └─▶ unverifiable
         (any state) ─▶ stale ─▶ re-investigate
```

| Transition | Rule |
|---|---|
| `registered → investigating` | WS01 has begun searching primary/archived sources for this claim. |
| `investigating → verified` | A dated primary-source `EVD` substantiates type + date + storefront (E1). |
| `investigating → refuted` | Search found positive contrary evidence, or the claim is traced to a demonstrable error/misattribution. Opens a `CON` record (`→ TASK-008`). |
| `investigating → unverifiable` | No primary/archived source can be located by approved means; the claim is neither confirmed nor disproved (common for ephemeral Today-tab features that were never archived). Stays out of evidence. |
| `verified → out_of_window` | A *verified* recognition whose confirmed date or storefront falls outside the §4.3 window/scope. The verification stands; its admissibility as *current* evidence does not. |
| `any → stale` | A previously-verified record whose source link rots or whose window moves; must be re-verified before reuse. |

A record is **never deleted**. A false claim lives on as `refuted` with its rationale, so the same erroneous assertion is not re-imported later.

---

## 3. Field dictionary

Each record has the following fields. **Req.**: **M** = mandatory (a value *or* a justified `unknown`), **C** = conditional, **O** = optional. The acceptance-criteria essentials — a **dated**, **source**-linked claim with a **status** distinguishing verified/unverified/out-of-window, for each of the five apps — are all **M**.

### 3.1 Identity and subject

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `erc_id` | id | M | `ERC-NNN`, immutable (§2.1). |
| `app_id` | ref | M | One of `APP-001…APP-005` (TASK-006). |
| `app_name` | string | M | Mirrored from TASK-006 for readability; the `app_id` is authoritative. |
| `recognition_type` | enum | M | From the editorial vocabulary in §5.1. Algorithmic/crowd signals are **not** allowed values (E4; see §5.2). |
| `recognition_detail` | string | C | Free text for the specific feature (e.g. collection title, story headline) once captured; `unknown` until then. |

### 3.2 Date, geography, and window (acceptance-criteria core)

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `claimed_date` | date \| `unknown` | M | The date the recognition allegedly occurred, ISO `YYYY-MM-DD`. **Never inferred** (E2). `unknown` until captured from a source. A range is recorded only if the source itself states a range, as `claimed_date_start`/`claimed_date_end`. |
| `claimed_country` | ISO-3166 \| `unknown` | M | The storefront the recognition pertains to (e.g. `US`, `NL`). Editorial curation is per-storefront; a claim with no country is not usable. `unknown` until captured. |
| `window_check` | enum | M | `in_window` / `out_of_window` / `unknown_date` — computed against §4.3. `unknown_date` whenever `claimed_date = unknown`. |
| `geo_in_scope` | enum | M | `in_scope` / `out_of_scope` / `unknown` — whether `claimed_country` is within the Lab's study storefronts (§4.3). |

### 3.3 Provenance and verification

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `claim_origin` | enum | M | Where the *claim* came from (§5.3): `apple_primary` / `archive_capture` / `developer_marketing` / `press_media` / `third_party_aggregator` / `internal_assumption` / `none`. Note: only `apple_primary` and `archive_capture` can *verify*; the rest only *assert*. |
| `claim_origin_ref` | url/ref | C | Pointer to where the claim was seen (marketing page URL, press URL). Provenance of the *assertion*, not proof. `unknown` if not yet located. |
| `verification_source` | ref | M | `EVD` id (TASK-005) of the dated primary/archived capture that substantiates the claim, or `none`. Required to be non-`none` for `verified` (E1). |
| `verification_method` | string | C | How it was verified (e.g. "Apple Today-tab archive capture showing date + storefront badge"). `unknown`/`n/a` until verified. |
| `capture_date` | date | M | The date the Lab last investigated this claim. Distinct from `claimed_date`. |

### 3.4 Grading, admissibility, governance

| Field | Type | Req. | Allowed / rule |
|---|---|---|---|
| `verification_status` | enum | M | §4.1 vocabulary. `unverified` for every registered row in v0.1. |
| `evidence_grade` | enum | C | TASK-004 grade **for positioning/discovery only** — capped at **C** (repeated qualitative/competitor-pattern signal). `n/a` until verified. Never A/B. |
| `efficacy_admissibility` | const | M | Always `inadmissible` (E3). This field is not editable to any other value. |
| `confidence` | enum | C | TASK-004 confidence vocabulary about the *verification itself* (how sure we are the feature happened on that date/storefront); `n/a` until investigated. |
| `contradiction_ref` | ref | C | `CON` id (TASK-008) if this claim contradicts another source or was refuted; else `none`. |
| `owner_role` | role | M | Accountable role (default: PR/editorial specialist; ASO specialist co-verifies). |
| `limitations` | string | M | Non-empty. What this record does and does not establish (always includes the efficacy firewall). |
| `notes` | string | O | Free text. |
| `last_updated` | date | M | Record edit date. |

---

## 4. Verification-status taxonomy and the window

### 4.1 Status vocabulary (the required verified / unverified / out-of-window distinction)

The acceptance criteria require the ledger to **distinguish verified, unverified and out-of-window claims**. These are three first-class statuses; two more handle the cases a disciplined search produces. All five are mutually exclusive at a point in time.

| `verification_status` | Meaning | Admissible as evidence? |
|---|---|---|
| `unverified` | A claim exists (from marketing, press, aggregator, or internal note) but **no dated primary/archived source has confirmed** the type + date + storefront. **← every registered row in v0.1.** | **No.** Not usable as evidence of anything, including positioning. |
| `verified` | A dated primary-source or faithful-archive `EVD` confirms the recognition type, date, and storefront, and that date/storefront is **within** the §4.3 window/scope. | **Yes, narrowly** — as a grade-C discovery/positioning signal only. **Never** as efficacy/retention (E3). |
| `out_of_window` | The recognition is **verified** (a real dated source exists) **but** its confirmed date falls outside the §4.3 temporal window, **or** its storefront is outside the geography scope. The fact is true; it is simply out of the current evidence frame. | **Context only.** Cite as historical/geographic context with the out-of-scope reason stated; do not treat as current-window evidence. |
| `refuted` | Investigation found positive evidence the claim is false or misattributed (e.g. the "award" was a different app, a different platform, or a misread chart ranking). | **No.** Recorded to prevent re-import; opens a `CON` record (`→ TASK-008`). |
| `unverifiable` | No primary/archived source can be located by approved means; the claim can be neither confirmed nor refuted (common for ephemeral Today-tab features never archived). | **No.** Held as an open unknown; may become `verified` if a source later surfaces. |

**Why `out_of_window` is separated from both `verified` and `unverified`.** A 2019 App-of-the-Day that we *can* prove is epistemically different from a 2024 one we *cannot*: the first is a true fact outside our frame; the second is an unconfirmed assertion inside it. Collapsing them would either overstate current recognition or discard genuine history. The acceptance criteria demand all three be distinguishable, and the ledger keeps them so.

### 4.2 Relationship between status and the two window fields

`verification_status` is the headline state; `window_check` (§3.2) and `geo_in_scope` are the mechanical computations that justify an `out_of_window` status. A record becomes `out_of_window` **only after** it would otherwise be `verified` (a real source exists) **and** `window_check = out_of_window` **or** `geo_in_scope = out_of_scope`. An `unverified` claim with an out-of-window *claimed* date stays `unverified` (we have not proven it happened at all) with `window_check = out_of_window` noted — it is not promoted to `out_of_window` status, because that status asserts a verified fact.

### 4.3 The verification window and geography scope

| Parameter | Value (v0.1 default) | Basis / how to change |
|---|---|---|
| **Temporal window** | `2023-01-01` → `2026-11-22` (capture reference date = today) | `prd.md` §3 references "the requested 2023–2026 period." The upper bound is the current capture date; the Program Director may narrow or widen this and must record the change here. |
| **Geography scope** | `{US, NL}` (provisional) | The Lab's primary study storefronts (US as the largest editorial surface; NL per the HerRays operating region implied by the registry examples). **Provisional** — WS01/Program Director must confirm before any `geo_in_scope` verdict is treated as final. Until confirmed, `geo_in_scope` verdicts are advisory. |
| **Out-of-window rule (temporal)** | `claimed_date < 2023-01-01` OR `claimed_date > capture reference date` → `window_check = out_of_window` | A future date is a data error; a pre-2023 date is historical context. |
| **Out-of-scope rule (geography)** | `claimed_country ∉ geography scope` → `geo_in_scope = out_of_scope` | Honors "reverify … geographies." A verified JP App-of-the-Day is out-of-scope context unless JP is added to scope. |
| **Unknown-date rule** | `claimed_date = unknown` → `window_check = unknown_date` | An undated claim cannot be windowed; it stays `unverified`/`unknown_date`, never silently assumed in-window. |

> The window and scope are **declared parameters**, not hidden assumptions. Changing them re-labels existing records' `window_check`/`geo_in_scope` deterministically and must be logged in §10.

---

## 5. Recognition-type taxonomy

### 5.1 Editorial recognition types (admissible in this ledger)

These are **human-curated** platform decisions. They are the only allowed values of `recognition_type`.

| `recognition_type` | What it is | Notes |
|---|---|---|
| `app_of_the_day` | Apple App Store Today-tab "App of the Day" feature. | Per-storefront, single day. The canonical claim the PRD names. |
| `app_of_the_week` | Today-tab "App of the Week". | Per-storefront. |
| `app_of_the_year` | Apple's annual App of the Year award (or category winner). | Rare; high scrutiny. Record category and year exactly. |
| `app_of_the_year_nominee` | Nominee/finalist/runner-up for App of the Year. | Distinct from winner; do not conflate. |
| `editors_choice` | "Editor's Choice" badge/designation. | Platform-curated. |
| `apps_we_love` | "Apps We Love" / "New Apps We Love" curated list. | Per-storefront collection. |
| `themed_collection` | Inclusion in a human-curated themed collection/story (e.g. a wellness roundup). | Record collection title + date. |
| `today_story_feature` | A Today-tab editorial story featuring the app. | Record headline + date + storefront. |
| `other_editorial` | Any other genuine editorial curation not listed; must describe in `recognition_detail`. | Use sparingly; justify. |

### 5.2 Explicitly excluded (NOT editorial recognition — E4)

Logging any of these as recognition is a validation failure (§6.5). They are algorithmic rankings or crowd/market signals and belong elsewhere, clearly labelled:

| Excluded signal | Why it is not editorial | Where it belongs |
|---|---|---|
| Top-chart rank ("#1 in Health & Fitness") | **Algorithmic**, driven by download velocity — no editor chose it. | TASK-011 (listing capture) or TASK-015 (estimates), labelled algorithmic. |
| Category rank / "Top Charts" position | Same — algorithmic. | TASK-011 / TASK-015. |
| Star rating / rating count | **Crowd signal**, not curation. | TASK-011 / review workstream (TASK-013/014). |
| Download / revenue milestones | **Market estimate or vanity metric**, never editorial. | TASK-015, labelled estimate (and never as retention/CAC/LTV). |
| "As featured in [press outlet]" | **Press/media**, not platform editorial. | Logged as a `press_media` *claim origin* here only if it *asserts a platform editorial feature*; otherwise it is positioning (TASK-011). |
| Awards from non-platform bodies (design awards, etc.) | Not Apple/platform editorial. | Separate positioning note (TASK-011), clearly scoped. |

### 5.3 Claim-origin taxonomy (provenance of the assertion)

`claim_origin` records *who says so*. Only the first two can **verify**; the rest can only **assert** (keeping a record `unverified` until a verifying source is found).

| `claim_origin` | Can verify? | Typical reliability |
|---|---|---|
| `apple_primary` | **Yes** | A live/archived Apple editorial surface showing the feature with date + storefront. Highest. |
| `archive_capture` | **Yes** | A faithful dated archive (e.g. Wayback-style capture) of the Apple surface. High, if the capture legibly shows date + storefront. |
| `developer_marketing` | No | Developer's own site/press kit ("Featured by Apple"). Interested party; assertion only. |
| `press_media` | No | News/blog roundup. Assertion only; often recycles developer claims. |
| `third_party_aggregator` | No | ASO/analytics aggregator "feature history." Assertion only; verify independently. |
| `internal_assumption` | No | A Lab member's recollection/assumption. **Lowest**; must be verified or dropped — never evidence. |
| `none` | — | No claim origin recorded yet. |

---

## 6. Forbidden values and validation failures

A record **fails validation** (and cannot advance toward `verified`) if any of the following is true:

1. **Verified without a dated primary source.** `verification_status: verified` while `verification_source = none`, or while the cited `EVD` lacks a legible date **and** storefront in its artifact (violates E1).
2. **Inferred date or geography.** `claimed_date` or `claimed_country` holds a guessed/approximate value with no capturing source ("≈2024", "likely US"). The fix is `unknown`, not a guess (violates E2).
3. **Boolean/flag recognition.** An app recorded as "featured: yes" with no per-claim type/date/storefront/source decomposition (violates §2.2 and the PRD's "record the country/date/source").
4. **Window silently assumed.** `window_check = in_window` while `claimed_date = unknown` (must be `unknown_date`), or an `out_of_window`/`out_of_scope` record presented as current-window evidence without its reason stated.
5. **Algorithmic/crowd signal logged as editorial.** Any `recognition_type` outside §5.1, or a chart rank / rating / download milestone entered as recognition (violates E4; see §5.2).
6. **Efficacy or retention inferred from recognition.** Any field, note, or downstream citation that uses a feature to argue the app is effective, habit-forming, clinically beneficial, or retentive (violates E3). `efficacy_admissibility` must read `inadmissible`.
7. **Grade inflation.** `evidence_grade` of A or B assigned to any editorial record (capped at C per §3.4/TASK-004).
8. **Claim promoted on interested-party provenance alone.** `verified` while `claim_origin ∈ {developer_marketing, press_media, third_party_aggregator, internal_assumption}` and no `apple_primary`/`archive_capture` `verification_source` exists (violates §5.3/E1).
9. **Deleted false claim.** A disproven claim removed rather than set `refuted` with a rationale and `CON` link (violates §2.3).
10. **Missing mandatory field.** Any **M** field in §3 absent (not even `unknown`), or `limitations` empty.

---

## 7. Validation rules (entry gate)

A record is accepted into the ledger when:

1. `erc_id` matches `ERC-NNN`, is unique, and is not reused (§2.1).
2. `app_id` ∈ `{APP-001…APP-005}` and `recognition_type` ∈ §5.1 (never a §5.2 excluded signal).
3. All **M** fields present; `claimed_date` and `claimed_country` are a captured value **or** the literal `unknown` (E2); `limitations` is non-empty.
4. `window_check` is computed per §4.3 and consistent with `claimed_date` (`unknown_date` iff date unknown).
5. `verification_status` ∈ §4.1; if `verified`, then `verification_source ≠ none` **and** `claim_origin ∈ {apple_primary, archive_capture}` **and** `window_check = in_window` **and** `geo_in_scope ≠ out_of_scope` (else the correct status is `out_of_window`, `unverified`, or `unverifiable`).
6. `efficacy_admissibility = inadmissible`; `evidence_grade ∈ {n/a, C, D}` (never A/B).
7. No forbidden value (§6) is present.

**This v0.1 document is validated against these rules in §8.5.**

---

## 8. The ledger

### 8.1 Current state (honest baseline)

**No editorial recognition has been verified by the Lab for any of the five core apps.** This is the correct, expected state at WS01 entry, and it matches the PRD's explicit caution that the core five are "research starting points, not a claim that all five have verified App of the Day recognition." Each app below is registered with a single open **App-of-the-Day investigation record** — the canonical claim the PRD names — at `verification_status: unverified`, `claimed_date: unknown`, `claimed_country: unknown`, `verification_source: none`. Additional records (App of the Week, collections, etc.) are opened per app only when a specific claim is encountered during capture; the ledger is seeded, not pre-populated with invented claims.

> Note on public perception: several of these apps are *widely said* to have been featured by Apple at some point. That hearsay is exactly what this task exists to test, not to repeat. Until a dated primary/archived source is captured, every such assertion is `claim_origin: internal_assumption`/`press_media`-grade and the record stays `unverified`. The ledger deliberately records **no** claimed date for any of them, because inventing or repeating an unconfirmed date would violate E2 and the PRD no-fabrication rule.

### 8.2 Registered investigation records (all `unverified`)

| `erc_id` | `app_id` | `app_name` | `recognition_type` | `claimed_date` | `claimed_country` | `window_check` | `claim_origin` | `verification_source` | `verification_status` | `evidence_grade` | `efficacy_admissibility` | `owner_role` |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| ERC-001 | APP-001 | Routinery | `app_of_the_day` | `unknown` | `unknown` | `unknown_date` | `none` | `none` | **`unverified`** | `n/a` | `inadmissible` | PR/editorial specialist |
| ERC-002 | APP-002 | Fabulous | `app_of_the_day` | `unknown` | `unknown` | `unknown_date` | `none` | `none` | **`unverified`** | `n/a` | `inadmissible` | PR/editorial specialist |
| ERC-003 | APP-003 | (Not Boring) Habits | `app_of_the_day` | `unknown` | `unknown` | `unknown_date` | `none` | `none` | **`unverified`** | `n/a` | `inadmissible` | PR/editorial specialist |
| ERC-004 | APP-004 | Habitify | `app_of_the_day` | `unknown` | `unknown` | `unknown_date` | `none` | `none` | **`unverified`** | `n/a` | `inadmissible` | PR/editorial specialist |
| ERC-005 | APP-005 | Griply | `app_of_the_day` | `unknown` | `unknown` | `unknown_date` | `none` | `none` | **`unverified`** | `n/a` | `inadmissible` | PR/editorial specialist |

**Shared `limitations` on ERC-001…005 (v0.1):** *"No dated primary source captured. This record asserts no recognition and no date; it names a claim to investigate. Any public assertion of an Apple feature for this app is, at present, unverified hearsay. Editorial recognition — if later verified — is admissible only as a grade-C discovery/positioning signal and is inadmissible as evidence of behavioral efficacy, clinical outcome, or retention."*

### 8.3 Per-app investigation notes

- **ERC-001 · Routinery** — Investigate Today-tab features/collections across in-scope storefronts; capture any primary/archived surface with legible date + storefront. Status will stay `unverified` until such a capture exists.
- **ERC-002 · Fabulous** — Fabulous is frequently described in press/marketing as Apple-featured; treat every such mention as a `press_media`/`developer_marketing` *claim origin* requiring independent primary/archive verification (§5.3). Do **not** record any claimed date from a press roundup as fact.
- **ERC-003 · (Not Boring) Habits** — As a design-forward app it may appear in curated design/"Apps We Love" collections; if encountered, open a separate `themed_collection` record with the collection title and date. Keep distinct from any App-of-the-Day claim.
- **ERC-004 · Habitify** — Cross-platform product; verify the **storefront** of any claimed feature explicitly (an Android/Play feature is not an Apple editorial recognition and would be a separate platform record, not an Apple `ERC`).
- **ERC-005 · Griply** — Smaller/newer entrant; `unverifiable` is a likely honest outcome for undated ephemeral features. Record `unverifiable` rather than forcing a verdict.

### 8.4 Illustrative (synthetic) worked records — mechanics only

> **These rows are SYNTHETIC and labelled as such. They are not claims about any real app.** They exist only to show reviewers what a `verified`, an `out_of_window`, and a `refuted` record look like under the contract. All ids are fictitious (`ERC-SYNTH-*`, `EVD-SYNTH-*`, `APP-SYNTH-*`).

**ERC-SYNTH-A — a `verified`, in-window record (shape demonstration):**

| Field | Value |
|---|---|
| `erc_id` | ERC-SYNTH-A *(SYNTHETIC)* |
| `app_id` | APP-SYNTH-X *(fictitious)* |
| `recognition_type` | `app_of_the_day` |
| `claimed_date` | 2024-05-14 *(synthetic)* |
| `claimed_country` | `US` |
| `window_check` | `in_window` *(2023-01-01 ≤ 2024-05-14 ≤ 2026-11-22)* |
| `geo_in_scope` | `in_scope` *(US ∈ {US, NL})* |
| `claim_origin` | `archive_capture` |
| `verification_source` | EVD-SYNTH-901 *(fictitious — archived Today-tab capture legibly showing the date + US storefront)* |
| `verification_method` | "Faithful dated archive of the US Today tab showing the App-of-the-Day badge." |
| `verification_status` | **`verified`** |
| `evidence_grade` | `C` *(discovery/positioning signal only)* |
| `efficacy_admissibility` | `inadmissible` |
| `confidence` | likely |
| `limitations` | "Confirms an Apple editor featured the app on 2024-05-14 in the US only. Says nothing about efficacy, habit formation, or retention. Not transferable to other storefronts or dates." |

**ERC-SYNTH-B — a `verified`-but-`out_of_window` record (shape demonstration):**

| Field | Value |
|---|---|
| `erc_id` | ERC-SYNTH-B *(SYNTHETIC)* |
| `app_id` | APP-SYNTH-Y *(fictitious)* |
| `recognition_type` | `app_of_the_day` |
| `claimed_date` | 2019-08-02 *(synthetic)* |
| `claimed_country` | `US` |
| `window_check` | `out_of_window` *(2019-08-02 < 2023-01-01)* |
| `geo_in_scope` | `in_scope` |
| `claim_origin` | `archive_capture` |
| `verification_source` | EVD-SYNTH-902 *(fictitious)* |
| `verification_status` | **`out_of_window`** |
| `evidence_grade` | `C` |
| `efficacy_admissibility` | `inadmissible` |
| `limitations` | "A genuine 2019 feature — real but outside the 2023–2026 window. Cite as historical context only, never as current-window recognition. Re-window only if the Program Director widens §4.3." |

**ERC-SYNTH-C — a `refuted` record (shape demonstration):**

| Field | Value |
|---|---|
| `erc_id` | ERC-SYNTH-C *(SYNTHETIC)* |
| `app_id` | APP-SYNTH-Z *(fictitious)* |
| `recognition_type` | `app_of_the_day` |
| `claimed_date` | `unknown` |
| `claimed_country` | `unknown` |
| `window_check` | `unknown_date` |
| `claim_origin` | `developer_marketing` |
| `claim_origin_ref` | *(fictitious marketing URL asserting "Apple App of the Day")* |
| `verification_source` | `none` |
| `verification_status` | **`refuted`** |
| `contradiction_ref` | CON-SYNTH-77 *(→ TASK-008)* |
| `limitations` | "Investigation traced the 'App of the Day' badge in the developer's press kit to a **category chart ranking**, not an editorial feature (a §5.2 misclassification). Recorded `refuted` to prevent re-import; contradiction logged." |

### 8.5 Validation of this document

Checked against §7:

1. **Ids** — `ERC-001`…`ERC-005` unique, sequential, none reused; synthetic rows namespaced `ERC-SYNTH-*`. ✅
2. **Subject & type** — every row's `app_id` ∈ `{APP-001…APP-005}`; `recognition_type = app_of_the_day` ∈ §5.1 (no §5.2 excluded signal present). ✅
3. **Mandatory fields / `unknown` discipline** — all five rows carry every **M** field; `claimed_date` and `claimed_country` are the literal `unknown` (no inferred dates/geos, E2); shared `limitations` is non-empty and states the efficacy firewall. ✅
4. **Window computed** — `claimed_date = unknown` ⇒ `window_check = unknown_date` on all five (no silent in-window assumption). ✅
5. **No premature `verified`** — all five are `unverified` with `verification_source = none` and `claim_origin = none`; no record claims `verified` without an `apple_primary`/`archive_capture` source. ✅ (E1, §6.1, §6.8)
6. **Admissibility & grade** — `efficacy_admissibility = inadmissible` on every row; `evidence_grade = n/a` (never A/B). ✅ (E3, §6.6/§6.7)
7. **No forbidden value** — no boolean recognition, no algorithmic/crowd signal, no inferred date, no efficacy inference, no deleted claim. ✅ (§6)

Result: **5/5 registered rows valid at `verification_status: unverified`.** The ledger is a correct, honest empty scaffold: it asserts **no recognition and no date**, it names the claims to verify, and it fixes the window so that once WS01 captures real dated sources, each record resolves deterministically to `verified`, `out_of_window`, `refuted`, or `unverifiable`.

---

## 9. Dependencies and cross-references

**Upstream (consumed by this ledger):**
- `prd.md` Research principle & §3 — the explicit "reverify dates and geographies," "record country/date/source," and "not a claim that all five have verified App of the Day recognition" instructions this task executes.
- `prd.md` §13 Prompt 01 — verify "any claimed Apple editorial recognition" before use as evidence.
- **TASK-006** (App Registry) — supplies `APP-001…APP-005`; this ledger resolves each app's `editorial_recognition_ref`. `↔`
- **TASK-004** (evidence grading) — editorial recognition capped at grade C and inadmissible as efficacy; this ledger enforces that ceiling. `↔`
- **TASK-005** (`EVD` schema) — every `verification_source` is an `EVD` record with capture date and provenance. `↔`

**Downstream (this ledger feeds):**
- **TASK-006** — sets each app's `editorial_recognition_ref` from `unverified` to the resolved `ERC` status.
- **TASK-008** (gap/contradiction log) — a `refuted` claim, or two sources that disagree on date/storefront, opens a `CON` record.
- **TASK-011** (listing/pricing capture) — a screenshot of a verified feature may be captured there and cited here as an `EVD`; conversely, chart ranks and ratings surfaced during listing capture are logged there, never here.
- **TASK-012** (feature comparison matrix) — may reference verified recognition as a positioning (not efficacy) column, with the inadmissibility caveat carried through.
- **TASK-015** (commercial estimates) — any download/revenue/chart signal mistaken for recognition is routed here out and recorded there, clearly labelled as estimate.
- **Gate 1** (`prd.md` §11) — reads this ledger's statuses and unknowns as part of "source-linked evidence, unknowns and access limitations documented."

---

## 10. Open unknowns and change log

**Open unknowns (by design — resolved during WS01 capture, not here):**
- Whether **any** of the five core apps has a verifiable Apple editorial feature (App of the Day or otherwise) in **any** storefront, on **any** date. Current answer for all five: **not verified** (`unverified`).
- For any claim later encountered: its exact `claimed_date`, `claimed_country`, `recognition_type`, and whether a primary/archived source legibly substantiating it can be located.
- The confirmed **geography scope** (§4.3 lists `{US, NL}` as provisional; Program Director must ratify before `geo_in_scope` verdicts are final).
- Whether the Program Director retains or narrows the **2023–2026 temporal window**; any change re-labels `window_check`/`geo_in_scope` deterministically and is logged below.
- Archive availability: ephemeral Today-tab features are frequently unarchived, so `unverifiable` is an expected and honest outcome for some claims.

**Change log:**
- **v0.1 (2026-11-22)** — Initial ledger scaffold. Defined the `ERC` record contract (§3), the verification-status taxonomy with the required verified/unverified/out-of-window distinction plus `refuted`/`unverifiable` (§4.1), the window + geography scope parameters (§4.3), the editorial vs. excluded-signal recognition taxonomies (§5), forbidden-value/validation rules (§6–§7), five `unverified` investigation records for the core apps (§8.2), three synthetic mechanics demonstrations (§8.4), and self-validation (§8.5). **No editorial recognition verified; no claimed date asserted for any real app.** Status: **Proposed — ledger scaffold, no claim yet verified.**
