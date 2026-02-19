import {
  createBrowserRouter,
  redirect,
} from "react-router-dom";

import PublicLayout from "./components/Layout/PublicLayout";
import AuthLayout from "./components/Layout/AuthLayout";
import MaterialLayout from "./pages/MaterialPage/components/MaterialLayout";

import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/AuthPage/LoginPage";
import MaterialPage from "./pages/MaterialPage/MaterialPage";

import { requireAuthLoader } from "@/services/auth/routeGuards";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [{ path: "/", element: <HomePage /> }],
  },
  {
    element: <AuthLayout />,
    children: [{ path: "/login", element: <LoginPage /> }],
  },
  {
    element: <MaterialLayout />,
    loader: requireAuthLoader,
    children: [{ path: "/material/:id", element: <MaterialPage /> }],
  },
  { path: "*", loader: () => redirect("/") },
]);
