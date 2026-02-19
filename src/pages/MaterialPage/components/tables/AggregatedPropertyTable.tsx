import BaseTable from "@/components/Table/BaseTable";
import type { TBaseTableColumn } from "@/components/Table/BaseTable";
import Tooltip from "@/components/base/Tooltip/Tooltip";
import { DescIcon, Icon, InfoIcon } from "@/ui/icons";
import {
  AGGREGATED_PROPERTY_ROWS,
  type TAggregatedPropertyRow,
} from "@/mocks/aggregatedProperty";

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

export default function AggregatedPropertiesTable() {
  const columns: TBaseTableColumn<TAggregatedPropertyRow>[] = [
    {
      key: "designation",
      header: <ColumnHeaderWithSortSlot title="Обозначение" />,
      cell: (row) => {
        const tooltipText =
          row.designationTooltipText ? row.designationTooltipText : "—";

        return (
          <div className="flex items-start gap-2">
            <span className="font-medium text-slate-800">
              {row.designation}
            </span>

            <Tooltip content={tooltipText}>
              <button
                type="button"
                className="mt-[2px] text-slate-400 hover:text-slate-600"
                aria-label="Доп. информация"
              >
                <Icon icon={InfoIcon} size={14} />
              </button>
            </Tooltip>
          </div>
        );
      },
      tdClassName: "w-[220px]",
    },
    {
      key: "value",
      header: <ColumnHeaderWithSortSlot title="Значение" />,
      cell: (row) => {
        return (
          <span className="text-slate-800">
            {row.value}
          </span>
        );
      },
      tdClassName: "w-[220px]",
    },
    {
      key: "method",
      header: <ColumnHeaderWithSortSlot title="Метод определения" />,
      cell: (row) => {
        return (
          <ReferenceLinkCell
            titleText={row.method.title}
            badgeText={row.method.badgeText}
          />
        );
      },
      tdClassName: "w-[260px]",
    },
    {
      key: "valueSource",
      header: <ColumnHeaderWithSortSlot title="Источник значения" />,
      cell: (row) => {
        return (
          <ReferenceLinkCell
            titleText={row.valueSource.title}
            badgeText={row.valueSource.badgeText}
          />
        );
      },
    },
  ];

  return (
    <BaseTable
      columns={columns}
      rows={AGGREGATED_PROPERTY_ROWS}
      variant="card"
      showHeader
      getRowKey={(row) => row.designation}
      className="shadow-none"
    />
  );
}
