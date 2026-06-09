import { useSyncExternalStore } from "react";
import { QUALITY_PROFILES } from "@/features/portal/portal.config";
import type { QualityProfile, QualityTier } from "@/types/portal";

function detectTier(): QualityTier {
  if (typeof window === "undefined") return "high";
  try {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return "low";
    }
    const nav = navigator as Navigator & {
      deviceMemory?: number;
      hardwareConcurrency?: number;
      connection?: { saveData?: boolean };
    };
    if (nav.connection?.saveData) return "low";

    const mem = nav.deviceMemory ?? 8;
    const cores = nav.hardwareConcurrency ?? 8;
    const coarse = window.matchMedia?.("(pointer: coarse)").matches;
    const narrow = window.innerWidth < 768;

    if (mem <= 2 || cores <= 2) return "low";
    if (mem <= 4 || cores <= 4 || (coarse && narrow)) return "medium";
    return "high";
  } catch {
    return "high";
  }
}

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener?.("change", cb);
  window.addEventListener("resize", cb);
  return () => {
    mql.removeEventListener?.("change", cb);
    window.removeEventListener("resize", cb);
  };
}

/** Returns the active quality profile, adapting to device & user prefs. */
export function usePortalQuality(): QualityProfile {
  const tier = useSyncExternalStore(
    subscribe,
    detectTier,
    () => "high" as QualityTier,
  );
  return QUALITY_PROFILES[tier];
}