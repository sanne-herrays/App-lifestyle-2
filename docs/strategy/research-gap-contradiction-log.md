# HerRays Research Gap & Contradiction Log

**Deliverable:** TASK-008 — Create the research gap and contradiction log
**Workstream:** Foundation
**Version:** 0.1 · **Status:** Proposed, not yet populated
**Owner (accountable role):** Program Director (log custodian)
**Reviewers:** Behavioral scientist · Clinical reviewer · Privacy/regulatory reviewer · UX researcher · Senior UX designer
**Source basis:** `prd.md` §4 (Shared evidence infrastructure; "contradictions … and what remains unknown"), §7 (identify contradictions / unmet needs), §11 (Quality gates: "unknowns and access limitations documented"), §13 Prompt 00 ("research gap log", "contradiction register"; separate evidence/inference/hypothesis/invention; never fabricate), Prompt 02 ("reconcile contradictions"), Prompt 06 ("Preserve specialist disagreements"), Prompt 12 ("Maintain links … Never imply … testing happened"), §14 (Handoff templates: `contradictions: []`, `unknowns: []`)

---

## 0. How to read this document

This document defines the **two linked registers** that record what the HerRays Product Intelligence & Innovation Lab *does not yet know* and where its evidence *disagrees with itself*:

- the **Research Gap register** (`GAP` records) — a missing or insufficient piece of evidence needed for a decision or gate; and
- the **Contradiction register** (`CON` records) — two or more admissible findings that cannot both be true as stated.

Both are governance / data-contract artifacts. This document defines **fields, identifiers, allowed values, lifecycle states, and validation rules**, and demonstrates them with **two fully-worked synthetic sample records** (§8: one `GAP`, one `CON`). It contains **no real research observation, finding, metric, quote, or test result** — only the machinery that records their absence or conflict.

> **No-fabrication statement.** This log contains no real evidence, observation, interview, metric, or clinical outcome. The two worked records in §8 are labelled **ILLUSTRATIVE (synthetic)** end-to-end; they reference synthetic `EVD-SYNTH-*` / `CAP-SYNTH-*` ids, not real sources. Critically, this register is itself an **anti-fabrication instrument**: its entire job is to make *absence* and *disagreement* first-class, visible, and owned, so that a gap is never silently filled with a plausible guess and a contradiction is never silently averaged away (`prd.md` §13 Prompt 06 "Preserve specialist disagreements"; Prompt 12 "Never imply … testing happened"). A convincing report with hidden gaps or buried contradictions is exactly what `prd.md` §11 forbids ("Polished unsupported reports do not pass").

**Scope boundary (what this task is and is not).**
- **TASK-008 (this document) = the *gap* and *contradiction* registers: how a missing-evidence need or a finding-vs-finding conflict is recorded, owned, routed, and resolved.** It owns `GAP`/`CON` identity, the `impact` / `owner` / `next_action` / `resolution_status` fields named in the acceptance criteria, and the links from each record to the evidence, claims, decisions, experiments, and gates it touches.
- **TASK-005 (Source & evidence record schema) = the `EVD` record** that a gap says is *missing* or that two `CON` records *conflict over*. This register references `EVD` ids (`↔ TASK-005`); it does not redefine the evidence record. The `EVD` lifecycle states `contested`, `stale`, `retracted` (TASK-005 §2.3, §7.3) are **triggers** that open records here.
- **TASK-004 (Evidence grading rules) = how a *claim* is graded.** A contradiction is adjudicated *using* those grades ("never average contradictions", TASK-004 §3); this register stores the adjudication outcome, not the grading logic (`↔ TASK-004`).
- **TASK-009 (Decision & experiment registers) = where a resolution *action* lives.** When a gap or contradiction's `next_action` is "run a test" or "make a call", that work is a `DEC`/`EXP` record in TASK-009; this register links to it (`→ TASK-009`) rather than duplicating it.
- **A gap is not a to-do and a contradiction is not a bug.** A gap is a *named evidentiary deficiency tied to a decision or gate*; routine backlog work lives in the task list. A contradiction is a *substantive conflict between admissible findings*, not a typo or a stale link (those are TASK-005 record maintenance).

---

## 1. Purpose and non-negotiables

`prd.md` requires, in multiple places, that the Lab track what it does not know and preserve where it disagrees: §4 ("contradictions, provenance and what remains unknown"), §7 ("identify … contradictions, unmet needs"), §11 (gates require "unknowns and access limitations documented"), §13 Prompt 00 (create a "research gap log" and a "contradiction register"), Prompt 06 ("Preserve specialist disagreements"), and §14 (every handoff carries `contradictions: []` and `unknowns: []`). This document operationalizes those mandates into two enforceable registers.

The registers exist to do five jobs:

1. **Make absence visible.** A decision that depends on evidence we do not have must show a `GAP` record, not an unlabelled assumption. Gaps are surfaced at every gate (`prd.md` §11) so a gate cannot pass by ignoring what is missing.
2. **Make disagreement durable.** When two findings, two specialists, or two sources conflict, the conflict is recorded as a `CON` record and **preserved** — never silently reconciled, averaged, or deleted — until an owner adjudicates it with reasons (`prd.md` §13 Prompt 06).
3. **Assign one accountable owner and a next action.** Every open record has exactly one accountable `owner_role` (per TASK-003) and a concrete `next_action`, so nothing sits unowned. "Interesting but nobody's job" is itself a validation failure (§6).
4. **Route to resolution, not to a guess.** A record's resolution is an *action* — gather evidence, run an experiment, make a scoped decision, or formally accept the limitation — each linked to its downstream `EVD`/`EXP`/`DEC` record (`→ TASK-005/009`). Resolution is never "assume the likely answer".
5. **Link to impact and gates.** Each record states what it *blocks or endangers* (a decision, a concept, a gate, a user-safety assumption) and its severity, so the program can triage by consequence, not recency.

**Four non-negotiable rules, enforced throughout:**

- **G1 — No open record without an accountable owner and a next action.** Every `GAP`/`CON` record in an open state must name exactly one `owner_role` and a non-empty `next_action` with a `next_action_due` date. An open, unowned, or action-less record is **invalid**, not merely stale (§6.1). This mirrors the single-accountable-owner rule of TASK-002/003.
- **G2 — A contradiction is preserved until adjudicated, never averaged or deleted.** A `CON` record may leave `open` only via an explicit, reasoned adjudication (`resolution_status = resolved_*`) or a recorded, owned acceptance (`accepted_limitation`). Splitting the difference between two graded findings, or deleting the weaker one without a reason, is forbidden (`prd.md` §13 Prompt 06; TASK-004 §3 "never average contradictions"). Records are **never hard-deleted** (§2.4), consistent with the `EVD` retention discipline (TASK-005 §2.3).
- **G3 — A gap is never closed by assumption.** A `GAP` record closes only when the missing evidence is actually captured (`EVD` id supplied), an experiment settles it (`EXP` id), or the limitation is *formally and owned-ly accepted* and carried forward as a known unknown (`accepted_limitation`, with a downstream consumer told). "We decided the likely answer is X" with no evidence and no accepted-limitation record is a prohibited closure (§6.2).
- **G4 — Impact and severity are declared, not implied.** Every record carries an `impact` statement (what it blocks/endangers) and a `severity` (`critical/high/medium/low`), with `critical` reserved for anything touching clinical safety, privacy/consent, accessibility, or a non-compensable gate (`prd.md` §9/§11). A `critical` record blocks the related gate until resolved or explicitly risk-accepted by the accountable reviewer (§7.4).

---

## 2. Record identity and lifecycle

Both registers share one lifecycle and linkage model; only the record *type* and a few type-specific fields differ (§3).

### 2.1 Identifiers

| Register | Format | Rule |
|---|---|---|
| Research Gap | `GAP-NNN` | `GAP-` prefix + zero-padded integer, issued sequentially (`GAP-001`, `GAP-002`, …). |
| Contradiction | `CON-NNN` | `CON-` prefix + zero-padded integer, issued sequentially (`CON-001`, `CON-002`, …). |

| Property | Rule |
|---|---|
| **Immutable** | An id is permanent — never reused, renumbered, or reassigned to a different gap/contradiction. |
| **One deficiency = one id** | A `GAP` is *one* missing-evidence need tied to a stated decision/gate; a `CON` is *one* conflict among a named set of findings. A new, distinct deficiency is a new id, even if related. |
| **Merge, don't overwrite** | If two records turn out to be the same deficiency, the later is marked `resolution_status = merged` with `merged_into: <id>`; neither is deleted (§2.4). |
| **Cross-register link** | A gap and a contradiction may reference each other (a contradiction often *creates* a gap: "we cannot tell which is right until we gather X"). Use `related_records` (§3.4). |

### 2.2 Versioning within a record

Each record carries `record_version` (starts `0.1`). Any substantive change — severity change, owner change, status transition, new linked evidence — increments it and appends a one-line `change_log` entry (version/date/role/change). History is append-only.

### 2.3 Lifecycle states (`resolution_status`)

The acceptance criteria require a **resolution status**; this is its controlled vocabulary. States are shared by both registers except where noted.

| `resolution_status` | Meaning | Exit requirement |
|---|---|---|
| `open` | Logged, owned, action assigned; not yet resolved. The only state in which `next_action` is mandatory (G1). | — |
| `investigating` | The `next_action` is in progress (evidence being gathered, experiment running). | Linked `EXP`/evidence-capture work exists (`→ TASK-009/005`). |
| `blocked` | Resolution cannot proceed (access, recruitment, budget, upstream dependency). | A `blocker` note + the blocking record/id named. |
| `resolved_evidence` *(gap)* | Missing evidence was captured; `evidence_filled_by` lists the new `EVD` id(s). | ≥1 real `EVD` id present and verified (TASK-005 §7.2). |
| `resolved_experiment` | An experiment settled the gap/contradiction; `settled_by_exp` names the `EXP`. | `EXP` record exists with a recorded outcome (`→ TASK-009`). |
| `resolved_adjudicated` *(contradiction)* | An owner adjudicated the conflict with written reasons under TASK-004 grading; `winning_finding` + `adjudication_rationale` set. | Rationale cites grades, not a coin-flip or an average (G2). |
| `accepted_limitation` | The deficiency cannot (or need not) be closed now; it is formally accepted and carried forward as a known unknown to a named downstream consumer. | `accepted_by_role` + `carried_forward_to` set; routed to the relevant gate's "unknowns" (`prd.md` §11/§14). |
| `merged` | Duplicate of another record. | `merged_into` id set; no other resolution implied. |
| `reopened` | A previously-resolved record was reopened (e.g., the filling `EVD` was retracted — TASK-005 §7.3). | New `change_log` entry with cause; returns to `open`/`investigating`. |

A record is **never hard-deleted** (§2.4). "Resolved" is a state with evidence behind it, not a disappearance.

### 2.4 No-delete / audit discipline

Both registers are append-only. A record that was mistaken, duplicated, or superseded is transitioned (`merged`, `accepted_limitation`, `reopened`) and retained for audit, exactly as `EVD` records are never deleted (TASK-005 §2.3). This preserves the honesty trail `prd.md` §13 Prompt 12 demands ("Never imply delegated work or testing happened unless artifacts and evidence prove it").

---

## 3. Field catalogue

Both record types share a common core (§3.1, §3.3, §3.4) and add a small type-specific block (§3.2). **M** = mandatory, **C** = conditionally mandatory (rule given), **O** = optional. Every field has an allowed-value rule; `unknown` is permitted only where a value is genuinely not yet knowable and is written as the literal token, never guessed (consistent with TASK-005 S3).

### 3.1 Common identity, classification & severity

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `id` | M | `GAP-NNN` \| `CON-NNN` | §2.1; unique, immutable. |
| `record_type` | M | `gap \| contradiction` | Fixes which §3.2 block applies. |
| `record_version` | M | `X.Y` | §2.2; starts `0.1`. |
| `title` | M | string | Short, neutral human label ("Missing effect-size for flexible-streak vs. strict-streak adherence"). Not a conclusion. |
| `summary` | M | string | Neutral description of *what is missing* (gap) or *what disagrees with what* (contradiction). No inference or preferred answer stated here. |
| `workstream` | M | `WS01`–`WS08` \| `Foundation` | The owning workstream (per TASK-002). |
| `discovered_by_role` | M | role id (`R01`–`R15`, per TASK-003) | Who raised the record. |
| `discovered_date` | M | `YYYY-MM-DD` | When it was logged. Never `unknown`. |
| `severity` | M | `critical \| high \| medium \| low` | G4; `critical` reserved for clinical-safety / privacy / accessibility / non-compensable-gate impact (`prd.md` §9/§11). |
| `impact` | M | string (non-empty) | G4; what this blocks or endangers — the named decision, concept, gate, or user-safety/consent assumption at risk. Empty = validation failure. |

### 3.2 Type-specific block

**If `record_type = gap`:**

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `gap_kind` | M | `missing_evidence \| insufficient_grade \| untransferable \| untested_hypothesis \| access_blocked \| unrecruited` | What *kind* of absence it is (e.g., evidence exists but only at grade C where B is needed → `insufficient_grade`; evidence exists for a different population → `untransferable`, `prd.md` §6 transferability). |
| `evidence_needed` | M | string | The specific evidence/claim that would close the gap, stated testably ("≥1 B-grade comparative result on adherence, midlife-women population"). |
| `blocks_decision` | C | list of `DEC`/`OPP`/`CAP` ids \| `none` | The decision(s)/opportunity/capability the gap gates (`→ TASK-009/041/030`). Required if `severity ∈ {critical, high}`. |
| `evidence_filled_by` | C | list of `EVD-NNN` \| `none` | Real evidence that closed it; mandatory to reach `resolved_evidence` (G3). |
| `settled_by_exp` | C | `EXP-NNN` \| `none` | Experiment that closed it; mandatory to reach `resolved_experiment`. |

**If `record_type = contradiction`:**

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `con_kind` | M | `evidence_vs_evidence \| specialist_disagreement \| evidence_vs_user \| finding_vs_assumption \| within_app_vs_cross_app` | The *shape* of the conflict (e.g., two sources disagree; two specialist audits disagree — `prd.md` §13 Prompt 06; a study disagrees with user reports — `evidence_vs_user`). |
| `conflicting_findings` | M | list of ≥2 `{source_ref, claim, grade}` | The findings in tension — each with its `EVD`/claim id, the claim as stated, and its grade (`↔ TASK-004`). Must have ≥2 entries. |
| `conflict_statement` | M | string | Precisely *why* they cannot both hold as stated. |
| `winning_finding` | C | `source_ref` \| `none` \| `both_conditional` | The adjudicated outcome; mandatory to reach `resolved_adjudicated` (G2). `both_conditional` = both hold under stated, recorded conditions. |
| `adjudication_rationale` | C | string | Reasoned basis citing grades/relevance (`↔ TASK-004`), not an average; mandatory with `winning_finding` (G2). |

### 3.3 Ownership, action & resolution (the acceptance-criteria core)

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `owner_role` | M | role id (`R01`–`R15`) | **Exactly one** accountable role (G1; TASK-003 single-accountable rule). A role, not a named person. |
| `resolution_status` | M | see §2.3 vocabulary | The required resolution status. |
| `next_action` | C | string (non-empty) | G1; the concrete next step. **Mandatory while status ∈ {`open`, `investigating`, `blocked`}.** |
| `next_action_due` | C | `YYYY-MM-DD` | Mandatory whenever `next_action` is. |
| `blocker` | C | string + blocking id | Mandatory when `resolution_status = blocked`; names what/who blocks and the record id if any. |
| `accepted_by_role` | C | role id \| `n/a` | Mandatory to reach `accepted_limitation`; for `critical` records the accepting role must be the relevant reviewer (clinical R14 / privacy R15 / accessibility R13), per §7.4. |
| `carried_forward_to` | C | gate id / consumer record id \| `n/a` | Mandatory with `accepted_limitation`; where the known-unknown is recorded downstream (`prd.md` §11/§14 "unknowns"). |
| `resolution_note` | C | string | Mandatory on any terminal state; one-paragraph record of how it ended and the evidence behind that. |

### 3.4 Linkage & provenance

| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `evidence_refs` | C | list of `EVD-NNN` \| `none` | Evidence this record is *about* (the insufficient/absent/conflicting sources). For a `CON`, these are the sources in `conflicting_findings`. |
| `related_records` | O | list of `GAP`/`CON`/`DEC`/`EXP`/`CAP`/`OPP`/`NEED` ids | Cross-links, incl. the gap↔contradiction pairing (§2.1) and the TASK-005 trigger that opened it. |
| `affected_gate` | C | `Gate 1`–`Gate 5` \| `none` | The `prd.md` §11 quality gate this record bears on; required if `severity ∈ {critical, high}` (§7.4). |
| `trigger` | M | `manual \| evd_contested \| evd_retracted \| evd_stale \| reconciliation \| gate_review \| red_team` | How the record was opened (e.g., auto-opened by an `EVD` becoming `contested`, TASK-005 §2.3; or by Prompt 02/06 reconciliation; or by a red-team challenge, `→ TASK-036`). |
| `change_log` | M | list of `{version, date, role, change}` | Append-only (§2.2). |

---

## 4. Controlled vocabularies (rationale)

### 4.1 Why `gap_kind` and `con_kind` are distinct from `severity`

`severity` is *consequence*; `*_kind` is *nature*. A `missing_evidence` gap can be `low` (a nice-to-have market estimate) or `critical` (no safety evidence for a feature that makes an implicit health claim). Keeping them orthogonal lets the program triage by consequence (G4) while still routing by nature (an `access_blocked` gap goes to the tooling/purchasing decision `→ TASK-038`; an `unrecruited` gap goes to the recruitment pack `→ TASK-026`).

### 4.2 Severity anchors

| `severity` | Anchor |
|---|---|
| `critical` | Touches a non-compensable gate: clinical safety, privacy/consent, accessibility, or an unsupported health claim (`prd.md` §9/§11). Blocks the gate until resolved or formally risk-accepted by the accountable reviewer (§7.4). |
| `high` | Blocks a named decision, opportunity prioritization, or concept-studio input; a gate can pass only by explicitly carrying it forward as an accepted limitation. |
| `medium` | Weakens confidence in a claim but a scoped decision can proceed with the limitation stated. |
| `low` | Noted for completeness; does not block any current decision or gate. |

### 4.3 `trigger` ↔ TASK-005 interlock

`evd_contested`, `evd_retracted`, `evd_stale` are the exact lifecycle events TASK-005 §2.3/§7.3 routes *into* this log. When an `EVD` record becomes `contested`, a `CON` record is opened here automatically; when one becomes `retracted`/`stale` and it backed a claim, a `GAP` (or `CON`) is opened so the dependent decision is re-examined (`→ TASK-009`). This register is the documented destination TASK-005 §10 names.

---

## 5. How records are opened and routed

1. **Anywhere a claim meets a decision or gate.** Specialists, the capability board (Prompt 06), the opportunity synthesis (Prompt 08), and every gate review (`prd.md` §11) must log any evidentiary deficiency or conflict they encounter rather than resolving it informally.
2. **Reconciliation preserves, it does not erase.** Prompt 02 ("reconcile contradictions") and Prompt 06 ("preserve specialist disagreements") feed `CON` records; reconciliation *adjudicates* them (`resolved_adjudicated`) with reasons — it never deletes the losing finding (G2).
3. **Red-team output lands here.** Capability red-team challenges (`→ TASK-036`) that find an unsupported assumption open a `GAP` (`finding_vs_assumption` / `untested_hypothesis`).
4. **Gate reviews read the log.** At each gate, the Program Director lists open `critical`/`high` records in the gate verdict (`prd.md` §11: "missing evidence, remediation and decision date"). An open `critical` record is a gate blocker (§7.4).
5. **The log is versioned and handed off.** Each workstream handoff (`prd.md` §14) populates its `contradictions: []` and `unknowns: []` arrays *from* this log by id, so the two never drift apart.

---

## 6. Forbidden values & validation failures

These make a record **invalid** (rejected at entry/transition), not merely low-priority. They are the structural anti-fabrication and anti-burying guards.

### 6.1 Structural (ownership & action)
1. **Open record with no `owner_role`, or more than one** (violates G1 / single-accountable). → reject.
2. **Open/investigating/blocked record with empty `next_action` or missing `next_action_due`** (violates G1). → reject.
3. **`blocked` without a `blocker`** naming what/who blocks. → reject.
4. **Empty `impact`** (violates G4). → reject.
5. **`contradiction` with fewer than two `conflicting_findings`** (a conflict needs ≥2 sides). → reject.

### 6.2 Resolution integrity (the core anti-fabrication guards)
6. **Gap closed by assumption** — `resolution_status = resolved_*` with no `evidence_filled_by` / `settled_by_exp`, i.e., "we concluded the likely answer" (violates G3). → reject. The only no-new-evidence exit is `accepted_limitation`, which must be owned and carried forward.
7. **Contradiction averaged or coin-flipped** — `resolved_adjudicated` whose `adjudication_rationale` splits the difference between graded findings, or picks one with no grade-based reason (violates G2; TASK-004 §3). → reject.
8. **Losing finding deleted** — a `CON` resolved by removing the weaker `EVD` record rather than transitioning it (violates G2 / no-delete §2.4). → reject.
9. **`accepted_limitation` with no `accepted_by_role` or no `carried_forward_to`** — a limitation accepted but not owned or not propagated downstream (violates G3 / `prd.md` §11 unknowns). → reject; for `critical`, additionally reject unless accepted by the correct reviewer (§7.4).
10. **Fabricated resolution evidence** — a resolution citing an `EVD`/`EXP` id that does not exist or is not `verified` (TASK-005 §7.2), or inventing a result to close the record (`prd.md` §4 never-fabricate; §13 Prompt 12). → escalate; gravest violation.

### 6.3 Severity & gate integrity
11. **Under-graded safety deficiency** — a record touching clinical safety / privacy / accessibility graded below `critical` (violates G4). → reject.
12. **Gate passed over an open `critical`** — a gate marked `pass` while an open `critical` record names that `affected_gate`, without a recorded §7.4 risk-acceptance. → reject the gate, not the record.

---

## 7. Validation, triage, and gate interaction

### 7.1 Entry validation (must pass before `resolution_status: open` is saved)
A record passes entry validation iff:
1. `id` well-formed, unique, immutable; `record_type` set and its §3.2 block present.
2. `title`, `summary`, `workstream`, `discovered_by_role`, `discovered_date`, `severity`, `impact` all present (§3.1).
3. Exactly one `owner_role`; `next_action` + `next_action_due` present (G1).
4. Type rules: a `gap` has `gap_kind` + `evidence_needed`; a `contradiction` has `con_kind` + ≥2 `conflicting_findings` + `conflict_statement`.
5. Severity anchored per §4.2; `critical` only where §4.2 allows; safety deficiencies not under-graded (§6.3.11).
6. `trigger` set; `affected_gate`/`blocks_decision` present if `severity ∈ {critical, high}`.
7. No §6 forbidden value present; any `unknown` is the literal token, never a guess.

### 7.2 Transition validation (changing `resolution_status`)
Each terminal transition must satisfy its §2.3 exit requirement and carry a `resolution_note`: `resolved_evidence` needs verified `evidence_filled_by`; `resolved_experiment` needs a recorded `EXP`; `resolved_adjudicated` needs `winning_finding` + grade-based `adjudication_rationale`; `accepted_limitation` needs `accepted_by_role` + `carried_forward_to`; `merged` needs `merged_into`.

### 7.3 Triage cadence
The Program Director reviews all `open`/`investigating` records at each gate and at the weekly dashboard refresh (`prd.md` §13 Prompt 00 "dashboard"), ordering by `severity` then `next_action_due`. `blocked` records are escalated to the blocking owner.

### 7.4 Gate interaction (binds to `prd.md` §11)
- An **open `critical`** record naming an `affected_gate` **blocks** that gate. It clears only by resolution or by a recorded risk-acceptance from the **accountable reviewer** for that risk (clinical R14, privacy R15, accessibility R13) — never by the implementing role self-accepting (separation of duties, TASK-003/005 §6.4).
- An **open `high`** record does not hard-block but must appear in the gate verdict's "missing evidence / unknowns" with a remediation owner and date (`prd.md` §11).
- The gate verdict (`pass / conditional pass / fail`) enumerates every open `critical`/`high` record by id; "no open items" must be *shown from the log*, not asserted.

---

## 8. Validated sample records (ILLUSTRATIVE — synthetic)

The two records below are **entirely synthetic** and included solely to demonstrate that the schema validates and that a gap and a contradiction each round-trip through entry and transition rules. They assert **no real finding about any real app, study, or person**; all `EVD-SYNTH-*` / `CAP-SYNTH-*` ids are fictitious and carry no real evidence.

### 8.1 Sample `GAP-001` — a missing-evidence gap (synthetic)

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates schema validity only. No real evidence.
id: GAP-001
record_type: gap
record_version: 0.1
title: "[SYNTHETIC] No transferable adherence evidence for flexible vs. strict streak framing in midlife women"
summary: "[SYNTHETIC] The capability record for streak framing cites behavior-change evidence drawn from a general-adult population; no admissible evidence addresses whether a flexible (weekly-consistency) streak improves meaningful repeated action versus a strict consecutive-day streak specifically for midlife women. Neutral statement of absence only; no preferred answer implied."
workstream: WS03
discovered_by_role: R02            # Behavioral scientist (per TASK-003)
discovered_date: 2026-11-22
severity: high
impact: "[SYNTHETIC] Blocks the Adopt/Adapt decision on the streak-framing capability and its use as a WS03 input to the Opportunity Atlas; without it, any adherence claim would rest on an untransferable population."

# gap-specific (§3.2)
gap_kind: untransferable
evidence_needed: "[SYNTHETIC] >=1 B-grade comparative result on meaningful repeated action (not app opens) for flexible vs. strict streak framing, in a midlife-women or closely transferable population."
blocks_decision: [DEC-SYNTH-003, CAP-SYNTH-012]
evidence_filled_by: none
settled_by_exp: none

# ownership, action & resolution (§3.3)
owner_role: R02
resolution_status: open
next_action: "[SYNTHETIC] Run the behavioral-literature search protocol for streak/consistency interventions filtered to midlife/perimenopausal populations; if none admissible, draft an EXP to test it in validation."
next_action_due: 2026-12-06
accepted_by_role: n/a
carried_forward_to: n/a
resolution_note: n/a

# linkage & provenance (§3.4)
evidence_refs: [EVD-SYNTH-041]     # the untransferable (general-adult) source
related_records: [CON-001]          # paired contradiction below
affected_gate: Gate 1
trigger: reconciliation
change_log:
  - {version: "0.1", date: "2026-11-22", role: "R02", change: "Initial synthetic gap logged during WS03 reconciliation."}
```

**Validation trace (why `GAP-001` passes §7.1 entry validation):**
1. `id` = `GAP-001`, well-formed/unique; `record_type: gap` with its §3.2 block present. ✔
2. All §3.1 common fields present (`title`, `summary`, `workstream`, `discovered_by_role`, `discovered_date`, `severity`, `impact`). ✔
3. Exactly one `owner_role` (`R02`); `next_action` + `next_action_due: 2026-12-06` present (G1). ✔
4. Gap type rules: `gap_kind: untransferable` + testable `evidence_needed`. ✔
5. `severity: high` is anchored (§4.2: blocks a named decision) and is **not** a safety deficiency under-graded (no clinical/privacy/accessibility surface), so §6.3.11 does not fire. ✔
6. `severity = high` ⇒ `blocks_decision` and `affected_gate` present (both supplied). `trigger: reconciliation` set. ✔
7. No §6 forbidden value: open record is owned + actioned (not §6.1), not closed by assumption (`resolved_*` not used; §6.2.6 n/a), `impact` non-empty (§6.1.4). ✔

Correctly held at `open`: to reach `resolved_evidence` it must supply a verified `evidence_filled_by`; to reach `accepted_limitation` it must name `accepted_by_role` + `carried_forward_to` (G3).

### 8.2 Sample `CON-001` — a contradiction between findings (synthetic)

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates schema validity only. No real evidence.
id: CON-001
record_type: contradiction
record_version: 0.1
title: "[SYNTHETIC] Study evidence and sampled user reports disagree on whether streak pressure aids or harms return-after-miss"
summary: "[SYNTHETIC] A synthetic scientific source reports that streak mechanics increase short-term adherence; synthetic sampled app-store reviews report that breaking a streak caused users to abandon the app. The two cannot both hold as stated for the return-after-miss behavior. Both sides preserved verbatim; no reconciliation yet."
workstream: WS03
discovered_by_role: R07            # UX researcher
discovered_date: 2026-11-22
severity: high
impact: "[SYNTHETIC] Endangers the behavioral-logic assumption behind any streak-based concept; an unadjudicated conflict here would let a concept studio inherit a contested premise as if settled."

# contradiction-specific (§3.2)
con_kind: evidence_vs_user
conflicting_findings:
  - {source_ref: EVD-SYNTH-041, claim: "[SYNTHETIC] Streak mechanics increase short-term adherence.", grade: "C"}
  - {source_ref: EVD-SYNTH-057, claim: "[SYNTHETIC] Breaking a streak triggered abandonment and guilt.", grade: "C"}
conflict_statement: "[SYNTHETIC] One finding treats the streak as net-positive for continuation; the other reports it as the proximate cause of discontinuation after a miss. They describe the same mechanism with opposite directional effect on return-after-miss."
winning_finding: none              # not yet adjudicated — preserved, not averaged (G2)
adjudication_rationale: none

# ownership, action & resolution (§3.3)
owner_role: R02                    # behavioral scientist accountable for adjudication
resolution_status: open
next_action: "[SYNTHETIC] Do not average. Draft an EXP comparing strict vs. flexible streak framing on observed return-after-miss and perceived autonomy; adjudicate only on the result's grade."
next_action_due: 2026-12-13
accepted_by_role: n/a
carried_forward_to: n/a
resolution_note: n/a

# linkage & provenance (§3.4)
evidence_refs: [EVD-SYNTH-041, EVD-SYNTH-057]
related_records: [GAP-001, EXP-SYNTH-002]
affected_gate: Gate 1
trigger: reconciliation
change_log:
  - {version: "0.1", date: "2026-11-22", role: "R07", change: "Initial synthetic contradiction logged; both findings preserved pending adjudication."}
```

**Validation trace (why `CON-001` passes §7.1 entry validation):**
1. `id` = `CON-001`, well-formed/unique; `record_type: contradiction` with its §3.2 block present. ✔
2. All §3.1 common fields present, including a non-empty `impact` (§6.1.4). ✔
3. Exactly one `owner_role` (`R02`, the role accountable for adjudication); `next_action` + `next_action_due` present (G1). ✔
4. Contradiction type rules: `con_kind: evidence_vs_user`, **two** `conflicting_findings` (satisfies the ≥2 rule, §6.1.5), each with `source_ref` + `claim` + `grade`, and a `conflict_statement`. ✔
5. `severity: high` anchored (§4.2); `affected_gate` + (implicitly, via `related_records`) decision linkage present; `trigger: reconciliation` set. ✔
6. Not yet resolved: `winning_finding: none` and `adjudication_rationale: none` — the conflict is **preserved, not averaged** (G2). The `next_action` explicitly forbids averaging and routes to an experiment. No §6.2.7/6.2.8 violation because no resolution is asserted. ✔
7. No §6 forbidden value present; no fabricated resolution evidence (no `resolved_*` state claimed). ✔

Correctly held at `open`: it may leave only via `resolved_experiment` (settled by `EXP-SYNTH-002` once that has a recorded outcome) or `resolved_adjudicated` (with a grade-based `adjudication_rationale`, never an average) — demonstrating G2.

### 8.3 What the two samples jointly demonstrate
- **All six acceptance-criteria elements are present and linked:** *missing evidence* (`GAP-001`), *contradictory findings* (`CON-001.conflicting_findings`), *impact* (`impact` on both), *owner* (`owner_role`, exactly one each), *next action* (`next_action` + due date on both), and *resolution status* (`resolution_status: open` with a defined exit path).
- **Records are linked** both to evidence (`evidence_refs`), to decisions/experiments (`blocks_decision`, `related_records → DEC/EXP/CAP`), to a gate (`affected_gate`), and **to each other** (`GAP-001 ↔ CON-001`) — demonstrating the "linked records" requirement.
- **No fabrication:** every id is `*-SYNTH-*`, every string is tagged `[SYNTHETIC]`, no real finding is asserted, and the contradiction is left unresolved rather than invented-resolved.

---

## 9. Dashboard & reporting views (derived, read-only)

The registers drive three standard views (no new data; all computed from the fields above), feeding the `prd.md` §13 Prompt 00 dashboard:

| View | Definition | Consumer |
|---|---|---|
| **Gate-blocker board** | All `open` `critical` records grouped by `affected_gate`. | Gate reviews (§7.4). |
| **Open-deficiency triage** | `open`/`investigating` records sorted by `severity` then `next_action_due`; `blocked` flagged. | Program Director weekly triage (§7.3). |
| **Known-unknowns ledger** | All `accepted_limitation` records with `carried_forward_to`. | Every downstream handoff's `unknowns: []` (`prd.md` §14). |

These views are generated, never hand-maintained, so a gap cannot be "resolved" by dropping it from a slide.

---

## 10. Governance, dependencies, and change control

- **Custodian:** Program Director owns both registers; schema changes are versioned in the change log below. Per-record accountability sits with the `owner_role` (a role, per TASK-003), never a named individual.
- **Where it is applied:** the two registers correspond to the `prd.md` §13 Prompt 00 "research gap log" and "contradiction register", and supply the `contradictions: []` / `unknowns: []` arrays of every §14 handoff.
- **Dependencies:**
  - `↔ TASK-004` Evidence grading rules — supplies the grades used to adjudicate a `CON` ("never average contradictions"); this register stores the adjudication, not the grading logic.
  - `↔ TASK-005` Source & evidence record schema — supplies the `EVD` ids referenced here and routes `contested`/`stale`/`retracted` events into this log (§4.3; TASK-005 §10).
  - `→ TASK-009` Decision & experiment registers — destination for a record whose `next_action` is a decision (`DEC`) or test (`EXP`); terminal states `resolved_experiment` link back to it.
  - `→ TASK-036` Capability red-team challenge protocol — a source of records (`trigger = red_team`).
  - `→ TASK-026 / TASK-038` Recruitment pack & tool-purchasing sheet — destinations for `unrecruited` / `access_blocked` gaps.
  - `← TASK-002 / TASK-003` Workstream registry & responsibility matrix — supply `workstream`, `owner_role`, `discovered_by_role`, and the separation-of-duties for §7.4 risk-acceptance.
  - `← TASK-001` Success-metrics spec — a gap may block an outcome/safety metric's data source.
- **Open unknowns (honestly recorded, not defects):**
  - Whether `GAP`/`CON` records live as native tables in HerRays OS/Notion or as linked views off the Evidence Library — deferred to the TASK-038 tooling decision; this schema only requires stable ids and the fields above, not a specific backend.
  - Exact SLA for `critical` next-action due dates (proposed default: due within 5 working days of logging) — to be confirmed by the Program Director against the §12 schedule.
  - Whether `specialist_disagreement` `CON` records should additionally carry each dissenting role's name-of-record for the reconciliation output (`→ TASK-023`) — proposed yes; to be aligned with the cross-specialist reconciliation template.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-22 | Initial schema: `GAP`/`CON` identity & shared lifecycle, four non-negotiables (owner+action, preserve-not-average, no-close-by-assumption, declared-impact), common + type-specific field catalogue, controlled vocabularies, open/route rules, forbidden-value & validation rules, gate interaction, two validated synthetic sample records (one gap, one contradiction) with traces, derived dashboard views, dependencies. | Program Director |
