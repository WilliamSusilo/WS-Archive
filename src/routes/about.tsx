import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { Sparkles, Brain, Globe } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — WS Archive" },
      {
        name: "description",
        content:
          "Origin signal: a tech-focused creative navigating cloud, AI, and human-centered software.",
      },
      { property: "og:title", content: "About — WS Archive" },
      {
        property: "og:description",
        content: "Operating principles and the milestones that shaped the journey.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const milestones = [
    {
      year: "2022",
      title: "The Beginning",
      body: "Started studying Informatics Engineering and discovered a passion for technology, software development, and continuous learning.",
    },
    {
      year: "2023",
      title: "Joining Communities",
      body: "Contributed to technology communities, collaborated with peers, and developed leadership experience through student organizations and developer programs.",
    },
    {
      year: "2024",
      title: "Entering the Cloud",
      body: "Joined Bangkit Academy's Cloud Computing path and began building cloud-native solutions using Google Cloud Platform.",
    },
    {
      year: "2025",
      title: "Industry Experience",
      body: "Applied technical skills in professional environments through software engineering and backend development projects.",
    },
    {
      year: "2025",
      title: "Cloud Recognition",
      body: "Earned Cloud Distinction Graduate and Google Associate Cloud Engineer credentials, marking a significant step toward a cloud-focused career.",
    },
    {
      year: "2026",
      title: "Next Chapter",
      body: "Graduated with honors and continue expanding expertise in cloud infrastructure, DevOps, and scalable systems.",
    },
  ];
  return (
    <PageShell>
      <div className="pt-10" />
      <Section
        eyebrow="Origin Signal"
        title="Passionate about Cloud Computing, Infrastructure, and Modern Software Development."
      >
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5 text-muted-foreground">
            <p>
              I am an Informatics Engineering graduate passionate about{" "}
              <span className="text-foreground">cloud computing</span>,{" "}
              <span className="text-foreground">infrastructure engineering</span>, and{" "}
              <span className="text-foreground">software development</span>. My experience spans
              backend systems, cloud platforms, and modern technologies that support reliable,
              scalable, and efficient software solutions.
            </p>

            <p>
              Through academic projects, professional experience, and cloud-focused programs, I have
              developed hands-on expertise in{" "}
              <span className="text-foreground">Google Cloud Platform</span>,{" "}
              <span className="text-foreground">Linux environments</span>, and{" "}
              <span className="text-foreground">infrastructure technologies</span>. I enjoy
              understanding how applications and infrastructure work together to deliver secure,
              resilient, and high-performing systems while continuously expanding my knowledge in
              cloud and DevOps practices.
            </p>
            <div className="glass mt-6 rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-aurora">What drives me</div>

              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 text-accent" />
                  Curiosity — I enjoy exploring new technologies and understanding how things work.
                </li>

                <li className="flex items-start gap-2">
                  <Brain className="mt-0.5 h-4 w-4 text-accent" />
                  Growth — I believe continuous learning is the foundation of a successful career in
                  technology.
                </li>

                <li className="flex items-start gap-2">
                  <Globe className="mt-0.5 h-4 w-4 text-accent" />
                  Contribution — I aim to build solutions that create value for users, teams, and
                  organizations.
                </li>
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
            <ul className="space-y-6">
              {milestones.map((m) => (
                <li key={m.year} className="relative pl-14">
                  <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full glass-strong shadow-glow-sm">
                    <span className="font-mono text-[10px] text-aurora">{m.year.slice(2)}</span>
                  </div>
                  <div className="glass rounded-2xl p-4 transition-transform hover:-translate-y-0.5">
                    <div className="text-xs text-muted-foreground">{m.year}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{m.title}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{m.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
