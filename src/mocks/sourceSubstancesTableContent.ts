export type TSourceSubstanceRow = {
  componentName: string;
  componentMetaBadges: string[];

  parentMaterialName: string;
  parentMaterialMetaBadges: string[];

  semiFinishedSpecName: string;
  semiFinishedMetaBadges: string[];
};

export const SOURCE_SUBSTANCES_ROWS: TSourceSubstanceRow[] = [
  {
    componentName: "Слиток по ГОСТ 11069—2019",
    componentMetaBadges: ["ID 1234", "Масса: 40 кг"],
    parentMaterialName: "Алюминий первичный А99",
    parentMaterialMetaBadges: ["ID 1234", "Марка: А99/АА199"],
    semiFinishedSpecName: "ГОСТ 11069—2019",
    semiFinishedMetaBadges: ["ID 1234"],
  },
  {
    componentName: "Пластины по ГОСТ Р 53777",
    componentMetaBadges: ["ID 1234", "Толщина: 30–50 мм"],
    parentMaterialName: "Лигатура AlMn20",
    parentMaterialMetaBadges: ["ID 1234", "Марка: AlMn20"],
    semiFinishedSpecName: "ГОСТ Р 53777",
    semiFinishedMetaBadges: ["ID 1234"],
  },
];