import { Outlet } from "react-router-dom";
import { TopMenu } from "../TopMenu/TopMenu";
import Footer from "@/pages/HomePage/components/Footer";

export default function PublicLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <TopMenu variant="public" />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
