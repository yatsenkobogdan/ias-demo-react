import clsx from "clsx";
import type { ReactNode } from "react";

type TSectionProps = {
  title: ReactNode;
  rightContent?: ReactNode;
  description?: ReactNode;
  children: ReactNode;

  className?: string;
  headerClassName?: string;
};

export function Section({
  title,
  rightContent,
  description,
  children,
  className,
  headerClassName,
}: TSectionProps) {
  return (
    <section className={clsx("mb-8", className)}>
      <div className={clsx("mb-3 flex items-start justify-between gap-4", headerClassName)}>
        <div className="w-full min-w-0">
          <div className="text-[20px] font-semibold text-slate-900">{title}</div>
          {description ? (
            <div className="mt-1 text-xs text-slate-500">{description}</div>
          ) : null}
        </div>

        {rightContent ? (
          <div className="shrink-0">
            {rightContent}
          </div>
        ) : null}
      </div>

      {children}
    </section>
  );
}
