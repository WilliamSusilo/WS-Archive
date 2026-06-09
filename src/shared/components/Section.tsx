import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  eyebrow: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, eyebrow, title, children }: SectionProps) {
  return (
    <section id={id} className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-aurora">▸ {eyebrow}</div>
          <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            <span className="text-gradient">{title}</span>
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}