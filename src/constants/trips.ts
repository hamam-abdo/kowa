export type TripStatus = "enRoute" | "started" | "waitingPickup";

export interface TripStatusMeta {
  label: string;
  className: string;
}

export const TRIP_STATUSES: Record<TripStatus, TripStatusMeta> = {
  enRoute: {
    label: "فى الطريق",
    className: "bg-brand text-white",
  },
  started: {
    label: "بدأت الرحلة",
    className: "bg-emerald-600 text-white",
  },
  waitingPickup: {
    label: "متجه للعميل",
    className: "bg-amber-500 text-white",
  },
};

export interface ActiveTrip {
  id: string;
  driverId: string;
  driverName: string;
  from: string;
  to: string;
  status: TripStatus;
}

export const ACTIVE_TRIPS: ActiveTrip[] = [
  {
    id: "KW-10479",
    driverId: "d-1",
    driverName: "فهد الشمري",
    from: "الروضة",
    to: "قرطبة",
    status: "enRoute",
  },
  {
    id: "KW-10486",
    driverId: "d-2",
    driverName: "ماجد العنزي",
    from: "العليا",
    to: "الملقا",
    status: "started",
  },
  {
    id: "KW-10488",
    driverId: "d-3",
    driverName: "سعد اليقمي",
    from: "حطين",
    to: "الصحافة",
    status: "waitingPickup",
  },
  {
    id: "KW-10490",
    driverId: "d-4",
    driverName: "عبدالله الدوسري",
    from: "النخيل",
    to: "العقيق",
    status: "started",
  },
];

export type DriverStatus = "available" | "busy" | "onTrip";

export interface DriverStatusMeta {
  label: string;
  color: string;
}

export const DRIVER_STATUSES: Record<DriverStatus, DriverStatusMeta> = {
  available: { label: "متاح", color: "#2563eb" },
  busy: { label: "مشغول", color: "#f59e0b" },
  onTrip: { label: "رحلة جارية", color: "#0ca30c" },
};

// ملخّص الأسطول أعلى الخريطة
export const FLEET_SUMMARY = {
  available: 96,
  busy: 54,
  onTrip: 38,
};

/** مهلة تحديث اللوحة بالثواني */
export const REFRESH_SECONDS = 10;

export interface LatLng {
  lat: number;
  lng: number;
}

export interface Driver {
  id: string;
  name: string;
  plate: string;
  status: DriverStatus;
  position: LatLng;
  note?: string;
}

/** مركز الخريطة الافتراضي — الرياض */
export const MAP_CENTER: LatLng = { lat: 24.7136, lng: 46.6753 };

export const MAP_ZOOM = 13;

// بيانات تجريبية — تُستبدل باستدعاء الخادم
export const DRIVERS: Driver[] = [
  {
    id: "d-1",
    name: "فهد الشمري",
    plate: "ن ب ك 4821",
    status: "available",
    position: { lat: 24.7255, lng: 46.6842 },
    note: "نقطة الانطلاق · متبق 6 دقائق",
  },
  {
    id: "d-2",
    name: "ماجد العنزي",
    plate: "أ ر ص 1190",
    status: "onTrip",
    position: { lat: 24.7051, lng: 46.6698 },
  },
  {
    id: "d-3",
    name: "سعد اليقمي",
    plate: "ه د م 7734",
    status: "busy",
    position: { lat: 24.7182, lng: 46.6621 },
  },
  {
    id: "d-4",
    name: "عبدالله الدوسري",
    plate: "ب ل ن 2065",
    status: "onTrip",
    position: { lat: 24.7098, lng: 46.6935 },
  },
  {
    id: "d-5",
    name: "تركي القحطاني",
    plate: "س ع د 5512",
    status: "available",
    position: { lat: 24.7301, lng: 46.659 },
  },
  {
    id: "d-6",
    name: "نايف الحربي",
    plate: "ج ك ط 8840",
    status: "busy",
    position: { lat: 24.6987, lng: 46.6774 },
  },
];
