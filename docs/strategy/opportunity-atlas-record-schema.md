# HerRays Opportunity Atlas Record Schema

**Deliverable:** TASK-041 — Create the Opportunity Atlas record schema
**Workstream:** Opportunity Synthesis (WS06)
**Version:** 0.1 · **Status:** Proposed, not yet populated
**Owner (accountable role):** R01 Head of Product / Product visionary (Opportunity Synthesis owner) · schema co-custodian with Program Director
**Reviewers:** R02 Behavioral scientist · R03 Senior UX/product designer (service design lens) · R07 UX researcher · R09 Product analyst/growth · R14 Clinical reviewer · R15 Privacy/regulatory reviewer
**Source basis:** `prd.md` §4 (Opportunity Atlas `OPP-001`: "Problem, evidence, gap, HMW, alternatives, feasibility"; evidence grades; source handling), §7 "Opportunity synthesis: never jump directly from evidence to concepts" (root problems, ≥12 opportunities, 4–6 territories, the per-opportunity field list, the HMW example, clinical/non-clinical mix, gate before studios), §5 Phase 4 (mandatory gates first), §6 (behavioral mechanisms, guilt/compulsion/burden risks), §8 (what studios receive), §11 (quality gates), §13 Prompt 08 (Opportunity Discovery field list and "Stop for approval before commissioning studios"), §14 (handoff templates / acceptance criteria)

---

## 0. How to read this document

This document defines the **record format for a single opportunity** — the `OPP` record — the atomic unit of the HerRays **Opportunity Atlas** (`prd.md` §4, `OPP-001`). An opportunity names a **root user problem worth solving** and frames it as an open **How Might We** question, carrying the evidence, the current-solution gap, the desired outcome, the relevant mechanism(s), the constraints, the feasibility read and the validation path — *without* naming a solution, feature or screen.

It is a **governance / data-contract artifact**. It defines **fields, identifiers, allowed values, and validation rules** for an opportunity record. It contains **no real research finding**. The single worked record in §8 is built on the PRD's *own* illustrative HMW example — "how might we reassure users that their efforts matter without forcing them to become data analysts?" (`prd.md` §7) — scaffolded with clearly-marked synthetic evidence ids, and exists only to prove the schema validates.

> **No-fabrication statement.** This schema contains no real user research, interview, metric, clinical outcome, competitor finding, or test result. It cites no real `EVD`, `NEED`, or `CAP` record. The one worked record (§8) is labelled **ILLUSTRATIVE (synthetic)** end-to-end on fictitious `*-SYNTH-*` ids; its problem and desired outcome are paraphrased from the PRD's own example, which the PRD presents as a *framing to explore*, not a validated finding — and the record preserves it as such (`evidence_status: insufficient`, `atlas_status: proposed`). The schema itself is built to make fabrication *detectable*: no opportunity may enter the Atlas without at least one resolvable upstream evidence link (`NEED`/`CAP`/`EVD`/`CON`, `↔ TASK-005/029/030/008`) **or** an explicit `hypothesis` label; the forbidden-value rules (§6) reject an opportunity that smuggles in a solution, a competitor gap asserted without a source, popularity dressed up as a need, and any opportunity that skips the clinical/privacy/accessibility consideration the PRD requires before studios begin (`prd.md` §5 Phase 4 / §7 / §9 / §11).

**Scope boundary (what this task is and is not).**
- **TASK-041 (this document) = the *record*: how one opportunity is stored, identified, evidenced, framed as an HMW, and made reviewable.** It owns `opp_id`, `root_user_need`, the evidence links and `evidence_status`, `current_solution_gap`, `desired_outcome`, `mechanisms`, `hmw_statement`, `constraints`, `feasibility`, the `test`/validation block, and the `clinical_integration` flag — the exact fields named in the acceptance criteria.
- **TASK-042 (opportunity prioritization rubric) = the *scoring and grouping* that acts on a set of records.** It defines the weighted evaluation (user importance, evidence, differentiation, feasibility, uncertainty), the **≥12 opportunities** and **4–6 territories** requirement, and the territory map (`prd.md` §7). This schema defines the single-record *destination fields* a rubric reads and writes (`priority_scores`, `territory_ref`); it deliberately does not define the weights or the portfolio counts. Flagged `→ TASK-042`.
- **TASK-043+ (concept studio briefs and downstream) = *consumers* of an approved Atlas.** Studios receive the versioned Opportunity Atlas as an input (`prd.md` §8) and must not see it until the Atlas gate passes (`prd.md` §7 "Gate approval before concept studios begin"). This schema holds the `atlas_status` and gate pointer that enforce that stop; it does not define the studio process (`→ TASK-043/044`).
- **An `OPP` record is not a concept.** It names a *problem* and an *open question*, never a feature, UI, or product. This is the PRD's central discipline — "never jump directly from evidence to concepts" (`prd.md` §7). §6 makes solutioning a forbidden value.
- **An `OPP` record is not an `EVD`/`NEED`/`CAP` record.** Evidence lives upstream (`↔ TASK-005/029/030`) and is *cited* by foreign key. One opportunity ↔ many evidence sources; one source ↔ many opportunities. §3.8 defines the links.

---

## 1. Purpose and non-negotiables

`prd.md` §4 mandates an Opportunity Atlas (`OPP-001`) whose core fields are "Problem, evidence, gap, HMW, alternatives, feasibility." `prd.md` §7 expands this: after evidence review, "identify root user problems, contradictions, unmet needs, underserved contexts and jobs," produce **at least 12 opportunity statements** grouped into **4–6 distinct territories**, where each opportunity includes "problem/context, evidence/confidence, competitor gap, desired outcome, relevant mechanism, constraints, How Might We statement and validation path," spanning opportunities that "need clinical integration and ones that do not." Prompt 08 restates the same list and adds the hard stop: "Produce an Opportunity Atlas, not concepts or wireframes. Stop for approval before commissioning studios." This schema operationalizes that mandate into one enforceable record.

The record exists to do six jobs:

1. **Keep the Lab in problem-space, never solution-space.** An `OPP` record states a *problem worth solving* and an *open question* (`hmw_statement`), not an answer. The HMW must be genuinely open — framed so that several different concepts could address it — and must name no feature, screen, mechanism-as-solution or product (the PRD's example reframes "build a better progress dashboard" into "how might we reassure users that their efforts matter without forcing them to become data analysts?", `prd.md` §7/§13). Solutioning is a structural forbidden value (§6). This is the "never jump directly from evidence to concepts" discipline made enforceable.
2. **Anchor every opportunity to real, graded evidence.** Each record links upstream to the `NEED`/`CAP`/`EVD`/`CON` records that establish the problem is real (`↔ TASK-005/008/029/030`), carries an `evidence_status` and a confidence word, and may **not** enter the Atlas on a hunch unless explicitly labelled `hypothesis` with a logged gap (`→ TASK-008`). An opportunity invented without any root user need is a §6 reject.
3. **Separate the problem from the current-solution gap.** `root_user_need` (what the user is trying to accomplish and why it is hard) is distinct from `current_solution_gap` (why existing apps — HerRays benchmarks and the market — fail to serve it). The gap must cite observation/teardown/review evidence (`↔ TASK-012/013/030`), never assert "no app does this" without a source, and never convert competitor popularity into a need (§6).
4. **Carry contradictions and underserved contexts, not a tidy average.** `prd.md` §7 explicitly asks for "contradictions … underserved contexts." Contradictory evidence is preserved via a `CON` link (`→ TASK-008`), never averaged away, and `underserved_context` is a first-class field so opportunities are not collapsed to a mythical "average user."
5. **Gate safety and name constraints before studios see anything.** Every opportunity declares `constraints` and a `clinical_integration` flag, and the Atlas as a whole passes a mandatory clinical/privacy/accessibility/ethics gate (`prd.md` §5 Phase 4 applied-first discipline; §9/§11 non-compensable gates) before `atlas_status` may reach `approved` and before any studio brief is issued (`prd.md` §7/§8; `→ TASK-033/040/043`). The PRD requires *both* clinical-integration and non-clinical opportunities, so the flag is mandatory and auditable, never omitted.
6. **End in a testable question, not a claim.** Every record carries a `test` block — the validation path that would confirm the opportunity is worth pursuing (`prd.md` §4 "tests", §7 "validation path"), linking to an `EXP` when registered (`→ TASK-009`). "Produce an Opportunity Atlas, not concepts" (`prd.md` §13 Prompt 08): the record refuses to present a desired outcome as an achieved one.

**Four non-negotiable rules, enforced throughout:**

- **O1 — An opportunity is a problem + an open question, never a solution.** `hmw_statement` must be an open "How might we …" question naming no feature, UI element, mechanism-as-solution, or product name; `root_user_need` and `desired_outcome` describe the user's world and the change sought, not an implementation. Any solutioned field is rejected at entry (§6.1). (`prd.md` §7 "never jump directly from evidence to concepts").
- **O2 — No opportunity enters the Atlas without a traceable evidentiary basis.** At least one resolvable upstream link (`NEED`/`CAP`/`EVD`/`CON`) **or** an explicit `hypothesis` label with a logged `open_gaps` entry. `current_solution_gap` claims require a source (teardown/comparison/review, `↔ TASK-012/013/030`). Missing basis makes the record *incomplete* — it may sit at `proposed` but cannot reach `approved` (§7.2). This is the structural anti-fabrication guard.
- **O3 — Evidence strength, user importance, and feasibility are graded separately and never averaged into one number by this record.** An opportunity may rest on grade-`B` user evidence yet have `low` feasibility and `moderate` differentiation; the record stores each dimension separately and never collapses them. A high confidence word may not sit over `insufficient` evidence, and a usability-strong signal is never read as a health-impact signal (`prd.md` §4 "Do not interpret a high grade on usability as a high grade on health impact"). The weighted roll-up is the rubric's job (`→ TASK-042`).
- **O4 — Unknown is written as `unknown`, contradiction is preserved, the clinical flag is never omitted, and nothing is hard-deleted.** Any unverified field is the literal token `unknown`, never a plausible guess (`↔ TASK-005 S3`). Contradictory evidence and specialist disagreement are preserved, not reconciled by averaging (`prd.md` §7; `→ TASK-008/023`). `clinical_integration` is mandatory on every record. Records are versioned and superseded, never hard-deleted (§2); rejected/merged opportunities are retained for the innovation backlog (`prd.md` §11).

---

## 2. Record identity and lifecycle

### 2.1 The `OPP` identifier

| Property | Rule |
|---|---|
| **Format** | `OPP-NNN` — `OPP-` prefix + zero-padded integer, issued sequentially (`OPP-001`, `OPP-002`, …), matching the `prd.md` §4 convention (`OPP-001`). |
| **Immutable** | An `opp_id` is permanent — never reused, renumbered, or reassigned to a different opportunity. |
| **One opportunity = one id** | A record is *one root user problem framed as one open question*. The same underlying need expressed in two different contexts, or two genuinely different questions over one need, are **separate** `OPP` records cross-linked via `related_opps`. Conversely, two near-duplicate statements are **merged** (one retired to the other via `superseded_by`, never silently deleted). |
| **Territory is a grouping, not an id** | Territories (`prd.md` §7, 4–6 of them) are assigned by the prioritization rubric (`→ TASK-042`) and stored in `territory_ref`; they do **not** change the `opp_id`. Re-grouping never renumbers opportunities. |

**Rule of thumb:** *one root problem + one open question → one id. A new problem or a materially different question → a new id.* Target corpus: **≥12 opportunities** grouped into **4–6 territories** (`prd.md` §7); the count/grouping requirement is enforced by the rubric (`→ TASK-042`), not by this single-record schema.

### 2.2 Versioning within a record

Each record carries `record_version` (starts `0.1`). Any substantive change — added evidence, a reframed HMW, a changed feasibility read, a gate result, a territory re-assignment, a status change — increments it and appends a one-line `change_log` entry (version/date/role/change). Evidence is *added*, never overwritten; a withdrawn upstream link is struck through in the log, not erased.

### 2.3 Record status (lifecycle)

| `atlas_status` | Meaning | Who may set |
|---|---|---|
| `draft` | Root problem sketched from evidence review; HMW/fields not yet complete. Not reviewable. | Synthesis facilitator (R01/R07) |
| `proposed` | All mandatory fields populated and entry-valid (§7.1); submitted to the Opportunity Synthesis review. | R01 (Opportunity Synthesis owner) |
| `reconciled` | Cross-specialist reconciliation done (`→ TASK-023`): contradictions and disagreements attached and preserved, not averaged. | R01 with R02/R03/R07 |
| `gated` | Mandatory clinical/privacy/accessibility/ethics gate assessed for this opportunity (`→ TASK-033/040`); any `reject`/`redesign` recorded. | R14/R15 (+R13) as applicable |
| `prioritized` | Weighted scoring and territory assignment applied by the rubric (`→ TASK-042`); `priority_scores` + `territory_ref` set. | R01 with R09 |
| `approved` | Included in the versioned Atlas that passes the §7 gate; **eligible to be released to concept studios** (`prd.md` §7/§8). Still revisable with cause. | Program Director (Atlas gate) |
| `deferred` | Held for a later cycle; `dependencies`/`open_gaps` name what must resolve first. Retained. | R01 |
| `rejected` | Not carried forward; rationale required; preserved in the innovation backlog (`prd.md` §11). | R01 with reviewer |
| `superseded` | Merged into / replaced by another record; retained for audit, linked via `superseded_by`. Never hard-deleted. | R01 |

**Gate rule (non-negotiable):** no opportunity may reach `approved` — and the Atlas may not be released to studios — until the mandatory gate is assessed with no open `reject`/`redesign` (`prd.md` §5 Phase 4 applied-first; §7 "Gate approval before concept studios begin"; §9/§11). Status is monotonic except for `approved → reconciled` (a reopened opportunity) and any `→ superseded`. A record is **never hard-deleted** (O4).

---

## 3. Field catalogue

The record has seven field groups. **M** = mandatory, **C** = conditionally mandatory (rule given), **O** = optional. Every field has an allowed-value rule; `unknown` is permitted only where O4/S3 allows and is shown explicitly. Fields map 1:1 onto the acceptance-criteria list; the mapping is made explicit in §3.8.

### 3.1 Identity & lifecycle

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `opp_id` | M | `OPP-NNN` | §2.1; unique, immutable. |
| `record_version` | M | `X.Y` | §2.2; starts `0.1`. |
| `atlas_status` | M | `draft \| proposed \| reconciled \| gated \| prioritized \| approved \| deferred \| rejected \| superseded` | §2.3. |
| `title` | M | string | Short neutral label naming the *problem*, not a solution ("Effort feels unrewarded without data work"). Not a concept, not a feature. |
| `related_opps` | O | list of `OPP-NNN` \| `none` | Cross-links to split/merged/adjacent opportunities (§2.1). |
| `territory_ref` | C | territory id (e.g., `TER-N`) \| `unassigned` | The 4–6-way strategic grouping assigned by the rubric (`→ TASK-042`, `prd.md` §7). `unassigned` until `prioritized`. |

### 3.2 Problem — root user need & context (the problem worth solving)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `root_user_need` | M | string (problem/JTBD form) | The **root** user problem or unmet need — what the user is trying to accomplish and why it is hard — in neutral, non-solutioned language (`prd.md` §7 "root user problems … unmet needs … jobs"). Links to `NEED` evidence via `need_refs`. Not a feature request; not "users want <feature>" (§6). |
| `user_context` | M | string | The situation/segment in which the need arises (`prd.md` §5 Phase 2 provisional segments: motivated beginner, repeated abandoner, unpredictable schedule, low-energy day, tracking-averse, experienced optimizer). Marked provisional until replaced by observed segments (`→ TASK-029`). |
| `underserved_context` | C | string \| `none` | The specific underserved context/condition the opportunity targets (`prd.md` §7 "underserved contexts"); keeps the opportunity from collapsing to a mythical average user. `none` only after explicit consideration. |
| `population_relevance` | M | string | Why and for whom in the **midlife-women** audience this matters, and for whom it may not (`prd.md` executive mandate; §6 transferability). Must note low/negative relevance honestly — not every observed problem is HerRays-relevant. |

### 3.3 Evidence & confidence (what establishes the problem is real)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `need_refs` | C | list of `NEED-NNN` \| `hypothesis` | User-needs evidence that this problem is real (`→ TASK-029`). If none yet, the literal `hypothesis` label is required and an `open_gaps` entry logged — the opportunity is then an explicit hypothesis, not a finding (O2/O4). |
| `supporting_evidence` | C | list of `EVD-NNN` \| `none` | Additional scientific / user / observational evidence for the problem and its importance (`↔ TASK-005`; `prd.md` §6 populations/interventions/outcomes). `none` permitted only if `need_refs: hypothesis` **and** a gap is logged. |
| `mechanism_refs` | C | list of `CAP-NNN` \| `none` | Capability-library mechanism records relevant to this need (`→ TASK-030`); the opportunity *cites* mechanisms, it does not adopt a solution. |
| `contradictions` | C | list of `CON-NNN` \| `none` | Contradiction-log links where evidence conflicts (`prd.md` §7 "contradictions"; `→ TASK-008`). **Never averaged or deleted** (O4); a live contradiction is preserved and surfaced at reconciliation. |
| `evidence_grade` | M | `A\|B\|C\|D` \| `n/a` | Grade of the *problem's evidentiary basis* under `↔ TASK-004`, graded for relevance to the need (not for any solution's efficacy) (O3). `n/a` only while `need_refs: hypothesis` and flagged open. |
| `evidence_status` | M | `established \| indicative \| insufficient \| contested` | Summary epistemic state of the problem evidence; `contested` requires a `contradictions` link; `insufficient` requires an `open_gaps` entry. |
| `confidence` | M | `established \| likely \| indicative \| speculative` | Controlled confidence word (`↔ TASK-004 §5.2`); must match the lowest load-bearing grade — reviewers reject "established" over `insufficient`/`n/a` evidence (O3). |

### 3.4 Current-solution gap (why today's apps fail this need)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `current_solution_gap` | M | string | How existing solutions — HerRays benchmarks and the wider market — **fail** to serve the need (`prd.md` §4 "gap"; §7 "competitor gap"; §13 "existing-solution shortfall"). A problem-space statement about the gap, not a proposed fix. |
| `gap_evidence` | C | list of `EVD-NNN` / `JRN-NNN` / comparison-matrix refs \| `hypothesis` | Teardown/journey/comparison evidence substantiating the gap (`↔ TASK-012/013/016/030`). "No app does this" asserted without a source is a §6 reject; the literal `hypothesis` label is required where the gap is believed but not yet observed. |
| `competitor_examples` | O | list of `APP-NNN` \| `none` | Benchmark apps whose handling of the need was examined (`→ TASK-006`). Popularity/ranking of these apps may **never** be used to assert the *need* exists (§6). |
| `alternatives_considered` | C | list of `{summary, why_insufficient}` \| `none` | Existing/adjacent ways the need is partially met today and why each falls short (`prd.md` §4 Atlas "alternatives"). Problem-space only — these are current coping strategies, **not** proposed HerRays solutions (§6). |

### 3.5 Desired outcome & mechanisms (the change sought, and what might move it)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `desired_outcome` | M | string | The change in the user's life/experience the opportunity seeks (`prd.md` §4/§7 "desired outcome") — stated as an *outcome for the user*, not a product deliverable. Must be observable/testable in principle (feeds `test`). |
| `outcome_type` | M | `experience \| adherence \| automaticity \| clinical_relevant \| access` | Which outcome class is targeted, keeping engagement separate from adherence/automaticity/clinical outcomes (`prd.md` §6 "Separate engagement, adherence, automaticity and clinical outcomes"; §4). Prevents engagement being sold as health impact. |
| `mechanisms` | M | string / list | The behavioral mechanism(s) plausibly relevant to the desired outcome, named in COM-B/BCTTv1/SDT/Fogg/habit terms (`prd.md` §6/§7 "relevant mechanism"; e.g., "competence support, reduced cognitive load, autonomy-supportive feedback"). A *relevant mechanism to explore*, not a committed feature (O1). |
| `mechanism_status` | M | `evidenced \| hypothesized \| contested \| invented` | Epistemic status of the cited mechanism link (`↔ TASK-004 §2`); `hypothesized` is the honest default for an untested mechanism. An `evidenced` status requires a resolvable `EVD`/`CAP` basis. |

### 3.6 How Might We, constraints & feasibility (the open question and its envelope)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `hmw_statement` | M | string, open-question form | The opportunity framed as an open **"How might we …?"** question (`prd.md` §7 example). Must be solution-agnostic: name the user change sought, name **no** feature/screen/mechanism-as-solution/product (O1, §6.1). Several distinct concepts must be able to answer it. |
| `constraints` | M | string / list | Boundaries any solution must respect — clinical/care boundaries, privacy/data-minimization, accessibility, autonomy/anti-manipulation, autonomy of low-energy/unpredictable-schedule users, platform/economic limits (`prd.md` §7 "constraints"; §5 Phase 4; §6; §9). Non-empty. |
| `clinical_integration` | M | `required \| optional \| not_applicable \| unknown` | Whether pursuing this opportunity would need clinical integration (`prd.md` §7 "opportunities that need clinical integration and ones that do not"). **Mandatory on every record** so the Atlas demonstrably spans both kinds (O4). `required` forces an R14 clinical-gate assessment before `approved`. |
| `feasibility` | M | `{overall: high\|moderate\|low\|unknown, notes, build_buy_hint}` | Coarse feasibility read (`prd.md` §4 "feasibility"): technical (iOS/HealthKit/notifications/on-device, `→ TASK-039`), data/privacy, clinical, and economic. `build_buy_hint` is a *hint* for later (`→ TASK-037`), not a decision. `unknown` until assessed; graded **separately** from evidence/importance (O3). |

### 3.7 Validation, prioritization & governance

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `test` | M | `{validation_path, smallest_test, success_signal, exp_ref}` | The validation path that would confirm the opportunity is worth pursuing (`prd.md` §4 "tests"; §7 "validation path"). `validation_path` + `smallest_test` mandatory; `success_signal` is the honest signal sought, not a predicted result; `exp_ref` links to an `EXP` when registered (`→ TASK-009`). The schema refuses to present `desired_outcome` as achieved. |
| `priority_scores` | C | map of the rubric dimensions → score \| `n/a` | User importance / evidence / differentiation / feasibility / uncertainty, computed by the prioritization rubric (`→ TASK-042`, `prd.md` §7). `n/a` until `prioritized`; this record stores but does not compute them (O3). |
| `safety_gate` | C | map `{clinical, privacy, accessibility, manipulation, unsupported_claims} → pass \| redesign \| investigate \| reject \| not_yet_assessed` | The mandatory non-compensable gates applied to the opportunity (`prd.md` §5 Phase 4; `→ TASK-033/040`). Any `reject`/`redesign` blocks `approved`. Must leave `not_yet_assessed` before the Atlas gate. |
| `disagreements` | O | list of `{role, position, evidence_ref}` \| `none` | Preserved specialist disagreement from reconciliation (`prd.md` §7; `→ TASK-023`). Never merged (O4). |
| `open_gaps` | C | list of `GAP-NNN` \| `none` | Research gaps this opportunity raised (`→ TASK-008`); mandatory non-empty whenever `need_refs: hypothesis`, `evidence_status: insufficient`, or any grade is `n/a` for missing evidence. |

### 3.8 Governance & linkage

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `owner_role` | M | role id (`R01`–`R15`, per TASK-003) | Accountable role for this record (default `R01` Head of Product as Opportunity Synthesis owner, per TASK-003 §… — R01 owns the Opportunity Atlas). A **role**, not a named person. |
| `authored_by_role` | M | role id | Who drafted the opportunity (for separation-of-duties vs. gate/reviewer). |
| `reviewer_roles` | C | list of role ids \| `none` | Specialists who reconciled this opportunity before approval (`prd.md` §7; typically R02/R03/R07/R09, plus R14/R15 where flags apply). Disagreements preserved, not merged (O4). |
| `gate_ref` | C | gate/approval id \| `none` | Foreign key to the Atlas §7 gate record that authorized `approved` (`→ TASK-033/040`; Program Director). Required once `atlas_status: approved`. |
| `change_log` | M | list of `{version, date, role, change}` | Append-only (§2.2). |

**Acceptance-criteria field mapping (proof of coverage).**

| AC-named field | Schema field(s) |
|---|---|
| OPP ID | `opp_id` (§3.1) |
| root user need | `root_user_need` + `user_context`/`underserved_context`/`population_relevance` (§3.2) |
| evidence | `need_refs` + `supporting_evidence` + `mechanism_refs` + `contradictions` + `evidence_grade`/`evidence_status`/`confidence` (§3.3) |
| current-solution gap | `current_solution_gap` + `gap_evidence` + `competitor_examples` + `alternatives_considered` (§3.4) |
| desired outcome | `desired_outcome` + `outcome_type` (§3.5) |
| mechanisms | `mechanisms` + `mechanism_status` (§3.5) |
| HMW statement | `hmw_statement` (§3.6) |
| feasibility | `feasibility` + `constraints` + `clinical_integration` (§3.6) |
| test | `test` (validation path + smallest test + success signal) (§3.7) |

---

## 4. Controlled vocabularies & cross-field rules

### 4.1 `atlas_status` — lifecycle preconditions (`prd.md` §7)

| Value | Precondition to enter |
|---|---|
| `proposed` | §7.1 entry validation passes: all §3 mandatory fields present; HMW is open and solution-free (O1); evidence basis present or `hypothesis`+gap. |
| `reconciled` | Contradictions/disagreements attached and preserved (`→ TASK-008/023`), none averaged. |
| `gated` | `safety_gate` assessed on every dimension (no `not_yet_assessed`); any `clinical_integration: required` carries an R14 verdict. |
| `prioritized` | `priority_scores` set by the rubric and `territory_ref` assigned (`→ TASK-042`). |
| `approved` | `gated` with **no** `reject`/`redesign`; `gate_ref` set; part of the versioned Atlas passing the §7 gate. **Only `approved` opportunities are released to studios** (`prd.md` §7/§8). |
| `deferred` / `rejected` | Rationale + `dependencies`/`open_gaps` (deferred) or preserved innovation-backlog entry (rejected, `prd.md` §11). |
| `superseded` | `superseded_by` set; retained, never hard-deleted (O4). |

### 4.2 Cross-field consistency rules (enforced at validation, §7)

- **Open-question guard (O1):** `hmw_statement` must begin with an interrogative "How might we" frame and must contain **no** feature noun, UI element, named product, or mechanism-as-mandate; a validator rejects a HMW that encodes a solution ("how might we add a dashboard …"). `root_user_need`, `desired_outcome`, and `current_solution_gap` are likewise solution-free.
- **Evidence floor (O2):** `need_refs = hypothesis` ⇒ `evidence_grade ∈ {C, D, n/a}`, `evidence_status ∈ {insufficient, contested}`, `confidence ∈ {indicative, speculative}`, and an `open_gaps` entry exists. An opportunity called `established` with no resolvable `NEED`/`EVD` is a §6 reject.
- **Gap-source rule:** a non-empty `current_solution_gap` requires `gap_evidence` that is either resolvable refs **or** the literal `hypothesis` label; "no app does this" with empty `gap_evidence` is a §6 reject.
- **Popularity ≠ need:** download/ranking/award figures for `competitor_examples` (`evidence_type = estimated`/editorial, `↔ TASK-005/010`) may inform `feasibility`/differentiation context only and may **never** appear as `supporting_evidence` for the *need* or raise `evidence_grade` (`prd.md` §3; §6).
- **Outcome honesty (O3):** `outcome_type = clinical_relevant` ⇒ `clinical_integration ∈ {required, optional}` and an R14 reviewer is listed; engagement-style signals may not be recorded under a `clinical_relevant` outcome.
- **Mechanism honesty:** `mechanism_status = hypothesized`/`invented` ⇒ the mechanism is presented as *to explore*, `confidence ∈ {indicative, speculative}`, and it does not raise `evidence_grade`.
- **Contradiction preservation (O4):** `contradictions ≠ none` ⇒ a `CON` record exists (`→ TASK-008`) and `atlas_status` may not reach `approved` without that contradiction's resolution/held state attached; contradictions are never numerically netted.
- **Gate blocks approval:** any `safety_gate` dimension = `reject`/`redesign` ⇒ `atlas_status` may not be `approved`; `priority_scores` from the rubric do **not** override a gate (non-compensable, `prd.md` §9/§11).
- **Clinical flag completeness (O4):** `clinical_integration` is never empty; `unknown` is permitted only transiently with an `open_gaps` entry and must be resolved before `gated`.
- **Separate grades (O3):** `evidence_grade`, `feasibility.overall`, and any `priority_scores` dimension are independent; a validator rejects a record where feasibility or importance was copied from the evidence grade without its own basis.

---

## 5. How a record is produced (process pointers, not re-defined here)

An `OPP` record is produced by the **Opportunity Synthesis** step (`prd.md` §7, Prompt 08), which reconciles market, UX, science, primary-user and technical evidence into root problems. The flow this schema serves:

1. **Evidence reconciliation** across workstreams → `root_user_need`, `current_solution_gap`, `mechanisms`, with upstream links to `NEED`/`CAP`/`EVD`/`CON` (`↔ TASK-005/008/029/030`).
2. **Cross-specialist reconciliation** (`→ TASK-023`) → `contradictions`, `disagreements` preserved, not averaged → `reconciled`.
3. **Mandatory safety/clinical/privacy/accessibility gate** (`→ TASK-033/040`) → `safety_gate`, `clinical_integration` confirmed → `gated`. Non-compensable.
4. **Weighted prioritization and territory grouping** (`→ TASK-042`, the ≥12-opportunity / 4–6-territory requirement) → `priority_scores`, `territory_ref` → `prioritized`.
5. **Atlas gate approval** (Program Director, `prd.md` §7) → `gate_ref` → `approved`; **then and only then** the versioned Atlas is released to the six concept studios (`prd.md` §8; `→ TASK-043`).

This schema defines the **fields those steps read and write**; it deliberately does not re-specify the rubric weights (`→ TASK-042`), the gate logic (`→ TASK-033/040`), the reconciliation format (`→ TASK-023`), or the studio briefs (`→ TASK-043`).

---

## 6. Forbidden values & validation failures

These make a record **invalid or incomplete** (rejected at entry / blocked from advancing), not merely low-confidence. They are the structural anti-fabrication and "never-jump-to-concepts" guards and map to `prd.md` §4/§6/§7 and `↔ TASK-004 §6`.

### 6.1 Structural (reject at entry)
1. **Solutioned opportunity** (violates O1): `hmw_statement`, `root_user_need`, `desired_outcome`, or `current_solution_gap` naming a feature, UI element, product, or mechanism-as-mandate (e.g., "how might we add a streak/dashboard/widget"). An opportunity that prescribes a solution is a concept, not an opportunity. → reject (`prd.md` §7 "never jump directly from evidence to concepts").
2. **No root user need, or need stated as a feature request** (violates O2): empty `root_user_need`, or a need phrased as "users want <feature>" rather than the underlying problem. → reject.
3. **No evidentiary basis and no honest label** (violates O2): `need_refs` empty and not `hypothesis`, or `hypothesis` without an `open_gaps` entry. → reject.
4. **Empty `constraints` or missing `clinical_integration`** (violates O4; `prd.md` §7/§5 Phase 4). Every opportunity has boundaries and a clinical disposition. → reject.
5. **Guessed value where unverifiable** (violates O4): any field holding a plausible-but-unconfirmed value instead of `unknown`/`hypothesis`. → reject / flag at review.

### 6.2 Completeness (block advance to `approved`)
6. **Missing validation path** (`prd.md` §4 "tests"; §7 "validation path"): empty `test.validation_path` or `test.smallest_test`. → cannot reach `approved`.
7. **Gate not fully assessed**: any `safety_gate` dimension `not_yet_assessed`, or `clinical_integration: required` without an R14 verdict. → cannot reach `gated`/`approved`.
8. **Approved without the §4.1 preconditions**: `atlas_status: approved` without `gate_ref`, or with any gate `reject`/`redesign`. → block (`prd.md` §7/§9/§11). This is the "stop for approval before studios" guard (`prd.md` §13 Prompt 08).

### 6.3 Content (fabrication & inflation guards — most serious, `prd.md` §4/§6/§7)
9. **Fabricated evidence or outcome**: any invented interview, user quote, metric, effect size, competitor datum, or **clinical outcome** stored as evidence as if real. → escalate; gravest violation (`prd.md` §4 "Never fabricate …").
10. **Popularity/awards as need or evidence**: a download/ranking/editorial figure used to assert the need exists or to raise `evidence_grade` (`prd.md` §3; `→ TASK-010`). → reject the basis.
11. **Unsourced competitor gap** (violates the gap-source rule): `current_solution_gap` asserting "no app does this" / a competitor shortfall with empty `gap_evidence` and no `hypothesis` label. → reject.
12. **Engagement sold as health impact** (violates O3): an engagement signal recorded under `outcome_type: clinical_relevant`, or `confidence: established` over `evidence_status: insufficient`. → reject.
13. **Contradiction averaged or deleted** (violates O4): `contradictions` removed or numerically netted against supporting evidence to reach a tidy grade. → reject (`prd.md` §7 "contradictions"; `↔ TASK-004` "never average contradictions").

### 6.4 Safety / separation of duties
14. **Approval over a failed gate** (non-compensable): `atlas_status: approved` with any `safety_gate = reject`/`redesign`, or rubric `priority_scores` used to override a gate. → reject (`prd.md` §9/§11).
15. **Self-review**: `authored_by_role` is the sole `reviewer_role`, or a `clinical_integration: required` opportunity gated without R14, or a personal-data opportunity gated without R15 (per TASK-003 separation of duties). → reject.

---

## 7. Validation

### 7.1 Entry validation (must pass before `atlas_status: proposed` is saved)
A record passes entry validation iff:
1. `opp_id` well-formed, unique, immutable.
2. Problem present and non-solutioned: `root_user_need`, `user_context`, `population_relevance`; none prescribes a solution (O1, §6.1).
3. Evidence present or honestly labelled: `need_refs` resolvable **or** the literal `hypothesis` with an `open_gaps` entry; `evidence_grade`, `evidence_status`, `confidence` set and mutually consistent (§4.2).
4. Current-solution gap present with a source: `current_solution_gap` + `gap_evidence` (refs or `hypothesis`).
5. Outcome & mechanism present: `desired_outcome`, `outcome_type`, `mechanisms`, `mechanism_status`.
6. Open question & envelope present: `hmw_statement` (open, solution-free), non-empty `constraints`, and `clinical_integration` set (not empty).
7. `test.validation_path` and `test.smallest_test` present.
8. All §4.2 cross-field rules satisfied; no §6.1/§6.3 forbidden value present.
9. Every unverifiable field is the literal `unknown`/`hypothesis`, never a guess (O4).

### 7.2 Advance validation (proposed → … → approved)
- **→ reconciled:** `contradictions`/`disagreements` attached and preserved (none averaged); `reviewer_roles` includes ≥1 role ≠ `authored_by_role`.
- **→ gated:** `safety_gate` fully assessed (no `not_yet_assessed`); `clinical_integration: required` carries an R14 verdict; personal-data opportunities carry an R15 verdict.
- **→ prioritized:** `priority_scores` present and `territory_ref` assigned by the rubric (`→ TASK-042`).
- **→ approved:** §6.2 satisfied — `test.validation_path`/`smallest_test` present, gate fully assessed with **no** `reject`/`redesign`, `gate_ref` set — and the opportunity is part of the versioned Atlas that passes the §7 gate. Only then is it eligible for release to concept studios (`prd.md` §7/§8).

---

## 8. Validated sample record (ILLUSTRATIVE — synthetic; PRD §7 HMW example)

The record below instantiates the schema on the PRD's **own** worked example — the reframe from "build a better progress dashboard" to "how might we reassure users that their efforts matter without forcing them to become data analysts?" (`prd.md` §7). The problem and desired outcome are *paraphrased from the PRD*, which presents the reframe as a *framing to explore*, not a validated finding. All ids are **synthetic** (`NEED-SYNTH-*`, `EVD-SYNTH-*`, etc.) and assert nothing about any real user or app; the record is deliberately held at `atlas_status: proposed` with `evidence_status: insufficient` to show the schema refusing to manufacture approval or evidence.

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates schema validity only.
# Problem/HMW paraphrased from prd.md §7 as a FRAMING TO EXPLORE. No real evidence.
opp_id: OPP-001
record_version: 0.1
atlas_status: proposed              # entry-valid; not yet reconciled/gated/approved
title: "Effort feels unrewarded without becoming a data analyst"
related_opps: none
territory_ref: unassigned           # assigned later by the rubric (→ TASK-042)

# Problem — root user need & context
root_user_need: "Users put real effort into their routines but cannot tell whether it is adding up, unless they study charts and numbers they do not want to interpret."
user_context: "Provisional segment: 'tracking-averse user' and 'low-energy day' (prd.md §5 Phase 2); replace with observed segment after TASK-029 synthesis."
underserved_context: "Days of low energy or disrupted schedule, when the user least wants to do data work but most needs reassurance that effort still counts."
population_relevance: "High for the midlife-women audience and the zero-guilt brand principle: reassurance-without-labor is central, not incidental (prd.md executive mandate)."

# Evidence & confidence
need_refs: hypothesis               # no interview synthesis yet → honest label (O2)
supporting_evidence: none           # permitted: need_refs=hypothesis + open_gap logged
mechanism_refs: [CAP-SYNTH-001]     # streak/progress capability record (synthetic) → TASK-030
contradictions: none
evidence_grade: n/a                 # open until NEED evidence exists (O3)
evidence_status: insufficient       # requires an open_gaps entry (below)
confidence: speculative             # matches an unevidenced problem (§4.2)

# Current-solution gap
current_solution_gap: "Benchmark apps surface progress as dashboards, counters and charts that require interpretation; they make visible data available but do not reassure. Effort is shown, not affirmed."
gap_evidence: hypothesis            # believed from teardown framing; not yet observed → TASK-012/013
competitor_examples: none           # popularity of any example may NOT assert the need (§6)
alternatives_considered:
  - summary: "Users self-check a numeric streak/chart to infer progress."
    why_insufficient: "Demands interpretation and punishes lapses; the opposite of reassurance."
  - summary: "Users rely on memory/feeling to judge whether effort is adding up."
    why_insufficient: "Unreliable and fades on low-energy days when reassurance matters most."

# Desired outcome & mechanisms
desired_outcome: "The user feels their effort is recognized and is adding up, without having to read, interpret, or manage data."
outcome_type: experience            # NOT clinical_relevant; engagement-adjacent, labelled honestly (O3)
mechanisms: "Competence support and autonomy-supportive feedback (SDT); reduced cognitive load; meaningful progress feedback (prd.md §6). Mechanisms to EXPLORE, not features."
mechanism_status: hypothesized      # untested → confidence stays speculative (§4.2)

# How Might We, constraints & feasibility
hmw_statement: "How might we reassure users that their efforts matter without forcing them to become data analysts? (prd.md §7)"
constraints:
  - "Autonomy-supportive, non-manipulative: no guilt, no loss-aversion pressure (prd.md §6)."
  - "Accessible: any reassurance must have a non-visual/reduced-motion path (→ TASK-022)."
  - "No unsupported efficacy or health claims (prd.md §11)."
  - "Must work on a low-energy day with minimal user effort."
clinical_integration: not_applicable  # reassurance-of-effort need not touch clinical data
feasibility:
  overall: moderate
  notes: "Primarily UX/behavioral; no HealthKit dependency identified yet (→ TASK-039)."
  build_buy_hint: build              # a hint only, not a decision (→ TASK-037)

# Validation, prioritization & governance
test:
  validation_path: "Confirm the need is real and the reframe resonates, then test whether a reassurance approach changes perceived progress and autonomy vs. a data/dashboard approach — without inventing results (prd.md §7)."
  smallest_test: "Discovery-interview probe on how users currently judge 'is my effort adding up' and their reaction to reassurance vs. data framings (neutral, → TASK-027)."
  success_signal: "Users describe wanting affirmation over analysis; reassurance framing raises perceived-progress/autonomy without increasing guilt. Signal sought, not predicted."
  exp_ref: none                      # not yet registered → TASK-009
priority_scores: n/a                 # inadmissible until prioritized (→ TASK-042)
safety_gate:
  clinical: not_yet_assessed
  privacy: not_yet_assessed
  accessibility: not_yet_assessed
  manipulation: not_yet_assessed     # autonomy risk flagged in constraints; needs → TASK-033
  unsupported_claims: not_yet_assessed
disagreements: none
open_gaps: [GAP-SYNTH-004]           # missing NEED evidence + unobserved gap (→ TASK-008)

# Governance & linkage
owner_role: R01                      # Head of Product (Opportunity Synthesis owner)
authored_by_role: R07                # UX researcher drafted from evidence review
reviewer_roles: none                 # not yet reconciled
gate_ref: none                       # not yet approved
change_log:
  - {version: "0.1", date: "2026-11-23", role: "R07", change: "Initial synthetic opportunity built on the prd.md §7 HMW example for schema validation."}
```

**Validation trace (why this record passes §7.1 entry validation and correctly stops short of approval):**
1. `opp_id` = `OPP-001`, well-formed and unique. ✔
2. Problem present and **non-solutioned**: `root_user_need`/`user_context`/`population_relevance` describe the user's world, not a feature; no solution prescribed (O1). ✔
3. Evidence honestly labelled: `need_refs: hypothesis` with `GAP-SYNTH-004` logged, so `evidence_grade: n/a`, `evidence_status: insufficient`, `confidence: speculative` — mutually consistent (§4.2, O2). ✔
4. Gap present with a source-disposition: `current_solution_gap` stated, `gap_evidence: hypothesis` (believed, not yet observed — honest, not an unsourced "no app does this"). ✔
5. Outcome & mechanism present: `desired_outcome` is a user outcome; `outcome_type: experience` (not laundered into `clinical_relevant`); `mechanisms` named as *to explore* with `mechanism_status: hypothesized`. ✔ (O3)
6. Open question & envelope present: `hmw_statement` is an open "How might we …?" naming no feature (it is the PRD's own example); `constraints` non-empty; `clinical_integration: not_applicable` explicitly set — and the Atlas therefore records a *non-clinical* opportunity, as the PRD requires alongside clinical ones. ✔
7. `test.validation_path` + `test.smallest_test` present; `success_signal` framed as a signal sought, not a predicted result. ✔
8. No §6 forbidden value: no solutioning, no fabricated evidence, no popularity-as-need, no unsourced gap, no engagement-as-clinical, no deleted contradiction. ✔
9. `atlas_status: proposed` with `priority_scores: n/a`, `safety_gate: not_yet_assessed`, `gate_ref: none` — the schema correctly **refuses** to approve before reconciliation, gating, prioritization and the §7 Atlas gate. To reach `approved` (and release to studios), it must be reconciled (`→ TASK-023`), gated (`→ TASK-033/040`), prioritized (`→ TASK-042`), and pass the §7 gate. ✔

---

## 9. Governance, dependencies, and change control

- **Custodian:** R01 Head of Product (Opportunity Synthesis owner) owns the Atlas corpus; the Program Director co-owns the schema shape and versions it in the change log below. Per-record ownership sits with `owner_role` (a role, per TASK-003), never a named individual.
- **Where it is applied:** the Opportunity Atlas (`OPP-001`, `prd.md` §4), produced in WS06 (`prd.md` §7 / §13 Prompt 08), prioritized by TASK-042, and — **only once approved** — released as a versioned input to the six concept studios (`prd.md` §8; `→ TASK-043`). The §7 gate is the hard stop between this workstream and concept work.
- **Dependencies:**
  - `↔ TASK-004` Evidence grading rules — supplies the A–D grades, epistemic labels (`mechanism_status`, `evidence_status`), and confidence words this record *stores*; the record keeps evidence, importance and feasibility grades separate per the "never read usability as health impact" rule.
  - `↔ TASK-005` Source & evidence record schema — every `*_evidence`/`*_refs` field is a foreign key to `EVD` records; `competitor_examples` → `APP` (`→ TASK-006`), gap evidence → `JRN` (`→ TASK-016`).
  - `→ TASK-008` Research gap & contradiction log — consumes `open_gaps` and `contradictions`; preserves `disagreements`.
  - `→ TASK-009` Decision & experiment registers — the authoritative home of `test.exp_ref` (`EXP`); opportunity-driven decisions are recorded as `DEC` records downstream.
  - `→ TASK-012 / TASK-013 / TASK-016` Competitor comparison / review sampling / journeys — supply the `gap_evidence` substantiating `current_solution_gap`.
  - `→ TASK-023` Cross-specialist reconciliation — produces the `reconciled` state, preserving `disagreements` and `contradictions`.
  - `→ TASK-029` User-needs synthesis — supplies `NEED` records for `root_user_need`/`user_context`.
  - `→ TASK-030` Capability mechanism record schema — supplies `CAP` records for `mechanism_refs` (opportunities *cite* mechanisms; they do not adopt solutions).
  - `→ TASK-033 / TASK-040` Capability safety-gate checklist & privacy/clinical boundary checklist — define the `safety_gate`/`clinical_integration` logic that must pass before `approved`.
  - `→ TASK-037 / TASK-039` Build-buy matrix & iOS integration inventory — resolve `feasibility.build_buy_hint` and technical feasibility.
  - `→ TASK-042` Opportunity prioritization rubric — defines the weights behind `priority_scores`, the `territory_ref` grouping, and the **≥12-opportunity / 4–6-territory** portfolio requirement this single-record schema deliberately does not encode.
  - `→ TASK-043 / TASK-044` Concept studio briefs & submission template — downstream consumers of the approved, versioned Atlas (`prd.md` §8).
  - `← TASK-002 / TASK-003` Workstream registry & responsibility matrix — supply `owner_role`/`authored_by_role`/`reviewer_roles` (R01 owns the Atlas) and separation-of-duties.
- **Open unknowns (honestly recorded, not defects):**
  - Whether `territory_ref` should be a free field assigned post-hoc by the rubric or a constrained enum fixed at `prioritized` — proposed default: assigned by TASK-042 at `prioritized`, never altering `opp_id`; to be confirmed with the Program Director.
  - Whether `evidence_grade` should be split into separate need-evidence vs. mechanism-evidence axes inline, or carried via the linked `CAP`/`NEED` grades — proposed default: a single `evidence_grade` for the *problem* basis, with mechanism grading inherited from the linked `CAP` record (`→ TASK-030`); to be confirmed with the behavioral scientist (R02).
  - The exact boundary between "root problem" and "underserved context" for opportunities that are context-specific variants of one need — proposed default: same `root_user_need` + distinct `underserved_context` stays one `OPP`; a materially different question becomes a new `OPP` cross-linked via `related_opps`.
  - Whether the §7 Atlas gate is a single Atlas-level approval or a per-opportunity gate — proposed default: per-opportunity `gate_ref` plus an Atlas-level release gate, so a single unsafe opportunity cannot block the whole Atlas yet cannot be released either; to be confirmed by the Program Director.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial schema: `OPP-NNN` identity & lifecycle, seven field groups covering problem/root-need, evidence & confidence, current-solution gap, desired outcome & mechanisms, HMW/constraints/feasibility, and validation/prioritization/governance; the open-question (O1) and evidence-floor (O2) non-negotiables; cross-field consistency rules; forbidden-value/validation rules (incl. anti-solutioning and the §7 gate-before-studios stop); process pointers to TASK-023/029/030/033/040/042/043; and one validated synthetic sample record built on the PRD §7 HMW example. | R01 Head of Product / Program Director |
