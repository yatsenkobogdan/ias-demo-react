import { useState, type ReactNode } from "react";
import { Outlet } from "react-router-dom";
import LeftMenu from "../LeftMenu/LeftMenu";
import SecondaryLeftPanel from "../SecondaryLeftPanel/SecondaryLeftPanel";
import { TopMenu } from "../TopMenu/TopMenu";

type TMainLayoutProps = {
  secondary?: ReactNode;
  rightSlot?: ReactNode;
};

export default function MainLayout({ secondary, rightSlot }: TMainLayoutProps) {
  const [isSecondaryOpen, setIsSecondaryOpen] = useState(true);

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex">
      <LeftMenu
        isSecondaryOpen={isSecondaryOpen}
        onToggleSecondary={() => setIsSecondaryOpen((value) => !value)}
      />

      <div className="flex flex-1 flex-col">
        <TopMenu variant="app" />

        <div className="flex flex-1 pt-[24px]">
          <SecondaryLeftPanel isOpen={isSecondaryOpen}>
            {secondary}
          </SecondaryLeftPanel>

          <main className="flex-1">
            <Outlet />
          </main>

          {rightSlot ? (
            <aside className="shrink-0 w-[320px] ml-[24px] pr-8">
              {rightSlot}
            </aside>
          ) : null}
        </div>
      </div>
    </div>
  );
}
