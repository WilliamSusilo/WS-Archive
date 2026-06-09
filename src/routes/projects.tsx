import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { ArrowUpRight, Github, ExternalLink, Star } from "lucide-react";
import { PROJECTS } from "@/content/projects";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — WS Archive" },
      {
        name: "description",
        content:
          "A collection of projects spanning cloud computing, backend development, mobile applications, and web platforms.",
      },
      { property: "og:title", content: "Projects — WS Archive" },
      {
        property: "og:description",
        content:
          "Selected projects showcasing technical skills, learning experiences, and real-world solutions.",
      },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <PageShell>
      <div className="pt-10" />

      <Section eyebrow="Project Portfolio" title="Projects that shaped my technical journey.">
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <article
              key={p.coord}
              className="group glass relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-cosmic"
            >
              {/* Glow Effect */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/30 blur-3xl" />
              </div>

              {/* Project Image */}
              {p.image && (
                <div className="overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="relative p-7">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-aurora">▸ {p.coord}</span>
                    <span className="text-xs text-muted-foreground">{p.year}</span>
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-all hover:text-aurora"
                    aria-label={`Open ${p.title} repository`}
                  >
                    <ArrowUpRight className="h-5 w-5 transition-all hover:-translate-y-0.5 hover:translate-x-0.5" />
                  </a>
                </div>

                {/* Featured Badge */}
                {p.featured && (
                  <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-aurora/10 px-3 py-1 text-[10px] uppercase tracking-wider text-aurora">
                    <Star className="h-3 w-3" />
                    Featured Project
                  </div>
                )}

                {/* Title */}
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight">
                  {p.title}
                </h3>

                {/* Tag */}
                <div className="mt-1 text-xs uppercase tracking-wider text-accent">{p.tag}</div>

                {/* Role */}
                {p.role && <div className="mt-2 text-xs text-muted-foreground">Role: {p.role}</div>}

                {/* Description */}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>

                {/* Tech Stack */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {(p.github || p.demo) && (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs transition-all hover:border-aurora hover:text-aurora"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    )}

                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs transition-all hover:border-aurora hover:text-aurora"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
