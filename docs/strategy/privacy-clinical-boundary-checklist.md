# HerRays Privacy & Clinical Boundary Checklist

**Deliverable:** TASK-040 — Create the privacy and clinical boundary checklist
**Workstream:** Technology & Economics (WS05, `prd.md` §2 / §6 / §13 Prompt 05)
**Version:** 0.1 · **Status:** Proposed — checklist defined, not yet run against any feature, capability, or data flow; **makes no binding legal, regulatory, or clinical determination**
**Owner (accountable role):** R15 Privacy/regulatory reviewer (convenor) · co-accountable R14 Clinical reviewer for all clinical-boundary, medical-claim, escalation and clinical-review domains · consulted R06 Backend engineer (data flows), R05 iOS engineer (on-device/consent surfaces), R10 Content strategist (claim/consent copy), R13 QA/accessibility (consent accessibility) · informed R01 Head of Product — per TASK-003 RACI and `prd.md` §2 reviewer lenses.
**Source basis:** `prd.md` §2 (privacy/regulatory reviewer: "GDPR, data minimization, medical claims/device implications"; clinical reviewer: "Evidence, care boundaries, clinical escalation"), §4 ("Never fabricate … actual retention, CAC, LTV, clinical outcomes"; "Do not interpret a high grade on usability as a high grade on health impact"), §5 Phase 4 ("First apply mandatory clinical, privacy, ethics, accessibility and unsupported-claim gates"), §6 ("clinical integration boundaries, privacy/security … data minimization"; "Obtain consent and minimize sensitive data"; "risks of guilt, compulsion, burden and excessive tracking"), §9 ("Clinical safety, privacy and accessibility are mandatory gates, not compensable weighted scores"), §11 Gates 4–5 ("safety/privacy/accessibility review"; "remaining clinical/behavioral claims have a validation plan"; "Polished unsupported reports do not pass"), §13 Prompt 00 ("Separate evidence, inference, hypothesis and invention"), Prompt 05 ("privacy/GDPR, accessibility, clinical boundaries, App Store requirements … medical-claim/device implications"), executive mandate ("clinically responsible", "trustworthy care boundaries", integration "where appropriate with HerRays' physician-led care"). Interlocks with TASK-033 (capability safety gate — clinical/privacy gates *call* this instrument), TASK-039 (iOS inventory — health-data surfaces *route* here), TASK-005 (EVD schema), TASK-004 (grading), TASK-008 (gap/contradiction log), TASK-009 (DEC/EXP registers), TASK-026 (recruitment/consent pack), TASK-035 (decision form), TASK-037 (build/buy matrix).

---

## 0. What this document is (and is not)

This is the **privacy & clinical boundary checklist** — the deeper, standalone instrument that the capability-review safety gate (`→ TASK-033` §4.1 clinical, §4.2 privacy) and the iOS integration inventory (`→ TASK-039` §3, every `health-data: yes` surface) both *call* when a capability, feature, or data flow trips a privacy or clinical boundary. Where the TASK-033 gate asks *"does this capability trip a boundary?"* and routes, **this checklist is what it routes to**: it decides *which* boundary is tripped, *what* the obligation is, and *what must change or be verified* before the thing may proceed.

It is a **governance / review-protocol artifact**, not a design, a legal opinion, or a clinical judgement. It defines **seven boundary domains** — exactly the seven the acceptance criteria name — the **check items** within each, the **decision rules** that map what a reviewer finds to one of four outcomes, and the **regulatory-assessment trigger register** that says *when a feature must be escalated to a qualified reviewer* rather than cleared inside the Lab.

The seven domains, mapped to the acceptance criteria:

| # | Acceptance-criteria term | Domain in this document | Accountable signer |
|---|---|---|---|
| B1 | **Data minimization** | §4.1 Data minimization & purpose limitation | R15 (consulted R06) |
| B2 | **Consent** | §4.2 Consent & lawful basis | R15 (consulted R10, R13) |
| B3 | **Access control** | §4.3 Access control & data security | R15 + R06 |
| B4 | **Medical claims** | §4.4 Medical-claim boundary | R14 + R15 (consulted R10) |
| B5 | **Escalation** | §4.5 Clinical escalation & crisis/red-flag routing | R14 (consulted R15, R07) |
| B6 | **Clinical review** | §4.6 Clinical-review requirement | R14 |
| B7 | **Applicable regulatory assessment triggers** | §4.7 Regulatory assessment triggers (→ §5 register) | R15 (+ external counsel on trip) |

> **No-fabrication statement.** This checklist asserts **no real clinical outcome, no privacy-assessment result, no legal determination, no completed DPIA, no regulatory classification, and no test result.** It cites no real `EVD` record. It does **not** state that HerRays (or any feature) *is* or *is not* a medical device, *does* or *does not* require a specific legal basis, or *is* or *is not* compliant with any named law — those are determinations reserved to the accountable reviewer (R14/R15) and, where the §5 triggers fire, to qualified external clinical and legal/regulatory counsel. What this document provides is the **structured question set and routing rules** that make such a determination reproducible and auditable. The single worked example in §6 is labelled **ILLUSTRATIVE (synthetic)** end-to-end; its outcomes demonstrate the decision rules, they are not findings about any real app, feature, or user. Named regulatory frameworks (GDPR, UK GDPR, EU MDR / MDSW, HIPAA, FDA SaMD, FTC HBNR, App Store policy) are listed as **assessment triggers to route to counsel**, not as applied conclusions; their applicability depends on HerRays' operating jurisdictions and processing, which are an open unknown (§7, §9).

**Scope boundary (what this task is and is not).**

| This document **owns** | This document **does not own** (and must not duplicate) |
|---|---|
| The **seven boundary domains**, their numbered check items, the four outcomes, and the aggregation/non-compensability rule (§2–§6). | The **capability-review safety screen** (the five-domain gate that decides *whether* to route here) — `↔ TASK-033`. That gate is the trigger; this checklist is the deeper assessment it calls. |
| The **regulatory-assessment trigger register** (`REG-T-NN`) — the conditions under which a feature must be escalated to a DPIA, a medical-device classification question, or external counsel (§5). | Any **determination** that a specific framework *applies* or that HerRays *is compliant*. This checklist routes to the qualified reviewer; it issues no legal or clinical verdict (§0 no-fabrication statement). |
| The **clinical-escalation / red-flag routing design obligations** at a boundary level — that escalation paths must exist, be safe, and not over-claim (§4.5). | The **participant-facing research consent pack** (interview/diary consent language, incentives, recruitment quotas) — `→ TASK-026`. That governs *research with participants*; this governs the *product's* data and clinical boundaries. |
| The **boundary-check record** (`PCB` run) field contract and the forbidden-value / automatic-failure catalogue (§2.3, §7). | The **DEC/EXP registers** — `↔ TASK-009`. A referral or required change becomes a `DEC`, a validation a planned `EXP`; this checklist produces the *obligation*, not the register entry. |
| The **interlock** that makes a privacy/clinical boundary non-compensable by product value (§3.4, §6) — the operational expression of `prd.md` §9. | The **iOS permission/entitlement contracts** per surface — `↔ TASK-039`. That inventory *flags* which surfaces touch health data and calls this checklist; this checklist does not re-derive the `Info.plist`/entitlement contract. |

Scope discipline, per the workflow rules: this is a **standalone deliverable**. It builds nothing, measures nothing, and asserts no clinical, retention, or legal outcome. Where the correct answer is "a qualified reviewer must determine this," the outcome is a **referral** (`investigate` with a named target), never a guess and never a manufactured clearance.

---

## 1. Purpose and non-negotiables

HerRays' executive mandate is to build an experience that is *"enjoyable, effortless, intelligent, empowering, non-patronizing and clinically responsible"* and integrated *"where appropriate with HerRays' physician-led care"* (`prd.md` §Executive mandate, §13 Prompt 00). Two of the three non-compensable gates in `prd.md` §9 — **clinical safety and privacy** — live in the territory this checklist governs. The checklist exists to do six jobs:

1. **Turn two one-line mandates into finite, checkable obligations.** "Clinical integration boundaries" and "data minimization / minimize sensitive data" (`prd.md` §6) are mandates, not methods. This document decomposes each of the seven named areas into numbered check items with explicit decision rules, so two reviewers applying it to the same feature reach the same outcome for the same reason.
2. **Make the privacy and clinical boundaries non-compensable.** No desirability, delight, differentiation, or engagement score may offset a boundary concern (`prd.md` §9). The §6 aggregation rule makes the overall verdict the *worst* domain outcome, never an average — a feature that trips a medical-claim or consent boundary cannot be scored around.
3. **Separate "the Lab can clear this" from "a qualified reviewer must decide this."** The most dangerous failure mode in a privacy/clinical review is a product team confidently self-clearing a determination it is not qualified to make (e.g. "this isn't a medical device," "this consent is sufficient"). The **regulatory-assessment trigger register** (§5) makes the escalation explicit: when a trigger fires, the only valid in-Lab outcome is a **referral**, never a clearance.
4. **Keep the product the right side of the care boundary.** HerRays sits *beside* physician-led care, it is not a replacement for it. The medical-claim (§4.4) and escalation (§4.5) domains exist to ensure the product never diagnoses, never promises a clinical outcome it cannot evidence (`prd.md` §4), and — where a user surfaces a red-flag symptom or crisis signal — routes safely rather than either ignoring it or over-reaching into clinical management it cannot deliver.
5. **Prevent data creep and build consent that is real.** Every health-adjacent data element must earn its place against a declared purpose (§4.1), rest on a valid lawful basis and genuine, revocable consent (§4.2), and be protected by access controls proportionate to its sensitivity (§4.3). Consent that is bundled, pre-ticked, coerced by a guilt mechanic, or inaccessible is not consent.
6. **Make fabrication detectable, not possible.** A `clear` outcome is invalid unless the reviewer records the basis for it (§3.3, "no clearance by omission"); a medical or efficacy claim cannot clear §4.4 without a graded `EVD` source (`↔ TASK-004`); and no feature may be fabricated into compliance by a high product-value score (§6).

**Five non-negotiable rules, enforced throughout:**

- **P1 — Boundaries first, value second, and the ordering is structural.** This checklist runs *before* a capability or feature is value-scored or committed to an MVP (`prd.md` §5 Phase 4, §11 Gate 4). A value score, roadmap slot, or build decision produced over an un-run or un-cleared boundary check is void (§6, §7 F-2).
- **P2 — Non-compensable: the overall verdict is the worst domain outcome.** `overall = block` if any domain is `block`; else `redesign` if any is `redesign`; else `investigate` (referral pending) if any is `investigate`; else `clear` only when **all seven** domains are `clear` with recorded bases (§6.1). No weighting, no "six clears outvote one block," no partial credit (`prd.md` §9).
- **P3 — No clearance by omission; every outcome is evidenced.** A `clear` is valid only if the reviewer records *what was checked and what supports the clearance* (an `EVD` ref, an observed data-flow fact, a design artifact, or an explicit "not applicable because …"). A blank, an unexamined item, or "no concern noticed" defaults to `not_yet_assessed`, **never** to `clear` (§3.3). Silence is not safety.
- **P4 — The Lab does not self-clear a qualified determination.** When a §5 regulatory-assessment trigger fires — special-category/health-data processing at scale, a plausible medical-device/SaMD function, a cross-border or new-jurisdiction flow, a medical claim, a children's-data edge, or a clinical-escalation design — the in-Lab outcome is **`investigate` with a named referral target** (R14 clinical, R15/DPO privacy, or external legal/regulatory counsel). An in-Lab `clear` over a fired trigger is void (§7 F-5). This rule is the operational expression of "do not invent … completed work" (`prd.md` §13 Prompt 00) applied to legal and clinical determinations.
- **P5 — Separation of duties; the proposer does not clear their own boundary.** The role that designed or proposed the feature may not be the accountable signer of its privacy or clinical boundary. Clinical-side domains (B4 medical claims, B5 escalation, B6 clinical review) are signed by R14; privacy-side domains (B1–B3, B7) by R15; a boundary signed by the proposing role alone is void (§7 F-6). This mirrors TASK-033 S4 and TASK-003 separation-of-duties.

---

## 2. The boundary-check record and its vocabulary

### 2.1 The four outcomes

Every check item, and every boundary domain, resolves to exactly one of four terminal outcomes, plus the pre-assessment state `not_yet_assessed`. The vocabulary is **deliberately identical to the TASK-033 safety gate** (`pass`/`investigate`/`redesign`/`reject`) so a boundary-check result can feed the gate without translation; the only refinement is that in boundary domains an `investigate` **always carries a mandatory referral target** (the escalation routing the acceptance criteria require).

| Outcome | Meaning | What it asserts | Effect |
|---|---|---|---|
| **`clear`** *(= gate `pass`)* | No boundary concern on this domain for this feature *as specified*, and the reviewer has recorded the basis. | "I checked each item and found no concern, or a concern already fully mitigated in the specification, and here is the evidence." | Does not block. When **all seven** domains `clear`, the feature is boundary-admissible to value scoring / MVP consideration (`→ TASK-033` §3.4, `→ TASK-035`). |
| **`investigate`** *(= gate `investigate`; a **referral**)* | The reviewer *cannot yet determine* the outcome because a specific piece of evidence or a **qualified determination** is missing. **Carries a mandatory referral target.** | "There is a potential concern I cannot resolve with the evidence/authority at hand; here is the exact question and who must answer it." | Blocks a decision. Opens a `GAP` (`→ TASK-008`) naming the question, the **referral target** (R14 / R15-DPO / external counsel) and the next action. Feature stays `in_review`; cannot reach `decided`. |
| **`redesign`** | A concern exists that a **specific, named change** to the feature would resolve; the feature cannot proceed *as-is*. | "The feature as specified has a privacy/clinical-boundary problem, and I can name the change that fixes it." | Forces the feature back to design with the required change recorded; re-run after the change. |
| **`block`** *(= gate `reject`)* | The concern is **disqualifying within the current scope** and not resolvable by a design change — an unprovable medical claim presented as fact, unlawful or non-consented processing of health data, an unsafe escalation design, or a boundary that cannot be made compliant on this path. | "This cannot proceed on this path; the harm/illegality is intrinsic, not a fixable detail." | Forces rejection within scope; preserved in the innovation backlog with rationale (`prd.md` §11 / Prompt 11); never deleted. Value scoring void. |
| *(`not_yet_assessed`)* | *Initial state only.* The check has not run. | Nothing — the absence of a judgement. | Blocks scoring and any decision. Must be replaced by a terminal outcome before §3.4 admits the feature. Never a valid *resting* state for a decided feature. |

**2.2 Severity precedence (used by aggregation rule P2):**

```
clear  <  investigate  <  redesign  <  block
(least blocking) ----------------------> (most blocking)
```

`investigate` and `redesign` both block a decision; they differ in *why*. `investigate` = "a qualified reviewer must determine this, or evidence is missing" (a **referral**); `redesign` = "the Lab knows the fix." A reviewer tempted to write `clear` "to keep moving" while privately unsure **must** write `investigate` with a referral target instead (P3/P4). The overall verdict takes the maximum (§6.1).

### 2.3 The boundary-check record (`PCB` run) — field contract

Each run of this checklist against a feature/capability/data-flow produces one `PCB` record. Requirement markers: **M** = mandatory, **C** = conditional, **O** = optional.

| Field | Req | Definition and rule |
|---|---|---|
| `pcb_id` | M | Stable id `PCB-NNN`. Immutable once assigned. One run per (subject, version). |
| `subject_ref` | M | What is being assessed: a `CAP` id (`↔ TASK-033`/TASK-030), an `IOS-CAP` surface (`↔ TASK-039`), a feature id, or a named data flow. |
| `subject_version` | M | The design/spec version assessed. A material change invalidates the run and requires re-assessment (P1). |
| `data_inventory` | M | The concrete list of data elements the subject reads/writes/infers/stores/transmits, each tagged `health_adjacent: yes/no` and `special_category: yes/no/unknown`. Drives B1/B3/B7. `unknown` is a valid, recordable state — never guessed to `no`. |
| `domain_outcomes` | M | The seven domain outcomes `{B1…B7} → clear | investigate | redesign | block | not_yet_assessed`, each with a recorded **basis** (P3). |
| `referrals` | C | For every `investigate`: the `GAP-NNN`, the **referral target role/body**, the exact question, owner, and due date. Mandatory whenever any domain is `investigate`. |
| `required_changes` | C | For every `redesign`: the specific, re-testable change. Mandatory whenever any domain is `redesign`. |
| `block_rationale` | C | For every `block`: the disqualifying reason and its PRD/clinical/legal basis. Mandatory whenever any domain is `block`. |
| `triggers_fired` | M | The `REG-T-NN` regulatory-assessment triggers (§5) evaluated, each `fired: yes/no/unknown` with the routing it forced. A fired trigger with no referral is a forbidden value (§7 F-5). |
| `overall` | M | The aggregate verdict by P2 (worst domain outcome). |
| `signers` | M | The accountable signer per domain (R15 privacy-side, R14 clinical-side), with the separation-of-duties attestation (P5) and date. |
| `evd_refs` | C | `EVD` ids (`↔ TASK-005`) supporting any `clear` that rests on a factual/evidential claim (e.g. a data-flow observation, a graded source behind a permitted claim). |
| `status` | M | Lifecycle (§2.4). |

### 2.4 Record lifecycle

`open` → `in_review` → `referred` (≥1 `investigate` pending) → `cleared` | `redesign_required` | `blocked`

- **`open`** — subject registered, data inventory drafted, no domain yet signed.
- **`in_review`** — domains being signed.
- **`referred`** — at least one domain is `investigate`; the run is parked pending a qualified determination. **This is the correct resting state for anything that trips §5** — not a `clear`.
- **`cleared`** — all seven domains `clear` with recorded bases; boundary-admissible. **No run may reach `cleared` in this v0.1 document** — clearing requires real review artifacts that do not yet exist (mirrors TASK-039 H1).
- **`redesign_required` / `blocked`** — terminal non-clear states with recorded changes/rationale; preserved, never deleted.

> **Hard rule H1:** No `PCB` run reaches `cleared` inside this deliverable. The §6 worked example is deliberately left non-clear. Clearing a real feature requires real evidence and qualified sign-off (R14/R15, and external counsel where §5 fires), which this task does not produce and must not invent.

---

## 3. How the checklist runs

### 3.1 When it runs (the triggers that call it)
This checklist is invoked whenever any of the following is true for a capability, feature, or data flow:
- the TASK-033 safety gate's **clinical (§4.1)** or **privacy (§4.2)** domain routes to it (a boundary is suspected);
- an `IOS-CAP` surface is flagged `health-data: yes` (`↔ TASK-039` §3 — HealthKit, on-device health inference, sync of health-adjacent data, health-tagged notifications);
- a feature makes, implies, or could be read as making a **health or medical claim** (B4);
- a feature **collects, infers, or displays** health-adjacent or special-category data (B1/B2/B3/B7);
- a feature creates a path where a user could surface a **red-flag symptom, crisis signal, or request for clinical help** (B5);
- a decision form (`→ TASK-035`) or build/buy matrix (`→ TASK-037`) reaches a capability carrying any of the above.

It runs at **Gate 4 (Validation readiness)** at the latest — `prd.md` §11 requires "safety/privacy/accessibility review" before validation — and ideally earlier, at capability review (Phase 4), so a boundary problem is caught before design effort compounds.

### 3.2 Who runs it (accountable signers)
Each domain has one accountable signer and named consulted roles, drawn from `prd.md` §2 reviewer lenses:

| Domain | Accountable signer | Consulted | PRD lens basis |
|---|---|---|---|
| §4.1 Data minimization & purpose limitation | **R15** Privacy/regulatory | R06 Backend (data flows); R01 for purpose declaration | `prd.md` §2 ("data minimization"), §6 ("minimize sensitive data"), Prompt 05 |
| §4.2 Consent & lawful basis | **R15** Privacy/regulatory | R10 Content (consent copy); R13 (consent accessibility); R06 | `prd.md` §6 ("Obtain consent"), §2 ("GDPR"), Prompt 04/05 |
| §4.3 Access control & data security | **R15** + **R06** Backend | R05 iOS (on-device storage/keychain) | `prd.md` §6 ("privacy/security", "identity"), Prompt 05 |
| §4.4 Medical-claim boundary | **R14** Clinical + **R15** | R10 Content (claim copy); R09 (growth/ASO copy) | `prd.md` §4 ("Never fabricate … clinical outcomes"), §3 ("Engagement does not establish clinical efficacy"), §2 ("medical claims/device implications") |
| §4.5 Clinical escalation & crisis/red-flag routing | **R14** Clinical | R15 (data handling of disclosures); R07 UX researcher (observed distress) | `prd.md` §2 (clinical reviewer: "care boundaries, clinical escalation"), executive mandate ("physician-led care") |
| §4.6 Clinical-review requirement | **R14** Clinical | R01 Head of Product | `prd.md` §2, §11 Gates 4–5 ("clinical/behavioral claims have a validation plan") |
| §4.7 Regulatory assessment triggers | **R15** Privacy/regulatory | **External legal/regulatory counsel on trip** (§5); R14 for device/clinical overlap | `prd.md` §2 ("GDPR, … medical claims/device implications"), Prompt 05 |

The accountable signer may not be the subject's proposing/designing role (P5). Where the proposing role *is* the domain's reviewer role, a second qualified reviewer co-signs.

### 3.3 Evidence a signer must record for each domain
For every domain the signer records, at minimum: the **outcome**; the **check items examined** (by id, §4); for a `clear`, the **basis** (`EVD` ref, observed data-flow fact, design artifact, or explicit "N/A because …"); for `investigate`, the **open question, referral target, and `GAP-NNN`**; for `redesign`, the **required change** (specific enough to re-test); for `block`, the **disqualifying reason and basis**; the **signer role** and date. A domain outcome with no recorded basis is **void** and reverts to `not_yet_assessed` (P3).

### 3.4 The hard interlock (non-compensability)
A feature is **boundary-admissible** to value scoring (`→ TASK-033` §3.4 / `→ TASK-034`) or an MVP decision (`→ TASK-035`) **iff all seven domains read `clear`** with recorded bases. Any `investigate`, `redesign`, or `block` makes the feature inadmissible; a value score or build decision produced anyway is void (§7 F-2). This is the structural expression of `prd.md` §9 ("not compensable weighted scores").

### 3.5 Re-running
`redesign` → the changed feature is re-submitted and **all seven domains are re-run** (a change to satisfy one boundary can disturb another — e.g. adding a clinician-review step to satisfy B6 creates a new health-data flow that re-engages B1/B3/B7). `investigate` → the referred question is resolved by the named target; if the answer changes the feature, re-run affected domains. `block` is terminal for the current scope; re-entry requires a materially different feature with a new rationale.

---

## 4. The seven boundary domains

Each domain states its **purpose**, **PRD basis**, **check items** (numbered `PCB-Bx-NN`, so a review can be cited item-by-item), and the **decision rules** mapping findings to the four outcomes. Check items are phrased so that a concern drives a non-`clear` outcome per the rules. The lists are the mandatory minimum; a reviewer may add items but may not remove them.

---

### 4.1 Data minimization & purpose limitation — accountable **R15**

**Purpose.** Ensure every data element the feature touches is necessary for a declared, legitimate purpose, retained no longer than needed, and not quietly repurposed. `prd.md` §6 is explicit: *"minimize sensitive data."*

**PRD basis.** `prd.md` §6 ("data minimization", "minimize sensitive data"), §2 (privacy reviewer lens), Prompt 05 ("privacy/GDPR").

**Check items.**
- **PCB-B1-01** — Is there a **written purpose** for each data element the feature collects, infers, stores, or transmits (from `data_inventory`)? An element with no declared purpose fails.
- **PCB-B1-02** — Is each element **necessary** for that purpose, or is it collected "because it might be useful"? Speculative collection fails.
- **PCB-B1-03** — Could the purpose be met with **less sensitive** data, **lower resolution**, **less frequent** capture, or **on-device-only** processing (no transmission)? If a less-intrusive alternative meets the purpose, the current design is not minimized.
- **PCB-B1-04** — Is a **retention period** defined for each element, with deletion on expiry and on account closure? Indefinite or undefined retention fails.
- **PCB-B1-05** — Is the data used **only** for its declared purpose? Any secondary use (analytics, model training, marketing, competitor benchmarking) that is not separately declared and consented fails and re-engages B2.
- **PCB-B1-06** — For any **inferred** health-adjacent attribute (e.g. deriving a cycle phase, a mood, or a risk signal from logged behavior): is the inference necessary, disclosed, and is its uncertainty represented (not presented as fact)? Hidden or over-certain inference fails and re-engages B4.
- **PCB-B1-07** — Is **free-text** or open input (journals, notes) scoped so the product does not invite, store, or transmit more sensitive disclosure than its purpose needs — and is such content handled under the strictest tier of B3?

**Decision rules.** `clear` only if every element has a declared purpose, passes necessity (02), has no cheaper-privacy alternative (03), has a bounded retention (04), and no undeclared secondary use (05). A missing purpose or an undefined retention → `redesign` (name the element and the fix). An unnecessary or repurposed sensitive element that the team wishes to keep → `investigate` (refer: is there a lawful basis and a declared purpose? to R15/DPO) or `redesign` (drop/scope it). Collection of special-category data with no viable purpose → `block`.

---

### 4.2 Consent & lawful basis — accountable **R15**

**Purpose.** Ensure processing rests on a valid lawful basis and, where consent is that basis, that the consent is freely given, specific, informed, unambiguous, revocable, and accessible. `prd.md` §6: *"Obtain consent and minimize sensitive data."*

**PRD basis.** `prd.md` §6 ("Obtain consent"), §2 ("GDPR"), executive mandate ("non-patronizing", "empowering"), Prompt 04/05.

**Check items.**
- **PCB-B2-01** — Is a **lawful basis** identified for each processing purpose? Where consent is relied on for health-adjacent/special-category data, is it **explicit** consent (not implied)? No identified basis → `investigate` (refer to R15/DPO).
- **PCB-B2-02** — Is consent **granular** (separable per purpose), **unbundled** from acceptance of the core service, and **not pre-ticked**? Bundled or forced consent fails.
- **PCB-B2-03** — Is the consent request **informed** — plain-language, states what is collected, why, who sees it, how long it is kept, and the user's rights? Vague or buried disclosure fails.
- **PCB-B2-04** — Is consent **revocable** at least as easily as it is given, with revocation taking effect (processing stops, data deletion path exists)? One-way consent fails.
- **PCB-B2-05** — Is consent **free of coercion** — not extracted via a guilt mechanic, a streak-loss threat, a dark pattern, or withholding non-dependent functionality (`prd.md` §6 "risks of guilt, compulsion")? Coerced consent fails and re-engages the manipulation gate (`↔ TASK-033` §4.3).
- **PCB-B2-06** — Is the consent surface **accessible** — VoiceOver-navigable, Dynamic Type-safe, sufficient contrast, no reliance on colour or motion alone (`↔ TASK-039` §4, R13 lens)? An inaccessible consent is not valid consent.
- **PCB-B2-07** — If **children or minors** could plausibly use the feature, is there an age-assurance and parental-consent path? (Edge case; fires REG-T-05.)
- **PCB-B2-08** — Is a **record of consent** (what, when, version of the notice) kept, and does changing the notice re-seek consent rather than silently expanding scope?

**Decision rules.** `clear` only if a valid basis exists (01), consent is granular/unbundled/un-coerced/accessible/recorded (02–06, 08). Bundled, pre-ticked, coerced, or inaccessible consent → `redesign` (name the fix). Absent lawful basis, or uncertainty whether explicit consent is required → `investigate` (refer to R15/DPO; fires REG-T-02). Processing special-category data with no lawful basis and no path to one → `block`.

---

### 4.3 Access control & data security — accountable **R15 + R06**

**Purpose.** Ensure access to data is restricted to those who need it, protected in transit and at rest, and that the strictest protections apply to the most sensitive elements. `prd.md` §6: *"privacy/security"*, *"identity"*.

**PRD basis.** `prd.md` §6 ("privacy/security", "identity", "backend sync"), Prompt 05 ("identity, privacy/GDPR", "security specialist"), §2 (backend engineer: "identity, data, sync, integration, privacy").

**Check items.**
- **PCB-B3-01** — Is each data element assigned a **sensitivity tier**, and do protections scale with tier (health-adjacent/special-category = strictest)?
- **PCB-B3-02** — Is access governed by **least privilege** — only roles/services with a declared need can read each element, enforced not merely documented?
- **PCB-B3-03** — Is data **encrypted in transit** (all network paths) and **at rest** (device and backend), with health-adjacent data at the strictest tier?
- **PCB-B3-04** — For **on-device** processing/storage (`↔ TASK-039` §3): is sensitive data kept on-device where the purpose allows, and protected (e.g. Keychain/Data Protection) rather than in plain app storage?
- **PCB-B3-05** — Is **authentication/identity** proportionate to sensitivity, and are sessions and tokens handled so that a lost device or stolen token does not expose health data?
- **PCB-B3-06** — For any **third-party processor or SDK** that touches data (analytics, crash, subscription, sync): is the data it receives minimized (B1), governed by a processing agreement, and is health-adjacent data withheld from processors that do not need it? (Fires REG-T-02/REG-T-06 as applicable.)
- **PCB-B3-07** — Is there a defined **breach-response and notification** path, and a **data-subject-rights** path (access, deletion, portability) that actually executes?
- **PCB-B3-08** — Is **logging/telemetry** scoped so that logs do not silently become a second, unprotected copy of sensitive data?

**Decision rules.** `clear` only if tiering (01), least privilege (02), encryption (03), on-device protection (04), proportionate identity (05), processor minimization (06), and rights/breach paths (07) all hold with recorded bases. A missing control with a known fix → `redesign`. Reliance on a processor whose data handling is unverified → `investigate` (refer; name the processor). Health-adjacent data exposed to an unnecessary third party with no remediation path, or unencrypted sensitive data on a path that cannot be secured → `block`.

---

### 4.4 Medical-claim boundary — accountable **R14 + R15**

**Purpose.** Keep the product on the right side of the line between *lifestyle/behavioral support* and *medical claim*. HerRays is clinically responsible and physician-adjacent; it must not state or imply that it diagnoses, treats, cures, prevents, or monitors a disease, nor assert a clinical outcome it cannot evidence. `prd.md` §4: *"Never fabricate … clinical outcomes"*; §3: *"Engagement does not establish clinical efficacy."*

**PRD basis.** `prd.md` §4 (no fabricated clinical outcomes; "high grade on usability ≠ high grade on health impact"), §3 (engagement ≠ efficacy; reverify editorial recognition), §2 ("medical claims/device implications"), §11 ("Polished unsupported reports do not pass"), executive mandate ("clinically responsible", "non-patronizing").

**Check items.**
- **PCB-B4-01** — Does any user-facing copy, screenshot, store listing, notification, or coaching message **state or imply diagnosis, treatment, cure, prevention, or monitoring of a disease or medical condition**? If yes → candidate `block`/`redesign` and fires REG-T-03 (device/SaMD question).
- **PCB-B4-02** — Does any claim of a **health benefit or outcome** (e.g. "improves sleep", "reduces menopausal symptoms", "lowers stress hormones") rest on a **graded `EVD` source** (`↔ TASK-004`), with the grade adequate to the strength of the claim? A health-outcome claim resting on grade-C/D or on engagement data fails (`prd.md` §4/§3).
- **PCB-B4-03** — Are **behavioral/experience claims** (e.g. "many women find it easier to keep a gentle daily routine") clearly separated from **clinical claims**, and never swapped in for one another?
- **PCB-B4-04** — Is any **inferred health signal** (B1-06) presented with its **uncertainty**, and explicitly **not** as a diagnosis or a substitute for clinical assessment?
- **PCB-B4-05** — Does the product present appropriate **"not a medical device / not a substitute for professional care"** framing where a reasonable user might otherwise infer a clinical function?
- **PCB-B4-06** — Does any **personalization or recommendation** stay within a validated scope (`prd.md` §10 "within validated scope"), and avoid individualized medical advice the product is not qualified to give?
- **PCB-B4-07** — Is **editorial/award recognition** (App of the Day etc.) kept out of efficacy framing (`prd.md` §3 "editorial recognition is not proof of clinical efficacy"; `↔ TASK-010`)?

**Decision rules.** `clear` only if no diagnostic/treatment implication (01), every health-outcome claim is adequately `EVD`-graded (02), clinical and behavioral claims are separated (03), inferences carry uncertainty (04), and appropriate boundary framing is present (05). A claim that merely overstates and can be reworded to a supportable behavioral statement → `redesign` (name the wording). A claim whose supportability is uncertain, or any copy that plausibly implies a medical-device function → `investigate` (refer to R14 + external regulatory counsel; fires REG-T-03). A fabricated or unprovable clinical-outcome claim presented as fact, retained → `block` (`prd.md` §4/§11).

---

### 4.5 Clinical escalation & crisis/red-flag routing — accountable **R14**

**Purpose.** Where a user could surface a **red-flag symptom, a safety/crisis signal, or a direct request for clinical help**, ensure the product responds **safely** — neither ignoring it nor over-reaching into clinical management it cannot deliver. HerRays integrates "where appropriate with HerRays' physician-led care"; the clinical reviewer's lens is explicitly "care boundaries, clinical escalation" (`prd.md` §2).

**PRD basis.** `prd.md` §2 (clinical reviewer: "care boundaries, clinical escalation"), executive mandate ("physician-led care", "clinically responsible"), §6 ("clinical integration boundaries").

**Check items.**
- **PCB-B5-01** — Does the feature create a path where a user could **disclose a red-flag symptom** (e.g. a symptom warranting prompt medical attention) or a **crisis/self-harm signal**? If yes, an escalation design is **required** (not optional).
- **PCB-B5-02** — If such a path exists, is there a **defined, safe response** — surfacing appropriate signposting to professional/physician-led care or emergency resources — rather than silence, a generic motivational message, or an attempt to self-manage the situation?
- **PCB-B5-03** — Does the escalation **avoid over-claiming** — it does not promise triage, diagnosis, monitoring, or a clinical response the product cannot actually deliver, and does not imply the app itself is handling a medical emergency (re-engages B4)?
- **PCB-B5-04** — Is the escalation **appropriate to jurisdiction and audience** (resources valid for the user's region; not a fabricated or hard-coded wrong resource)? Where region-specific resources are unknown → `investigate` (refer to R14), never a guessed resource.
- **PCB-B5-05** — Are disclosures that trigger escalation **handled under the strictest privacy tier** (B3) and not retained or transmitted beyond what the safe response requires (B1)?
- **PCB-B5-06** — Is there a **human/clinical pathway** defined for the HerRays care-integration points (`prd.md` §Executive mandate), with the boundary of what the app does vs. what a clinician does made explicit?
- **PCB-B5-07** — Is the escalation path **tested for failure modes** (false positive flooding the user with alarms; false negative missing a genuine signal) and does it degrade safely offline (`↔ TASK-039`)?

**Decision rules.** `clear` only if either no red-flag/crisis path exists (01 = N/A, recorded) **or** a safe, non-over-claiming, jurisdiction-appropriate, privacy-tiered escalation exists (02–06) with failure modes considered (07). A red-flag path with **no** escalation design → `redesign` (required change: add safe routing) or, if the feature's premise makes safe routing impossible, `block`. An escalation whose jurisdiction-appropriate resources or clinical pathway are undetermined → `investigate` (refer to R14; never ship a guessed resource). An escalation that over-claims a clinical function → `redesign`/`block` per B4.

---

### 4.6 Clinical-review requirement — accountable **R14**

**Purpose.** Determine whether the feature **requires qualified clinical review** (and, if so, ensure it is obtained before the feature is cleared), and ensure remaining clinical/behavioral claims carry a **validation plan** rather than an assertion. `prd.md` §11 Gate 5: *"remaining clinical/behavioral claims have a validation plan."*

**PRD basis.** `prd.md` §2 (clinical reviewer deliverable: "Clinical safety review"), §11 Gates 4–5, §5 Phase 4 ("mandatory clinical … gates"), executive mandate.

**Check items.**
- **PCB-B6-01** — Does the feature touch a **clinical surface** — health-adjacent inference (B1-06), a health claim (B4), an escalation path (B5), a care-integration point, or special-category data (B7)? If yes, clinical review is **required** before `clear`.
- **PCB-B6-02** — Has the **named clinical reviewer (R14)** actually reviewed and signed this subject/version, independent of the proposing role (P5)? An unsigned clinical surface cannot be `clear` — it is `investigate` until R14 signs.
- **PCB-B6-03** — For every remaining **clinical or behavioral claim** that is not yet validated, is there a **validation plan** — a defined `EXP` (`→ TASK-009`) with hypothesis, method, and success criteria — rather than an unsupported assertion (`prd.md` §11 Gate 5)?
- **PCB-B6-04** — Are **clinical assumptions and uncertainties** recorded (`prd.md` §13 Prompt 00 "separate evidence, inference, hypothesis and invention"), with contested points logged to the contradiction register (`→ TASK-008`)?
- **PCB-B6-05** — Is the boundary between **in-cycle** clinical claims and **out-of-cycle** longitudinal outcomes (which require a follow-up pilot, `prd.md` §Executive mandate / §9) made explicit, so no long-term health outcome is claimed from short-term data?

**Decision rules.** `clear` only if either the feature touches no clinical surface (01 = N/A, recorded) **or** R14 has independently signed (02) and every unvalidated claim has a validation plan (03) with assumptions recorded (04–05). A clinical surface **not yet** reviewed by R14 → `investigate` (refer to R14). A clinical/behavioral claim with no validation plan and no evidence → `redesign` (add plan or drop claim). A claim contradicted by evidence and retained anyway → `block` (`prd.md` §11).

---

### 4.7 Regulatory assessment triggers — accountable **R15** (+ external counsel on trip)

**Purpose.** Identify, for each feature, **whether a formal regulatory or data-protection assessment must be sought from a qualified reviewer** — and route it there. This domain does **not** make the regulatory determination; it decides whether one is **owed** and to whom (§5). This is the direct operationalization of P4.

**PRD basis.** `prd.md` §2 (privacy/regulatory reviewer: "GDPR, data minimization, medical claims/device implications"; "Compliance risk register"), Prompt 05 ("privacy/GDPR … clinical boundaries … App Store requirements … medical-claim/device implications"), §13 Prompt 00 ("Do not invent … completed work").

**Check items.**
- **PCB-B7-01** — Evaluate each **`REG-T-NN` trigger** in §5 for this subject; record `fired: yes/no/unknown` and, for every `yes`/`unknown`, the **referral** it forces. An unevaluated trigger is a forbidden value (§7 F-7).
- **PCB-B7-02** — Is the set of **operating jurisdictions** for this feature known? If unknown, the regulatory scope is itself an open question (§9) and triggers must be evaluated conservatively (treat as potentially applicable, refer).
- **PCB-B7-03** — Where a trigger fires, is the outcome a **referral (`investigate`)**, not an in-Lab `clear` (P4)? An in-Lab clearance over a fired trigger is void (§7 F-5).
- **PCB-B7-04** — Is the referral logged to the **compliance risk register** (`prd.md` §2 deliverable) and to a `GAP`/`DEC` (`→ TASK-008`/`TASK-009`) with owner and due date?

**Decision rules.** `clear` only if **no** trigger fires and jurisdiction scope is known (or conservatively bounded) and recorded. Any fired or `unknown` trigger → `investigate` with the named referral target (§5). A feature the team wishes to ship over a fired trigger without a determination → remains `investigate` (blocking); it may never be `clear` in-Lab (P4). A feature whose premise is unlawful on every assessed path → `block` (on counsel's determination, recorded as the basis).

---

## 5. Regulatory assessment trigger register (`REG-T`)

This register is the heart of the acceptance criterion *"applicable regulatory assessment triggers."* Each row is a **condition that, when met, obliges a referral** to a qualified reviewer. **The register does not assert that any framework applies to HerRays** — applicability depends on HerRays' operating jurisdictions and processing, which are an open unknown (§9). It lists the frameworks a competent reviewer would *assess*, and the in-Lab routing when the condition is met. Frameworks are tagged by the jurisdiction that makes them *potentially* relevant; the PRD explicitly names **GDPR** (`prd.md` §2/Prompt 05), so the EU/EEA/UK data-protection row is treated as presumptively in-scope pending confirmation; others are conditional on jurisdiction.

| ID | Trigger condition (if this is true of the feature…) | Then assess (framework/instrument — **to route, not a conclusion**) | In-Lab routing when fired |
|---|---|---|---|
| **REG-T-01** | Processing of **special-category / health data** (incl. inferred health attributes) at any meaningful scale or systematically | Data-protection impact — **GDPR Art. 9 / Art. 35 DPIA** (and UK GDPR equivalent); whether a DPIA is mandatory | `investigate` → **R15/DPO**; open DPIA question; log to compliance risk register |
| **REG-T-02** | New or changed **data flow, processor/SDK, or lawful-basis** reliance (esp. consent for health data; new third party receiving data) | Lawful basis & processor governance — **GDPR Arts. 6/9/28**; data-processing agreement adequacy | `investigate` → **R15/DPO**; name the flow/processor |
| **REG-T-03** | Feature **diagnoses/treats/monitors/prevents** a condition, or plausibly performs a **software-as-a-medical-device (SaMD)** function, or makes a medical claim (B4-01) | Medical-device classification — **EU MDR / MDCG MDSW guidance**, **UK MHRA**, **US FDA device-software functions**; is this a regulated device? | `investigate` → **R14 + external regulatory counsel**; do **not** self-classify |
| **REG-T-04** | **Cross-border transfer** of personal/health data, or processing in a **new jurisdiction** | International transfer mechanisms — **GDPR Ch. V (SCCs/adequacy)**; local law of the new jurisdiction | `investigate` → **R15/DPO + counsel for that jurisdiction** |
| **REG-T-05** | **Children/minors** could plausibly access, or age-assurance is absent where it may be required (B2-07) | Children's-data rules — **GDPR Art. 8**, **UK Age-Appropriate Design Code**, **US COPPA** | `investigate` → **R15/DPO**; age-assurance design question |
| **REG-T-06** | Integration with **US health entities / covered-entity data**, or marketing of health data | **HIPAA** (if covered entity/business associate), **US FTC Health Breach Notification Rule** | `investigate` → **R15 + US counsel** (only if US health-entity scope is real) |
| **REG-T-07** | **App Store / platform** policy surface — health/medical data handling, health claims, subscription and data-use disclosures, HealthKit usage rules (`↔ TASK-039`) | **Apple App Store Review Guidelines** (health/medical, HealthKit, privacy) | `investigate` → **R15 + R05 iOS**; verify against current guidelines at build |
| **REG-T-08** | **Automated decision-making / profiling** that produces a significant effect (e.g. an algorithmic health risk flag driving user action) | **GDPR Art. 22** (automated decisions); fairness/explainability | `investigate` → **R15/DPO + R02** behavioral scientist |

**Register rules.**
- A trigger evaluated `unknown` (e.g. jurisdiction not yet decided) routes the **same as `fired`** — conservatively, to a referral (P4/B7-02). "We don't know yet" is never "no."
- A fired trigger's referral is **not satisfied by an in-Lab opinion.** It is satisfied only by the named qualified reviewer's recorded determination (R14/R15/DPO/counsel). Until then the feature is `investigate`/`referred`, never `clear`.
- The register names frameworks to **route to**, with no claim that any of them is finally applicable; that is counsel's call. This is what keeps the document free of fabricated legal conclusions (§0, `prd.md` §13 Prompt 00).
- New triggers are added as HerRays' jurisdictions and integrations are fixed; the register is versioned with the compliance risk register (`prd.md` §2 deliverable).

---

## 6. Aggregation and non-compensability

### 6.1 The rule (P2)
Given the seven domain outcomes, the overall verdict is the **worst** (most-blocking) outcome:

```
overall = block        if any domain ∈ {block}
        = redesign     else if any domain ∈ {redesign}
        = investigate  else if any domain ∈ {investigate}      (referral pending)
        = clear        else if ALL seven ∈ {clear} with recorded bases
        = not_yet_assessed   otherwise (any domain unassessed)
```

There is **no weighting, no averaging, and no "six clears outvote one block."** A single `block` on any domain blocks the feature; a single `investigate` parks it pending a qualified determination. This is `prd.md` §9 made operational: clinical safety and privacy are *gates, not compensable weighted scores*. A product-value, delight, or differentiation score produced over a non-`clear` overall is void (§3.4, §7 F-2).

### 6.2 Worked example — **ILLUSTRATIVE (synthetic)**

> **This example asserts nothing real.** The subject is the PRD's own illustrative "gentle cycle-phase insight" idea (a synthetic feature inspired by `prd.md` §3/§6 framing), with fabricated `*-SYNTH-*` ids. Its outcomes demonstrate the decision rules; they are **not** a privacy or clinical assessment of any real HerRays feature, and the run is deliberately left **non-clear**.

```yaml
pcb_id: PCB-001                      # ILLUSTRATIVE (synthetic)
subject_ref: CAP-SYNTH-014           # "Gentle cycle-phase insight" (synthetic capability)
subject_version: v0.1-synthetic
status: referred                     # NOT cleared — per H1

data_inventory:
  - element: self_logged_cycle_dates        # health_adjacent: yes, special_category: yes
  - element: inferred_cycle_phase           # health_adjacent: yes, special_category: unknown  (inference, B1-06)
  - element: daily_energy_rating            # health_adjacent: yes, special_category: unknown

domain_outcomes:
  B1_data_minimization:
    outcome: redesign
    basis: "Inferred_cycle_phase stored on backend; purpose (a gentle on-screen note) is met on-device only."
    required_change: "Compute and keep inferred_cycle_phase on-device; do not transmit (B1-03, B3-04)."
  B2_consent:
    outcome: investigate
    basis: "Relies on consent for special-category data; explicit-consent requirement not yet confirmed."
    referral: {gap: GAP-SYNTH-021, target: "R15/DPO", question: "Is explicit consent required and is the current flow sufficient?", trigger: REG-T-01}
  B3_access_control:
    outcome: clear
    basis: "Cycle data encrypted at rest/in transit; strictest tier; least-privilege verified in design doc DS-SYNTH-3."
  B4_medical_claim:
    outcome: redesign
    basis: "Draft copy 'predicts your symptoms' implies a clinical/monitoring function (B4-01)."
    required_change: "Reword to a non-clinical, uncertainty-bearing behavioral note; add 'not a medical device / not a substitute for care' framing (B4-05)."
  B5_escalation:
    outcome: clear
    basis: "Feature surfaces no red-flag/crisis path (B5-01 = N/A, recorded); no disclosure channel added."
  B6_clinical_review:
    outcome: investigate
    basis: "Health-adjacent inference present; R14 has not yet signed this version (B6-02)."
    referral: {gap: GAP-SYNTH-022, target: "R14", question: "Clinical sign-off on the inference and its framing."}
  B7_regulatory_triggers:
    outcome: investigate
    basis: "REG-T-01 fired (special-category inference); REG-T-03 unknown pending B4 rewording."
    referral: {gap: GAP-SYNTH-023, target: "R15/DPO (+ counsel if REG-T-03 confirms)", question: "DPIA need; SaMD question if any monitoring claim survives."}

triggers_fired:
  - {id: REG-T-01, fired: yes,     routing: "R15/DPO — DPIA question"}
  - {id: REG-T-03, fired: unknown, routing: "R14 + counsel — pending B4 rewording"}
  - {id: REG-T-07, fired: yes,     routing: "R15 + R05 — HealthKit/App Store health-data rules"}
  - {id: REG-T-02, fired: no,      routing: "n/a — no new processor"}

overall: redesign          # worst non-referral is redesign; two investigates keep it referred/blocking either way
signers:
  - {domain: [B1,B2,B3,B7], role: R15, sod_attestation: "not the proposing role"}
  - {domain: [B4,B5,B6],    role: R14, sod_attestation: "not the proposing role"}
  date: synthetic
```

**Why this run is correct.** The overall is non-`clear` because four of seven domains are non-`clear`; by P2 the verdict is the worst outcome, and the two `investigate` referrals (B2, B6, B7) **independently** block clearance until R15/DPO, R14, and — if REG-T-03 confirms — counsel determine the open questions (P4). The example never asserts that the feature *is* lawful, *is* a device, or *is* safe; it records exactly what must change (B1, B4) and who must decide (B2, B6, B7). It is left at `status: referred`, honouring H1.

---

## 7. Forbidden values and automatic failures

A `PCB` run exhibiting any of the following is **void or a review failure**. These make fabrication and self-clearance detectable.

| # | Forbidden value / condition | Why it fails | Rule |
|---|---|---|---|
| **F-1** | A domain marked `clear` with **no recorded basis** (blank, or "no concern noticed") | Clearance by omission; silence treated as safety | P3 |
| **F-2** | A **value score, MVP decision, or build verdict** recorded while `overall ≠ clear` | Compensating a boundary with product value | P1/P2, §3.4, `prd.md` §9 |
| **F-3** | An **averaged or weighted** overall (e.g. "6 clears, 1 block → pass") | Gates are non-compensable, not scored | P2, `prd.md` §9 |
| **F-4** | A **medical/clinical-outcome claim** marked `clear` with no graded `EVD` source, or resting on engagement data | Fabricated/unprovable clinical claim | B4, `prd.md` §4/§3 |
| **F-5** | A **fired or `unknown` §5 trigger** cleared in-Lab without a qualified referral/determination | The Lab self-clearing a determination it is not authorized to make | P4, B7-03 |
| **F-6** | A boundary **signed by the proposing/designing role alone** | No separation of duties | P5 |
| **F-7** | A B7 run with an **unevaluated** `REG-T` trigger, or a `data_inventory` element with `special_category` guessed to `no` without basis | Hidden regulatory exposure; guessed sensitivity | B7-01, B1 |
| **F-8** | An **escalation path asserted** (B5) with a **guessed/region-wrong resource**, or a red-flag path with **no** escalation | Unsafe clinical routing | B5 |
| **F-9** | A `PCB` run reaching **`cleared`** inside this v0.1 document | Clearing requires real artifacts that do not exist | H1 |
| **F-10** | Any statement that a framework **"applies"/"does not apply"** or that the product **"is compliant"**, made in-Lab without counsel | Fabricated legal determination | §0 no-fabrication statement, P4 |

---

## 8. How this checklist is used (process placement)

1. **Trigger (§3.1).** The TASK-033 safety gate routes a capability here, or a TASK-039 `health-data: yes` surface / a claim / a disclosure path calls it.
2. **Register the run.** Open a `PCB` record; draft the `data_inventory` (every element, health-adjacency and special-category tagged; `unknown` allowed, never guessed).
3. **Sign the seven domains (§4)** with the accountable signers (R15 privacy-side, R14 clinical-side), separation of duties attested (P5), each outcome evidenced (P3).
4. **Evaluate the §5 triggers (B7).** Every `REG-T` marked `yes/no/unknown`; every `yes/unknown` routed to a referral and logged to the compliance risk register and a `GAP`/`DEC` (`→ TASK-008`/`TASK-009`).
5. **Aggregate (§6).** Overall = worst domain outcome. Non-`clear` ⇒ not boundary-admissible; feature cannot be value-scored (`→ TASK-033`/`TASK-034`) or decided (`→ TASK-035`).
6. **Route the outcome.** `redesign` → design loop with the named change, re-run all seven (§3.5). `investigate` → park as `referred` until the named target determines the question. `block` → innovation backlog with rationale, never deleted (`prd.md` §11).
7. **Re-run on change (P1).** Any material change invalidates the run.

---

## 9. Dependencies, open unknowns, and change log

### 9.1 Dependencies
- **`↔ TASK-033` (capability safety gate):** the §4.1 clinical / §4.2 privacy gates *call* this checklist; this checklist's outcome vocabulary is identical so results feed back without translation.
- **`↔ TASK-039` (iOS inventory):** every `health-data: yes` surface routes here; this checklist consumes the surface's data-boundary note and does not re-derive its permission/entitlement contract.
- **`↔ TASK-004` (grading) / `↔ TASK-005` (EVD):** B4 reads graded `EVD` to admit a health claim; B1/B3 bases cite `EVD`.
- **`↔ TASK-008` (gap/contradiction log):** every `investigate` opens a `GAP`; contested clinical points log as `CON`.
- **`↔ TASK-009` (DEC/EXP registers):** referrals and required validation plans become `DEC`/`EXP` entries.
- **`→ TASK-026` (recruitment/consent pack):** distinct — that governs *research-participant* consent; this governs the *product's* data/clinical boundaries. Shared consent principles, different subjects.
- **`→ TASK-035` (decision form) / `→ TASK-037` (build/buy):** a feature must be boundary-admissible (overall `clear`) before either proceeds.
- **Compliance risk register** (`prd.md` §2 R15 deliverable): the §5 referrals are logged there.

### 9.2 Open unknowns (recorded, not guessed)
- **HerRays' operating jurisdictions and the full list of applicable regimes are not fixed.** The PRD names GDPR explicitly; other frameworks in §5 are conditional on jurisdiction and are treated conservatively (evaluate, refer) until R15/counsel fix the scope. This is an `open-question`, not a gap in the deliverable.
- **Whether any HerRays feature constitutes a regulated medical device (SaMD)** is undetermined and reserved to R14 + regulatory counsel (REG-T-03). This checklist deliberately makes no such determination.
- **Exact DPIA necessity, lawful-basis sufficiency, and processor-agreement adequacy** are reserved to R15/DPO; this checklist routes them, it does not decide them.
- **Region-specific clinical-escalation resources** (B5-04) are undetermined and must be supplied by R14 per jurisdiction; no resource is hard-coded here.

### 9.3 Change log
- **v0.1 (2026-11-23):** Initial checklist. Seven boundary domains (B1–B7) mapped 1:1 to the acceptance-criteria terms (data minimization, consent, access control, medical claims, escalation, clinical review, regulatory assessment triggers); four-outcome vocabulary aligned to TASK-033; `PCB` record contract; `REG-T` regulatory-assessment trigger register (§5); non-compensability aggregation (§6); one synthetic worked run (§6.2); forbidden-value catalogue (§7); dependencies and open unknowns (§9). No real clinical, privacy, legal, or test result asserted; no framework applicability concluded; no `PCB` run cleared (H1). Status: **Proposed, not yet run.**
