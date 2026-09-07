// ===== ألوان الرسوم — مفحوصة لعمى الألوان والتباين =====
export const CHART_COLORS = {
  brand: "#1f0f8c",
  blue: "#2563eb",
  amber: "#f59e0b",
  red: "#ef4444",
  green: "#15803d",
} as const;

// ===== 1. توزيع حالات الرحلة (دائرة مفرغة) =====
export interface StatusSlice {
  label: string;
  value: number;
  percent: number;
  color: string;
}

export const TRIP_TOTAL = 8420;

export const TRIP_STATUS_SLICES: StatusSlice[] = [
  { label: "مكتملة", value: 6568, percent: 78, color: CHART_COLORS.brand },
  { label: "ملغية", value: 1179, percent: 14, color: CHART_COLORS.red },
  { label: "بدون سواق", value: 421, percent: 5, color: CHART_COLORS.amber },
  { label: "نشطة", value: 252, percent: 3, color: CHART_COLORS.green },
];

// ===== 2. الرحلات والإيراد عبر الوقت (آخر 14 يوماً) =====
export interface TimePoint {
  /** يوم الشهر */
  day: number;
  trips: number;
  /** الإيراد بآلاف الريالات */
  revenue: number;
}

export const TRIPS_REVENUE_SERIES: TimePoint[] = [
  { day: 6, trips: 214, revenue: 9.8 },
  { day: 7, trips: 268, revenue: 12.1 },
  { day: 8, trips: 241, revenue: 11.2 },
  { day: 9, trips: 296, revenue: 13.4 },
  { day: 10, trips: 279, revenue: 12.8 },
  { day: 11, trips: 312, revenue: 14.1 },
  { day: 12, trips: 305, revenue: 13.9 },
  { day: 13, trips: 338, revenue: 15.2 },
  { day: 14, trips: 321, revenue: 14.6 },
  { day: 15, trips: 356, revenue: 16.4 },
  { day: 16, trips: 349, revenue: 15.9 },
  { day: 17, trips: 371, revenue: 17.2 },
  { day: 18, trips: 362, revenue: 16.8 },
  { day: 19, trips: 394, revenue: 18.6 },
];

// ===== 3. مصادر الإلغاء (آخر 6 أسابيع) =====
export interface CancellationWeek {
  week: string;
  customer: number;
  driver: number;
  system: number;
}

export const CANCELLATION_SERIES: CancellationWeek[] = [
  { week: "أسبوع 1", customer: 82, driver: 41, system: 19 },
  { week: "أسبوع 2", customer: 95, driver: 46, system: 22 },
  { week: "أسبوع 3", customer: 104, driver: 52, system: 24 },
  { week: "أسبوع 4", customer: 118, driver: 58, system: 27 },
  { week: "أسبوع 5", customer: 101, driver: 49, system: 23 },
  { week: "أسبوع 6", customer: 97, driver: 44, system: 21 },
];

export const CANCELLATION_SOURCES = [
  { key: "customer", label: "العميل", color: CHART_COLORS.red },
  { key: "driver", label: "السواق", color: CHART_COLORS.amber },
  { key: "system", label: "النظام", color: CHART_COLORS.blue },
] as const;

// ===== 4. أعلى المدن أداءً =====
export interface CityPerformance {
  city: string;
  trips: number;
}

export const TOP_CITIES: CityPerformance[] = [
  { city: "الرياض", trips: 3820 },
  { city: "جدة", trips: 2140 },
  { city: "الدمام", trips: 1180 },
  { city: "مكة", trips: 760 },
  { city: "المدينة", trips: 520 },
];

// ===== 5. ساعات الذروة (7 أيام × 10 فترات) =====
export const PEAK_DAYS = [
  "السبت",
  "الأحد",
  "الاثنين",
  "الثلاثاء",
  "الأربعاء",
  "الخميس",
  "الجمعة",
] as const;

/** الفترات من اليمين لليسار كما في التصميم */
export const PEAK_SLOTS = [
  "12ص",
  "10م",
  "8م",
  "6م",
  "4م",
  "2م",
  "12م",
  "10ص",
  "8ص",
  "6ص",
] as const;

/** كثافة الطلب 0–4 — صف لكل يوم، عمود لكل فترة */
export const PEAK_MATRIX: number[][] = [
  [1, 3, 4, 4, 2, 2, 3, 2, 1, 0],
  [1, 2, 3, 4, 2, 2, 3, 3, 2, 0],
  [0, 2, 4, 4, 3, 2, 2, 3, 2, 1],
  [1, 3, 4, 3, 2, 3, 3, 2, 2, 0],
  [1, 3, 4, 4, 3, 2, 3, 3, 1, 1],
  [2, 4, 4, 4, 3, 3, 2, 2, 1, 0],
  [0, 2, 3, 3, 2, 1, 2, 4, 3, 1],
];

/** تدرّج أحادي اللون — الأفتح = أقل طلباً */
export const PEAK_SCALE = [
  "#ede9fe",
  "#c4b5fd",
  "#a78bfa",
  "#7c3aed",
  "#4c1d95",
] as const;
