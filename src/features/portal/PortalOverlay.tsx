import { memo } from "react";
import { WormholeRenderer } from "./WormholeRenderer";
import { usePortalQuality } from "@/hooks/usePortalQuality";

interface Props {
  active: boolean;
  label: string;
  coord: string;
}

/**
 * Full-screen overlay rendered during portal transitions.
 *
 * Heavy work (particle arrays, ring computation) lives inside the
 * memoized WormholeRenderer and only mounts while `active === true`,
 * so idle navigation never pays for animation trees.
 */
export const PortalOverlay = memo(function PortalOverlay({ active, label, coord }: Props) {
  const quality = usePortalQuality();

  return (
    <div
      aria-hidden={!active}
      className={`pointer-events-none fixed inset-0 z-[100] ${active ? "" : "opacity-0"}`}
      style={{ transition: "opacity 220ms ease", willChange: "opacity" }}
    >
      <div className={`absolute inset-0 bg-background ${active ? "animate-veil" : ""}`} />

      {active && (
        <>
          <WormholeRenderer quality={quality} />

          {/* Holographic HUD */}
          <div
            className="absolute left-1/2 top-[12%] -translate-x-1/2 text-center font-mono text-[10px] uppercase tracking-[0.4em] animate-hud"
            style={{ color: "oklch(0.85 0.14 200)" }}
          >
            <div style={{ textShadow: "0 0 10px oklch(0.6 0.22 220 / 0.7)" }}>
              ▸ wormhole stabilized
            </div>
            <div className="mt-1 text-muted-foreground">coord {coord}</div>
          </div>
          <div className="absolute bottom-[12%] left-1/2 -translate-x-1/2 text-center animate-hud">
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              destination
            </div>
            <div className="mt-1 font-display text-2xl font-semibold text-gradient">{label}</div>
          </div>

          {/* Side coordinate readouts */}
          <div
            className="absolute left-6 top-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.3em]"
            style={{
              color: "oklch(0.78 0.14 200 / 0.6)",
              animation: "wt-coord 2.1s ease-in-out both",
              writingMode: "vertical-rl",
            }}
          >
            traversal · Δt = 1.1s · curvature ⟶ ∞
          </div>
          <div
            className="absolute right-6 top-1/2 -translate-y-1/2 font-mono text-[9px] uppercase tracking-[0.3em]"
            style={{
              color: "oklch(0.78 0.14 200 / 0.6)",
              animation: "wt-coord 2.1s ease-in-out both",
              writingMode: "vertical-rl",
            }}
          >
            chapter ↦ next · timeline stable
          </div>
        </>
      )}
    </div>
  );
});