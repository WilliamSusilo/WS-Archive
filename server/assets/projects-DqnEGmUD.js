import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-fFHMHnhU.js";
import { S as Section } from "./Section-BCLedljV.js";
import { ArrowUpRight, Star, Github, ExternalLink } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "./router-BKZh5og0.js";
import "@tanstack/react-query";
import "sonner";
const PROJECTS = [
  {
    coord: "01",
    year: "2024",
    title: "SpeechEase",
    tag: "Cloud Computing · Mobile Application",
    role: "Cloud Computing Cohort",
    desc: "A personalized speech learning platform that leverages Google Cloud services and machine learning technologies to deliver scalable speech practice experiences. The project features cloud-based backend services, secure authentication, and efficient data processing designed for reliability and performance.",
    stack: ["Google Cloud", "Node.js", "Express.js", "Flask"],
    image: "/projects/speechease.webp",
    github: "https://github.com/bangkit-speechease",
    demo: "https://www.linkedin.com/posts/william-susilo_lifeatbangkit-bangkit24h2-bepchallenge-activity-7280584122278785025-AdLt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEXlWXoBHpYySyYDHGHKxovHahlnzoFY7IA",
    featured: true
  },
  {
    coord: "02",
    year: "2024",
    title: "planT",
    tag: "Mobile Application · Agriculture",
    role: "Mobile Developer",
    desc: "A smart farming application designed to help small-scale farmers and home gardeners monitor plant growth, receive personalized recommendations, and improve cultivation outcomes through data-driven insights.",
    stack: ["Flutter", "Dart", "Firebase"],
    image: "/projects/plant.webp",
    github: "https://github.com/WilliamSusilo/planT",
    demo: "https://www.youtube.com/watch?v=kF_1hrlI8rI",
    featured: true
  },
  {
    coord: "03",
    year: "2024",
    title: "Piru Application",
    tag: "Web Application · Booking System",
    role: "Full Stack Developer",
    desc: "A room booking management system developed for student organizations to simplify room reservations, approval workflows, and scheduling processes through a centralized web platform.",
    stack: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    image: "/projects/piru.webp",
    github: "https://github.com/WilliamSusilo/Piru-Application",
    featured: true
  },
  {
    coord: "04",
    year: "2024",
    title: "NotedGo",
    tag: "Web Application · Productivity",
    role: "Full Stack Developer",
    desc: "A mood-based note-taking platform that combines habit tracking, mood monitoring, and productivity features to help users better understand their daily activities and emotional patterns.",
    stack: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    image: "/projects/notedgo.webp",
    github: "https://github.com/WilliamSusilo/NotedGo",
    featured: true
  },
  {
    coord: "05",
    year: "2023",
    title: "To Do List App",
    tag: "Mobile Application · Productivity",
    role: "Mobile Developer",
    desc: "A task management application featuring user authentication, calendar integration, and task organization capabilities to improve personal productivity and activity planning.",
    stack: ["Flutter", "Dart", "SQLite"],
    image: "/projects/todolist.webp",
    github: "https://github.com/WilliamSusilo/To-Do-List-App",
    featured: false
  },
  {
    coord: "06",
    year: "2023",
    title: "Student Recording System",
    tag: "Information System · Education",
    role: "Backend Developer",
    desc: "A student administration system that manages academic records through complete CRUD operations, supporting efficient data management and reporting processes.",
    stack: ["PHP", "MySQL", "JavaScript"],
    image: "/projects/student-recording.webp",
    github: "https://github.com/WilliamSusilo/Student-Recording-System",
    featured: false
  },
  {
    coord: "07",
    year: "2023",
    title: "Library's Helper App",
    tag: "Desktop Application · Library Management",
    role: "Python Developer",
    desc: "A library management application that streamlines borrowing and returning workflows while providing search capabilities and secure administrative tools for library staff.",
    stack: ["Python"],
    image: "/projects/library-helper.webp",
    github: "https://github.com/WilliamSusilo/Library-s-Helper-App",
    featured: false
  },
  {
    coord: "08",
    year: "2022",
    title: "Personal Website",
    tag: "Portfolio · Web Development",
    role: "Frontend Developer",
    desc: "A personal portfolio website developed using vanilla web technologies to showcase projects, certifications, achievements, technical skills, and professional experiences.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/personal-website.webp",
    github: "https://github.com/WilliamSusilo/Personal-Website",
    featured: false
  }
];
function ProjectsPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx("div", { className: "pt-10" }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Project Portfolio", title: "Projects that shaped my technical journey.", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2", children: PROJECTS.map((p) => /* @__PURE__ */ jsxs("article", { className: "group glass relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-1 hover:shadow-cosmic", children: [
      /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100", children: /* @__PURE__ */ jsx("div", { className: "absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/30 blur-3xl" }) }),
      p.image && /* @__PURE__ */ jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsx("img", { src: p.image, alt: p.title, className: "h-52 w-full object-cover transition-transform duration-700 group-hover:scale-105" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative p-7", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs text-aurora", children: [
              "▸ ",
              p.coord
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: p.year })
          ] }),
          /* @__PURE__ */ jsx("a", { href: p.github, target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground transition-all hover:text-aurora", "aria-label": `Open ${p.title} repository`, children: /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-5 w-5 transition-all hover:-translate-y-0.5 hover:translate-x-0.5" }) })
        ] }),
        p.featured && /* @__PURE__ */ jsxs("div", { className: "mt-4 inline-flex items-center gap-1 rounded-full bg-aurora/10 px-3 py-1 text-[10px] uppercase tracking-wider text-aurora", children: [
          /* @__PURE__ */ jsx(Star, { className: "h-3 w-3" }),
          "Featured Project"
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-2xl font-semibold tracking-tight", children: p.title }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs uppercase tracking-wider text-accent", children: p.tag }),
        p.role && /* @__PURE__ */ jsxs("div", { className: "mt-2 text-xs text-muted-foreground", children: [
          "Role: ",
          p.role
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground", children: p.desc }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: p.stack.map((s) => /* @__PURE__ */ jsx("span", { className: "rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground", children: s }, s)) }),
        (p.github || p.demo) && /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          p.github && /* @__PURE__ */ jsxs("a", { href: p.github, target: "_blank", rel: "noopener noreferrer", onClick: (e) => e.stopPropagation(), className: "inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs transition-all hover:border-aurora hover:text-aurora", children: [
            /* @__PURE__ */ jsx(Github, { className: "h-4 w-4" }),
            "GitHub"
          ] }),
          p.demo && /* @__PURE__ */ jsxs("a", { href: p.demo, target: "_blank", rel: "noopener noreferrer", onClick: (e) => e.stopPropagation(), className: "inline-flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2 text-xs transition-all hover:border-aurora hover:text-aurora", children: [
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4" }),
            "Demo"
          ] })
        ] })
      ] })
    ] }, p.coord)) }) })
  ] });
}
export {
  ProjectsPage as component
};
