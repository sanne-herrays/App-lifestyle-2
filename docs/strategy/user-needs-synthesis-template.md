# HerRays — User-Needs Synthesis Template

**Deliverable:** TASK-029 — Create the user-needs synthesis template
**Workstream:** Behavior & User Research (WS04 — User Discovery) · UX-research lens
**Version:** 0.1 · **Status:** Proposed — template defined, **not yet populated**; no need has been synthesised because no fieldwork has been conducted
**Owner (accountable role):** UX researcher (R07), under Program Director custody
**Reviewers:** Behavioral scientist (R02, **mandatory** — barrier coding against COM-B, separation of engagement / adherence / automaticity / health outcome, non-prescription of mechanism) · Clinical reviewer (R14, **mandatory** — any need touching symptoms, menopause stage, mood, or safety) · Privacy/regulatory reviewer (R15, **mandatory** — special-category content, pseudonymity of every quote, no re-identifiable composite) · Content strategist / UX writer (R10 — plain, non-patronizing need statements) · QA/accessibility specialist (R13 — accessibility needs are first-class, not an appendix) · Head of Product (R06 — consumer of the synthesised `NEED` set) · Program Director
**Source basis:** `prd.md` §4 (User Needs database `NEED-001`: "Context, job, observed behavior, unmet need, sources, confidence"; evidence grades A–D; "Grade separately for efficacy, relevance and confidence"; "Never fabricate interview participants, actual retention, CAC, LTV, clinical outcomes…"), §6 User discovery ("Produce JTBD, journey maps, unmet needs, evidence and contradictions"; "Separate engagement, adherence, automaticity and health outcomes"; "Assess risks of guilt, compulsion, burden and excessive tracking"), §7 Opportunity synthesis ("never jump directly from evidence to concepts"; each opportunity carries "problem/context, evidence/confidence, competitor gap, desired outcome, relevant mechanism, constraints, HMW, validation path"; "**opportunities distinct from feature requests**"), §1 (non-patronizing, autonomy, accessibility as non-negotiable constraints), §11 Gate 2 ("usable primary research … opportunities distinct from feature requests"), §13 Prompt 04 ("Produce … JTBD, behavioral segments, unmet needs and contradictions. Never invent participants, quotes or results"), §14 ("A deliverable is not complete if … hypothetical users/tests are presented as real").
**Depends on:** TASK-027 (neutral discovery interview guide — the episode-anchored transcript material this template codes) · TASK-028 (7–14-day diary study kit — event logs and daily prompts feeding the same `NEED` records) · TASK-005 (`EVD`/`PART` schema — every `source_ref` here resolves to an `EVD` keyed to a pseudonymous `PART-NNN`) · TASK-004 (evidence grading — the A–D / confidence vocabulary this template reuses; a `NEED` is never graded above its underlying evidence) · TASK-008 (research gap & contradiction log — every unresolved question and every contradiction opened here is linked to a `GAP`/`CON`) · TASK-024/025 (behavioral science — the COM-B barrier taxonomy and the separation of outcome layers used for coding; never a source of a user answer)
**Feeds:** TASK-041 (Opportunity Atlas record schema — a `NEED` is the *root user need* an `OPP` is built on; this template produces the "problem/context, evidence/confidence, desired outcome" inputs §7 requires) · TASK-042 (opportunity prioritization — `importance` and `confidence` fields here feed scoring) · TASK-043/044 (concept studio briefs — studios receive synthesised needs, never raw transcripts or a feature wish-list) · Gate 2 Opportunity-readiness review (`prd.md` §11)

---

## 0. How to read this document

This is the **synthesis instrument** for WS04: the reusable record schema, coding rules, and quality gate that convert raw, episode-anchored discovery material (TASK-027 interviews, TASK-028 diaries) into a small set of **traceable, evidence-graded user-need records** — the `NEED-001` database named in `prd.md` §4. It defines *what a user need is*, *what fields every need must carry*, *how a need is coded from evidence without inventing demand*, and *how confidence and unresolved questions are recorded* so that the downstream Opportunity Atlas (TASK-041) can build on root needs rather than on a feature wish-list (`prd.md` §7).

It is governed by one discipline that sits above all the fields: **a user need is a problem a person is trying to make progress on, expressed independently of any solution.** "She wants a streak counter" is not a need; it is a solution someone named. The need beneath it — "when I lose momentum after a bad week, I want a low-effort way to feel I haven't thrown the whole thing away, so I'll start again tomorrow" — is what this template captures, because needs stated as solutions quietly pre-decide the product and smuggle competitor features in as if they were user demand (`prd.md` §7, §11 "opportunities distinct from feature requests").

**Scope boundary — what this task is and is not.**
- **TASK-029 (this document) = the synthesis template + coding rules + quality gate.** It answers *"given consented, episode-anchored evidence, what is the record shape and method that turns it into graded `NEED` records with JTBD, context, evidence links, barriers, desired outcomes, confidence and unresolved questions — without manufacturing demand?"*
- **It is not the interview guide or the diary kit.** Elicitation is TASK-027/028. This template *consumes* their output; it conducts no fieldwork.
- **It is not the evidence record or the grading rules.** `EVD`/`PART` storage is TASK-005; the A–D / confidence vocabulary is TASK-004. This template *reuses* both and defines no new grade.
- **It is not the Opportunity Atlas.** HMW statements, competitor-gap analysis, mechanisms, feasibility and validation paths are TASK-041/042. A `NEED` is an *input* to an `OPP`, not an `OPP`. This template deliberately stops at the need and its desired outcome; it proposes no solution.
- **It does not segment on its own authority or decide anything.** Behavioral segments are sketched here only as a grouping of needs (§6); the segmentation deliverable and any decision belong to WS04 synthesis sign-off and TASK-035. The template elicits structure; it asserts no finding.

> **No-fabrication statement.** This document reports **no user, no need, no quote, and no finding**, because **no discovery material has been synthesised.** It is a **template and method**. The single worked record in §8 is **ILLUSTRATIVE (hypothetical)** end-to-end: it is built on fictitious `PART-SYNTH-*` / `EVD-SYNTH-*` identifiers, is labelled `status: illustrative_hypothetical`, and **may never be cited as evidence or carried into an `OPP`** (`prd.md` §4/§14). All counts, targets and timings are **proposed planning defaults**, not records of completed work.

---

## 1. Purpose & design principles

A synthesised need earns its place in the Atlas only if it would **survive a skeptical review**: if a reader can trace it back to specific remembered episodes from consented participants, see how confident we are and why, and see what we still do not know. This template is engineered for seven properties.

1. **Solution-independent.** Every need is stated as a *job + context + obstacle + desired outcome*, never as a feature. A need that can only be expressed by naming an app feature is mis-coded and is rejected at the gate (§7, N1).
2. **Episode-grounded.** Every need links to ≥1 `EVD` drawn from a *specific past episode* (interview or diary event), not from a participant's imagined preference. Imagined-preference material ("I'd probably use…") is inadmissible as the basis of a need (N2; TASK-027 N4).
3. **Barrier-explicit, using an established taxonomy.** What gets in the way is coded against **COM-B** (Capability / Opportunity / Motivation) so barriers are comparable across people and legible to behavioral science, without the taxonomy being read onto a participant who did not say it (§5; `prd.md` §6).
4. **Outcome-layered.** Engagement, adherence, automaticity and health/life outcome are kept distinct in the `desired_outcome` field; a need is never allowed to claim a health outcome on the strength of an engagement observation (§4.4; `prd.md` §6).
5. **Confidence-honest and separately graded.** Each need carries an **evidence grade** and a **confidence** (TASK-004 vocabulary), graded **separately for efficacy, relevance and confidence** (`prd.md` §4), with mandatory support metadata (how many participants, how convergent, how recent). A single vivid quote is C/D, never A.
6. **Contradiction-preserving.** Where participants diverge, the template records the divergence as a first-class field and opens a `CON` in TASK-008 — it never averages two people into a false "users want" (§5.4; `prd.md` §6/§7).
7. **Autonomy-, safety- and accessibility-respecting.** Needs touching distress, symptoms, body image, menopause stage or safety are flagged for R14; accessibility needs are coded as ordinary needs, not relegated; and no need is phrased in a way that pathologises or patronises the participant (`prd.md` §1).

---

## 2. Non-negotiables (anti-fabrication, anti-demand-manufacture, autonomy & safety)

These guards are structural. A breach invalidates the affected `NEED` at the Gate-2 review (§7.3 forbidden values); it is not patched afterward.

- **N1 — A need is solution-independent.** No `NEED` may be stated as, or depend on, a named feature, screen, or competitor capability. If the only way to write it is "she wants [feature]", it is a *feature request*, not a need, and is reclassified or rejected (`prd.md` §7, §11).
- **N2 — No need without episode-anchored evidence.** Every `NEED` carries ≥1 `source_ref` resolving to an `EVD` from a *specific past episode*. A need with zero evidence, or built only on imagined-preference answers, is inadmissible. The word "users" + a verb ("users want / need / struggle") is banned unless the support count and grade justify the generalisation (N5).
- **N3 — No fabricated user, quote, observation, or count.** Until real fieldwork runs, this template contains no user data. The §8 record is `*-SYNTH-*` and inadmissible (`prd.md` §4/§14). `support_count`, `participant_count`, and any quote are copied from real `EVD` or left `unknown` — never estimated.
- **N4 — Grade never exceeds the evidence.** A `NEED`'s efficacy/relevance/confidence grades are bounded by its underlying `EVD` grades under TASK-004 (e.g. qualitative interview convergence caps at **C** for relevance and is **inadmissible as efficacy**). A high confidence in *relevance* is never read as evidence of *health impact* (`prd.md` §4).
- **N5 — Generalisation is earned, not assumed.** The strength of language must match the support. One participant → "one participant, in one episode, …" (`support_count: 1`), never "women want…". Promotion from *idiosyncratic* → *recurring* → *widespread* requires the §4.3 support thresholds, and the claim is demoted the moment the support no longer holds.
- **N6 — Contradictions are preserved, never averaged.** Divergent evidence is recorded in `contradictions` and opens a `CON` (TASK-008). Two opposing accounts never collapse into a midpoint or a single "balanced" need (`prd.md` §6/§7).
- **N7 — Outcome layers are not collapsed.** `desired_outcome` is tagged with its layer (engagement / adherence / automaticity / health-or-life). A need observed at the engagement layer may not assert an outcome at the health layer (`prd.md` §6; TASK-004 §6).
- **N8 — Pseudonymity and special-category care.** Every quote and composite is keyed to `PART-NNN`; no direct identifier, and no composite so specific it re-identifies a participant (R15). Needs touching symptoms, mood, menopause stage, weight or safety carry `clinical_flag: true` and route to R14 (`prd.md` §4/§6; TASK-026).
- **N9 — The template elicits, it does not decide.** A `NEED` is a synthesised problem statement with a confidence, not an approved opportunity or a product decision. Opportunities are TASK-041; decisions are TASK-035.

---

## 3. The `NEED` record — field dictionary

Database: **User Needs (`NEED-001`)**, `prd.md` §4. Each synthesised need is one record, `NEED-NNN` (zero-padded, immutable, never reused). The six `prd.md` §4 core fields — *context, job, observed behavior, unmet need, sources, confidence* — are all present (mapped in the "§4 core" column) and extended with the acceptance-criteria fields (JTBD, evidence links, barriers, desired outcomes, confidence, unresolved questions) and the governance fields needed to stay traceable.

Requirement markers: **M** = mandatory · **C** = conditionally mandatory (rule stated) · **O** = optional.

### 3.1 Identity & lifecycle

| Field | Req | §4 core | Type / allowed values | Rule |
|---|---|---|---|---|
| `need_id` | M | — | `NEED-NNN` | Immutable, unique, never reused; assigned at record creation. |
| `title` | M | — | string ≤ 100 chars | A short, **solution-free** paraphrase of the need (N1). Not a feature name. |
| `status` | M | — | `draft` · `coded` · `peer_reviewed` · `gate2_accepted` · `contested` · `retired` · `illustrative_hypothetical` | Lifecycle (§3.5). A need is Atlas-eligible only at `gate2_accepted`. |
| `created_by_role` / `created_date` | M | — | role id / ISO-8601 date | Provenance. |
| `last_reviewed_by` / `last_reviewed_date` | C | — | role id / date | Mandatory once `status ≥ peer_reviewed`. |

### 3.2 The need itself (JTBD core)

| Field | Req | §4 core | Type / allowed values | Rule |
|---|---|---|---|---|
| `jtbd_statement` | M | job | structured string | The Job-to-be-Done in the canonical form **"When \<situation\>, I want to \<motivation / progress sought\>, so I can \<desired outcome / deeper goal\>."** Solution-free (N1). Expressed from the participant's frame, not the product's. |
| `job_type` | M | job | `functional` · `emotional` · `social` | The dominant job dimension (a need may note secondary dimensions in `notes`); most lifestyle-change needs are emotional/functional blends — tag the primary. |
| `context` | M | context | structured string | The **triggering situation and conditions**: when/where/with-what-constraints the job arises (life stage, time pressure, energy, prior attempts, social setting). This is the "When \<situation\>" of the JTBD, expanded. |
| `observed_behavior` | M | observed behavior | string | What the participant **actually did** in the episode(s) — the real workaround, abandonment, or improvisation — stated as observation, not inference (TASK-027 N7). Separate from any interpretation (which goes in `interpretation`, §3.6). |
| `unmet_need` | M | unmet need | string | **The gap**: what the person was trying to achieve that current behaviour/tools did not let her achieve. Stated as a shortfall, not a feature to add. |

### 3.3 Barriers (what gets in the way)

| Field | Req | §4 core | Type / allowed values | Rule |
|---|---|---|---|---|
| `barriers` | M | (extends "unmet need") | list of barrier records (§5) | ≥1. Each barrier is `{barrier_id, com_b_code, description, source_ref[], severity}`; coded against COM-B (§5). Empty list is invalid for a `coded` need — a need with no obstacle is usually a solution in disguise (N1). |
| `enablers` | O | — | list, same shape | What *helped* the behaviour hold when it did; captured because designing *with* existing enablers beats inventing new scaffolding. |

### 3.4 Desired outcome (layered)

| Field | Req | §4 core | Type / allowed values | Rule |
|---|---|---|---|---|
| `desired_outcome` | M | (the "so I can…") | structured string | The progress the person is seeking, in **her** terms — the outcome, not the mechanism. |
| `outcome_layer` | M | — | `engagement` · `adherence` · `automaticity` · `health_or_life` | The layer the desired outcome sits at (`prd.md` §6). A need grounded in engagement evidence may not declare a `health_or_life` outcome as evidenced (N7). |
| `success_signal` | O | — | string | How *the participant* would know the outcome was met (not a product metric). Feeds TASK-048 validation design, not asserted here. |

### 3.5 Evidence links, support & grading (confidence)

| Field | Req | §4 core | Type / allowed values | Rule |
|---|---|---|---|---|
| `source_ref` | M | sources | list of `EVD-NNN` (+ `PART-NNN`) | ≥1 (N2). Each resolves to a TASK-005 `EVD` from a specific past episode. Quotes are referenced, never pasted un-keyed. |
| `support_count` | M | — | integer ≥ 1 | Number of **distinct `EVD`** (not repetitions by one person) supporting the need. Copied from real evidence; never estimated (N3). |
| `participant_count` | M | — | integer ≥ 1 | Number of **distinct `PART`** across those `EVD`. Drives generalisation language (N5, §4.3). |
| `prevalence_class` | M | — | `idiosyncratic` · `recurring` · `widespread` | Derived from §4.3 thresholds; governs how strongly the need may be stated. |
| `grade_efficacy` | C | confidence | `A`–`D` · `n/a` | TASK-004 grade for *does acting on this need improve a health/behaviour outcome*. For discovery-only needs this is almost always **`n/a`** or **D** — discovery does not establish efficacy (N4). |
| `grade_relevance` | M | confidence | `A`–`D` | TASK-004 grade for *is this a real, relevant need for the HerRays audience*. Qualitative convergence caps at **C** (`prd.md` §4). |
| `confidence` | M | confidence | `established` · `likely` · `indicative` · `speculative` | TASK-004 §5 controlled confidence vocabulary; must be consistent with grade + support (§4.2). |
| `confidence_rationale` | M | — | string | One sentence: *why this confidence*, naming support count, convergence and recency. Banned words: "proven", "users want" (unless N5 thresholds met). |

### 3.6 Interpretation, contradictions & open questions

| Field | Req | §4 core | Type / allowed values | Rule |
|---|---|---|---|---|
| `interpretation` | O | — | string | The researcher's inference *beyond* what was observed, **explicitly labelled as inference** and kept out of `observed_behavior`/`unmet_need` (TASK-004 observation vs. inference). |
| `contradictions` | C | — | list of `{con_ref, summary}` | Mandatory if any supporting `EVD` conflicts with another, or with TASK-024/025 science. Each opens/links a `CON` in TASK-008 (N6). |
| `unresolved_questions` | M | — | list of `{question, gap_ref, blocks_opportunity: bool}` | ≥1 for any need below `confidence: established` — what we would need to learn before relying on this need. Each links a `GAP` (TASK-008). An empty list for a non-established need is a validation failure (N2/N5). |
| `segment_tags` | O | — | list of strings | Provisional behavioral-segment groupings (§6); descriptive, not a committed segmentation. |
| `clinical_flag` / `privacy_flag` | C | — | boolean | `true` → routes to R14 / R15 (N8). Mandatory to set (true *or* false) before `peer_reviewed`. |
| `links` | O | — | `{jtbd_map_ref, journey_ref, opp_ref[]}` | Cross-refs to the journey map, and (downstream) any `OPP` built on this need (set by TASK-041, not here). |

### 3.7 Lifecycle (`status`)

```
draft ──code──▶ coded ──peer review──▶ peer_reviewed ──Gate 2──▶ gate2_accepted
   │                                        │                          │
   └── may be marked ──▶ contested ◀────────┴─────── new conflicting EVD ┘
                                   │
         superseded / merged ──▶ retired   (never hard-deleted; §7)
```
`illustrative_hypothetical` is a terminal, non-promotable state for synthetic examples (§8); such a record can never transition into the real lifecycle.

---

## 4. Confidence, grading & generalisation rules

### 4.1 Grade separately for efficacy, relevance and confidence
Per `prd.md` §4 ("Grade separately for efficacy, relevance and confidence where needed; do not interpret a high grade on usability as a high grade on health impact"), a `NEED` carries **two grades and a confidence**:
- **`grade_efficacy`** — whether acting on the need improves a behaviour/health outcome. Discovery evidence *cannot* establish this; it is `n/a` or `D` unless a TASK-025 study backs it. A `NEED` never borrows its efficacy grade from how strongly a participant *felt* the need.
- **`grade_relevance`** — whether the need is real and relevant for the audience. Convergent qualitative evidence tops out at **C** (`prd.md` §4 "C = repeated qualitative observations").
- **`confidence`** — the meta-confidence that our *reading* of the evidence is right, from the TASK-004 vocabulary.

### 4.2 Confidence ↔ grade ↔ support consistency
A `confidence` value is valid only in its band:

| confidence | typical relevance grade | minimum support | typical use |
|---|---|---|---|
| `established` | B (rare in discovery) | ≥ 2 independent evidence types (e.g. interview **and** diary) + corroborating TASK-025 science; `participant_count` meeting "widespread" (§4.3) | Only when primary research *and* literature converge. |
| `likely` | C | `recurring` (§4.3), ≥1 strong converging source | Most well-supported discovery needs land here. |
| `indicative` | C/D | `recurring` or a strong single-source signal | Suggestive, needs confirmation. |
| `speculative` | D | `idiosyncratic` | A hypothesis from one or two episodes; always carries `unresolved_questions`. |

A record whose `confidence` sits above its grade/support is a validation failure (§7.3). "Proven", "validated", "users want" are **banned** below `established` + widespread support (N5).

### 4.3 Prevalence thresholds (generalisation is earned)
`prevalence_class` is derived, not chosen, and bounds the language:

| class | threshold (proposed planning default) | permitted phrasing |
|---|---|---|
| `idiosyncratic` | 1 participant | "One participant, in one episode, …"; never "women". |
| `recurring` | ≥ 3 distinct participants across ≥ 3 `EVD`, convergent | "Several participants…", "a recurring pattern…". |
| `widespread` | ≥ ~⅓ of the achieved discovery sample **and** no strong counter-evidence | "A majority of participants in this sample…" (still sample-bounded, never "all women"). |

Thresholds are **proposed planning defaults** to be confirmed against the achieved sample (TASK-026 quotas); they are sample-descriptive and never claim population representativeness (purposive sampling is not a probability sample — a standing `unresolved_question` on every `widespread` need).

### 4.4 Outcome-layer firewall
`outcome_layer` may not exceed what the evidence observed:
- Evidence that a participant *opened an app daily* supports an **engagement** outcome, not an **adherence** one.
- Evidence that she *did the behaviour* supports **adherence**, not **automaticity** (which requires evidence of effortlessness/habit) or **health_or_life** (which requires a health/life signal she reported).
A need coded one layer above its evidence is rejected (N7).

---

## 5. Barrier coding (COM-B)

Barriers are the engine of the need: they explain *why* current behaviour falls short. Each is coded against **COM-B** (Michie et al.) so barriers are comparable and legible to WS03, **without** reading the framework onto the participant.

### 5.1 Barrier record
`{barrier_id, com_b_code, description, source_ref[], severity}`

- `com_b_code` ∈ `capability_physical` · `capability_psychological` · `opportunity_physical` · `opportunity_social` · `motivation_reflective` · `motivation_automatic`.
- `description` — the obstacle in the participant's own terms, observation-first.
- `source_ref[]` — ≥1 `EVD` (same evidence discipline as the need).
- `severity` — `blocking` · `major` · `minor`, from how decisively it ended/derailed the episode (observed, not guessed).

### 5.2 Coding rules
- **Code what was said, not what the theory predicts.** COM-B is a *filing system* for observed obstacles, not a checklist read to the user (TASK-027 §1). An obstacle with no supporting episode is not a barrier.
- **Multi-code honestly.** A barrier may span codes (e.g. exhaustion = `capability_physical` + `motivation_automatic`); record the primary and note the secondary, don't force one box.
- **Distinguish barrier from need.** The barrier is the obstacle; the `unmet_need` is the thwarted goal. "No time in the morning" is a barrier; "a way to make progress that survives a chaotic morning" is the need.

### 5.3 Why COM-B (not a bespoke list)
COM-B is used because the downstream science (TASK-024/025) and the BCT matrix speak it, so a barrier coded here maps directly to candidate mechanisms later — **without** this template proposing any mechanism (that is TASK-041). This keeps the research-to-opportunity chain legible while preserving the §7 firewall between need and solution.

### 5.4 Contradictory barriers
If two participants report opposing barriers for the same job (e.g. "reminders felt like nagging" vs. "I forgot without reminders"), both are recorded, the need notes the divergence in `contradictions`, and a `CON` is opened (TASK-008). The template never resolves this into "some users want reminders" as if it were one need — it is evidence of a **segment boundary** (§6), surfaced for the Atlas to design around.

---

## 6. Behavioral segments (as groupings of needs)

Per `prd.md` §6/§13 Prompt 04, discovery produces **behavioral segments** — but this template treats a segment only as an **emergent grouping of `NEED` records**, never as a demographic persona invented top-down.

- A segment is proposed when a **cluster of needs + barriers co-occurs across a subset of participants** (e.g. participants whose `motivation_automatic` barriers dominate and who abandon after a single missed day).
- Segments are recorded as `segment_tags` on the contributing needs plus a short **segment sketch** (`{segment_id, defining_needs[], defining_barriers[], participant_refs[], confidence}`) — not a glossy persona with a stock photo and invented biography (that would breach N3).
- Segment confidence obeys §4.2–§4.3: a segment seen in 2 participants is `speculative`, not a named audience.
- The committed segmentation and any targeting decision are **out of scope** here; they belong to WS04 synthesis sign-off and the Atlas. This template only makes the grouping *visible and traceable*.

---

## 7. Governance — anti-fabrication, validation & gate

### 7.1 Entry validation (a record may reach `coded` only if…)
1. `jtbd_statement` is in canonical form and **solution-free** (N1); `title` names no feature.
2. `context`, `observed_behavior`, `unmet_need`, `desired_outcome`, `outcome_layer` all populated; observation separated from interpretation.
3. ≥1 `barrier` with a `com_b_code` and ≥1 `source_ref` (N2).
4. ≥1 `source_ref` on the need; `support_count` and `participant_count` match the distinct `EVD`/`PART` actually linked (N3).
5. `prevalence_class` consistent with §4.3; language in all free-text fields matches the permitted phrasing (N5).
6. `grade_relevance`, `confidence`, `confidence_rationale` present and mutually consistent (§4.2); `grade_efficacy` not above `D`/`n/a` without a cited TASK-025 `EVD` (N4).
7. `outcome_layer` not above the evidence (N7, §4.4).
8. `clinical_flag` / `privacy_flag` explicitly set; if `true`, routed to R14 / R15 (N8).
9. For any need below `established`: ≥1 `unresolved_question` with a `gap_ref` (TASK-008).

### 7.2 Transition validation
- `coded → peer_reviewed`: a second role (not `created_by_role`) confirms §7.1 and the observation/inference split; R02 confirms barrier coding and the outcome-layer firewall.
- `peer_reviewed → gate2_accepted`: Gate-2 review (R06 + R02 + R14 where flagged) confirms the need is **distinct from a feature request** (`prd.md` §11) and traceable end-to-end. Only `gate2_accepted` needs may seed an `OPP` (TASK-041).
- Any new conflicting `EVD` → `contested`; the need is re-opened, not quietly edited, and a `CON` is live until adjudicated (N6). Records are **retired**, never hard-deleted.

### 7.3 Forbidden values (each an automatic review failure)
| # | Forbidden | Why |
|---|---|---|
| F1 | A `NEED` stated as / dependent on a named feature or competitor capability | N1; feature request, not a need (`prd.md` §7/§11). |
| F2 | A `NEED` with zero `source_ref`, or supported only by imagined-preference `EVD` | N2; manufactured demand. |
| F3 | `support_count` / `participant_count` not matching the linked `EVD`/`PART`, or estimated | N3; fabricated support. |
| F4 | Any quote, user, or count not traceable to a real `EVD`/`PART` | N3; fabrication (`prd.md` §4/§14). |
| F5 | `confidence` above its grade/support band, or "proven/validated/users want" below threshold | N4/N5; overclaim. |
| F6 | `grade_efficacy` ≥ C from discovery evidence alone | N4; usability ≠ health impact (`prd.md` §4). |
| F7 | `outcome_layer` above the observed layer | N7/§4.4. |
| F8 | Two conflicting accounts merged into one averaged need | N6; contradiction suppressed. |
| F9 | A persona/segment with invented biography, demographics, or stock identity | N3/§6. |
| F10 | A non-`established` need with an empty `unresolved_questions` list | N2/N5; false certainty. |
| F11 | Re-identifiable composite, or a quote not keyed to `PART-NNN` | N8; privacy (R15). |
| F12 | Clinical/menopause/mood/safety content without `clinical_flag: true` + R14 routing | N8; safety (R14). |

### 7.4 Gate binding
A `NEED` is **Atlas-eligible only at `gate2_accepted`** (`prd.md` §11 Gate 2: "usable primary research … opportunities distinct from feature requests"). `clinical_flag` / `privacy_flag` gates are **non-compensable**: a single R14 or R15 `reject` blocks the need regardless of how strong the evidence is, consistent with the non-compensable mandatory gates in TASK-003/TASK-033.

---

## 8. Worked example — **ILLUSTRATIVE (hypothetical)**, not evidence

> The following `NEED-SYNTH-001` is **entirely hypothetical**, built on fictitious `PART-SYNTH-*` / `EVD-SYNTH-*` identifiers to demonstrate how the template *runs*. It is **not** a finding, **not** derived from any real participant, and **may never** be cited or carried into an `OPP` (N3; `prd.md` §4/§14). It is shown deliberately **below** `established` to exercise the `unresolved_questions` and prevalence rules.

```yaml
need_id: NEED-SYNTH-001
title: "Restart after a bad week without feeling it was all wasted"   # solution-free (N1)
status: illustrative_hypothetical          # terminal synthetic state; never promotable
created_by_role: R07
created_date: 2026-11-23

jtbd_statement: >
  When a stressful week breaks the routine I had going,
  I want to pick the habit back up without feeling I've thrown away all my progress,
  so I can keep seeing myself as someone who is still doing this.
job_type: emotional                        # with a functional "re-start" component (notes)
context: >
  Midlife women (hypothetical) who had a few weeks of momentum on a sleep/movement routine,
  then hit a disruptive week (travel, illness, caregiving, work surge). The break is short,
  but the *feeling* of having "failed" is what ends the attempt, not the missed days themselves.
observed_behavior: >
  [SYNTHETIC] In the episodes, after 3–6 missed days the participants stopped opening their
  tracking tool entirely and did not return — several described deleting the app rather than
  seeing the broken streak. (Observation only; interpretation separated below.)
unmet_need: >
  A low-effort way to resume that treats the lapse as ordinary, not as a reset to zero —
  current tools made the lapse feel like a verdict.

barriers:
  - barrier_id: B1
    com_b_code: motivation_automatic
    description: "[SYNTHETIC] The broken streak triggered an all-or-nothing 'I've blown it' response."
    source_ref: [EVD-SYNTH-11, EVD-SYNTH-14]
    severity: blocking
  - barrier_id: B2
    com_b_code: motivation_reflective
    description: "[SYNTHETIC] Resuming felt like admitting failure, so avoidance was easier than returning."
    source_ref: [EVD-SYNTH-14]
    severity: major

enablers:
  - barrier_id: E1
    com_b_code: opportunity_social
    description: "[SYNTHETIC] One participant resumed when a friend mentioned her own lapse casually."
    source_ref: [EVD-SYNTH-22]
    severity: minor

desired_outcome: "To resume the behaviour after a lapse and keep a continuous sense of identity/progress."
outcome_layer: adherence                    # grounded in 'did/didn't do the behaviour' evidence, NOT health_or_life (N7)
success_signal: "[SYNTHETIC] She returns within a few days of a lapse instead of abandoning."

source_ref: [EVD-SYNTH-11, EVD-SYNTH-14, EVD-SYNTH-22]
support_count: 3
participant_count: 3
prevalence_class: recurring                 # ≥3 distinct participants, convergent (§4.3)
grade_efficacy: "n/a"                        # discovery cannot establish efficacy (N4)
grade_relevance: "C"                         # repeated qualitative observation (prd.md §4)
confidence: likely                           # consistent with C + recurring (§4.2)
confidence_rationale: >
  Three distinct hypothetical participants, convergent across two evidence types in-episode;
  relevance only — no efficacy claim; sample is purposive, not representative.

interpretation: >
  INFERENCE (not observed): the lapse appears to end attempts via an identity threat
  ("I'm not someone who sticks to things"), not via the missed behaviour itself.
contradictions:
  - con_ref: CON-SYNTH-03
    summary: "[SYNTHETIC] One participant found a gentle 'welcome back' supportive; another found any re-engagement nudge patronising → possible segment boundary, not one need (§5.4)."
unresolved_questions:
  - question: "Does a non-punitive restart actually change return rates, or only how the lapse feels?"
    gap_ref: GAP-SYNTH-07
    blocks_opportunity: true
  - question: "Is this pattern widespread or specific to participants with prior all-or-nothing histories?"
    gap_ref: GAP-SYNTH-08
    blocks_opportunity: false

segment_tags: ["all_or_nothing_restarter(provisional)"]
clinical_flag: false
privacy_flag: false
links:
  jtbd_map_ref: JRN-SYNTH-02
  opp_ref: []                                # set by TASK-041 only after gate2_accepted (never for a synthetic record)
```

### 8.1 Validation trace for `NEED-SYNTH-001` (against §7.1)
1. **Solution-free (N1):** ✅ title and JTBD name no feature ("restart", "sense of progress"), not "streak freeze" or any app capability.
2. **Core fields present:** ✅ context / observed_behavior / unmet_need / desired_outcome / outcome_layer all populated; interpretation held separately and labelled INFERENCE.
3. **Barrier discipline:** ✅ two barriers, COM-B-coded, each with `source_ref`.
4. **Evidence & support (N2/N3):** ✅ 3 `EVD`, 3 `PART`; `support_count`/`participant_count` match the linked ids (here synthetic).
5. **Prevalence (N5):** ✅ `recurring` with 3 participants; language says "several", never "women want".
6. **Grading (N4, §4.2):** ✅ `grade_efficacy: n/a`, `grade_relevance: C`, `confidence: likely` — mutually consistent.
7. **Outcome firewall (N7):** ✅ `adherence`, matching did/didn't-do evidence; no health claim.
8. **Flags (N8):** ✅ both flags explicitly set (false); nothing clinical in this example.
9. **Open questions (N2/N5):** ✅ two `unresolved_questions`, each with a `gap_ref`; the need sits at `likely`, not `established`, so the non-empty list is required and present.
10. **Status:** correctly `illustrative_hypothetical` — a terminal synthetic state that can never enter the real lifecycle or seed an `OPP`.

---

## 9. Derived views (read-only)

For WS04 synthesis and the Gate-2 pack, the following are **derived** from the `NEED` set (never hand-maintained, so they cannot drift from the records):

- **Need register** — all `NEED` with `title`, `prevalence_class`, `grade_relevance`, `confidence`, `status`.
- **Barrier heat-map** — barriers grouped by `com_b_code` × `severity`, to show where obstacles concentrate (input to TASK-024/025 mechanism work, *not* a solution).
- **Contradiction / segment board** — every `contradictions` entry and provisional `segment_tag`, linked to its `CON` (TASK-008).
- **Open-questions backlog** — every `unresolved_question` with `blocks_opportunity: true`, linked to its `GAP`; a need cannot pass Gate 2 with an unaddressed opportunity-blocking question.
- **Atlas-ready list** — only `gate2_accepted` needs, the sole set TASK-041 may consume.

---

## 10. Dependencies, open unknowns & change log

**Upstream (consumes):** TASK-027 (interviews), TASK-028 (diaries), TASK-005 (`EVD`/`PART`), TASK-004 (grading), TASK-024/025 (COM-B taxonomy, science for corroboration), TASK-026 (achieved sample / quotas for prevalence thresholds).
**Downstream (feeds):** TASK-041 (Opportunity Atlas — root need), TASK-042 (prioritisation — importance/confidence), TASK-043/044 (studio briefs — synthesised needs only), TASK-008 (gaps & contradictions), Gate 2 (`prd.md` §11).
**Interlocks:** `↔ TASK-004` (grades reused, not redefined) · `↔ TASK-005` (every `source_ref` is an `EVD`) · `↔ TASK-008` (every `CON`/`GAP` referenced here lives there).

**Open unknowns (explicitly unresolved, not invented):**
- The achieved discovery sample size and composition (TASK-026) — the §4.3 `widespread` threshold is a planning default until the real sample exists; purposive sampling is never representativeness.
- Whether two evidence types (interview + diary) will actually be available per need, which bounds how many needs can reach `established`.
- The committed behavioral-segmentation model (out of scope here; WS04 sign-off + Atlas).
- Real `NEED` content — **none exists**; this is a template, not a finding.

**Change log:**
- v0.1 (2026-11-23) — Initial template: `NEED` field dictionary mapping `prd.md` §4 core fields + acceptance-criteria fields (JTBD, context, evidence links, barriers, desired outcomes, confidence, unresolved questions); COM-B barrier coding; separate efficacy/relevance/confidence grading with prevalence thresholds; outcome-layer firewall; contradiction & segment handling; forbidden-value catalogue; Gate-2 binding; one ILLUSTRATIVE (hypothetical) worked record with validation trace. Status: Proposed — not yet populated.
