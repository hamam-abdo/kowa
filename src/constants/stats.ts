export type TrendDirection = "up" | "down";

export type StatTone = "brand" | "blue" | "green" | "red";

export interface StatCard {
  id: string;
  label: string;
  value: number;
  /** وحدة تُعرض بعد الرقم — مثل "ر.س" */
  unit?: string;
  /** نسبة التغيّر عن الفترة السابقة */
  change: number;
  direction: TrendDirection;
  /** لون الرسم البياني المصغّر والنسبة */
  tone: StatTone;
  /** نقاط الرسم البياني المصغّر (sparkline) */
  series: number[];
}

// بطاقات الإحصاءات أعلى لوحة التحكم — مرتّبة من اليمين لليسار كما في التصميم
export const STAT_CARDS: StatCard[] = [
  {
    id: "trips",
    label: "إجمالي الرحلات",
    value: 8420,
    change: 12.4,
    direction: "up",
    tone: "brand",
    series: [
      5100, 6250, 6020, 6890, 6650, 7460, 7210, 7910, 7680, 8230, 8050, 8420,
    ],
  },

  {
    id: "collection",
    label: "التحصيل الكامل",
    value: 412300,
    unit: "ر.س",
    change: 9.1,
    direction: "up",
    tone: "blue",
    series: [
      240000, 258000, 249000, 276000, 291000, 285000, 312000, 330000, 348000,
      369000, 390000, 412300,
    ],
  },

  {
    id: "profit",
    label: "أرباح المنصة",
    value: 61845,
    unit: "ر.س",
    change: 9.1,
    direction: "up",
    tone: "green",
    series: [
      36000, 38500, 37200, 41000, 43500, 42800, 46900, 49500, 52200, 55400,
      58500, 61845,
    ],
  },

  {
    id: "cancelled",
    label: "الرحلات الملغية",
    value: 512,
    change: 3.2,
    direction: "down",
    tone: "red",
    series: [720, 700, 705, 680, 655, 662, 630, 604, 585, 560, 535, 512],
  },
];
