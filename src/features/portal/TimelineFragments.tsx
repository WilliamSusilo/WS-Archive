import { memo, useMemo } from "react";
import { FRAGMENTS } from "@/constants/portal";

/** Career-timeline fragment chips that fly through the wormhole. */
export const TimelineFragments = memo(function TimelineFragments() {
  const glyphs = useMemo(
    () =>
      FRAGMENTS.map((f, i) => {
        const angle = (i * 360) / FRAGMENTS.length;
        const r = 18 + (i % 4) * 4;
        const rad = (angle * Math.PI) / 180;
        return {
          ...f,
          x0: `${Math.cos(rad) * r}vmax`,
          y0: `${Math.sin(rad) * r}vmax`,
          gr: `${(i * 37) % 360}deg`,
          delay: 0.05 + ((i * 13) % 17) / 22,
          d: 1.5 + ((i * 5) % 10) / 12,
        };
      }),
    [],
  );

  return (
    <>
      {glyphs.map((g, i) => (
        <div
          key={`g${i}`}
          className="absolute left-1/2 top-1/2"
          style={
            {
              "--x0": g.x0,
              "--y0": g.y0,
              "--gr": g.gr,
              animation: `wt-glyph ${g.d}s cubic-bezier(0.5, 0, 0.8, 0.6) ${g.delay}s infinite`,
              willChange: "transform, opacity",
            } as React.CSSProperties
          }
        >
          <div
            className="rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur-md"
            style={{
              color: g.c,
              borderColor: g.c.replace(")", " / 0.5)"),
              background: "oklch(0.08 0.05 270 / 0.55)",
              boxShadow: `0 0 14px ${g.c.replace(")", " / 0.45)")}`,
            }}
          >
            {g.t}
          </div>
        </div>
      ))}
    </>
  );
});