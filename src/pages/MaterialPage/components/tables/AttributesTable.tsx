import type { TBaseTableColumn } from "@/components/Table/BaseTable";
import BaseTable from "@/components/Table/BaseTable";

type TRow = { label: string; value: string };

const columns: TBaseTableColumn<TRow>[] = [
  {
    key: "label",
    cell: (row) => (
      <span className="text-slate-500">{row.label}</span>
    ),
    tdClassName: "w-[320px]",
  },
  {
    key: "value",
    cell: (row) => (
      <span className="text-slate-800">
        {row.value}
      </span>
    ),
  },
];

const rows: TRow[] = [
  { label: "Владелец данных", value: "ОАО «ВИЛС»" },
  { label: "Тип объекта", value: "Материал" },
  { label: "Марка по ГОСТ/цифровая", value: "AK8/1380" },
  { label: "Марка по ISO", value: "AW-2014" },
  { label: "Марка по Aluminum Association Inc", value: "2014" },
  { label: "Марка по ЕН", value: "EN AW-2014" },
  { label: "Класс", value: "Сплав на основе алюминия" },

];

export default function AttributesTable() {
  return (
    <BaseTable
      columns={columns}
      rows={rows}
      variant="plain"
      showHeader={false}
      getRowKey={(row) => row.label}
      columnDivider={false}
    />
  );
}
