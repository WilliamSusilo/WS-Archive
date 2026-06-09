import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WarpLink } from "./WarpLink";
import { NAV_LINKS } from "@/constants/routes";

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-4 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-5xl">
      <nav className="glass-strong flex items-center justify-between rounded-full px-5 py-2.5 shadow-glow-sm">
        <WarpLink
          to="/"
          label="Home Coordinate"
          className="font-display text-sm font-semibold tracking-wider text-aurora"
        >
          ◐ WS | ARCHIVE
        </WarpLink>
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <WarpLink
                to={l.to}
                label={l.dest}
                activeClassName="bg-white/10 text-foreground"
                className="rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
              >
                {l.label}
              </WarpLink>
            </li>
          ))}
        </ul>
        <WarpLink
          to="/contact"
          label="Communication Terminal"
          className="hidden md:inline-flex rounded-full bg-aurora px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:scale-105"
        >
          Connect
        </WarpLink>
        <button
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden rounded-full p-1.5 text-foreground hover:bg-white/5"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="glass-strong mt-2 rounded-3xl p-3 md:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <WarpLink
                  to={l.to}
                  label={l.dest}
                  onClick={() => setOpen(false)}
                  activeClassName="bg-white/10 text-foreground"
                  className="block rounded-2xl px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground"
                >
                  {l.label}
                </WarpLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
