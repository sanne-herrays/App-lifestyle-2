# Adopt / Adapt / Invent / Reject / Defer — Capability Decision Form

**Deliverable:** TASK-035 · **Workstream:** Capability Extraction (WS02 → Capability Review, `prd.md` §5 Phase 4 / §13 Prompt 07)
**Version:** 0.1 · **Status:** Proposed — form defined, not yet used to record any decision
**Owner role:** Head of Product (R01) · **Form steward:** Program Director (governance hat)
**Mandatory reviewers for safety-flagged decisions:** Clinical reviewer (R14) · Privacy/regulatory reviewer (R15) · QA/accessibility specialist (R13)
**Source basis:** `prd.md` §4 (Decision Log fields + `DEC-001`), §5 Phase 4 ("First apply mandatory clinical, privacy, ethics, accessibility and unsupported-claim gates … Record **Adopt / Adapt / Invent / Reject / Defer** and rationale, confidence, dependencies, smallest test and owner. Do not turn this into a feature shopping list."), §9 ("Clinical safety, privacy and accessibility are mandatory gates, not compensable weighted scores"), §11 ("Polished unsupported reports do not pass"), §13 Prompt 06 ("Preserve specialist disagreements"), Prompt 07 ("Independently challenge high-priority capabilities … record Adopt/Adapt/Invent/Reject/Defer with rationale, confidence, dependencies and smallest useful experiment"), §14 ("A deliverable is **not complete** if its claims lack traceable sources").

---

## 0. What this document is (and is not)

This is the **intake form and mandatory-field gate** for creating one `DEC` (Decision) record. It is the human-facing, enforceable workflow that turns a reviewed capability into a single, owned, reasoned **Adopt / Adapt / Invent / Reject / Defer** verdict — and that **refuses to let that verdict be approved** until the fields the PRD requires (rationale, linked evidence, alternatives, reviewer, risks, follow-up experiment) are present and valid.

| This form **owns** | This form **does not own** (and must not duplicate) |
|---|---|
| The intake fields, their requirement logic, and the per-verdict conditional-mandatory rules (§2, §4). | The `DEC`/`EXP` **record schema**, lifecycle vocabulary, and two-way coupling — `↔ TASK-009` (`decision-experiment-registers.md`). This form writes *into* that record. |
| The **submission → review → approval gate** that blocks approval on missing mandatory fields (§3, §5). | The **safety gate** itself (clinical/privacy/manipulation/accessibility/unsupported-claim screen) — `→ TASK-033` (`capability-safety-gate-checklist.md`). This form *consumes* its verdict as a precondition. |
| The copy-ready blank form + worked synthetic submissions (§8, §9). | The **weighted 1–5 value scorecard** and its 0–100 output — `→ TASK-034` (`prototype/src/scorecard/`). This form *attaches* that score as non-binding supporting input. |
| The required-field enforcement that makes "we chose X" traceable. | The **evidence grades** (A–D) — `↔ TASK-004`; the **adversarial red-team** challenge — `→ TASK-036`; the **gap/contradiction** records an unresolved decision opens — `↔ TASK-008`. |

Scope discipline, per the workflow rules: this is a **standalone deliverable**. It defines *how a decision is captured and gated*; it records **no actual decision** about any real capability.

---

## 1. Design intent — why a form, and why a gate

The PRD's Capability Review (§5 Phase 4, Prompt 07) is the one place where investigation becomes commitment. Two failure modes it explicitly guards against:

1. **The feature shopping list** — "Do not turn this into a feature shopping list" (§5 Phase 4). A decision recorded as a bare verdict ("Adopt streaks") with no rationale, no evidence, no alternatives weighed, and no test is indistinguishable from a wish. The form's job is to make that un-recordable.
2. **The polished unsupported report** — "Polished unsupported reports do not pass" (§11); "not complete if its claims lack traceable sources" (§14). A confident, well-written Adopt with nothing linked underneath is exactly what the gate must reject.

So the form is built as a **gate, not a textbox**. It is intentionally harder to approve a decision than to draft one. The six load-bearing fields named in this task's acceptance criteria — **rationale, linked evidence, alternatives, reviewer, risks, follow-up experiment** — are each wired to a hard stop (§5) that prevents the transition to `approved` when the field is missing *for the verdict chosen*. Different verdicts demand different proof; the form models that (§4) rather than demanding every field for every decision (which would invite box-ticking).

**Order of operations is fixed (G0 below):** gates first, value second, verdict last. A capability may not even enter value scoring until the TASK-033 safety gate returns `pass` on all five domains (`prd.md` §5 Phase 4: "First apply mandatory … gates … Then assess"). This form enforces that ordering at intake.

---

## 2. The form — field dictionary

Every submission creates **one** `DEC` record (one verdict on one question). Fields below are the intake surface; their storage types live in TASK-009. Requirement markers: **M** = always mandatory to *submit*; **C** = conditionally mandatory (the condition is stated and is enforced at the relevant gate in §3/§5); **O** = optional.

### 2.1 Section A — Identity & subject (what is being decided)

| # | Field | Req | Input | Rule |
|---|---|---|---|---|
| A1 | `title` | M | short string | Neutral statement of the **question**, not the answer. ✔ "Streak-framing capability: Adopt / Adapt / Invent / Reject / Defer?" ✗ "Adopt streaks." (A verdict-as-title is a §6 failure.) |
| A2 | `subject_ref` | M | `CAP-NNN` (or `OPP-NNN`) | The capability (or opportunity) record this decides. Must resolve to an existing record (`↔ TASK-030`). One subject per form. |
| A3 | `decision_owner` | M | role id `R01`–`R15` | **Exactly one** accountable role (TASK-003). A role, not a person. Blank or multi-owner ⇒ cannot submit. |
| A4 | `workstream` / `created_by_role` / `created_date` | M | provenance | Who opened the form and when (append-only; `↔ TASK-009 §2.2`). |

### 2.2 Section B — The verdict

| # | Field | Req | Input | Rule |
|---|---|---|---|---|
| B1 | `decision_type` | M | `adopt \| adapt \| invent \| reject \| defer` | The five-way PRD verdict (`prd.md` §4 / §5 Phase 4 / §13 Prompt 07). May be **provisional** while the record is `proposed`; must be **set** to reach `approved`/`deferred`. Each verdict triggers its own conditional-mandatory set (§4). |
| B2 | `verdict_summary` | M | one sentence | Plain-language statement of the chosen action (e.g., "Adapt the consecutive-day counter into flexible weekly consistency with non-punitive recovery"). Distinct from `rationale` (B3 = *why*, this = *what*). |

### 2.3 Section C — The mandatory proof (the six acceptance-criteria fields)

These are the fields the acceptance criteria name. Each is **C**, with the enforcement condition stated; §5 turns each condition into a hard stop.

| # | Field | Req | Input | Mandatory when … |
|---|---|---|---|---|
| C1 | **`rationale`** | C | string, non-empty | The reasoned basis. Must **cite the evidence/experiment it rests on**, not assert a preference ("users will love it" is a §6 failure). → Mandatory to reach `approved` / `deferred` / `reversed` **for every verdict** (`prd.md` §5 Phase 4, §14). |
| C2 | **`evidence_for`** (+ `depends_on_exp`) | C | list of `EVD`/`CAP`/`NEED` ids, and/or `EXP-NNN` | The **linked evidence** the decision rests on (D1, `↔ TASK-009`). → ≥1 linked `evidence_for` **or** ≥1 **concluded** `depends_on_exp` required to reach `approved` (except `defer`, which may approve on an explicit evidence *gap* — see §4). `none` is only admissible for a `defer` whose whole point is "insufficient evidence yet." |
| C3 | **`alternatives_considered`** | C | list of `{option, why_not}` | The options weighed and why they lost — including, for `invent`, the one unconventional alternative (`prd.md` §5 Phase 3 streak example: "three alternatives plus one unconventional alternative"; restated in §13 Prompt 06). → Mandatory for **`adapt`**, **`invent`** (≥2 incl. one unconventional), and **`reject`** (≥1: "what we considered instead of rejecting outright"). Recommended for `adopt`. |
| C4 | **`reviewer_role`** | C | role id \| `n/a` | The approving reviewer, **distinct from `decision_owner`** where a safety flag applies (§5 G4). → Mandatory and non-self for any decision whose `safety_flag ≠ none` (clinical R14 / privacy R15 / accessibility R13); mandatory (may be the review board chair) for any decision reaching `approved`. |
| C5 | **`risks`** | C | list of `{risk, severity, mitigation_or_accepted}` | Behavioral, clinical, privacy, autonomy, burden, over-tracking and dependency risks (`prd.md` §6 "risks of guilt, compulsion, burden and excessive tracking"). For `reject`, the risk *is* the reason. → Mandatory for **every verdict except a `defer` that is purely "decide later"** (and even then, the risk of deferring is recommended). Must name the red-team basis where one exists (`→ TASK-036`). |
| C6 | **`follow_up_exp`** | C | list of `EXP-NNN` \| `none` | The **"smallest useful experiment"** the decision commits to (`prd.md` §5 Phase 4, §13 Prompt 07). → Mandatory (≥1 real `EXP` id, pre-registered per TASK-009 E1) for **`adopt` / `adapt` / `invent` whenever `confidence ∈ {C, D}`**. `none` is admissible only for `confidence ∈ {A, B}` with a written justification, or for `reject`. |

### 2.4 Section D — Grading, safety & dependencies

| # | Field | Req | Input | Rule |
|---|---|---|---|---|
| D1 | `confidence` | C | `A \| B \| C \| D` | Evidence grade of the **basis** (`↔ TASK-004`). State **which axis** it refers to (efficacy vs. relevance vs. experience) — a high usability grade does not license a high health-impact confidence (`prd.md` §4). Mandatory to reach `approved`. |
| D2 | `safety_flag` | M | `none \| clinical \| privacy \| accessibility \| unsupported_claim` | Whether the decision touches a **non-compensable gate** (`prd.md` §9/§11). Drives C4/C5 and the §5 G4 reviewer rule. Defaulting to `none` without having run the TASK-033 screen is a §6 failure. |
| D3 | `safety_gate_ref` | M | `pass \| conditional \| not_run` + link | The TASK-033 gate outcome for this capability. **`pass` on all five domains is a precondition for any value-based `adopt`/`adapt`** (G0). A gate `reject` forces `decision_type: reject` or `redesign`; a gate `investigate` blocks `approved` and opens a `GAP` (`↔ TASK-008`). |
| D4 | `value_score_ref` | O | 0–100 + link | The TASK-034 weighted scorecard result, attached as **non-binding supporting input**. Never overrides a gate (`prd.md` §9); never substitutes for rationale. A high score with empty `rationale`/`evidence_for` still fails (§5). |
| D5 | `dependencies` | O | list of ids | Capabilities/decisions this one depends on (`prd.md` §5 Phase 4 "dependencies"). |
| D6 | `revisit_trigger` | C | condition + date | **Mandatory for `defer`** (`prd.md` fifth verdict): the event/date that reopens the decision. A `defer` with no trigger is an indefinite limbo, not a decision (§6). |
| D7 | `dissent_note` | C | list of `{role, position}` | Preserved specialist disagreement (`prd.md` §13 Prompt 06 "Preserve specialist disagreements"). → Mandatory to record where the review board was **not unanimous**; the verdict may still carry, but the dissent is retained, not erased. |

### 2.5 Section E — Audit trail (auto / append-only)

`status` (TASK-009 §2.3 vocabulary), `record_version`, `change_log[]`, `decided_date`, `reversal_rationale` (for `reversed`). Append-only; no hard delete (`↔ TASK-009 D2/E3`).

---

## 3. The gate — submission & approval workflow

The form has four checkpoints. Each checkpoint has an explicit **pass condition**; failing it holds the record at its current state and surfaces the exact missing field(s). This is the "prevent approval without mandatory fields" machinery, made concrete.

```
            (draft)                 (board / reviewers)             (owner + reviewer)
  ┌────────┐  G1   ┌───────────┐  G2   ┌───────────┐  G3/G4  ┌──────────┐
  │ proposed│─────▶│ submitted │─────▶ │ in_review │────────▶│ approved │
  └────────┘ submit└───────────┘ accept└───────────┘ ratify └──────────┘
       │ G0 precondition                      │ fail → back to proposed │ reject → stays in_review
       ▼                                       ▼                         ▼
   gate first                            request-changes          deferred / reject (both are
   (TASK-033 pass)                       (missing field)          *decisions*, still need C1/C4/…)
```

**G0 — Entry precondition (gates before value, `prd.md` §5 Phase 4):**
The form will not open a value-based Adopt/Adapt path unless `safety_gate_ref` resolves. If the TASK-033 screen is `not_run`, the only admissible verdicts are `defer` (pending the screen) or `reject`. If any safety domain is `reject`, value scoring is inadmissible and the verdict is constrained to `reject`/`redesign`.

**G1 — Submit (proposed → submitted). Pass condition:**
All **M** fields present and well-formed: `title` (a question, not a verdict), `subject_ref` resolves, exactly one `decision_owner`, `decision_type` chosen (may be provisional), `verdict_summary`, `safety_flag`, `safety_gate_ref`. → If any M field is blank, submission is blocked with the field named.

**G2 — Accept for review (submitted → in_review). Pass condition:**
The **verdict-conditional C fields** for the chosen `decision_type` are present (per the §4 matrix) at least in draft: e.g., an `adapt` must carry `alternatives_considered`; an `invent` must carry the unconventional option; a `defer` must carry `revisit_trigger`. → Missing a verdict-required field returns the record to `proposed` with a request-changes note.

**G3 — Ratify (in_review → approved). Pass condition = F1 fully satisfied (the hard gate):**
A decision reaches `approved` **only if all of**:
- `rationale` (C1) non-empty and cites its basis;
- `evidence_for` ≥1 **or** a concluded `depends_on_exp` (C2) — except a `defer` on an explicit gap;
- `alternatives_considered` satisfies the §4 count for the verdict (C3);
- `reviewer_role` present and, if `safety_flag ≠ none`, **distinct from `decision_owner`** and equal to the accountable reviewer for that risk (C4 / G4);
- `risks` present per the §4 matrix (C5);
- `follow_up_exp` ≥1 real pre-registered `EXP` when `confidence ∈ {C,D}` for adopt/adapt/invent (C6);
- `confidence` grade set with its axis named (D1);
- no §6 forbidden value present; any open safety-gate `investigate` resolved or an accepted-limitation `GAP` carried.

→ If any clause fails, the transition is refused and the record **stays `in_review`** with every failing clause listed. Approval is never partial.

**G4 — Separation of duties (safety overlay):**
For `safety_flag ∈ {clinical, privacy, accessibility, unsupported_claim}`, the implementing role **never self-approves** (`↔ TASK-009 §7.4`, TASK-003 RACI). `reviewer_role` must be R14 (clinical), R15 (privacy/regulatory), or R13 (accessibility) respectively, and must differ from `decision_owner`. A health-efficacy claim additionally requires the R14 co-sign the unsupported-claims gate (TASK-033 §4.5) demands.

**`deferred` and `reject` are decisions, not escapes.** Both require `rationale` (C1), `reviewer_role` (C4), and — for `defer` — `revisit_trigger` (D6). You cannot dodge the gate by choosing "defer"; you can only choose to decide-to-wait, with reasons.

---

## 4. Per-verdict required-field matrix

Different verdicts carry different burdens of proof. ✔ = mandatory to reach `approved`; ◐ = recommended; — = not required. (This is the enforcement condition behind each C field in §2.3.)

| Field | `adopt` | `adapt` | `invent` | `reject` | `defer` |
|---|---|---|---|---|---|
| `rationale` (C1) | ✔ | ✔ | ✔ | ✔ | ✔ |
| `evidence_for` / concluded `depends_on_exp` (C2) | ✔ | ✔ | ✔ (for the *problem*; invention itself is graded D) | ✔ (basis for rejecting) | ◐ (or an explicit evidence **gap**) |
| `alternatives_considered` (C3) | ◐ | ✔ (≥1: the thing you changed *from*) | ✔ (≥2 incl. **one unconventional**, `prd.md` §5 Phase 3) | ✔ (≥1: what you weighed instead) | ◐ |
| `reviewer_role` (C4) | ✔ | ✔ | ✔ | ✔ | ✔ |
| `risks` (C5) | ✔ | ✔ | ✔ | ✔ (the risk *is* the reason) | ◐ (risk of waiting) |
| `follow_up_exp` (C6) | ✔ if `confidence ∈ {C,D}` | ✔ (test the adaptation) | ✔ (test the invention) | — | ✔ if revisit depends on a test |
| `confidence` + axis (D1) | ✔ | ✔ | ✔ | ✔ | ✔ |
| `revisit_trigger` (D6) | — | — | — | — | ✔ |
| `safety_gate_ref = pass` (D3/G0) | ✔ | ✔ | ✔ | n/a (reject needs no value gate) | n/a |

Reading the matrix: an **`adopt`** is the *highest-proof* verdict for a competitor feature — it must show gate-pass, linked evidence, risks, a reviewer, and (unless confidence is A/B) a confirming experiment, because adopting someone else's mechanism wholesale is the PRD's single biggest "feature shopping list" risk. An **`invent`** is explicitly allowed to rest on low (grade-D) confidence for the invention itself, *provided* it carries alternatives (incl. the unconventional one) and a committed experiment — the PRD wants invention, but tested invention. A **`defer`** is cheap to reach but must still name why and when it reopens.

---

## 5. Non-negotiables (the form's spine)

These four rules are what make the form an **anti-fabrication instrument** rather than a textbox. Each maps to a §6 validation failure.

- **F1 — No approval without the mandatory set.** The G3 transition is refused unless every verdict-required C field (§4) is present and valid. "We chose X" with an empty `rationale` or no `evidence_for` is **invalid**, not merely weak (`prd.md` §11, §14). The gate lists the missing fields; it does not approve-with-warnings.
- **F2 — Gates before value, always.** Value scoring (TASK-034) and the `value_score_ref` may never be the basis of an `approved` decision while any TASK-033 safety domain is unresolved, and may **never compensate** a gate `reject` (`prd.md` §9: "mandatory gates, not compensable weighted scores"). G0 enforces the ordering; F2 enforces the non-compensation.
- **F3 — The implementer never self-approves a safety decision.** Any `safety_flag ≠ none` forces a reviewer who is both the accountable role for that risk *and* not the owner (G4; TASK-003). A clinical-efficacy claim needs the R14 co-sign.
- **F4 — Decisions are reversible-with-cause, never deleted; disagreement is preserved.** A reversed decision becomes `reversed` with `reversal_rationale` (`↔ TASK-009 D2/E3`), never an in-place edit or a delete. Non-unanimous reviews record `dissent_note` (`prd.md` Prompt 06). Recording a `reject`/`defer` as if the question was never raised (by deleting the draft) is verdict laundering (§6).

---

## 6. Forbidden submissions — validation-failure catalogue

Each is an automatic hold (the form will not advance the record); the responsible role and remedy are named. "→ reject" means *reject the submission*, not the capability.

1. **Verdict-as-title** — `title` states the answer ("Adopt streaks") instead of the question. → hold at G1; rewrite as a question.
2. **Approval with empty `rationale`** (F1, `prd.md` §14). → hold at G3.
3. **Approval with no `evidence_for` and no concluded `depends_on_exp`** for a non-`defer` verdict (D1 basis). → hold at G3.
4. **Preference asserted as rationale** — `rationale` cites no evidence/experiment and reads as taste ("users will love it", "it feels premium"). → hold at G3; cite the basis or downgrade the verdict.
5. **`adapt`/`invent` with no `alternatives_considered`** (C3 / §4). → hold at G2.
6. **`invent` with no unconventional alternative** (`prd.md` §5 Phase 3 "one unconventional alternative"). → hold at G2.
7. **Safety-flagged decision approved by its own owner or with no reviewer** (F3 / G4, separation of duties). → hold at G3.
8. **Value score used to override a gate** — `value_score_ref` present and high while `safety_gate_ref` is `reject`/`investigate`/`not_run` and the verdict is `adopt`/`adapt` (F2, `prd.md` §9). → hold at G0/G3.
9. **`adopt`/`adapt`/`invent` at `confidence ∈ {C,D}` with `follow_up_exp: none`** and no written justification (C6, `prd.md` §5 Phase 4 "smallest test"). → hold at G3.
10. **`defer` with no `revisit_trigger`** — indefinite limbo masquerading as a decision (D6). → hold at G2.
11. **Fabricated basis** — `evidence_for` cites an `EVD`/`EXP` that does not exist or was not concluded, or `follow_up_exp` cites a result not yet run (`prd.md` §4/§14, "Never fabricate … results"). → hold + flag for integrity review.
12. **Verdict laundering** — deleting a draft to erase a `reject`/`defer`, or converting a usability result into a health-impact decision without re-grading the confidence axis (F4, `↔ TASK-009 §6`). → hold; transition the record instead.
13. **Hidden dissent** — the review was non-unanimous but `dissent_note` is empty (F4, `prd.md` Prompt 06). → hold at G3.
14. **Gate skipped** — `safety_gate_ref: not_run` on a value-based `adopt`/`adapt` (G0). → hold at G0; run TASK-033 first.

---

## 7. Worked synthetic submissions

> **All records below are `ILLUSTRATIVE (synthetic)`.** They use fictitious `CAP-SYNTH-*`, `EVD-SYNTH-*`, `EXP-SYNTH-*` ids and assert **no real observation, metric, user quote, or clinical outcome**. They exist only to demonstrate that the form's gate behaves as specified — including by **refusing** two of them.

### 7.1 Example A — an `adapt` that **passes** the gate (the PRD streak case)

```yaml
# ILLUSTRATIVE (synthetic)
dec_id: DEC-SYNTH-001
title: "Streak / consecutive-day counter: Adopt, Adapt, Invent, Reject or Defer?"   # a question ✔
subject_ref: CAP-SYNTH-014            # the streak capability record (synthetic)
decision_owner: R01                   # Head of Product — exactly one
decision_type: adapt
verdict_summary: "Adapt the consecutive-day counter into flexible weekly consistency
                  with non-punitive recovery after a missed day."
rationale: >                          # C1 — cites its basis, not a preference
  The consecutive-day mechanism (CAP-SYNTH-014) carries a documented shame / all-or-nothing
  risk after a missed day (EVD-SYNTH-221, grade C qualitative). Behavioral evidence for
  flexible-consistency framing (EVD-SYNTH-204, grade B) suggests recovery-after-disruption
  preserves autonomy better than an unbroken count. We therefore adapt rather than adopt.
evidence_for: [EVD-SYNTH-204, EVD-SYNTH-221, CAP-SYNTH-014]   # C2 ✔
alternatives_considered:              # C3 ✔ (≥1 for adapt)
  - {option: "Adopt streak as-is",            why_not: "Reintroduces the shame/all-or-nothing risk."}
  - {option: "Cumulative effort/milestones",  why_not: "Weaker weekly-rhythm cue for this audience; kept as fallback."}
reviewer_role: R02                    # C4 — behavioral scientist, ≠ owner
risks:                                # C5 ✔
  - {risk: "Flexible framing reads as 'lowering the bar'", severity: medium,
     mitigation_or_accepted: "Test comprehension in EXP-SYNTH-030."}
  - {risk: "Residual guilt on missed day",                 severity: medium,
     mitigation_or_accepted: "Non-punitive recovery copy; MN-2 safety check passed."}
follow_up_exp: [EXP-SYNTH-030]        # C6 ✔ (confidence C ⇒ experiment required)
confidence: C                         # D1 — axis: efficacy on repeated action (not yet A)
safety_flag: none
safety_gate_ref: {outcome: pass, link: "TASK-033 run #SYNTH-7 — all five domains pass"}  # G0 ✔
value_score_ref: {score: 74, link: "TASK-034 export SYNTH"}   # non-binding supporting input
revisit_trigger: n/a
dissent_note: []                      # review was unanimous
status: approved                      # G3 passed: C1–C6 + D1 + gate all satisfied
confidence_axis: "efficacy — meaningful repeated action & perceived autonomy"
```
**Gate trace:** G0 pass (safety gate `pass`) → G1 pass (all M present, title is a question) → G2 pass (`adapt` ⇒ `alternatives_considered` present) → **G3 pass** (rationale cites basis; ≥1 `evidence_for`; alternatives ≥1; reviewer R02 ≠ owner R01; risks present; `confidence: C` ⇒ `follow_up_exp` present; no §6 failure). ✅ **Approved.**

### 7.2 Example B — an `adopt` the form **refuses** (missing mandatory fields)

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates a REJECTED submission
dec_id: DEC-SYNTH-002
title: "Adopt 3D celebratory animation"    # ✗ verdict-as-title (§6.1)
subject_ref: CAP-SYNTH-041
decision_owner: R04                   # visual/brand designer
decision_type: adopt
verdict_summary: "Adopt the (Not Boring)-style 3D completion animation."
rationale: "It's delightful and feels premium."   # ✗ preference, cites no basis (§6.4)
evidence_for: []                      # ✗ no linked evidence, no concluded EXP (§6.3)
alternatives_considered: []
reviewer_role: R04                    # ✗ reviewer == owner; and animation touches
risks: []                             #     reduced-motion accessibility (§6.7 / F3)
follow_up_exp: none                   # ✗ confidence D + adopt ⇒ experiment required (§6.9)
confidence: D
safety_flag: accessibility            # reduced-motion / vestibular risk
safety_gate_ref: {outcome: not_run}   # ✗ gate skipped on a value-based adopt (§6.14 / G0)
value_score_ref: {score: 88}          # ✗ high score offered as the case (§6.8 / F2)
status: in_review                     # CANNOT advance to approved
```
**Gate trace:** **G0 FAIL** — `safety_gate_ref: not_run` on a value-based `adopt` (§6.14). Even if the gate were run, **G3 would list six failures**: §6.1 (verdict-as-title), §6.3 (no evidence), §6.4 (preference-as-rationale), §6.7 (self-review of an accessibility-flagged decision), §6.9 (no experiment at confidence D), §6.8 (score offered in lieu of a case). ❌ **Held `in_review`; owner told exactly what is missing.** The high value score (88) does **not** rescue it (F2).

### 7.3 Example C — a `defer` that **passes** (deciding to wait, correctly)

```yaml
# ILLUSTRATIVE (synthetic)
dec_id: DEC-SYNTH-003
title: "HealthKit cycle-phase personalization: Adopt, Adapt, Invent, Reject or Defer?"
subject_ref: CAP-SYNTH-077
decision_owner: R01
decision_type: defer
verdict_summary: "Defer cycle-phase personalization pending clinical boundary review and user evidence."
rationale: >                          # C1 — a real reason to wait
  The capability depends on sensitive health data and an unresolved clinical-boundary question
  (safety gate returned 'investigate' on CL-4). No current EVD establishes user demand for this
  specific personalization. Deferring preserves the option without an unsupported commitment.
evidence_for: []                      # admissible for defer: the point IS the evidence gap
depends_on_exp: none
alternatives_considered:
  - {option: "Invent a non-clinical energy-pattern cue", why_not: "Kept open as the likely re-entry path."}
reviewer_role: R14                    # clinical reviewer (safety_flag = clinical ⇒ ≠ owner)
risks:
  - {risk: "Competitor ships cycle features first", severity: low,
     mitigation_or_accepted: "Accepted; differentiation does not depend on being first here."}
follow_up_exp: none
confidence: C
safety_flag: clinical
safety_gate_ref: {outcome: investigate, link: "TASK-033 run #SYNTH-9 — CL-4 open"}
revisit_trigger:                      # D6 ✔ — mandatory for defer
  condition: "Clinical boundary review (TASK-040) returns + ≥3 discovery interviews cite the need"
  by_date: "Week 6 (opportunity synthesis gate)"
opens_gap: GAP-SYNTH-052              # the investigate outcome opened a gap (↔ TASK-008)
status: deferred
```
**Gate trace:** G0 allows `defer` under an `investigate` gate → G1/G2 pass (`revisit_trigger` present) → **G3 pass** (rationale gives a real basis to wait; reviewer R14 ≠ owner for a clinical flag; risks present; evidence-gap explicit; linked `GAP`). ✅ **Deferred** — a decision, not limbo.

---

## 8. Copy-ready blank form

```yaml
# HerRays — Adopt/Adapt/Invent/Reject/Defer Decision Form (TASK-035)  ·  creates one DEC record (TASK-009)
# Fill top-to-bottom. The form will NOT approve until every field required for your chosen verdict (§4) is valid.

# --- A. Identity & subject ---
title:            ""        # M — a QUESTION, not the answer
subject_ref:      ""        # M — CAP-NNN / OPP-NNN (must resolve)
decision_owner:   ""        # M — exactly one role R01–R15
created_by_role:  ""        # M
created_date:     ""        # M

# --- B. Verdict ---
decision_type:    ""        # M — adopt | adapt | invent | reject | defer
verdict_summary:  ""        # M — one sentence: what action

# --- C. Mandatory proof (conditional on verdict — see §4) ---
rationale:        ""        # C1 — non-empty for approve/defer/reversed; must cite its basis
evidence_for:     []        # C2 — [EVD/CAP/NEED ids]; ≥1 OR a concluded depends_on_exp (except defer-on-gap)
depends_on_exp:   none      #      [EXP-NNN] experiments this decision depends on (two-way w/ TASK-009)
alternatives_considered: [] # C3 — [{option, why_not}]; req. for adapt/invent(+unconventional)/reject
reviewer_role:    ""        # C4 — role ≠ owner where safety_flag ≠ none (R14/R15/R13)
risks:            []        # C5 — [{risk, severity, mitigation_or_accepted}]
follow_up_exp:    none      # C6 — [EXP-NNN]; req. for adopt/adapt/invent at confidence C/D

# --- D. Grading, safety, dependencies ---
confidence:       ""        # C — A|B|C|D  (state the axis: efficacy / relevance / experience)
confidence_axis:  ""
safety_flag:      ""        # M — none|clinical|privacy|accessibility|unsupported_claim
safety_gate_ref:  {}        # M — {outcome: pass|conditional|investigate|reject|not_run, link}
value_score_ref:  {}        # O — {score 0–100, link}  NON-BINDING; never overrides a gate
dependencies:     []        # O
revisit_trigger:  {}        # C — MANDATORY for defer: {condition, by_date}
dissent_note:     []        # C — [{role, position}]; mandatory if review not unanimous

# --- E. Audit (append-only; set by workflow) ---
status:           proposed  # proposed→submitted→in_review→approved | deferred | reversed (TASK-009 §2.3)
record_version:   "0.1"
change_log:       []
```

### 8.1 Reviewer pre-approval checklist (G3)

Before ratifying, the reviewer confirms — and the form will not let `approved` be set unless every box is true:

- [ ] `title` is a question; `subject_ref` resolves; exactly one `decision_owner`.
- [ ] `rationale` is non-empty **and cites** its `evidence_for`/`depends_on_exp` (not a preference).
- [ ] ≥1 `evidence_for` or a concluded `depends_on_exp` (or an explicit gap for `defer`).
- [ ] `alternatives_considered` meets the §4 count for this verdict (unconventional option present for `invent`).
- [ ] `reviewer_role` present, and ≠ `decision_owner` with the correct accountable role if `safety_flag ≠ none`.
- [ ] `risks` present per §4; red-team basis named where one exists.
- [ ] `follow_up_exp` present (real pre-registered `EXP`) if `confidence ∈ {C,D}` for adopt/adapt/invent.
- [ ] `confidence` set with its axis; `safety_gate_ref = pass` for any value-based adopt/adapt.
- [ ] No §6 forbidden value; `value_score_ref` (if any) is supporting, not deciding.
- [ ] `dissent_note` recorded if the board was not unanimous; `revisit_trigger` set if `defer`.

---

## 9. Dependencies & interlocks

| Direction | Task | Relationship |
|---|---|---|
| **↔** | TASK-009 (decision/experiment registers) | This form **creates and gates** the `DEC` record whose schema TASK-009 owns; field names, lifecycle states, and two-way `depends_on_exp ↔ informs_decision` coupling are TASK-009's. This doc is the "intake workflow and mandatory-field gate" TASK-009 §1 defers here. |
| **→** | TASK-033 (capability safety gate) | Consumed as the G0 precondition and the `safety_gate_ref` field; non-compensable per F2. |
| **→** | TASK-034 (value scorecard) | Attached as non-binding `value_score_ref`; never overrides a gate or substitutes for rationale. |
| **↔** | TASK-004 (evidence grading) | `confidence` reuses the A–D grades and the per-axis rule. |
| **→** | TASK-036 (red-team protocol) | Supplies the adversarial basis named in `risks` for high-priority capabilities; a `reject` often rests on a red-team finding. |
| **↔** | TASK-008 (gap/contradiction log) | A gate `investigate`, an unresolved dependency, or a `defer`-on-gap opens a `GAP`; a preserved disagreement may open a `CON`. |
| **↔** | TASK-030/031 (capability record / worksheet) | `subject_ref` points at the `CAP` record; `alternatives_considered` draws on the worksheet's "three + one unconventional." |
| **←** | TASK-003 (responsibility matrix) | `decision_owner`/`reviewer_role` roles and the separation-of-duties rule (G4). |
| **→** | TASK-041/042 (Opportunity Atlas) | Approved/deferred decisions feed opportunity synthesis (Prompt 07 → Prompt 08); a `reject` is preserved, not deleted (F4). |

---

## 10. Open unknowns & change log

**Open unknowns (not invented away):**
- Whether `DEC` records live in HerRays OS vs. Notion determines whether the G1–G4 gate is enforced by tooling or by reviewer discipline + a validation script (`prd.md` §4 "existing HerRays OS/Notion as source of truth"). The *rules* here are tool-agnostic.
- The exact `R0x` role that chairs the review board vs. owns each verdict is a staffing decision deferred to the Program Director (per TASK-003's open staffing note).
- Whether a sixth "redesign-required" outcome (from a TASK-033 gate `redesign`) should be a distinct `decision_type` or modeled as an `adapt` with a mandatory `follow_up_exp` is flagged for the review board; this form currently routes it as a constrained `adapt`/`reject` and defers the vocabulary question to TASK-009's steward.

**Change log:**
- v0.1 (2026-11-23) — Initial form, gate workflow (G0–G4), per-verdict matrix (§4), §6 failure catalogue, three synthetic worked submissions (one approve, one refused, one defer), copy-ready blank + reviewer checklist. No real decision recorded.

---

*Labeling: this is a **proposed instrument**, not a record of any decision taken. Every example is synthetic and so marked. No research observation, metric, user quote, test result, or clinical outcome is asserted anywhere in this document.*
