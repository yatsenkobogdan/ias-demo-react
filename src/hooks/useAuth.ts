import { useEffect, useState } from "react";
import { keycloak } from "@/services/auth/keycloak";
import { getUser, isAuthenticated, logout as authLogout } from "@/services/auth/auth";

export function useAuth() {
  const [authenticated, setAuthenticated] = useState<boolean>(isAuthenticated());
  const [user, setUser] = useState<ReturnType<typeof getUser>>(getUser());

  useEffect(() => {
    function syncState() {
      setAuthenticated(isAuthenticated());
      setUser(getUser());
    }

    syncState();

    keycloak.onAuthSuccess = () => {
      syncState();
    };

    keycloak.onAuthLogout = () => {
      syncState();
    };

    keycloak.onAuthRefreshSuccess = () => {
      syncState();
    };

    return () => {
      keycloak.onAuthSuccess = undefined;
      keycloak.onAuthLogout = undefined;
      keycloak.onAuthRefreshSuccess = undefined;
    };
  }, []);

  async function logout() {
    await authLogout({ redirectUri: window.location.origin + "/" });
  }

  return {
    authenticated,
    user,
    logout,
  };
}
