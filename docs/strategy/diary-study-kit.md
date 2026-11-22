# HerRays — 7–14-Day Diary Study Kit

**Workstream:** WS04 User discovery & unmet needs · **Task:** TASK-028
**Version:** 0.1 · **Date:** 2026-11-23 · **Status:** Proposed — instrument designed, **study UNEXECUTED**
**Accountable owner:** R07 UX researcher · **Mandatory reviewers:** R15 privacy/regulatory, R14 clinical/safety, R13 QA/accessibility, R10 content/UX writing · **Contributing lens:** R02 behavioural scientist
**Source anchors:** `prd.md` §4 ("7–14-day diary research if feasible"), §5 ("Repeat use over 7–14 days… reveals only short-term experience, not long-term retention"), §6 ("optional diary study"; "risks of guilt, compulsion, burden and excessive tracking"), §13 Prompt 04

> **No-fabrication statement.** This is a **data-collection instrument**, not data. No participant has kept this diary; **no entry, log, reminder response, quote, count, or finding in this document is real.** Every illustrative entry is tagged **`*-SYNTH-*`** and labelled **SYNTHETIC** — it demonstrates the *format*, never a person or a result. Per `prd.md` §4/§14 and [[user-recruitment-consent-pack]] N1, a synthetic example may never be cited, coded, counted, or treated as evidence. If the diary is never fielded, it ships as an **executable instrument marked unexecuted** (`prd.md` §13 Prompt 04).

---

## 0. How to read this document

This kit specifies a **light, optional, 7–14-day diary study** that runs *after* a participant's discovery interview ([[neutral-discovery-interview-guide]] Segment 8 invited it) and *only* for participants who ticked the diary opt-in in the master consent ([[user-recruitment-consent-pack]] §6.3/§6.5). It is organised so a reviewer can check each acceptance-criterion element in one place:

| You want to check… | Go to |
|---|---|
| **Daily prompts** (the end-of-day reflection set) | §4 |
| **Event-based logging** (capture-in-the-moment template) | §5 |
| **Reminder cadence** (timing, channel, non-punitive rules) | §6 |
| **Privacy boundaries** + diary-specific consent module | §7 |
| **Synthesis fields** (how entries become `EVD`/JTBD/needs) | §8 |
| **Participant instruction sheet** (plain-language, hand-out) | §9 |
| Design logic, data model, duration | §1–§3 |
| Facilitation, safety, accessibility | §10 |
| Worked synthetic example | §11 |
| Dependencies, unknowns, forbidden values, change log, crosswalk | §12–§13 |

**Scope fence.** This kit owns the *diary instrument, its cadence, privacy module and synthesis fields*. It does **not** re-author master consent, quotas, incentives or the safety signposting list (those are [[user-recruitment-consent-pack]], referenced not duplicated); it does **not** run the interview ([[neutral-discovery-interview-guide]]); it does **not** perform synthesis — it produces inputs *for* [[user-needs-synthesis-template]] (TASK-029), `EVD` records ([[source-evidence-record-schema]]), grades ([[evidence-grading-rules]]) and gaps/contradictions ([[research-gap-contradiction-log]]). It is **not** a HerRays product surface and tests **no** HerRays feature.

---

## 1. Purpose & design principles

**Purpose.** Capture *in-context, near-real-time* behaviour — what women in the target audience actually did, when, around sleep, activity, nutrition and stress — across a short window, to complement the retrospective interview with less recall bias. The diary reveals **short-term lived experience and variability**, not retention and not clinical outcome (`prd.md` §5 is explicit on this ceiling).

**What the diary is good for (and what it is not):**

| The diary CAN surface | The diary CANNOT establish |
|---|---|
| Natural cues, timings and contexts of a behaviour | Long-term habit automaticity or retention (`prd.md` §5) |
| In-the-moment obstacles and self-made workarounds | Clinical/health efficacy of any behaviour |
| Day-to-day variability (good day vs. low-energy day) | Representative population statistics (n is small, purposive) |
| What a "missed day" actually looks like and feels like | Causation between any factor and any outcome |
| Emotional texture close to the event, not reconstructed | Anything about a HerRays product (none is shown) |

**Design principles (each one is testable against the instrument):**

1. **Light, not laborious.** Target **under 3 minutes** for the daily prompt and **under 60 seconds** per event log. A diary that becomes a chore produces drop-off and performative entries, and directly violates `prd.md` §6's "risks of … burden and excessive tracking." Low burden is a *validity* requirement, not a nicety.
2. **Observe behaviour, don't coach it.** The diary never suggests, nudges, rewards or scores a behaviour. It is a research mirror; the moment it tries to *improve* the participant it contaminates the very behaviour it measures (and pre-empts the design work — that is TASK-048, run separately).
3. **Non-leading throughout.** Prompts ask *what happened* and *what you did*, never *what you'd prefer* or *whether a solution would help* — carrying [[neutral-discovery-interview-guide]] §3's non-leading rulebook into written form (`prd.md` §13 Prompt 04).
4. **Zero-guilt by construction.** No streaks, no completion percentage shown to the participant, no "you missed yesterday," no colour-coded shaming. A missed day is itself **data**, logged neutrally, never penalised (§6.4). This mirrors the product principle in [[success-metrics-specification]] / `prd.md` §6, applied to the research tool itself.
5. **Minimal data, maximal faithfulness.** Collect only what answers a research question; keep the participant's own words; separate observation from researcher inference (§8); store against `PART-NNN`, never identity (§7).
6. **Autonomy & safety outrank completeness.** Any prompt is skippable with no consequence; the participant can pause or withdraw at any time, keeping their prorated thank-you ([[user-recruitment-consent-pack]] §7.2); a distress disclosure triggers the R14 signposting path (§10.4), never a researcher diagnosis.

---

## 2. Non-negotiables (anti-fabrication, anti-burden, non-leading, privacy, safety, autonomy)

These bind the instrument and every (future) diary record. A kit — or a future entry — breaching any of them is **blocked at Gate-2 review** (`prd.md` §11), not silently fixed. Numbered for citation (D-prefix = diary).

- **D1 — Nothing real until fielded.** No entry, reminder response, count, quote, completion rate or synthesis line may be presented as real while the study is unexecuted. Synthetic demonstrations carry `*-SYNTH-*` ids and the SYNTHETIC label and are inadmissible as evidence (`prd.md` §4/§14).
- **D2 — Consent before capture.** No diary data is collected until the diary-specific consent module (§7.3) is affirmed *in addition to* the master consent; the diary opt-in is discrete and revocable ([[user-recruitment-consent-pack]] §6.3/§6.5).
- **D3 — Burden ceiling is a hard rule.** The instrument must stay within the §1 time budget; any version that exceeds it is redesigned, not shipped. Over-collection is both an ethics failure and a validity failure (`prd.md` §6).
- **D4 — No leading / no future-preference / no solution-testing.** No prompt may be answerable with "yes, that sounds good"; none may describe or react to a HerRays feature. Banned forms inherit [[neutral-discovery-interview-guide]] §6.3.
- **D5 — Zero-guilt, non-punitive.** No streak, score, ranking, or missed-day penalty is ever shown to the participant; missed days are logged neutrally as data.
- **D6 — Data minimisation & pseudonymisation.** Only consented, minimal fields; keyed to `PART-NNN`; special-category content kept to the minimum necessary and never used for analytics/marketing/model-training ([[user-recruitment-consent-pack]] §5).
- **D7 — Observation ≠ inference.** The participant's words and the researcher's interpretation are stored in separate fields (§8.2); a reconstructed or "tidied" entry is a violation.
- **D8 — Autonomy & safety first.** Every prompt is skippable; pause/withdraw anytime with prorated thank-you; distress → R14 signposting path, never diagnosis or advice (§10.4).
- **D9 — Short-term ceiling stated.** Any output must carry the `prd.md` §5 caveat that the diary shows short-term experience only — never retention, automaticity, or clinical outcome. Promoting a diary signal to an efficacy claim is barred ([[evidence-grading-rules]]).

---

## 3. Study design, duration & data model

### 3.1 Duration & intensity
- **Length:** a participant-chosen **7 or 14 days** (default 7; 14 offered to those happy to continue). The two-week option exists because some behaviours (e.g. weekly planning, weekend vs. weekday patterns) only show variation across a fortnight (`prd.md` §4/§5). Length is agreed at enrolment, logged, and never silently extended.
- **Start:** typically the day *after* the interview, so the interview does not prime the first entries; start date recorded.
- **Intensity:** **one daily prompt** (end of day) + **event-based logs as they occur** (optional, as many or as few as happen) + **one light mid-study check-in** and **one closing reflection** (§4.3). No more.

### 3.2 Entry types

| Type | When | Who triggers | Time cost | Purpose |
|---|---|---|---|---|
| **Daily prompt** (§4) | Once/day, end of day | Gentle reminder (§6) | < 3 min | Reflection on the day's relevant behaviour, in context |
| **Event log** (§5) | The moment a relevant behaviour/obstacle happens | Participant-initiated | < 60 s | Near-real-time capture, low recall bias |
| **Mid-study check-in** (§4.3) | Once, ~day 4 (7-day) / ~day 7 (14-day) | Reminder | < 2 min | Catch friction with the diary itself; adjust cadence |
| **Closing reflection** (§4.3) | Final day | Reminder | < 5 min | Participant's own sense-making across the window |

### 3.3 Capture modes (participant chooses — accessibility, N7)
A participant may keep the diary in whichever mode suits them; mode is recorded (it affects transcription and `EVD` provenance), never forced:
- **Text** (messaging-style short-form, or a simple structured form);
- **Voice note** (transcribed to `PART-NNN`; audio deleted per retention schedule, [[user-recruitment-consent-pack]] §5.4);
- **Photo of an artefact** *only* where the participant volunteers it and it carries no third-party faces/identifiers (e.g. a photo of their own handwritten note) — with the §7.2 image rule;
- **Paper booklet** returned/transcribed, for participants who prefer or need off-screen capture.

> **Tooling is deliberately unresolved here.** Whether entries are collected via an existing lightweight channel, a diary-study tool, or paper is a procurement/privacy decision owned by R07+R15 and gated by [[phased-tool-purchasing-decision-sheet]] (TASK-038) — this kit specifies the *instrument*, not the vendor. No tool is assumed purchased (`prd.md` §10, §4 "avoid buying multiple repository tools at the outset").

### 3.4 Data model (one window per participant)
```text
DIARY-SESSION
  part_ref:        PART-NNN           # from TASK-026; identity NEVER stored here
  window_length:   7 | 14 (days)      # participant-chosen, logged at enrolment
  start_date / end_date
  capture_mode:    text | voice | photo | paper  (may be mixed; recorded per entry)
  entries[]:       DAILY | EVENT | CHECKIN | CLOSING
  consent_ref:     diary module affirmed (TASK-026 §6.5) — y/date
  accommodations:  [Q10 access needs carried from TASK-026]
```
Each entry carries its own `entry_id` (`PART-NNN-D03`, `PART-NNN-E07`, …), `timestamp` (participant-local; only the precision consented to — see §7.2), `entry_type`, the participant's verbatim content, and the **synthesis fields** of §8 (added by the researcher, never by the participant).

---

## 4. Daily prompts

**Format rules (apply to every prompt below):** plain language (R10); past/present behaviour only, never future preference (D4); each prompt **explicitly skippable** ("it's fine to skip any of these"); no prompt references a product, feature, streak or score (D5); total daily set designed for **under 3 minutes**. Prompts are **open, short, and few** — five core prompts, not a questionnaire.

### 4.1 The core daily set (end of day)

> Wording is written to be read *by the participant*, in their diary channel. Bracketed notes are for the researcher/reviewer and are **not** shown to the participant.

1. **Anchor — what actually happened.**
   *"Thinking about today, did anything happen around your sleep, moving your body, eating, or stress/mood? Just tell me what happened, in your own words — even 'nothing much' is a real answer."*
   *(Lets the participant choose the domain; avoids presupposing any behaviour occurred — mirrors the interview's participant-led anchor, [[neutral-discovery-interview-guide]] §5 Seg.2.)*

2. **Context — what was going on around it.**
   *"What was going on around that? (Where you were, who was about, how the day was going.)"*
   *(Surfaces cues/context for COM-B 'Opportunity' without naming the theory — R02 lens.)*

3. **What you did (or didn't) — and how.**
   *"If you did something, how did it go — easy, a fiddle, or did you do it a bit differently than usual? If you didn't, what got in the way?"*
   *(Captures both action and obstacle/workaround in one low-burden question; "a bit differently than usual" invites the self-made workaround without leading.)*

4. **How it sat with you.**
   *"How did that sit with you today? (However you'd put it — a word or two is plenty.)"*
   *(Emotional texture close to the event; open, not a rating scale, to avoid manufacturing a number. An optional 1–5 "energy today" tag is offered but never required — §4.2.)*

5. **Open floor.**
   *"Anything else about today you'd want a researcher to understand? (Skip if not.)"*
   *(Catches the thing the structured prompts missed — the single most valuable field in most diary studies.)*

### 4.2 Optional light tags (never required)
To make patterns findable without turning the diary into data-entry, each day *optionally* offers **one-tap tags** the participant may add or ignore:
- **Day type:** `ordinary` · `good day` · `low-energy day` · `disrupted day` *(a neutral vocabulary — no "success/fail")*;
- **Energy (optional 1–5):** collected only as self-reported texture, **never** treated as a validated measure or promoted to an outcome (D9);
- **Domain touched:** sleep / activity / nutrition / stress *(multi-select, for retrieval only)*.
Tags are conveniences for synthesis retrieval, not a scoring system; a day with no tags is complete.

### 4.3 Mid-study check-in & closing reflection
- **Mid-study check-in (~1 prompt):** *"How's the diary itself feeling — fine, or a bit much? Anything you'd change about how often I'm nudging you?"* — this is about the **instrument's** burden (D3), lets us dial cadence down (§6.3), and is **not** coded as behavioural evidence.
- **Closing reflection (final day):** *"Looking back over the week/fortnight — was there anything that surprised you about how it actually went? And was keeping this diary easy or hard?"* — participant-led sense-making; explicitly separated in synthesis from in-the-moment entries, because it is retrospective (lower recall fidelity), the very bias the diary exists to reduce.

### 4.4 Banned daily-prompt forms (reviewer kill-list)
The following are **forbidden** in this instrument (D4). Listed so reviewers can spot them on sight:

| ✗ Banned daily prompt | Why | ✓ Neutral rewrite (used above) |
|---|---|---|
| "Did you hit your goal today?" | Imposes a goal; invents pass/fail | §4.1 Q1 "did anything happen… even 'nothing much' is real" |
| "Rate your motivation 1–10." | Manufactures a number; presupposes a construct | §4.1 Q4 open "how did that sit with you" (+ optional, never-required tag) |
| "Would a reminder have helped you today?" | Future/solution-testing (D4) | §4.1 Q3 "what got in the way?" |
| "Keep your streak going — log today!" | Streak/guilt (D5) | Neutral reminder copy, §6.2 |
| "How did our app do today?" | Tests a product that isn't being shown | *(no product is referenced anywhere)* |

---

## 5. Event-based logging

**Rationale.** The daily prompt still relies on end-of-day recall. Event logging lets the participant capture a relevant moment *as it happens*, which is where the diary beats the interview on fidelity. It is **always optional and always light** — the goal is a frictionless 30–60-second capture, not a second questionnaire.

### 5.1 What counts as an "event" (participant-facing definition)
*"An 'event' is any moment to do with sleep, moving your body, eating, or stress/mood that feels worth a quick note — you did the thing, you meant to and didn't, something got in the way, or you found a little trick that worked. There's no right number of these. Some days none, some days a few — all fine."*

Deliberately broad and **symmetric**: a *non-action* ("meant to and didn't") and a *workaround* ("a little trick that worked") are equally valid events — otherwise the log would over-sample success and bias synthesis.

### 5.2 Event capture template (under 60 seconds)
Three micro-fields, each answerable in a phrase; all but the first skippable:
```text
EVENT  (PART-NNN-Enn)
  1. What just happened?        → one line, participant's words        [required]
  2. What was going on / where? → context cue                          [optional]
  3. What did you do about it?  → action, non-action, or workaround     [optional]
  (auto) timestamp at consented precision;  (optional) one day-type tag (§4.2)
```
Voice-note equivalent: *"just say what happened, where you were, and what you did about it — in a sentence or two."*

### 5.3 Event prompting rule (pull, not push)
Event logging is **participant-initiated** (pull). The system does **not** fire a notification saying "log an event now" — that would nag (D5) and manufacture events. The only support is a single, dismissible once-a-day line in the daily reminder: *"If a moment comes up today you want to jot down, you can — no pressure."* (§6.2).

### 5.4 Relationship to the daily prompt
Events and the daily prompt are complementary, not redundant: events are **moment-of**, the daily prompt is **end-of-day reflective**. In synthesis (§8) they are tagged by `entry_type` so researchers can weight moment-of capture higher for recall fidelity and treat the daily reflection as lightly retrospective.

---

## 6. Reminder cadence & delivery

**Principle (D5/D8).** Reminders are **invitations, not demands.** They are gentle, few, quiet-hours-aware, participant-configurable, and **never** escalate, guilt, or penalise. A reminder's job is to lower the friction of remembering, not to drive a compliance number.

### 6.1 Default cadence (participant-adjustable at enrolment and mid-study)

| Day | Reminder | Default timing | Content |
|---|---|---|---|
| Day 0 (enrolment) | Welcome + how-to | At handoff | Instruction sheet (§9) + first gentle expectation-set |
| Daily | **One** daily-prompt nudge | Participant-chosen window (e.g. "evening") | §6.2 copy; carries the optional event-log line |
| Mid-study | Check-in | ~day 4 (7-day) / ~day 7 (14-day) | §4.3 instrument-burden check |
| Final day | Closing reflection + thank-you | Participant-chosen window | §4.3 + thank-you logistics |

**One scheduled daily nudge is the ceiling.** There is no second "you haven't logged yet" chase on the same day (that is the classic guilt pattern, D5). At most, if a participant chose it at enrolment, a *single* optional soft re-nudge may be enabled — **opt-in, not default**.

### 6.2 Reminder copy (verbatim; neutral, warm, non-coercive — R10)
- **Daily:** *"Hi — whenever suits this evening, a couple of lines about your day would be lovely. Totally fine to skip a day. (And if a moment came up you want to note, you can jot it down too — no pressure.)"*
- **Mid-study:** *"Halfway there — thank you. Is the diary feeling okay, or a bit much? Happy to change how often I nudge you."*
- **Final day:** *"Last day — thank you so much for this. When you have a few minutes, there are a couple of closing questions, then you're all done."*
- **Never sent:** anything with a streak, a count of missed days, a percentage, "don't break your…", or "you're falling behind."

### 6.3 Configurability & quiet hours
- Participant sets the **daily window** (e.g. morning/evening) and **channel** (whatever their consented capture mode uses) at enrolment; adjustable at the mid-study check-in.
- **Quiet hours** are honoured (no overnight pings); a participant may set a day as "off" in advance (travel, a hard day) with **no** catch-up nudging.
- Cadence can always be **reduced** on request and is **never** increased without the participant asking.

### 6.4 Missed-day handling (non-punitive — D5)
- A missed day is **recorded as a missed day** — neutral metadata for synthesis (patterns in *when* people skip are themselves findings), **never** surfaced to the participant as failure.
- The next reminder is **identical** to a normal one — it does not acknowledge the miss, guilt, or "welcome back."
- Missed days do **not** reduce the thank-you beyond the honest proration already agreed ([[user-recruitment-consent-pack]] §7.2: "paid pro-rata; not all-or-nothing").
- Several consecutive missed days trigger **one** gentle, pressure-free check — framed around *the participant's wellbeing and the diary's burden*, not compliance: *"No worries at all if life's busy — just checking the diary isn't a hassle. Happy to pause or stop whenever."* This doubles as a light welfare touch (routes to §10.4 if anything concerning surfaces).

---

## 7. Privacy boundaries & the diary-specific consent module

**All privacy machinery traces to [[user-recruitment-consent-pack]] §5–§6** (lawful basis, roles, pseudonymisation, retention, rights, DPIA). This section specifies only what is **diary-specific** and must **not** reinvent that pack (scope fence, [[user-recruitment-consent-pack]] §6.5).

### 7.1 Boundaries — what the diary does and does not collect

| Collected (minimal, consented) | **Not** collected / explicitly excluded |
|---|---|
| Participant's own words about *their* behaviour/context/feeling | Direct identifiers in the diary dataset (kept in the separate `PART` key-store, [[user-recruitment-consent-pack]] §5.3) |
| `entry_type`, participant-local timestamp at **consented precision** | Precise location/GPS; continuous or background sensor data |
| Optional self-report tags (§4.2) | Data about **third parties** (family, colleagues) beyond incidental mention; no third-party faces in photos (§7.2) |
| Capture mode & accommodations | Special-category health detail beyond what the participant *volunteers* about their own routine; no clinical records |
| — | Any automatic device/app telemetry, contacts, or message history |

### 7.2 Diary-specific privacy rules
- **Timestamp precision is consented.** Default stored precision is **date + coarse part-of-day** (morning/afternoon/evening), not exact clock time, unless the participant is comfortable with finer precision. This reduces re-identification and pattern-of-life exposure while preserving the "time-of-day" signal synthesis actually needs.
- **Photos are opt-in and screened.** Images are allowed **only** when the participant volunteers one of *their own* artefact (e.g. their handwritten note); the instruction sheet asks them to avoid faces, other people, addresses, screens showing third-party data, and documents. Any image that arrives with third-party identifiers is **not ingested**; it is deleted and logged as excluded.
- **Voice notes are transient.** Audio is transcribed to `PART-NNN` text promptly and the **audio deleted** per the [[user-recruitment-consent-pack]] §5.4 retention schedule; only the de-identified transcript persists.
- **Special-category minimisation.** Menopause/health content a participant volunteers is kept only as needed for the research question, flagged as special-category, and **never** used for analytics, marketing, or model-training ([[user-recruitment-consent-pack]] §5.4 / forbidden value 11).
- **Separation.** Diary content is stored against `PART-NNN`; the identity↔`PART` map stays in the restricted key-store accessible only to the authorised holders ([[user-recruitment-consent-pack]] §5.3).

### 7.3 Diary-specific consent module (verbatim core — attaches to TASK-026 master consent)
> Presented **in addition** to the master consent for participants who opted into the diary; discrete, revocable, plain-language (R10, R15-approved). It does **not** replace the master consent (D2).

*"Thanks for being up for the optional diary. Here's what it involves, so you can decide:*
- *For 7 (or 14) days, I'll send you one gentle nudge a day to jot down a couple of lines about your day — sleep, moving, eating, stress/mood. It should take under three minutes.*
- *If a moment comes up during the day you want to note, you can — but there's no obligation, and no set number.*
- *You can keep it by text, voice note, a photo of your own note, or on paper — whatever suits you.*
- *You can skip any day, pause, or stop completely at any time, and you keep your thank-you for the time you've given. Missing days is completely fine — I'm never counting them against you.*
- *I'll store what you write under a code, not your name. Please don't include other people's details, faces, or anything you'd rather keep private — only what you're comfortable sharing.*
- *This diary isn't a product and there's nothing to try or review — I'm just interested in how your days actually go.*
- *If anything you write worries you or brings something up, I'll share some places that can help — I'm a researcher, not a clinician, so I won't give health or medical advice.*

*Please tick what you're happy with:*
- ☐ *I'll keep the diary for ☐ 7 days ☐ 14 days.*
- ☐ *I'm happy to be reminded once a day at: ____ (morning / afternoon / evening).*
- ☐ *I'm happy to send voice notes (deleted after they're typed up).* ☐ *…photos of my own notes.*
- ☐ *I understand I can skip, pause or stop anytime and keep my thank-you.*
- ☐ *I may withdraw my diary entries later (see the main consent form)."*

### 7.4 Retention, rights & withdrawal
Follow [[user-recruitment-consent-pack]] §5.4–§5.5 verbatim: minimal retention schedule, deletion at close-out, and the participant's right to withdraw entries after the fact. Withdrawal of diary entries removes them from the synthesis corpus; any `EVD` already derived is retracted per [[source-evidence-record-schema]] (`retracted` state) and flagged to [[research-gap-contradiction-log]] if it was load-bearing.

---

## 8. Synthesis fields

**Purpose.** Turn raw entries into structured, source-linked inputs for [[user-needs-synthesis-template]] (TASK-029), `EVD` records ([[source-evidence-record-schema]]), evidence grades ([[evidence-grading-rules]]) and the gap/contradiction log ([[research-gap-contradiction-log]]) — **without** doing the synthesis here (scope fence). These fields are populated by the **researcher** (R07), never the participant, and only from **real** entries once the study is fielded (D1).

### 8.1 Per-entry coding fields

| Field | Values / rule | Feeds |
|---|---|---|
| `entry_id` | `PART-NNN-{Dnn\|Enn\|CHK\|CLO}` | provenance |
| `entry_type` | daily · event · checkin · closing | recall-fidelity weighting (§5.4) |
| `domain` | sleep · activity · nutrition · stress · other · none | retrieval / per-domain coverage |
| `recall_proximity` | moment_of (event) · same_day (daily) · retrospective (closing) | `EVD` confidence (closer = higher) |
| `verbatim` | participant's exact words | `EVD` excerpt ([[source-evidence-record-schema]]) |
| `observation` | what the entry **shows** happened (behaviour/context/obstacle/workaround) | JTBD / needs |
| `inference` | researcher's interpretation — **separate field** (D7) | flagged as inference, never promoted |
| `com_b_tag` | Capability / Opportunity / Motivation touchpoint (optional, R02) | [[behavior-change-evidence-extraction-table]] cross-ref |
| `jtbd_signal` | candidate job-to-be-done, phrased as the participant's goal | TASK-029 JTBD column |
| `unmet_need_signal` | gap between what they wanted and what happened | TASK-029 needs |
| `workaround` | self-made system observed (high-value) | TASK-029 / capability ideas |
| `day_type` | ordinary · good · low-energy · disrupted (from §4.2 tag or inferred-and-flagged) | variability analysis |
| `contradiction_flag` | conflicts with this participant's interview or another entry | [[research-gap-contradiction-log]] |
| `ambivalence_flag` | mixed/competing feelings — **preserved, not resolved** | [[research-gap-contradiction-log]] |
| `confidence` | default **C/D** (single short-term self-report), per [[evidence-grading-rules]] | grading; never promoted to A/B off a diary alone (D9) |
| `safety_note` | set if §10.4 path was triggered (metadata only, R14-held) | safety audit |

### 8.2 Observation-vs-inference discipline (D7)
`verbatim` → `observation` → `inference` are **three separate fields**, filled in that order. The participant's words are never edited into the observation; the researcher's reading never contaminates the observation. This keeps the "separate evidence, inference, hypothesis and invention" rule (`prd.md` §13 Prompt 00) auditable at the row level and lets [[evidence-grading-rules]] grade the observation independently of the inference.

### 8.3 Per-participant window roll-up (for TASK-029 intake)
After a window closes, the researcher produces a short, structured roll-up **per participant** — *not* a cross-participant synthesis (that is TASK-029):
- days kept / window length (honest, real counts only — D1); day-type distribution;
- candidate JTBD signals, unmet-need signals, and notable workarounds (each linked to `entry_id`s);
- intra-participant contradictions/ambivalence preserved (not reconciled);
- the mandatory `prd.md` §5 caveat line: *"Short-term diary signal only — not retention, automaticity, or health outcome."*

### 8.4 What synthesis may **not** do with diary data
- May not aggregate small-n diary tags into a statistic presented as representative (D1/D9).
- May not promote a diary self-report to an efficacy or health-outcome claim ([[evidence-grading-rules]] cap).
- May not "tidy away" a contradiction between the diary and the interview — it is logged ([[research-gap-contradiction-log]]).
- May not reuse special-category content outside the research question (§7.2).

---

## 9. Participant instruction sheet (hand-out)

> **This is the one-page sheet given to the participant at enrolment.** Plain language, R10-written, R13-checked for accessibility, R15-approved for privacy. Verbatim below; bracketed items are fill-ins per participant.

---

### Your 7-day diary — a quick guide *(the friendly version)*

**Thank you for doing this.** This is a short, light diary about how your days actually go — around **sleep, moving your body, eating, and stress or mood.** There are **no right answers** and **nothing to get right.** I'm just interested in the real texture of your days.

**How long?** [7 / 14] days, starting [date].

**What you'll do each day:** when you get my evening nudge, jot down **a couple of lines about your day.** It takes **under three minutes.** Five little prompts, and you can skip any of them:
1. Did anything happen around sleep / moving / eating / stress today? *(Even "nothing much" is a real answer.)*
2. What was going on around it?
3. If you did something — how did it go? If you didn't — what got in the way?
4. How did it sit with you?
5. Anything else you'd want me to understand?

**In-the-moment notes (totally optional):** if something comes up during the day — you did the thing, meant to and didn't, hit a snag, or found a little trick that worked — you can **jot a quick note right then.** One or two lines. Some days you'll have none, some a few. **All fine.**

**How to keep it:** whatever suits you — **text, a voice note, a photo of your own handwritten note, or on paper.** [Your way: ____.] *(If you send a photo, please keep other people, faces and addresses out of it.)*

**A few promises:**
- **Skip, pause, or stop anytime** — no explanation needed, and you keep your thank-you for the time you've given.
- **Missing a day is completely fine.** I never count missed days against you, and there's no streak to break.
- I store everything under a **code, not your name.** Please share only what you're comfortable with, and leave out other people's private details.
- This **isn't a product** — there's nothing to try, test, or review.
- If anything you write brings something up, I'll point you to **places that can help.** I'm a researcher, not a clinician, so I won't give medical advice.

**Your thank-you:** [amount/voucher], and it's **prorated** — you're thanked for the days you do, even if you stop early.

**Questions or want to pause?** Message me anytime at [research contact]. **Thank you again.**

---

## 10. Facilitation, operations, safety & accessibility

### 10.1 Pre-flight (before any diary data)
Confirm the participant's `PART-NNN`, that the **diary opt-in** and the **§7.3 diary module** are both affirmed, chosen window length, reminder window, capture mode, and any Q10 accommodations (all from the [[user-recruitment-consent-pack]] consent log). Configure pseudonymised storage keyed to `PART-NNN`. **No data collected until green** (D2).

### 10.2 During the window
Researcher sends only the scheduled reminders (§6), honours quiet hours and "off" days, and responds to any participant message promptly and warmly. Entries are ingested to `PART-NNN` storage; voice notes transcribed then audio deleted (§7.2). No coding/interpretation is shown to the participant.

### 10.3 Close-out
Send the closing reflection + thank-you logistics; confirm proration; run the per-participant roll-up (§8.3); honour any withdrawal; delete per retention schedule ([[user-recruitment-consent-pack]] §5.4). Real counts only (D1).

### 10.4 Safety & escalation (R14-owned; inherited from [[user-recruitment-consent-pack]] §4.4/SF3)
A diary is **asynchronous**, so a distress disclosure may arrive without a researcher present in the moment. Rules:
- The instruction sheet and consent module both state, up front, that the researcher is **not a clinician** and will **not** give medical advice (D8).
- Diary channels are monitored on a **defined, disclosed schedule** (e.g. each business day) — the participant is told the diary is **not** a crisis channel and is given the **R14 signposting list** (crisis lines, GP, relevant charities) at enrolment, exactly as every interview participant receives it ([[neutral-discovery-interview-guide]] §7.4).
- If an entry discloses acute crisis, self-harm, or active eating disorder, the researcher follows **R14's protocol**: acknowledge plainly, re-share signposting, offer to pause/stop with thank-you intact, and escalate per the safeguarding path — **no diagnosis, no treatment advice** (D8).
- The `safety_note` field (§8.1) records that the path was triggered (metadata only), held by R14.

### 10.5 Accessibility (R13-owned — `prd.md` §1)
Honour Q10 accommodations: the **paper and voice-note modes** exist precisely so the diary is not screen-only; large-text/printed instruction sheet; screen-reader-friendly consent and prompts; no timed responses; a participant may dictate to a support person if they wish; reminder channel chosen to match the participant's access needs; plain language throughout (R10). The under-3-minute design is itself an accessibility feature (low cognitive/energy load).

---

## 11. Worked synthetic example (method illustration only)

> **⚠ ILLUSTRATIVE / SYNTHETIC — NOT A REAL PARTICIPANT, ENTRY, OR FINDING.** `PART-SYNTH-D` is invented solely to show how a daily entry and an event log flow into the §8 synthesis fields. It must **never** be cited, coded, counted, or treated as data (D1; `prd.md` §4/§14).

**Raw entries (as the participant would write them):**
```text
# SYNTHETIC — format demonstration only
PART-SYNTH-D   window: 7 days   capture_mode: text

DAILY  (PART-SYNTH-D-D02, evening, same_day)
  Q1: "Didn't sleep great, so skipped my morning walk."
  Q3: "Meant to walk at lunch instead but a call ran over. Ended up walking to the shop later."
  Q4: "Bit annoyed but the shop walk sort of counted."

EVENT  (PART-SYNTH-D-E03, afternoon, moment_of)
  1: "Call ran over, no lunch walk."
  3: "Told myself I'd just walk to the shop later instead."
```

**Researcher coding (§8.1 fields):**
```text
entry_id:          PART-SYNTH-D-D02
domain:            activity
recall_proximity:  same_day            # daily prompt
verbatim:          "Ended up walking to the shop later."
observation:       Substituted an errand-walk when the planned lunch walk was blocked by work.
inference:         [INFERENCE] Possible self-made "any movement counts" workaround; needs corroboration.  # kept separate (D7)
jtbd_signal:       "Keep some movement in a day that didn't go to plan."
unmet_need_signal: Planned activity is fragile to schedule disruption.
workaround:        Errand-walk substitution.
day_type:          disrupted
ambivalence_flag:  true   # "bit annoyed" + "sort of counted" — preserved, not resolved
confidence:        C      # single short-term self-report (evidence-grading-rules); NOT promoted (D9)
```

**What it demonstrates (method, not data):** a blocked plan (`observation`) and a self-made substitution (`workaround`) are captured near the moment (`moment_of` event + `same_day` daily); the researcher's hunch is quarantined in `inference` (D7); the mixed feeling is **preserved** as `ambivalence_flag`, not tidied; and the whole thing is graded **C** and barred from promotion to an efficacy claim (D9). It illustrates the *moves*; it asserts nothing about any real person.

---

## 12. Dependencies, open unknowns, forbidden values & change log

### 12.1 Dependencies (directional)
- **Upstream:** [[user-recruitment-consent-pack]] (TASK-026 — master consent, `PART`, quotas, safety signposting, incentive/proration, diary opt-in; this kit runs only on its output) · [[neutral-discovery-interview-guide]] (TASK-027 — the diary is invited at interview close) · [[source-evidence-record-schema]] (TASK-005 — `PART`↔`EVD` provenance, `retracted` state) · [[evidence-grading-rules]] (TASK-004 — C/D default grading, no promotion) · [[behavioral-literature-search-protocol]] / [[behavior-change-evidence-extraction-table]] (TASK-024/025 — which mechanisms the prompts gently surface, via R02).
- **Downstream:** [[user-needs-synthesis-template]] (TASK-029 — JTBD/needs/journeys/contradictions; admits only consented, in-quota, real diary data) · [[research-gap-contradiction-log]] (TASK-008 — contradictions/ambivalence, coverage gaps) · Gate 2 opportunity readiness (`prd.md` §11).
- **Tooling decision (not assumed):** [[phased-tool-purchasing-decision-sheet]] (TASK-038) owns any diary-tool purchase; this kit stays tool-neutral (`prd.md` §10).

### 12.2 Open unknowns (explicitly unresolved, not guessed)
- **Collection tool / channel.** Text vs. voice vs. dedicated diary tool vs. paper — a procurement + privacy decision for R07+R15 (TASK-038); not fixed here.
- **7 vs. 14 days as the default.** Default is 7 with 14 offered; whether synthesis needs a minimum number of 14-day windows for weekly-pattern coverage is a TASK-029 question.
- **Monitoring schedule for safety (§10.4).** The exact business-hours monitoring cadence and out-of-hours messaging are R14/R15 operational settings, localised per region.
- **Language & cultural adaptation.** Prompts are plain English; translation/idiom adaptation ties to [[user-recruitment-consent-pack]] E4/§3.4 and is open for the languages WS04 is resourced to run.
- **Incentive proration mechanics.** Per-day amount and payout method are [[user-recruitment-consent-pack]] §7-owned; not set here.
- **Exact signposting list contents** are R14-owned and localised ([[user-recruitment-consent-pack]] §10); referenced, not authored, here.

### 12.3 Forbidden values & validation-failure catalogue
A kit — or a future diary record — exhibiting any of the following is **blocked at Gate-2 review**, not silently fixed:
1. Any entry, reminder response, completion rate, quote, or finding presented as real while the study is unexecuted; any synthetic example (§11) not tagged `*-SYNTH-*` or used in a count/claim (D1; `prd.md` §4/§14).
2. Diary data collected before the §7.3 module **and** the master consent are affirmed, or after a withdrawal (D2).
3. An instrument version exceeding the §1 burden ceiling, or adding prompts/sensors beyond the consented minimal set (D3/D6).
4. Any leading, future-preference, solution-testing, or product-reactive prompt — especially a §4.4 banned form (D4).
5. A streak, score, completion percentage, missed-day penalty, or "welcome back" shown to the participant (D5).
6. Direct identifiers stored in the diary dataset; identity↔`PART` link exposed beyond authorised holders; precise location or background telemetry collected (D6/§7).
7. Third-party identifiers/faces ingested from a photo; a voice-note audio retained past its transcription/retention schedule (§7.2).
8. Observation and researcher inference merged into one field; a participant's words edited into the observation; an entry "tidied" (D7/§8.2).
9. A contradiction/ambivalence between diary and interview resolved away rather than logged (§8.4; [[research-gap-contradiction-log]]).
10. A diary self-report promoted to an efficacy, retention, automaticity, or health-outcome claim, or small-n tags presented as a representative statistic (D9/§8.4; [[evidence-grading-rules]]).
11. A distress disclosure met with diagnosis/clinical advice, or without the R14 signposting path; the diary presented as a crisis channel (D8/§10.4).
12. Special-category content reused for analytics, marketing, or model-training ([[user-recruitment-consent-pack]] forbidden value 11).

### 12.4 Change log
- **v0.1 (2026-11-23)** — Initial 7–14-day diary study kit. Defines a light, optional, post-interview diary: five-prompt **daily set** (§4) with optional never-required tags and banned-form kill-list; **event-based logging** template with pull-not-push prompting and symmetric action/non-action/workaround capture (§5); gentle, quiet-hours-aware, non-punitive **reminder cadence** with one-nudge ceiling and neutral copy (§6); diary-specific **privacy boundaries** + consent module attaching to the TASK-026 master consent, with consented timestamp precision, photo/voice rules and special-category minimisation (§7); researcher-populated **synthesis fields** with strict observation-vs-inference separation feeding TASK-029/005/004/008 (§8); a plain-language **participant instruction sheet** (§9); facilitation/safety/accessibility protocol inheriting TASK-026's machinery (§10); and one clearly-labelled synthetic format demonstration (§11). **Study unexecuted; no participant has kept this diary; no entry, count, or finding is real.**

---

## 13. Acceptance-criteria crosswalk (for the reviewer)

| Acceptance criterion | Where satisfied |
|---|---|
| **Daily prompts** | §4 — five-prompt core daily set (§4.1), optional never-required tags (§4.2), mid-study & closing reflections (§4.3), banned-form kill-list (§4.4); verbatim prompts carried into the instruction sheet (§9) |
| **Event-based logging** | §5 — participant-facing event definition (§5.1), <60-second three-field capture template (§5.2), pull-not-push prompting rule (§5.3), relationship to the daily prompt for recall weighting (§5.4) |
| **Reminder cadence** | §6 — default cadence table with one-nudge ceiling (§6.1), verbatim neutral copy (§6.2), configurability & quiet hours (§6.3), non-punitive missed-day handling (§6.4) |
| **Privacy boundaries** | §7 — collected/excluded table (§7.1), diary-specific rules incl. consented timestamp precision, photo/voice/special-category rules (§7.2), verbatim diary-specific consent module attaching to TASK-026 (§7.3), retention/rights/withdrawal (§7.4); privacy non-negotiable D6 |
| **Synthesis fields** | §8 — per-entry coding fields (§8.1), observation-vs-inference discipline (§8.2), per-participant roll-up for TASK-029 intake (§8.3), explicit limits on what synthesis may do (§8.4) |
| **Participant instruction sheet** | §9 — one-page plain-language hand-out (R10-written, R13/R15-checked), including the daily prompts, event guidance, capture modes, promises, thank-you/proration |
| **Independently reviewable, clearly labelled** | Header block (status "study UNEXECUTED", owner + reviewers named R07/R15/R14/R13/R10/R02), §0 reader guide, this crosswalk |
| **No fabricated research observations or test results** | No-fabrication statement; non-negotiable D1; no participant/entry/count/finding anywhere; the only populated content is the `PART-SYNTH-D` demonstration (§11), explicitly inadmissible; forbidden-value catalogue §12.3 items 1, 10 |
