import clsx from "clsx";
import { useState } from "react";

type TOption = {
  id: string;
  label: string;
};

type TSegmentedControlProps = {
  options: TOption[];
  initialActiveId: string;
  className?: string;
};

export default function SectionTabs({
  options,
  initialActiveId,
  className,
}: TSegmentedControlProps) {
  const [activeId, setActiveId] = useState<string>(initialActiveId);

  return (
    <div className={clsx("flex items-center justify-center", className)}>
      <div className="inline-flex rounded-full border border-slate-200 bg-white p-1">
        {options.map((option) => {
          const isActive = option.id === activeId;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => {
                setActiveId(option.id);
              }}
              className={clsx(
                "rounded-full px-6 py-2 text-xs font-semibold transition",
                isActive
                  ? "bg-primary text-white"
                  : "text-slate-700 hover:bg-slate-50"
              )}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
