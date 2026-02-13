import { MOCK_USERS } from "@/mocks/users";

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TLoginResponse = {
  token: string;
  user: {
    name: string;
    email: string;
    role: string;
    org: string;
  };
};

export async function login(payload: TLoginPayload): Promise<TLoginResponse> {
  const email = payload.email.trim().toLowerCase();
  const password = payload.password;

  if (!email || !password) {
    throw new Error("Введите email и пароль");
  }

  const record = MOCK_USERS.find((user) => {
    return user.credentials.email.toLowerCase() === email && user.credentials.password === password
  });

  if (!record) {
    throw new Error("Неверный email или пароль");
  }

  return { token: record.token, user: record.user };
}
