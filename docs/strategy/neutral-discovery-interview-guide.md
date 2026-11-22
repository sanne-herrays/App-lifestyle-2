# HerRays — Neutral Discovery Interview Guide

**Deliverable:** TASK-027 — Create the neutral discovery interview guide
**Workstream:** Behavior & User Research (WS04 — User Discovery) · UX-research lens
**Version:** 0.1 · **Status:** Proposed — instrument prepared, **study UNEXECUTED**; no participant interviewed, no response, quote, or finding recorded
**Owner (accountable role):** UX researcher (R07), under Program Director custody
**Reviewers:** Behavioral scientist (R02, **mandatory** — construct coverage: COM-B / SDT / habit, and non-leading framing of mechanism probes) · Clinical reviewer (R14, **mandatory** — in-session safety/escalation carried from TASK-026 §4.4/SF3, non-clinical boundary, menopause-stage wording) · Privacy/regulatory reviewer (R15, **mandatory** — special-category disclosure handling, recording opt-in, data-minimised note-taking) · Content strategist / UX writer (R10 — plain-language, non-patronizing, non-leading wording) · QA/accessibility specialist (R13 — accessible delivery, pacing, alternative formats) · Program Director
**Source basis:** `prd.md` §6 User discovery ("Ask about concrete past behavior and workarounds, not just imagined preferences. Use neutral interviews, observation and optional diary study. Produce JTBD, journey maps, unmet needs, evidence and contradictions. Obtain consent and minimize sensitive data"), §1 (non-patronizing, user autonomy, accessibility as non-negotiable constraints), §4 ("Never fabricate interview participants, actual retention, CAC, LTV, clinical outcomes…"), §13 Prompt 04 ("Explore actual past attempts to improve sleep, activity, nutrition and stress; interruptions, motivations, workarounds, failures, data tolerance, guidance preferences, health-care trust… Use neutral non-leading questions, consent and data minimization… Never invent participants, quotes or results. If recruitment is unavailable, provide executable instruments and label the study unexecuted"), §6 Behavioral science (COM-B, BCTTv1, Self-Determination Theory, habit formation, implementation intentions; "Separate engagement, adherence, automaticity and clinical outcomes"; "Assess risks of guilt, compulsion, burden and excessive tracking"), §14 ("A deliverable is not complete if… hypothetical users/tests are presented as real").
**Depends on:** TASK-026 (recruitment & consent pack — this guide is run **only** with a consented, quota-assigned `PART-NNN`; it inherits the master consent, the recording opt-in, and the R14-owned in-session safety/escalation script; it adds **no** new consent) · TASK-005 (`EVD`/`PART` schema — every future quote/observation from this interview becomes an `EVD` keyed to a pseudonymous `PART-NNN`, never a name) · TASK-004 (evidence grading — primary interview evidence is graded **C/D by default** and is **never** promoted to efficacy; this guide *elicits*, it does not grade) · TASK-024/025 (behavioral science — informs *which* mechanisms the probes gently surface; never a source of a participant answer) · TASK-029 (user-needs synthesis — defines the downstream JTBD / unmet-need record shape this interview feeds; the guide is written to produce episode-anchored material that synthesis can trace)
**Feeds:** TASK-028 (7–14-day diary study kit — the interview closes by inviting, never pressuring, the optional diary; diary design is TASK-028, not here) · TASK-029 (user-needs synthesis — JTBD, journey maps, barriers, unmet needs, contradictions all drawn from these transcripts) · TASK-008 (research gap & contradiction log — within- and cross-interview contradictions are logged, not smoothed) · Gate 2 Opportunity readiness (`prd.md` §11 — "usable primary research … opportunities distinct from feature requests")

---

## 0. How to read this document

This is the **script and facilitation protocol** for the WS04 discovery interview: a single, repeatable **45–60-minute** conversation that converts a consented midlife woman's *real past behaviour* into traceable evidence about why lifestyle change starts, stalls, is worked around, abandoned, and restarted. It is the instrument the PRD calls for in §13 Prompt 04 and §6 — and it is written to one governing discipline: **ask about what actually happened, not about what the person imagines she would want.** Imagined-preference answers ("Would you use an app that…?", "Would a reminder help?") are cheap, agreeable, and predictively near-worthless; they are the single most common way discovery research manufactures false demand. This guide **removes** them by construction (§6) and replaces every one with a concrete, episode-anchored alternative (§5, §6.3).

The guide is grounded in five established elicitation methods, each chosen because it drives the participant toward **specific remembered episodes** rather than generalities or speculation:

- **Critical Incident Technique** (Flanagan, 1954) — anchor on specific, datable events ("the last time you tried to…"), not habits-in-general.
- **"Switch"/timeline interviewing** (the Jobs-to-be-Done demand-side interview, adapted from purchase to *behaviour change*) — reconstruct the timeline of a real attempt: the trigger ("first thought"), the push/pull forces, the moment of starting, and what happened after.
- **Grand-Tour & contrast questions** (Spradley, ethnographic interviewing) — "walk me through a typical…" / "how was that different from…" to surface routine and context without leading.
- **Laddering** (means–end) — follow an action gently upward to the motivation and value behind it ("what did keeping that going do for you?") to reach **Self-Determination-Theory** motivation quality (autonomy / competence / relatedness) without naming the theory.
- **COM-B framing** (Michie et al.) as a *silent coverage checklist* for the interviewer — Capability (physical/psychological), Opportunity (physical/social), Motivation (reflective/automatic) — used to make sure obstacles are explored across all sources, **never** read aloud to the participant.

> **No-fabrication statement.** This document reports **no participant, no interview, no quote, no observation, and no finding of any kind**, because **no interview has been conducted.** It is an **executable instrument**, per `prd.md` §13 Prompt 04's instruction to "provide executable instruments and label the study unexecuted" when recruitment is unavailable. The only populated response content is a small number of **clearly-labelled synthetic** probe demonstrations (`PART-SYNTH-*`), present solely to show how a question chain *runs*; none is a real person, answer, quote, or result, and none may ever be cited as evidence (`prd.md` §4/§14). Timings, segment lengths, and sample counts are **proposed planning defaults**, not records of completed sessions.

**Scope boundary — what this task is and is not.**
- **TASK-027 (this document) = the interview guide.** It answers *"once a consented participant is in the room, what do we ask, in what order, with what probes, to elicit real past behaviour, obstacles, workarounds and motivations — neutrally?"* Its outputs are the **timed script, the probe bank, the non-leading rulebook, the banned-question/rewrite table, and the facilitation/safety protocol.**
- **It is not the recruitment & consent pack.** Who we recruit, quotas, screening, the master consent, privacy and incentives are **TASK-026**. This guide consumes a consented, quota-assigned `PART` and re-affirms (does not re-obtain) consent.
- **It is not the diary study kit.** Daily prompts, logging cadence and the diary instruction sheet are **TASK-028**; this guide only *invites* the optional diary at close.
- **It is not the synthesis template.** JTBD records, journey maps, segments, unmet-need and contradiction records are **TASK-029**; this guide produces the raw, episode-anchored material synthesis will code.
- **It does not grade or decide.** Grading is TASK-004 (interview evidence is C/D by default, never promoted to efficacy); decisions are TASK-035. The guide *elicits*; it asserts nothing.

---

## 1. Purpose & design principles

A discovery interview earns its place only if it produces evidence that would **survive** a skeptical review — evidence of what people *did*, under what conditions, with what friction and what meaning, not a wish-list of features they politely endorsed. This guide is engineered for six properties:

1. **Past-behaviour-first.** Every core question targets a **specific, remembered episode** with a time, place and sequence ("the last time…", "walk me through that day"), because concrete recall is far harder to confabulate and far more diagnostic than generalisation or prediction (`prd.md` §6).
2. **Neutral & non-leading.** No question presupposes a problem, a solution, a feeling, or a HerRays feature. The participant is never asked to evaluate, rate, or react to an idea (§3, §6).
3. **Obstacle- and workaround-seeking.** The interview treats **what got in the way** and **what the woman improvised instead** as primary data, not as the failure to be fixed — including the ordinary, unglamorous workarounds people rarely volunteer (`prd.md` §13 Prompt 04 "interruptions, motivations, workarounds, failures").
4. **Motivation at the right altitude.** Laddering reaches the *quality* of motivation (self-chosen vs. pressured; competence; connection) without ever prescribing SDT language, so synthesis can separate autonomous from controlled motivation (`prd.md` §6).
5. **Separates the four outcome layers.** The interviewer is trained to hear and keep distinct **engagement** (using a tool/app), **adherence** (doing the behaviour), **automaticity** (it becoming effortless), and any **health/life outcome** — never collapsing them (`prd.md` §6). The guide claims none of these; it only elicits the person's own account.
6. **Safe, autonomous, and accessible.** The session inherits TASK-026's safety/escalation script (§7.4), honours "skip anything / stop anytime," and is deliverable in accessible formats and pacing (§7.5). Emotional topics (body, weight, sleep loss, menopause, failure, guilt) are handled with care, never probed for drama.

---

## 2. Non-negotiables (anti-fabrication, anti-leading, autonomy & safety guards)

These guards are structural. A breach invalidates the affected material at the Gate-2 review (§8.3 forbidden values); it is not patched afterward.

- **N1 — No fabricated participant, quote, or finding, ever.** Until real fieldwork runs with consented `PART`s, this guide contains **no** interview data. Synthetic probe demonstrations are tagged `*-SYNTH-*` and are inadmissible as evidence (`prd.md` §4/§14).
- **N2 — Consent precedes recording and data.** The interview runs **only** for a participant who consented under TASK-026 §6. Recording starts **only** if the separate recording opt-in was ticked; if not, the interviewer takes written notes and **does not record**. Consent is re-affirmed verbally at the start and is withdrawable mid-session without penalty (TASK-026 N2).
- **N3 — No leading, presupposing, or solution-testing questions.** No question may presuppose a problem, embed a feeling, name or hint at a HerRays feature, or ask the participant to predict or evaluate a future product. Every future-preference question is banned and pre-rewritten (§6.3). This is the defining rule of the instrument.
- **N4 — Anchor to episodes, not opinions.** Core questions elicit a *specific past event* with when/where/what-happened. "In general I…" and "I'd probably…" answers are gently redirected to "Can you take me to the last actual time that happened?" (§5 probes).
- **N5 — Autonomy & comfort outrank completeness.** "You can skip anything, and we can pause or stop at any time" is real. The interviewer **never** pushes a visibly uncomfortable topic to complete a section; an unanswered probe is a valid outcome, not a gap to force (TASK-026 SF3).
- **N6 — No clinical role.** The team elicits lived experience; it offers **no** diagnosis, interpretation of symptoms, or health/treatment advice. Clinical-sounding content is received, not assessed; distress triggers the TASK-026 §4.4/SF3 signposting path (§7.4), not improvised counsel (`prd.md` §6; TASK-026 N6).
- **N7 — Minimal, faithful capture.** Notes/recordings are keyed to `PART-NNN` only (TASK-026 N3/§5.3); no direct identifiers in the research record. The interviewer captures the participant's **own words**, marks verbatim vs. paraphrase, and separates observation from the interviewer's inference at the point of writing (feeds TASK-004/029).
- **N8 — Preserve contradiction and ambivalence.** A participant who contradicts herself, or wants two incompatible things, is **recorded as such** — not tidied into a coherent persona. Ambivalence is signal (feeds TASK-008; `prd.md` §6 "contradictions").
- **N9 — Non-patronizing stance.** Midlife women are the experts on their own lives. The interviewer does not congratulate, coach, correct, or "educate," and never frames the participant as a problem to be solved (`prd.md` §1).

---

## 3. The non-leading rulebook (how every question is worded)

This rulebook governs **wording**, not just topic. R10 and R02 check every item against it; the script in §5 already complies, and §6 is the field-side quick card.

**3.1 Seven wording rules.**
1. **No presupposition.** Don't embed the answer. ✗ "What frustrates you about tracking apps?" (presupposes frustration) → ✓ "Have you ever used anything to keep track of a habit? Tell me about that." then, if frustration surfaces, follow it.
2. **No feeling in the stem.** Don't name the emotion for her. ✗ "How discouraging was it when you missed a day?" → ✓ "What happened after you missed a day?" (let her name the feeling, or not).
3. **No future/hypothetical evaluation.** Don't ask her to predict behaviour or react to an idea. ✗ "Would you use reminders?" → ✓ "The last time you meant to do something and it slipped — how did you remember, or not?" (§6.3 has the full ban list).
4. **No solution-shaped questions.** Never describe or hint at a HerRays feature and ask for a reaction. Discovery surfaces problems and real behaviour; concepts are TASK-043+ and are tested, neutrally, only in TASK-048.
5. **No double-barrelled or either/or framing.** Ask one thing; don't supply the two options ("Do you prefer streaks or points?" supplies the frame). Ask what she actually used.
6. **Silence and neutral continuers over praise.** "Mm", "take your time", "tell me more about that" — never "great!", "that's so good", "exactly." Praise teaches the participant which answers please you.
7. **Her vocabulary, not ours.** Mirror the participant's words ("your 'reset days'…"); never introduce jargon (habit, streak, adherence, trigger) unless she used it first.

**3.2 The probe ladder (neutral deepening).** When an answer is thin or general, deepen in this fixed, non-leading order:
- **Episode:** "When was the last time that happened? Take me to that day."
- **Sequence:** "What happened right before? And then?"
- **Concrete detail:** "Where were you? What time? Who else was around?"
- **Workaround:** "What did you do instead / to get around that?"
- **Meaning (ladder up):** "What did doing that (or keeping it going) do for you?" → "And what did *that* give you?" (stop when it reaches a value, not a feature).
- **Contrast:** "How was that different from a time it *did* work?"

**3.3 Recovery moves when the participant speculates.** If she drifts into "I'd probably…" / "I think I would…": *"That's helpful — and can I pull you back to something that actually happened? When did you last face that for real?"* Speculation is redirected, never recorded as behaviour (N4).

---

## 4. Session logistics & the time budget

**Format.** One participant, one interviewer (an optional silent note-taker only if the participant consented to a second person). In person or video, at the participant's choosing (TASK-026 §6.2). Total **45–60 minutes** of interview, inside a ~75-minute booking that leaves room for setup, re-consent, and a gentle close.

**The 45–60-minute budget (proposed default; the interviewer flexes within it).**

| # | Segment | Core purpose (COM-B / method) | Min (45-min floor → 60-min ceiling) |
|---|---|---|---|
| 0 | Welcome & re-consent | Rapport; verbal re-affirm consent & recording opt-in (N2) | 3 → 4 |
| 1 | Life & routine warm-up | Context, a typical day (Grand Tour); ease in | 4 → 6 |
| 2 | **The anchor story** | One specific recent change attempt, timeline end-to-end (Critical Incident + Switch) | 12 → 16 |
| 3 | Obstacles & interruptions | What got in the way, across Capability/Opportunity/Motivation | 7 → 9 |
| 4 | Workarounds & improvisation | What she did *instead*; the unofficial systems | 6 → 8 |
| 5 | Motivation & meaning | Laddering to why it mattered; autonomy vs. pressure (SDT) | 5 → 7 |
| 6 | Missed days & restarting | Lapse, recovery, self-talk; non-punitive handling | 4 → 6 |
| 7 | Tools, tracking & help history | What she used (apps, paper, people, clinicians); tracking tolerance; health-care trust | 3 → 5 |
| 8 | Close & optional diary invite | Open floor; thanks; **invite** (not push) TASK-028 diary | 1 → 3 |
| | **Total** | | **45 → 64** |

> The interviewer protects **Segments 2–5** (the behavioural heart) if time runs short, compressing 1, 7 and 8. Running a few minutes over the 60 is acceptable **only** with the participant's agreement (N5). The 45-minute floor is a complete interview; the 60-minute ceiling simply allows a richer anchor story and a second episode in Segment 6.

---

## 5. The interview script

> **Facilitation key.** **[SAY]** = read aloud roughly as written (adapt to her words, R10 plain language). **[ASK]** = the question, worded to comply with §3. **[PROBE]** = optional, use only if the answer is thin (ladder per §3.2). **[LISTEN-FOR]** = silent interviewer coverage notes (COM-B / SDT / the four outcome layers) — **never read aloud** (N3). **[CARE]** = sensitivity/safety note. Nothing in [LISTEN-FOR] is a hypothesis about the participant; it is a completeness checklist for the interviewer.

### Segment 0 — Welcome & re-consent (3–4 min)

**[SAY]** "Thank you for making the time. Before we start — everything you told the team when you signed up still holds: this is a research conversation, not medical care, there are no right answers, and I'm not testing you. You can skip any question, and we can pause or stop whenever you like, for any reason or none. That won't affect your thank-you for taking part."

**[SAY — recording, only if the §6 recording opt-in was ticked]** "You said earlier it's okay to audio-record so I can listen properly instead of scribbling. Is that still okay? I can stop the recording at any point." *(If the opt-in was **not** ticked: do not record; take written notes.)* **[CARE]** If she hesitates, default to **not** recording; note-take instead (N2).

**[SAY]** "I'll mostly ask you to walk me through things that actually happened. If I ask something that doesn't fit your life, just tell me."

### Segment 1 — Life & routine warm-up (4–6 min)

**[ASK]** "To get a picture of your days — can you walk me through a typical weekday, from waking up to going to bed?" *(Grand Tour; neutral, no health framing yet.)*
**[PROBE]** "And a weekend day — is it different?"
**[ASK]** "Where in all of that do things to do with your own health or wellbeing — sleep, moving, eating, stress, anything — tend to sit?" *(Open; lets her define "wellbeing," rule 3.1.7.)*
**[LISTEN-FOR]** Physical/social **Opportunity** (time, space, other people, caregiving load); routine stability; which domain she raises unprompted.
**[CARE]** If she says "I don't really do anything for myself," receive it neutrally — that is data, not a gap to fill.

### Segment 2 — The anchor story (12–16 min) · *the behavioural heart*

**[SAY]** "I'd like to focus on one real example. Think of a time in the last year or two when you tried to change or build some everyday habit — around sleep, moving, eating, stress, whatever comes to mind first."

**[ASK — episode selection]** "What's the one that comes to mind? It doesn't have to be a success story — a time it didn't stick is just as useful." *(Explicitly licences failure stories; N3 no presupposition of success.)*

**[ASK — the trigger / "first thought"]** "Take me back to the beginning. What was going on in your life when you decided to try? What made *then* the moment?" **[PROBE]** "Was there a particular day or event?" *(Critical Incident; Switch "first thought" + push forces.)*
**[LISTEN-FOR]** Trigger type (event, milestone, symptom, someone's comment, a birthday); push (dissatisfaction) vs. pull (aspiration).

**[ASK — the start]** "What did you actually do first? Walk me through the first few days." **[PROBE]** "Where were you? What time of day? Did you tell anyone?"
**[LISTEN-FOR]** Implementation specifics (cue, time, place — implementation-intention structure, without naming it); **Capability** (knowing how); whether a tool/app entered here (keep *engagement* distinct from the *behaviour* — outcome-layer separation).

**[ASK — the middle]** "Then what happened over the next while — weeks, months? Walk me through how it went." **[PROBE per §3.2]** sequence → concrete detail → contrast.
**[LISTEN-FOR]** Where **adherence** held or slipped; any sign of **automaticity** ("I stopped having to think about it"); her own markers of "working."

**[ASK — the present]** "And where is that now — today?" **[PROBE]** "What does it look like currently, if anything?"
**[LISTEN-FOR]** Sustained / faded / transformed / abandoned; whether a *health or life outcome* is claimed (record as **her report**, grade later C/D — never as verified efficacy, `prd.md` §4).
**[CARE]** If the story is a painful one (illness, loss, a hard menopause transition), slow down, acknowledge simply ("that sounds like a lot"), and let her steer how much to share (N5/N9).

### Segment 3 — Obstacles & interruptions (7–9 min)

**[ASK]** "Thinking about that same attempt — what got in the way?" *(Open; no emotion or cause presupposed — rule 3.1.1/3.1.2.)*
**[PROBE — only to cover gaps, never to lead]** If she names only one kind of obstacle, widen neutrally: "Was it ever more about not having the time or space? Or about how you were feeling? Or not being sure how?" *(This neutral triad quietly covers COM-B — Opportunity / Motivation / Capability — without naming it; offered as open alternatives, not a checklist to endorse.)*
**[ASK]** "Was there a specific moment it got hard? Take me to that." *(Episode anchor, N4.)*
**[ASK]** "What was going on around you then — other people, work, family, how you were feeling physically?"
**[LISTEN-FOR]** Capability (physical energy, fatigue, knowledge), Opportunity (time, money, caregiving, environment, social support/undermining), Motivation (competing goals, low mood, "what's the point"); menopause-related factors **only if she raises them** (`prd.md` §6; N6).
**[CARE]** Body, weight, sleep-loss and mood are common here; receive, don't probe for distress; signpost if needed (§7.4).

### Segment 4 — Workarounds & improvisation (6–8 min)

**[SAY]** "People almost always invent little ways to get around the hard parts — some official-looking, some messy. I'm really interested in yours."

**[ASK]** "When [the obstacle she named] came up, what did you do instead?" **[PROBE]** "Even the quick-and-dirty fixes — what were they?"
**[ASK]** "Did you ever rig up your own system — a note, an alarm, a deal with yourself, roping someone in, tying it to something you already do?" *(Names *categories* of self-made solutions she may under-report — not HerRays features, N3.)*
**[ASK]** "What did you drop or simplify to keep *something* going?"
**[LISTEN-FOR]** Self-generated cues/anchoring, substitution, scaling-down, social scaffolding, "minimum version" strategies; whether workarounds *replaced* a tool (tells us where tools failed). **[CARE/CAPTURE]** These are often the richest design signal — capture verbatim (N7).

### Segment 5 — Motivation & meaning (5–7 min)

**[ASK — ladder, per §3.2]** "When it was going well, what did keeping it up actually do for you?" **[PROBE]** "And what did *that* give you?" (ladder until it reaches a value, then stop).
**[ASK]** "Whose idea was it to start — fully yours, or was someone else hoping you would?" *(Surfaces autonomous vs. controlled motivation — SDT — without naming it; neutral both ways.)*
**[ASK]** "Were there times you kept going even though you didn't feel like it? What carried you then?"
**[ASK]** "And times you felt you *should* do it but didn't really want to — what was that like?"
**[LISTEN-FOR]** SDT: **autonomy** (self-endorsed vs. pressured/guilt-driven), **competence** (felt capable/progressing), **relatedness** (did connection help); risk flags — **guilt, self-criticism, all-or-nothing, obligation** (`prd.md` §6 "risks of guilt, compulsion, burden"). Record these as her experience, not as a diagnosis.

### Segment 6 — Missed days & restarting (4–6 min)

**[ASK]** "Everyone misses days. Think of a time you broke the streak or fell off — what actually happened next?" *(Neutral; no shame presupposed, rule 3.1.2.)*
**[PROBE]** "What did you say to yourself? What did you do the next day?"
**[ASK]** "Have you ever come back to something after stopping for a while? What got you back?" *(Recovery/restart — directly informs the PRD's non-punitive, zero-guilt stance.)*
**[ASK]** "Was there ever a point where missing some made you give up altogether? Walk me through that."
**[LISTEN-FOR]** Lapse → relapse vs. lapse → recovery; self-talk (compassionate vs. punitive); the all-or-nothing failure mode the streak example in `prd.md` §5 flags as a hypothesis to test; what a *gentle* restart looked like in her own life (not a HerRays feature — her lived example). **[CARE]** Failure stories can carry shame; normalise plainly ("that's really common"), never console performatively (N9).

### Segment 7 — Tools, tracking & help history (3–5 min)

**[ASK]** "Across all of this, did you ever use anything to help — an app, paper, a watch, a list, other people, a class, a clinician?" *(Open set; no app assumed.)*
**[PROBE, per tool she names]** "What made you start using it? What made you stop, if you did?" *(Real adoption/abandonment, not a rating.)*
**[ASK]** "How do you feel about logging or tracking things day to day?" **[PROBE]** "Was there a time tracking helped? A time it became a chore or you dropped it?" *(Tracking tolerance via episodes, not preference — `prd.md` §13 Prompt 04 "data tolerance".)*
**[ASK]** "When it comes to your health, who or what do you actually turn to — and who do you trust?" *(Health-care trust, `prd.md` §13 Prompt 04; neutral, no institution named.)*
**[LISTEN-FOR]** Engagement history kept **distinct** from behaviour change (a deleted app ≠ an abandoned goal); tracking burden; trust/distrust of apps, data, clinicians, HerRays-like propositions. **[CARE]** No pitching HerRays; if she asks what we're building, "we're still listening — that comes later" (N3).

### Segment 8 — Close & optional diary invite (1–3 min)

**[ASK]** "Before we stop — is there anything about all this I didn't ask about that feels important to you?" *(Open floor; often surfaces the real priority.)*
**[SAY]** "This has been genuinely helpful — thank you."
**[SAY — diary invite, only if the §6 diary opt-in was ticked; invitation, not pressure]** "There's an optional next step some people do — a short, light daily diary for a week or two. It's completely up to you, and saying no changes nothing. Would you like me to send the details to look over?" *(Design of the diary is TASK-028; here we only invite — N5.)*
**[SAY — safety close, always]** "If anything we talked about brought stuff up, here are a few places that can help." *(Hand the R14-maintained signposting list — TASK-026 §4.4/SF3 — to **every** participant, not only flagged ones, §7.4.)*
**[SAY]** "You'll get your thank-you as arranged, and you can still change your mind about anything you shared."

---

## 6. Field-side quick card: neutral probes & the banned-question table

### 6.1 Universal neutral probes (memorise)
"Take me to the last time that happened." · "What happened next?" · "What did you do instead?" · "What was that like for you?" · "Tell me more about that." · "How was that different from when it worked?" · "What did keeping that up do for you?" · *(and simply)* silence.

### 6.2 Interviewer self-check (silent, every few minutes)
- Am I asking about a **real past event**, or an opinion/prediction? (If the latter → redirect, N4.)
- Did my question **presuppose** a feeling, problem, or solution? (If yes → rephrase, §3.1.)
- Am I using **her** words, or mine? Have I slipped in jargon or a feature?
- Have I **praised** a "good" answer and taught her to please me?
- Am I protecting Segments 2–5 on time?

### 6.3 Banned leading / future-preference questions → neutral past-behaviour rewrites

*The left column is **forbidden** in this instrument (N3). It is listed so reviewers and interviewers can recognise and kill these on sight. Every one is a future-preference, solution-test, or presupposing question — exactly what `prd.md` §13 Prompt 04 means by "neutral non-leading questions," and the acceptance-criterion instruction to "remove leading future-preference questions."*

| ✗ Banned (leading / future-preference / solution-testing) | Why it's banned | ✓ Neutral past-behaviour rewrite |
|---|---|---|
| "Would you use an app that helped you build better habits?" | Future hypothetical; invites agreeable yes | "Walk me through the last time you tried to build a habit — with or without an app." |
| "Would reminders help you stay on track?" | Tests a solution; presupposes reminders help | "The last time you meant to do something and it slipped — how did you remember, or not?" |
| "Do you prefer streaks or points for motivation?" | Double-barrelled; supplies the frame | "When something kept you going, what was it? Walk me through it." |
| "How frustrating is it when habit apps nag you?" | Presupposes frustration and nagging | "Have you used anything that sent you notifications? What did you do with them?" |
| "Wouldn't it be great to see all your health data in one place?" | Leading; solution-shaped; self-answering | "Where do the different bits of your health information live right now? How do you keep track, if you do?" |
| "How much would you pay for something like this?" | Hypothetical pricing; not behaviour (and `prd.md` bars inferring economics from such claims) | "Have you ever paid for an app or service to help with this? What made you start — and keep paying, or stop?" |
| "Do you think a supportive, non-judgmental app would work for you?" | Leading; embeds our value proposition | "Think of a time something helped you keep going after a setback — what was it, and what did it do?" |
| "What features would you want in a wellness app?" | Asks her to design; produces a wish-list, not a need | "What have you actually cobbled together yourself to make this easier?" |
| "Don't you find tracking everything exhausting?" | Presupposes the feeling and the fatigue | "Tell me about a time you tracked something day to day — how did that go over time?" |
| "Would you be more motivated if the app understood your menopause stage?" | Future hypothetical + leads on a sensitive, clinical-adjacent claim (N6) | "Has anything to do with this time of life changed how you approach these habits? Tell me about that." |

> **Rule of thumb for any new question an interviewer improvises:** if it can be answered with "yes, that sounds good" or "I think I would," it is banned. Rephrase it until it can only be answered by telling a story about something that already happened.

### 6.4 Synthetic probe demonstration — clearly labelled (technique illustration only)

> **⚠ ILLUSTRATIVE / SYNTHETIC — NOT A REAL PARTICIPANT, QUOTE, OR FINDING.** The exchange below is **fabricated** solely to show how the laddering and episode-anchoring probes (§3.2) run in sequence. `PART-SYNTH-C` is a placeholder. It must **never** be cited, coded, counted, or treated as data (N1; `prd.md` §4/§14). The "participant" lines are invented stage directions, not evidence.

```text
# SYNTHETIC — demonstrates episode-anchor + ladder + workaround probe only
PART-SYNTH-C  (synthetic placeholder — not a real person)

Interviewer [ASK, Seg.2 trigger]:  "What was going on when you decided to try?"
Participant  [SYNTHETIC]:          "I just felt I should move more, generally."
Interviewer [redirect, N4]:        "Can you take me to the last actual time you tried?"
Participant  [SYNTHETIC]:          "...okay, after a check-up in the spring."
Interviewer [PROBE episode]:       "Walk me through the first few days."
Participant  [SYNTHETIC]:          "Short walks after lunch. Then work got busy."
Interviewer [PROBE workaround]:    "When work got busy, what did you do instead?"
Participant  [SYNTHETIC]:          "I started parking further away. Felt silly but it stuck."
Interviewer [ladder up, §3.2]:     "What did keeping that up do for you?"
Participant  [SYNTHETIC]:          "Didn't feel I'd given up completely."
```

**What it demonstrates (method, not data):** the opinion ("generally") is **redirected** to a datable episode (N4); the probe surfaces a **self-made workaround** ("parking further away") the participant under-rated; and one ladder step reaches a **value** ("not feeling I'd given up") rather than a feature. It illustrates the *moves*; it asserts nothing about any real person.

---

## 7. Facilitation, capture, safety & accessibility protocol

### 7.1 Before the session
Confirm the participant's `PART-NNN`, quota cell, consent record and **which opt-ins** were ticked (recording? diary-invite? quotation?) from the TASK-026 consent log. Prepare the R14 signposting list (§7.4). Check any Q10 access accommodations (§7.5). Interviewer reviews §3/§6 and the silent COM-B/SDT coverage map — **not** to interrogate against, but to notice what hasn't come up.

### 7.2 During — stance
Warm, curious, unhurried; comfortable with silence; follows the participant's thread before returning to the map. **No** teaching, correcting, selling, or congratulating (N9). Mirrors her language (§3.1.7). Keeps Segments 2–5 protected (§4). Watches time without clock-watching at her.

### 7.3 Capture (data-minimised, faithful — N7)
- If recording (and only if opted-in): audio only, file renamed to `PART-NNN` on ingest; no cloud upload outside the privacy-reviewed processor (TASK-026 §5.1).
- If not recording: contemporaneous notes in the participant's words; mark **"VERBATIM"** vs. **"paraphrase"**; write the interviewer's hunches in a separate **[INFERENCE]** margin, never mixed into the quote (keeps observation vs. inference separable for TASK-004/029).
- Immediately after: a short, structured debrief note per segment, plus flagged **contradictions/ambivalence** (N8) and candidate `EVD` excerpts (TASK-005) — **no** identity, **no** invented detail. A thin or skipped segment is written as "not covered / participant chose to skip," never backfilled.

### 7.4 In-session safety & escalation (R14-owned; inherited from TASK-026 §4.4/SF3)
If a participant becomes distressed, discloses acute crisis, self-harm, or active eating disorder, or asks for help: **pause**, acknowledge plainly, remind her she can stop with her thank-you intact, and offer the **R14-maintained signposting list** (crisis lines, GP, relevant charities). Offer to stop or reschedule. The interviewer gives **no** diagnosis or clinical/treatment advice (N6). Any safeguarding concern follows R14's protocol. The signposting list is handed to **every** participant at close (§5 Seg.8), not only flagged ones, so it is never singling-out. Safety always outranks completing the script (N5).

### 7.5 Accessibility (R13-owned — `prd.md` §1)
Honour Q10 accommodations: larger-text/printed materials, screen-reader-friendly consent, captions for video, a quieter/shorter session, extra time, or an alternative format. Plain language throughout (R10). No timed responses; pauses welcomed. Remote sessions accommodate low bandwidth and phone-only participation. A support person is allowed if the participant wishes. Pacing is participant-led; the 45-minute floor may be split across two shorter sessions if that is what access requires.

---

## 8. Dependencies, open unknowns, forbidden values & change log

### 8.1 Dependencies (directional)
- **Upstream:** TASK-026 (consent, quota, `PART`, safety script, recording/diary opt-ins — this guide runs only on its output) · TASK-005 (`PART`↔`EVD` provenance, identity separation) · TASK-004 (C/D-default grading of the resulting evidence; never promoted) · TASK-024/025 (which mechanisms/harms the probes gently surface).
- **Downstream:** TASK-028 (diary — invited at close, designed separately) · TASK-029 (synthesis — JTBD/needs/journeys/contradictions) · TASK-008 (gap & contradiction log) · Gate 2 Opportunity readiness.

### 8.2 Open unknowns (explicitly unresolved, not guessed)
- **Language & cultural adaptation.** The script is in plain English; translation/cultural adaptation of idioms ("broke the streak," "fell off") is an open item for the languages WS04 is resourced to run (ties to TASK-026 E4/§3.4).
- **Single vs. two-session delivery** for access needs (§7.5) — a planning option, to be set per participant, not fixed here.
- **Note-taker presence.** Whether a second person attends depends on the participant's consent and comfort; default is interviewer-only.
- **Exact signposting list contents** are R14-owned and localised (TASK-026 §10); this guide references, does not author, them.
- **Segment timing** (§4) is a proposed default; real pacing will vary by participant and should be logged, not forced.
- **Domain entry order.** The guide lets the participant choose the anchor domain (sleep/activity/nutrition/stress) to avoid leading; whether synthesis later needs a minimum per-domain count is a TASK-029 question, not fixed here.

### 8.3 Forbidden values & validation-failure catalogue
A guide, or a (future) interview record, exhibiting any of the following is **blocked at Gate-2 review**, not silently fixed:
1. Any participant, quote, or finding presented as real while the study is unexecuted; any synthetic example (§6.4) not tagged `*-SYNTH-*` or used in a count/claim (N1; `prd.md` §4/§14).
2. A recording made without the specific recording opt-in, or any data captured before consent re-affirmation (N2; TASK-026 §6).
3. Any leading, presupposing, solution-testing, or future-preference question asked as written — especially any item from the §6.3 ban list (N3).
4. A speculative/"I'd probably…" answer recorded as behaviour rather than redirected (N4).
5. A participant pushed past a "skip/stop" on a sensitive topic to complete a segment (N5).
6. Any diagnosis, symptom interpretation, or health/treatment advice given by the interviewer; a distressed disclosure met without the signposting path (N6; §7.4).
7. Direct identifiers in the research notes/recording, or identity stored against the transcript rather than `PART-NNN` (N7; TASK-026 §5.3).
8. Observation and interviewer inference merged into one record; a quote altered from the participant's words (N7/§7.3).
9. A contradiction or ambivalence "tidied" into a coherent account rather than preserved (N8; feeds TASK-008).
10. Congratulating, coaching, correcting, or pitching HerRays during the interview (N9/§3.1.6).
11. Engagement (tool use) reported as behaviour change or as a health outcome; any efficacy claim read off a participant's self-report (`prd.md` §6/§4; §5 Seg.2/7).
12. A HerRays feature or concept described and reacted-to in a discovery interview (that is TASK-048, run neutrally and separately).

### 8.4 Change log
- **v0.1 (2026-11-23)** — Initial neutral discovery interview guide. 45–60-minute timed script (§4/§5) across welcome/re-consent, routine warm-up, anchor behavioural story, obstacles, workarounds, motivation/meaning, missed-days/recovery, tools/tracking/trust, and optional-diary close; grounded in Critical Incident Technique, Switch/timeline, Grand-Tour, laddering and silent COM-B/SDT coverage (§0/§1). Non-leading rulebook (§3), field quick card with a 10-row **banned future-preference → neutral rewrite** table (§6.3) directly satisfying "remove leading future-preference questions," and one clearly-labelled synthetic technique demonstration (§6.4). Facilitation/capture/safety/accessibility protocol inheriting TASK-026's consent & safety machinery (§7). **Study unexecuted; no participant interviewed; no quote, observation, or finding recorded.**

---

## Acceptance-criteria crosswalk (for the reviewer)

| Acceptance criterion | Where satisfied |
|---|---|
| **45–60-minute interview script** | §4 time budget (segment table summing 45→64 min, Segments 2–5 protected) + §5 full segment-by-segment script with [SAY]/[ASK]/[PROBE] |
| **Focused on actual past behaviour** | §1 principle 1; §5 Segment 2 "anchor story" (Critical Incident + Switch timeline, specific datable episode); N4 episode-anchoring; §3.2 probe ladder |
| **…obstacles** | §5 Segment 3 (obstacles/interruptions across Capability/Opportunity/Motivation, episode-anchored); §1 principle 3 |
| **…workarounds** | §5 Segment 4 (workarounds & improvisation — the self-made systems, captured verbatim); §6.1 probe "What did you do instead?" |
| **…motivations** | §5 Segment 5 (laddering to meaning; autonomous vs. controlled motivation, SDT) + Segment 6 (self-talk on missed days) |
| **Remove leading future-preference questions** | §3 non-leading rulebook (7 wording rules); N3; §6.2 self-check; **§6.3 banned-question → neutral-rewrite table (10 rows)** explicitly listing and replacing future-preference/solution-testing questions |
| **Independently reviewable, clearly labelled** | Header block (status "study UNEXECUTED"), §0, facilitation key (§5), this crosswalk; reviewer roles named (R02/R07/R10/R13/R14/R15) |
| **No fabricated research observations or test results** | §0 no-fabrication statement; N1; no participant/quote/finding anywhere; only populated response content is the `*-SYNTH-*` technique demo (§6.4), explicitly inadmissible; §8.3 forbidden-value catalogue items 1, 4, 11 |
