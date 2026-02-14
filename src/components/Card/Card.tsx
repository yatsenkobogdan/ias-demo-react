import clsx from "clsx";
import type { PropsWithChildren } from "react";

type TCardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className }: TCardProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl max-w-[1080px] bg-white shadow-sm border border-slate-200",
        className
      )}
    >
      {children}
    </div>
  );
}
