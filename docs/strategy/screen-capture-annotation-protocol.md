# HerRays — Screen Capture & Annotation Protocol

**Deliverable:** TASK-017 — Create the screen capture and annotation protocol
**Workstream:** Experience Teardown (WS02)
**Version:** 0.1 · **Status:** Proposed — capture protocol defined, no session yet recorded
**Owner (accountable role):** Senior UX / product designer (WS02), under Program Director custody
**Reviewers:** QA/accessibility specialist · Motion/interaction designer · iOS engineer · Privacy/regulatory reviewer · Program Director
**Source basis:** `prd.md` §5 Phase 2 ("Use consistent devices, app versions, regions, access levels and research scenarios" + "Record taps, time, decisions, copy, screen transitions, friction, emotion hypotheses, error states, accessibility and platform behavior"), §3 point 2 ("record screenshots and interaction sequences, respecting copyright and access restrictions"), §4 (Journey Library `JRN-001`, Evidence Library `EVD-001`, evidence grades, source handling: "URLs, access dates, evidence quotes/excerpts within legal limits … provenance and what remains unknown", no-fabrication rule), §11 Gate 1 (research-foundation gate: "access limitations documented"; "Polished unsupported reports do not pass"), §13 Prompt 02 ("Capture direct walkthrough evidence, annotated screens, interaction counts, friction, copy, timing, accessibility and failure states")
**Depends on:** TASK-016 (ten journey scripts — define *which tasks* are recorded and the `JRN` record this capture bundle fills) · TASK-005 (`EVD` schema — each capture bundle promotes to an `EVD` artifact: `access_date`, `app_version`, `region`, `limitations`) · TASK-006 (`APP` registry — supplies the subject + `access_status`) · TASK-004 (evidence grading — a single capture session caps at grade B) · TASK-003 (responsibility matrix — names the accountable tester role per run)
**Feeds:** TASK-018–022 (the five specialist audit templates — each reads this bundle's screens, tap log, timings and accessibility annotations) · TASK-019 (UX heuristic audit — consumes the friction annotation taxonomy) · TASK-020 (visual/motion audit — consumes transition timing captures) · TASK-022 (iOS/accessibility audit — consumes the accessibility annotation layer) · TASK-023 (cross-specialist reconciliation — replays the same bundle) · TASK-008 (gap/contradiction log — `blocked`/`not_reached` captures open coverage gaps) · TASK-026 (recruitment & consent pack — inherits the consent discipline defined here for later primary research)

---

## 0. How to read this document

TASK-016 defined **what** to test (ten standardized journeys) and the `JRN` observation record those walkthroughs fill. This document defines **how to record** a walkthrough so the `JRN` record is trustworthy: the device and build rig, the consent and copyright rules, the timestamping and tap-logging method, the task-duration measurement, and the friction and accessibility annotation layers. It is the *capture mechanics* that TASK-016 §3 explicitly deferred here ("Capture mechanics … are **TASK-017**").

It is a **method and a set of file/record contracts**, not a dataset. It produces no findings about any app.

It does five separable things:

1. **Pins the recording conditions** (§4) — the device, OS, app version, region/storefront, network and access level that must be identical across apps and re-readable from the artifacts themselves, so a difference in a `JRN` record reflects a difference in the app, not in the rig.
2. **Sets the consent, copyright and privacy rules** (§5) — who must consent to being recorded, what may be captured, what must never leave the device, and how competitor copyright and App Store access restrictions are respected (`prd.md` §3, §4).
3. **Defines the capture bundle** (§6) — the exact artifact set one session produces: the ordered, stamped screen/frame files (`screen_ref`), the timestamped event/tap log, the session manifest, and the derived `EVD` link. This is the thing a `JRN` record's `capture_ref` points to (TASK-016 W1).
4. **Defines the three annotation layers** (§7–§9) — timing & taps (§7), friction annotations (§8), and accessibility annotations (§9) — each with a controlled vocabulary and the hard observation↔interpretation firewall TASK-016 W2 requires.
5. **Provides the reusable capture checklist** (§10) — a single pre-flight / in-session / post-session / validation checklist a tester runs every session, which is the primary acceptance deliverable of this task.

> **No-fabrication statement.** This document contains **no walkthrough data and no findings**. It does not report, quote, count, time, screenshot, or characterise any screen, tap, animation, copy string, or behaviour of any real app, because **no session has been recorded**. Every field, stamp and annotation value below is a *specification of what a tester must capture and how*, never an assertion that any app does or does not do something. The only populated artifacts appear in the **clearly-labelled synthetic worked example** (§12), which uses a fictitious `APP-SYNTH-Z` and `*-SYNTH-*` identifiers solely to prove the bundle and checklist run end-to-end. Nothing here may be cited as evidence about a real product. When a session is executed, its bundle becomes a `JRN`-linked `EVD` record (TASK-005); a single tester's single session is graded no higher than **B** (`prd.md` §4).

**Scope boundary — what this task is and is not.**
- **TASK-017 (this document) = the capture & annotation mechanics.** It answers *"with which device/build/region, under what consent, do we record a walkthrough; how are screens, taps, timings, friction and accessibility stamped and stored; and what checklist guarantees it?"*
- **It is not the journey scripts.** Which ten tasks are run, under which scenarios, and what counts as journey-complete is **TASK-016**. This protocol records whatever TASK-016 tells it to run.
- **It is not the specialist lenses.** How friction *severity* is scored (TASK-019), how motion timing is *judged* (TASK-020), how VoiceOver/Dynamic Type are systematically *tested and rated* (TASK-022), how BCTs are coded (TASK-018) live in those templates. This protocol captures the **raw material** those lenses read and classifies it only to the "observed vs. suspected" line — it does not rate or score.
- **It is not primary-user research consent.** Recruiting, screening and consenting *external study participants* is **TASK-026**. The consent rules here (§5) govern recording the **internal testers/specialists** performing teardowns and set the discipline TASK-026 later extends to participants.
- **It does not select, score, or design HerRays features** (`prd.md` §13 Prompt 02: "Do not select final HerRays features").

---

## 1. Purpose

A teardown is only evidence if another person can open the artifacts months later and verify the claim without trusting the original tester's memory. The failure mode WS02 must prevent is the *impressionistic session*: a tester explores an app, takes a few screenshots on their personal phone, writes "onboarding felt long and the paywall came up fast," and those words get laundered into the capability library as measured fact — with no record of which build, which storefront, how long "long" was, or whether the paywall screen was even captured. That path fails Gate 1's bar that "polished unsupported reports do not pass" (`prd.md` §11) and silently violates copyright and consent.

This protocol converts a walkthrough into **admissible, grade-B-or-lower observational evidence** by guaranteeing four properties of every session:

1. **Re-readable conditions.** Device, OS, app version, region/storefront, network and access level are *recorded inside the artifacts themselves* (a visible build string, a storefront stamp, a device/OS header), not just typed into a field a tester could mis-remember. If the rig can't be read back from the bundle, the session is invalid (§4, N1).
2. **A captured anchor for every observation.** Every step a `JRN` record asserts must point to a timestamped frame and an event-log line in this bundle (TASK-016 W1). "If it was not captured, it was not observed."
3. **Lawful, privacy-safe capture.** Recording respects the recorded person's consent (§5.1), competitor copyright (excerpts and annotated reference, never wholesale reproduction or circumvention — §5.2, `prd.md` §3/§4), and data minimization (no real personal accounts, payment details, or health data in captures — §5.3).
4. **A hard line between what was seen and what it might mean.** Timings and taps are measured (§7); friction and accessibility *observations* are recorded as observations and any *suspected cause* is tagged as interpretation (§8–§9) per TASK-016 W2. This protocol never emits a severity score or an efficacy claim.

---

## 2. Five non-negotiables (anti-fabrication & integrity guards)

These guards are structural. A session bundle that violates any one is rejected at validation (§11), not patched afterward.

- **C1 — The rig must be readable from the artifacts, never only asserted.** `app_version`, `region`/storefront and `device`/`os` must be evidenced by a captured frame (an in-app build/version screen, the App Store storefront, the device Settings/status bar) and only then transcribed into the manifest. A manifest value with no corroborating frame is `unknown`, and a run whose `app_version` is `unknown` is **invalid** (a version-less walkthrough is uncomparable — TASK-016 §3.1). `unknown` is never guessed or back-filled from memory or an aggregator.
- **C2 — No observation without a timestamped, ordered artifact.** Every screen/frame file carries a monotonic `order_index` and a capture timestamp from the single session clock (§7.1); every logged tap/event points to the frame at or before it. A screenshot taken out of band, a note written from memory after the session, or a frame recalled from the tester's prior personal use of the app is **inadmissible** (TASK-016 W1). Gaps in the order sequence must be explained in the manifest, never silently closed.
- **C3 — Consent precedes recording; capture is minimized.** No screen recording, voice track, or think-aloud audio of a person starts before that person's consent is logged (§5.1). No real personal account, real payment instrument, or real health data is entered into a benchmark app during capture (§5.3); test accounts and synthetic inputs only. Captured frames are scrubbed of any incidental personal data before the bundle leaves the capture device.
- **C4 — Blocked is a captured state, never a guess.** Where a journey step cannot be reached (hard paywall, account wall, region lock, crash), the tester captures the **barrier screen itself**, marks the step `blocked`/`not_reached` with the barrier reason, and stops. They do not reconstruct the hidden screen from marketing, memory, a review, or another storefront, and do not mark the feature absent (absence requires a completed search — TASK-012). The captured block opens a coverage gap in TASK-008 and is a Gate-1-relevant *documented access limitation* (`prd.md` §11), not a defect in the bundle.
- **C5 — Capture classifies to the observation line only; it never rates.** This protocol's annotations separate *observed* from *suspected* and tag type (§8–§9). It never assigns a severity score, a motion-quality judgment, an accessibility pass/fail grade, or an efficacy claim — those are the specialist templates' job (TASK-019/020/022). Emitting a score from the capture layer is a validation failure (§11).

---

## 3. Where this sits in the capture → evidence chain

```
TASK-016 journey script (J1…J10, scenario SC-1…SC-6)
        │  "run this task, record these observations"
        ▼
TASK-017 CAPTURE SESSION  ──►  capture bundle  (this document, §6)
   rig pinned (§4) ┐                 ├─ session_manifest.yaml        (§6.2)
   consent logged (§5) ┤             ├─ frames/  NNNN_<screen_ref>.*  (§6.3)
   screens+taps+timing │             ├─ events.log  (taps, timings)  (§6.4, §7)
   friction+a11y notes ┘             ├─ annotations.yaml (friction/a11y) (§8–§9)
                                      └─ consent_record.yaml          (§5.1)
        │  one bundle per journey-run; capture_ref = bundle id
        ▼
TASK-016 JRN record  (header + step records; capture_ref → this bundle)
        │  on acceptance
        ▼
TASK-005 EVD record  (type: observed, grade ≤ B, access_date, app_version, region, limitations)
        │
        ▼
TASK-018–022 specialist audits  ·  TASK-023 reconciliation  ·  TASK-012 feature matrix
```

The bundle is the **single source artifact** every downstream specialist re-opens. Because all five specialists audit the *same* captured bundle (`prd.md` §2: "Specialists independently audit the same core apps before cross-disciplinary reconciliation"), capture quality is the ceiling on every WS02 audit's quality.

---

## 4. Recording conditions — the standardized rig

Every session declares and **evidences** its rig. The acceptance-criteria fields **device, OS, app version, region** live here, each with a rule that forces it to be read from a captured artifact (C1).

### 4.1 The rig field contract

| Field | Req. | Rule / allowed values | How it is **evidenced** (C1) |
|---|---|---|---|
| `device_model` | M | Exact hardware, e.g. `iPhone 15` / `iPhone SE (3rd gen)`. | Settings → General → About frame, or device identifier in status-bar capture. |
| `os_version` | M | Exact build, e.g. `iOS 18.1 (22B83)`. | Settings → General → About → Software Version frame. |
| `app_id` | M | `APP-001`…`APP-005` (TASK-006). | — (registry link). |
| `app_version` | M | Observed build string, e.g. `7.14.2`. **Never `unknown` for a performed run** (C1). | In-app About/Settings/version screen frame; or App Store "Version History" frame captured same day. |
| `region_storefront` | M | App Store storefront country, e.g. `US`. | App Store account storefront frame. |
| `locale_language` | M | Device language/locale, e.g. `en-US`. | Settings → General → Language & Region frame. |
| `network_condition` | M | `wifi` / `cellular` / `offline` / `degraded-sim`. J5/J6/J8 require ≥1 `offline`/`degraded` run (TASK-016 §4). | Control-Center / status-bar state visible in frames; degraded conditions set via Network Link Conditioner and noted. |
| `access_level` | M | `full_free` / `full_paid` / `partial_paywalled` / `account_required` / `trial` (aligns with TASK-006 §4 access-status). | Account/subscription state frame; declared in manifest. |
| `account_type` | M | `test_account` / `fresh_install_no_account` / `sandbox_subscription`. **Never a real personal account** (C3, §5.3). | Account screen frame (test identifier, not personal). |
| `device_settings_baseline` | M | Standardized a11y/display baseline snapshot (§4.3) + any per-run deviation (e.g. Dynamic Type bumped for an a11y pass). | Settings frames for the baseline; deviations logged per run. |
| `capture_method` | M | `on_device_screen_recording` / `screenshot_sequence` / `tethered_qt_recording` / `mirrored_capture`. | Declared; governs how §7 timings are derived. |
| `tester_role` | M | Accountable specialist/role (TASK-003). | — (matrix link). |
| `session_datetime` | M | Session start on the single session clock (§7.1); becomes `access_date` for the `EVD`. | Device clock visible at session start frame. |

### 4.2 Standardization rules (consistency across apps)

- **One primary rig for all five core apps.** The teardown program declares a single **primary device + OS** (e.g. `iPhone 15 / iOS 18.1`) and runs all five apps on it so cross-app comparisons are not confounded by hardware. A **secondary small-device rig** (e.g. `iPhone SE`) is used only for the dedicated layout/Dynamic-Type stress runs and is labelled as such.
- **Version pinning + re-capture on update.** The `app_version` observed at session start is frozen for that bundle. If an app updates mid-program, prior bundles are **not** retro-edited; a new session is recorded against the new build and the version change is noted (mirrors the supersede-not-overwrite discipline of TASK-011). Comparisons only pool bundles on compatible builds.
- **One storefront as primary, declared exceptions.** A single primary storefront/region is declared for comparability; any journey that must be run on a second storefront (e.g. to reach a region-locked flow) is a **separate bundle** with its own `region_storefront` stamp, never silently mixed into the primary record.
- **Access level recorded, never circumvented.** The access level reached is recorded as-is. The tester never jailbreaks, side-loads, patches, or otherwise circumvents a paywall/account wall to reach a screen (C4, §5.2); an unreachable screen is a captured block.

### 4.3 The standardized device-settings baseline

To keep accessibility and layout observations comparable, every primary-rig session starts from a **declared baseline** and records any deviation:

| Setting | Baseline for standard runs | Dedicated stress run (declared) |
|---|---|---|
| Dynamic Type | Default (large) | Max accessibility size — for the layout/reflow pass (feeds TASK-022) |
| Bold Text | Off | On — accessibility pass |
| Display Zoom | Standard | Zoomed — layout pass |
| Reduce Motion | **Off** for the standard run (so default motion is captured for TASK-020) | **On** for the reduced-motion pass (captures the fallback) |
| VoiceOver | Off for standard run | On — VoiceOver pass (feeds TASK-022) |
| Appearance | Light **and** one Dark capture of key screens | — |
| Increase Contrast / Reduce Transparency | Off | On — contrast pass |

Reduced-motion and VoiceOver are captured as **explicit paired runs** (default + assistive) because TASK-020/022 need both the designed experience and its accessible fallback; which run a frame belongs to is stamped in the manifest.

---

## 5. Consent, copyright and privacy rules

The acceptance-criteria field **recording consent** is specified here, alongside the copyright and data-minimization rules `prd.md` §3/§4 demand.

### 5.1 Recording consent (`consent_record.yaml`)

Teardown capture records a tester's screen and, where think-aloud is used, their voice. No recording that includes a person's voice, face, or think-aloud commentary begins before consent is logged.

| Field | Req. | Rule |
|---|---|---|
| `consent_id` | M | `CONSENT-<session_id>`; one per session that records any person. |
| `recorded_subject_role` | M | The internal tester/specialist being recorded (role, not personal name in the bundle). |
| `consent_scope` | M | What is captured: `screen_only` / `screen_plus_voice` / `screen_plus_voice_plus_face`. Default and minimum is `screen_only` unless think-aloud is needed. |
| `consent_given` | M | `true` required before `capture_method` starts; a `false`/absent value blocks the session (C3). |
| `consent_timestamp` | M | On the session clock, **before** the first frame. |
| `retention_scope` | M | Where the bundle may live (internal repository only), who may view, and the deletion trigger. |
| `withdrawal_note` | O | How the subject may withdraw and what is deleted if they do. |

> This section governs **internal testers**. Consent for **external study participants** (interviews, diary, usability) is the far larger TASK-026 pack; this protocol only sets the recording discipline it inherits.

### 5.2 Copyright & access-restriction rules (`prd.md` §3 point 2, §4)

- **Excerpts, not wholesale copies.** Captured frames are used as **annotated reference patterns** for internal analysis (`prd.md` §3 point 6), quoting on-screen copy within fair-use excerpt limits. The bundle is not a redistribution of the competitor's app, is kept internal (§5.1 `retention_scope`), and is never published or shared externally.
- **No circumvention.** Testers do not bypass paywalls, account walls, region locks, or technical protection measures to capture a screen (C4). Where access legitimately requires a paid subscription to study a flow, that purchase follows the TASK-038 / `prd.md` §10 purchasing gate; it is a procurement decision, not something engineered around.
- **Attribution in-bundle.** Each frame's `screen_ref` ties it to the `app_id` and `app_version` so no competitor screen is ever mistaken for HerRays' own work downstream.

### 5.3 Data minimization (`prd.md` §4: "minimize sensitive data")

- **Test accounts only.** Sign-ups use dedicated test identities, never a tester's real personal account (C3).
- **No real sensitive input.** No real payment card (use sandbox/StoreKit test flows), no real health data, no real contacts/calendar. Where an app demands a value, synthetic placeholder data is used and noted.
- **Scrub before store.** Any incidental personal data that appears in a frame (a real email autofill, a notification from another app, a lock-screen with personal content) is redacted before the bundle is stored. The redaction is logged (what, which frame) so the edit is itself auditable.
- **Health-data sheets.** HealthKit permission sheets are captured (they are platform behaviour), but **no real Health data is granted** — a test profile or denied permission is used, and which was chosen is stamped.

---

## 6. The capture bundle

### 6.1 One bundle per journey-run

A **capture bundle** is the complete artifact set produced by recording one journey (TASK-016 `J1`…`J10`) once, as one scenario (`SC-1`…`SC-6`), on one rig. Its id is the `capture_ref` a `JRN` record stores (TASK-016 §3.1, W1). Bundle id scheme:

```
CAP-<APP>-J<NN>-<RUN>-<YYYYMMDD>
e.g. CAP-APP-002-J08-01-20261130   (Fabulous, missed-day journey, run 1, captured 2026-11-30)
```

### 6.2 Bundle contents

| Artifact | Req. | Purpose |
|---|---|---|
| `session_manifest.yaml` | M | The rig (§4.1), consent link, bundle id, journey/scenario, access level, clock reference, frame count, order-gap explanations, and the derived `EVD` link. The bundle's index of record. |
| `frames/` | M | Ordered, stamped screen/frame files (§6.3). The visual anchor for every observation (C2). |
| `events.log` | M | The timestamped tap/interaction/timing log (§6.4, §7). |
| `annotations.yaml` | M | Friction (§8) and accessibility (§9) annotations, each tied to a `screen_ref` and a `t_ms`. |
| `consent_record.yaml` | C | Required whenever any person is recorded (§5.1). |
| `redactions.log` | C | Required if any frame was scrubbed (§5.3). |
| `copy_excerpts.yaml` | O | Verbatim on-screen copy excerpts (within fair-use) keyed to `screen_ref`, for `copy_verbatim` in the `JRN` step record. |

### 6.3 Frame naming & stamping (`screen_ref`)

Each frame (screenshot or extracted recording frame) is the atom a `JRN` step's `screen_ref` points to.

- **Filename:** `NNNN_<journey>_<short-slug>.<ext>` — e.g. `0007_J08_streak-reset-dialog.png`. `NNNN` is the monotonic `order_index`; it never resets or reorders within a bundle (C2).
- **In-manifest record per frame:** `order_index`, `screen_ref` (stable id = bundle id + `order_index`), `t_ms` (ms from session start, §7.1), `frame_type` (`screenshot` / `recording_frame`), `run_variant` (`default` / `reduced_motion` / `voiceover` / `dynamic_type_max` / `dark` / `contrast`), and `capture_note` (observation-only, e.g. "storefront visible", "build string visible"). Interpretation never goes in `capture_note` (C5).
- **Required anchor frames per bundle:** a **rig-evidence frame** (build string or storefront, C1), a **journey-start frame**, a **journey-end / stop-rule frame** (per TASK-016's "journey complete when"), and — if blocked — the **barrier frame** (C4).

### 6.4 The event log (`events.log`)

Append-only, one line per interaction or marked event, each on the single session clock (§7.1):

```
t_ms      type         detail                               frame_ref
000000    session_start  journey=J08 scenario=SC-2 build=7.14.2  0001
001420    tap           target="Mark today complete"          0002
002980    transition    type=modal_in dur_ms≈320              0003
003510    decision      paywall option {monthly|annual}        0004
004100    tap           target="Not now"                      0005
006750    error_state   type=empty_state screen=history        0006
...
041020    journey_end   stop_rule=met                          0042
```

`type` is a closed vocabulary: `session_start` · `tap` · `swipe` · `scroll` · `type` · `wait` · `transition` · `decision` · `permission_prompt` · `error_state` · `platform_event` (HealthKit sheet, notification request, haptic, widget/Live Activity, background/foreground) · `block` · `journey_end`. Every line's `frame_ref` ties it to a frame (C2).

---

## 7. Annotation layer 1 — timing & taps

Covers the acceptance-criteria fields **timestamps**, **taps** and **task duration**.

### 7.1 The single session clock

- One monotonic clock per session, zeroed at `session_start`. Every frame `t_ms` and every `events.log` line uses it. This makes timings **relative and internally consistent** regardless of wall-clock or timezone, and lets any two events be differenced precisely.
- `capture_method` (§4.1) governs the clock source: a tethered/mirrored recording derives `t_ms` from the video timeline; a screenshot-sequence session derives it from file timestamps and is explicitly flagged as **coarser-grained** in the manifest (so TASK-020's motion-timing work knows screenshot sequences cannot resolve sub-frame animation timing — a documented limitation, not a silent gap).

### 7.2 Taps & interaction counting

- **`tap_count`** in a `JRN` step is the **cumulative count of user-initiated input events** (`tap`+`swipe`+`type`+`scroll` gestures) from `session_start` to that step, read directly off `events.log`. It is an **observation**, never a judgment ("too many taps" is an interpretation for TASK-019).
- System-initiated events (`transition`, `permission_prompt`, `platform_event`) are logged but **not** counted as taps.
- Mis-taps and corrections are logged as they happened (not cleaned up) — the real interaction cost includes recovery. A corrected mis-tap is annotated in the friction layer (§8), not deleted from the count.

### 7.3 Task duration

- **`elapsed_ms`** for a step = `t_ms(step) − t_ms(session_start)`; **journey duration** = `t_ms(journey_end) − t_ms(session_start)`.
- Duration is reported as the **raw measured interval only**. The protocol records *time*, never a verdict about it; "slow"/"fast" is a TASK-019 interpretation that must cite the measured `elapsed_ms` as its trigger (TASK-016 W2).
- **Active vs. wait time:** long `wait` intervals (network load, deliberate pause) are flagged in `events.log` so duration can be reported with and without waits, preventing a loading spinner from being misread as user effort.
- **No cross-session duration averaging into a "typical time."** A single session's duration is grade-B at most; pooling requires multiple independent runs and is a reconciliation (TASK-023) decision, not a capture-layer one.

---

## 8. Annotation layer 2 — friction annotations

Covers the acceptance-criteria field **friction annotations**. The capture layer records **where friction was observed and of what type**; it does **not** assign severity (that is TASK-019, C5).

### 8.1 The friction annotation record (in `annotations.yaml`)

| Field | Block | Req. | Rule |
|---|---|---|---|
| `friction_id` | — | M | `FRIC-<bundle>-NN`. |
| `screen_ref` / `t_ms` | observation | M | Where/when it occurred (anchors to a frame + event line). |
| `friction_type` | observation | M | Closed vocabulary (§8.2) — the *kind* of friction observed. |
| `observed_trigger` | observation | M | The concrete observed thing: "two full-screen interstitials before first action", "input field rejected a valid entry", "back gesture dismissed unsaved input". Fact, not feeling. |
| `interaction_cost` | observation | C | Extra taps/time attributable, read from §7 (e.g. "+4 taps, +18s vs. journey baseline"). |
| `recovery_observed` | observation | C | Whether/how the tester recovered, with frames. |
| `suspected_cause` | interpretation (D) | O | A hypothesis **naming its observed trigger**, graded D. Never a severity, never "users will churn." |
| `followup` | — | O | Opens a TASK-008 gap, a TASK-030 capability candidate, or a retest. |

### 8.2 Friction-type vocabulary (observational categories)

`navigation_loss` · `unexpected_interstitial` · `forced_decision` (goal/plan/permission demanded before value) · `input_rejection` (valid input refused, unclear format) · `destructive_or_irreversible` (data lost, no undo) · `latency_block` (user blocked waiting) · `error_without_recovery` · `dark_pattern_observed` (pre-checked opt-in, disguised dismiss, hard-to-find cancel — captured as observation; ethical *judgment* is TASK-021/behavioral) · `accessibility_barrier` (also mirrored to §9) · `copy_ambiguity` (instruction/label unclear at a decision point).

These are **containers for what was seen**, chosen to feed TASK-019's heuristic audit. The capture tester assigns the *type* (which pattern occurred) but never the *severity* (how bad it is) — that firewall is C5.

### 8.3 Missed-day / zero-guilt sensitivity (`prd.md` §6, §9)

The missed-day journey (TASK-016 J8) is the program's most sensitive capture. The protocol requires the tester to capture **exactly what the app does after a miss** — the streak dialog, the copy verbatim, any guilt/shame framing, any punitive reset, any pressure to pay/restore — as **observation** in `copy_excerpts.yaml` and a `friction_type: dark_pattern_observed` / `forced_decision` annotation where applicable, **without** judging it. Whether that framing is harmful is a behavioral/ethics determination (TASK-018/021 and the capability safety gate TASK-033). Capturing it faithfully — including the barrier frame if a paywall gates recovery — is what makes that later judgment possible.

---

## 9. Annotation layer 3 — accessibility annotations

Covers the acceptance-criteria field **accessibility annotations**. Again: capture records **what was observed** under the declared accessibility run variant; systematic scoring/pass-fail is TASK-022 (C5).

### 9.1 The accessibility annotation record (in `annotations.yaml`)

| Field | Block | Req. | Rule |
|---|---|---|---|
| `a11y_id` | — | M | `A11Y-<bundle>-NN`. |
| `screen_ref` / `t_ms` | observation | M | Anchor frame/event. |
| `run_variant` | observation | M | Which §4.3 variant produced it: `voiceover` / `dynamic_type_max` / `reduced_motion` / `bold_text` / `contrast` / `dark` / `default`. |
| `a11y_dimension` | observation | M | Closed vocabulary (§9.2). |
| `observed_behavior` | observation | M | Exactly what happened: "VoiceOver read the icon as 'button' with no label", "at max Dynamic Type the CTA was clipped off-screen", "reduce-motion still played the full 3D fill". Behaviour, not a rating. |
| `assistive_path_result` | observation | C | Could the task be completed via the assistive path? `completed` / `completed_with_difficulty` / `blocked` — observed, with frames. |
| `suspected_issue` | interpretation (D) | O | Hypothesis naming its trigger; graded D. No WCAG pass/fail verdict here (that is TASK-022). |
| `followup` | — | O | TASK-008 gap / TASK-022 handoff / retest. |

### 9.2 Accessibility-dimension vocabulary (observational categories)

`voiceover_labeling` (missing/incorrect labels, unlabeled controls, reading order) · `dynamic_type_reflow` (clipping, truncation, overlap at large sizes) · `contrast_legibility` (observed low-contrast text/controls) · `tap_target_size` (controls that appear below comfortable target size) · `reduced_motion_fallback` (whether a reduced-motion alternative was actually honored) · `focus_order` (illogical/trap focus) · `color_only_signal` (state shown by color alone) · `captioning_audio` (uncaptioned audio/video, if any) · `timeout_pressure` (time-limited interaction with no extension).

### 9.3 Paired-run requirement

Because reduced-motion and VoiceOver are captured as **paired runs** (§4.3), every key screen that has motion or a custom control carries **two** linked frames — default and assistive — so TASK-020 (motion) and TASK-022 (accessibility) can compare the designed experience against its fallback directly. A missing assistive-variant frame for a motion-heavy or custom-control screen is a capture gap flagged at validation (§11).

---

## 10. The reusable capture checklist

This is the primary acceptance deliverable: a single checklist a tester runs **every session**. It is reproduced as a copy-ready block in §13 for printing/pasting. Each item maps to a non-negotiable (C1–C5) or an acceptance-criteria field.

### 10.1 Pre-flight (before the first frame)

- [ ] **Journey + scenario selected** from TASK-016 (`J__`, `SC-__`); stop rule noted. *(→ comparability)*
- [ ] **Rig pinned & readable:** `device_model`, `os_version` captured from Settings→About frame. *(C1, device/OS)*
- [ ] **App build captured:** in-app version screen (or App Store version frame) captured → `app_version` set, **not `unknown`**. *(C1, app version)*
- [ ] **Storefront + locale captured:** App Store storefront frame + Language & Region frame → `region_storefront`, `locale_language`. *(C1, region)*
- [ ] **Network condition set & visible** in status bar; offline/degraded configured if J5/J6/J8. *(§4.1)*
- [ ] **Account is a test account**, not personal; access level noted. *(C3, §5.3)*
- [ ] **Device-settings baseline** applied (§4.3); run variant for this session declared (`default` / `voiceover` / `dynamic_type_max` / `reduced_motion` / …). *(§4.3)*
- [ ] **Consent logged** (`consent_record.yaml`): subject role, scope, `consent_given=true`, timestamp **before** recording. *(C3, recording consent)*
- [ ] **No real sensitive data** staged (sandbox payment, synthetic inputs, no real Health grant). *(C3, §5.3)*
- [ ] **Session clock zeroed**; `capture_method` set; coarse-grain flag set if screenshot-sequence. *(§7.1)*

### 10.2 In-session (during the walkthrough)

- [ ] **Rig-evidence frame** captured first (build string / storefront). *(C1)*
- [ ] **Journey-start frame + `session_start` event** logged. *(C2)*
- [ ] **Every tap/interaction logged** to `events.log` with `t_ms` and `frame_ref`; mis-taps kept, not cleaned. *(C2, taps)*
- [ ] **Every decision point, permission prompt, platform event, error/empty state captured** as a frame + event line. *(§6.4)*
- [ ] **Transitions captured** with timing note where motion matters (default run). *(§7.1, TASK-020)*
- [ ] **Copy at decision points excerpted** verbatim (fair-use) into `copy_excerpts.yaml`. *(§5.2, §8)*
- [ ] **Friction annotated** at occurrence: `friction_type` + `observed_trigger` (no severity). *(§8, C5, friction)*
- [ ] **Accessibility annotated** under the declared variant: `a11y_dimension` + `observed_behavior` (no pass/fail). *(§9, C5, accessibility)*
- [ ] **Missed-day capture discipline** applied if J8: streak/reset/paywall framing captured verbatim, unjudged. *(§8.3)*
- [ ] **If blocked:** barrier frame captured, step marked `blocked`/`not_reached` + reason; **do not reconstruct the hidden screen.** *(C4)*
- [ ] **Journey-end frame + `journey_end` event** logged when the TASK-016 stop rule is met. *(§6.3)*

### 10.3 Post-session (before the bundle is stored)

- [ ] **Scrub incidental personal data** from frames; log each redaction. *(C3, §5.3)*
- [ ] **Manifest completed:** rig, consent link, journey/scenario, access level, frame count, order-gap explanations. *(§6.2)*
- [ ] **Order sequence contiguous** (or every gap explained). *(C2)*
- [ ] **Paired assistive-variant frames present** for motion-heavy / custom-control screens. *(§9.3)*
- [ ] **No severity/score/efficacy value** written anywhere in the bundle. *(C5)*
- [ ] **`EVD` link created** (TASK-005): `type: observed`, grade ≤ B, `access_date`, `app_version`, `region`, `limitations` (incl. "single session", "short-run only", any coarse-grain/coverage caveat). *(§3, TASK-004)*

### 10.4 Validation gate (reviewer, §11)

- [ ] Rig re-readable from a frame (C1) · every observation anchored to a frame+event (C2) · consent present & pre-recording (C3) · blocks captured not guessed (C4) · no scores emitted (C5) · copyright/privacy rules honored (§5).

---

## 11. Bundle validation (entry gate)

A bundle is accepted into the Journey Library only if every check passes; otherwise it is `rejected` with the failing check named (it is never silently accepted or quietly patched).

| # | Check | Fails if… | Guard |
|---|---|---|---|
| V1 | Rig readability | `app_version`=`unknown`, or `device`/`os`/`region` not evidenced by a frame | C1 |
| V2 | Anchoring | any annotation/step references a `screen_ref`/`t_ms` with no matching frame/event | C2 |
| V3 | Order integrity | `order_index` gaps unexplained, or clock non-monotonic | C2 |
| V4 | Consent | person recorded without a `consent_given=true` timestamp **before** first frame | C3 |
| V5 | Minimization | real account / real payment / real health data / unscrubbed personal data present | C3, §5.3 |
| V6 | Block honesty | a `not_reached` step lacks a barrier frame, or a hidden screen is reconstructed | C4 |
| V7 | No scoring | a severity score, motion rating, WCAG pass/fail, or efficacy claim appears in the bundle | C5 |
| V8 | Copyright/access | evidence of circumvention, or wholesale app reproduction rather than annotated excerpts | §5.2 |
| V9 | Grade cap | derived `EVD` graded above B for a single session, or `limitations` empty | TASK-004 |
| V10 | Paired variants | motion-heavy/custom-control screen missing its assistive-variant frame | §9.3 |

---

## 12. Synthetic worked example (`CAP-APP-SYNTH-Z-J08-01`)

> **SYNTHETIC — NOT A REAL APP.** `APP-SYNTH-Z` is a fictitious habit app invented solely to show the bundle and checklist running end-to-end. No value below describes any real product. All ids are `*-SYNTH-*`.

### 12.1 `session_manifest.yaml` (excerpt)

```yaml
bundle_id: CAP-APP-SYNTH-Z-J08-01-20261130      # SYNTHETIC
journey: J08                                     # missed-day / recovery (TASK-016)
scenario_id: SC-2                                # repeated habit abandoner
app_id: APP-SYNTH-Z                              # SYNTHETIC — not APP-001..005
rig:
  device_model: "iPhone 15"                      # evidenced by frame 0001 (Settings→About)
  os_version: "iOS 18.1 (22B83)"                 # frame 0001
  app_version: "0.0.0-SYNTH"                     # evidenced by frame 0002 (in-app About); NOT unknown (C1)
  region_storefront: "US"                        # frame 0003 (storefront)
  locale_language: "en-US"                       # frame 0003
  network_condition: "offline"                   # J8 requires an offline/degraded run (TASK-016 §4)
  access_level: "full_free"
  account_type: "test_account"                   # C3 — no real account
  run_variant: "default"                         # paired reduced_motion run = CAP-...-J08-02
  capture_method: "tethered_qt_recording"        # fine-grained t_ms
  tester_role: "senior_ux_designer"              # TASK-003
consent_ref: CONSENT-CAP-APP-SYNTH-Z-J08-01       # screen_plus_voice, given 000000-pre
frame_count: 14
order_gaps: "none"
evd_ref: EVD-SYNTH-801                            # type: observed, grade B, limitations set
```

### 12.2 `events.log` (excerpt) — timestamps, taps, duration, block

```
t_ms     type            detail                                         frame
000000   session_start   journey=J08 scenario=SC-2 build=0.0.0-SYNTH    0004
001100   tap             target="Open today"                           0005
002300   transition      type=push dur_ms≈280                          0006
002950   decision        miss acknowledged; dialog shown                0007
003400   error_state     type=none; streak counter reset 7→0            0008
004800   decision        recovery gated: {Restore with Plus | Later}    0009   # paywall on recovery
005600   tap             target="Later"                                 0010
006200   block           barrier=hard_paywall on "Repair streak"        0011   # C4: barrier frame captured
007000   journey_end     stop_rule=met (recovery path observed/blocked) 0012
```

Derived (read off the log, **observation only**): `tap_count` to `journey_end` = 3; `journey_duration` = 7,000 ms; one step `blocked` with `barrier=hard_paywall` and a captured barrier frame (0011).

### 12.3 `annotations.yaml` (excerpt) — friction & accessibility, no scoring

```yaml
friction:
  - friction_id: FRIC-...-01
    screen_ref: 0008 ; t_ms: 003400
    friction_type: forced_decision            # observed category (§8.2)
    observed_trigger: "streak counter reset 7->0 after one missed day"
    interaction_cost: "n/a (passive)"
    suspected_cause: "possible shame/all-or-nothing framing (D) — rests on frame 0008"  # hypothesis, not severity
    followup: "GAP: zero-guilt review -> TASK-018/033"
  - friction_id: FRIC-...-02
    screen_ref: 0011 ; t_ms: 006200
    friction_type: dark_pattern_observed       # captured as observation; ethics = TASK-021
    observed_trigger: "streak repair available only via paid 'Plus'; 'Later' is low-contrast"
    followup: "CON candidate -> TASK-008"
accessibility:
  - a11y_id: A11Y-...-01
    screen_ref: 0009 ; t_ms: 004800 ; run_variant: default
    a11y_dimension: color_only_signal
    observed_behavior: "'Later' dismiss distinguished from 'Restore' by color only"
    assistive_path_result: completed_with_difficulty
    suspected_issue: "may be unreadable under contrast settings (D) — verify in paired run"  # no WCAG verdict (C5)
```

### 12.4 Validation trace (why this synthetic bundle would pass V1–V10)

1. **V1** `app_version` present + frame-evidenced (0002), rig readable (0001/0003) → pass.
2. **V2/V3** every annotation/step `screen_ref` resolves to a frame; clock monotonic, no order gaps → pass.
3. **V4** `CONSENT-…` logged `screen_plus_voice`, timestamp pre-`session_start` → pass.
4. **V5** `test_account`, offline, no real payment/health/personal data → pass.
5. **V6** the paywall block (0011) has a captured barrier frame; hidden "repaired" screen **not** reconstructed → pass (and opens a TASK-008 gap + a Gate-1 documented access limitation).
6. **V7** no severity/score/WCAG/efficacy value anywhere — `suspected_*` are D-graded hypotheses citing their trigger → pass.
7. **V8** annotated excerpts only, no circumvention of the paywall → pass.
8. **V9** `EVD-SYNTH-801` graded **B** (single session), `limitations` = "single session; short-run; offline-only; paired reduced-motion run pending" → pass.
9. **V10** paired `reduced_motion` run id reserved (`…-J08-02`) for the motion/contrast screens → pass once captured.

The example demonstrates the protocol **faithfully capturing a potentially-harmful missed-day pattern without judging it** — exactly the raw material TASK-018/021/033 need, produced under consent, minimization and copyright rules, with timings/taps/duration/friction/accessibility all anchored and unscored.

---

## 13. Copy-ready one-page capture checklist

```
HERRAYS WS02 — SESSION CAPTURE CHECKLIST (TASK-017)   bundle: CAP-____________________

PRE-FLIGHT
[ ] Journey J__  Scenario SC-__  stop-rule noted
[ ] device + OS captured from Settings→About frame
[ ] app_version captured from in-app/store frame  (NOT unknown)
[ ] storefront + locale captured from frames
[ ] network set & visible (offline for J5/J6/J8)
[ ] test account only — no personal/payment/health data
[ ] device-settings baseline applied; run_variant declared
[ ] CONSENT logged (scope, given=true, timestamp BEFORE first frame)
[ ] session clock zeroed; capture_method set (coarse-grain flag if screenshots)

IN-SESSION
[ ] rig-evidence frame first (build/storefront)
[ ] journey-start frame + session_start event
[ ] every tap/interaction logged (t_ms + frame); mis-taps kept
[ ] every decision / permission / platform event / error captured
[ ] transitions captured with timing note (default run)
[ ] decision-point copy excerpted verbatim (fair-use)
[ ] friction annotated: type + observed_trigger  (NO severity)
[ ] accessibility annotated: dimension + observed_behavior  (NO pass/fail)
[ ] J8: streak/reset/paywall framing captured verbatim, unjudged
[ ] if BLOCKED: barrier frame captured, mark not_reached + reason; DO NOT reconstruct
[ ] journey-end frame + journey_end event at stop rule

POST-SESSION
[ ] scrub incidental personal data; log redactions
[ ] manifest complete; order sequence contiguous or gaps explained
[ ] paired assistive-variant frames present for motion/custom-control screens
[ ] NO severity/score/efficacy value anywhere in bundle
[ ] EVD link created: observed, grade <= B, access_date/app_version/region/limitations

VALIDATION (reviewer): V1 rig-readable · V2 anchored · V3 ordered · V4 consent ·
V5 minimized · V6 block-honest · V7 unscored · V8 copyright/access · V9 grade<=B · V10 paired
```

---

## 14. Dependencies, open unknowns, change log

### 14.1 Dependencies

- **Consumes:** TASK-016 (journey scripts + `JRN` contract this bundle fills) · TASK-006 (`APP` registry subject + access status) · TASK-005 (`EVD` schema the bundle promotes to) · TASK-004 (grade cap) · TASK-003 (accountable tester role).
- **Feeds:** TASK-018 (BCT coding reads frames + copy excerpts + missed-day captures) · TASK-019 (UX heuristic audit reads friction annotations + tap/time) · TASK-020 (motion audit reads transition-timing captures + paired reduced-motion frames) · TASK-022 (iOS/accessibility audit reads the accessibility annotation layer + paired assistive variants) · TASK-021 (growth/content audit reads paywall-timing + copy captures) · TASK-023 (reconciliation replays the same bundle) · TASK-012 (feature matrix cites `screen_ref` anchors) · TASK-008 (blocks → coverage gaps) · TASK-026 (inherits the consent discipline for external participants).

### 14.2 Open unknowns (explicitly not invented)

- **Capture tooling stack** (on-device recording vs. tethered QuickTime vs. a mirrored-capture tool) is a procurement/feasibility question for the iOS engineer and the TASK-038 purchasing gate; this protocol is tool-agnostic and only requires the clock/anchoring properties, not a named product.
- **Primary rig device/OS** will be fixed by WS02 at program setup; the examples here (`iPhone 15 / iOS 18.1`) are **placeholders for the format**, not a committed decision.
- **Retention policy specifics** (exact storage location, deletion windows) depend on the HerRays OS/Notion source-of-truth decision (`prd.md` §4) and the privacy reviewer's sign-off; §5.1 defines the fields, not the final values.
- **Whether think-aloud audio is used at all** for internal teardowns vs. screen-only capture is a WS02 lead decision; the protocol supports both via `consent_scope` and defaults to the minimizing `screen_only`.

### 14.3 Change log

- **v0.1 (2026-11-22):** Initial protocol. Defines the standardized rig (§4) with frame-evidenced device/OS/app-version/region (C1); consent/copyright/privacy rules (§5); the capture bundle + frame naming + event log (§6); three annotation layers — timing & taps (§7), friction (§8), accessibility (§9); the reusable pre-flight/in-session/post-session checklist (§10, copy-ready in §13); a 10-check validation gate (§11); and one fully-labelled synthetic worked example (§12). No session recorded; no app characterised.
