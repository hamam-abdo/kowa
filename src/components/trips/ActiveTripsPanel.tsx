import { ACTIVE_TRIPS, FLEET_SUMMARY, REFRESH_SECONDS } from "../../constants";
import TripListItem from "./TripListItem";

interface ActiveTripsPanelProps {
  updatedAt: Date;
  selectedDriverId: string | null;
  onSelectDriver: (driverId: string) => void;
}

/** اللوحة اليمنى — الرحلات الجارية الآن */
function ActiveTripsPanel({
  updatedAt,
  selectedDriverId,
  onSelectDriver,
}: ActiveTripsPanelProps) {
  return (
    <div className="flex flex-col rounded-xl border border-brand/30 bg-white p-4">
      <div>
        <h2 className="font-bold text-heading">الرحلات الجارية الآن</h2>
        <p className="mt-0.5 text-xs text-body">
          تتحدث كل {REFRESH_SECONDS} ثوان · آخر تحديث{" "}
          <time dateTime={updatedAt.toISOString()}>
            {updatedAt.toLocaleTimeString("ar-SA", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </time>
        </p>
      </div>

      <ul className="mt-3 flex-1 space-y-2">
        {ACTIVE_TRIPS.map((trip) => (
          <TripListItem
            key={trip.id}
            trip={trip}
            isSelected={trip.driverId === selectedDriverId}
            onSelect={() => onSelectDriver(trip.driverId)}
          />
        ))}
      </ul>

      <button className="mt-4 w-full rounded-xl bg-brand py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90">
        عرض كل الرحلات الجارية ({FLEET_SUMMARY.onTrip})
      </button>
    </div>
  );
}

export default ActiveTripsPanel;
