import type { Destination, PortalFragment } from "@/types/portal";

/**
 * Human-readable destination labels keyed by route path.
 * Used by the portal overlay HUD during navigation.
 */
export const DESTINATIONS: Record<Destination, string> = {
  "/": "Home Coordinate",
  "/about": "Origin Point",
  "/projects": "Mission Archive",
  "/certifications": "Knowledge Vault",
  "/story": "Personal Chronicle",
  "/journey": "Timeline Explorer",
  "/contact": "Communication Terminal",
};

/** Career-timeline fragments that fly through the wormhole during transitions. */
export const FRAGMENTS: PortalFragment[] = [
  { t: "kubernetes", c: "oklch(0.74 0.18 255)" },
  { t: "terraform", c: "oklch(0.72 0.2 295)" },
  { t: "docker", c: "oklch(0.78 0.16 230)" },
  { t: "gcp", c: "oklch(0.82 0.16 70)" },
  { t: "ai · mlops", c: "oklch(0.78 0.18 320)" },
  { t: "aws · solutions", c: "oklch(0.82 0.16 50)" },
  { t: "cert · cka", c: "oklch(0.78 0.14 160)" },
  { t: "cert · pca", c: "oklch(0.8 0.14 200)" },
  { t: "milestone · 2021", c: "oklch(0.85 0.1 80)" },
  { t: "milestone · 2024", c: "oklch(0.85 0.1 200)" },
  { t: "argocd", c: "oklch(0.78 0.18 30)" },
  { t: "vector db", c: "oklch(0.78 0.16 180)" },
];

/** Portal transition timing. */
export const PORTAL_TIMING = {
  navigateAt: 1100,
  endAt: 2100,
} as const;