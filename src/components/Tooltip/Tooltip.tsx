import { useState } from "react";
import type { ReactNode } from "react";

type TTooltipProps = {
  content: ReactNode;
  children: ReactNode;
};

export default function Tooltip({ content, children }: TTooltipProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => {
        setIsVisible(true);
      }}
      onMouseLeave={() => {
        setIsVisible(false);
      }}
    >
      {children}

      {isVisible ? (
        <div className="absolute bottom-full mb-2 w-max max-w-[220px] rounded-md bg-slate-900 px-3 py-2 text-xs text-white shadow-lg">
          {content}
        </div>
      ) : null}
    </div>
  );
}
