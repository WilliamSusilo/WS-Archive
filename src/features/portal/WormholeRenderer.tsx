import { memo, useMemo } from "react";
import { TimelineFragments } from "./TimelineFragments";
import type { QualityProfile } from "@/types/portal";

interface Props {
  quality: QualityProfile;
}

/**
 * The animated wormhole "tunnel" rendered behind the HUD during transitions.
 * Memoized + driven by the active quality profile; precomputed particle
 * arrays never recompute on re-render.
 */
export const WormholeRenderer = memo(function WormholeRenderer({ quality }: Props) {
  const { ringCount, streakCount, dustCount, heavyBlur } = quality;

  const rings = useMemo(
    () =>
      Array.from({ length: ringCount }).map((_, i) => ({
        delay: i * 0.06,
        hue: 260 + (i % 4) * 12,
        rot: (i * 23) % 360,
      })),
    [ringCount],
  );

  const streaks = useMemo(
    () =>
      Array.from({ length: streakCount }).map((_, i) => ({
        a: `${(i * 360) / streakCount + (i % 3) * 6}deg`,
        d: 0.9 + ((i * 7) % 10) / 10,
        delay: ((i * 11) % 20) / 30,
      })),
    [streakCount],
  );

  const dust = useMemo(
    () =>
      Array.from({ length: dustCount }).map((_, i) => {
        const angle = (i * 360) / dustCount + (i % 5) * 4;
        const rad = (angle * Math.PI) / 180;
        const r = 12 + (i % 7) * 3;
        return {
          x0: `${Math.cos(rad) * r}vmax`,
          y0: `${Math.sin(rad) * r}vmax`,
          gr: `${angle}deg`,
          d: 1.2 + ((i * 7) % 10) / 9,
          delay: ((i * 11) % 18) / 22,
          size: 1 + (i % 3),
          c: i % 4 === 0 ? "oklch(0.98 0.16 60)" : "oklch(0.92 0.14 285)",
        };
      }),
    [dustCount],
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden"
      style={{
        perspective: "1100px",
        perspectiveOrigin: "50% 50%",
        transformStyle: "preserve-3d",
        animation: "wt-shake 220ms ease-in-out 5",
      }}
    >
      {/* Outer chromatic lensing halo */}
      {heavyBlur && (
        <div
          className="absolute left-1/2 top-1/2 aspect-square rounded-full"
          style={{
            width: "85vmax",
            transform: "translate(-50%, -50%) translateZ(0)",
            background:
              "conic-gradient(from 0deg, transparent 0%, oklch(0.7 0.22 25 / 0.18) 15%, transparent 35%, oklch(0.68 0.22 200 / 0.22) 55%, transparent 72%, oklch(0.72 0.22 295 / 0.25) 88%, transparent)",
            maskImage:
              "radial-gradient(circle, transparent 22%, oklch(0 0 0) 32%, oklch(0 0 0) 60%, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 22%, oklch(0 0 0) 32%, oklch(0 0 0) 60%, transparent 78%)",
            filter: "blur(14px)",
            animation: "lens-rotate 6s linear infinite, portal-fade 2.1s ease-out both",
            willChange: "transform, opacity",
          }}
        />
      )}

      {/* Volumetric cosmic dust shell */}
      {heavyBlur && (
        <div
          className="absolute left-1/2 top-1/2 aspect-square rounded-full mix-blend-screen"
          style={{
            width: "110vmax",
            transform: "translate(-50%, -50%) translateZ(0)",
            background:
              "conic-gradient(from 90deg, oklch(0.5 0.2 290 / 0.0), oklch(0.55 0.2 290 / 0.22) 25%, transparent 45%, oklch(0.5 0.18 230 / 0.15) 65%, transparent 85%, oklch(0.6 0.2 30 / 0.12) 98%, transparent)",
            filter: "blur(40px)",
            animation: "lens-rotate 22s linear infinite, portal-fade 2.1s ease-out both",
            willChange: "transform, opacity",
          }}
        />
      )}

      {/* Tunnel — concentric rings rushing toward viewer */}
      <div className="absolute inset-0" style={{ transformStyle: "preserve-3d" }}>
        {rings.map((r, i) => (
          <div
            key={`r${i}`}
            className="absolute left-1/2 top-1/2 aspect-square rounded-full"
            style={
              {
                "--rot": `${r.rot}deg`,
                width: "40vmax",
                border: `1px solid oklch(0.72 0.2 ${r.hue} / 0.55)`,
                boxShadow: `0 0 30px oklch(0.6 0.22 ${r.hue} / 0.45), inset 0 0 40px oklch(0.05 0.04 280 / 0.9)`,
                animation: `wt-tunnel 1.6s cubic-bezier(0.45, 0, 0.9, 0.55) ${r.delay}s infinite`,
                transformOrigin: "center",
                willChange: "transform, opacity",
              } as React.CSSProperties
            }
          />
        ))}

        {/* Accretion disk — tilted, rotating */}
        <div
          className="absolute left-1/2 top-1/2 aspect-square rounded-full"
          style={{
            width: "44vmax",
            transform: "translate(-50%, -50%) rotateX(74deg)",
            background:
              "conic-gradient(from 0deg, oklch(0.95 0.2 60 / 0), oklch(0.85 0.22 50 / 0.85) 18%, oklch(0.78 0.24 30 / 0.95) 32%, oklch(0.6 0.2 290 / 0.6) 55%, oklch(0.72 0.22 230 / 0.85) 72%, oklch(0.92 0.2 80 / 0.9) 90%, oklch(0.95 0.2 60 / 0))",
            maskImage:
              "radial-gradient(circle, transparent 34%, oklch(0 0 0) 42%, oklch(0 0 0) 68%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 34%, oklch(0 0 0) 42%, oklch(0 0 0) 68%, transparent 80%)",
            filter: heavyBlur ? "blur(2.5px) saturate(1.35)" : "saturate(1.35)",
            animation: "accretion-spin 5s linear infinite, portal-fade 2.1s ease-out both",
            transformOrigin: "center",
            willChange: "transform, opacity",
          }}
        />

        {/* Photon ring — bright crescent at event horizon */}
        <div
          className="absolute left-1/2 top-1/2 aspect-square rounded-full"
          style={{
            width: "22vmax",
            transform: "translate(-50%, -50%) translateZ(0)",
            background:
              "conic-gradient(from -30deg, transparent 0%, oklch(0.98 0.18 70 / 0.95) 9%, transparent 22%, transparent 76%, oklch(0.94 0.2 50 / 0.9) 92%, transparent)",
            maskImage:
              "radial-gradient(circle, transparent 46%, oklch(0 0 0) 48%, oklch(0 0 0) 51%, transparent 53%)",
            WebkitMaskImage:
              "radial-gradient(circle, transparent 46%, oklch(0 0 0) 48%, oklch(0 0 0) 51%, transparent 53%)",
            boxShadow:
              "0 0 80px 10px oklch(0.85 0.22 45 / 0.55), inset 0 0 40px oklch(0.95 0.18 70 / 0.4)",
            animation: "core-pulse 1.4s ease-in-out infinite, portal-fade 2.1s ease-out both",
            willChange: "transform, opacity",
          }}
        />

        {/* Singularity — infinitely deep core */}
        <div
          className="absolute left-1/2 top-1/2 aspect-square rounded-full"
          style={{
            width: "14vmax",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, #000 0%, #000 60%, oklch(0.04 0.05 280) 82%, transparent 100%)",
            boxShadow:
              "inset 0 0 120px 30px #000, inset 0 0 60px 10px oklch(0.06 0.08 285 / 0.9), 0 0 100px 20px oklch(0.2 0.12 285 / 0.55)",
            animation: "portal-fade 2.1s ease-out both",
          }}
        >
          {[0.8, 0.62, 0.45, 0.3, 0.18].map((s, i) => (
            <div
              key={`well${i}`}
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: `${s * 100}%`,
                height: `${s * 100}%`,
                transform: "translate(-50%, -50%)",
                border: `1px solid oklch(0.6 0.2 ${280 + i * 8} / ${0.35 - i * 0.05})`,
                boxShadow: `inset 0 0 ${24 - i * 3}px oklch(0 0 0 / 0.95)`,
              }}
            />
          ))}
        </div>

        {/* Inward-spiraling dust particles */}
        {dust.map((p, i) => (
          <span
            key={`d${i}`}
            className="absolute left-1/2 top-1/2 block rounded-full"
            style={
              {
                "--x0": p.x0,
                "--y0": p.y0,
                "--gr": p.gr,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: p.c,
                boxShadow: `0 0 6px ${p.c}, 0 0 14px ${p.c.replace(")", " / 0.5)")}`,
                animation: `wt-glyph ${p.d}s cubic-bezier(0.5, 0, 0.85, 0.5) ${p.delay}s infinite`,
                willChange: "transform, opacity",
              } as React.CSSProperties
            }
          />
        ))}

        {/* Radial light streaks */}
        {streaks.map((s, i) => (
          <div
            key={`s${i}`}
            className="absolute left-1/2 top-1/2 h-[1px] origin-left"
            style={
              {
                "--a": s.a,
                width: "60vmax",
                background:
                  "linear-gradient(90deg, transparent 0%, transparent 55%, oklch(0.95 0.16 60 / 0.7) 85%, oklch(0.98 0.06 240) 100%)",
                filter: "blur(0.6px)",
                animation: `wt-streak ${s.d}s cubic-bezier(0.5, 0, 0.7, 1) ${s.delay}s infinite`,
                willChange: "transform, opacity",
              } as React.CSSProperties
            }
          />
        ))}

        <TimelineFragments />
      </div>

      {/* Final iris flash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.98 0.12 60 / 0.4), transparent 35%)",
          animation: "wt-iris 2.1s ease-in-out both",
        }}
      />
    </div>
  );
});