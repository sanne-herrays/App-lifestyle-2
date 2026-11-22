# HerRays Program Workstream Registry

**Deliverable:** TASK-002 — Create the program workstream registry
**Workstream:** Foundation
**Version:** 0.1 · **Status:** Proposed, not executed
**Owner (accountable role):** Head of Product (acting as Program Director)
**Reviewers:** Senior UX/product designer · Behavioral scientist · iOS engineer · UX researcher · Clinical reviewer · Privacy/regulatory reviewer
**Source basis:** `prd.md` §2 (Program structure), §4 (Evidence infrastructure), §11 (Five quality gates), §12 (Twelve-week schedule), §14 (Handoff templates), §13 (Prompts 00–11)

---

## 0. How to read this document

This is the **single source of truth for what the eight workstreams are, who owns each one, what each must produce, what it depends on, and the gate it must pass to be considered done.** It is a *control artifact*, not a status report.

> **No-fabrication statement.** This registry contains **no research observations, no test results, no completion claims, and no invented metrics.** Every workstream below is recorded at status `not_started`. Timings are **planning estimates copied from `prd.md` §12**, not elapsed or completed work. The only task reflected as having real status is cross-referenced from `tasks.json`; nothing here asserts that any research, interview, teardown, or validation has occurred. Presenting any of these as done without a linked artifact violates `prd.md` §14 ("A deliverable is **not complete** if … hypothetical users/tests are presented as real").

### 0.1 Registry conventions

| Field | Meaning |
|---|---|
| **Workstream ID** | Stable identifier `WS01`–`WS08` from `prd.md` §2. Never renumbered; retired streams keep their ID. |
| **Accountable owner** | Exactly **one** role that signs the gate. Others contribute but do not own. (Single-owner rule, §0.3.) |
| **Contributing roles** | Specialists who supply inputs but are not accountable for the gate decision. |
| **Upstream dependencies** | Workstreams / foundation artifacts whose outputs are **required inputs** before this stream can pass its gate. |
| **Downstream consumers** | Workstreams that require this stream's outputs as inputs. |
| **Primary deliverables** | The named artifacts the stream must produce, each mapped to its evidence database (`prd.md` §4) where applicable. |
| **Completion gate** | The named quality gate (`prd.md` §11) plus the stream-specific exit criteria that must be true for the Program Director to issue *pass*. |
| **Gate verdict** | One of `pass` / `conditional pass` / `fail` issued per `prd.md` §11. Recorded, never assumed. |

### 0.2 Status vocabulary (from `prd.md` §14)

`not_started` → `in_progress` → `review` → `approved` (or `blocked`). A stream enters `review` only when every primary deliverable exists and is source-linked; it reaches `approved` only on a `pass` or `conditional pass` gate verdict from the Program Director.

### 0.3 The single-accountable-owner rule

`prd.md` §2 is explicit: *"Staff can contribute across streams, but each output has one accountable owner."* This registry enforces that each of the eight streams names **exactly one** accountable role. Where the PRD lists a pod or multiple specialists (e.g. six studio leads for WS07), accountability is assigned to **one named coordinating role**, and the plural contributors are recorded under *Contributing roles*. The Program Director role (held by the Head of Product per Prompt 00) is accountable for program-level governance but is **not** counted as the accountable owner of a substantive stream except WS06, where the Head of Product is the PRD-designated lead.

---

## 1. Registry summary (all eight workstreams)

| ID | Workstream | Accountable owner (exactly one) | Completion gate (`prd.md` §11) | Indicative timing (§12) | Status |
|---|---|---|---|---|---|
| WS01 | Market & competitor intelligence | Product / market lead | Gate 1 — Research foundation | Weeks 1–2 | `not_started` |
| WS02 | Capability extraction & UX teardown | Senior UX/product designer | Gate 1 — Research foundation | Weeks 1–4 | `not_started` |
| WS03 | Behavioral science & clinical evidence | Behavioral scientist | Gate 1 — Research foundation | Weeks 1–4 | `not_started` |
| WS04 | User discovery & unmet needs | UX researcher | Gate 2 — Opportunity readiness | Weeks 2–5 | `not_started` |
| WS05 | Technology & economics | iOS/backend architect | Gate 2 — Opportunity readiness | Weeks 3–5 | `not_started` |
| WS06 | Opportunity synthesis & strategy | Head of Product | Gate 2 — Opportunity readiness | Weeks 5–6 | `not_started` |
| WS07 | Independent concept innovation | Concept Program Lead (coordinating six studio leads) | Gate 3 — Concept readiness | Weeks 6–9 | `not_started` |
| WS08 | Validation & product direction | Independent research/product lead | Gate 4 — Validation readiness → Gate 5 — Build readiness | Weeks 9–12 | `not_started` |

**Accountable-owner uniqueness check:** eight streams, eight distinct accountable roles. No stream shares an accountable owner; WS06 is the only stream owned by the Head of Product, consistent with §0.3. ✔

**Gate coverage check:** every `prd.md` §11 gate (1–5) is owned by at least one stream, and no stream passes without a named gate. Gate 1 is jointly required of WS01/WS02/WS03 (research foundation); Gate 2 of WS04/WS05/WS06 (opportunity readiness); Gate 3 of WS07; Gates 4 and 5 of WS08. ✔

---

## 2. Dependency map

Dependencies are directional: an arrow `A → B` means *B requires A's approved outputs as inputs.* No cycles exist; the graph is a directed acyclic flow from evidence to decision.

```
Foundation (TASK-001..009 infrastructure: evidence schema, grades, registries)
        │  (shared standards + databases required by every stream)
        ▼
  ┌───────────── Gate 1: Research Foundation ─────────────┐
  │   WS01 Market/competitor    WS02 Teardown    WS03 Science │
  └───────────────┬───────────────┬──────────────┬──────────┘
                  │               │              │
                  ▼               ▼              ▼
              WS04 User Discovery  (Weeks 2–5)   WS05 Technology/Economics
                  │               (Weeks 3–5) ───┘
                  └───────────────┬──────────────┘
                                  ▼
                    ┌──── Gate 2: Opportunity Readiness ────┐
                    │        WS06 Opportunity Synthesis      │
                    └───────────────┬───────────────────────┘
                                    ▼  (approved Opportunity Atlas — hard stop before studios)
                    ┌──── Gate 3: Concept Readiness ────────┐
                    │  WS07 Six Independent Concept Studios  │
                    └───────────────┬───────────────────────┘
                                    ▼
                    ┌─ Gate 4: Validation Readiness ─┐
                    │  WS08 Validation ──────────────│──▶ Gate 5: Build Readiness
                    └────────────────────────────────┘
```

**Critical-path note.** WS02 and WS03 run long (Weeks 1–4) and feed the Week 3–4 capability-extraction work that WS06 depends on. WS06 is gated behind **all** of WS01–WS05 and is an explicit hard stop (`prd.md` §7: *"Gate approval before concept studios begin"*; Prompt 08: *"Stop for approval before commissioning studios"*). WS07 must not begin substantive concept generation until WS06's Opportunity Atlas is approved.

**Foundation prerequisite (all streams).** Every workstream depends on the Foundation infrastructure artifacts — the evidence schema and record IDs (`prd.md` §4: APP/EVD/JRN/CAP/NEED/PAT/OPP/EXP/DEC), evidence grades A–D, and the registries defined in TASK-001 through TASK-009. A stream cannot pass Gate 1/2 if its claims are not recorded against these shared schemas.

---

## 3. Workstream records

Each record uses the `prd.md` §14 handoff skeleton, pre-populated with the stable facts (owner, inputs, outputs, dependencies, gate) and left at `not_started` for the live fields.

---

### WS01 — Market & competitor intelligence

```yaml
workstream_id: WS01
title: Market & competitor intelligence
accountable_owner: Product / market lead      # exactly one
contributing_roles:
  - Competitive analyst
  - Product analyst / growth specialist
  - ASO / App Store specialist
  - PR / editorial specialist
status: not_started
indicative_timing: Weeks 1–2            # prd.md §12, planning estimate only
upstream_dependencies:
  - Foundation infrastructure: App Registry (APP-001), Evidence Library (EVD-001),
    evidence grades, benchmark app registry (TASK-006), selection rubric (TASK-007),
    review sampling protocol (TASK-013), commercial estimates template (TASK-015)
downstream_consumers:
  - WS02 (which benchmark journeys to tear down)
  - WS06 (competitor gap evidence for opportunity statements)
primary_deliverables:
  - App Registry populated for 15–20 apps, core five first        # APP-001
  - Ten deep competitor dossiers
  - Positioning / monetization comparison
  - Coded user-review dissatisfaction themes (independent agreement on a subset)
  - Dated editorial-recognition source ledger (verified / unverified / out-of-window)
  - Gaps and open-source list
methods:
  - prd.md §5 Phase 1; Prompt 01
constraints:
  - Do not infer private retention / CAC / LTV from reviews or downloads (§3, §4)
  - Third-party download/revenue estimates labelled as estimates, not metrics (§10)
completion_gate: Gate 1 — Research foundation (prd.md §11)
gate_exit_criteria:
  - Benchmark coverage documented with access limitations and unknowns
  - Every populated claim links to an EVD/APP record with source URL + capture date
  - Editorial claims dated, geo-scoped, and marked verified/unverified
reviewer: Program Director
quality_gate: pending
```

---

### WS02 — Capability extraction & UX teardown

```yaml
workstream_id: WS02
title: Capability extraction & UX teardown
accountable_owner: Senior UX/product designer   # exactly one
contributing_roles:
  - Motion / interaction designer
  - Visual / brand designer
  - iOS engineer
  - QA / accessibility specialist
  - Behavioral scientist (capability mechanism input)
status: not_started
indicative_timing: Weeks 1–4
upstream_dependencies:
  - WS01 (benchmark selection and dossiers)
  - Foundation: Journey Library (JRN-001), Capability Library (CAP-001),
    Pattern Library (PAT-001), ten standardized journeys (TASK-016),
    capture/annotation protocol (TASK-017), audit templates (TASK-018..022),
    reconciliation template (TASK-023)
downstream_consumers:
  - WS06 (capability mechanisms and patterns feed opportunities)
  - WS07 (annotated reference patterns — NOT mandatory features)
primary_deliverables:
  - Journey Library across core five apps, ten journeys each        # JRN-001
  - Five detailed teardown dossiers
  - Pattern Library (good/bad patterns, trade-offs, accessibility)  # PAT-001
  - Friction catalogue
  - Capability inventory feeding 30–50 CAP records                  # CAP-001
  - Cross-specialist reconciliation record (disagreements preserved)
methods:
  - prd.md §5 Phase 2 & 3; Prompt 02
constraints:
  - Distinguish direct observation from marketing screenshots / secondary material
  - Preserve specialist disagreements; do not finalize HerRays features
completion_gate: Gate 1 — Research foundation
gate_exit_criteria:
  - Each journey/observation source-linked with device, OS, app version, region
  - Independent audits (behavioral, UX, visual/motion, growth/content, iOS/a11y) reconciled
  - Invention vs. observation clearly separated
reviewer: Program Director
quality_gate: pending
```

---

### WS03 — Behavioral science & clinical evidence

```yaml
workstream_id: WS03
title: Behavioral science & clinical evidence
accountable_owner: Behavioral scientist          # exactly one
contributing_roles:
  - Health psychologist / digital-intervention specialist
  - Clinical reviewer (safety boundaries)
  - Product analyst / growth specialist (measurement linkage)
status: not_started
indicative_timing: Weeks 1–4
upstream_dependencies:
  - Foundation: Evidence Library (EVD-001), evidence grades A–D,
    literature search protocol (TASK-024), evidence extraction table (TASK-025)
downstream_consumers:
  - WS02 (mechanism coding for capability records)
  - WS06 (graded mechanism evidence for opportunities)
  - WS07 / WS08 (behavioral logic and ethical anti-patterns)
primary_deliverables:
  - Cited evidence synthesis (systematic reviews / strong intervention studies prioritized)
  - BCT matrix (BCTTv1) and mechanism map
  - Ethical anti-pattern catalogue (guilt, compulsion, burden, over-tracking)
  - Confidence grades, test hypotheses, and evidence gaps
methods:
  - prd.md §6 Behavioral science; Prompt 03
constraints:
  - Separate engagement / adherence / automaticity / health outcomes (§6)
  - Do not prescribe a final app; grade efficacy, relevance, confidence separately (§4)
completion_gate: Gate 1 — Research foundation
gate_exit_criteria:
  - Every mechanism claim carries population, comparator, duration, effect/uncertainty, transferability note
  - Engagement-vs-outcome distinction explicit; no efficacy implied from popularity
reviewer: Program Director (clinical reviewer co-signs clinical-safety items)
quality_gate: pending
```

---

### WS04 — User discovery & unmet needs

```yaml
workstream_id: WS04
title: User discovery & unmet needs
accountable_owner: UX researcher                 # exactly one
contributing_roles:
  - Behavioral scientist (interview framing)
  - Content strategist / UX writer (neutral-language review)
  - Privacy / regulatory reviewer (consent & data minimization)
status: not_started
indicative_timing: Weeks 2–5
upstream_dependencies:
  - WS03 (behavioral constructs to probe)
  - Foundation: User Needs schema (NEED-001), recruitment/consent pack (TASK-026),
    discovery interview guide (TASK-027), diary study kit (TASK-028),
    user-needs synthesis template (TASK-029)
downstream_consumers:
  - WS06 (primary user evidence is required for opportunity statements)
  - WS07 (real user findings in every studio pack)
  - WS08 (representative participants / segments for validation)
primary_deliverables:
  - Recruitment & sampling plan (20–30 women, purposive), consent protocol
  - Neutral discovery interview guide (executed where participants accessible)
  - 7–14-day diary study (where feasible)
  - Source-linked evidence, journey maps, JTBD, behavioral segments
  - Unmet needs and contradictions                                 # NEED-001
constraints:
  - NEVER invent participants, quotes, or results (§4, §6, Prompt 04)
  - If recruitment unavailable, deliver executable instruments and label study UNEXECUTED
completion_gate: Gate 2 — Opportunity readiness
gate_exit_criteria:
  - Usable primary research exists OR instruments are complete and explicitly marked unexecuted
  - Consent / data-minimization obtained before any primary collection
  - Needs are distinct from feature requests
reviewer: Program Director (privacy reviewer co-signs consent/data handling)
quality_gate: pending
```

---

### WS05 — Technology & economics

```yaml
workstream_id: WS05
title: Technology & economics
accountable_owner: iOS/backend architect         # exactly one
contributing_roles:
  - Backend engineer
  - Product economist
  - Security specialist
  - Health-technology architect
  - Privacy / regulatory reviewer
downstream_consumers:
  - WS06 (feasibility constraints on opportunities)
  - WS07 (technical envelope for concepts)
  - WS08 (architecture and MVP constraints for build readiness)
status: not_started
indicative_timing: Weeks 3–5
upstream_dependencies:
  - WS01/WS02 (which capabilities require technical evaluation)
  - Foundation: build-buy-integrate-defer matrix (TASK-037),
    tool purchasing sheet (TASK-038), iOS capability inventory (TASK-039),
    privacy/clinical boundary checklist (TASK-040)
primary_deliverables:
  - Reference architecture and iOS integration inventory
    (HealthKit, widgets, Live Activities, notifications, haptics, on-device, sync)
  - Build/buy/integrate/defer decisions with complexity, cost, lock-in, data ownership
  - Risk register (privacy/GDPR, clinical boundary, App Store policy)
  - Cost scenarios and minimal tool stack
constraints:
  - No purchase recommended without an explicit capability gap (§10, Prompt 05)
  - Distinguish estimates from verified costs; preserve budget for user testing
completion_gate: Gate 2 — Opportunity readiness
gate_exit_criteria:
  - Each capability has a build/buy/integrate/defer decision with rationale
  - Clinical/regulatory boundary assessment recorded; no unsupported medical-claim path
reviewer: Program Director (privacy reviewer co-signs regulatory items)
quality_gate: pending
```

---

### WS06 — Opportunity synthesis & strategy

```yaml
workstream_id: WS06
title: Opportunity synthesis & strategy
accountable_owner: Head of Product               # exactly one
contributing_roles:
  - Behavioral scientist
  - Service designer
  - UX researcher
status: not_started
indicative_timing: Weeks 5–6
upstream_dependencies:
  - WS01, WS02, WS03, WS04, WS05 (all evidence streams must be reconcilable)
  - Capability decisions: decision/experiment registers (TASK-009),
    capability review board outputs (Prompts 06/07)
  - Foundation: Opportunity Atlas schema (TASK-041), prioritization rubric (TASK-042)
downstream_consumers:
  - WS07 (approved Opportunity Atlas is the mandatory studio input)
primary_deliverables:
  - At least 12 opportunity statements, grouped into 4–6 territories   # OPP-001
  - Each with problem/context, evidence/confidence, competitor gap,
    desired outcome, mechanism, constraints, How-Might-We, validation path
  - Opportunities with AND without clinical integration
constraints:
  - Never jump from evidence directly to concepts (§7)
  - Opportunities must be distinct from feature requests
  - HARD STOP: approval required before studios begin (§7, Prompt 08)
completion_gate: Gate 2 — Opportunity readiness
gate_exit_criteria:
  - ≥12 opportunities, grouped into 4–6 territories, each source-linked
  - Opportunity Atlas explicitly APPROVED by Program Director before WS07 starts
reviewer: Program Director
quality_gate: pending
```

---

### WS07 — Independent concept innovation

```yaml
workstream_id: WS07
title: Independent concept innovation (six isolated studios)
accountable_owner: Concept Program Lead          # exactly one coordinating role
contributing_roles:
  - Studio A lead — Behavior First
  - Studio B lead — Joy First
  - Studio C lead — Invisible App
  - Studio D lead — Health Intelligence
  - Studio E lead — Life Companion
  - Studio F lead — Category Breaker
  - (each studio staffs: product visionary, behavioral scientist,
     senior UX designer, visual/motion designer, iOS architect)
status: not_started
indicative_timing: Weeks 6–9
upstream_dependencies:
  - WS06 APPROVED Opportunity Atlas (mandatory, hard gate)
  - Versioned evidence package: WS02 patterns, WS03 mechanisms, WS04 user findings,
    capability decisions, brand/clinical/privacy/accessibility constraints,
    success measures (TASK-001)
  - Foundation: concept studio briefs (TASK-043), submission template (TASK-044),
    wireframe spec (TASK-045)
downstream_consumers:
  - WS08 (the ~6 shortlisted directions to validate)
primary_deliverables:
  - Per studio: ≥15 divergent ideas, 3 developed concept dossiers
    (promise, interaction model, first-use/ordinary-day/missed-day/long-term
     journeys, mechanisms, inventions, risks, unknowns)
  - Storyboards and low-fidelity editable/clickable prototypes
  - 6 studios × 3 = 18 concept dossiers → ~6 shortlisted directions
  - Evidence/invention traceability per concept
constraints:
  - Studios must NOT see each other's first-round designs (§8, Prompt 09)
  - No competitor feature-list copying; invention labelled distinctly from evidence
completion_gate: Gate 3 — Concept readiness
gate_exit_criteria:
  - Independent studio outputs delivered with complete journeys
  - Invention clearly distinguished from evidence; traceability intact
  - Shortlist produced without merging incompatible interaction philosophies
reviewer: Program Director
quality_gate: pending
```

---

### WS08 — Validation & product direction

```yaml
workstream_id: WS08
title: Validation & product direction
accountable_owner: Independent research/product lead   # exactly one
contributing_roles:
  - Behavioral scientist
  - Product analyst / growth specialist
  - QA / accessibility specialist
  - Head of Product (final direction, Prompt 11 — contributes, does not own the gate)
  - Clinical reviewer · Privacy/regulatory reviewer
status: not_started
indicative_timing: Weeks 9–12
upstream_dependencies:
  - WS07 (the ~6 shortlisted concept directions)
  - WS05 (technical/architecture constraints for build readiness)
  - Foundation: concept testing & selection pack (TASK-048),
    wireframe spec (TASK-045), measurement plan (TASK-001)
downstream_consumers:
  - MVP build team (out of this cycle) — build-ready package handoff
primary_deliverables:
  - Neutral usability/validation protocol, counterbalanced scripts
  - Results with confidence, concept scorecards, failure modes, improvements
  - Selected product direction + final vision, journeys, IA, editable wireframes
  - Behavior-mechanism spec, MVP inclusions/exclusions, build/buy decisions
  - Measurement/outcome plan, validation roadmap, 90-day build plan
  - Innovation backlog of rejected concepts
constraints:
  - Never fabricate tests/results; if access unavailable, prepare and mark UNEXECUTED (§9, Prompt 10)
  - Clinical safety / privacy / accessibility are mandatory gates, not weighted trade-offs (§9, §11)
  - Distinguish preference vs. usability vs. observed repeat vs. sustained change
completion_gate: Gate 4 — Validation readiness → Gate 5 — Build readiness
gate_exit_criteria:
  - Gate 4: testable prototypes, preregistered tasks/criteria, safety/privacy/a11y review
  - Gate 5: critical usability risks addressed, approved MVP/architecture,
    remaining clinical/behavioral claims each have a validation plan
reviewer: Program Director (clinical + privacy reviewers co-sign mandatory gates)
quality_gate: pending
```

---

## 4. Gate ownership and sequencing (`prd.md` §11)

| Gate | Name | Streams that must pass it | Accountable owner(s) of those streams | Program Director verdict |
|---|---|---|---|---|
| 1 | Research foundation | WS01, WS02, WS03 | Product/market lead; Senior UX/product designer; Behavioral scientist | pending |
| 2 | Opportunity readiness | WS04, WS05, WS06 | UX researcher; iOS/backend architect; Head of Product | pending |
| 3 | Concept readiness | WS07 | Concept Program Lead | pending |
| 4 | Validation readiness | WS08 | Independent research/product lead | pending |
| 5 | Build readiness | WS08 | Independent research/product lead | pending |

At each gate the **Program Director** (Head of Product per Prompt 00) issues `pass` / `conditional pass` / `fail`, names the owner, lists missing evidence, remediation, and a decision date (`prd.md` §11). *"Polished unsupported reports do not pass."* The Program Director's governance role is distinct from the WS06 accountable-owner role, even though both are held by the Head of Product; the two hats are recorded separately so a conflict of interest at WS06's gate is visible and must be co-reviewed.

---

## 5. Governance rules for this registry

1. **One owner, always.** No stream may be edited to list two accountable owners. Adding a specialist adds a *contributing role*, never a second owner (`prd.md` §2).
2. **No status inflation.** A stream advances to `approved` only on a recorded Program-Director gate verdict with a date. Absent a verdict, status stays `review` at most.
3. **Dependency integrity.** A downstream stream may not pass its gate while any upstream dependency is `not_started`/`in_progress`/`blocked`. WS07 is specifically barred from starting until WS06's Opportunity Atlas is `approved`.
4. **Evidence traceability.** Every deliverable's claims must resolve to records in the §4 databases (APP/EVD/JRN/CAP/NEED/PAT/OPP/EXP/DEC). Deliverables without traceable sources are not complete (`prd.md` §14).
5. **Change control.** Workstream IDs are permanent. Timing may be re-estimated, but changes are logged with date and rationale in §6; the original §12 estimate is retained for comparison.

---

## 6. Open questions, unknowns, and change log

**Unknowns (to resolve before gates, not fabricated here):**
- Staffing reality: PRD §2 notes streams are "not eight full-time teams." Actual role assignment to named people is **unknown** and must be recorded when staffing is confirmed. Roles above are *accountable role types*, not named individuals.
- WS04 executability: whether 20–30 real participants are recruitable is unknown; the stream may ship instruments marked `UNEXECUTED` (§9/Prompt 04) rather than fabricate data.
- WS07 Concept Program Lead: the PRD names "six studio leads" but no single coordinator. This registry introduces a **Concept Program Lead** coordinating role to satisfy the single-accountable-owner rule (§0.3); this is a proposed governance default, flagged for Program-Director confirmation.

**Dependencies on other tasks:**
- Requires Foundation infrastructure from TASK-001 (success metrics, used by WS08), TASK-004/005 (evidence grades & schema), TASK-006/007 (benchmark registry & rubric, used by WS01), TASK-008 (gap/contradiction log), TASK-009 (decision/experiment registers, used by WS06).
- Feeds the specialist responsibility matrix (TASK-003), which maps the 13 specialist roles to the review approvals referenced in each stream's `reviewer` field.

**Change log:**

| Date | Change | Rationale |
|---|---|---|
| 2026-11-22 | v0.1 created; all eight streams registered at `not_started` | Initial registry per TASK-002 |

---

*End of registry. Status: Proposed, not executed. No workstream in this document has been started, and no research, interview, teardown, concept, or validation result is claimed as real.*
