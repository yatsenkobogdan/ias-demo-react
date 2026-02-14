export type ChemistryRow = {
  property: string;
  compType: string;
  unit: string;
  value: string;
  method: { title: string; code?: string } | null;
  note: string;
};

export const CHEMISTRY_ROWS: ChemistryRow[] = [
  {
    property: "Al",
    compType: "Основа",
    unit: "-",
    value: "Осн.",
    method: null,
    note: "-",
  },
  {
    property: "Cu",
    compType: "Легирующий",
    unit: "%",
    value: "1,8 – 2,6",
    method: { title: "ГОСТ 7727-81", code: "ID 1234" },
    note: "-",
  },
  {
    property: "Mg",
    compType: "Легирующий",
    unit: "%",
    value: "0,4 – 0,8",
    method: { title: "ГОСТ 7727-81", code: "ID 1234" },
    note: "-",
  },
  {
    property: "Mn",
    compType: "Легирующий",
    unit: "%",
    value: "0,4 – 0,8",
    method: { title: "ГОСТ 7727-81", code: "ID 1234" },
    note: "-",
  },
  {
    property: "Si",
    compType: "Легирующий",
    unit: "%",
    value: "0,7 – 1,2",
    method: { title: "ГОСТ 7727-81", code: "ID 1234" },
    note: "-",
  },
  {
    property: "Fe",
    compType: "Примесь",
    unit: "%",
    value: "не более 0,7",
    method: { title: "ГОСТ 7727-81", code: "ID 1234" },
    note: "-",
  },
  {
    property: "Zn",
    compType: "Примесь",
    unit: "%",
    value: "не более 0,25",
    method: { title: "ГОСТ 7727-81", code: "ID 1234" },
    note: "-",
  },
  {
    property: "Ni",
    compType: "Примесь",
    unit: "%",
    value: "не более 0,1",
    method: { title: "ГОСТ 7727-81", code: "ID 1234" },
    note: "-",
  },
  {
    property: "Ti",
    compType: "Примесь",
    unit: "%",
    value: "не более 0,15",
    method: { title: "ГОСТ 7727-81", code: "ID 1234" },
    note: "Титан + Цирконий не более 0,20",
  },
  {
    property: "Прочие",
    compType: "Примесь",
    unit: "%",
    value: "не более 0,15",
    method: { title: "ГОСТ 7727-81", code: "ID 1234" },
    note: "Указана сумма. Не более 0,05% на каждый элемент",
  },
];
