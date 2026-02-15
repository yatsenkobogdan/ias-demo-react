import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

type TButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export function Button({ variant = "primary", className, ...props }: TButtonProps) {
  return (
    <button
      {...props}
      className={clsx("w-full h-[50px] rounded-md7 font-sans font-bold text-[15px] uppercase transition",
      variant === "primary" && "bg-primary text-white hover:opacity-95",
      className
      )}
    />
  );
}
