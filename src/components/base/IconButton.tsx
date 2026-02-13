import type { ButtonHTMLAttributes } from "react";

export default function IconButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={[
        "h-10 w-10 rounded-md",
        "flex items-center justify-center",
        "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
        "focus:outline-none focus:ring-2 focus:ring-slate-300",
        props.className ?? "",
      ].join(" ")}
    />
  );
}
