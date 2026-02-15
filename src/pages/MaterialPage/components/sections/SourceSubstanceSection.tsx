import { Section } from "@/components/Section/Section";
import { SectionCard } from "@/components/Section/SectionCard";
import SectionTabs from "@/components/Section/SectionTabs";
import ToggleButtons from "@/components/ToggleButtons/ToggleButtons";
import SourceSubstancesTable from "../tables/SourceSubstanceTable";
import { IndicatorsIcon, TabletIcon } from "@/ui/icons";

export default function SourceSubstancesSection() {
  return (
    <Section
      title={
        <span className="uppercase tracking-wide">
          Исходные вещества
        </span>
      }
      description={
        <span className="text-primary text-[16px]">
          - Набор исходных веществ ( вариант 1 )
        </span>
      }
    >
      <div className="mb-4">
        <SectionTabs
          options={[
            { id: "components", label: "Компоненты" },
            { id: "docs", label: "Документы" },
          ]}
          initialActiveId="components"
        />
      </div>

      <SectionCard className="shadow-none">
        <SourceSubstancesTable />
      </SectionCard>

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
