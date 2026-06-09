import { memo, useMemo } from "react";
import {
  Cloud,
  Box,
  Hexagon,
  Award,
  Clock,
  Crosshair,
  Database,
  GitBranch,
  Cpu,
  Network,
} from "lucide-react";
import { usePortalQuality } from "@/hooks/usePortalQuality";

/**
 * Wormhole portal — a spacetime gateway rendered as a layered composition of
 * accretion disk, photon ring, deep core, infalling matter, and orbiting
 * career glyphs. Heavy arrays (particles, lens stars) are precomputed once
 * via useMemo and scale to the active quality profile.
 */
export const Portal = memo(function Portal({ className = "" }: { className?: string }) {
  const { infallCount, lensStarCount, heavyBlur } = usePortalQuality();

  const infall = useMemo(
    () =>
      Array.from({ length: infallCount }).map((_, i) => ({
        a: `${(i * 360) / infallCount + (i % 3) * 7}deg`,
        r0: `${42 + ((i * 11) % 22)}%`,
        d: `${3.6 + ((i * 17) % 40) / 10}s`,
        delay: `${((i * 13) % 50) / 10}s`,
        size: 1 + (i % 3),
      })),
    [infallCount],
  );

  const lensStars = useMemo(
    () =>
      Array.from({ length: lensStarCount }).map((_, i) => {
        const angle = (i * 360) / lensStarCount + (i % 5) * 3;
        const radius = 52 + ((i * 7) % 18);
        const rad = (angle * Math.PI) / 180;
        return {
          left: `${50 + Math.cos(rad) * radius}%`,
          top: `${50 + Math.sin(rad) * radius}%`,
          delay: `${(i % 9) * 0.4}s`,
          length: 6 + (i % 4) * 3,
          angle: `${angle + 90}deg`,
          opacity: 0.4 + (i % 5) / 10,
        };
      }),
    [lensStarCount],
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
      { Icon: Network, a: 280, r0: 54, d: 22, delay: 7, hue: "oklch(0.82 0.16 295)" },
    ],
    [],
  );

  const ticks = useMemo(
    () =>
      Array.from({ length: 36 }).map((_, i) => ({
        angle: i * 10,
        major: i % 3 === 0,
      })),
    [],
  );

  const markers = [
    { label: "Informatics · 2022", a: 30, r: 58, d: 28, delay: 0 },
    { label: "DevFest · 2024", a: 110, r: 60, d: 32, delay: 4 },
    { label: "Bangkit CC · 2024", a: 195, r: 57, d: 30, delay: 8 },
    { label: "ACE · 2025", a: 295, r: 59, d: 34, delay: 12 },
  ];

  return (
    <div
      className={`relative aspect-square ${className}`}
      style={{ perspective: "1200px", transformStyle: "preserve-3d" as const }}
      aria-label="Spacetime wormhole — the gateway into a Cloud Engineer's chronicle"
      role="img"
    >
      {/* Outer volumetric dust glow */}
      {heavyBlur && (
        <div
          className="pointer-events-none absolute -inset-[18%] rounded-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, oklch(0.55 0.22 290 / 0.35) 0%, oklch(0.4 0.2 270 / 0.18) 25%, transparent 60%)",
            filter: "blur(40px)",
            animation: "pulse-glow 7s ease-in-out infinite",
            willChange: "opacity",
          }}
        />
      )}

      {/* Spacetime ripples */}
      {[0, 1, 2, 3].map((i) => (
        <div
          key={`ripple-${i}`}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: "78%",
            height: "78%",
            border: "1px solid oklch(0.78 0.18 290 / 0.35)",
            animation: `wh-ripple 6s ease-out ${i * 1.5}s infinite`,
            willChange: "transform, opacity",
          }}
        />
      ))}

      {/* Gravitationally distorted starfield ring */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
        style={{
          maskImage:
            "radial-gradient(circle at 50% 50%, transparent 28%, oklch(0 0 0) 38%, oklch(0 0 0) 62%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 50%, transparent 28%, oklch(0 0 0) 38%, oklch(0 0 0) 62%, transparent 78%)",
        }}
      >
        {lensStars.map((s, i) => (
          <span
            key={`ls-${i}`}
            className="absolute block rounded-full"
            style={{
              left: s.left,
              top: s.top,
              width: `${s.length}px`,
              height: "1px",
              background: "linear-gradient(90deg, transparent, oklch(0.98 0.04 285), transparent)",
              transform: `rotate(${s.angle})`,
              opacity: s.opacity,
              filter: "blur(0.4px)",
              animation: `wh-shimmer ${3 + (i % 5) * 0.5}s ease-in-out ${s.delay} infinite`,
            }}
          />
        ))}
      </div>

      {/* Lensing chromatic refraction ring */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: "92%",
          height: "92%",
          transform: "translate(-50%, -50%) translateZ(0)",
          background:
            "conic-gradient(from 0deg, oklch(0.7 0.22 25 / 0.35), transparent 18%, oklch(0.65 0.22 200 / 0.4) 40%, transparent 58%, oklch(0.72 0.22 295 / 0.45) 78%, transparent)",
          maskImage:
            "radial-gradient(circle, transparent 44%, oklch(0 0 0) 47%, oklch(0 0 0) 50%, transparent 53%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 44%, oklch(0 0 0) 47%, oklch(0 0 0) 50%, transparent 53%)",
          filter: heavyBlur ? "blur(2px)" : "none",
          animation: "wh-lens-spin 50s linear infinite",
          transformOrigin: "center",
          willChange: "transform",
        }}
      />

      {/* Accretion disk (back half) */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: "118%",
          height: "118%",
          transform: "translate(-50%, -50%) rotateX(74deg)",
          background:
            "conic-gradient(from 0deg, oklch(0.95 0.2 60 / 0.0), oklch(0.85 0.22 50 / 0.85) 20%, oklch(0.78 0.24 30 / 0.95) 35%, oklch(0.6 0.2 290 / 0.6) 55%, oklch(0.72 0.22 230 / 0.85) 72%, oklch(0.92 0.2 80 / 0.9) 90%, oklch(0.95 0.2 60 / 0.0))",
          maskImage:
            "radial-gradient(circle, transparent 30%, oklch(0 0 0 / 0.6) 38%, oklch(0 0 0) 46%, oklch(0 0 0) 62%, oklch(0 0 0 / 0.5) 76%, transparent 92%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 30%, oklch(0 0 0 / 0.6) 38%, oklch(0 0 0) 46%, oklch(0 0 0) 62%, oklch(0 0 0 / 0.5) 76%, transparent 92%)",
          filter: heavyBlur ? "blur(3px) saturate(1.4)" : "saturate(1.4)",
          animation: "wh-disk-spin 18s linear infinite",
          transformOrigin: "center",
          willChange: "transform",
        }}
      />

      {/* Accretion disk (turbulent overlay, counter-rotating) */}
      {heavyBlur && (
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full mix-blend-screen"
          style={{
            width: "112%",
            height: "112%",
            transform: "translate(-50%, -50%) rotateX(74deg)",
            background:
              "conic-gradient(from 90deg, transparent, oklch(0.95 0.2 80 / 0.5) 10%, transparent 22%, oklch(0.8 0.24 25 / 0.7) 35%, transparent 50%, oklch(0.85 0.2 200 / 0.4) 68%, transparent 82%, oklch(0.95 0.22 60 / 0.6) 95%, transparent)",
            maskImage:
              "radial-gradient(circle, transparent 32%, oklch(0 0 0 / 0.7) 40%, oklch(0 0 0) 48%, oklch(0 0 0) 58%, oklch(0 0 0 / 0.5) 72%, transparent 86%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 32%, oklch(0 0 0 / 0.7) 40%, oklch(0 0 0) 48%, oklch(0 0 0) 58%, oklch(0 0 0 / 0.5) 72%, transparent 86%)",
            filter: "blur(6px)",
            animation: "wh-disk-spin-rev 26s linear infinite",
            transformOrigin: "center",
            willChange: "transform",
          }}
        />
      )}

      {/* Doppler-bright photon ring */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: "76%",
          height: "76%",
          transform: "translate(-50%, -50%) translateZ(0)",
          boxShadow:
            "0 0 24px 2px oklch(0.95 0.18 60 / 0.8), 0 0 60px 8px oklch(0.78 0.24 35 / 0.55), inset 0 0 30px 4px oklch(0.95 0.2 80 / 0.45)",
          background:
            "conic-gradient(from -30deg, transparent 0%, oklch(0.98 0.18 70 / 0.95) 8%, transparent 22%, transparent 78%, oklch(0.92 0.2 50 / 0.85) 92%, transparent)",
          maskImage:
            "radial-gradient(circle, transparent 46%, oklch(0 0 0) 48%, oklch(0 0 0) 50%, transparent 52%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 46%, oklch(0 0 0) 48%, oklch(0 0 0) 50%, transparent 52%)",
          animation: "wh-photon 4s ease-in-out infinite",
          willChange: "opacity",
        }}
      />

      {/* Depth layers — nested fading rings */}
      {[0.7, 0.6, 0.5, 0.42, 0.34, 0.27, 0.2].map((scale, i) => (
        <div
          key={`depth-${i}`}
          className="pointer-events-none absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: `${scale * 100}%`,
            height: `${scale * 100}%`,
            transform: "translate(-50%, -50%)",
            border: `1px solid oklch(0.7 0.18 ${260 + i * 8} / ${0.5 - i * 0.05})`,
            boxShadow: `inset 0 0 ${30 - i * 3}px oklch(0 0 0 / ${0.4 + i * 0.07})`,
          }}
        />
      ))}

      {/* Event horizon — infinitely deep core */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 rounded-full overflow-hidden"
        style={{
          width: "48%",
          height: "48%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at 50% 50%, oklch(0 0 0) 0%, oklch(0.02 0.02 280) 35%, oklch(0.05 0.06 285) 65%, oklch(0.1 0.1 290 / 0.6) 100%)",
          animation: "wh-core-breathe 6s ease-in-out infinite",
        }}
      >
        {[0.85, 0.7, 0.55, 0.4, 0.26, 0.14].map((s, i) => (
          <div
            key={`well-${i}`}
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: `${s * 100}%`,
              height: `${s * 100}%`,
              transform: "translate(-50%, -50%)",
              border: `1px solid oklch(0.6 0.2 ${270 + i * 6} / ${0.3 - i * 0.04})`,
              boxShadow: `inset 0 0 ${24 - i * 3}px oklch(0 0 0 / 0.9)`,
            }}
          />
        ))}
        <div
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: "4px",
            height: "4px",
            transform: "translate(-50%, -50%)",
            background: "oklch(0.98 0.04 285)",
            boxShadow:
              "0 0 8px 2px oklch(0.85 0.18 285 / 0.9), 0 0 18px 6px oklch(0.6 0.22 290 / 0.4)",
            animation: "wh-shimmer 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Inward-falling matter particles */}
      {infall.map((p, i) => (
        <span
          key={`inf-${i}`}
          className="pointer-events-none absolute left-1/2 top-1/2 block rounded-full"
          style={
            {
              "--a": p.a,
              "--r0": p.r0,
              width: `${p.size}px`,
              height: `${p.size}px`,
              background: "oklch(0.95 0.16 60)",
              boxShadow: "0 0 6px oklch(0.95 0.2 50 / 0.8), 0 0 14px oklch(0.78 0.22 35 / 0.6)",
              animation: `wh-infall ${p.d} cubic-bezier(0.45, 0, 0.9, 0.6) ${p.delay} infinite`,
              willChange: "transform, opacity",
            } as React.CSSProperties
          }
        />
      ))}

      {/* Holographic coordinate ticks (HUD rim) */}
      <div
        className="pointer-events-none absolute inset-[4%] rounded-full"
        style={{
          animation: "wh-lens-spin-rev 120s linear infinite",
          transformOrigin: "center",
          willChange: "transform",
        }}
      >
        {ticks.map((t, i) => (
          <div
            key={`tick-${i}`}
            className="absolute left-1/2 top-0 origin-bottom"
            style={{
              height: "50%",
              transform: `translateX(-50%) rotate(${t.angle}deg)`,
            }}
          >
            <div
              className="mx-auto"
              style={{
                width: t.major ? "2px" : "1px",
                height: t.major ? "10px" : "5px",
                background: t.major ? "oklch(0.85 0.16 200 / 0.75)" : "oklch(0.78 0.1 240 / 0.4)",
                boxShadow: t.major ? "0 0 6px oklch(0.78 0.2 200 / 0.6)" : "none",
              }}
            />
            {t.major && (
              <div
                className="mx-auto mt-1 font-mono text-[8px] tracking-[0.2em]"
                style={{ color: "oklch(0.78 0.14 200 / 0.6)" }}
              >
                {String(t.angle).padStart(3, "0")}°
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Career glyphs orbiting & spiraling into singularity */}
      {glyphs.map((g, i) => {
        const Icon = g.Icon;
        return (
          <div
            key={`glyph-${i}`}
            className="pointer-events-none absolute left-1/2 top-1/2 grid place-items-center"
            style={
              {
                "--a": `${g.a}deg`,
                "--r0": `${g.r0}%`,
                width: "28px",
                height: "28px",
                animation: `wh-glyph-pull ${g.d}s cubic-bezier(0.5, 0, 0.85, 0.5) ${g.delay}s infinite`,
                willChange: "transform, opacity",
              } as React.CSSProperties
            }
          >
            <div
              className="grid h-7 w-7 place-items-center rounded-md backdrop-blur-sm"
              style={{
                background: "oklch(0.1 0.06 285 / 0.55)",
                border: `1px solid ${g.hue.replace(")", " / 0.6)")}`,
                boxShadow: `0 0 12px ${g.hue.replace(")", " / 0.55)")}, inset 0 0 8px oklch(0 0 0 / 0.4)`,
              }}
            >
              <Icon className="h-3.5 w-3.5" style={{ color: g.hue }} />
            </div>
          </div>
        );
      })}

      {/* Certification fragments & timeline markers */}
      {markers.map((m, i) => (
        <div
          key={`mark-${i}`}
          className="pointer-events-none absolute left-1/2 top-1/2"
          style={
            {
              "--a": `${m.a}deg`,
              "--r0": `${m.r}%`,
              animation: `wh-glyph-pull ${m.d}s cubic-bezier(0.5, 0, 0.85, 0.5) ${m.delay}s infinite`,
              willChange: "transform, opacity",
            } as React.CSSProperties
          }
        >
          <div
            className="rounded-sm border px-2 py-0.5 font-mono text-[9px] tracking-[0.18em] uppercase backdrop-blur-md"
            style={{
              color: "oklch(0.92 0.12 200)",
              borderColor: "oklch(0.7 0.18 220 / 0.5)",
              background: "oklch(0.08 0.05 270 / 0.6)",
              boxShadow:
                "0 0 12px oklch(0.6 0.2 230 / 0.4), inset 0 0 6px oklch(0.7 0.2 230 / 0.2)",
            }}
          >
            {m.label}
          </div>
        </div>
      ))}

      {/* Holographic coordinate readouts */}
      <div
        className="pointer-events-none absolute left-1/2 top-[-6%] -translate-x-1/2 font-mono text-[10px] tracking-[0.35em] uppercase"
        style={{
          color: "oklch(0.82 0.14 200 / 0.75)",
          textShadow: "0 0 10px oklch(0.6 0.22 220 / 0.7)",
          animation: "wh-shimmer 4s ease-in-out infinite",
        }}
      >
        ☁ Cloud · Infrastructure · DevOps
      </div>
      <div
        className="pointer-events-none absolute bottom-[-6%] left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.3em] uppercase"
        style={{ color: "oklch(0.78 0.14 200 / 0.55)" }}
      >
        learning · building · growing
      </div>

      {/* Volumetric cosmic dust */}
      {heavyBlur && (
        <div
          className="pointer-events-none absolute -inset-[8%] rounded-full mix-blend-screen"
          style={{
            background:
              "conic-gradient(from 0deg, oklch(0.5 0.2 290 / 0.0), oklch(0.5 0.2 290 / 0.18) 20%, transparent 35%, oklch(0.55 0.18 240 / 0.12) 55%, transparent 75%, oklch(0.6 0.2 30 / 0.1) 92%, transparent)",
            filter: "blur(28px)",
            animation: "wh-lens-spin 90s linear infinite",
            transformOrigin: "center",
            willChange: "transform",
          }}
        />
      )}
    </div>
  );
});
