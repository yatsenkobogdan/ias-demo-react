import { Section } from "@/components/Section/Section";
import TableToolbar from "@/components/Table/TableToolbar";
import { CollsIcon, FilterIcon, DownloadIcon } from "@/ui/icons";
import PropertyGroupsTable from "../tables/PropertyGroupsTable";

export default function PropertyGroupsSection() {
  return (
    <Section
      title={<span className="uppercase tracking-wide">Группы свойств</span>}
      description={
        <div className="mt-6 flex flex-col gap-4">
          <div className="text-center text-lg font-semibold text-slate-900">
            Механические свойства при комнатной температуре
          </div>

          <div className="text-center text-sm text-slate-700">
            Механические свойства при растяжении (не менее)
          </div>

          <TableToolbar
            leftButtons={[
              { id: "columns", label: "Колонки", icon: CollsIcon },
              { id: "filters", label: "Фильтры", icon: FilterIcon },
              { id: "export", label: "Экспорт", icon: DownloadIcon },
            ]}
            filterLabelText="Фильтрация колонок"
            filterPlaceholderText="Введите любое значение колонки"
          />
        </div>
      }
    >
        <PropertyGroupsTable />
    </Section>
  );
}
