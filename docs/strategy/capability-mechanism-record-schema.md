# HerRays Capability Mechanism Record Schema

**Deliverable:** TASK-030 — Create the capability mechanism record schema
**Workstream:** Capability Extraction
**Version:** 0.1 · **Status:** Proposed, not yet populated
**Owner (accountable role):** Head of Product (Capability Extraction Board chair) · schema co-custodian with Program Director
**Reviewers:** Behavioral scientist · Senior UX designer · Motion/interaction designer · Product analyst/growth · iOS engineer · Clinical reviewer · Privacy/regulatory reviewer · QA/accessibility
**Source basis:** `prd.md` §4 (Capability Library `CAP-001`, grades, source handling), §3.3–§3.5 (how documented examples are used; the five-layer translation; the streaks worked example), §5 Phase 3 (capability mechanism extraction, 30–50 deep records, 90-minute workshop), §5 Phase 4 (capability review; Adopt/Adapt/Invent/Reject/Defer), §6 (behavioral science, guilt/compulsion/burden risks), §11 (quality gates), §13 Prompt 06 (Capability Extraction Board field list) and Prompt 07 (review/red-team), §14 (handoff templates / acceptance criteria)

---

## 0. How to read this document

This document defines the **record format for a single extracted capability** — the `CAP` record — the atomic unit of the HerRays **Capability Mechanism Library** (`prd.md` §4, `CAP-001`). A `CAP` record takes one *observed* product behavior (e.g., a streak counter) and carries it through the five-layer translation the PRD mandates — **observed feature → user job → mechanism → evidence/limitations → alternative solutions** (`prd.md` §3.4, §5 Phase 3) — ending in a graded, source-linked, reviewable decision (`Adopt / Adapt / Invent / Reject / Defer`).

It is a **governance / data-contract artifact**. It defines **fields, identifiers, allowed values, and validation rules** for a capability record. It does **not** contain any real research finding. The single worked record in §8 reproduces the PRD's own *illustrative* streaks example (`prd.md` §3.5) scaffolded with clearly-marked synthetic evidence ids, and exists only to prove the schema validates.

> **No-fabrication statement.** This schema contains no real user research, interview, metric, clinical outcome, or test result. It cites no real `EVD` record. The one worked record (§8) is labelled **ILLUSTRATIVE (synthetic)** end-to-end; its mechanisms and alternatives are quoted from the PRD's own streaks example (`prd.md` §3.5), which the PRD presents as *hypotheses to test*, not findings — and the record preserves them as such (`mechanism_status: hypothesized`, `decision_status: pending`). The schema itself is built to make fabrication *detectable*: no claim may enter a `CAP` field without either a resolvable `EVD` source (`↔ TASK-005`) or an explicit `invention`/`hypothesis` label (`↔ TASK-004 §2`); the forbidden-value rules (§6) reject a decision reached without evidence, popularity dressed up as efficacy, and any capability that skips the mandatory clinical/privacy/accessibility gates (`→ TASK-033`).

**Scope boundary (what this task is and is not).**
- **TASK-030 (this document) = the *record*: how one extracted capability is stored, identified, graded, and made reviewable.** It owns `cap_id`, `observed_feature`, `user_job`, `mechanism`, the evidence links, `downsides`, the three `alternatives`, the one `novel_alternative`, `validation`, and `decision_status` — the exact fields named in the acceptance criteria.
- **TASK-031 (five-layer extraction worksheet) = the *process* that fills a record.** It is the reusable facilitation worksheet that separates observable feature / job / mechanism / evidence-limitations / design-possibilities during extraction. This schema defines the *destination fields*; the worksheet defines *how a person populates them*. Flagged `→ TASK-031`.
- **TASK-032 (90-minute workshop script), TASK-033 (safety-gate checklist), TASK-034 (evaluation scorecard), TASK-035 (decision form), TASK-036 (red-team protocol)** are *procedures that act on* `CAP` records. This schema names the fields they read and write (`safety_gate`, `scores`, `decision_status`, `red_team`) but does not define their internal logic; each is flagged `→ TASK-0xx`.
- **A `CAP` record is not an `EVD` record.** Evidence lives in the Evidence Library (`↔ TASK-005`) and is *cited* by a capability via `EVD-` foreign keys. One capability ↔ many evidence records; one evidence record ↔ many capabilities. §3.4 defines that link.
- **The decision is recorded here but *owned* in the Decision Register.** `decision_status` mirrors the authoritative `DEC` record (`→ TASK-009`); the mandatory-field enforcement for a decision lives in the decision form (`→ TASK-035`). This record holds the pointer and the summary, not the adjudication machinery.

---

## 1. Purpose and non-negotiables

`prd.md` §4 mandates a Capability Library (`CAP-001`) whose core fields are "User job, feature, mechanism, evidence, alternatives, risks, tests." `prd.md` §5 Phase 3 expands this to a **deep record** of "observed feature → user job → mechanism → evidence/limitations → alternative solutions … app/source reference, user context, benefits, failure modes, ethics, HerRays relevance, three alternatives plus one unconventional alternative, technical implications, test hypothesis and decision status," and Prompt 06 restates the same field list. This schema operationalizes that mandate into one enforceable record.

The record exists to do six jobs:

1. **Separate the five layers so they cannot be conflated.** The observed *feature* (what the app does), the *job* it serves for the user, the *mechanism* by which it might work, the *evidence* for that mechanism, and the *alternative* ways to serve the job are distinct fields with distinct grading. A reader can never mistake "this app has streaks" (observation) for "streaks cause behavior change" (an unproven hypothesis) or "we will build streaks" (a decision). This is the PRD's central anti-collage discipline (`prd.md` executive mandate: "Do not build a collage of competitor features").
2. **Translate feature → job → mechanism, not feature → feature.** Every record is anchored to a *user job* and a *mechanism*, so the Lab reasons about why something works, not merely that a competitor shipped it (`prd.md` §3.4). Preserving original examples as "annotated reference patterns … **not mandatory features**" (`prd.md` §3.6) is enforced structurally: a record cannot advance to `Adopt` without a mechanism and evidence, and popularity is barred from the evidence axes (§6).
3. **Carry supporting *and* contradictory evidence.** Both `supporting_evidence` and `contradictory_evidence` are first-class fields (`prd.md` Prompt 06 "supporting/contradictory evidence"; "Preserve specialist disagreements"). Contradictions are never averaged away; they route to the contradiction log (`→ TASK-008`).
4. **Require three alternatives plus one unconventional option before any decision.** The PRD requires, per capability, "three alternatives plus one unconventional alternative" (`prd.md` §5 Phase 3). The record makes this a *validation precondition*: a decision cannot be `approved` while the alternatives block is incomplete (§7.2, §6.2). This is the structural guard against adopting the first thing seen.
5. **Separate popularity from efficacy, and gate safety first.** Clinical, privacy, ethics, accessibility and unsupported-claim gates are applied *before* value scoring (`prd.md` §5 Phase 4; `→ TASK-033`). A capability that fails a mandatory gate cannot be `Adopt`ed no matter how high its value score — the gates are non-compensable (`prd.md` §9/§11).
6. **End in a traceable decision with the smallest useful test.** Every record carries a `decision_status` (`Adopt/Adapt/Invent/Reject/Defer`), its rationale, dependencies, and the `validation` hypothesis / smallest experiment that would confirm it (`prd.md` §5 Phase 4; `→ TASK-009/035`). "Do not turn this into a feature shopping list."

**Four non-negotiable rules, enforced throughout:**

- **C1 — Observation, mechanism, and decision are graded separately and never averaged into one score.** A capability may have a grade-`B` *observation* (we watched the feature directly) but only a grade-`D` *mechanism* (an untested hypothesis). The record stores both; it never collapses them into a single number, and a high observation grade may never be read as a high efficacy grade (`prd.md` §4 "Do not interpret a high grade on usability as a high grade on health impact").
- **C2 — No capability advances to a decision without (a) a user job, (b) a named mechanism, (c) at least one resolvable `EVD` source *or* an explicit `hypothesis`/`invention` label, and (d) a completed alternatives block (three + one novel).** Missing any of these makes the record *incomplete* (not merely low-confidence — *incomplete*); it may sit at `pending` but cannot reach `approved` (§7.2). This is the structural guard against fabrication and against feature-copying.
- **C3 — Mandatory safety gates are evaluated first and are non-compensable.** The `safety_gate` block (clinical, privacy, manipulation/ethics, accessibility, unsupported-claims; `→ TASK-033`) must read `pass` on every dimension before value scoring is admissible. A single `reject` on any gate forces `decision_status ∈ {Reject, Redesign-required}` regardless of value (`prd.md` §5 Phase 4 / §9 / §11).
- **C4 — Unknown is written as `unknown`, disagreement is preserved, nothing is deleted.** Any unverified field is the literal token `unknown`, never a plausible guess (`↔ TASK-005 S3`). Contradictory evidence and specialist disagreement are preserved, not reconciled by averaging (`prd.md` Prompt 06). Records are versioned and superseded, never hard-deleted (§2).

---

## 2. Record identity and lifecycle

### 2.1 The `CAP` identifier

| Property | Rule |
|---|---|
| **Format** | `CAP-NNN` — `CAP-` prefix + zero-padded integer, issued sequentially (`CAP-001`, `CAP-002`, …), matching the `prd.md` §4 convention (`CAP-001`). |
| **Immutable** | A `cap_id` is permanent — never reused, renumbered, or reassigned to a different capability. |
| **One capability = one id** | A record is *one mechanism serving one user job*, abstracted from (and linked to) the app(s) that instantiate it. The *same* streak counter observed in three apps is **one** `CAP` record citing three `EVD` observations and three `JRN`/`APP` references (§3.4), not three capability records. |
| **Splitting** | If a single observed feature turns out to serve two genuinely different jobs/mechanisms, it is split into two `CAP` records, each cross-linked via `related_caps`. The original id is retired to one of them with a `change_log` note; ids are never silently repurposed. |

**Rule of thumb:** *one job + one mechanism → one id. A new job or a new mechanism → a new id.* Target corpus: **30–50 deep records** (`prd.md` §5 Phase 3 / §4 initial evidence targets).

### 2.2 Versioning within a record

Each record carries `record_version` (starts `0.1`). Any substantive change — added evidence, a grade change, a new alternative, a gate result, a decision change — increments it and appends a one-line `change_log` entry (version/date/role/change). Evidence is *added*, never overwritten; a withdrawn `EVD` link is struck through in the log, not erased.

### 2.3 Record status (lifecycle)

| `record_status` | Meaning | Who may set |
|---|---|---|
| `draft` | Feature observed and logged; job/mechanism not yet extracted. Not reviewable. | Capturing role (UX researcher / UX designer) |
| `extracted` | Five layers populated via the worksheet (`→ TASK-031`); alternatives may be incomplete. Ready for the extraction workshop (`→ TASK-032`). | Extraction facilitator |
| `in_review` | Alternatives complete; submitted to the Capability Review Board; safety gates and scoring in progress (`→ TASK-033/034`). | Board chair (Head of Product) |
| `red_teamed` | A high-priority record that has passed an adversarial challenge (`→ TASK-036`), with rebuttal or revision recorded. | Red-team lead |
| `decided` | A `DEC` record (`→ TASK-009`) is attached; `decision_status` is authoritative. Still revisable with cause. | Decision owner |
| `superseded` | Replaced by a newer/merged record; retained for audit, linked via `superseded_by`. Never hard-deleted. | Board chair |

Status is monotonic except for `decided → in_review` (a reopened decision) and any `→ superseded`. A record is **never hard-deleted** (C4).

---

## 3. Field catalogue

The record has seven field groups. **M** = mandatory, **C** = conditionally mandatory (rule given), **O** = optional. Every field has an allowed-value rule; `unknown` is permitted only where C4/S3 allows and is shown explicitly. Fields map 1:1 onto the acceptance-criteria list; the mapping is made explicit in §3.8.

### 3.1 Identity & lifecycle

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `cap_id` | M | `CAP-NNN` | §2.1; unique, immutable. |
| `record_version` | M | `X.Y` | §2.2; starts `0.1`. |
| `record_status` | M | `draft \| extracted \| in_review \| red_teamed \| decided \| superseded` | §2.3. |
| `title` | M | string | Short neutral label naming the *capability*, not the app ("Consecutive-day streak counter"). Not a claim, not a feature endorsement. |
| `related_caps` | O | list of `CAP-NNN` \| `none` | Cross-links to split/merged/adjacent capabilities (§2.1); preserves the cross-app pattern map (`prd.md` Prompt 06 "cross-app patterns"). |

### 3.2 Layer 1 — Observed feature & source (what the app actually does)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `observed_feature` | M | string | Neutral description of the *observable implementation* only — what a user sees/does. No inferred purpose, no evaluation (that is Layers 2–3). "A counter increments by 1 each consecutive day a task is completed and resets to 0 after a missed day." |
| `source_apps` | M | list of `APP-NNN` | The benchmark app(s) where this was observed (`→ TASK-006`). ≥1 required; this is what makes the capability *observed*, not imagined. |
| `source_journeys` | C | list of `JRN-NNN` \| `none` | The journey-library capture(s) showing the feature in context (`→ Journey Library JRN-001`, `prd.md` §4). Required when `observation_grade` claims direct walkthrough evidence. |
| `observation_evidence` | M | list of `EVD-NNN` | The evidence record(s) backing the *observation* itself (our screen capture / walkthrough; `↔ TASK-005`). Empty ⇒ the feature is hearsay, not observed ⇒ §6 reject. |
| `observation_grade` | M | `A\|B\|C\|D` | Grade of the *observation* under `↔ TASK-004` (direct single observation ceilings at `B`). Graded independently of mechanism/efficacy (C1). |
| `provenance` | M | `direct \| secondary` | `direct` = we observed it in-app; `secondary` = reported (review, marketing). A `secondary`-only feature is flagged and may not claim a direct-observation grade (`prd.md` §2 "Distinguish real observations from marketing screenshots"). |

### 3.3 Layer 2 — User job & context (why a user would engage it)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `user_job` | M | string (JTBD form) | The job the user is hiring this capability to do, in neutral JTBD language ("make my repeated effort visible so I feel it is worth continuing"). Links to a `NEED` record where one exists (`→ User Needs NEED-001`, `→ TASK-029`). |
| `user_context` | M | string | The situation/segment in which the job arises (`prd.md` §5 Phase 2 provisional segments: motivated beginner, repeated abandoner, unpredictable schedule, low-energy day, tracking-averse, experienced optimizer). Marked provisional until replaced by observed segments (`→ TASK-029`). |
| `job_evidence` | C | list of `EVD-NNN` \| `hypothesis` | Evidence that users actually have this job (interview/diary/review; `↔ TASK-005`). If none yet, the literal `hypothesis` label is required — the job is then a stated hypothesis, not a finding (C2/C4). |
| `job_grade` | C | `A\|B\|C\|D` \| `n/a` | Grade of the *job* claim (how well-evidenced that users have this need). `n/a` only while `job_evidence: hypothesis` and flagged open (`→ TASK-008`). |

### 3.4 Layer 3 — Mechanism & evidence (how it might work, and what backs that)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `mechanism` | M | string | The behavioral mechanism(s) by which the feature might serve the job, named in BCT/COM-B/SDT/Fogg/habit terms where applicable (`prd.md` §6; e.g., "reinforcement, feedback, commitment device"). This is the heart of the record. |
| `mechanism_status` | M | `evidenced \| hypothesized \| contested \| invented` | Epistemic status of the mechanism (`↔ TASK-004 §2`). `hypothesized` is the honest default for competitor-observed mechanisms (the PRD's streaks mechanisms are explicitly "hypothesized", `prd.md` §3.5). |
| `supporting_evidence` | C | list of `EVD-NNN` \| `none` | Scientific / user / observational evidence *for* the mechanism (`↔ TASK-005`; `prd.md` §6 "populations, interventions, comparators, duration, effect sizes"). `none` permitted only if `mechanism_status ∈ {hypothesized, invented}` and the gap is logged (`→ TASK-008`). |
| `contradictory_evidence` | C | list of `EVD-NNN` \| `none` | Evidence *against* the mechanism or surfacing a failure mode (`prd.md` Prompt 06 "supporting/contradictory evidence"). **Never deleted or averaged against supporting evidence** (C4); a live contradiction forces a `→ TASK-008` `CON` record. |
| `efficacy_grade` | M | `A\|B\|C\|D` \| `n/a` | Grade of the *mechanism's efficacy for behavior change* under `↔ TASK-004`, **graded separately from `observation_grade`** (C1). `n/a` + `hypothesized` is the correct state for an untested mechanism; it is never silently promoted from the observation grade. |
| `transferability` | M | `high \| moderate \| low \| unknown` | Whether mechanism evidence transfers to **midlife women** specifically (`prd.md` §6 "transferability to midlife women"); `unknown` when the evidence population differs and is unexamined. |
| `confidence` | M | `established \| likely \| indicative \| speculative` | Controlled confidence word (`↔ TASK-004 §5.2`); must match the lowest load-bearing grade — reviewers reject "established" over a `hypothesized`/`n/a` mechanism. |

### 3.5 Layer 4 — Downsides, failure modes & review lenses

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `downsides` | M | string (non-empty) | Failure modes, risks, and negative experience the capability can cause (`prd.md` §4 "risks"; §5 Phase 3 "failure modes"; §6 "risks of guilt, compulsion, burden and excessive tracking"). The streak example's "shame and all-or-nothing behavior after a missed day" lives here. Empty = validation failure (§6). |
| `positive_experience` | C | string \| `none` | The positive affective/experiential response the capability can create (`prd.md` Prompt 06 "positive/negative experience"), evidence-linked where available. |
| `ethics_flags` | M | list of `{issue, severity}` \| `none` | Manipulation / autonomy / dependency / anxiety / screen-time concerns (`prd.md` §6; `→ TASK-033/036`). `none` only after explicit review, never by omission. |
| `accessibility_notes` | M | string | Accessibility implications — VoiceOver, Dynamic Type, reduced-motion, contrast, interaction targets (`prd.md` §2 QA/accessibility; `→ TASK-022`). Capabilities with motion/haptic/visual feedback must state the reduced-motion/alt path. |
| `herrays_relevance` | M | string | How (and whether) this serves HerRays' midlife-women audience, brand principles and clinical responsibility (`prd.md` Prompt 06 "HerRays relevance"; executive mandate). Must note if relevance is low/negative — not every observed capability is relevant. |
| `technical_implications` | C | string \| `unknown` | iOS/backend feasibility, HealthKit/notification/widget/on-device considerations, build/buy hint (`prd.md` §5 Phase 3 "technical implications"; `→ TASK-037/039`). `unknown` until the technology workstream assesses it. |

### 3.6 Layer 5 — Alternatives (three + one unconventional) & validation

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `alternatives` | C | list of ≥3 `{summary, rationale, serves_same_job, evidence_or_label}` | **Exactly three or more** conventional/adapted alternative ways to serve the *same user job* (`prd.md` §5 Phase 3 "three alternatives"). Each states how it addresses a `downsides` entry. Required (≥3) before `record_status` may reach `in_review` (C2, §7.2). |
| `novel_alternative` | C | `{summary, rationale, why_unconventional, evidence_or_label}` \| `none` | **Exactly one** genuinely unconventional / invented option (`prd.md` §5 Phase 3 "one unconventional alternative"). Labelled `invention` (`↔ TASK-004 §2`); it is a hypothesis, never presented as validated. Required before `in_review`. |
| `validation` | M | `{test_hypothesis, smallest_experiment, success_criteria, exp_ref}` | The test that would confirm/refute adoption (`prd.md` §4 "tests"; §5 Phase 3 "test hypothesis"; §5 Phase 4 "smallest test"). `test_hypothesis` is mandatory; `exp_ref` links to an `EXP` record when registered (`→ TASK-009`). The PRD's required streak test lives here. |

### 3.7 Review, scoring & decision (governance)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `safety_gate` | C | map `{clinical, privacy, manipulation, accessibility, unsupported_claims} → pass \| redesign \| investigate \| reject \| not_yet_assessed` | The mandatory non-compensable gates, applied **before** scoring (`prd.md` §5 Phase 4; `→ TASK-033`). Any `reject` ⇒ C3 blocks `Adopt`. Must leave `not_yet_assessed` before a decision. |
| `scores` | C | map of the six weighted dimensions → `1`–`5` \| `n/a` | User value / behavioral evidence / experience quality / differentiation / long-term usefulness / feasibility (`prd.md` §5 Phase 4 weights 25/20/15/15/15/10). Computed by the scorecard (`→ TASK-034`); admissible **only after** `safety_gate` all-pass. |
| `red_team` | C | `{challenged: bool, findings, rebuttal_or_revision}` \| `n/a` | Adversarial challenge outcome for high-priority records (`prd.md` §5 Phase 4 "Red-team every high-priority item"; `→ TASK-036`). Required to reach `record_status: red_teamed`. |
| `decision_status` | M | `pending \| Adopt \| Adapt \| Invent \| Reject \| Defer \| Redesign-required` | The PRD's five verdicts plus `pending`/`Redesign-required` (`prd.md` §5 Phase 4; §4 Decision Log). Mirrors the authoritative `DEC` record. |
| `decision_rationale` | C | string \| `n/a` | Required for any non-`pending` status (`prd.md` §5 Phase 4 "rationale"). `n/a` only while `pending`. Must cite the load-bearing evidence and name the losing alternatives. |
| `decision_ref` | C | `DEC-NNN` \| `none` | Foreign key to the authoritative Decision Register record (`→ TASK-009`); required once `record_status: decided`. |
| `dependencies` | O | string \| `none` | Other capabilities/experiments/decisions this one depends on (`prd.md` §5 Phase 4 "dependencies"). |

### 3.8 Governance & linkage

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `owner_role` | M | role id (`R01`–`R15`, per TASK-003) | Accountable role for this record (default `R01` Head of Product as Board chair). A **role**, not a named person. |
| `extracted_by_role` | M | role id | Who ran the extraction (for separation-of-duties vs. reviewer). |
| `reviewer_roles` | C | list of role ids \| `none` | Specialists who independently audited this capability before reconciliation (`prd.md` §2/§5 "independently audit … then reconcile"). Disagreements preserved, not merged (C4). |
| `disagreements` | O | list of `{role, position, evidence_ref}` \| `none` | Preserved specialist disagreement (`prd.md` Prompt 06 "Preserve specialist disagreements"; `→ TASK-008/023`). |
| `open_gaps` | C | list of `GAP-NNN` \| `none` | Research gaps this record raised (`→ TASK-008`); mandatory non-empty whenever any grade is `n/a` by reason of missing evidence. |
| `change_log` | M | list of `{version, date, role, change}` | Append-only (§2.2). |

**Acceptance-criteria field mapping (proof of coverage).**

| AC-named field | Schema field(s) |
|---|---|
| CAP ID | `cap_id` (§3.1) |
| observed feature | `observed_feature` + `source_apps`/`source_journeys`/`observation_evidence` (§3.2) |
| user job | `user_job` + `user_context`/`job_evidence` (§3.3) |
| mechanism | `mechanism` + `mechanism_status` (§3.4) |
| evidence | `supporting_evidence` + `contradictory_evidence` + per-axis grades (§3.4) |
| downsides | `downsides` + `ethics_flags` + `positive_experience` (§3.5) |
| alternatives | `alternatives` (≥3) (§3.6) |
| novel option | `novel_alternative` (exactly 1) (§3.6) |
| validation | `validation` (test hypothesis + smallest experiment + criteria) (§3.6) |
| decision | `decision_status` + `decision_rationale` + `decision_ref` (§3.7) |

---

## 4. Controlled vocabularies & cross-field rules

### 4.1 `decision_status` — the five verdicts (`prd.md` §5 Phase 4 / §4)

| Value | Meaning | Precondition |
|---|---|---|
| `pending` | Not yet decided. The only status allowed while the record is incomplete (C2). | — |
| `Adopt` | Take the mechanism broadly as observed. | All `safety_gate` = `pass`; `efficacy_grade` ≥ `B` **or** a registered confirmatory `EXP`; alternatives considered and rejected with rationale. |
| `Adapt` | Take the job/mechanism but change the implementation (usually to fix a `downsides` entry). | All `safety_gate` = `pass`; the chosen alternative named from `alternatives`/`novel_alternative`. |
| `Invent` | Serve the job with an originated mechanism (`novel_alternative`). | Labelled `invention`; `validation.test_hypothesis` mandatory; not presented as validated. |
| `Reject` | Do not pursue. | Rationale required (harm, no job, no mechanism, or a gate `reject`). Preserved, not deleted (innovation backlog, `prd.md` §11/Prompt 11). |
| `Defer` | Revisit later. | `dependencies` or `open_gaps` naming what must resolve first. |
| `Redesign-required` | A gate failed; cannot proceed as-is. | Forced by any `safety_gate = reject`/`redesign` (C3). |

### 4.2 Cross-field consistency rules (enforced at validation, §7)

- `mechanism_status = hypothesized` ⇒ `efficacy_grade ∈ {C, D, n/a}` and `confidence ∈ {indicative, speculative}`. An untested mechanism may **not** be graded `A`/`B` on efficacy or called `established`.
- `mechanism_status = invented` ⇒ the mechanism appears as the `novel_alternative` *or* is explicitly flagged invention, and all efficacy grades = `D`/`n/a` until an `EXP` concludes (`↔ TASK-004 §2.4`).
- `supporting_evidence = none` ⇒ `mechanism_status ∈ {hypothesized, invented}` **and** an `open_gaps` entry exists. A mechanism called `evidenced` with no `EVD` is a §6 reject.
- `contradictory_evidence ≠ none` ⇒ a `CON` record exists (`→ TASK-008`) and `record_status` may not reach `decided` without that contradiction's resolution state attached.
- Any `safety_gate` dimension = `reject`/`redesign` ⇒ `decision_status ∈ {Reject, Redesign-required}` (C3), and `scores` are inadmissible (`n/a`).
- `decision_status = Adopt` ⇒ all five `safety_gate` = `pass`, `alternatives` length ≥ 3, `novel_alternative ≠ none`, `decision_rationale` present, and `decision_ref` set once `decided`.
- `observation_grade` and `efficacy_grade` are **independent**; a validator rejects any record where `efficacy_grade` was copied from `observation_grade` without its own `EVD` basis (C1).
- Popularity / download / ranking figures (`evidence_type = estimated`, `↔ TASK-005`) may inform `differentiation`/market context only and may **never** appear as `supporting_evidence` on `efficacy_grade` (`prd.md` §3 "popularity does not prove efficacy"; §6).

---

## 5. How a record is produced (process pointers, not re-defined here)

A `CAP` record is populated by the five-layer **extraction worksheet** (`→ TASK-031`) during the **90-minute extraction workshop** (`→ TASK-032`, whose timed agenda maps onto Layers 1–5: 0–15 observation/job, 15–30 mechanism/science, 30–45 friction/edge cases → `downsides`, 45–60 independent `alternatives`, 60–75 `novel_alternative`/`technical_implications`, 75–90 `validation`). It is then taken through:

1. **Mandatory safety gates first** (`→ TASK-033`) → `safety_gate`. Non-compensable (C3).
2. **Weighted value scoring** (`→ TASK-034`) → `scores`. Admissible only after all gates pass.
3. **Red-team challenge** for high-priority records (`→ TASK-036`) → `red_team`.
4. **Decision** via the Adopt/Adapt/Invent/Reject/Defer form (`→ TASK-035`) → `decision_status` + `decision_ref` in the Decision Register (`→ TASK-009`).

This schema defines the **fields those steps read and write**; it deliberately does not re-specify their internal logic, to avoid duplicating TASK-031–036.

---

## 6. Forbidden values & validation failures

These make a record **invalid or incomplete** (rejected at entry / blocked from advancing), not merely low-confidence. They are the structural anti-fabrication and anti-collage guards and map to `prd.md` §4/§5/§6 and `↔ TASK-004 §6`.

### 6.1 Structural (reject at entry)
1. **No observed source** (violates Layer 1): `source_apps` empty **or** `observation_evidence` empty on a record claiming `provenance: direct`. A capability with no observation is imagined, not extracted. → reject.
2. **No user job or no mechanism** (violates C2): empty `user_job` or empty `mechanism`. → reject (cannot be a capability record).
3. **Empty `downsides`** (`prd.md` §4 "risks"; §6). Every capability has failure modes; an empty field means they were not examined. → reject.
4. **Guessed value where unverifiable** (violates C4): any field holding a plausible-but-unconfirmed value instead of `unknown`/`hypothesis`. → reject / flag at review.

### 6.2 Completeness (block advance to `in_review`/`decided`)
5. **Fewer than three `alternatives`, or missing `novel_alternative`** (`prd.md` §5 Phase 3). → record stays `extracted`; cannot reach `in_review`.
6. **Missing `validation.test_hypothesis`** (`prd.md` §4 "tests"). → cannot reach `in_review`.
7. **Decision without rationale / without evidence** (violates C2): `decision_status ≠ pending` with empty `decision_rationale`, or `Adopt` without the §4.1 preconditions. → block; this is the "no feature shopping list" guard (`prd.md` §5 Phase 4).

### 6.3 Content (fabrication & efficacy-inflation guards — most serious, `prd.md` §4/§6)
8. **Fabricated evidence or outcome**: any invented interview, user quote, metric, effect size, or **clinical outcome** stored as `supporting_evidence` as if real. → escalate; gravest violation (`prd.md` §4 "Never fabricate …").
9. **Popularity as efficacy**: a download/ranking/award figure used to raise `efficacy_grade`, or editorial recognition ("App of the Day") cited as mechanism evidence (`prd.md` §3; `→ TASK-010`). → reject the grade.
10. **Observation grade laundered into efficacy** (violates C1): `efficacy_grade` set equal to `observation_grade` with no independent `EVD`. → reject.
11. **Contradiction averaged or deleted** (violates C4): `contradictory_evidence` removed or numerically netted against `supporting_evidence` to reach a middle grade. → reject (`prd.md` Prompt 06 "Preserve … disagreements"; `↔ TASK-004` "never average contradictions"). 

### 6.4 Safety / separation of duties
12. **Decision over a failed gate** (violates C3): `decision_status = Adopt`/`Adapt`/`Invent` with any `safety_gate = reject`/`redesign`. → reject (`prd.md` §9/§11 non-compensable gates).
13. **Self-review**: `extracted_by_role` is the sole `reviewer_role`, or a safety-relevant gate signed by the proposing role without the clinical/privacy reviewer (per TASK-003 separation of duties). → reject.

---

## 7. Validation

### 7.1 Entry validation (must pass before `record_status: extracted` is saved)
A record passes entry validation iff:
1. `cap_id` well-formed, unique, immutable.
2. Layer 1 present and observed: `observed_feature`, ≥1 `source_apps`, and (if `provenance: direct`) ≥1 `observation_evidence`, with an `observation_grade`.
3. Layer 2 present: `user_job`, `user_context`, and either `job_evidence` or the literal `hypothesis` label.
4. Layer 3 present: `mechanism`, `mechanism_status`, `efficacy_grade` (possibly `n/a` with an `open_gaps` entry), `transferability`, `confidence`.
5. Layer 4 present: non-empty `downsides`, `ethics_flags` (possibly `none` after review), `accessibility_notes`, `herrays_relevance`.
6. `validation.test_hypothesis` present.
7. All §4.2 cross-field rules satisfied; no §6.1/§6.3 forbidden value present.
8. Every unverifiable field is the literal `unknown`/`hypothesis`, never a guess (C4).

### 7.2 Advance validation (extracted → in_review → decided)
- **→ in_review:** §6.2 satisfied — `alternatives` length ≥ 3, `novel_alternative ≠ none`, `validation.test_hypothesis` present — and `reviewer_roles` includes ≥1 role ≠ `extracted_by_role`.
- **→ decided:** `safety_gate` fully assessed (no `not_yet_assessed`); if any `reject`/`redesign`, `decision_status ∈ {Reject, Redesign-required}` (C3); otherwise `scores` present; `decision_status ≠ pending` with `decision_rationale` and `decision_ref` set; any live `contradictory_evidence` carries its `→ TASK-008` resolution state.

---

## 8. Validated sample record (ILLUSTRATIVE — synthetic; PRD streaks example)

The record below instantiates the schema on the PRD's **own** worked example — the streak counter (`prd.md` §3.5). Its *mechanisms, risks, alternatives and required test are quoted from the PRD*, which presents them as **hypotheses to test, not findings**. All evidence ids are **synthetic** (`EVD-SYNTH-*`, `APP-SYNTH-*`, etc.) and assert nothing about any real app or study; the record is deliberately held at `decision_status: pending` to show the schema refusing to manufacture a decision.

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates schema validity only.
# Mechanisms/risks/alternatives quoted from prd.md §3.5 as HYPOTHESES. No real evidence.
cap_id: CAP-001
record_version: 0.1
record_status: extracted          # five layers filled; not yet reviewed/decided
title: "Consecutive-day streak counter"
related_caps: none

# Layer 1 — Observed feature & source
observed_feature: "A visible counter increments by 1 for each consecutive day the user completes the tracked action, and resets to 0 after a missed day. Prominent on the home surface."
source_apps: [APP-SYNTH-001]       # → TASK-006 (synthetic)
source_journeys: [JRN-SYNTH-005]   # missed-day/recovery journey capture (synthetic)
observation_evidence: [EVD-SYNTH-010]   # our direct walkthrough (synthetic) ↔ TASK-005
observation_grade: B               # single direct observation ceiling (↔ TASK-004)
provenance: direct

# Layer 2 — User job & context
user_job: "Make my repeated effort visible so I feel it is worth continuing."
user_context: "Provisional segment: 'repeated habit abandoner' (prd.md §5 Phase 2); replace with observed segment after TASK-029 synthesis."
job_evidence: hypothesis          # no interview evidence yet → honest label (C2)
job_grade: n/a                    # open until job_evidence exists → open_gaps below

# Layer 3 — Mechanism & evidence
mechanism: "Hypothesized: reinforcement, feedback, and commitment (prd.md §3.5). Visible progress acts as a reward signal and a loss-averse commitment device."
mechanism_status: hypothesized    # the PRD states these are hypothesized, not proven
supporting_evidence: none         # permitted: status=hypothesized + open_gap logged
contradictory_evidence: [EVD-SYNTH-022]   # synthetic review evidence of post-miss abandonment
efficacy_grade: n/a               # NOT copied from observation_grade B (C1); untested
transferability: unknown          # no midlife-women evidence examined yet
confidence: speculative           # matches an untested mechanism (§4.2)

# Layer 4 — Downsides, failure modes & lenses
downsides: "Shame and all-or-nothing behavior after a missed day; the reset can punish a single lapse and drive abandonment rather than recovery (prd.md §3.5, §6 guilt/compulsion risks)."
positive_experience: "Sense of momentum and pride while the streak is intact (unverified)."
ethics_flags:
  - {issue: "Loss-aversion/guilt pressure after a miss may undermine autonomy", severity: high}
accessibility_notes: "Counter must not rely on color alone; animated increments need a reduced-motion fallback and a VoiceOver label stating current count and that a miss does not erase prior effort (→ TASK-022)."
herrays_relevance: "High relevance as a RISK to study: midlife-women audience and zero-guilt brand principle make the punitive-reset failure mode central, not incidental (prd.md executive mandate)."
technical_implications: unknown   # → TASK-037/039 feasibility not yet assessed

# Layer 5 — Alternatives (≥3) + one novel + validation
alternatives:
  - summary: "Flexible weekly consistency (e.g., 4 of 7 days) instead of unbroken daily chain."
    rationale: "Removes the single-miss cliff that drives the shame failure mode."
    serves_same_job: true
    evidence_or_label: hypothesis
  - summary: "Cumulative effort / milestone total that never resets."
    rationale: "Preserves visible effort after a lapse; targets the all-or-nothing downside."
    serves_same_job: true
    evidence_or_label: hypothesis
  - summary: "Narrative progress (a journey that continues) rather than a countable streak."
    rationale: "Reframes effort as ongoing story, reducing numeric loss aversion."
    serves_same_job: true
    evidence_or_label: hypothesis
novel_alternative:
  summary: "Explicitly celebrate RETURNING after a disruption — a 'welcome back' moment that rewards re-engagement more than unbroken perfection."
  rationale: "Inverts the reset from punishment to recovery support."
  why_unconventional: "Rewards the behavior (coming back) that streaks penalize."
  evidence_or_label: invention
validation:
  test_hypothesis: "Do the alternatives improve meaningful repeated action and perceived autonomy, not merely app opens, versus a resetting streak? (prd.md §3.5)"
  smallest_experiment: "Prototype A/B of resetting-streak vs. flexible-weekly on the missed-day/recovery journey; measure return-after-miss and an autonomy item."
  success_criteria: "Higher return-after-miss and non-inferior perceived autonomy for the alternative; no increase in self-reported guilt."
  exp_ref: none                   # not yet registered → TASK-009

# Review, scoring & decision
safety_gate:
  clinical: not_yet_assessed
  privacy: not_yet_assessed
  manipulation: not_yet_assessed   # flagged high-risk by ethics_flags; needs → TASK-033/036
  accessibility: not_yet_assessed
  unsupported_claims: not_yet_assessed
scores: n/a                        # inadmissible until gates assessed (C3)
red_team: n/a
decision_status: pending           # schema refuses to manufacture a decision
decision_rationale: n/a
decision_ref: none
dependencies: "Depends on TASK-029 user-need evidence and a registered recovery-vs-streak EXP."

# Governance & linkage
owner_role: R01                    # Head of Product (Board chair)
extracted_by_role: R07             # UX researcher
reviewer_roles: none               # not yet reviewed
disagreements: none
open_gaps: [GAP-SYNTH-003]         # missing user-need + efficacy evidence (→ TASK-008)
change_log:
  - {version: "0.1", date: "2026-11-22", role: "R07", change: "Initial synthetic extraction of the streak capability for schema validation."}
```

**Validation trace (why this record passes §7.1 entry validation and correctly stops short of a decision):**
1. `cap_id` = `CAP-001`, well-formed and unique. ✔
2. Layer 1 observed: `source_apps` + `observation_evidence` present, `provenance: direct`, `observation_grade: B`. ✔
3. Layer 2 present: `user_job` + `user_context`; `job_evidence: hypothesis` honestly declared (no interview yet), so `job_grade: n/a` with an `open_gaps` entry. ✔ (C2/C4)
4. Layer 3 present: `mechanism` named; `mechanism_status: hypothesized`; `efficacy_grade: n/a` kept **independent** of the `B` observation grade (C1); `supporting_evidence: none` is legal because status is `hypothesized` *and* `GAP-SYNTH-003` is logged; `contradictory_evidence` preserved, not averaged (C4). ✔
5. Layer 4 present: non-empty `downsides` (the shame/all-or-nothing failure mode), a high-severity `ethics_flags` entry, `accessibility_notes` with a reduced-motion/VoiceOver path, and an honest `herrays_relevance`. ✔
6. Layer 5: `alternatives` has three entries (flexible weekly / cumulative / narrative) each tied to a downside, exactly one `novel_alternative` (celebrate returning) labelled `invention`, and `validation.test_hypothesis` quoting the PRD's required test. ✔ (This also satisfies §6.2, so the record may advance to `in_review`.)
7. No §6 forbidden value: no fabricated evidence, no popularity-as-efficacy, no efficacy laundered from observation, no deleted contradiction. ✔
8. `decision_status: pending` with `scores: n/a` and `safety_gate: not_yet_assessed` — the schema correctly **refuses** to produce a decision before gates and scoring (C2/C3). To reach `decided`, the gates must be assessed (`→ TASK-033`), scored (`→ TASK-034`), and a `DEC` record attached (`→ TASK-009`). ✔

---

## 9. Governance, dependencies, and change control

- **Custodian:** The Head of Product (Capability Extraction Board chair) owns the capability corpus; the Program Director co-owns the schema shape and versions it in the change log below. Per-record ownership sits with `owner_role` (a role, per TASK-003), never a named individual.
- **Where it is applied:** the Capability Mechanism Library (`CAP-001`, `prd.md` §4), produced in WS02 Phase 3 (`prd.md` §5) and consumed by the Capability Review Board (Phase 4), Opportunity Synthesis (`→ TASK-041/042`, which reads `user_job`/`mechanism`/`decision_status`), and the concept studios (`prd.md` §8, which receive capability *decisions* as inputs, not feature lists).
- **Dependencies:**
  - `↔ TASK-004` Evidence grading rules — supplies the A–D grades, epistemic labels (`mechanism_status`), and confidence words this record *stores*; the record keeps observation and efficacy grades separate per its "never read usability as health impact" rule.
  - `↔ TASK-005` Source & evidence record schema — every `*_evidence` field is a foreign key to `EVD` records; `source_apps` → `APP` (`→ TASK-006`), `source_journeys` → `JRN`.
  - `→ TASK-031` Five-layer extraction worksheet — the reusable instrument that *populates* Layers 1–5 of this record (the streak example is shared).
  - `→ TASK-032` 90-minute workshop script — the facilitated process that produces an `extracted` record.
  - `→ TASK-033` Safety-gate checklist — defines the `safety_gate` logic (pass/redesign/investigate/reject).
  - `→ TASK-034` Evaluation scorecard — defines the weighted `scores`.
  - `→ TASK-035` Adopt/Adapt/Invent/Reject/Defer decision form — enforces the mandatory fields behind `decision_status`.
  - `→ TASK-036` Red-team challenge protocol — produces the `red_team` block.
  - `→ TASK-008` Research gap & contradiction log — consumes `open_gaps`, `contradictory_evidence`, and preserved `disagreements`.
  - `→ TASK-009` Decision & experiment registers — the authoritative home of `decision_ref` (`DEC`) and `validation.exp_ref` (`EXP`).
  - `→ TASK-029` User-needs synthesis — supplies `NEED`/segment evidence for `user_job`/`user_context`.
  - `→ TASK-037 / TASK-039` Build-buy matrix & iOS integration inventory — resolve `technical_implications`.
  - `← TASK-002 / TASK-003` Workstream registry & responsibility matrix — supply `owner_role`/`extracted_by_role`/`reviewer_roles` and separation-of-duties.
- **Open unknowns (honestly recorded, not defects):**
  - Whether `efficacy_grade` should itself be split into separate efficacy/relevance axes inline, or carried as a map mirroring `↔ TASK-004 §4` — proposed default is the single efficacy axis plus a `transferability` field, to be confirmed with the behavioral scientist.
  - The threshold that makes a record "high-priority" and therefore mandatorily red-teamed (`→ TASK-036`) — proposed default: any record reaching `scores` with a top-quartile user-value score or any `ethics_flags` of `severity: high`; to be confirmed by the Board.
  - Whether multi-app instances of one capability should roll up via `related_caps` or a dedicated `pattern` record (`PAT-001`, `prd.md` §4) — proposed default: cross-app *patterns* live in the Pattern Library and link back here, so `CAP` stays one-mechanism-one-record.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-22 | Initial schema: `CAP-NNN` identity & lifecycle, seven field groups covering the five extraction layers (observed feature → job → mechanism/evidence → downsides → alternatives) plus review/scoring/decision and governance, the five-verdict decision vocabulary, cross-field consistency rules, forbidden-value/validation rules, process pointers to TASK-031–036, and one validated synthetic sample record built on the PRD streaks example. | Head of Product / Program Director |
