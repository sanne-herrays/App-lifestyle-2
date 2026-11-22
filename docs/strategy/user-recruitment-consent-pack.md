# HerRays — User Recruitment & Consent Pack

**Deliverable:** TASK-026 — Create the user recruitment and consent pack
**Workstream:** Behavior & User Research (WS04 — User Discovery) · UX-research lens
**Version:** 0.1 · **Status:** Proposed — instruments prepared, **study UNEXECUTED**; no participant recruited, screened, enrolled, or interviewed
**Owner (accountable role):** UX researcher (R07), under Program Director custody
**Reviewers:** Privacy/regulatory reviewer (R15, **mandatory** — special-category health data, consent language, retention, DPIA trigger) · Clinical reviewer (R14, **mandatory** — safety exclusion/escalation, menopause-stage wording, non-clinical boundary) · Content strategist / UX writer (R10, plain-language & non-patronizing tone) · QA/accessibility specialist (R13, accessible screener & consent) · Program Director
**Source basis:** `prd.md` §6 User discovery ("Recruit a varied set of women in the target audience, including differences in health goals, schedules, tech comfort, prior success/failure and tracking tolerance… Obtain consent and minimize sensitive data"), §1 (non-patronizing, user-autonomy, accessibility, privacy as non-negotiable constraints), §4 ("Establish consent and privacy rules before collecting primary research"; "Never fabricate interview participants…"), §5 Phase 0 ("Establish consent and privacy rules before collecting primary research"), §11 Gate 4 ("preregistered tasks/criteria, safety/privacy/accessibility review"), §13 Prompt 04 ("Produce recruitment/sampling plan, guide, consent protocol… Use neutral non-leading questions, consent and data minimization… Never invent participants, quotes or results. If recruitment is unavailable, provide executable instruments and label the study unexecuted"), §14 ("A deliverable is not complete if… hypothetical users/tests are presented as real").
**Depends on:** TASK-005 (`EVD`/record schema — a screened/consented participant is referenced by a pseudonymous `PART` code that links to `EVD` provenance; this pack never stores raw identity in the evidence chain) · TASK-004 (evidence grading — primary user evidence this pack will later yield is graded C/D by default and never promoted to efficacy; the pack only *gates admissibility*, it does not grade) · TASK-040 (privacy & clinical-boundary checklist — this pack instantiates its consent/data-minimization/escalation rules for WS04; where TASK-040 is unbuilt, the rules here are flagged `provisional, pending TASK-040`) · TASK-025/024 (science — informs *which* behaviour domains and harms to screen and consent around; never a source of a participant)
**Feeds:** TASK-027 (neutral discovery interview guide — consumes this screener's quota assignment and the master consent; the interview *script* is TASK-027, not here) · TASK-028 (7–14-day diary study kit — consumes the diary-specific consent module and the same `PART` codes) · TASK-029 (user-needs synthesis — every synthesized need traces to a consented `PART`; an unconsented or out-of-quota source is inadmissible) · TASK-048 (concept testing — reuses the recruitment/consent machinery for the validation sample) · Gate 4 (safety/privacy/accessibility review)

---

## 0. How to read this document

WS04 turns *imagined* users into *evidence*. That conversion is only legitimate if the people studied are (a) the right people, sampled on purpose rather than by convenience; (b) studied with their **informed, voluntary, revocable** consent; and (c) protected by data rules that fit the **special-category health data** midlife women will inevitably disclose (sleep, mood, menopause symptoms, weight, medication). This document is the **front gate** of WS04: the recruitment quotas, the screening instrument, the privacy safeguards, the consent protocol and language, and the incentive plan — everything that must exist and be reviewer-approved **before a single woman is contacted**.

The PRD is explicit that this comes first: *"Establish consent and privacy rules before collecting primary research"* (`prd.md` §5 Phase 0), and that if real recruitment is not available, we *"provide executable instruments and label the study unexecuted"* (§13 Prompt 04). This pack is therefore a **set of ready-to-run instruments, not a record of anything that happened.** No woman has been contacted, screened, consented, enrolled, interviewed, or paid. Every quota cell shows a **target** and a recruited count held at the literal token `not-yet-recruited`. The only populated response examples are **clearly-labelled synthetic** screener rows using `*-SYNTH-*` identifiers, present solely to show the instrument runs; nothing in them is a real person or answer.

> **No-fabrication statement.** This document reports **no participant, no screening response, no recruitment outcome, no quote, no interview, and no result of any kind**, because **no primary research has been conducted.** Recruited/enrolled counts are `not-yet-recruited` everywhere (explicitly distinct from `0`, which would mean "recruitment ran and found none"). The two synthetic screener examples (§4.6) are fictitious, `*-SYNTH-*`-tagged, and may never be cited as a real respondent. Incentive amounts, quota sizes, and retention periods are **proposed planning defaults**, labelled as such, to be confirmed by R15/R14 and local ethics/budget — not decisions that have been executed. Per `prd.md` §4/§14, presenting any hypothetical participant as real is a validation failure.

**Scope boundary — what this task is and is not.**
- **TASK-026 (this document) = the recruitment & consent pack.** It answers *"who do we recruit, in what mix, how do we screen them in or out safely, under what consent and privacy terms, and for what fair incentive?"* Its outputs are a **sampling/quota matrix, a screening questionnaire, privacy safeguards, a consent protocol + consent language, and an incentive plan.**
- **It is not the interview guide.** The 45–60-minute neutral interview *script* is **TASK-027**. This pack hands TASK-027 a consented, quota-assigned participant; it does not contain interview questions (only *screening* questions).
- **It is not the diary study kit.** Daily prompts, logging cadence, and the diary instruction sheet are **TASK-028**. This pack provides the *diary-specific consent module* TASK-028 attaches; it does not design the diary.
- **It is not the synthesis template.** JTBD, segments, and unmet-need records are **TASK-029**. This pack guarantees every future synthesized need traces to a consented, in-quota `PART`; it does not analyse.
- **It is not the privacy/clinical-boundary checklist itself.** The program-wide checklist is **TASK-040**; this pack *instantiates* it for WS04 and flags where it is `provisional, pending TASK-040`.
- **It does not grade or decide.** Evidence grading is TASK-004; decisions are TASK-035. Recruitment quality is an *admissibility* question here, not a grade.

---

## 1. Purpose

A discovery study is only as trustworthy as its sample and as ethical as its consent. Left to convenience, WS04 would over-sample tech-comfortable, already-successful, tracking-enthusiast women who are easy to reach — exactly the people whose needs habit apps already serve — and under-sample the **repeated abandoners, the tracking-averse, the time-poor, and the women navigating the perimenopause–menopause transition** whose unmet needs are the point of HerRays (`prd.md` §3 Studio A, §8). This pack exists to make the sample **deliberately varied** and the consent **genuinely informed**.

It guarantees six properties before any fieldwork:

1. **Purposive, not convenient.** Participants are recruited to fill a quota matrix (§3) across health goal, menopause stage, prior success/failure, tracking tolerance, tech comfort and schedule — not whoever answers first.
2. **Audience-true.** Every participant is a woman in the HerRays midlife audience, including the perimenopause–menopause transition (`prd.md` §6), with eligibility defined behaviourally and by self-reported life stage — never by a clinical diagnosis we are not qualified to make.
3. **Safe.** The screener (§4) includes a **safety exclusion/escalation path** (R14-owned) so that women in acute distress, or for whom a behaviour-change interview could cause harm (e.g. active eating disorder), are sensitively routed out with signposting — not enrolled, and not left unsupported.
4. **Consented.** Participation rests on explicit, specific, informed, freely-given, revocable consent (§6), with separate opt-ins for recording, for diary participation, and for anonymised quotation (`prd.md` §4/§6).
5. **Data-minimised and protected.** Special-category health data is collected only to the extent needed, pseudonymised, separated from identity, retained on a schedule, and never piped into product analytics (§5).
6. **Fairly, non-coercively incentivised.** Incentives recognise time without being so large as to override a sensitive population's free choice; they are prorated and paid even on withdrawal (§7).

---

## 2. Non-negotiables (anti-fabrication, anti-coercion, privacy guards)

These guards are structural. A breach of any one blocks recruitment or invalidates a participant's data at the Gate-4 review (§9), it is not patched afterward.

- **N1 — No fabricated participant, ever.** No row of the recruitment ledger, no screener response, no quote, and no enrolled participant may exist without a real, consenting person behind it. Until fieldwork runs, all counts are `not-yet-recruited`. Synthetic examples are tagged `*-SYNTH-*` and are inadmissible as evidence (`prd.md` §4/§13 Prompt 04/§14).
- **N2 — Consent precedes data.** No screening beyond the public recruitment notice, no interview, no diary entry, and no recording may begin before the relevant consent (§6) is captured and logged. Consent is specific (participation ≠ recording ≠ diary ≠ quotation), and withdrawable at any time without penalty.
- **N3 — Data minimisation is default.** Only fields with a stated research purpose are collected (§5.2). Direct identifiers are stored **separately** from research data and linked only by a pseudonymous `PART-NNN` code. Raw health disclosures never enter the product, the analytics stack, or any marketing surface.
- **N4 — Safety outranks the sample.** The safety screen (§4.4, R14-owned) can exclude or pause any candidate regardless of how much a quota cell needs filling. A needed quota cell is **never** a reason to enrol someone the safety screen flags. Exclusion is done with signposting, never with a bare rejection.
- **N5 — Incentives recognise time, never buy consent or answers.** Incentives are flat for the task, disclosed up front, **not** contingent on eligibility, on giving "useful" or positive answers, or on completing the whole study; a withdrawing participant keeps the prorated incentive for time already given (§7). No lottery-only designs for the core study (coercion/uncertainty risk).
- **N6 — Eligibility is behavioural & self-defined, never a diagnosis.** Menopause stage, health goals and conditions are **self-reported** for sampling only; the team makes no clinical determination, offers no clinical advice, and the study is explicitly **not** care (§6 consent language). Clinical-sounding exclusions (N4) are safety routing, not diagnosis.
- **N7 — Accessibility is a recruitment requirement, not an afterthought.** The screener and consent materials meet the accessibility standard (§4.5/§6.4): plain language, screen-reader-compatible format, Dynamic-Type-friendly, alternative formats on request, and no visual-only or timed-response gating. Access needs are a *recruitment target* (a quota-monitored dimension), not a disqualifier.
- **N8 — Quotas describe variety, not stereotypes.** Quota dimensions (§3) exist to ensure a varied sample; they are never used to make claims about a group, to assume a woman's needs from her cell, or to exclude anyone who does not fit a tidy category. "Other / prefer to self-describe / prefer not to say" is always available and never blocks eligibility.

---

## 3. Recruitment quotas & sampling matrix

### 3.1 Target size and rationale

**Core target: 24 enrolled participants, within the PRD's 20–30 band** (`prd.md` §6). This is a **purposive**, not statistically representative, qualitative sample: the goal is **variety and saturation of needs**, not population estimates. 24 is chosen so that each primary quota dimension has enough cells to show contrast while staying inside the band and keeping fieldwork feasible.

- **Over-recruitment:** recruit a **reserve of up to 6** (ceiling 30 contacted-and-consented) to absorb no-shows and withdrawals, so analysable n stays ≥20. Reserves are released, not enrolled-and-discarded.
- **Saturation rule:** if, by ~20 interviews, new interviews in a cell stop producing new needs/jobs, the remaining reserve in that cell is redeployed to under-saturated cells rather than filled mechanically (this is a *planning rule*, enacted only during real fieldwork).
- **Honesty of status:** the matrix below is a **plan**. Every `recruited` figure is `not-yet-recruited`.

### 3.2 Eligibility (who counts as in-audience)

A candidate is **eligible** if **all** of:
- **E1** Self-identifies as a woman (cisgender or transgender women both eligible; `prd.md` audience is "women" — inclusion, not exclusion, is the default; "prefer to self-describe" is reviewed case-by-case by R07/R14, never auto-rejected).
- **E2** Age **40–60** *(proposed band for "midlife including the perimenopause–menopause transition"; exact bounds are an open question for R14 — §10)*.
- **E3** Has made **≥1 real attempt in the last 2 years** to change a sleep, physical-activity, nutrition, or stress/mood behaviour (ensures concrete past behaviour to discuss, per `prd.md` §6 "Ask about concrete past behavior… not just imagined preferences").
- **E4** Can participate in the language(s) the study is resourced to run, or with provided support.
- **E5** Provides informed consent (§6).

Eligibility **does not** require: owning any particular device, prior use of a habit app, a menopause diagnosis, or any health condition.

### 3.3 Primary quota dimensions (hard quotas — actively balanced)

Each primary dimension is cross-monitored; the team recruits to approximate each distribution while filling the goal-domain cells first (the organising spine). Counts are **targets for n=24**.

**D1 — Primary behaviour-change goal domain** *(the organising spine; each participant has one primary, others noted)*

| Code | Primary goal domain | Target n |
|---|---|---|
| G-SLEEP | Sleep quality / routine | 6 |
| G-ACT | Physical activity / movement | 6 |
| G-NUT | Nutrition / eating / weight | 6 |
| G-STRESS | Stress / mood / mental load | 6 |

**D2 — Menopause / midlife stage** *(self-reported, for sampling only — N6; wording informed by but not diagnosing against STRAW+10 life-stage descriptions)*

| Code | Self-described stage | Target n |
|---|---|---|
| M-PRE | Not noticing menopause-related change yet | 6–8 |
| M-PERI | Perimenopause / transition (irregular cycles, symptoms) | 8–10 |
| M-POST | Menopausal / post-menopausal | 6–8 |

**D3 — Prior behaviour-change history** *(the differentiator for Studio A "repeated abandoners")*

| Code | Pattern | Target n |
|---|---|---|
| H-ABANDON | Repeatedly started & abandoned (≥2 clear give-ups) | 8–10 |
| H-MIXED | Mixed — some stuck, some didn't | 8–10 |
| H-SUSTAIN | At least one behaviour sustained ≥6 months | 5–7 |

**D4 — Tracking tolerance** *(so the tracking-averse are not designed out)*

| Code | Attitude to tracking/logging | Target n |
|---|---|---|
| T-AVERSE | Dislikes / avoids tracking, finds it burdensome | 7–9 |
| T-NEUTRAL | Neutral / situational | 8–10 |
| T-KEEN | Enjoys data/tracking | 6–8 |

**D5 — Technology comfort**

| Code | Comfort with apps/phones | Target n |
|---|---|---|
| C-LOW | Low — uses basics, finds new apps hard | 5–7 |
| C-MED | Moderate | 10–12 |
| C-HIGH | High — confident, early adopter | 5–7 |

**D6 — Schedule / life load** *(the "unpredictable schedule" and "low-energy" scenarios, `prd.md` §5)*

| Code | Daily-rhythm context | Target n |
|---|---|---|
| S-REG | Regular/predictable days | 8–10 |
| S-IRREG | Irregular (shift work, variable hours) | 6–8 |
| S-CARE | High caregiving load (children/parents/both) | 6–8 |

> Cells overlap across dimensions (one woman is, e.g., G-SLEEP × M-PERI × H-ABANDON × T-AVERSE × C-MED × S-CARE). The matrix is a **balancing guide**, not 4×3×3×3×3×3 separate cells to fill. The recruiter balances on D1 first, then fills to approximate D2–D6, flagging any dimension drifting to an extreme for R07 reallocation.

### 3.4 Secondary diversity dimensions (soft quotas — monitored, reported, not hard-filled)

Monitored for spread and **reported in the sample-description** so synthesis (TASK-029) can caveat transfer; a skew is a documented limitation, not a silent one: **socioeconomic diversity; ethnic/cultural diversity; urban/rural; employment status; relationship to formal healthcare (engaged ↔ avoidant/distrustful — `prd.md` §6 "health-care trust"); disability / accessibility needs (N7); living situation; first-language.** Target: no single category exceeds ~60% of the sample on any monitored dimension where avoidable; shortfalls recorded as a `GAP` (TASK-008).

### 3.5 Exclusions (non-safety) — recorded, not silent

Excluded and logged with reason (not a safety matter — those are §4.4): **professional conflict** (works in competitor product, market research, or for HerRays); **prior participation** in a HerRays study within the exclusion window (reduces habituation bias); **unable to consent** for capacity reasons (routed with signposting, never enrolled). Each exclusion is a ledger line with category only — never identifying detail.

### 3.6 Recruitment ledger (the honest status record)

| Field | Value (pre-fieldwork) |
|---|---|
| Target enrolled | 24 (reserve to 30) |
| Screened | `not-yet-recruited` |
| Eligible | `not-yet-recruited` |
| Consented | `not-yet-recruited` |
| Enrolled | `not-yet-recruited` |
| Withdrawn | `not-yet-recruited` |
| Safety-routed (§4.4) | `not-yet-recruited` |

`not-yet-recruited` ≠ `0`. The ledger becomes real only when fieldwork is authorised; until then it certifies that **nothing has happened** (N1).

---

## 4. Screening questionnaire

### 4.1 Purpose, mode, and rules

The screener does three jobs: **confirm eligibility** (§3.2), **assign quota cell** (§3.3–3.4), and **run the safety screen** (§4.4). It is **not** the interview — it collects only what sampling and safety require (N3). Rules: neutral, non-leading wording (R10); every sensitive item offers "prefer not to say" without losing eligibility; it is self-completion-friendly and screen-reader-compatible (N7); and it opens with a short, honest preamble and the **screening-stage privacy notice** (§5.1) *before* any question.

> **Screener preamble (verbatim, plain language).**
> "HerRays is researching how women in midlife approach everyday wellbeing — sleep, movement, eating, and stress. We're looking to speak with a varied group of women. This short form (about 5 minutes) helps us understand whether the study is a good fit for you and, if so, which group you'd join. You can skip any question, and you can stop at any time. Your answers are kept confidential and used only to plan who we talk to — see the privacy note below. Taking part later is completely voluntary, and this form does not sign you up to anything."

### 4.2 Eligibility & quota items (Q1–Q12)

*(Response options abbreviated; every item includes "Prefer not to say". Quota mapping in brackets is internal, not shown to respondents.)*

1. **Q1.** Do you identify as a woman? ☐ Yes ☐ No ☐ Prefer to self-describe: ____ ☐ Prefer not to say *[E1]*
2. **Q2.** What is your age? ☐ Under 40 ☐ 40–44 ☐ 45–49 ☐ 50–54 ☐ 55–60 ☐ Over 60 ☐ Prefer not to say *[E2]*
3. **Q3.** Which of these, if any, describes where you are with menopause? (Choose the closest — there's no wrong answer.) ☐ Haven't noticed related changes ☐ Starting to notice changes / irregular periods ☐ Going through it now ☐ Periods have stopped (12+ months) ☐ Not sure ☐ Prefer not to say *[D2; self-report only, N6]*
4. **Q4.** In the last 2 years, have you tried to change any everyday habit around **sleep, moving/exercise, eating, or stress**? ☐ Yes ☐ No ☐ Prefer not to say *[E3]*
5. **Q5.** If yes, which area did you most try to change? ☐ Sleep ☐ Activity/movement ☐ Nutrition/eating ☐ Stress/mood ☐ More than one equally ☐ Prefer not to say *[D1 primary]*
6. **Q6.** Thinking about habits you've tried to build or change over the years, which is closest to you? ☐ I've often started and then stopped ☐ Mixed — some stuck, some didn't ☐ I've kept at least one going for 6+ months ☐ Prefer not to say *[D3]*
7. **Q7.** How do you feel about tracking or logging things (steps, food, sleep, mood) in an app or notebook? ☐ I avoid it / find it a chore ☐ It depends ☐ I quite like it ☐ Prefer not to say *[D4]*
8. **Q8.** How comfortable are you trying out new phone apps? ☐ I find it hard / stick to what I know ☐ Fairly comfortable ☐ Very comfortable / I like new apps ☐ Prefer not to say *[D5]*
9. **Q9.** Which best describes your typical days? ☐ Fairly regular ☐ Irregular / shift / variable hours ☐ A lot of caring for others ☐ A mix ☐ Prefer not to say *[D6]*
10. **Q10.** Do you have any access needs we should plan for so taking part is comfortable (e.g. larger text, screen reader, captions, a quieter session, more time, a specific format)? ☐ No ☐ Yes: ____ ☐ Prefer not to say *[N7 — a planning input, never a disqualifier]*
11. **Q11.** *(Secondary diversity — optional block, clearly marked optional.)* A few optional questions help us check we're hearing from a varied group: employment, area (urban/rural), first language, and anything else you'd like us to know. *[D-secondary §3.4]*
12. **Q12.** *(Conflict/eligibility housekeeping.)* Do you, or does a close family member, work in app development, market research, or for HerRays? Have you taken part in a HerRays study before? ☐ applicable ☐ not ☐ Prefer not to say *[§3.5]*

### 4.3 Contact & consent-to-be-contacted (collected separately)

Captured **after** the quota items and **stored separately** (§5.3): preferred name, contact method, and an explicit tick: *"Yes, HerRays may contact me about this study. I understand this isn't a commitment to take part."* Contact details live in the identity store, **never** in the research dataset; they are linked only by the `PART-NNN` code (N3).

### 4.4 Safety screen & escalation path (R14-owned, mandatory)

Because the study touches eating, weight, sleep, mood and body image with a midlife-women population, a small number of candidates may be made worse by a behaviour-change interview, or may be in acute distress. This block is **owned and signed off by the clinical reviewer (R14)**; the research team runs it as written and does not improvise.

- **SF1 — Gentle self-report items**, worded supportively, screen for: a current or recent diagnosed/active **eating disorder**; a current **acute mental-health crisis** or thoughts of self-harm; being in the middle of an acute medical event or treatment that makes research participation inappropriate. Items are optional and framed as "so we can make sure this study is right for you, and point you to better support if it isn't."
- **SF2 — Outcome = route, not reject.** A flag does **not** produce a bare "you're not eligible." It produces a **supportive message + signposting** to appropriate resources (crisis lines, GP, relevant charities — list maintained and localised by R14), and the candidate is **not enrolled**. N4: this overrides any quota need.
- **SF3 — In-session escalation.** The same signposting and a "we can pause or stop any time" script carry into TASK-027/028, so a participant who becomes distressed mid-study is supported and may withdraw with incentive intact (N5).
- **SF4 — No clinical role.** The team provides **signposting only**, makes no diagnosis, and gives no clinical or treatment advice (N6; §6 consent language). Any safeguarding concern follows R14's escalation protocol.
- **SF5 — Minimal retention.** Safety-screen responses are the **most sensitive** data collected; they are used only for the routing decision, stored under the strictest access limit (R07 + R14 only), and deleted on the shortest schedule (§5.4). The ledger records only an aggregate `safety-routed` count, never who or why.

### 4.5 Accessibility of the screener (N7)

Offered in an accessible digital form and, on request, by phone or alternative format; no visual-only questions; no timed responses; compatible with screen readers and large text; progress and "skip" always available; reading level checked by R10. An access need named in Q10 is recorded as a planning action, never a reason to screen out.

### 4.6 Synthetic screener examples — clearly labelled (acceptance-criteria demonstration)

> **⚠ ILLUSTRATIVE / SYNTHETIC — NOT REAL RESPONDENTS.** The two rows below are **fictitious**, exist only to show the screener produces a clean quota assignment and a correct safety route, and **must never be counted as recruitment**. `PART-SYNTH-*` codes are placeholders.

```yaml
# SYNTHETIC screened candidate — eligible, assigned
part_code: PART-SYNTH-A
q1_woman: yes
q2_age: "50–54"                       # E2 pass
q3_stage: "going through it now"       # D2 -> M-PERI
q4_tried_change: yes                   # E3 pass
q5_primary_domain: "Sleep"             # D1 -> G-SLEEP
q6_history: "often started then stopped"  # D3 -> H-ABANDON
q7_tracking: "avoid it / chore"        # D4 -> T-AVERSE
q8_tech: "fairly comfortable"          # D5 -> C-MED
q9_schedule: "a lot of caring for others"  # D6 -> S-CARE
q10_access_needs: "larger text please"  # N7 -> plan Dynamic Type session
safety_screen: no_flag                 # SF1 clear
eligibility: ELIGIBLE
quota_cell: "G-SLEEP × M-PERI × H-ABANDON × T-AVERSE × C-MED × S-CARE"
status: not-yet-recruited              # SYNTHETIC — no real enrolment (N1)

# SYNTHETIC screened candidate — safety route (NOT enrolled)
part_code: PART-SYNTH-B
q1_woman: yes
q2_age: "45–49"                        # E2 pass
q4_tried_change: yes                   # E3 pass
q5_primary_domain: "Nutrition/eating"
safety_screen: flag_active_ED          # SF1 -> active eating disorder self-reported
eligibility: ROUTED_WITH_SIGNPOSTING   # SF2 -> supportive message + resources, NOT enrolled (N4)
quota_cell: n/a                        # safety outranks the sample
status: not-yet-recruited              # SYNTHETIC
```

**What the examples demonstrate.** `PART-SYNTH-A` shows a clean multi-dimension quota assignment and an access need captured as a *plan* (N7). `PART-SYNTH-B` shows the safety screen **overriding a needed quota cell** (G-NUT) and routing the candidate out *with support, not a bare rejection* (N4/SF2). Both carry `status: not-yet-recruited` — they are format demonstrations, not people (N1).

---

## 5. Privacy safeguards

HerRays will receive **special-category (health) personal data** from participants. This section states the safeguards that must be in force **before** screening. It **instantiates** TASK-040 for WS04; where TASK-040 is not yet built, each rule is marked `provisional, pending TASK-040` and must be reconciled on that task's completion.

### 5.1 Lawful basis, roles, transparency

- **Controller:** HerRays (the research sponsor). **Processors/sub-processors** (transcription, scheduling, incentive fulfilment, survey host) are named in a processor register, bound by data-processing terms, and chosen for data-minimising configuration. *(The specific vendors are an open item — §10 — and must be privacy-reviewed before use; `prd.md` §10 "choose at implementation time based on data minimization.")*
- **Lawful basis (GDPR framing, as the applicable regime):** Art 6(1)(a) **consent** for processing personal data, and Art 9(2)(a) **explicit consent** for special-category health data. Consent is the basis precisely because it is freely given and revocable (§6). *(Final regulatory mapping confirmed by R15 for the operating jurisdiction(s).)*
- **Two-stage transparency:** a short **screening-stage privacy notice** (shown before Q1) and the **full participant information sheet** (§6.2) before enrolment. Both in plain language (R10).

### 5.2 Data minimisation & the collected-fields register

Only these categories are collected, each with a stated purpose; nothing else:

| Data category | Purpose | Store | Sensitivity |
|---|---|---|---|
| Screener quota answers (Q1–Q9, Q11) | Eligibility + quota assignment | Research store (pseudonymous) | Incl. self-reported health context — special category |
| Access needs (Q10) | Accommodation planning | Research store | Low, but handle respectfully |
| Safety-screen answers (SF1) | Routing decision only | **Restricted** store (R07+R14) | **Highest** |
| Contact details + consent-to-contact | Scheduling, incentive, withdrawal | **Identity store (separate)** | Direct identifiers |
| Consent records (§6) | Proof of consent, rights handling | Consent store | Direct identifiers |
| Interview/diary data (later; TASK-027/028) | Research analysis | Research store (pseudonymous) | Special category |

Not collected: precise address, financial data beyond incentive fulfilment minimums, biometric identifiers, government IDs, or any field without a row above (N3).

### 5.3 Pseudonymisation & separation

Each participant gets a pseudonymous `PART-NNN` code at screening. **Research data is keyed only by `PART-NNN`.** The link between `PART-NNN` and identity (name/contact) lives in a **separate, access-controlled identity store**; the linking key is held by R07 and the Program Director only. Analysis, transcripts, synthesis (TASK-029) and any `EVD` record (TASK-005) reference `PART-NNN`, never a name. Recordings are renamed to `PART-NNN` on ingest.

### 5.4 Storage, access, retention, deletion

- **Encryption** at rest and in transit; access on least-privilege, logged.
- **Retention (proposed defaults, R15 to confirm):** safety-screen answers deleted within **30 days** of the routing decision; raw recordings deleted within **90 days** of verified transcription; pseudonymised transcripts/notes retained to end of the discovery cycle + **12 months** then deleted or further anonymised; the identity↔`PART` key deleted when the withdrawal window closes and no participant follow-up remains. Incentive-fulfilment records retained only as finance/tax rules require, separately from research data.
- **No secondary use:** research data is **never** used to train product models, seed marketing, or populate product analytics (N3). A separate, specific consent would be required for any reuse and is out of scope here.

### 5.5 Participant data rights

Participants may, at any time and without penalty: access their data, correct it, **withdraw** (and choose whether already-collected data is deleted or retained pseudonymised — §6.3), and complain to a supervisory authority. A single named contact (R07) handles all rights requests; the route is stated in the information sheet.

### 5.6 DPIA & review trigger

Processing **special-category health data** about a potentially vulnerable population, with some profiling (quota/segment assignment), **triggers a Data Protection Impact Assessment screening** (R15-owned) **before** fieldwork. This pack is an input to that DPIA, not a substitute for it. Gate 4 (`prd.md` §11) cannot pass until the DPIA outcome and R14/R15 sign-offs are recorded. `provisional, pending TASK-040`.

---

## 6. Consent protocol & consent language

### 6.1 Principles

Consent must be **informed, specific, freely given, unambiguous, and revocable** (`prd.md` §4/§6). "Specific" means **separate, independently-tickable opt-ins** — a woman can take part in an interview but decline recording, decline the diary, or decline being quoted, and still participate. Consent is captured and timestamped **before** any data beyond the screener preamble, and re-affirmed verbally at the start of each session (N2).

### 6.2 Participant information sheet (plain-language, verbatim core)

> **About this study.** HerRays is a company building a supportive wellbeing app for women in midlife. We want to understand your real experiences with everyday habits — sleep, movement, eating, stress — including what's helped, what's gotten in the way, and what hasn't worked. There are no right answers, and we're not testing you.
>
> **What taking part involves.** A conversation of about 45–60 minutes *(the interview itself is designed separately — TASK-027)*, at a time that suits you, in person or online. We may invite some people to keep a short daily diary for 1–2 weeks afterwards *(optional, designed separately — TASK-028)*. You choose what to share and can skip anything.
>
> **This is not medical care.** We are a research team, not your doctor. We won't diagnose anything or give health or treatment advice. If anything you'd like support with comes up, we'll gladly point you to places that can help.
>
> **Your information.** We keep what you tell us confidential. We label your information with a code, not your name, and store your contact details separately. We never sell your information or use it for advertising. If we quote you in our notes or reports, we remove anything that could identify you — and only if you agree to be quoted. You can read exactly what we collect and how long we keep it, and ask us to show, correct, or delete your information at any time.
>
> **Taking part is your choice.** It's completely voluntary. You can stop at any time, skip any question, or withdraw afterwards — you don't have to give a reason, and nothing bad happens if you do. You'll still receive the thank-you for the time you gave.
>
> **Thank-you for your time.** [incentive, stated plainly — §7].
>
> **Questions or concerns.** Contact [R07 named researcher, contact]. If you ever feel distressed, here are some places that can help: [R14-maintained signposting list].

### 6.3 Consent form — discrete opt-ins (verbatim)

> *Please tick each box you agree with. You can take part even if you leave some unticked.*
> - ☐ I have read (or had read to me) the information about this study and had the chance to ask questions.
> - ☐ I understand taking part is voluntary and I can stop or withdraw at any time without giving a reason and without penalty.
> - ☐ I understand this is research, **not** medical care, and no health advice or diagnosis is given.
> - ☐ I agree to take part in an interview.
> - ☐ **(Separate)** I agree to have the interview **audio-recorded** so the team can take accurate notes. *(You can take part without this.)*
> - ☐ **(Separate)** I agree that **anonymised quotes** (with identifying details removed) may be used in internal research reports.
> - ☐ **(Separate)** I'm willing to be invited to the **optional 1–2 week diary** afterwards. *(Not a commitment.)*
> - ☐ I understand how my information is stored, that it's labelled with a code and kept separate from my contact details, and how long it's kept.
> - ☐ **If I withdraw, I would like my already-collected information to be:** ☐ deleted ☐ kept (anonymised). *(Your choice.)*
> - ☐ I understand I will receive the thank-you for my time even if I stop early.
>
> Name / signature (or recorded verbal consent for remote/accessibility) · Date · Researcher name

### 6.4 Consent accessibility & capacity

Available in plain-language written, read-aloud, and alternative formats (N7/R13). For remote or access-need participants, **recorded verbal consent** is equally valid. Consent is confirmed as **ongoing** (re-checked at session start; withdrawable mid-session). No one who cannot give informed consent is enrolled (§3.5, routed with signposting).

### 6.5 Diary & recording consent modules

This pack owns the **master** consent; TASK-028 attaches a short **diary-specific module** (what's logged, cadence, privacy of diary entries) that references back to this form, and TASK-027 references the recording opt-in above. No separate study may invent its own consent — all trace to §6 (scope fence).

---

## 7. Incentive plan

### 7.1 Principles (N5)

Incentives **recognise time and effort**; they do not buy consent, eligibility, or particular answers. They are: **flat and disclosed up front**; **not contingent** on being found eligible, on giving positive/"useful" answers, or on finishing the whole study; **prorated and paid even on withdrawal** for time already given; **fair without being coercive** for a population that may include financially stretched women (an amount so large it overrides free choice is itself an ethics failure).

### 7.2 Proposed amounts (planning defaults — confirm locally)

> Amounts are **proposed planning defaults** in "fair-value for time" terms, to be set by R07 with finance and local ethics norms; they are **not** finalised or paid (no incentive has been disbursed — N1).

| Activity | Time ask | Proposed thank-you (default) | Notes |
|---|---|---|---|
| Screening | ~5 min | None | Screening alone is not incentivised (avoids screen-to-qualify gaming). |
| Interview (TASK-027) | 45–60 min | Gift voucher ≈ local fair hourly value for ~1 hr | Paid on attendance; full amount even if the participant stops early. |
| Diary study (TASK-028, optional) | 1–2 weeks, light daily | Separate additional thank-you, **prorated by days completed** | Not all-or-nothing; partial completion is paid pro-rata. |
| Reserve / cancelled by us | — | Small inconvenience thank-you if we cancel late | Protects participants from our scheduling failures. |

### 7.3 Fulfilment & fairness

Fulfilment via a method that **doesn't force disclosure of extra personal/financial data** beyond the minimum (e.g. digital voucher); fulfilment records kept separate from research data (§5.2). No **lottery-only** incentive for the core study (uncertain reward is more coercive and less fair); a lottery may only ever *supplement* a guaranteed base, if R15 approves. Equal thank-you regardless of answers or quota cell (N8).

---

## 8. Operational workflow & recruitment channels

1. **Pre-flight gate (before any contact).** R15 (privacy/DPIA), R14 (safety screen + signposting list), R13 (accessibility), R10 (language) sign off this pack; DPIA screening complete (§5.6); stores and `PART` keying configured (§5.3). **No contact until all are green** (N2).
2. **Channels (purposive reach, bias-aware).** Use a **mix** to avoid convenience skew: community groups (menopause/midlife, caregiver, local), varied-SES channels, partner clinics for health-care-trusting *and* snowball for health-care-avoidant women, and panels only as a supplement. Each channel's recruitment notice is neutral and states it's research, not a product trial. Channel is recorded per participant to monitor source bias (feeds §3.4 limitations).
3. **Screen → assign → consent → schedule.** Run §4 screener; assign quota cell (§3.3); route safety flags (§4.4); capture consent (§6); schedule with any Q10 accommodations.
4. **Balance & saturate.** Monitor the §3 matrix; reallocate reserve toward under-saturated/under-represented cells; log skews as `GAP` (TASK-008).
5. **Handoff.** Consented, in-quota `PART` codes pass to TASK-027 (interview) / TASK-028 (diary). Synthesis (TASK-029) admits **only** consented, in-quota sources.
6. **Close-out.** Delete per retention schedule (§5.4); honour any outstanding withdrawals; record final ledger (§3.6) — truthfully, with real counts, only after real fieldwork.

---

## 9. Forbidden values & validation-failure catalogue

A pack or a (future) recruitment record exhibiting any of the following is **blocked at the Gate-4 review**, not silently fixed:

**Fabrication / integrity**
1. Any participant, screener response, quote, or recruitment count presented as real while the study is unexecuted; any `recruited`/`enrolled` figure that is not `not-yet-recruited` pre-fieldwork (N1; `prd.md` §4/§14).
2. A synthetic example (§4.6) not clearly tagged `*-SYNTH-*`, or used in any count or claim.
3. A quota cell "filled" without a real, consenting person behind it.

**Consent**
4. Any data collected (beyond the screener preamble) before consent is captured (N2).
5. A bundled consent that does not separate participation / recording / diary / quotation (§6.3).
6. Enrolment of anyone who could not give informed consent, or continued participation after a withdrawal request.

**Safety**
7. Enrolling a safety-flagged candidate because a quota cell needed filling (N4/SF2).
8. A bare rejection of a safety-flagged candidate with no signposting; any diagnosis or clinical advice offered by the research team (N6/SF4).
9. Safety-screen data retained beyond its minimal schedule, or exposed beyond R07+R14 (§5.4/SF5).

**Privacy**
10. Direct identifiers stored in the research dataset, or identity↔`PART` link accessible beyond the authorised holders (N3/§5.3).
11. Special-category data used for product analytics, model training, or marketing (§5.4).
12. Fieldwork begun before the DPIA screening and R14/R15 sign-offs (§5.6).

**Sampling / fairness**
13. A convenience sample passed off as purposive; a monitored-dimension skew (§3.4) hidden rather than logged as a limitation/`GAP`.
14. An access need (Q10) used to screen someone out (N7).
15. An incentive contingent on eligibility, on answers, or on full completion; a core-study lottery-only design; an amount flagged coercive by R15 (N5).
16. A quota dimension used to assume a woman's needs or to exclude a self-described/"prefer not to say" respondent (N8).

---

## 10. Dependencies, open unknowns, and change log

### 10.1 Dependencies (directional)
- **Upstream:** TASK-005 (`PART`↔`EVD` provenance, identity separation) · TASK-004 (how the resulting user evidence is graded — C/D by default, never promoted) · TASK-040 (privacy & clinical-boundary checklist this pack instantiates — several rules `provisional, pending TASK-040`) · TASK-024/025 (which behaviour domains/harms to screen and consent around).
- **Downstream:** TASK-027 (interview guide — consumes consent + quota) · TASK-028 (diary kit — consumes diary consent module + `PART`) · TASK-029 (synthesis — admits only consented, in-quota sources) · TASK-048 (validation sample reuses this machinery) · Gate 4 (safety/privacy/accessibility review).

### 10.2 Open unknowns (explicitly unresolved, not guessed)
- **Exact age band (E2).** 40–60 is a **proposed** operationalisation of "midlife including perimenopause–menopause"; R14 to confirm lower/upper bounds and whether early-perimenopause under 40 or later post-menopause over 60 should be admitted. Recorded as an open question, not fixed.
- **Operating jurisdiction(s) & regulatory mapping.** The pack is written to a GDPR-grade standard as the stringent default; the actual jurisdiction(s), supervisory authority, and any additional local research-ethics approval are R15 items. Final lawful-basis mapping confirmed there.
- **Processor/vendor selection.** Transcription, survey host, scheduling, incentive fulfilment are **unspecified** pending privacy review (`prd.md` §10 "choose at implementation time"); no vendor assumed.
- **Incentive amounts & currency.** Left as "fair-value for time" defaults; actual figures set by R07 + finance + local norms.
- **Retention periods.** 30/90-day and cycle+12-month figures are **proposed defaults** for R15 confirmation against jurisdictional rules.
- **Trans-inclusion & self-description handling (E1).** Default is inclusion; edge cases reviewed case-by-case by R07/R14 — recorded as a documented judgement, never an auto-rule.
- **Language coverage.** Which language(s) the study is resourced to run in affects E4 and secondary diversity; open until fieldwork is funded.

### 10.3 Change log
- **v0.1 (2026-11-23)** — Initial recruitment & consent pack. Target 24 (band 20–30) purposive quota matrix across six primary + secondary dimensions (§3); screening questionnaire with eligibility/quota items and R14-owned safety screen (§4); privacy safeguards instantiating TASK-040 with data-minimisation register, pseudonymisation, retention, DPIA trigger (§5); consent protocol with discrete opt-ins and plain-language information sheet (§6); non-coercive incentive plan (§7); operational workflow (§8); 16-item forbidden-value catalogue (§9). **Study unexecuted; no participant recruited; all counts `not-yet-recruited`.**

---

## Acceptance-criteria crosswalk (for the reviewer)

| Acceptance criterion | Where satisfied |
|---|---|
| **Recruitment quotas for 20–30 women** | §3.1 target 24 within 20–30 band + reserve-to-30; §3.3 primary quota matrix (D1–D6) with target cell counts; §3.4 secondary diversity; §3.6 honest ledger |
| **Screening questions** | §4 full screener — eligibility/quota items Q1–Q12 (§4.2), separate contact/consent-to-contact (§4.3), R14-owned safety screen + escalation (§4.4), accessibility (§4.5), two labelled synthetic examples (§4.6) |
| **Privacy safeguards** | §5 — lawful basis/roles (§5.1), data-minimisation register (§5.2), pseudonymisation & identity separation (§5.3), storage/retention/deletion (§5.4), data rights (§5.5), DPIA trigger (§5.6) |
| **Consent language** | §6 — principles (§6.1), verbatim plain-language information sheet (§6.2), verbatim discrete-opt-in consent form (§6.3), accessibility & capacity (§6.4), diary/recording modules (§6.5) |
| **Incentives plan** | §7 — non-coercion principles (§7.1), proposed-default amounts table (§7.2), fair fulfilment (§7.3) |
| **Do not fabricate recruitment** | §0 no-fabrication statement; N1; all counts `not-yet-recruited` (≠ `0`); only populated artifacts are `*-SYNTH-*` examples (§4.6); §9 forbidden-value catalogue items 1–3 |
| Independently reviewable, clearly labelled | Header block (status "study UNEXECUTED"), §0, this crosswalk; reviewer roles named (R07/R14/R15/R13/R10) |
| No fabricated research observations or test results | §0 no-fabrication statement; no participant/response/quote/result anywhere; incentive/retention/quota figures labelled proposed defaults |
