import clsx from "clsx";
import type { ReactNode } from "react";

export type BaseTableColumn<Row> = {
  key: string;
  header?: ReactNode;
  cell: (row: Row) => ReactNode;

  thClassName?: string;
  tdClassName?: string;
};

type TTableProps<Row> = {
  columns: BaseTableColumn<Row>[];
  rows: Row[];
  getRowKey?: (row: Row, index: number) => string;
  columnDivider?: boolean;
  variant?: "card" | "plain";
  showHeader?: boolean;

  className?: string;
};

export default function BaseTable<Row>({
  columns,
  rows,
  getRowKey,
  variant = "card",
  showHeader = true,
  columnDivider = true,
  className,
}: TTableProps<Row>) {

  return (
    <div
      className={clsx(
        variant === "card" &&
          "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      <table className="w-full border-collapse">
        {showHeader && (
          <thead>
            <tr className="bg-slate-50">
              {columns.map((col, colIndex) => (
                <th
                  key={col.key}
                  className={clsx(
                    "border-b border-slate-200 px-4 py-3 text-left text-xs font-semibold text-slate-600",
                    columnDivider &&
                      colIndex !== columns.length - 1 &&
                      "border-r border-slate-200",
                    col.thClassName
                  )}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
        )}

        <tbody>
          {rows.map((row, idx) => {
            const key = getRowKey ? getRowKey(row, idx) : String(idx);

            return (
              <tr
                key={key}
                className="border-b border-slate-200 last:border-none"
              >
                {columns.map((col, colIndex) => (
                  <td
                    key={col.key}
                    className={clsx(
                      variant === "card"
                        ? "px-4 py-3 text-sm text-slate-800"
                        : "py-3 text-sm text-slate-800",
                      columnDivider &&
                        colIndex !== columns.length - 1 &&
                        "border-r border-slate-200",
                      col.tdClassName
                    )}
                  >
                    {col.cell(row)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
