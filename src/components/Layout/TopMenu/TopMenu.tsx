import Logo from "@/assets/logo.svg?react";

export function TopMenu() {
  return (
    <header className="bg-[#FFFFFF]">
      <div className="mx-auto flex h-14 max-w-[1100px] items-center px-6">
        <div className="flex items-center">
          <Logo className="h-8 w-auto" />
        </div>
      </div>
    </header>
  );
}
