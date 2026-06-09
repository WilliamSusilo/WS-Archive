import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export interface JourneyTrack {
  name: string;
  note: string;
  value: number;
  icon: ComponentType<LucideProps>;
}
