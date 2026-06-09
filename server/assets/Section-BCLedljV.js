import { jsx, jsxs } from "react/jsx-runtime";
function Section({ id, eyebrow, title, children }) {
  return /* @__PURE__ */ jsx("section", { id, className: "relative px-4 py-24 sm:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-14 max-w-3xl", children: [
      /* @__PURE__ */ jsxs("div", { className: "font-mono text-xs uppercase tracking-[0.3em] text-aurora", children: [
        "▸ ",
        eyebrow
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl", children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: title }) })
    ] }),
    children
  ] }) });
}
export {
  Section as S
};
