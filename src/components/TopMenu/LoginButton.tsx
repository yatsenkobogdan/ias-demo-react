import { Link } from "react-router-dom";

export function LoginButton() {
  return (
    <Link
      to="/login"
      className="inline-flex h-[40px] items-center rounded-md7 bg-primary px-5 text-[14px] font-semibold text-white"
    >
      Войти в систему →
    </Link>
  );
}
