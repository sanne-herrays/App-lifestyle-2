# iOS Capability & Integration Inventory

**Deliverable:** TASK-039 · **Workstream:** Technology & Economics (WS05, `prd.md` §2 / §6 / §13 Prompt 05)
**Version:** 0.1 · **Status:** Proposed — platform capabilities catalogued, permissions and feasibility questions framed; **no capability built, benchmarked, or confirmed on-device for HerRays**
**Owner role:** iOS engineer (R05) — single accountable; Backend engineer/architect (R06) co-owner for sync and identity interfaces; Privacy/regulatory reviewer (R15) and Clinical reviewer (R14) mandatory co-signers for any health-data surface; QA/accessibility specialist (R13) for interaction-target and assistive-technology feasibility.
**Source basis:** `prd.md` §6 Technology/economics ("Evaluate native iOS, HealthKit, notifications, widgets, on-device personalization, backend sync, identity, privacy/security, clinical integration boundaries, accessibility, App Store policy …"), §13 Prompt 05 ("Evaluate native iOS, HealthKit, widgets, notifications, on-device intelligence, backend synchronization, identity, privacy/GDPR, accessibility, clinical boundaries, App Store requirements … Produce reference architecture, **integration inventory**, risk register, cost scenarios, MVP constraints and minimal tool stack"), §4 ("Never fabricate … actual retention, CAC, LTV, clinical outcomes or internal competitor data"), §9 ("Clinical safety, privacy and accessibility are mandatory gates, not compensable weighted scores"), §11 Gate 5 Build readiness ("approved MVP/architecture, remaining clinical/behavioral claims have a validation plan") and "Polished unsupported reports do not pass", §14 ("A deliverable is **not complete** if its claims lack traceable sources, its method cannot be reproduced …").

---

## 0. What this document is (and is not)

This is the **feasibility-grounding inventory** for the seven native iOS surfaces the acceptance criteria name — **HealthKit, Widgets, Live Activities, Notifications, Haptics, On-device processing, and Sync interfaces** — plus the identity layer they all depend on. For each surface it records: the **platform capability** (what the OS actually offers), the **permission / entitlement / `Info.plist` contract** required to use it, the **data and clinical boundary** it touches, and an **open feasibility-question set** that must be answered by real on-device testing before the surface can be relied on in an MVP.

It is a **catalogue and a question list**, not a design and not a verdict. It specifies no HerRays feature, commits to no architecture, and — critically — **asserts no measured performance, no confirmed behavior, and no "this will work" claim**. Every behavioral property of the OS that HerRays has not itself verified on a target device is written as an **open feasibility question** (§6), not a fact. Platform facts drawn from Apple's public developer documentation are labelled `[platform-doc]` and are capability *descriptions*, not promises about HerRays' own build.

| This document **owns** | This document **does not own** (and must not duplicate) |
|---|---|
| The per-surface capability description, permission/entitlement/`Info.plist` contract, and data-boundary note for the seven named surfaces + identity (§3). | The **build/buy/integrate/defer sourcing verdict** for any capability — `↔ TASK-037` (`build-buy-integrate-defer-matrix.md`). This inventory *supplies the feasibility inputs* that matrix scores (its §2 P3, §3 scoring basis); it issues no Build/Buy verdict. |
| The consolidated **permission & entitlement register** and the user-facing consent-moment implications (§4). | The **phased tool-purchasing decisions** (Figma, Mobbin, analytics, RevenueCat…) — `→ TASK-038`. Native OS capabilities are free entitlements, not purchased tools; whether to buy a *paid tool* around them is that sheet's job. |
| The **feasibility-question register** (`IOS-Q-NNN`) with owner, test method, and blocking severity (§5). | The **privacy & clinical boundary checklist** (data minimization, consent, medical-claim limits, escalation, regulatory triggers) — `→ TASK-040`. This inventory *flags* which surfaces touch health data and *calls* that checklist; it does not define the checklist or make a regulatory determination. |
| The `IOS-CAP` inventory-record field dictionary and the no-fabrication / forbidden-value catalogue (§2, §6). | The **decision & experiment registers** (`DEC`/`EXP`) — `↔ TASK-009`. A resolved feasibility question becomes an `EXP` (device test) or a `DEC`; this inventory produces the *question*, not the register. |
| The identity/sync **interface** boundary (what crosses the device↔backend line) at a feasibility level (§3.8, §3.7). | The full **reference architecture, cost scenarios, and risk register** that Prompt 05 also asks for — those are sibling WS05 deliverables; this document is the *integration-inventory* slice only. |

Scope discipline, per the workflow rules: this is a **standalone deliverable**. It catalogues *what the platform offers and what must be verified*. It builds nothing, measures nothing, and asserts no clinical, retention, or performance outcome. Where the correct answer is "not yet known," the value is the literal token `open-question`, never a guess.

---

## 1. Design intent — a feasibility map, not a feature promise

### 1.1 Three failure modes this inventory exists to prevent

1. **"The SDK exists, therefore the feature works."** Every surface below is *available* on modern iOS. Availability is not feasibility. HealthKit returns data *only after* the user grants read access, *only* for data types already present, and *only* in categories Apple exposes — a design that assumes a continuous cycle-tracking signal can be silently wrong for a user who has never logged one. The inventory separates **capability** (what the API can do) from **feasibility-in-context** (what it will do for *HerRays' midlife-women audience on their real devices*), and routes the second to a test (§5), never to an assertion.
2. **Permission optimism.** Each health, notification, or background surface has a **consent gate the user can deny or revoke**, and several have *irreversible first-prompt* semantics (HealthKit never re-prompts for a denied type; notification authorization is asked once). A journey that only works on the happy path where every permission is granted is a §11 Gate-5 risk. Every permissioned surface here records its **denied / revoked / partially-granted** state as a first-class design obligation, not an edge case.
3. **Health-data creep.** The easiest surfaces to over-reach with are exactly the ones this task names (HealthKit, on-device processing, sync). The PRD treats clinical safety and privacy as **non-compensable gates** (§9). So every surface carries a **data-boundary note**, and any surface that reads, writes, infers, or syncs health-adjacent data is flagged `health-data: yes` and hard-linked to the TASK-040 checklist and R14/R15 sign-off before it may enter an MVP.

### 1.2 Why "open-question" is a deliverable, not a gap

Mirroring the sibling WS05 docs (TASK-037 §1.1, TASK-038 §1.2), an **honestly-scoped open question with an owner and a test method is the product of this task**, not a hole in it. Prompt 05 asks for an *integration inventory* and a *risk register*; the risks are precisely the things not yet verified. Fabricating a latency number, a battery figure, a "HealthKit covers this" claim, or a VoiceOver pass would violate §4 and §11. The value of this inventory is that it tells the build team *exactly what to measure first* — ordered by how badly a wrong assumption would hurt.

### 1.3 Platform-version posture

This inventory describes capabilities of **current, actively-supported iOS** as documented publicly by Apple at the time of writing, tagged `[platform-doc]`. It deliberately does **not** pin exact minimum-OS versions or cite specific API availability years as facts, because (a) the MVP's deployment target is an unmade decision (`→ TASK-037`/architecture), and (b) stating a precise availability year from memory risks an unverifiable claim. Where a minimum-version decision gates a capability (e.g. Live Activities and interactive/animated widget behaviors have raised their floor across recent iOS releases), that is recorded as a feasibility question (§5), to be resolved against Apple's official API-availability documentation at build time, not asserted here.

---

## 2. The `IOS-CAP` inventory record — field dictionary

Each surface in §3 is documented against the same contract so the rows are comparable and auditable. Requirement markers: **M** = mandatory, **C** = conditional, **O** = optional.

| Field | Req | Definition and rule |
|---|---|---|
| `ios_cap_id` | M | Stable id `IOS-CAP-NN`. Immutable once assigned. |
| `surface` | M | The acceptance-criteria surface this row documents (HealthKit / Widgets / Live Activities / Notifications / Haptics / On-device processing / Sync / Identity). |
| `framework` | M | The Apple framework(s) that provide it, labelled `[platform-doc]`. Names the *capability provider*, not a HerRays dependency decision. |
| `capability` | M | What the OS actually offers — described factually from public docs, no HerRays feature implied. |
| `permission_model` | M | The exact consent/entitlement contract: entitlement(s), `Info.plist` usage-string key(s), runtime authorization call, and **what the denied/revoked/partial state does**. The anchor of the "with permissions" acceptance requirement. |
| `data_boundary` | M | What data the surface touches and whether any of it is health-adjacent. Sets `health_data: yes/no` and, if yes, the mandatory TASK-040 / R14 / R15 linkage. |
| `offline_behavior` | C | How the surface behaves with no network — mandatory for any surface that could appear to the user to "work" offline (widgets, notifications, local processing). |
| `accessibility_note` | C | Known assistive-technology and interaction-target obligations (VoiceOver, Dynamic Type, reduced-motion, Reduce Transparency, contrast), mandatory for any *visible* or *haptic* surface (R13 lens). |
| `feasibility_questions` | M | The `IOS-Q-NNN` ids (from §5) that must be resolved by device testing before this surface is MVP-eligible. At least one per surface; a surface with zero open questions is itself a forbidden value (§6, F-7) because it implies untested certainty. |
| `boundary_refs` | M | Cross-links: `→ TASK-040` for health/privacy, `↔ TASK-037` as a feasibility input, `→ TASK-022` (iOS/accessibility audit template) for the test instrument, `↔ TASK-009` for the resolving `EXP`/`DEC`. |
| `status` | M | Lifecycle (§2.1). Default `catalogued`. |

### 2.1 Record lifecycle

`catalogued` → `under_test` → `feasible_confirmed` | `feasible_conditional` | `infeasible` | `deferred`

- **`catalogued`** — platform capability described and questions framed (the state of *every* row in this v0.1). No device test run.
- **`under_test`** — an owned `EXP` (TASK-009) is actively measuring the open questions on a target device.
- **`feasible_confirmed`** — all blocking questions resolved by evidence; usable in MVP. **No row may reach this state in this document** — it requires test artifacts that do not yet exist.
- **`feasible_conditional`** — usable only under stated constraints (e.g. "degrade gracefully when HealthKit read denied").
- **`infeasible` / `deferred`** — ruled out or postponed with a named reason and (for deferred) a revisit trigger.

> **Hard rule H1:** No `IOS-CAP` row advances past `under_test` inside this deliverable. Every row here is `catalogued`. Advancing a row requires a linked `EXP` with real device results (TASK-009), which this task does not produce and must not invent.

---

## 3. The capability inventory

Eight rows: the seven named surfaces plus the Identity layer (§3.8), which the PRD lists alongside sync in §6/Prompt 05 and on which HealthKit, notifications, and sync all depend.

### 3.1 IOS-CAP-01 — HealthKit `health_data: yes`

- **`framework`:** HealthKit (`HKHealthStore`), with the companion on-device store. `[platform-doc]`
- **`capability`:** A permissioned, per-type health data store. Can **read** and **write** typed samples (e.g. steps, active energy, sleep analysis, mindful minutes, body measurements, and reproductive-health categories including menstrual flow, basal body temperature, and symptom logs), run typed queries, and — with a background-delivery entitlement — receive observer updates when new samples of a granted type arrive. Also exposes workout sessions and (on supported hardware) higher-frequency signals. HerRays' relevance per `prd.md` §6 is the health-intelligence interface; per §10 the *interface* may be proprietary IP while the *store* is the OS's.
- **`permission_model`:**
  - **Entitlement:** HealthKit capability must be enabled on the App ID; a dedicated entitlement is required (and a separate one for clinical-health-records read, which HerRays should **not** request unless an explicit, gated capability needs it).
  - **`Info.plist`:** `NSHealthShareUsageDescription` (read) and `NSHealthUpdateUsageDescription` (write) — both mandatory, both shown to the user; a missing string is an App Store rejection and a runtime crash on request.
  - **Runtime:** `requestAuthorization(toShare:read:)` presents Apple's own permission sheet. **Critical semantics `[platform-doc]`:** (a) authorization is **per data type**; (b) the app **cannot tell whether a read type was denied vs. simply has no data** — a denied read looks identical to an empty store; (c) iOS **will not re-present** the sheet for a type the user already decided — re-requesting is silently a no-op, so a "grant later" flow must deep-link the user to Settings/Health, it cannot re-prompt; (d) write authorization *is* queryable.
  - **Denied/revoked/partial:** every HealthKit-dependent journey must function (degraded) when read is denied or the store is empty, and must never imply the app "knows" something it was not granted.
- **`data_boundary`:** Highest-sensitivity surface in the inventory. Reproductive-health and symptom data are special-category data under GDPR and sensitive under Apple's Health data policies (which **prohibit using Health/clinical data for advertising or sharing with third parties for marketing, and restrict use to health/fitness/research with consent**). `health_data: yes` → **hard gate**: no HealthKit integration may ship without the TASK-040 checklist cleared and R14 **and** R15 sign-off.
- **`offline_behavior`:** The store is on-device and fully available offline; *interpretation* that requires a backend is a separate (sync) concern.
- **`accessibility_note`:** Permission-sheet copy is Apple-controlled; HerRays' *pre-permission priming* screen must be VoiceOver-navigable and Dynamic-Type-safe (R13).
- **`feasibility_questions`:** IOS-Q-001, IOS-Q-002, IOS-Q-003, IOS-Q-004.
- **`boundary_refs`:** `→ TASK-040` (mandatory), `→ TASK-022`, `↔ TASK-037`, `↔ TASK-009`, `↔ TASK-030` (capability records that reference health signals).
- **`status`:** `catalogued`.

### 3.2 IOS-CAP-02 — Widgets `health_data: conditional`

- **`framework`:** WidgetKit + SwiftUI; App Intents for configuration and (on supported iOS) interactive widget controls. `[platform-doc]`
- **`capability`:** Home Screen, Lock Screen, and StandBy widgets that render a **timeline** of entries the app supplies; the system, not the app, decides refresh timing within a budget. Supports small/medium/large/accessory families, configurable parameters, and — on recent iOS — limited **in-widget interactivity** (buttons/toggles via App Intents) without launching the app. Relevant to the PRD's "minimal daily screen interaction" (Studio C, Invisible App) and glanceable progress.
- **`permission_model`:** **No user permission to display a widget.** Constraints are *technical budgets*, not consent: the system throttles timeline reloads (a limited number of refreshes per day; exact budget is OS-managed and not guaranteed), so a widget cannot be assumed to update in real time. If a widget shows health-derived content, it inherits HealthKit's consent gate and the **Lock Screen visibility** privacy concern (content visible without unlock).
- **`data_boundary`:** `health_data: conditional` — a widget that renders streak/progress is benign; one that renders cycle phase, symptoms, or any inferred health state is **visible on a locked device to anyone holding the phone** and must be treated as a privacy surface (redaction / opt-in / non-sensitive framing) → TASK-040.
- **`offline_behavior`:** Renders last-provided timeline offline; must never show stale data as if live (timestamp or freshness cue required).
- **`accessibility_note`:** Widgets must supply VoiceOver labels, respect Dynamic Type within the fixed widget canvas (truncation risk at large sizes), and meet contrast on arbitrary wallpapers (Lock Screen). Reduced-motion applies to any animated content. R13 lens.
- **`feasibility_questions`:** IOS-Q-005, IOS-Q-006, IOS-Q-003 (shared privacy-on-lock question).
- **`boundary_refs`:** `→ TASK-022`, `→ TASK-040` (if health content), `↔ TASK-037`, `↔ TASK-009`, `↔ TASK-045` (wireframe daily-home / insight screens may specify a widget).
- **`status`:** `catalogued`.

### 3.3 IOS-CAP-03 — Live Activities `health_data: conditional`

- **`framework`:** ActivityKit + WidgetKit (Lock Screen / Dynamic Island presentation); push updates via ActivityKit push tokens (APNs). `[platform-doc]`
- **`capability`:** A time-bounded, glanceable live session on the Lock Screen and Dynamic Island, updated either locally or via a dedicated high-priority push channel, for something **currently happening** (e.g. a guided-action timer, a breathing/mindful session, a "window to complete today's little win"). Not a general notification channel; Apple restricts it to genuinely live, time-sensitive activity.
- **`permission_model`:**
  - **`Info.plist`:** `NSSupportsLiveActivities` = YES to enable; (optional) frequent-update key affects push budget.
  - **User control:** The user can **disable Live Activities per app in Settings**; the app must handle being disabled. Push updates require the activity's push token and a separate APNs channel.
  - **No separate "allow" prompt** like notifications, but the system and user both constrain it; it must never be used as a notification-bypass (an App Store policy and user-trust risk).
- **`data_boundary`:** `health_data: conditional` — same locked-device visibility concern as widgets; a live "cycle" or symptom indicator on the Dynamic Island is a privacy exposure. Guided-session timers without health state are low-sensitivity.
- **`offline_behavior`:** Locally-updated activities continue offline; push-updated ones stall without network and must degrade honestly.
- **`accessibility_note`:** Dynamic Island and Lock Screen presentations need VoiceOver labels and reduced-motion-safe transitions; very small presentation sizes stress Dynamic Type and contrast. R13.
- **`feasibility_questions`:** IOS-Q-007, IOS-Q-008, IOS-Q-003.
- **`boundary_refs`:** `→ TASK-022`, `→ TASK-040` (if health content), `↔ TASK-037`, `↔ TASK-009`, `↔ TASK-046` ("Your Little Win Today" interaction may or may not warrant a Live Activity — an explicit open question, not an assumption).
- **`status`:** `catalogued`.

### 3.4 IOS-CAP-04 — Notifications `health_data: conditional`

- **`framework`:** UserNotifications (local + remote/APNs); Notification Service/Content extensions; provisional authorization; Time-Sensitive / interruption-level and Focus integration. `[platform-doc]`
- **`capability`:** Local notifications scheduled on-device (calendar/interval/location triggers) and remote push via APNs. Supports rich content, actions, grouping, interruption levels (passive / active / time-sensitive / critical), and **provisional authorization** (quiet delivery to Notification Center without an up-front prompt). Core to the PRD's reminders/re-entry journey (§5 journey 6) — and to its **anti-guilt** stance: reminders must not become nagging or shame cues (`prd.md` §6 "risks of guilt, compulsion, burden").
- **`permission_model`:**
  - **Runtime:** `requestAuthorization(options:)` presents the system prompt **once**; a denial is sticky and only reversible in Settings. **Provisional** authorization lets notifications arrive quietly without a prompt, converting to prominent only if the user keeps them — a lower-pressure pattern worth testing for the HerRays audience.
  - **Critical / Time-Sensitive:** critical alerts require a **special Apple-granted entitlement** (not appropriate unless a genuine safety case exists); time-sensitive level needs justification and can be overridden by the user's Focus settings.
  - **Denied/revoked:** the entire reminder journey must function when notifications are denied (in-app surfacing, widget fallback), never assume delivery, and never punish a user who disabled them.
- **`data_boundary`:** `health_data: conditional` — notification **content** can leak health state on the Lock Screen (e.g. "Time to log your period"). Sensitive content must use neutral copy and/or hidden-when-locked content; remote push means content may transit Apple's APNs and (if personalized server-side) HerRays' backend → TASK-040.
- **`offline_behavior`:** Local notifications fire offline; remote push requires network and is best-effort (no delivery guarantee) — a reminder system that *only* works via push is fragile.
- **`accessibility_note`:** Notification copy is read by VoiceOver; actionable notifications need accessible action labels. Tone/clarity is also a content-strategy concern (`↔ TASK-021`).
- **`feasibility_questions`:** IOS-Q-009, IOS-Q-010, IOS-Q-003.
- **`boundary_refs`:** `→ TASK-022`, `→ TASK-040`, `↔ TASK-021` (growth/UX-writing: lifecycle messaging tone), `↔ TASK-037`, `↔ TASK-009`.
- **`status`:** `catalogued`.

### 3.5 IOS-CAP-05 — Haptics `health_data: no`

- **`framework`:** Core Haptics (`CHHapticEngine`) for custom patterns; UIKit feedback generators (`UIImpactFeedbackGenerator`, `UINotificationFeedbackGenerator`, `UISelectionFeedbackGenerator`) for standard feedback. `[platform-doc]`
- **`capability`:** Programmatic tactile feedback — standard impact/selection/notification cues and, via Core Haptics, custom transient/continuous patterns synchronized with UI events (e.g. a completion "little win" confirmation per TASK-046). Hardware-dependent: the full Core Haptics engine requires a supported Taptic Engine; older or non-supporting devices degrade or no-op.
- **`permission_model`:** **No permission required.** Constraints are *hardware availability* and *user system settings*: the user's **System Haptics** toggle and accessibility settings can disable or alter haptics, and the app must check engine availability and **never make haptics the sole channel** for required feedback.
- **`data_boundary`:** `health_data: no`. Haptics carry no data off-device.
- **`offline_behavior`:** Fully local; always available offline on supported hardware.
- **`accessibility_note`:** **Haptics are an accessibility *affordance and* a risk.** They can aid users who miss visual cues, but must have a **visual + (optional) audible equivalent** (never haptic-only), must respect the system haptics/vibration settings, and must not be used in a way that fires excessively. Reduced-motion does not govern haptics, but a combined "reduce feedback" posture should. R13 lens.
- **`feasibility_questions`:** IOS-Q-011, IOS-Q-012.
- **`boundary_refs`:** `→ TASK-022`, `↔ TASK-046` (completion micro-interaction haptic), `↔ TASK-020` (visual/motion audit — haptic-motion pairing), `↔ TASK-037`, `↔ TASK-009`.
- **`status`:** `catalogued`.

### 3.6 IOS-CAP-06 — On-device processing `health_data: conditional`

- **`framework`:** Core ML / Create ML (on-device inference & optional on-device personalization), the Neural Engine, Natural Language, App Intents / Shortcuts, BackgroundTasks (`BGProcessingTask` / `BGAppRefreshTask`), and (where relevant) on-device foundation/vision frameworks exposed by the OS. `[platform-doc]`
- **`capability`:** Run inference, personalization, and lightweight intelligence **on-device**, keeping sensitive signals off any server — directly supporting the PRD's "on-device personalization" (§6) and the privacy-by-design posture §9 implies. Includes background execution windows for deferred processing (the OS, not the app, schedules them, with no guaranteed timing), and App-Intents exposure of actions to Siri/Shortcuts/Spotlight.
- **`permission_model`:**
  - **No single "ML permission."** Permissions attach to the **inputs**: HealthKit-sourced features inherit HealthKit consent; any Siri/Shortcuts exposure that acts on user data is gated by the relevant data's permission; background execution is governed by system budgets and the user's Background App Refresh setting (which the user can disable globally or per app).
  - **Denied/disabled:** if Background App Refresh is off, background processing simply will not run — any personalization that *depends* on it must have a foreground path.
- **`data_boundary`:** `health_data: conditional` — on-device processing is the **privacy-preferred** place to derive health insight (data never leaves the device), but an inference *about* health (e.g. a predicted symptom pattern) is itself health-adjacent and, if later synced or surfaced, re-enters the clinical/privacy gate. Any inference presented to the user must respect the **no-medical-claims boundary** (§9; → TASK-040).
- **`offline_behavior`:** Fully functional offline by design — a core advantage; the feasibility risk is *compute cost / thermals / battery*, not connectivity.
- **`accessibility_note`:** Indirect; any UI exposing an inference must meet the standard visible-surface obligations and must communicate uncertainty (not a false-precision number).
- **`feasibility_questions`:** IOS-Q-013, IOS-Q-014, IOS-Q-015.
- **`boundary_refs`:** `→ TASK-040` (clinical-claim and inference boundary — mandatory), `↔ TASK-030`/`↔ TASK-033` (capability mechanism & safety gate), `↔ TASK-037`, `↔ TASK-009`.
- **`status`:** `catalogued`.

### 3.7 IOS-CAP-07 — Sync interfaces `health_data: conditional`

- **`framework`:** CloudKit (incl. private/shared databases) and Core Data + CloudKit mirroring for Apple-account-scoped sync; alternatively a HerRays-owned backend sync API over HTTPS with background upload/download. `[platform-doc]` for the Apple options; the custom-backend option is an architecture decision, not an OS capability.
- **`capability`:** Keep user data consistent across a user's devices and/or a HerRays backend. **Two materially different interfaces** with different ownership and privacy profiles:
  - **CloudKit (private DB):** data stored in the user's own iCloud, Apple-account-scoped, **not readable by HerRays' servers** — strong privacy, but HerRays cannot operate on it server-side (no backend personalization, no clinician-facing view) and it is unavailable to users not signed into iCloud.
  - **HerRays backend sync:** HerRays controls the data (enables backend intelligence, clinician integration per §6 "clinical integration boundaries") but **takes on custodianship** of health-adjacent data — the heaviest privacy/regulatory obligation in the inventory.
- **`permission_model`:**
  - **CloudKit:** requires the iCloud/CloudKit entitlement and an **active iCloud account**; no separate in-app prompt, but the user controls iCloud at the system level and sync silently fails if iCloud is off/full.
  - **HerRays backend:** governed by HerRays' own authentication/identity (→ §3.8) and **explicit consent** for transmitting health-adjacent data off-device — a TASK-040 gate, with GDPR lawful-basis, residency, retention, and deletion all required *before* any such sync ships.
- **`data_boundary`:** `health_data: conditional → frequently yes`. The **moment health-adjacent data crosses the device boundary** (any option except purely-local), the clinical/privacy gate is mandatory. This is the single highest-stakes architecture choice in the inventory and must **not** be defaulted here. Per `prd.md` §4, HerRays must **never fabricate** retention/CAC/LTV or internal metrics derived from this data.
- **`offline_behavior`:** Sync is inherently network-dependent; the feasibility obligation is **offline-first local correctness** with conflict resolution on reconnect (last-writer-wins is often wrong for health logs).
- **`accessibility_note`:** Indirect; any sync-state or conflict UI must be accessible and must never block the user from logging offline.
- **`feasibility_questions`:** IOS-Q-016, IOS-Q-017, IOS-Q-018, IOS-Q-002 (shared with HealthKit: which signals are even allowed to sync).
- **`boundary_refs`:** `→ TASK-040` (mandatory), `↔ TASK-037` (a *major* build/buy/integrate axis: CloudKit = integrate, custom backend = build), `↔ TASK-009`, `↔ §3.8 Identity`.
- **`status`:** `catalogued`.

### 3.8 IOS-CAP-08 — Identity `health_data: no (but gates health data)`

- **`framework`:** Sign in with Apple (ASAuthorization), Keychain, optional passkeys/WebAuthn; HerRays account/identity service for backend-scoped data. `[platform-doc]` for the Apple pieces.
- **`capability`:** Establish *who* a user is so that sync (§3.7), clinician integration, and any backend personalization can be scoped and consented. Sign in with Apple offers a low-friction, privacy-forward identity (incl. email relay) and is **required by App Store policy if other third-party social logins are offered**. Included here because every health-data-crossing surface depends on a trustworthy identity boundary.
- **`permission_model`:** Sign in with Apple uses the system authorization flow (Face ID/Touch ID/passcode as the user's device gate); the app receives a stable, app-scoped user identifier and optionally a relayed email. Keychain access is governed by device unlock / biometric policy. No health permission here, but identity **is the gate** through which health-data custodianship is consented.
- **`data_boundary`:** `health_data: no` for the identity token itself, but identity is the **key that scopes** all health-adjacent backend data; a weak identity boundary is a privacy failure by proxy → TASK-040.
- **`offline_behavior`:** Cached credentials (Keychain) allow offline app use; re-auth requires network. Local-only use must be possible without forcing account creation up front (reduces onboarding friction and data collection — a §6 "minimize sensitive data" alignment).
- **`accessibility_note`:** The sign-in flow must be VoiceOver-complete and not trap users who decline; biometric prompts have system accessibility handling but the fallback path must be accessible.
- **`feasibility_questions`:** IOS-Q-019, IOS-Q-020.
- **`boundary_refs`:** `→ TASK-040`, `↔ TASK-037`, `↔ TASK-009`, `↔ §3.7 Sync`.
- **`status`:** `catalogued`.

---

## 4. Consolidated permission & entitlement register

A single auditable view of every consent/entitlement gate the inventory introduces, so that the **user-facing consent moments** can be designed deliberately (and minimally) rather than accumulating by accident. "Prompt semantics" captures the *irreversibility* risks that shape journey design.

| Surface | Entitlement / capability | `Info.plist` usage strings | Runtime prompt | Prompt semantics & denied-state obligation |
|---|---|---|---|---|
| HealthKit (3.1) | HealthKit capability (+ clinical-records entitlement only if explicitly needed) | `NSHealthShareUsageDescription`, `NSHealthUpdateUsageDescription` | `requestAuthorization(toShare:read:)` — Apple's per-type sheet | **Never re-prompts a decided type**; denied-read indistinguishable from empty; must deep-link to Settings and degrade gracefully. |
| Widgets (3.2) | None to display | — | None | No consent; budget-limited refresh; Lock-Screen content visible unlocked → redact sensitive content. |
| Live Activities (3.3) | `NSSupportsLiveActivities` | (that key) | None (user can disable per-app in Settings) | Must handle "disabled by user"; never a notification bypass. |
| Notifications (3.4) | APNs (for remote); critical-alert entitlement only with Apple approval | — | `requestAuthorization(options:)` **once**; provisional avoids prompt | Sticky denial → Settings only; full reminder journey must work when denied; neutral Lock-Screen copy. |
| Haptics (3.5) | None | — | None | Hardware + system-setting dependent; never the sole feedback channel. |
| On-device processing (3.6) | None singular; Background App Refresh (user-toggled) for background work | — | None (inputs carry their own permissions) | Background execution not guaranteed; must have a foreground path. |
| Sync (3.7) | CloudKit entitlement (for CloudKit) **or** HerRays backend auth | — | None for CloudKit (needs active iCloud); **explicit consent** for health-data backend sync | iCloud can be off/full → silent fail; backend health sync blocked until TASK-040 cleared + R14/R15. |
| Identity (3.8) | Sign in with Apple capability | — | System auth flow | Must allow local-only use without forced account; accessible decline path. |

**Register rules:**
- **PR1 — Minimum necessary.** Every entitlement and usage string must map to a *specific, decided* capability with a `CAP`/`OPP` basis. Requesting HealthKit types, critical-alert entitlement, or backend health sync "in case we need it" is a §6/§9 privacy violation and a §6 forbidden pattern (over-collection).
- **PR2 — One consent, one reason, in context.** Each prompt must be requested at a moment the user understands *why* (just-in-time priming), never batched at launch. (Design obligation flagged to WS07 studios and the wireframe spec, TASK-045.)
- **PR3 — Every denial has a designed path.** No surface may assume grant. The denied/revoked/partial column above is a build-readiness checklist item (Gate 5).
- **PR4 — Health entitlements are double-gated.** Any row touching health data requires both the technical entitlement **and** the TASK-040 checklist + R14/R15 sign-off before it is MVP-eligible — the entitlement alone is insufficient.

---

## 5. Feasibility-question register (`IOS-Q-NNN`)

The core risk-register output. Each question is a thing HerRays **does not yet know** and must resolve by **real device testing** (becoming an `EXP` in TASK-009), not by assertion. `block` severity: **B** = blocks MVP use of the surface until resolved; **C** = conditional (shapes design but not go/no-go); **I** = informational.

| ID | Surface | Open feasibility question | Test method (→ EXP) | Owner | Block |
|---|---|---|---|---|---|
| IOS-Q-001 | HealthKit | For the actual HerRays audience (midlife women), **what fraction of relevant signals are already present** in HealthKit vs. absent/manual? (A design assuming rich existing data may be empty in practice.) | Instrumented consented pilot measuring granted-type population at onboarding; never inferred from assumption. | R05 + R07 (UX research) | B |
| IOS-Q-002 | HealthKit / Sync | **Which specific health data types** may HerRays read/write/sync under Apple Health data policy *and* GDPR special-category rules, and which are prohibited for our use? | Policy review with R15 + R14 against Apple's current Health data guidelines and the TASK-040 checklist. | R15 | B |
| IOS-Q-003 | Widgets / Live Activities / Notifications | **What health-derived content, if any, may appear on a locked device** without violating privacy expectations? Where is redaction mandatory? | Privacy design review + user-perception check; TASK-040 gate. | R15 + R07 | B |
| IOS-Q-004 | HealthKit | Does **background delivery** of new samples fire reliably and within a useful window on target devices, or is it too delayed for timely reminders? | On-device observation over multi-day test with logging; measured, not assumed. | R05 | C |
| IOS-Q-005 | Widgets | What is the **real-world refresh frequency** achievable within the system timeline budget, and is it enough for the intended glanceable value (or does it mislead with stale data)? | Device measurement of actual reload cadence under normal usage. | R05 | C |
| IOS-Q-006 | Widgets | Can the **interactive widget** affordances (App-Intents buttons) deliver the "log a little win without opening the app" interaction on the chosen min-OS, and do they stay accessible? | Prototype on target OS + VoiceOver pass (TASK-022). | R05 + R13 | C |
| IOS-Q-007 | Live Activities | Is a Live Activity **appropriate and non-pressuring** for HerRays' use (guided session / daily window), or does a persistent Lock-Screen presence read as nagging/guilt (a §6 anti-pattern)? | Desirability check with representative users (TASK-048 territory); behavioral-scientist review. | R07 + behavioral scientist | B |
| IOS-Q-008 | Live Activities | What is the **update/push budget and battery cost** of a frequently-updated Live Activity, and does it stay within acceptable drain? | On-device power measurement (Instruments / energy log). | R05 | C |
| IOS-Q-009 | Notifications | Does **provisional (quiet) authorization** yield better long-run opt-in and lower guilt for this audience than an up-front prompt? | A/B-capable pilot comparing provisional vs. explicit; measured opt-in + sentiment, never fabricated. | R09 + R07 | C |
| IOS-Q-010 | Notifications | Can the full **reminders/re-entry journey degrade gracefully** when notifications are denied (in-app + widget fallback) with no loss of core value? | Build the denied-path and usability-test it (TASK-022/048). | R05 + R07 | B |
| IOS-Q-011 | Haptics | On the **range of devices** the audience actually uses, does the intended Core Haptics pattern render, and what is the correct degradation on non-supporting/older hardware? | Device-matrix test of pattern rendering + fallback. | R05 | C |
| IOS-Q-012 | Haptics | Is the completion haptic **felt as delight vs. annoyance**, and does a visual/audible equivalent fully substitute when haptics are off (accessibility)? | Perception test + R13 accessibility pass (no haptic-only path). | R07 + R13 | B |
| IOS-Q-013 | On-device processing | Is the intended personalization/inference **actually achievable on-device** within memory/thermal/battery limits on mid-tier target hardware, or does it require a server (re-opening the privacy gate)? | On-device benchmark of the candidate model/computation; measured, not assumed. | R05 | B |
| IOS-Q-014 | On-device processing | Does **Background App Refresh** run often enough (and does disabling it degrade acceptably) for any personalization that leans on background compute? | Multi-day on-device scheduling observation incl. BGAppRefresh-off case. | R05 | C |
| IOS-Q-015 | On-device processing | Can any user-facing inference be framed **without an implied medical claim** and with honest uncertainty (§9 boundary)? | Clinical + content review (R14 + content strategist); TASK-040 + TASK-033 safety gate. | R14 | B |
| IOS-Q-016 | Sync | **CloudKit vs. HerRays-backend vs. local-only** — which sync interface meets the data-ownership, clinician-integration, and privacy obligations with the least custodianship risk? (A build/buy/integrate axis, not a default.) | Architecture evaluation via TASK-037 matrix + TASK-040 gate; decision recorded as `DEC`. | R06 + R15 | B |
| IOS-Q-017 | Sync | What is the correct **conflict-resolution** policy for health logs edited on multiple devices offline (last-writer-wins is often wrong)? | Design + test of merge semantics against realistic multi-device scenarios. | R06 | C |
| IOS-Q-018 | Sync | Does the app remain **fully usable offline-first** (log, view, get value) with sync as an enhancement, not a dependency? | Offline-mode usability test. | R05 + R07 | B |
| IOS-Q-019 | Identity | Can users get **core daily value without being forced to create an account** up front (minimize data, reduce friction), with a clean later upgrade to synced/identified? | Onboarding flow test measuring drop-off and data-minimization posture. | R07 + R06 | C |
| IOS-Q-020 | Identity | Does the identity boundary adequately **scope and protect** any backend health-adjacent data (authz, session, revocation)? | Security review (backend + privacy). | R06 + R15 | B |

**Register discipline:** every row above is **open** — none carries a resolved answer, because no HerRays device test has been run. Resolving any row produces an `EXP`/`DEC` in TASK-009 with real artifacts; copying a presumed answer into this table is a forbidden value (§6, F-2).

---

## 6. No-fabrication statement & forbidden-value catalogue

**No-fabrication statement.** This deliverable asserts **no measured performance, no confirmed on-device behavior, no clinical determination, and no completed test**. Every platform property is either a capability *description* from Apple's public developer documentation (tagged `[platform-doc]`, describing what the OS offers, not what HerRays has verified) or an explicit **open feasibility question** (§5) routed to a future device test. No battery figure, latency number, refresh-rate guarantee, VoiceOver result, HealthKit coverage statistic, retention/CAC/LTV, or clinical outcome is stated as fact. No surface is marked feasible. No audience data is invented.

| # | Forbidden value / pattern | Why it fails | Correct form |
|---|---|---|---|
| F-1 | Stating a measured number (latency, battery %, refresh/day, coverage %) as fact | No device test exists; violates §4 / §11 | An `IOS-Q` with a test method and `open-question` value |
| F-2 | Marking a feasibility question "resolved / yes it works" without an `EXP` artifact | Fabricated verification; §11 "polished unsupported reports do not pass" | Leave `open`; resolve only via TASK-009 `EXP` with real results |
| F-3 | Advancing any `IOS-CAP` row to `feasible_confirmed` here | Violates hard rule H1 — requires nonexistent test data | Max state in this doc is `catalogued` |
| F-4 | Requesting a health entitlement / data type "to be safe" | Over-collection; §6/§9 privacy gate | Map every entitlement to a decided `CAP`/`OPP` (PR1) |
| F-5 | Designing a surface that assumes a permission is granted | Ignores sticky-denial semantics; Gate-5 risk | Every surface documents its denied/revoked/partial path (PR3) |
| F-6 | Treating a user-facing inference as a medical claim / asserting clinical meaning | §9 non-compensable clinical gate | Route to R14 + TASK-040; frame with uncertainty, no medical claim (IOS-Q-015) |
| F-7 | An `IOS-CAP` row with zero feasibility questions | Implies untested certainty | Every surface carries ≥1 `IOS-Q` |
| F-8 | Pinning an exact minimum-OS / API-availability year from memory as fact | Unverifiable claim risk (§1.3) | Resolve against Apple's official availability docs at build time (feasibility question) |
| F-9 | Choosing a sync interface (CloudKit vs backend) by default here | Highest-stakes privacy/ownership decision; must be gated | Route to IOS-Q-016 / TASK-037 / TASK-040, recorded as a `DEC` |

---

## 7. Dependencies, open unknowns, and change log

### 7.1 Dependencies

- **Feeds (supplies feasibility inputs to):** TASK-037 build/buy/integrate/defer matrix (its §2 P3 and §3 scoring basis cite "TASK-039 feasibility note"); TASK-038 phased purchasing (native capabilities are free entitlements, framing which paid tools are even needed); TASK-045 eight-screen wireframe spec and TASK-046 "Your Little Win Today" (which surfaces/haptics/widgets they may specify); the WS05 reference architecture, risk register, and cost scenarios (sibling Prompt-05 outputs).
- **Consumes / must align with:** TASK-040 privacy & clinical boundary checklist (**mandatory** gate for every `health_data: yes/conditional` surface — this inventory *calls* it, does not define it); TASK-022 iOS/accessibility audit template (the test instrument for the accessibility questions); TASK-033 capability safety gate; TASK-030 capability mechanism records (which name the health signals a surface would touch); TASK-004 evidence grading (device-test results graded there); TASK-009 decision/experiment registers (where every `IOS-Q` resolves).
- **Governance:** R05 accountable; R06 co-owner (sync/identity); R14 + R15 mandatory co-signers for health surfaces; R13 for accessibility feasibility; Program Director for Gate-5 build-readiness.

### 7.2 Open unknowns (program-level, beyond the per-surface `IOS-Q` register)

- **Deployment minimum-OS target** is undecided (gates Live Activities, interactive widgets, some on-device frameworks) — `→ TASK-037`/architecture. Recorded, not assumed (F-8).
- **Real device matrix** of the HerRays audience (which iPhones, which OS versions) is unknown and shapes IOS-Q-011/013; to be sourced from WS04 user research, not guessed.
- **Sync architecture** (IOS-Q-016) is the single largest open decision and is deliberately left open here.
- **Whether HerRays maintains a backend at all** for health data (vs. local/CloudKit-only) is a strategy decision upstream of this inventory.

### 7.3 Change log

| Version | Date | Change | Author role |
|---|---|---|---|
| 0.1 | 2026-11-23 | Initial inventory: 8 `IOS-CAP` surfaces (HealthKit, Widgets, Live Activities, Notifications, Haptics, On-device processing, Sync, Identity) catalogued with permission/entitlement contracts; consolidated permission register (§4); 20-item feasibility-question register (§5); no-fabrication catalogue (§6). All rows `catalogued`; no capability confirmed feasible. | iOS engineer (R05) |

---

*End of TASK-039 deliverable. This document catalogues platform capabilities and frames the questions that must be answered on real devices; it confirms no feasibility, builds nothing, and asserts no measured, clinical, or audience result. Advancing any surface beyond `catalogued` requires a linked `EXP` with real device evidence (TASK-009).*
