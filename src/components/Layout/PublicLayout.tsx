import { Outlet } from "react-router-dom";
import { TopMenu } from "../TopMenu/TopMenu";

export default function PublicLayout() {
  return (
    <div className="min-h-screen bg-white">
      <TopMenu variant="public" />

      <main>
        <div className="mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
