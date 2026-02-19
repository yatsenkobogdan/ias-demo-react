import Keycloak from "keycloak-js";

export const keycloak = new Keycloak({
  url: "http://172.22.5.121:18080",
  realm: "uni",
  clientId: "react-spa",
});
