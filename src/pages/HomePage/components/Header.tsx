import { Link } from "react-router-dom";
import Logo from "@/assets/homeLogo.svg?react";

export default function Header() {
  return (
    <header className="w-full mt-[20px]">
      <div className="mx-auto flex h-[80px] px-[200px] justify-between">
        <Logo className="h-[80px] w-[265px]" />

        <Link
          to="/login"
          className="inline-flex h-[40px] items-center rounded-md7 bg-primary px-5 text-[14px] font-semibold text-white"
        >
          Войти в систему →
        </Link>
      </div>
    </header>
  );
}
