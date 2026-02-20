import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
  url: "https://sso.cm.local",
  realm: "uni",
  clientId: "react-spa",
});
