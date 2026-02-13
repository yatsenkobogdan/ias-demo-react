
import { Button } from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import { Auth } from "@/services/Auth";
import { login } from "@/services/fetchers/authFetcher";
import { Session } from "@/services/Session";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const res = await login({ email, password });
      Auth.setToken(res.token);
      Session.setUser(res.user);
      navigate("/material/1", { replace: true }); 
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-[410px] bg-white border border-inputBorder rounded-md7 p-8 font-montserrat">
        
        <h1 className="text-center text-[22px] font-semibold">
          Войти
        </h1>

        <p className="mt-2 text-center text-[15px] font-medium leading-[140%]">
          Если Вы не авторизовались, заполните форму
          <br />
          для регистрации
        </p>

        <form className="mt-6 space-y-6" onSubmit={onSubmit}>
          <Input
            label="Электронный адрес"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="mail@mail.ru"
          />

          <Input
            type="password"
            label="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="пароль"
          />

          <div className="text-center">
            <a className="text-[15px] font-medium underline text-primary">
              Зарегистрироваться
            </a>
          </div>

          <Button>ВОЙТИ</Button>
        </form>
      </div>
    </div>
  );
}
