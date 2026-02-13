import { Navigate, Outlet } from "react-router-dom";
import { Auth } from "@/services/Auth";

export function ProtectedRoute() {
  if (!Auth.isAuth()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
