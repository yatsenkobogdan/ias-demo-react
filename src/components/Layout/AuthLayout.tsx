import type { PropsWithChildren } from "react";
import Container from "./Container";
import { TopMenu } from "./TopMenu/TopMenu";

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      <TopMenu />

      <main className="py-16">
        <Container>
          <div className="flex justify-center">{children}</div>
        </Container>
      </main>
    </div>
  );
}
