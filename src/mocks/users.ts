export type TMockUser = {
  name: string;
  email: string;
  role: string;
  org: string;
};

export type TMockAuthRecord = {
  user: TMockUser;
  credentials: { email: string; password: string };
  token: string;
};

export const MOCK_USERS: TMockAuthRecord[] = [
  {
    user: {
      name: "Иван Иванов",
      email: "admin@admin.ru",
      role: "Редактор",
      org: "ОАО «ВИЛС»",
    },
    credentials: { email: "admin@admin.ru", password: "admin" },
    token: "demo-token-admin",
  },
  {
    user: {
      name: "Мария Петрова",
      email: "maria@demo.ru",
      role: "Эксперт",
      org: "ФГУП «ЦНИИМатериалов»",
    },
    credentials: { email: "maria@demo.ru", password: "maria" },
    token: "demo-token-maria",
  },
  {
    user: {
      name: "Алексей Смирнов",
      email: "alex@demo.ru",
      role: "Просмотр",
      org: "ООО «МеталлТест»",
    },
    credentials: { email: "alex@demo.ru", password: "alex" },
    token: "demo-token-alex",
  },
];
