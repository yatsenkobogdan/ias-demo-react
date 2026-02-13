import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className, ...props }: TInputProps) {
  return (
    <div>
      {label && (
        <label className="block font-montserrat text-[15px] font-medium text-slate-800">
          {label}
        </label>
      )}

      <input
        {...props}
        className={clsx(
          "mt-2 w-full h-[50px] rounded-md7 border border-inputBorder px-3 font-montserrat text-[15px] outline-none",
          "focus:border-slate-400",
          className
        )}
      />
    </div>
  );
}
