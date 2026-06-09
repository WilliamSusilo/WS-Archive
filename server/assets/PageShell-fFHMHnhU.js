import { jsxs, jsx } from "react/jsx-runtime";
import { useLocation } from "@tanstack/react-router";
import { memo, forwardRef, useCallback, useState } from "react";
import { X, Menu } from "lucide-react";
import { a as usePortalNav } from "./router-BKZh5og0.js";
const Starfield = memo(function Starfield2() {
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none fixed inset-0 -z-10 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-background" }),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 starfield opacity-60" }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 starfield opacity-30 animate-drift",
        style: { backgroundSize: "600px 600px", willChange: "background-position" }
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-primary/15 blur-[140px]" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cosmic/25 blur-[120px]" })
  ] });
});
const WarpLink = forwardRef(function WarpLink2({
  to,
  label,
  className = "",
  activeClassName = "",
  onClick,
  onMouseEnter,
  onFocus,
  onTouchStart,
  children,
  ...rest
}, ref) {
  const { warpTo, preload } = usePortalNav();
  const { pathname } = useLocation();
  const isActive = pathname === to;
  const hint = useCallback(() => {
    if (!isActive) preload(to);
  }, [isActive, preload, to]);
  return /* @__PURE__ */ jsx(
    "a",
    {
      ref,
      href: to,
      "data-status": isActive ? "active" : void 0,
      className: `${className} ${isActive ? activeClassName : ""}`,
      onMouseEnter: (e) => {
        hint();
        onMouseEnter?.(e);
      },
      onFocus: (e) => {
        hint();
        onFocus?.(e);
      },
      onTouchStart: (e) => {
        hint();
        onTouchStart?.(e);
      },
      onClick: (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;
        e.preventDefault();
        onClick?.(e);
        if (isActive) return;
        warpTo(to, label);
      },
      ...rest,
      children
    }
  );
});
const NAV_LINKS = [
  { to: "/about", label: "About", dest: "Origin Point" },
  { to: "/projects", label: "Projects", dest: "Mission Archive" },
  { to: "/certifications", label: "Certifications", dest: "Knowledge Vault" },
  { to: "/story", label: "Story", dest: "Personal Chronicle" },
  { to: "/journey", label: "Journey", dest: "Timeline Explorer" }
  // { to: "/contact", label: "Contact", dest: "Communication Terminal" },
];
function Nav() {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-4 left-1/2 z-50 -translate-x-1/2 px-4 w-full max-w-5xl", children: [
    /* @__PURE__ */ jsxs("nav", { className: "glass-strong flex items-center justify-between rounded-full px-5 py-2.5 shadow-glow-sm", children: [
      /* @__PURE__ */ jsx(
        WarpLink,
        {
          to: "/",
          label: "Home Coordinate",
          className: "font-display text-sm font-semibold tracking-wider text-aurora",
          children: "◐ WS | ARCHIVE"
        }
      ),
      /* @__PURE__ */ jsx("ul", { className: "hidden md:flex items-center gap-1", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        WarpLink,
        {
          to: l.to,
          label: l.dest,
          activeClassName: "bg-white/10 text-foreground",
          className: "rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground",
          children: l.label
        }
      ) }, l.to)) }),
      /* @__PURE__ */ jsx(
        WarpLink,
        {
          to: "/contact",
          label: "Communication Terminal",
          className: "hidden md:inline-flex rounded-full bg-aurora px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow-sm transition-transform hover:scale-105",
          children: "Connect"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          "aria-label": "Toggle navigation",
          onClick: () => setOpen((v) => !v),
          className: "md:hidden rounded-full p-1.5 text-foreground hover:bg-white/5",
          children: open ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(Menu, { className: "h-4 w-4" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "glass-strong mt-2 rounded-3xl p-3 md:hidden", children: /* @__PURE__ */ jsx("ul", { className: "flex flex-col", children: NAV_LINKS.map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      WarpLink,
      {
        to: l.to,
        label: l.dest,
        onClick: () => setOpen(false),
        activeClassName: "bg-white/10 text-foreground",
        className: "block rounded-2xl px-4 py-2 text-sm text-muted-foreground hover:bg-white/5 hover:text-foreground",
        children: l.label
      }
    ) }, l.to)) }) })
  ] });
}
function PageShell({ children }) {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxs("div", { className: "relative min-h-screen overflow-x-hidden font-sans text-foreground", children: [
    /* @__PURE__ */ jsx(Starfield, {}),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx("main", { className: "animate-warp-in", children }, pathname),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-white/5 px-4 py-10", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row", children: [
    /* @__PURE__ */ jsx("span", { className: "font-mono", children: "◐ A living archive of projects, certifications, and engineering milestones · v1.0" }),
    /* @__PURE__ */ jsxs("span", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " William Susilo · Engineering the future, one chapter at a time."
    ] })
  ] }) });
}
export {
  PageShell as P,
  WarpLink as W
};
