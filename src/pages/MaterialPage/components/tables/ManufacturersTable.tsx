import BaseTable from "@/components/Table/BaseTable";
import type { TBaseTableColumn } from "@/components/Table/BaseTable";
import { MANUFACTURERS_ROWS, type TManufacturerRow } from "@/mocks/manufacturersTableContent";

function HeaderCell({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <span>{title}</span>
    </div>
  );
}

export default function ManufacturersTable() {
  const columns: TBaseTableColumn<TManufacturerRow>[] = [
    {
      key: "name",
      header: <HeaderCell title="Наименование" />,
      cell: (row) => <span className="text-slate-800">{row.name}</span>,
      tdClassName: "w-[260px] align-top",
    },
    {
      key: "inn",
      header: <HeaderCell title="ИНН" />,
      cell: (row) => <span className="text-slate-800">{row.inn}</span>,
      tdClassName: "w-[120px] align-top",
    },
    {
      key: "contacts",
      header: <HeaderCell title="Контакты" />,
      cell: (row) => {
        return (
          <div className="space-y-2 text-xs leading-[140%] text-slate-800">
            <div>{row.contacts.legalAddress}</div>
            <div>{row.contacts.actualAddress}</div>
            <a href="#" className="text-primary underline-offset-2 hover:underline">
              {row.contacts.detailsUrlText}
            </a>
          </div>
        );
      },
      tdClassName: "min-w-[280px] align-top",
    },
    {
      key: "status",
      header: <HeaderCell title="Статус" />,
      cell: (row) => <span className="text-slate-800">{row.status}</span>,
      tdClassName: "w-[140px] align-top",
    },
    {
      key: "products",
      header: <HeaderCell title="Продукция" />,
      cell: (row) => {
        return (
          <div className="space-y-2 text-xs">
            {row.products.map((item) => {
              return (
                <a
                  key={item}
                  href="#"
                  className="block text-primary underline-offset-2 hover:underline"
                >
                  {item}
                </a>
              );
            })}
          </div>
        );
      },
      tdClassName: "min-w-[220px] align-top",
    },
    {
      key: "volume",
      header: <HeaderCell title="Объем / год исслед." />,
      cell: (row) => <span className="text-slate-800">{row.volume}</span>,
      tdClassName: "w-[160px] align-top",
    },
  ];

  return (
    <BaseTable
      columns={columns}
      rows={MANUFACTURERS_ROWS}
      variant="plain"
      showHeader={true}
      getRowKey={(row) => row.inn}
      columnDivider={false}
      headerBackground={false}
    />
  );
}
