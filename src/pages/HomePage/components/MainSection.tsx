import atom from "@/assets/atom.png";
import NavCard from "./NavCard";

export default function MainSection() {
  return (
    <section className="w-full bg-white font-inter">
      <div className="relative mx-auto px-[200px] pt-6 pb-12">
        <img
          src={atom}
          alt=""
          className="pointer-events-none select-none absolute z-20
            left-1/2 top-[99px] w-[620px] -translate-x-1/2"
        />

        <div className="relative z-10">
          <div className="text-[46px] font-normal leading-[110%] text-slate-800">
            Информационно-аналитическая система
          </div>

          <h1 className="mt-2 text-[80px] font-normal leading-[110%] text-primary">
            Цифровое материаловедение
          </h1>

          <div className="mt-8 flex items-start justify-between gap-12">
            <div className="w-[520px]">
              <p className="max-w-[420px] text-[18px] leading-[150%] text-slate-600">
                Поддержка деятельности Головного центра компетенций в области материалов
                и технологий при реализации хранения, анализа и расчета значений свойств
                существующих и проектирования новых материалов.
              </p>
            </div>

            <div className="flex w-[360px] flex-col gap-6">
              <NavCard title="Материалы" count="523" />
              <NavCard title="Полуфабрикаты" count="523" />
              <NavCard title="Свойства" count="523" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
