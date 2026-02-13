import RightSidebar from "./components/RightSidebar.tsx";

export default function MaterialPage() {
  return (
    <div className="px-6 py-6">
      <div className="flex items-start gap-6">
        <div className="flex-1">
          <div className="rounded-xl bg-white p-6 shadow-sm">
            Основной контент (в работе)
          </div>
        </div>
        
        <RightSidebar />
      </div>
    </div>
  );
}
