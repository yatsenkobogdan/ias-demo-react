import { DownloadIcon, Icon } from "@/ui/icons";
import type { ComponentType, SVGProps } from "react";

type TAction = {
  id: string;
  title: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  onClick?: () => void;
};

type TMaterialCardHeaderProps = {
  imageSrc: string;
  subtitle: string;
  title: string;
  description: string;
  sourceLabel?: string;
  sourceCount?: number;
  actions?: TAction[];
};

export default function MaterialCardHeader({
  imageSrc,
  subtitle,
  title,
  description,
  sourceLabel,
  sourceCount,
  actions = [],
}: TMaterialCardHeaderProps) {
  return (
    <div className="flex gap-6">
      <div className="w-[160px] shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="h-[130px] w-[230px] rounded-xl object-cover"
        />

        {sourceLabel && (
          <div className="mt-3 inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1 text-xs text-primary">
            <Icon icon={DownloadIcon} className="h-10 w-auto" title="IAS" />
            {sourceLabel}
            {sourceCount ? (
              <span className="rounded-full bg-primary px-2 py-[2px] text-[10px] text-white">
                {sourceCount}
              </span>
            ) : null}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-sm text-slate-500">{subtitle}</div>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900">
              {title}
            </h2>
          </div>

          {actions.length > 0 && (
            <div className="flex items-center gap-3">
              {actions.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  title={action.title}
                  onClick={action.onClick}
                  className="rounded-md p-2 hover:bg-slate-100 transition"
                >
                  <Icon icon={action.icon} size={20} />
                </button>
              ))}
            </div>
          )}
        </div>

        <p className="mt-3 max-w-[600px] text-sm leading-[150%] text-slate-600">
          {description}
        </p>
      </div>
    </div>
  );
}
