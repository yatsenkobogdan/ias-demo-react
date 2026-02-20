import { keycloak } from "./keycloak";

let initPromise: Promise<boolean> | null = null;
let refreshTimerId: number | null = null;

export type AuthUser = {
  id?: string;
  name?: string;
  email?: string;
  username?: string;
  roles?: string[];
};

function startTokenRefreshTimer() {
  if (refreshTimerId !== null) {
    return;
  }

  refreshTimerId = window.setInterval(() => {
    if (!keycloak.authenticated) {
      return;
    }

    keycloak.updateToken(60).catch(() => {
    });
  }, 30_000);
}

function extractRoles(tokenParsed: any): string[] {
  const realmAccess = tokenParsed.realm_access;
  if (!realmAccess) {
    return [];
  }

  const roles = realmAccess.roles;
  if (!Array.isArray(roles)) {
    return [];
  }

  return roles;
}

function getUserFromTokenParsed(): AuthUser | null {
  const tokenParsed: any = keycloak.tokenParsed;

  if (!tokenParsed) {
    return null;
  }

  const roles = extractRoles(tokenParsed);

  return {
    id: tokenParsed.sub,
    name: tokenParsed.name,
    email: tokenParsed.email,
    username: tokenParsed.preferred_username,
    roles: roles,
  };
}

export async function ensureInitialized(): Promise<boolean> {
  console.log("INIT STARTED")

  if (initPromise) {
    return initPromise;
  }

  initPromise = (async () => {
    try {
      const authenticated = await keycloak.init({
        onLoad: "check-sso",
        pkceMethod: "S256",
      });

      startTokenRefreshTimer();
      return authenticated;
    } catch {
      return false;
    }
  })();

  return initPromise;
}

export function isAuthenticated() {
  return keycloak.authenticated === true;
}

export async function login(options?: { redirectUri?: string }) {
  await ensureInitialized();

  let redirectUri = window.location.origin;

  if (options && options.redirectUri) {
    redirectUri = options.redirectUri;
  }

  return keycloak.login({ redirectUri });
}

export async function logout() {
  await ensureInitialized();

  const redirectUri = new URL("/login", window.location.origin).toString();

  keycloak.clearToken();
  return keycloak.logout({ redirectUri });
}

export async function getAccessToken() {
  await ensureInitialized();

  if (!keycloak.authenticated) {
    return null;
  }

  try {
    await keycloak.updateToken(60);
  } catch {
    return null;
  }

  if (!keycloak.token) {
    return null;
  }

  return keycloak.token;
}

export function getUser(): AuthUser | null {
  return getUserFromTokenParsed();
}
