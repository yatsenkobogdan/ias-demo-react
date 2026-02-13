const TOKEN_KEY = "ias_demo_token";

export const Auth = {
  setToken(token: string) {
    localStorage.setItem(TOKEN_KEY, token);
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  clearToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  isAuth() {
    return Boolean(localStorage.getItem(TOKEN_KEY));
  },
};
