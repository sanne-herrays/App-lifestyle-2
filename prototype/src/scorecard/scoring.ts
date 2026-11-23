/**
 * Capability Evaluation Scorecard — scoring model (TASK-034)
 *
 * Pure, side-effect-free scoring logic so the calculation is independently
 * reviewable and testable, separate from the React view.
 *
 * Weights are taken verbatim from PRD §5 (Phase 4: capability review):
 *   user value 25% · behavioral evidence 20% · experience quality 15% ·
 *   differentiation 15% · long-term usefulness 15% · feasibility 10%.
 *
 * The PRD is explicit that these weights are "a proposed prioritization
 * heuristic, not a validated scientific instrument." This module encodes the
 * heuristic faithfully and fabricates no data: every score is a judgement the
 * evaluator enters by hand, never an observed research result.
 */

export type DimensionId =
  | 'userValue'
  | 'evidence'
  | 'experience'
  | 'differentiation'
  | 'longTerm'
  | 'feasibility'

/** The 1–5 rating a dimension can take. `null`/absent means "not yet scored". */
export type ScoreValue = 1 | 2 | 3 | 4 | 5

export interface Dimension {
  readonly id: DimensionId
  /** Full label shown in the row header. */
  readonly label: string
  /** Compact label used in the export record and contribution bars. */
  readonly short: string
  /** Weight in the 0–1 range. All six weights sum to exactly 1. */
  readonly weight: number
  /** Where the weight / lens comes from in the PRD. */
  readonly prdRef: string
  /** The evaluative question this dimension asks. */
  readonly question: string
  /** Rubric anchors for each 1–5 level (definitions, not observations). */
  readonly anchors: Readonly<Record<ScoreValue, string>>
}

export const DIMENSIONS: readonly Dimension[] = [
  {
    id: 'userValue',
    label: 'User value',
    short: 'User value',
    weight: 0.25,
    prdRef: 'PRD §5 (25%)',
    question:
      'How much does this capability help a woman in midlife do a real job, with the least unnecessary effort?',
    anchors: {
      1: 'Solves no clearly articulated user job; nice-to-have at best.',
      2: 'Addresses a marginal job or a job only a narrow segment holds.',
      3: 'Addresses a real job, but the benefit is modest or indirect.',
      4: 'Clearly advances an important, frequently-held job.',
      5: 'Directly removes a top user obstacle with little added effort.',
    },
  },
  {
    id: 'evidence',
    label: 'Behavioral evidence',
    short: 'Evidence',
    weight: 0.2,
    prdRef: 'PRD §5 (20%)',
    question:
      'How strong is the behavioral-science or direct-observation evidence that the mechanism actually works?',
    anchors: {
      1: 'Invention or analogy only (grade D); no supporting evidence.',
      2: 'Thin competitor pattern or single weak signal (grade C−).',
      3: 'Repeated qualitative observation or competitor pattern (grade C).',
      4: 'Credible but limited scientific or direct user evidence (grade B).',
      5: 'Strong, relevant science or replicated direct validation (grade A).',
    },
  },
  {
    id: 'experience',
    label: 'Experience quality',
    short: 'Experience (UX)',
    weight: 0.15,
    prdRef: 'PRD §5 (15%)',
    question:
      'How clear, low-friction, accessible and emotionally sound is the moment-to-moment experience?',
    anchors: {
      1: 'High friction or cognitive load; likely to frustrate or exclude.',
      2: 'Workable but clunky; notable friction or accessibility gaps.',
      3: 'Competent and usable, without being distinctive.',
      4: 'Smooth, legible and accessible across common states.',
      5: 'Effortless, delightful and inclusive — Apple-level craft.',
    },
  },
  {
    id: 'differentiation',
    label: 'Differentiation',
    short: 'Differentiation',
    weight: 0.15,
    prdRef: 'PRD §5 (15%)',
    question:
      'How meaningfully does this distinguish HerRays from benchmark apps, beyond cosmetic novelty?',
    anchors: {
      1: 'Commodity feature; every benchmark already does it as well.',
      2: 'Minor cosmetic twist on an existing pattern.',
      3: 'A real improvement, but one a competitor could copy quickly.',
      4: 'A distinctive combination that is hard to replicate well.',
      5: 'A defensible, HerRays-specific advantage rooted in its mission.',
    },
  },
  {
    id: 'longTerm',
    label: 'Long-term usefulness',
    short: 'Long-term',
    weight: 0.15,
    prdRef: 'PRD §5 (15%)',
    question:
      'Does value persist — supporting adherence and automaticity — rather than fading after novelty wears off?',
    anchors: {
      1: 'Novelty-driven; value likely collapses within days.',
      2: 'Useful at first but little reason to return after a few weeks.',
      3: 'Retains some value, though engagement probably tapers.',
      4: 'Supports sustained use across changing energy and schedules.',
      5: 'Builds durable adherence or automaticity; graduates with the user.',
    },
  },
  {
    id: 'feasibility',
    label: 'Feasibility',
    short: 'Feasibility',
    weight: 0.1,
    prdRef: 'PRD §5 (10%)',
    question:
      'How realistic is it to build and maintain within iOS, data, privacy and clinical constraints?',
    anchors: {
      1: 'Blocked by a hard platform, data, privacy or clinical constraint.',
      2: 'Major engineering or integration risk; costly to maintain.',
      3: 'Buildable with moderate effort and manageable risk.',
      4: 'Well within reach using native capabilities and owned data.',
      5: 'Low-effort, low-maintenance; leans on proven platform features.',
    },
  },
] as const

/** Map of dimension id → chosen 1–5 score. Absent key means "unscored". */
export type Scores = Partial<Record<DimensionId, ScoreValue>>

export interface Contribution {
  readonly id: DimensionId
  /** score × weight for this dimension (0 when unscored). */
  readonly weighted: number
  /** Share of the final weighted average this dimension contributes, 0–1. */
  readonly share: number
}

export type BandId = 'reconsider' | 'promising' | 'strong'

export interface Band {
  readonly id: BandId
  readonly label: string
  /** Suggested — not mandated — next decision, mapped to Adopt/Adapt/etc. */
  readonly guidance: string
}

export interface ScorecardResult {
  readonly complete: boolean
  readonly scoredCount: number
  readonly totalCount: number
  /** Weighted mean on the native 1–5 scale, or null until all six are scored. */
  readonly weightedAverage: number | null
  /** Normalized 0–100 score (1★ → 0, 5★ → 100), or null until complete. */
  readonly score0to100: number | null
  readonly band: Band | null
  readonly contributions: readonly Contribution[]
}

/** Sum of all dimension weights — guaranteed to be 1 by the config above. */
export const TOTAL_WEIGHT = DIMENSIONS.reduce((sum, d) => sum + d.weight, 0)

/**
 * Convert a 1–5 weighted average to a 0–100 score.
 * The minimum possible rating (all 1★) maps to 0 and the maximum (all 5★)
 * maps to 100, so the full 0–100 range is usable and the mapping is linear.
 */
export function toScore0to100(weightedAverage: number): number {
  return ((weightedAverage - 1) / 4) * 100
}

export function bandFor(score0to100: number): Band {
  if (score0to100 >= 65) {
    return {
      id: 'strong',
      label: 'Strong candidate',
      guidance: 'Lean Adopt or Adapt — pair with the smallest useful experiment.',
    }
  }
  if (score0to100 >= 40) {
    return {
      id: 'promising',
      label: 'Promising',
      guidance: 'Needs stronger evidence or a redesign before committing.',
    }
  }
  return {
    id: 'reconsider',
    label: 'Reconsider',
    guidance: 'Likely Reject or Defer unless a weak dimension can be lifted.',
  }
}

export function computeResult(scores: Scores): ScorecardResult {
  const rawContributions = DIMENSIONS.map((d) => {
    const value = scores[d.id]
    return { id: d.id, weighted: value ? value * d.weight : 0 }
  })

  const scoredCount = DIMENSIONS.filter((d) => scores[d.id] != null).length
  const complete = scoredCount === DIMENSIONS.length

  const weightedAverage = complete
    ? rawContributions.reduce((sum, c) => sum + c.weighted, 0)
    : null

  const contributions: Contribution[] = rawContributions.map((c) => ({
    ...c,
    share: weightedAverage && weightedAverage > 0 ? c.weighted / weightedAverage : 0,
  }))

  const score0to100 =
    weightedAverage == null ? null : Math.round(toScore0to100(weightedAverage))
  const band = score0to100 == null ? null : bandFor(score0to100)

  return {
    complete,
    scoredCount,
    totalCount: DIMENSIONS.length,
    weightedAverage,
    score0to100,
    band,
    contributions,
  }
}

export interface ExportDimension {
  readonly id: DimensionId
  readonly label: string
  readonly weight: number
  readonly score: ScoreValue
  readonly weightedContribution: number
}

export interface ExportRecord {
  readonly instrument: string
  readonly version: string
  readonly generatedAt: string
  readonly capability: string
  readonly weightsSource: string
  readonly disclaimer: string
  readonly dimensions: readonly ExportDimension[]
  readonly weightedAverage1to5: number
  readonly score0to100: number
  readonly band: string
  readonly bandGuidance: string
}

export const DISCLAIMER =
  'Scores are the evaluator’s own judgements entered by hand, not observed ' +
  'research results. The 1–5 weights are a proposed prioritization heuristic ' +
  '(PRD §5), not a validated instrument, and the 0–100 band thresholds are ' +
  'non-binding. Mandatory clinical, privacy, ethics and accessibility gates are ' +
  'evaluated separately and are never compensated for by this weighted score.'

/**
 * Build a self-describing export record. Returns null if the scorecard is
 * incomplete, so an unfinished (and therefore misleading) rating can never be
 * exported.
 */
export function buildExportRecord(
  capability: string,
  scores: Scores,
  now: Date,
): ExportRecord | null {
  const result = computeResult(scores)
  if (
    !result.complete ||
    result.weightedAverage == null ||
    result.score0to100 == null ||
    result.band == null
  ) {
    return null
  }

  const dimensions: ExportDimension[] = DIMENSIONS.map((d) => {
    const score = scores[d.id] as ScoreValue
    return {
      id: d.id,
      label: d.label,
      weight: d.weight,
      score,
      weightedContribution: Number((score * d.weight).toFixed(4)),
    }
  })

  const trimmed = capability.trim()
  return {
    instrument: 'HerRays Capability Evaluation Scorecard',
    version: '0.1',
    generatedAt: now.toISOString(),
    capability: trimmed === '' ? '(unnamed capability)' : trimmed,
    weightsSource: 'PRD §5 Phase 4 capability-review weights',
    disclaimer: DISCLAIMER,
    dimensions,
    weightedAverage1to5: Number(result.weightedAverage.toFixed(3)),
    score0to100: result.score0to100,
    band: result.band.label,
    bandGuidance: result.band.guidance,
  }
}
