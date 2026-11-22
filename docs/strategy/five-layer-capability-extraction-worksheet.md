# HerRays Five-Layer Capability Extraction Worksheet

**Deliverable:** TASK-031 — Build the five-layer capability extraction worksheet
**Workstream:** Capability Extraction
**Version:** 0.2 · **Status:** Proposed — worksheet defined, not yet run on any real capability
**Owner (accountable role):** Senior UX/product designer (extraction facilitator) · co-custodian with Head of Product (Capability Extraction Board chair)
**Contributing roles:** Behavioral scientist · Motion/interaction designer · UX researcher · Product analyst/growth · iOS engineer · QA/accessibility · Clinical reviewer · Privacy/regulatory reviewer
**Source basis:** `prd.md` §5 Phase 3 (the five-layer translation — observed feature → user job → mechanism → evidence/limitations → alternative solutions — plus capability mechanism extraction, the 30–50 deep records, the streaks worked example and the 90-minute workshop), §3 "Strong documented examples" item 4 ("translate the visible feature into user job, underlying mechanism, possible benefit, downside, evidence, alternatives and validation question") and item 6 ("annotated reference patterns … not mandatory features"), §5 Phase 4 (safety gates first, then value), §6 (COM-B/BCTTv1/SDT/Fogg; guilt/compulsion/burden risks), §11 (quality gates), §13 Prompt 06, §14 (handoff / acceptance criteria)
**Writes into:** the `CAP` record (`↔ TASK-030`) · **Run inside:** the 90-minute workshop (`→ TASK-032`)

---

## 0. How to read this document

This is a **reusable facilitation instrument** — a worksheet a team fills in, together, to turn *one observed product behavior* into a *structured, graded, reviewable capability record*. It is the **process** that populates the `CAP` record whose fields TASK-030 defines (`↔ TASK-030`). Where TASK-030 answers *"what is stored and how is it validated,"* this worksheet answers *"what do we ask, in what order, and how do we stop ourselves from skipping a step or inventing an answer."*

The worksheet is organized around the five layers the PRD mandates (`prd.md` §5 Phase 3):

> **Layer 1 — Observable feature** → **Layer 2 — User job** → **Layer 3 — Mechanism** → **Layer 4 — Evidence & limitations** → **Layer 5 — Design possibilities (alternatives).**

The single most important design decision in this worksheet is **physical separation of the layers**. Each layer has its own page, its own prompts, and a **gate question** that must be answered before the next layer may be started. This is not bureaucratic ceremony: it is the structural mechanism that stops the Lab from sliding — in a single sentence — from *"this app has streaks"* (an observation) to *"streaks work"* (an unproven hypothesis) to *"we should build streaks"* (a decision). The PRD's executive mandate is explicit: **"Do not build a collage of competitor features."** Layer separation is how that mandate becomes an everyday working habit rather than a slogan.

> **No-fabrication statement.** This worksheet contains **no real research finding, interview, metric, user quote, or clinical outcome.** It is a blank instrument plus one fully-worked *illustrative* example. The worked example (§8) is the PRD's **own** streaks example (`prd.md` §5 Phase 3), whose mechanisms, risks, alternatives and required test are reproduced **as the PRD frames them — hypotheses to test, not findings** — and are carried through the worksheet with that epistemic status preserved (every evidence id is synthetic `*-SYNTH-*`; the mechanism is marked `hypothesized`; no decision is reached). The worksheet is deliberately built so that fabrication is *hard to commit and easy to catch*: every cell that asserts a fact demands either a resolvable evidence id (`↔ TASK-005`) or an explicit `hypothesis` / `invention` label (`↔ TASK-004 §2`), and each layer's **Stop-and-check** box names the specific ways that layer is usually faked.

### Scope boundary — what this task is and is not

- **TASK-031 (this document) = the *worksheet* (the instrument people fill in).** It owns the prompts, the per-layer gate questions, the separation rules, the facilitation notes, the blank template, and the worked streak example. It is medium-independent: it can be printed, run in a whiteboard tool, or embedded in HerRays OS/Notion.
- **TASK-030 (`CAP` record schema) = the *destination*.** Each worksheet field maps to exactly one `CAP` field; the field-by-field crosswalk is §6. This worksheet does **not** redefine identifiers, allowed values, or validation logic — those live in TASK-030 and are referenced, not duplicated.
- **TASK-032 (90-minute workshop script) = the *timed meeting* that runs this worksheet.** The worksheet is the artifact; the workshop is the session. §7 shows how the five layers map onto the PRD's six 15-minute workshop blocks, but the minute-by-minute facilitation agenda, role seating and warm-up belong to TASK-032. Flagged `→ TASK-032`.
- **TASK-033 / 034 / 035 / 036 act on a *completed* worksheet.** Safety gates (`→ TASK-033`), weighted scoring (`→ TASK-034`), the decision form (`→ TASK-035`) and the red-team (`→ TASK-036`) all consume the output of this worksheet. The worksheet deliberately **stops before** them: its last act is to hand a complete, evidence-labelled, alternative-rich record to the Review Board. It never scores and never decides.
- **A worksheet is not evidence.** Filling a worksheet does not make a mechanism true. Every factual cell points at an `EVD` record (`↔ TASK-005`) or is openly labelled a hypothesis/invention. A worksheet with confident prose and no evidence ids is, by definition, incomplete (§5 Layer-4 gate).

---

## 1. Purpose and the five non-negotiable working rules

### 1.1 What the worksheet is for

`prd.md` §3 "Strong documented examples" item 4 instructs the Lab to "translate the visible feature into user job, underlying mechanism, possible benefit, downside, evidence, alternatives and validation question," and §5 Phase 3 expands this into a **deep record** built in **five layers**. This worksheet is the operational instrument that makes that translation (a) *repeatable* across 30–50 capabilities and many specialists, (b) *honest* (evidence-labelled, unknowns preserved), and (c) *generative* (ending in design possibilities, not a verdict).

It does five jobs, one per layer:

1. **Describe only what is observable** (Layer 1) — separate the *mechanism-neutral* description of what the app does from any claim about why it works.
2. **Name the user's job** (Layer 2) — anchor the capability to a job-to-be-done, so the Lab reasons about *why a user would engage it*, not merely that a competitor shipped it.
3. **Hypothesize the mechanism** (Layer 3) — state, in behavioral-science terms, *how* the feature might serve the job, and label that statement's epistemic status honestly.
4. **Grade the evidence and surface the limitations** (Layer 4) — attach supporting *and* contradictory evidence, grade efficacy separately from observation, and record failure modes, ethics and accessibility costs.
5. **Open the design space** (Layer 5) — generate at least three alternative ways to serve the same job plus one genuinely unconventional option, and define the smallest test that would tell adoption from adaptation from invention.

### 1.2 The five non-negotiable working rules (W1–W5)

These rules govern *how the worksheet is filled*, and each maps to a TASK-030 non-negotiable (C1–C4) so that a correctly-run worksheet always produces a schema-valid record.

- **W1 — One layer at a time; do not write ahead.** A later layer's cell is left blank until its own layer is reached. Facilitators actively stop participants who answer "why does it work?" during Layer 1. *(Enforces layer separation; feeds C1 "observation, mechanism and decision graded separately.")*
- **W2 — Every factual cell carries a source or a label.** A cell either cites an `EVD-`/`APP-`/`JRN-` id (`↔ TASK-005`) or is tagged `hypothesis` / `invention` (`↔ TASK-004 §2`). There is no third option "stated confidently with nothing behind it." *(Enforces C2.)*
- **W3 — Unknown is written `unknown`; disagreement is written down, not resolved.** No plausible guess substitutes for a missing fact; when specialists disagree, both positions are recorded with their evidence, never averaged. *(Enforces C4; `prd.md` Prompt 06 "Preserve specialist disagreements.")*
- **W4 — Popularity is not evidence of efficacy.** Downloads, ranking, star ratings and editorial recognition ("App of the Day") may be *noted as market context* but may never be written into the mechanism-evidence cells (Layer 4 efficacy). *(`prd.md` §3; executive mandate; feeds the Layer-4 Stop-and-check.)*
- **W5 — The worksheet ends at design possibilities; it does not decide.** The facilitator closes the session by handing the record to the Review Board. No gate is scored and no Adopt/Adapt/Invent/Reject/Defer verdict is written on this worksheet. *(`prd.md` §5 Phase 4 sequencing; `→ TASK-033/034/035`.)*

> **The one-sentence test (read this aloud before every session).** *"Can a reader tell, from each cell alone, whether it is something we SAW, something we THINK, or something we want to DO?"* If any cell blurs those three, the worksheet is not done.

---

## 2. The capability under extraction — selection & framing (pre-work)

Before Layer 1, the facilitator records **what single capability** is on the table. This prevents the most common failure: a worksheet that is secretly about three features at once.

| Pre-work field | Prompt | Rule | → `CAP` field |
|---|---|---|---|
| **Working title** | "Name the capability in neutral words — the *behavior pattern*, not the brand feature name." | A capability is **one mechanism serving one user job** (`↔ TASK-030 §2.1`). "Consecutive-day streak counter," not "Routinery's thing." | `title` |
| **Source app(s)** | "Which benchmark app(s) did we observe this in?" | ≥1 `APP-NNN` (`→ TASK-006`). The same capability seen in three apps is **one** worksheet citing three sources, not three worksheets. | `source_apps` |
| **One-capability check** | "Does this serve exactly one user job via one mechanism? If it bundles two jobs, split it." | If two genuinely different jobs/mechanisms, run **two** worksheets, cross-linked (`related_caps`). | `related_caps` |
| **Why this capability** | "What makes it worth a deep record — what might HerRays learn?" | Ties to `prd.md` Prompt 06 "cross-app patterns"; a capability with no plausible learning is logged and skipped, not force-fitted. | (facilitation note) |
| **Facilitator / scribe** | — | A **role**, not a name (`R01`–`R15`, per TASK-003). The scribe ≠ the eventual reviewer (separation of duties). | `extracted_by_role` |

**Framing rule:** the capability is entered as a **reference pattern, not a candidate feature** (`prd.md` §3 "Strong documented examples" item 6: "Preserve original examples as annotated reference patterns … not mandatory features"). Nothing in this worksheet commits HerRays to building anything.

---

## 3. The worksheet — overview and the layer gates

The worksheet is five layers. **Each layer ends with a gate question that must be answered `yes` before the next layer begins.** The gates are the teeth of the layer-separation discipline (W1).

```
┌──────────────────────────────────────────────────────────────────────┐
│  PRE-WORK: name the ONE capability + its source app(s)   (§2)          │
└──────────────────────────────────────────────────────────────────────┘
        │
        ▼
┌─ LAYER 1 ── OBSERVABLE FEATURE ──────────────────────────────────────┐
│  What does the app actually DO? (mechanism-neutral)                   │
│  GATE 1: "Is every sentence here something a stranger could SEE,      │
│           with zero 'because' or 'so that'?"  ──────────────► yes ──┐ │
└────────────────────────────────────────────────────────────────────┼─┘
                                                                      ▼
┌─ LAYER 2 ── USER JOB ────────────────────────────────────────────────┐
│  What is the user hiring this to DO for them? (JTBD)                  │
│  GATE 2: "Is the job stated from the USER's side, and is it           │
│           labelled evidence-backed or hypothesis?" ────────► yes ──┐ │
└────────────────────────────────────────────────────────────────────┼─┘
                                                                      ▼
┌─ LAYER 3 ── MECHANISM ───────────────────────────────────────────────┐
│  HOW might it do the job? (COM-B / BCT / SDT / Fogg terms)            │
│  GATE 3: "Is the mechanism's epistemic status honest                  │
│           (evidenced / hypothesized / invented)?" ────────► yes ──┐  │
└───────────────────────────────────────────────────────────────────┼──┘
                                                                     ▼
┌─ LAYER 4 ── EVIDENCE & LIMITATIONS ──────────────────────────────────┐
│  What BACKS the mechanism, and what BREAKS it?                        │
│  (supporting + contradictory evidence, grades, downsides,            │
│   ethics, accessibility, transferability to midlife women)           │
│  GATE 4: "Is efficacy graded SEPARATELY from observation, are        │
│           downsides non-empty, and is every grade sourced?" ─► yes ─┐ │
└────────────────────────────────────────────────────────────────────┼─┘
                                                                      ▼
┌─ LAYER 5 ── DESIGN POSSIBILITIES ────────────────────────────────────┐
│  THREE+ alternatives for the same job + ONE unconventional +          │
│  the smallest test that would decide between them.                   │
│  GATE 5: "≥3 alternatives, exactly one invention, and a testable      │
│           hypothesis — with NO verdict written?" ─────────► DONE       │
└──────────────────────────────────────────────────────────────────────┘
        │
        ▼  (hand to Review Board — this worksheet stops here, W5)
   → TASK-033 gates → TASK-034 scoring → TASK-035 decision → TASK-009 register
```

---

## 4. Layer-by-layer worksheet

Each layer below gives: **(a)** the prompts (the questions participants answer), **(b)** the cells (which populate `CAP` fields), **(c)** a **Stop-and-check** box naming that layer's characteristic failure modes, and **(d)** the **gate question**.

### Layer 1 — Observable feature (what the app actually does)

> **Facilitator framing:** *"Describe it as a camera would. If a word implies purpose or benefit, it belongs in a later layer."*

**Prompts**
- What does the user see on screen? What changes, and in response to what action?
- Where does it live (home surface, buried in settings, a notification)?
- What are the exact state transitions (e.g., "increments by 1," "resets to 0")?
- Is there motion, sound, haptic, or color change? (Note it; do not yet judge it.)
- Did we observe this **directly** (in-app walkthrough) or is it **secondary** (a review, a marketing screenshot)?

**Cells**

| Cell | Rule | → `CAP` field |
|---|---|---|
| **Observable description** | Mechanism-neutral; what a user sees/does, no inferred purpose. | `observed_feature` |
| **Source journey(s)** | Which of the ten standard journeys (`→ TASK-016`) captured it (`JRN-NNN`). | `source_journeys` |
| **Observation evidence** | The `EVD-NNN` for *our own capture* (screen recording/walkthrough) (`↔ TASK-005`). Empty ⇒ hearsay, not observation. | `observation_evidence` |
| **Provenance** | `direct` (we saw it in-app) or `secondary` (reported). | `provenance` |
| **Observation grade** | A–D, graded on *how well we observed it* only (`↔ TASK-004`; single direct observation ceilings at B). Not an efficacy claim. | `observation_grade` |

> **🛑 Stop-and-check — Layer 1**
> - **Smuggled "because."** "A streak counter *that motivates users*…" — delete "that motivates users"; that is Layer 3. Rewrite to pure observation.
> - **Marketing screenshot treated as observation.** A feature only seen in an App Store screenshot is `secondary`, cannot take a direct-observation grade (`prd.md` §2).
> - **Evaluation leaking in.** "A *delightful* 3D animation" → "a 3D animation plays on completion." Delight is Layer 4, evidence-linked.

**GATE 1 →** *"Is every sentence here something a stranger could SEE on the screen, with zero 'because,' 'so that,' or 'motivates'?"* If no, rewrite before Layer 2.

---

### Layer 2 — User job (what the user is hiring it to do)

> **Facilitator framing:** *"Finish the sentence 'When I ___, I want to ___, so I can ___' — from the USER's point of view, not the product's."*

**Prompts**
- In what situation does a user reach for this? (the trigger/context)
- What progress is the user trying to make in their life — not "use the feature," but the underlying job?
- Which provisional segment is this for? (`prd.md` §5 Phase 2: motivated beginner, repeated abandoner, unpredictable schedule, low-energy day, tracking-averse, experienced optimizer.)
- **Do we have evidence that real users have this job, or are we hypothesizing it?**

**Cells**

| Cell | Rule | → `CAP` field |
|---|---|---|
| **User job (JTBD)** | Stated from the user's side, in job language ("make my repeated effort feel worth continuing"), not feature language ("use the streak"). Link a `NEED` record where one exists (`→ TASK-029`). | `user_job` |
| **User context / segment** | The situation the job arises in; mark **provisional** until replaced by observed segments (`→ TASK-029`). | `user_context` |
| **Job evidence** | `EVD-NNN` from interviews/diary/reviews, **or** the literal `hypothesis` label if none yet (W2/W3). | `job_evidence` |
| **Job grade** | A–D of how well-evidenced the job is, or `n/a` while `hypothesis` (then log an `open_gap`, `→ TASK-008`). | `job_grade` |

> **🛑 Stop-and-check — Layer 2**
> - **Feature restated as a job.** "The user's job is to keep their streak" is circular — that is the feature, not the job. Ask "why do they want the streak?" until you reach a life goal.
> - **Assumed job presented as known.** If no interview backs the job, it is `hypothesis` + `job_grade: n/a` + an open gap. Do not grade a guess.
> - **Product's job, not user's.** "Drive daily opens" is the *business's* goal, not the user's job. Keep this cell user-side; business goals are noted elsewhere.

**GATE 2 →** *"Is the job stated from the user's side (a life progress, not a feature use), and is it labelled either evidence-backed or `hypothesis`?"*

---

### Layer 3 — Mechanism (how it might work)

> **Facilitator framing:** *"Name the behavioral lever. Then say, honestly, whether science/our evidence supports it, whether it's our hypothesis, or whether we're inventing it."*

**Prompts**
- By what behavioral mechanism might this feature serve the job? Name it in established terms where possible — COM-B (capability/opportunity/motivation), BCTTv1 technique, Self-Determination Theory (autonomy/competence/relatedness), Fogg (motivation/ability/trigger), habit-formation / implementation-intention (`prd.md` §6).
- Is there more than one plausible mechanism? (List each; do not force one.)
- **Is this mechanism `evidenced` (we have real support), `hypothesized` (plausible, untested here), `contested` (evidence both ways), or `invented` (our new idea)?**

**Cells**

| Cell | Rule | → `CAP` field |
|---|---|---|
| **Mechanism(s)** | The behavioral lever(s), in BCT/COM-B/SDT/Fogg/habit terms. The heart of the record. | `mechanism` |
| **Mechanism status** | `evidenced \| hypothesized \| contested \| invented` (`↔ TASK-004 §2`). `hypothesized` is the honest default for a competitor-observed mechanism. | `mechanism_status` |

> **🛑 Stop-and-check — Layer 3**
> - **Hypothesis dressed as fact.** "Streaks work *because* of loss aversion" states a mechanism as established. Unless an `EVD` backs it, status is `hypothesized`.
> - **Only one mechanism considered.** Most features have several candidate levers. List them; a single lever is a red flag the team anchored early.
> - **Mechanism = feature name.** "The mechanism is the streak" is not a mechanism. Name the *psychological process* (reinforcement, commitment device, feedback).

**GATE 3 →** *"Is the mechanism named in behavioral terms, and is its epistemic status (evidenced / hypothesized / contested / invented) stated honestly — defaulting to `hypothesized` for anything we merely observed in a competitor?"*

---

### Layer 4 — Evidence & limitations (what backs it, and what breaks it)

> **Facilitator framing:** *"Now stress-test it. What's the real evidence for the mechanism — graded? What goes wrong? Who does it harm? And does the evidence even apply to midlife women?"* This is where popularity is explicitly banned (W4).

**Prompts — evidence**
- What scientific evidence supports the mechanism? (Prioritize systematic reviews / RCTs / implementation studies, `prd.md` §6; extract via `→ TASK-025`.) Cite `EVD-NNN`.
- What evidence *contradicts* it or shows a failure mode? (Never omit this; `prd.md` Prompt 06.)
- Grade the mechanism's **efficacy for behavior change** — *separately from* the Layer-1 observation grade (W-of-C1).
- Does the evidence population transfer to **midlife women**, or is transferability `unknown`? (`prd.md` §6.)

**Prompts — limitations**
- What are the failure modes, risks, and negative experiences? (`prd.md` §6: guilt, compulsion, burden, excessive tracking.)
- What positive experience can it create?
- Any manipulation / autonomy / dependency / anxiety / screen-time ethics flags?
- Accessibility implications — VoiceOver, Dynamic Type, reduced-motion, contrast, targets (`→ TASK-022`). If it uses motion/haptic/color feedback, what's the fallback?
- Is it relevant to HerRays' midlife-women audience and zero-guilt, non-patronizing brand — including if the answer is "low/negative"?

**Cells**

| Cell | Rule | → `CAP` field |
|---|---|---|
| **Supporting evidence** | `EVD-NNN` for the mechanism, or `none` **only if** status ∈ {hypothesized, invented} and an open gap is logged. | `supporting_evidence` |
| **Contradictory evidence** | `EVD-NNN` against / failure-mode evidence. **Never deleted or averaged** (W3); a live contradiction opens a `CON` record (`→ TASK-008`). | `contradictory_evidence` |
| **Efficacy grade** | A–D (or `n/a`), graded **independently** of observation grade (C1). `n/a` + `hypothesized` is correct for an untested mechanism — never promote it from the observation grade. | `efficacy_grade` |
| **Transferability** | `high \| moderate \| low \| unknown` for midlife women. | `transferability` |
| **Confidence** | `established \| likely \| indicative \| speculative` (`↔ TASK-004 §5.2`); must match the lowest load-bearing grade. | `confidence` |
| **Downsides** | Non-empty. Failure modes / risks / negative experience. Empty = the layer wasn't done (reject). | `downsides` |
| **Positive experience** | The affective upside, evidence-linked where possible, or `none`. | `positive_experience` |
| **Ethics flags** | List of `{issue, severity}`, or `none` **only after explicit review**. | `ethics_flags` |
| **Accessibility notes** | Concrete; state the reduced-motion / VoiceOver / contrast path for any sensory feedback. | `accessibility_notes` |
| **HerRays relevance** | Honest, incl. low/negative relevance. | `herrays_relevance` |
| **Technical implications** | iOS/backend/HealthKit feasibility hint, or `unknown` until `→ TASK-037/039`. | `technical_implications` |

> **🛑 Stop-and-check — Layer 4 (the most-faked layer)**
> - **Popularity smuggled in as efficacy (W4).** "4.8 stars and App of the Day, so the mechanism works." Strike it — ratings/awards never raise `efficacy_grade` (`prd.md` §3).
> - **Observation grade laundered into efficacy (C1).** Copying the Layer-1 `B` into efficacy without independent evidence. Efficacy needs its *own* `EVD` or it is `n/a`.
> - **Contradiction averaged away (W3).** "Some studies say yes, some no, call it a B." No — preserve both, open a `CON` record, leave the grade honest.
> - **Empty downsides.** Every capability has failure modes. A blank here means they weren't examined, not that there are none.
> - **"Accessible" with no specifics.** "It's accessible" is not a note. Name the Dynamic Type / VoiceOver / reduced-motion behavior.

**GATE 4 →** *"Is efficacy graded separately from observation and backed by its own evidence (or honestly `n/a`); are downsides non-empty; is every grade sourced; is no popularity figure doing efficacy work; and is every contradiction preserved rather than averaged?"*

---

### Layer 5 — Design possibilities (alternatives + the smallest test)

> **Facilitator framing:** *"Serve the SAME job at least three other ways. Then invent one option no competitor would. Then name the one experiment that would tell us which to pursue. Do NOT pick a winner."*

**Prompts**
- Generate **≥3** alternative ways to serve the *same user job* (Layer 2) — especially ones that fix a Layer-4 downside. (`prd.md` §5 Phase 3: "three alternatives.")
- Invent **exactly one genuinely unconventional** option — something that inverts a convention, not a tweak. (`prd.md` §5 Phase 3: "one unconventional alternative.")
- For each option, state: how it serves the job, which downside it targets, and whether it's evidence-backed or a `hypothesis`/`invention`.
- What is the **smallest experiment** that would confirm or refute adoption? What would success look like? (`prd.md` §4 "tests"; §5 Phase 4 "smallest test.")

**Cells**

| Cell | Rule | → `CAP` field |
|---|---|---|
| **Alternatives (≥3)** | Each `{summary, rationale, serves_same_job, evidence_or_label}`; each ties to a downside. ≥3 required to advance (`↔ TASK-030 §6.2`). | `alternatives` |
| **Novel alternative (exactly 1)** | `{summary, rationale, why_unconventional, evidence_or_label: invention}`. A hypothesis, never "validated." | `novel_alternative` |
| **Validation** | `{test_hypothesis, smallest_experiment, success_criteria, exp_ref}`. `test_hypothesis` mandatory; `exp_ref` → `EXP` when registered (`→ TASK-009`). | `validation` |
| **Open gaps** | `GAP-NNN` for every `n/a`-by-missing-evidence (`→ TASK-008`). | `open_gaps` |
| **Disagreements** | Preserved `{role, position, evidence_ref}` where specialists differ (`→ TASK-008/023`). | `disagreements` |

> **🛑 Stop-and-check — Layer 5**
> - **Alternatives that are really the same idea.** Three recolorings of a streak are one alternative. Each must serve the job *differently*.
> - **The "unconventional" option is a tweak.** "A streak, but weekly" is an adaptation, not an invention. The novel option should make a competitor say "that's not a habit app." Label it `invention`.
> - **A winner sneaking in (W5).** "Obviously we'll do the flexible one." Stop — ranking and deciding are the Review Board's job (`→ TASK-034/035`). Leave `decision_status: pending`.
> - **No test.** An alternative with no experiment is an opinion. Every record needs `test_hypothesis`.

**GATE 5 →** *"Are there ≥3 genuinely distinct alternatives, exactly one labelled invention, and a testable hypothesis with success criteria — and is NO Adopt/Adapt/Invent/Reject/Defer verdict written anywhere on this sheet?"* If yes → **the worksheet is complete; hand to the Review Board.**

---

## 5. Completion checklist (what "done" means)

A worksheet is **complete and ready to hand off** when all of the following are true. (This mirrors TASK-030 §7.1 entry validation and §6.2 completeness, so a complete worksheet always yields a schema-valid `extracted` record.)

- [ ] **One capability.** Pre-work names a single job+mechanism; bundles were split (§2).
- [ ] **Layer 1 observed.** `observed_feature` is mechanism-neutral; ≥1 `source_apps`; `observation_evidence` present for `direct` provenance; `observation_grade` set and *not* reused as efficacy.
- [ ] **Layer 2 anchored.** `user_job` is user-side; `user_context` marked provisional if unvalidated; `job_evidence` is an `EVD` id **or** `hypothesis`.
- [ ] **Layer 3 honest.** `mechanism` in behavioral terms; `mechanism_status` stated (default `hypothesized` for observed-in-competitor).
- [ ] **Layer 4 stress-tested.** `efficacy_grade` independent of observation (C1); `supporting`/`contradictory` evidence attached (or `none` + open gap); **non-empty `downsides`**; `ethics_flags` reviewed; concrete `accessibility_notes`; `transferability` + `confidence` set; **no popularity in efficacy** (W4).
- [ ] **Layer 5 generative.** ≥3 `alternatives`; exactly one `novel_alternative` labelled `invention`; `validation.test_hypothesis` present.
- [ ] **Honesty guards.** Every unverifiable cell is `unknown`/`hypothesis`, never a guess (W3); every `n/a`-by-missing-evidence has an `open_gaps` entry; disagreements preserved.
- [ ] **No verdict (W5).** `decision_status` left `pending`; no safety gate scored; no weighted score computed. Handed to `→ TASK-033/034/035`.

> If any box is unchecked, the worksheet is **incomplete** (not merely low-confidence). It may rest at `extracted` but cannot advance to Review-Board `in_review` (`↔ TASK-030 §7.2`).

---

## 6. Field crosswalk — worksheet → `CAP` record

Proof that the worksheet populates exactly the schema fields and nothing is orphaned (`↔ TASK-030 §3`).

| Worksheet layer / cell | `CAP` field(s) (TASK-030) | AC-named element |
|---|---|---|
| Pre-work: title / source app / one-capability | `title`, `source_apps`, `related_caps`, `extracted_by_role` | — |
| **L1** Observable description / journey / evidence / provenance / grade | `observed_feature`, `source_journeys`, `observation_evidence`, `provenance`, `observation_grade` | **observable feature** |
| **L2** User job / context / job evidence / job grade | `user_job`, `user_context`, `job_evidence`, `job_grade` | **user job** |
| **L3** Mechanism / status | `mechanism`, `mechanism_status` | **mechanism** |
| **L4** Supporting + contradictory evidence / grades / downsides / ethics / a11y / relevance / tech | `supporting_evidence`, `contradictory_evidence`, `efficacy_grade`, `transferability`, `confidence`, `downsides`, `positive_experience`, `ethics_flags`, `accessibility_notes`, `herrays_relevance`, `technical_implications` | **evidence & limitations** |
| **L5** Alternatives / novel / validation / gaps / disagreements | `alternatives`, `novel_alternative`, `validation`, `open_gaps`, `disagreements` | **design possibilities** |
| Handoff (unset by worksheet) | `safety_gate`, `scores`, `red_team`, `decision_status`, `decision_rationale`, `decision_ref` | *(owned by TASK-033/034/035/009 — W5)* |

---

## 7. How the worksheet runs inside the 90-minute workshop (`→ TASK-032`)

The worksheet is the artifact; the **workshop (TASK-032)** is the timed session that fills it. The PRD's 90-minute extraction agenda (`prd.md` §5 Phase 3) maps one-to-one onto the five layers, which is why the worksheet is structured this way:

| PRD workshop block | Lead role | Worksheet layer |
|---|---|---|
| 0–15 min — observation / user job | UX research | **Layer 1** (+ open Layer 2) |
| 15–30 min — mechanism / science | Behavioral scientist | **Layer 3** (job confirmed in Layer 2 first) |
| 30–45 min — friction / edge cases | UX / QA | **Layer 4** downsides / ethics / accessibility |
| 45–60 min — independent alternatives | All (independent ideation) | **Layer 5** alternatives (≥3) |
| 60–75 min — novel / technical options | Creative / iOS | **Layer 5** novel option + technical implications |
| 75–90 min — document tests & uncertainties | Product | **Layer 5** validation + open gaps; **"Do not finalize features in this workshop"** (= W5) |

**Independence rule (`prd.md` §2/§5):** during the 45–60 alternatives block, participants generate alternatives *independently first*, then share — so the team doesn't anchor on the first idea. The detailed timing, seating, warm-up and facilitation scripts are TASK-032's job; this worksheet only guarantees the *structure* those minutes fill.

---

## 8. Worked example — the streak counter (ILLUSTRATIVE, synthetic)

This is the worksheet filled on the PRD's **own** streaks example (`prd.md` §5 Phase 3). Its mechanisms, risks, alternatives and required test are **quoted from the PRD, which presents them as hypotheses to test** — and the worksheet preserves exactly that status. **All evidence ids are synthetic (`*-SYNTH-*`) and assert nothing about any real app or study.** The example exists only to show the instrument working end-to-end and correctly **stopping before any decision**.

> **⚠️ ILLUSTRATIVE (synthetic).** No real app observation, user, study, metric, or outcome is asserted. Mechanisms/alternatives are the PRD's hypotheses, carried as hypotheses.

### Pre-work
- **Working title:** Consecutive-day streak counter
- **Source app(s):** `APP-SYNTH-001` (synthetic)
- **One-capability check:** ✔ one job (make effort feel worth continuing) via one mechanism family (reinforcement/commitment) → one worksheet.
- **Why this capability:** the PRD names it the canonical streak example (`prd.md` §5 Phase 3); its failure mode (post-miss shame) is central to HerRays' zero-guilt brand, so it is high-value to study *as a risk*.
- **Facilitator / scribe role:** `R07` (UX researcher) — ≠ eventual reviewer.

### Layer 1 — Observable feature
| Cell | Entry |
|---|---|
| Observable description | "A visible counter increments by 1 for each consecutive day the user completes the tracked action, and resets to 0 after a missed day. Displayed prominently on the home surface." *(camera-neutral; no 'because')* |
| Source journey(s) | `JRN-SYNTH-005` (missed-day / recovery journey) |
| Observation evidence | `EVD-SYNTH-010` (our direct walkthrough recording) |
| Provenance | `direct` |
| Observation grade | **B** (single direct observation ceiling, `↔ TASK-004`) — *an observation grade only, not an efficacy claim* |

**GATE 1:** every sentence is visible-on-screen, no "because." ✔

### Layer 2 — User job
| Cell | Entry |
|---|---|
| User job (JTBD) | "Make my repeated effort visible so I feel it is worth continuing." *(user-side; not "keep the streak")* |
| User context / segment | Provisional segment "repeated habit abandoner" (`prd.md` §5 Phase 2) — **provisional** until `→ TASK-029` synthesis |
| Job evidence | `hypothesis` *(no interview evidence yet — honest label, W2)* |
| Job grade | `n/a` *(open until job evidence exists → `GAP-SYNTH-003`)* |

**GATE 2:** job is user-side progress, labelled `hypothesis`. ✔

### Layer 3 — Mechanism
| Cell | Entry |
|---|---|
| Mechanism(s) | "Hypothesized: positive reinforcement (the count as a reward signal), feedback (visible progress), and a loss-averse commitment device (an intact streak one is reluctant to break)." *(COM-B motivation / BCT feedback-and-monitoring / loss aversion)* |
| Mechanism status | `hypothesized` *(the PRD states these are hypothesized, not proven, `prd.md` §5 Phase 3)* |

**GATE 3:** mechanism named in behavioral terms; status honestly `hypothesized`. ✔

### Layer 4 — Evidence & limitations
| Cell | Entry |
|---|---|
| Supporting evidence | `none` *(legal: status `hypothesized` **and** `GAP-SYNTH-003` logged — no science cited yet, W2)* |
| Contradictory evidence | `EVD-SYNTH-022` (synthetic: review signals of abandonment after a broken streak) — **preserved, not averaged** (W3) |
| Efficacy grade | `n/a` *(NOT copied from the B observation grade — C1; untested here)* |
| Transferability | `unknown` *(no midlife-women evidence examined)* |
| Confidence | `speculative` *(matches an untested mechanism)* |
| Downsides | "Shame and all-or-nothing behavior after a missed day; the reset can punish a single lapse and drive abandonment rather than recovery (`prd.md` §5 Phase 3, §6 guilt/compulsion)." |
| Positive experience | "Momentum and pride while the streak is intact (unverified)." |
| Ethics flags | `{issue: "Loss-aversion/guilt pressure after a miss may undermine autonomy", severity: high}` |
| Accessibility notes | "Counter must not rely on color alone; animated increments need a reduced-motion fallback; VoiceOver label must state the current count **and** that a miss does not erase prior effort (`→ TASK-022`)." |
| HerRays relevance | "High — but as a **risk to study**: the punitive-reset failure mode directly conflicts with HerRays' zero-guilt, non-patronizing brand, so the capability matters precisely because of what to avoid." |
| Technical implications | `unknown` *(→ TASK-037/039 not yet assessed)* |

**GATE 4:** efficacy graded separately (`n/a`, not B); downsides non-empty; no popularity used as efficacy; contradiction preserved. ✔

### Layer 5 — Design possibilities
**Alternatives (≥3):**
1. **Flexible weekly consistency** (e.g., 4 of 7 days) — `rationale:` removes the single-miss cliff that drives shame; `serves_same_job:` true; `label:` hypothesis.
2. **Cumulative effort / milestone total that never resets** — `rationale:` preserves visible effort after a lapse, targeting the all-or-nothing downside; true; hypothesis.
3. **Narrative progress** (a journey that continues) rather than a countable streak — `rationale:` reframes effort as an ongoing story, reducing numeric loss aversion; true; hypothesis.

**Novel alternative (exactly 1 — `invention`):**
- **Celebrate *returning* after a disruption** — a "welcome back" moment that rewards re-engagement more than unbroken perfection. `why_unconventional:` it rewards the behavior (coming back) that streaks *penalize*, inverting the reset from punishment into recovery support. `label:` invention.

**Validation:**
- `test_hypothesis:` "Do the alternatives improve meaningful repeated action and perceived autonomy — not merely app opens — versus a resetting streak? (`prd.md` §5 Phase 3)"
- `smallest_experiment:` "Prototype A/B of resetting-streak vs. flexible-weekly on the missed-day/recovery journey; measure return-after-miss and an autonomy item."
- `success_criteria:` "Higher return-after-miss and non-inferior perceived autonomy for the alternative; no increase in self-reported guilt."
- `exp_ref:` `none` *(not yet registered → TASK-009)*

**Open gaps:** `GAP-SYNTH-003` (missing user-need + efficacy evidence). **Disagreements:** `none` yet (single scribe).

**GATE 5:** 3 distinct alternatives + 1 invention + a testable hypothesis; **no verdict written** (`decision_status` stays `pending`). ✔ → **Hand to Review Board.**

### Why this worked example is correct (trace)
1. **Layers never blur.** The `B` observation grade (Layer 1) and the `n/a` efficacy grade (Layer 4) are different cells; a reader can see we *observed* the feature well but have *no efficacy evidence* — exactly the C1 separation (one-sentence test passes).
2. **Nothing is faked.** `job_evidence: hypothesis`, `supporting_evidence: none` + logged gap, `transferability: unknown` — every absence is labelled, not guessed (W2/W3).
3. **Popularity stays out of efficacy (W4).** No rating/award appears in any evidence cell.
4. **The contradiction survives (W3).** `EVD-SYNTH-022` is preserved and would open a `CON` record, not be averaged into a middle grade.
5. **It ends in possibilities, not a verdict (W5).** The sheet closes with alternatives and a test; `decision_status: pending`. Adopt/Adapt/Invent/Reject/Defer is deferred to `→ TASK-033/034/035`.

---

## 9. Blank worksheet template (copy-ready)

```yaml
# HerRays Five-Layer Capability Extraction Worksheet — BLANK
# Fill TOP TO BOTTOM. Do not write ahead of the current layer (W1).
# Every factual cell: an EVD/APP/JRN id OR the label `hypothesis`/`invention` (W2).
# Unknown = `unknown`; preserve disagreement; popularity ≠ efficacy (W3/W4).
# This sheet ENDS at design possibilities — no verdict (W5).

pre_work:
  working_title: ""                 # neutral capability name (one job + one mechanism)
  source_apps: []                   # ≥1 APP-NNN (→ TASK-006)
  one_capability_check: ""          # split if it bundles two jobs
  why_this_capability: ""           # what HerRays might learn
  extracted_by_role: ""             # R01–R15 (role, not a person); ≠ reviewer

# ── LAYER 1 — OBSERVABLE FEATURE ────────────────────────────────
layer1_observable_feature:
  observed_feature: ""              # camera-neutral; NO "because"/"so that"
  source_journeys: []               # JRN-NNN (→ TASK-016)
  observation_evidence: []          # EVD-NNN of OUR capture (↔ TASK-005)
  provenance: ""                    # direct | secondary
  observation_grade: ""             # A|B|C|D — observation only, NOT efficacy
  # GATE 1: every sentence visible on screen, zero "because"? ──► yes

# ── LAYER 2 — USER JOB ──────────────────────────────────────────
layer2_user_job:
  user_job: ""                      # JTBD, user-side; link NEED if any (→ TASK-029)
  user_context: ""                  # segment; mark PROVISIONAL if unvalidated
  job_evidence: ""                  # EVD-NNN | hypothesis
  job_grade: ""                     # A|B|C|D | n/a (then open a gap)
  # GATE 2: user-side job, labelled evidence/hypothesis? ──► yes

# ── LAYER 3 — MECHANISM ─────────────────────────────────────────
layer3_mechanism:
  mechanism: ""                     # COM-B/BCT/SDT/Fogg/habit terms; list all candidates
  mechanism_status: ""              # evidenced | hypothesized | contested | invented
  # GATE 3: status honest, default hypothesized for observed-in-competitor? ──► yes

# ── LAYER 4 — EVIDENCE & LIMITATIONS ────────────────────────────
layer4_evidence_and_limitations:
  supporting_evidence: []           # EVD-NNN | none (none only if hypothesized/invented + gap)
  contradictory_evidence: []        # EVD-NNN | none — NEVER deleted/averaged (→ TASK-008)
  efficacy_grade: ""                # A|B|C|D | n/a — INDEPENDENT of observation_grade (C1)
  transferability: ""               # high | moderate | low | unknown (midlife women)
  confidence: ""                    # established | likely | indicative | speculative
  downsides: ""                     # NON-EMPTY — failure modes/risks (guilt/compulsion/burden)
  positive_experience: ""           # or none
  ethics_flags: []                  # {issue, severity} | none (none only after review)
  accessibility_notes: ""           # concrete: VoiceOver/Dynamic Type/reduced-motion/contrast
  herrays_relevance: ""             # honest, incl. low/negative
  technical_implications: ""        # or unknown (→ TASK-037/039)
  # GATE 4: efficacy sourced & separate; downsides non-empty; no popularity-as-efficacy;
  #         contradictions preserved? ──► yes

# ── LAYER 5 — DESIGN POSSIBILITIES ──────────────────────────────
layer5_design_possibilities:
  alternatives:                     # ≥3, each serving the SAME job, each tied to a downside
    - {summary: "", rationale: "", serves_same_job: true, evidence_or_label: ""}
    - {summary: "", rationale: "", serves_same_job: true, evidence_or_label: ""}
    - {summary: "", rationale: "", serves_same_job: true, evidence_or_label: ""}
  novel_alternative:                # EXACTLY ONE genuinely unconventional option
    {summary: "", rationale: "", why_unconventional: "", evidence_or_label: invention}
  validation:
    test_hypothesis: ""             # MANDATORY
    smallest_experiment: ""
    success_criteria: ""
    exp_ref: ""                     # EXP-NNN | none (→ TASK-009)
  open_gaps: []                     # GAP-NNN for every n/a-by-missing-evidence (→ TASK-008)
  disagreements: []                 # {role, position, evidence_ref} | none
  # GATE 5: ≥3 distinct alternatives, exactly 1 invention, a testable hypothesis,
  #         and NO Adopt/Adapt/Invent/Reject/Defer verdict? ──► DONE → Review Board

# NOT SET BY THIS WORKSHEET (owned downstream — W5):
#   safety_gate (→ TASK-033) · scores (→ TASK-034) · decision_* (→ TASK-035/009) · red_team (→ TASK-036)
```

---

## 10. Governance, dependencies, and change control

- **Custodian:** The Senior UX/product designer owns the worksheet instrument; the Head of Product (Board chair) co-owns its fit to the `CAP` schema; the Program Director versions it in the change log. Per-session ownership sits with `extracted_by_role` (a **role**, per TASK-003), never a named individual.
- **Where it is applied:** WS02 Phase 3 capability extraction (`prd.md` §5), run inside the 90-minute workshop (`→ TASK-032`), producing `extracted` `CAP` records (`↔ TASK-030`) for the Capability Mechanism Library (`CAP-001`, `prd.md` §4). Output flows to the Review Board (`→ TASK-033/034`), decision form (`→ TASK-035`), red-team (`→ TASK-036`) and ultimately Opportunity Synthesis (`→ TASK-041/042`).
- **Dependencies:**
  - `↔ TASK-030` Capability mechanism record schema — the **destination**; every worksheet cell maps to one `CAP` field (§6). This worksheet never redefines schema logic.
  - `↔ TASK-004` Evidence grading rules — supplies A–D grades, epistemic labels (`mechanism_status`) and confidence words the worksheet records; the "observation grade ≠ efficacy grade" rule is W/C1.
  - `↔ TASK-005` Source & evidence record schema — every evidence cell is a foreign key to an `EVD` record; `source_apps` → `APP` (`→ TASK-006`), `source_journeys` → `JRN` (`→ TASK-016`).
  - `→ TASK-032` 90-minute workshop script — the timed session that runs this worksheet (§7).
  - `→ TASK-033/034/035/036` Safety gates / scorecard / decision form / red-team — consume the completed worksheet; the worksheet deliberately stops before them (W5).
  - `→ TASK-008` Research gap & contradiction log — consumes `open_gaps`, `contradictory_evidence` and preserved `disagreements`.
  - `→ TASK-009` Decision & experiment registers — authoritative home of `validation.exp_ref` (`EXP`) and (later) the decision.
  - `→ TASK-025` Behavior-change evidence extraction table — the source of the `EVD` records the Layer-4 evidence cells cite.
  - `→ TASK-029` User-needs synthesis — supplies `NEED`/segment evidence that upgrades Layer-2 `job_evidence` from `hypothesis` to graded.
  - `→ TASK-022` iOS & accessibility audit template — the basis for the Layer-4 `accessibility_notes`.
  - `← TASK-002 / TASK-003` Workstream registry & responsibility matrix — supply roles and separation-of-duties (scribe ≠ reviewer).
- **Open unknowns (honestly recorded, not defects):**
  - Whether Layer 5's independent-ideation step should require each participant to submit alternatives *before* discussion (stronger anti-anchoring) or allow build-on — proposed default: independent-first then share, confirmed against TASK-032's timing.
  - Whether a very simple capability (e.g., a static label) warrants the full five-layer sheet or a "lite" one-page variant — proposed default: full sheet for any capability entering the 30–50 deep-record corpus; lite notes stay in the Pattern Library (`PAT-001`), not the Capability Library.
  - The exact handoff artifact to the Review Board (the worksheet itself vs. a rendered `CAP` record) — proposed default: the worksheet *is* the `extracted` `CAP` record once entered into HerRays OS/Notion; no separate re-keying, to avoid transcription drift.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial worksheet: pre-work framing, five separated layers (observable feature → user job → mechanism → evidence/limitations → design possibilities) each with prompts, cells, a Stop-and-check box and a gate question; five working rules (W1–W5); completion checklist; worksheet→`CAP` crosswalk; workshop mapping (`→ TASK-032`); one fully-worked synthetic streak example; and a copy-ready blank template. | Senior UX/product designer / Head of Product |
| 0.2 | 2026-11-23 | **Citation remediation (review fix).** Corrected invented `prd.md` decimal subsection references throughout: the five-layer translation and the streaks worked example now cite `§5 Phase 3` (prd.md:133/135); the "translate the visible feature …" instruction now cites `§3 "Strong documented examples" item 4` (prd.md:86); and "annotated reference patterns … not mandatory features" now cites `§3 "Strong documented examples" item 6` (prd.md:88). No content, prompts, cells, gates, rules or the worked example changed — citation accuracy only (the sibling `CAP` schema, TASK-030, received the same sweep). | Senior UX/product designer |
