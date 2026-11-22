# HerRays — Cross-Specialist Reconciliation Template

**Deliverable:** TASK-023 — Create the cross-specialist reconciliation template
**Workstream:** Experience Teardown (WS02) · The reconciliation meeting that follows the five independent specialist audits
**Version:** 0.1 · **Status:** Proposed — meeting instrument & record contract defined, no app yet reconciled
**Facilitation & custody (accountable roles):** Senior UX/product designer (R03) **convenes and facilitates** the reconciliation session as WS02 owner (TASK-003 §5.2, activity T10); the **Program Director** is the **neutral custodian** of the reconciliation output, the contradiction register and the decision/experiment routing (`prd.md` §2: "A central program director maintains the evidence schema, source of truth, review gates, decision log, dependencies"). **Separation of duties:** because R03 is also the author of the UX-heuristic audit (TASK-019, record prefix `UXA`), R03 may facilitate but **may not be the deciding voice on the outcome of any reconciliation item in which an `UXA` position is one of the competing interpretations** — the Program Director arbitrates the *routing* of that item (never the "winner"; see §2 R2). This mirrors TASK-003 §4 "no self-approval."
**Participants (the five independent auditors, one lens each):** Behavioral scientist (R02 → `BSA`, TASK-018) · Senior UX/product designer (R03 → `UXA`, TASK-019) · Visual/brand designer (R04) + Motion/interaction designer (R08) (→ `VMA`, TASK-020, two lenses) · Product analyst/growth specialist (R09) + Content strategist/UX writer (R10) (→ `GCA`, TASK-021, two lenses) · iOS engineer (R05) + QA/accessibility specialist (R13) (→ `IAA`, TASK-022, two lenses)
**Mandatory reviewers for escalated items:** Clinical reviewer (R14) and Privacy/regulatory reviewer (R15) are convened **only when** a reconciliation item carries a clinical, manipulation/coercion, privacy, or accessibility-gate flag; their verdict is non-compensable (§2 R4).
**Source basis:** `prd.md` §2 ("Specialists independently audit the same core apps before cross-disciplinary reconciliation. **Preserve disagreements.**"; "A central program director maintains … the decision log, dependencies and progress dashboard"), §5 Phase 2 ("Independently commission behavioral, UX, visual/motion, growth/content, and iOS/accessibility audits for each core app, **then reconcile disagreements**"), §4 (Evidence Library `EVD-001`; Decision Log `DEC-001`; Experiment Registry `EXP-001`; grades A–D; "Grade separately for efficacy, relevance and confidence"; no-fabrication rule), §9/§11 (clinical safety, privacy and accessibility are **mandatory gates, not compensable weighted scores**; "Polished unsupported reports do not pass"), §13 Prompt 00 ("Separate evidence, inference, hypothesis and invention"; "contradiction register"), Prompt 02 ("Commission independent audits … **then reconcile contradictions**"), Prompt 06 ("**Preserve specialist disagreements**")
**Depends on:** TASK-018 (`BSA`) · TASK-019 (`UXA`) · TASK-020 (`VMA`, two lenses) · TASK-021 (`GCA`, two lenses) · TASK-022 (`IAA`, two lenses) — **the five audit record sets this meeting reconciles; this document creates none of them and audits no app** · TASK-017 (capture bundle — the single `capture_ref` all five lenses read; the shared anchor every reconciliation item inherits) · TASK-016 (ten journey scripts / `JRN` steps — the shared coordinate system) · TASK-006 (`APP` registry — the subject) · TASK-008 (**gap & contradiction log** — the destination for every preserved disagreement: `CON-NNN`, and for coverage gaps `GAP-NNN`; this template is the primary *producer* of `CON` records in WS02) · TASK-009 (**decision & experiment registers** — the destination for follow-up experiments `EXP-NNN` and for any routed decision intent `DEC-NNN`) · TASK-004 (evidence grading — the A–D scale, the "never average contradictions" rule, the separate-grades rule) · TASK-003 (responsibility matrix — names R03 facilitator/T10, the five audit owners, R14/R15 escalation, separation of duties)
**Feeds:** The **five detailed teardown dossiers**, **Pattern Library** (`PAT-001`) and **capability inventory** (`prd.md` §2, §5 Phase 2 / §13 Prompt 02) — a reconciled, disagreement-preserving teardown, not five parallel monologues · TASK-008 (`CON` register — the preserved contradictions) · TASK-009 (`EXP`/`DEC` registers — the follow-up experiments and routed decisions) · TASK-033 (capability safety gate — escalated clinical/manipulation/privacy/accessibility conflicts) · TASK-030 / TASK-031 (capability mechanism extraction — a reconciled cross-lens reading is a cleaner input than five raw audits) · TASK-041 / TASK-042 (Opportunity Atlas — reconciled problems, not feature requests) · TASK-048 (concept testing — the user-impact hypotheses that reconciliation could **not** settle become real-user tests)

---

## 0. How to read this document

TASK-018 through TASK-022 defined **five independent lenses** that each read the *same* captured walkthrough bundle (TASK-017) for one app and produced coded, evidence-graded, uncertainty-bounded audit records: behavioral mechanisms (`BSA`), UX/cognitive walkthrough (`UXA`), visual & motion (`VMA`), growth & UX-writing (`GCA`), and iOS & accessibility (`IAA`). Those audits were deliberately run **in isolation so the specialists would not anchor on each other** (`prd.md` §2). This document defines **what happens when they are brought together** — the reconciliation meeting whose job is *not* to manufacture a single agreed story, but to **surface where the five lenses agree, corroborate, trade off, or directly contradict one another on the same screen, and to preserve every disagreement in an adjudicable, source-linked form.**

It is a **meeting protocol and a record contract**, not a dataset. It produces no findings about any app. It does five separable things:

1. **Fixes the reconciliation protocol** (§4) — the timed agenda, the independent-reading-first rule that prevents the loudest specialist from anchoring the room, the round-robin position capture, and the explicit **no-forced-consensus** rule.
2. **Defines the five required meeting outputs as mandatory fields** (§5) — the acceptance-criteria set, each a first-class part of the record: **(1) preserved disagreements**, **(2) linked observations**, **(3) competing interpretations**, **(4) resolution decisions**, and **(5) follow-up experiments**.
3. **Defines the `REC` reconciliation record and the `REC-SESS` session header** (§6) — the exact fields one reconciled cross-lens item produces, including the **mandatory ≥2 linked source audit records**, the **verbatim, attributed competing positions**, the **routing outcome**, and the links out to `CON`/`EXP`/`DEC`/gate.
4. **Enforces the preserve-disagreement firewall** (§2, §7) — a disagreement is *routed*, never *averaged*, never *majority-voted*, never *silently dropped*; the facilitator does not pick a winner; safety/clinical/privacy/accessibility flags are non-compensable and cannot be out-voted.
5. **Provides the reusable instrument** (§8–§12) — a per-session checklist, a reviewer checklist, the session YAML stamp, and a clearly-labelled synthetic worked example proving the record, the five required outputs, and the routing run end-to-end.

> **No-fabrication statement.** This document contains **no reconciliation findings and no claims about any real app.** It does not report, rate, grade, reconcile, or characterise any screen, mechanism, interaction, animation, copy string, or accessibility behaviour of Routinery, Fabulous, (Not Boring) Habits, Habitify, Griply, or any other product, because **no audits have been run and no session has been held.** It records **no agreement, no contradiction, no resolution, and no experiment result** for any product. Every field and vocabulary value below is a *specification of how a reconciliation session is run and recorded*, never an assertion that any app does or does not do something, and never an assertion that any specialist did or did not say something. The `BSA`/`UXA`/`VMA`/`GCA`/`IAA` record identifiers referenced throughout are **pointers to the sibling-task record contracts**, not populated findings. The only populated records appear in the **clearly-labelled synthetic worked example** (§12), which reconciles a fictitious `APP-SYNTH-Z` using `*-SYNTH-*` identifiers solely to prove the instrument runs. Nothing here may be cited as evidence about a real product or a real person. Experiments referenced here are **proposed**, never **run**: this template proposes `EXP` records, TASK-009 registers them, and TASK-048 (or a later pilot) executes them — **this document records no test outcome.**

**Scope boundary — what this task is and is not.**
- **TASK-023 (this document) = the WS02 cross-specialist reconciliation of the five teardown audits on one app's captured bundle.** It answers *"where do the five independent lenses touch the same evidence; where do they agree, corroborate, trade off, or contradict; and how is each disagreement preserved and routed without being flattened into false consensus?"*
- **It is not any of the five audits.** It creates no `BSA`/`UXA`/`VMA`/`GCA`/`IAA` record and makes no first-order observation about any app. It reads **existing** audit records (produced under TASK-018–022) and relates them. If a cross-lens claim rests on a screen only one lens actually captured, that is a **coverage gap** (`gap_ref` → TASK-008), not a reconciliation (§2 R1).
- **It is not the capture or the journey script.** The bundle (`capture_ref`, TASK-017) and the journey steps (`jrn_ref`, TASK-016) are inherited as the shared coordinate system; reconciliation never re-walks the app or invents a flow.
- **It is not the capability extraction workshop or the red team.** Turning a reconciled mechanism into a five-layer capability record with three alternatives is **TASK-030/031/032**; adversarially challenging a high-priority capability is **TASK-036**. Reconciliation *feeds* those; it does not perform them.
- **It is not the decision.** Reconciliation routes (converge / preserve-contradiction / needs-experiment / escalate-to-gate / defer); it never records **Adopt/Adapt/Invent/Reject/Defer** — that is **TASK-035**, governed by the TASK-009 `DEC` register. A disagreement is **never** resolved by adopting the more senior, more eloquent, or more polished specialist's view (§2 R2–R3).
- **It is not a safety authority.** When an item carries a clinical, manipulation/coercion, privacy, or accessibility-gate flag, reconciliation **escalates** to the mandatory gate (TASK-033, reviewers R14/R15); it does not clear the flag itself, and the other four lenses cannot out-vote it (§2 R4; `prd.md` §9/§11).

---

## 1. Purpose

Five specialists audited the same app in isolation specifically so that five genuinely independent readings would exist. Reconciliation is where that independence pays off — or is thrown away. The failure mode WS02 must prevent is the **synthesised consensus**: a facilitator collects five audits, writes "the team agreed Fabulous's onboarding is strong but a little long," and that sentence erases four things that actually happened — the behavioral scientist flagged the onboarding's commitment device as a potential guilt mechanism, the growth analyst read the same screens as well-sequenced activation, the accessibility specialist found the progress animation fails Reduce-Motion, and the UX auditor and visual auditor disagreed about whether the length was friction or pacing. A single smooth sentence has laundered a **direct contradiction**, a **non-compensable accessibility flag**, and a **genuine interpretive tension** into agreement that never existed. That is precisely the outcome `prd.md` forbids three times — "Preserve disagreements" (§2), "then reconcile contradictions" (§5/Prompt 02), "Preserve specialist disagreements" (Prompt 06) — and it is exactly the "polished unsupported report" that Gate 1/Gate 2 must reject (§11).

This template converts five independent audits into a **disagreement-preserving, source-linked, routed reconciliation** by guaranteeing five properties of every `REC` record:

1. **Source-linked.** Every reconciliation item points to **two or more** existing audit records (`BSA`/`UXA`/`VMA`/`GCA`/`IAA`), each of which already carries its own TASK-017 `capture_ref` + `screen_ref`/`transition_ref` and TASK-016 `jrn_ref`. "If fewer than two lenses actually audited it, it is not a reconciliation item" (§2 R1). *This is the acceptance-criteria "linked observations" made structural.*
2. **Position-preserving.** The record forces a **verbatim, attributed position per lens** (`positions[]`): each specialist's own claim, interpretation, rating/severity, grade and evidence source, kept in its own entry and never merged. *This is "competing interpretations" made structural.*
3. **Disagreement-routed, not averaged.** Each item is classified by the **relationship** between the positions (agreement / corroboration / tension / direct contradiction / dependency / trade-off) and assigned a **routing outcome** — and a direct contradiction *must* produce a `CON` record (TASK-008) that retains every losing position verbatim. Nothing is majority-voted or numerically averaged (§2 R2). *This is "preserves disagreements" + "resolution decisions" made structural.*
4. **Experiment-generating.** Any item whose disagreement or user-impact hypothesis can only be settled by evidence that does not yet exist carries a **`fix_hypothesis`** and a proposed **`experiment_ref`** → TASK-009 `EXP` (run later in TASK-048 or a pilot). *This is "follow-up experiments" made structural.* No experiment result is ever recorded here.
5. **Uncertainty- and grade-bounded.** Every item carries a non-empty `uncertainty_note`; a reconciled claim's grade never exceeds the grade of its weakest necessary supporting observation; and converging two single-session C-grade readings never yields a B (§2 R3; §9).

---

## 2. Five non-negotiables (preserve-disagreement & anti-fabrication guards)

These guards are structural. A `REC` record (or a whole session) that violates any one is rejected at validation (§8), not patched afterward.

- **R1 — No reconciliation item without ≥2 linked source audit records; reconciliation audits nothing itself.** Every `REC` record must cite **two or more** existing audit records drawn from at least **two different lenses** (`BSA`/`UXA`/`VMA`/`GCA`/`IAA`), via `linked_observations`. The facilitator and the room may **not** create a new observation about the app, re-open the capture, or audit from memory, marketing, or the App Store — if a point rests on a screen only one lens captured, it is recorded as a **coverage gap** (`gap_ref` → TASK-008 `GAP`), and the *gap itself* may be a reconciliation item ("three lenses audited this screen; iOS/accessibility did not — needs an AX pass"), but no finding is invented to fill it. Collapsing to a single-lens claim dressed as cross-lens agreement is a validation failure (§8 V1).
- **R2 — Disagreements are preserved, never averaged, majority-voted, out-ranked, or silently dropped; the facilitator does not pick a winner.** A **direct contradiction** (two lenses make claims that cannot both be true on the same evidence) **must** be written to the TASK-008 `CON` register and must retain **every** competing position verbatim and attributed in `positions[]` with `winning_position: none` unless and until an experiment or new graded evidence settles it (TASK-004 "never average contradictions"; TASK-008 G2). The reconciliation outcome for such an item is `preserved_contradiction` or `needs_experiment` — **never** "team agreed," "majority view," a blended severity, or the view of the more senior/eloquent specialist. A `REC` record whose `reconciliation_outcome` is `converged` but whose `positions[]` are not actually in agreement is a validation failure (§8 V3, V4). *(`prd.md` §2 / §5 / Prompt 02 / Prompt 06.)*
- **R3 — Reconciliation routes; it does not decide features and does not grade up.** The permissible outcomes (§4.3) are routing states, not product decisions. Adopt/Adapt/Invent/Reject/Defer is **TASK-035**; this session may at most attach a routed `decision_ref` pointer to a *proposed* `DEC` in `draft`, never an approved one. A reconciled claim's **grade never exceeds the grade of its weakest necessary supporting observation** (TASK-004); corroboration across lenses may raise *confidence narrative* but may not promote a single-session, single-device C to a B, and may never convert a usability/visual grade into an efficacy or health grade ("Grade separately … do not interpret a high grade on usability as a high grade on health impact," `prd.md` §4). A severity/rating may never be *upgraded* by reconciliation to make a point "win"; the original lens ratings are preserved (§8 V7).
- **R4 — No fabricated consensus, observation, or test result; safety flags are non-compensable.** The facilitator may not invent an observation to bridge two lenses, may not record any experiment **outcome** (experiments are proposed here, registered in TASK-009, executed in TASK-048/pilot), and may not mark an unresolved item `resolved`. Any item carrying a **clinical**, **manipulation/coercion (dark pattern)**, **privacy/data**, or **accessibility-gate** flag raised by *any single lens* (e.g. a `GCA` dark-pattern tag, an `IAA` severity-4 accessibility or core-path WCAG `fail`, a `BSA` guilt/compulsion hazard) **must** carry a `gate_ref` → TASK-033 and **cannot be out-voted by the other four lenses** (`prd.md` §9/§11 "mandatory gates, not compensable"). R14 (clinical) / R15 (privacy) are convened for those items and their verdict governs. Marking such an item `converged`/`deferred` without a `gate_ref` is a validation failure (§8 V9).

---

## 3. Where this sits in the capture → evidence chain

```
TASK-016 journey script (J1…J10, scenario SC-1…SC-6)
        ▼
TASK-017 CAPTURE BUNDLE (frames + timestamps, transition log, friction/error/a11y annotations, manifest)
        │  the single re-openable artifact (capture_ref) — ONE bundle, read five times independently
        ▼
┌───────────────── same bundle, five independent lenses (no cross-anchoring) ─────────────────┐
│ TASK-018 BSA (behavioral)   TASK-019 UXA (UX / cognitive walkthrough)                         │
│ TASK-020 VMA (visual + motion)   TASK-021 GCA (growth + UX-writing)                           │
│ TASK-022 IAA (iOS + accessibility)                                                            │
└───────────────────────────────────────────────────────────────────────────────────────────┘
        │  each lens emits its own anchored, graded, rated audit records
        ▼
TASK-023 CROSS-SPECIALIST RECONCILIATION  ← this doc
        │  REC-NNN items: ≥2 linked observations → verbatim competing positions → relationship → routed outcome
        │  independence preserved (R1), disagreement preserved (R2), no grade-up (R3), safety non-compensable (R4)
        ▼
  ┌──────────────┬───────────────────────┬──────────────────────────┬───────────────────────────┐
  ▼              ▼                       ▼                          ▼                           ▼
TASK-008 CON   TASK-008 GAP           TASK-009 EXP/DEC           TASK-033 gate              Teardown dossier
(preserved     (coverage gaps —       (follow-up experiments;   (clinical / manipulation / + Pattern Library (PAT)
 contradictions,a lens did not         proposed DEC pointers)    privacy / a11y escalations)+ capability inventory
 verbatim)      audit a screen)                                                             → TASK-030/031, 041/042, 048
```

Reconciliation is the **convergence node** of WS02: five independent readings in, one disagreement-preserving, source-linked, routed artifact out. Its quality is capped by the quality of the five audits (which are themselves capped by the TASK-017 capture) and by the discipline of the room — the single most important discipline being that it **does not smooth**.

---

## 4. The reconciliation session protocol

A reconciliation session covers **one app's captured bundle** (`capture_ref`). It is held **after all five audits for that app are complete and version-stamped**, and never while an audit is still open (an incomplete audit set is a `GAP`, not a reconciliation). The protocol exists to protect independence *into* the room and to protect disagreement *out* of it.

### 4.1 Pre-reads and the independence rule
- Each specialist submits their completed, version-stamped audit record set (`BSA`/`UXA`/`VMA`/`GCA`/`IAA`) to the Program-Director custody **before** the session.
- The facilitator (R03) builds a **touchpoint index**: for each captured screen/transition/`jrn_ref`, which lenses produced a record. Cross-lens touchpoints (≥2 lenses on the same anchor) become candidate `REC` items; single-lens points are carried as-is into the dossier and are *not* reconciliation items (R1).
- **Independence rule:** specialists do **not** revise their original audit records to match the room. Original audit records are immutable inputs; if the session changes someone's mind, that is recorded as a *new position* inside the `REC` item (`position_revised: true` with the reasoning), never by rewriting the source `BSA`/`UXA`/… record. This keeps the paper trail honest (§8 V2).

### 4.2 Timed agenda (≈90 minutes per app; scale by touchpoint count)
| Time | Activity | Owner | Output |
|---|---|---|---|
| 0–10 | **Frame the bundle.** Confirm `capture_ref`, app, coverage, and which journeys/scenarios were and were **not** captured (coverage gaps logged first, as `GAP`). | R03 facilitator | coverage gap list |
| 10–20 | **Silent independent review** of the touchpoint index. No discussion — each specialist privately marks where they expect to agree/disagree, to prevent verbal anchoring. | all | private notes |
| 20–55 | **Round-robin position capture, per cross-lens touchpoint.** For each candidate item, each involved lens states its position **verbatim** (claim + interpretation + rating/severity + grade + evidence source). **No rebuttal until every position is on the record.** | all; R03 scribes | `positions[]` per item |
| 55–70 | **Classify the relationship** (§4.3) and **route the outcome** (§4.4) for each item. Contradictions are written to `CON` *in the room*; safety flags escalated to the gate *in the room*. | R03 + Program Director | `relationship`, `reconciliation_outcome` |
| 70–85 | **Generate follow-up experiments.** For every `needs_experiment` / unresolved-hypothesis item, draft a `fix_hypothesis` and a proposed `EXP` (hypothesis, smallest useful test, success criterion) → TASK-009. | Product analyst (R09) + proposing lens | `experiment_ref` drafts |
| 85–90 | **Assign owners, due dates, status.** Every open item gets exactly one `owner_role` and a `next_action` + `next_action_due`. | Program Director | completed `REC` stamps |

> The 90-minute shape echoes the PRD's workshop cadence (`prd.md` §5 Phase 3) but the **job is different**: this session *reconciles existing audits*; it does **not** extract capabilities or generate alternatives (that is TASK-030/031/032) and does **not** finalise anything ("Do not finalize features," `prd.md` §5 Phase 3; "Do not select final HerRays features," Prompt 02).

### 4.3 Relationship taxonomy (how two+ positions relate on the same evidence)
| Value | Meaning | Typical routing |
|---|---|---|
| `agreement` | Lenses independently reached the **same** reading of the same anchor. | `converged` |
| `independent_corroboration` | Different lenses, **different reasoning**, same conclusion — a stronger signal than one lens alone (but see R3: no grade-up). | `corroborated` |
| `tension` | Readings are not contradictory but **pull in different design directions** (e.g. motion richness vs. cognitive load). | `needs_experiment` or `preserved_contradiction` |
| `direct_contradiction` | Two positions **cannot both be true** on the same evidence. | `preserved_contradiction` (→ `CON`) |
| `dependency` | One lens's finding is **conditioned on** another's (e.g. an accessibility verdict depends on a motion behaviour). | `converged` with linked dependency, or `needs_experiment` |
| `trade_off` | Both positions are valid; the design must **choose**, with a cost either way (e.g. a persuasive paywall placement that is effective *and* flagged coercive). | `escalated_to_gate` (if a safety axis) or routed to TASK-035 via a `decision_ref` draft |

### 4.4 Reconciliation-outcome taxonomy (the routing decision — never a feature decision)
| Value | Meaning | Mandatory links |
|---|---|---|
| `converged` | Positions genuinely agree (or a dependency resolves cleanly); recorded as one reconciled reading **without discarding any position**. | — |
| `corroborated` | Multiple lenses independently support the same conclusion; confidence narrative strengthened, grade **not** raised (R3). | — |
| `preserved_contradiction` | Positions conflict and cannot be settled now; **all** positions retained verbatim; written to the contradiction register. | `contradiction_ref` → `CON` (TASK-008) |
| `resolved_by_evidence` | An existing, admissible graded `EVD` already settles the conflict; the losing position is retained with the resolving evidence noted (never deleted). | `resolving_evd` → `EVD` (TASK-005) |
| `needs_experiment` | Only a test (or real-user study) can settle it; a follow-up experiment is proposed. | `experiment_ref` → `EXP` (TASK-009) + `fix_hypothesis` |
| `escalated_to_gate` | A clinical / manipulation / privacy / accessibility flag is present; routed to the mandatory gate; non-compensable. | `gate_ref` → TASK-033 + R14/R15 as applicable |
| `deferred` | Legitimately out of this cycle's scope; carried forward with an owner, never closed by assumption. | `owner_role` + `next_action_due` |
| `out_of_scope` | The touchpoint belongs to another workstream/task; routed there, not resolved here. | `routed_to` (task ref) |

A single item may carry **more than one** outbound link (e.g. a `direct_contradiction` on an accessibility surface is both `preserved_contradiction` → `CON` **and** `escalated_to_gate` → TASK-033). Safety escalation is never suppressed by another outcome (R4).

---

## 5. The five required meeting outputs (acceptance-criteria set)

The acceptance criterion requires a meeting output that preserves five things. Each is a **mandatory, structurally-enforced element** of every applicable `REC` record — not prose the facilitator may omit.

### D1 — Preserved disagreements *(acceptance element: "preserves disagreements")*
Every disagreement is retained in a form that can be re-examined and adjudicated later. **Mechanism:** when `relationship ∈ {tension, direct_contradiction, trade_off}`, the record's `positions[]` retains **every** competing position verbatim and attributed; `winning_position` is `none` unless genuinely settled by evidence/experiment; and a `direct_contradiction` **must** create a `contradiction_ref` → TASK-008 `CON` (G2 there keeps it open until adjudicated). **Forbidden:** "the team agreed," blended/averaged ratings, majority votes, dropping the minority view, or rewriting a source audit to erase the conflict (§2 R2; §8 V3–V5).

### D2 — Linked observations *(acceptance element: "linked observations")*
Every reconciliation item is anchored to the **actual audit records** it reconciles, which in turn are anchored to captured evidence. **Mechanism:** `linked_observations` is a **mandatory list of ≥2 audit record ids** (`BSA`/`UXA`/`VMA`/`GCA`/`IAA`) from **≥2 lenses**; each inherits its own `capture_ref` + `screen_ref`/`transition_ref` + `jrn_ref`. The reconciliation never re-states the observation — it **points** to it, so the chain to the frame is unbroken. **Forbidden:** a cross-lens claim with <2 links or links from a single lens (§2 R1; §8 V1).

### D3 — Competing interpretations *(acceptance element: "competing interpretations")*
The *different readings* of the same evidence are preserved separately, not fused. **Mechanism:** `positions[]` holds one entry per involved lens, each with `{lens, auditor_role, audit_ref, claim (verbatim), interpretation, rating_or_severity, grade, evidence_source}`. The record keeps **observation ≠ interpretation ≠ rating ≠ hypothesis** separated exactly as each source audit did, so "the motion is 900 ms" (observation, shared) and "that is sluggish / that is expressive" (two interpretations) sit in two position entries, not one sentence. **Forbidden:** a single merged interpretation that no individual specialist actually held (§8 V4).

### D4 — Resolution decisions *(acceptance element: "resolution decisions")*
Every item ends in an explicit, controlled **routing** decision with a recorded rationale and owner — a decision about *how the disagreement is handled*, never a product feature decision. **Mechanism:** mandatory `reconciliation_outcome` (§4.4) + non-empty `rationale` + exactly one `owner_role` + `next_action` + `next_action_due`. **Forbidden:** an item with no outcome, an outcome of `converged` over positions that disagree, Adopt/Adapt/Invent/Reject/Defer language (that is TASK-035), or a "resolution" that clears a safety flag without a gate (§2 R3–R4; §8 V6, V9).

### D5 — Follow-up experiments *(acceptance element: "follow-up experiments")*
Disagreements and user-impact hypotheses that cannot be settled from existing evidence become **proposed** experiments, not settled claims. **Mechanism:** for `needs_experiment` (and any item whose crux is a user-behaviour/emotion hypothesis), a non-empty `fix_hypothesis` + a proposed `experiment_ref` → TASK-009 `EXP` carrying hypothesis / smallest-useful-test / success-criterion / owner. The experiment is **registered, not run**; no `result`/`outcome` is recorded here (TASK-009 E2; executed later in TASK-048/pilot). **Forbidden:** recording a test outcome, a `needs_experiment` outcome with no `experiment_ref`, or presenting a hypothesis as a settled finding (§2 R4; §8 V8, V10).

---

## 6. The reconciliation record contract

Two linked structures: one **session header** (`REC-SESS-NNN`, one per app per reconciliation round) and the **reconciliation items** (`REC-NNN`) it contains.

### 6.1 Session header — `REC-SESS-NNN`
| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `sess_id` | M | `REC-SESS-NNN` | Immutable; one session per app per round; re-run → new id, supersede link. |
| `app_id` | M | `APP-NNN` → TASK-006 | The single subject. |
| `capture_ref` | M | TASK-017 bundle id | The one bundle all five lenses read. |
| `round` | M | int ≥ 1 | Reconciliation round (a re-reconciliation after new audits = round 2). |
| `session_date` | M | ISO date | Capture/meeting date; never guessed (`unknown` disallowed — a real session has a real date). |
| `audits_in` | M | list of audit-set refs + versions | The exact `BSA`/`UXA`/`VMA`/`GCA`/`IAA` record-set versions reconciled; **all five present or `coverage_note` explains the absence** (missing lens → `GAP`). |
| `participants` | M | list of `{role, lens}` | The auditors present; R03 facilitator flagged; R14/R15 listed if any item escalated. |
| `facilitator_role` | M | const `R03` | Convener; non-deciding on `UXA`-involved items (separation of duties). |
| `custodian_role` | M | const `Program Director` | Owns the output, the `CON`/`DEC`/`EXP` routing and the dashboard. |
| `coverage_note` | C | text | Required if any lens or journey is absent; names the `GAP`. |
| `rec_ids` | M | list of `REC-NNN` | The items produced. |
| `unresolved_count` | M | derived int | Count of `preserved_contradiction` + `needs_experiment` + `deferred` (a healthy session is expected to have > 0; zero is a smell, §8 V11). |

### 6.2 Reconciliation item — `REC-NNN`
| Field | Req | Type / allowed values | Rule |
|---|---|---|---|
| `rec_id` | M | `REC-NNN` | Immutable id within the program. |
| `sess_id` | M | `REC-SESS-NNN` | Parent session. |
| `anchor` | M | `{capture_ref, screen_ref?/transition_ref?, jrn_ref}` | The shared evidence coordinate; inherited from the linked audits, not newly created. |
| `touchpoint_summary` | M | text (neutral) | One neutral sentence naming *what screen/behaviour* is in contention — no verdict. |
| `linked_observations` | M | **≥2** audit ids from **≥2 lenses** (`BSA`/`UXA`/`VMA`/`GCA`/`IAA`) | **D2.** <2 or single-lens → invalid (V1). |
| `lenses_involved` | M | ≥2 of {behavioral, ux, visual, motion, growth, content, ios, accessibility} | Derived from `linked_observations`. |
| `positions[]` | M | list, one per lens, each `{lens, auditor_role, audit_ref, claim, interpretation, rating_or_severity, grade, evidence_source}` | **D3.** Verbatim, attributed, never merged. |
| `relationship` | M | §4.3 taxonomy | How the positions relate. |
| `reconciliation_outcome` | M | §4.4 taxonomy | **D4.** The routing decision. |
| `rationale` | M | text (non-empty) | Why this outcome; names what would change it. |
| `winning_position` | C | `none` \| audit_ref | **Default `none`.** A non-`none` value requires `resolved_by_evidence` + `resolving_evd`, or a concluded `EXP` (not available at teardown). For `preserved_contradiction` it **must** be `none` (V5). |
| `preserved_positions` | C | const: all of `positions[]` retained | **D1.** Mandatory whenever `relationship ∈ {tension, direct_contradiction, trade_off}`. |
| `contradiction_ref` | C | `CON-NNN` → TASK-008 | Mandatory iff `relationship = direct_contradiction` or `reconciliation_outcome = preserved_contradiction`. |
| `resolving_evd` | C | `EVD-NNN` → TASK-005 | Mandatory iff `reconciliation_outcome = resolved_by_evidence`. |
| `fix_hypothesis` | C | text | **D5.** Mandatory iff `reconciliation_outcome = needs_experiment`. |
| `experiment_ref` | C | `EXP-NNN` → TASK-009 | **D5.** Mandatory iff `reconciliation_outcome = needs_experiment`; **proposed, not run** — no outcome recorded here. |
| `decision_ref` | C | `DEC-NNN` (draft) → TASK-009/TASK-035 | A *pointer* to a proposed decision; never an approved Adopt/Adapt/… verdict (R3). |
| `gate_ref` | C | TASK-033 gate id | **Mandatory** iff any `safety_flag` is set (R4); non-compensable. |
| `safety_flag` | C | subset of {clinical, manipulation, privacy, accessibility} | Set if any single lens raised it; forces `gate_ref` + R14/R15 (V9). |
| `gap_ref` | C | `GAP-NNN` → TASK-008 | Coverage gap (a lens did not audit this anchor). |
| `routed_to` | C | task ref | Mandatory iff `reconciliation_outcome = out_of_scope`. |
| `owner_role` | M | exactly one role | Single accountable owner (TASK-003). |
| `next_action` | M | text | What happens next. |
| `next_action_due` | M | ISO date | When. |
| `status` | M | `open` \| `routed` \| `experiment_proposed` \| `escalated` \| `deferred` \| `closed_converged` | Lifecycle; `closed_*` only for genuine agreement or evidence resolution — **never** for an unsettled contradiction. |
| `grade` | M | A–D (efficacy/relevance/experience as applicable, per TASK-004) | **≤ weakest necessary supporting observation** (R3); separate axes where the lenses graded separately. |
| `uncertainty_note` | M | text (non-empty) | Names ≥1 real unknown (single session, single device/build/region, user-impact unvalidated, one lens absent, …). |

---

## 7. The reconciliation firewall (how the record stays honest)

### 7.1 Four statements, four homes — even across lenses
The same discipline each audit used internally is enforced *across* lenses:
- **Observation** (shared): *what is on the captured frame / in the timing log / in the AX tree* — usually identical across lenses because they read one bundle. Lives in each `positions[].audit_ref`'s underlying record, cited, never re-asserted.
- **Interpretation** (may differ): *which principle the evidence serves or breaks* — this is where lenses legitimately diverge. Each divergent reading is its own `positions[]` entry.
- **Rating/severity** (per lens): preserved from the source audit; never blended into a single number.
- **Hypothesis** (about real users): *what it does to a real user's behaviour/emotion/body* — never settled here; becomes `fix_hypothesis` + `experiment_ref` (D5) and is confirmed/refuted only in TASK-048.

### 7.2 Controlled confidence vocabulary (inherited from TASK-004)
`established` (A-grade science or replicated direct validation) · `likely` (B) · `indicative` (C — repeated qualitative/competitor-pattern observation) · `speculative` (D — expert judgment/analogy/invention). A reconciled item's confidence word must match its `grade` band and may not exceed the strongest *admissible* supporting grade — and never converts a usability/visual grade into a health/efficacy grade.

### 7.3 Banned reconciliation language (rejected at validation)
"The team agreed" (unless `relationship = agreement`/`independent_corroboration` with all positions concordant) · "consensus" · "on balance" / "net-net" used to blend a contradiction · "the majority felt" · "averaging the severity" · "overall score" across lenses · any Adopt/Adapt/Invent/Reject/Defer verdict · "proven" / "validated" / "users prefer" (no users tested) · marketing adjectives carried from a source audit as if reconciled fact. These appear here only as the rules that reject them.

---

## 8. Validation & forbidden-value catalogue

A `REC` record or session is **invalid** if any of the following holds. Validation is mechanical and runs before a session's output enters the teardown dossier.

| # | Rejected condition | Guard |
|---|---|---|
| V1 | `linked_observations` has < 2 ids, or all ids are from one lens. | R1 / D2 |
| V2 | A source audit record was **edited** to match the session (independence broken) instead of a new `positions[]` entry with `position_revised: true`. | §4.1 |
| V3 | `reconciliation_outcome = converged` (or `corroborated`) while `positions[]` are not concordant. | R2 / D1 |
| V4 | A single merged interpretation is recorded with no per-lens `positions[]`, or positions are summarised/paraphrased so the original claim is lost. | R2 / D3 |
| V5 | `relationship = direct_contradiction` or `outcome = preserved_contradiction` with no `contradiction_ref`, or with `winning_position ≠ none`. | R2 / D1 |
| V6 | Any `REC` item with no `reconciliation_outcome`, empty `rationale`, no `owner_role`, or multiple owners. | D4 |
| V7 | A rating/severity was **upgraded/blended** by the session, or a grade exceeds its weakest necessary supporting observation, or a usability/visual grade was promoted to efficacy/health. | R3 |
| V8 | `outcome = needs_experiment` with no `fix_hypothesis` or no proposed `experiment_ref`. | D5 |
| V9 | A `safety_flag` is set but `gate_ref` is empty, **or** a safety-flagged item is marked `converged`/`deferred`/`closed_*` without the gate verdict, **or** a safety flag raised by one lens was out-voted. | R4 |
| V10 | Any `EXP` **outcome/result** is recorded in this document, or an item is marked `closed`/`resolved` on a hypothesis that was not tested. | R4 / D5 |
| V11 | A full session returns `unresolved_count = 0` across a non-trivial touchpoint set with no explanation — a strong smell of smoothing (soft flag → mandatory reviewer check, not auto-reject). | R2 |
| V12 | Banned reconciliation language (§7.3) appears as a finding, or Adopt/Adapt/Invent/Reject/Defer verdict is recorded. | R3 / §7.3 |
| V13 | A new first-order observation about the app (not present in any linked audit) is introduced in a `positions[]` or `rationale`. | R1 |
| V14 | `[TBD]` / Lorem ipsum / TODO / placeholder in any normative field (synthetic `*-SYNTH-*` labels excepted). | CLAUDE.md |

---

## 9. Grading interlock (TASK-004)

- A reconciliation item does **not** mint a new grade; it **carries forward** the grades of its linked observations and records the *resulting* grade as **the lowest grade among the observations the conclusion necessarily depends on** (a conclusion that needs both a C observation and a B observation is C).
- `independent_corroboration` may justify a stronger **confidence narrative** (two independent C-grade lenses converging is more persuasive than one) but **does not raise the letter grade** — single-session, single-device evidence stays single-session evidence (R3; `prd.md` §4).
- Axes stay separate: a `VMA` experience grade and a `BSA` efficacy grade reconciled on the same screen are preserved as **two graded positions**, never summed; the item's efficacy claim can be no stronger than the efficacy evidence, regardless of how strong the experience evidence is.
- `D` (expert judgment/invention) is the ceiling for any user-emotion/user-behaviour claim until a TASK-048 test concludes.

---

## 10. Per-session checklist (facilitator)

- [ ] All five audit sets for the app are **complete and version-stamped**; absences logged as `GAP` before the session (not discovered during it).
- [ ] Touchpoint index built; cross-lens touchpoints (≥2 lenses) identified as candidate `REC` items; single-lens points carried to the dossier, not reconciled.
- [ ] 10–20 min **silent independent review** held before any discussion (anti-anchoring).
- [ ] For each item, **every** involved lens's position captured **verbatim before any rebuttal**.
- [ ] `relationship` and `reconciliation_outcome` assigned from the controlled taxonomies; no free-text verdicts.
- [ ] Every `direct_contradiction` written to `CON` (TASK-008) in the room, with `winning_position: none`.
- [ ] Every `safety_flag` escalated to `gate_ref` (TASK-033) in the room; R14/R15 convened; not out-voted.
- [ ] Every `needs_experiment` item carries a `fix_hypothesis` + a proposed `EXP` (TASK-009); **no result recorded**.
- [ ] Every item has exactly one `owner_role`, a `next_action`, and a `next_action_due`.
- [ ] Separation of duties honoured: facilitator (R03) did **not** decide the routing of any `UXA`-involved contested item (Program Director arbitrated routing).
- [ ] `unresolved_count` reviewed; if 0 over a non-trivial set, re-examined for smoothing (V11).

## 11. Reviewer checklist (Program Director / independent reviewer)

- [ ] Each `REC` item links **≥2 audit records from ≥2 lenses** (V1); no new app observation invented (V13).
- [ ] No source audit was edited to match the room (V2); revisions captured as new positions.
- [ ] Every `tension`/`contradiction`/`trade_off` item **preserves all positions verbatim** (V4); no "team agreed" over real disagreement (V3).
- [ ] Every `preserved_contradiction` has a live `CON` with `winning_position: none` (V5).
- [ ] No grade or severity was upgraded/blended; usability/visual not promoted to efficacy/health (V7).
- [ ] Every `needs_experiment` has a `fix_hypothesis` + proposed `EXP`; **no test outcome** anywhere (V8, V10).
- [ ] Every `safety_flag` carries a `gate_ref` and was not out-voted (V9).
- [ ] No banned language / no Adopt-Adapt-Invent-Reject-Defer verdict (V12); no placeholders (V14).
- [ ] Clearly labelled v0.1, independently reviewable, no fabricated session, observation, or result.

## 12. Clearly-labelled synthetic worked example

> **SYNTHETIC — proves the instrument runs; asserts nothing about any real app or person.** App `APP-SYNTH-Z`, bundle `CAP-SYNTH-Z-01`, journey step `JRN-SYNTH-7` (progress/reward). All `*-SYNTH-*` ids are fictitious. The linked `BSA/UXA/VMA/GCA/IAA-SYNTH-*` records are stand-ins for sibling-task outputs; they report nothing about a real product.

### 12.1 Session header
```yaml
sess_id: REC-SESS-SYNTH-001          # SYNTHETIC
app_id: APP-SYNTH-Z
capture_ref: CAP-SYNTH-Z-01
round: 1
session_date: 2026-11-22
audits_in:
  - BSA-SYNTH-set v0.1
  - UXA-SYNTH-set v0.1
  - VMA-SYNTH-set v0.1
  - GCA-SYNTH-set v0.1
  - IAA-SYNTH-set v0.1               # all five present
participants:
  - {role: R02, lens: behavioral}
  - {role: R03, lens: ux}            # facilitator
  - {role: R04, lens: visual}
  - {role: R08, lens: motion}
  - {role: R09, lens: growth}
  - {role: R10, lens: content}
  - {role: R05, lens: ios}
  - {role: R13, lens: accessibility}
  - {role: R14, lens: clinical}      # convened for REC-SYNTH-003 only
facilitator_role: R03
custodian_role: Program Director
coverage_note: "none — all five lenses audited JRN-SYNTH-7."
rec_ids: [REC-SYNTH-001, REC-SYNTH-002, REC-SYNTH-003]
unresolved_count: 2                  # one preserved_contradiction + one needs_experiment
```

### 12.2 Item A — `independent_corroboration → corroborated` (no grade-up)
```yaml
rec_id: REC-SYNTH-001                # SYNTHETIC
sess_id: REC-SESS-SYNTH-001
anchor: {capture_ref: CAP-SYNTH-Z-01, screen_ref: FR-SYNTH-0042, jrn_ref: JRN-SYNTH-7}
touchpoint_summary: "The reward screen shown after a logged action on JRN-SYNTH-7."
linked_observations: [UXA-SYNTH-014, GCA-SYNTH-009]          # 2 lenses
lenses_involved: [ux, growth]
positions:
  - {lens: ux, auditor_role: R03, audit_ref: UXA-SYNTH-014,
     claim: "Primary action and reward are on one screen; no extra tap to see progress.",
     interpretation: "Low interaction cost to first value (H: minimal steps).",
     rating_or_severity: "2 (minor-positive)", grade: C, evidence_source: structured_expert}
  - {lens: growth, auditor_role: R09, audit_ref: GCA-SYNTH-009,
     claim: "First meaningful value is reached within one action of the home screen.",
     interpretation: "Short time-to-first-value pattern.",
     rating_or_severity: "2 (strength)", grade: C, evidence_source: structured_expert}
relationship: independent_corroboration
reconciliation_outcome: corroborated
rationale: "Two lenses, different reasoning (usability cost vs. activation), same conclusion.
  Confidence narrative strengthened; grade stays C — both are single-session structured-expert readings (R3)."
winning_position: none
grade: C
owner_role: R03
next_action: "Carry as a corroborated strength into the teardown dossier + PAT candidate."
next_action_due: 2026-12-05
status: closed_converged
uncertainty_note: "Single session, single device/region; no user confirms this is experienced as 'value'."
```

### 12.3 Item B — `direct_contradiction → preserved_contradiction` (→ CON, needs experiment)
```yaml
rec_id: REC-SYNTH-002                # SYNTHETIC
sess_id: REC-SESS-SYNTH-001
anchor: {capture_ref: CAP-SYNTH-Z-01, transition_ref: TR-SYNTH-0043, jrn_ref: JRN-SYNTH-7}
touchpoint_summary: "The ~900 ms celebration animation on action-complete."
linked_observations: [VMA-SYNTH-021, BSA-SYNTH-011]          # 2 lenses, same transition
lenses_involved: [motion, behavioral]
positions:
  - {lens: motion, auditor_role: R08, audit_ref: VMA-SYNTH-021,
     claim: "Celebration transition runs ~900 ms (frames 0041–0049).",
     interpretation: "Expressive, continuity-preserving reward motion; reads as purposeful delight.",
     rating_or_severity: "1 (positive)", grade: C, evidence_source: measured}
  - {lens: behavioral, auditor_role: R02, audit_ref: BSA-SYNTH-011,
     claim: "Same 900 ms animation blocks return to the task and repeats every completion.",
     interpretation: "Possible over-reward / friction on repetition; may undermine autonomy and add burden.",
     rating_or_severity: "3 (major-concern)", grade: C, evidence_source: structured_expert}
relationship: direct_contradiction
reconciliation_outcome: preserved_contradiction
rationale: "Both read the SAME measured 900 ms transition; motion calls it delight, behavioral calls it
  repetition-burden. Cannot both be the user's experience. NOT averaged, NOT voted — preserved verbatim and
  routed to a test. Facilitator (R03) did not decide; Program Director arbitrated routing only."
winning_position: none
preserved_positions: [VMA-SYNTH-021, BSA-SYNTH-011]
contradiction_ref: CON-SYNTH-004
fix_hypothesis: "A skippable/shortened reward animation preserves perceived delight while reducing repetition
  burden — tested on returning users over multiple completions."
experiment_ref: EXP-SYNTH-006        # PROPOSED, not run — no result recorded
reconciliation_outcome_secondary: needs_experiment
grade: C
owner_role: R02
next_action: "Register CON-SYNTH-004 (TASK-008) + EXP-SYNTH-006 (TASK-009); schedule for TASK-048."
next_action_due: 2026-12-05
status: experiment_proposed
uncertainty_note: "Delight vs. burden is a user-experience hypothesis; neither is established without the test.
  Timing read off capture frame-rate, not instrumentation."
```

### 12.4 Item C — `trade_off + accessibility safety_flag → escalated_to_gate` (non-compensable)
```yaml
rec_id: REC-SYNTH-003                # SYNTHETIC
sess_id: REC-SESS-SYNTH-001
anchor: {capture_ref: CAP-SYNTH-Z-01, transition_ref: TR-SYNTH-0043, jrn_ref: JRN-SYNTH-7}
touchpoint_summary: "The same celebration animation vs. a Reduce-Motion user."
linked_observations: [IAA-SYNTH-030, GCA-SYNTH-012]          # a11y + growth
lenses_involved: [accessibility, growth]
positions:
  - {lens: accessibility, auditor_role: R13, audit_ref: IAA-SYNTH-030,
     claim: "Reduce-Motion pass: the celebration still plays full motion; no reduced variant.",
     interpretation: "Fails WCAG 2.3.3 (Animation from Interactions) on this transition.",
     rating_or_severity: "severity 4; conformance_verdict: fail", grade: C, evidence_source: measured}
  - {lens: growth, auditor_role: R09, audit_ref: GCA-SYNTH-012,
     claim: "The celebration is positioned as the activation reward moment.",
     interpretation: "Removing/altering it may reduce the reward's salience.",
     rating_or_severity: "2 (trade-off note)", grade: C, evidence_source: structured_expert}
relationship: trade_off
reconciliation_outcome: escalated_to_gate
rationale: "Accessibility raised a severity-4 WCAG fail on a core path. This is a MANDATORY, non-compensable
  gate — the growth trade-off note cannot out-vote it (R4; prd.md §9/§11). Routed to the safety gate; the
  reward can be redesigned to a reduced-motion-safe variant, not kept as-is."
winning_position: none
preserved_positions: [IAA-SYNTH-030, GCA-SYNTH-012]
safety_flag: [accessibility]
gate_ref: GATE-SYNTH-A11Y-002        # → TASK-033
grade: C
owner_role: R13
next_action: "Open TASK-033 accessibility gate; convene R13 (+R14 n/a here); require reduced-motion variant."
next_action_due: 2026-11-29
status: escalated
uncertainty_note: "Single Reduce-Motion capture pass; verdict is on captured output, not a disabled user's
  lived experience (grade ceiling C; harm severity confirmed only in TASK-048)."
```

### 12.5 Validation trace (why the example passes)
- **V1/D2:** every item links ≥2 audit records from ≥2 lenses. ✔
- **V3–V5/D1,D3:** `REC-SYNTH-002` preserves both positions verbatim, `winning_position: none`, routed to `CON-SYNTH-004` — not averaged. ✔
- **V7/R3:** `REC-SYNTH-001` keeps grade C despite corroboration; no severity blended. ✔
- **V8/D5:** `REC-SYNTH-002` carries a `fix_hypothesis` + **proposed** `EXP-SYNTH-006`; **no result** recorded. ✔
- **V9/R4:** `REC-SYNTH-003` severity-4 accessibility flag carries `gate_ref` and is not out-voted by growth. ✔
- **V10:** no experiment outcome anywhere; `REC-SYNTH-002` is `experiment_proposed`, not `closed`. ✔
- **D4:** every item has an outcome, a rationale, one owner, a next action + due date. ✔

---

## 13. Dependencies, open unknowns, change log

**Upstream (consumes):** TASK-018/019/020/021/022 (the five audit record sets) · TASK-017 (`capture_ref`) · TASK-016 (`JRN`) · TASK-006 (`APP`) · TASK-004 (grades) · TASK-003 (roles, separation of duties).
**Downstream (produces / feeds):** TASK-008 (`CON` preserved contradictions, `GAP` coverage gaps) · TASK-009 (`EXP` follow-up experiments, draft `DEC` pointers) · TASK-033 (safety-gate escalations) · the teardown dossiers + Pattern Library (`PAT`) + capability inventory · TASK-030/031 (capability extraction) · TASK-041/042 (Opportunity Atlas) · TASK-048 (concept testing — where the `needs_experiment` hypotheses are finally tested).

**Open unknowns (carried, not invented):**
- U1 — **Real staffing.** Roles are accountable *role types*, not named people; whether R04/R08 (one person wearing two lenses) or R09/R10 attend as one or two voices is a real staffing decision for the Program Director.
- U2 — **Facilitator neutrality.** The R03-is-also-UXA-author tension is handled by Program-Director arbitration of routing on `UXA`-involved items (§0, §4, separation of duties); a fully neutral external facilitator is a proposed alternative, not assumed.
- U3 — **Session granularity.** Whether one session covers one app or batches several is left to the Program Director; the record contract is per-app regardless.
- U4 — **CON/EXP id allocation.** Actual `CON`/`EXP`/`DEC`/`GATE` ids are allocated by the TASK-008/009/033 registers at write time; the ids here are synthetic.

**Change log:** v0.1 (2026-11-22) — initial reconciliation meeting protocol + `REC-SESS`/`REC` record contract; five required outputs (preserved disagreements, linked observations, competing interpretations, resolution decisions, follow-up experiments) made structural; preserve-disagreement firewall (R1–R4); validation catalogue V1–V14; synthetic `REC-SESS-SYNTH-001` worked example. Status: Proposed — no app reconciled.
