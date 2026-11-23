import { useCallback, useMemo, useRef, useState } from 'react'
import {
  buildExportRecord,
  computeResult,
  DIMENSIONS,
  DISCLAIMER,
  type DimensionId,
  type ScoreValue,
  type Scores,
} from './scoring'
import './CapabilityScorecard.css'

const SCORE_OPTIONS: readonly ScoreValue[] = [1, 2, 3, 4, 5]

/** Accessible 1–5 rating control: a keyboard-navigable radio group. */
function RatingSelect({
  value,
  onChange,
  labelId,
  anchors,
}: {
  value: ScoreValue | undefined
  onChange: (next: ScoreValue) => void
  labelId: string
  anchors: Readonly<Record<ScoreValue, string>>
}) {
  const move = (delta: number) => {
    const current = value ?? 0
    const next = Math.min(5, Math.max(1, current + delta)) as ScoreValue
    onChange(next)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        event.preventDefault()
        move(1)
        break
      case 'ArrowLeft':
      case 'ArrowDown':
        event.preventDefault()
        move(-1)
        break
      case 'Home':
        event.preventDefault()
        onChange(1)
        break
      case 'End':
        event.preventDefault()
        onChange(5)
        break
      default:
        break
    }
  }

  // Roving tabindex: the selected option is focusable; if none selected, the
  // first option takes the tab stop so keyboard users can enter the group.
  const focusTarget = value ?? 1

  return (
    <div
      role="radiogroup"
      aria-labelledby={labelId}
      className="rating"
      onKeyDown={handleKeyDown}
    >
      {SCORE_OPTIONS.map((option) => {
        const selected = value === option
        return (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={selected}
            aria-label={`${option} out of 5 — ${anchors[option]}`}
            title={anchors[option]}
            tabIndex={option === focusTarget ? 0 : -1}
            className={`rating-dot${selected ? ' is-selected' : ''}${
              value != null && option <= value ? ' is-filled' : ''
            }`}
            onClick={() => onChange(option)}
          >
            <span aria-hidden="true">{option}</span>
          </button>
        )
      })}
    </div>
  )
}

/** Semicircular gauge for the 0–100 score. */
function Gauge({ value }: { value: number | null }) {
  const radius = 80
  const circumference = Math.PI * radius // semicircle
  const pct = value ?? 0
  const dash = (pct / 100) * circumference

  return (
    <svg
      className="gauge"
      viewBox="0 0 200 110"
      role="img"
      aria-label={
        value == null
          ? 'Overall score not yet available'
          : `Overall score ${value} out of 100`
      }
    >
      <path
        className="gauge-track"
        d="M 20 100 A 80 80 0 0 1 180 100"
        fill="none"
        strokeWidth="14"
        strokeLinecap="round"
      />
      <path
        className="gauge-fill"
        d="M 20 100 A 80 80 0 0 1 180 100"
        fill="none"
        strokeWidth="14"
        strokeLinecap="round"
        strokeDasharray={`${dash} ${circumference}`}
      />
    </svg>
  )
}

type Feedback = { kind: 'ok' | 'error'; message: string } | null

function CapabilityScorecard() {
  const [capability, setCapability] = useState('')
  const [scores, setScores] = useState<Scores>({})
  const [feedback, setFeedback] = useState<Feedback>(null)
  const feedbackTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const result = useMemo(() => computeResult(scores), [scores])

  const setScore = useCallback((id: DimensionId, value: ScoreValue) => {
    setScores((prev) => ({ ...prev, [id]: value }))
  }, [])

  const reset = useCallback(() => {
    setScores({})
    setCapability('')
    setFeedback(null)
  }, [])

  const flash = useCallback((next: NonNullable<Feedback>) => {
    setFeedback(next)
    if (feedbackTimer.current) clearTimeout(feedbackTimer.current)
    feedbackTimer.current = setTimeout(() => setFeedback(null), 2600)
  }, [])

  const exportJson = useMemo(() => {
    const record = buildExportRecord(capability, scores, new Date())
    return record ? JSON.stringify(record, null, 2) : null
  }, [capability, scores])

  const handleCopy = useCallback(async () => {
    if (!exportJson) return
    try {
      await navigator.clipboard.writeText(exportJson)
      flash({ kind: 'ok', message: 'Rating copied to clipboard as JSON.' })
    } catch {
      flash({
        kind: 'error',
        message: 'Clipboard unavailable — use Download instead.',
      })
    }
  }, [exportJson, flash])

  const handleDownload = useCallback(() => {
    if (!exportJson) return
    const blob = new Blob([exportJson], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const safeName =
      capability.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') ||
      'capability'
    const anchor = document.createElement('a')
    anchor.href = url
    anchor.download = `scorecard-${safeName}.json`
    document.body.appendChild(anchor)
    anchor.click()
    anchor.remove()
    URL.revokeObjectURL(url)
    flash({ kind: 'ok', message: 'Rating downloaded as JSON.' })
  }, [exportJson, capability, flash])

  const progressPct = (result.scoredCount / result.totalCount) * 100

  return (
    <div className="scorecard">
      <header className="scorecard-head">
        <p className="eyebrow">Capability Extraction · TASK-034</p>
        <h1>Capability Evaluation Scorecard</h1>
        <p className="lede">
          Score a candidate capability 1–5 across six weighted dimensions. The
          weighted average is normalized to a 0–100 rating you can export. This
          is a judgement instrument, not a source of evidence.
        </p>
      </header>

      <div className="scorecard-grid">
        <section className="panel dimensions" aria-label="Scoring dimensions">
          <label className="capability-field">
            <span className="field-label">Capability under evaluation</span>
            <input
              type="text"
              value={capability}
              onChange={(event) => setCapability(event.target.value)}
              placeholder="e.g. Flexible weekly consistency (adapted from streaks)"
              autoComplete="off"
              spellCheck={false}
            />
          </label>

          <ol className="dimension-list">
            {DIMENSIONS.map((dimension) => {
              const labelId = `dim-${dimension.id}`
              const value = scores[dimension.id]
              const weightPct = Math.round(dimension.weight * 100)
              return (
                <li key={dimension.id} className="dimension-row">
                  <div className="dimension-info">
                    <div className="dimension-title">
                      <span id={labelId} className="dimension-name">
                        {dimension.label}
                      </span>
                      <span className="weight-chip" title={dimension.prdRef}>
                        {weightPct}%
                      </span>
                    </div>
                    <p className="dimension-question">{dimension.question}</p>
                  </div>
                  <div className="dimension-control">
                    <RatingSelect
                      value={value}
                      onChange={(next) => setScore(dimension.id, next)}
                      labelId={labelId}
                      anchors={dimension.anchors}
                    />
                    <p className="anchor-hint" aria-hidden={value == null}>
                      {value != null ? dimension.anchors[value] : 'Not yet scored'}
                    </p>
                  </div>
                </li>
              )
            })}
          </ol>
        </section>

        <aside className="panel summary" aria-label="Overall result">
          <div className="gauge-wrap">
            <Gauge value={result.score0to100} />
            <div className="gauge-center">
              <span className="score-number">
                {result.score0to100 ?? '—'}
              </span>
              <span className="score-unit">/ 100</span>
            </div>
          </div>

          <div
            className={`band-pill${result.band ? ` band-${result.band.id}` : ' band-empty'}`}
            role="status"
          >
            {result.band ? result.band.label : `${result.scoredCount} of ${result.totalCount} scored`}
          </div>
          <p className="band-guidance">
            {result.band
              ? result.band.guidance
              : 'Score every dimension to unlock the 0–100 rating and export.'}
          </p>

          <div className="progress" aria-hidden="true">
            <div className="progress-fill" style={{ width: `${progressPct}%` }} />
          </div>

          <dl className="readout">
            <div>
              <dt>Weighted average</dt>
              <dd>
                {result.weightedAverage != null
                  ? `${result.weightedAverage.toFixed(2)} / 5`
                  : '—'}
              </dd>
            </div>
            <div>
              <dt>Normalized</dt>
              <dd>1★ = 0 · 5★ = 100</dd>
            </div>
          </dl>

          {result.complete && (
            <ul className="contribution-list" aria-label="Weighted contributions">
              {result.contributions.map((contribution) => {
                const dimension = DIMENSIONS.find((d) => d.id === contribution.id)!
                return (
                  <li key={contribution.id}>
                    <span className="contribution-label">{dimension.short}</span>
                    <span className="contribution-bar">
                      <span
                        className="contribution-bar-fill"
                        style={{ width: `${contribution.share * 100}%` }}
                      />
                    </span>
                    <span className="contribution-value">
                      {contribution.weighted.toFixed(2)}
                    </span>
                  </li>
                )
              })}
            </ul>
          )}

          <div className="actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleCopy}
              disabled={!result.complete}
            >
              Copy JSON
            </button>
            <button
              type="button"
              className="btn"
              onClick={handleDownload}
              disabled={!result.complete}
            >
              Download
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={reset}
              disabled={result.scoredCount === 0 && capability === ''}
            >
              Reset
            </button>
          </div>

          <p
            className={`feedback${feedback ? ` feedback-${feedback.kind}` : ''}`}
            role="status"
            aria-live="polite"
          >
            {feedback?.message ?? ' '}
          </p>
        </aside>
      </div>

      <footer className="scorecard-foot">
        <p className="method">
          <strong>Method.</strong> Weighted average ={' '}
          Σ(score × weight) with weights summing to 1, then 0–100 ={' '}
          ((average − 1) ÷ 4) × 100. Weights are PRD §5 capability-review values.
        </p>
        <p className="disclaimer">{DISCLAIMER}</p>
      </footer>
    </div>
  )
}

export default CapabilityScorecard
