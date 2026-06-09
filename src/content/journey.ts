import { Globe, Brain, Cloud, Star, Cpu, Server } from "lucide-react";
import type { JourneyTrack } from "@/types/journey";

export const JOURNEY_TRACKS: JourneyTrack[] = [
  {
    name: "Cloud Engineering",
    note: "Expanding expertise in Google Cloud infrastructure, networking, and operations",
    value: 90,
    icon: Cloud,
  },
  {
    name: "DevOps & Automation",
    note: "Learning CI/CD workflows, container orchestration, and deployment automation",
    value: 75,
    icon: Cpu,
  },
  {
    name: "System Design",
    note: "Studying scalable architectures and distributed systems fundamentals",
    value: 60,
    icon: Server,
  },
  {
    name: "Japanese Language",
    note: "Building reading and conversational skills through daily practice",
    value: 20,
    icon: Globe,
  },
  {
    name: "Mandarin Chinese",
    note: "Developing vocabulary and listening comprehension step by step",
    value: 45,
    icon: Globe,
  },
];
