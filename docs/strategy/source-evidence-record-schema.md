# HerRays Source & Evidence Record Schema

**Deliverable:** TASK-005 — Create the source and evidence record schema
**Workstream:** Foundation
**Version:** 0.1 · **Status:** Proposed, not yet populated
**Owner (accountable role):** Program Director (schema custodian)
**Reviewers:** Behavioral scientist · Clinical reviewer · Privacy/regulatory reviewer · UX researcher · Senior UX designer
**Source basis:** `prd.md` §4 (Shared evidence infrastructure, Evidence Library EVD-001, grades, source handling), §3 (Documented examples / provenance), §5 (Competitive workflow capture), §6 (Parallel research), §11 (Quality gates), §13 Prompt 00 (separate evidence/inference/hypothesis/invention; never fabricate), §14 (Handoff templates / acceptance criteria)

---

## 0. How to read this document

This document defines the **record format for a single unit of evidence** — the `EVD` record — used across every HerRays Product Intelligence & Innovation Lab database. An `EVD` record is the atomic, citable thing a claim points to: one source, captured once, with everything a reviewer needs to trust, re-find, re-verify, or retire it.

It is a governance / data-contract artifact. It defines **fields, identifiers, allowed values, and validation rules**. It does **not** contain any real evidence; the single sample record in §8 is explicitly synthetic and exists only to prove the schema validates.

> **No-fabrication statement.** This schema contains no real research observation, user quote, metric, price, app version, clinical outcome, or test result. The one worked record (§8) is labelled **ILLUSTRATIVE (synthetic)** end-to-end. The schema itself is built to make fabrication *detectable*: a record cannot validate without a resolvable source pointer and a capture date (§4, §7), and the forbidden-value rules (§6) reject invented retention/CAC/LTV, invented participants, and invented clinical outcomes exactly as `prd.md` §4 requires ("Never fabricate … actual retention, CAC, LTV, clinical outcomes or internal competitor data").

**Scope boundary (what this task is and is not).**
- **TASK-005 (this document) = the *source record*: how one piece of evidence is stored, identified, and made re-findable.** It owns `evd_id`, source pointer, capture date, app version, region, evidence type, confidence, owner, and limitations — the exact fields named in the acceptance criteria.
- **TASK-004 (Evidence grading rules) = how a *claim* is graded.** It defines the A–D scale, the four epistemic labels, and the multi-dimensional grading. This document stores the *outputs* of those rules (the grade fields) but does not re-define the grading logic; where the two meet, the dependency is flagged `↔ TASK-004`.
- **A claim is not an EVD record.** A claim (an assertion the Lab makes) lives in a downstream database (Capability, User Needs, Opportunity, etc.) and *cites* one or more `EVD` records. One claim ↔ many sources; one source ↔ many claims. §9 defines that join.
- **Other registers** (research-gap/contradiction `→ TASK-008`, decision/experiment `→ TASK-009`, app registry `→ TASK-006`, editorial-recognition ledger `→ TASK-010`) are separate records that *reference* `EVD` ids; this document defines only the evidence record and its foreign keys to them.

---

## 1. Purpose and non-negotiables

`prd.md` §4 mandates an Evidence Library (`EVD-001`) whose fields are "Type, source, citation, date, population/context, confidence, limitations" and a source-handling rule to "Record URLs, access dates, evidence quotes/excerpts within legal limits, methods, confidence, contradictions, provenance and what remains unknown." This schema operationalizes that mandate into an enforceable record.

The record exists to do five jobs:

1. **Make evidence re-findable.** Anyone, later, can locate the exact source (URL + captured artifact + access date + version/region) and confirm the record is faithful to it.
2. **Make provenance explicit.** Every record declares whether it is **directly observed** by us or **secondary** (reported by someone else), and which of the six source types it is (`prd.md` §3) — so a reader never mistakes a marketing screenshot for a controlled observation.
3. **Carry, not compute, the grade.** The record stores the epistemic label and per-dimension grades assigned under `↔ TASK-004`, plus the mandatory uncertainty/limitations note — so the grade travels with the source and cannot be silently upgraded.
4. **Survive legally and ethically.** Quote/excerpt capture is bounded (§5), personal data is minimized and consent-linked (§6.3, `prd.md` §4/§6), and copyright/access limits are recorded on the artifact.
5. **Decay honestly.** Every record has a freshness and re-verification state (§7.3) so stale prices, moved URLs, or retracted studies are flagged rather than trusted forever.

**Three non-negotiable rules, enforced throughout:**

- **S1 — No record without a resolvable source pointer.** Every `EVD` record must carry at least one of: a source URL, **or** a stored artifact reference (screenshot/recording/file id), **or** a full bibliographic citation. A record with none of these is invalid (not low-confidence — *invalid*). This is the structural guard against fabrication.
- **S2 — No record without a capture/access date.** When we recorded or accessed the source is mandatory (`prd.md` §4 "access dates"). "Undated" is not allowed; unknown *publication* date is allowed and recorded as `unknown`, but *our* access date always exists.
- **S3 — Unknown is written as `unknown`, never guessed.** Any field we could not verify is the literal token `unknown` (optionally with a `*_note`), never a plausible-looking fabricated value (`prd.md` §4 "leave unverified fields explicitly unknown", echoing TASK-006). Guessing a version, price, or date to fill a blank is a validation failure (§6.1).

---

## 2. Record identity and lifecycle

### 2.1 The `EVD` identifier

| Property | Rule |
|---|---|
| **Format** | `EVD-NNN` — `EVD-` prefix + zero-padded integer, issued sequentially (`EVD-001`, `EVD-002`, …), matching the `prd.md` §4 convention (`EVD-001`). |
| **Immutable** | An `evd_id` is permanent. It is never reused, never renumbered, never reassigned to a different source. |
| **One source event = one id** | A record is *one source captured on one date*. Re-capturing the same source later (e.g., the price changed) creates a **new** `evd_id` linked to the prior via `supersedes` / `superseded_by` (§7.3), preserving history. The original is never overwritten. |
| **Supplements** | A corrected transcription or added excerpt of the *same* capture is a new **version** of the same `evd_id` (§2.2), not a new id. |

**Rule of thumb:** *new capture event → new id; correction of an existing capture → new version of the same id.*

### 2.2 Versioning within a record

Each record carries `record_version` (starts at `0.1`). Any substantive change — corrected quote, added limitation, grade change, status change — increments it and appends a one-line `change_log` entry (who/when/what). The underlying *source* is never edited; only our *record of it* is versioned.

### 2.3 Record status (lifecycle)

| `record_status` | Meaning | Who may set |
|---|---|---|
| `draft` | Captured, not yet reviewed. Not citable in a gate-bound claim. | Capturing owner |
| `verified` | A second role confirmed the artifact matches the source and fields are faithful. Citable. | Reviewer (not the capturer — see S-o-D, §6.4) |
| `contested` | A contradiction with another `EVD` record is open (`→ TASK-008`). Still citable **only with its contradiction attached**. | Any reviewer |
| `stale` | Past its re-verification due date (§7.3); may still be cited for the historical fact but not as current. | Program Director / owner |
| `retracted` | Source was retracted, removed, or failed re-verification; no longer admissible. Retained for audit, never deleted. | Program Director + relevant reviewer |

A record is **never hard-deleted.** Retraction preserves the audit trail (`prd.md` §4 provenance discipline).

---

## 3. Field catalogue

The record has six field groups. **M** = mandatory, **C** = conditionally mandatory (rule given), **O** = optional. Every field has an allowed-value rule; `unknown` is permitted only where S3 allows and is shown explicitly.

### 3.1 Identity & lifecycle

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `evd_id` | M | `EVD-NNN` | §2.1; unique, immutable. |
| `record_version` | M | `X.Y` | §2.2; starts `0.1`. |
| `record_status` | M | `draft \| verified \| contested \| stale \| retracted` | §2.3. |
| `title` | M | string | Short human label for the source ("Routinery App Store listing, US"). Not a claim. |

### 3.2 Source pointer (S1 — at least one of url/artifact/citation)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `source_url` | C | URL \| `unknown` | Required unless `artifact_ref` or `citation` present (S1). Permalink/DOI preferred over a volatile link. |
| `artifact_ref` | C | artifact id (e.g. `ART-014`) \| `none` | Pointer to the stored screenshot / screen-recording / PDF / exported file that *is* the captured evidence. Required for any **directly observed** product/app record (§3.3 provenance = `direct`). |
| `citation` | C | full bibliographic string \| `none` | Required for scientific/literature sources (authors, year, title, venue, DOI). |
| `access_date` | M | `YYYY-MM-DD` | S2; the date **we** accessed/captured the source. Never `unknown`. |
| `publication_date` | C | `YYYY-MM-DD` \| `unknown` | Source's own date (study year, review date, app-update date). `unknown` allowed; never guessed (S3). |
| `access_method` | M | `public \| paid_access \| in_app_purchase \| api \| provided_by_source \| other` | How we reached it; `paid_access`/`in_app_purchase` flag cost + App Store-rules relevance (`prd.md` §10). |
| `access_restrictions` | C | string \| `none` | Paywall, login, region-lock, licence/copyright limit on reuse of the artifact (`prd.md` §3 "respecting copyright and access restrictions"). Required if `access_method` ≠ `public`. |

### 3.3 Classification & provenance

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `evidence_type` | M | `observed \| reported \| scientific \| estimated \| expert \| invented` | The six-way taxonomy from `prd.md` §3. Fixed vocabulary (§4.1). |
| `provenance` | M | `direct \| secondary` | `direct` = we recorded it ourselves; `secondary` = someone else reported it. Drives the grade ceiling `↔ TASK-004 §3.2`. |
| `subject_type` | M | `app \| study \| user_report \| market_estimate \| expert_opinion \| internal_test \| other` | What the source is *about* — lets records roll up per app/study. |
| `subject_ref` | C | foreign key \| `n/a` | If `subject_type = app`, the App Registry id (`→ TASK-006`, e.g. `APP-002`). If `study`, its citation id. Links the record to its subject. |

### 3.4 Context fields (what the evidence is situated in)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `app_version` | C | version string \| `n/a` \| `unknown` | **Mandatory when `subject_type = app`** (`prd.md` §4 "app version"). `n/a` for non-app sources; `unknown` only if the app genuinely hid it (S3). |
| `platform` | C | `iOS \| iPadOS \| web \| Android \| other \| n/a` | Mandatory for app records. |
| `device_os` | C | string \| `n/a` | Device + OS build used for a `direct` app capture (`prd.md` §5 "consistent devices"); supports reproducibility. |
| `region` | M | ISO country/region code \| `global` \| `unknown` | Store region / study population region (`prd.md` §4 "country", §5 "regions"). |
| `population_context` | C | string \| `n/a` | Study population or user context (`prd.md` §4 "population/context"). Mandatory for `scientific` and `user_report` types; records whether it transfers to midlife women (feeds `↔ TASK-004` relevance axis). |
| `language` | O | language code | Language of the captured content, when it affects interpretation. |

### 3.5 Content & grading (interlocks with TASK-004)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `excerpt` | C | string (bounded) \| `none` | Verbatim quote/excerpt within legal limits (`prd.md` §4). Length-bounded per §5; verbatim text in quotes, our paraphrase clearly outside quotes. |
| `summary` | M | string | Neutral, non-interpretive description of *what the source says/shows*. No inference here (inference belongs to a claim, `↔ TASK-004 §2.2`). |
| `epistemic_label` | M | `observation \| inference \| hypothesis \| invention` | Set per `↔ TASK-004 §2`. For a raw source this is almost always `observation` (of a study/app/report); `invented` only for an originated idea stored as a record. |
| `grades` | C | map of dimension→`A\|B\|C\|D\|n/a` | The per-axis grades from `↔ TASK-004 §4` (efficacy, relevance, experience, commercial). Populated only for axes the source bears on; others `n/a`. A `draft` record may defer grading; a `verified` record must carry grades or justify `n/a`. |
| `confidence` | M | `established \| likely \| indicative \| speculative` | The controlled confidence word (`↔ TASK-004 §5.2`); must match the lowest load-bearing grade — reviewers reject "established" over a C (`prd.md` §4 "confidence"). |
| `limitations` | M | string (non-empty) | The mandatory limitations/uncertainty note (`prd.md` §4 "limitations"; `↔ TASK-004 §5.1`): the main reason confidence is not higher and what would raise it. Empty = validation failure. |

### 3.6 Governance & linkage

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `owner_role` | M | role id (`R01`–`R15`, per TASK-003) | The accountable role for this record (`prd.md` §14 "owner"). A **role**, not a named person (consistent with TASK-002/003). |
| `captured_by_role` | M | role id | Who captured it (for separation-of-duties vs. `verified_by_role`, §6.4). |
| `verified_by_role` | C | role id \| `none` | Required to move to `record_status = verified`; must differ from `captured_by_role`. |
| `contradicts` | O | list of `EVD-NNN` \| `none` | Links to records this one contradicts (`→ TASK-008`); presence forces `record_status = contested` on both until resolved. |
| `cited_by` | O | list of claim ids | Back-links to claims/records that cite this evidence (§9); maintained by the citing record. |
| `supersedes` / `superseded_by` | O | `EVD-NNN` \| `none` | Re-capture chain (§2.1). |
| `consent_ref` | C | consent-record id \| `n/a` | **Mandatory** when the source contains personal data (interviews, diaries): link to the consent/ethics record (`prd.md` §4 "Obtain consent and minimize sensitive data"; `→ TASK-026`). `n/a` only for non-personal sources. |
| `reverify_due` | C | `YYYY-MM-DD` \| `n/a` | Re-verification due date (§7.3); mandatory for volatile sources (prices, store listings, live URLs). |
| `change_log` | M | list of `{version, date, role, change}` | Append-only (§2.2). |

---

## 4. Controlled vocabularies

### 4.1 `evidence_type` — the six source types (`prd.md` §3)

| Value | Use for | Default `provenance` | Grade ceiling (`↔ TASK-004 §3`) |
|---|---|---|---|
| `observed` | We directly recorded it (app walkthrough, logged interaction, our own test). | `direct` | B on a single observation; A only if replicated. |
| `reported` | Someone else reports it (app-store review, forum post, press, company statement). | `secondary` | C (self-selected / unverifiable). |
| `scientific` | Peer-reviewed study, systematic review, meta-analysis. | `secondary` | up to A if strong **and** relevant. |
| `estimated` | Third-party market/download/revenue estimate (Appfigures/Sensor Tower-type). | `secondary` | C; **never** convertible to retention/CAC/LTV (§6.2). |
| `expert` | Specialist judgment/analogy with no independent evidence. | `direct`/`secondary` | D. |
| `invented` | An originated idea/mechanism stored as a record. | `direct` | D on evidence axes; not evidence until tested (`↔ TASK-004 §2.4`). |

### 4.2 Cross-vocabulary consistency rules

- `evidence_type = estimated` ⇒ `subject_type = market_estimate` and the record may **not** carry a grade on the efficacy axis.
- `evidence_type = invented` ⇒ `epistemic_label = invention` and all `grades` on evidence axes = `D`.
- `evidence_type = scientific` ⇒ `citation` required and `population_context` required.
- `provenance = direct` on an app subject ⇒ `artifact_ref` required and `app_version`+`platform` required.

---

## 5. Excerpt & artifact capture rules (legal / faithful)

`prd.md` §4 requires "evidence quotes/excerpts within legal limits" and §3 requires "respecting copyright and access restrictions." Rules:

1. **Verbatim is quoted; everything else is ours.** `excerpt` holds only verbatim text, inside quotation marks. Any paraphrase, interpretation, or "what this implies" goes in a *claim*, never in `excerpt` or `summary`.
2. **Bounded length.** An `excerpt` is the shortest span that preserves meaning — a guideline of ≤ ~75 words or ≤ ~25% of a short source, whichever is smaller — to stay within fair-use/quotation limits. Longer context lives in the stored `artifact_ref`, not re-published as text.
3. **Artifact over re-hosting.** For app UI and screenshots, store an `artifact_ref` (our capture) and record `access_restrictions`; do not re-publish copyrighted marketing assets as if they were our observations (`prd.md` §2 "Distinguish real observations from marketing screenshots").
4. **Faithfulness.** The `summary` must be checkable against the artifact by the `verified_by_role`; any divergence blocks `verified` status.
5. **Translation.** If `excerpt` is translated, store the original in the artifact and mark the translation as ours in a `*_note`.

---

## 6. Forbidden values & validation failures

These make a record **invalid** (rejected at entry), not merely low-confidence. They are the structural anti-fabrication guards and map to `prd.md` §4 and `↔ TASK-004 §6`.

### 6.1 Structural
1. **No source pointer** (violates S1): none of `source_url` / `artifact_ref` / `citation`. → reject.
2. **No `access_date`** (violates S2). → reject.
3. **Guessed value where unverifiable** (violates S3): any field holding a plausible-but-unconfirmed value instead of `unknown`. → reject (where detectable) / flag at review.
4. **Empty `limitations`** (`prd.md` §4 requires limitations). → reject.
5. **`verified_by_role == captured_by_role`** on a `verified` record (violates S-o-D §6.4). → reject.

### 6.2 Content (fabrication guards — most serious, `prd.md` §4)
6. **Fabricated metric or identity**: any invented download, revenue, **retention, CAC, LTV**, interview participant, user quote, or **clinical outcome** stored as if real. → escalate; this is the gravest violation.
7. **Estimate converted to private metric**: an `estimated` record carrying a retention/CAC/LTV value (`prd.md` §10; `↔ TASK-004 §3.2`). → reject.
8. **Editorial recognition as efficacy**: an "App of the Day"-type record graded on the efficacy/health axis (`prd.md` intro/§3; dates must route to `→ TASK-010`). → reject the efficacy grade.
9. **Marketing asset logged as direct observation**: `provenance = direct` with no `artifact_ref` from our own capture. → reject.
10. **Confidence–grade drift**: `confidence` word higher than the lowest load-bearing grade allows (`↔ TASK-004 §5.2`). → reject.

### 6.3 Privacy
11. **Personal data without `consent_ref`**: an interview/diary record containing personal data and `consent_ref = n/a`. → reject (`prd.md` §4/§6 consent & data minimization; `→ TASK-026/040`).
12. **Over-collection**: sensitive personal data beyond the stated research purpose stored in the record rather than minimized/referenced. → reject.

### 6.4 Separation of duties
The role that *captures* a record cannot be the sole role that *verifies* it (`verified_by_role` must differ from `captured_by_role`). Safety-relevant grades (efficacy/clinical) are additionally confirmed by the clinical reviewer per the responsibility matrix (TASK-003). This mirrors the non-self-approval rule already established for gate sign-offs.

---

## 7. Validation, freshness, and re-verification

### 7.1 Entry validation (must pass before `record_status: draft` is saved)
A record passes entry validation iff:
1. `evd_id` well-formed, unique, immutable.
2. At least one source pointer present (S1) and `access_date` present (S2).
3. `evidence_type`, `provenance`, `subject_type`, `region`, `summary`, `confidence`, `limitations`, `owner_role`, `captured_by_role` all present.
4. All §4.2 cross-vocabulary rules satisfied for the chosen `evidence_type`.
5. No §6 forbidden value present.
6. Any `unknown` is the literal token, never a guess (S3).

### 7.2 Verification (draft → verified)
A different role (`verified_by_role` ≠ `captured_by_role`) confirms: the artifact/source resolves, the `summary`/`excerpt` are faithful (§5.4), the `grades`+`confidence` obey `↔ TASK-004`, and no §6 issue exists. Only then is the record citable in a gate-bound claim (`prd.md` §11 gate 1: every claim source-linked).

### 7.3 Freshness & re-verification
- **Volatile sources** (`subject_type = app` listings/prices, live `source_url`s, `estimated` figures) carry a mandatory `reverify_due`. On that date the record is re-checked; if unchanged, `access_date`/`record_version` bump; if changed, a **new** `evd_id` supersedes it (§2.1).
- **Scientific sources** are re-checked for retraction/superseding reviews on citation into a gate, not on a fixed clock.
- A record past `reverify_due` without recheck auto-moves to `record_status = stale` and may not back a current claim (only a historical one).
- Retraction/failed recheck → `record_status = retracted`; every `cited_by` claim is re-opened in the decision log (`→ TASK-009`) and the event logged in the contradiction/gap log (`→ TASK-008`).

---

## 8. Validated sample record (ILLUSTRATIVE — synthetic)

The record below is **entirely synthetic** and included solely to demonstrate that the schema validates. It asserts no real observation about any real app, study, or person. The `summary`/`excerpt` are invented placeholders clearly marked synthetic.

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates schema validity only. No real evidence.
evd_id: EVD-001
record_version: 0.1
record_status: draft
title: "[SYNTHETIC] Example habit app — onboarding goal-selection screen capture"

# Source pointer (S1 satisfied via artifact_ref; direct app capture)
source_url: unknown
artifact_ref: ART-SYNTH-001          # our own screen recording (synthetic id)
citation: none
access_date: 2026-11-22              # S2: our capture date, never unknown
publication_date: unknown           # app did not surface a build date (S3: not guessed)
access_method: in_app_purchase
access_restrictions: "Paid subscription screen; capture for internal research only, not re-published."

# Classification & provenance
evidence_type: observed
provenance: direct
subject_type: app
subject_ref: APP-SYNTH-001          # → TASK-006 App Registry (synthetic)

# Context
app_version: unknown                # hidden by the app; recorded as unknown, not invented
platform: iOS
device_os: "[SYNTHETIC] iPhone, iOS build placeholder"
region: unknown
population_context: n/a
language: en

# Content & grading (↔ TASK-004)
excerpt: "none"                     # no verbatim text captured; artifact holds the screen
summary: "[SYNTHETIC] Onboarding presents a single goal-selection screen with multiple options before first use. Neutral description only; no inference."
epistemic_label: observation
grades:
  efficacy: n/a                     # a UI observation says nothing about behavior change
  relevance: n/a
  experience: C                     # single-session direct observation → ceiling, pending replication
  commercial: n/a
confidence: indicative              # matches the load-bearing experience grade C
limitations: "Single session, one device, n/a population, region unknown; replication across ≥2 sessions and ≥1 region needed before this supports a 'B' experience grade. No efficacy claim possible from a UI capture."

# Governance & linkage
owner_role: R03                     # Senior UX/product designer (per TASK-003)
captured_by_role: R07               # UX researcher
verified_by_role: none              # still draft; verification requires a role ≠ R07
contradicts: none
cited_by: []
supersedes: none
superseded_by: none
consent_ref: n/a                    # no personal data in this record
reverify_due: 2027-02-22            # volatile app listing → scheduled recheck
change_log:
  - {version: "0.1", date: "2026-11-22", role: "R07", change: "Initial synthetic capture for schema validation."}
```

**Validation trace (why this record passes §7.1 entry validation):**
1. `evd_id` = `EVD-001`, well-formed and unique. ✔
2. Source pointer present via `artifact_ref: ART-SYNTH-001` (S1) and `access_date: 2026-11-22` present (S2). ✔
3. All mandatory fields present (`evidence_type`, `provenance`, `subject_type`, `region`, `summary`, `confidence`, `limitations`, `owner_role`, `captured_by_role`). ✔
4. Cross-vocabulary rules: `provenance=direct` + `subject_type=app` ⇒ `artifact_ref` present and `platform` present (`app_version=unknown` is permitted because the app hid it, recorded per S3, not guessed). ✔
5. No §6 forbidden value: no fabricated metric, no estimate-to-retention conversion, no efficacy grade on a UI observation (`efficacy: n/a`), `confidence: indicative` matches grade `C` (no drift), no personal data so `consent_ref: n/a` is legitimate. ✔
6. Every unverifiable field (`source_url`, `publication_date`, `app_version`, `region`) is the literal token `unknown`, never a guess (S3). ✔

It is correctly held at `record_status: draft` because `verified_by_role: none`; to become `verified` and citable in a gate, a role other than `R07` must confirm it (§6.4, §7.2).

---

## 9. Claim ↔ evidence join (how downstream records cite this one)

A claim in any `prd.md` §4 database (Capability `CAP`, User Needs `NEED`, Opportunity `OPP`, Pattern `PAT`, Journey `JRN`, Decision `DEC`, Experiment `EXP`) carries a `sources: [EVD-…]` list (the grading stamp of `↔ TASK-004 §9`). The join rules:

- **Many-to-many.** One claim may cite several `EVD` records; one `EVD` record may support many claims. Each citing claim adds itself to the record's `cited_by`.
- **A claim's grade cannot exceed its sources.** A claim graded `B` on efficacy must cite at least one `EVD` record admissible for `B` on efficacy (`↔ TASK-004 §3`). Validation at the claim layer (not here) enforces this, but the record supplies the ceiling.
- **Contradiction propagates.** If a cited record becomes `contested`/`retracted` (§2.3, §7.3), every `cited_by` claim is flagged for re-review (`→ TASK-008/009`).
- **No orphan grades.** A claim with a grade but no resolvable `EVD` source is "ungraded/inadmissible" under `↔ TASK-004 R1` — the record schema is what makes that check mechanical.

---

## 10. Governance, dependencies, and change control

- **Custodian:** Program Director owns this schema; changes are versioned in the change log below. Per-record ownership sits with the `owner_role` (a role, per TASK-003), never a named individual.
- **Where it is applied:** the Evidence Library (`EVD-001`) and, by foreign key, every other `prd.md` §4 database that cites evidence.
- **Dependencies:**
  - `↔ TASK-004` Evidence grading rules — defines the grade/label/confidence values this record *stores*; this record defines the provenance/source fields those grades *depend on*. The two interlock at the grading stamp (`TASK-004 §9`).
  - `→ TASK-006` Benchmark app registry — `subject_ref`/`APP-` foreign keys for app sources.
  - `→ TASK-008` Research gap & contradiction log — consumes `contradicts`, `contested`, `stale`, `retracted` events.
  - `→ TASK-009` Decision & experiment registers — re-opened when a cited record is retracted/demoted.
  - `→ TASK-010` Editorial-recognition verification — destination for "App of the Day"-type claims barred from efficacy grading (§6.2.8).
  - `→ TASK-026 / TASK-040` Consent pack & privacy/clinical boundary checklist — supply the `consent_ref` and personal-data rules (§6.3).
  - `← TASK-002 / TASK-003` Workstream registry & responsibility matrix — supply `owner_role`/`captured_by_role`/`verified_by_role` identities and separation-of-duties.
- **Open unknowns (honestly recorded, not defects):**
  - Whether artifact storage (`artifact_ref`) lives in HerRays OS/Notion or a dedicated store — deferred to TASK-038 tooling decision; the schema only requires a resolvable id, not a specific backend.
  - Exact retention period before a `retracted` record may be archived off the live library — pending the privacy/regulatory reviewer (`→ TASK-040`); default is "retain for the full program, never delete."
  - Whether `reverify_due` intervals should differ by `subject_type` (e.g., prices monthly vs. listings quarterly) — proposed default 90 days for volatile sources, to be confirmed by the market-intelligence owner.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-22 | Initial schema: `EVD-NNN` identity & lifecycle, six field groups, six-type vocabulary, excerpt/artifact capture rules, forbidden-value/validation rules, freshness & re-verification, one validated synthetic sample record, claim↔evidence join, dependencies. | Program Director |
