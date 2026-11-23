/**
 * Optional haptic feedback for the "Your Little Win Today" microinteraction
 * (TASK-046).
 *
 * This web prototype uses the W3C Vibration API as the browser-available analog
 * of the real iOS behavior. On device, these semantic events map to Apple's
 * feedback generators (documented here so a native port honors the same intent):
 *   - 'tick'    → UISelectionFeedbackGenerator.selectionChanged()  (slide detent)
 *   - 'success' → UINotificationFeedbackGenerator(.success)        (completion)
 *
 * Haptics are strictly OPTIONAL and never the sole success signal: completion is
 * always ALSO confirmed visually and announced to assistive technology (AX-8).
 * Per the little-win contract (wireframe spec §6 I2), the cue must honor the
 * user's setting. This helper therefore fires only when the caller has haptics
 * enabled AND the platform supports vibration; it no-ops safely otherwise and
 * never throws.
 */

export type HapticEvent = 'tick' | 'success'

/** Vibration patterns in milliseconds (W3C Vibration API). Deliberately subtle. */
const PATTERNS: Readonly<Record<HapticEvent, number | number[]>> = {
  tick: 8,
  success: [14, 40, 22],
}

/** Whether the platform exposes the Vibration API at all (for UI hinting). */
export function hapticsSupported(): boolean {
  return (
    typeof navigator !== 'undefined' && typeof navigator.vibrate === 'function'
  )
}

/**
 * Fire a haptic cue iff the caller enabled haptics and the platform supports
 * them. Returns whether a cue was dispatched — callers must not depend on the
 * return value for correctness (the visual + announced confirmation is the
 * source of truth), only for optional telemetry.
 */
export function fireHaptic(event: HapticEvent, enabled: boolean): boolean {
  if (!enabled || !hapticsSupported()) return false
  try {
    return navigator.vibrate(PATTERNS[event])
  } catch {
    return false
  }
}
