import { createContext, useContext } from "react";
import type { PortalNavContext } from "@/types/portal";

export const PortalCtx = createContext<PortalNavContext | null>(null);

export function usePortalNav(): PortalNavContext {
  const ctx = useContext(PortalCtx);
  if (!ctx) throw new Error("usePortalNav must be used inside <PortalTransitionProvider>");
  return ctx;
}