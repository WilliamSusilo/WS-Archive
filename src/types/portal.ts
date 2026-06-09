export type Destination =
  | "/"
  | "/about"
  | "/projects"
  | "/certifications"
  | "/story"
  | "/journey"
  | "/contact";

export interface PortalFragment {
  t: string;
  c: string;
}

export interface QualityProfile {
  /** number of inward-spiraling particles in the hero portal */
  infallCount: number;
  /** number of lensing stars around the hero portal */
  lensStarCount: number;
  /** number of concentric rings in the transition tunnel */
  ringCount: number;
  /** number of radial light streaks in the transition */
  streakCount: number;
  /** number of dust particles in the transition */
  dustCount: number;
  /** whether to render heavy blur layers */
  heavyBlur: boolean;
}

export type QualityTier = "high" | "medium" | "low";

export interface PortalNavContext {
  warpTo: (to: string, label?: string) => void;
  /** Hint that a destination is likely to be navigated to soon. */
  preload: (to: string) => void;
}