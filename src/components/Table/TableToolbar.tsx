import clsx from "clsx";
import { Icon } from "@/ui/icons";
import { useState } from "react";
import type { ComponentType, SVGProps } from "react";

type TToolbarButton = {
  id: string;
  label: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

type TTableToolbarProps = {
  className?: string;

  leftButtons: TToolbarButton[];

  filterLabelText: string;
  filterPlaceholderText: string;

  tagLabels?: string[];
};

export default function TableToolbar({
  className,
  leftButtons,
  filterLabelText,
  filterPlaceholderText,
  tagLabels = [],
}: TTableToolbarProps) {
  const [filterValue, setFilterValue] = useState<string>("");

  return (
    <div className={clsx(className)}>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {leftButtons.map((button) => {
            return (
              <button
                key={button.id}
                type="button"
                className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                {button.icon ? (
                  <Icon icon={button.icon} className="h-4 w-4 text-primary" title={button.id} />
                ) : null}

                <span>{button.label}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">
            {filterLabelText}
          </span>

          <input
            type="text"
            value={filterValue}
            onChange={(event) => {
              setFilterValue(event.target.value);
            }}
            className="w-[250px] rounded-md border border-slate-200 px-3 py-2 text-xs focus:border-primary focus:outline-none"
            placeholder={filterPlaceholderText}
          />
        </div>
      </div>

      {tagLabels.length > 0 ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {tagLabels.map((tagLabel) => {
            return (
              <span
                key={tagLabel}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600"
              >
                {tagLabel}
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
