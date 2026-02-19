import { Session } from "@/services/Session";
import { UserMenu } from "./UserMenu";
import IconButton from "../base/IconButton";
import { AddIcon, BellIcon, HorizontalBurgerIcon, Icon, MoonIcon } from "@/ui/icons";
import MaterialSearchInput from "../Search/SearchInput";

export function AuthedActions() {
  const user = Session.getUser();
  if (!user) {
    return null;
  }

  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <IconButton type="button" aria-label="Раскрыть список">
          <Icon icon={HorizontalBurgerIcon} size={20} />
        </IconButton>

        <IconButton type="button" aria-label="Добавить">
          <Icon icon={AddIcon} size={20} />
        </IconButton>
      </div>

      <div className="flex flex-1 justify-center px-3">
        <MaterialSearchInput className="w-full" />
      </div>

      <div className="flex items-center gap-3">
        <IconButton type="button" aria-label="Поменять тему">
          <Icon icon={MoonIcon} size={20} />
        </IconButton>

        <IconButton type="button" aria-label="Уведомления">
          <Icon icon={BellIcon} size={20} />
        </IconButton>

        <button className="rounded-md7 bg-primary px-3 py-2 text-xs font-semibold text-white">
          Организация
        </button>

        <UserMenu name={user.name ?? "Пользователь"} role="Роль" />
      </div>
    </div>
  );
}
