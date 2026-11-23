# Build / Buy / Integrate / Defer — Capability Sourcing Matrix

**Deliverable:** TASK-037 · **Workstream:** Technology & Economics (WS05, `prd.md` §2 / §6 / §10 / §13 Prompt 05)
**Version:** 0.2 · **Status:** Proposed — matrix and scoring defined, not yet used to evaluate any real capability
**Owner role:** iOS/backend architect — single accountable = Backend engineer/architect (R06); co-lead iOS engineer (R05); product economist lens via Product analyst/growth (R09)
**Mandatory reviewers for gated rows:** Privacy/regulatory reviewer (R15) · Clinical reviewer (R14) · QA/accessibility specialist (R13) for any accessibility-affecting third-party component
**Source basis:** `prd.md` §6 Technology/economics ("For each capability choose build, buy, integrate or defer; document complexity, vendor dependency, maintenance, data ownership, regulatory implications and differentiation"), §10 Build vs buy and purchasing gates ("Build proprietary …", "Buy/integrate selectively …", "Do not recreate a mature billing or analytics platform without a compelling reason"), §9 ("Clinical safety, privacy and accessibility are mandatory gates, not compensable weighted scores"), §11 ("Polished unsupported reports do not pass"), §13 Prompt 05 ("recommend build/buy/integrate/defer with complexity, costs, vendor dependence, maintenance, data ownership, clinical/regulatory implications and defensible IP … Do not recommend a purchase without an explicit capability gap"), §4 Decision Log (`DEC-001`), §14 ("A deliverable is **not complete** if its claims lack traceable sources").

---

## 0. What this document is (and is not)

This is the **reusable evaluation instrument** that takes one capability HerRays needs, and produces a single, owned, reasoned sourcing verdict — **Build**, **Buy**, **Integrate**, or **Defer** — by scoring it against the eight dimensions this task's acceptance criteria name (differentiation, complexity, maintenance, data ownership, security, regulatory risk, cost, vendor lock-in) and running three non-compensable gates first.

It is a **matrix and a routing rubric**, not a decision. It evaluates no real capability and names no real vendor. When it is used, its output is written into a `DEC` record (TASK-009), not stored here.

| This document **owns** | This document **does not own** (and must not duplicate) |
|---|---|
| The eight evaluation dimensions, their 1–5 anchored scales, and scoring direction (§3). | The **decision record** lifecycle, versioning and two-way coupling — `↔ TASK-009` (`decision-experiment-registers.md`). This matrix writes a verdict *into* a `DEC`. |
| The non-compensable sourcing gates (regulatory, data-sovereignty, security floor) and how they override scores (§4). | The **capability decision form** (rationale/evidence/alternatives/reviewer/risks/follow-up intake + approval gate) — `↔ TASK-035` (`adopt-adapt-invent-reject-defer-decision-form.md`). A sourcing verdict is attached to that form as the technical basis for an `adopt`/`adapt`/`invent`. |
| The two-index routing model and the Build/Buy/Integrate/Defer quadrant map (§5). | The **phased tool-purchasing sheet** (Figma, Mobbin, Appfigures, AppFollow, Dovetail, Maze, analytics, RevenueCat) — `→ TASK-038`. That sheet consumes this matrix per tool; this matrix is tool-agnostic. |
| The `BBI` evaluation-record field dictionary and scoring stamp (§6, §7). | The **iOS capability & integration inventory** (HealthKit, widgets, Live Activities, notifications, haptics, on-device processing, sync) — `→ TASK-039`. That inventory supplies feasibility inputs this matrix scores. |
| The worked synthetic walkthrough (§8). | The **privacy & clinical boundary checklist** (data minimization, consent, medical claims, escalation, clinical review, regulatory triggers) — `→ TASK-040`. This matrix's regulatory gate (G1) *calls* that checklist; it does not restate it. |
| Scoring guidance and forbidden-value catalogue (§3, §7.4). | **Evidence grades** (A–D) — `↔ TASK-004`; the **capability value scorecard** (user value / evidence / UX / differentiation / long-term / feasibility, 0–100) — `↔ TASK-034`. That scorecard answers *"is this capability worth having?"*; this matrix answers the separate question *"having decided to have it, do we build, buy, integrate or defer it?"* |

Scope discipline, per the workflow rules: this is a **standalone deliverable**. It defines *how a sourcing decision is evaluated and gated*. It records **no actual build/buy/integrate/defer decision** about any real capability or vendor, and asserts no cost, vendor capability, or regulatory determination as fact.

---

## 1. Design intent — why four verdicts, and why not one score

### 1.1 The four verdicts are routing destinations, not quality grades

The PRD (§6, §10, §13 Prompt 05) asks a routing question with four mutually exclusive answers:

- **Build** — HerRays implements and owns it. Reserved by §10 for *differentiated* capability: the habit/action engine, adaptive journeys, coaching logic, progress semantics, personalized recommendation within validated scope, HerRays-specific health-intelligence interfaces, clinician workflows, and brand/interaction language — "core IP."
- **Buy** — HerRays pays for a finished product/service and uses it largely as-is (e.g. a subscription-billing platform, a crash reporter). §10: "Do not recreate a mature billing or analytics platform without a compelling reason."
- **Integrate** — HerRays builds a thin proprietary layer **around** a third-party capability it does not want to own end-to-end (e.g. analytics SDK behind an internal event abstraction; a model API behind an on-device/off-device boundary). The differentiator is the layer and the data control, not the commodity underneath.
- **Defer** — HerRays decides **not to decide yet**, on purpose, with a named trigger. Legitimate when (a) the capability gap is unproven ("Do not recommend a purchase without an explicit capability gap" — Prompt 05), (b) a mandatory gate (regulatory/clinical/privacy) is unresolved, or (c) available options are immature and building now is premature. Defer is a decision; an indefinite silence is not.

### 1.2 Why a single 0–100 compensatory score is the wrong instrument here

TASK-034's capability scorecard legitimately collapses user-value, evidence, UX, differentiation, long-term usefulness and feasibility into one 0–100 number, because those are all "more is better" and the question is a single ranking. **Sourcing is not that question.** A high differentiation score argues *for* Build; a high cost score argues *against* Build. Averaging them produces a number that is high for both "cheap commodity" and "expensive crown-jewel," which are opposite verdicts. A compensatory sum would also let a strong cost or differentiation score **buy its way past a regulatory or data-sovereignty problem** — exactly the compensation `prd.md` §9 forbids ("mandatory gates, not compensable weighted scores").

So this matrix is built as **gates → two orthogonal indices → quadrant routing → modifiers**, never one flat total:

1. **Gates first (§4).** Three non-compensable screens (regulatory/clinical, data-sovereignty, security floor) can strike options from the candidate set or force **Defer** regardless of any score.
2. **Two orthogonal indices (§5).** An *Own-It Value* index (why HerRays should control this) and a *Build-Cost* index (what building it costs HerRays), scored independently so they are never netted into one number.
3. **Quadrant routing (§5.3).** The (Value, Cost) position maps to a provisional verdict.
4. **Lock-in modifier (§5.4).** Vendor dependency can upgrade a Buy to Integrate-behind-abstraction or, absent an exit, to Defer.

This ordering mirrors the capability-decision ordering in TASK-035 (gates first, value second, verdict last) and is enforced by the entry rules in §7.

---

## 2. Precondition — a sourcing evaluation may not start in a vacuum

A `BBI` evaluation is **downstream** of a capability decision. It is only opened once:

- **P1 — There is a real capability gap.** The capability exists as a `CAP` record (`↔ TASK-030`) *or* an `OPP` (`↔ TASK-041`) with an adopt/adapt/invent direction, and the gap is explicit (Prompt 05: "Do not recommend a purchase without an explicit capability gap"). Evaluating sourcing for a capability HerRays has not decided to have is a §7.4 failure (F-1).
- **P2 — The candidate options are enumerated honestly.** At least the Build option and any *named, real* Buy/Integrate candidate are listed. "Some vendor probably exists" is not a candidate; it is an **open question** that routes the verdict toward Defer until TASK-038/039 identify a real option.
- **P3 — Feasibility inputs are sourced, not assumed.** iOS/platform feasibility comes from TASK-039; cost inputs are labelled estimate-vs-quote; vendor claims are labelled *vendor-stated, unverified* until confirmed. Unknown inputs are scored `unknown` and **excluded from the index average** (§3.4), never defaulted to a convenient value.

---

## 3. The eight evaluation dimensions — field dictionary and scoring guidance

Each dimension is scored **1–5** against anchored descriptions. Two properties are stated per dimension and matter for the model:

- **Direction** — which verdict a *high* score pulls toward. The two indices in §5 only sum dimensions that share a direction; they are never mixed into one total.
- **Role** — `weight` (feeds an index) or `gate` (can override, §4) or `both`.

Requirement markers: **M** = mandatory to complete an evaluation; a dimension left blank cannot be silently treated as neutral.

> **Scoring discipline (applies to all eight):** every score must cite its basis — an `EVD` id, a `JRN`/teardown observation, a TASK-039 feasibility note, a vendor document (labelled *vendor-stated*), or a named estimate (labelled per TASK-015). A score with no basis is `unknown`, not a guess (§3.4, F-3).

### 3.1 DIF — Differentiation `M` · direction → **Build** · role: weight (Own-It Value)

*How much proprietary user, clinical, or brand value HerRays creates by owning this capability rather than renting it.* The §10 "build proprietary vs. buy commodity" axis.

| Score | Anchor |
|---|---|
| 5 | **Core IP.** This is part of what makes HerRays HerRays — the habit/action engine, coaching logic, progress semantics, health-intelligence interface, clinician workflow, or brand interaction language (`prd.md` §10). A competitor copying the vendor could not copy this. |
| 4 | Strongly differentiating; shapes the everyday experience quality the final decision rule prizes (`prd.md` §15). |
| 3 | Mixed — a commodity core with a differentiating configuration or data layer on top (classic **Integrate** signal). |
| 2 | Largely commodity; differentiation would be marginal and not user-visible. |
| 1 | **Pure commodity.** Billing, crash reporting, standard infra — identical whoever provides it; owning it differentiates nothing (`prd.md` §10 "Do not recreate a mature billing or analytics platform"). |

### 3.2 CPX — Build complexity `M` · direction → **against Build** · role: weight (Build-Cost)

*Engineering difficulty of building this to the required quality bar, including the hard parts (reliability, edge cases, accessibility, platform behavior).*

| Score | Anchor |
|---|---|
| 5 | Very high — specialized expertise HerRays does not have, long build, high risk of building it worse than a mature vendor (e.g. a payments ledger, an ML training pipeline). |
| 4 | High — significant novel engineering; multi-quarter. |
| 3 | Moderate — well-understood but non-trivial; a focused build. |
| 2 | Low — standard application work within existing team capability. |
| 1 | Trivial — a thin wrapper or a few days' work. |

### 3.3 MNT — Maintenance burden `M` · direction → **against Build / toward offload** · role: weight (Build-Cost)

*Ongoing cost of keeping it working if HerRays owns it: OS/API churn, security patching, on-call, content/model refresh, platform-policy tracking.* High maintenance is a reason to let a vendor carry it.

| Score | Anchor |
|---|---|
| 5 | Relentless — tracks a fast-moving external surface (OS releases, fraud, model drift, regulatory change) and breaks if unattended. Owning it is a standing tax. |
| 4 | High — regular upkeep, meaningful on-call exposure. |
| 3 | Moderate — periodic maintenance, predictable. |
| 2 | Low — occasional updates. |
| 1 | Near-zero — stable once built. |

### 3.4 OWN — Data ownership & control `M` · direction → **Build / Integrate-with-control** · role: **both** (gate G2 + Own-It Value)

*How strategically and legally important it is that HerRays owns and controls the data this capability touches — and whether a Buy would move special-category health data outside HerRays' control.* This dimension is **both** a weight and a non-compensable gate (§4 G2): a high sensitivity can forbid Buy outright, not merely lower a score.

| Score | Anchor |
|---|---|
| 5 | Special-category health data **must** stay under HerRays control (data residency, DPA, deletion, no secondary use). A vendor that cannot guarantee this is **excluded** (G2), not down-scored. Strategic ownership of this data is itself a differentiator. |
| 4 | Sensitive personal data; a vendor is acceptable only with a strong DPA and data-isolation; Integrate-behind-boundary preferred to raw Buy. |
| 3 | Personal but low-sensitivity data; standard processor terms suffice. |
| 2 | Pseudonymous/aggregate data; ownership matters little. |
| 1 | No personal data; ownership irrelevant. |

> **Score-vs-gate note:** OWN's *weight* contribution (toward Own-It Value) and its *gate* action (G2 forbidding Buy) are distinct. A score of 5 both raises Own-It Value **and** fires G2. See §4.

### 3.5 SEC — Security exposure `M` · direction → **context-dependent** · role: **both** (floor gate G3 + Build-Cost risk)

*The attack surface and the security bar this capability must meet.* Security points two ways and so is modelled carefully: a high bar is a **cost of building** (you must meet it yourself) *and* a **reason a mature vendor may be safer** (they already meet it) — but no option, build or buy, may fall below the baseline floor (G3).

| Score | Anchor | Model effect |
|---|---|---|
| 5 | Critical surface — authentication, health records, payment credentials; a breach is catastrophic and regulated. | Floor **G3** struck against any option that cannot meet encryption-at-rest/in-transit, access control and audit. Adds to Build-Cost (high bar to self-build), and is a point **in favour of** a vendor that already clears the bar — recorded as a note on the verdict, not a silent score flip. |
| 3 | Moderate — standard PII handling. | Weight only. |
| 1 | Minimal — no sensitive data or credentials. | Weight only; floor trivially met. |

### 3.6 REG — Regulatory & clinical risk `M` · direction → **Defer / mandatory review** · role: **gate G1** (non-compensable)

*Exposure to GDPR/special-category rules, medical-device/software-as-a-medical-device questions, medical-claim limits, and clinical-escalation duties.* Per `prd.md` §6/§9, this is a **mandatory gate, not a weight**: a high REG does not lower a score to be outweighed by cheap cost — it **forces review and can force Defer** (§4 G1). It is scored to trigger the right gate, not to be averaged.

| Score | Anchor | Gate action |
|---|---|---|
| 5 | Plausibly a medical device / makes or supports a clinical claim / processes special-category data in a high-risk way. | **G1 fires:** verdict forced to **Defer (pending review)**; TASK-040 checklist + clinical (R14) **and** privacy (R15) sign-off required before any build/buy/integrate can be recorded. No score overrides this. |
| 4 | Significant GDPR / medical-adjacent exposure; not clearly a device. | G1 fires in "mandatory co-sign" mode: R14/R15 must approve the verdict; Defer if unresolved. |
| 2–3 | Ordinary personal-data processing; standard DPIA. | Privacy (R15) review noted; no forced Defer. |
| 1 | No regulated data or claims. | No gate. |

### 3.7 CST — Cost (total cost of ownership) `M` · direction → **against the more expensive option** · role: weight (Build-Cost)

*Fully-loaded cost comparison of the realistic options over a defined horizon: build (engineering time + maintenance from §3.3) vs. buy/integrate (licensing + integration + exit).* Costs are **labelled estimate vs. quote**; `prd.md` §10 warning applies — third-party "estimates are not actual competitor analytics," and here, vendor list prices are *vendor-stated* until contracted.

| Score | Anchor (scores the **cost of building**, so it loads Build-Cost) |
|---|---|
| 5 | Building is far more expensive than a mature vendor over the horizon; rebuilding a solved problem. |
| 4 | Building is materially more expensive than buying. |
| 3 | Comparable. |
| 2 | Building is cheaper than the available vendors. |
| 1 | No credible paid option exists, or building is clearly cheapest. |

> CST is scored as *cost-of-building-relative-to-buying* so its direction is consistent with CPX/MNT (high = don't build). The absolute figures and the build-vs-buy delta must be recorded in the `BBI` record's `cost_basis` field (§6), with horizon and estimate/quote labels, so the score is auditable.

### 3.8 LOCK — Vendor lock-in `M` · direction → **against Buy; toward Build or Integrate-behind-abstraction** · role: weight (Own-It Value) **+ modifier (§5.4)**

*Switching cost and dependency created by choosing a vendor: proprietary data formats, egress difficulty, API exclusivity, pricing power, discontinuation risk.* High lock-in is a reason to **own it** or to **insulate** behind an abstraction with a tested exit — not to accept a raw Buy.

| Score | Anchor | Model effect |
|---|---|---|
| 5 | Severe — data trapped in a proprietary format, no export, high egress/switching cost, single-vendor dependency with pricing power or discontinuation risk. | Adds to Own-It Value **and** fires the §5.4 modifier: a Buy verdict is upgraded to **Integrate-behind-abstraction with a documented exit plan**, or, if no exit is feasible, downgraded to **Defer**. |
| 3 | Moderate — some switching cost; standard formats with export. | Weight only. |
| 1 | None — commodity, standards-based, trivially replaceable (e.g. a swappable crash reporter). | Weight only; raw Buy acceptable. |

### 3.4(bis) `unknown` handling (applies to every dimension)

A dimension with no sourced basis is scored the literal token **`unknown`**, recorded with the reason and the owner who must resolve it, and **excluded from the index denominator** (§5.2) — never silently treated as 3/neutral. An evaluation with any **gate dimension** (OWN, SEC, REG) `unknown` **cannot** produce a build/buy/integrate verdict; it routes to **Defer (pending gate input)** and opens a `GAP` (`↔ TASK-008`). This is the anti-fabrication guard: missing security, data-ownership or regulatory knowledge can never be scored away.

---

## 4. The gates — non-compensable, run first (§7 G0 ordering)

Gates run **before** any index is computed. Each can strike a candidate option or force the verdict, and **no score may overturn a gate** (`prd.md` §9/§11).

### G1 — Regulatory / clinical gate (from REG §3.6)
- **Trigger:** `REG ≥ 4`, or any medical claim / special-category-health-data / clinical-escalation touchpoint flagged by the TASK-040 checklist.
- **Action:** Verdict is forced to **Defer (pending review)** until TASK-040 is completed and the clinical reviewer (R14) **and** privacy/regulatory reviewer (R15) sign off. At `REG = 4` the gate runs in co-sign mode (verdict may proceed only with R14/R15 approval recorded on the `DEC`). The matrix **must not** output Build/Buy/Integrate for an unreviewed `REG ≥ 4` capability.
- **Non-compensable:** a cheap cost (CST 5) or strong differentiation (DIF 5) does **not** release the gate.

### G2 — Data-sovereignty gate (from OWN §3.4)
- **Trigger:** `OWN = 5` (special-category health data that must stay under HerRays control), or a candidate vendor that cannot contractually guarantee residency / DPA / deletion / no-secondary-use.
- **Action:** **Buy is forbidden** for that candidate; the surviving option set is restricted to **Build** or **Integrate-with-data-isolation** (the health data never leaves HerRays' boundary; only non-sensitive derived signals cross it). If no such isolation is feasible → **Build** or **Defer**.
- **Non-compensable:** low cost or vendor maturity does not permit exporting the data.

### G3 — Security floor (from SEC §3.5)
- **Trigger:** any candidate option (build *or* buy) that cannot demonstrably meet the baseline: encryption at rest and in transit, authenticated access control, audit logging, and — for health data — the §6/TASK-040 privacy controls.
- **Action:** that option is **struck from the candidate set** before scoring. If the strike removes all buy/integrate candidates, the choice is Build (if it can meet the floor) or Defer.

**Gate output:** a short gate record per option — `pass | struck | forced_defer | co_sign_required` — with the triggering dimension and the resolving owner. Only options marked `pass` proceed to §5.

---

## 5. The routing model — two orthogonal indices → quadrant → modifiers

### 5.1 Two indices, never summed together

Only dimensions that share a direction are combined, and the two results are kept as a **pair**, never netted:

- **Own-It Value (V)** — the case for HerRays controlling this capability. Weighted mean of **DIF** (§3.1), **OWN** (§3.4, weight contribution), and **LOCK** (§3.8, weight contribution).
- **Build-Cost (C)** — the cost to HerRays of owning it. Weighted mean of **CPX** (§3.2), **MNT** (§3.3), **CST** (§3.7), plus **SEC** (§3.5) as a build-bar risk contribution.

Proposed default weights (a prioritization heuristic, **not** a validated instrument — mirrors `prd.md` §5 Phase 4 / §9 language; re-tune per program):

| Index | Dimension | Weight |
|---|---|---|
| **Own-It Value (V)** | DIF Differentiation | 0.50 |
| | OWN Data-ownership (strategic) | 0.30 |
| | LOCK Vendor lock-in | 0.20 |
| **Build-Cost (C)** | CPX Complexity | 0.35 |
| | MNT Maintenance | 0.30 |
| | CST Cost-to-build | 0.25 |
| | SEC Security build-bar | 0.10 |

### 5.2 Computing each index (1.0–5.0), `unknown`-aware

```
V = Σ(weight_i × score_i) / Σ(weight_i)   over the V dimensions whose score ≠ unknown
C = Σ(weight_j × score_j) / Σ(weight_j)   over the C dimensions whose score ≠ unknown
```

`unknown` dimensions are dropped from **both** numerator and denominator (§3.4-bis) — never counted as 3. If dropping leaves a gate dimension unscored, the evaluation is **Defer (pending input)** (§3.4-bis), not a computed verdict. Both V and C are reported to one decimal; the **pair (V, C)** is the routing coordinate. Thresholds below use **High ≥ 3.5**, **Low < 3.5** (a proposed split, tunable).

### 5.3 The routing quadrant (provisional verdict)

|  | **Build-Cost LOW** (< 3.5) | **Build-Cost HIGH** (≥ 3.5) |
|---|---|---|
| **Own-It Value HIGH** (≥ 3.5) | **BUILD.** Differentiating and affordable to own — core IP, build it (`prd.md` §10 build-proprietary list). | **BUILD the differentiator, offload the rest → INTEGRATE.** It matters, but owning the whole thing is costly. Build the thin proprietary layer (the part that carries V); integrate a mature component underneath for the costly commodity part. If building even the layer is infeasible now → **DEFER** with a build-later trigger. |
| **Own-It Value LOW** (< 3.5) | **INTEGRATE (preferred) or BUILD.** Cheap either way and not differentiating — prefer **Integrate** to keep team focus on differentiators (`prd.md` §15 "least unnecessary effort"); build only if integrating costs more than a trivial in-house version. | **BUY / INTEGRATE.** Commodity and expensive to build — use the mature vendor (`prd.md` §10 "Do not recreate a mature billing or analytics platform without a compelling reason"). Buy if lock-in is low (§5.4); Integrate-behind-abstraction if not. |

### 5.4 Modifiers applied to the provisional verdict (in order)

1. **Lock-in modifier (LOCK §3.8).** If the provisional verdict is **Buy** and `LOCK ≥ 4`: upgrade to **Integrate-behind-abstraction** with a documented, tested **exit plan** (data export + swap path). If no exit is feasible → **Defer** until one exists or the dependency is accepted by the owner with rationale.
2. **Gate residue.** If G1 left the row in `co_sign_required`, the verdict carries only with R14/R15 approval recorded. If G2 forbade Buy, "Buy" in the quadrant reads as "Integrate-with-data-isolation."
3. **Security steer (SEC §3.5).** Where `SEC = 5` and a vendor already clears the bar while a self-build would not, record a noted lean toward Integrate/Buy on the `DEC` rationale — as an explicit, visible note, never a silent score change.
4. **Gap-to-Defer.** Any unresolved `unknown` on a gate dimension, or an unproven capability gap (P1), forces **Defer (pending …)** with a `GAP` opened (`↔ TASK-008`).

### 5.5 Recording the verdict

The final verdict (Build/Buy/Integrate/Defer), the (V, C) pair, each of the eight scores with its basis, the gate outcomes, the modifiers applied, and any dissent are written into **one `DEC` record** (`↔ TASK-009`) and attached to the capability's TASK-035 decision form as the **technical/sourcing basis** for its adopt/adapt/invent verdict. A Defer records its **revisit trigger** (condition + date). Nothing is "done" without that traceable record (`prd.md` §14).

---

## 6. The `BBI` evaluation record — field dictionary

One evaluation = one `BBI-NNN` record. It feeds a `DEC`; it does not replace it. Requirement markers: **M** mandatory, **C** conditional, **O** optional.

### 6.1 Identity & subject
| # | Field | Req | Rule |
|---|---|---|---|
| I1 | `bbi_id` | M | `BBI-NNN`, immutable. One capability-sourcing question per record. |
| I2 | `capability_ref` | M | `CAP-NNN` / `OPP-NNN` being sourced (P1). Must resolve. |
| I3 | `gap_statement` | M | The explicit capability gap (Prompt 05). No gap ⇒ cannot evaluate (F-1). |
| I4 | `owner_role` | M | **Exactly one** accountable role (default R06; TASK-003). A role, not a person. |
| I5 | `created_by_role` / `created_date` | M | Provenance; append-only. |

### 6.2 Candidate options
| # | Field | Req | Rule |
|---|---|---|---|
| O1 | `options[]` | M | Enumerated options, each `{kind: build\|buy\|integrate, name, source}`. Build is always present. Buy/Integrate options must name a **real** candidate or be omitted (P2). A "placeholder vendor" is an open question, not an option. |
| O2 | `vendor_claims[]` | C | Per buy/integrate option: capability claims, each labelled `vendor_stated_unverified` until confirmed by an `EVD` (`↔ TASK-005`). |

### 6.3 Dimension scores (the eight)
| # | Field | Req | Rule |
|---|---|---|---|
| S1–S8 | `dif, cpx, mnt, own, sec, reg, cst, lock` | M | Each `1–5 \| unknown`, each with `score_basis` (an `EVD`/`JRN`/TASK-039/estimate ref). No bare scores (F-3). |
| S9 | `cost_basis` | M | The CST figures: build vs. buy totals, horizon, and `estimate \| quote` label per figure (`prd.md` §10). |

### 6.4 Gates, indices & verdict
| # | Field | Req | Rule |
|---|---|---|---|
| G | `gate_outcomes` | M | Per option: G1/G2/G3 result (`pass \| struck \| forced_defer \| co_sign_required`) + trigger + resolver. |
| V | `value_index` / `cost_index` | C | Computed V and C (§5.2). Absent (and verdict = Defer) if a gate dimension is `unknown`. |
| R | `verdict` | M | `build \| buy \| integrate \| defer`. Must be consistent with gates + quadrant + modifiers, or carry an explicit documented override rationale (F-6). |
| R2 | `modifiers_applied[]` | C | Lock-in / gate-residue / security-steer / gap-to-defer notes (§5.4). |
| R3 | `revisit_trigger` | C | **Mandatory for `defer`**: condition + date (F-5). |
| R4 | `dec_ref` | M | The `DEC-NNN` this verdict is written into (`↔ TASK-009`). |
| R5 | `reviewer_role` / `co_sign[]` | C | Mandatory R14+R15 co-sign for any `REG ≥ 4` or `OWN = 5` row; reviewer distinct from owner where a gate fired. |
| R6 | `dissent[]` | C | Preserved disagreement (`prd.md` §13 Prompt 06); mandatory where the review was not unanimous. |

### 6.5 Audit
`record_version`, `change_log[]`, `status` (reuses TASK-009 vocabulary), append-only, no hard delete.

---

## 7. Validation — entry rules, ordering, and forbidden values

### 7.1 Ordering (G0)
Gates (§4) **before** indices (§5) **before** verdict. An index computed before gates, or a verdict set before gates pass, is invalid.

### 7.2 Entry validation (to record a verdict)
1. P1–P3 satisfied (real gap, real options, sourced inputs).
2. All eight dimensions scored or explicitly `unknown` with reason + owner.
3. No gate dimension (OWN/SEC/REG) left `unknown` on a non-Defer verdict.
4. Gate outcomes recorded for every option.
5. Verdict consistent with §5, or an explicit override rationale present and co-signed.
6. `defer` carries a `revisit_trigger`; `buy` with `LOCK ≥ 4` carries an exit plan or is re-routed.
7. `REG ≥ 4` / `OWN = 5` rows carry R14+R15 co-sign.
8. A `DEC` reference exists (`R4`).

### 7.3 Transition validation
Changing any score or option **supersedes** the record (new `record_version`, reason in `change_log`); it never silently rewrites a prior verdict. A gate flipping to fail at any time reopens the verdict.

### 7.4 Forbidden-value catalogue (automatic review failures)
| # | Forbidden | Why |
|---|---|---|
| F-1 | A sourcing evaluation with no proven capability gap (`gap_statement` empty/speculative). | `prd.md` §13 Prompt 05 "Do not recommend a purchase without an explicit capability gap." |
| F-2 | A single compensatory 0–100 total used to pick the verdict. | §1.2; conflates opposite verdicts and lets cost/differentiation buy past gates (`prd.md` §9). |
| F-3 | Any dimension scored without a `score_basis`. | `prd.md` §14 traceable sources; §4 "Polished unsupported reports do not pass." |
| F-4 | A gate dimension (OWN/SEC/REG) scored `unknown` but a build/buy/integrate verdict still emitted. | §3.4-bis; security/privacy/regulatory ignorance scored away. |
| F-5 | A `defer` with no `revisit_trigger`. | Indefinite limbo is not a decision (§1.1). |
| F-6 | A verdict inconsistent with gates/quadrant/modifiers and **no** documented override rationale + co-sign. | Hidden reasoning; `prd.md` §9/§11. |
| F-7 | A `buy`/`integrate` built on `vendor_stated_unverified` claims treated as verified fact. | `prd.md` §10 "estimates are not actual analytics"; vendor claims ≠ evidence until an `EVD` confirms. |
| F-8 | Special-category health data placed outside HerRays control to win on cost. | G2; `prd.md` §6 clinical-integration boundaries, §9 non-compensable privacy gate. |
| F-9 | Recommending a purchase whose cost figures are fabricated or unlabelled (estimate vs. quote). | `prd.md` §10; TASK-015 estimate-provenance rules. |
| F-10 | Fabricating competitor retention/CAC/LTV or vendor internal metrics to justify a verdict. | `prd.md` §4 "Never fabricate … retention, CAC, LTV …". |

---

## 8. Worked example — ILLUSTRATIVE (synthetic), evaluates no real capability or vendor

> **Label:** every value below is **synthetic** and exists only to show the matrix *runs*. It names a generic placeholder capability and placeholder vendor classes, asserts no real cost, vendor capability, or regulatory determination, and references fictitious `*-SYNTH-*` ids. It is not a HerRays sourcing decision.

### 8.1 `BBI-SYNTH-001` — Subscription billing & entitlement management
- `capability_ref`: `CAP-SYNTH-040` ("let users subscribe and unlock premium guidance"); `gap_statement`: "MVP needs paid subscription + entitlement; no in-house billing exists." (P1 ✔)
- `options`: `{build: in-house StoreKit + entitlement service}`, `{buy/integrate: a mature subscription-infrastructure vendor, class = "billing SDK"}` (P2 ✔; vendor is a *class*, flagged as needing a real named candidate from TASK-038 before contracting).

**Scores (synthetic, each would carry a `score_basis`):**

| Dim | Score | Reading |
|---|---|---|
| DIF | 1 | Billing differentiates nothing (`prd.md` §10). |
| CPX | 4 | Receipt validation, proration, grace periods, store-policy edge cases are famously hard to build well. |
| MNT | 5 | Tracks App Store policy + tax/compliance churn relentlessly. |
| OWN | 2 | Entitlement state is low-sensitivity; **no special-category health data** flows through billing. |
| SEC | 4 | Payment-adjacent; high bar, but stores handle card data — floor is meetable by a mature vendor. |
| REG | 2 | Ordinary consumer-billing/GDPR; no medical claim. |
| CST | 5 | Building + maintaining is far costlier than a mature vendor over the horizon (figures in `cost_basis`, labelled estimate). |
| LOCK | 2 | Standards-ish; entitlement state is exportable; moderate switching cost. |

**Gates:** G1 (REG 2) → no forced Defer. G2 (OWN 2, no health data) → Buy **not** forbidden. G3 → both options can meet the floor. All `pass`.

**Indices (§5.2):**
- V = (0.50×1 + 0.30×2 + 0.20×2) / 1.0 = (0.5 + 0.6 + 0.4) = **1.5** → LOW
- C = (0.35×4 + 0.30×5 + 0.25×5 + 0.10×4) / 1.0 = (1.4 + 1.5 + 1.25 + 0.4) = **4.55** → HIGH

**Quadrant (§5.3):** Own-It Value LOW + Build-Cost HIGH → **Buy / Integrate.**
**Modifiers (§5.4):** LOCK = 2 (< 4) → no upgrade; raw **Buy/Integrate** stands, *conditioned on* identifying a real named vendor in TASK-038 (F-7 guard: vendor capability is `vendor_stated_unverified` until an `EVD` confirms). SEC steer noted (mature vendor clears the payment bar). 
**Verdict:** **Integrate** a mature subscription-infrastructure vendor behind a thin internal entitlement abstraction — consistent with `prd.md` §10 ("subscription infrastructure if relevant"; "Do not recreate a mature billing … platform"). Written to `DEC-SYNTH-040`; revisit trigger n/a (not a Defer). This is the *expected* commodity-offload result and demonstrates the matrix reproduces the PRD's own §10 guidance from first principles.

### 8.2 Contrast row — `BBI-SYNTH-002`, the opposite corner (synthetic)

`BBI-SYNTH-002` — **the adaptive habit/recovery engine** (`CAP-SYNTH-001`; `gap_statement`: "HerRays' differentiated behavior-change engine — flexible consistency, cumulative effort, recovery-after-miss — has no off-the-shelf equivalent." P1 ✔). Options: `{build: in-house adaptive engine}`, `{buy/integrate: a generic habit-tracking SDK, class = "habit SDK"}` — the generic SDK cannot express HerRays' progress semantics, so it is a weak candidate retained only for cost comparison (P2 ✔).

**Scores (synthetic; all eight printed so both indices are reproducible — each would carry a `score_basis`):**

| Dim | Score | Reading |
|---|---|---|
| DIF | 5 | Core IP — the habit/action engine and progress semantics (`prd.md` §10). |
| CPX | 3 | Moderate — well-understood behavior-change patterns; a focused build. |
| MNT | 3 | Moderate — periodic tuning of the adaptation logic; predictable. |
| OWN | 4 | Behavioral + health-adjacent data stays in-house; Integrate-behind-boundary preferred to raw Buy. |
| SEC | 3 | Moderate — standard PII handling; floor (G3) readily met by the in-house build. |
| REG | 3 | Ordinary personal-data processing / standard DPIA; **no** medical claim or device function (those sit in the separate health-intelligence interface, not this engine), so G1 does not fire. Privacy (R15) review noted. |
| CST | 2 | Building the differentiated engine is cheaper than buying and heavily adapting a generic SDK (figures in `cost_basis`, labelled estimate). |
| LOCK | 4 | High if rented — but building removes the dependency; here LOCK reinforces owning it. |

**Gates:** G1 (REG 3 < 4) → no forced Defer, R15 review noted. G2 (OWN 4, not 5) → Buy not forbidden, Integrate-behind-boundary preferred. G3 (SEC 3) → floor met by the in-house build. All eight dimensions scored (no gate dimension `unknown`), so §3.4-bis does **not** route to Defer. All `pass`.

**Indices (§5.2):**
- V = (0.50×5 + 0.30×4 + 0.20×4) / 1.0 = (2.5 + 1.2 + 0.8) = **4.5** → HIGH
- C = (0.35×3 + 0.30×3 + 0.25×2 + 0.10×3) / 1.0 = (1.05 + 0.9 + 0.5 + 0.3) = **2.75 → 2.8** (one decimal, §5.2) → LOW

**Quadrant (§5.3):** Own-It Value HIGH + Build-Cost LOW → **Build.**
**Modifiers (§5.4):** the LOCK ≥ 4 modifier applies only to a provisional **Buy**; the provisional verdict here is **Build**, so high LOCK simply reinforces owning the engine rather than triggering an upgrade. No gate residue.
**Verdict:** **Build** the adaptive habit/recovery engine in-house — the `prd.md` §10 "build proprietary" crown-jewel case. Written to `DEC-SYNTH-001`; revisit trigger n/a (not a Defer). Together with §8.1 this demonstrates the model separates the "crown-jewel engine" (**Build**) from "commodity billing" (**Integrate**) — the two verdicts `prd.md` §10 explicitly assigns opposite destinations.

---

## 9. Dependencies, open unknowns, and change log

### 9.1 Dependencies
- **Upstream (inputs this matrix consumes):** TASK-030 `CAP` records / TASK-041 `OPP` (the capability being sourced); TASK-039 iOS feasibility inputs; TASK-040 privacy/clinical boundary checklist (fires G1); TASK-015 commercial-estimate provenance (labels `cost_basis`); TASK-004 grades; TASK-005 `EVD` (confirms vendor claims).
- **Downstream (consumers of this matrix's output):** TASK-038 phased tool-purchasing sheet (applies this matrix per named tool); TASK-035 decision form (attaches the sourcing verdict as technical basis); TASK-009 `DEC` register (stores the verdict); TASK-008 `GAP` (opened on any Defer-pending-input); the eventual MVP build/architecture plan (`prd.md` §13 Prompt 11).
- **Scope fences (not duplicated here):** `↔ TASK-009` record lifecycle; `↔ TASK-034` capability value scorecard; `↔ TASK-033` capability safety gate; `→ TASK-040` the privacy/clinical checklist content; `→ TASK-039` the iOS integration inventory; `→ TASK-038` the specific tool list and buy/defer timing.

### 9.2 Open unknowns (explicitly unresolved, not invented)
- Real named Buy/Integrate candidates for any capability — supplied by TASK-038/039, not assumed here.
- Actual cost figures, vendor DPA/residency terms, and store-policy specifics — all `unknown` until sourced; the matrix refuses to score them from memory.
- The weight (§5.1) and threshold (§5.2) defaults are a **proposed heuristic**, not a validated instrument (`prd.md` §9); they require Program-Director/WS05 confirmation and may be re-tuned per capability class.
- Whether any HerRays capability crosses the software-as-a-medical-device boundary — a live regulatory question owned by R14/R15 via TASK-040; this matrix only routes such rows to Defer-pending-review.

### 9.3 Change log
| Version | Date | Change | Author role |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial matrix: eight dimensions with 1–5 anchors and scoring guidance; three non-compensable gates; two-index quadrant routing; lock-in modifier; `BBI` record dictionary; forbidden-value catalogue; two synthetic worked rows. Proposed, not yet applied. | R06 (iOS/backend architect) |
| 0.2 | 2026-11-23 | Review fix (§8.2 only): corrected the contrast row's `V` from "≈ 4.6" to **4.5** (0.50×5 + 0.30×4 + 0.20×4 = 4.5 exactly); printed all eight dimension scores (added SEC 3, REG 3) so gates demonstrably `pass` and `C` recomputes transparently to 2.75 → 2.8, removing the §3.4-bis self-contradiction (a Build verdict can no longer be emitted while gate dimensions are unstated). All §8 arithmetic re-verified against §5.1 weights. No change to §§0–7. | R06 (iOS/backend architect) |

---

**No-fabrication statement.** This document defines *how* a build/buy/integrate/defer decision is evaluated and gated. It evaluates **no real capability**, names **no real vendor**, and asserts **no** cost figure, vendor capability, retention/CAC/LTV, or regulatory determination as fact. The sole worked examples (§8) are labelled ILLUSTRATIVE (synthetic) end-to-end on fictitious `*-SYNTH-*` ids, with every input flagged as placeholder. All weights and thresholds are labelled proposed heuristics, not validated instruments. Unknown inputs are held at the literal token `unknown` and excluded from scoring; gate dimensions left unknown force Defer rather than a guessed verdict.
