# HerRays — Behavioral Literature Search Protocol

**Deliverable:** TASK-024 — Create the behavioral literature search protocol
**Workstream:** Behavior & User Research (WS03) · behavioral-science & clinical-evidence lens
**Version:** 0.1 · **Status:** Proposed — search protocol defined, no search run, no study screened or extracted
**Owner (accountable role):** Behavioral scientist (R02), under Program Director custody
**Reviewers:** Product analyst / growth specialist (R09, outcome-taxonomy sign-off) · UX researcher (R07) · Clinical reviewer (R14) · Privacy/regulatory reviewer (R15) · Program Director
**Source basis:** `prd.md` §6 Behavioral science ("Use COM-B, BCTTv1, Self-Determination Theory, habit formation, implementation intentions and relevant intervention studies. Separate engagement, adherence, automaticity and clinical outcomes. Extract populations, interventions, comparators, duration, effect sizes when available, uncertainty and transferability to midlife women. Assess risks of guilt, compulsion, burden and excessive tracking."), §4 ("Initial evidence targets: … 30–50 high-relevance publications (prioritize systematic reviews, randomized studies and implementation evidence)"; Evidence Library `EVD-001`; grades A–D; "Grade separately for efficacy, relevance and confidence"; "Do not interpret a high grade on usability as a high grade on health impact"; no-fabrication rule), §1 ("Separate engagement, adherence, habit automaticity and health outcomes"), §2 (behavioral-scientist lens → "Mechanism audit"), §11 Gate 1/Gate 2 ("Polished unsupported reports do not pass"), §13 Prompt 00 ("Separate evidence, inference, hypothesis and invention"; "research gap log") and Prompt 03 ("Review COM-B, BCTTv1, Self-Determination Theory, Fogg, habit formation and implementation-intention evidence … Prioritize systematic reviews and strong intervention studies; extract population, comparator, duration, outcomes, effect sizes where available, limitations and transferability to midlife women. Distinguish engagement, adherence, automaticity and health outcomes.")
**Depends on:** TASK-004 (evidence grading — grades A–D, the multi-dimensional efficacy/relevance/confidence split and the confidence vocabulary this protocol reuses) · TASK-005 (`EVD` record schema — every admitted publication becomes an `EVD` record; this protocol only defines *how a study is found and admitted*, not how it is stored) · TASK-003 (responsibility matrix — names the behavioral scientist R02 accountable, clinical R14 for clinical-outcome and safety sign-off) · TASK-008 (gap/contradiction log — an unanswerable question or a contested body of evidence routes there)
**Feeds:** TASK-025 (behavior-change evidence extraction table — the admitted studies from this protocol are extracted there; this protocol stops at "admitted to full-text / included," TASK-025 begins at "extract its data") · TASK-018 (behavioral scientist audit template — the efficacy evidence an app audit *links to* is sourced through this protocol; the audit never invents it) · TASK-030/031 (capability mechanism records & five-layer worksheet — the "evidence/limitations" layer is populated from included studies) · TASK-009 (experiment register — a question this protocol marks *unanswerable from the literature* becomes a candidate `EXP`) · TASK-029 (user-needs synthesis — scientific evidence is triangulated against primary user evidence; contradictions preserved) · TASK-042 (opportunity prioritization — the evidence confidence behind each mechanism flows into prioritization)

---

## 0. How to read this document

The PRD asks WS03 to build "a source-linked evidence base, not merely presentations" (`prd.md` §1) and sets a concrete target of "30–50 high-relevance publications" (`prd.md` §4). Left unspecified, that target invites the single most dangerous failure mode in evidence work: **a motivated search** — typing a mechanism's name plus the word "works," collecting the papers that agree, and presenting the pile as if it were a representative read of the science. The result looks rigorous and is not reproducible, not representative, and silently confounds *the app was used more* with *a health behaviour changed*.

This document is the **protocol that prevents that** — a reproducible recipe for *how the literature is searched, screened and admitted*, written so that a second behavioral scientist running the same protocol on the same date arrives at the same included set (or at a disagreement that is recorded and adjudicable, not hidden).

It is a **method, not a dataset.** It contains **no study, no effect size, no finding, and no count of results** — because no search has been run. It does seven separable things:

1. **Fixes the question set** (§4) — the behavioral questions the search must answer, framed with an explicit PICO-style structure so each question maps to concrete search concepts.
2. **Names the databases and sources** (§5) — which bibliographic databases, trial registries, guideline bodies and grey-literature sources are searched, and why each is in or out of scope.
3. **Specifies the query architecture** (§6) — the concept blocks, controlled-vocabulary and free-text terms, Boolean structure, and worked (synthetic, un-run) search strings that make the search reproducible.
4. **Defines inclusion / exclusion criteria** (§7) — the explicit admit/reject rules applied at title-abstract and full-text screening, including language, date and population limits with their rationale.
5. **Ranks study types** (§8) — the evidence hierarchy that decides which designs are prioritized (systematic reviews, RCTs, implementation studies) and which are admitted only with caveats.
6. **Defines populations and the outcome taxonomy** (§9) — the target and transferable populations, and — the heart of the PRD's rule — the **four-layer outcome taxonomy that keeps engagement separate from adherence, automaticity and clinical/health outcomes.**
7. **Binds grading, the search record, and anti-fabrication guards** (§8.4, §10–§13) — how admitted studies map to TASK-004 grades, the PRISMA-style audit trail that makes the whole search re-runnable, the forbidden-value catalogue, and a clearly-labelled synthetic worked example proving the protocol runs end-to-end.

> **No-fabrication statement.** This document reports **no scientific finding, effect size, confidence interval, sample size, p-value, or study result of any kind, and no count of search hits**, because **no search has been executed and no study has been screened.** Every search string, database list, screening rule and grade mapping below is a *specification of how the literature will be searched and judged*, never a claim about what the literature says. The named frameworks and methods — COM-B (Michie, van Stralen & West, 2011), the Behaviour Change Technique Taxonomy v1 (Michie et al., 2013), Self-Determination Theory (Ryan & Deci, 2000), the Fogg Behavior Model (Fogg, 2009), habit-formation work (e.g. Lally et al., 2010), implementation intentions (Gollwitzer, 1999), PRISMA 2020 (Page et al., 2021), the GRADE approach (Guyatt et al., 2008) and the Cochrane Handbook — are cited **as instruments and reporting standards this protocol consults and conforms to**, i.e. by name and method, *never* as evidence that any HerRays or competitor feature works. No effect size attributed to any of them appears here. The only "populated" artifacts are the **clearly-labelled synthetic examples** in §6.4 and §12, which use fictitious counts and `*-SYNTH-*` identifiers solely to demonstrate the format; nothing in them may be cited as a real result. If this protocol is run, its outputs are *studies to extract* (TASK-025) — not conclusions.

**Scope boundary — what this task is and is not.**
- **TASK-024 (this document) = the search-and-screen protocol.** It answers *"which questions do we ask the literature, where do we look, with what queries, what do we admit and reject, how do we classify designs and outcomes, and how is the whole search made reproducible and honest."* Its output is a **screened, included set of publications** plus a PRISMA-style flow record.
- **It is not the data-extraction table.** How each *included* study's intervention, BCT, comparator, duration, effect estimate, certainty and transferability are recorded is **TASK-025**. This protocol hands TASK-025 a list of admitted studies; it does not define extraction fields.
- **It is not the evidence record schema.** The storage contract for an `EVD` record (identifiers, provenance, lifecycle) is **TASK-005**. This protocol says *which publications earn an `EVD`*; TASK-005 says *how the record is shaped*.
- **It is not the grading ruleset.** The A–D scale, admissible-source ceilings and confidence vocabulary are **TASK-004**. This protocol *applies* them (§8.4) and never redefines them.
- **It is not the app teardown.** Observing what Routinery/Fabulous/etc. *do* is **TASK-016–023**. This protocol searches the *science* those audits must link to; it never reads a study off an app screen or a marketing page.
- **It does not decide anything.** No Adopt/Adapt/Invent/Reject/Defer (TASK-035), no scoring (TASK-034). Included evidence is an *input* to those; this protocol "does not prescribe a final app" (`prd.md` §13 Prompt 03).

---

## 1. Purpose

A literature review is only evidence if another scientist can reconstruct it. The purpose of this protocol is to make the WS03 science search **reproducible, representative, and honest about what it can and cannot establish** — specifically honest about the gap between *a behavior-change technique increased app engagement* and *it improved a health behaviour or outcome in women in midlife.*

It guarantees five properties of the WS03 evidence base:

1. **Reproducible.** Databases, dates, full search strings, filters, and screening decisions are recorded in a PRISMA-style trail (§10) so the same search re-run on the same date yields the same included set. "Searched the literature" with no recorded string is not a method (`prd.md` §14: a deliverable is not complete if "its method cannot be reproduced").
2. **Representative, not motivated.** The search is built from **concept blocks** (§6), not from a hoped-for conclusion; screening criteria (§7) are fixed *before* results are read; and studies that contradict a favoured mechanism are admitted and routed to the contradiction log (TASK-008), never dropped.
3. **Design-aware.** The evidence hierarchy (§8) prioritizes systematic reviews, RCTs and implementation studies (`prd.md` §4), and a lower-tier design can never silently acquire a higher-tier grade.
4. **Outcome-honest.** Every research question and every admitted study is tagged with the **lowest outcome layer its evidence actually reaches** — engagement / adherence / automaticity / clinical-health (§9.3). This is the operational form of the PRD's most-repeated instruction ("Separate engagement, adherence, automaticity and clinical outcomes," `prd.md` §1/§6) and the one most often violated by digital-health marketing.
5. **Transferability-bounded.** The target population is women in midlife; most relevant evidence will come from other populations. Every admitted study carries an explicit transferability judgement (§9.2), and distance from the target population lowers *relevance*, independent of its efficacy grade (`prd.md` §4: "Grade separately for efficacy, relevance and confidence").

---

## 2. Six non-negotiables (anti-fabrication & integrity guards)

These guards are structural. A search, a screening decision, or an admitted study that violates any one is rejected at protocol audit (§11), not patched afterward.

- **L1 — No finding without a retrievable source.** Every admitted study has a resolvable identifier (DOI, PMID, trial-registration number, or a stable URL + access date) recorded as an `EVD` (TASK-005). A claim with no retrievable source is **inadmissible** — not a low-grade source, an *absent* one. Paraphrasing a result "from memory" or from a secondary blog post about a study is a validation failure; the primary record must be located or the claim is dropped.
- **L2 — The search string is recorded verbatim, or the search did not happen.** Every database search is logged with its exact string, the interface/date, filters applied, and the number of records returned (§10). A number of hits with no reproducible string behind it may never be reported.
- **L3 — Screening criteria are frozen before results are read.** The inclusion/exclusion rules (§7) and the outcome taxonomy (§9) are fixed in this versioned document before any title is screened. Post-hoc narrowing to reach a conclusion ("exclude the null studies") is prohibited; any criterion change is a new protocol version with a change-log entry and re-screening (§13).
- **L4 — Engagement is never reported as health outcome.** Each admitted study is tagged `outcome_layer` from the §9.3 vocabulary, and a study measuring app opens, session counts, or self-reported "motivation" may **not** be described as evidence of adherence, automaticity, or clinical benefit. Collapsing the layers is the canonical WS03 failure and an automatic rejection (§11; `prd.md` §1/§6).
- **L5 — Efficacy grade is earned by design and evidence, not by popularity, polish, or citation count.** A mechanism's prevalence in apps, a paper's citation count, a journal's prestige, or a confident abstract never raises the efficacy grade. Grade follows the TASK-004 rules applied to the *study design and its actual results* (`prd.md` §3 "popularity … is not proof of clinical efficacy"; §4).
- **L6 — Absence of evidence is recorded, not silently filled.** If a question returns no admissible evidence, that is a first-class result: a **research gap** (`GAP`, TASK-008) with the question, the search that found nothing, and a candidate experiment (TASK-009). The protocol never manufactures a plausible-sounding answer to cover a gap (`prd.md` §13 Prompt 00 "Do not invent research … or completed work").

---

## 3. Where this sits in the evidence chain

```
                         THIS PROTOCOL (TASK-024)
   ┌───────────────────────────────────────────────────────────────┐
   │  §4 Questions (PICO)  →  §5 Sources  →  §6 Query architecture   │
   │        → run search → §10 PRISMA trail (identification)         │
   │        → §7 screening (title/abstract → full text)              │
   │        → §8 design triage · §9 population & outcome tagging     │
   │        → §8.4 provisional grade (TASK-004)                      │
   └───────────────────────────────────────────────────────────────┘
          │ included set (list of studies + PRISMA flow)
          ▼
   TASK-025  behavior-change evidence extraction table
          │ one row per included study: intervention, BCT, population,
          │ comparator, duration, outcome, effect estimate, certainty,
          │ transferability  → each becomes/links an EVD (TASK-005)
          ▼
   TASK-030/031 capability records ·  TASK-018 app audits link to it ·
   TASK-009 experiments for the gaps ·  TASK-029 triangulate vs users ·
   TASK-008 gaps & contradictions ·  TASK-042 opportunity confidence
```

**Boundary restated:** this protocol ends at *"this study is included."* The moment a study's *data* is read into fields, you are in **TASK-025**. The two are designed to be run back-to-back by the same R02 owner but are versioned and reviewed separately so that the *search* can be audited independently of the *extraction*.

---

## 4. The question set (what we ask the literature)

The search is driven by an explicit, versioned question set, not by ad-hoc curiosity. Questions are framed in a **PICO-style** structure (Population, Intervention/mechanism, Comparator, Outcome) so that each maps cleanly onto the §6 concept blocks and the §9.3 outcome layer. Questions are grouped by the behavioral constructs the PRD names (`prd.md` §6, §13 Prompt 03).

### 4.1 Standing research questions (RQ)

Each RQ is a *specification of what to ask*, carrying its target outcome layer (§9.3) so the search cannot drift from behaviour change into mere engagement.

| RQ | Construct / mechanism (`prd.md` §6) | Question (PICO-framed) | Primary outcome layer sought |
|---|---|---|---|
| RQ-01 | Habit formation & automaticity | In adults attempting a health behaviour (P), does repetition in a stable context with cues (I) vs no structured repetition (C) increase behavioural **automaticity** and maintenance (O)? | Automaticity + adherence |
| RQ-02 | Implementation intentions | In adults (P), do if-then implementation-intention prompts (I) vs goal intentions alone (C) improve **enactment** of a planned health behaviour (O)? | Adherence (enactment) |
| RQ-03 | Self-Determination Theory / autonomy | In adults (P), do autonomy-supportive designs (choice, rationale, non-controlling language) (I) vs controlling/externally-pressuring designs (C) affect **sustained** motivation and behaviour (O)? | Adherence + automaticity; motivation as mediator only |
| RQ-04 | Reinforcement, feedback & rewards (incl. streaks) | In adults (P), do progress/streak/reward feedback mechanisms (I) vs no such feedback (C) affect **repeated behaviour and perceived autonomy** (O), and what are the **guilt/all-or-nothing** harms (the `prd.md` §5 streaks caution)? | Adherence; explicit harm outcomes |
| RQ-05 | Self-monitoring / tracking | In adults (P), does self-monitoring of a health behaviour (I) vs none (C) improve the behaviour (O), and at what point does tracking **burden** reduce utility? | Adherence + clinical where measured; burden harm |
| RQ-06 | Reminders / prompts & re-engagement | In adults (P), do notification/prompt strategies (I) vs none/alternative cadence (C) affect **re-engagement and behaviour** without raising annoyance/opt-out (O)? | Engagement vs adherence (must separate) |
| RQ-07 | Recovery after lapse (missed-day) | In adults (P), do lapse-tolerant / recovery-supportive designs (I) vs punitive reset designs (C) affect **return to the behaviour** and self-efficacy (O)? | Adherence; self-efficacy |
| RQ-08 | Goal setting & structure | In adults (P), do specific/graded goal-setting approaches (I) vs vague goals (C) improve **behavioural attainment** (O)? | Adherence |
| RQ-09 | Digital behaviour-change interventions (DBCI) overall | In adults using mobile/app-delivered behaviour-change interventions (P) vs control/usual care (C), what is the evidence for **adherence, automaticity and health outcomes** (O), and how durable is it? | All four layers; durability flagged |
| RQ-10 | Transferability to midlife women | Across RQ-01…RQ-09, how much evidence is in or transferable to **women in midlife / perimenopause–menopause** contexts (P), and where is it absent (gap)? | Relevance/transferability meta-question |
| RQ-11 | Ethical anti-patterns & harms | Across mechanisms, what evidence exists on **guilt, shame, compulsion, dependency, over-tracking and burden** (the `prd.md` §6 risk set) as adverse effects of behaviour-change design? | Harm outcomes (first-class) |

### 4.2 Rules for the question set
- **Every RQ declares an outcome layer.** No RQ may seek "engagement" as its headline outcome; where engagement is the only available proxy (e.g. RQ-06), the RQ says so explicitly and the limitation is carried forward (L4).
- **RQ-10 and RQ-11 are mandatory lenses, not optional.** Transferability (relevance) and harms are searched *for every mechanism*, because the PRD treats midlife-women relevance and guilt/compulsion/burden risk as non-negotiable (`prd.md` §6).
- **New questions are added by version, not improvised.** A question that emerges mid-search (e.g. from TASK-029 user findings) is added as RQ-12+ with a change-log entry (§13) and its own frozen criteria; it does not retroactively reshape a completed search.
- **An RQ with no admissible evidence is a `GAP`,** not a blank (L6 → TASK-008).

---

## 5. Databases and sources

Sources are chosen to cover the behavioral-science, health-psychology, digital-health and clinical literature the PRD names, while respecting the §6 budget discipline (no paid stack bought before a gap is proven, `prd.md` §10). Each source carries an explicit in/out rationale; "unknown" access is recorded, never assumed.

### 5.1 Primary bibliographic databases (searched in full)

| ID | Source | Why in scope | Coverage note / access status |
|---|---|---|---|
| DB-01 | **MEDLINE / PubMed** | Core biomedical + health-psychology + clinical-trial literature; free PubMed interface | In scope. Access: public (PubMed). MeSH controlled vocabulary available. |
| DB-02 | **PsycINFO** | Definitive psychology / behavioral-science index; best coverage of SDT, habit, motivation constructs | In scope **if institutional access available**; access status `unknown` until confirmed (record as such, L-rule honesty). APA thesaurus terms used if available. |
| DB-03 | **Cochrane Library (CENTRAL + CDSR)** | Systematic reviews and a trials register; directly serves the §4 "prioritize systematic reviews and randomized studies" instruction | In scope. Access: partially public; full access status `unknown` until confirmed. |
| DB-04 | **Scopus or Web of Science** (one, not both) | Multidisciplinary citation index for coverage breadth and forward/backward citation chasing | In scope conditionally — **buy/use only one**, and only if DB-01/02 coverage is shown insufficient (`prd.md` §10 "avoid overlapping subscriptions"). Access `unknown`. |
| DB-05 | **CINAHL** | Nursing & allied-health; useful for self-management and adherence literature | Optional / conditional; add only if adherence-management coverage is thin after DB-01–03. |

### 5.2 Trial registries and guideline / HTA sources

| ID | Source | Role |
|---|---|---|
| DB-06 | **ClinicalTrials.gov + WHO ICTRP** | Identify registered/ongoing trials and detect **publication bias / selective reporting** (registered-but-unpublished trials). Not a source of *results* unless results are posted. |
| DB-07 | **PROSPERO** | Check for existing/registered systematic-review protocols on our RQs (avoid duplication; find in-progress reviews). This protocol's own review may be registered here. |
| DB-08 | **Guideline / HTA bodies** (e.g. NICE, USPSTF, WHO) | Locate evidence syntheses and clinical-boundary guidance; feeds clinical-reviewer (R14) sign-off and the clinical-boundary checklist (TASK-040). Named as sources, not quoted as results here. |

### 5.3 Grey literature and supplementary strategies (bounded)

| ID | Source / strategy | Use | Guard |
|---|---|---|---|
| DB-09 | **Backward & forward citation chasing** | Snowball from included systematic reviews and key trials | Every snowballed study re-enters §7 screening; it is not auto-included. |
| DB-10 | **Grey literature** (preprint servers, dissertations, major org reports) | Mitigate publication bias; surface null results | **Grade ceiling applies** (TASK-004): non-peer-reviewed sources are capped and flagged; never presented at the same confidence as peer-reviewed RCTs. |
| DB-11 | **Hand-search of key journals / known reviews** | Catch indexing gaps | Recorded in the PRISMA trail as a distinct identification stream. |

### 5.4 Explicitly out of scope (as *evidence*)
- **App Store listings, marketing pages, vendor whitepapers, and press/editorial coverage** are **not** scientific evidence and are excluded from this search. (They are handled as market/observational artifacts in WS01/WS02 and graded accordingly; `prd.md` §3/§4.)
- **Generative-AI summaries or model "knowledge"** are not a source. Any lead surfaced that way must be traced to a retrievable primary record (L1) before admission.
- **Secondary blog/news descriptions of a study** are leads only; the primary study must be located or the item is dropped.

---

## 6. Query architecture

Searches are built from **concept blocks** combined with Boolean logic, not from single free-text phrases. This is what makes the search representative (it asks for a *concept*, not a *conclusion*) and reproducible (§10 records the exact string).

### 6.1 Concept-block model

A search string for an RQ is assembled as:

```
( Population terms )  AND  ( Intervention/Mechanism terms )  AND  ( Outcome terms )
                      [ optionally AND ( Study-design filter ) ]
```

Within each block, synonyms and controlled-vocabulary terms are OR-ed. Truncation (`*`), phrase quoting, and database-specific field tags and subject headings (e.g. MeSH in DB-01, thesaurus terms in DB-02) are used and **recorded per database** because syntax differs across interfaces.

### 6.2 Standing concept-block term banks

These are the free-text term banks (to be paired with each database's controlled vocabulary at search time). They are **search terms, not findings.**

- **Population block (general):** `adult*`, `men`, `women`, `midlife`, `middle-aged`, `perimenopaus*`, `menopaus*`, `"women's health"` — with RQ-10 widening/narrowing as needed.
- **Mechanism blocks (per construct):**
  - Habit/automaticity: `habit*`, `automaticity`, `"habit formation"`, `routine*`, `cue*`, `context-dependent repetition`.
  - Implementation intentions: `"implementation intention*"`, `"if-then plan*"`, `"action planning"`, `"coping planning"`.
  - SDT / autonomy: `"self-determination"`, `autonom*`, `"intrinsic motivation"`, `"competence"`, `"relatedness"`, `"autonomy support*"`, `"controlling language"`.
  - Reinforcement/feedback/streaks: `reinforc*`, `reward*`, `feedback`, `streak*`, `gamif*`, `"progress feedback"`, `badge*`, `points`.
  - Self-monitoring: `"self-monitoring"`, `self-track*`, `"self-regulation"`, `diary`, `logging`.
  - Reminders/prompts: `reminder*`, `prompt*`, `notification*`, `"just-in-time"`, `JITAI`, `nudge*`.
  - Recovery/lapse: `lapse`, `relapse`, `"missed day*"`, `"recovery"`, `"self-efficacy"`, `"behavioral flexibility"`.
  - Goal setting: `"goal setting"`, `"goal attainment"`, `"graded task*"`, `"action plan*"`.
  - DBCI (overarching): `"behavior* change"`, `"behaviour change"`, `mHealth`, `"mobile health"`, `"smartphone app*"`, `"digital intervention*"`, `eHealth`, `"behaviour change technique*"`, `BCT`.
- **Outcome blocks (tagged by layer, §9.3):**
  - *Engagement layer (proxy only):* `engagement`, `"app use"`, `adherence to the app`, `retention`, `session*`, `"log-in*"` — **flagged**: these are proxies, never reported as health outcome (L4).
  - *Adherence layer:* `adherence`, `compliance`, `"behaviour* maintenance"`, `"behavioral enactment"`, `uptake`.
  - *Automaticity layer:* `automaticity`, `"self-report behavioural automaticity index"`, `SRBAI`, `habit strength`.
  - *Clinical/health layer:* `"physical activity"`, `"sleep quality"`, `"dietary intake"`, `"weight"`, `"blood pressure"`, `"stress"`, `"quality of life"`, plus RQ-specific outcomes.
  - *Harm layer (RQ-11):* `guilt`, `shame`, `compulsi*`, `dependen*`, `burden`, `"adverse effect*"`, `"unintended consequence*"`, `dropout`.

### 6.3 Study-design filters
Where a database offers validated design filters (e.g. a systematic-review or RCT hedge), they may be applied **as a sensitivity run**, not as the only run — an overly strict filter can hide implementation studies. Any filter used is recorded (§10); searches are run both with and without the design filter when feasibility allows, and the difference logged.

### 6.4 Worked (synthetic, UN-RUN) search string — illustrative only

> **SYNTHETIC — demonstrates format; NOT a real search and NOT run. The record count is fictitious.**

```yaml
search_id: SRCH-SYNTH-01          # illustrative
rq_ref: RQ-04                      # reinforcement/feedback/streaks
database: DB-01 (PubMed/MEDLINE)
interface: PubMed web
run_date: <unrun>                  # no search performed
string: >
  ( adult*[tiab] OR women[tiab] OR midlife[tiab] )
  AND ( streak*[tiab] OR reward*[tiab] OR "progress feedback"[tiab]
        OR gamif*[tiab] OR reinforc*[tiab] )
  AND ( adherence[tiab] OR "behaviour change"[tiab] OR autonom*[tiab]
        OR guilt[tiab] OR "all-or-nothing"[tiab] )
filters_applied: [ "English", "Humans" ]
design_sensitivity_run: true       # also run without SR/RCT hedge
records_returned: <SYNTHETIC: 000 — no search executed>
outcome_layers_targeted: [ adherence, harm ]
notes: >
  Harm terms (guilt, all-or-nothing) are deliberately IN the outcome
  block so the streaks caution (prd.md §5) is searched FOR, not around.
```

This block exists only to show the *shape* of a recorded search. The `records_returned` value is a placeholder token, not a result; `run_date` is `<unrun>`.

---

## 7. Inclusion and exclusion criteria

Criteria are **frozen before screening** (L3) and applied in two passes: title/abstract, then full text. Every exclusion at full-text stage is recorded with its reason code (§10) — PRISMA requires the count and reasons for full-text exclusions.

### 7.1 Inclusion criteria (ALL must hold)

| ID | Criterion | Rationale |
|---|---|---|
| IN-1 | Addresses at least one RQ construct (§4) as the **intervention/mechanism** | Keeps the set on behaviour-change mechanisms, not generic health topics. |
| IN-2 | Reports a **behavioural or health outcome** at the adherence, automaticity, or clinical layer — **or** is explicitly a harm/ethics study (RQ-11) | Enforces the PRD's behaviour-change focus; engagement-only studies are admitted **only** as context and tagged (§9.3), never as efficacy. |
| IN-3 | Human participants | Behavioural transferability requires human evidence. |
| IN-4 | Empirical study **or** systematic/scoping review **or** guideline/HTA synthesis | Matches the §8 hierarchy. |
| IN-5 | Retrievable primary record (DOI/PMID/registration/stable URL) | L1 — no untraceable source. |
| IN-6 | Published / available in a language the team can extract (see IN-7) | Extraction integrity. |

### 7.2 Exclusion criteria (ANY triggers exclusion)

| ID | Criterion | Rationale / guard |
|---|---|---|
| EX-1 | No behavioural/health/harm outcome (e.g. engagement-only with no behaviour measure, or purely technical/feasibility with no outcome) | Prevents engagement→efficacy laundering (L4). Logged, not silently dropped. |
| EX-2 | Not about a relevant mechanism (off-topic) | Scope discipline. |
| EX-3 | Non-human / purely theoretical with no data (*unless* a named theory/framework paper explicitly sought under §4) | Keeps the evidence base empirical; theory papers admitted deliberately, not by accident. |
| EX-4 | Non-retrievable / primary source cannot be located | L1. |
| EX-5 | Predatory / non-peer-reviewed **presented as peer-reviewed**, or retracted | Integrity; retraction status is checked at full-text. Grey literature is *allowed* (DB-10) but correctly labelled and grade-capped, which is different from this exclusion. |
| EX-6 | Marketing, vendor, or editorial material posing as evidence | §5.4. |
| EX-7 | Duplicate / earlier superseded version of the same study | Deduplicated at §10; the most complete/registered record is kept. |

### 7.3 Date and language limits (with rationale, not silent)
- **Date:** No hard cut-off that would drop foundational mechanism papers (e.g. seminal SDT/implementation-intention/habit work). A **recency lens** is applied *within* digital-intervention questions (RQ-06/RQ-09) because platform behaviour dates quickly — but this is a *tagging and interpretation* rule, not an exclusion of older mechanism science. Any date filter actually applied in a database run is recorded (§10) with its reason.
- **Language:** English-language extraction is the default because of team capacity; **this is a limitation, not a quality criterion.** Non-English records identified are **logged as a known limitation and a potential `GAP`** (TASK-008), never deleted as if they did not exist.
- **Geography/population:** No geographic exclusion. Population distance from midlife women lowers *relevance/transferability* (§9.2), it does **not** exclude the study.

### 7.4 Screening reliability
- **Dual screening on a subset.** A defined proportion of title/abstract decisions (and, where feasible, full-text decisions) are **independently screened by a second reviewer**; agreement is reported (e.g. percent agreement / Cohen's κ) and disagreements are resolved by discussion or a third reviewer. This mirrors the WS01 review-coding "independent agreement checks on a subset" discipline (`prd.md` §5) and is a hedge against motivated single-reviewer screening.
- **Disagreements are recorded,** not silently overridden; an unresolved screening disagreement about a pivotal study routes to TASK-008.

---

## 8. Study-type hierarchy and provisional grading

### 8.1 Design hierarchy (prioritization, per `prd.md` §4)

| Tier | Design | Status in this search |
|---|---|---|
| T1 | Systematic reviews / meta-analyses of RCTs | **Prioritized.** First read; anchor the evidence base; also mined for included trials (DB-09). |
| T2 | Randomized controlled trials | **Prioritized.** Core efficacy evidence. |
| T3 | Implementation / real-world / pragmatic studies; quasi-experimental | **Prioritized** for transferability and durability (`prd.md` §4 "implementation evidence"). |
| T4 | Non-randomized comparative, cohort, longitudinal observational | Admitted with design caveats; cannot establish causal efficacy alone. |
| T5 | Cross-sectional, qualitative, single-arm, feasibility/pilot | Admitted as context or for mechanism/harm insight; **cannot** carry a high efficacy grade. |
| T6 | Narrative reviews, theory/framework papers, guidelines | Admitted for framing and mechanism definition (and clinical-boundary guidance); not counted as efficacy evidence for a specific feature. |

### 8.2 Prioritization rule
When the `prd.md` §4 target of 30–50 publications forces selection, **tier and relevance to an RQ govern inclusion, not convenience.** The set must not become "the 40 easiest-to-find papers" nor "the 40 most favourable." Coverage across RQ-01…RQ-11 is checked (§10 dashboard); an RQ with zero T1–T3 evidence is flagged as a weak-evidence area, not padded with T5 studies.

### 8.3 Publication-bias and selective-reporting checks
- Registry cross-check (DB-06): registered trials with no published results are **noted as a bias signal**.
- Where a systematic review reports funnel-plot/small-study effects, that is carried into the certainty judgement (TASK-025 / GRADE).
- Null and negative results are actively sought (harm and outcome blocks include `dropout`, `"adverse effect*"`, grey literature DB-10) and are **never** down-weighted for being inconvenient.

### 8.4 Provisional grade mapping (applies TASK-004; does not redefine it)
At inclusion, each study receives a **provisional** multi-dimensional grade using the TASK-004 rules; the *final* grade is set during TASK-025 extraction once design, risk-of-bias and results are read.

| TASK-004 grade | Typical basis in this search (provisional) |
|---|---|
| **A** | Strong, relevant science: a well-conducted systematic review/meta-analysis (T1) or replicated RCTs (T2) **whose population is or transfers well to midlife women**, on the relevant outcome layer. |
| **B** | Credible but limited: a single RCT (T2) or a review with notable limitations/heterogeneity, or strong evidence in a **different** population needing transfer. |
| **C** | Repeated qualitative/observational signal (T4/T5) or consistent patterns without controlled efficacy evidence. |
| **D** | Expert judgment, theory/framework (T6), analogy, or single low-powered study. |

Grading is **multi-dimensional** (`prd.md` §4): a study may be **A for efficacy** of a mechanism yet **C for relevance** to midlife women (transfer distance), and these are recorded separately. A high grade on one axis is never read as a high grade on another — explicitly, **engagement efficacy is never relevance to health outcome** (L4/L5). Grey-literature and non-peer-reviewed sources carry the TASK-004 ceiling (capped, flagged).

---

## 9. Populations and the outcome taxonomy

### 9.1 Target population
**Primary:** women in midlife, including the perimenopause–menopause transition, across differing health goals, schedules, tech comfort and prior success/failure (`prd.md` §6). The HerRays audience is the relevance anchor.

### 9.2 Transferable populations and the transferability judgement
Most mechanism evidence will come from **other populations** (mixed-sex adults, younger adults, specific disease cohorts). Such studies are **admitted** but every one carries an explicit `transferability` judgement — `direct` / `probable` / `uncertain` / `poor` — with a one-line reason (e.g. "RCT in young-adult students; midlife/menopause context untested"). Transfer distance lowers the **relevance** grade (§8.4), never the efficacy grade, and a poor-transfer body of evidence on an important question is itself a **`GAP`** (RQ-10 → TASK-008). The protocol must not quietly treat "works in 20-year-old men" as "works for our users."

### 9.3 The four-layer outcome taxonomy (the core of this protocol)

This is the operationalization of the PRD's most-repeated rule — *separate engagement, adherence, automaticity and health outcomes* (`prd.md` §1, §6; §13 Prompt 03). **Every search outcome term, every RQ, and every admitted study is tagged with the lowest layer its measurement actually reaches.**

| Layer | Definition | Example measures | Admissibility rule |
|---|---|---|---|
| **L-ENG — Engagement** | Interaction with the *app/intervention itself* | App opens, sessions, logins, feature taps, in-app streaks, notification click-through | **Proxy only.** May be recorded as context; **may never be reported as evidence of behaviour change or health benefit** (L4). A study whose only outcome is engagement is tagged L-ENG and cannot raise an efficacy grade for a *behaviour*. |
| **L-ADH — Adherence / behavioural enactment** | Performing the *target real-world behaviour* | Days the behaviour was performed, objectively/self-report measured maintenance, enactment of planned action | Admissible behaviour-change evidence; strength depends on design (§8) and measurement objectivity. |
| **L-AUT — Automaticity** | Behaviour becoming habitual / self-initiated | Validated habit-strength indices (e.g. SRBAI/SRHI family), reduced reliance on prompts | Admissible; distinct from both engagement and adherence. Automaticity ≠ frequency. |
| **L-CLIN — Clinical / health outcome** | Change in a health state or validated health measure | Physical-activity level, sleep quality, weight, blood pressure, validated symptom/QoL scales | Highest bar; **requires clinical-reviewer (R14) attention** at extraction; most app studies do *not* reach this layer and must not claim it. |

**Harm is tracked orthogonally (RQ-11):** guilt, shame, compulsion, dependency, burden, over-tracking, dropout and other adverse/unintended effects are recorded for a study **regardless of which outcome layer it targets**, because a mechanism can succeed on L-ADH while causing harm (the `prd.md` §5 streaks case). A study reporting a benefit with no harm assessment is flagged as *harm-unassessed*, not assumed harmless.

### 9.4 Layer-honesty rule (restates L4 operationally)
A sentence of the form "*mechanism X improves health*" is admissible **only** if backed by an L-CLIN (or well-justified L-ADH→health) study at an adequate grade. "Users engaged more with X" (L-ENG) can **never** be written up as X improving a behaviour or health. The extraction stage (TASK-025) inherits each study's layer tag and the synthesis (TASK-029/042) may not aggregate across layers as if they were equivalent.

---

## 10. The search record (PRISMA-style reproducibility trail)

The search is only reproducible if it is logged. This protocol conforms to **PRISMA 2020** flow reporting. The following records are maintained (and, when run, exported to the evidence repository, `prd.md` §4):

### 10.1 Per-search log (one per database run) — fields
`search_id` · `rq_ref` · `database` (DB-id) · `interface` · `run_date` · `full_string` (verbatim, L2) · `controlled_vocab_terms` · `filters_applied` · `design_sensitivity_run` (y/n) · `records_returned` · `run_by_role` · `notes`.

### 10.2 PRISMA flow counts (maintained across the whole search)
- **Identification:** records per database (DB-01…), records from registries, records from citation chasing / hand-search / grey literature — kept as separate streams.
- **Deduplication:** duplicates removed (EX-7).
- **Screening:** records title/abstract screened → excluded (with high-level reasons).
- **Eligibility:** full-text sought → full-text assessed → **full-text excluded with reason code** (EX-1…EX-7, counted per reason — PRISMA requires reasons at this stage).
- **Included:** studies included → (then handed to TASK-025 for extraction).

> When the search has not been run (current state, v0.1), **all counts are the literal token `not-yet-run`**, never `0` and never an estimate. `0` means "searched and found none"; `not-yet-run` means "not searched." Conflating them is a validation failure (L2/L6).

### 10.3 Coverage dashboard (derived, read-only)
A matrix of **RQ × outcome-layer × highest-tier-evidence-found**, so weak-evidence cells are visible at a glance and become `GAP` records. Also an **RQ × transferability** view for RQ-10. These are derived views, not a place to enter data.

### 10.4 Reproducibility package
On completion, WS03 can export: this protocol version, every per-search log (§10.1), the PRISMA flow diagram (§10.2), the included-study list with provisional grades, the screening-agreement statistics (§7.4), and the gap list (§10.3 → TASK-008). That package is what makes the review auditable at Gate 1 ("source-linked evidence, unknowns and access limitations documented," `prd.md` §11).

---

## 11. Forbidden values & validation-failure catalogue

A search or screening artifact exhibiting any of the following is **rejected at protocol audit**, not corrected silently and admitted.

**Fabrication / provenance failures**
1. A reported finding, effect size, or count with **no retrievable primary source** (violates L1).
2. A **record count with no verbatim search string** behind it (violates L2).
3. Any **`records_returned` or PRISMA count that was estimated, rounded, or invented** rather than read from the database run.
4. A study paraphrased **from a secondary description** (blog/news/AI summary) without locating the primary record.

**Outcome-integrity failures**
5. An **L-ENG (engagement) study reported as evidence of adherence, automaticity, or health** (violates L4) — the canonical WS03 rejection.
6. A study's grade **raised by citation count, journal prestige, app prevalence, or a confident abstract** (violates L5).
7. **Efficacy grade and relevance grade collapsed** into one number, hiding transfer distance (violates `prd.md` §4).
8. A **benefit reported with no harm assessment** presented as "safe" (violates RQ-11/§9.3 harm-orthogonality).

**Representativeness / method failures**
9. **Screening criteria changed after reading results** to reach a conclusion (violates L3) without a new protocol version.
10. **Contradictory or null studies dropped** rather than admitted and routed to TASK-008 (violates L6 / `prd.md` §6 preserve contradictions).
11. A **single-reviewer search with no dual-screening subset** on a body of evidence that drives a decision (violates §7.4).
12. A **gap filled with a plausible-sounding answer** instead of being recorded as a `GAP` + candidate `EXP` (violates L6 / `prd.md` §13 Prompt 00).

---

## 12. Protocol self-validation — synthetic walkthrough (clearly labelled)

> **SYNTHETIC & UN-RUN.** The following demonstrates that the protocol *runs end to end*. **No database was searched.** All counts are the literal placeholder `not-yet-run` or a fictitious `[SYNTHETIC]` value, and all identifiers are `*-SYNTH-*`. Nothing here is a result or may be cited as one.

**Scenario:** apply the protocol to **RQ-04 (reinforcement/feedback/streaks)** to show the path from question to a would-be included set — without inventing a single finding.

1. **Question (§4):** RQ-04, PICO-framed, outcome layers targeted = **L-ADH + harm** (deliberately *not* L-ENG as headline).
2. **Sources (§5):** DB-01 (PubMed, public), DB-02 (PsycINFO, access `unknown`), DB-03 (Cochrane). Registry cross-check DB-06. Citation-chase DB-09 from any included review.
3. **Query (§6):** search string `SRCH-SYNTH-01` (§6.4) assembled from the reinforcement mechanism block AND the adherence+harm outcome blocks. Harm terms are inside the outcome block so the streaks caution is searched *for*. `records_returned: not-yet-run`.
4. **PRISMA (§10):** Identification = `not-yet-run` per stream. Deduplication/screening/eligibility/included = `not-yet-run`. (Because nothing was searched, these are `not-yet-run`, **not** `0`.)
5. **Screening (§7):** criteria IN-1…IN-6 / EX-1…EX-7 frozen; dual-screen 20% subset planned; an engagement-only study would be **EX-1 (no behaviour outcome)** and logged, not quietly discarded.
6. **Design & grade (§8):** a would-be T1 review transferring to midlife women → provisional **A efficacy / B relevance**; a would-be T5 single-arm app pilot → provisional **C/D**, and **cannot** be written up as efficacy however favourable its abstract (L5).
7. **Outcome honesty (§9):** any included study tagged L-ENG is recorded as context only; a streak study showing more app opens is **never** reported as improved behaviour (L4); harm (guilt/all-or-nothing) recorded for every included study regardless of its outcome layer.
8. **Gaps (§10.3 → TASK-008):** if RQ-04 × L-ADH × midlife-women returns no admissible T1–T3 evidence, that cell is a **`GAP-SYNTH-04`** with the recorded (un-run here) search and a candidate experiment (TASK-009) — *not* a manufactured conclusion (L6).
9. **Handoff:** the (here empty, `not-yet-run`) included list and PRISMA flow pass to **TASK-025** for extraction. This protocol's job ends at the included list.

**Validation trace:** the walkthrough touches L1–L6 and every acceptance-criteria element (databases §5, queries §6, inclusion/exclusion §7, study types §8, populations §9.1–9.2, outcomes §9.3, grading §8.4, engagement-vs-health separation §9.3/§9.4) **without asserting one finding** — demonstrating the protocol can be executed and audited while remaining fabrication-free.

---

## 13. Dependencies, open unknowns, and change log

### 13.1 Dependencies (restated, directional)
- **Consumes:** TASK-004 (grades/confidence), TASK-005 (`EVD` shape), TASK-003 (R02 accountable; R14 clinical sign-off on L-CLIN/harm).
- **Produces for:** TASK-025 (extraction — the included set), TASK-018 (app audits link to this evidence), TASK-030/031 (capability evidence layer), TASK-009 (experiments for gaps), TASK-029 (user-vs-science triangulation), TASK-008 (gaps/contradictions), TASK-042 (opportunity-level evidence confidence).

### 13.2 Open unknowns (explicitly unresolved, not guessed)
- **Database access.** PsycINFO (DB-02), Cochrane full access (DB-03), and any Scopus/Web of Science (DB-04) access status is `unknown` until confirmed; the protocol must be runnable on the free PubMed core (DB-01) if paid access is unavailable, with the limitation recorded (`prd.md` §10 budget discipline).
- **Reviewer capacity for dual screening (§7.4).** Whether a second screener is available for the full set or only a subset is a staffing unknown; the minimum is a documented subset with agreement statistics.
- **Language capacity (§7.3).** English-only extraction is a stated limitation; whether any non-English evidence can be assessed is unknown and tracked as a potential gap.
- **Final publication target.** The `prd.md` §4 "30–50 publications" is a planning target, not a quota to force-fill; the true number is whatever passes screening across RQ-01…RQ-11, and a shortfall in any RQ is reported as weak evidence, not padded.

### 13.3 Change log
| Version | Date | Change | By |
|---|---|---|---|
| 0.1 | 2026-11-22 | Initial protocol: question set (§4), sources (§5), query architecture (§6), inclusion/exclusion (§7), design hierarchy & provisional grading (§8), populations & four-layer outcome taxonomy (§9), PRISMA search record (§10), forbidden-value catalogue (§11), synthetic self-validation (§12). **No search run; all counts `not-yet-run`.** | Behavioral scientist (R02) |

---

### Acceptance-criteria crosswalk (for the reviewer)

| AC element (TASK-024) | Where satisfied |
|---|---|
| **Databases** | §5 (DB-01…DB-11: bibliographic, registries/guidelines, grey literature) with in/out rationale and access-status honesty |
| **Queries** | §6 (concept-block model, standing term banks, design-filter sensitivity, worked synthetic un-run string §6.4) |
| **Inclusion/exclusion criteria** | §7 (IN-1…IN-6, EX-1…EX-7, date/language/geography limits with rationale, dual-screening reliability) |
| **Study types** | §8 (T1–T6 hierarchy, prioritization of systematic reviews/RCTs/implementation evidence per `prd.md` §4, publication-bias checks) |
| **Populations** | §9.1–§9.2 (target = midlife women; transferability judgement for other populations) |
| **Outcomes** | §9.3 (four-layer taxonomy) + §6.2 outcome term banks |
| **Evidence grading** | §8.4 (applies TASK-004 A–D, multi-dimensional efficacy/relevance/confidence) |
| **Distinguish engagement from health outcomes** | §9.3/§9.4 (L-ENG proxy-only rule), L4 (§2), forbidden-value #5 (§11) — enforced structurally in search terms, tagging, grading and validation |
| **Independently reviewable, clearly labelled, no fabricated observations/results** | Front matter + §0 no-fabrication statement; all counts `not-yet-run`; §11 forbidden-value catalogue; §12 synthetic-only walkthrough; every named framework cited as instrument, never as a result |
