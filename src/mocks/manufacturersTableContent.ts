export type TManufacturerRow = {
  name: string;
  inn: string;
  contacts: {
    legalAddress: string;
    actualAddress: string;
    detailsUrlText: string;
  };
  status: string;
  products: string[];
  volume: string;
};

export const MANUFACTURERS_ROWS: TManufacturerRow[] = [
  {
    name: "Орион-Спецсплав-Гатчина (Орион Спец сплав)",
    inn: "123456789",
    contacts: {
      legalAddress: "Юр.адрес: 188 304, Ленинградская область, г. Гатчина, ул. Солодухина, дом 2а, строение 8",
      actualAddress: "факт. адрес: 188 304, Ленинградская область",
      detailsUrlText: "Подробнее",
    },
    status: "Действующий",
    products: [
      "Алюминиевый сплав AK8",
      "Алюминиевый сплав AK6",
      "Алюминиевый сплав Д6",
      "Подробнее",
    ],
    volume: "560 т",
  },
];
