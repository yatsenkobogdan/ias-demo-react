import { redirect } from "react-router-dom";
import { ensureInitialized, isAuthenticated } from "@/services/auth/auth";

export async function requireAuthLoader({ request }: { request: Request }) {
  await ensureInitialized();

  const authenticated = isAuthenticated();

  if (authenticated) {
    return null;
  }

  const requestUrl = new URL(request.url);
  const returnTo = requestUrl.pathname + requestUrl.search;

  throw redirect(`/login?returnTo=${encodeURIComponent(returnTo)}`);
}
