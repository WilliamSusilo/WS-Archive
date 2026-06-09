import { Cloud, Cpu, Database, Award, FolderGit2, BookOpen, Languages } from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";
import type { Destination } from "@/types/portal";

export interface StackChip {
  icon: ComponentType<LucideProps>;
  label: string;
}

export interface Highlight {
  to: Destination;
  label: string;
  icon: ComponentType<LucideProps>;
  title: string;
  desc: string;
  meta: string;
}

export const STACK: StackChip[] = [
  { icon: Cloud, label: "Cloud Computing" },
  { icon: Cpu, label: "Linux & DevOps" },
  { icon: Database, label: "Backend & Infrastructure" },
];

export const HIGHLIGHTS: Highlight[] = [
  {
    to: "/projects",
    label: "Project Portfolio",
    icon: FolderGit2,
    title: "Selected Projects",
    desc: "Projects across cloud computing, backend development, web applications, and software engineering.",
    meta: "12+ projects",
  },

  {
    to: "/certifications",
    label: "Verified Credentials",
    icon: Award,
    title: "Certifications",
    desc: "Professional certifications and learning achievements in cloud computing, cybersecurity, modern technologies, and soft skills.",
    meta: "8 certifications",
  },

  {
    to: "/story",
    label: "Experiences & Reflections",
    icon: BookOpen,
    title: "My Story",
    desc: "Experiences, community involvement, volunteer work, and lessons learned throughout my technology journey.",
    meta: "Explore stories",
  },

  {
    to: "/journey",
    label: "Continuous Learning",
    icon: Languages,
    title: "Ongoing Journey",
    desc: "Tracking personal growth through language learning, technical development, and new challenges.",
    meta: "Always learning",
  },
];

export const HERO_STATS = [
  { v: "12+", l: "Projects completed" },
  { v: "8", l: "Certifications earned" },
  { v: "3+", l: "Years in technology" },
  { v: "3.97", l: "Graduation GPA" },
] as const;
