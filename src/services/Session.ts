import { keycloak } from "./auth/keycloak";

export type TSessionUser = {
  name?: string;
  email?: string;
  username?: string;
};

export const Session = {
  getUser(): TSessionUser | null {
    const tokenParsed: any = keycloak.tokenParsed;

    if (!tokenParsed) {
      return null;
    }

    return {
      name: tokenParsed.name,
      email: tokenParsed.email,
      username: tokenParsed.preferred_username,
    };
  },
};
