import { memo } from "react";

/**
 * Ambient starfield + nebula glows rendered behind every page.
 * Pure presentational; memoized so route changes never recompute the layer.
 */
export const Starfield = memo(function Starfield() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 starfield opacity-60" />
      <div
        className="absolute inset-0 starfield opacity-30 animate-drift"
        style={{ backgroundSize: "600px 600px", willChange: "background-position" }}
      />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cosmic/25 blur-[120px]" />
    </div>
  );
});