export type TReferenceLink = {
  title: string;
  badgeText?: string;
};

export type TAggregatedPropertyRow = {
  designation: string;
  designationTooltipText?: string;

  value: string;

  method: TReferenceLink;
  valueSource: TReferenceLink;
};

export const AGGREGATED_PROPERTY_ROWS: TAggregatedPropertyRow[] = [
  {
    designation: "σв",
    designationTooltipText: "Предел временного сопротивления при растяжении при 20°C",
    value: "33–47 кгс/мм²",
    method: { title: "ГОСТ 1497", badgeText: "ID 1234" },
    valueSource: { title: "Авиационные материалы, т.4", badgeText: "ID 1234" },
  },
  {
    designation: "σ0,2",
    designationTooltipText: "Предел текучести при растяжении при 20°C",
    value: "24–32 кгс/мм²",
    method: { title: "ГОСТ 1497", badgeText: "ID 1234" },
    valueSource: { title: "Авиационные материалы, т.4", badgeText: "ID 1234" },
  },
  {
    designation: "δ",
    designationTooltipText: "Относительное удлинение при разрыве",
    value: "2–10%",
    method: { title: "ГОСТ 1497", badgeText: "ID 1234" },
    valueSource: { title: "Авиационные материалы, т.4", badgeText: "ID 1234" },
  },
];
