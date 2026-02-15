import clsx from "clsx";
import type { ReactNode } from "react";

type TSectionCardProps = {
  children: ReactNode;
  className?: string;
};

export function SectionCard({ children, className }: TSectionCardProps) {
  return (
    <div
      className={clsx(
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
