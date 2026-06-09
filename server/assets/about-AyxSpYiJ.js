import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-fFHMHnhU.js";
import { S as Section } from "./Section-BCLedljV.js";
import { Sparkles, Brain, Globe } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "./router-BKZh5og0.js";
import "@tanstack/react-query";
import "sonner";
function AboutPage() {
  const milestones = [{
    year: "2022",
    title: "The Beginning",
    body: "Started studying Informatics Engineering and discovered a passion for technology, software development, and continuous learning."
  }, {
    year: "2023",
    title: "Joining Communities",
    body: "Contributed to technology communities, collaborated with peers, and developed leadership experience through student organizations and developer programs."
  }, {
    year: "2024",
    title: "Entering the Cloud",
    body: "Joined Bangkit Academy's Cloud Computing path and began building cloud-native solutions using Google Cloud Platform."
  }, {
    year: "2025",
    title: "Industry Experience",
    body: "Applied technical skills in professional environments through software engineering and backend development projects."
  }, {
    year: "2025",
    title: "Cloud Recognition",
    body: "Earned Cloud Distinction Graduate and Google Associate Cloud Engineer credentials, marking a significant step toward a cloud-focused career."
  }, {
    year: "2026",
    title: "Next Chapter",
    body: "Graduated with honors and continue expanding expertise in cloud infrastructure, DevOps, and scalable systems."
  }];
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx("div", { className: "pt-10" }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Origin Signal", title: "Passionate about Cloud Computing, Infrastructure, and Modern Software Development.", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-12 lg:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-5 text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("p", { children: [
          "I am an Informatics Engineering graduate passionate about",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "cloud computing" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "infrastructure engineering" }),
          ", and",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "software development" }),
          ". My experience spans backend systems, cloud platforms, and modern technologies that support reliable, scalable, and efficient software solutions."
        ] }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Through academic projects, professional experience, and cloud-focused programs, I have developed hands-on expertise in",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Google Cloud Platform" }),
          ",",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Linux environments" }),
          ", and",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "infrastructure technologies" }),
          ". I enjoy understanding how applications and infrastructure work together to deliver secure, resilient, and high-performing systems while continuously expanding my knowledge in cloud and DevOps practices."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass mt-6 rounded-2xl p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs uppercase tracking-widest text-aurora", children: "What drives me" }),
          /* @__PURE__ */ jsxs("ul", { className: "mt-3 space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "mt-0.5 h-4 w-4 text-accent" }),
              "Curiosity — I enjoy exploring new technologies and understanding how things work."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Brain, { className: "mt-0.5 h-4 w-4 text-accent" }),
              "Growth — I believe continuous learning is the foundation of a successful career in technology."
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Globe, { className: "mt-0.5 h-4 w-4 text-accent" }),
              "Contribution — I aim to build solutions that create value for users, teams, and organizations."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" }),
        /* @__PURE__ */ jsx("ul", { className: "space-y-6", children: milestones.map((m) => /* @__PURE__ */ jsxs("li", { className: "relative pl-14", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full glass-strong shadow-glow-sm", children: /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] text-aurora", children: m.year.slice(2) }) }),
          /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-4 transition-transform hover:-translate-y-0.5", children: [
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: m.year }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 font-display text-lg font-semibold", children: m.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: m.body })
          ] })
        ] }, m.year)) })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
