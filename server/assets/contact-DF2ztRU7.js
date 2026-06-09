import { jsxs, jsx } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-fFHMHnhU.js";
import { S as Section } from "./Section-BCLedljV.js";
import { MapPin, ArrowUpRight, Github, Linkedin, Award, Code2, Cloud, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import "@tanstack/react-router";
import "react";
import "./router-BKZh5og0.js";
import "@tanstack/react-query";
function ContactPage() {
  const channels = [{
    name: "GitHub",
    handle: "Projects & Source Code",
    href: "https://github.com/WilliamSusilo",
    icon: Github
  }, {
    name: "LinkedIn",
    handle: "Professional Profile",
    href: "https://www.linkedin.com/in/william-susilo/",
    icon: Linkedin
  }, {
    name: "Credly",
    handle: "Verified Certifications",
    href: "https://www.credly.com/users/william-susilo",
    icon: Award
  }, {
    name: "Google Developer",
    handle: "Developer Portfolio",
    href: "https://me.developers.google.com/u/williamsusilo",
    icon: Code2
  }, {
    name: "Cloud Skills Boost",
    handle: "Google Cloud Achievements",
    href: "https://www.skills.google/public_profiles/8e253b81-36d2-456a-a6f6-beff3377aad6",
    icon: Cloud
  }, {
    name: "Dicoding",
    handle: "Learning Journey",
    href: "https://www.dicoding.com/users/william_susilo/academies",
    icon: GraduationCap
  }];
  const EMAIL = "williamsusilo2827@gmail.com";
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx("div", { className: "pt-10" }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Open Channel", title: "Let's build the next chapter together.", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "glass-strong relative overflow-hidden rounded-3xl p-8 sm:p-12 text-center shadow-cosmic", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-aurora opacity-30 blur-3xl" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "mx-auto h-6 w-6 text-aurora" }),
          /* @__PURE__ */ jsxs("h3", { className: "mt-4 font-display text-2xl font-semibold sm:text-3xl", children: [
            "Open to the ",
            /* @__PURE__ */ jsx("span", { className: "text-aurora", children: "NEXT CHALLENGE" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-sm text-muted-foreground", children: "Cloud engineering, AI systems, and scalable software are where I do my best work. If you're building something meaningful, let's talk." }),
          /* @__PURE__ */ jsxs("button", { onClick: async () => {
            try {
              await navigator.clipboard.writeText(EMAIL);
              toast.success("Email copied to clipboard!", {
                duration: 3e3,
                dismissible: true,
                className: "rounded-xl border border-aurora/20 bg-background/95 shadow-glow",
                description: /* @__PURE__ */ jsx("span", { role: "status", "aria-live": "polite", children: EMAIL })
              });
            } catch {
              toast.error("Failed to copy email.", {
                duration: 3e3,
                dismissible: true
              });
            }
          }, className: "mt-7 inline-flex items-center gap-2 rounded-full bg-aurora px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:scale-105", children: [
            "Copy Email",
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3", children: channels.map((c) => {
        const Icon = c.icon;
        return /* @__PURE__ */ jsxs("a", { href: c.href, target: "_blank", rel: "noreferrer", className: "group glass relative overflow-hidden rounded-2xl p-4 transition-all hover:-translate-y-1 hover:bg-white/[0.08]", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent/20 via-cosmic/10 to-transparent opacity-0 blur-xl transition-opacity group-hover:opacity-100" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-aurora" }),
            /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-aurora" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-4 font-display text-sm font-semibold", children: c.name }),
          /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[11px] font-mono text-muted-foreground", children: c.handle })
        ] }, c.name);
      }) })
    ] }) })
  ] });
}
export {
  ContactPage as component
};
