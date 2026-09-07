import { DRIVER_STATUSES, type DriverStatus } from "../../constants";

const STATUS_KEYS = Object.keys(DRIVER_STATUSES) as DriverStatus[];

/** مفتاح ألوان السائقين — يطفو أسفل الخريطة */
function MapLegend() {
  return (
    <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4 rounded-full bg-white/95 px-4 py-2 text-xs shadow-md">
      {STATUS_KEYS.map((key) => (
        <span key={key} className="flex items-center gap-1.5 text-body">
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: DRIVER_STATUSES[key].color }}
          />
          {DRIVER_STATUSES[key].label}
        </span>
      ))}
    </div>
  );
}

export default MapLegend;
