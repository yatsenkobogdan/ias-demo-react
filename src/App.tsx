import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/AuthPage/LoginPage";
import { ProtectedRoute } from "./app/ProtectedRoute";
import { MaterialPage } from "./pages/MaterialPage/MaterialPage";
import { HomePage } from "./pages/HomePage/HomePage";
import PublicLayout from "./components/Layout/PublicLayout";
import AuthLayout from "./components/Layout/AuthLayout";


export default function App() {
  return (
    <Routes>
      <Route 
        path="/" 
        element={ 
          <PublicLayout>
            <HomePage />
          </PublicLayout>
        }
      />

      <Route 
        path="/login" 
        element={ 
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        } 
      />

      <Route
        path="/material/:id"
        element={
          <ProtectedRoute>
            <MaterialPage />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
