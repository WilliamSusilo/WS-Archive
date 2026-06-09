import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-fFHMHnhU.js";
import { S as Section } from "./Section-BCLedljV.js";
import { Cloud, Cpu, Server, Globe } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "./router-BKZh5og0.js";
import "@tanstack/react-query";
import "sonner";
const JOURNEY_TRACKS = [
  {
    name: "Cloud Engineering",
    note: "Expanding expertise in Google Cloud infrastructure, networking, and operations",
    value: 90,
    icon: Cloud
  },
  {
    name: "DevOps & Automation",
    note: "Learning CI/CD workflows, container orchestration, and deployment automation",
    value: 75,
    icon: Cpu
  },
  {
    name: "System Design",
    note: "Studying scalable architectures and distributed systems fundamentals",
    value: 60,
    icon: Server
  },
  {
    name: "Japanese Language",
    note: "Building reading and conversational skills through daily practice",
    value: 20,
    icon: Globe
  },
  {
    name: "Mandarin Chinese",
    note: "Developing vocabulary and listening comprehension step by step",
    value: 45,
    icon: Globe
  }
];
function JourneyPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx("div", { className: "pt-10" }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Current Trajectory", title: "Building skills today for the systems of tomorrow.", children: /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2", children: JOURNEY_TRACKS.map((t) => {
      const Icon = t.icon;
      return /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-aurora/15 text-aurora", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-display text-base font-semibold", children: t.name }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.note })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "font-mono text-sm text-aurora", children: [
            t.value,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 h-1.5 overflow-hidden rounded-full bg-white/5", children: /* @__PURE__ */ jsx("div", { className: "h-full rounded-full bg-aurora shadow-glow-sm transition-all duration-700", style: {
          width: `${t.value}%`
        } }) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex justify-between text-[10px] font-mono uppercase tracking-widest text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { children: "start" }),
          /* @__PURE__ */ jsx("span", { children: "mastery" })
        ] })
      ] }, t.name);
    }) }) })
  ] });
}
export {
  JourneyPage as component
};
