import BaseTable from "@/components/Table/BaseTable";
import type { TBaseTableColumn } from "@/components/Table/BaseTable";
import { SOURCE_SUBSTANCES_ROWS, type TSourceSubstanceRow } from "@/mocks/sourceSubstancesTableContent";
import { DescIcon, Icon } from "@/ui/icons";

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

function LinkWithBadges({
  titleText,
  badgeTexts,
}: {
  titleText: string;
  badgeTexts: string[];
}) {
  return (
    <div className="flex flex-col">
      <a
        href="#"
        className="w-fit text-primary underline-offset-2 hover:underline"
      >
        {titleText}
      </a>

      {badgeTexts.length > 0 ? (
        <div className="mt-1 flex flex-wrap gap-1">
          {badgeTexts.map((badgeText) => {
            return (
              <span
                key={badgeText}
                className="inline-flex rounded bg-slate-100 px-2 py-[2px] text-[10px] text-slate-500"
              >
                {badgeText}
              </span>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default function SourceSubstancesTable() {
  const columns: TBaseTableColumn<TSourceSubstanceRow>[] = [
    {
      key: "component",
      header: <ColumnHeaderWithSortSlot title="Компонент" />,
      cell: (row) => {
        return (
          <LinkWithBadges
            titleText={row.componentName}
            badgeTexts={row.componentMetaBadges}
          />
        );
      },
    },
    {
      key: "parentMaterial",
      header: <ColumnHeaderWithSortSlot title="Родительский материал" />,
      cell: (row) => {
        return (
          <LinkWithBadges
            titleText={row.parentMaterialName}
            badgeTexts={row.parentMaterialMetaBadges}
          />
        );
      },
    },
    {
      key: "semiFinishedSpec",
      header: <ColumnHeaderWithSortSlot title="НД на полуфабрикат" />,
      cell: (row) => {
        return (
          <LinkWithBadges
            titleText={row.semiFinishedSpecName}
            badgeTexts={row.semiFinishedMetaBadges}
          />
        );
      },
    },
  ];

  return (
    <BaseTable
      columns={columns}
      rows={SOURCE_SUBSTANCES_ROWS}
      variant="card"
      showHeader
      getRowKey={(row) => row.componentName}
      className="shadow-none"
    />
  );
}
