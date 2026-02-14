
import atom from "@/assets/AK8.png";

import {
  ChatIcon,
  BookmarkIcon,
  LinkIcon,
} from "@/ui/icons";
import MaterialCard from "./components/MaterialCard";

export default function MaterialPage() {
  return (
    <div className="flex flex-col gap-6">
      <MaterialCard
        imageSrc={atom}
        subtitle="Материал"
        title="AK8"
        description="Алюминиевый деформируемый сплав с высоким содержанием меди, кремния и магния, обладающий высокой прочностью и хорошей обрабатываемостью"
        sourceLabel="Источник материала"
        sourceCount={3}
        actions={[
          { id: "bookmark", title: "В закладки", icon: BookmarkIcon },
          { id: "notify", title: "Обсудить", icon: ChatIcon },
          { id: "link", title: "Скопировать ссылку", icon: LinkIcon },
        ]}
      />
    </div>
  );
}
