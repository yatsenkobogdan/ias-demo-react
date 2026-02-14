export default function SecondaryLeftPanelContent() {
  return (
    <div className="flex flex-col gap-2">
      <button className="rounded-xl bg-primary px-4 py-3 text-left text-sm font-semibold text-white shadow-sm">
        Материал
      </button>

      {[
        "Полуфабрикаты",
        "Технология получения",
        "Производители",
        "Изделия",
        "Графики",
        "Документы и файлы",
      ].map((label) => (
        <button
          key={label}
          className="rounded-xl bg-white px-4 py-3 text-left text-sm text-slate-800 shadow-sm hover:bg-slate-50"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
