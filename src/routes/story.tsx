import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";
import { Section } from "@/components/Section";
import { Calendar } from "lucide-react";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "My Story — WS Archive" },
      {
        name: "description",
        content: "Field notes from the journey — reflections, talks, milestones, and learning.",
      },
      { property: "og:title", content: "My Story — WS Archive" },
      {
        property: "og:description",
        content: "An activity feed of reflections from across the timeline.",
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  const posts = [
    {
      date: "On Progress",
      tag: "Reading",
      title: "The Psychology of Money",
      body: "Beyond personal finance, the book reinforced the value of compounding effort over time. The same principle applies to technology: small improvements, consistent learning, and patience often create the biggest long-term impact.",
    },

    {
      date: "Keep Going",
      tag: "Learning",
      title: "Exploring Japanese and Mandarin",
      body: "Started dedicating time to language learning through daily practice. Beyond vocabulary and grammar, the experience has strengthened consistency, patience, and curiosity toward different cultures.",
    },

    {
      date: "Nov 2024",
      tag: "Community",
      title: "Front of House Volunteer at DevFest Depok",
      body: "Supported multimedia operations for Cloud, Android, and Machine Learning sessions, helping ensure smooth presentations and an enjoyable experience for both speakers and attendees.",
    },

    {
      date: "Jun 2024",
      tag: "Leadership",
      title: "Helping Lead a Student Developer Community",
      body: "Worked closely with multiple teams to organize learning programs, coordinate events, and foster collaboration among students interested in technology and software development.",
    },

    {
      date: "Mar 2024",
      tag: "Challenge",
      title: "Building planT for Hackfest 2024",
      body: "Collaborated with a team to design and develop a solution focused on sustainable agriculture, transforming ideas into a functional product under competitive deadlines.",
    },

    {
      date: "Oct 2023",
      tag: "Organization",
      title: "Taking Responsibility Behind the Scenes",
      body: "Managed documentation, coordinated internal activities, and supported organizational operations, learning the importance of communication, structure, and accountability.",
    },
  ];
  return (
    <PageShell>
      <div className="pt-10" />
      <Section eyebrow="Field Notes" title="My story, one transmission at a time.">
        <div className="relative mx-auto max-w-2xl">
          <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ul className="space-y-8">
            {posts.map((p, i) => (
              <li
                key={p.title}
                className={`relative pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-[52%] md:text-right" : "md:pl-[52%]"}`}
              >
                <div className="glass rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
                  <div
                    className={`flex items-center gap-2 text-xs text-muted-foreground ${i % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    <Calendar className="h-3 w-3" />
                    <span>{p.date}</span>
                    <span className="rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-aurora">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-semibold leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
                <span className="absolute left-3 top-6 h-3 w-3 rounded-full bg-aurora shadow-glow-sm md:left-1/2 md:-translate-x-1/2" />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </PageShell>
  );
}
