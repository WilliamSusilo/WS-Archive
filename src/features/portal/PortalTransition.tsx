import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { useNavigate, useRouter } from "@tanstack/react-router";
import { PortalCtx } from "./PortalContext";
import { PortalOverlay } from "./PortalOverlay";
import { DESTINATIONS, PORTAL_TIMING } from "@/constants/portal";
import type { PortalNavContext } from "@/types/portal";

export { usePortalNav } from "./PortalContext";

/**
 * Premium inter-page transition timing.
 * Mirrors Apple/Linear/Stripe: tiny scale, gentle blur, crossfade.
 */
const FADE_TIMING = {
  /** ms — exit phase before navigate. */
  exit: 180,
  /** ms — enter phase after navigate. */
  enter: 220,
} as const;

function formatCoord(d: Date) {
  const p2 = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${p2(d.getMonth() + 1)}.${p2(d.getDate())} ▸ ${p2(d.getHours())}:${p2(d.getMinutes())}`;
}

export function PortalTransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const router = useRouter();
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");
  const [label, setLabel] = useState("Origin Point");
  const [coord, setCoord] = useState("0000.00.00");
  const busy = useRef(false);
  const timers = useRef<number[]>([]);
  const preloaded = useRef<Set<string>>(new Set());

  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  }, []);

  const preload = useCallback(
    (to: string) => {
      if (preloaded.current.has(to)) return;
      preloaded.current.add(to);
      router.preloadRoute({ to: to as never }).catch(() => {
        preloaded.current.delete(to);
      });
    },
    [router],
  );

  const warpTo = useCallback(
    (to: string, customLabel?: string) => {
      if (busy.current) return;

      const isHome = to === "/";

      if (isHome) {
        // Cinematic portal — reserved for returning to Home.
        // Kick off route preload immediately so by the time we navigate
        // the destination tree is already warm.
        busy.current = true;
        const preloadP = router
          .preloadRoute({ to: to as never })
          .catch(() => undefined);
        preloaded.current.add(to);

        setLabel(customLabel ?? DESTINATIONS[to as keyof typeof DESTINATIONS] ?? "Origin Point");
        setCoord(formatCoord(new Date()));
        setActive(true);

        // Navigate only after BOTH the animation reaches its mid-point
        // AND the destination route is preloaded — eliminates the stutter
        // of mounting under animation.
        const delay = new Promise<void>((r) => schedule(() => r(), PORTAL_TIMING.navigateAt));
        Promise.all([preloadP, delay]).then(() => navigate({ to: to as never }));

        schedule(() => {
          setActive(false);
          busy.current = false;
        }, PORTAL_TIMING.endAt);
        return;
      }

      // Premium inter-page transition — exit (scale/blur/fade), navigate,
      // then enter (settle back).
      busy.current = true;
      preload(to);

      setPhase("out");

      // Navigate after exit phase completes.
      schedule(() => {
        navigate({ to: to as never });
        // Next frame: flip to "in" so the new content eases back to rest.
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setPhase("in"));
        });
      }, FADE_TIMING.exit);

      schedule(() => {
        setPhase("idle");
        busy.current = false;
      }, FADE_TIMING.exit + FADE_TIMING.enter);
    },
    [navigate, preload, router, schedule],
  );

  useEffect(() => () => clearTimers(), [clearTimers]);

  const ctx = useMemo<PortalNavContext>(() => ({ warpTo, preload }), [warpTo, preload]);

  // Per-phase style for the page wrapper. Tiny, GPU-accelerated values only.
  const wrapperStyle = useMemo<React.CSSProperties>(() => {
    const base: React.CSSProperties = {
      transition: `transform ${FADE_TIMING.enter}ms cubic-bezier(0.22, 1, 0.36, 1), filter ${FADE_TIMING.enter}ms ease, opacity ${FADE_TIMING.enter}ms ease`,
      transformOrigin: "50% 50%",
      willChange: phase === "idle" ? "auto" : "transform, filter, opacity",
    };
    if (phase === "out") {
      return {
        ...base,
        transition: `transform ${FADE_TIMING.exit}ms cubic-bezier(0.4, 0, 0.2, 1), filter ${FADE_TIMING.exit}ms ease, opacity ${FADE_TIMING.exit}ms ease`,
        transform: "scale(0.988)",
        filter: "blur(4px)",
        opacity: 0.6,
      };
    }
    if (phase === "in") {
      return {
        ...base,
        transform: "scale(1)",
        filter: "blur(0px)",
        opacity: 1,
      };
    }
    return { ...base, transform: "none", filter: "none", opacity: 1 };
  }, [phase]);

  return (
    <PortalCtx.Provider value={ctx}>
      <div style={wrapperStyle}>{children}</div>
      {/* Heavy portal overlay only mounts/runs while `active` (Home transitions). */}
      <PortalOverlay active={active} label={label} coord={coord} />
    </PortalCtx.Provider>
  );
}
