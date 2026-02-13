import { Outlet } from "react-router-dom";
import { TopMenu } from "../TopMenu/TopMenu";
import Container from "./Container";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <TopMenu variant="auth" />

      <main className="py-16">
        <Container>
          <div className="flex justify-center">
            <Outlet />
          </div>
        </Container>
      </main>
    </div>
  );
}
