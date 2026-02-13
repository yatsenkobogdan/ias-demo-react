import { useState } from "react";
import { Outlet } from "react-router-dom";
import LeftMenu from "../LeftMenu/LeftMenu";
import { TopMenu } from "../TopMenu/TopMenu";

const HEADER_H = 80;

export default function MainLayout() {
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <div
        className="fixed left-0 right-0 top-0 border-b border-slate-200"
        style={{ height: HEADER_H }}
      />

      <div className="flex min-h-screen">
        <LeftMenu
          isSecondaryOpen={isSecondaryOpen}
          onToggleSecondary={() => setIsSecondaryOpen((value) => !value)}
        />

        <div className="flex min-h-screen flex-1 flex-col">
          <TopMenu variant="app" />

          <div className="flex-1">
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
}
