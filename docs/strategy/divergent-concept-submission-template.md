# HerRays Divergent Concept Submission Template

**Deliverable:** TASK-044 — Create the divergent concept submission template
**Workstream:** Concept Innovation (WS07)
**Version:** 0.1 · **Status:** Proposed — submission format defined, no studio has submitted, no concept, idea or test result asserted
**Owner (accountable role):** WS07 Concept Program Lead (proposed governance default, pending Program-Director confirmation — see `→ TASK-002`), operating under the Program Director as independence custodian and Gate-3 chair
**Reviewers:** R01 Head of Product / Product visionary · R02 Behavioral scientist · R03 Senior UX/product designer · R04 Visual/brand designer · R07 UX researcher · R08 Motion/interaction designer · R09 Product analyst/growth · R10 Content strategist/UX writer · R12 iOS engineer · R13 QA/accessibility specialist · R14 Clinical reviewer · R15 Privacy/regulatory reviewer · Program Director (independence custodian)
**Source basis:** `prd.md` §8 line 170 (per studio: "interpret evidence; independently generate at least 15 divergent ideas; critique; select three contrasting concepts; create proposition, promise, first-use/ordinary-day/missed-day/long-term journeys, behavioral logic, novel elements, risks and storyboards; then prototype … Six studios × three developed concepts = **18 initial concept dossiers**"), §13 Prompt 09 line 271 ("Deliver ideation catalogue, three concept dossiers, storyboards, wireframes, evidence/invention traceability, feasibility and test hypotheses. Never present imagined preferences as validated"), §11 line 201 (Gate 3: "independent studio outputs, complete journeys, invention clearly distinguished from evidence") and line 205 ("Polished unsupported reports do not pass"), §12 line 218 (Week 7 target: "90+ ideas, 18 concept dossiers"), §4 line 107 (evidence grades A–D), §9 line 174/176 (validation dimensions and the proposed selection weights the concepts are later tested against), §3 line 135 (the streaks worked example; "meaningful repeated action and perceived autonomy, not merely app opens"), §1 (separate engagement / adherence / automaticity / health outcomes), §14 lines 289–310 (handoff schema and the "not complete" rules), §15 line 323 (final decision rule: "least unnecessary effort"); `↔ TASK-043` (the six studio briefs that **point to this format** for output, §4.5/BC-8); `↔ TASK-005` (`EVD` record schema the labels trace into); `↔ TASK-004` (evidence grading A–D); `↔ TASK-009` (`EXP`/`DEC` registers that receive test hypotheses and decisions); `→ TASK-045` (eight-screen wireframe spec the prototypes target); `→ TASK-034` (interactive capability evaluation scorecard — a sibling format, **not** reused here); `→ TASK-048` (concept testing & final selection — the independent judge these submissions feed).

---

## 0. How to read this document

This is the **submission contract** for WS07: the single format every one of the six isolated concept studios (`↔ TASK-043`) fills in and submits, so that the Gate-3 first review (`prd.md` §11) and the comparative validation (`→ TASK-048`) can compare six independently-produced submissions **like with like — without homogenizing the concepts themselves.** It satisfies the TASK-044 acceptance criteria: a format that **requires each studio to submit 15 distinct ideas, three concept dossiers, evidence/invention labels, risks and a lead concept, with completeness validation** that blocks an incomplete or fabrication-tainted submission from entering the review.

It is a **format / governance artifact**, not a research finding and **not a concept.** It contains:
- **no concepts, ideas, wireframes, storyboards or lead picks** — those are the studios' work (`prd.md` §8). Everything a studio would *enter* appears here only as an empty field, a field rule, or a clearly-labelled **ILLUSTRATIVE format demonstration** (§9) whose content is obviously synthetic scaffolding, never a real proposal;
- **no fabricated research** — no interview, observation, metric, effect size, user quote, adoption/retention number or clinical/test result is asserted. Where the template shows an evidence link it shows a **placeholder token** (`EVD-nnn`, `NEED-nnn`) that a studio must replace with a real pinned record ID, never invented content;
- **no claim of validated appeal** — the template is engineered so that "Never present imagined preferences as validated" (`prd.md` §13 Prompt 09) is *structurally* enforced: desirability/return/efficacy fields can only be entered as **test hypotheses** bound for `→ TASK-048`, never as results (§4.4, §6.4, VAL-9).

> **No-fabrication statement.** This template defines where studios put their work; it does no studio's work and invents no evidence. It cites no real `OPP`/`NEED`/`EVD`/`CAP`/`JRN`/`APP`/`DEC` content. The only filled-in cells anywhere in this document are in §9, which is marked end-to-end as **ILLUSTRATIVE — FORMAT DEMONSTRATION ONLY**, uses transparently fake placeholder tokens, and asserts nothing about any real user, mechanism, concept or result. Fabrication is made both *detectable* and *inert* by three structural devices carried from `↔ TASK-043`: (a) every idea and every concept element must carry an **evidence-vs-invention label** (§5) with a traceable record ID for anything labelled evidence-based, so an invented mechanism cannot masquerade as a finding; (b) any statement of desirability, adherence, retention or health effect is accepted **only** as a labelled test hypothesis for `→ TASK-048` (VAL-9); (c) the **completeness validator** (§8) rejects — not merely flags — a submission that hides contradictions, breaks traceability, or presents hypothetical users/tests as real, directly operationalizing the `prd.md` §14 "not complete" rules and the §11 "Polished unsupported reports do not pass" standard.

**Scope boundary (what this task is and is not).**
- **TASK-044 (this document) = the *output format*** the studios submit into — the ideation-catalogue structure, the three-dossier structure, the evidence/invention label scheme, the risk fields, the lead-concept declaration, the independence attestation surface and the completeness validator. It is one shared, versioned template, identical for all six studios.
- **TASK-043 (six studio briefs) = the *input* mandate** that points here for format (`↔ TASK-043` §4.5/BC-8). This document does not re-issue mandates, re-define the shared evidence package (`PKG`), or re-state the isolation protocol; it *references* them and provides the surface on which the S-6 independence attestation is recorded.
- **TASK-045 (eight-screen wireframe spec) = the *screen* specification** the prototypes are built against; this template requires the prototype and its screen inventory but does not define the screens.
- **TASK-034 (interactive capability-evaluation scorecard) = a *different* instrument** that scores *capabilities* 0–100 (WS02/Phase 4). This template deliberately **does not score concepts** — scoring is the validation judge's job (`→ TASK-048`), and a studio self-scoring its own desirability is a forbidden action (§10). The two formats are siblings, not the same.
- **TASK-048 (concept testing & final selection) = the *downstream judge*.** Every desirability/effort/trust/return claim here is a hypothesis routed to that test; this template never pre-judges or self-certifies.

---

## 1. Purpose and the completeness principle

`prd.md` §8 and Prompt 09 (§13) fix exactly what each studio must deliver: an **ideation catalogue of ≥15 genuinely distinct ideas**, **three contrasting concept dossiers** (each with proposition, promise, interaction model, behavioral logic, novel/invented elements, the four required journeys, risks and unknowns), **storyboards + low-fidelity prototypes**, **evidence/invention traceability**, **feasibility notes** and **test hypotheses** — and all of it bound by "Never present imagined preferences as validated." Six studios submitting this shape yields the PRD's **90+ ideas and 18 concept dossiers** (§12 line 218).

This template exists to do five jobs:

1. **Make the required shape mandatory, not aspirational.** Every PRD-named part becomes a field with a pass condition; a missing part is a validation failure (§8), not a stylistic lapse.
2. **Force divergence to be auditable.** 15 ideas that are 15 skins of one idea fail the **distinctness test** (§4.1); three dossiers that share one interaction philosophy fail the **contrast test** (§6.1). Breadth is a gate, not a vibe.
3. **Separate invention from evidence at the element level.** The evidence/invention label (§5) attaches to *every idea and every concept element*, so Gate 3 can see, at a glance, "invention clearly distinguished from evidence" (`prd.md` §11).
4. **Route every appeal claim to a test.** Desirability, adherence, retention, delight and health effect are enterable only as **test hypotheses** (§4.4/§6.4) carried to `→ TASK-048`; the template has no field in which to assert them as fact.
5. **Give the Program Director a runnable gate.** §8 is a deterministic validator: each check has a machine-checkable pass condition and a single disposition (accept / return-incomplete / reject). "Polished unsupported reports do not pass" (`prd.md` §11) becomes an executable rule, not an intention.

**Seven non-negotiable rules of a valid submission (carried from `↔ TASK-043` B1–B7, specialized to the output):**

- **T1 — Completeness is binary.** A submission enters the comparative review **only** if every §8 validator check passes. Partial submissions are *returned incomplete*, never silently accepted (`prd.md` §14: a deliverable "is not complete if…").
- **T2 — ≥15 *distinct* ideas.** Fewer than 15, or 15 that fail the §4.1 distinctness test, fails VAL-2. Distinctness is about *idea*, not wording.
- **T3 — Exactly three *contrasting* concept dossiers.** Not two, not four; and the three must pass the §6.1 contrast test. Each is one of the three ideas (or a synthesis) promoted from the catalogue, with full traceability back to catalogue rows.
- **T4 — Every element labelled E / A / I.** Evidence-based / Adapted / Invented (§5). Anything labelled **E** carries a real pinned record ID + grade; anything labelled **I** carries a test hypothesis. No element is unlabelled.
- **T5 — All four journeys, for every dossier.** First-use, ordinary-day, missed-day, long-term (`prd.md` §8). The **missed-day** journey must be non-punitive — no reset, shame or all-or-nothing collapse (`prd.md` §3 line 135; `↔ TASK-043` A/§4.3).
- **T6 — Risks are declared, not buried.** Each dossier carries a risk register (§7) across the fixed categories; the mandatory clinical/privacy/accessibility/autonomy gates each get an explicit entry (even if "no concern — rationale"). Hiding a known contradiction or risk is a reject (`prd.md` §14).
- **T7 — Exactly one lead concept, with rationale and a test plan — not a verdict.** The studio names one of its three as lead and *argues* it from evidence + mechanism + testability, explicitly **without** asserting it is validated (`prd.md` §13; §4.4). The lead is a recommendation into Gate 3, not a decision.

---

## 2. Submission at a glance

Each studio submits **one** `SUB` package against the versioned brief (`PKG-v<x>`, `↔ TASK-043` §2.2). The package has six parts; §3–§7 specify each, §8 validates the whole.

| Part | What it is | PRD basis | Validator |
|---|---|---|---|
| **A. Submission header** | Studio ID, `PKG` version + hash, date, author roles, S-6 independence attestation | `prd.md` §14; `↔ TASK-043` S-6 | VAL-1 |
| **B. Ideation catalogue** | **≥15 distinct ideas**, each a one-row record with an E/A/I label (§4) | §8 / §13 "at least 15 … distinct ideas" | VAL-2, VAL-3 |
| **C. Three concept dossiers** | **Exactly 3 contrasting** dossiers, full field spec incl. the four journeys (§6) | §8 / §13 "three contrasting concepts" | VAL-4…VAL-8 |
| **D. Evidence/invention traceability index** | Every E-labelled element → pinned record ID + grade; every I-labelled element → test hypothesis (§5) | §11 "invention clearly distinguished from evidence"; §13 | VAL-5, VAL-9 |
| **E. Risk registers** | Per-dossier risk table across fixed categories incl. the four mandatory gates (§7) | §8 "risks"; §9/§11 gates | VAL-7 |
| **F. Lead concept declaration** | One lead of the three, with evidence-grounded rationale + test plan, no validated-appeal claim (§4.4) | §13 "Never present imagined preferences as validated" | VAL-8, VAL-9 |

Storyboards + low-fidelity prototypes are attached per dossier (screens per `→ TASK-045`); the template records their presence and pointers (VAL-6), not their pixels.

---

## 3. Part A — Submission header (fields)

| Field | Rule |
|---|---|
| `SUB` id | `SUB-<studio>-v<n>` (e.g., `SUB-A-v1`). Resubmissions increment `<n>`; the prior version and the change reason are retained (audit trail). |
| Studio | One of A Behavior First / B Joy First / C Invisible App / D Health Intelligence / E Life Companion / F Category Breaker (`↔ TASK-043` §5–§10). |
| Package pinned | `PKG-v<x>` **id + content hash** the studio worked from. Must equal the canonical issued version (`↔ TASK-043` §2.2); a mismatch is a package-integrity breach (§10 / `↔ TASK-043` §12.2). |
| Date | Submission date (absolute). |
| Author roles | The studio's internal roles (visionary / behavioral scientist / UX / visual-motion / iOS), as **role types**, not named individuals (`↔ TASK-003`). |
| **Independence attestation (S-6)** | Verbatim, signed by the studio lead role: *"We received `PKG-v<x>` (hash …); we did not view any other studio's first-round ideas, concepts, storyboards or lead concept; our concepts are our own interpretation of the shared evidence."* A submission without it **cannot enter** the comparative review (`↔ TASK-043` §12.2 #6; VAL-1). |
| Self-check | The studio's own §8 validator pass/fail self-report (the Program Director re-runs it independently; the self-report does not substitute for the gate). |

---

## 4. Part B — The ideation catalogue (≥15 distinct ideas)

### 4.1 The distinctness test (what makes 15 ideas count as 15)
Two ideas are **distinct** only if they differ on at least one of: (i) the **user job / root problem** attacked; (ii) the **behavioral mechanism** relied on (COM-B/BCTTv1/SDT/Fogg lever; P4); (iii) the **interaction model / modality** (e.g., ambient vs in-app, conversational vs glanceable). Re-skins (same job + same mechanism + same model, different copy/color) are **one** idea, not several. The catalogue must contain **≥15 ideas that are pairwise distinct under this test** (VAL-2/VAL-3). Divergence is the point of WS07 — "six meaningfully different product visions … independent initial concept work" (`prd.md` §1) begins with genuinely different ideas inside each studio.

### 4.2 Per-idea record (one row each; ≥15 rows)

| Field | Content | Rule |
|---|---|---|
| `IDEA` id | `IDEA-<studio>-NN` | Unique within the studio. |
| One-line proposition | What it is, in a sentence | No marketing superlatives; plain. |
| Root user job / problem | The JTBD or problem it attacks | Points to an Atlas `OPP`/`NEED` record where evidenced (label E), else to the invention rationale (label I). |
| Primary mechanism | The behavior-change lever | Names the BCT/COM-B/SDT/Fogg mechanism (P4) or marks it invented. |
| Interaction model | Ambient / in-app / conversational / glanceable / other | Used by the distinctness test (§4.1). |
| **E/A/I label** | Evidence-based / Adapted / Invented (§5) | **Mandatory.** E ⇒ record ID + grade; A ⇒ source pattern + what changed; I ⇒ one-line test hypothesis. |
| Promotion flag | Promoted to a dossier? (→ which `CONCEPT` id) | Exactly three ideas (or syntheses of catalogue ideas) are promoted (§6). |

### 4.3 Distribution guidance (graded, not a hard gate)
A healthy catalogue spans more than one mechanism and more than one interaction model, and is not entirely invented nor entirely incremental. **Guidance, not a pass/fail bar:** aim for ideas across ≥3 mechanisms and ≥2 interaction models, and a mix of E/A/I rather than all-I or all-E. The Program Director records the actual spread; a monotone catalogue is a note to the studio, not an automatic reject — but it will usually also fail the distinctness test (VAL-2).

### 4.4 The appeal-claim rule (applies to the whole submission)
No field in the catalogue — or anywhere in the submission — may state that an idea or concept *is* desirable, delightful, sticky, adherence-improving or health-improving. Such statements are enterable **only** as a **test hypothesis**: "*We hypothesise X; to be tested per `→ TASK-048` via [method]; current status: untested.*" This is the structural form of `prd.md` §13 "Never present imagined preferences as validated," enforced by VAL-9.

---

## 5. The evidence-vs-invention label scheme (applies to every idea and element)

This is the device that makes "invention clearly distinguished from evidence" (`prd.md` §11) auditable at the element level. Every idea row (§4.2) and every concept element (proposition, mechanism, journey step, novel element) carries exactly one label:

| Label | Meaning | Mandatory attachment | Grade |
|---|---|---|---|
| **E — Evidence-based** | Rests on a pinned repository record (behavioral evidence, user finding, observed journey, adopted capability decision) | **Record ID** (`EVD`/`NEED`/`JRN`/`CAP`/`DEC`, `↔ TASK-005/009`) + the record's **evidence grade A–D** (`↔ TASK-004`) | A–D carried through from the source record |
| **A — Adapted** | A benchmark pattern or prior mechanism **reworked** for HerRays, not copied | Source `APP`/`PAT`/`CAP` id **+ what was changed and why** (not "App X has it" — B4) | Inherits the source grade for the *mechanism*; the *adaptation* is a hypothesis unless itself evidenced |
| **I — Invented** | New; no evidence basis yet (and WS07 *wants* invention — esp. Studio F) | A one-line **test hypothesis** bound for `→ TASK-048` (and logged as `EXP`, `↔ TASK-009`) | Ungraded by definition; grade is earned only after a test |

**Rules.** (1) An element labelled **E** with no resolvable record ID, or a grade not matching the cited record, fails VAL-5. (2) An element labelled **E** or **A** that actually rests on an untested assumption is **mislabelled invention** — a reject (§10 #3; `prd.md` §11). (3) An **I** element with no test hypothesis fails VAL-9. (4) Adaptation must show the *delta* from the benchmark and the mechanism+evidence it traces to; a bare "adapted from App X" is treated as feature-copying (B4) and fails VAL-5.

---

## 6. Part C — The three concept dossiers

### 6.1 The contrast test (what makes three dossiers "contrasting")
The three must differ in **kind**, not degree: at minimum two of the three must use a **different primary interaction model or a different dominant mechanism** from the other(s), so the set offers the Lab a real spread to test rather than one concept at three fidelities. Three dossiers that collapse to one philosophy fail VAL-4. (This is the within-studio echo of the cross-studio divergence rule in `↔ TASK-043`.)

### 6.2 Dossier field spec (identical for all three; all fields required)

| # | Field | Content & rule |
|---|---|---|
| D-1 | `CONCEPT` id + name | `CONCEPT-<studio>-NN`; traces back to the promoted `IDEA` row(s) (§4.2). |
| D-2 | Proposition | What it is and for whom (the midlife-woman audience, `prd.md` §1). |
| D-3 | User promise | The felt value in the user's terms — one promise, not a feature list. |
| D-4 | Interaction model | The core model (ambient / in-app / conversational / glanceable / hybrid); feeds the §6.1 contrast test. |
| D-5 | Behavioral logic | The mechanism chain: cue → action → feedback → repetition → recovery → autonomy, each step E/A/I-labelled (§5), tied to P4 evidence where E. Must separate **engagement vs adherence vs automaticity vs health outcome** targets (`prd.md` §1) — state which the concept moves and how it's distinguished from "merely app opens" (`prd.md` §3 line 135). |
| D-6 | Novel / invented elements | The genuinely new elements, each labelled **I** with its test hypothesis (§5). Invention is welcomed here; laundering it as evidence is not (T4/§10). |
| D-7 | **Four journeys** | **First-use · ordinary-day · missed-day · long-term** (§6.3). All four mandatory (VAL-6). |
| D-8 | Feasibility notes | Fit to the P9 technical envelope (`→ TASK-037/039`): iOS/HealthKit/widgets/Live Activities/notifications/on-device/sync; build-buy-integrate-defer leanings; open feasibility questions. |
| D-9 | Risks & unknowns | Pointer into the Part-E risk register (§7) for this dossier + the honest unknowns (`prd.md` §14 "unknowns"). |
| D-10 | Test hypotheses | The concept's claims expressed as `→ TASK-048` tests on the §9 validation dimensions (desirability, comprehension, first-action completion, effort, trust, differentiation, accessibility, return intent, willingness to pay). Never as results (VAL-9). |
| D-11 | Storyboard + prototype pointers | Links/IDs for the storyboard and the low-fi editable/clickable prototype; screens per `→ TASK-045` (VAL-6 checks presence, not pixels). |
| D-12 | Mandatory-gate self-statement | One line each for clinical, privacy, accessibility, autonomy, brand — "no concern because…" or "handled by…" (expanded in the §7 register; non-compensable, B6). |

### 6.3 The four required journeys (per dossier)
Each journey is a short step sequence (not polished screens — `prd.md` §8 "do not jump immediately to polished screens"): entry context → key steps → the behavioral mechanism at work → the felt outcome → the primary risk at that moment.

- **First-use** — discovery → first meaningful action; time-to-first-value; comprehension.
- **Ordinary-day** — the steady-state daily (or less-than-daily) interaction; must honor "least unnecessary effort" (`prd.md` §15).
- **Missed-day / recovery** — **non-punitive by rule (T5):** a missed day is a re-entry or a non-event, never a reset, shame loop or all-or-nothing collapse (`prd.md` §3 line 135; `↔ TASK-043` §4.3). A dossier whose missed-day journey punishes the user fails VAL-6 regardless of polish.
- **Long-term** — weeks/months out: adaptation, graduation/automaticity, sustained value vs novelty decay — distinguishing durable value from first-run delight (`prd.md` §1).

### 6.4 Claims inside a dossier
All of D-5/D-6/D-10 obey the §4.4 appeal-claim rule: mechanism effects and user appeal are **hypotheses** with a named `→ TASK-048` test and status "untested," unless an **E** label carries a real graded record for that specific claim. A polished dossier that asserts outcomes it has not tested does not pass (`prd.md` §11 line 205).

---

## 7. Part E — Risk register (per dossier)

Each dossier carries a risk table. The four mandatory-gate categories **must** each have at least one row (even if the row is "no concern — rationale"); a missing mandatory-gate row fails VAL-7.

| Field | Content |
|---|---|
| `RISK` id | `RISK-<concept>-NN` |
| Category | **clinical safety · privacy/data · accessibility · user autonomy/anti-dark-pattern** (the four non-compensable gates, B6) · behavioral harm (guilt/compulsion/over-tracking, `prd.md` §6) · feasibility · commercial · comprehension |
| Description | The risk, concretely |
| Severity · Likelihood | Low / Med / High each (qualitative; no fabricated probabilities) |
| Mitigation | Design or process response |
| Residual | What remains after mitigation |
| Gate link | For the four mandatory categories: the reviewer who must sign (R14 clinical, R15 privacy, R13 accessibility; autonomy co-signed) and the check in `→ TASK-033/040/022` |
| Status | open / mitigated / needs-review |

**Non-compensable rule (B6).** A High-severity, un-mitigated clinical, privacy, accessibility or autonomy risk is a **Gate-3 block** for that concept — it is never "outweighed" by delight, novelty or differentiation (`prd.md` §9/§11). The template has no field in which such a trade is expressible.

---

## 8. The completeness validator (the runnable gate)

The Program Director runs this against every `SUB` **before** it enters the Gate-3 comparative review. Each check is machine-checkable and yields one disposition. The submission **enters the review only if all checks = PASS.** This is the executable form of `prd.md` §14 ("a deliverable is not complete if…") and §11 ("Polished unsupported reports do not pass").

| # | Check | Pass condition | Fail disposition |
|---|---|---|---|
| **VAL-1** | Header & attestation | `SUB` header complete; `PKG` id+hash equals the canonical issued version; **S-6 attestation present and signed** | Return incomplete; if `PKG` mismatch → package-integrity breach (`↔ TASK-043` §12.2) |
| **VAL-2** | ≥15 **distinct** ideas | Catalogue has ≥15 rows, **pairwise distinct** under the §4.1 test | Return incomplete |
| **VAL-3** | Every idea labelled | Every `IDEA` row carries an E/A/I label with its mandatory attachment (§5) | Return incomplete |
| **VAL-4** | Exactly 3 **contrasting** dossiers | Exactly three dossiers; they pass the §6.1 contrast test; each traces to promoted catalogue row(s) | Return incomplete |
| **VAL-5** | Evidence traceability | Every **E** element resolves to a real pinned record ID whose **grade matches**; every **A** element shows source + delta | **Reject** if an E/A label rests on no record (mislabelled invention, `prd.md` §11) |
| **VAL-6** | Four journeys + prototype | All four journeys present for all three dossiers; **missed-day is non-punitive** (T5); storyboard + prototype pointers present (screens per `→ TASK-045`) | Return incomplete; punitive missed-day → return for redesign |
| **VAL-7** | Risk register | Each dossier has a risk table with a row for **each** mandatory gate (clinical/privacy/accessibility/autonomy); no High-severity un-mitigated mandatory risk left silent | Return incomplete; silent High mandatory risk → **reject** (hidden risk, `prd.md` §14) |
| **VAL-8** | One lead + rationale | Exactly one lead concept named, with an evidence+mechanism+testability rationale | Return incomplete |
| **VAL-9** | No validated-appeal claim | No field asserts desirability/adherence/retention/health effect as fact; all such statements are labelled **test hypotheses** for `→ TASK-048` | **Reject** (presents imagined preference as validated, `prd.md` §13 / §11) |
| **VAL-10** | No hidden contradiction | Declared contradictions/unknowns are surfaced, not buried (`prd.md` §14); internal counts (15 ideas, 3 dossiers, 1 lead) are self-consistent | **Reject** if a known contradiction is concealed; return incomplete for count mismatch |

**Dispositions.** *PASS* → enters Gate-3 review. *Return incomplete* → back to the studio with the failed check(s); does not enter the review. *Reject* → a fabrication/integrity violation (VAL-5/7/9/10); logged, not buried, and the studio must remediate. Dispositions mirror the Program Director's `pass / conditional pass / fail` authority (`prd.md` §11 line 205).

> **Why a hard validator, not a rubric.** The §9 validation weights (`prd.md` §9/§11) and the capability scorecard (`→ TASK-034`) score *quality*. This validator scores *nothing* — it only decides **admissibility**. Quality is judged later by independent validation (`→ TASK-048`); a studio must never self-score its own desirability (§10 #5). Keeping admissibility (objective, binary) separate from quality (judged, weighted) is what stops a "polished unsupported report" from buying its way into the comparison on presentation alone.

---

## 9. ILLUSTRATIVE format demonstration (synthetic scaffolding — NOT a real concept, idea, finding or result)

> **This section is a FORMAT DEMONSTRATION ONLY.** Every token below is transparently fake placeholder scaffolding (`IDEA-X-01`, `EVD-nnn`, `NEED-nnn`, `CONCEPT-X-01`). It proposes **no real concept**, cites **no real evidence**, and asserts **no desirability, adherence or outcome**. It exists solely to show *where fields go and how the validator reads them*. No studio has submitted; nothing here is a HerRays proposal. The letter "X" stands for "any studio" — it is **not** Studio A–F content.

**B. Ideation catalogue — one illustrative row (of the ≥15 required):**

| `IDEA` | Proposition | Root job | Mechanism | Model | **E/A/I** | Promoted? |
|---|---|---|---|---|---|---|
| `IDEA-X-01` | *(studio enters a one-line proposition here)* | *(→ `NEED-nnn` if evidenced)* | *(names a P4 lever, or "invented")* | ambient / in-app / … | **I** — *hyp: "to be tested per `→ TASK-048`"* | → `CONCEPT-X-01` |

**C. Concept dossier skeleton — illustrative field presence (all fields empty, shown to prove the shape):**

```
CONCEPT-X-01  "<name>"            ← D-1 traces to IDEA-X-01
D-2  Proposition:                 <studio fills>
D-3  User promise:                <studio fills — one promise>
D-4  Interaction model:           <ambient|in-app|conversational|glanceable|hybrid>   (feeds §6.1 contrast test)
D-5  Behavioral logic:            cue→action→feedback→repetition→recovery→autonomy, each step [E:EVD-nnn/A/I]
                                  target = adherence (NOT "app opens", prd §3)
D-6  Novel/invented elements:     [I] <element> — hyp → TASK-048
D-7  Journeys:                    first-use | ordinary-day | missed-day (NON-PUNITIVE) | long-term
D-8  Feasibility:                 <P9 envelope fit; build/buy/integrate/defer lean; open questions>
D-9  Risks & unknowns:            → RISK-CONCEPT-X-01-* (Part E) + honest unknowns
D-10 Test hypotheses:             <§9 dimensions as TASK-048 tests; status: untested>
D-11 Storyboard/prototype:        <pointer>  (screens per → TASK-045)
D-12 Gate self-statement:         clinical / privacy / accessibility / autonomy / brand — one line each
```

**How the validator reads this skeleton (illustrative dispositions):** with only one idea row it fails **VAL-2** (need ≥15 distinct) → *return incomplete*; if `D-5` said "users will love this and stick" with no test, it would fail **VAL-9** → *reject*; if `IDEA-X-01` were labelled **E** but `EVD-nnn` resolved to nothing, it would fail **VAL-5** → *reject*. The point of the demonstration is that these dispositions are mechanical, not editorial.

---

## 10. Forbidden values & actions

These make a submission **invalid** (not merely weak), mapping to `prd.md` §3/§4/§8/§11/§13/§14 and the `↔ TASK-043` guards.

1. **Incomplete admitted as complete** (violates T1/VAL-1…VAL-8, `prd.md` §14): routing a submission missing any required part into the Gate-3 review. → return incomplete; it does not enter.
2. **Fewer than 15, or non-distinct, ideas** (violates T2/§4.1): a padded catalogue of re-skins. → VAL-2 fail; return incomplete.
3. **Mislabelled invention** (violates T4/§5, `prd.md` §11): tagging an untested assumption **E** or **A** so it reads as a finding. → VAL-5 reject; re-label as **I** + test hypothesis.
4. **Imagined preference asserted as validated** (violates T7/§4.4, `prd.md` §13): any "users will love / return / adhere" stated as fact. → VAL-9 reject; convert to a `→ TASK-048` hypothesis.
5. **Studio self-scoring its own desirability/quality** (scope error): importing the `→ TASK-048` judge's or the `→ TASK-034` scorecard's verdict into the submission. → reject; admissibility (this template) ≠ quality (the judge).
6. **Punitive missed-day journey** (violates T5/§6.3, `prd.md` §3): a reset/shame/all-or-nothing recovery path. → VAL-6 return-for-redesign.
7. **Hidden risk or contradiction** (violates T6/§7, `prd.md` §14): a known clinical/privacy/accessibility/autonomy risk or an internal contradiction left out. → VAL-7/VAL-10 reject.
8. **Mandatory gate traded away** (violates B6/§7, `prd.md` §9/§11): framing a High clinical/privacy/accessibility/autonomy risk as offset by delight/novelty. → reject; gates are non-compensable.
9. **Competitor feature-copy posing as adaptation** (violates B4/§5, `prd.md` executive mandate/§13): a bare "adapted from App X" with no mechanism, evidence or delta. → VAL-5 fail.
10. **More or fewer than three dossiers, or three non-contrasting ones** (violates T3/§6.1): → VAL-4 fail; return incomplete.
11. **Package mismatch / missing attestation** (violates VAL-1, `↔ TASK-043` §12.2): a `PKG` version/hash that isn't the canonical issue, or no signed S-6 non-viewing attestation. → return incomplete / integrity breach.
12. **Concepts invented inside *this* template** (scope, as with `↔ TASK-043` BC-9): the format document itself proposing real ideas/concepts rather than empty fields + the labelled §9 demonstration. → reject; this task defines the surface, the studios fill it.

---

## 11. Governance, dependencies, and change control

- **Custodian:** the **WS07 Concept Program Lead** owns this template; the **Program Director** runs the §8 validator as the independence-and-admissibility gate into Gate 3. Roles are accountable **role types**, not named individuals (`↔ TASK-002/003`).
- **Where this sits in the pipeline:** downstream of the six briefs (`↔ TASK-043`, which point here for output format) and the approved `PKG` (`↔ TASK-041/042`); the surface on which each studio's work is submitted; upstream of the Gate-3 comparative review and `→ TASK-048` validation/selection. It realizes the submission half of **WS07 / Gate 3** (`prd.md` §11: "independent studio outputs, complete journeys, invention clearly distinguished from evidence"), and feeds the PRD's **90+ ideas / 18 dossiers** target (`prd.md` §12 line 218).
- **Dependencies:**
  - `↔ TASK-043` Six studio briefs — the mandate and the `PKG`/isolation context; they reference this template at §4.5/BC-8. This document provides the S-6 attestation surface (VAL-1) but does not re-define the isolation protocol.
  - `↔ TASK-005 / TASK-004` `EVD` record schema & evidence grades A–D — the targets and grades the **E** labels and VAL-5 resolve against.
  - `↔ TASK-009` Decision & experiment registers — **I** elements' test hypotheses are logged as `EXP`; adopted mechanisms trace to `DEC`.
  - `→ TASK-029 / TASK-024 / TASK-025 / TASK-012 / TASK-016` — supply the `NEED`/`EVD`/`CAP`/`PAT`/`JRN` records the **E**/**A** labels point to.
  - `→ TASK-045` Eight-screen wireframe spec — the screen inventory the D-11 prototype is built against (VAL-6 checks presence).
  - `→ TASK-033 / TASK-040 / TASK-022` Safety gate / privacy-clinical boundary / iOS-accessibility audit — the reviewers and checks the §7 mandatory-gate rows bind to (R14/R15/R13; non-compensable, VAL-7).
  - `→ TASK-037 / TASK-039` Build-buy matrix & iOS integration inventory — the feasibility envelope D-8 is assessed against.
  - `→ TASK-034` Interactive capability scorecard — a **sibling** 0–100 instrument for *capabilities*; deliberately **not** reused here (concepts are not self-scored).
  - `→ TASK-046 / TASK-047` "Your Little Win Today" microinteraction & Habit Graduation state machine — illustrative standalone mechanisms a studio may draw on (label **A**/**I** accordingly); neither is a mandated element.
  - `→ TASK-048` Concept testing & final selection — the independent judge; every appeal claim here is a hypothesis routed to it.
- **Open unknowns (honestly recorded, not defects):**
  - The real `PKG` snapshot (and therefore live submissions) cannot exist until the briefs' upstream evidence is populated and the §7 Atlas gate passes (`↔ TASK-043` §2.2 honest-state note); this template is a **release-ready form** until then.
  - Whether the distinctness (§4.1) and contrast (§6.1) tests need a third independent reader to adjudicate borderline calls — proposed default: Program Director adjudicates, with R02/R03 consulted on ties; revisit if disputes recur.
  - Whether resubmission after a *return-incomplete* resets independence (could a studio have seen siblings' work in the interim?) — proposed default: re-sign S-6 on every resubmission; the §2 `SUB-…-v<n>` increment preserves the trail.
  - The exact mapping of the §9 validation dimensions to concrete `→ TASK-048` instruments — owned there, not pre-empted here.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial divergent concept submission template: six-part `SUB` package (header + S-6 attestation; ideation catalogue of ≥15 ideas with a distinctness test; three contrasting concept dossiers with the full field spec and the four required journeys incl. a non-punitive missed-day rule; evidence/invention E/A/I label scheme with record-ID + grade traceability; per-dossier risk registers across the four non-compensable mandatory gates; single lead-concept declaration as recommendation-not-verdict); a runnable 10-check completeness validator (VAL-1…VAL-10) with accept / return-incomplete / reject dispositions operationalizing `prd.md` §14 and §11; an ILLUSTRATIVE-only format demonstration using transparently synthetic placeholder tokens; seven non-negotiable rules T1–T7; a 12-item forbidden-value catalogue; dependencies to TASK-002/003/004/005/009/012/016/022/024/025/029/033/034/037/039/043/045/046/047/048. No concepts, no ideas, no fabricated evidence or results. | WS07 Concept Program Lead / Program Director |
