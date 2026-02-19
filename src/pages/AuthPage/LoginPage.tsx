import { login } from "@/services/auth/auth";

export function LoginPage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[410px] bg-white border border-inputBorder rounded-md7 p-8 font-sans">
        <h1 className="text-center text-[22px] font-semibold">Войти</h1>

        <p className="mt-2 text-center text-[15px] font-medium leading-[140%]">
          Авторизация через корпоративный SSO
        </p>

        <div className="mt-6">
          <button
            type="button"
            className="w-full rounded-md7 bg-primary px-4 py-2 text-white"
            onClick={() => void login({ redirectUri: new URL("/material/1", window.location.origin).toString() })}
          >
            ВОЙТИ
          </button>
        </div>
      </div>
    </div>
  );
}
