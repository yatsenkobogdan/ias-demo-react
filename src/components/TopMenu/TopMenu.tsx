import { Link } from "react-router-dom";
import { LogoBlock } from "./LogoBlock";
import { LoginButton } from "./LoginButton";
import { AuthedActions } from "./AuthedActions";
import { useAuth } from "@/hooks/useAuth";

type TTopMenuProps = {
  variant: "app" | "public";
};

export function TopMenu({ variant }: TTopMenuProps) {
  const { authenticated } = useAuth();

  const isPublic = variant === "public";
  const isApp = variant === "app";

  const rightContent = (() => {
    if (isPublic) {
      return <LoginButton />;
    }

    if (isApp) {
      if (authenticated) {
        return <AuthedActions />;
      }
      return null;
    }

    return null;
  })();

  const containerClass = isApp
    ? "flex h-20 items-center px-6"
    : "mx-auto flex h-20 items-center justify-between px-[200px]";

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className={containerClass}>
        {!isApp && (
          <Link to="/" className="inline-flex">
            <LogoBlock variant={variant} />
          </Link>
        )}

        <div className={isApp ? "flex w-full items-center" : "ml-auto flex items-center"}>
          {rightContent}
        </div>
      </div>
    </header>
  );
}
