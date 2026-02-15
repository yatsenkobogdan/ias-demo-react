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
        onToggleSecondary={() => {
          setIsSecondaryOpen((value) => !value);
        }}
      />

      <div className="flex flex-1 min-w-0 flex-col">
        <TopMenu variant="app" />

        {/* было: flex flex-1 pt-[24px] */}
        <div className="flex flex-1 min-w-0 flex-col gap-6 pt-[24px] lg:flex-row lg:gap-0">
          <SecondaryLeftPanel isOpen={isSecondaryOpen}>
            {secondary}
          </SecondaryLeftPanel>

          {/* важно min-w-0 */}
          <main className="flex-1 min-w-0 lg:pl-[18px]">
            <Outlet />
          </main>

          {rightSlot ? (
            // скрываем на узких (иначе будет всегда отъедать 320px)
            <aside className="hidden xl:block shrink-0 w-[320px] ml-[24px] pr-8">
              {rightSlot}
            </aside>
          ) : null}
        </div>
      </div>
    </div>
  );
}

