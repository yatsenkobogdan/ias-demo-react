import BaseTable from "@/components/Table/BaseTable";
import type { TBaseTableColumn } from "@/components/Table/BaseTable";
import { DescIcon, Icon } from "@/ui/icons";

import { SEMIFINISHED_PRODUCTS_ROW, type TSemifinishedProductsRow } from "@/mocks/semifinishedProductsContent";

function ColumnHeaderWithSortSlot({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span>{title}</span>
      <span className="text-slate-400 cursor-pointer">
        <Icon icon={DescIcon} className="h-4 w-auto" title="desc" />
      </span>
    </div>
  );
}

function ReferenceLinkCell({
  titleText,
  badgeText,
}: {
  titleText: string;
  badgeText?: string;
}) {
  return (
    <div className="flex flex-col">
      <a href="#" className="w-fit text-primary underline-offset-2 hover:underline">
        {titleText}
      </a>

      {badgeText ? (
        <span className="mt-1 inline-flex w-fit rounded bg-slate-100 px-2 py-[2px] text-[10px] text-slate-500">
          {badgeText}
        </span>
      ) : null}
    </div>
  );
}

export default function SemiFinishedProductsTable() {
  const columns: TBaseTableColumn<TSemifinishedProductsRow>[] = [
    {
      key: "Semifinished",
      header: <ColumnHeaderWithSortSlot title="Полуфабрикат" />,
      cell: (row) => {
        return (
          <div className="flex items-start gap-2">
            <span className="font-medium text-slate-800">
              {row.semifinished}
            </span>
          </div>
        );
      },
      tdClassName: "w-[220px]",
    },
    {
      key: "method",
      header: <ColumnHeaderWithSortSlot title="НД на полуфабрикат" />,
      cell: (row) => {
        return (
          <ReferenceLinkCell
            titleText={row.gost.title}
            badgeText={row.gost.badgeText}
          />
        );
      },
      tdClassName: "w-[260px]",
    },
    {
      key: "valueSource",
      header: <ColumnHeaderWithSortSlot title="Производитель" />,
      cell: (row) => {
        return (
          <ReferenceLinkCell
            titleText={row.manufacturer.title}
            badgeText={row.manufacturer.badgeText}
          />
        );
      },
    },
  ];

  return (
    <BaseTable
      columns={columns}
      rows={SEMIFINISHED_PRODUCTS_ROW}
      variant="card"
      showHeader
      className="shadow-none"
    />
  );
}
