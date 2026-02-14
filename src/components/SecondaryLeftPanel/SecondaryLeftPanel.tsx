import clsx from "clsx";
import type { PropsWithChildren } from "react";

type TSecondaryLeftPanelProps = PropsWithChildren<{ isOpen: boolean }>;

export default function SecondaryLeftPanel({ isOpen, children }: TSecondaryLeftPanelProps) {
  if (!children) {
    return null;
  }

  return (
    <aside
      className={clsx(
        "shrink-0 transition-[width] duration-100",
        "ml-8",
        isOpen ? "w-[264px]" : "w-0"
      )}
    >
      <div className={clsx("h-full overflow-hidden", isOpen ? "pr-[18px]" : "")}>
        {children}
      </div>
    </aside>
  );
}
