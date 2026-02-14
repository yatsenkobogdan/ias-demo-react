import MainLayout from "@/components/Layout/MainLayout";
import SecondaryLeftPanelContent from "./SecondaryLeftPanelContent";
import RightSidebar from "./RightSidebar";

export default function MaterialLayout() {
  return (
    <MainLayout
      secondary={<SecondaryLeftPanelContent />}
      rightSlot={<RightSidebar />}
    />
  )
}
