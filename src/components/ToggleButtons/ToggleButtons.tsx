import { Icon } from "@/ui/icons";
import clsx from "clsx";
import { useState, type ComponentType, type SVGProps } from "react";

type TOption = {
  id: string;
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

type TToggleButtonsProps = {
  options: TOption[];
  initialActiveId: string;
  className?: string;
};

export default function ToggleButtons({
  options,
  initialActiveId,
  className,
}: TToggleButtonsProps) {
  const [activeId, setActiveId] = useState<string>(initialActiveId);

  return (
    <div className={clsx("flex items-center justify-end gap-2", className)}>
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
              "inline-flex items-center gap-2 rounded-md border px-4 py-2 text-xs font-semibold transition",
              isActive
                ? "border-primary bg-primary text-white"
                : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
            )}
          >
            {option.icon ? (
              <Icon
                icon={option.icon}
                size={16}
                className={isActive ? "text-white" : "text-current"}
              />
            ) : null}
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
