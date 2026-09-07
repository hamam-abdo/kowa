import { FLEET_SUMMARY, type Driver } from "../../constants";
import MapView from "../MapView";
import MapLegend from "./MapLegend";

interface LiveMapPanelProps {
  drivers: Driver[];
  selected: Driver | null;
  onSelect: (driver: Driver | null) => void;
}

/** اللوحة اليسرى — الخريطة الحية وملخّص الأسطول */
function LiveMapPanel({ drivers, selected, onSelect }: LiveMapPanelProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 lg:col-span-2">
      <div className="mb-3 flex items-start justify-between gap-4">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
          <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
          مباشر
        </span>

        <div className="text-end">
          <h2 className="font-bold text-heading">الخريطة الحية — Google Maps</h2>
          <p className="mt-0.5 text-xs text-body">
            {FLEET_SUMMARY.available} سائق متاح · {FLEET_SUMMARY.busy} مشغول ·{" "}
            {FLEET_SUMMARY.onTrip} رحلة جارية
          </p>
        </div>
      </div>

      <div className="relative h-80 overflow-hidden rounded-xl border border-slate-200 bg-slate-100">
        <MapView drivers={drivers} selected={selected} onSelect={onSelect} />
        <MapLegend />
      </div>
    </div>
  );
}

export default LiveMapPanel;
