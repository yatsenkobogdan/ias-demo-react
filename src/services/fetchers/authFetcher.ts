import { MOCK_AUTH } from "@/mocks/users";

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  token: string;
  user: {
    name: string;
    email: string;
  };
};

export async function login(payload: TLoginPayload): Promise<TLoginResponse> {
  const email = payload.email.trim().toLowerCase();
  const password = payload.password;

  if (!email || !password) {
    throw new Error("Введите email и пароль");
  }

  const isEmailCorrect = email === MOCK_AUTH.credentials.email;

  const isPasswordCorrect = password === MOCK_AUTH.credentials.password;

  if (!isEmailCorrect || !isPasswordCorrect) {
    throw new Error("Неверный email или пароль");
  }

  return {
    token: MOCK_AUTH.token,
    user: {
      name: MOCK_AUTH.user.name,
      email: MOCK_AUTH.user.email,
    },
  };
}
