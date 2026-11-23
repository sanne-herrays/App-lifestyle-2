# HerRays Capability Red-Team Challenge Protocol

**Deliverable:** TASK-036 — Create the capability red-team challenge protocol
**Workstream:** Capability Extraction (WS02 → feeds Phase 4 Capability Review, `prd.md` §5 Phase 4 / §13 Prompt 07)
**Version:** 0.1 · **Status:** Proposed — protocol defined, not yet run against any capability
**Owner (accountable role):** R01 Head of Product (owns the Capability Review Board verdict) · **Independence steward / convenor:** Program Director (governance hat, guarantees recusal and non-dismissal)
**Challenge authorship (rotating, never the proposer):** R02 Behavioral scientist · R03 Senior UX · R07 UX researcher · R09 Growth/analyst · R13 QA/accessibility · R14 Clinical reviewer · R15 Privacy/regulatory reviewer — per TASK-003 RACI; the role that extracted the capability is **recused** from challenging it.
**Source basis:** `prd.md` §5 Phase 4 ("Red-team every high-priority item"; "First apply mandatory clinical, privacy, ethics, accessibility and unsupported-claim gates … Then assess … Record Adopt/Adapt/Invent/Reject/Defer and rationale, confidence, dependencies, smallest test and owner. Do not turn this into a feature shopping list."), §6 ("Assess risks of guilt, compulsion, burden and excessive tracking"; "ethical anti-patterns"), §7 (the "without forcing them to become data analysts" simpler-alternative example), §8 ("Invisible App … meaningful value with minimal daily screen interaction"), §9 ("Clinical safety, privacy and accessibility are mandatory gates, not compensable weighted scores"), §11 ("Polished unsupported reports do not pass"; preserve rejected concepts in an innovation backlog), §3 ("Engagement does not establish clinical efficacy"; "Novelty and animation costs need testing"; "Rigidity and pressure are hypotheses to test"), §4 ("Do not interpret a high grade on usability as a high grade on health impact"; "Never fabricate … clinical outcomes"), §13 Prompt 06 ("Distinguish popularity from efficacy. Preserve specialist disagreements"), Prompt 07 ("Independently challenge high-priority capabilities, compare conventional/adapted/unconventional implementations … Produce decision register, anti-patterns, red-team findings and prioritized experiments"), §15 Final decision rule ("the product that delivers meaningful user value with the least unnecessary effort"), executive mandate ("enjoyable, effortless, intelligent, empowering, non-patronizing and clinically responsible"). Interlocks with TASK-030 (`CAP` schema), TASK-033 (safety gate), TASK-034 (scorecard), TASK-035 (decision form), TASK-009 (DEC/EXP registers), TASK-008 (gap/contradiction log), TASK-004 (evidence grading).

---

## 0. What this document is (and is not)

This document defines the **capability red-team challenge protocol** — the structured, adversarial challenge that every **high-priority** extracted capability (`CAP` record, `→ TASK-030`) must survive before it can be Adopted, Adapted or Invented-around. The PRD mandates it in one line — *"Red-team every high-priority item"* (`prd.md` §5 Phase 4) — and names its output in another — *"Independently challenge high-priority capabilities … Produce decision register, anti-patterns, red-team findings and prioritized experiments"* (Prompt 07). This protocol turns that mandate into a reproducible method: six fixed challenge domains, a question bank for each, and a hard rule that **every challenge is dispositioned with a documented, evidenced rebuttal or a logged revision — never waved away.**

It is a **governance / review-protocol artifact**, adversarial by design. Where the safety gate (`→ TASK-033`) asks *"is this capability safe enough to proceed?"* and the scorecard (`→ TASK-034`) asks *"how much value does it offer?"*, the red-team asks the opposite question on purpose: **"here is why this capability is harmful, habit-forming in the wrong way, anxiety-producing, attention-greedy, over-generalised, or needlessly complex — prove us wrong."** The capability carries the burden of proof; silence or confidence is not a rebuttal.

> **No-fabrication statement.** This protocol asserts no real research finding, user quote, clinical outcome, effect size, metric, or test result. It cites no real `EVD` record. The scientific frameworks it references (Self-Determination Theory, COM-B/BCTTv1, habit-automaticity instruments, ethical-anti-pattern / "dark pattern" taxonomies, the pre-mortem method) are named as **published tools**, not as evidence that any effect has been measured here. The single worked challenge run in §9 re-uses the PRD's own *illustrative* streak capability (`prd.md` §5 Phase 3) with clearly-marked synthetic ids (`CAP-SYNTH-*`, `EVD-SYNTH-*`, `EXP-SYNTH-*`) and exists only to show the protocol runs and blocks correctly. Every rebuttal in that example is labelled as a *demonstration of the disposition rule*, not a judgement about any real app. The protocol is built to make unsupported confidence **detectable**: a challenge may be closed as `rebutted` only when a graded source is attached (§4.2), and popularity, engagement or "users love it" can never rebut a harm, anxiety or dependency challenge (§7, forbidden move F3).

**Scope boundary (what this task is and is not).**

| This protocol **owns** | This protocol **does not own** (and must not duplicate) |
|---|---|
| The six adversarial **challenge domains**, their question banks, and the valid-rebuttal / forced-revision rules (§3). | The **evidence record schema** and grades A–D — `↔ TASK-004` / `↔ TASK-005`. The red-team *reads* grades to judge a rebuttal; it does not assign them. |
| The **disposition model** — `rebutted` / `revise` / `reject` / `defer` / `accept-as-residual-risk` — and the "documented rebuttal or revision" enforcement (§4). | The **mandatory safety gate** (clinical/privacy/manipulation/accessibility/unsupported-claim screen) — `→ TASK-033`. Red-team runs *after* a `pass` there and may *re-open* it, but is not a substitute for it (§2.1). |
| The **challenge record** (`RTC-NNN`) fields, lifecycle and aggregation into a capability-level red-team verdict (§5, §8). | The **weighted 1–5 value scorecard** and 0–100 output — `→ TASK-034`. The red-team can veto a decision regardless of score; it does not compute the score. |
| The **session format** — independence rules, timing, roles, pre-mortem framing (§6). | The **Adopt/Adapt/Invent/Reject/Defer verdict and its intake form** — `→ TASK-035`. Red-team findings are a *mandatory input* to that form; the verdict itself is recorded there, not here. |
| The copy-ready blank challenge sheet + one worked synthetic run (§9, §10). | The **DEC/EXP registers** that store the resulting decision and experiments — `↔ TASK-009`; the **gap/contradiction log** an unresolved challenge opens — `↔ TASK-008`. |

Scope discipline, per the workflow rules: this is a **standalone deliverable**. It defines *how a capability is challenged and how each challenge is dispositioned*; it records **no actual red-team finding** about any real capability.

---

## 1. Purpose and non-negotiables

The red-team exists because the three instruments that precede it are, by construction, **sympathetic** to the capability. Extraction (`→ TASK-030`) describes it at its best; the safety gate (`→ TASK-033`) clears a floor of harm; the scorecard (`→ TASK-034`) measures its upside. None of them is *trying to kill the idea*. A capability can be safe-enough, high-scoring, and still be a quiet mistake — habit-forming in a way that erodes the user's own agency, anxiety-producing under a cheerful surface, or simply a heavier solution than the user's problem requires. The PRD's final decision rule is explicit that *more* is not the goal: build *"the product that delivers meaningful user value with the least unnecessary effort, not the one with the most features, highest engagement count, or prettiest prototype"* (`prd.md` §15). The red-team is the one station whose job is to argue for *less*, and for *harm*, on the record.

It does five jobs:

1. **Institutionalise dissent.** Prompt 06/07 require the Lab to *"Preserve specialist disagreements"* and produce *"anti-patterns, red-team findings."* Left to goodwill, challenge evaporates under the momentum of a promising idea. This protocol makes challenge a *required, logged step* with named domains, so a capability cannot reach a decision without first having been argued against in writing.
2. **Put the burden of proof on the capability.** The adversarial default is that **the challenge stands** unless rebutted with evidence. A capability does not earn adoption by being un-refuted in conversation; it earns it by surviving a written challenge whose rebuttal cites a graded source (§4.2). This is the inverse of the scorecard's generous default and is deliberate.
3. **Force a disposition, never a dismissal.** The acceptance-criteria core: **every challenge is closed only by a documented rebuttal or a documented revision** (`revise` / `reject` / `defer` / explicit `accept-as-residual-risk` with sign-off). "We discussed it and it's fine" is not a disposition. A challenge left open blocks the decision (§8).
4. **Feed decisions and experiments, not a graveyard.** Red-team findings route into the `DEC` decision (`→ TASK-035`/`TASK-009`) and the prioritised experiment backlog (`EXP`, Prompt 07). An unresolved but important challenge becomes a `GAP` (`→ TASK-008`) or a pre-registered `EXP`, not a forgotten note.
5. **Protect the user HerRays is for.** Every domain is tuned to the audience — women in midlife — and to the brand's non-negotiables: *enjoyable, effortless, empowering, non-patronizing, clinically responsible* (executive mandate). A capability that is engaging-but-patronising, or sticky-but-disempowering, fails the red-team even if it scores well.

**Four non-negotiable rules, enforced throughout:**

- **RT1 — No silent dismissal. Every challenge gets a documented disposition.** A `RTC` challenge record is closed only by one of the five dispositions in §4, each requiring its stated minimum evidence/action. A challenge may not be closed `rebutted` on assertion, consensus, or "the proposer explained it." Closing without the required field is a §7 validation failure (F1). *Uncertainty is recordable:* a challenge the team cannot resolve is `defer`red into a `GAP`/`EXP`, not closed.
- **RT2 — Independence. The proposer does not challenge, rebut, or close their own capability.** The role that authored or extracted the `CAP` is **recused** from writing its challenges and from signing their dispositions; challenges are authored by other specialists and dispositions are signed by the Review Board, not the proposer (`prd.md` §2 "Specialists independently audit … before reconciliation"; TASK-003 separation of duties). A capability red-teamed only by its own author is void (F2).
- **RT3 — Adversarial default: the challenge stands until evidenced away.** For the three safety-adjacent domains — **harm, dependency, anxiety** — the capability may not proceed while any `critical` or `high` challenge is un-`rebutted`; a `rebutted` disposition requires a graded `EVD` source (grade C or better for `high`; A/B for `critical`) or a committed `EXP`. Popularity, engagement, delight or scorecard value **never** rebut these three domains (F3; `prd.md` §3 "Engagement does not establish clinical efficacy," §4 "Do not interpret a high grade on usability as a high grade on health impact").
- **RT4 — Findings are preserved and routed, never deleted.** Every `RTC` record — rebutted, revised, rejected or deferred — is retained (append-only) and linked to the `DEC` it informs and any `EXP`/`GAP` it spawns. A `reject` is preserved in the innovation backlog with rationale (`prd.md` §11). Deleting or overwriting a challenge to clear a path is a §7 failure (F6).

---

## 2. When the red-team runs, and on what

### 2.1 Position in the Phase 4 sequence
The order is fixed and matches the PRD's "gates first, then assess" instruction (`prd.md` §5 Phase 4):

```
CAP reaches record_status: in_review  (five layers populated; → TASK-030 §2.3)
        │
        ▼
[1] SAFETY GATE  (→ TASK-033)         all five domains must read `pass`
        │  (fail → redesign/investigate/reject; red-team does not run yet)
        ▼
[2] VALUE SCORECARD (→ TASK-034)      admissible only after an all-`pass` gate
        │
        ▼
[3] RED-TEAM  (THIS PROTOCOL)         runs on HIGH-PRIORITY capabilities (§2.2)
        │  every challenge dispositioned (§4); may RE-OPEN the safety gate
        ▼
[4] DECISION  (→ TASK-035 / TASK-009) Adopt/Adapt/Invent/Reject/Defer — red-team
                                       findings are a mandatory input (§8)
```

The red-team is **after** the safety gate, not instead of it. The safety gate is a *floor* (pass/redesign/investigate/reject on five mandatory domains); the red-team is an *adversarial stress test* on a broader set of concerns, several of which (harm, anxiety, dependency) overlap the gate but push harder and demand an evidenced rebuttal rather than the gate's "no concern found." **A red-team finding can re-open the safety gate**: if the red-team surfaces a clinical, privacy, manipulation, accessibility or unsupported-claim concern the gate missed, the capability returns to `→ TASK-033` and the gate verdict is re-issued before any decision (§8.3). The red-team never *overrides* a safety `reject`; it can only *tighten*, never loosen, the safety posture.

### 2.2 What counts as "high-priority" (the selection rule)
The PRD red-teams *"every high-priority item"*, not every capability (`prd.md` §5 Phase 4). A capability enters mandatory red-team if **any** of the following is true; borderline cases default **in** (red-teaming a safe idea costs an hour; skipping a harmful one costs the user):

| Trigger | Rationale / PRD anchor |
|---|---|
| T1 — Scorecard total ≥ the Review Board's priority threshold (proposed ≥ 60/100) | High-value capabilities are the ones most likely to be adopted on momentum; `→ TASK-034`. |
| T2 — The capability touches **behaviour change, habit formation, streaks/streak-like pressure, reminders, tracking, or progress framing** | These are the mechanisms the PRD flags for guilt/compulsion/burden risk (`prd.md` §6; §3 streak/"rigidity and pressure" cautions). |
| T3 — The capability makes or implies a **health, wellbeing or outcome claim** | Over-claiming is a named failure (`prd.md` §4, §11); efficacy claims demand the hardest challenge. |
| T4 — The capability is a candidate for **Invent** or **Adapt** (i.e., HerRays would build something new) | Invention has no prior art to lean on; `prd.md` §5 Phase 3 requires "three alternatives plus one unconventional." |
| T5 — Any safety-gate domain closed as `investigate` or required a `redesign` loop before `pass` | A capability that *just* cleared the floor warrants the stress test. |
| T6 — A specialist, the clinical (R14) or privacy (R15) reviewer, or the Program Director **requests** it | Dissent is sufficient cause; `prd.md` Prompt 06 "preserve disagreements." |

Capabilities **not** meeting any trigger may be passed to decision with a one-line *"red-team not triggered: reasons"* note in the `DEC` record (auditable, not silent). The Program Director may still pull any capability in.

---

## 3. The six challenge domains

Each capability selected for red-team is challenged across **all six** domains below. The domains are the six named in this task's acceptance criteria — **harm, dependency, anxiety, screen time, generalizability, simpler alternatives** — each operationalised into (a) the adversarial question it exists to force, (b) a question bank, (c) what a *valid rebuttal* must contain, and (d) what *forces a revision*. The six are fixed; a red-team that skips a domain is incomplete (F5). A domain may legitimately close `rebutted` or `n/a-with-reason` — but never *unasked*.

A note on stance: the questions are written in the **adversary's voice** on purpose. The red-teamer's job is not to be fair to the capability; it is to make the strongest case against it so that the Review Board's eventual *"we adopt it anyway"* is earned. Fairness is restored at disposition (§4), where the capability gets to answer.

### 3.1 Domain D1 — Harm
**The question it forces:** *Could this capability hurt the user — clinically, psychologically, or behaviourally — even when it "works"?*
**Why (PRD):** §6 "risks of guilt, compulsion, burden and excessive tracking"; §3 streak caution "shame and all-or-nothing behavior after a missed day"; §9 clinical safety is a non-compensable gate; executive mandate "clinically responsible."

**Question bank (D1):**
- D1.1 What is the worst thing that happens to a user for whom this capability works *exactly as designed*? (Not the bug case — the success case.)
- D1.2 On a bad day — low energy, illness, grief, a flare of a chronic condition, a disrupted schedule — does this capability add pressure, guilt, or a sense of failure? (The PRD's "low-energy day" and "missed day" scenarios, §5 Phase 2.)
- D1.3 Does it reward compulsive or all-or-nothing behaviour? Does breaking a chain, missing a target, or "falling behind" feel punitive?
- D1.4 Could it encourage behaviour that is unsafe for *some* users (e.g., over-exercise, under-eating, ignoring medical advice, obsessive self-weighing) even if neutral for most?
- D1.5 Does it make or imply a health claim the evidence does not support? Could a user reasonably infer a clinical benefit that has not been demonstrated? (`prd.md` §4.)
- D1.6 Is there a foreseeable misuse by a vulnerable sub-group (e.g., a user with a history of disordered eating, anxiety, or OCD-spectrum patterns)?
- D1.7 Does the capability's framing patronise, infantilise, or shame the user? (Executive mandate: "non-patronizing.")

**A valid rebuttal must** cite either (a) a graded `EVD` source showing the harm is absent or mitigated in a comparable population (grade A/B for a `critical` harm, C+ for `high`), **or** (b) a named, specified design mitigation already present in the capability spec (which converts the challenge to `revise` if the mitigation is not yet built), **or** (c) a committed pre-registered `EXP` that will test for the harm before launch. *Absence of reported harm in app-store reviews is not a rebuttal* (reviews cap at grade C and self-select; `↔ TASK-004`).
**Forces a revision/reject when:** the harm is intrinsic to the mechanism (e.g., a punitive reset is the mechanism) → `revise` to a non-punitive design or `reject`; a clinical harm to a vulnerable sub-group cannot be excluded → `reject` or `defer` behind an `EXP` with clinical (R14) sign-off; an unsupported health claim is present → `revise` the claim out (`prd.md` §4/§11).

### 3.2 Domain D2 — Dependency
**The question it forces:** *Does this capability build the user's own capability and autonomy, or does it make them need the app?*
**Why (PRD):** Self-Determination Theory autonomy (§2/§6 "autonomy"); the *"empowering"* mandate; §3 habit-automaticity question ("does intention become action?"); §15 "meaningful user value with the least unnecessary effort." A behaviour-change app that works has an exit: the habit becomes automatic and the scaffolding can fall away. Engagement-maximising design pulls the opposite way.

**Question bank (D2):**
- D2.1 What is the user's *graduation path*? If the capability succeeds, does the user eventually need it less — or more?
- D2.2 Does the capability create a reward loop (variable reward, streak, points, notification pull) whose purpose is app return rather than the user's real-world behaviour? (The "Hooked"-style engagement trap, named as an anti-pattern to challenge, not to copy.)
- D2.3 If the app disappeared tomorrow, would the user keep the behaviour? If not, has the app built a habit or a dependency on itself?
- D2.4 Does it substitute the app's judgement for the user's (telling her what to do) rather than building her own competence and confidence? (SDT competence; "empowering, non-patronizing.")
- D2.5 Does it monetise dependency — i.e., is the paywall positioned so that stopping the subscription means losing the behaviour, not just a feature?
- D2.6 Does the capability respect the user's right to *leave well* — pause, export, downgrade, or stop — without penalty or dark-pattern friction? (`↔ TASK-021`/`TASK-033` dark-pattern checks.)

**A valid rebuttal must** show the capability has a **defined off-ramp or automaticity target** (e.g., "the prompt fades as the behaviour self-initiates; success = user acts without the cue," measurable via a habit-automaticity instrument such as the SRBAI, referenced as a published tool), *or* cite evidence that the reward loop tracks a real-world outcome rather than app-opens (`prd.md` §3 "not merely app opens"), *or* a committed `EXP` distinguishing "perceived autonomy and repeated real-world action" from "engagement." *A high retention or DAU figure is not a rebuttal* — it is consistent with dependency (F3).
**Forces a revision/reject when:** the capability's core loop is engagement-for-its-own-sake with no real-world anchor → `revise` toward a real-world behaviour anchor and a graduation path, or `reject`; the paywall holds the behaviour hostage → `revise` (decouple the habit from the subscription); no graduation path can be articulated → at minimum `defer` behind an autonomy `EXP`.

### 3.3 Domain D3 — Anxiety
**The question it forces:** *Does this capability generate pressure, comparison, or worry — the opposite of "enjoyable, effortless"?*
**Why (PRD):** executive mandate "enjoyable, effortless"; §6 guilt/compulsion risks; §3 "rigidity and pressure are hypotheses to test." Anxiety is the sibling of harm but subtler: a capability can be clinically safe and still make the user feel *behind*, *watched*, or *not enough*.

**Question bank (D3):**
- D3.1 Does the capability introduce a number, streak, score, ranking, or goal the user can *fail*? What does failing feel like?
- D3.2 Does it create social or self-comparison (leaderboards, averages, "people like you," before/after)? For midlife women specifically, could health/body comparison be harmful?
- D3.3 Do its notifications, reminders, or nudges create a sense of obligation, surveillance, or nagging? Can the user turn them off without losing core value?
- D3.4 Does surfacing health or body data create anxiety disproportionate to its usefulness? (The §7 example: value *without forcing them to become data analysts*.)
- D3.5 Does the capability catastrophise a lapse — red marks, broken chains, "you've lost your progress" — rather than normalising recovery? (`prd.md` §3 streak; §5 Phase 2 "missed day/recovery.")
- D3.6 Is the default state calm, or does it manufacture urgency to drive engagement?

**A valid rebuttal must** show a specific **calming/forgiving design choice** in the spec (non-punitive recovery, opt-out notifications that preserve core value, data shown only with interpretation and reassurance), *or* evidence from a comparable intervention that the framing reduces rather than raises distress, *or* a committed `EXP` measuring perceived pressure/anxiety (e.g., a validated distress or pressure item), not just task success.
**Forces a revision/reject when:** the capability's motivational engine *is* manufactured pressure or comparison → `revise` to a lower-pressure mechanism (the PRD's streak→"flexible weekly consistency" move is the template) or `reject`; data is surfaced without interpretation in a way that predictably worries the user → `revise` (add interpretation/reassurance or suppress by default).

### 3.4 Domain D4 — Screen time / attention cost
**The question it forces:** *Does this capability demand more of the user's attention and daily screen time than the value it returns — and could the same value arrive with less?*
**Why (PRD):** §8 Studio C "Invisible App — meaningful value with minimal daily screen interaction"; §15 "least unnecessary effort"; §3 "(Not Boring) Habits … Novelty and animation costs need testing"; executive "effortless." HerRays is a *lifestyle* product for busy women; attention is the scarcest resource and the easiest to over-spend.

**Question bank (D4):**
- D4.1 How many taps, screens, seconds, and decisions does this capability cost the user per day? Is that proportionate to the benefit?
- D4.2 Could the same user value be delivered with *less* screen time — a widget, a notification, a Live Activity, an on-device action, or nothing at all? (`→ TASK-039` iOS integration inventory.)
- D4.3 Does the capability add engagement that serves the app's metrics (session length, DAU) but not the user's goal?
- D4.4 Does its animation / motion / novelty cost attention and performance without a behavioural payoff? (`prd.md` §3 (Not Boring) caution; `↔ TASK-020` motion audit.)
- D4.5 Does it respect reduced-interaction and low-energy days — can the user get value *without* opening the app?
- D4.6 Over a week, does total attention demanded trend down (habit forming, scaffolding fading) or up (escalating engagement)?

**A valid rebuttal must** quantify the attention cost (tap/second/decision count, measurable in the teardown/journey instruments `↔ TASK-016`/`TASK-017`) and show it is **proportionate**, *or* show a lower-attention delivery was considered and rejected for a stated reason, *or* commit an `EXP` comparing the capability against a minimal-interaction alternative on *both* value and attention cost.
**Forces a revision/reject when:** a materially cheaper delivery (widget/notification/on-device) would give the same value → `revise` toward the cheaper path (this is the §15 decision rule applied); the capability's attention demand escalates over time with no user-goal justification → `revise` or `reject`; motion/novelty cost has no behavioural payoff → `revise` (reduce) or route to an `EXP` (`prd.md` §3).

### 3.5 Domain D5 — Generalizability
**The question it forces:** *Does the evidence behind this capability actually transfer to HerRays' users — women in midlife — or are we over-claiming from one app, one study, or one population?*
**Why (PRD):** §4 "transferability to midlife women"; §6 "extract populations, interventions, comparators … and transferability"; §3 "Engagement does not establish clinical efficacy"; Prompt 06 "Distinguish popularity from efficacy." This is the epistemic challenge: the capability may be real, but the *reason to believe it works here* may be thin.

**Question bank (D5):**
- D5.1 What population produced the evidence for this capability's mechanism? Does it include women in midlife, or is it extrapolated from students, athletes, or a general-productivity audience?
- D5.2 Is the capability's support *observation of one app* (grade C, competitor pattern) being treated as *efficacy* (grade A/B)? (`↔ TASK-004` grade-ceiling rules.)
- D5.3 Does the evidence measure the outcome we care about (adherence, automaticity, wellbeing) or a proxy (app engagement, ratings, downloads)?
- D5.4 Is the mechanism's effect size, if any, from a context (duration, comparator, intensity) that resembles HerRays' use? Or is "it worked in a 6-week RCT on a different behaviour" being stretched to "it will work for sleep/stress in midlife indefinitely"?
- D5.5 Are there sub-groups (cultural, socioeconomic, health-literacy, tech-comfort, menopausal-status) for whom the capability likely does *not* generalise? (`prd.md` §6 "varied set of women … differences in health goals, schedules, tech comfort.")
- D5.6 What is the single weakest link in the chain from "this evidence exists" to "this will help our user"? Is that link graded honestly?

**A valid rebuttal must** either (a) cite transferable evidence with the population/comparator/duration stated and a confidence grade that does not exceed its source ceiling (`↔ TASK-004`), *or* (b) **honestly down-grade the claim** — restating the capability as a *hypothesis to test* with a committed `EXP` on the HerRays population (this is a fully valid disposition: the PRD prefers an honest grade-D "invention to test" over a fake grade-B). *Popularity, awards, download estimates, or engagement are never generalizability evidence* (F3; `prd.md` §3/§10).
**Forces a revision/reject when:** the capability is being carried by a grade it cannot support → `revise` the claim/grade down and add an `EXP`; the evidence is for a population or outcome that plausibly does not transfer and no HerRays-population test is feasible in scope → `defer`; the capability depends on an effect that contradicts stronger evidence → route the contradiction to `↔ TASK-008` and `reject`/`defer`.

### 3.6 Domain D6 — Simpler alternatives
**The question it forces:** *Is there a simpler, cheaper, lower-risk way to deliver the same user value — and have we honestly compared against it, including doing nothing?*
**Why (PRD):** §15 "least unnecessary effort … not the one with the most features"; §7 example reframing a dashboard as *"how might we reassure users that their efforts matter without forcing them to become data analysts?"*; §5 Phase 3 "three alternatives plus one unconventional alternative"; §5 Phase 4 "Do not turn this into a feature shopping list."

**Question bank (D6):**
- D6.1 What is the *user job* this capability serves (not the feature — the job)? What is the simplest possible thing that does that job?
- D6.2 Have we compared the capability against: (a) a markedly simpler version, (b) an existing HerRays capability that could absorb it, and (c) **doing nothing**? (The null option is mandatory.)
- D6.3 Is the capability's complexity serving the *user*, or the demo? Would a first-time user understand it without instruction?
- D6.4 Does adding this capability increase the cognitive/attention load of the whole product more than its standalone value justifies? (Capabilities compound; `↔ TASK-034` long-term-usefulness.)
- D6.5 For an `Invent`/`Adapt`: is the unconventional-but-simpler alternative actually simpler, or just different? (`prd.md` §5 Phase 3.)
- D6.6 If we shipped the simplest version first and only added complexity when a real user asked, what would we lose?

**A valid rebuttal must** present the **explicit comparison** — the simpler alternative(s), including the null, and a stated reason the chosen version's *additional* value justifies its *additional* cost/risk (ideally testable). A capability red-teamed on D6 must have at least weighed the null option on the record (this mirrors the decision form's `alternatives_considered`, `→ TASK-035` C3). *"It's more complete / more delightful / more impressive" is not a rebuttal* unless tied to a user job and a cost it justifies.
**Forces a revision/reject when:** a simpler alternative delivers the same job at lower cost/risk → `revise` down to it (and bank the complex version in the backlog); the capability's complexity is unjustified by any user job → `reject`; the comparison was never done → the challenge stays open and **blocks the decision** until it is (RT1).

---

## 4. Disposition — "documented rebuttal or revision"

This section is the enforceable heart of the acceptance criteria: *require documented rebuttal or revision.* Every `RTC` challenge is closed by **exactly one** of five dispositions, each with a **mandatory minimum** it cannot be closed without. There is no sixth "noted / dismissed" option.

### 4.1 The five dispositions

| Disposition | Meaning | Mandatory minimum to close (enforced; §7) | Effect on the decision (§8) |
|---|---|---|---|
| **`rebutted`** | The challenge is answered; the concern does not hold *as evidenced*. | A written rebuttal **plus** a linked basis: a graded `EVD`/`CAP`/`NEED` id (meeting the grade floor in §4.2) **or** a specified in-spec mitigation already present **or** a committed pre-registered `EXP` that resolves it. Signed by a non-proposer (RT2). | Does not block. The rebuttal is retained as the reason the concern is cleared. |
| **`revise`** | The challenge is valid; the capability is **changed** to resolve it. | A **named, specific change** to the `CAP` spec (`↔ TASK-030`), an owner, and a re-gate/re-score note if the change is material. The revised capability is re-run from the affected stage. | Blocks adoption of the *un-revised* capability; the revised version proceeds. Logged as a capability revision, not a dismissal. |
| **`reject`** | The challenge is disqualifying within scope; the capability (or this version) does not proceed. | A rationale tying the reject to the domain and the intrinsic (not fixable) nature of the concern. Preserved in the innovation backlog (`prd.md` §11; RT4). | Forces `decision_type: reject` (or `defer`) in the decision form (`→ TASK-035`). Never deleted. |
| **`defer`** | Valid and unresolved; cannot be answered with evidence or design *now*. | A `GAP` record (`→ TASK-008`) **or** a pre-registered `EXP` (`→ TASK-009`) with owner and next action; a stated reason it cannot resolve now. | Blocks adoption until resolved; capability may sit at `in_review`/`deferred`. The decision may be `defer`, or `adopt` only of the parts not blocked. |
| **`accept-as-residual-risk`** | The concern is real, cannot be fully removed, and the Board accepts it **explicitly** with mitigation and monitoring. | A written risk statement, the mitigation, a **named accountable sign-off** (clinical R14 for harm/health; privacy R15 for data; R01 otherwise), and a monitoring metric (`↔ TASK-001`). **Not available** for a `critical` harm/dependency/anxiety challenge that lacks any mitigation (those must `revise`/`reject`/`defer`). | Does not block, but attaches a tracked residual risk to the `DEC` and a monitoring commitment. The most scrutinised disposition; abused, it becomes the §7 escape hatch F4. |

### 4.2 Evidence floor for a `rebutted` disposition
A rebuttal's strength must match the challenge's severity. The adversarial default (RT3) means the floor is deliberately high for safety-adjacent domains:

| Challenge severity | `rebutted` requires at least… |
|---|---|
| **critical** (foreseeable clinical/psychological harm, hard dependency, acute anxiety) | A grade **A or B** `EVD` source in a comparable population, **or** a built-and-verified mitigation, **or** a concluded `EXP`. A *planned* `EXP` is not enough to rebut a critical — it downgrades to `defer`. |
| **high** | Grade **C or better**, a specified in-spec mitigation, or a committed (pre-registered) `EXP`. |
| **medium** | A reasoned argument with at least a grade **C/D** basis or a design rationale; recorded, not merely spoken. |
| **low** | A recorded reasoned argument. |

Three rebuttal moves are **never** valid, at any severity, for **D1 harm / D2 dependency / D3 anxiety** (RT3, F3): "it's popular / highly rated" · "engagement/retention is high" · "users say they love it in reviews." Popularity and engagement are consistent with *all three* harms and prove none of them (`prd.md` §3, §4).

### 4.3 The closure rule (the one-line enforcement)
> **A capability's red-team is complete only when every one of its `RTC` challenges across all six domains is closed with one of the five §4.1 dispositions and that disposition's mandatory minimum is present and valid. Any challenge still `open`, or closed without its minimum, blocks the Adopt/Adapt/Invent decision (`→ TASK-035`).** A `reject` on any single `critical` harm/dependency/anxiety challenge that cannot be revised away caps the decision at `reject`/`defer`, regardless of scorecard value (non-compensable, `prd.md` §9; RT3).

---

## 5. The challenge record (`RTC`)

Each individual challenge is one `RTC-NNN` record. A capability's red-team is the set of its `RTC` records (≥1 per domain unless a domain closes `n/a-with-reason`). Records are append-only; dispositions are versioned, never overwritten (RT4).

### 5.1 Field dictionary
Requirement markers: **M** = mandatory to open the record · **C** = conditionally mandatory (condition stated) · **O** = optional.

| # | Field | Req | Input | Rule |
|---|---|---|---|---|
| 1 | `rtc_id` | M | `RTC-NNN` | Immutable unique id. |
| 2 | `cap_ref` | M | `CAP-NNN` | The capability challenged (`↔ TASK-030`). One capability per challenge; one challenge per record. |
| 3 | `domain` | M | `harm \| dependency \| anxiety \| screen_time \| generalizability \| simpler_alternatives` | The §3 domain. All six must be represented across the capability's record set (§7 F5). |
| 4 | `challenge` | M | string | The adversarial statement, in the adversary's voice (§3). Must be a *specific* claim of concern, not "concerns about harm." |
| 5 | `question_ref` | O | e.g. `D1.3` | The question-bank item that prompted it (traceability). |
| 6 | `severity` | M | `critical \| high \| medium \| low` | Sets the §4.2 rebuttal floor and the §8 blocking power. Anchored in §5.2. |
| 7 | `challenger_role` | M | role id ≠ proposer | Who authored the challenge. **Must not be the `CAP` proposer** (RT2, F2). |
| 8 | `disposition` | C | one of §4.1 | Blank while `status: open`. Mandatory to close. |
| 9 | `rebuttal_or_change` | C | string + links | The written rebuttal (with `evidence_ref`) **or** the named revision **or** the reject rationale **or** the defer reason. Mandatory for closure; its required content depends on `disposition` (§4.1) and `severity` (§4.2). |
| 10 | `evidence_ref` | C | list of `EVD`/`CAP`/`NEED`/`EXP` ids | Required when `disposition: rebutted` (per §4.2 floor). Each must resolve; grade is read, not assigned (`↔ TASK-004`). |
| 11 | `spawns` | C | `GAP-NNN` / `EXP-NNN` ids | Required when `disposition ∈ {defer}` and recommended for `revise`/`accept-as-residual-risk`. Links to `↔ TASK-008` / `↔ TASK-009`. |
| 12 | `residual_risk` | C | `{statement, mitigation, signoff_role, monitor_metric}` | Required when `disposition: accept-as-residual-risk` (§4.1). |
| 13 | `disposition_signoff` | C | role id ≠ proposer | Who signed the closure. Non-proposer (RT2); R14/R15 where §4.1 requires. |
| 14 | `status` | M | `open \| closed \| reopened` | `open` blocks the decision. `reopened` if new evidence or a safety re-open (§8.3) invalidates a prior closure. |
| 15 | `created_by` / `created_date` / `closed_date` | M/C | provenance | Append-only (`↔ TASK-009 §2.2`). |

### 5.2 Severity anchors
| Severity | Anchor (choose the highest that applies) |
|---|---|
| **critical** | A foreseeable clinical harm, a hard dependency that monetises or entrenches reliance, acute anxiety for a vulnerable sub-group, or an unsupported health claim. Blocks adoption until `revise`/`reject`/`defer`; cannot be `accept-as-residual-risk` without mitigation + R14/R15 sign-off. |
| **high** | A material harm/dependency/anxiety/attention/generalizability concern affecting many users or a plausible sub-group; or a simpler alternative that likely wins. Blocks until dispositioned with a grade-C+ basis. |
| **medium** | A real but bounded concern, or one affecting a minority, or a quality/attention cost. Must be dispositioned but does not alone cap the verdict. |
| **low** | A minor or stylistic concern; recorded and answered for completeness. |

---

## 6. Session format

### 6.1 Independence and roster (RT2)
- **Convenor:** Program Director (independence hat) — ensures the proposer is recused, every domain is covered, and no challenge is closed without its minimum. The convenor does not author challenges or dispositions (neutral chair).
- **Challengers:** ≥3 specialists drawn from R02 (behavioral), R03 (UX), R07 (research), R09 (growth/analyst), R13 (QA/accessibility), R14 (clinical), R15 (privacy) — **excluding** the capability's proposing role. For a capability triggering T2/T3 (behaviour/health), R02 and R14 are mandatory challengers; for data-touching capabilities, R15.
- **Respondent:** the proposing role attends to *answer*, not to challenge or to sign dispositions. Their rebuttals are recorded; their sign-off is not accepted (RT2, F2).
- **Decider:** the Review Board / R01 signs dispositions (with R14/R15 where §4.1 requires). Disagreements are preserved, not resolved by seniority (`prd.md` Prompt 06).

### 6.2 Timeboxed agenda (proposed 60 minutes per high-priority capability)
Adapts the PRD's workshop cadence (`prd.md` §5 Phase 3) to an adversarial frame; the method is a **pre-mortem** (assume the capability shipped and harmed the user — explain how), which is more generative of real challenges than open "any concerns?"

| Time | Segment | Activity |
|---|---|---|
| 0–5 | Frame | Convenor states the capability, its scorecard, its safety-gate result, and the pre-mortem prompt: *"It is a year from now. This capability hurt a user, made her dependent, anxious, or wasted her attention — or a simpler thing would have done. Tell the story of how."* |
| 5–20 | **Independent challenge-writing** | Each challenger writes challenges across all six domains **silently and independently** (no anchoring, mirrors `prd.md` §8 studio independence). One `RTC` per challenge. |
| 20–35 | Surface & severity | Challenges read out, deduplicated, severity-anchored (§5.2). No rebuttal yet — the floor is to hear the case against, fully. |
| 35–55 | Disposition | The respondent answers each challenge; the Board assigns a §4.1 disposition and its mandatory minimum. Unresolved → `defer` into a `GAP`/`EXP`. |
| 55–60 | Aggregate & route | Convenor computes the capability-level verdict (§8), confirms all six domains covered (F5), and routes outputs to the `DEC` (`→ TASK-035`), `EXP` backlog, and any safety re-open (§8.3). |

Capabilities may be red-teamed asynchronously (written challenges collected, dispositioned in a shorter sitting) provided independence (RT2), six-domain coverage (F5), and the closure rule (§4.3) hold.

---

## 7. Forbidden moves — validation failures

A red-team run that does any of the following is **invalid** and must be corrected before the capability proceeds. These are the anti-fabrication and anti-hand-wave guards.

| # | Forbidden move | Why it fails | Rule violated |
|---|---|---|---|
| **F1** | Closing a challenge `rebutted` without a linked basis (no `evidence_ref`, mitigation, or `EXP`) — "we discussed it, it's fine." | A dismissal masquerading as a rebuttal; the documented-rebuttal requirement is the whole point. | RT1, §4.3 |
| **F2** | The capability's proposer authoring its challenges or signing its dispositions. | Destroys adversarial independence; a self-reviewed capability is unchallenged. | RT2 |
| **F3** | Rebutting a **harm / dependency / anxiety** challenge with popularity, ratings, engagement, retention, downloads, or "users love it." | Engagement is consistent with all three harms and establishes none (`prd.md` §3, §4). | RT3, §4.2 |
| **F4** | `accept-as-residual-risk` on a `critical` harm/dependency/anxiety with no mitigation, or without the required R14/R15 sign-off. | Turns the explicit-acceptance escape hatch into a way to wave through intrinsic harm; non-compensable (`prd.md` §9). | §4.1, §4.3 |
| **F5** | Leaving one of the six domains unasked (no `RTC`, no `n/a-with-reason`). | A capability challenged on five domains is not red-teamed; the gap is exactly where the unexamined harm hides. | §3, §4.3 |
| **F6** | Deleting, overwriting, or down-severity-ing a challenge to clear the path. | Findings must be preserved and routed; erasing dissent is the failure mode Prompt 06 forbids. | RT4 |
| **F7** | Treating a **planned** `EXP` as a rebuttal to a `critical` challenge (vs. a `defer`). | A plan to test is not evidence; a critical concern cannot be rebutted by intention. | §4.2 |
| **F8** | Fabricating a rebuttal's evidence — citing a non-resolving `EVD`, an invented study, a made-up metric, or a fake participant quote. | The absolute no-fabrication line (`prd.md` §4 "Never fabricate … clinical outcomes"; §11). | No-fabrication statement |
| **F9** | Letting a high scorecard value override an un-rebutted `critical` safety-adjacent challenge. | Safety-adjacent domains are non-compensable; value cannot buy out harm (`prd.md` §9). | RT3, §8 |
| **F10** | Red-team run but its findings not routed to the `DEC`/`EXP`/safety-gate (findings die in the room). | Prompt 07 requires red-team findings to *produce* the decision register and experiment backlog. | RT4, §8 |

---

## 8. Aggregation — how the red-team constrains the decision

### 8.1 Capability-level red-team verdict
From the capability's set of closed `RTC` records, the convenor derives one verdict (feeds `→ TASK-035`):

```
red_team_verdict =
  REJECT   if any challenge closed `reject`
        OR any CRITICAL harm/dependency/anxiety challenge is un-rebutted and not revised away
  DEFER    else if any challenge is `defer` (open GAP/EXP) or any HIGH challenge un-rebutted
  CLEARED-WITH-REVISIONS  else if any challenge closed `revise` (capability must be re-run post-change)
  CLEARED  else (every challenge `rebutted` or `accept-as-residual-risk` with valid minimums,
                 all six domains covered)
```

`CLEARED` is **not** "no concerns were raised" — it is "every concern raised was dispositioned to its minimum." A capability that drew zero challenges on a domain must still show that domain was *asked* and closed `n/a-with-reason`; otherwise it is incomplete (F5), not cleared.

### 8.2 Non-compensability with the scorecard
The red-team verdict is a **gate on the verdict**, not a weighted input to it. A `REJECT`/`DEFER` red-team verdict caps the decision regardless of a high scorecard total (`prd.md` §9; F9). The scorecard (`→ TASK-034`) ranks *cleared* capabilities; it cannot resurrect a rejected one. This mirrors the safety gate's relationship to scoring (`→ TASK-033` §5).

### 8.3 Safety-gate re-open
If any `RTC` surfaces a clinical, privacy, manipulation, accessibility, or unsupported-claim concern not caught by the safety gate, the convenor **re-opens** `→ TASK-033` for that domain before any decision; the gate re-issues its `pass/redesign/investigate/reject`. The red-team tightens the safety posture and can never loosen a safety `reject` (§2.1).

### 8.4 Outputs routed (Prompt 07 deliverables)
Each red-team run produces, and routes: (a) the `RTC` set → attached to the `DEC` (`→ TASK-035`, field `risks`/`red_team_ref`); (b) `defer`/`revise` → `EXP` backlog and `GAP` log (`↔ TASK-009`/`TASK-008`); (c) recurring challenge themes → the **anti-pattern library** (`prd.md` Prompt 06/07; `↔ TASK-021` content anti-patterns); (d) the capability-level verdict → the Review Board. Nothing stays in the room (F10).

---

## 9. Worked example — ILLUSTRATIVE (synthetic)

> **Synthetic throughout.** The capability below is the PRD's own *illustrative* streak mechanism (`prd.md` §5 Phase 3), used so the protocol can be shown running. All ids are synthetic (`CAP-SYNTH-01`, `EVD-SYNTH-*`, `EXP-SYNTH-*`). No rebuttal below asserts a real finding; each is a *demonstration of the disposition rule*. The capability is deliberately left **not adopted as-is** (`red_team_verdict: CLEARED-WITH-REVISIONS`), exactly as the PRD's streak caution implies.

**Capability under red-team:** `CAP-SYNTH-01` — *Consecutive-day streak counter* (observed feature). User job: make effort visible and encourage continuation. Proposer role: R03 (recused from challenging). Safety gate: `pass` (with manipulation domain closed `investigate→pass` after a redesign note). Scorecard: 64/100 → triggers red-team (T1), and T2 (streak/pressure).

| `rtc_id` | domain | challenge (adversary's voice) | sev | disposition | rebuttal_or_change (synthetic) |
|---|---|---|---|---|---|
| RTC-S01 | harm | "A broken streak after a missed day induces shame and all-or-nothing abandonment — the capability punishes exactly the user having a hard week." | high | **revise** | Change spec: remove punitive reset; adopt non-punitive recovery ("welcome back," streak pauses not breaks). Owner R03; re-gate. Mirrors `prd.md` §3 streak→flexible-consistency. |
| RTC-S02 | dependency | "The streak drives app-return for its own sake, not real-world behaviour; the number, not the habit, becomes the goal." | high | **defer** | Spawns `EXP-SYNTH-11`: does a flexible-consistency framing improve *perceived autonomy and repeated real-world action*, not merely app opens (`prd.md` §3 required test)? Planned, pre-registered. |
| RTC-S03 | anxiety | "A visible chain the user can 'break' manufactures daily pressure; for a midlife user juggling care-work, that is stress, not delight." | high | **revise** | Same revision as RTC-S01 plus: default to weekly consistency, no red 'broken' state; opt-out of streak visibility preserves core value. |
| RTC-S04 | screen_time | "The streak needs a daily open to 'keep' it — attention cost with no real-world payoff on days the behaviour already happened." | medium | **revise** | Deliver streak state via widget/notification (`→ TASK-039`); value without opening the app; honours low-energy days. |
| RTC-S05 | generalizability | "Streak efficacy is inferred from general-productivity apps (grade C competitor pattern) and treated as behaviour-change efficacy for midlife women." | high | **rebutted / down-graded** | Claim restated as a **hypothesis** (grade D invention-to-test), not an efficacy claim; `evidence_ref: EVD-SYNTH-22` (competitor observation, grade C, ceiling respected) + `EXP-SYNTH-11`. Honest down-grade = valid disposition (§3.5). |
| RTC-S06 | simpler_alternatives | "A simpler 'did you do it today? y/n' with gentle weekly reflection may deliver the same job without the streak's harms. Did we compare the null?" | medium | **revise** | Explicit comparison logged: simplest version (binary + weekly reflection) becomes the lead; streak complexity banked in backlog unless `EXP-SYNTH-11` shows added value justifies added risk. |

**Aggregation (§8.1):** no `reject`; one `defer` (RTC-S02) and four `revise` → `red_team_verdict = DEFER` until `EXP-SYNTH-11` concludes, then `CLEARED-WITH-REVISIONS` for the revised flexible-consistency capability. **Non-compensability check (§8.2):** the 64/100 score does **not** clear the `defer`; the capability cannot be Adopted as the consecutive-day counter. **Routing (§8.4):** `RTC-S01/03` → anti-pattern library ("punitive streak reset"); `RTC-S02/S05` → `EXP-SYNTH-11`; verdict + `RTC` set → the `DEC` (`→ TASK-035`). This is the PRD's streak example resolving exactly as §5 Phase 3 anticipates — *adapt*, don't *adopt*.

---

## 10. Copy-ready blank challenge sheet

```yaml
red_team_run:
  cap_ref: CAP-___            # capability under challenge
  proposer_role: R__          # RECUSED from challenging/signing (RT2)
  triggered_by: [T1|T2|T3|T4|T5|T6]
  safety_gate_result: pass    # must be `pass` before red-team (§2.1)
  scorecard_total: __/100     # context, not a shield (§8.2)
  convenor: Program Director
  challengers: [R__, R__, R__]   # ≥3, excludes proposer; R02+R14 if T2/T3; R15 if data
  method: pre-mortem (§6.2)

  challenges:                 # ≥1 per domain; ALL SIX domains represented (F5)
    - rtc_id: RTC-___
      domain: harm | dependency | anxiety | screen_time | generalizability | simpler_alternatives
      challenge: "<specific concern, adversary's voice>"
      question_ref: D_.__
      severity: critical | high | medium | low
      challenger_role: R__           # ≠ proposer
      disposition: rebutted | revise | reject | defer | accept-as-residual-risk
      rebuttal_or_change: "<written; content per §4.1 + §4.2 floor>"
      evidence_ref: [EVD-___]        # REQUIRED if rebutted (grade floor §4.2); never popularity (F3)
      spawns: [GAP-___ | EXP-___]    # REQUIRED if defer
      residual_risk:                 # REQUIRED if accept-as-residual-risk
        statement: ""; mitigation: ""; signoff_role: R__; monitor_metric: ""
      disposition_signoff: R__       # ≠ proposer; R14/R15 where §4.1 requires
      status: open | closed | reopened

  aggregate:
    all_six_domains_covered: true          # else incomplete (F5)
    red_team_verdict: REJECT | DEFER | CLEARED-WITH-REVISIONS | CLEARED   # §8.1
    safety_gate_reopened: false            # true if §8.3 triggered
    routed_to: [DEC-___, EXP-___, anti_pattern_library]   # §8.4; nothing stays in the room (F10)
```

**Closure check before the decision (`→ TASK-035`):** every `challenges[*].status == closed` with its §4.1 minimum present and valid; all six domains covered; no un-rebutted `critical` harm/dependency/anxiety (§4.3).

---

## 11. Dependencies, open unknowns, change log

### 11.1 Dependencies
- **Upstream (consumed):** `CAP` records & `safety_gate` result `↔ TASK-030`; safety-gate verdict `→ TASK-033`; scorecard total `→ TASK-034`; evidence grades A–D `↔ TASK-004`; `EVD` records `↔ TASK-005`.
- **Downstream (produced into):** the Adopt/Adapt/Invent/Reject/Defer decision & its `risks`/`red_team_ref` fields `→ TASK-035`; `DEC`/`EXP` registers `↔ TASK-009`; `GAP`/contradiction log `↔ TASK-008`; content/behavioural anti-pattern libraries `↔ TASK-021`/`TASK-018`; attention-cost measures from `↔ TASK-016`/`TASK-017`/`TASK-020`; iOS low-screen delivery options `→ TASK-039`.
- **Sibling (does not duplicate):** TASK-033 owns the mandatory safety *floor*; TASK-034 owns value *scoring*; TASK-035 owns the *verdict and its form*; this protocol owns the *adversarial challenge and its disposition*.

### 11.2 Open unknowns (explicitly unresolved, not invented)
- The priority threshold for T1 (proposed ≥ 60/100) is a planning default pending Review Board confirmation.
- The exact validated instruments for measuring *perceived pressure/anxiety* and *autonomy* in `EXP`s are named by family (SRBAI for automaticity; a validated pressure/distress item) but the specific scored instrument selection is deferred to WS03/WS04 (`→ TASK-024`/`TASK-025`), not fixed here.
- Whether async vs. live red-team sessions change challenge quality is itself an open question; both are permitted pending evidence.
- Real roster staffing (role → person) is unknown; this protocol assigns **accountable role types**, not individuals (consistent with TASK-003).

### 11.3 Change log
| Version | Date | Change |
|---|---|---|
| 0.1 | 2026-11-23 | Initial protocol: six challenge domains with question banks (§3), five-disposition "documented rebuttal or revision" model with evidence floor (§4), `RTC` record schema (§5), independent pre-mortem session format (§6), ten forbidden moves (§7), verdict aggregation & non-compensability (§8), one synthetic worked run (§9), copy-ready sheet (§10). Status: Proposed, not yet run. |

---

*End of TASK-036 deliverable. No real capability has been red-teamed; no research observation, metric, clinical outcome, or test result is asserted anywhere in this document.*
