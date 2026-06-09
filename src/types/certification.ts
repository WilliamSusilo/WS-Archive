import type { LucideIcon } from "lucide-react";

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  icon: LucideIcon;
  description: string;
  featured?: boolean;
  credentialUrl?: string;
}
