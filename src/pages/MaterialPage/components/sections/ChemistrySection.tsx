import { CHEMISTRY_ROWS } from "@/mocks/chemistryTableContent";
import ChemistryTable from "../tables/ChemistryTable";
import { Icon, WarningIcon } from "@/ui/icons";
import { Section } from "@/components/Section/Section";
import { SectionCard } from "@/components/Section/SectionCard";

export default function ChemistrySection() {
  return (
    <Section
      title="Химический состав"
      rightContent={
        <a
          href="#"
          className="inline-flex items-center gap-2 text-xs text-rose-600 hover:underline"
        >
          <Icon icon={WarningIcon} />
          Источник химического состава
        </a>
      }
    >
      <SectionCard>
        <ChemistryTable rows={CHEMISTRY_ROWS} />
      </SectionCard>
    </Section>
  );
}
