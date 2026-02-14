import IconButton from "../base/IconButton";

import {
  BurgerIcon, Icon,
  FavoritesIcon,
  GraphIcon,
  HelpIcon,
  CompareIcon,
  SettingsIcon,
  SomeSquareAndCircleIcon,
  AppLogo,
} from "@/ui/icons";

export const LEFT_MENU_TOP = [
  { icon: FavoritesIcon, label: "Избранное" },
  { icon: CompareIcon, label: "Заказы" },
  { icon: GraphIcon, label: "Аналитика" },
  { icon: SomeSquareAndCircleIcon, label: "Материалы" },
];

export const LEFT_MENU_BOTTOM = [
  { icon: SettingsIcon, label: "Настройки" },
  { icon: HelpIcon, label: "Помощь" },
];

type TLeftMenuProps = {
  isSecondaryOpen?: boolean;
  onToggleSecondary?: () => void;
};

export default function LeftMenu({ onToggleSecondary }: TLeftMenuProps) {
  return (
    <aside className="w-[82px] shrink-0 border-r border-slate-200 bg-white">
      <div className="sticky top-0 h-[100vh]">
        <div className="flex h-full flex-col items-center gap-3 py-3">
          <div className="mb-4 flex h-14 items-center justify-center">
            <Icon icon={AppLogo} className="h-10 w-auto" title="IAS" />
          </div>

          <IconButton
            type="button"
            onClick={onToggleSecondary}
            aria-label="Открыть меню раздела"
          >
            <Icon icon={BurgerIcon} size={20} />
          </IconButton>

          <div className="flex flex-col items-center gap-3">
            {LEFT_MENU_TOP.map(({ icon, label }) => (
              <IconButton
                key={label}
                type="button"
                aria-label={label}
                className="text-slate-600"
              >
                <Icon icon={icon} size={20} />
              </IconButton>
            ))}
          </div>

          <div className="mt-auto flex flex-col items-center gap-3">
            {LEFT_MENU_BOTTOM.map(({ icon, label }) => (
              <IconButton
                key={label}
                type="button"
                aria-label={label}
                className="text-slate-600"
              >
                <Icon icon={icon} size={20} />
              </IconButton>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}