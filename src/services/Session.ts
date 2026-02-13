const USER_KEY = "ias_demo_user";

export type TSessionUser = {
  name: string;
  email: string;
  role?: string;
  org?: string;
};

export const Session = {
  setUser(user: TSessionUser) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  getUser(): TSessionUser | null {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) {
      return null;
    }

    try {
      return JSON.parse(raw) as TSessionUser;
    } catch {
      return null;
    }
  },

  clearUser() {
    localStorage.removeItem(USER_KEY);
  },
};
