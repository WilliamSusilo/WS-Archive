import { forwardRef, useCallback } from "react";
import { useLocation } from "@tanstack/react-router";
import { usePortalNav } from "@/features/portal/PortalContext";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  label?: string;
  activeClassName?: string;
};

/**
 * Anchor that triggers the wormhole portal transition instead of a hard
 * navigation. On hover/focus we preload the destination route + data so
 * the transition animation visually masks any remaining load time.
 */
export const WarpLink = forwardRef<HTMLAnchorElement, Props>(function WarpLink(
  {
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
  },
  ref,
) {
  const { warpTo, preload } = usePortalNav();
  const { pathname } = useLocation();
  const isActive = pathname === to;

  const hint = useCallback(() => {
    if (!isActive) preload(to);
  }, [isActive, preload, to]);

  return (
    <a
      ref={ref}
      href={to}
      data-status={isActive ? "active" : undefined}
      className={`${className} ${isActive ? activeClassName : ""}`}
      onMouseEnter={(e) => {
        hint();
        onMouseEnter?.(e);
      }}
      onFocus={(e) => {
        hint();
        onFocus?.(e);
      }}
      onTouchStart={(e) => {
        hint();
        onTouchStart?.(e);
      }}
      onClick={(e) => {
        // honor modifier clicks / middle-click for new tab
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return;
        e.preventDefault();
        onClick?.(e);
        if (isActive) return;
        warpTo(to, label);
      }}
      {...rest}
    >
      {children}
    </a>
  );
});