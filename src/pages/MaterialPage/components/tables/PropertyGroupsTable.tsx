import GroupedSpanTable from "@/components/Table/GroupedSpanTable";
import { PROPERTY_GROUPS_ROWS } from "@/mocks/PropertyGroupsTableContent";


export default function PropertyGroupsTable() {
  return (
    <GroupedSpanTable
      firstColumnHeader="Полуфабрикат"
      firstColumnWidthPx={180}
      groups={[
        { key: "extruded", title: "Пруток прессованный", maxSpan: 5 },
        { key: "stamping", title: "Штамповка", maxSpan: 6 },
        { key: "forging", title: "Поковка", maxSpan: 9 },
      ]}
      rows={PROPERTY_GROUPS_ROWS.map((row) => {
        return {
          rowKey: row.rowLabel,
          rowLabel: row.rowLabel,
          groups: {
            extruded: row.extruded.map((cell) => ({ text: cell.text, span: cell.span })),
            stamping: row.stamping.map((cell) => ({ text: cell.text, span: cell.span })),
            forging: row.forging.map((cell) => ({ text: cell.text, span: cell.span })),
          },
        };
      })}
      compact={true}
      responsiveStacked={true}
    />
  );
}
