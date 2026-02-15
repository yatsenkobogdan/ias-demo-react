import clsx from "clsx";
import type { ReactNode } from "react";

export type TGroupedTableGroup = {
  key: string;
  title: ReactNode;
  maxSpan: number;
};

export type TGroupedTableCell = {
  text: ReactNode;
  span: number;
};

export type TGroupedTableRow = {
  rowKey: string;
  rowLabel: ReactNode;
  groups: Record<string, TGroupedTableCell[]>;
};

function isCellEmpty(value: ReactNode) {
  if (value === null || value === undefined) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  return false;
}

type TGroupedSpanTableProps = {
  className?: string;

  firstColumnHeader: ReactNode;
  firstColumnWidthPx?: number;

  groups: TGroupedTableGroup[];
  rows: TGroupedTableRow[];

  compact?: boolean;
  responsiveStacked?: boolean;
};

function sumSpan(cells: TGroupedTableCell[]) {
  return cells.reduce((acc, cell) => acc + cell.span, 0);
}

function normalizeCells(cells: TGroupedTableCell[], maxSpan: number) {
  const current = sumSpan(cells);

  if (current === maxSpan) {
    return cells;
  }

  if (cells.length === 0) {
    return [{ text: "", span: maxSpan }];
  }

  const delta = maxSpan - current;
  const lastIndex = cells.length - 1;

  return cells.map((cell, index) => {
    if (index !== lastIndex) {
      return cell;
    }

    return {
      ...cell,
      span: cell.span + delta,
    };
  });
}


export default function GroupedSpanTable({
  className,
  firstColumnHeader,
  firstColumnWidthPx = 180,
  groups,
  rows,
  compact = true,
  responsiveStacked = true,
}: TGroupedSpanTableProps) {
  const bodyCellClassName = compact
    ? "px-2 py-2 text-[11px] leading-tight"
    : "px-4 py-3 text-sm";

  const headerCellClassName = compact
    ? "px-2 py-2 text-[11px] font-semibold text-slate-600"
    : "px-4 py-3 text-xs font-semibold text-slate-600";

  const tableMarkup = (
    <table className={clsx("w-full table-fixed border-collapse bg-white", className)}>
      <colgroup>
        <col style={{ width: `${firstColumnWidthPx}px` }} />
        {groups.map((group) => {
          return <col key={group.key} span={group.maxSpan} />;
        })}
      </colgroup>

      <thead>
        <tr className="bg-slate-50">
          <th
            className={clsx(
              "border-b border-slate-200 text-left",
              headerCellClassName
            )}
          >
            <div className="min-w-0 break-words">
              {firstColumnHeader}
            </div>
          </th>

          {groups.map((group) => {
            return (
              <th
                key={group.key}
                colSpan={group.maxSpan}
                className={clsx(
                  "border-b border-slate-200 text-left",
                  headerCellClassName
                )}
              >
                <div className="min-w-0 break-words">
                  {group.title}
                </div>
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => {
          return (
            <tr
              key={row.rowKey}
              className="border-b border-slate-200"
            >
              <td
                className={clsx(
                  "align-top border-r border-slate-200",
                  bodyCellClassName
                )}
              >
                <div className="break-words font-medium text-slate-800">
                  {row.rowLabel}
                </div>
              </td>

                {groups.map((group, groupIndex) => {
                  const rawCells = row.groups[group.key] ?? [];
                  const normalized = normalizeCells(rawCells, group.maxSpan);

                  return normalized.map((cell, cellIndex) => {
                    const isLastGroup = groupIndex === groups.length - 1;
                    const isLastCellInGroup = cellIndex === normalized.length - 1;
                    const shouldDrawRightBorder = !isLastCellInGroup || (!isLastGroup && isLastCellInGroup);

                    return (
                      <td
                        key={`${row.rowKey}-${group.key}-${cellIndex}`}
                        colSpan={cell.span}
                        className={clsx(
                          "align-top text-center text-slate-800 break-words whitespace-normal",
                          bodyCellClassName,
                          shouldDrawRightBorder ? "border-r border-slate-200" : ""
                        )}
                      >
                        {isCellEmpty(cell.text) ? "-" : cell.text}
                      </td>
                    );
                  });
                })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );

  if (!responsiveStacked) {
    return tableMarkup;
  }

  return (
    <>
      <div className="hidden lg:block">
        {tableMarkup}
      </div>

      <div className="block lg:hidden space-y-3">
        {rows.map((row) => {
          return (
            <div
              key={row.rowKey}
              className="rounded-2xl border border-slate-200 bg-white p-3"
            >
              <div className="text-sm font-semibold text-slate-900">
                {row.rowLabel}
              </div>

              <div className="mt-2 space-y-2">
                {groups.map((group) => {
                  const rawCells = row.groups[group.key] ?? [];
                  const normalized = normalizeCells(rawCells, group.maxSpan);

                  const visibleTexts = normalized
                    .map((cell) => cell.text)
                    .filter((text) => Boolean(text));

                  return (
                    <div key={group.key} className="text-xs">
                      <div className="text-slate-500">
                        {group.title}
                      </div>

                      <div className="mt-1 text-slate-800">
                        {visibleTexts.length > 0 ? visibleTexts : "—"}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
