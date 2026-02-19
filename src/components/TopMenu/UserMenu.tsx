import { useEffect, useRef, useState } from "react";
import { logout } from "@/services/auth/auth";

type TUserMenuProps = {
  name: string;
  role: string;
};

export function UserMenu({ name, role }: TUserMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  const onLogout = async () => {
    setOpen(false);
    await logout();
  };

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      const rootElement = rootRef.current;

      if (!rootElement) {
        return;
      }

      if (event.target instanceof Node && !rootElement.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-md border border-slate-200 px-3 py-2 hover:bg-slate-50"
      >
        <div className="h-6 w-6 rounded-full bg-slate-300" />
        <div className="text-left text-xs leading-tight">
          <div className="font-semibold">{name}</div>
          <div className="text-slate-500">{role}</div>
        </div>
        <span className="ml-1 text-slate-400">▾</span>
      </button>

      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-44 rounded-md border border-slate-200 bg-white p-1 shadow-md">
          <button
            type="button"
            onClick={() => void onLogout()}
            className="w-full rounded-md px-3 py-2 text-left text-sm hover:bg-slate-50"
          >
            Выйти
          </button>
        </div>
      ) : null}
    </div>
  );
}
