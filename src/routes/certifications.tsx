import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { Award, ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/content/certifications";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — WS Archive" },
      {
        name: "description",
        content:
          "Verified certifications in cloud computing, cybersecurity, software development, and infrastructure technologies.",
      },
      {
        property: "og:title",
        content: "Certifications — WS Archive",
      },
      {
        property: "og:description",
        content:
          "A collection of certifications that reflect my continuous learning journey in cloud, infrastructure, and technology.",
      },
    ],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <PageShell>
      <div className="pt-10" />

      <Section
        eyebrow="Professional Certifications"
        title="Credentials that reflect my learning journey."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c) => {
            const Icon = c.icon;

            const CardContent = (
              <>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent/0 via-primary/10 to-cosmic/0 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-aurora/20 text-aurora">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      {c.featured && (
                        <span className="rounded-full bg-aurora/20 px-2 py-1 text-[10px] font-medium text-aurora">
                          Featured
                        </span>
                      )}

                      <Award className="h-4 w-4 text-muted-foreground/60" />
                    </div>
                  </div>

                  <div className="mt-5 font-display text-base font-semibold">{c.name}</div>

                  <div className="mt-1 text-xs text-muted-foreground">{c.issuer}</div>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-accent">
                      verified
                    </span>

                    <span className="text-[10px] text-muted-foreground">{c.year}</span>
                  </div>
                </div>
              </>
            );

            if (c.credentialUrl) {
              return (
                <a
                  key={c.name}
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-500 hover:-translate-y-1"
                >
                  {CardContent}

                  <ExternalLink className="absolute right-4 top-4 h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              );
            }

            return (
              <div
                key={c.name}
                className="group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-500 hover:-translate-y-1"
              >
                {CardContent}
              </div>
            );
          })}
        </div>
      </Section>
    </PageShell>
  );
}
