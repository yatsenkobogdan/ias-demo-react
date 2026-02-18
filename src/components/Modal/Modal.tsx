import { useEffect } from "react";
import clsx from "clsx";

type TModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string;
  closeOnBackdrop?: boolean;
};

export default function Modal({
  open,
  onClose,
  title,
  children,
  className,
  closeOnBackdrop = true,
}: TModalProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflowValue = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflowValue;
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleBackdropClick = () => {
    if (!closeOnBackdrop) {
      return;
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100]">
      <button
        type="button"
        aria-label="Закрыть модалку"
        className="absolute inset-0 bg-black/50"
        onClick={handleBackdropClick}
      />

      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div
          role="dialog"
          aria-modal="true"
          className={clsx(
            "relative w-full max-w-[1200px] rounded-md7 bg-white shadow-lg",
            className
          )}
        >
          {title && (
            <div className="border-b border-slate-200 px-4 py-3 font-semibold">
              {title}
            </div>
          )}

          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}