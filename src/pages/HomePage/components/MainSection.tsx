import atom from "@/assets/atom.png"; // путь поправь под себя
import NavCard from "./NavCard";

export default function MainSection() {
  return (
    <section className="w-full bg-[#FFF] px-[200px] py-16 font-inter">
      <div className="flex flex-col">
        <div className="w-full mb-2">
          <div className="text-[46px] font-normal leading-[110%] text-slate-800">
            Информационно-аналитическая система
          </div>
        </div>

        <div className="w-full mb-4">
          <h1 className="text-[80px] font-normal leading-[110%] text-primary">
            Цифровое материаловедение
          </h1>
        </div>

        <div className="flex w-full items-start gap-12">
          <div className="w-[544px]">
            <p className="max-w-[400px] text-[18px] leading-[150%] text-slate-600">
              Поддержка деятельности Головного центра компетенций в области материалов
              и технологий при реализации хранения, анализа и расчета значений свойств
              существующих и проектирования новых материалов.
            </p>
          </div>

          <div className="relative w-[575px]">
            <img
              src={atom}
              alt=""
              className="w-[575px] select-none pointer-events-none"
            />
          </div>

          <div className="flex flex-col gap-6">
            <NavCard title="Материалы" count="523" />
            <NavCard title="Полуфабрикаты" count="523" />
            <NavCard title="Свойства" count="523" />
          </div>
        </div>
      </div>
    </section>
  );
}
