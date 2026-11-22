# HerRays Decision & Experiment Registers

**Deliverable:** TASK-009 — Create the decision and experiment registers
**Workstream:** Foundation
**Version:** 0.1 · **Status:** Proposed, not yet populated
**Owner (accountable role):** Program Director (register custodian)
**Reviewers:** Head of Product · Behavioral scientist · Product analyst/growth specialist · Clinical reviewer · Privacy/regulatory reviewer
**Source basis:** `prd.md` §4 (Shared evidence infrastructure — "Decision Log: Option, adopt/adapt/invent/reject/defer, rationale, reviewer, date / `DEC-001`"; "Experiment Registry: Hypothesis, method, success criteria, sample, results, decision / `EXP-001`"; "Never fabricate … actual retention, CAC, LTV, clinical outcomes"), §5 Phase 4 ("Record Adopt / Adapt / Invent / Reject / Defer and rationale, confidence, dependencies, smallest test and owner"), §9 (validation success measures, sampling, "Never fabricate tests or results"), §11 (five quality gates; "Polished unsupported reports do not pass"), §13 Prompt 00 ("decision log"), Prompt 06 ("experiment backlog"), Prompt 07 ("smallest useful experiment … prioritized experiments"), Prompt 10 ("prepare the study and mark it unexecuted"), Prompt 12 ("Never imply delegated work or testing happened unless artifacts and evidence prove it"), §14 (Handoff templates: `status`, `decisions_requested: []`, findings with `evidence_ids` / `confidence` / `limitations`)

---

## 0. How to read this document

This document defines the **two linked registers** that record *what the HerRays Product Intelligence & Innovation Lab has decided* and *what it is testing to earn the right to decide*:

- the **Decision register** (`DEC` records) — a single, owned, reasoned choice about a capability, opportunity, concept, or program question, carrying its Adopt / Adapt / Invent / Reject / Defer verdict, its rationale, its reviewer, and the evidence it rests on; and
- the **Experiment register** (`EXP` records) — a single, pre-registered test (hypothesis → method → success criteria → sample → result → decision) that generates the evidence a decision needs, or that settles a gap or contradiction.

Both are governance / data-contract artifacts. This document defines **fields, identifiers, allowed values, lifecycle states, and validation rules**, and demonstrates them with **two fully-worked synthetic sample records** (§8: one `DEC`, one `EXP`). It contains **no real decision, hypothesis, test, metric, or result** — only the machinery that records them.

> **No-fabrication statement.** This register contains no real decision outcome, experiment, sample, or result. The two worked records in §8 are labelled **ILLUSTRATIVE (synthetic)** end-to-end; they reference synthetic `EVD-SYNTH-*` / `CAP-SYNTH-*` / `GAP-SYNTH-*` ids, not real sources. Critically, the Experiment register is an **anti-fabrication instrument by construction**: a `result` field is *structurally forbidden from being populated until the experiment has actually been run and analyzed*, and an experiment the Lab designs but cannot execute is marked `unexecuted` (`prd.md` §13 Prompt 10), never silently scored. A decision that claims a validated outcome with no linked evidence or experiment is exactly what `prd.md` §11 forbids ("Polished unsupported reports do not pass") and §13 Prompt 12 forbids ("Never imply … testing happened unless artifacts and evidence prove it").

**Scope boundary (what this task is and is not).**
- **TASK-009 (this document) = the *decision* and *experiment* registers: how a choice and a test are each identified, owned, linked to evidence, lifecycled, and validated.** It owns `DEC`/`EXP` identity, the `linked evidence` / `hypothesis` / `decision owner` / `status` / `test method` / `outcome` fields named in the acceptance criteria, and the two-way coupling between a decision and the experiment(s) that justify it.
- **TASK-035 (Adopt/Adapt/Invent/Reject/Defer decision form) = the *intake workflow and mandatory-field gate* for creating a `DEC` record** — the form that refuses approval until rationale, alternatives, reviewer, risks, and a follow-up experiment are present. This register defines the `DEC` *record* those fields land in; the form's enforcement UX is `→ TASK-035`, not duplicated here.
- **TASK-034 (Interactive capability evaluation scorecard) = the weighted 1–5 score** that may *inform* a `DEC`. This register stores a reference to a scorecard result (`score_ref`), not the scoring instrument (`↔ TASK-034`).
- **TASK-048 (Concept testing & final selection pack) and the validation protocols (TASK-013/016) = how a specific study is *designed and run*.** An `EXP` record is the register entry for any such test; the detailed protocol/script lives in those tasks and is referenced (`→ TASK-048/013/016`).
- **TASK-008 (Research gap & contradiction log) = where an *unresolved* deficiency or conflict lives.** An `EXP` is frequently the `next_action` that resolves a `GAP`/`CON`; those records link here via `settled_by_exp` (`↔ TASK-008`). This register links back (`resolves_gap` / `resolves_contradiction`) rather than redefining them.
- **A decision is not a task and an experiment is not a metric.** A `DEC` is a *reasoned, owned, reversible-with-cause choice*; routine execution work lives in the task list. An `EXP` is a *pre-registered test with success criteria fixed before data*; a standing product metric is TASK-001's success-metrics spec (`↔ TASK-001`).

---

## 1. Purpose and non-negotiables

`prd.md` §4 names both registers in the shared evidence infrastructure (`DEC-001`, `EXP-001`) and specifies their core fields. §5 Phase 4 and §13 Prompt 07 require that every high-priority capability end in a recorded **Adopt / Adapt / Invent / Reject / Defer** decision with rationale, confidence, dependencies, owner and a *smallest useful experiment*; Prompt 06 requires an **experiment backlog**; §9 and Prompt 10 require pre-registered tests whose results are real or explicitly `unexecuted`. This document operationalizes those mandates into two enforceable, mutually-linked registers.

The registers exist to do six jobs:

1. **Make every choice traceable to evidence.** A `DEC` record cannot reach `approved` without either linked evidence (`evidence_for`) or a linked experiment that produced it. "We chose X" with no traceable basis is a validation failure (§6), mirroring `prd.md` §14 ("not complete if its claims lack traceable sources").
2. **Separate the decision from the test.** The *choice* (`DEC`) and the *evidence-generating act* (`EXP`) are distinct records with distinct lifecycles, linked both ways. This keeps "we decided" from being confused with "we proved", and lets one experiment inform several decisions (and one decision depend on several experiments).
3. **Fix success criteria before data.** An `EXP` must have its `hypothesis`, `method`, `success_criteria` and `sample_plan` recorded **before** `status: running`; results recorded afterward are judged against the pre-registered criteria, never against criteria edited to fit the data (§6.2). This is the register's core defense against post-hoc storytelling.
4. **Forbid invented results.** The `result` block is empty until an experiment is genuinely analyzed; an unrunnable experiment is `unexecuted`, not scored (`prd.md` §13 Prompt 10). No fabricated retention, CAC, LTV, clinical outcome, participant, or test result may ever be stored (`prd.md` §4).
5. **Assign one accountable owner per record.** Every `DEC` has exactly one `decision_owner` and every `EXP` exactly one `experiment_owner` (a role, per TASK-003), with a separate, non-self reviewer for safety-touching decisions (§7.4). Nothing is "the team's" decision with no name of record.
6. **Preserve reversibility with cause.** Decisions are never silently overwritten: a changed decision is a `superseded`/`reversed` transition with a reason and a link to the superseding record (§2.4), so the honesty trail `prd.md` §13 Prompt 12 demands is intact.

**Four non-negotiable rules, enforced throughout:**

- **D1 — No `approved` decision without a traceable basis.** A `DEC` may reach `approved` only if it links ≥1 `evidence_for` (an `EVD`/`CAP`/`NEED` id) **or** ≥1 concluded `EXP`, **and** carries a non-empty `rationale`, a `confidence` grade (A–D, `↔ TASK-004`), and a named reviewer distinct from the owner where §7.4 requires it. An `approved` decision resting on assertion alone is **invalid** (§6.1), per `prd.md` §11/§14.
- **E1 — Pre-registration before data.** An `EXP` may reach `status: running` only if `hypothesis`, `method`, `success_criteria`, `sample_plan`, and `analysis_plan` are all present and frozen (`preregistered_on` date set). Editing `success_criteria` after `running` is forbidden and, if a change is genuinely needed, requires a new `EXP` id with a documented reason (§6.2). This enforces `prd.md` §9's "preregistered tasks/criteria" (Gate 4).
- **E2 — Results are earned, never asserted.** The `result` block is populated **only** from `status ∈ {analyzed, concluded}` and only with an `outcome` judged against the frozen `success_criteria`. An experiment that was not run carries `status: unexecuted` and an empty `result` (`prd.md` §13 Prompt 10). Fabricating a result, participant, or metric is the gravest violation (§6.2.8; `prd.md` §4).
- **D2/E3 — Reversible with cause, never deleted.** No `DEC`/`EXP` record is hard-deleted. A reversed decision becomes `reversed` (with `reversal_rationale` + superseding id); a withdrawn experiment becomes `abandoned` (with reason). Both are retained for audit (§2.4), consistent with the `EVD` retention discipline (TASK-005 §2.3) and the gap/contradiction no-delete rule (TASK-008 §2.4).

---

## 2. Record identity and lifecycle

The two registers share the identity, versioning, and no-delete discipline below; each has its own lifecycle vocabulary (§2.3) because a choice and a test progress differently.

### 2.1 Identifiers

| Register | Format | Rule |
|---|---|---|
| Decision | `DEC-NNN` | `DEC-` prefix + zero-padded integer, issued sequentially (`DEC-001`, `DEC-002`, …), matching `prd.md` §4 `DEC-001`. |
| Experiment | `EXP-NNN` | `EXP-` prefix + zero-padded integer, issued sequentially (`EXP-001`, `EXP-002`, …), matching `prd.md` §4 `EXP-001`. |

| Property | Rule |
|---|---|
| **Immutable** | An id is permanent — never reused, renumbered, or reassigned to a different decision/experiment. |
| **One choice = one id; one test = one id** | A `DEC` is *one* verdict on *one* question (one capability's Adopt/Adapt/… call is one `DEC`). An `EXP` is *one* pre-registered test with *one* frozen hypothesis/criteria set. A materially different question or a changed pre-registration is a **new** id, not an edit (§6.2). |
| **Supersede, don't overwrite** | A reversed/replaced decision is transitioned to `superseded`/`reversed` with `superseded_by: <id>`; neither record is deleted (§2.4). An experiment re-run under changed criteria is a new `EXP` linked via `supersedes`. |
| **Two-way coupling** | A `DEC` names the experiment(s) it depends on (`depends_on_exp`); an `EXP` names the decision(s) it informs (`informs_decision`). The link is bidirectional and must be consistent (§7.1). |

### 2.2 Versioning within a record

Each record carries `record_version` (starts `0.1`). Any substantive change — status transition, new linked evidence/experiment, confidence change, rationale revision, owner/reviewer change — increments it and appends a one-line `change_log` entry (`{version, date, role, change}`). History is append-only. For an `EXP`, note that `success_criteria` are frozen at `running` (E1): a `record_version` bump may annotate but never silently rewrite them.

### 2.3 Lifecycle states (`status`)

The acceptance criteria require a **status** field on each register. The vocabularies below extend `prd.md` §14 (`not_started | in_progress | review | approved | blocked`) into the decision- and experiment-specific states each register needs.

**Decision register (`DEC.status`):**

| `status` | Meaning | Exit requirement |
|---|---|---|
| `proposed` | A decision is drafted with a provisional `decision_type` and rationale; not yet reviewed. | — |
| `in_review` | Under reviewer / board / gate review (Prompt 07 review board; `prd.md` §5 Phase 4). | Reviewer assigned (§7.4). |
| `approved` | Decision made and ratified; satisfies D1 (traceable basis + rationale + confidence + reviewer). | D1 fully satisfied; `decided_date` set. |
| `blocked` | Cannot be decided yet (depends on an unresolved `GAP`/`CON` or a running `EXP`). | A `blocker` note naming the blocking `GAP`/`CON`/`EXP`. |
| `deferred` | Explicitly a *Defer* verdict (one of the five Adopt/Adapt/Invent/Reject/Defer outcomes) — a real decision to revisit later, with a trigger/date. | `decision_type: defer` + `revisit_trigger` set. |
| `superseded` | Replaced by a later decision on the same question. | `superseded_by: <DEC-id>`. |
| `reversed` | Previously `approved`, now reversed with cause (e.g., the supporting `EXP` was invalidated or an `EVD` retracted — TASK-005 §7.3). | `reversal_rationale` + `superseded_by` (or `reopened` note). |

> `deferred` is a *decision outcome*, not a limbo state: it is the PRD's fifth verdict and still requires an owner, rationale, and a revisit trigger. It differs from `blocked` (which is "cannot yet decide") in that `defer` **is** the decision.

**Experiment register (`EXP.status`):**

| `status` | Meaning | Exit requirement |
|---|---|---|
| `proposed` | On the experiment backlog (Prompt 06); hypothesis sketched, not yet designed. | — |
| `designed` | `method`, `success_criteria`, `sample_plan`, `analysis_plan` drafted; not yet frozen. | All four present. |
| `preregistered` | Design frozen; `preregistered_on` set. The last point at which `success_criteria` may change (E1). | `preregistered_on` set; all E1 fields present. |
| `running` | Data collection in progress. `result` still empty (E2). | Was `preregistered`. |
| `analyzed` | Data analyzed against the **frozen** criteria; `result` populated, `outcome` assigned. | Real data; `outcome` judged vs. frozen `success_criteria`. |
| `concluded` | Outcome ratified and its `informs_decision` links updated; feeds a `DEC`. | `analyzed` + decision linkage reconciled. |
| `blocked` | Cannot proceed (access, recruitment, budget, upstream dependency). | A `blocker` note + blocking id. |
| `unexecuted` | Designed (optionally preregistered) but **deliberately not run** — recruitment/access unavailable (`prd.md` §13 Prompt 10). `result` stays empty. | Reason recorded; no `result` asserted. |
| `abandoned` | Withdrawn with cause before conclusion (superseded design, invalidated premise). | `abandon_reason` set; retained, not deleted. |

A record is **never hard-deleted** (§2.4). `concluded`/`unexecuted`/`abandoned` are states with a reason behind them, not disappearances.

### 2.4 No-delete / audit discipline

Both registers are append-only. A decision that was wrong or an experiment that was withdrawn is *transitioned* (`superseded`, `reversed`, `abandoned`, `unexecuted`) and retained for audit, exactly as `EVD` records are never deleted (TASK-005 §2.3) and `GAP`/`CON` records are never deleted (TASK-008 §2.4). This preserves the honesty trail `prd.md` §13 Prompt 12 demands.

---

## 3. Field catalogue

Each register has its own core block (§3.1 decisions, §3.2 experiments) plus the shared linkage/provenance block (§3.3). **M** = mandatory, **C** = conditionally mandatory (rule given), **O** = optional. Every field has an allowed-value rule; `unknown` is permitted only where a value is genuinely not yet knowable and is written as the literal token, never guessed (consistent with TASK-005 S3). `n/a` marks a field that does not apply to the record's current type/state (never a stand-in for a value that should exist).

### 3.1 Decision register (`DEC`) — core fields

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `id` | M | `DEC-NNN` | §2.1; unique, immutable. |
| `record_version` | M | `X.Y` | §2.2; starts `0.1`. |
| `title` | M | string | Short, neutral statement of the question decided ("Streak-framing capability: Adopt, Adapt, Invent, Reject or Defer?"). Not the verdict. |
| `question` | M | string | The precise decision being made and its scope boundary (what is and is not in scope). |
| `decision_type` | M | `adopt \| adapt \| invent \| reject \| defer` | The five-way verdict (`prd.md` §4/§5 Phase 4/§13 Prompt 07). Mandatory once `status ∈ {approved, deferred, reversed}`; may be provisional while `proposed`. |
| `subject_ref` | M | `CAP-NNN` \| `OPP-NNN` \| `program` | What the decision is about — a capability (`↔ TASK-030`), an opportunity (`↔ TASK-041`), or a program/governance question (`program`). |
| `rationale` | C | string (non-empty) | D1; the reasoned basis. **Mandatory to reach `approved`/`deferred`/`reversed`.** Must cite the evidence/experiment it rests on, not assert a preference. |
| `alternatives_considered` | C | list of `{option, why_not}` | The options weighed and why they lost (e.g., the three+one alternatives from a capability record, `prd.md` §5 Phase 3). Mandatory for `adapt`/`invent` verdicts; detailed form `→ TASK-035`. |
| `confidence` | C | `A \| B \| C \| D` | Evidence grade of the basis (`↔ TASK-004`). Mandatory to reach `approved`. Graded separately for efficacy vs. relevance where relevant (`prd.md` §4). |
| `decision_owner` | M | role id (`R01`–`R15`, per TASK-003) | **Exactly one** accountable role (D1; single-accountable rule). A role, not a named person. |
| `reviewer_role` | C | role id \| `n/a` | The approving reviewer, **distinct from `decision_owner`** where §7.4 requires (clinical R14 / privacy R15 / accessibility R13 for safety-touching decisions). Mandatory to reach `approved` for such decisions. |
| `status` | M | see §2.3 (`DEC`) | The required status field. |
| `decided_date` | C | `YYYY-MM-DD` | Mandatory once `approved`/`deferred`/`reversed`. Matches `prd.md` §4 Decision Log "date". |
| `revisit_trigger` | C | string + optional date | Mandatory when `decision_type: defer`; the condition/date that reopens it. |
| `risks` | C | list of strings | Known risks/downsides of the chosen option (`prd.md` §5 Phase 4 "dependencies"; red-team feed `→ TASK-036`). Mandatory for `approved` safety-touching decisions. |
| `follow_up_exp` | C | list of `EXP-NNN` \| `none` | The "smallest useful experiment" the decision commits to (`prd.md` §13 Prompt 07). Mandatory for `adopt`/`adapt`/`invent` with `confidence ∈ {C, D}`. |
| `superseded_by` | C | `DEC-NNN` \| `n/a` | Mandatory with `superseded`/`reversed`. |
| `reversal_rationale` | C | string | Mandatory with `reversed`. |

### 3.2 Experiment register (`EXP`) — core fields

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `id` | M | `EXP-NNN` | §2.1; unique, immutable. |
| `record_version` | M | `X.Y` | §2.2; starts `0.1`. |
| `title` | M | string | Short, neutral label of the test ("Flexible vs. strict streak framing: effect on observed return-after-miss"). |
| `hypothesis` | M | string | The testable prediction, directional and falsifiable (`prd.md` §4 "Hypothesis"). States the mechanism, population, comparator and predicted direction. No "we expect users to like it". |
| `method` | C | string | The test design: type (A/B, within-subject, usability, diary, literature synthesis), conditions, counterbalancing (`prd.md` §9), procedure. Mandatory from `designed` onward (`prd.md` §4 "method"). |
| `measures` | C | list of `{measure, construct, maps_to_metric}` | What is measured and the construct it indexes; maps to a TASK-001 success metric where applicable (`↔ TASK-001`). Distinguishes engagement / adherence / automaticity / health outcome (`prd.md` §6). Mandatory from `designed`. |
| `success_criteria` | C | string (non-empty) | The pre-registered threshold that would support/refute the hypothesis, fixed **before** `running` (E1). Mandatory from `designed`; **frozen** at `preregistered`. |
| `sample_plan` | C | `{population, size_target, stratification, recruitment_source}` | Who/how many/sampling (`prd.md` §4 "sample"; §9 representative users; §4 review-sampling stratified by rating/recency/version). Mandatory from `designed`. **No fabricated participants** (§6.2). |
| `analysis_plan` | C | string | How results are analyzed and judged against `success_criteria`, set before data (E1). Mandatory to reach `preregistered`. |
| `preregistered_on` | C | `YYYY-MM-DD` | Date the design/criteria were frozen. Mandatory from `preregistered` onward (E1). |
| `experiment_owner` | M | role id (`R01`–`R15`) | **Exactly one** accountable role. For user tests, an independent research/product lead (`prd.md` §2 WS08). |
| `status` | M | see §2.3 (`EXP`) | The required status field. |
| `result` | C | `{observed, measure_values, confidence, limitations}` \| `empty` | **Populated only from `status ∈ {analyzed, concluded}`** (E2). `empty` for every other state, including `unexecuted`. `measure_values` are real observations; `limitations` non-empty (`prd.md` §4/§14). |
| `outcome` | C | `supported \| not_supported \| inconclusive \| invalidated \| unexecuted` | The verdict vs. the **frozen** `success_criteria`. Mandatory from `analyzed`; `unexecuted` only with `status: unexecuted` (E2). Never asserted before data. |
| `decision_feedback` | C | `DEC-NNN` + `{informs_how}` | How the outcome feeds the decision(s) in `informs_decision` (e.g., "flips DEC-012 from Adopt to Adapt"). Mandatory from `concluded`. |
| `unexecuted_reason` | C | string | Mandatory with `status: unexecuted` (`prd.md` §13 Prompt 10 "mark it unexecuted"). |
| `abandon_reason` | C | string | Mandatory with `status: abandoned`. |

### 3.3 Shared linkage, ownership & provenance

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `workstream` | M | `WS01`–`WS08` \| `Foundation` | Owning workstream (per TASK-002). |
| `created_by_role` | M | role id (`R01`–`R15`) | Who raised the record. |
| `created_date` | M | `YYYY-MM-DD` | When logged. Never `unknown`. |
| `evidence_for` *(DEC)* | C | list of `EVD`/`CAP`/`NEED` ids \| `none` | Evidence the decision rests on (D1). ≥1 required for `approved` unless a concluded `EXP` supplies the basis. |
| `evidence_refs` *(EXP)* | O | list of `EVD`/`CAP` ids | Prior evidence that motivated the experiment. |
| `depends_on_exp` *(DEC)* | C | list of `EXP-NNN` \| `none` | Experiments the decision depends on; two-way consistent with the `EXP`'s `informs_decision` (§7.1). |
| `informs_decision` *(EXP)* | C | list of `DEC-NNN` \| `none` | Decisions this experiment informs; two-way consistent with `depends_on_exp`. |
| `resolves_gap` | O | list of `GAP-NNN` | `GAP` record(s) this `DEC`/`EXP` resolves (`↔ TASK-008`; a gap's `settled_by_exp`/resolution points back here). |
| `resolves_contradiction` | O | list of `CON-NNN` | `CON` record(s) this record adjudicates/settles (`↔ TASK-008`). |
| `score_ref` *(DEC)* | O | scorecard id | The TASK-034 weighted score that informed the decision (`↔ TASK-034`), if any. |
| `affected_gate` | C | `Gate 1`–`Gate 5` \| `none` | The `prd.md` §11 gate this record bears on; required if the decision is a gate decision or the experiment is a Gate-4 validation test. |
| `safety_flag` | M | `none \| clinical \| privacy \| accessibility \| unsupported_claim` | Whether the record touches a non-compensable gate (`prd.md` §9/§11); drives §7.4 reviewer rules. |
| `change_log` | M | list of `{version, date, role, change}` | Append-only (§2.2). |

---

## 4. Controlled vocabularies (rationale)

### 4.1 `decision_type` — the five PRD verdicts

`prd.md` §4/§5 Phase 4/§13 Prompt 07 fix exactly five outcomes. They are mutually exclusive per `DEC`:

| `decision_type` | Meaning | Typical required companions |
|---|---|---|
| `adopt` | Use the observed capability largely as-is. | `evidence_for` + `confidence`; `follow_up_exp` if `confidence ∈ {C,D}`. |
| `adapt` | Use a modified version; the modification is specified. | `alternatives_considered`; often a `follow_up_exp` to test the adaptation. |
| `invent` | Build a novel alternative (not derived from a competitor feature). | `alternatives_considered` incl. the unconventional option (`prd.md` §5 Phase 3); `follow_up_exp` expected. |
| `reject` | Do not pursue; the reason (harm, weak evidence, poor fit) is recorded. | `rationale` + `risks`/red-team basis (`→ TASK-036`). |
| `defer` | Revisit later under a stated trigger; a real decision, not limbo. | `revisit_trigger` + `decided_date`. |

Keeping `decision_type` orthogonal to `status` means a decision can be `approved` with any of the five verdicts (including an approved `reject`), while `deferred` is the single status that mirrors the `defer` verdict for dashboard clarity.

### 4.2 `outcome` — judged only against frozen criteria

| `outcome` | Meaning |
|---|---|
| `supported` | The pre-registered `success_criteria` were met on real data. |
| `not_supported` | Data did not meet the criteria (a real, publishable negative result — valued, not hidden). |
| `inconclusive` | Underpowered / ambiguous against criteria; `limitations` explain why; usually triggers a follow-up `EXP` or a `GAP`. |
| `invalidated` | The test itself was compromised (protocol breach, biased sample); no inference drawn; typically → `abandoned` + new `EXP`. |
| `unexecuted` | Designed but not run (`status: unexecuted`); **not** a result, recorded so the backlog is honest (`prd.md` §13 Prompt 10). |

A `not_supported` outcome is a first-class, retained result — never quietly deleted to protect a preferred decision (D2/E3, §6.2).

### 4.3 `confidence` ↔ TASK-004 interlock

`confidence` on a `DEC` and in an `EXP.result` reuses the TASK-004 A–D grades and the "grade efficacy / relevance / confidence separately" rule (`prd.md` §4). A high usability result does **not** license a high-confidence health-impact decision; the `DEC.rationale` must state which axis its confidence refers to (`↔ TASK-004`).

### 4.4 `safety_flag` → gate interaction

`clinical`, `privacy`, `accessibility`, and `unsupported_claim` are the non-compensable surfaces of `prd.md` §9/§11. Any such flag forces a reviewer distinct from the owner (§7.4) and binds the record to its `affected_gate`.

---

## 5. How records are opened, coupled, and routed

1. **Decisions originate at the capability review board and opportunity synthesis.** `prd.md` §5 Phase 4 / §13 Prompt 07 produce `DEC` records (the "decision register"); §13 Prompt 08 opportunity calls and program/governance choices also land here with `subject_ref: program`.
2. **Experiments originate from the backlog and from gaps/contradictions.** `prd.md` §13 Prompt 06 produces the "experiment backlog" (`EXP` at `proposed`); a `GAP`/`CON` whose `next_action` is "run a test" (TASK-008 §3.3) spawns an `EXP` and links via `resolves_gap`/`resolves_contradiction`.
3. **The decision→experiment coupling is mandatory and two-way.** When a `DEC` is `blocked` on evidence, it names the `EXP` in `depends_on_exp`; that `EXP` names the `DEC` in `informs_decision`. Entry/transition validation checks both directions agree (§7.1). A decision may not reach `approved` while a `depends_on_exp` experiment is unfinished unless it is explicitly `deferred` or carries an accepted limitation.
4. **Pre-registration is a hard gate for user tests.** Before any Gate-4 validation experiment runs, its `EXP` must be `preregistered` (E1), satisfying `prd.md` §9/§11 Gate 4 ("preregistered tasks/criteria"). Validation scripts themselves are `→ TASK-048/013/016`.
5. **Outcomes flow back into decisions, never silently.** A concluded `EXP` updates its `informs_decision` targets via `decision_feedback`; if the outcome reverses an `approved` decision, that `DEC` transitions to `reversed` with `reversal_rationale` (D2/E3), not an in-place edit.
6. **Gate reviews read both registers.** At each gate the Program Director lists open safety-flagged decisions and any `unexecuted`/`inconclusive` experiments behind a claim (`prd.md` §11). "Decided/validated" must be shown from the registers, not asserted.

---

## 6. Forbidden values & validation failures

These make a record **invalid** (rejected at entry/transition), not merely low-priority. They are the structural anti-fabrication guards.

### 6.1 Structural (ownership, linkage, completeness)
1. **`DEC`/`EXP` with no owner, or more than one** (violates D1/single-accountable). → reject.
2. **`approved` decision with empty `rationale`, missing `confidence`, or no `evidence_for` and no concluded `depends_on_exp`** (violates D1). → reject.
3. **Safety-flagged decision approved with `reviewer_role` equal to `decision_owner` or absent** (violates §7.4 separation of duties). → reject.
4. **One-way or inconsistent coupling** — a `DEC.depends_on_exp` that the named `EXP` does not reciprocate in `informs_decision` (or vice versa). → reject.
5. **`defer` without `revisit_trigger`, or `blocked` without a `blocker`.** → reject.

### 6.2 Integrity of results & decisions (the core anti-fabrication guards)
6. **Result before data** — a non-empty `result`/`outcome` on an `EXP` whose `status ∉ {analyzed, concluded}` (violates E2). → reject.
7. **Moved goalposts** — `success_criteria` changed after `status: running`/`preregistered` instead of opening a new `EXP` (violates E1). → reject.
8. **Fabricated result, participant, or metric** — any invented observation, sample, retention/CAC/LTV, or clinical outcome (`prd.md` §4 never-fabricate; §13 Prompt 10/12). → **escalate; gravest violation.**
9. **Phantom basis** — a `DEC` citing an `EVD`/`CAP`/`EXP` id that does not exist or is not verified/concluded (TASK-005 §7.2). → reject.
10. **Hidden negative** — a `not_supported`/`inconclusive` `EXP` deleted, or an `approved` decision left standing after its only supporting `EXP` was `invalidated`/`not_supported` without a `reversed`/`reopened` transition (violates D2/E3 + §2.4). → reject.
11. **Verdict laundering** — recording a `reject`/`defer` as if it were never decided (deleting the `DEC`) rather than transitioning it, or converting a usability result into a health-impact decision without re-grading the confidence axis (violates §4.3). → reject.
12. **Unexecuted dressed as a result** — `status: unexecuted` carrying anything other than `outcome: unexecuted` + empty `result` (violates E2 / `prd.md` §13 Prompt 10). → reject.

---

## 7. Validation, triage, and gate interaction

### 7.1 Entry validation (must pass before a record is saved)
A record passes entry validation iff:
1. `id` well-formed, unique, immutable; register-correct block present (§3.1 for `DEC`, §3.2 for `EXP`).
2. Shared fields present (`workstream`, `created_by_role`, `created_date`, `safety_flag`); `change_log` initialized.
3. Exactly one owner (`decision_owner` / `experiment_owner`).
4. **`DEC`:** `question` + `subject_ref` present; `decision_type` provisional-or-set per state; if `approved` then D1 fully satisfied (rationale + confidence + basis + §7.4 reviewer).
5. **`EXP`:** `hypothesis` present; from `designed`, `method`/`measures`/`success_criteria`/`sample_plan` present; from `preregistered`, `analysis_plan` + `preregistered_on` present and criteria frozen (E1).
6. Coupling is two-way consistent (§6.1.4); any `resolves_gap`/`resolves_contradiction` points at a real `GAP`/`CON`.
7. No §6 forbidden value present; any `unknown` is the literal token, never a guess; `safety_flag ≠ none` ⇒ §7.4 reviewer rule enforced at `approved`.

### 7.2 Transition validation (changing `status`)
Each transition must satisfy its §2.3 exit requirement and append a `change_log` entry. In particular: `DEC → approved` needs D1; `EXP → running` needs E1 (frozen criteria); `EXP → analyzed/concluded` needs real data + `outcome` judged against frozen criteria (E2); `EXP → unexecuted` needs `unexecuted_reason` + empty result; `DEC → reversed` needs `reversal_rationale` + `superseded_by`. No transition may populate a `result` out of `{analyzed, concluded}` (E2).

### 7.3 Triage cadence
The Program Director reviews `proposed`/`in_review`/`blocked` decisions and `proposed`/`designed`/`running`/`blocked` experiments at each gate and at the weekly dashboard refresh (`prd.md` §13 Prompt 00 "dashboard"), ordering decisions by `affected_gate` then age, and experiments by the priority of the decision they inform (Prompt 07 "prioritized experiments"). `blocked` records escalate to the blocking owner.

### 7.4 Gate interaction (binds to `prd.md` §9/§11)
- A **safety-flagged `DEC`** (`clinical`/`privacy`/`accessibility`/`unsupported_claim`) may reach `approved` only with a `reviewer_role` that is the **accountable reviewer** for that risk (clinical R14, privacy R15, accessibility R13) and **not** the `decision_owner` — the implementing role never self-approves a safety decision (separation of duties, TASK-003; TASK-005 §6.4; TASK-008 §7.4).
- A **Gate-4 validation `EXP`** must be `preregistered` before `running`; an unpreregistered user test cannot satisfy Gate 4 (`prd.md` §11).
- The gate verdict (`pass / conditional pass / fail`, `prd.md` §11) enumerates, by id, every open safety-flagged decision and every claim resting on an `unexecuted`/`inconclusive`/`not_supported` experiment; "validated" is shown from the registers, never asserted.

---

## 8. Validated sample records (ILLUSTRATIVE — synthetic)

The two records below are **entirely synthetic** and included solely to demonstrate that the schema validates and that a decision and an experiment each round-trip through entry and transition rules. They assert **no real decision, test, sample, or result about any real app, study, or person**; all `EVD-SYNTH-*` / `CAP-SYNTH-*` / `GAP-SYNTH-*` ids are fictitious.

### 8.1 Sample `DEC-001` — a decision held correctly short of approval (synthetic)

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates schema validity only. No real decision.
id: DEC-001
record_version: 0.1
title: "[SYNTHETIC] Streak-framing capability — Adopt, Adapt, Invent, Reject or Defer?"
question: "[SYNTHETIC] For the HerRays habit engine, do we adopt a strict consecutive-day streak, adapt it to a flexible weekly-consistency framing, invent an alternative, reject streaks, or defer? Scope: the completion-feedback mechanism only; visual treatment is out of scope."
decision_type: adapt               # provisional while in_review (§4.1)
subject_ref: CAP-SYNTH-012         # the streak-framing capability record (↔ TASK-030)

# reasoning & ownership (§3.1)
rationale: "[SYNTHETIC] Provisional: observed streak mechanics may aid short-term adherence but carry a documented shame/all-or-nothing risk after a miss (prd.md §5 Phase 3 streaks example). A flexible weekly-consistency adaptation is hypothesized to retain reinforcement while reducing guilt — but the adherence evidence is untransferable to midlife women, so this is NOT yet approvable."
alternatives_considered:
  - {option: "Strict consecutive-day streak (adopt)", why_not: "[SYNTHETIC] Shame/abandonment risk after a miss (red-team → TASK-036)."}
  - {option: "No streak / cumulative-effort milestones (invent)", why_not: "[SYNTHETIC] Retained as live alternative; see follow-up EXP."}
confidence: C                      # qualitative/competitor-pattern grade (↔ TASK-004)
decision_owner: R01                # Head of Product (per TASK-003)
reviewer_role: n/a                 # not yet approved; no safety_flag requiring R14/R15/R13
status: in_review
decided_date: n/a
revisit_trigger: n/a
risks: ["[SYNTHETIC] Guilt/compulsion if adaptation still rewards unbroken chains (prd.md §6 anti-patterns)."]
follow_up_exp: [EXP-001]
superseded_by: n/a
reversal_rationale: n/a

# shared linkage & provenance (§3.3)
workstream: WS06
created_by_role: R01
created_date: 2026-11-22
evidence_for: [EVD-SYNTH-041, CAP-SYNTH-012]
depends_on_exp: [EXP-001]          # two-way with EXP-001.informs_decision
resolves_gap: [GAP-SYNTH-001]
resolves_contradiction: [CON-SYNTH-001]
score_ref: n/a
affected_gate: Gate 2
safety_flag: none
change_log:
  - {version: "0.1", date: "2026-11-22", role: "R01", change: "Synthetic decision drafted at review board; blocked on EXP-001, held in_review (not approved)."}
```

**Validation trace (why `DEC-001` is valid and correctly *not* `approved`):**
1. `id` well-formed/unique; `DEC` core block present (§3.1). ✔
2. Shared fields present (`workstream`, `created_by_role`, `created_date`, `safety_flag: none`); `change_log` initialized (§7.1.2). ✔
3. Exactly one `decision_owner` (`R01`) (§6.1.1). ✔
4. `question` + `subject_ref` present; `decision_type: adapt` is provisional and allowed while `in_review` (§3.1). ✔
5. **Correctly held short of `approved`:** D1 is not yet met because its only basis (`EVD-SYNTH-041`) is untransferable and `depends_on_exp: EXP-001` is unfinished — so entry validation *permits* `in_review` but a transition to `approved` would be **rejected** under §6.1.2 until `EXP-001` concludes. ✔
6. Coupling is two-way: `depends_on_exp: [EXP-001]` reciprocated by `EXP-001.informs_decision: [DEC-001]` (§6.1.4). `resolves_gap`/`resolves_contradiction` point at real synthetic `GAP`/`CON` ids. ✔
7. No §6 forbidden value: no result asserted, basis ids exist, `safety_flag: none` so §7.4 reviewer not yet required. ✔

### 8.2 Sample `EXP-001` — a pre-registered, not-yet-run experiment (synthetic)

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates schema validity only. No real test or result.
id: EXP-001
record_version: 0.1
title: "[SYNTHETIC] Flexible vs. strict streak framing: effect on observed return-after-miss and perceived autonomy"
hypothesis: "[SYNTHETIC] Among midlife women using a habit prototype, a flexible weekly-consistency streak produces a higher rate of meaningful action *resumed within 7 days of a missed day* (return-after-miss) and higher perceived autonomy than a strict consecutive-day streak — measured by observed behavior, not app opens."
method: "[SYNTHETIC] Two-arm between-subjects prototype test, counterbalanced task order (prd.md §9), identical content across arms differing only in streak framing; 14-day usage window; neutral task scripts (→ TASK-048)."
measures:
  - {measure: "Return-after-miss rate", construct: "adherence recovery", maps_to_metric: "REP-03 (↔ TASK-001)"}
  - {measure: "Perceived autonomy (validated SDT subscale)", construct: "autonomy", maps_to_metric: "DEL/safety (↔ TASK-001)"}
success_criteria: "[SYNTHETIC] FROZEN: flexible arm return-after-miss rate >= strict arm by a pre-specified margin AND autonomy score not lower; judged only on these pre-registered measures."
sample_plan:
  population: "[SYNTHETIC] Women 45–60 matching the recruitment screener (→ TASK-026)."
  size_target: "[SYNTHETIC] per power analysis in analysis_plan — NOT yet recruited"
  stratification: "[SYNTHETIC] by prior habit-app experience and tracking tolerance"
  recruitment_source: "[SYNTHETIC] TASK-026 recruitment pack — not yet executed"
analysis_plan: "[SYNTHETIC] Pre-specified comparison of the two measures against success_criteria; primary = return-after-miss; no outcome inferred if underpowered (→ inconclusive)."
preregistered_on: 2026-11-22
experiment_owner: R07              # independent UX researcher (prd.md §2 WS08)
status: preregistered              # frozen, NOT yet running
result: empty                      # E2 — empty until analyzed/concluded
outcome: n/a                       # no result asserted before data
decision_feedback: n/a
unexecuted_reason: n/a
abandon_reason: n/a

# shared linkage & provenance (§3.3)
workstream: WS08
created_by_role: R07
created_date: 2026-11-22
evidence_refs: [EVD-SYNTH-041]
informs_decision: [DEC-001]        # two-way with DEC-001.depends_on_exp
resolves_gap: [GAP-SYNTH-001]
resolves_contradiction: [CON-SYNTH-001]
affected_gate: Gate 4
safety_flag: none
change_log:
  - {version: "0.1", date: "2026-11-22", role: "R07", change: "Synthetic experiment designed and pre-registered; criteria frozen; not yet run."}
```

**Validation trace (why `EXP-001` passes §7.1 and is correctly result-free):**
1. `id` well-formed/unique; `EXP` core block present (§3.2). ✔
2. Shared fields present; `change_log` initialized; `safety_flag: none` (§7.1.2). ✔
3. Exactly one `experiment_owner` (`R07`) (§6.1.1). ✔
4. `status: preregistered` requires `hypothesis`, `method`, `measures`, `success_criteria`, `sample_plan`, `analysis_plan`, `preregistered_on` — all present and the criteria marked **FROZEN** (E1). ✔
5. **`result: empty` and `outcome: n/a`** because `status ∉ {analyzed, concluded}` — satisfying E2; populating either now would be a §6.2.6 violation. The `size_target` is honestly "NOT yet recruited" rather than an invented n (§6.2.8). ✔
6. Coupling two-way: `informs_decision: [DEC-001]` reciprocated by `DEC-001.depends_on_exp: [EXP-001]` (§6.1.4). `resolves_gap`/`resolves_contradiction` consistent with `DEC-001`. ✔
7. No §6 forbidden value: criteria frozen (no §6.2.7 moved goalpost), no fabricated participants/result (§6.2.8), no unexecuted-dressed-as-result (§6.2.12 — this is `preregistered`, not `unexecuted`). ✔

Correctly held pre-data: it may advance to `running` → `analyzed` (where a real `outcome` is judged against the **frozen** `success_criteria`) → `concluded` (where `decision_feedback` updates `DEC-001`); or, if recruitment never materializes, to `unexecuted` with an `unexecuted_reason` and still-empty `result` (`prd.md` §13 Prompt 10).

### 8.3 What the two samples jointly demonstrate
- **All acceptance-criteria elements are present and linked:** unique **`DEC`/`EXP` identifiers** (§2.1), **linked evidence** (`evidence_for` / `evidence_refs` / `EVD-SYNTH-041`), **hypothesis** (`EXP-001.hypothesis`), **decision owner** (`DEC-001.decision_owner`, exactly one; `EXP-001.experiment_owner`, exactly one), **status** (`in_review` / `preregistered`, from the §2.3 vocabularies), **test method** (`EXP-001.method` + `analysis_plan`), and **outcome** (`EXP-001.outcome`, correctly `n/a` pre-data, with the full `outcome` vocabulary defined in §4.2).
- **Records are linked** to evidence, to each other **two-way** (`DEC-001 ↔ EXP-001`), to the gap/contradiction they resolve (`GAP-SYNTH-001` / `CON-SYNTH-001`, `↔ TASK-008`), and to gates (`Gate 2` / `Gate 4`) — demonstrating the coupling model (§5).
- **No fabrication:** every id is `*-SYNTH-*`, every string tagged `[SYNTHETIC]`; the decision is held in `in_review` (not falsely `approved`) and the experiment carries an empty `result` with no invented sample size — showing the register refuses to manufacture either a verdict or a result.

---

## 9. Dashboard & reporting views (derived, read-only)

The registers drive four standard views (no new data; all computed from the fields above), feeding the `prd.md` §13 Prompt 00 dashboard:

| View | Definition | Consumer |
|---|---|---|
| **Decision log** | All `DEC` records with `decision_type`, `confidence`, `decided_date`, `decision_owner`; filterable by `subject_ref`/`affected_gate`. | Gate reviews; §14 `decisions_requested`. |
| **Experiment backlog & status** | All `EXP` by `status`, ordered by the priority of the `informs_decision` they serve (Prompt 07). | WS08 planning; weekly triage (§7.3). |
| **Evidence-to-decision trace** | For any `DEC`, the chain `evidence_for` + `depends_on_exp` → `EXP.result` → `outcome`. | Audit; `prd.md` §14 traceability; Gate 5. |
| **Unproven-claim watch** | `approved` decisions whose confidence is `C`/`D` with no concluded `follow_up_exp`, plus claims resting on `unexecuted`/`inconclusive` experiments. | Gate reviews (§7.4); red-team (`→ TASK-036`). |

These views are generated, never hand-maintained, so a decision cannot be "validated" by dropping its unproven basis from a slide.

---

## 10. Governance, dependencies, and change control

- **Custodian:** Program Director owns both registers; schema changes are versioned in the change log below. Per-record accountability sits with the `decision_owner` / `experiment_owner` (a role, per TASK-003), never a named individual.
- **Where it is applied:** the two registers correspond to the `prd.md` §4 **Decision Log (`DEC-001`)** and **Experiment Registry (`EXP-001`)**, receive the Adopt/Adapt/Invent/Reject/Defer outputs of §5 Phase 4 / §13 Prompt 07, hold the §13 Prompt 06 experiment backlog, and supply the `decisions_requested: []` array and the evidence trace of every §14 handoff.
- **Dependencies:**
  - `↔ TASK-004` Evidence grading rules — supplies the A–D `confidence` grades used on `DEC` and in `EXP.result`, and the "grade efficacy/relevance separately" rule (§4.3).
  - `↔ TASK-005` Source & evidence record schema — supplies the `EVD` ids referenced in `evidence_for`/`evidence_refs`; a retracted `EVD` can force a `DEC` to `reversed` (TASK-005 §7.3).
  - `↔ TASK-008` Research gap & contradiction log — a `GAP`/`CON` whose resolution is a test or a call links here via `settled_by_exp`/resolution; this register links back via `resolves_gap`/`resolves_contradiction`.
  - `→ TASK-035` Adopt/Adapt/Invent/Reject/Defer decision form — the intake workflow and mandatory-field gate that *creates* a `DEC` record; this register defines the record it writes to.
  - `→ TASK-034` Interactive capability evaluation scorecard — produces the `score_ref` that may inform a `DEC`.
  - `→ TASK-036` Capability red-team challenge protocol — a source of `risks` on `reject`/`adapt` decisions and of `Unproven-claim watch` items.
  - `→ TASK-048 / TASK-013 / TASK-016` Validation pack & test protocols — the detailed design/scripts behind an `EXP`; this register holds the pre-registration and result record.
  - `← TASK-001` Success-metrics spec — `EXP.measures.maps_to_metric` and `DEC` confidence axes bind to the activation/adherence/outcome metrics.
  - `← TASK-002 / TASK-003` Workstream registry & responsibility matrix — supply `workstream`, owners, `created_by_role`, and the separation-of-duties for §7.4 reviewer rules.
- **Open unknowns (honestly recorded, not defects):**
  - Whether `DEC`/`EXP` records live as native tables in HerRays OS/Notion or as linked views off the Evidence Library — deferred to the TASK-038 tooling decision; this schema requires only stable ids and the fields above, not a specific backend.
  - Whether a lightweight "assumptions register" (`prd.md` §13 Prompt 00) is a distinct register or a `DEC` subtype with `decision_type: defer` + `confidence: D` — proposed as the latter; to be confirmed by the Program Director.
  - The exact pre-registration medium for Gate-4 experiments (internal frozen record vs. external registry) — proposed internal frozen `EXP` with `preregistered_on`; to be aligned with TASK-048.
  - Proposed default SLA: a `DEC` `blocked` on an `EXP` must carry the `EXP`'s expected `preregistered_on`/run window so the dashboard can flag stalls — to be confirmed against the §12 schedule.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-22 | Initial schema: `DEC`/`EXP` identity & separate lifecycles, four non-negotiables (traceable-basis D1, pre-registration E1, earned-results E2, reversible-not-deleted D2/E3), per-register + shared field catalogues, controlled vocabularies (five verdicts, outcome set, confidence/safety interlocks), open/couple/route rules, forbidden-value & validation rules, gate interaction, two validated synthetic sample records (one decision, one experiment) with traces, derived dashboard views, dependencies. | Program Director |
