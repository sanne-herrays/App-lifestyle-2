import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent as ReactKeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from 'react'
import { fireHaptic, hapticsSupported } from './haptics'
import './LittleWinToday.css'

/**
 * "Your Little Win Today" — standalone completion microinteraction (TASK-046).
 *
 * A slide-to-complete gesture paired with an equal tap button. On completion it
 * delivers the little-win contract defined in the eight-screen wireframe spec
 * (§6 I2 / A1–A4):
 *   (a) a clear VISUAL confirmation (ray-burst + check + copy);
 *   (b) an OPTIONAL subtle haptic that honors the user's setting;
 *   (c) a REDUCED-MOTION fallback (static cross-fade, no travel/bloom) — honored
 *       from the OS setting and previewable via an in-component toggle;
 *   (d) a non-haptic, non-color-only signal (icon + text) perceivable to all;
 *   and it never blocks — it auto-settles, is dismissible, and returns focus.
 *
 * This component has NO dependency on the rest of the app: it owns its own
 * state, styles and copy and can be dropped onto the First Action or Guided
 * Habit surfaces, or run in isolation for review/testing.
 *
 * Nothing here fabricates research: the sample "wins" are illustrative UI copy,
 * clearly labelled, and carry no health-benefit claim (RULE-5).
 */

type Phase = 'ready' | 'completing' | 'done' | 'deferred'

interface Win {
  readonly id: string
  readonly eyebrow: string
  readonly title: string
  /** One neutral line on why it is small/doable — never a health claim. */
  readonly why: string
  readonly estimate: string
}

/** Illustrative sample content — not prescribed features, not research data. */
const WINS: readonly Win[] = [
  {
    id: 'step-outside',
    eyebrow: 'Your little win today',
    title: 'Step outside for two minutes',
    why: 'Just a small pause between the things on your list.',
    estimate: '2 min',
  },
  {
    id: 'one-glass-water',
    eyebrow: 'Your little win today',
    title: 'Pour yourself a glass of water',
    why: 'One easy thing you can do right now.',
    estimate: '1 min',
  },
  {
    id: 'three-slow-breaths',
    eyebrow: 'Your little win today',
    title: 'Take three slow breaths',
    why: 'A tiny reset, wherever you are.',
    estimate: '30 sec',
  },
]

/** Warm, specific, never hollow or over-praising (§3.7). */
const DONE_LINES = [
  'Nice — that’s today’s little win.',
  'Done. That one’s yours.',
  'Lovely. Small thing, done.',
] as const

const THUMB_PX = 56
const COMPLETE_THRESHOLD = 0.9
const ARM_THRESHOLD = 0.55

const clamp = (n: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, n))

function prefersReducedMotionNow(): boolean {
  return (
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

/** HerRays sunburst — the celebratory "rays" that bloom on completion. */
function RayBurst({ active }: { active: boolean }) {
  const rays = Array.from({ length: 12 }, (_, i) => i)
  return (
    <svg
      className={`lw-rays${active ? ' is-active' : ''}`}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      {rays.map((i) => (
        <line
          key={i}
          x1="60"
          y1="60"
          x2="60"
          y2="14"
          className="lw-ray"
          transform={`rotate(${i * 30} 60 60)`}
          style={{ animationDelay: `${i * 18}ms` }}
        />
      ))}
    </svg>
  )
}

function CheckMark({ active }: { active: boolean }) {
  return (
    <svg
      className={`lw-check${active ? ' is-active' : ''}`}
      viewBox="0 0 52 52"
      aria-hidden="true"
      focusable="false"
    >
      <circle className="lw-check-ring" cx="26" cy="26" r="24" fill="none" strokeWidth="3" />
      <path
        className="lw-check-tick"
        d="M15 27 l8 8 l15 -16"
        fill="none"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function LittleWinToday() {
  const [winIndex, setWinIndex] = useState(0)
  const [phase, setPhase] = useState<Phase>('ready')
  const [progress, setProgress] = useState(0)
  const [dragging, setDragging] = useState(false)
  const [haptic, setHaptic] = useState(() => hapticsSupported())
  const [osReduced, setOsReduced] = useState(prefersReducedMotionNow)
  const [forceReduced, setForceReduced] = useState(false)

  const thumbRef = useRef<HTMLButtonElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const resetRef = useRef<HTMLButtonElement>(null)
  const tickedRef = useRef(false)
  const phaseRef = useRef<Phase>('ready')
  const didMount = useRef(false)

  phaseRef.current = phase
  const reduceMotion = osReduced || forceReduced
  const win = WINS[winIndex % WINS.length] ?? WINS[0]!
  const doneLine = DONE_LINES[winIndex % DONE_LINES.length] ?? DONE_LINES[0]

  // Keep the OS reduced-motion preference live.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return
    }
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onChange = (event: MediaQueryListEvent) => setOsReduced(event.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const complete = useCallback(() => {
    if (phaseRef.current !== 'ready') return
    setDragging(false)
    setProgress(1)
    fireHaptic('success', haptic)
    setPhase('completing')
  }, [haptic])

  // 'completing' is a brief settling beat before the confirmation is announced;
  // under reduced motion it resolves immediately (static cross-fade).
  useEffect(() => {
    if (phase !== 'completing') return
    const delay = reduceMotion ? 0 : 560
    const timer = window.setTimeout(() => setPhase('done'), delay)
    return () => window.clearTimeout(timer)
  }, [phase, reduceMotion])

  // Return focus so a keyboard / VoiceOver user is never stranded (AX-7).
  useEffect(() => {
    if (phase === 'done') resetRef.current?.focus()
  }, [phase])

  useEffect(() => {
    if (!didMount.current) {
      didMount.current = true
      return
    }
    if (phase === 'ready') thumbRef.current?.focus()
  }, [phase])

  const reset = useCallback(() => {
    tickedRef.current = false
    setProgress(0)
    setWinIndex((i) => i + 1)
    setPhase('ready')
  }, [])

  const backToReady = useCallback(() => {
    tickedRef.current = false
    setProgress(0)
    setPhase('ready')
  }, [])

  const defer = useCallback(() => {
    if (phaseRef.current !== 'ready') return
    setProgress(0)
    setPhase('deferred')
  }, [])

  // ---- pointer (swipe) handlers ----
  const onPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (phase !== 'ready') return
    event.currentTarget.setPointerCapture(event.pointerId)
    setDragging(true)
  }

  const onPointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (!dragging || phase !== 'ready') return
    const track = trackRef.current
    if (!track) return
    const rect = track.getBoundingClientRect()
    const usable = rect.width - THUMB_PX
    const next = usable > 0 ? clamp((event.clientX - rect.left - THUMB_PX / 2) / usable, 0, 1) : 0
    if (!tickedRef.current && next >= ARM_THRESHOLD) {
      tickedRef.current = true
      fireHaptic('tick', haptic)
    } else if (tickedRef.current && next < ARM_THRESHOLD) {
      tickedRef.current = false
    }
    setProgress(next)
  }

  const endDrag = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (!dragging) return
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
    setDragging(false)
    if (progress >= COMPLETE_THRESHOLD) {
      complete()
    } else {
      tickedRef.current = false
      setProgress(0)
    }
  }

  // ---- keyboard: the slide thumb is also a real button ----
  const onThumbKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    if (phase !== 'ready') return
    switch (event.key) {
      case 'Enter':
      case ' ':
      case 'End':
        event.preventDefault()
        complete()
        break
      case 'ArrowRight':
      case 'ArrowUp': {
        event.preventDefault()
        const next = clamp(progress + 0.15, 0, 1)
        if (next >= COMPLETE_THRESHOLD) complete()
        else setProgress(next)
        break
      }
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault()
        setProgress((p) => clamp(p - 0.15, 0, 1))
        break
      case 'Home':
        event.preventDefault()
        setProgress(0)
        break
      default:
        break
    }
  }

  const trackStyle: CSSProperties = { '--lw-thumb': `${THUMB_PX}px` } as CSSProperties
  const thumbStyle: CSSProperties = {
    left: `calc(${progress} * (100% - var(--lw-thumb)))`,
  }
  const fillStyle: CSSProperties = { width: `calc(${progress} * 100%)` }
  const settled = phase === 'completing' || phase === 'done'

  return (
    <section
      className={`little-win${reduceMotion ? ' reduce-motion' : ''}`}
      aria-labelledby="lw-heading"
    >
      <header className="lw-head">
        <p className="lw-eyebrow">Concept Innovation · TASK-046</p>
        <h1 id="lw-heading">“Your Little Win Today” interaction</h1>
        <p className="lw-lede">
          A standalone swipe-or-tap completion moment. Slide the control or press{' '}
          <em>Mark done</em>; either completes the win with a visual confirmation,
          an optional haptic, and a reduced-motion fallback — with no dependency on
          the rest of the app.
        </p>
      </header>

      <div className="lw-stage">
        <article
          className={`lw-card phase-${phase}${dragging ? ' is-dragging' : ''}`}
          aria-live="off"
        >
          {/* ---------- the win itself ---------- */}
          <div className="lw-win" hidden={settled}>
            <div className="lw-win-top">
              <span className="lw-win-eyebrow">{win.eyebrow}</span>
              <span className="lw-estimate" aria-label={`About ${win.estimate}`}>
                {win.estimate}
              </span>
            </div>
            <h2 className="lw-title">{win.title}</h2>
            <p className="lw-why">{win.why}</p>

            {/* ---------- slide-to-complete (the swipe affordance) ---------- */}
            <div
              className="lw-track"
              ref={trackRef}
              style={trackStyle}
              data-armed={progress >= ARM_THRESHOLD}
            >
              <div className="lw-fill" style={fillStyle} aria-hidden="true" />
              <span className="lw-track-hint" aria-hidden="true">
                Slide to complete
                <span className="lw-chevrons">›››</span>
              </span>
              <button
                type="button"
                ref={thumbRef}
                className="lw-thumb"
                style={thumbStyle}
                role="slider"
                aria-label={`Slide to mark done: ${win.title}`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress * 100)}
                aria-valuetext={`${Math.round(progress * 100)} percent — press to complete`}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                onKeyDown={onThumbKeyDown}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path
                    d="M9 6 l6 6 l-6 6"
                    fill="none"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* ---------- equal tap target (gesture-equivalence, §3.6/AX-1) ---------- */}
            <button type="button" className="lw-mark-done" onClick={complete}>
              Mark done
            </button>
            <button type="button" className="lw-not-now" onClick={defer}>
              Not now
            </button>
          </div>

          {/* ---------- completion confirmation (visual + announced) ---------- */}
          <div className="lw-confirm" hidden={!settled} role="status" aria-live="polite">
            <div className="lw-confirm-art">
              <RayBurst active={settled} />
              <CheckMark active={settled} />
            </div>
            {phase === 'done' && (
              <div className="lw-confirm-text">
                <p className="lw-confirm-line">{doneLine}</p>
                <p className="lw-confirm-sub">{win.title}</p>
                <button type="button" ref={resetRef} className="lw-again" onClick={reset}>
                  Do another
                </button>
              </div>
            )}
          </div>

          {/* ---------- deferred (no penalty, no guilt copy — RULE-4) ---------- */}
          <div className="lw-deferred" hidden={phase !== 'deferred'} role="status">
            <p className="lw-confirm-line">No rush — it’ll be here when you are.</p>
            <button type="button" className="lw-again" onClick={backToReady}>
              Actually, I’ll do it
            </button>
          </div>
        </article>

        {/* ---------- reviewer controls (prototype affordances) ---------- */}
        <aside className="lw-controls" aria-label="Prototype controls">
          <label className="lw-switch">
            <input
              type="checkbox"
              checked={haptic}
              onChange={(e) => setHaptic(e.target.checked)}
            />
            <span className="lw-switch-track" aria-hidden="true" />
            <span className="lw-switch-label">
              Haptic feedback
              {!hapticsSupported() && (
                <em className="lw-switch-note"> (not available on this device)</em>
              )}
            </span>
          </label>

          <label className="lw-switch">
            <input
              type="checkbox"
              checked={forceReduced}
              onChange={(e) => setForceReduced(e.target.checked)}
            />
            <span className="lw-switch-track" aria-hidden="true" />
            <span className="lw-switch-label">
              Preview reduced motion
              {osReduced && <em className="lw-switch-note"> (your system already asks for this)</em>}
            </span>
          </label>

          <p className="lw-controls-note">
            Reduced motion removes the slide travel and ray-burst, swapping in a
            static cross-fade. Completion stays confirmed by the check, the text,
            and the VoiceOver announcement — never by color or motion alone.
          </p>
        </aside>
      </div>

      <footer className="lw-foot">
        <p>
          <strong>Contract honored (wireframe spec §6 I2 / A1–A4):</strong>{' '}
          visual confirmation; optional system-honoring haptic; reduced-motion
          fallback; a non-haptic, non-color-only signal; swipe paired with an
          equal <em>Mark done</em> tap target; ≥44&nbsp;pt targets; an announced
          “done” for assistive technology; and a non-blocking moment that returns
          focus.
        </p>
        <p className="lw-foot-note">
          Sample win copy is illustrative prototype content, not research or a
          health claim. Haptics use the Web Vibration API as the browser analog of
          iOS feedback generators.
        </p>
      </footer>
    </section>
  )
}

export default LittleWinToday
