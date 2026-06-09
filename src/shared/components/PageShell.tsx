import type { ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { Starfield } from "./Starfield";
import { Nav } from "./Nav";

export function PageShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="relative min-h-screen overflow-x-hidden font-sans text-foreground">
      <Starfield />
      <Nav />
      <main key={pathname} className="animate-warp-in">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
        <span className="font-mono">
          ◐ A living archive of projects, certifications, and engineering milestones · v1.0
        </span>
        <span>
          © {new Date().getFullYear()} William Susilo · Engineering the future, one chapter at a
          time.
        </span>
      </div>
    </footer>
  );
}
