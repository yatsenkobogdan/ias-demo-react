import { Section } from "@/components/Section/Section";
import AggregatedPropertiesTable from "../tables/AggregatedPropertyTable";
import { CollsIcon, FilterIcon, IndicatorsIcon, TabletIcon } from "@/ui/icons";
import TableToolbar from "@/components/Table/TableToolbar";
import ToggleButtons from "@/components/ToggleButtons/ToggleButtons";

export default function AggregatedPropertiesSection() {
  return (
    <Section
      title="Агрегированные свойства"
      headerClassName="w-full"
      description={
        <TableToolbar
          leftButtons={[
            { id: "columns", label: "Колонки", icon: CollsIcon },
            { id: "filters", label: "Фильтры", icon: FilterIcon },
          ]}
          filterLabelText="Фильтрация колонок"
          filterPlaceholderText="Введите любое значение колонки"
          tagLabels={[
            "Механические свойства при комнатной t°C",
            "Физикомеханические свойства",
          ]}
        />
      }
    >
      <AggregatedPropertiesTable />

      <ToggleButtons
        className="mt-4"
        options={[
          { id: "passport", label: "Отобразить паспорт", icon: TabletIcon },
          { id: "indicators", label: "Отобразить показатели", icon: IndicatorsIcon },
        ]}
        initialActiveId="passport"
      />
    </Section>
  );
}
