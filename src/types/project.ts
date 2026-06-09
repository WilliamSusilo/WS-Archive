export interface Project {
  coord: string;
  year: string;

  title: string;
  tag: string;
  desc: string;

  stack: string[];

  image?: string;

  github?: string;
  demo?: string;

  role?: string;

  featured?: boolean;
}
