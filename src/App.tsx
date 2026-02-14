import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "./components/Layout/PublicLayout";
import AuthLayout from "./components/Layout/AuthLayout";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/AuthPage/LoginPage";
import MaterialPage from "./pages/MaterialPage/MaterialPage";

import { ProtectedRoute } from "./app/ProtectedRoute";
import MaterialLayout from "./pages/MaterialPage/components/MaterialLayout";

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<MaterialLayout />}>
          <Route path="/material/:id" element={<MaterialPage />} />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
