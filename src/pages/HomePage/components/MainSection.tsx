import atom from "@/assets/atom.png";
import NavCard from "./NavCard";

export default function MainSection() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto px-6 pt-6 md:px-12 xl:px-[200px]">
        <div className="text-[34px] leading-[110%] text-slate-800 md:text-[46px]">
          Информационно-аналитическая система
        </div>

        <h1 className="mt-2 text-[52px] leading-[105%] text-primary md:text-[80px]">
          Цифровое материаловедение
        </h1>

        <div className="mt-6 flex items-start justify-between gap-8">
          <div className="min-w-0 flex-1">
            <p className="max-w-[520px] text-[16px] leading-[150%] text-slate-600 md:text-[18px]">
              Поддержка деятельности Головного центра компетенций в области материалов
              и технологий при реализации хранения, анализа и расчета значений свойств
              существующих и проектирования новых материалов.
            </p>
          </div>

          <div className="hidden lg:flex lg:shrink-0 lg:w-[400px] xl:w-[450px] lg:justify-center">
            <img
              src={atom}
              alt=""
              className="pointer-events-none select-none w-full h-auto"
            />
          </div>

          <div className="shrink-0 w-[320px] md:w-[360px] flex flex-col gap-6">
            <NavCard title="Материалы" count="523" />
            <NavCard title="Полуфабрикаты" count="523" />
            <NavCard title="Свойства" count="523" />
          </div>
        </div>
      </div>
    </section>
  );
}
