# HerRays Evidence Grading Rules

**Deliverable:** TASK-004 — Define evidence grading rules
**Workstream:** Foundation
**Version:** 0.1 · **Status:** Proposed, not yet applied
**Owner (accountable role):** Program Director (schema custodian)
**Reviewers:** Behavioral scientist · Clinical reviewer · Privacy/regulatory reviewer · UX researcher
**Source basis:** `prd.md` §4 (Shared evidence infrastructure / grades), §3 (Documented examples), §6 (Parallel research), §9 (Validation), §11 (Quality gates), §13 Prompt 00 (separate evidence, inference, hypothesis, invention), §14 (Handoff templates)

---

## 0. How to read this document

This document is the **ruleset for grading evidence** across the HerRays Product Intelligence & Innovation Lab. It defines what each grade means, which source types may carry which grade, how to express uncertainty, and — critically — how to label every claim by its **epistemic status** (observation vs. inference vs. hypothesis vs. invention).

It is a governance artifact. It does **not** grade any real claim here; it specifies *how* claims will be graded once evidence exists.

> **No-fabrication statement.** Every worked example in this document is explicitly labelled **ILLUSTRATIVE (synthetic)** and exists only to demonstrate the grading mechanics. No example asserts a real product observation, real research finding, real user quote, real metric, or real clinical outcome. Fabricating such a value — or assigning a real-looking grade to a claim that has no source — is itself a grading violation under §6 and `prd.md` §4 ("Never fabricate … actual retention, CAC, LTV, clinical outcomes or internal competitor data").

**Scope boundary.** This task defines the *grading rules and epistemic labels*. The **storage schema** (EVD identifiers, URL/artifact fields, capture date, region, owner, limitations) is the separate deliverable **TASK-005 (Source & evidence record schema)**. This document references the fields that grading depends on but does not define the record format; where the two meet, the dependency is flagged `→ TASK-005`.

---

## 1. Why grading exists (purpose and non-negotiables)

The PRD's entire method rests on one discipline: **never let a polished claim outrank a well-sourced one.** `prd.md` §11 states "Polished unsupported reports do not pass." §13 Prompt 00 requires us to "Separate evidence, inference, hypothesis and invention." The grading system operationalizes both.

Grading serves five jobs:

1. **Rank reliability.** Tell a reader, at a glance, how much weight a claim can bear.
2. **Force provenance.** A grade is unassignable without a source record (`→ TASK-005`); the act of grading surfaces missing sources.
3. **Separate dimensions.** The same claim can be strong on one axis (e.g., *usability observed directly*) and weak on another (*health efficacy*). Grading is **multi-dimensional** (§4) so a high grade on one axis is never silently read as a high grade on another (`prd.md` §4: "Do not interpret a high grade on usability as a high grade on health impact").
4. **Gate progression.** Quality gates (`prd.md` §11) consume grades: a gate can require a minimum grade on a specific dimension before a decision proceeds (§7).
5. **Preserve honesty about the unknown.** Grading includes an explicit vocabulary for *what we do not know* (§5), so uncertainty is recorded, not hidden.

**Two non-negotiable rules, stated once and enforced throughout:**

- **R1 — No grade without a source.** Any claim entering an evidence database must carry (a) an epistemic label (§2), (b) at least one grade on the relevant dimension(s) (§3–§4), and (c) a link to a source/artifact record (`→ TASK-005`). A claim with no source is not grade **D**; it is **ungraded** and inadmissible until sourced or re-labelled as **Invention** (§2.4).
- **R2 — Grade the claim, not the claimant.** A respected specialist's opinion is still grade **D** (expert judgment) unless it carries independent evidence. Authority does not raise a grade.

---

## 2. Epistemic status: the four labels (observation / inference / hypothesis / invention)

Before anything is graded A–D, it must be labelled by **what kind of statement it is**. Grade (A–D) answers *"how reliable is the support?"*; the epistemic label answers *"what is this claim even claiming?"*. They are orthogonal and **both are mandatory**.

This fourfold distinction is lifted directly from `prd.md` §13 Prompt 00 and §3's six-way source taxonomy (observed / reported / scientific / estimated / expert / invented), collapsed into the four decision-relevant classes the handoff template (`prd.md` §14) uses.

| Label | Definition | Canonical question it answers | Typical grade ceiling | Must never be stated as |
|---|---|---|---|---|
| **Observation** | A fact we or a cited party *directly recorded* — a tapped screen, a logged event, a printed price, a published study result, a verbatim user statement. | "What happened / what is there?" | A–C (ceiling depends on who observed and how directly) | A conclusion about *why* it happened |
| **Inference** | A conclusion *derived* from one or more observations by reasoning. | "What does the evidence imply?" | B–D (never above the weakest observation it rests on) | An observation |
| **Hypothesis** | A *testable prediction* we have not yet tested. | "What do we expect, and how would we check?" | C–D until tested; a tested hypothesis becomes an observation + inference | A finding or a validated result |
| **Invention** | A *proposed design, mechanism, or idea we originated.* No claim of current validity. | "What might we build / try?" | D by definition (it is not evidence) | Evidence, a user preference, or a validated feature |

### 2.1 Observation
The strongest kind of *statement*, but note the grade still depends on **who** observed and **how directly** (§3). "In session S-07 the user tapped 'Skip' on the paywall" is an observation we made (admissible, gradeable B–A on the usability dimension). "A 2021 systematic review reported a pooled effect size of d=0.4" is an observation *of the literature* (admissible, potentially grade A on the efficacy dimension if the review is strong and relevant). The word "observation" does **not** mean "our direct product observation only" — it means a recorded fact from a declared source.

### 2.2 Inference
An inference inherits a **ceiling** equal to the weakest observation it depends on, minus one step if the reasoning adds assumptions. Example mechanics: from the observation "3 of 5 sampled users abandoned onboarding at the goal-selection screen" one may *infer* "goal selection imposes high cognitive load" — but that inference is at best grade **C** (small qualitative sample) and must be labelled **Inference**, not re-presented as the observation. Competing inferences from the same observation must be preserved, not resolved by preference (`prd.md` §3 point 3, §2 "Preserve disagreements").

### 2.3 Hypothesis
Every mechanism the Lab wants to adopt must pass through a hypothesis stage with a declared **test** (`prd.md` §3 streaks worked example, §11 gate 4). A hypothesis is graded on the *strength of its prior support*, never on how plausible it feels. Until a test is run and recorded, a hypothesis cannot exceed grade **C**, and only if a *related* body of evidence supports it; a pure "we think this will work" is grade **D**.

### 2.4 Invention
Original ideas are essential (the PRD mandates invention: §7, §8 studios, §3 "one unconventional alternative"). Invention is **not a weakness** — but it is **not evidence**. It is always grade **D on every evidence dimension** and must be labelled **Invention** so no downstream reader mistakes a studio's novel idea for a tested finding (`prd.md` §8: "Never present imagined preferences as validated"; §11 gate 3: "invention clearly distinguished from evidence"). Invention becomes evidence only by being converted to a hypothesis and tested.

**Transition rules (how a claim changes label):**

```
Invention ──(declare a test)──▶ Hypothesis ──(run & record test)──▶ Observation(+Inference)
                                     │
Observation ──(reason over it)──▶ Inference
```

A label may only move **rightward** through evidence, never leftward by assertion. Downgrading (e.g., a failed test turning a hypothesis back into "open question") is always permitted and must be logged in the research gap / contradiction log (`→ TASK-008`).

---

## 3. The A–D grade scale (reliability of support)

Grades measure **how much confidence a source justifies**, following `prd.md` §4 verbatim and expanding each into an operational definition, admissible source types, and the ceiling it imposes.

| Grade | Name | Operational meaning | Confidence it licenses |
|---|---|---|---|
| **A** | Strong | Strong, *relevant* science **or** replicated direct validation. | High — safe to build on, still re-checkable. |
| **B** | Credible but limited | Credible but limited scientific or direct-user evidence. | Moderate — directionally trustworthy, not settled. |
| **C** | Indicative | Repeated qualitative observation or a recurring competitor pattern. | Low — a signal, not a basis for a strong claim. |
| **D** | Judgment / invention | Expert judgment, analogy, or original invention. | Minimal — a starting point requiring test. |

### 3.1 Admissible source types per grade

A grade is only assignable if the source type is admissible for it. The table below is the **admissibility map**; a source type may qualify for a *lower* grade if its quality is weak (e.g., a small, non-relevant RCT drops from A toward B).

| Source type (from `prd.md` §3/§4) | Max grade | Typical grade | Notes / what can lower it |
|---|---|---|---|
| Systematic review / meta-analysis, **relevant to midlife women & the target behavior** | **A** | A | Drops to B if population/transferability is weak (§6) |
| Randomized / strong controlled intervention study, relevant | **A** | A–B | Drops if underpowered, off-population, or old |
| Replicated **direct** HerRays validation (our own test, repeated) | **A** | A–B | Single unreplicated test caps at B (§3.2) |
| Single peer-reviewed study, limited or off-population | **B** | B | |
| Single, unreplicated direct product/user observation we recorded | **B** | B–C | Ceiling B; one observation is not replication |
| Published user reports / app-store reviews (secondary, self-selected) | **C** | C | Never A/B: self-selected, unverifiable identity |
| Recurring competitor UX pattern observed across apps | **C** | C | Popularity ≠ efficacy (`prd.md` §3, §5) |
| Market/download/revenue estimate (Appfigures/Sensor Tower-type) | **C** | C–D | Label **estimate**; never retention/CAC/LTV inference (`prd.md` §10) |
| Expert specialist judgment / analogy | **D** | D | R2: authority does not raise grade |
| Original invention (studio idea, novel mechanism) | **D** | D | §2.4; not evidence until tested |

### 3.2 Grade ceilings (hard caps that cannot be argued past)

- **One direct observation caps at B.** Replication (independent repeat, different users/sessions) is required for A on a direct-validation basis.
- **App-store reviews and public user reports cap at C** regardless of volume. A thousand self-selected reviews are still grade C; count is recorded but does not promote the grade.
- **Market estimates cap at C and may never be converted into retention, CAC, or LTV claims** (`prd.md` §10, §4). Such a conversion is an inadmissible inference, not a low grade.
- **Expert judgment and invention cap at D** on evidence dimensions. They may inform *hypotheses*, which are then tested.
- **Editorial recognition (e.g., "App of the Day") is not evidence of efficacy or retention** (`prd.md` intro, §3). It may be recorded as an observation *about marketing/positioning* (gradeable on a positioning dimension) but is grade D / inadmissible on the efficacy and health dimensions. Dates/geographies must be re-verified (`→ TASK-010`).

### 3.3 Promotion and demotion rules

- **Promote** a claim's grade only by adding admissible higher-grade evidence (e.g., C→B when a credible study is added; B→A when an independent replication lands). Record the promotion with both sources (`→ TASK-005`).
- **Demote** immediately when a source is contradicted, retracted, found off-population, or fails re-verification. Demotion is logged in the contradiction register (`→ TASK-008`) and any decision resting on the demoted claim is re-opened in the decision log (`→ TASK-009`).
- **Never average contradicting evidence into a middle grade.** Preserve both and record the contradiction (`prd.md` §2, §14). A grade reflects the *best admissible support*, with contradictions explicitly attached, not a blended score.

---

## 4. Multi-dimensional grading (grade each axis separately)

`prd.md` §4 is explicit: "Grade separately for efficacy, relevance and confidence where needed. Do not interpret a high grade on usability as a high grade on health impact." A single claim therefore carries up to **five independent grades**, each only populated when the claim actually bears on that dimension:

| Dimension | Question it grades | Who is accountable (per responsibility matrix) | Must not be inferred from |
|---|---|---|---|
| **Efficacy** | Does the mechanism actually change the target behavior / health outcome? | Behavioral scientist; Clinical reviewer | Usability, delight, or engagement grades |
| **Relevance / transferability** | Does the evidence apply to *midlife women* in *our* context? | Behavioral scientist; UX researcher | Study existence alone (a strong study on a different population is low on this axis) |
| **Experience quality (usability/UX)** | Is the interaction clear, low-friction, accessible? | Senior UX designer; QA/accessibility | Efficacy (a delightful screen can be useless or harmful) |
| **Commercial** | Downloads, revenue, pricing, positioning signals | Product analyst / growth | Retention/CAC/LTV (forbidden inference, §3.2) |
| **Confidence (meta)** | How sure are we of *this grading itself*, given sample size, recency, provenance | Claim author + reviewer | — (this is the self-check axis; see §5) |

**Rule:** a dimension is left **"n/a — claim does not bear on this axis"** rather than defaulted. Defaulting an unexamined dimension to a grade is a fabrication under R1. The highest grade on *any* axis is never promoted to the others.

> **Worked multi-dimensional example — ILLUSTRATIVE (synthetic):**
> *Claim (synthetic):* "A consecutive-day streak counter increases app opens."
> - Efficacy (behavior change / health): **D** — *Inference/Hypothesis*; increased opens ≠ changed target behavior; no admissible efficacy study attached. Flagged risk: all-or-nothing, shame (`prd.md` §3).
> - Relevance: **n/a** until an efficacy source exists to assess for population fit.
> - Experience quality: **C** — *Observation (synthetic)*; recurring competitor pattern, visibly low-friction.
> - Commercial: **n/a**.
> - Confidence (meta): **Low** — rests on one pattern observation and no efficacy evidence.
> *Correct reading:* "common and usable, but unproven and potentially harmful for behavior change." The usable **C** must never be cited as if the mechanism *works*.

---

## 5. Uncertainty rules (how to record what we are unsure of)

Grading is incomplete without an explicit account of uncertainty. These rules make doubt a **recorded field**, not a tone.

### 5.1 Every graded claim carries an uncertainty note
A one-line, mandatory field stating the **main reason the grade is not higher** and **what would raise it**. Example shape: *"Grade C (experience, synthetic): single-session observation, n=5, one region; replication across ≥2 sessions and ≥1 additional region would support B."* An empty uncertainty note fails review.

### 5.2 Confidence qualifiers (controlled vocabulary)
When prose must express confidence, use only these four words, mapped to grade bands so language and grade never drift apart:

| Word | Allowed when | Approx. grade band |
|---|---|---|
| **Established** | Strong, replicated/relevant | A |
| **Likely** | Credible but limited | B |
| **Indicative** | Qualitative / pattern-level | C |
| **Speculative** | Judgment, analogy, invention, untested hypothesis | D |

Words like "proven," "shows that," "users want," or "retention improves" are **banned** unless backed by grade A on the relevant dimension; reviewers reject them on sight.

### 5.3 The "unknown" is a first-class record
What we do **not** know is logged, not omitted. Three explicit unknown-states (feeding `→ TASK-008` the research gap & contradiction log):

- **Open question** — a question we have not investigated. (Not graded; it is a gap.)
- **Contested** — two or more admissible sources disagree; both grades preserved, contradiction linked.
- **Untestable-now** — e.g., long-term health outcomes that require follow-up beyond the 12-week cycle (`prd.md` §1, §9). Recorded as deferred, never faked.

### 5.4 Sample, recency, and provenance always attached
A grade is meaningless without its denominator. Each graded claim records, at minimum: sample size / n (or "n/a"), capture/publication date, region, and provenance (direct vs. secondary) `→ TASK-005`. A missing denominator caps experience/commercial claims at **D** until supplied.

---

## 6. Prohibited gradings (automatic review failures)

The following are not low grades — they are **inadmissible** and fail the research-foundation gate (`prd.md` §11 gate 1):

1. **Graded but unsourced.** Any A–D grade with no linked source/artifact (violates R1). → Mark **ungraded**, send back.
2. **Invention or expert opinion graded above D** on an evidence dimension (violates R2 / §2.4).
3. **Fabricated denominator or value** — any invented metric, retention figure, CAC/LTV, interview quote, participant, or clinical outcome (`prd.md` §4). → Escalate; this is the most serious violation.
4. **Engagement graded as efficacy** — app opens, streaks, or session counts presented as behavior-change or health evidence (§4 worked example; `prd.md` §6 "Separate engagement, adherence, automaticity and health outcomes").
5. **Market estimate converted to private metric** — any retention/CAC/LTV inferred from downloads/revenue estimates (§3.2; `prd.md` §10).
6. **Editorial recognition used as efficacy/retention evidence** (§3.2).
7. **Cross-dimension promotion** — a high grade on one axis asserted as a grade on another (§4).
8. **Blended grade across contradicting sources** — averaging away a disagreement (§3.3).

---

## 7. How grades feed the quality gates

Grades are consumed by the five quality gates (`prd.md` §11). This table states the **minimum grading discipline** each gate enforces; it does not set numeric cutoffs the PRD does not authorize — it enforces *provenance and dimension separation*.

| Gate (`prd.md` §11) | Grading requirement to pass |
|---|---|
| **1. Research foundation** | Every claim labelled (§2) and graded (§3–§4) with a linked source; unknowns logged (§5.3); no §6 violations present. |
| **2. Opportunity readiness** | Opportunities rest on claims ≥ grade **C** with ≥1 **B** behavioral-evidence anchor where a behavior-change effect is asserted; invention clearly labelled, not graded as evidence. |
| **3. Concept readiness** | Invention vs. evidence separation (§2.4) verified for every concept; no imagined preference presented as validated. |
| **4. Validation readiness** | Each behavioral/clinical claim to be tested has a declared hypothesis (§2.3) and the test would, if passed, raise the grade; safety/privacy/accessibility dimensions graded, not assumed. |
| **5. Build readiness** | Every MVP-included mechanism traces to its grade on the **efficacy** and **relevance** axes (not merely experience); remaining D-grade claims carry a validation plan (`prd.md` §11 gate 5). |

**Mandatory gates are not graded away.** Clinical safety, privacy, and accessibility are *non-compensable* (`prd.md` §9, §11): a failing safety check blocks progression regardless of how high other dimensions grade. Grading informs these gates but never overrides a `reject`.

---

## 8. One worked example per grade (ILLUSTRATIVE — synthetic)

All four examples below are **synthetic** and exist solely to show how a grade is assigned, labelled, and qualified. None asserts a real finding.

> **Grade A — ILLUSTRATIVE (synthetic).**
> *Claim:* "Implementation intentions (specifying when/where a behavior will occur) increase follow-through on health behaviors."
> *Epistemic label:* Observation (of literature) → Inference for our context.
> *Source type:* Relevant systematic review + replicated intervention studies (synthetic citation stand-in).
> *Dimensions:* Efficacy **A**; Relevance **B** (midlife-women transferability needs checking); Experience **n/a**.
> *Uncertainty note:* "Grade A on efficacy from replicated evidence; relevance held at B pending confirmation that study populations transfer to midlife women — would rise to A with an in-population replication."
> *Why A:* strong, relevant, replicated science on the efficacy axis. Confidence word allowed: **Established** (efficacy), **Likely** (our-context relevance).

> **Grade B — ILLUSTRATIVE (synthetic).**
> *Claim:* "A single peer-reviewed study found self-monitoring of sleep improved adherence over 8 weeks in a general adult sample."
> *Epistemic label:* Observation (of one study).
> *Source type:* Single, limited, partly off-population study.
> *Dimensions:* Efficacy **B**; Relevance **C** (general-adult, not midlife-women specific).
> *Uncertainty note:* "One study, moderate n, off-target population; replication and an in-population study would support A."
> *Why B:* credible but limited; not replicated, not fully relevant. Confidence word: **Likely**.

> **Grade C — ILLUSTRATIVE (synthetic).**
> *Claim:* "Across four benchmark apps we observed a 'gentle reminder' re-entry pattern after a missed day."
> *Epistemic label:* Observation (recurring competitor pattern).
> *Source type:* Repeated qualitative teardown observation across apps (synthetic).
> *Dimensions:* Experience **C**; Efficacy **D/n/a** (pattern prevalence says nothing about whether it changes behavior).
> *Uncertainty note:* "Indicative cross-app pattern, no efficacy evidence; a controlled comparison vs. a punitive reminder would be needed to claim benefit."
> *Why C:* recurring qualitative/competitor pattern. Confidence word: **Indicative**. Must not be cited as proof the pattern works.

> **Grade D — ILLUSTRATIVE (synthetic).**
> *Claim:* "A 'celebrate the return' screen after a missed day may reduce drop-off better than streak resets."
> *Epistemic label:* Invention (studio idea) → convertible to Hypothesis.
> *Source type:* Original design proposal / expert analogy.
> *Dimensions:* all evidence axes **D**.
> *Uncertainty note:* "Speculative invention; no evidence. Declared test: compare return-after-miss rates between 'celebrate return' and 'streak reset' variants. Until tested, remains D and labelled Invention."
> *Why D:* original idea / judgment, no evidence. Confidence word: **Speculative**. May seed a hypothesis and a prioritized experiment (`→ TASK-009`).

---

## 9. Minimal grading stamp (how a grade appears on a claim)

Every claim in any evidence database carries this compact stamp. Field *definitions* and storage live in `→ TASK-005`; this is the grading-visible subset so the two deliverables interlock without overlap.

```yaml
claim: "<the single assertion being graded>"
epistemic_label: observation | inference | hypothesis | invention   # §2, mandatory
grades:                                                             # §4, only populated axes
  efficacy:        A | B | C | D | n/a
  relevance:       A | B | C | D | n/a
  experience:      A | B | C | D | n/a
  commercial:      A | B | C | D | n/a
confidence_meta:   established | likely | indicative | speculative  # §5.2, matches lowest load-bearing grade
sources: [EVD-...]                                                  # R1: ≥1 required or claim is ungraded → TASK-005
sample_or_n: <int | "n/a">                                          # §5.4
capture_or_pub_date: <YYYY-MM-DD>                                   # §5.4 → TASK-005
provenance: direct | secondary                                      # §5.4
uncertainty_note: "<why not higher; what would raise it>"           # §5.1, mandatory, non-empty
contradictions: [EVD-... | none]                                    # §3.3, §5.3 → TASK-008
status: open_question | contested | untestable_now | graded         # §5.3
```

**Validation on this stamp (reviewer checklist):**
1. `epistemic_label` present and consistent with the strongest `grades` axis (invention ⇒ all evidence axes D).
2. At least one `sources` entry, or `status: open_question` with no grade (R1).
3. `uncertainty_note` non-empty.
4. `confidence_meta` word matches the lowest load-bearing grade (§5.2) — no "established" sitting over a C.
5. No §6 prohibited pattern present.

---

## 10. Governance, dependencies, and change control

- **Custodian:** Program Director owns this ruleset; changes are versioned and logged below. Dimension-level accountability sits with the roles in §4 (per the specialist responsibility matrix, TASK-003).
- **Where grading is applied:** at claim entry in every §4 database of `prd.md` (App Registry, Evidence Library, Journey, Capability, User Needs, Pattern, Opportunity Atlas, Experiment, Decision logs).
- **Dependencies:**
  - `→ TASK-005` Source & evidence record schema (defines EVD fields the stamp links to).
  - `→ TASK-008` Research gap & contradiction log (consumes §5.3 unknown-states and §3.3 demotions).
  - `→ TASK-009` Decision & experiment registers (consume hypotheses/inventions needing tests; re-opened on demotion).
  - `← TASK-001` Success metrics (grades reference the same engagement/adherence/automaticity/outcome separation).
  - `← TASK-003` Specialist responsibility matrix (assigns the per-dimension accountable roles).
  - `→ TASK-010` Editorial-recognition verification (enforces §3.2 editorial rule).
- **Open unknowns (not defects — honestly recorded per §5.3):**
  - Whether a numeric gate cutoff (beyond "min grade on a dimension") should be introduced — deferred until real evidence volume exists; the PRD does not authorize invented cutoffs.
  - Exact inter-rater agreement process for grade disputes between two specialists — proposed default: preserve both grades + contradiction record, Program Director arbitrates at the gate; to be confirmed.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-22 | Initial ruleset: four epistemic labels, A–D scale, admissibility map, ceilings, multi-dimensional grading, uncertainty rules, prohibited gradings, gate mapping, one example per grade, grading stamp. | Program Director |
