import type { Destination } from "@/types/portal";

export interface NavLink {
  to: Destination;
  label: string;
  dest: string;
}

export const NAV_LINKS: readonly NavLink[] = [
  { to: "/about", label: "About", dest: "Origin Point" },
  { to: "/projects", label: "Projects", dest: "Mission Archive" },
  { to: "/certifications", label: "Certifications", dest: "Knowledge Vault" },
  { to: "/story", label: "Story", dest: "Personal Chronicle" },
  { to: "/journey", label: "Journey", dest: "Timeline Explorer" },
  // { to: "/contact", label: "Contact", dest: "Communication Terminal" },
] as const;
