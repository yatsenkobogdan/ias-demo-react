import { Navigate, useLocation } from "react-router-dom";
import { Auth } from "../services/Auth";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  if (!Auth.isAuth()) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }

  return <>{children}</>;
}
