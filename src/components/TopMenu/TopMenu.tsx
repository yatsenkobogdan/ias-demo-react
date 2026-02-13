import { Auth } from "@/services/Auth";
import { Link } from "react-router-dom";
import { LogoBlock } from "./LogoBlock";
import { LoginButton } from "./LoginButton";
import { AuthedActions } from "./AuthedActions";

type TTopMenuProps = {
  variant: "app" | "public" | "auth";
};

export function TopMenu({ variant }: TTopMenuProps) {
  const isAuth = Auth.isAuth();

  const isPublic = variant === "public";
  const isApp = variant === "app";

  const rightContent = (() => {
    if (isPublic) {
      return <LoginButton />;
    }
    if (isApp) {
      return isAuth ? <AuthedActions /> : <LoginButton />;
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
