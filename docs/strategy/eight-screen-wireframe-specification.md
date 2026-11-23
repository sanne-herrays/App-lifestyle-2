# HerRays Eight-Screen Low-Fidelity Wireframe Specification

**Deliverable:** TASK-045 — Create the eight-screen low-fidelity wireframe specification
**Workstream:** Concept Innovation (WS07)
**Version:** 0.2 · **Status:** Proposed — screen specification defined; no concept, screen design, user test or result asserted
**Owner (accountable role):** WS07 Concept Program Lead (proposed governance default, pending Program-Director confirmation — see `→ TASK-002`), with the Senior UX/product designer (R03) as drafting author and the QA/accessibility specialist (R13) as accessibility co-signer
**Reviewers:** R01 Head of Product / Product visionary · R03 Senior UX/product designer · R08 Motion/interaction designer · R10 Content strategist/UX writer · R12 iOS engineer · R13 QA/accessibility specialist · R14 Clinical reviewer · R15 Privacy/regulatory reviewer · Program Director (independence custodian)
**Source basis:** `prd.md` §9 line 178 (the finalist wireframe minimum — "welcome, discovery, first action, daily home, guided action, progress/reflection, missed day/recovery, personal insight; add personalization, reminders, errors, privacy controls, settings, paywall and accessibility states as needed. Provide editable files, annotated interactions and source-to-decision traceability"), §3 line 127 (the ten standardized journeys the screens serve), §3 line 135 (the streaks worked example and the non-punitive missed-day principle — "celebrate returning after disruption"; "meaningful repeated action and perceived autonomy, not merely app opens"), §1 (separate engagement / adherence / automaticity / health outcomes; the non-negotiable constraints — clinical safety, privacy, autonomy, accessibility, non-patronizing brand), §6 (COM-B, BCTTv1, SDT, Fogg; ethical anti-patterns — guilt, compulsion, burden, over-tracking), §8 line 170 (studios "create storyboards and low-fidelity editable/clickable prototypes"), §11 line 201 (Gate 3: "complete journeys, invention clearly distinguished from evidence") and line 202 (Gate 4: "testable prototypes … safety/privacy/accessibility review"), §14 (handoff/acceptance and the "not complete" rules); `↔ TASK-016` (the ten standardized app test journeys these screens are the HerRays-side surface for), `↔ TASK-022` (the iOS & accessibility audit template whose criteria this spec's accessibility annotations are written to satisfy), `↔ TASK-019` (UX heuristic audit template — the heuristics each screen is annotated against), `↔ TASK-020` (visual & motion audit template — motion/reduced-motion rules), `↔ TASK-021` (growth & UX-writing audit template — copy intent and first-value rules), `↔ TASK-043` (six studio briefs — the studios whose low-fi prototypes are built against this spec, §4.5), `↔ TASK-044` (divergent concept submission template — requires a prototype with a screen inventory; this spec defines that inventory), `→ TASK-046` (the "Your Little Win Today" microinteraction — a *standalone* component referenced by the First Action and Guided Habit screens but **not** defined here), `→ TASK-047` (the Habit Graduation state machine — the state logic behind the Guided Habit, Missed Day and Progress screens; referenced, **not** defined here), `→ TASK-048` (concept testing & final selection — the independent judge these prototypes feed)

---

## 0. How to read this document

This is the **screen specification** for WS07 low-fidelity prototyping: the eight required screens, each defined as a *slot* with a purpose, a region inventory, interaction annotations, state coverage and accessibility annotations — the common skeleton every one of the six isolated concept studios (`↔ TASK-043`) builds its own low-fidelity prototype against, and the minimum a finalist must wireframe before Gate 4 (`prd.md` §9/§11). It satisfies the TASK-045 acceptance criteria: it **defines welcome, discovery, first action, daily home, guided habit, progress, missed day and personal insight screens with interaction and accessibility annotations.**

It is a **specification / method artifact**, not a research finding and **not a concept, and not a finished design.** It contains:
- **no concept, no brand, no final visual design and no final copy** — those are the studios' work (`prd.md` §8). This spec defines *what each screen must let a user do, what states it must handle, and how it must be accessible* — never what any particular HerRays concept looks like. The wireframes here are deliberately **grayscale, label-only, low-fidelity frames** (§3.1): boxes and intent, not pixels;
- **no fabricated research** — no interview, observation, usability result, metric, effect size, user quote or clinical outcome is asserted anywhere. Where this spec names a behavioral mechanism (e.g. implementation intention, positive feedback, self-monitoring) it names it as a **mechanism-to-test**, tagged `[MECH]`, pointing at the evidence record and the downstream test (`↔ TASK-025`, `→ TASK-048`) — never as a validated finding or a claimed user response;
- **no usability claim** — this document asserts that a screen *provides an affordance*, never that the affordance *works*, is *preferred*, or *performs*. Every performance, desirability or comprehension question is written as a **test hypothesis** routed to `→ TASK-048`, never answered here.

> **No-fabrication statement.** This specification tells studios and finalists what screens to build and how to make them accessible; it does no studio's design work and invents no evidence. It cites no real `JRN`/`NEED`/`EVD`/`OPP`/`CAP`/`APP` content; where it refers to a user context (e.g. "a low-energy day," "a missed day") it does so as a *scenario the screen must handle*, drawn verbatim from the PRD's ten journeys (`prd.md` §3) and the studio briefs — not as an observed user or a claimed behavior. The ASCII wireframes in §4–§11 are **illustrative low-fidelity layouts of the required regions**, explicitly marked, showing *structure and interaction*, never a concept's identity or any user data. Fabrication is made detectable and inert by three devices: (a) every behavioral claim is tagged `[MECH]` and demoted to a test hypothesis for `→ TASK-048`, so no mechanism can masquerade as a result; (b) accessibility annotations are written as *conformance requirements against external standards* (WCAG 2.2 AA, Apple HIG) — checkable facts, not research; (c) the §14 reviewability validator rejects — not merely flags — any screen submission that presents a hypothetical user, test or outcome as real, operationalizing the `prd.md` §14 "not complete" rules and §11 "Polished unsupported reports do not pass."

**Scope boundary (what this task is and is not).**
- **TASK-045 (this document) = the *eight-screen specification*** — the required screens, their purpose and entry/exit, region inventory, interaction annotations, state coverage and accessibility annotations, plus the shared conventions (§3) that make eight studios' prototypes comparable. It is concept-neutral: it specifies *slots and behavior*, not *content and brand*.
- **TASK-046 ("Your Little Win Today" microinteraction) = a *standalone component*.** This spec names *where* a little-win completion moment sits (the First Action screen §6, and the per-step completion in Guided Habit §8) and *what contract* it must honor (completion feedback, optional haptic, reduced-motion fallback), but it does **not** design the microinteraction — that is TASK-046, built to run with no dependency on the full app.
- **TASK-047 (Habit Graduation state machine) = the *state logic*** behind Guided Habit (§8), Missed Day (§9) and Progress (§10): initiation → repetition → adaptation → graduation → recovery, with no punitive reset on missed days. This spec *renders* states and *fires* the events; it does **not** define the machine's states, transitions or persistence — that is TASK-047.
- **TASK-016 (ten standardized app test journeys) = the *journey scripts*** these screens are the HerRays-side surface for. §2 maps each screen to the journey(s) it serves; this spec does not re-write the journeys, it *references* them.
- **TASK-022 / TASK-019 / TASK-020 / TASK-021 (the audit templates) = the *criteria*** this spec's annotations are written to satisfy. The accessibility annotations (§3.5, §13) are written to pass the `↔ TASK-022` iOS/accessibility audit; they do not re-define that audit.
- **TASK-043 / TASK-044 (briefs / submission format) = the *commission and output contract*.** The studios build low-fi prototypes (`prd.md` §8) whose screen inventory this spec fixes; TASK-044 requires that inventory, this spec supplies it. Neither is re-defined here.
- **TASK-048 (concept testing & final selection) = the *downstream judge*.** Every "does it work / is it preferred / is it understood" question in this spec is a hypothesis routed there; this spec never pre-judges or self-certifies a screen.

---

## 1. Purpose and non-negotiables

`prd.md` §9 sets a hard **wireframe minimum for finalists**: eight named screens — *welcome, discovery, first action, daily home, guided action, progress/reflection, missed day/recovery, personal insight* — with "editable files, annotated interactions and source-to-decision traceability," plus accessibility states and the supporting screens (personalization, reminders, errors, privacy controls, settings, paywall) "as needed." §8 requires each studio to build "low-fidelity editable/clickable prototypes." Gate 4 (§11 line 202) will not pass a prototype that is not testable or has not had "safety/privacy/accessibility review."

This specification exists to do six jobs:

1. **Fix the eight required screens as a common skeleton.** All six studios build *different concepts* but must cover the *same eight jobs-to-surface*, so the Gate-3 review (`prd.md` §11) and `→ TASK-048` validation can compare six prototypes without the comparison collapsing because one studio simply omitted "missed day." §2 is the map; §4–§11 are the slots.
2. **Specify behavior and state, not look.** Low-fidelity means the spec constrains *what the screen must let the user do and which states it must handle* — not its visual identity. A studio's concept supplies the look, the copy and the motion personality; this spec supplies the affordances and the state coverage they must not drop (§3.1, §3.4).
3. **Make accessibility a built-in, not a retrofit.** Every screen carries accessibility annotations against external standards (WCAG 2.2 AA; Apple Human Interface Guidelines) — VoiceOver semantics, Dynamic Type, contrast, touch-target size, focus order, reduced-motion fallback — so that a low-fi prototype is *born* reviewable at Gate 4 and auditable against `↔ TASK-022` (§3.5, §13).
4. **Carry the non-negotiable constraints onto every screen.** Clinical safety, privacy/data-minimization, autonomy and the non-patronizing brand (`prd.md` §1) are annotated per screen as **MUST** rules, not studio options — most sharply on Missed Day (no shame, no reset) and Personal Insight (no medical claim, no diagnosis).
5. **Keep invention honest and testable.** Every behavioral mechanism a screen leans on is tagged `[MECH]` with its evidence pointer and a test hypothesis for `→ TASK-048`; no screen asserts that its affordance changes behavior, is preferred, or is understood (§3.9).
6. **Be independently reviewable.** A reviewer who has never met the authors can run §14 against any studio's eight screens and issue accept / return-incomplete / reject on evidence of coverage and accessibility — not on polish (`prd.md` §11 line 205: "Polished unsupported reports do not pass").

**Seven non-negotiable rules, enforced on every screen (`RULE-1`–`RULE-7`).** These `RULE-n` identifiers are a separate namespace from the `W1`–`W8` screen IDs defined in §2: a `RULE-n` reference always means one of the seven rules below, and a `Wn` reference always means a screen. (Per-screen regions are `Rn`, interactions `In`, accessibility `An`/`AX-n`; validator checks are `Vn`, checklist rows `Cn` — all distinct.)

- **RULE-1 — All eight screens, every state.** A prototype is complete only if all eight screens exist *and* each covers its required states (§3.4): at minimum first-run/empty, populated, loading, error, and offline where the screen reads or writes data. A screen that only shows its happy path is *returned incomplete* (`prd.md` §14), never accepted.
- **RULE-2 — Accessibility is a gate, not a layer.** Each screen must carry its accessibility annotations (§3.5 baseline + screen-specific) and pass the §13 checklist. Accessibility is a mandatory gate (`prd.md` §9/§11); a beautiful inaccessible screen does not pass. Minimum interactive target 44×44 pt (Apple HIG); text contrast ≥ 4.5:1, large text / UI components ≥ 3:1 (WCAG 2.2 AA, 1.4.3/1.4.11); full VoiceOver traversal; Dynamic Type to the largest accessibility sizes; reduced-motion fallback for every animation.
- **RULE-3 — The missed-day screen is non-punitive.** The Missed Day / recovery screen (§9) MUST NOT reset progress to zero, display a broken streak as failure, use shame or loss-framing copy, or make re-entry effortful. It celebrates returning and offers one low-friction next step (`prd.md` §3 line 135; §6 anti-patterns). This is an absolute rule, not a studio preference.
- **RULE-4 — Autonomy and reversibility.** Every destructive, committing or data-sharing action is reversible or confirmable; nothing is opt-out-by-default for sensitive data; the user can skip, defer, or change any guided step without penalty (SDT autonomy, `prd.md` §6). No dark patterns (forced continuity, confirm-shaming, disguised ads) — a forbidden-pattern list is in §15.
- **RULE-5 — Privacy and clinical boundary on the surface.** Any screen that collects, displays or infers health-relevant data (Discovery personalization, Personal Insight, Progress) carries the data-minimization and consent annotations (§3.7) and the clinical-boundary rule: **no diagnosis, no medical claim, no treatment instruction**; surface escalation/"see a clinician" routing where relevant, per `↔ TASK-040`. Insight is contextual reflection, never clinical advice.
- **RULE-6 — Invention labelled, performance deferred.** Any behavioral mechanism a screen relies on is `[MECH]`-tagged with an evidence pointer; any claim about whether the screen works, is liked, or is understood is a **test hypothesis** for `→ TASK-048`. No screen self-certifies its own efficacy or desirability.
- **RULE-7 — No fabricated content.** Wireframes show *structure*, using obviously placeholder labels (`[greeting]`, `[action title]`, `[n]`), never real or realistic user data, real quotes, real metrics or a real person. Populated-state examples are marked **ILLUSTRATIVE — STRUCTURE ONLY** and assert nothing about a real user.

---

## 2. The eight-screen map

The eight screens are the HerRays-side surface for the PRD's ten standardized journeys (`prd.md` §3 line 127; `↔ TASK-016`). They are **not** ten screens: several journeys share a screen (reminders re-enter the Daily Home; change-of-circumstances adapts through Discovery/Guided Habit), and two journeys (discovery/acquisition and paywall/cancellation) are partly *outside* the eight required screens and handled by the "as needed" supporting screens (§2.2). The eight are the minimum every finalist must wireframe.

| # | Screen (this spec) | PRD §9 name | Primary job-to-surface | Serves journey(s) (`↔ TASK-016`) | Key downstream |
|---|---|---|---|---|---|
| W1 | **Welcome** | welcome | Orient and invite — explain the promise, set expectations, obtain first consent, offer a no-pressure start | J1 discovery (post-install), J2 onboarding entry | sets consent state read by all data screens |
| W2 | **Discovery / Personalization** | discovery | Learn just enough to make the first action relevant — goal/context selection with minimal, skippable input | J3 personalization/goal selection; J9 change of circumstances (re-entry) | seeds `[MECH: implementation intention]`; `→ TASK-047` initiation |
| W3 | **First Action** | first action | Deliver one small, completable, meaningful action in the first session — the first "little win" | J4 first meaningful action | hosts `→ TASK-046` little-win moment |
| W4 | **Daily Home** | daily home | The ordinary-day anchor — today's one or few things, current status, calm re-entry point | J5 normal daily interaction; J6 reminders/re-entry | routes to W5/W6/W7/W8 |
| W5 | **Guided Habit** | guided action | Guide the user through performing the habit/action now — step pacing, in-the-moment support, completion | J5 daily action; J4 (first time) | renders `→ TASK-047` repetition state; per-step `→ TASK-046` |
| W6 | **Progress / Reflection** | progress/reflection | Make effort visible without turning the user into a data analyst — consistency and reflection, not raw charts | J7 progress/reward/reflection | reads `→ TASK-047` repetition/graduation |
| W7 | **Missed Day / Recovery** | missed day/recovery | Welcome a user back after a gap — no punishment, one gentle next step | J8 missed day/recovery; J9 changed circumstances | renders `→ TASK-047` recovery (RULE-3 non-punitive) |
| W8 | **Personal Insight** | personal insight | Reflect a personally relevant, contextual observation — not a diagnosis, not a dashboard | J7 reflection; overlaps J5 | hard clinical-boundary gate (`↔ TASK-040`) |

### 2.1 What each screen is *not*

To keep the slots distinct (and to stop studios from collapsing them), each screen is defined as much by exclusion as inclusion:

- **W1 Welcome** is not onboarding personalization (that is W2) and not a paywall. It may *state* that a paid tier exists; it may not gate the first action behind payment (RULE-4/§15 forbidden pattern: first-action-paywall).
- **W2 Discovery** is not a long questionnaire. It collects the *minimum* needed for a relevant first action; everything else is deferred and skippable (RULE-4 autonomy; data minimization §3.7).
- **W3 First Action** is not the Daily Home and not a tutorial. It is one completable action that yields a felt result in the first session (`[MECH: early positive feedback]`, test `→ TASK-048`).
- **W4 Daily Home** is not Progress and not a feed. It shows *today*, calmly; depth lives in W5/W6/W8.
- **W5 Guided Habit** is not a settings screen and not the Progress screen; it is the *doing* surface.
- **W6 Progress** is not raw analytics. "Charts may not translate into decisions" (`prd.md` §3, Habitify caution); the screen shows consistency and reflection, with any detailed data secondary and optional.
- **W7 Missed Day** is not an error screen and not a re-onboarding; it is a *recovery* surface governed by RULE-3 (non-punitive).
- **W8 Personal Insight** is not a clinical report, diagnosis or recommendation engine; it is contextual reflection with a hard boundary (RULE-5/`↔ TASK-040`).

### 2.2 Supporting screens ("as needed," `prd.md` §9)

Not part of the required eight, but a studio adds them where its concept needs them; each inherits the §3 conventions and the §13 accessibility checklist. Listed so reviewers know where the required-eight boundary sits:

| Supporting screen | When needed | Governing rule |
|---|---|---|
| Reminders / notifications setup | if the concept uses scheduled prompts | opt-in, user-set cadence, easily silenced (RULE-4 autonomy; `↔ TASK-021`) |
| Privacy controls / consent center | always recommended for a health-adjacent app | granular, reversible consent; data export/delete (`↔ TASK-040`, GDPR) |
| Settings | most concepts | reachable in ≤2 taps from W4; houses accessibility prefs |
| Error / offline detail | if deep flows can fail | see global state model §3.4 |
| Paywall / subscription | if monetized | never gates first value; no forced continuity (`↔ TASK-021`, §15) |
| Escalation / "talk to a clinician" | if health signals can warrant it | surfaced from W8/W6 per clinical-boundary (`↔ TASK-040`) |

---

## 3. Shared specification conventions

These conventions apply to all eight screens. §4–§11 reference them rather than repeating them, and add only screen-specific detail. This is deliberate: it keeps the per-screen sections comparable and gives reviewers a single place to check the baseline.

### 3.1 Low-fidelity rules (what "low-fi" means here)

A conforming wireframe at this stage is **structure and behavior, not identity**:

- **Grayscale, no brand.** Boxes, rules and labels only. No final color system, logo, illustration, photography or typeface choice. (Color/visual identity is the studio's concept work, audited later via `↔ TASK-020`.) Grayscale also forces the layout to carry meaning without relying on color — a built-in head start on the "don't encode meaning in color alone" accessibility rule (WCAG 1.4.1).
- **Placeholder copy only.** Use intent labels in brackets — `[greeting]`, `[action title]`, `[primary CTA]` — never final microcopy and never realistic user data (RULE-7). Copy *intent* and *tone* are specified (§3.7); the words are the content strategist's later work (`↔ TASK-021`).
- **Region-level, not pixel-level.** Specify regions (header, primary content, primary action, secondary actions, status), their order and relative emphasis, and the interactions between them. Exact spacing, grid and type scale are out of scope at low fidelity.
- **One primary action per screen.** Each screen names exactly one primary action (the "if the user does one thing here, it is this"). Secondary actions are clearly subordinate. This keeps cognitive load low (`↔ TASK-019`) and makes the screens testable.
- **Editable and clickable.** Per `prd.md` §9, the artifact must be editable (not a flattened image) and the prototype clickable enough to walk the journeys in `→ TASK-048`.

### 3.2 Device and layout frame

- **Baseline device:** iPhone, portrait, single-hand reach assumed. Primary actions sit in the lower/comfortable-reach zone where possible.
- **Safe areas & system chrome:** respect top safe area (status bar / notch / Dynamic Island) and bottom safe area (home indicator). Do not place interactive targets under system gestures.
- **Orientation:** portrait is the design baseline; the layout must not break or hide the primary action in landscape or on compact heights (it may reflow).
- **One-handed primacy:** the single primary action should be reachable with the thumb; destructive actions are placed away from the primary thumb arc.

### 3.3 Per-screen annotation schema

Every screen in §4–§11 is specified with the same eight-field schema so reviewers can diff studios field-by-field:

| Field | What it states |
|---|---|
| **Purpose & job-to-surface** | the one sentence of what this screen lets the user do, and the journey(s) it serves |
| **Entry / exit** | how the user arrives, and every way they can leave (including back/cancel) |
| **Region inventory** | the ordered regions and the single primary action; what each region holds (as intent, not content) |
| **Interaction annotations** | the gestures, taps, transitions and feedback — numbered `Ix` and keyed to the wireframe |
| **States** | the required states for this screen from the §3.4 model, plus any screen-specific state |
| **Accessibility annotations** | screen-specific VoiceOver/Dynamic Type/contrast/target/motion notes on top of the §3.5 baseline, keyed `Ax` |
| **Copy intent & tone** | what the copy must *do* and must *never do* on this screen (no final words) |
| **Mechanism-to-test & traceability** | `[MECH]` tags with evidence pointers and the `→ TASK-048` hypothesis; links to the journey, state machine and microinteraction |

### 3.4 Global state model

Every screen must specify its behavior for the applicable states below. A screen that reads or writes data MUST cover first-run, loading, error and offline; W1 (static) may legitimately have only a subset. Dropping an applicable state is a §14 return-incomplete.

| State | Requirement |
|---|---|
| **First-run / empty** | What the screen shows with no data yet. Must be inviting and non-blank — an empty Daily Home guides to a first action, it does not show an empty list. |
| **Populated** | The ordinary state with data present (shown as structure only, RULE-7). |
| **Loading** | A determinate or indeterminate indicator with an accessible announcement; never a frozen screen. Skeleton placeholders preferred over spinners where content shape is known. |
| **Error** | Plain-language cause + a recovery action + a way out. Never a dead end, never blame the user, never expose raw error codes as the primary message (`↔ TASK-019`). |
| **Offline** | The app is health-adjacent and used daily; core actions (completing today's action, viewing today's plan) MUST degrade gracefully offline and sync later. Offline is annotated, not assumed. |
| **Permission-required** | If the screen needs a system permission (notifications, HealthKit — `↔ TASK-039`), it explains *why before* the system prompt and works (degraded) if declined. Never re-prompt punitively. |
| **Returning-after-gap** | If the user has been away, the screen defers to the non-punitive RULE-3 (no "you broke your streak"). |

### 3.5 Global accessibility baseline (applies to all eight screens)

Written as conformance requirements against external standards so they are checkable facts, not opinions. Each screen's §Accessibility annotations add only its specifics on top of this baseline. Full consolidated checklist in §13; audited against `↔ TASK-022`.

- **AX-1 — VoiceOver / screen reader:** every interactive and informative element has a meaningful accessibility label, a correct role/trait (button, header, adjustable, selected), and value where relevant. Decorative elements are hidden from the accessibility tree. Reading order follows visual/logical order. No control is reachable only by sighted pointing.
- **AX-2 — Dynamic Type:** text scales with the user's system text size through the largest accessibility sizes without truncation, clipping or loss of function; layouts reflow (no fixed-height text containers that cut off). Nothing critical is image-of-text.
- **AX-3 — Contrast (WCAG 2.2 AA):** body text ≥ 4.5:1; large text (≥ 24px / 19px bold) and meaningful UI components/graphical objects ≥ 3:1 (1.4.3, 1.4.11). Because wireframes are grayscale (§3.1), contrast is checked at the tonal level and must hold once the studio applies color.
- **AX-4 — Touch targets (Apple HIG):** every interactive target is ≥ 44×44 pt with adequate spacing; targets do not overlap system gesture areas.
- **AX-5 — Color independence (WCAG 1.4.1):** no information is conveyed by color alone; status also uses text, icon or shape. (Grayscale wireframing enforces this early.)
- **AX-6 — Motion & reduced motion (WCAG 2.3.3):** every non-essential animation has a reduced-motion fallback honoring the system "Reduce Motion" setting — cross-fades replace large transl/scale motion; no parallax, auto-playing or vestibular-trigger motion when reduced motion is on. No content flashes more than 3×/sec (2.3.1).
- **AX-7 — Focus & keyboard/switch control:** a visible, logical focus order; works with Full Keyboard Access and Switch Control; focus is managed on navigation and on modal open/close (focus moves in, returns on close).
- **AX-8 — Feedback is multi-modal:** success/error/state change is conveyed by at least two of {text, icon/shape, haptic, sound}; never haptic-only or color-only. Haptics are optional and never the sole signal (ties to `→ TASK-046`).
- **AX-9 — Timeouts & pacing (WCAG 2.2.1):** no action required within a time limit the user can't extend; guided pacing (W5) is user-controllable (pause/skip), never a forced countdown that fails the user.
- **AX-10 — Error identification (WCAG 3.3.1/3.3.3):** errors are announced to assistive tech, identified in text, and paired with a correction suggestion.

### 3.6 Global interaction grammar

- **Navigation:** a consistent, shallow model (tab or hub-and-spoke from W4). Back/cancel always available and predictable; no trapping the user in a flow (ties to AX-7 focus-return).
- **Gestures:** every gesture has a visible, tappable equivalent (swipe-to-complete also has a tap target) — gesture-only actions fail AX-1/AX-4. Standard iOS gestures behave as users expect (swipe-back).
- **Transitions:** motion communicates hierarchy and causality (where did this come from, where did it go), is brief, and always has the AX-6 reduced-motion fallback. Motion is never the only cue (AX-8).
- **Feedback latency:** acknowledge every tap within ~100 ms (press state); show progress for anything > ~1 s (§3.4 loading).
- **Haptics:** optional, subtle, tied to meaningful events (completion), never continuous, never the sole feedback (AX-8); honor system settings. Detailed per `→ TASK-046` for the little-win.

### 3.7 Content intent, tone & privacy/clinical rules

- **Non-patronizing voice (`prd.md` §1):** address the user as a capable adult. No baby talk, no scolding, no forced cheerfulness, no "you should." Encouragement is earned and specific, never hollow praise.
- **Autonomy-preserving (SDT, `prd.md` §6):** offer, don't command. Every guided path is skippable/adjustable; defaults are gentle and reversible (RULE-4).
- **No medical claims / clinical boundary (RULE-5, `↔ TASK-040`):** screens do not diagnose, promise health outcomes, or instruct treatment. Health-adjacent reflection is framed as observation + option, with escalation routing where a signal could warrant care. "Insight," not "advice."
- **Data minimization (RULE-5, GDPR, `↔ TASK-040`):** collect only what a screen needs for its job; every collection is explained and consented; sensitive data is clearly optional; the user can see, export and delete their data (supporting privacy screen §2.2).
- **No dark patterns (RULE-4, §15):** no confirm-shaming, forced continuity, disguised ads, false urgency or guilt-based retention. This is a mandatory gate, not a tone preference.

### 3.8 Concept-neutrality (how studios fill this without it dictating a concept)

This spec is the *skeleton*; the concept is the *body*. A studio satisfies the spec by covering each screen's **job, states and accessibility**, then expressing its concept through *layout emphasis, content, copy, motion personality and which optional regions it includes*. Two conforming studios can produce wildly different Daily Homes — one a single calm card, another a small set of contextual prompts — and both pass, provided each covers W4's job and states. The spec must **not** be read as prescribing one interaction philosophy; where a rule could bias a concept (e.g. "one primary action"), it is a *low-fi clarity* rule, not a concept constraint, and a studio may argue a deviation in its submission (`↔ TASK-044`) with rationale.

### 3.9 Mechanism-and-test labelling

Where a screen leans on a behavioral mechanism, it is tagged inline `[MECH: <name>]` and carries, in the screen's traceability field: (1) the mechanism's evidence pointer (`EVD`/BCT row, `↔ TASK-025`) and grade A–D (`↔ TASK-004`); (2) a one-line **test hypothesis** for `→ TASK-048` in the form *"does <screen affordance> improve <meaningful repeated action / perceived autonomy / comprehension> — not merely app opens?"* (`prd.md` §3 line 135). No screen states that the mechanism *works*; the tag is a promise to test, per RULE-6.

---

> The following eight sections (§4–§11) specify the required screens. Each ASCII frame is **ILLUSTRATIVE — STRUCTURE ONLY**: it shows required regions, order and the single primary action, in grayscale/label form. It shows no concept identity, no color, no final copy and no real user data (RULE-1/RULE-7).

## 4. W1 — Welcome

**Purpose & job-to-surface.** Orient a brand-new user in one screen: state the promise plainly, set honest expectations, obtain the first (minimal) consent, and offer a no-pressure way to begin. Serves J1 (post-install discovery) and the entry to J2 (onboarding). It is *not* a paywall and *not* personalization (that is W2).

**Entry / exit.** Entry: first launch after install; reachable again only via Settings ("about/how it works"). Exit: primary → W2 Discovery ("Begin"); secondary → "Not now / explore first" (a no-commitment path into a minimal W4); legal/consent links open detail sheets and return.

**Region inventory** (top → bottom; one primary action):

```
┌──────────────────────────────┐  ← top safe area
│  [status bar]                │
│                              │
│   [promise headline]         │  R1 Promise (what this is, in plain words)
│   [one-line expectation]     │     — honest, no hype, no health claim (RULE-5)
│                              │
│   ┌────────────────────┐     │  R2 Illustrative value region
│   │  [neutral visual    │     │     (grayscale placeholder; no brand)
│   │   placeholder]      │     │
│   └────────────────────┘     │
│                              │
│   [what we ask / why] •••    │  R3 Consent & expectation summary
│   [privacy one-liner →]      │     (links to detail; data-minimization §3.7)
│                              │
│   ┌────────────────────┐     │  R4 PRIMARY ACTION
│   │   [ Begin ]         │     │     → W2  (single primary action §3.1)
│   └────────────────────┘     │
│   [ Not now / explore ]      │  R5 Secondary, clearly subordinate → min W4
│   [terms] · [privacy]        │  R6 Footer links (sheets, return)
│                              │  ← bottom safe area / home indicator
└──────────────────────────────┘
```

**Interaction annotations.**
- **I1** Tap *Begin* (R4): advances to W2 with a brief, reduced-motion-safe forward transition (AX-6). Acknowledged within ~100 ms (§3.6).
- **I2** Tap *Not now / explore* (R5): enters a minimal W4 with no personalization; the app never blocks on W2 (autonomy, RULE-4).
- **I3** Tap *privacy one-liner / terms / privacy* (R3/R6): opens a sheet; focus moves into the sheet and returns to the triggering control on dismiss (AX-7).
- **I4** No auto-advance, no countdown, no forced video (AX-9); the user controls pace.

**States.** First-run (the only arrival state); offline — Welcome is static and MUST render fully offline; error — if a consent/legal sheet fails to load, show cached summary + retry (§3.4). No "populated/loading" data state (static screen).

**Accessibility annotations** (on top of §3.5):
- **A1** Reading order: promise → expectation → consent summary → primary action → secondary → legal (AX-1). The primary action is reachable as the first actionable element via rotor.
- **A2** *Begin* is a `button` trait with label "Begin"; legal links are `link` trait and distinguishable without color (AX-5).
- **A3** The visual placeholder (R2) is decorative → hidden from VoiceOver (AX-1).
- **A4** All copy honors Dynamic Type to largest sizes; the primary action never scrolls out of reach when text is enlarged (AX-2) — if it would, R2 collapses before R4 is pushed off.

**Copy intent & tone.** Must: say what the app is in one honest line; set a realistic expectation ("a small daily action," not "transform your life"). Must never: promise a health outcome (RULE-5), use fear/urgency, or patronize (§3.7). No final words here — `[promise headline]` etc.

**Mechanism-to-test & traceability.** `[MECH: honest expectation-setting]` (reduces early abandonment from mismatch) — evidence pointer `↔ TASK-025`; hypothesis `→ TASK-048`: *does a plain-promise welcome improve comprehension and first-session continuation vs. a hype welcome?* Journey J1/J2 `↔ TASK-016`. Consent state set here is read by W2/W6/W8 (`↔ TASK-040`).

---

## 5. W2 — Discovery / Personalization

**Purpose & job-to-surface.** Learn the *minimum* needed to make the first action relevant — a short, skippable goal/context selection — and nothing more. Serves J3 (personalization/goal selection) and J9 (re-entry after changed circumstances, as an *edit*). It is not a long questionnaire (§2.1).

**Entry / exit.** Entry: from W1 *Begin* (I1), or from W4/Settings as "adjust my focus" (J9). Exit: primary → W3 First Action ("That's enough — start"); secondary → skip ("I'll decide later" → minimal W4); back → W1.

**Region inventory:**

```
┌──────────────────────────────┐
│ ‹ Back            [Skip →]    │  R1 Nav + always-available Skip (autonomy RULE-4)
│ [progress: step n of few]    │  R2 Honest short-length indicator (not "20 Qs")
│                              │
│  [question: what matters     │  R3 Prompt (one focus at a time; plain)
│   to you right now?]         │
│                              │
│  ( ) [option A]              │  R4 Choice set — single/again, large targets
│  ( ) [option B]              │     each ≥44pt, text+shape not color (AX-4/5)
│  ( ) [option C]              │
│  [ + something else ]        │     escape hatch — user-defined
│                              │
│  [why we ask →]              │  R5 Data-use disclosure (minimization §3.7)
│                              │
│  ┌────────────────────┐      │  R6 PRIMARY ACTION
│  │  [ Continue ]       │      │     → next step or → W3
│  └────────────────────┘      │
└──────────────────────────────┘
```

**Interaction annotations.**
- **I1** Select an option (R4): immediate selected-state feedback (text + shape, AX-5/AX-8); does not auto-advance (user confirms via R6) unless the studio argues single-select auto-advance with a reduced-motion-safe transition.
- **I2** *Skip* (R1) / *decide later*: always present; leads to a working minimal W4. Skipping is never penalized and never re-nagged punitively (RULE-4/AX-9).
- **I3** *+ something else* (R4): opens a minimal free-entry; stored as the user's own words (autonomy), not forced into preset buckets.
- **I4** *why we ask* (R5): sheet explaining exactly what each input is used for and that it is optional; focus managed (AX-7).
- **I5** Progress (R2) is honest and short — if the studio's flow is 3 steps, it says 3; no fake-short or endless flows.

**States.** First-run (no prior selections → all unset, inviting default); populated/edit (J9 — prior selections pre-filled, clearly editable); loading (if options are fetched — skeleton, AX-10 announce); error (options fail → cached/default set + retry, never a blank choice screen); offline (selections stored locally, sync later §3.4); permission-required (if a choice would use HealthKit, explain-before-prompt and work if declined, `↔ TASK-039`).

**Accessibility annotations:**
- **A1** Choice set is an accessible radio/checkbox group: each option announces label + selected/unselected state + position-in-set (AX-1). Not color-only selection (AX-5).
- **A2** Targets ≥ 44 pt with spacing so adjacent options aren't mis-tapped (AX-4).
- **A3** Dynamic Type: options reflow to multiple lines without clipping; the Continue button stays reachable (AX-2).
- **A4** Skip is a first-class focusable control, not hidden behind a gesture (AX-1/§3.6).

**Copy intent & tone.** Must: ask one plain thing at a time; make optionality explicit. Must never: imply the user must disclose sensitive health detail to proceed (minimization), use leading/judgmental framing, or over-collect "while we're here." No medical intake framing (RULE-5).

**Mechanism-to-test & traceability.** `[MECH: implementation intention]` (choosing a specific, personally relevant focus supports initiation — BCTTv1 1.4; `↔ TASK-025`, grade recorded there). `[MECH: autonomy-supportive choice]` (SDT, `prd.md` §6). Hypotheses `→ TASK-048`: *does light personalization improve first-action relevance and completion without raising onboarding drop-off?* Seeds `→ TASK-047` initiation state. Journey J3/J9 `↔ TASK-016`. Data-use governed by `↔ TASK-040`.

---

## 6. W3 — First Action

**Purpose & job-to-surface.** Deliver *one* small, completable, meaningful action in the first session and let the user feel a result — the first "little win." Serves J4 (first meaningful action). It hosts (but does not define) the `→ TASK-046` little-win completion moment.

**Entry / exit.** Entry: from W2 *Continue* (first session) or from W4 (ordinary day, see W5 for repeat). Exit: on completion → a brief celebratory confirmation → W4 Daily Home (or W6 if the concept reflects immediately); secondary → "not now" → W4 without penalty.

**Region inventory:**

```
┌──────────────────────────────┐
│ ‹ Back                        │  R1 Nav (exit without penalty)
│                              │
│   [action title — small,     │  R2 The one action, plainly framed
│    specific, doable now]     │     ("a 2-minute …", concrete, low effort)
│   [1-line why it matters]    │     (optional; no health claim RULE-5)
│                              │
│   ┌────────────────────┐     │  R3 Action surface / guidance region
│   │  [minimal guidance  │     │     (what to actually do — low-fi)
│   │   or input]         │     │
│   └────────────────────┘     │
│                              │
│   ┌────────────────────┐     │  R4 PRIMARY ACTION — Complete
│   │  [ Mark done ]  ✓   │     │     → fires little-win moment (→TASK-046)
│   └────────────────────┘     │     tap target AND any swipe both work (§3.6)
│   [ Not now ]                │  R5 Secondary — defer, no penalty (RULE-4)
│                              │
└──────────────────────────────┘
        │ on complete
        ▼
   [ completion confirmation — see →TASK-046 contract below ]
```

**Interaction annotations.**
- **I1** *Mark done* (R4): primary completion. If the studio uses swipe-to-complete, a visible tap target MUST also complete it (gesture-equivalence, §3.6/AX-1). On success, fire the little-win moment.
- **I2** **Little-win contract** (hosted here; *defined in* `→ TASK-046`, not this spec): completion yields (a) a clear visual confirmation; (b) an *optional* subtle haptic honoring system settings; (c) a **reduced-motion fallback** (cross-fade/static confirm) when Reduce Motion is on (AX-6); (d) a non-haptic, non-color-only signal so it is perceivable to all (AX-8). The moment never blocks — it is dismissible/auto-settling and returns focus (AX-7).
- **I3** *Not now* (R5): defers without marking failure; no guilt copy (RULE-4/§3.7).
- **I4** No forced tutorial/coach-mark gauntlet before the action; guidance (R3) is minimal and skippable.

**States.** First-run (the action is pre-chosen from W2 or a sensible default; never an empty "pick an action" wall on first use); populated (ordinary repeat — but repeat guidance lives in W5); loading (if the action needs fetched content — skeleton); completed (confirmation state, I2); error (completion fails to save → optimistic local mark + background retry; never lose a completion, never show the user a raw failure for a done action); offline (completion stored locally, syncs later — W3 must work offline).

**Accessibility annotations:**
- **A1** The completion control announces as a `button` "Mark done"; on success, VoiceOver announces the confirmation ("Done — [result]") so the win is perceivable without sight (AX-1/AX-8).
- **A2** The little-win animation is decorative motion with a reduced-motion fallback (AX-6) and is never the only success signal (AX-8).
- **A3** Targets ≥ 44 pt; swipe-to-complete paired with an equal tap target (AX-4/§3.6).
- **A4** Dynamic Type: action title and button scale without clipping; the complete action is never pushed off-screen by enlarged text (AX-2).

**Copy intent & tone.** Must: make the action feel small and doable ("2 minutes," "just one"); confirm completion warmly but not hollowly. Must never: over-praise trivially (patronizing, §3.7), imply health benefit (RULE-5), or shame a "not now."

**Mechanism-to-test & traceability.** `[MECH: early positive feedback / small win]` (reinforcement + competence, SDT; BCTTv1 feedback/reward families; `↔ TASK-025`). `[MECH: low-effort first action]` (Fogg — ability↑ lowers activation threshold). Hypotheses `→ TASK-048`: *does a completable first-session action improve first-action completion and next-day return — not merely app opens?* (`prd.md` §3 line 135). Little-win component `→ TASK-046`; repetition state `→ TASK-047`. Journey J4 `↔ TASK-016`.

---

## 7. W4 — Daily Home

**Purpose & job-to-surface.** The calm ordinary-day anchor: show *today's* one or few things and current status, and route to doing/reflecting. Serves J5 (normal daily interaction) and J6 (reminders/re-entry — a notification deep-links here). It is not Progress and not a feed (§2.1).

**Entry / exit.** Entry: app launch (default landing after onboarding), reminder tap (J6), return from any screen. Exit: → W5 (do today's action), → W6 (see progress), → W8 (an insight), → Settings. If the user has been away → defers to the W7 Missed Day recovery rules on arrival (RULE-3).

**Region inventory:**

```
┌──────────────────────────────┐
│ [greeting / today's date]    │  R1 Orienting header (calm, not a dashboard)
│                      [⚙]      │     Settings in ≤2 taps (§2.2)
│                              │
│   ┌────────────────────┐     │  R2 TODAY — the one/few things for today
│   │ [today's action    │     │     PRIMARY FOCUS of the screen
│   │  card]   [ Do → ]  │     │     primary action = start today's action →W5
│   └────────────────────┘     │
│   ( [another, optional] )    │     at most a few; never an infinite list
│                              │
│   [gentle status line]       │  R3 Status (consistency, not raw stats) →W6
│                              │
│   [small insight teaser? →]  │  R4 Optional insight entry (→W8), subordinate
│                              │
│  ── tab/hub nav ─────────────│  R5 Shallow nav (§3.6): Today · Progress · You
└──────────────────────────────┘
```

**Interaction annotations.**
- **I1** *Do* (R2): primary action → W5 Guided Habit for today's action (or W3 if first-ever).
- **I2** Tap status line (R3) → W6 Progress. Tap insight teaser (R4) → W8. Both clearly secondary to R2.
- **I3** Reminder deep-link (J6): lands directly on R2's action, pre-focused; never dumps the user on a generic home with the action buried (AX-7).
- **I4** Pull-to-refresh / sync is optional and has a tap equivalent (§3.6); sync status is announced (AX-10).
- **I5** No endless scroll, no engagement feed, no red-badge pressure dial on R2 (anti-pattern §15).

**States.** First-run/empty (no history yet → shows the first action invitingly, not an empty list — RULE-1/§3.4); populated (today's items present); loading (skeleton for the today card; never a blank home); error (if today's plan fails to load → cached last-known plan + quiet retry; home never hard-fails); offline (today's action is fully usable offline, completion syncs later — mandatory, §3.4); returning-after-gap (routes to W7 tone — "welcome back," not "you missed 4 days", RULE-3).

**Accessibility annotations:**
- **A1** VoiceOver landing focus goes to the greeting then the today card (not the nav bar), so the first thing announced is "today" (AX-1/AX-7).
- **A2** The today card is a single grouped element announcing title + status + "Do" action (AX-1); the Do button is a distinct focusable control ≥44pt (AX-4).
- **A3** Status (R3) conveys consistency in text + shape, never color-only (AX-5).
- **A4** Dynamic Type: the today card grows and other regions collapse/scroll rather than hiding the Do action (AX-2).
- **A5** If the concept uses a badge/count, it has a text equivalent and is not alarm-colored by default (AX-5/§15).

**Copy intent & tone.** Must: feel like a calm "here's today," greet without saccharine cheerfulness, keep it short. Must never: create pressure (counts, "don't lose your streak!"), scold, or turn the home into a metrics wall. Non-patronizing greeting (§3.7).

**Mechanism-to-test & traceability.** `[MECH: cue / consistent context]` (a stable daily anchor supports habit repetition — habit-formation evidence; `↔ TASK-025`). `[MECH: reduced cognitive load]` (one clear next thing; `↔ TASK-019`). Hypotheses `→ TASK-048`: *does a calm single-focus home improve daily action completion and perceived ease vs. a dashboard home?* Renders `→ TASK-047` current state. Journeys J5/J6 `↔ TASK-016`.

---

## 8. W5 — Guided Habit (guided action)

**Purpose & job-to-surface.** Guide the user through performing the habit/action *now* — paced steps or in-the-moment support, ending in completion. Serves J5 (daily action) and J4 the first time. It renders (does not define) the `→ TASK-047` repetition state and uses the `→ TASK-046` completion moment per step/at the end.

**Entry / exit.** Entry: from W4 *Do* (I1) or W3 (first time). Exit: on completion → little-win confirm → W4/W6; mid-flow → *pause* (resumable) or *exit* (saves partial, no penalty). Back is always available (AX-7).

**Region inventory:**

```
┌──────────────────────────────┐
│ ✕ Exit        [pause ⏸]       │  R1 Exit (saves partial) + Pause (AX-9)
│ [step n of m]  ────○──        │  R2 Honest progress through the action
│                              │
│   [current step title]       │  R3 The step, one at a time, plain
│   ┌────────────────────┐     │  R4 Step guidance/content region (low-fi)
│   │ [guidance / timer   │     │     any timer is user-controllable, never
│   │  / input]           │     │     a forced countdown that "fails" you
│   └────────────────────┘     │     (AX-9)
│                              │
│  [ Skip step ]   ┌─────────┐ │  R5 Skip (autonomy) + R6 PRIMARY:
│                  │ [ Next ]│ │     Next / Done (last step fires little-win)
│                  └─────────┘ │
└──────────────────────────────┘
```

**Interaction annotations.**
- **I1** *Next / Done* (R6): advances step; on the final step completes the action and fires the `→ TASK-046` little-win (contract per W3-I2: optional haptic, reduced-motion fallback, multi-modal, non-blocking).
- **I2** *Skip step* (R5): advances without marking failure; skipping is a valid path (RULE-4 autonomy), recorded neutrally, never "you skipped" shaming.
- **I3** *Pause* (R1): suspends any timing; the user resumes on their schedule — no penalty for pausing (AX-9). *Exit* saves partial progress; returning resumes, it does not restart from zero (`→ TASK-047`).
- **I4** Any pacing/timer is user-controllable (start/pause/extend); it never auto-fails the user or forces a rhythm (AX-9) — guided, not coerced.
- **I5** Per-step completion may show a small confirmation; the *final* completion is the meaningful little-win.

**States.** First-run (first guided run may include light, skippable orientation); in-progress (step k of m; resumable); paused; completed (confirmation); partial/abandoned (saved, resumable, non-punitive); error (a step's content fails → allow continue/skip, never trap); offline (the guided flow runs fully offline; completion syncs later — mandatory for a daily action).

**Accessibility annotations:**
- **A1** Step changes move VoiceOver focus to the new step title and announce "step k of m" (AX-1/AX-7).
- **A2** Any timer is an accessible, pausable element with a text value; it is not the only indicator of pacing and never a hard time limit (AX-9/AX-1).
- **A3** *Skip*, *Pause*, *Exit*, *Next* are all first-class focusable ≥44pt controls — none gesture-only (AX-4/§3.6).
- **A4** The completion animation has a reduced-motion fallback and a VoiceOver success announcement (AX-6/AX-8).
- **A5** Dynamic Type: step content scrolls within the step; nav controls (Next/Skip/Exit) stay pinned and reachable (AX-2).

**Copy intent & tone.** Must: coach supportively and briefly, one step at a time; make skipping and pausing feel allowed. Must never: drill-sergeant, countdown-shame, or imply harm from stopping (RULE-5/§3.7). No clinical instruction (RULE-5).

**Mechanism-to-test & traceability.** `[MECH: guided repetition / behavioral rehearsal]` and `[MECH: autonomy-supportive pacing]` (SDT; BCTTv1 instruction/rehearsal; `↔ TASK-025`). `[MECH: in-the-moment feedback]` (per-step confirmation). Hypotheses `→ TASK-048`: *does pausable, skippable guidance improve completion and perceived autonomy vs. a fixed timed flow — and does it avoid pressure?* Renders `→ TASK-047` repetition/adaptation; little-win `→ TASK-046`. Journey J5/J4 `↔ TASK-016`. The streaks caution (`prd.md` §3 line 135) applies: measure meaningful repeated action, not opens.

---

## 9. W7 — Missed Day / Recovery

> **RULE-3 governs this screen absolutely.** It MUST NOT reset progress, show a broken streak as failure, use shame/loss framing, or make re-entry effortful. It celebrates returning and offers one low-friction next step (`prd.md` §3 line 135; §6 anti-patterns). Any studio screen that violates this fails Gate 3/4 and §14 — non-negotiable.

**Purpose & job-to-surface.** Welcome a user back after a gap (one day or many) warmly, normalize the lapse, and offer a single gentle next step. Serves J8 (missed day/recovery) and J9 (changed circumstances — "life changed, let's adjust"). It is not an error screen and not re-onboarding (§2.1).

**Entry / exit.** Entry: on return after a detected gap — surfaced on W4 arrival or as a gentle prompt, never as a blocking guilt modal. Exit: primary → *one small next step* (→ W5/W3, a deliberately tiny re-entry action); secondary → *adjust my plan* (→ W2 edit, J9) or *just look around* (→ W4). Dismissible.

**Region inventory:**

```
┌──────────────────────────────┐
│                           ✕   │  R1 Dismiss (never trapping; RULE-4)
│                              │
│   [warm welcome-back —       │  R2 Welcome-back message (celebrate return,
│    no number of missed days  │     NOT "you missed N days" — RULE-3)
│    framed as failure]        │
│                              │
│   [normalize: lapses are     │  R3 Normalizing, non-judgmental framing
│    part of it — plain]       │     (no guilt, no "get back on track or else")
│                              │
│   ┌────────────────────┐     │  R4 PRIMARY — one tiny next step
│   │ [ Pick up with a    │     │     deliberately small (lower threshold, Fogg)
│   │   2-min thing → ]   │     │     → W5/W3
│   └────────────────────┘     │
│   [ Adjust my plan ]         │  R5 Secondary — life changed? edit (→W2, J9)
│   [ Just look around ]       │  R6 Tertiary — →W4, no action required
│                              │
└──────────────────────────────┘
```

**Interaction annotations.**
- **I1** *Pick up with a 2-min thing* (R4): routes to a minimal W5/W3 action — smaller than usual to lower the re-entry threshold (`[MECH: reduce activation energy]`). Progress continues from where it was; nothing resets (`→ TASK-047` recovery).
- **I2** *Adjust my plan* (R5): → W2 in edit mode (J9) — the lapse may mean the plan needs to change, framed as sensible, not as the user failing.
- **I3** *Dismiss / just look around* (R1/R6): always allowed; the user is never forced to engage with recovery. No re-nagging barrage (AX-9/RULE-4).
- **I4** No streak-break animation, no "0" reset, no red loss state, no counting of missed days as a penalty (§15).

**States.** Triggered-on-return (short gap vs long gap may change copy warmth but never changes the non-punitive rule); first-ever-miss; repeated-miss (still non-punitive; may *gently* surface "adjust my plan" more prominently — J9 — never escalate guilt); offline (fully functional); error (if state can't load, default to the warmest, least-assuming message — never guess a failure narrative).

**Accessibility annotations:**
- **A1** The welcome-back message is the VoiceOver landing focus; it announces warmth, not a failure count (AX-1/RULE-3).
- **A2** The tiny-next-step button is the clear primary focusable ≥44pt control (AX-4).
- **A3** Any return/"welcome back" motion has a reduced-motion fallback and is gentle (no celebratory confetti that reads as mocking a lapse) (AX-6).
- **A4** Dynamic Type: message and options reflow fully; dismiss (✕) remains reachable and labelled "Dismiss" (AX-2/AX-1).

**Copy intent & tone.** Must: be warm, brief, and normalize lapses as expected; make the next step feel tiny and optional. Must never: count or dramatize missed days, use "streak broken / you lost," guilt, or imply the user let anyone (or themself) down (RULE-3/§3.7). This is the screen where the non-patronizing, anti-shame principle is most load-bearing.

**Mechanism-to-test & traceability.** `[MECH: non-punitive recovery / self-compassion]` (self-compassion and flexible goals reduce the abstinence-violation effect and support re-engagement — `↔ TASK-025`; the explicit alternative to streak-shame named in `prd.md` §3 line 135 and the Studio A brief `↔ TASK-043`). `[MECH: reduced activation energy]` (tiny re-entry; Fogg). Hypotheses `→ TASK-048`: *does non-punitive recovery improve actual return and re-engagement vs. streak-reset — and reduce guilt?* Renders `→ TASK-047` recovery transition (no punitive reset). Journeys J8/J9 `↔ TASK-016`.

---

## 10. W6 — Progress / Reflection

**Purpose & job-to-surface.** Make effort visible and support reflection *without* turning the user into a data analyst — show consistency and meaning, with detailed data secondary and optional. Serves J7 (progress/reward/reflection). It is not raw analytics (§2.1; Habitify caution, `prd.md` §3).

**Entry / exit.** Entry: from W4 status line (I2) or nav. Exit: back to W4; → W8 for a deeper insight; → W5 to act. Reflection prompts are optional.

**Region inventory:**

```
┌──────────────────────────────┐
│ ‹ Back            [period ▾]  │  R1 Nav + optional timescale (default: gentle)
│                              │
│   [plain-language summary of │  R2 Meaning-first summary (consistency in
│    how it's been going]      │     words, e.g. "mostly steady lately")
│                              │     — NOT a wall of numbers; no streak-pressure
│   ┌────────────────────┐     │  R3 Consistency view (calendar/bars) — effort
│   │ [low-fi consistency │     │     visible; missed days shown neutrally,
│   │  pattern]           │     │     never as red failures (RULE-3/AX-5)
│   └────────────────────┘     │
│                              │
│   [reflection prompt?  →]    │  R4 Optional reflection (→ W8 or inline)
│   [see details (optional) →] │  R5 Detailed data — SECONDARY, opt-in (§2.1)
│                              │
└──────────────────────────────┘
```

**Interaction annotations.**
- **I1** Timescale (R1) and *see details* (R5) are optional depth — the default view is meaning-first and calm; raw numbers are never the landing emphasis (§2.1).
- **I2** Consistency view (R3) shows missed days neutrally (a gap, not a red X); tapping a day shows what happened without judgment, and a gap routes to W7-missed-day tone if relevant.
- **I3** Reflection prompt (R4) is optional, skippable, and never required to proceed (RULE-4/AX-9).
- **I4** No comparison-to-others, no leaderboards, no "you're behind" framing (§15).

**States.** First-run/empty (little/no history → shows an encouraging "your progress will show here" with the next action, not an empty chart — §3.4); populated; loading (skeleton); error (data fails → show cached + retry, never a broken chart as the whole screen); offline (shows last-synced with a clear "as of" note, AX-10).

**Accessibility annotations:**
- **A1** The consistency view (R3) is **not** a sight-only chart: it exposes an accessible text summary and per-period values to VoiceOver (e.g. "this week: 4 of 7 days"); the visual and the text agree (AX-1/AX-5). No meaning in color alone — missed/done differ by shape/label too.
- **A2** The plain-language summary (R2) is the VoiceOver landing focus, so the *meaning* is announced before any detailed data (AX-1/AX-7).
- **A3** Dynamic Type: summary and labels scale; the consistency view remains legible or offers the text equivalent at large sizes (AX-2).
- **A4** Detailed data table (R5) is a proper accessible table with headers if present (AX-1).

**Copy intent & tone.** Must: lead with meaning ("steady," "picking back up") over raw counts; frame progress as the user's effort, not a score. Must never: pressure ("don't break your streak!"), compare to others, or present a gap as failure (RULE-3/§3.7). No health/clinical claim from the data (RULE-5 — that boundary is W8's hard gate too).

**Mechanism-to-test & traceability.** `[MECH: self-monitoring / effort made visible]` (BCTTv1 2.x self-monitoring; supports awareness — but "charts may not translate into decisions," `prd.md` §3, is the explicit risk to test). `[MECH: meaning-first feedback]` (reduce data-analyst burden, `prd.md` §7 example line 155). Hypotheses `→ TASK-048`: *does a meaning-first progress view improve perceived usefulness and sustained action vs. a stats dashboard — without inducing pressure?* Reads `→ TASK-047` repetition/graduation. Journey J7 `↔ TASK-016`.

---

## 11. W8 — Personal Insight

> **Hard clinical boundary (RULE-5, `↔ TASK-040`).** This screen reflects a personally relevant, *contextual observation*. It MUST NOT diagnose, assert a medical conclusion, promise a health outcome, or instruct treatment. Where an observation could warrant care, it offers neutral "consider talking to a clinician" routing (`↔ TASK-040`) — never alarm, never a verdict. "Insight," not "advice." Non-negotiable.

**Purpose & job-to-surface.** Surface one personally relevant, contextual observation that helps the user reflect — connecting daily choices to personally meaningful context (Studio D's territory, but neutral here). Serves J7 (reflection) and overlaps J5. It is not a dashboard, diagnosis or recommendation engine (§2.1).

**Entry / exit.** Entry: from W4 insight teaser (I2) or W6 (R4), or surfaced gently when a meaningful pattern is available (never spammed). Exit: back; → an optional small action (→ W5/W3); → escalation routing if relevant (§2.2). Dismissible.

**Region inventory:**

```
┌──────────────────────────────┐
│ ‹ Back                    ✕   │  R1 Nav + dismiss
│                              │
│   [one insight, plainly      │  R2 Single observation (contextual,
│    stated — observation +    │     tentative language: "you've tended to…")
│    personal relevance]       │     NO diagnosis, NO medical claim (RULE-5)
│                              │
│   [why you're seeing this →] │  R3 Transparency: what this is based on
│                              │     (the user's own data; minimization §3.7)
│                              │
│   ┌────────────────────┐     │  R4 Optional next step (offer, not command)
│   │ [ try a small thing]│     │     → W5/W3  (autonomy RULE-4)
│   └────────────────────┘     │
│   [ not useful ]  [ more like │  R5 Feedback controls (tune relevance;
│    this ]                     │     the user governs their insights)
│   [ talk to a clinician → ]?  │  R6 Escalation routing IF warranted
│                              │     (neutral, optional; ↔TASK-040)
└──────────────────────────────┘
```

**Interaction annotations.**
- **I1** The insight (R2) is a single, tentatively-worded observation with explicit provenance (R3 "why you're seeing this") — the user can always see what it's based on (transparency/trust, `prd.md` §9).
- **I2** *Not useful / more like this* (R5): the user governs relevance; feedback adjusts future insights and is reversible. Insights are never forced or non-dismissible.
- **I3** Optional next step (R4) is an *offer*, never a prescription (RULE-4/RULE-5).
- **I4** *Talk to a clinician* (R6) appears only when a signal could warrant it, framed neutrally and optionally — never as alarm, never as a diagnosis, never auto-triggered without the user's view (`↔ TASK-040`).
- **I5** No fear-based or absolute health claims, ever (RULE-5/§15).

**States.** No-insight-yet (not enough data → honest "no insight yet," never a fabricated one — this is the fabrication-critical state: the screen MUST NOT invent an insight to fill space, RULE-7); populated (one real, user-data-grounded observation — shown as structure only here, RULE-7); loading; error (fail → "couldn't load your insight," never a guessed one); offline (last insight with "as of," AX-10); escalation-relevant (R6 present).

**Accessibility annotations:**
- **A1** The insight (R2) is the VoiceOver landing focus and reads as a single coherent statement including its tentative framing (AX-1).
- **A2** Provenance (R3), feedback (R5) and any escalation (R6) are first-class focusable ≥44pt controls (AX-4).
- **A3** Any supporting visual has a text equivalent; no insight is conveyed by an inaccessible graphic (AX-1/AX-5).
- **A4** Dynamic Type: the insight and all controls reflow fully; escalation routing never clips (AX-2).

**Copy intent & tone.** Must: state one observation tentatively and respectfully, make its basis transparent, and offer (not order) a next step. Must never: diagnose, alarm, use absolutes ("you have/you will"), make medical claims, or fabricate an observation when data is thin (RULE-5/RULE-7/§3.7). The most careful voice in the app.

**Mechanism-to-test & traceability.** `[MECH: personally relevant reflection / contextual feedback]` (relevance supports engagement and self-regulation — but relevance and trust are exactly what must be tested, and the clinical boundary is a gate, not a mechanism). Hypotheses `→ TASK-048`: *does a transparent, tentative, user-governed insight improve perceived relevance and trust — without over-claiming or causing anxiety?* (`prd.md` §6 anxiety/over-tracking anti-patterns). Clinical boundary & escalation `↔ TASK-040`. Journey J7 `↔ TASK-016`.

---

## 12. Cross-screen flow (how the eight connect)

The eight screens form one calm hub-and-spoke centered on W4, with a linear first-run spine. This is the *reference* flow a studio's clickable prototype must be able to walk for `→ TASK-048`; a studio may vary structure (§3.8) but must keep every screen reachable and every exit non-trapping (AX-7).

```
 first run spine:
   W1 Welcome → W2 Discovery → W3 First Action ──┐
                                                 ▼
 ordinary day (hub = W4):          ┌────────► W4 Daily Home ◄────────┐
                                   │            │  │  │               │
   reminder (J6) ──────────────────┘            │  │  └──► W8 Insight │
                                     ┌───────────┘  └──► W6 Progress ──┘
                                     ▼                      │
                                 W5 Guided Habit            ▼
                                     │               (reflection → W8)
                                     └──► (complete) ──► W4
 return after gap (J8/J9):
   (launch after gap) ──► W7 Missed Day ──► tiny step ──► W5 ──► W4
                                     └──► adjust plan ──► W2 (edit)
```

- **First-run spine:** W1 → W2 → W3 is the only enforced linear sequence; after the first completion the user lands on W4 and the app becomes hub-and-spoke.
- **Hub:** W4 is the anchor; W5/W6/W8 are spokes; back always returns to W4 (AX-7).
- **Reminders (J6):** deep-link to W4 with today's action pre-focused (W4-I3), or directly to W5.
- **Return after gap (J8/J9):** launch detects the gap and routes to W7 *before* any progress-loss is shown; W7 never resets (RULE-3).
- **Paywall/cancellation (J10) and acquisition (J1 pre-install):** partly outside the eight; handled by supporting screens (§2.2) and never gate first value (W3/§15).

---

## 13. Consolidated accessibility conformance checklist

Run per screen; audited against `↔ TASK-022` (iOS & accessibility audit). A screen passes only if every applicable row is met (or marked N/A with rationale). This is the §11 Gate-4 "accessibility review" surface.

| ID | Requirement | Standard | Applies to |
|---|---|---|---|
| C1 | All interactive/informative elements have accessible labels, correct roles/traits, values | WCAG 4.1.2; HIG | all |
| C2 | Reading / focus order matches logical order; focus managed on nav & modals | WCAG 1.3.2, 2.4.3 | all |
| C3 | Text scales to largest accessibility Dynamic Type sizes without clipping/loss | HIG Dynamic Type; WCAG 1.4.4 | all |
| C4 | Text contrast ≥ 4.5:1; large text / UI / graphics ≥ 3:1 (checked tonally in grayscale) | WCAG 1.4.3, 1.4.11 | all |
| C5 | Interactive targets ≥ 44×44 pt, adequately spaced, clear of system gestures | HIG | all |
| C6 | No information by color alone (status also text/shape/icon) | WCAG 1.4.1 | all |
| C7 | Every animation has a Reduce-Motion fallback; no >3 flashes/sec; no forced vestibular motion | WCAG 2.3.1, 2.3.3 | W1,W3,W5,W6,W7 |
| C8 | Feedback is multi-modal (≥2 of text/icon/haptic/sound); never haptic- or color-only | HIG; WCAG 1.4.1 | W3,W5,W7 |
| C9 | No time-limited action without user control; guided pacing pausable/extendable | WCAG 2.2.1 | W5 (W2,W3) |
| C10 | Errors announced, identified in text, paired with a correction | WCAG 3.3.1, 3.3.3 | all with I/O |
| C11 | Gesture actions have a visible tappable equivalent | WCAG 2.5.1; HIG | W3,W5,W6 |
| C12 | Charts/visualizations expose an accessible text equivalent that agrees with the visual | WCAG 1.1.1 | W6,W8 |
| C13 | Works with VoiceOver, Full Keyboard Access, Switch Control end-to-end | HIG; WCAG 2.1.1 | all |
| C14 | Offline/degraded and permission-declined paths remain usable and accessible | §3.4; HIG | data screens |

---

## 14. Reviewability validator (run per studio's eight screens)

A reviewer with no prior context runs these checks and issues one disposition — **accept / return-incomplete / reject** — on evidence, not polish (`prd.md` §11 line 205; §14 "not complete" rules). This is what makes the deliverable "independently reviewable" (AC).

| ID | Check | Pass condition | Fail disposition |
|---|---|---|---|
| V1 | **All eight present** | W1–W8 each exist as an editable, clickable low-fi screen | return-incomplete |
| V2 | **State coverage** | each screen covers its §3.4 applicable states (≥ first-run, populated, loading, error, offline for data screens) | return-incomplete |
| V3 | **One primary action** | each screen names exactly one primary action; secondaries subordinate (§3.1) | return-incomplete |
| V4 | **Interaction annotations** | each screen's interactions are annotated `Ix` and keyed to the frame (`prd.md` §9 "annotated interactions") | return-incomplete |
| V5 | **Accessibility annotations + §13** | each screen carries accessibility annotations and passes the §13 checklist (or N/A w/ rationale) | reject (gate) |
| V6 | **Missed-day non-punitive** | W7 does not reset/shame/loss-frame and offers a gentle next step (RULE-3) | reject (gate) |
| V7 | **Clinical boundary** | W8 (and W6) make no diagnosis/medical claim; escalation routing where relevant (`↔ TASK-040`) | reject (gate) |
| V8 | **Privacy/minimization** | data screens (W2,W6,W8) collect only what's needed, explain use, keep it optional (§3.7) | reject (gate) |
| V9 | **No dark patterns** | no forced continuity, confirm-shaming, false urgency, guilt retention, first-action paywall (§15) | reject (gate) |
| V10 | **Mechanisms labelled, not claimed** | every behavioral lean is `[MECH]`-tagged with an evidence pointer and a `→ TASK-048` hypothesis; no efficacy/desirability asserted (RULE-6) | return-incomplete |
| V11 | **No fabrication** | no real/realistic user data, quote, metric, test result or person; populated examples marked ILLUSTRATIVE (RULE-7); W8 "no-insight-yet" never fabricates | reject |
| V12 | **Traceability** | each screen links to its journey (`↔ TASK-016`), and to `→ TASK-046/047` where it hosts/renders them (`prd.md` §9 "source-to-decision traceability") | return-incomplete |

Disposition rule: any **reject (gate)** → reject; else any **return-incomplete** → return-incomplete; else **accept**. Gates (V5–V9, V11) are non-compensable — a polished prototype that fails one does not pass (`prd.md` §9/§11).

---

## 15. Forbidden content & anti-patterns (hard fails)

No conforming screen may contain any of the following (each maps to a §14 reject-gate):

1. **Punitive missed-day handling** — streak reset to zero, "streak broken / you failed," missed-day counters framed as loss, guilt or shame copy (RULE-3/V6). *The single most important prohibition.*
2. **Medical claims / diagnosis / treatment instruction** on any screen, including insight and progress (RULE-5/V7).
3. **Dark patterns** — forced continuity, confirm-shaming ("No, I don't want to be healthy"), disguised ads, false urgency/scarcity, roach-motel flows, pre-checked sensitive consent (RULE-4/V9).
4. **First-value paywall** — gating the first meaningful action (W3) behind payment (V9; `↔ TASK-021`).
5. **Over-collection** — asking for sensitive health data a screen doesn't need, or non-optional sensitive inputs (RULE-5/V8; GDPR).
6. **Color-only / haptic-only / gesture-only** meaning or action (AX-5/AX-8/§3.6 → C6/C8/C11).
7. **Fabricated content** — realistic fake user data, quotes, metrics, test results, a named person, or an invented W8 insight when data is thin (RULE-7/V11).
8. **Asserted efficacy or preference** — any copy or annotation claiming the screen works, is liked, improves health, or is proven, instead of a `[MECH]`+hypothesis (RULE-6/V10).
9. **Engagement-maximizing pressure** — infinite feeds, leaderboards, comparison-to-others, red-badge dials designed to compel opens rather than support meaningful action (`prd.md` §15 "least unnecessary effort"; RULE-4).
10. **Trapping flows** — any screen with no back/cancel/dismiss, or a modal that doesn't return focus (AX-7/§3.6).

---

## 16. Governance, dependencies, open unknowns & change log

**Status in the workstream.** This spec is a **WS07 input artifact**: it is the screen skeleton the six studios (`↔ TASK-043`) build their low-fi prototypes against and the minimum a finalist wireframes before Gate 4 (`prd.md` §9/§11). It is released as v0.2 — *specification only*. It describes no concept and contains no prototype, screen design, user, test or result.

**Dependencies.**
- *Consumes:* the ten journeys (`↔ TASK-016`), the accessibility/UX/visual/writing audit criteria (`↔ TASK-022/019/020/021`), the studio briefs & submission format (`↔ TASK-043/044`), the clinical/privacy boundary (`↔ TASK-040`).
- *Points to (does not define):* the little-win microinteraction (`→ TASK-046`), the Habit Graduation state machine (`→ TASK-047`), the concept test & selection pack (`→ TASK-048`).
- *Produced against:* an approved Opportunity Atlas snapshot (`↔ TASK-041/042`) — the concepts that fill these screens derive from it; this spec itself is Atlas-neutral.

**Open unknowns (honestly recorded, not resolved here).**
- Whether the baseline device assumption (iPhone portrait) should extend to iPad/landscape as a required state is deferred to the iOS feasibility work (`↔ TASK-039`); flagged, not decided.
- Whether W8 Personal Insight is in the MVP at all is a product decision for `→ TASK-048`/Prompt 11 — this spec defines it so that studios *may* cover it, not that the MVP must ship it.
- The exact gap thresholds that trigger W7 (what counts as "a missed day" needing recovery) are `→ TASK-047` state-machine decisions, not screen decisions.
- Reminder cadence, paywall timing and settings depth live in the supporting screens (§2.2) and `↔ TASK-021`; this spec bounds them with rules, it does not fix them.

**Why this satisfies TASK-045.**
- **AC1** — defines all eight named screens (welcome W1, discovery W2, first action W3, daily home W4, guided habit W5, progress W6/§10, missed day W7/§9, personal insight W8) each with **interaction annotations** (per-screen `Ix` keyed to the frame, §4–§11) and **accessibility annotations** (per-screen `Ax` + the §3.5 baseline + the §13 consolidated checklist). *(Note: §9 is the Missed Day screen and §10 is the Progress screen; the W-number ordering W6=Progress / W7=Missed Day follows the §2 map, while the document orders Missed Day before Progress so the non-punitive rule (RULE-3) is established first — both are fully specified.)*
- **AC2** — independently reviewable (the §14 validator any reviewer can run), clearly labeled (header, §0 scope, status), and contains **no fabricated research observations or test results**: every behavioral claim is a `[MECH]`+hypothesis for `→ TASK-048`, every wireframe is ILLUSTRATIVE structure with placeholder labels, and the §14/§15 gates reject any fabricated content.

**Change log.**
- **v0.1 (2026-11-23):** Initial eight-screen low-fidelity wireframe specification. Shared conventions (§3), eight screen specs with ASCII frames, interaction + accessibility annotations (§4–§11), cross-screen flow (§12), consolidated accessibility checklist (§13), reviewability validator (§14), forbidden-pattern list (§15). No concept, design, user, test or result asserted. Status: superseded by v0.2.
- **v0.2 (2026-11-23):** Reviewer-rejection fixes — identifier consistency only; no content, coverage, mechanism-labelling or accessibility substance changed. (1) **Resolved the W6/W7 screen-ID swap:** W6 = Progress/Reflection and W7 = Missed Day/Recovery everywhere, matching the §2 map; the §9 header now reads "W7 — Missed Day / Recovery" and the §10 header "W6 — Progress / Reflection" (document order still places Missed Day first so RULE-3 is established before the Progress screen). Validator checks V6 (missed-day non-punitive → W7) and V7 (clinical boundary → W6/W8) now point at the correct screens. (2) **Renamed the seven non-negotiable rules** from the colliding `W1`–`W7` tokens to a distinct `RULE-1`–`RULE-7` namespace and swept every in-text rule reference (§1–§16) accordingly, so a `Wn` token now means a screen only and a `RULE-n` token a rule only. Also corrected a stray `§6`→`§10` section pointer in §0. Status: in_review pending Reviewer approval.
