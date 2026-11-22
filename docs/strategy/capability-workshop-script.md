# HerRays 90-Minute Capability Extraction Workshop — Facilitation Script

**Deliverable:** TASK-032 — Design the 90-minute capability workshop script
**Workstream:** Capability Extraction (WS02, Phase 3)
**Version:** 0.1 · **Status:** Proposed — script defined, not yet run on any real capability
**Owner (accountable role):** Senior UX/product designer (R03) as workshop facilitator · co-custodian with Head of Product (R01, Capability Extraction Board chair)
**Contributing roles:** Behavioral scientist (R02) · UX researcher (R07) · Motion/interaction designer (R08) · Product analyst/growth (R09) · Content strategist/UX writer (R10) · iOS engineer (R05) · QA/accessibility (R13) · on-call Clinical reviewer (R14) · on-call Privacy/regulatory reviewer (R15)
**Source basis:** `prd.md` §5 Phase 3 (the **"90-minute extraction workshop per important mechanism"** and its six 15-minute blocks — 0–15 observation/user job, 15–30 mechanism/science, 30–45 friction/edge cases, 45–60 independent alternatives, 60–75 novel/technical options, 75–90 document tests and uncertainties — plus the five-layer translation, the 30–50 deep records, the three-alternatives-plus-one-unconventional rule, the streaks worked example, and **"Do not finalize features in this workshop"**), §2 ("Specialists independently audit the same core apps before cross-disciplinary reconciliation. Preserve disagreements."), §6 (COM-B/BCTTv1/SDT/Fogg; guilt/compulsion/burden risks), §11 (quality gates; "Polished unsupported reports do not pass"), §13 Prompt 06 ("Preserve specialist disagreements"), §14 (handoff / acceptance criteria).
**Runs:** the Five-Layer Capability Extraction Worksheet (`↔ TASK-031`) · **Produces:** one `extracted` `CAP` record (`↔ TASK-030`) · **Stops before:** safety gates (`→ TASK-033`), scoring (`→ TASK-034`), decision (`→ TASK-035`), red-team (`→ TASK-036`).

---

## 0. How to read this document

This is a **timed facilitation script** — the minute-by-minute agenda, role seating, facilitation language, independence rules and output template for the single 90-minute meeting that the PRD mandates "per important mechanism" (`prd.md` §5 Phase 3). It is the operational companion to two sibling documents, and it is deliberately scoped to **only** the parts the worksheet explicitly handed off:

- **TASK-031 (the worksheet)** is the *artifact people fill in* — five separated layers, their prompts, cells, Stop-and-check boxes and gate questions. TASK-031 §7 maps those five layers onto the PRD's six workshop blocks and then states: *"The detailed timing, seating, warm-up and facilitation scripts are TASK-032's job."* **This document is that job.**
- **TASK-030 (the `CAP` schema)** is the *destination record* each session produces. This script never redefines a `CAP` field or a grade; it references them (`↔ TASK-030`).
- **TASK-032 (this document)** is the *session* — how 90 minutes are spent, who leads each block, how independent ideation is enforced, what "done" looks like at minute 90, and what is handed off.

> **The one-line purpose.** *Turn one observed product behavior into one complete, evidence-labelled, alternative-rich `CAP` record in 90 minutes — without inventing evidence, without anchoring on the first idea, and without deciding anything.* The decision (Adopt/Adapt/Invent/Reject/Defer) belongs to the Review Board, not this room (`prd.md` §5 Phase 4; `→ TASK-033/034/035`).

> **No-fabrication statement.** This script contains **no real research finding, interview, metric, user quote, attendance record, or completed-session result.** It is a blank meeting instrument plus one *illustrative* dry-run narration (§9). The dry-run reuses the PRD's **own** streaks example (`prd.md` §5 Phase 3) and carries its mechanisms, risks and alternatives with the epistemic status the PRD assigns them — **hypotheses to test, not findings** (all evidence ids synthetic `*-SYNTH-*`). The session output deliberately ends at `decision_status: pending`. Nothing here asserts that any workshop has been run, that any specialist attended, or that any capability was validated. Facilitator checklists, timings and quotas are **proposed defaults**, flagged where a Program-Director confirmation is still open (§11).

### Scope boundary — what this task is and is not

- **IS:** the timed agenda (§4), the per-block facilitation scripts (§5), the session role assignments and seating (§3), the independent-ideation rules (§6), the three-alternatives requirement and how it is enforced in the room (§6.3), the pre-work preconditions (§2), the session output template (§7), the facilitation playbook for overruns/disagreement/parking-lot (§8), and the post-session handoff (§10).
- **IS NOT:** the worksheet's layer prompts/cells/gates (those are TASK-031, referenced not restated); the `CAP` field definitions and validation (TASK-030); any safety gate, weighted score, decision form or red-team (TASK-033/034/035/036, which all run *after* this session on its output); and any claim of a completed or scheduled workshop.

---

## 1. Session design principles (why the 90 minutes are shaped this way)

Five principles govern the script. Each maps to a PRD instruction and to a worksheet working-rule (W1–W5, `↔ TASK-031 §1.2`), so a correctly-run session always yields a schema-valid `extracted` `CAP` record.

| # | Principle | Why | Enforced by |
|---|---|---|---|
| **P1 — One capability, one session.** | A workshop extracts exactly **one** job+mechanism (`↔ TASK-030 §2.1`). Bundled features produce blurred records. | `prd.md` §5 Phase 3 ("per important mechanism") | Pre-work gate (§2.3); facilitator splits bundles before the clock starts. |
| **P2 — Layers stay separated in time.** | The six blocks run the five worksheet layers in order so observation can't silently become "it works" can't silently become "build it." | PRD executive mandate ("Do not build a collage of competitor features"); W1 | Block exit gates (§5); facilitator stops look-ahead. |
| **P3 — Alternatives are generated independently *before* discussion.** | Anchoring on the first idea is the central failure of group ideation; the PRD calls the 45–60 block "**independent** alternatives." | `prd.md` §2 ("Specialists independently audit … before reconciliation"), §5 Phase 3 | The silent-generation protocol (§6). |
| **P4 — Absence is labelled, never filled.** | Every factual cell cites an `EVD`/`APP`/`JRN` id or is tagged `hypothesis`/`invention`; `unknown` is written, not guessed; disagreement is recorded, not resolved. | `prd.md` §4 ("what remains unknown"), §11, Prompt 06; W2/W3 | Per-block Stop-and-checks (§5); the independence & honesty attestation in the output (§7.3). |
| **P5 — The room never decides.** | No gate is scored, no verdict written. The session's last act is handing a `pending` record to the Review Board. | `prd.md` §5 Phase 3 ("**Do not finalize features in this workshop**"), Phase 4 sequencing; W5 | Block 6 exit gate; output template forbids `decision_*` fields (§7). |

---

## 2. Pre-work — preconditions before the clock starts

The 90 minutes are for *extraction*, not for hunting down inputs. A session that opens without its inputs ready will overrun or fabricate. The facilitator (R03) runs a **pre-work gate** at least 24 hours ahead and does not convene the room until all of §2.3 is ✔.

### 2.1 Inputs that must exist (source-linked, no exceptions)

| Input | Record type | Source task | Why it must pre-exist |
|---|---|---|---|
| The **one capability** on the table, named neutrally | worksheet pre-work | `↔ TASK-031 §2` | Defines P1 scope; prevents "three features at once." |
| **Source app(s)** it was observed in | `APP-NNN` | `→ TASK-006` | Layer 1 cannot cite a source that isn't registered. |
| **Our own capture** of the behavior (walkthrough recording / annotated screens) | `EVD-NNN` + `JRN-NNN` | `↔ TASK-005`, `→ TASK-016/017` | Block 1 grades *how well we observed it*; no capture ⇒ hearsay, not observation. |
| Any **behavioral-science evidence** already extracted for this mechanism | `EVD-NNN` | `→ TASK-025` | Block 2 cites real science or honestly labels `hypothesis`; it does not invent studies live. |
| Any **existing user-need / segment** evidence | `NEED-NNN` | `→ TASK-029` | Lets Block 1's user-job cell be graded rather than left `hypothesis`. |
| The **blank worksheet** (copy-ready) | — | `↔ TASK-031 §9` | The artifact the session fills. |

> If an evidence input does **not** yet exist, that is not a blocker to running the session — it is a cell that will be honestly labelled `hypothesis`/`unknown` with an open gap logged (`→ TASK-008`). What is *not* permitted is inventing the missing evidence in the room (P4).

### 2.2 People that must be in the room (and on call)

See §3 for the full seating chart. Minimum to start: the **facilitator (R03)**, a **scribe** (a different role from the facilitator — separation of duties, `↔ TASK-003`), the **behavioral scientist (R02)**, and the **UX researcher (R07)**. The iOS engineer (R05) and a creative lens (R08 motion and/or R10 content) must be present for Blocks 5–6. The **clinical (R14)** and **privacy (R15)** reviewers are **on call, not seated** — the workshop surfaces ethics/clinical/privacy *flags* (Block 3) but does not *run the gates*; the gates are TASK-033, downstream.

### 2.3 Pre-work gate checklist (facilitator signs before convening)

- [ ] **One capability** named in neutral words; bundles split into separate sessions (P1).
- [ ] **≥1 `APP-NNN`** source registered; **≥1 `EVD-NNN` + `JRN-NNN`** of our own capture attached (or provenance explicitly `secondary`, which caps the observation grade — `↔ TASK-004`).
- [ ] Behavioral-science and user-need evidence **linked if it exists**, or the gaps **named** (not silently absent).
- [ ] **Scribe ≠ facilitator**; scribe ≠ the capability's eventual reviewer (separation of duties).
- [ ] **Blank worksheet** open in the shared tool (HerRays OS/Notion) so the record is entered live, not re-keyed later (avoids transcription drift).
- [ ] Required roles confirmed for their blocks; R14/R15 confirmed reachable on call.

> **Gate rule:** if any box is unchecked, the session is **rescheduled**, not run degraded. A workshop that starts without its own observation capture cannot produce a gradeable Layer 1 and will tempt the room to fabricate.

---

## 3. Session role assignments and seating

Roles are **accountable role types (R01–R15, `↔ TASK-003`), never named individuals.** One person may hold one role per session; the facilitator and scribe must be two different people (separation of duties). The table assigns, for each person in the room, their **standing lens** (what they watch for across all 90 minutes) and the **block(s) they lead**.

| Role | Standing lens (all session) | Leads block(s) | Present for | Notes |
|---|---|---|---|---|
| **R03 Senior UX/product designer** | *Facilitator.* Timebox, layer separation, no look-ahead, no decision. | — (facilitates all) | All | Owns the clock and the gates; does **not** also scribe. |
| **Scribe** (any role ≠ R03, ≠ reviewer) | Enters the worksheet live; captures verbatim disagreements and parking-lot items. | — | All | Writes `unknown`/`hypothesis` exactly as said; never "tidies" a guess into a claim. |
| **R07 UX researcher** | User reality: is the job evidenced or assumed? | **Block 1** (0–15, observation/user job) | All | Guards against product-side jobs and fabricated user needs. |
| **R02 Behavioral scientist** | Mechanism honesty: evidenced vs. hypothesized vs. invented; engagement ≠ efficacy. | **Block 2** (15–30, mechanism/science) | All | Prioritizes systematic reviews/RCTs; refuses popularity-as-evidence (W4). |
| **R13 QA/accessibility** | Failure modes, reliability, VoiceOver/Dynamic Type/reduced-motion. | **Block 3** co-lead (30–45, friction/edge) | Blocks 3–6 | Ensures accessibility is concrete, not "it's accessible." |
| **R10 Content strategist/UX writer** | Tone, autonomy, coaching anti-patterns, guilt language. | **Block 3** co-lead (friction/edge) | Blocks 3–6 | Flags patronizing/guilt-inducing copy for Block-3 ethics flags. |
| **R09 Product analyst/growth** | Is a "metric" real or inferred? Is popularity being smuggled in as efficacy? | floor (challenges) | Blocks 2–6 | Guards W4; also frames the smallest-test measurement in Block 6. |
| **R05 iOS engineer** | Native feasibility, HealthKit/widgets/haptics, on-device limits. | **Block 5** co-lead (60–75, novel/technical) | Blocks 4–6 | Supplies `technical_implications`; never over-promises feasibility (`unknown` is allowed). |
| **R08 Motion/interaction designer** | Feedback, timing, reduced-motion; inventive interaction alternatives. | **Block 5** co-lead (novel/technical) | Blocks 4–6 | Helps generate the one genuinely unconventional option. |
| **R01 Head of Product** | Strategic relevance; polices "no decision in this room" (P5). | **Block 6** (75–90, tests/uncertainties) | Blocks 4–6 | Chairs the handoff; ensures `decision_status` stays `pending`. |
| **R14 Clinical reviewer** | *On call.* Receives Block-3 clinical flags; does **not** run the gate here. | — (consulted) | On call | Clinical gate is `→ TASK-033`, downstream. |
| **R15 Privacy/regulatory reviewer** | *On call.* Receives Block-3 privacy/data flags. | — (consulted) | On call | Privacy gate is `→ TASK-033`, downstream. |

> **Pods (`prd.md` §2):** the seated roles span Behavior & Research (R02, R07, R10), Experience & Creative (R03, R08), Engineering & Data (R05, R09) and Quality & Clinical (R13, with R14/R15 on call). This cross-pod composition is the point: a mechanism is examined by science, craft, engineering and quality *in the same room*, with disagreements preserved rather than averaged (Prompt 06).

---

## 4. The timed agenda (at a glance)

The agenda is the PRD's six 15-minute blocks (`prd.md` §5 Phase 3) made operational. Total **90 minutes**, hard-stopped. Each block advances one or two worksheet layers (`↔ TASK-031`) and ends with an **exit gate** the facilitator must hear answered `yes` before the clock moves on.

| Block | Clock | PRD block (verbatim intent) | Lead | Worksheet layer(s) advanced | Exit gate (short form) |
|---|---|---|---|---|---|
| **0** | −5→0 | *(warm-up — not in PRD count)* | R03 | Pre-work confirmed; rules read aloud | Inputs present; rules understood |
| **1** | 0–15 | observation / user job | R07 | **Layer 1** (observable) **+ open Layer 2** (user job) | Pure observation; user-side job labelled evidenced/`hypothesis` |
| **2** | 15–30 | mechanism / science | R02 | **Layer 3** (mechanism) + grade **Layer 2** | Mechanism in behavioral terms; status honest |
| **3** | 30–45 | friction / edge cases | R13 + R10 | **Layer 4** (downsides/ethics/accessibility/evidence) | Downsides non-empty; efficacy separate; flags raised |
| **4** | 45–60 | **independent** alternatives | R03 (facilitates silent gen) | **Layer 5** alternatives (**≥3**) | ≥3 genuinely distinct alternatives, each serving the same job |
| **5** | 60–75 | novel / technical options | R08 + R05 | **Layer 5** novel option + `technical_implications` | Exactly **one** invention; feasibility noted or `unknown` |
| **6** | 75–90 | document tests & uncertainties | R01 | **Layer 5** validation + open gaps; finalize record | Testable hypothesis; **no verdict**; record `extracted` |

---

## 5. Per-block facilitation scripts

Each block below gives the **objective**, the **lead and floor**, a **facilitation script** (what the facilitator literally says/does), the **inputs/outputs** (which worksheet cells / `CAP` fields are touched), a **Stop-and-check** (the block's characteristic failure, cross-referenced to the worksheet's deeper list), and the **exit gate**. Timings are targets; §8 covers overruns.

### Block 0 — Warm-up & rules (−5 → 0 min)

- **Objective:** everyone knows the one capability, the rules, and that *this room does not decide*.
- **Lead:** R03. **Floor:** all seated.
- **Facilitator script:**
  1. State the **one capability** in neutral words and show its source `APP`/`EVD`/`JRN` ids on screen.
  2. Read aloud the **one-sentence test** (`↔ TASK-031 §1.2`): *"Can a reader tell, from each cell alone, whether it is something we SAW, something we THINK, or something we want to DO?"*
  3. State the two hard rules for today: *"We label every absence — `unknown`, `hypothesis`, `invention` — we never fill it with a guess (P4). And we write no Adopt/Adapt/Invent/Reject/Defer verdict — that's the Review Board's job (P5)."*
  4. Confirm the scribe is not the facilitator and not the eventual reviewer.
- **Exit gate →** inputs on screen, rules read, scribe seated. Start the clock.

### Block 1 — Observation & user job (0–15 min) · *Layer 1 + open Layer 2*

- **Objective:** capture **only what is observable**, then name the **user's job** — from the user's side — and honestly label whether the job is evidenced.
- **Lead:** R07 (UX researcher). **Floor:** all; R02 silent (do not pre-empt mechanism).
- **Facilitator script:**
  - *"Describe it as a camera would. If a word implies purpose or benefit — 'motivates', 'delightful', 'because' — I'll stop you; that belongs to a later block."*
  - Walk the captured recording (`EVD-NNN`). Fill `observed_feature`, `source_journeys`, `observation_evidence`, `provenance` (`direct`/`secondary`), `observation_grade` (A–D, *observation only*; single direct observation ceilings at B, `↔ TASK-004`).
  - Then **open** Layer 2: *"Finish 'When I ___, I want to ___, so I can ___' — from the user's side, not the product's."* Record `user_job`, provisional `user_context`/segment, and `job_evidence` (an `EVD`/`NEED` id **or** the literal `hypothesis`). Grade or `n/a`.
- **Stop-and-check (block):** smuggled "because"; marketing screenshot treated as direct observation; the *business's* goal ("drive daily opens") written as the *user's* job. (Full list: `↔ TASK-031 §4 L1/L2`.)
- **Exit gate →** *"Is every Layer-1 sentence visible-on-screen with zero 'because', and is the job stated user-side and labelled evidenced or `hypothesis`?"*

### Block 2 — Mechanism & science (15–30 min) · *Layer 3 (+ grade Layer 2)*

- **Objective:** name the **behavioral mechanism(s)** and state each one's **epistemic status** honestly; grade the user job if evidence now supports it.
- **Lead:** R02 (behavioral scientist). **Floor:** R07, R09, R10.
- **Facilitator script:**
  - *"By what behavioral lever might this serve the job? Name it in established terms — COM-B, a BCTTv1 technique, SDT autonomy/competence/relatedness, Fogg, habit/implementation-intention (`prd.md` §6). If there's more than one plausible lever, list them all — don't force one."*
  - Record `mechanism` and `mechanism_status` ∈ {`evidenced` | `hypothesized` | `contested` | `invented`}. **Default `hypothesized`** for anything merely observed in a competitor.
  - R09 watches for **popularity-as-evidence**: *"'It's App of the Day so it works' is not a mechanism and not evidence — strike it (W4, `prd.md` §3)."*
- **Stop-and-check (block):** hypothesis dressed as fact ("streaks work *because* of loss aversion"); only one mechanism considered (anchoring); mechanism = feature name. (`↔ TASK-031 §4 L3`.)
- **Exit gate →** *"Is the mechanism named in behavioral terms with its status stated honestly, defaulting to `hypothesized` for competitor-observed levers?"*

### Block 3 — Friction, edge cases & limitations (30–45 min) · *Layer 4*

- **Objective:** stress-test the mechanism — grade its **efficacy separately** from the observation, attach supporting **and** contradictory evidence, and surface **non-empty downsides**, ethics/clinical/privacy flags, accessibility costs and transferability to midlife women.
- **Lead:** R13 (QA/accessibility) + R10 (content). **Floor:** R02, R07; R14/R15 **on call** to receive flags.
- **Facilitator script:**
  - *"What backs the mechanism — graded — and what breaks it? Cite real `EVD` or say `hypothesis`. Never omit the contradicting evidence (`prd.md` Prompt 06)."* Record `supporting_evidence`, `contradictory_evidence` (**preserved, never averaged**, W3 → opens a `CON`, `→ TASK-008`), `efficacy_grade` (**independent** of the Block-1 observation grade, or honest `n/a`), `transferability`, `confidence`.
  - *"What goes wrong, and who does it harm?"* Record **non-empty** `downsides` (guilt/compulsion/burden/excessive tracking, `prd.md` §6), `positive_experience`, `ethics_flags` `{issue, severity}`, concrete `accessibility_notes` (name the VoiceOver / Dynamic Type / reduced-motion / contrast path), honest `herrays_relevance` (including low/negative).
  - **Flag, don't gate:** any clinical, privacy, manipulation or unsupported-claim concern is written as a *flag* and routed to R14/R15 on call. *"We raise it here; we do not run the gate here — the gate is the Review Board's (`→ TASK-033`)."*
- **Stop-and-check (block, the most-faked layer):** observation grade laundered into efficacy; popularity smuggled in as efficacy (W4); contradiction averaged away; empty downsides; "accessible" with no specifics. (`↔ TASK-031 §4 L4`.)
- **Exit gate →** *"Is efficacy graded separately and sourced (or honest `n/a`); are downsides non-empty; is every contradiction preserved; is no popularity doing efficacy work; are clinical/privacy/accessibility flags raised and routed?"*

### Block 4 — Independent alternatives (45–60 min) · *Layer 5 alternatives (≥3)*

- **Objective:** generate **at least three genuinely distinct** alternative ways to serve the **same** user job (Layer 2) — especially ones that fix a Block-3 downside. **This is the block where independence is enforced** (§6).
- **Lead:** R03 facilitates the **silent-generation protocol**; every seated role participates. **This block does not pick a winner.**
- **Facilitator script (the independence protocol, §6 in full):**
  1. *"Silently and alone, for 5 minutes, each of you write at least two alternatives that serve the same job. No talking, no screens shared."* (Anti-anchoring, `prd.md` §2.)
  2. *"Round-robin: one alternative each, no critique yet. Scribe captures every one verbatim."*
  3. *"Now cluster duplicates and keep the genuinely distinct ones. We need **≥3 that each serve the job differently** — three recolorings of a streak count as **one**."*
  - Record each surviving alternative as `{summary, rationale, serves_same_job, evidence_or_label}`, each tied to a downside it targets.
- **Stop-and-check (block):** alternatives that are the same idea restyled; discussion starting *before* silent generation (anchoring); a winner sneaking in ("obviously we'll do the flexible one" — **stop; that's the Review Board**, P5). (`↔ TASK-031 §4 L5`.)
- **Exit gate →** *"Are there **≥3 genuinely distinct** alternatives, each serving the same job, each tied to a downside — with no ranking and no winner chosen?"* (The three-alternatives requirement; §6.3.)

### Block 5 — Novel & technical options (60–75 min) · *Layer 5 novel + technical*

- **Objective:** invent **exactly one** genuinely unconventional option, and attach **technical implications** (feasibility hint or honest `unknown`).
- **Lead:** R08 (motion/interaction) + R05 (iOS). **Floor:** all.
- **Facilitator script:**
  - *"Invent one option no competitor would ship — something that inverts a convention, not a tweak. 'A streak but weekly' is an adaptation, not an invention. The novel option should make a competitor say 'that's not a habit app.' Label it `invention`."* Record `novel_alternative` `{summary, rationale, why_unconventional, evidence_or_label: invention}`.
  - R05: *"For the ≥3 alternatives and the novel option, what's the native iOS reality — HealthKit, widgets, Live Activities, haptics, on-device limits? If we don't know, write `unknown`; don't over-promise (`→ TASK-037/039)."* Record `technical_implications`.
- **Stop-and-check (block):** the "unconventional" option is really a tweak; feasibility over-claimed instead of `unknown`. (`↔ TASK-031 §4 L5`.)
- **Exit gate →** *"Is there exactly **one** option genuinely labelled `invention`, and are technical implications noted or honestly `unknown`?"*

### Block 6 — Tests, uncertainties & handoff (75–90 min) · *Layer 5 validation + close*

- **Objective:** define the **smallest experiment** that would decide between the options, log open gaps and preserved disagreements, and **close the record at `extracted` / `decision_status: pending`** — handing it to the Review Board. **No feature is finalized (`prd.md` §5 Phase 3).**
- **Lead:** R01 (Head of Product). **Floor:** all.
- **Facilitator script:**
  - *"Name the one experiment that would confirm or refute adoption, and what success looks like — meaningful repeated action and perceived autonomy, not merely app opens (`prd.md` §5 Phase 3)."* Record `validation` `{test_hypothesis` (mandatory)`, smallest_experiment, success_criteria, exp_ref: none-until-registered` (`→ TASK-009`)`}`.
  - *"Log a `GAP-NNN` for every `n/a`-by-missing-evidence (`→ TASK-008`). Capture every unresolved disagreement as `{role, position, evidence_ref}` — we preserve it, we don't average it (Prompt 06)."* Record `open_gaps`, `disagreements`.
  - **Close:** confirm `decision_status` is `pending`; confirm no `safety_gate`, `scores` or `decision_*` field was touched (those are downstream). Read the completion checklist (§7.2). Hand off.
- **Stop-and-check (block):** an alternative with no test (an opinion, not a candidate); a verdict written anywhere (P5 violation). (`↔ TASK-031 §4 L5`.)
- **Exit gate →** *"Is there a testable hypothesis with success criteria; are gaps and disagreements logged; and is the record `extracted` with **no verdict written**?"* If yes → **record complete; hand to Review Board.**

---

## 6. Independent ideation rules (the anti-anchoring protocol)

The PRD names the 45–60 block "**independent** alternatives" and §2 requires specialists to work "independently … before cross-disciplinary reconciliation." Anchoring — the whole room converging on the first idea spoken — is the single most common way group ideation collapses into a competitor-feature collage. These rules make independence a procedure, not an aspiration.

### 6.1 Silent generation first (mandatory)

- **No discussion of alternatives may begin until every participant has written their own, alone.** The facilitator sets a visible 5-minute timer; screens are not shared; no one speaks.
- Each participant writes **≥2** candidate alternatives that serve the **same user job** (Layer 2). Minimum individual output guards against free-riding.
- **Rationale:** the first idea spoken sets an anchor the group unconsciously optimizes around. Silent generation produces a genuinely divergent pool before any anchor forms.

### 6.2 Round-robin surfacing, critique deferred

- Alternatives are surfaced **one per person, round-robin**, scribe capturing **verbatim**. **No critique during surfacing** — evaluation suppresses contribution.
- Only after all are on the board does the room **cluster duplicates** and **critique for distinctness** (does each serve the job *differently*?).

### 6.3 The three-alternatives rule — enforced, not aspirational

The PRD requires "**three alternatives plus one unconventional alternative**" per capability (`prd.md` §5 Phase 3), and the acceptance criterion for this task requires the script to *"require three alternatives per capability."* The script enforces it structurally:

- **Block 4 cannot exit** until **≥3 genuinely distinct** alternatives exist (each serving the same job, each tied to a downside). Three restylings of one idea count as **one** and fail the gate.
- **Block 5 cannot exit** until **exactly one** option is labelled `invention` (the unconventional one).
- If, at the Block-4 hard stop, fewer than three distinct alternatives exist, the facilitator does **not** pad the list with near-duplicates (that would fabricate divergence). Instead the capability is marked `extraction_incomplete` with an `open_gap` ("insufficient distinct alternatives generated") and **re-queued** for a follow-up ideation block — honest incompleteness over fake breadth (P4; `↔ TASK-031 §5` completion checklist).

### 6.4 Disagreement is preserved, not resolved

- When specialists disagree on a mechanism, a grade, or an alternative's merit, **both positions are recorded** as `disagreements` `{role, position, evidence_ref}` and carried into the `CAP` record. The workshop does **not** vote to a consensus that erases a minority evidence-backed view (`prd.md` §2, Prompt 06). Reconciliation is a separate, later step (`→ TASK-023`).

---

## 7. Session output template

The session produces **one artifact that is two things at once**: the filled worksheet *is* the `extracted` `CAP` record (entered live to avoid re-keying), **plus** a short **session log** that evidences the process ran honestly. Both are below.

### 7.1 Primary output — the filled worksheet / `CAP` record

The session fills the TASK-031 blank worksheet (`↔ TASK-031 §9`), which maps field-for-field to the `CAP` record (`↔ TASK-030 §3`). This script does **not** restate those fields. The workshop's job is to make sure, at minute 90, that:

- all five layers are filled per the worksheet completion checklist (`↔ TASK-031 §5`);
- every factual cell is an id or a label (P4);
- `decision_status` is `pending` and no `safety_gate`/`scores`/`decision_*`/`red_team` field is set (P5; those are `→ TASK-033/034/035/036`).

### 7.2 Session completion checklist (facilitator reads aloud at minute ~88)

- [ ] **One capability** (P1); bundles were not smuggled in.
- [ ] **Block 1:** `observed_feature` camera-neutral; ≥1 `source_apps`; `observation_evidence` present for `direct` provenance; `observation_grade` set and **not** reused as efficacy.
- [ ] **Block 1–2:** `user_job` user-side; `job_evidence` an id or `hypothesis`; `mechanism` in behavioral terms; `mechanism_status` honest.
- [ ] **Block 3:** `efficacy_grade` independent of observation; supporting **and** contradictory evidence attached (or `none` + open gap); **non-empty `downsides`**; `ethics_flags` reviewed and clinical/privacy flags routed to R14/R15; concrete `accessibility_notes`; `transferability` + `confidence` set; **no popularity in efficacy**.
- [ ] **Block 4:** **≥3 genuinely distinct `alternatives`** (the three-alternatives rule, §6.3).
- [ ] **Block 5:** **exactly one** `novel_alternative` labelled `invention`; `technical_implications` noted or `unknown`.
- [ ] **Block 6:** `validation.test_hypothesis` present; `open_gaps` and `disagreements` logged.
- [ ] **No verdict (P5):** `decision_status` = `pending`; no downstream field touched.

> If any box is unchecked, the record rests at `extraction_incomplete` and is re-queued (§6.3) — it does **not** advance to the Review Board. A polished-but-incomplete record does not pass (`prd.md` §11).

### 7.3 Secondary output — the session log (process evidence)

A short, factual log attached to the `CAP` record. It is **not** research data; it is proof the *process* ran as designed. Copy-ready skeleton:

```yaml
# HerRays Capability Workshop — Session Log
# Factual process record. NOT research evidence. No fabricated attendance/results.
session_id: ""                 # WKSHP-NNN
capability_ref: ""             # CAP-NNN produced (↔ TASK-030)
worksheet_ref: ""             # the filled TASK-031 worksheet (same artifact as CAP record)
date: ""                       # actual session date — left blank until a real session runs
facilitator_role: R03
scribe_role: ""                # ≠ R03, ≠ eventual reviewer
roles_present: []              # [R02, R07, R13, R10, R09, R05, R08, R01, ...] — ACTUAL, not planned
roles_on_call: [R14, R15]      # consulted for flags; did NOT run gates here
blocks:
  - {block: 1, started_min: 0,  ended_min: 0,  overran: false, notes: ""}
  - {block: 2, started_min: 0,  ended_min: 0,  overran: false, notes: ""}
  - {block: 3, started_min: 0,  ended_min: 0,  overran: false, notes: ""}
  - {block: 4, started_min: 0,  ended_min: 0,  overran: false, notes: ""}
  - {block: 5, started_min: 0,  ended_min: 0,  overran: false, notes: ""}
  - {block: 6, started_min: 0,  ended_min: 0,  overran: false, notes: ""}
independence_attestation:      # the anti-anchoring protocol (§6) actually ran
  silent_generation_ran: null  # true | false — set from the real session
  min_individual_alternatives_met: null
  distinct_alternatives_count: null   # MUST be ≥3 to advance (§6.3)
  invention_count: null               # MUST be exactly 1
clinical_privacy_flags_raised: []     # flags routed to R14/R15 (→ TASK-033); [] if none after review
parking_lot: []                # out-of-scope items deferred (§8.3)
completion_state: ""           # extracted | extraction_incomplete
decision_status: pending       # ALWAYS pending at session end (P5)
next_step: "→ TASK-033 safety gate (Review Board)"
```

> Every field is left blank/`null` in this template because **no session has run.** `date`, `roles_present`, timings and `independence_attestation` are populated **only from a real session** — never pre-filled (P4; `prd.md` §4 "Never fabricate … completed work").

---

## 8. Facilitation playbook (keeping 90 minutes honest)

### 8.1 Timeboxing and overruns

- Blocks are **hard-stopped** at their minute. If a block is not done, the facilitator does **not** borrow from a later block (that would compress alternatives or validation — the two blocks fabrication pressure is highest).
- **Overrun rule:** if Block 1–3 overruns, the unfinished cell is marked `unknown`/`hypothesis` with an `open_gap` and the session continues on the clock; the gap is resolved before Review Board, not faked live. If Block 4–6 cannot complete, the record is `extraction_incomplete` and a **follow-up ideation/validation block** is scheduled (§6.3) — honest re-queue over a rushed, padded record.
- A capability that repeatedly overruns is a signal it is **bundled** (two jobs) — split it (P1) and run two sessions.

### 8.2 When the room tries to decide (P5 breach)

The most common drift is the room converging on a favourite ("let's just do the flexible streak"). The facilitator's standing line: *"That's a Review-Board decision, not ours. Record it as an alternative; leave `decision_status: pending`."* Ranking, scoring and Adopt/Adapt/Invent/Reject/Defer are **explicitly out of scope** (`→ TASK-034/035`).

### 8.3 Parking lot

Anything out of scope for *this capability* — a different feature someone noticed, a tooling idea, a staffing question — goes to a visible **parking lot** and into the session log's `parking_lot`, so the clock is protected and the thought isn't lost.

### 8.4 Remote / asynchronous variant

The silent-generation protocol (§6.1) runs well remotely (each participant types alternatives into a private field before any are revealed), which can *strengthen* independence vs. a shared whiteboard. Timings and gates are unchanged. (Proposed default; confirm against the team's tooling — §11.)

---

## 9. Illustrative dry-run narration (synthetic — no real session)

To show the script runs end-to-end, here is a **narrated dry run** on the PRD's **own** streaks example (`prd.md` §5 Phase 3). It reuses the fully-worked synthetic worksheet from `↔ TASK-031 §8` as the record the session produces; here we narrate the **meeting** that produces it. **Nothing below asserts a real session, attendee, metric, or result** — all evidence ids are synthetic (`*-SYNTH-*`) and the record ends undecided.

> **⚠️ ILLUSTRATIVE (synthetic).** No workshop was held; no person attended; no capability was validated. This narration demonstrates *the agenda and gates*, not an outcome.

- **Pre-work gate (§2.3):** facilitator R03 confirms the one capability ("consecutive-day streak counter"), source `APP-SYNTH-001`, our capture `EVD-SYNTH-010` + `JRN-SYNTH-005` (missed-day journey), blank worksheet open, scribe R09 (≠ facilitator, ≠ reviewer). ✔ Convene.
- **Block 0 (−5→0):** R03 reads the one-sentence test and the two hard rules (label absence; no verdict).
- **Block 1 (0–15), R07 leads:** records `observed_feature` = *"a visible counter increments by 1 per consecutive completed day and resets to 0 after a missed day; shown on the home surface"* (camera-neutral), `provenance: direct`, `observation_grade: B`. Opens Layer 2: `user_job` = *"make my repeated effort feel worth continuing"*; `job_evidence: hypothesis`; `job_grade: n/a` → `GAP-SYNTH-003`. **Gate 1 ✔** (no "because"; job user-side, labelled).
- **Block 2 (15–30), R02 leads:** `mechanism` = *"hypothesized positive reinforcement + feedback + loss-averse commitment device"*; `mechanism_status: hypothesized`. R09 strikes an attempted "it's popular so it works." **Gate 2 ✔.**
- **Block 3 (30–45), R13+R10 lead:** `efficacy_grade: n/a` (**not** copied from the B observation grade); `contradictory_evidence: EVD-SYNTH-022` (abandonment-after-break signal) **preserved**, opening a `CON`; `downsides` = *"shame / all-or-nothing after a miss; punitive reset"*; `ethics_flags: [{issue: loss-aversion guilt undermines autonomy, severity: high}]` routed to R14 on call; `accessibility_notes` name the reduced-motion/VoiceOver path; `transferability: unknown`; `confidence: speculative`. **Gate 3 ✔.**
- **Block 4 (45–60), silent generation then round-robin:** three **distinct** alternatives survive clustering — (1) flexible weekly consistency, (2) non-resetting cumulative milestones, (3) narrative progress — each tied to the post-miss shame downside. **Gate 4 ✔** (≥3 distinct; no winner).
- **Block 5 (60–75), R08+R05 lead:** one `invention` — *"celebrate **returning** after a disruption,"* inverting the reset from punishment into recovery support; `technical_implications: unknown` (`→ TASK-037/039` not yet assessed). **Gate 5 ✔** (exactly one invention).
- **Block 6 (75–90), R01 chairs:** `validation.test_hypothesis` = *"do the alternatives improve meaningful repeated action and perceived autonomy — not merely app opens — vs. a resetting streak?"*; `smallest_experiment` = A/B on the missed-day journey; `exp_ref: none`; `open_gaps: [GAP-SYNTH-003]`; `disagreements: none` (single scribe). `decision_status: pending`. **Gate 6 ✔ → hand to Review Board.**

**Why the dry run is correct:** observation grade (`B`) and efficacy grade (`n/a`) stay different cells (P2/W-of-C1); every absence is labelled (P4); popularity never touches efficacy (W4); the contradiction is preserved not averaged (W3); and the session ends in possibilities with **no verdict** (P5). The agenda produced a complete `extracted` record in six timeboxed blocks.

---

## 10. Post-workshop handoff

At minute 90 the session hands off and **stops**. The `extracted` `CAP` record + session log flow, in order:

1. **`→ TASK-033` Capability safety gate** — clinical/privacy/manipulation/accessibility/unsupported-claim gates run **first**, on the flags this session *raised* (not ran). Non-compensable (`prd.md` §5 Phase 4, §11).
2. **`→ TASK-034` Weighted scorecard** — user value / evidence / UX / differentiation / long-term / feasibility, **only after** gates pass.
3. **`→ TASK-035` Adopt/Adapt/Invent/Reject/Defer decision form** — the verdict this room refused to write.
4. **`→ TASK-036` Red-team** challenges high-priority capabilities.
5. **`→ TASK-009` Decision & experiment registers** — the `validation.exp_ref` becomes an `EXP`; the eventual decision becomes a `DEC`.
6. **`→ TASK-008`** consumes `open_gaps`, `contradictory_evidence` and `disagreements`; **`→ TASK-023`** reconciles preserved disagreements.
7. Approved records populate the **Capability Mechanism Library** (`CAP-001`, `prd.md` §4) feeding Opportunity Synthesis (`→ TASK-041/042`).

---

## 11. Governance, dependencies, open unknowns, change control

- **Custodian:** R03 (facilitator) owns the script instrument; R01 (Board chair) co-owns its fit to the extraction process; the Program Director versions it in the change log. Per-session roles are **role types** (`↔ TASK-003`), never named individuals; facilitator ≠ scribe ≠ eventual reviewer (separation of duties).
- **Where it is applied:** WS02 Phase 3 capability extraction (`prd.md` §5/§12 Week 4), once **per important mechanism**, across the 30–50 deep-record corpus (`prd.md` §5 Phase 3).
- **Dependencies:**
  - `↔ TASK-031` Five-layer worksheet — the **artifact this session fills**; §7 of TASK-031 maps its layers to these six blocks and explicitly defers timing/seating/warm-up/facilitation to here. This script never redefines a layer, prompt, cell or gate.
  - `↔ TASK-030` `CAP` record schema — the **record produced**; the script enforces completeness and the `pending`/no-verdict close, never redefines a field.
  - `↔ TASK-004` Evidence grading rules — A–D grades, epistemic labels (`mechanism_status`), confidence words, and the "observation grade ≠ efficacy grade" rule the blocks enforce.
  - `↔ TASK-005 / →TASK-006 / →TASK-016/017` — `EVD`/`APP`/`JRN` inputs the pre-work gate requires.
  - `→ TASK-025` Behavior-change evidence extraction — the `EVD` science cited in Block 2/3.
  - `→ TASK-029` User-needs synthesis — `NEED`/segment evidence that upgrades Block-1 `job_evidence` from `hypothesis`.
  - `→ TASK-022` iOS & accessibility audit — basis for Block-3 `accessibility_notes`.
  - `→ TASK-033/034/035/036` — consume this session's output; the session **stops before** all of them (P5).
  - `→ TASK-008` gap/contradiction log · `→ TASK-009` decision/experiment registers · `→ TASK-023` reconciliation — downstream homes of gaps, disagreements, experiments and the eventual decision.
  - `← TASK-002 / TASK-003` — workstream registry and responsibility matrix supply roles, pods and separation-of-duties.
- **Open unknowns (recorded, not defects):**
  - Whether silent generation (§6.1) should require written submission *before* any reveal in all modes or allow facilitated build-on in co-located rooms — proposed default: **independent-first, always**, confirmed against real session dynamics.
  - Whether a very simple capability warrants the full 90 minutes or a compressed ~45-minute variant — proposed default: **full 90 for any capability entering the 30–50 deep-record corpus**; simpler patterns stay in the Pattern Library (`PAT-001`), not the Capability Library (mirrors `↔ TASK-031 §10`).
  - Whether R14/R15 should be **seated** rather than on-call for capabilities touching clinical/sensitive-data surfaces — proposed default: **on-call for flag-raising**, seated only when the pre-work shows a likely clinical/privacy surface; Program-Director confirmation open.
  - The exact `WKSHP-NNN` session-id scheme and its link cardinality to `CAP` (1:1 expected) — proposed default 1 session : 1 capability : 1 `CAP` record; confirmed against HerRays OS/Notion modelling.

### Change log

| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial script: session design principles (P1–P5); pre-work preconditions and gate (§2); session role assignments/seating (§3); the timed six-block agenda (§4) with per-block facilitation scripts, inputs/outputs, Stop-and-checks and exit gates (§5); the independent-ideation anti-anchoring protocol and the enforced three-alternatives rule (§6); the session output template (filled worksheet / `CAP` record + session log with independence attestation, §7); facilitation playbook for overruns/decision-drift/parking-lot/remote (§8); one synthetic illustrative dry-run narration (§9); post-workshop handoff chain (§10); and governance/dependencies/open-unknowns (§11). No real session, attendance, metric or result asserted; output closes at `decision_status: pending`. | Senior UX/product designer (R03) / Head of Product (R01) |
