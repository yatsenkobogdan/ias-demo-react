export type TReferenceLink = {
  title: string;
  badgeText?: string;
};

export type TSemifinishedProductsRow = {
  semifinished: string;
  gost: TReferenceLink;
  manufacturer: TReferenceLink;
};

export const SEMIFINISHED_PRODUCTS_ROW: TSemifinishedProductsRow[] = [
  {
    semifinished: "Труба АК8.Т 40×2",
    gost: { title: "ГОСТ 7727 - 81", badgeText: "ID 1234" },
    manufacturer: { title: "Орион-Спецсплав-Гатчина " },
  },
  {
    semifinished: "Труба АК8.Т 40×2",
    gost: { title: "ГОСТ 7727 - 81", badgeText: "ID 1234" },
    manufacturer: { title: "Орион-Спецсплав-Гатчина " },
  },
];
