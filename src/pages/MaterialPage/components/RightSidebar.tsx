import { Icon, DoubleChevronLeftIcon, InfoIcon } from "@/ui/icons";

export default function RightSidebar() {
  return (
    <aside className="w-[368px] shrink-0">
      <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

        <div className="flex items-start gap-3">
          <button
            type="button"
            className="mt-1 text-primary hover:opacity-80"
            aria-label="Свернуть"
          >
            <Icon icon={DoubleChevronLeftIcon} size={20} />
          </button>
            <div className="text-[18px] font-semibold text-slate-900">
              содержание страницы
            </div>
        </div>
    
        <div className="mt-2 flex items-center gap-2 text-[12px] text-slate-500">
          <Icon icon={InfoIcon} size={16} />
          <span>Кликните на иконку, чтобы свернуть содержание.</span>
        </div>

        <ul className="mt-4 flex flex-col gap-1 text-[14px]">
          <li className="rounded-xl bg-slate-100 px-4 py-3 text-slate-900">
            Общая информация и атрибуты
          </li>

          <li className="px-4 py-3 text-slate-800 hover:bg-slate-50 rounded-xl">
            Химический состав
          </li>

          <li className="px-4 py-3 text-slate-800 hover:bg-slate-50 rounded-xl">
            Исходные вещества
          </li>

          <li className="px-4 py-3 text-slate-800 hover:bg-slate-50 rounded-xl">
            Группы свойств
          </li>

          <li className="pl-10 py-3 text-slate-700 hover:bg-slate-50 rounded-xl">
            Механические свойства
          </li>

          <li className="px-4 py-3 text-slate-800 hover:bg-slate-50 rounded-xl">
            Производитель
          </li>

          <li className="px-4 py-3 text-slate-800 hover:bg-slate-50 rounded-xl">
            Полуфабрикаты
          </li>
        </ul>
      </div>
    </aside>
  );
}
