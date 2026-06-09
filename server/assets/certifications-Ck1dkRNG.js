import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { P as PageShell } from "./PageShell-fFHMHnhU.js";
import { S as Section } from "./Section-BCLedljV.js";
import { Cloud, Shield, Server, Database, Award, ExternalLink } from "lucide-react";
import "@tanstack/react-router";
import "react";
import "./router-BKZh5og0.js";
import "@tanstack/react-query";
import "sonner";
const CERTIFICATIONS = [
  {
    name: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    year: "2025",
    icon: Cloud,
    featured: true,
    description: "Validated skills in deploying applications, managing cloud infrastructure, monitoring services, and operating workloads on Google Cloud Platform.",
    credentialUrl: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Fwww.credly.com%2Fearner%2Fearned%2Fbadge%2F46931796-4ce2-4913-a75d-108b6e9e24d3&urlhash=Xykp&mt=kjCdO-z8-uZNiNCDQZ3utDOpvqJIw9Wvlc0qIg8rin51fJOXHa366KG7ppYn1W9z7Ds0nJXuri7fpJ4RdYpug4rPAdnx&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BJw%2ByHmi5QIORpccz4lZ7UQ%3D%3Dhttps://www.credly.com/badges/46931796-4ce2-4913-a75d-108b6e9e24d3/public_url"
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Coursera",
    year: "2025",
    icon: Shield,
    description: "Built foundational knowledge in cybersecurity operations, risk management, incident response, and security best practices.",
    credentialUrl: "https://www.credly.com/badges/a44b8619-d24f-49f9-81ba-d4c09da5ece8/linked_in_profile"
  },
  {
    name: "Become a Google Cloud Architect",
    issuer: "Dicoding",
    year: "2025",
    icon: Server,
    description: "Focused on cloud architecture, infrastructure design, scalability, and modern cloud deployment strategies.",
    credentialUrl: "https://www.dicoding.com/certificates/GRX5W09N3Z0M"
  },
  {
    name: "Google Cloud Computing Foundations",
    issuer: "Google Cloud",
    year: "2024",
    icon: Cloud,
    description: "Learned core cloud computing concepts, infrastructure fundamentals, and Google Cloud services.",
    credentialUrl: "https://www.credly.com/badges/4a5f06d5-f812-4a8f-98be-994ba9c225d7"
  },
  {
    name: "Learn to Implement Machine Learning with Google Cloud",
    issuer: "Dicoding",
    year: "2024",
    icon: Database,
    description: "Applied machine learning concepts and cloud-based ML services using Google Cloud technologies.",
    credentialUrl: "https://www.dicoding.com/certificates/MRZMY33QRZYQ"
  },
  {
    name: "Become a Google Cloud Engineer",
    issuer: "Dicoding",
    year: "2024",
    icon: Database,
    description: "Demonstrated practical knowledge of Google Cloud services, infrastructure deployment, networking, security, and operations.",
    credentialUrl: "https://www.dicoding.com/certificates/6RPNY073QZ2M"
  },
  {
    name: "Learn to Build Back-End Applications for Beginners with Google Cloud",
    issuer: "Dicoding",
    year: "2024",
    icon: Database,
    description: "Learned the fundamentals of back-end development, including RESTful APIs, server-side architecture, data handling, and Google Cloud integration.",
    credentialUrl: "https://www.dicoding.com/certificates/4EXG7JY1QPRL"
  },
  {
    name: "Employability Skills",
    issuer: "Wadhwani Foundation",
    year: "2024",
    icon: Database,
    description: "Enhanced professional readiness through communication, collaboration, critical thinking, customer-centricity, and workplace productivity skills.",
    credentialUrl: "https://web.certificate.wfglobal.org/en/certificate?certificateId=66c978293475dc0e04b62a4b"
  }
];
function CertificationsPage() {
  return /* @__PURE__ */ jsxs(PageShell, { children: [
    /* @__PURE__ */ jsx("div", { className: "pt-10" }),
    /* @__PURE__ */ jsx(Section, { eyebrow: "Professional Certifications", title: "Credentials that reflect my learning journey.", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: CERTIFICATIONS.map((c) => {
      const Icon = c.icon;
      const CardContent = /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-1000 group-hover:translate-x-full" }),
        /* @__PURE__ */ jsx("div", { className: "absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-br from-accent/0 via-primary/10 to-cosmic/0 opacity-0 blur-xl transition-opacity group-hover:opacity-100" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-aurora/20 text-aurora", children: /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              c.featured && /* @__PURE__ */ jsx("span", { className: "rounded-full bg-aurora/20 px-2 py-1 text-[10px] font-medium text-aurora", children: "Featured" }),
              /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 text-muted-foreground/60" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-5 font-display text-base font-semibold", children: c.name }),
          /* @__PURE__ */ jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: c.issuer }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: c.description }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-accent", children: "verified" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] text-muted-foreground", children: c.year })
          ] })
        ] })
      ] });
      if (c.credentialUrl) {
        return /* @__PURE__ */ jsxs("a", { href: c.credentialUrl, target: "_blank", rel: "noopener noreferrer", className: "group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-500 hover:-translate-y-1", children: [
          CardContent,
          /* @__PURE__ */ jsx(ExternalLink, { className: "absolute right-4 top-4 h-3.5 w-3.5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" })
        ] }, c.name);
      }
      return /* @__PURE__ */ jsx("div", { className: "group relative overflow-hidden rounded-2xl glass p-5 transition-all duration-500 hover:-translate-y-1", children: CardContent }, c.name);
    }) }) })
  ] });
}
export {
  CertificationsPage as component
};
