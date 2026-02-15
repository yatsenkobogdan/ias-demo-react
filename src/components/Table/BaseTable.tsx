import clsx from "clsx";
import type { ReactNode } from "react";

export type TBaseTableColumn<Row> = {
  key: string;
  header?: ReactNode;
  cell: (row: Row) => ReactNode;

  thClassName?: string;
  tdClassName?: string;
};

export type TBaseTableHeaderCell = {
  key: string;
  content: ReactNode;
  colSpan?: number;
  rowSpan?: number;
  className?: string;
};

export type TBaseTableHeaderRow = {
  key: string;
  cells: TBaseTableHeaderCell[];
  className?: string;
};

type TTableProps<Row> = {
  columns: TBaseTableColumn<Row>[];
  rows: Row[];
  getRowKey?: (row: Row, rowIndex: number) => string;
  columnDivider?: boolean;
  variant?: "card" | "plain";
  showHeader?: boolean;

  headerRows?: TBaseTableHeaderRow[];

  headerBackground?: boolean;

  className?: string;
};

export default function BaseTable<Row>({
  columns,
  rows,
  getRowKey,
  variant = "card",
  showHeader = true,
  columnDivider = true,
  headerRows,
  headerBackground = true,
  className,
}: TTableProps<Row>) {
  return (
    <div
      className={clsx(
        variant === "card" && "overflow-hidden rounded-2xl bg-white shadow-sm",
        className
      )}
    >
      <table className="w-full border-collapse">
        {showHeader ? (
          <thead>
            {headerRows ? (
              headerRows.map((headerRow) => {
                return (
                  <tr
                    key={headerRow.key}
                    className={clsx(headerBackground ? "bg-slate-50" : "", headerRow.className)}
                  >
                    {headerRow.cells.map((headerCell) => {
                      return (
                        <th
                          key={headerCell.key}
                          colSpan={headerCell.colSpan}
                          rowSpan={headerCell.rowSpan}
                          className={clsx(
                            "border-b border-slate-200 px-4 py-2 text-left text-xs font-semibold text-slate-400",
                            headerCell.className
                          )}
                        >
                          {headerCell.content}
                        </th>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr className={clsx(headerBackground ? "bg-slate-50" : "")}>
                {columns.map((col, columnIndex) => {
                  return (
                    <th
                      key={col.key}
                      className={clsx(
                        "border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold text-slate-600",
                        columnDivider &&
                          columnIndex !== columns.length - 1 &&
                          "border-r border-slate-200",
                        col.thClassName
                      )}
                    >
                      {col.header}
                    </th>
                  );
                })}
              </tr>
            )}
          </thead>
        ) : null}

        <tbody>
          {rows.map((row, rowIndex) => {
            const rowKey = getRowKey ? getRowKey(row, rowIndex) : String(rowIndex);

            return (
              <tr
                key={rowKey}
                className="border-b border-slate-200 last:border-none"
              >
                {columns.map((col, columnIndex) => {
                  return (
                    <td
                      key={col.key}
                      className={clsx(
                        variant === "card"
                          ? "px-4 py-3 text-sm text-slate-800"
                          : "px-4 py-3 text-sm text-slate-800",
                        columnDivider &&
                          columnIndex !== columns.length - 1 &&
                          "border-r border-slate-200",
                        col.tdClassName
                      )}
                    >
                      {col.cell(row)}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
