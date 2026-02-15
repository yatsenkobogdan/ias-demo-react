import { Section } from "@/components/Section/Section";
import { CollsIcon, FilterIcon } from "@/ui/icons";
import TableToolbar from "@/components/Table/TableToolbar";
import SemiFinishedProductsTable from "../tables/SemiFinishedProductsTable";

export default function SemiFinishedProductsSection() {
  return (
    <Section
      title="Полуфабрикаты"
      headerClassName="w-full"
      description={
        <TableToolbar
          leftButtons={[
            { id: "columns", label: "Колонки", icon: CollsIcon },
            { id: "filters", label: "Фильтры", icon: FilterIcon },
          ]}
          filterLabelText="Фильтрация колонок"
          filterPlaceholderText="Введите любое значение колонки"
        />
      }
    >
      <SemiFinishedProductsTable />
    </Section>
  );
}
