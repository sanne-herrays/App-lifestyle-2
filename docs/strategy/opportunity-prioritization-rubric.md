# HerRays Opportunity Prioritization Rubric

**Deliverable:** TASK-042 — Build the opportunity prioritization rubric
**Workstream:** Opportunity Synthesis (WS06)
**Version:** 0.1 · **Status:** Proposed — rubric defined, no opportunity yet scored
**Owner (accountable role):** R01 Head of Product / Product visionary (Opportunity Synthesis owner)
**Reviewers:** R02 Behavioral scientist · R03 Senior UX/product designer · R07 UX researcher · R09 Product analyst/growth · R14 Clinical reviewer · R15 Privacy/regulatory reviewer · Program Director (Atlas release gate)
**Source basis:** `prd.md` §7 ("never jump directly from evidence to concepts": root problems, contradictions, **≥12 opportunities**, **4–6 distinct territories**, the per-opportunity field list, the HMW example, clinical/non-clinical mix, gate before studios), §6 line 141 (mandatory gates first, then a weighted prioritization heuristic with explicit weights — "a proposed prioritization heuristic, not a validated scientific instrument"), §5 Phase 4 (mandatory gates applied first), §4 (Opportunity Atlas `OPP-001`; evidence grades A–D; "Do not interpret a high grade on usability as a high grade on health impact"; "Never fabricate … retention, CAC, LTV, clinical outcomes"), §11 (non-compensable quality gates; "Polished unsupported reports do not pass"), §13 Prompt 08 ("Produce an Opportunity Atlas, not concepts … Stop for approval before commissioning studios"), §14 (handoff/acceptance), `↔ TASK-004` (evidence grading), `↔ TASK-041` (the `OPP` record this rubric reads and writes)

---

## 0. How to read this document

This document defines **how a set of `OPP` records (`↔ TASK-041`) is filtered, scored, ranked and grouped into territories** so the Opportunity Synthesis step can hand a *prioritized, territory-mapped Opportunity Atlas* to the Atlas release gate (`prd.md` §7). It is the scoring-and-grouping instrument the TASK-041 schema deliberately did **not** encode: TASK-041 owns the single-record fields (`priority_scores`, `territory_ref`) as *destinations*; this rubric owns the **weights, the formula, the gate pre-filter, the territory rules, and the ≥12-opportunity / 4–6-territory portfolio requirement**.

It is a **governance / method artifact**, not a research finding. It contains **no real scored opportunity.** The worked material in §9 and §10 is labelled **ILLUSTRATIVE (synthetic)** end-to-end, built on the PRD's *own* example framings, and every score is a mechanics demonstration — never an assessment of a real user need or a real app.

> **No-fabrication statement.** This rubric scores nothing real. It cites no real `OPP`, `NEED`, `EVD`, `CAP` or `APP` record. The synthetic portfolio in §10 exists only to prove that the gate pre-filter, the weighted formula, the uncertainty treatment, the tie-breaks and the ≥12/4–6 rule all *run* and *refuse* to manufacture a ranking on absent evidence. The rubric is built to make fabrication **detectable and inert**: (a) mandatory safety gates are applied **before** any number and are **non-compensable** — no weighted score can buy back a failed gate (`prd.md` §6/§11); (b) a dimension with no resolvable evidence basis is scored `unknown`, **excluded from the weighted average**, and surfaced — never silently defaulted to a middle value (`↔ TASK-005 S3`); (c) evidence strength, user importance and feasibility are scored on **separate axes** and a high score on one may never be read as a high score on another (`prd.md` §4 "Do not interpret a high grade on usability as a high grade on health impact"); (d) popularity, download or editorial figures may **never** raise a score (`prd.md` §3); (e) **uncertainty is preserved as a first-class output**, not averaged into invisibility, so a confident-looking total resting on thin evidence is flagged, not rewarded.

**Scope boundary (what this task is and is not).**
- **TASK-042 (this document) = the *rubric*: the gate pre-filter, the weighted dimensions and weights, the 0–100 normalization, the uncertainty treatment, the ranking/tie-break rules, and the territory-grouping method that enforces ≥12 opportunities across 4–6 territories.** It reads `OPP` records and writes `priority_scores` + `territory_ref` back to them (`↔ TASK-041 §3.7/§3.1`).
- **TASK-041 (Opportunity Atlas record schema) = the *record* this rubric acts on.** It defines `opp_id`, the problem/evidence/gap/HMW/constraints/feasibility/test fields, the `safety_gate` and `clinical_integration` flags, and the lifecycle (`proposed → reconciled → gated → prioritized → approved`). This rubric runs at the `gated → prioritized` transition and does not re-define those fields.
- **The gates themselves are defined elsewhere.** The clinical/privacy/accessibility/manipulation/unsupported-claims gate logic lives in `→ TASK-033` (capability safety gate) and `→ TASK-040` (privacy/clinical boundary checklist); this rubric *consumes* their verdicts as a pre-filter and never overrides them.
- **This rubric does not approve the Atlas.** Approval and release-to-studios is the Program Director's Atlas gate (`prd.md` §7/§8; `→ TASK-043`). This rubric produces the *prioritized, grouped* Atlas that the gate reviews; a high rank is an input to that decision, never a substitute for it.
- **This rubric does not produce concepts.** Territories are **problem themes**, not solutions. "Produce an Opportunity Atlas, not concepts or wireframes" (`prd.md` §13 Prompt 08). A territory named for a feature, screen or product is a forbidden value (§11).

---

## 1. Purpose and non-negotiables

`prd.md` §7 requires that, after evidence review, the Lab identify root user problems and "Produce **at least 12 opportunity statements**, then group into **4–6 distinct territories**," each opportunity carrying "problem/context, evidence/confidence, competitor gap, desired outcome, relevant mechanism, constraints, How Might We statement and validation path," spanning "opportunities that need clinical integration and ones that do not," with "Gate approval before concept studios begin." Prompt 08 repeats the count and the hard stop. `prd.md` §6 (line 141) supplies the method shape the Lab has already adopted for capabilities — "First apply mandatory clinical, privacy, ethics, accessibility and unsupported-claim gates. Then assess [weighted dimensions] … These weights are a proposed prioritization heuristic, not a validated scientific instrument" — and this rubric is the **opportunity-level** analogue of that discipline, using the five dimensions the TASK-042 acceptance criteria name: **user importance, evidence, differentiation, feasibility and uncertainty.**

The rubric exists to do six jobs:

1. **Gate before it scores.** Mandatory safety gates run **first** and are **non-compensable**. An opportunity with any open `reject`/`redesign` on clinical, privacy, accessibility, manipulation or unsupported-claims is removed from the ranked set (routed to redesign/defer/reject), *before* any weighted number exists. No score can rehabilitate it (`prd.md` §5 Phase 4 / §6 / §11; `↔ TASK-041 §4.2` gate-blocks-approval; `→ TASK-033/040`).
2. **Score importance, evidence, differentiation and feasibility on separate axes — never one blended judgment.** Each dimension has 1–5 anchors and an accountable scoring role; the record keeps them separate (`↔ TASK-041 O3`) and the rubric rolls them into a transparent weighted 0–100 *priority index*, showing its working. A high differentiation score is never read as evidence strength; a strong usability signal is never read as health impact (`prd.md` §4).
3. **Treat uncertainty as a visible dimension, not a discount that hides risk.** Uncertainty (decision risk — how much is still unknown about whether pursuing the opportunity will pay off) is scored as a fifth weighted dimension **and** reported as a standalone **risk band** that drives *sequencing*, so a high-upside/high-uncertainty bet is cheaply tested rather than filtered out, and a confident-looking total resting on thin evidence is flagged, not rewarded (§5.5).
4. **Refuse to invent inputs.** A dimension with no resolvable evidence basis is `unknown`, excluded from the weighted average (the index is computed over scored dimensions only, with a `coverage` figure), and surfaced — never defaulted to 3/5. Popularity/awards never raise a score. "Polished unsupported reports do not pass" (`prd.md` §11).
5. **Group into 4–6 problem territories and prove the corpus is ≥12.** Territories are **distinct problem themes** (not solutions), assigned for coverage, not force-filled; the rubric enforces the **≥12 opportunities / 4–6 territories** portfolio rule and the **clinical + non-clinical** span the PRD requires, and preserves contradictions and underserved contexts rather than collapsing them (§6, §7; `prd.md` §7).
6. **Rank for a decision, not a league table.** Output is a prioritized, banded, territory-mapped Atlas that *informs* the Program Director's release gate. Ranking never approves, never selects a concept, and never presents a desired outcome as achieved (`prd.md` §7/§8/§13).

**Five non-negotiable rules, enforced throughout:**

- **P1 — Gates are a pre-filter and are non-compensable.** The weighted score is computed **only** for opportunities that pass the mandatory gates (or are explicitly held for redesign/defer). No weight, sum, or tie-break may move an opportunity with an open `reject`/`redesign` into the ranked, studio-bound set (`prd.md` §6/§9/§11).
- **P2 — Dimensions are scored and stored separately; the roll-up shows its working.** User importance, evidence, differentiation, feasibility and uncertainty each carry their own 1–5 score, basis and accountable role. The 0–100 index is a *disclosed weighted function* of them, not a gestalt. A reviewer can always see the per-dimension inputs behind any total (`prd.md` §4; `↔ TASK-041 O3`).
- **P3 — No dimension is scored without a basis; `unknown` is honest and excluded, not a middle default.** A score requires a resolvable `OPP`/`EVD`/`NEED`/`CAP`/`JRN` basis (or the opportunity's honest `hypothesis` label). Absent that, the dimension is `unknown`, excluded from the average, and the opportunity's `coverage` is lowered and shown. Guessing a value, or substituting popularity/awards for evidence, is a forbidden value (§11; `prd.md` §3; `↔ TASK-005 S3`).
- **P4 — Uncertainty is preserved, never averaged away.** Uncertainty is both a scored dimension *and* a reported risk band; contradictions (`CON`, `→ TASK-008`) and preserved disagreements (`→ TASK-023`) raise uncertainty and are never numerically netted against supporting evidence. The rubric sequences high-uncertainty opportunities to cheap tests; it does not delete them (`prd.md` §7).
- **P5 — The portfolio rule is mandatory: ≥12 opportunities, 4–6 territories, clinical + non-clinical, coverage over force-fill.** A ranked Atlas with fewer than 12 scored opportunities, or fewer than 4 / more than 6 territories, or with no clinical-integration opportunity *and* no non-clinical opportunity, **fails portfolio validation** (§8) and may not be released to the Atlas gate. Territories are never padded to hit a count (§7.4).

---

## 2. Where the rubric runs in the pipeline

The rubric operates at the `OPP` lifecycle transition **`gated → prioritized`** (`↔ TASK-041 §2.3`). It assumes each candidate opportunity is already `reconciled` (contradictions/disagreements attached, `→ TASK-023`) and `gated` (every `safety_gate` dimension assessed, `→ TASK-033/040`).

```
  evidence review ─▶ OPP records drafted (TASK-041)
        │
        ▼
  reconciled  ── contradictions & disagreements preserved (TASK-023)
        │
        ▼
  gated  ────── mandatory safety gates assessed (TASK-033/040)
        │
        ▼
  ┌───────────────── THIS RUBRIC (TASK-042) ─────────────────┐
  │  Step A  Gate pre-filter (P1, non-compensable)            │
  │  Step B  Score 5 dimensions, 1–5, separate axes (P2/P3)   │
  │  Step C  Weighted 0–100 priority index + coverage         │
  │  Step D  Uncertainty risk band + sequencing (P4)          │
  │  Step E  Rank within band; tie-breaks                     │
  │  Step F  Territory grouping: 4–6 themes, ≥12 opps (P5)    │
  │  Step G  Portfolio validation (clinical+non-clinical)     │
  └──────────────────────────────────────────────────────────┘
        │  writes priority_scores + territory_ref back to each OPP
        ▼
  prioritized ─▶ Atlas release gate (Program Director, prd.md §7)
        │  (approval & release to studios — NOT this rubric)
        ▼
  approved ───▶ six concept studios (prd.md §8; TASK-043)
```

The rubric **writes** `priority_scores` (the five dimension scores + the index + coverage + the uncertainty band) and `territory_ref` into each record; it **does not** set `atlas_status: approved` (that is the gate's act) and it **does not** alter `opp_id` when grouping (`↔ TASK-041 §2.1`).

---

## 3. Step A — the mandatory gate pre-filter (non-compensable, runs first)

Before any dimension is scored, each candidate `OPP` is screened on the five mandatory gates recorded in its `safety_gate` map (`↔ TASK-041 §3.7`; defined in `→ TASK-033/040`). This mirrors `prd.md` §6 line 141 ("First apply mandatory … gates") and §11 (non-compensable gates).

| Gate | Source | Disposition if not `pass` |
|---|---|---|
| **Clinical** | `→ TASK-040` (+R14 verdict where `clinical_integration: required`) | `reject`/`redesign` → removed from ranked set; `investigate` → held, scored only after resolution |
| **Privacy / data minimization** | `→ TASK-040` (+R15 verdict for personal-data opportunities) | as above |
| **Accessibility** | `→ TASK-022/040` | as above |
| **Manipulation / autonomy (anti-dark-pattern)** | `→ TASK-033/036` | as above |
| **Unsupported claims** | `prd.md` §11 | as above |

**Pre-filter rules (P1):**
- **A1 — Any open `reject` or `redesign` on any gate ⇒ the opportunity is *not scored* and *not ranked*.** It is routed to `redesign` (returns to synthesis), `deferred`, or `rejected` (innovation backlog, `prd.md` §11). A weighted score is never computed for it, so no total can imply it is "high priority despite the gate."
- **A2 — Any `not_yet_assessed` gate ⇒ the opportunity is *ineligible* for scoring** until the gate is assessed (`↔ TASK-041 §4.2`). The rubric does not score a half-gated opportunity.
- **A3 — `investigate` ⇒ conditional hold.** The opportunity may be scored for *planning visibility* but is flagged `gate_hold` and may **not** enter the studio-bound set until the investigation resolves to `pass`.
- **A4 — The gate outcome is never a dimension.** Safety is a precondition, not a weighted factor; it cannot be traded against user importance or differentiation (non-compensable). This is the structural reason the rubric cannot "average away" a safety problem.

Only opportunities that are `pass` on all five gates (or explicitly `gate_hold` under A3) proceed to Step B.

---

## 4. The five scoring dimensions (Step B)

Each eligible opportunity is scored **1–5** on five dimensions. Each dimension names the **question it answers**, the **evidence it must rest on**, the **accountable scoring role**, and **1–5 anchors**. Scores are recorded separately in `priority_scores` (P2); `unknown` is a permitted value and is **excluded** from the weighted average (P3), never treated as 3.

### 4.1 D1 — User importance *(how much does solving this matter to the user?)*
**Reads:** `root_user_need`, `user_context`, `underserved_context`, `population_relevance`, `need_refs`, `supporting_evidence` (`↔ TASK-041 §3.2/§3.3`). **Accountable:** R07 UX researcher with R01. **Rule:** importance is about the *problem's weight in the user's life* for the **midlife-women** audience — frequency × severity × breadth of who is affected — not how novel or buildable a fix is. Transferability is graded honestly: a real problem that is low-relevance to this audience scores low (`prd.md` §4 transferability).

| Score | Anchor |
|---|---|
| 5 | Frequent, high-stakes problem affecting a large, clearly-defined slice of the audience; strongly tied to the executive mandate (behavior change / adherence / the zero-guilt principle). |
| 4 | Important and fairly common, or severe for a well-defined segment. |
| 3 | Moderately important, or important only in a narrow context. |
| 2 | Minor or occasional problem; low stakes. |
| 1 | Marginal to this audience; largely a nice-to-have. |
| `unknown` | No `NEED`/`EVD` basis yet (opportunity is `hypothesis`); importance unestablished — excluded from average, lowers coverage, flagged for discovery. |

### 4.2 D2 — Evidence strength *(how well established is it that this problem is real and important?)*
**Reads:** `evidence_grade`, `evidence_status`, `confidence`, `need_refs`, `supporting_evidence`, `contradictions` (`↔ TASK-041 §3.3`; grades per `↔ TASK-004`). **Accountable:** R02 Behavioral scientist with R07. **Rule:** this grades the **basis of the problem**, independent of importance, differentiation or feasibility (P2). It maps the A–D evidence grade and epistemic status onto the 1–5 scale; it does **not** grade a solution's efficacy, and popularity/awards never raise it (`prd.md` §3/§4).

| Score | Anchor (maps `↔ TASK-004` grade + status) |
|---|---|
| 5 | Grade **A/B** multi-source, convergent evidence that the problem is real and matters; `evidence_status: established`. |
| 4 | Grade **B** single strong source, or consistent grade **C** across sources; `indicative`→`established`. |
| 3 | Grade **C** (e.g., public-review signal) only; `indicative`. |
| 2 | Weak/indirect signal; `insufficient` but suggestive; a gap is logged. |
| 1 | Hypothesis only (`need_refs: hypothesis`); `evidence_status: insufficient`. |
| `unknown` | Not yet graded and not honestly labelled — **invalid input** (the record should not have reached `gated`); return to TASK-041 entry validation. |

> **Contradiction handling (P4):** a live `contradictions` link does **not** average D2 down to a tidy midpoint. The conflicting findings are preserved (`→ TASK-008`), D2 reflects the *weaker* admissible side, and the unresolved conflict raises **D5 uncertainty** (§4.5). Contradictions are never numerically netted (`prd.md` §7; `↔ TASK-004` "never average contradictions").

### 4.3 D3 — Differentiation *(how distinctively could HerRays serve this vs. the market?)*
**Reads:** `current_solution_gap`, `gap_evidence`, `competitor_examples`, `alternatives_considered` (`↔ TASK-041 §3.4`). **Accountable:** R01 Head of Product with R09. **Rule:** differentiation is about the **size and defensibility of the current-solution gap** *and* HerRays' distinctive right to win it (audience focus, clinical integration, zero-guilt craft) — **not** about how popular incumbents are. A gap asserted without `gap_evidence` and without a `hypothesis` label cannot be scored above 2 (`prd.md` §3; `↔ TASK-041 §6.3`).

| Score | Anchor |
|---|---|
| 5 | Large, evidenced gap no incumbent serves well; HerRays has a distinctive, hard-to-copy advantage (audience + clinical + craft). |
| 4 | Clear evidenced gap; HerRays can serve it meaningfully better. |
| 3 | Partial gap; incumbents are mediocre; advantage is real but modest. |
| 2 | Crowded space; differentiation is thin or rests on an unsourced gap claim. |
| 1 | Well-served by incumbents; little room to differentiate. |
| `unknown` | Gap not yet studied (`gap_evidence` absent and not `hypothesis`) — excluded, lowers coverage, flagged for teardown (`→ TASK-012/013`). |

### 4.4 D4 — Feasibility *(how practical is it to pursue this opportunity within HerRays' constraints?)*
**Reads:** `feasibility` (`{overall, notes, build_buy_hint}`), `constraints`, `clinical_integration` (`↔ TASK-041 §3.6`; technical `→ TASK-039`; build/buy `→ TASK-037`). **Accountable:** R12 iOS/platform architect with R11 engineering, R15 for data/privacy cost. **Rule:** feasibility is scored **separately** from importance and evidence (P2) and covers technical (iOS/HealthKit/notifications/on-device), data/privacy, clinical-integration and economic practicality. It is a *coarse* read at opportunity stage — a hint, not a build decision (`prd.md` §4).

| Score | Anchor |
|---|---|
| 5 | Clearly buildable with existing platform capabilities; low data/privacy/clinical burden; modest cost. |
| 4 | Feasible with known effort; one manageable dependency (e.g., HealthKit permission, a vendor). |
| 3 | Feasible but with real unknowns or moderate clinical/privacy/economic cost. |
| 2 | Significant technical, clinical, privacy or cost obstacles; feasibility doubtful. |
| 1 | Likely infeasible in this cycle (major platform, regulatory or economic barrier). |
| `unknown` | Not yet assessed (`feasibility.overall: unknown`) — excluded, lowers coverage, flagged for `→ TASK-037/039`. |

### 4.5 D5 — Uncertainty *(how much is still unknown about whether pursuing this will pay off?)* — **preserved, not hidden (P4)**
**Reads:** `evidence_status`, `confidence`, `contradictions`, `disagreements`, `mechanism_status`, `open_gaps`, and the `unknown`/`hypothesis` count across D1–D4 (`↔ TASK-041 §3.3/§3.5/§3.7`). **Accountable:** R02 Behavioral scientist with R01. **Rule:** uncertainty is *decision risk*, distinct from (though informed by) evidence strength: it captures unknown mechanism, unresolved contradictions, preserved disagreement, unvalidated desired outcome, and feasibility unknowns. It is scored on the **1–5 scale where 5 = LOW uncertainty** (high decision-readiness) so that, like the other dimensions, *higher is better for priority* and the weighted sum is coherent. The **raw uncertainty** is **also** reported as a standalone risk band (§5.5) and **never** averaged out of sight.

| Score | Anchor (5 = low uncertainty / high readiness) |
|---|---|
| 5 | Problem, mechanism and feasibility all well-understood; no live contradiction; a clear, cheap validation path exists. Decision-ready. |
| 4 | Mostly understood; one notable unknown or a single open gap with a known test. |
| 3 | Mixed: real unknowns in mechanism *or* outcome *or* feasibility; validation path exists but non-trivial. |
| 2 | High uncertainty: multiple unknowns, a live contradiction, or preserved specialist disagreement. |
| 1 | Speculative: `hypothesis`-only, mechanism `invented`/`hypothesized`, outcome unvalidated, contradictions unresolved. |
| `unknown` | *Not permitted* — uncertainty is always assessable from the record's own epistemic fields; if it cannot be assessed, the record is not yet `gated`. |

> **Why uncertainty is *both* a weighted dimension and a separate band.** Folding uncertainty only into the weighted total would let a confident-looking sum conceal a thin basis — exactly the "polished unsupported report" the PRD forbids (§11). Keeping D5 in the weighted index rewards decision-ready opportunities; keeping the **raw uncertainty band** visible (§5.5) ensures a high-upside but high-uncertainty opportunity is *sequenced to a cheap test first*, not dropped and not waved through. This is the honest-expected-value stance, not a discount that hides risk (P4).

---

## 5. Steps C–E — the weighted index, coverage, uncertainty band, and ranking

### 5.1 Weights (a disclosed heuristic, not a validated instrument)

Weights sum to 100 and are declared, per `prd.md` §6 ("a proposed prioritization heuristic, not a validated scientific instrument"). They are adapted from the §6 capability weights to the **opportunity** context and to the five acceptance-criteria dimensions, front-loading *user importance* and *evidence* so the Atlas stays problem-first and evidence-led.

| Dim | Dimension | Weight | Rationale |
|---|---|---:|---|
| D1 | User importance | **30%** | The Atlas is problem-first; how much the problem matters dominates. |
| D2 | Evidence strength | **25%** | Problem-first *and* evidence-led (`prd.md` §1/§11); guards against well-marketed non-problems. |
| D3 | Differentiation | **20%** | "Do not build a collage of competitor features" (`prd.md` executive mandate); distinctiveness matters, but never above importance+evidence. |
| D4 | Feasibility | **15%** | Real but deliberately **below** desirability at opportunity stage — feasibility is a coarse hint now, resolved later (`→ TASK-037/039`). |
| D5 | Uncertainty (5 = low) | **10%** | Rewards decision-readiness without letting it dominate; the *raw* band (§5.5) carries the rest of uncertainty's weight in sequencing, not scoring. |

> Weights are **versioned and adjustable** by R01 + Program Director with a change-log entry (§12); they are never silently re-tuned to change a ranking. Any weight change re-scores the **whole** corpus, never a single favoured opportunity.

### 5.2 Normalization to a 0–100 priority index (computed over *scored* dimensions only — P3)

Let `S_d ∈ {1..5}` be the score for each dimension `d` that is **not** `unknown`, and `w_d` its weight. The index excludes `unknown` dimensions and renormalizes over the covered weight, so a missing dimension **lowers coverage** rather than silently scoring 3:

```
  covered_weight = Σ w_d           over dimensions d with S_d ≠ unknown
  raw            = Σ (w_d · S_d)   over the same dimensions
  priority_index = round( 100 · (raw / covered_weight) / 5 )      # 0–100
  coverage       = round( 100 · covered_weight / 100 )            # % of weight actually scored
```

- A fully-scored opportunity has `coverage = 100`. An opportunity missing, say, D4 (15%) and D1 (30%) has `coverage = 55` and its index is computed only over D2+D3+D5 — **and the low coverage is displayed next to the index** so no one mistakes a thin score for a strong one (P3).
- **Index is never reported without coverage.** A ranking line is always `index / coverage% / uncertainty-band` (§5.5), never a bare number.
- **Coverage floor for ranking:** an opportunity with `coverage < 50` is **not** rank-ordered against others; it is held in a `needs-evidence` pool with its gaps (`open_gaps`, `→ TASK-008`) until coverage rises. This prevents a one-dimension guess from topping the list.

### 5.3 Worked arithmetic (mechanics only)

For an opportunity scored D1=4, D2=3, D3=5, D4=3, D5=4 (all scored):
```
  raw = 30·4 + 25·3 + 20·5 + 15·3 + 10·4 = 120 + 75 + 100 + 45 + 40 = 380
  covered_weight = 100
  priority_index = round(100 · (380/100) / 5) = round(100 · 3.8 / 5) = round(76) = 76
  coverage = 100
```
→ reported as **`76 / 100% / med-risk`** (band from §5.5). This is arithmetic, not an assessment of any real opportunity.

### 5.4 Priority bands (for communication, not a hard cut)

| Index | Band | Meaning |
|---|---|---|
| 80–100 | **Lead** | Strong on importance + evidence; a likely territory anchor. |
| 60–79 | **Strong** | Solid; carries a territory or complements a lead. |
| 40–59 | **Watch** | Real but secondary, or thin coverage/high uncertainty. |
| < 40 | **Park** | Low priority this cycle; retained in the backlog, not deleted (`prd.md` §11). |

Bands **communicate**; they never override the gate (P1) or the portfolio rule (P5). A `Lead` opportunity with a `gate_hold` (A3) stays out of the studio-bound set.

### 5.5 The uncertainty risk band (preserved separately — P4)

Independently of the weighted index, every opportunity carries a **raw uncertainty band** derived from D5 and its drivers:

| Raw uncertainty | Band | Sequencing consequence |
|---|---|---|
| D5 = 5 | **low-risk** | Decision-ready; can proceed to design consideration on current evidence. |
| D5 = 3–4 | **med-risk** | Proceed, but name the smallest test (`↔ TASK-041 test.smallest_test`) that would retire the key unknown. |
| D5 = 1–2, or any live `contradictions`/`disagreements` | **high-risk** | **Must** carry a cheap validation step (`→ TASK-009 EXP`) before it can anchor a territory or reach the studios; high index does **not** waive this. |

The band is reported next to every index (§5.2) and is a **required input** to the Atlas gate. High-risk + high-index opportunities are explicitly the PRD's "promising but unproven" case: they are **tested, not filtered, and not waved through** (`prd.md` §7; §11 "Never present imagined preferences as validated").

### 5.6 Ranking and tie-breaks

Opportunities with `coverage ≥ 50` are ranked globally by `priority_index` — the uncertainty band is *not* collapsed into the ranking, but every ranked line shows its band and coverage so a high index never hides a thin or risky basis. Ties are broken in this order:
1. **Higher D2 (evidence strength)** — evidence-led tie-break (`prd.md` §1/§11).
2. **Higher D1 (user importance).**
3. **Lower raw uncertainty** (more decision-ready).
4. **Higher coverage.**
5. **Preserve, don't pick:** if still tied, both are carried — the rubric does not invent a separation it cannot justify.

Ranking produces an ordered list; it does **not** truncate to a top-N. All gate-passing, adequately-covered opportunities remain in the Atlas; ranking informs emphasis and sequencing, not deletion (`prd.md` §11 innovation backlog).

---

## 6. `priority_scores` written back to the record

The rubric writes a single structured value into each `OPP` record's `priority_scores` field (`↔ TASK-041 §3.7`) and sets `atlas_status: prioritized`:

```yaml
priority_scores:
  rubric_version: "0.1"
  dimensions:                 # 1–5 or unknown, each with a basis ref and scoring role
    user_importance:   { score: 4, basis: [NEED-…, EVD-…], role: R07 }
    evidence_strength: { score: 3, basis: [EVD-…],         role: R02 }
    differentiation:   { score: 5, basis: [JRN-…, APP-…],  role: R01 }
    feasibility:       { score: 3, basis: [note/TASK-039], role: R12 }
    uncertainty:       { score: 4, basis: [open_gaps, mechanism_status], role: R02 }
  weights: { user_importance: 30, evidence_strength: 25, differentiation: 20, feasibility: 15, uncertainty: 10 }
  priority_index: 76          # 0–100, computed over scored dimensions only
  coverage: 100               # % of weight actually scored; <50 ⇒ needs-evidence pool
  band: strong                # lead | strong | watch | park
  uncertainty_band: med-risk  # low | med | high-risk (preserved separately, P4)
  scored_by: R01              # accountable; scorer ≠ gate approver (SoD)
  scored_date: "YYYY-MM-DD"
```

**Write rules:** every dimension score carries a `basis` (resolvable refs or the honest `hypothesis`/`unknown` token) and a scoring `role`; `priority_index` and `coverage` are always written together; the write is append-only in the record's `change_log` (`↔ TASK-041 §2.2`); the scorer role must differ from the gate approver (separation of duties, `↔ TASK-003`).

---

## 7. Step F — territory grouping (4–6 problem themes, ≥12 opportunities — P5)

### 7.1 What a territory is
A **territory** is a **distinct problem theme** — a cluster of opportunities that share a *root user problem space*, *not* a solution, a feature or a screen (`prd.md` §7/§13 Prompt 08). Territories are the strategic map the concept studios will later be briefed against; they must read as *questions and problem areas*, never as product proposals.

### 7.2 The portfolio requirement (hard rule)
Per `prd.md` §7 and Prompt 08, a releasable Atlas has **≥12 scored opportunities** grouped into **4–6 distinct territories**, spanning **opportunities that need clinical integration and ones that do not.** The rubric enforces all three as portfolio-validation gates (§8).

### 7.3 How opportunities are assigned to territories
1. **Cluster by root problem**, using `root_user_need` / `underserved_context` / `desired_outcome` — *not* by `mechanisms` or any implied solution. Two opportunities belong together when they are different facets of the same user problem space.
2. **Each opportunity sits in exactly one primary territory** (its best-fit problem theme); genuine cross-territory relevance is recorded via `related_opps` (`↔ TASK-041 §3.1`), not by duplicating the opportunity.
3. **Each territory must be genuinely distinct** — a one-line "territory thesis" (the shared problem) must differ materially from every other territory's thesis. Overlapping theses are merged (reducing the count) rather than kept to pad to 6.
4. **Each territory carries a mix of priority bands where possible** — a territory of only `Park` opportunities signals either a weak theme (demote/merge) or a coverage gap (flag for research), not a studio brief.
5. **Clinical span is checked at the portfolio level**, not forced per territory: at least one opportunity with `clinical_integration ∈ {required, optional}` **and** at least one with `clinical_integration: not_applicable` must exist across the Atlas (`prd.md` §7).

### 7.4 Coverage over force-fill (anti-padding rule)
Territories are formed to **cover the real problem space**, never to hit a number. If genuine clustering yields **3 territories**, the Atlas is *under* the 4-territory floor and the correct response is to **return to synthesis** for more opportunities or finer problem distinctions — **not** to split a theme artificially. If it yields **7+**, the correct response is to **merge** the closest theses to 6 — not to drop opportunities. The count is a constraint on honest clustering, and the resolution is always *more/better synthesis or merging*, never padding or deletion. Any territory created or split **only** to satisfy the count is a forbidden value (§11).

### 7.5 Territory record (written alongside the Atlas)
```yaml
territory:
  territory_ref: TER-N
  thesis: "<the shared root problem, as a problem statement — not a solution>"
  member_opps: [OPP-…, OPP-…, …]          # each OPP's primary territory
  clinical_mix: { required: n, optional: n, not_applicable: n }
  band_profile: { lead: n, strong: n, watch: n, park: n }
  open_contradictions: [CON-…]            # preserved, not resolved by grouping (P4)
  distinct_from: "<one line on how this thesis differs from the nearest territory>"
```

---

## 8. Step G — portfolio validation (the ≥12 / 4–6 / clinical-span gate)

Before the prioritized Atlas may go to the Program Director's release gate, it must pass **portfolio validation**. Each check is pass/fail; a fail blocks release (P5).

| # | Check | Pass condition | Fail response |
|---|---|---|---|
| PV-1 | **Opportunity count** | ≥ 12 opportunities scored with `coverage ≥ 50`. | Return to synthesis; do not pad (`prd.md` §7). |
| PV-2 | **Territory count** | 4 ≤ distinct territories ≤ 6. | < 4 → more/finer synthesis; > 6 → merge nearest theses (§7.4). |
| PV-3 | **Clinical span** | ≥ 1 clinical-integration opportunity **and** ≥ 1 non-clinical opportunity. | Flag the missing side for targeted synthesis (`prd.md` §7). |
| PV-4 | **Gate integrity** | No opportunity in the studio-bound set has an open `reject`/`redesign`/`not_yet_assessed` (P1/A1/A2). | Remove/return offending opportunity; non-compensable. |
| PV-5 | **Coverage honesty** | Every ranked opportunity reports `priority_index` **with** `coverage` and `uncertainty_band`; no bare totals. | Re-emit with coverage/band; a bare number is a forbidden value (§11). |
| PV-6 | **Uncertainty preserved** | Every `high-risk` opportunity carries a `smallest_test`/`EXP` plan before it anchors a territory or reaches studios (§5.5). | Attach test plan (`→ TASK-009`) or demote from anchor. |
| PV-7 | **Contradictions preserved** | Every live `CON` is attached to its opportunity/territory and none was averaged into a dimension (P4). | Restore the contradiction; re-score honestly. |
| PV-8 | **No solution/territory leakage** | No `territory.thesis`, `hmw_statement`, or dimension rationale names a feature/screen/product (`prd.md` §13). | Reframe to problem space; a solutioned territory is a forbidden value (§11). |

A fail on any check is a **portfolio-validation failure**: the Atlas is not releasable. "Polished unsupported reports do not pass" (`prd.md` §11) — a well-formatted ranking that violates PV-1…PV-8 is explicitly not a pass.

---

## 9. Scoring one opportunity end-to-end (ILLUSTRATIVE — synthetic)

The record below reuses the PRD §7 example opportunity (`OPP-001` from `↔ TASK-041 §8`: "how might we reassure users that their efforts matter without forcing them to become data analysts?"). Its scores are a **mechanics demonstration only** — the opportunity itself is `hypothesis`-based, so the rubric is shown *refusing* to manufacture a confident ranking: evidence and importance come back `unknown`/low, coverage is low, and it lands in the `needs-evidence` pool rather than topping the list.

```yaml
# ILLUSTRATIVE (synthetic) — demonstrates the rubric mechanics only. No real assessment.
opp_id: OPP-001                      # the prd.md §7 HMW example (↔ TASK-041 §8)
# --- Step A: gate pre-filter ---
safety_gate: { clinical: pass, privacy: pass, accessibility: pass,
               manipulation: pass, unsupported_claims: pass }   # eligible to score (A1–A4)
# --- Step B: five dimensions (1–5 or unknown), separate axes ---
priority_scores:
  rubric_version: "0.1"
  dimensions:
    user_importance:   { score: unknown, basis: [hypothesis], role: R07 }   # no NEED evidence yet (P3)
    evidence_strength: { score: 1,       basis: [hypothesis], role: R02 }   # need_refs: hypothesis → D2=1
    differentiation:   { score: 3,       basis: [hypothesis], role: R01 }   # gap believed, not yet observed → capped (§4.3)
    feasibility:       { score: 4,       basis: ["UX/behavioral; no HealthKit dep (→ TASK-039)"], role: R12 }
    uncertainty:       { score: 1,       basis: [open_gaps: GAP-SYNTH-004, mechanism_status: hypothesized], role: R02 }
  weights: { user_importance: 30, evidence_strength: 25, differentiation: 20, feasibility: 15, uncertainty: 10 }
  # --- Step C: index over SCORED dimensions only (D1 excluded as unknown) ---
  # covered_weight = 25+20+15+10 = 70
  # raw = 25·1 + 20·3 + 15·4 + 10·1 = 25 + 60 + 60 + 10 = 155
  # priority_index = round(100 · (155/70) / 5) = round(100 · 2.214 / 5) = round(44) = 44
  priority_index: 44
  coverage: 70                       # D1 unknown ⇒ 30% of weight unscored; shown, not hidden (P3)
  band: watch
  # --- Step D: uncertainty band (preserved separately, P4) ---
  uncertainty_band: high-risk        # D5=1 + open gap + hypothesized mechanism
  scored_by: R01
  scored_date: "2026-11-23"
territory_ref: TER-2                 # assigned in §10 (problem theme: "effort↔reassurance")
```

**Validation trace (why this is honest, not inflated):**
1. **Gate first (A):** all five gates `pass` → eligible to score; had any been `reject`/`redesign`, no score would exist (P1). ✔
2. **Separate axes (P2):** importance, evidence, differentiation, feasibility and uncertainty each scored independently; feasibility (4) is *not* allowed to lift the thin evidence (1). ✔
3. **No invented input (P3):** `user_importance` is `unknown` (no `NEED` evidence) — **excluded** from the average, dropping coverage to 70, rather than defaulting to 3 and faking a higher total. ✔
4. **Evidence-led & uncovered honestly:** index 44 ("watch"), **not** a Lead, precisely because evidence is grade-`n/a`/hypothesis; the number cannot outrun the basis. ✔
5. **Uncertainty preserved (P4):** `high-risk` band flags that this opportunity, however appealing, **must** carry a cheap test (`smallest_test`, `↔ TASK-041 test`) before it anchors a territory or reaches studios (§5.5/PV-6); it is tested, not deleted and not waved through. ✔
6. **Coverage gate:** at `coverage 70` it is rankable (≥50) but its low coverage and high-risk band keep it out of anchor/lead status until discovery (`→ TASK-027/029`) and a gap is retired (`→ TASK-008`). ✔

---

## 10. Portfolio mechanics — the ≥12 / 4–6 rule in action (ILLUSTRATIVE — synthetic)

To prove the portfolio rule (§7/§8) *runs*, the table below is a **synthetic skeleton** of twelve opportunity *titles* grouped into five territories. **Every title and score is illustrative**, derived from the PRD's own problem framings (§5 provisional segments, §6 mechanisms, §7 example); none is a real research finding, and all scores are mechanics placeholders. The point is to show the grouping, the counts, the clinical span and the validation — not to assert any opportunity exists.

| OPP (synthetic) | Territory | Clinical | Index/Cov/Risk (synthetic) |
|---|---|---|---|
| OPP-S01 Effort feels unrewarded without data work | TER-2 Progress & reassurance | n/a | 44 / 70% / high |
| OPP-S02 Low-energy days break the routine | TER-1 Adapting to fluctuating energy | optional | 62 / 80% / med |
| OPP-S03 Unpredictable schedule defeats fixed reminders | TER-1 Adapting to fluctuating energy | n/a | 58 / 80% / med |
| OPP-S04 Missed days trigger shame and abandonment | TER-3 Recovery without guilt | n/a | 71 / 90% / med |
| OPP-S05 All-or-nothing streaks punish lapses | TER-3 Recovery without guilt | n/a | 66 / 90% / med |
| OPP-S06 Starting feels effortful and vague | TER-4 Low-friction initiation | n/a | 60 / 80% / med |
| OPP-S07 Advice feels generic, not "for me" | TER-5 Relevance to midlife context | optional | 55 / 70% / high |
| OPP-S08 Symptoms/energy shifts aren't accounted for | TER-5 Relevance to midlife context | required | 57 / 70% / high |
| OPP-S09 Progress invisible between big milestones | TER-2 Progress & reassurance | n/a | 59 / 80% / med |
| OPP-S10 Care/clinical data feels disconnected from daily life | TER-5 Relevance to midlife context | required | 52 / 60% / high |
| OPP-S11 Reminders feel nagging, erode autonomy | TER-4 Low-friction initiation | n/a | 63 / 80% / med |
| OPP-S12 Restarting after a long break feels like failure | TER-3 Recovery without guilt | n/a | 64 / 90% / med |

**Portfolio validation (synthetic run):**
- **PV-1 count:** 12 opportunities, all `coverage ≥ 50`. ✔
- **PV-2 territories:** 5 distinct problem themes (TER-1…TER-5), within 4–6. ✔
- **PV-3 clinical span:** `required` present (OPP-S08, OPP-S10) **and** `not_applicable` present (most) — both sides covered (`prd.md` §7). ✔
- **PV-4 gate integrity:** all gates `pass` in this synthetic set (any `reject`/`redesign` would have been removed before scoring). ✔
- **PV-5 coverage honesty:** every line shows index **+ coverage% + risk band**; no bare totals. ✔
- **PV-6/PV-8 (reminder):** the four `high-risk` opportunities (S01, S07, S08, S10) would each need a `smallest_test` before anchoring; every territory thesis is a *problem*, not a solution (e.g., "Recovery without guilt," not "add a streak-freeze"). ✔

Each territory thesis (problem-space, not solution): **TER-1** — routines must survive fluctuating energy and unpredictable schedules; **TER-2** — users need to feel effort is adding up without data labor; **TER-3** — lapses and restarts must not read as failure; **TER-4** — initiating and sustaining must feel low-effort and autonomy-preserving; **TER-5** — guidance must be relevant to the midlife-women context and connect to care where appropriate.

> This synthetic portfolio is a **mechanics demonstration of the ≥12/4–6 rule**, not an Opportunity Atlas. The real Atlas requires real `NEED`/`EVD` evidence (`→ TASK-029/005`), real reconciliation (`→ TASK-023`) and real gating (`→ TASK-033/040`) before any of these would carry a non-synthetic score.

---

## 11. Forbidden values & validation failures

These make a scoring run or a grouped Atlas **invalid**, not merely low-priority. They are the structural anti-fabrication and never-jump-to-concepts guards, mapping to `prd.md` §3/§4/§6/§7/§11 and `↔ TASK-004 §6` / `↔ TASK-041 §6`.

### 11.1 Gate & compensation (reject)
1. **Scoring a gate-failing opportunity** (violates P1/A1): computing or reporting a weighted index for an opportunity with any open `reject`/`redesign`. → reject; the opportunity is removed from the ranked set.
2. **Using a score to override a gate** (non-compensable, `prd.md` §9/§11): presenting a high index as grounds to proceed past a failed or unassessed gate. → reject.
3. **Treating safety as a weighted dimension** (violates A4): folding clinical/privacy/accessibility/manipulation/unsupported-claims into the 0–100 index so it can be traded off. → reject.

### 11.2 Fabrication & inflation (most serious, `prd.md` §4/§11)
4. **Guessed dimension value** (violates P3): scoring a dimension with no resolvable basis instead of marking it `unknown`. → reject; re-score as `unknown`, lower coverage.
5. **`unknown` defaulted to a middle value**: silently treating an unscored dimension as 3/5 to inflate the index. → reject.
6. **Bare index without coverage/band** (violates PV-5): reporting a priority number without its `coverage` and `uncertainty_band`. → reject; re-emit.
7. **Popularity/awards raising a score** (`prd.md` §3): download/ranking/editorial figures used to lift D1/D2/D3. → reject the basis.
8. **Fabricated evidence, effect size, quote, competitor datum or clinical outcome** used as a scoring basis (`prd.md` §4 "Never fabricate …"). → escalate; gravest violation.
9. **Usability/engagement read as health impact** (`prd.md` §4): a strong D3/experience signal scored as D2 evidence of clinical/health benefit, or an engagement signal recorded under a clinical outcome. → reject.

### 11.3 Uncertainty & contradiction (preserve, never average — P4)
10. **Contradiction averaged into a dimension** (`prd.md` §7; `↔ TASK-004`): a live `CON` numerically netted against supporting evidence to produce a tidy D2. → reject; preserve the contradiction, raise D5.
11. **Uncertainty hidden** (violates P4): dropping the raw `uncertainty_band` so a high index conceals a thin/contested basis. → reject.
12. **High-risk opportunity waved through** (violates PV-6): a `high-risk` opportunity anchoring a territory or reaching studios with no `smallest_test`/`EXP` plan. → block.

### 11.4 Portfolio & territory (P5)
13. **Padding or splitting to hit the count** (violates §7.4): a territory created/split only to reach 4–6, or opportunities duplicated to reach 12. → reject; return to honest synthesis/merge.
14. **Dropping opportunities to fit** (violates §7.4/`prd.md` §11): deleting a valid opportunity to force a tidy portfolio instead of retaining it in the backlog. → reject.
15. **Solutioned territory or dimension rationale** (violates PV-8, `prd.md` §13): a `territory.thesis` or any rationale naming a feature/screen/product rather than a problem. → reject; reframe to problem space.
16. **Missing clinical span** (violates PV-3): a releasable Atlas with no clinical-integration opportunity *or* no non-clinical opportunity. → block; targeted synthesis.
17. **Self-scored and self-gated** (violates SoD, `↔ TASK-003`): `scored_by` equal to the gate approver, or a clinical/personal-data opportunity scored without the R14/R15 gate verdict in place. → reject.

---

## 12. Governance, dependencies, and change control

- **Custodian:** R01 Head of Product (Opportunity Synthesis owner) owns the rubric and runs it with R02/R07/R09/R12; the Program Director co-owns the weights and versions them here. Scores are produced by role, never by a named individual, and the scorer is always separate from the gate approver (`↔ TASK-003`).
- **Where it is applied:** at the `OPP` `gated → prioritized` transition (`↔ TASK-041 §2.3`), producing the prioritized, territory-mapped Atlas the Program Director's §7 release gate reviews before studios begin (`prd.md` §7/§8; `→ TASK-043`). The rubric informs, but never *is*, that gate.
- **Dependencies:**
  - `↔ TASK-041` Opportunity Atlas record schema — the record this rubric reads; it writes `priority_scores` and `territory_ref` back (the schema's declared destinations; this rubric supplies the weights/formula/counts the schema deliberately omitted).
  - `↔ TASK-004` Evidence grading rules — supplies the A–D grades and epistemic labels D2/D5 map onto; the "never average contradictions" and "usability ≠ health impact" rules are inherited here.
  - `→ TASK-033 / TASK-040` Safety gate & privacy/clinical boundary — define the non-compensable gate verdicts the Step-A pre-filter consumes (never overrides).
  - `→ TASK-008` Research gap & contradiction log — `unknown`/low-coverage dimensions and live contradictions route here; retiring a gap re-scores the opportunity.
  - `→ TASK-023` Cross-specialist reconciliation — preserved `disagreements` raise D5 uncertainty; the rubric runs on `reconciled` records.
  - `→ TASK-009` Decision & experiment registers — `high-risk` opportunities' `smallest_test` becomes an `EXP` here before they anchor a territory.
  - `→ TASK-005 / TASK-029 / TASK-030 / TASK-012 / TASK-013 / TASK-016` — supply the `EVD`/`NEED`/`CAP`/`JRN` bases the five dimensions require; without them, dimensions are `unknown`.
  - `→ TASK-037 / TASK-039` Build-buy matrix & iOS integration inventory — resolve D4 feasibility beyond the coarse opportunity-stage read.
  - `→ TASK-034` Capability evaluation scorecard — the sibling *capability* instrument (`prd.md` §6 weights); this rubric is the *opportunity* analogue and deliberately uses the five opportunity dimensions, not the capability weights.
  - `→ TASK-043 / TASK-044` Concept studio briefs — downstream consumers of the approved, prioritized, territory-mapped Atlas.
  - `← TASK-002 / TASK-003` Workstream registry & responsibility matrix — supply owner/scorer/reviewer roles and separation of duties.
- **Open unknowns (honestly recorded, not defects):**
  - Whether the weights (§5.1) should be re-tuned after the first real scoring pass — proposed default: hold v0.1 weights for the first full Atlas, then review with the Program Director; any change re-scores the whole corpus (§5.1).
  - Whether D5 uncertainty should be a weighted dimension *and* a band (current design) or a band *only* with the 10% redistributed to D1/D2 — proposed default: keep both (P4 rationale, §4.5); to be confirmed with R02.
  - The exact `coverage` floor for ranking (currently 50%) — proposed default: 50; to be confirmed after seeing real coverage distributions.
  - Whether the clinical span (PV-3) should be a minimum count (currently ≥1 each) or a proportion — proposed default: ≥1 each, revisited if the Atlas skews heavily to one side.

### Change log
| Version | Date | Change | Author (role) |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial rubric: non-compensable gate pre-filter (Step A); five weighted dimensions (user importance 30 / evidence 25 / differentiation 20 / feasibility 15 / uncertainty 10) with 1–5 anchors and separate axes; 0–100 index computed over scored dimensions only, with coverage and a preserved uncertainty risk band; ranking/tie-breaks; territory grouping (4–6 problem themes) and the ≥12-opportunity / clinical-span portfolio validation (PV-1…PV-8); forbidden-value catalogue; two synthetic worked demonstrations (single-opportunity scoring on the PRD §7 example, and a 12-opportunity / 5-territory portfolio run); dependencies to TASK-004/005/008/009/023/029/030/033/040/041/043. | R01 Head of Product / Program Director |
