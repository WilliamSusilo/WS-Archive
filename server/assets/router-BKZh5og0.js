import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useNavigate, useRouter, createRootRouteWithContext, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useSyncExternalStore, memo, useMemo, createContext, useContext, useState, useRef, useCallback, useEffect } from "react";
import { Toaster } from "sonner";
const appCss = "/assets/styles-BdFq2VWR.css";
const QUALITY_HIGH = {
  infallCount: 28,
  lensStarCount: 60,
  ringCount: 18,
  streakCount: 28,
  dustCount: 60,
  heavyBlur: true
};
const QUALITY_MEDIUM = {
  infallCount: 18,
  lensStarCount: 40,
  ringCount: 12,
  streakCount: 18,
  dustCount: 36,
  heavyBlur: true
};
const QUALITY_LOW = {
  infallCount: 10,
  lensStarCount: 24,
  ringCount: 8,
  streakCount: 10,
  dustCount: 20,
  heavyBlur: false
};
const QUALITY_PROFILES = {
  high: QUALITY_HIGH,
  medium: QUALITY_MEDIUM,
  low: QUALITY_LOW
};
function detectTier() {
  if (typeof window === "undefined") return "high";
  try {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      return "low";
    }
    const nav = navigator;
    if (nav.connection?.saveData) return "low";
    const mem = nav.deviceMemory ?? 8;
    const cores = nav.hardwareConcurrency ?? 8;
    const coarse = window.matchMedia?.("(pointer: coarse)").matches;
    const narrow = window.innerWidth < 768;
    if (mem <= 2 || cores <= 2) return "low";
    if (mem <= 4 || cores <= 4 || coarse && narrow) return "medium";
    return "high";
  } catch {
    return "high";
  }
}
function subscribe(cb) {
  if (typeof window === "undefined") return () => {
  };
  const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
  mql.addEventListener?.("change", cb);
  window.addEventListener("resize", cb);
  return () => {
    mql.removeEventListener?.("change", cb);
    window.removeEventListener("resize", cb);
  };
}
function usePortalQuality() {
  const tier = useSyncExternalStore(
    subscribe,
    detectTier,
    () => "high"
  );
  return QUALITY_PROFILES[tier];
}
const DESTINATIONS = {
  "/": "Home Coordinate",
  "/about": "Origin Point",
  "/projects": "Mission Archive",
  "/certifications": "Knowledge Vault",
  "/story": "Personal Chronicle",
  "/journey": "Timeline Explorer",
  "/contact": "Communication Terminal"
};
const FRAGMENTS = [
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
  { t: "vector db", c: "oklch(0.78 0.16 180)" }
];
const PORTAL_TIMING = {
  navigateAt: 1100,
  endAt: 2100
};
const TimelineFragments = memo(function TimelineFragments2() {
  const glyphs = useMemo(
    () => FRAGMENTS.map((f, i) => {
      const angle = i * 360 / FRAGMENTS.length;
      const r = 18 + i % 4 * 4;
      const rad = angle * Math.PI / 180;
      return {
        ...f,
        x0: `${Math.cos(rad) * r}vmax`,
        y0: `${Math.sin(rad) * r}vmax`,
        gr: `${i * 37 % 360}deg`,
        delay: 0.05 + i * 13 % 17 / 22,
        d: 1.5 + i * 5 % 10 / 12
      };
    }),
    []
  );
  return /* @__PURE__ */ jsx(Fragment, { children: glyphs.map((g, i) => /* @__PURE__ */ jsx(
    "div",
    {
      className: "absolute left-1/2 top-1/2",
      style: {
        "--x0": g.x0,
        "--y0": g.y0,
        "--gr": g.gr,
        animation: `wt-glyph ${g.d}s cubic-bezier(0.5, 0, 0.8, 0.6) ${g.delay}s infinite`,
        willChange: "transform, opacity"
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur-md",
          style: {
            color: g.c,
            borderColor: g.c.replace(")", " / 0.5)"),
            background: "oklch(0.08 0.05 270 / 0.55)",
            boxShadow: `0 0 14px ${g.c.replace(")", " / 0.45)")}`
          },
          children: g.t
        }
      )
    },
    `g${i}`
  )) });
});
const WormholeRenderer = memo(function WormholeRenderer2({ quality }) {
  const { ringCount, streakCount, dustCount, heavyBlur } = quality;
  const rings = useMemo(
    () => Array.from({ length: ringCount }).map((_, i) => ({
      delay: i * 0.06,
      hue: 260 + i % 4 * 12,
      rot: i * 23 % 360
    })),
    [ringCount]
  );
  const streaks = useMemo(
    () => Array.from({ length: streakCount }).map((_, i) => ({
      a: `${i * 360 / streakCount + i % 3 * 6}deg`,
      d: 0.9 + i * 7 % 10 / 10,
      delay: i * 11 % 20 / 30
    })),
    [streakCount]
  );
  const dust = useMemo(
    () => Array.from({ length: dustCount }).map((_, i) => {
      const angle = i * 360 / dustCount + i % 5 * 4;
      const rad = angle * Math.PI / 180;
      const r = 12 + i % 7 * 3;
      return {
        x0: `${Math.cos(rad) * r}vmax`,
        y0: `${Math.sin(rad) * r}vmax`,
        gr: `${angle}deg`,
        d: 1.2 + i * 7 % 10 / 9,
        delay: i * 11 % 18 / 22,
        size: 1 + i % 3,
        c: i % 4 === 0 ? "oklch(0.98 0.16 60)" : "oklch(0.92 0.14 285)"
      };
    }),
    [dustCount]
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "absolute inset-0 overflow-hidden",
      style: {
        perspective: "1100px",
        perspectiveOrigin: "50% 50%",
        transformStyle: "preserve-3d",
        animation: "wt-shake 220ms ease-in-out 5"
      },
      children: [
        heavyBlur && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-1/2 top-1/2 aspect-square rounded-full",
            style: {
              width: "85vmax",
              transform: "translate(-50%, -50%) translateZ(0)",
              background: "conic-gradient(from 0deg, transparent 0%, oklch(0.7 0.22 25 / 0.18) 15%, transparent 35%, oklch(0.68 0.22 200 / 0.22) 55%, transparent 72%, oklch(0.72 0.22 295 / 0.25) 88%, transparent)",
              maskImage: "radial-gradient(circle, transparent 22%, oklch(0 0 0) 32%, oklch(0 0 0) 60%, transparent 78%)",
              WebkitMaskImage: "radial-gradient(circle, transparent 22%, oklch(0 0 0) 32%, oklch(0 0 0) 60%, transparent 78%)",
              filter: "blur(14px)",
              animation: "lens-rotate 6s linear infinite, portal-fade 2.1s ease-out both",
              willChange: "transform, opacity"
            }
          }
        ),
        heavyBlur && /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute left-1/2 top-1/2 aspect-square rounded-full mix-blend-screen",
            style: {
              width: "110vmax",
              transform: "translate(-50%, -50%) translateZ(0)",
              background: "conic-gradient(from 90deg, oklch(0.5 0.2 290 / 0.0), oklch(0.55 0.2 290 / 0.22) 25%, transparent 45%, oklch(0.5 0.18 230 / 0.15) 65%, transparent 85%, oklch(0.6 0.2 30 / 0.12) 98%, transparent)",
              filter: "blur(40px)",
              animation: "lens-rotate 22s linear infinite, portal-fade 2.1s ease-out both",
              willChange: "transform, opacity"
            }
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", style: { transformStyle: "preserve-3d" }, children: [
          rings.map((r, i) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute left-1/2 top-1/2 aspect-square rounded-full",
              style: {
                "--rot": `${r.rot}deg`,
                width: "40vmax",
                border: `1px solid oklch(0.72 0.2 ${r.hue} / 0.55)`,
                boxShadow: `0 0 30px oklch(0.6 0.22 ${r.hue} / 0.45), inset 0 0 40px oklch(0.05 0.04 280 / 0.9)`,
                animation: `wt-tunnel 1.6s cubic-bezier(0.45, 0, 0.9, 0.55) ${r.delay}s infinite`,
                transformOrigin: "center",
                willChange: "transform, opacity"
              }
            },
            `r${i}`
          )),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute left-1/2 top-1/2 aspect-square rounded-full",
              style: {
                width: "44vmax",
                transform: "translate(-50%, -50%) rotateX(74deg)",
                background: "conic-gradient(from 0deg, oklch(0.95 0.2 60 / 0), oklch(0.85 0.22 50 / 0.85) 18%, oklch(0.78 0.24 30 / 0.95) 32%, oklch(0.6 0.2 290 / 0.6) 55%, oklch(0.72 0.22 230 / 0.85) 72%, oklch(0.92 0.2 80 / 0.9) 90%, oklch(0.95 0.2 60 / 0))",
                maskImage: "radial-gradient(circle, transparent 34%, oklch(0 0 0) 42%, oklch(0 0 0) 68%, transparent 80%)",
                WebkitMaskImage: "radial-gradient(circle, transparent 34%, oklch(0 0 0) 42%, oklch(0 0 0) 68%, transparent 80%)",
                filter: heavyBlur ? "blur(2.5px) saturate(1.35)" : "saturate(1.35)",
                animation: "accretion-spin 5s linear infinite, portal-fade 2.1s ease-out both",
                transformOrigin: "center",
                willChange: "transform, opacity"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute left-1/2 top-1/2 aspect-square rounded-full",
              style: {
                width: "22vmax",
                transform: "translate(-50%, -50%) translateZ(0)",
                background: "conic-gradient(from -30deg, transparent 0%, oklch(0.98 0.18 70 / 0.95) 9%, transparent 22%, transparent 76%, oklch(0.94 0.2 50 / 0.9) 92%, transparent)",
                maskImage: "radial-gradient(circle, transparent 46%, oklch(0 0 0) 48%, oklch(0 0 0) 51%, transparent 53%)",
                WebkitMaskImage: "radial-gradient(circle, transparent 46%, oklch(0 0 0) 48%, oklch(0 0 0) 51%, transparent 53%)",
                boxShadow: "0 0 80px 10px oklch(0.85 0.22 45 / 0.55), inset 0 0 40px oklch(0.95 0.18 70 / 0.4)",
                animation: "core-pulse 1.4s ease-in-out infinite, portal-fade 2.1s ease-out both",
                willChange: "transform, opacity"
              }
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute left-1/2 top-1/2 aspect-square rounded-full",
              style: {
                width: "14vmax",
                transform: "translate(-50%, -50%)",
                background: "radial-gradient(circle, #000 0%, #000 60%, oklch(0.04 0.05 280) 82%, transparent 100%)",
                boxShadow: "inset 0 0 120px 30px #000, inset 0 0 60px 10px oklch(0.06 0.08 285 / 0.9), 0 0 100px 20px oklch(0.2 0.12 285 / 0.55)",
                animation: "portal-fade 2.1s ease-out both"
              },
              children: [0.8, 0.62, 0.45, 0.3, 0.18].map((s, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute left-1/2 top-1/2 rounded-full",
                  style: {
                    width: `${s * 100}%`,
                    height: `${s * 100}%`,
                    transform: "translate(-50%, -50%)",
                    border: `1px solid oklch(0.6 0.2 ${280 + i * 8} / ${0.35 - i * 0.05})`,
                    boxShadow: `inset 0 0 ${24 - i * 3}px oklch(0 0 0 / 0.95)`
                  }
                },
                `well${i}`
              ))
            }
          ),
          dust.map((p, i) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "absolute left-1/2 top-1/2 block rounded-full",
              style: {
                "--x0": p.x0,
                "--y0": p.y0,
                "--gr": p.gr,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: p.c,
                boxShadow: `0 0 6px ${p.c}, 0 0 14px ${p.c.replace(")", " / 0.5)")}`,
                animation: `wt-glyph ${p.d}s cubic-bezier(0.5, 0, 0.85, 0.5) ${p.delay}s infinite`,
                willChange: "transform, opacity"
              }
            },
            `d${i}`
          )),
          streaks.map((s, i) => /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute left-1/2 top-1/2 h-[1px] origin-left",
              style: {
                "--a": s.a,
                width: "60vmax",
                background: "linear-gradient(90deg, transparent 0%, transparent 55%, oklch(0.95 0.16 60 / 0.7) 85%, oklch(0.98 0.06 240) 100%)",
                filter: "blur(0.6px)",
                animation: `wt-streak ${s.d}s cubic-bezier(0.5, 0, 0.7, 1) ${s.delay}s infinite`,
                willChange: "transform, opacity"
              }
            },
            `s${i}`
          )),
          /* @__PURE__ */ jsx(TimelineFragments, {})
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "radial-gradient(circle at 50% 50%, oklch(0.98 0.12 60 / 0.4), transparent 35%)",
              animation: "wt-iris 2.1s ease-in-out both"
            }
          }
        )
      ]
    }
  );
});
const PortalOverlay = memo(function PortalOverlay2({ active, label, coord }) {
  const quality = usePortalQuality();
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-hidden": !active,
      className: `pointer-events-none fixed inset-0 z-[100] ${active ? "" : "opacity-0"}`,
      style: { transition: "opacity 220ms ease", willChange: "opacity" },
      children: [
        /* @__PURE__ */ jsx("div", { className: `absolute inset-0 bg-background ${active ? "animate-veil" : ""}` }),
        active && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(WormholeRenderer, { quality }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "absolute left-1/2 top-[12%] -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-[0.4em] animate-hud",
              style: { color: "oklch(0.85 0.14 200)" },
              children: [
                /* @__PURE__ */ jsx("div", { style: { textShadow: "0 0 10px oklch(0.6 0.22 220 / 0.7)" }, children: "▸ wormhole stabilized" }),
                /* @__PURE__ */ jsxs("div", { className: "mt-1 text-muted-foreground", children: [
                  "coord ",
                  coord
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "absolute bottom-[12%] left-1/2 -translate-x-1/2 text-center animate-hud", children: [
            /* @__PURE__ */ jsx("div", { className: "font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground", children: "destination" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 font-display text-2xl font-semibold text-gradient", children: label })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute left-6 top-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.3em]",
              style: {
                color: "oklch(0.78 0.14 200 / 0.6)",
                animation: "wt-coord 2.1s ease-in-out both",
                writingMode: "vertical-rl"
              },
              children: "traversal · Δt = 1.1s · curvature ⟶ ∞"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute right-6 top-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.3em]",
              style: {
                color: "oklch(0.78 0.14 200 / 0.6)",
                animation: "wt-coord 2.1s ease-in-out both",
                writingMode: "vertical-rl"
              },
              children: "chapter ↦ next · timeline stable"
            }
          )
        ] })
      ]
    }
  );
});
const PortalCtx = createContext(null);
function usePortalNav() {
  const ctx = useContext(PortalCtx);
  if (!ctx) throw new Error("usePortalNav must be used inside <PortalTransitionProvider>");
  return ctx;
}
const FADE_TIMING = {
  /** ms — exit phase before navigate. */
  exit: 180,
  /** ms — enter phase after navigate. */
  enter: 220
};
function formatCoord(d) {
  const p2 = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}.${p2(d.getMonth() + 1)}.${p2(d.getDate())} ▸ ${p2(d.getHours())}:${p2(d.getMinutes())}`;
}
function PortalTransitionProvider({ children }) {
  const navigate = useNavigate();
  const router2 = useRouter();
  const [active, setActive] = useState(false);
  const [phase, setPhase] = useState("idle");
  const [label, setLabel] = useState("Origin Point");
  const [coord, setCoord] = useState("0000.00.00");
  const busy = useRef(false);
  const timers = useRef([]);
  const preloaded = useRef(/* @__PURE__ */ new Set());
  const clearTimers = useCallback(() => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  }, []);
  const schedule = useCallback((fn, ms) => {
    const id = window.setTimeout(fn, ms);
    timers.current.push(id);
    return id;
  }, []);
  const preload = useCallback(
    (to) => {
      if (preloaded.current.has(to)) return;
      preloaded.current.add(to);
      router2.preloadRoute({ to }).catch(() => {
        preloaded.current.delete(to);
      });
    },
    [router2]
  );
  const warpTo = useCallback(
    (to, customLabel) => {
      if (busy.current) return;
      const isHome = to === "/";
      if (isHome) {
        busy.current = true;
        const preloadP = router2.preloadRoute({ to }).catch(() => void 0);
        preloaded.current.add(to);
        setLabel(customLabel ?? DESTINATIONS[to] ?? "Origin Point");
        setCoord(formatCoord(/* @__PURE__ */ new Date()));
        setActive(true);
        const delay = new Promise((r) => schedule(() => r(), PORTAL_TIMING.navigateAt));
        Promise.all([preloadP, delay]).then(() => navigate({ to }));
        schedule(() => {
          setActive(false);
          busy.current = false;
        }, PORTAL_TIMING.endAt);
        return;
      }
      busy.current = true;
      preload(to);
      setPhase("out");
      schedule(() => {
        navigate({ to });
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setPhase("in"));
        });
      }, FADE_TIMING.exit);
      schedule(() => {
        setPhase("idle");
        busy.current = false;
      }, FADE_TIMING.exit + FADE_TIMING.enter);
    },
    [navigate, preload, router2, schedule]
  );
  useEffect(() => () => clearTimers(), [clearTimers]);
  const ctx = useMemo(() => ({ warpTo, preload }), [warpTo, preload]);
  const wrapperStyle = useMemo(() => {
    const base = {
      transition: `transform ${FADE_TIMING.enter}ms cubic-bezier(0.22, 1, 0.36, 1), filter ${FADE_TIMING.enter}ms ease, opacity ${FADE_TIMING.enter}ms ease`,
      transformOrigin: "50% 50%",
      willChange: phase === "idle" ? "auto" : "transform, filter, opacity"
    };
    if (phase === "out") {
      return {
        ...base,
        transition: `transform ${FADE_TIMING.exit}ms cubic-bezier(0.4, 0, 0.2, 1), filter ${FADE_TIMING.exit}ms ease, opacity ${FADE_TIMING.exit}ms ease`,
        transform: "scale(0.988)",
        filter: "blur(4px)",
        opacity: 0.6
      };
    }
    if (phase === "in") {
      return {
        ...base,
        transform: "scale(1)",
        filter: "blur(0px)",
        opacity: 1
      };
    }
    return { ...base, transform: "none", filter: "none", opacity: 1 };
  }, [phase]);
  return /* @__PURE__ */ jsxs(PortalCtx.Provider, { value: ctx, children: [
    /* @__PURE__ */ jsx("div", { style: wrapperStyle, children }),
    /* @__PURE__ */ jsx(PortalOverlay, { active, label, coord })
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$7 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", className: "dark", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$7.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxs(PortalTransitionProvider, { children: [
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(
      Toaster,
      {
        position: "bottom-right",
        closeButton: true,
        toastOptions: {
          className: "w-fit max-w-[240px] rounded-xl border border-aurora/30 bg-background/95 shadow-glow backdrop-blur-xl"
        }
      }
    )
  ] }) });
}
const $$splitComponentImporter$6 = () => import("./story-CrK6JL2t.js");
const Route$6 = createFileRoute("/story")({
  head: () => ({
    meta: [{
      title: "My Story — WS Archive"
    }, {
      name: "description",
      content: "Field notes from the journey — reflections, talks, milestones, and learning."
    }, {
      property: "og:title",
      content: "My Story — WS Archive"
    }, {
      property: "og:description",
      content: "An activity feed of reflections from across the timeline."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./projects-DqnEGmUD.js");
const Route$5 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Projects — WS Archive"
    }, {
      name: "description",
      content: "A collection of projects spanning cloud computing, backend development, mobile applications, and web platforms."
    }, {
      property: "og:title",
      content: "Projects — WS Archive"
    }, {
      property: "og:description",
      content: "Selected projects showcasing technical skills, learning experiences, and real-world solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./journey-DCOhJ6bi.js");
const Route$4 = createFileRoute("/journey")({
  head: () => ({
    meta: [{
      title: "Journey — WS Archive"
    }, {
      name: "description",
      content: "Live trajectory — ongoing learning loops across languages, AGI, and cloud."
    }, {
      property: "og:title",
      content: "Journey — WS Archive"
    }, {
      property: "og:description",
      content: "A futuristic dashboard of current learning progress."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-DF2ztRU7.js");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — WS Archive"
    }, {
      name: "description",
      content: "Open a transmission channel — GitHub, LinkedIn, Credly, Google Developer, Cloud Skills Boost, Dicoding."
    }, {
      property: "og:title",
      content: "Contact — WS Archive"
    }, {
      property: "og:description",
      content: "A futuristic contact hub for collaborations on cloud, AI, and meaningful software."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./certifications-Ck1dkRNG.js");
const Route$2 = createFileRoute("/certifications")({
  head: () => ({
    meta: [{
      title: "Certifications — WS Archive"
    }, {
      name: "description",
      content: "Verified certifications in cloud computing, cybersecurity, software development, and infrastructure technologies."
    }, {
      property: "og:title",
      content: "Certifications — WS Archive"
    }, {
      property: "og:description",
      content: "A collection of certifications that reflect my continuous learning journey in cloud, infrastructure, and technology."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-AyxSpYiJ.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — WS Archive"
    }, {
      name: "description",
      content: "Origin signal: a tech-focused creative navigating cloud, AI, and human-centered software."
    }, {
      property: "og:title",
      content: "About — WS Archive"
    }, {
      property: "og:description",
      content: "Operating principles and the milestones that shaped the journey."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DI9WTk6t.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "WS Archive — My Portfolio"
    }, {
      name: "description",
      content: "Personal portfolio of a cloud engineer and AI builder — projects, certifications, story, and ongoing journey across the technologies shaping tomorrow."
    }, {
      property: "og:title",
      content: "WS Archive — Portfolio"
    }, {
      property: "og:description",
      content: "Cloud, AI, and software engineering work, told as a journey across time."
    }, {
      property: "og:type",
      content: "website"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const StoryRoute = Route$6.update({
  id: "/story",
  path: "/story",
  getParentRoute: () => Route$7
});
const ProjectsRoute = Route$5.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$7
});
const JourneyRoute = Route$4.update({
  id: "/journey",
  path: "/journey",
  getParentRoute: () => Route$7
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$7
});
const CertificationsRoute = Route$2.update({
  id: "/certifications",
  path: "/certifications",
  getParentRoute: () => Route$7
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$7
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$7
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CertificationsRoute,
  ContactRoute,
  JourneyRoute,
  ProjectsRoute,
  StoryRoute
};
const routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  usePortalNav as a,
  router as r,
  usePortalQuality as u
};
