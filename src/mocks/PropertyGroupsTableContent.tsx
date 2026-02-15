// src/mocks/propertyGroupsTableContent.ts

export const PROPERTY_GROUPS_MAX = {
  extruded: 5,
  stamping: 6,
  forging: 9,
} as const;

export type TGroupCell = {
  text: string;
  span: number; // сколько "подколонок" занимает
};

export type TPropertyGroupsRow = {
  rowLabel: string;
  extruded: TGroupCell[];
  stamping: TGroupCell[];
  forging: TGroupCell[];
};

export const PROPERTY_GROUPS_ROWS: TPropertyGroupsRow[] = [
  {
    rowLabel: "НД",
    extruded: [
      { text: "ГОСТ 21488-97", span: 2 },
      { text: "ГОСТ 21488-97", span: 3 },
    ],
    stamping: [{ text: "ОСТ1 90073-85", span: 6 }],
    forging: [{ text: "ОСТ1 90073-85", span: 9 }],
  },
  {
    rowLabel: "Толщина, мм",
    extruded: [
      { text: "От 5 до 150", span: 1 },
      { text: "Св. 150 до 300", span: 1 },
      { text: "От 55 до 250", span: 1 },
      { text: "Св. 150 до 250", span: 1 },
      { text: "Св. 250 до 350", span: 1 },
    ],
    stamping: [{ text: "", span: 6 }],
    forging: [{ text: "", span: 9 }],
  },
  {
    rowLabel: "Масса, кг",
    extruded: [{ text: "", span: 5 }],
    stamping: [{ text: "До 200", span: 6 }],
    forging: [
      { text: "До 2000", span: 3 },
      { text: "До 750", span: 3 },
      { text: "Св. 750 до 2000", span: 3 },
    ],
  },
  {
    rowLabel: "Состояние",
    extruded: [
      { text: "Т1", span: 1 },
      { text: "Т1", span: 1 },
      { text: "Т1", span: 1 },
      { text: "Т1ПП", span: 1 },
      { text: "Т1ПП", span: 1 },
    ],
    stamping: [
      { text: "Т1", span: 3 },
      { text: "Т", span: 3 },
    ],
    forging: [
      { text: "Т1", span: 3 },
      { text: "Т", span: 6 },
    ],
  },
  {
    rowLabel: "Направление вырезки образца",
    extruded: [
      { text: "Д", span: 1 },
      { text: "Д", span: 1 },
      { text: "Д", span: 1 },
      { text: "Д", span: 1 },
      { text: "Д", span: 1 },
    ],
    stamping: [
      { text: "Д", span: 2 },
      { text: "П", span: 2 },
      { text: "В", span: 2 },
    ],
    forging: [
      { text: "Д", span: 3 },
      { text: "П", span: 3 },
      { text: "В", span: 3 },
    ],
  },
  {
    rowLabel: "σв, МПа",
    extruded: [
      { text: "451", span: 1 },
      { text: "431", span: 1 },
      { text: "461", span: 1 },
      { text: "461", span: 1 },
      { text: "431", span: 1 },
    ],
    stamping: [
      { text: "451", span: 1 },
      { text: "392", span: 1 },
      { text: "392", span: 1 },
      { text: "382", span: 1 },
      { text: "363", span: 1 },
      { text: "392", span: 1 },
    ],
    forging: [
      { text: "382", span: 1 },
      { text: "363", span: 1 },
      { text: "382", span: 1 },
      { text: "363", span: 1 },
      { text: "382", span: 1 },
      { text: "363", span: 1 },
      { text: "382", span: 1 },
      { text: "363", span: 1 },
      { text: "363", span: 1 },
    ],
  },
];
