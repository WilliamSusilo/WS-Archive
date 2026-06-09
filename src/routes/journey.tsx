import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { JOURNEY_TRACKS } from "@/content/journey";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — WS Archive" },
      {
        name: "description",
        content: "Live trajectory — ongoing learning loops across languages, AGI, and cloud.",
      },
      { property: "og:title", content: "Journey — WS Archive" },
      {
        property: "og:description",
        content: "A futuristic dashboard of current learning progress.",
      },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <PageShell>
      <div className="pt-10" />
      <Section
        eyebrow="Current Trajectory"
        title="Building skills today for the systems of tomorrow."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {JOURNEY_TRACKS.map((t) => {
            const Icon = t.icon;
            return (
              <div key={t.name} className="glass rounded-2xl p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-aurora/15 text-aurora">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-base font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.note}</div>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-aurora">{t.value}%</span>
                </div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-aurora shadow-glow-sm transition-all duration-700"
                    style={{ width: `${t.value}%` }}
                  />
                </div>
                <div className="mt-3 flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  <span>start</span>
                  <span>mastery</span>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </PageShell>
  );
}
