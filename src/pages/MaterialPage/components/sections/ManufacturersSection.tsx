import { Section } from "@/components/Section/Section";
import ManufacturersTable from "../tables/ManufacturersTable";

export default function ManufacturersSection() {
  return (
    <Section title="Производители">
      <ManufacturersTable />
    </Section>
  );
}
