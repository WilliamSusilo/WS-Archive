import type { QualityProfile, QualityTier } from "@/types/portal";

/** Highest fidelity — matches the original visual design. */
export const QUALITY_HIGH: QualityProfile = {
  infallCount: 28,
  lensStarCount: 60,
  ringCount: 18,
  streakCount: 28,
  dustCount: 60,
  heavyBlur: true,
};

/** Mid-range devices — modest reductions, visually near-identical. */
export const QUALITY_MEDIUM: QualityProfile = {
  infallCount: 18,
  lensStarCount: 40,
  ringCount: 12,
  streakCount: 18,
  dustCount: 36,
  heavyBlur: true,
};

/** Low-end devices / reduced motion — minimum effect, no heavy blurs. */
export const QUALITY_LOW: QualityProfile = {
  infallCount: 10,
  lensStarCount: 24,
  ringCount: 8,
  streakCount: 10,
  dustCount: 20,
  heavyBlur: false,
};

export const QUALITY_PROFILES: Record<QualityTier, QualityProfile> = {
  high: QUALITY_HIGH,
  medium: QUALITY_MEDIUM,
  low: QUALITY_LOW,
};