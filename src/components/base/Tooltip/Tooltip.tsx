import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

type TPlacement = "top" | "right" | "bottom" | "left";

type TooltipProps = {
  content: ReactNode;
  children: ReactNode;
  placement?: TPlacement;
  offset?: number;
  maxWidthPx?: number;
  disabled?: boolean;
};

export default function Tooltip({
  content,
  children,
  placement = "top",
  offset = 8,
  maxWidthPx = 220,
  disabled = false,
}: TooltipProps) {
  const anchorRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);

  const portalRoot = useMemo(() => {
    if (typeof document === "undefined") {
      return null;
    }
    return document.body;
  }, []);

  const updatePosition = () => {
    const element = anchorRef.current;
    if (!element) {
      return;
    }

    const elementRect = element.getBoundingClientRect();

    let top = 0;
    let left = 0;

    switch (placement) {
      case "top":
        top = elementRect.top - offset;
        left = elementRect.left + elementRect.width / 2;
        break;
      case "bottom":
        top = elementRect.bottom + offset;
        left = elementRect.left + elementRect.width / 2;
        break;
      case "left":
        top = elementRect.top + elementRect.height / 2;
        left = elementRect.left - offset;
        break;
      case "right":
        top = elementRect.top + elementRect.height / 2;
        left = elementRect.right + offset;
        break;
    }

    top += window.scrollY;
    left += window.scrollX;

    setPosition({ top, left });
  };

  useEffect(() => {
    if (!isVisible) {
      return;
    }

    updatePosition();
    const onScroll = () => updatePosition();
    const onResize = () => updatePosition();

    window.addEventListener("scroll", onScroll, true);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll, true);
      window.removeEventListener("resize", onResize);
    };
  }, [isVisible, placement, offset]);

  const showTooltip = () => {
    if (disabled) {
      return;
    }
    setIsVisible(true);
  };

  const hide = () => setIsVisible(false);

  return (
    <span
      ref={anchorRef}
      className="inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hide}
      onFocus={showTooltip}
      onBlur={hide}
    >
      {children}

      {portalRoot && isVisible && position ? createPortal
        (
          <div
            className="fixed z-[9999] rounded-md bg-slate-900 px-3 py-2 text-xs text-white shadow-lg"
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              maxWidth: maxWidthPx,
              transform:
                placement === "top"
                  ? "translate(-50%, -100%)"
                  : placement === "bottom"
                    ? "translate(-50%, 0)"
                    : placement === "left"
                      ? "translate(-100%, -50%)"
                      : "translate(0, -50%)",
              pointerEvents: "none",
            }}
          >
            {content}
          </div>,
          portalRoot
        ) : null
      }
    </span>
  );
}
