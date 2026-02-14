import { Card } from "@/components/Card/Card";
import MaterialCardHeader from "./MaterialCardHeader";
import AttributesTable from "./tables/AttributesTable";
import ChemistrySection from "./sections/ChemistrySection";

type TMaterialCardProps = {
  imageSrc: string;
  subtitle: string;
  title: string;
  description: string;
  sourceLabel?: string;
  sourceCount?: number;
  actions?: any[];
};

export default function MaterialCard(props: TMaterialCardProps) {
  return (
    <Card className="flex flex-col gap-4 p-6">
      <MaterialCardHeader {...props} />

      <AttributesTable  />
      
      <ChemistrySection />
    </Card>
  );
}
