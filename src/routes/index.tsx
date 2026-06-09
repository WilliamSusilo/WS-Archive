import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { WarpLink } from "@/components/WarpLink";
import { Portal } from "@/components/Portal";
import { ArrowUpRight, Sparkles, Compass, Radio } from "lucide-react";
import { STACK, HIGHLIGHTS, HERO_STATS } from "@/content/home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WS Archive — My Portfolio" },
      {
        name: "description",
        content:
          "Personal portfolio of a cloud engineer and AI builder — projects, certifications, story, and ongoing journey across the technologies shaping tomorrow.",
      },
      { property: "og:title", content: "WS Archive — Portfolio" },
      {
        property: "og:description",
        content: "Cloud, AI, and software engineering work, told as a journey across time.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <PageShell>
      {/* HERO — professional, content-first */}
      <section className="relative px-4 pt-36 pb-24 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <div className="glass mb-10 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aurora opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-aurora" />
            </span>
            Available for cloud & software engineering work · 2026
          </div>

          <h1 className="relative z-10 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="text-foreground">Cloud.</span>{" "}
            <span className="text-aurora">Infrastructure.</span>
            <br />
            <span className="text-gradient">Exploring how modern technology powers the world.</span>
          </h1>

          <p className="relative z-10 mt-10 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Passionate about cloud computing, infrastructure, and modern software development. This
            portfolio showcases my projects, certifications, experiences, and continuous journey of
            learning and growth in technology.
          </p>

          <div className="relative z-10 mt-12 flex flex-wrap items-center gap-3">
            <WarpLink
              to="/projects"
              label="Mission Archive"
              className="group inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </WarpLink>
            <WarpLink
              to="/about"
              label="Origin Point"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-foreground/90 transition-colors hover:bg-white/10"
            >
              About Me
            </WarpLink>
            <WarpLink
              to="/contact"
              label="Communication Terminal"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Radio className="h-4 w-4" />
              Get in touch
            </WarpLink>
          </div>

          {/* Stack chips */}
          <div className="relative z-10 mt-14 flex flex-wrap items-center gap-2">
            {STACK.map((s) => (
              <span
                key={s.label}
                className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted-foreground"
              >
                <s.icon className="h-3.5 w-3.5 text-aurora" />
                {s.label}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="relative z-10 mt-20 grid max-w-2xl grid-cols-4 gap-8 border-t border-white/5 pt-8">
            {HERO_STATS.map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-semibold text-aurora">{s.v}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacetime gateway — pushed off-canvas right, faded behind copy */}
        <div
          aria-hidden
          className="pointer-events-none absolute hidden lg:block xl:hidden"
          style={{
            right: "-14%",
            top: "5rem",
            width: "440px",
            height: "440px",
            opacity: 0.55,
            maskImage:
              "radial-gradient(ellipse 75% 70% at 62% 50%, oklch(0 0 0) 30%, oklch(0 0 0 / 0.85) 55%, oklch(0 0 0 / 0.35) 78%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 70% at 62% 50%, oklch(0 0 0) 30%, oklch(0 0 0 / 0.85) 55%, oklch(0 0 0 / 0.35) 78%, transparent 100%)",
          }}
        >
          <Portal className="h-full w-full" />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute hidden xl:block"
          style={{
            right: "-6%",
            top: "4rem",
            width: "500px",
            height: "500px",
            opacity: 0.65,
            maskImage:
              "radial-gradient(ellipse 78% 72% at 62% 50%, oklch(0 0 0) 32%, oklch(0 0 0 / 0.88) 58%, oklch(0 0 0 / 0.4) 80%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 78% 72% at 62% 50%, oklch(0 0 0) 32%, oklch(0 0 0 / 0.88) 58%, oklch(0 0 0 / 0.4) 80%, transparent 100%)",
          }}
        >
          <Portal className="h-full w-full" />
        </div>
      </section>

      {/* HIGHLIGHTS GRID */}
      <section className="relative px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-aurora">
                ▸ Explore the archive
              </div>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Pick a chapter.
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:inline">
              warp-enabled navigation
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {HIGHLIGHTS.map((h) => (
              <WarpLink
                key={h.to}
                to={h.to}
                label={h.label}
                className="group glass relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent/20 via-cosmic/10 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                <div className="flex items-start justify-between">
                  <div className="glass flex h-10 w-10 items-center justify-center rounded-xl">
                    <h.icon className="h-5 w-5 text-aurora" />
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aurora" />
                </div>
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-xl font-semibold">{h.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    {h.meta}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
                <div className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  ▸ destination · {h.label}
                </div>
              </WarpLink>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="glass-strong relative overflow-hidden rounded-3xl p-10 sm:p-14">
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-50 blur-3xl"
              style={{
                background: "radial-gradient(circle, oklch(0.65 0.25 285 / 0.6), transparent 70%)",
              }}
            />
            <div className="relative grid gap-8 sm:grid-cols-[1.4fr_1fr] sm:items-center">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-aurora">
                  ▸ open transmission
                </div>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                  <span className="text-gradient">Let's build reliable technology together.</span>
                </h2>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  Open to opportunities in cloud computing, infrastructure, DevOps, and software
                  engineering. Always excited to learn, collaborate, and contribute to meaningful
                  technology projects.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                <WarpLink
                  to="/contact"
                  label="Communication Terminal"
                  className="inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
                >
                  Open channel
                  <Sparkles className="h-4 w-4" />
                </WarpLink>
                <WarpLink
                  to="/journey"
                  label="Timeline Explorer"
                  className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Compass className="h-4 w-4" />
                  See what I'm learning
                </WarpLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
