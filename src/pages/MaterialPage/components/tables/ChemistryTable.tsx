import type { BaseTableColumn } from "@/components/Table/BaseTable";
import BaseTable from "@/components/Table/BaseTable";
import type { ChemistryRow } from "@/mocks/chemistryTableContent";


type Props = {
  rows: ChemistryRow[];
};

export default function ChemistryTable({ rows }: Props) {
  const columns: BaseTableColumn<ChemistryRow>[] = [
    {
      key: "property",
      header: (
        <div className="flex items-center gap-2">
          <span>Свойство</span>
          <span className="text-slate-400">≡</span>
        </div>
      ),
      cell: (row) => (
        <a href="#" className="text-primary underline-offset-2 hover:underline">
          {row.property}
        </a>
      ),
      tdClassName: "w-[90px]",
    },
    {
      key: "compType",
      header: (
        <div className="flex items-center gap-2">
          <span>Тип комп</span>
          <span className="text-slate-400">≡</span>
        </div>
      ),
      cell: (row) => <span className="text-slate-600">{row.compType}</span>,
      tdClassName: "w-[140px]",
    },
    {
      key: "unit",
      header: (
        <div className="flex items-center gap-2">
          <span>Ед. изм.</span>
          <span className="text-slate-400">≡</span>
        </div>
      ),
      cell: (row) => <span className="text-slate-600">{row.unit}</span>,
      tdClassName: "w-[90px]",
    },
    {
      key: "value",
      header: (
        <div className="flex items-center gap-2">
          <span>Значение</span>
          <span className="text-slate-400">≡</span>
        </div>
      ),
      cell: (row) => <span className="text-slate-700">{row.value}</span>,
      tdClassName: "w-[140px]",
    },
    {
      key: "method",
      header: (
        <div className="flex items-center gap-2">
          <span>Метод опред</span>
          <span className="text-slate-400">≡</span>
        </div>
      ),
      cell: (row) =>
        row.method ? (
          <div className="flex flex-col">
            <a href="#" className="text-primary underline-offset-2 hover:underline">
              {row.method.title}
            </a>
            {row.method.code ? (
              <span className="mt-1 inline-flex w-fit rounded bg-slate-100 px-2 py-[2px] text-[10px] text-slate-500">
                {row.method.code}
              </span>
            ) : null}
          </div>
        ) : (
          <span className="text-slate-400">-</span>
        ),
    },
    {
      key: "note",
      header: "Примечание",
      cell: (row) => <span className="text-slate-400">{row.note}</span>,
      tdClassName: "w-[160px]",
    },
  ];

  return (
    <BaseTable
      columns={columns}
      rows={rows}
      variant="card"
      showHeader
      getRowKey={(row) => row.property}
      className="shadow-none rounded-none border-0"
    />
  );
}
