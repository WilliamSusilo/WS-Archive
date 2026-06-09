import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell, W as WarpLink } from "./PageShell-fFHMHnhU.js";
import { memo, useMemo } from "react";
import { Cloud, Box, Hexagon, Award, Database, Cpu, GitBranch, Clock, Crosshair, Network, FolderGit2, BookOpen, Languages, ArrowUpRight, Radio, Sparkles, Compass } from "lucide-react";
import { u as usePortalQuality } from "./router-BKZh5og0.js";
import "@tanstack/react-router";
import "@tanstack/react-query";
import "sonner";
const Portal = memo(function Portal2({ className = "" }) {
  const { infallCount, lensStarCount, heavyBlur } = usePortalQuality();
  const infall = useMemo(
    () => Array.from({ length: infallCount }).map((_, i) => ({
      a: `${i * 360 / infallCount + i % 3 * 7}deg`,
      r0: `${42 + i * 11 % 22}%`,
      d: `${3.6 + i * 17 % 40 / 10}s`,
      delay: `${i * 13 % 50 / 10}s`,
      size: 1 + i % 3
    })),
    [infallCount]
  );
  const lensStars = useMemo(
    () => Array.from({ length: lensStarCount }).map((_, i) => {
      const angle = i * 360 / lensStarCount + i % 5 * 3;
      const radius = 52 + i * 7 % 18;
      const rad = angle * Math.PI / 180;
      return {
        left: `${50 + Math.cos(rad) * radius}%`,
        top: `${50 + Math.sin(rad) * radius}%`,
        delay: `${i % 9 * 0.4}s`,
        length: 6 + i % 4 * 3,
        angle: `${angle + 90}deg`,
        opacity: 0.4 + i % 5 / 10
      };
    }),
    [lensStarCount]
  );
  const glyphs = useMemo(
    () => [
      { Icon: Cloud, a: 18, r0: 47, d: 14, delay: 0, hue: "oklch(0.78 0.16 235)" },
      { Icon: Box, a: 72, r0: 51, d: 16, delay: 2, hue: "oklch(0.72 0.18 265)" },
      { Icon: Hexagon, a: 138, r0: 49, d: 15, delay: 4, hue: "oklch(0.74 0.18 295)" },
      { Icon: Award, a: 205, r0: 46, d: 17, delay: 1.5, hue: "oklch(0.82 0.16 90)" },
      { Icon: Database, a: 250, r0: 52, d: 18, delay: 3, hue: "oklch(0.74 0.16 200)" },
      { Icon: Cpu, a: 305, r0: 48, d: 13, delay: 5, hue: "oklch(0.76 0.18 320)" },
      { Icon: GitBranch, a: 340, r0: 50, d: 19, delay: 2.5, hue: "oklch(0.78 0.14 160)" },
      { Icon: Clock, a: 100, r0: 53, d: 21, delay: 6, hue: "oklch(0.85 0.10 80)" },
      { Icon: Crosshair, a: 170, r0: 55, d: 20, delay: 4.5, hue: "oklch(0.78 0.14 200)" },
      { Icon: Network, a: 280, r0: 54, d: 22, delay: 7, hue: "oklch(0.82 0.16 295)" }
    ],
    []
  );
  const ticks = useMemo(
    () => Array.from({ length: 36 }).map((_, i) => ({
      angle: i * 10,
      major: i % 3 === 0
    })),
    []
  );
  const markers = [
    { label: "Informatics · 2022", a: 30, r: 58, d: 28, delay: 0 },
    { label: "DevFest · 2024", a: 110, r: 60, d: 32, delay: 4 },
    { label: "Bangkit CC · 2024", a: 195, r: 57, d: 30, delay: 8 },
    { label: "ACE · 2025", a: 295, r: 59, d: 34, delay: 12 }
  ];
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative aspect-square ${className}`,
      style: { perspective: "1200px", transformStyle: "preserve-3d" },
      "aria-label": "Spacetime wormhole — the gateway into a Cloud Engineer's chronicle",
      role: "img",
      children: [
        heavyBlur && /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-[18%] rounded-full",
            style: {
              background: "radial-gradient(circle at 50% 50%, oklch(0.55 0.22 290 / 0.35) 0%, oklch(0.4 0.2 270 / 0.18) 25%, transparent 60%)",
              filter: "blur(40px)",
              animation: "pulse-glow 7s ease-in-out infinite",
              willChange: "opacity"
            }
          }
        ),
        [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 rounded-full",
            style: {
              width: "78%",
              height: "78%",
              border: "1px solid oklch(0.78 0.18 290 / 0.35)",
              animation: `wh-ripple 6s ease-out ${i * 1.5}s infinite`,
              willChange: "transform, opacity"
            }
          },
          `ripple-${i}`
        )),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 overflow-hidden rounded-full",
            style: {
              maskImage: "radial-gradient(circle at 50% 50%, transparent 28%, oklch(0 0 0) 38%, oklch(0 0 0) 62%, transparent 78%)",
              WebkitMaskImage: "radial-gradient(circle at 50% 50%, transparent 28%, oklch(0 0 0) 38%, oklch(0 0 0) 62%, transparent 78%)"
            },
            children: lensStars.map((s, i) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "absolute block rounded-full",
                style: {
                  left: s.left,
                  top: s.top,
                  width: `${s.length}px`,
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, oklch(0.98 0.04 285), transparent)",
                  transform: `rotate(${s.angle})`,
                  opacity: s.opacity,
                  filter: "blur(0.4px)",
                  animation: `wh-shimmer ${3 + i % 5 * 0.5}s ease-in-out ${s.delay} infinite`
                }
              },
              `ls-${i}`
            ))
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 rounded-full",
            style: {
              width: "92%",
              height: "92%",
              transform: "translate(-50%, -50%) translateZ(0)",
              background: "conic-gradient(from 0deg, oklch(0.7 0.22 25 / 0.35), transparent 18%, oklch(0.65 0.22 200 / 0.4) 40%, transparent 58%, oklch(0.72 0.22 295 / 0.45) 78%, transparent)",
              maskImage: "radial-gradient(circle, transparent 44%, oklch(0 0 0) 47%, oklch(0 0 0) 50%, transparent 53%)",
              WebkitMaskImage: "radial-gradient(circle, transparent 44%, oklch(0 0 0) 47%, oklch(0 0 0) 50%, transparent 53%)",
              filter: heavyBlur ? "blur(2px)" : "none",
              animation: "wh-lens-spin 50s linear infinite",
              transformOrigin: "center",
              willChange: "transform"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 rounded-full",
            style: {
              width: "118%",
              height: "118%",
              transform: "translate(-50%, -50%) rotateX(74deg)",
              background: "conic-gradient(from 0deg, oklch(0.95 0.2 60 / 0.0), oklch(0.85 0.22 50 / 0.85) 20%, oklch(0.78 0.24 30 / 0.95) 35%, oklch(0.6 0.2 290 / 0.6) 55%, oklch(0.72 0.22 230 / 0.85) 72%, oklch(0.92 0.2 80 / 0.9) 90%, oklch(0.95 0.2 60 / 0.0))",
              maskImage: "radial-gradient(circle, transparent 30%, oklch(0 0 0 / 0.6) 38%, oklch(0 0 0) 46%, oklch(0 0 0) 62%, oklch(0 0 0 / 0.5) 76%, transparent 92%)",
              WebkitMaskImage: "radial-gradient(circle, transparent 30%, oklch(0 0 0 / 0.6) 38%, oklch(0 0 0) 46%, oklch(0 0 0) 62%, oklch(0 0 0 / 0.5) 76%, transparent 92%)",
              filter: heavyBlur ? "blur(3px) saturate(1.4)" : "saturate(1.4)",
              animation: "wh-disk-spin 18s linear infinite",
              transformOrigin: "center",
              willChange: "transform"
            }
          }
        ),
        heavyBlur && /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 rounded-full mix-blend-screen",
            style: {
              width: "112%",
              height: "112%",
              transform: "translate(-50%, -50%) rotateX(74deg)",
              background: "conic-gradient(from 90deg, transparent, oklch(0.95 0.2 80 / 0.5) 10%, transparent 22%, oklch(0.8 0.24 25 / 0.7) 35%, transparent 50%, oklch(0.85 0.2 200 / 0.4) 68%, transparent 82%, oklch(0.95 0.22 60 / 0.6) 95%, transparent)",
              maskImage: "radial-gradient(circle, transparent 32%, oklch(0 0 0 / 0.7) 40%, oklch(0 0 0) 48%, oklch(0 0 0) 58%, oklch(0 0 0 / 0.5) 72%, transparent 86%)",
              WebkitMaskImage: "radial-gradient(circle, transparent 32%, oklch(0 0 0 / 0.7) 40%, oklch(0 0 0) 48%, oklch(0 0 0) 58%, oklch(0 0 0 / 0.5) 72%, transparent 86%)",
              filter: "blur(6px)",
              animation: "wh-disk-spin-rev 26s linear infinite",
              transformOrigin: "center",
              willChange: "transform"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 rounded-full",
            style: {
              width: "76%",
              height: "76%",
              transform: "translate(-50%, -50%) translateZ(0)",
              boxShadow: "0 0 24px 2px oklch(0.95 0.18 60 / 0.8), 0 0 60px 8px oklch(0.78 0.24 35 / 0.55), inset 0 0 30px 4px oklch(0.95 0.2 80 / 0.45)",
              background: "conic-gradient(from -30deg, transparent 0%, oklch(0.98 0.18 70 / 0.95) 8%, transparent 22%, transparent 78%, oklch(0.92 0.2 50 / 0.85) 92%, transparent)",
              maskImage: "radial-gradient(circle, transparent 46%, oklch(0 0 0) 48%, oklch(0 0 0) 50%, transparent 52%)",
              WebkitMaskImage: "radial-gradient(circle, transparent 46%, oklch(0 0 0) 48%, oklch(0 0 0) 50%, transparent 52%)",
              animation: "wh-photon 4s ease-in-out infinite",
              willChange: "opacity"
            }
          }
        ),
        [0.7, 0.6, 0.5, 0.42, 0.34, 0.27, 0.2].map((scale, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 rounded-full",
            style: {
              width: `${scale * 100}%`,
              height: `${scale * 100}%`,
              transform: "translate(-50%, -50%)",
              border: `1px solid oklch(0.7 0.18 ${260 + i * 8} / ${0.5 - i * 0.05})`,
              boxShadow: `inset 0 0 ${30 - i * 3}px oklch(0 0 0 / ${0.4 + i * 0.07})`
            }
          },
          `depth-${i}`
        )),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 rounded-full overflow-hidden",
            style: {
              width: "48%",
              height: "48%",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle at 50% 50%, oklch(0 0 0) 0%, oklch(0.02 0.02 280) 35%, oklch(0.05 0.06 285) 65%, oklch(0.1 0.1 290 / 0.6) 100%)",
              animation: "wh-core-breathe 6s ease-in-out infinite"
            },
            children: [
              [0.85, 0.7, 0.55, 0.4, 0.26, 0.14].map((s, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute left-1/2 top-1/2 rounded-full",
                  style: {
                    width: `${s * 100}%`,
                    height: `${s * 100}%`,
                    transform: "translate(-50%, -50%)",
                    border: `1px solid oklch(0.6 0.2 ${270 + i * 6} / ${0.3 - i * 0.04})`,
                    boxShadow: `inset 0 0 ${24 - i * 3}px oklch(0 0 0 / 0.9)`
                  }
                },
                `well-${i}`
              )),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute left-1/2 top-1/2 rounded-full",
                  style: {
                    width: "4px",
                    height: "4px",
                    transform: "translate(-50%, -50%)",
                    background: "oklch(0.98 0.04 285)",
                    boxShadow: "0 0 8px 2px oklch(0.85 0.18 285 / 0.9), 0 0 18px 6px oklch(0.6 0.22 290 / 0.4)",
                    animation: "wh-shimmer 3s ease-in-out infinite"
                  }
                }
              )
            ]
          }
        ),
        infall.map((p, i) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2 block rounded-full",
            style: {
              "--a": p.a,
              "--r0": p.r0,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: "oklch(0.95 0.16 60)",
              boxShadow: "0 0 6px oklch(0.95 0.2 50 / 0.8), 0 0 14px oklch(0.78 0.22 35 / 0.6)",
              animation: `wh-infall ${p.d} cubic-bezier(0.45, 0, 0.9, 0.6) ${p.delay} infinite`,
              willChange: "transform, opacity"
            }
          },
          `inf-${i}`
        )),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-[4%] rounded-full",
            style: {
              animation: "wh-lens-spin-rev 120s linear infinite",
              transformOrigin: "center",
              willChange: "transform"
            },
            children: ticks.map((t, i) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "absolute left-1/2 top-0 origin-bottom",
                style: {
                  height: "50%",
                  transform: `translateX(-50%) rotate(${t.angle}deg)`
                },
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "mx-auto",
                      style: {
                        width: t.major ? "2px" : "1px",
                        height: t.major ? "10px" : "5px",
                        background: t.major ? "oklch(0.85 0.16 200 / 0.75)" : "oklch(0.78 0.1 240 / 0.4)",
                        boxShadow: t.major ? "0 0 6px oklch(0.78 0.2 200 / 0.6)" : "none"
                      }
                    }
                  ),
                  t.major && /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "mx-auto mt-1 font-mono text-[8px] tracking-[0.2em]",
                      style: { color: "oklch(0.78 0.14 200 / 0.6)" },
                      children: [
                        String(t.angle).padStart(3, "0"),
                        "°"
                      ]
                    }
                  )
                ]
              },
              `tick-${i}`
            ))
          }
        ),
        glyphs.map((g, i) => {
          const Icon = g.Icon;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: "pointer-events-none absolute left-1/2 top-1/2 grid place-items-center",
              style: {
                "--a": `${g.a}deg`,
                "--r0": `${g.r0}%`,
                width: "28px",
                height: "28px",
                animation: `wh-glyph-pull ${g.d}s cubic-bezier(0.5, 0, 0.85, 0.5) ${g.delay}s infinite`,
                willChange: "transform, opacity"
              },
              children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "grid h-7 w-7 place-items-center rounded-md backdrop-blur-sm",
                  style: {
                    background: "oklch(0.1 0.06 285 / 0.55)",
                    border: `1px solid ${g.hue.replace(")", " / 0.6)")}`,
                    boxShadow: `0 0 12px ${g.hue.replace(")", " / 0.55)")}, inset 0 0 8px oklch(0 0 0 / 0.4)`
                  },
                  children: /* @__PURE__ */ jsx(Icon, { className: "h-3.5 w-3.5", style: { color: g.hue } })
                }
              )
            },
            `glyph-${i}`
          );
        }),
        markers.map((m, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 top-1/2",
            style: {
              "--a": `${m.a}deg`,
              "--r0": `${m.r}%`,
              animation: `wh-glyph-pull ${m.d}s cubic-bezier(0.5, 0, 0.85, 0.5) ${m.delay}s infinite`,
              willChange: "transform, opacity"
            },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "rounded-sm border px-2 py-0.5 font-mono text-[9px] tracking-[0.18em] uppercase backdrop-blur-md",
                style: {
                  color: "oklch(0.92 0.12 200)",
                  borderColor: "oklch(0.7 0.18 220 / 0.5)",
                  background: "oklch(0.08 0.05 270 / 0.6)",
                  boxShadow: "0 0 12px oklch(0.6 0.2 230 / 0.4), inset 0 0 6px oklch(0.7 0.2 230 / 0.2)"
                },
                children: m.label
              }
            )
          },
          `mark-${i}`
        )),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute left-1/2 top-[-6%] -translate-x-1/2 font-mono text-[10px] tracking-[0.35em] uppercase",
            style: {
              color: "oklch(0.82 0.14 200 / 0.75)",
              textShadow: "0 0 10px oklch(0.6 0.22 220 / 0.7)",
              animation: "wh-shimmer 4s ease-in-out infinite"
            },
            children: "☁ Cloud · Infrastructure · DevOps"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute bottom-[-6%] left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.3em] uppercase",
            style: { color: "oklch(0.78 0.14 200 / 0.55)" },
            children: "learning · building · growing"
          }
        ),
        heavyBlur && /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -inset-[8%] rounded-full mix-blend-screen",
            style: {
              background: "conic-gradient(from 0deg, oklch(0.5 0.2 290 / 0.0), oklch(0.5 0.2 290 / 0.18) 20%, transparent 35%, oklch(0.55 0.18 240 / 0.12) 55%, transparent 75%, oklch(0.6 0.2 30 / 0.1) 92%, transparent)",
              filter: "blur(28px)",
              animation: "wh-lens-spin 90s linear infinite",
              transformOrigin: "center",
              willChange: "transform"
            }
          }
        )
      ]
    }
  );
});
const STACK = [
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Cpu, label: "Linux & DevOps" },
  { icon: Database, label: "Backend & Infrastructure" }
];
const HIGHLIGHTS = [
  {
    to: "/projects",
    label: "Project Portfolio",
    icon: FolderGit2,
    title: "Selected Projects",
    desc: "Projects across cloud computing, backend development, web applications, and software engineering.",
    meta: "12+ projects"
  },
  {
    to: "/certifications",
    label: "Verified Credentials",
    icon: Award,
    title: "Certifications",
    desc: "Professional certifications and learning achievements in cloud computing, cybersecurity, modern technologies, and soft skills.",
    meta: "8 certifications"
  },
  {
    to: "/story",
    label: "Experiences & Reflections",
    icon: BookOpen,
    title: "My Story",
    desc: "Experiences, community involvement, volunteer work, and lessons learned throughout my technology journey.",
    meta: "Explore stories"
  },
  {
    to: "/journey",
    label: "Continuous Learning",
    icon: Languages,
    title: "Ongoing Journey",
    desc: "Tracking personal growth through language learning, technical development, and new challenges.",
    meta: "Always learning"
  }
];
const HERO_STATS = [
  { v: "12+", l: "Projects completed" },
  { v: "8", l: "Certifications earned" },
  { v: "3+", l: "Years in technology" },
  { v: "3.97", l: "Graduation GPA" }
];
function Home() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative px-4 pt-36 pb-24 sm:pt-40", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass mb-10 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-2 w-2", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-aurora" })
          ] }),
          "Available for cloud & software engineering work · 2026"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "relative z-10 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl", children: [
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Cloud." }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-aurora", children: "Infrastructure." }),
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Exploring how modern technology powers the world." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "relative z-10 mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: "Passionate about cloud computing, infrastructure, and modern software development. This portfolio showcases my projects, certifications, experiences, and continuous journey of learning and growth in technology." }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-12 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxs(WarpLink, { to: "/projects", label: "Mission Archive", className: "group inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]", children: [
            "View Projects",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
          ] }),
          /* @__PURE__ */ jsx(WarpLink, { to: "/about", label: "Origin Point", className: "glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-white/10", children: "About Me" }),
          /* @__PURE__ */ jsxs(WarpLink, { to: "/contact", label: "Communication Terminal", className: "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground", children: [
            /* @__PURE__ */ jsx(Radio, { className: "h-4 w-4" }),
            "Get in touch"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 mt-14 flex flex-wrap items-center gap-2", children: STACK.map((s) => /* @__PURE__ */ jsxs("span", { className: "glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsx(s.icon, { className: "h-3.5 w-3.5 text-aurora" }),
          s.label
        ] }, s.label)) }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10 mt-20 grid max-w-2xl grid-cols-4 gap-8 border-t border-white/5 pt-8", children: HERO_STATS.map((s) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-display text-3xl font-semibold text-aurora", children: s.v }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.l })
        ] }, s.l)) })
      ] }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute hidden lg:block xl:hidden", style: {
        right: "-14%",
        top: "5rem",
        width: "440px",
        height: "440px",
        opacity: 0.55,
        maskImage: "radial-gradient(ellipse 75% 70% at 62% 50%, oklch(0 0 0) 30%, oklch(0 0 0 / 0.85) 55%, oklch(0 0 0 / 0.35) 78%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 62% 50%, oklch(0 0 0) 30%, oklch(0 0 0 / 0.85) 55%, oklch(0 0 0 / 0.35) 78%, transparent 100%)"
      }, children: /* @__PURE__ */ jsx(Portal, { className: "h-full w-full" }) }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute hidden xl:block", style: {
        right: "-6%",
        top: "4rem",
        width: "500px",
        height: "500px",
        opacity: 0.65,
        maskImage: "radial-gradient(ellipse 78% 72% at 62% 50%, oklch(0 0 0) 32%, oklch(0 0 0 / 0.88) 58%, oklch(0 0 0 / 0.4) 80%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 78% 72% at 62% 50%, oklch(0 0 0) 32%, oklch(0 0 0 / 0.88) 58%, oklch(0 0 0 / 0.4) 80%, transparent 100%)"
      }, children: /* @__PURE__ */ jsx(Portal, { className: "h-full w-full" }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative px-4 py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-10 flex items-end justify-between gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-aurora", children: "▸ Explore the archive" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl", children: "Pick a chapter." })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline", children: "warp-enabled navigation" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: HIGHLIGHTS.map((h) => /* @__PURE__ */ jsxs(WarpLink, { to: h.to, label: h.label, className: "group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.08]", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent/20 via-cosmic/10 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsx("div", { className: "glass flex h-10 w-10 items-center justify-center rounded-xl", children: /* @__PURE__ */ jsx(h.icon, { className: "h-5 w-5 text-aurora" }) }),
          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aurora" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-baseline justify-between gap-4", children: [
          /* @__PURE__ */ jsx("h3", { className: "font-display text-xl font-semibold", children: h.title }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-accent", children: h.meta })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: h.desc }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: [
          "▸ destination · ",
          h.label
        ] })
      ] }, h.to)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative px-4 py-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong relative overflow-hidden rounded-3xl p-10 sm:p-14", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-50 blur-3xl", style: {
        background: "radial-gradient(circle, oklch(0.65 0.25 285 / 0.6), transparent 70%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid gap-8 sm:grid-cols-[1.4fr_1fr] sm:items-center", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-aurora", children: "▸ open transmission" }),
          /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Let's build reliable technology together." }) }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-sm text-muted-foreground", children: "Open to opportunities in cloud computing, infrastructure, DevOps, and software engineering. Always excited to learn, collaborate, and contribute to meaningful technology projects." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-3 sm:justify-end", children: [
          /* @__PURE__ */ jsxs(WarpLink, { to: "/contact", label: "Communication Terminal", className: "inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]", children: [
            "Open channel",
            /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxs(WarpLink, { to: "/journey", label: "Timeline Explorer", className: "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground", children: [
            /* @__PURE__ */ jsx(Compass, { className: "h-4 w-4" }),
            "See what I'm learning"
          ] })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  Home as component
};
