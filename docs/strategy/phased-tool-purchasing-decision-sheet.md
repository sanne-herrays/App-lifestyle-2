# Phased Tool-Purchasing Decision Sheet

**Deliverable:** TASK-038 · **Workstream:** Technology & Economics (WS05, `prd.md` §2 / §6 / §10 / §13 Prompt 05)
**Version:** 0.1 · **Status:** Proposed — purchasing rules and per-tool triggers defined; **no tool purchased, no price asserted, no subscription committed**
**Owner role:** Product analyst / growth specialist (R09) as purchasing-decision owner for research/analytics tooling; iOS/backend architect (R06) co-owner for MVP infrastructure (analytics, RevenueCat); Program Director (governance) holds the budget-preservation gate.
**Mandatory reviewers for gated rows:** Privacy/regulatory reviewer (R15) for **any** tool that will hold personal, interview, review, behavioral, or health-adjacent data (Dovetail, AppFollow, analytics, Maze participant data); Clinical reviewer (R14) where health-adjacent data is involved.
**Source basis:** `prd.md` §10 Build vs buy and purchasing gates (the stage/tool/purchase-rule table and its caveat paragraph — "Appfigures/Sensor Tower estimates are not actual competitor analytics"; "Mobbin and Page Flows may not cover niche apps or current flows; verify coverage before paying"; "RevenueCat is conditional on in-app subscription architecture and App Store rules"; "Avoid buying multiple analytics platforms"; "Preserve budget for real user testing, specialist review and clinical/regulatory work"), §4 ("Avoid buying multiple repository tools at the outset"), §6 Technology/economics, §9 ("Clinical safety, privacy and accessibility are mandatory gates, not compensable weighted scores"), §11 ("Polished unsupported reports do not pass"), §13 Prompt 05 ("Do not recommend a purchase without an explicit capability gap"), §14 ("A deliverable is **not complete** if its claims lack traceable sources").

---

## 0. What this document is (and is not)

This is the **phased purchasing control sheet** for the eight tool categories the program will be tempted to buy during the 12-week cycle: **Figma (paid tier), Mobbin, Appfigures, AppFollow, Dovetail, Maze, product analytics (Amplitude *or* Mixpanel), and RevenueCat.** For each, it fixes four decision fields the acceptance criteria require — a **purchase trigger**, a **free/existing alternative to exhaust first**, a **cost-verification rule**, and a **buy / defer decision with a default** — and binds them to the PRD's phased timing and non-compensable budget gate.

It is a **gate and a sheet**, not a shopping list. Its default answer for every tool is **Defer**; a tool moves to **Buy** only when its named trigger fires, its alternative has been shown insufficient, its *current* cost has been verified from the vendor's own pricing at purchase time, and (where data is involved) privacy/clinical review has signed off.

| This document **owns** | This document **does not own** (and must not duplicate) |
|---|---|
| The per-tool purchase trigger, alternative, cost-verification rule and buy/defer default for the eight named tools (§4). | The **generic build/buy/integrate/defer evaluation instrument** (eight dimensions, gates, two-index routing) — `↔ TASK-037` (`build-buy-integrate-defer-matrix.md`). This sheet *applies* that matrix per tool; it does not restate the scoring model. |
| The phased purchasing gate and default-defer rule (§3). | The **iOS capability & integration inventory** (HealthKit, widgets, Live Activities, notifications, haptics, on-device processing, sync) — `→ TASK-039`. That inventory says which native capabilities exist; this sheet decides which *paid tools* to acquire around them. |
| The cost-verification discipline that forbids asserting any price from memory or third-party estimate (§5.1). | The **privacy & clinical boundary checklist** (data minimization, consent, access control, medical-claim limits, regulatory triggers) — `→ TASK-040`. This sheet's data-handling gate (§3.3) *calls* that checklist for any tool holding PII; it does not define the checklist. |
| The `TOOL` purchase-decision record and forbidden-value catalogue (§6, §7). | The **commercial-estimates evidence template** (how download/revenue estimates are recorded and bounded) — `↔ TASK-015`. Appfigures estimates captured *through* this sheet are stored under TASK-015's provenance rules; this sheet only governs whether to buy the tool. |
| The anti-overlap and budget-preservation rules (§5). | The **decision/experiment registers** (`DEC`/`EXP`) — `↔ TASK-009`. A buy/defer verdict is written into a `DEC`; this sheet produces the verdict, not the register. |

Scope discipline, per the workflow rules: this is a **standalone deliverable**. It defines *how and when* the eight named tools are bought or deferred. It records **no actual purchase**, commits **no budget**, and asserts **no price, vendor metric, coverage claim, retention/CAC/LTV, or clinical determination** as fact. Every cost figure in this document is the literal token `verify-at-purchase` or `unknown`.

---

## 1. Design intent — buy late, buy narrow, buy verified

### 1.1 Three principles the PRD §10 encodes, made operational

1. **Default Defer; a purchase needs an explicit, proven gap.** `prd.md` §13 Prompt 05 is categorical: "Do not recommend a purchase without an explicit capability gap." The default state of every row in §4 is therefore **Defer**, and the burden of proof is on *buying*, not on waiting. A tool is not bought because it is standard, impressive, or already in someone's workflow; it is bought because a named task is blocked without it and the free path has been tried.
2. **Buy as late as the work allows.** `prd.md` §10 ties each tool to a *phase* (Days 1–14 free-only; Mobbin/Appfigures Weeks 2–3; AppFollow/Dovetail Weeks 3–5; Figma paid Weeks 6–9; Maze Weeks 9–12; analytics/RevenueCat at MVP). Buying a Weeks-9 tool in Week 2 burns subscription time against work that has not started. Each §4 row carries an **earliest sensible phase**; buying earlier requires a documented reason.
3. **Buy narrow; protect the irreplaceable budget.** `prd.md` §10 closes with the priority rule: "Preserve budget for real user testing, specialist review and clinical/regulatory work." Tooling competes with *participant incentives, clinical review hours, and regulatory work* — which cannot be substituted. §5.3 makes this a hard gate: a discretionary tool purchase that would encroach on reserved participant/clinical budget is **blocked**, not traded off.

### 1.2 Why "Defer" here is a decision, not drift

Mirroring TASK-037 §1.1, **Defer is an owned decision with a trigger and a revisit date**, not indefinite silence. Every deferred tool records the *condition* that would move it to Buy (e.g. "review volume for TASK-013 coding exceeds ~N manually sampled reviews/app") and the *owner* who watches for it. A tool with no revisit trigger is a forbidden value (§7, F-5), because "we'll decide later" with no condition is how overlapping subscriptions accumulate — the exact failure §10 warns against ("avoid overlapping subscriptions").

### 1.3 Relationship to the TASK-037 matrix

Every tool in §4 is, in TASK-037's terms, a **Buy or Integrate** candidate for a *commodity* capability (DIF low: a design tool, a pattern library, a review aggregator differentiate nothing — `prd.md` §10). This sheet does **not** re-run the eight-dimension scoring for each; the sourcing verdict for "research/analytics tooling" is already **Buy/Integrate-selectively** per §10. What this sheet adds is the *timing and threshold* question the matrix explicitly delegates to it (TASK-037 §0: "That sheet consumes this matrix per tool; this matrix is tool-agnostic"): **given that we'd buy rather than build, do we buy *this tool, now*, or defer?**

---

## 2. The four decision fields (field dictionary)

Each tool in §4 is specified against exactly the four fields the acceptance criteria name, plus the governance metadata needed to make the row auditable.

| Field | Req | Definition and rule |
|---|---|---|
| **`trigger`** | M | The **specific, observable condition** that justifies buying — a named task that is blocked or materially degraded without the tool, expressed as a threshold where possible (volume, phase, coverage). Must satisfy Prompt 05 ("explicit capability gap"). A trigger phrased as "would be nice / is standard" is invalid (§7 F-1). |
| **`alternative`** | M | The **free, existing, or already-owned path** that must be attempted and shown insufficient *before* the trigger is accepted — default-first per `prd.md` §10 ("Existing HerRays OS/Notion, spreadsheets, App Store, free Figma") and §4 ("Avoid buying multiple repository tools at the outset"). The row records what the alternative is and the observation that it fell short. |
| **`cost_verification`** | M | **How the actual cost will be confirmed at purchase time** — always from the vendor's own current public pricing (or a direct quote), captured with a date and plan/seat/volume basis, labelled `quote` or `published-price`. **No price is asserted in this document** (§5.1); the field value here is the *method*, and the figure is `verify-at-purchase`. Third-party or remembered figures are forbidden (§7 F-3). |
| **`decision`** | M | The current **buy / defer** verdict with its **default** (Defer), the **earliest sensible phase**, and — for every Defer — a **`revisit_trigger`** (condition + owner). A Buy additionally records the data-handling gate outcome (§3.3) and the `DEC` id it is written into. |
| `owner_role` | M | Exactly one accountable role (R09 research tooling / R06 MVP infra). A role, not a person. |
| `data_handling` | C | **Mandatory for any tool that will hold personal, interview, review, behavioral or health-adjacent data.** Records the §3.3 gate: what data enters the tool, the DPA/residency/deletion basis, and R15 (+R14 if health) sign-off. Absent only for tools that hold *no* such data (e.g. Mobbin reference browsing). |
| `overlap_check` | M | Confirmation the tool does not duplicate a capability already bought (§5.2) — especially the "one analytics platform," "one research repository" rules (`prd.md` §4, §10). |

---

## 3. The phased purchasing gate — run before any Buy

A Buy verdict is valid only if it clears three gates **in order**. Any gate unmet ⇒ the verdict is **Defer (pending …)**, not a conditional buy.

### 3.1 Gate P — proven gap (from Prompt 05)
The `trigger` is a named, blocked task with a threshold, **and** the `alternative` has been attempted and recorded as insufficient. "Standard practice" or "the team already uses it" does not clear Gate P. Unmet ⇒ **Defer (pending gap)**.

### 3.2 Gate T — phase/timing
The current program week is at or past the tool's **earliest sensible phase** (§4 per-tool), **or** a documented reason justifies early purchase (e.g. a studio genuinely starting prototyping early). Buying a Weeks-9 tool in Week 2 without such a reason is a §7 failure (F-2). Unmet ⇒ **Defer (pending phase)**.

### 3.3 Gate D — data handling (non-compensable, from `prd.md` §9)
**Any** tool that will ingest personal, interview, review-text, behavioral, or health-adjacent data must pass the TASK-040 privacy/clinical checklist **before** data enters it: lawful basis, data minimization, DPA with residency/deletion/no-secondary-use, access control, and R15 sign-off (R14 additionally where health-adjacent). This gate is **non-compensable** — a low price or strong feature set never releases it (`prd.md` §9). Unmet ⇒ **Defer (pending privacy review)**. (Applies to Dovetail, AppFollow review text, analytics, and Maze participant data; does **not** apply to Mobbin/Appfigures *public* data browsing or Figma files containing no participant PII.)

### 3.4 Budget-preservation gate (governance, from `prd.md` §10)
Independently, Program Director confirms the purchase does **not** draw down budget reserved for participant recruitment/incentives, specialist review, or clinical/regulatory work (§5.3). This gate can block an otherwise-justified tool if the money is needed for the irreplaceable work.

**Gate output:** a short record per tool — `pass | defer_pending_gap | defer_pending_phase | defer_pending_privacy | blocked_budget` — with the triggering gate and the resolving owner. Only `pass` proceeds to a Buy.

---

## 4. The eight tool decision sheets

> **Reading note.** Every `cost_verification` value is a *method*; the figure itself is `verify-at-purchase` and is deliberately **not stated** (§5.1). Every default `decision` is **Defer** with a revisit trigger. Phases cite the `prd.md` §10 stage table.

### 4.1 Figma — paid tier
*Category:* collaborative interface design & prototyping. *Role in cycle:* studio design + wireframes (TASK-043–047), finalist wireframes (`prd.md` §9/§13 Prompt 11).

- **`trigger`** — Collaboration or prototyping needs **exceed the free tier's limits** (editor-seat count across the six concept studios, file/version limits, Dev Mode, or interactive-prototype features the validation plan needs). Concretely: more simultaneous editors than the free plan allows, *or* a prototyping capability the free tier lacks that TASK-048 testing requires.
- **`alternative`** — **Free Figma** (the PRD explicitly seeds "free Figma" at Days 1–14) for early single-/few-editor work; existing exported artifacts; an open-source editor (e.g. Penpot) if only basic editing is needed. The low-fi wireframe spec (TASK-045) is expressible in the free tier.
- **`cost_verification`** — Confirm **seat count and seat *type*** (editor vs. viewer/collaborator — only editors are typically billed), the current per-editor price and billing period from Figma's **current published pricing page** at purchase, and whether an annual vs. monthly basis fits a 12-week cycle (avoid annual lock-in for a time-boxed program). Record as `published-price` + capture date. **Figure:** `verify-at-purchase`.
- **`decision`** — **Defer** (default). *Earliest sensible phase:* **Weeks 6–9** (`prd.md` §10: "Upgrade only when collaboration/prototyping exceeds free tier"). *Revisit trigger:* studios reach multi-editor collaboration beyond the free seat limit, owned by R09/design lead. *Data handling:* n/a unless a file embeds participant PII (then Gate D). *Buy basis if triggered:* seat-count-minimal upgrade, monthly.

### 4.2 Mobbin — UX pattern reference library
*Category:* curated screenshots/flows of shipped apps. *Role:* teardown reference (WS02), pattern library (`prd.md` §13 Prompt 02).

- **`trigger`** — The teardown needs **reference flows that first-party app access + own screen capture (TASK-017) cannot efficiently supply** — *and* Mobbin **actually covers the target apps and current versions**. Both halves are required.
- **`alternative`** — **Direct app access + own annotated screen capture** per TASK-017 (the primary, copyright-respecting evidence path); **Page Flows** as an equivalent library; free Mobbin browsing to assess coverage.
- **`cost_verification`** — **Verify coverage *before* paying** (`prd.md` §10: "Mobbin and Page Flows may not cover niche apps or current flows; verify coverage before paying") — specifically that the five core apps (Routinery, Fabulous, (Not Boring) Habits, Habitify, Griply) and their current versions are present. Then confirm current subscription price and period from Mobbin's **current pricing page**; prefer a **single month/trial**. Record `published-price` + capture date; **figure:** `verify-at-purchase`.
- **`decision`** — **Defer** (default). *Earliest sensible phase:* **Weeks 2–3** (`prd.md` §10). *Revisit trigger:* coverage confirmed **and** own-capture shown insufficient, owned by senior UX lead (R03). *Data handling:* n/a (public reference content, not participant data). *Buy basis if triggered:* **one month / trial only**, "after confirming coverage" (`prd.md` §10). **Caution:** Mobbin screenshots are *secondary* material — per `prd.md` §13 Prompt 02, distinguish them from direct observations; they inform the pattern library, they are not teardown evidence of live behavior.

### 4.3 Appfigures — app-store intelligence & estimates
*Category:* ASO metadata, rankings, and third-party download/revenue **estimates**. *Role:* market landscape (WS01), commercial estimates (`↔ TASK-015`).

- **`trigger`** — A market-sizing, ranking-history, or ASO-metadata gap that **free App Store browsing + App Store Connect (for HerRays' own app) cannot fill**, and the gap blocks a named WS01 deliverable (positioning map / pricing landscape).
- **`alternative`** — **Free App Store** listings/metadata; **App Store Connect** for HerRays' own metrics; manual ranking observation. For competitor *actuals*, there is no legitimate free source — and none is needed, because estimates are not actuals (below).
- **`cost_verification`** — Confirm which **plan tier** includes the specific data needed (estimates vs. ASO vs. review access are often separate add-ons) and its current price/period from Appfigures' **current pricing page**; prefer a **single month**. Record `published-price` + capture date; **figure:** `verify-at-purchase`.
- **`decision`** — **Defer** (default). *Earliest sensible phase:* **Weeks 2–3** (`prd.md` §10). *Revisit trigger:* a WS01 deliverable is blocked on data unavailable free, owned by product/market lead + growth (R09). *Data handling:* public data; Gate D n/a. *Buy basis if triggered:* **trial/one month after confirming coverage.** **Non-negotiable caveat (`prd.md` §10):** "Appfigures/Sensor Tower estimates are **not** actual competitor analytics." Any estimate captured through this tool is stored under TASK-015 provenance, labelled `estimate` with uncertainty, and **may never be converted into competitor retention, CAC or LTV** (`prd.md` §4; TASK-037 F-10).

### 4.4 AppFollow — review aggregation & management
*Category:* cross-store review collection/tagging. *Role:* review sampling & coding (TASK-013/014).

- **`trigger`** — The **review volume required for the coding protocol (TASK-013) exceeds what manual App Store sampling can reasonably collect** (e.g. the stratified sample across ratings/recency/versions for all core apps is impractical to pull by hand).
- **`alternative`** — **Manual App Store review sampling** following the TASK-013 protocol (stratification, dedup, sample size) — adequate for modest volumes; any AppFollow free tier for scoping.
- **`cost_verification`** — Confirm the **review-volume / app-count limits per tier** match the sampling plan, and the current price/period from AppFollow's **current pricing page**. Record `published-price` + capture date; **figure:** `verify-at-purchase`.
- **`decision`** — **Defer** (default; `prd.md` §10: "Defer unless review/interview volume justifies it"). *Earliest sensible phase:* **Weeks 3–5**. *Revisit trigger:* the TASK-013 sample is impractical manually, owned by R09/ASO specialist. *Data handling:* **Gate D applies** — public review *text* is still user-authored content; confirm terms of use and that no quoting exceeds legal limits (`prd.md` §3); R15 notes the handling. *Buy basis if triggered:* one month, scoped to the sampling window.

### 4.5 Dovetail — qualitative research repository & analysis
*Category:* interview/diary transcript storage, tagging, synthesis. *Role:* user discovery synthesis (TASK-026–029).

- **`trigger`** — Interview + diary **volume and synthesis complexity exceed what the existing HerRays OS/Notion + spreadsheets can support** for coding/tagging (TASK-029 synthesis). Per `prd.md` §4, repository tools are *not* bought "at the outset."
- **`alternative`** — **Existing HerRays OS / Notion + spreadsheets** (the PRD's designated source of truth) for transcripts, tags and synthesis; this is the default and is sufficient for small-N qualitative work.
- **`cost_verification`** — Confirm per-seat price/period from Dovetail's **current pricing page**, **and** — critically — the **data-residency, DPA, deletion and no-secondary-use terms**, because interview data about midlife women's health is **sensitive personal data**. Record `published-price` + capture date; **figure:** `verify-at-purchase`.
- **`decision`** — **Defer** (default; `prd.md` §10 "Defer unless … interview volume justifies it"; §4 "Avoid buying multiple repository tools at the outset"). *Earliest sensible phase:* **Weeks 3–5**. *Revisit trigger:* interview/diary volume exceeds Notion-based coding capacity, owned by UX researcher (R07). *Data handling:* **Gate D is mandatory and blocking** — special-category-adjacent PII must not enter Dovetail until TASK-040 checklist passes and **R15 (privacy) + R14 (clinical) sign off** (DPA, residency, deletion, consent scope per TASK-026). This is the highest-risk tool on the sheet.

### 4.6 Maze — unmoderated usability testing
*Category:* remote unmoderated prototype testing & metrics. *Role:* concept validation (TASK-048, `prd.md` §9/§13 Prompt 10).

- **`trigger`** — The **validation test plan genuinely needs unmoderated remote testing at a scale** moderated/in-person sessions cannot reach, **and** the tool measurably improves that plan (`prd.md` §10: "Only if it improves an actual test plan").
- **`alternative`** — **Moderated** usability sessions (in person / video) with neutral scripts (TASK-048); a clickable Figma prototype + manual observation. Moderated testing often yields richer behavioral observation for small N and avoids a tool purchase entirely.
- **`cost_verification`** — Confirm current price/period and whether **participant sourcing is included or billed separately** (it usually is), from Maze's **current pricing page**. Record `published-price` + capture date; **figure:** `verify-at-purchase`.
- **`decision`** — **Defer** (default). *Earliest sensible phase:* **Weeks 9–12**. *Revisit trigger:* a validated test plan requires scaled unmoderated runs, owned by independent research/product lead (R07/validation owner). *Data handling:* **Gate D applies** to participant responses/recordings (consent, minimization, deletion; R15). **Priority rule (`prd.md` §10):** "prioritize participant recruitment/incentives" — if budget is contested, **recruitment and incentives win over the Maze subscription** (§5.3 / Gate 3.4).

### 4.7 Product analytics — Amplitude **or** Mixpanel (choose one)
*Category:* first-party product/event analytics. *Role:* MVP measurement (`prd.md` §13 Prompt 05/11).

- **`trigger`** — **MVP development** begins and needs event analytics to operationalize the measurement plan (TASK-001 success metrics). Not before an MVP exists — there is nothing to instrument during research.
- **`alternative`** — Minimal **first-party event logging** to a controlled store for the smallest metric set; defer a full analytics platform until event needs are real. Do **not** run exploratory analytics on research-phase data.
- **`cost_verification`** — Confirm current pricing and **event-volume tiers** (both have free tiers with volume caps) and the **data-minimization / consent / data-processing terms** from the **chosen vendor's current pricing page**. Record `published-price` + capture date; **figure:** `verify-at-purchase`.
- **`decision`** — **Defer** (default) **and choose exactly one** platform. *Earliest sensible phase:* **MVP development**. *Revisit trigger:* MVP instrumentation required, owned by R06 (architect) + R09 (growth). *Decision rule (`prd.md` §10):* "Choose at implementation time based on **data minimization, consent and billing model**"; **"Avoid buying multiple analytics platforms"** (§5.2 overlap gate enforces one). *Data handling:* **Gate D mandatory** — behavioral/health-adjacent data; consent + minimization + R15 (R14 for any health signal) before instrumentation. *Sibling note:* **Crashlytics** (crash reporting, typically free via Firebase) is a separate, generally-free MVP tool named in `prd.md` §10; it is not one of the eight priced decisions but shares this stage and the same data-handling gate.

### 4.8 RevenueCat — subscription infrastructure & entitlements
*Category:* in-app subscription/entitlement management across stores. *Role:* MVP monetization (`prd.md` §10 "subscription infrastructure if relevant").

- **`trigger`** — The MVP **actually includes an in-app subscription architecture** (`prd.md` §10: RevenueCat is **conditional** on this). If monetization is deferred or non-subscription, the trigger never fires.
- **`alternative`** — Direct **StoreKit** / native entitlement handling for a very simple model; **not** an in-house billing platform (`prd.md` §10: "Do not recreate a mature billing … platform without a compelling reason" — building billing is the wrong call, which is exactly why this is a Buy/Integrate, consistent with TASK-037 §8.1's synthetic billing example).
- **`cost_verification`** — Confirm current pricing model (typically free below a monthly-tracked-revenue threshold, then a percentage/fee) and **App Store rules compliance** from RevenueCat's **current pricing page / terms**. Record `published-price` + capture date; **figure:** `verify-at-purchase`.
- **`decision`** — **Defer** (default) **and conditional**. *Earliest sensible phase:* **MVP development.** *Revisit trigger:* MVP monetization is confirmed as **in-app subscription**, owned by R06 + R09. *Decision rule (`prd.md` §10):* "RevenueCat is conditional on in-app subscription architecture and App Store rules." *Data handling:* entitlement state is low-sensitivity (no health data through billing — cf. TASK-037 §8.1 OWN=2); standard processor terms; R15 notes, no clinical gate.

---

## 5. Cross-cutting rules

### 5.1 Cost-verification discipline — no price asserted, ever
This document **states no price**. Every `cost_verification` field is a *method*: at purchase time, read the vendor's **own current public pricing page** (or obtain a direct quote), record the figure with a **capture date** and the **basis** (seats / volume tier / period), and label it `published-price` or `quote`. **Prohibited:** quoting a price from memory, from this document, from a third-party "pricing roundup," or from a stale capture (`prd.md` §14 traceable sources; §10 "estimates are not actual analytics"). A purchase justified by an unverified or fabricated figure is a forbidden value (§7 F-3).

### 5.2 Anti-overlap — one of each class
`prd.md` §10 ("avoid overlapping subscriptions"; "Avoid buying multiple analytics platforms") and §4 ("Avoid buying multiple repository tools at the outset") are enforced by the **`overlap_check`** field (§2): before any Buy, confirm no already-purchased tool covers the same capability. Hard constraints: **one** analytics platform (Amplitude **xor** Mixpanel), **one** research repository (HerRays OS/Notion by default; Dovetail only if it *replaces*, not supplements), and Mobbin **xor** Page Flows unless each covers distinct, verified gaps. Buying a second tool in a class without retiring the first is a §7 failure (F-4).

### 5.3 Budget preservation — irreplaceable work has priority
Reserved budget for **participant recruitment/incentives, specialist review, and clinical/regulatory work** is **ring-fenced** (`prd.md` §10). Discretionary tool purchases draw only from the tooling allocation; a tool that would encroach on the reserved pool is **blocked** (Gate 3.4), even if its own gates pass. The canonical case is Maze (§4.6): if the choice is "a usability-testing subscription" vs. "pay real participants," the participants win.

### 5.4 Trial-first, time-boxed
Where the PRD says "trial/one month only" (Mobbin, Appfigures), the Buy is scoped to a **single billing period aligned to the work window**, with a diary note to cancel at window end. The program is a time-boxed 12-week cycle (`prd.md` §12); **annual commitments are disfavored** and require a documented multi-cycle justification.

---

## 6. The `TOOL` purchase-decision record — field dictionary

One tool decision = one `TOOL-NNN` record, written into a `DEC` (`↔ TASK-009`); it does not replace the register.

| # | Field | Req | Rule |
|---|---|---|---|
| I1 | `tool_id` | M | `TOOL-NNN`, immutable. One tool-class decision per record. |
| I2 | `tool_name` / `class` | M | The tool and its capability class (design / pattern-ref / app-intel / review-agg / research-repo / usability-testing / analytics / subscription-infra). |
| I3 | `owner_role` | M | **Exactly one** accountable role (R09 research tooling / R06 MVP infra). |
| T1 | `trigger` | M | The proven-gap condition (§2); threshold where possible. Empty/vague ⇒ F-1. |
| A1 | `alternative` / `alternative_result` | M | The free/existing path and the recorded observation that it was tried and fell short. |
| C1 | `cost_verification_method` | M | How the current price will be/was confirmed (§5.1). |
| C2 | `cost_figure` | M | Literal `verify-at-purchase` until a dated `published-price`/`quote` is captured; never a remembered/third-party figure (F-3). |
| D1 | `decision` | M | `buy \| defer`, with default **defer**. |
| D2 | `earliest_phase` | M | The `prd.md` §10 stage gating the purchase (Gate T). |
| D3 | `revisit_trigger` | C | **Mandatory for `defer`**: condition + owner (F-5). |
| G1 | `gate_outcomes` | M | Gate P / T / D / budget results (§3): `pass \| defer_pending_* \| blocked_budget`. |
| G2 | `data_handling` | C | **Mandatory for any PII-holding tool**: data entering, DPA/residency/deletion basis, R15 (+R14) sign-off (§3.3). |
| G3 | `overlap_check` | M | Confirmation of no same-class duplicate (§5.2). |
| R1 | `dec_ref` | M | The `DEC-NNN` this verdict is written into. |
| R2 | `trial_scope` | C | For trial-first tools: the single billing window + cancel-by date (§5.4). |
| A2 | `record_version` / `change_log[]` / `status` | M | Append-only; reuses TASK-009 vocabulary; no hard delete. |

---

## 7. Validation — forbidden-value catalogue (automatic review failures)

| # | Forbidden | Why |
|---|---|---|
| F-1 | A Buy whose `trigger` is "standard / nice-to-have / the team uses it," with no blocked task or threshold. | `prd.md` §13 Prompt 05 "Do not recommend a purchase without an explicit capability gap." |
| F-2 | Buying a tool before its `earliest_phase` with no documented reason. | §3.2 Gate T; buying Weeks-9 tools in Week 2 wastes subscription time (`prd.md` §10/§12). |
| F-3 | A purchase justified by a **price asserted from memory, from this document, or from a third-party estimate** rather than a dated vendor `published-price`/`quote`. | §5.1; `prd.md` §14 traceable sources, §10 "estimates are not actual analytics." |
| F-4 | Buying a second tool in a class (analytics, repository, pattern-ref) without retiring the first. | §5.2; `prd.md` §10 "Avoid buying multiple analytics platforms," §4 "Avoid buying multiple repository tools." |
| F-5 | A `defer` with no `revisit_trigger`. | §1.2; indefinite "decide later" accumulates overlapping subscriptions. |
| F-6 | PII (interview, review text, behavioral, participant) entering a tool before the Gate D privacy/clinical sign-off. | §3.3; `prd.md` §9 non-compensable privacy gate; applies to Dovetail, AppFollow, analytics, Maze. |
| F-7 | A discretionary tool purchase that draws down reserved participant/clinical/regulatory budget. | §5.3 / Gate 3.4; `prd.md` §10 "Preserve budget for real user testing, specialist review and clinical/regulatory work." |
| F-8 | Treating an **Appfigures/third-party estimate** as actual competitor analytics, or converting it to retention/CAC/LTV. | `prd.md` §10 "estimates are not actual competitor analytics"; §4 "Never fabricate … retention, CAC, LTV"; TASK-037 F-10. |
| F-9 | Buying Mobbin/Page Flows **without first verifying coverage** of the target apps/versions. | `prd.md` §10 "verify coverage before paying." |
| F-10 | Buying RevenueCat when the MVP has **no in-app subscription architecture**. | `prd.md` §10 "RevenueCat is conditional on in-app subscription architecture and App Store rules." |

---

## 8. Worked example — ILLUSTRATIVE (synthetic), buys nothing and states no price

> **Label:** the two rows below are **synthetic** and exist only to show the sheet *runs*. They commit no purchase, assert no price (every figure is `verify-at-purchase`), and reference fictitious `*-SYNTH-*` ids. They are not HerRays purchasing decisions.

### 8.1 `TOOL-SYNTH-001` — Dovetail, evaluated in Week 2 (expected: **Defer**)
- `class`: research-repository · `owner_role`: R07 (UX researcher).
- `trigger`: "interview volume exceeds Notion coding capacity" — **not yet observed** (interviews not yet run; TASK-026 recruitment unexecuted).
- `alternative`: HerRays OS/Notion + spreadsheets — **not yet shown insufficient** (no interviews coded yet).
- **Gate P:** *unmet* — no proven gap (the blocking condition hasn't occurred). **Gate T:** Week 2 is before the Weeks 3–5 window — *unmet*. **Gate D:** not reached (no Buy). **Budget:** n/a.
- `cost_verification_method`: read Dovetail current per-seat pricing + DPA/residency terms at purchase; `cost_figure`: **`verify-at-purchase`**.
- **`decision`: Defer (pending gap + phase).** `revisit_trigger`: "interview/diary volume exceeds Notion-based coding capacity in Weeks 3–5," owner R07. Written to `DEC-SYNTH-061`. *This is the expected default result and demonstrates the sheet refuses an early, unproven purchase.*

### 8.2 `TOOL-SYNTH-002` — Mobbin, evaluated in Week 2 with coverage confirmed (expected: **Buy, one month**)
- `class`: pattern-reference · `owner_role`: R03 (senior UX lead).
- `trigger`: "teardown needs reference flows own capture can't efficiently supply **and** Mobbin covers the five core apps' current versions" — the coverage half **verified** via free browsing before paying (F-9 satisfied); the capture-insufficiency half recorded from a TASK-017 attempt.
- `alternative`: direct app access + own screen capture (TASK-017) — attempted, recorded as insufficient for breadth of reference flows; Page Flows checked, lower coverage of the target apps.
- **Gate P:** *pass* (proven gap + alternative tried). **Gate T:** Week 2 is within the Weeks 2–3 window — *pass*. **Gate D:** *n/a* — public reference content, no participant PII. **Budget:** *pass* — one-month trial draws tooling allocation only, not reserved participant/clinical budget. **Overlap:** no pattern-ref tool owned (Page Flows not purchased).
- `cost_verification_method`: read Mobbin current subscription price/period at purchase, prefer single month; `cost_figure`: **`verify-at-purchase`**.
- **`decision`: Buy — one month / trial only** (`prd.md` §10 "Trial/one month only after confirming coverage"). `trial_scope`: single billing period aligned to the Weeks 2–3 teardown window, cancel-by at window end. Written to `DEC-SYNTH-062`. *Caution recorded:* Mobbin content is secondary material (`prd.md` §13 Prompt 02), used for the pattern library, not as evidence of live behavior.

Together the two rows show the sheet separating an **unproven early want** (Defer) from a **proven, coverage-verified, time-boxed need** (one-month Buy) — without stating a single price.

---

## 9. Dependencies, open unknowns, and change log

### 9.1 Dependencies
- **Upstream (inputs this sheet consumes):** TASK-037 build/buy/integrate/defer matrix (establishes these are Buy/Integrate commodities); TASK-013/014 review sampling & coding volume (fires AppFollow/Appfigures triggers); TASK-026/027/028 interview & diary volume (fires Dovetail trigger); TASK-040 privacy/clinical checklist (Gate D); TASK-001 measurement plan (fires analytics trigger); TASK-048 validation plan (fires Maze trigger); `prd.md` §10/§12 phase schedule (Gate T).
- **Downstream (consumers of this sheet's output):** TASK-009 `DEC` register (stores each verdict); TASK-015 commercial-estimates template (receives any Appfigures estimate under its provenance rules); the MVP build/architecture plan (`prd.md` §13 Prompt 11) consumes the analytics/RevenueCat decisions.
- **Scope fences (not duplicated here):** `↔ TASK-037` the scoring model; `→ TASK-039` the iOS integration inventory; `→ TASK-040` the privacy/clinical checklist content; `↔ TASK-015` estimate provenance; `↔ TASK-009` record lifecycle.

### 9.2 Open unknowns (explicitly unresolved, not invented)
- **Every tool's actual current price, plan structure, and terms** — `verify-at-purchase` from the vendor's own pricing at the time a trigger fires; this sheet asserts none.
- **Mobbin/Page Flows coverage** of the five core apps' current versions — unknown until browsed and confirmed (F-9).
- **Each data-holding tool's DPA / residency / deletion terms** (Dovetail especially) — unknown until read and reviewed by R15/R14.
- Whether the MVP will include an **in-app subscription architecture** (gates RevenueCat) and which **single analytics platform** fits data-minimization/consent/billing — both live decisions for MVP implementation time, not pre-judged here.
- The **tooling budget allocation** vs. the reserved participant/clinical pool — a Program-Director figure not set in this document.

### 9.3 Change log
| Version | Date | Change | Author role |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial phased purchasing sheet: four decision fields (trigger / alternative / cost-verification / buy-defer) for all eight named tools (Figma, Mobbin, Appfigures, AppFollow, Dovetail, Maze, analytics, RevenueCat); phased gate (P/T/D + budget); cost-verification discipline (no price asserted); anti-overlap and budget-preservation rules; `TOOL` record dictionary; forbidden-value catalogue; two synthetic worked rows. Proposed, nothing purchased. | R09 (product analyst/growth) |

---

**No-fabrication statement.** This document defines *when and how* the eight named tools are bought or deferred. It records **no purchase**, commits **no budget**, and asserts **no price, vendor coverage claim, download/revenue estimate, retention/CAC/LTV, or clinical determination** as fact. Every cost figure is held at the literal token `verify-at-purchase` or `unknown`, to be confirmed only from the vendor's own current pricing at the moment a trigger fires. The default decision for every tool is **Defer** with a named revisit trigger. The two worked rows (§8) are labelled ILLUSTRATIVE (synthetic) end-to-end on fictitious `*-SYNTH-*` ids. All phase timings and priority rules are drawn from `prd.md` §10/§12 and labelled as planning guidance, not completed purchasing actions.
