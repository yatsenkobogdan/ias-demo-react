import type { PropsWithChildren } from "react";


export default function PublicLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-[#E6EBF2] font-montserrat">
      <main className="flex-1">{children}</main>
    </div>
  );
}
