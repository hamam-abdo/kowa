import type { ActiveTrip } from "../../constants";
import StatusBadge from "./StatusBadge";

interface TripListItemProps {
  trip: ActiveTrip;
  isSelected: boolean;
  onSelect: () => void;
}

/** صف رحلة واحدة — الضغط عليه يحدد سائقها على الخريطة */
function TripListItem({ trip, isSelected, onSelect }: TripListItemProps) {
  return (
    <li>
      <button
        onClick={onSelect}
        aria-pressed={isSelected}
        className={`flex w-full items-start justify-between gap-3 rounded-xl border p-3 text-start transition-colors ${
          isSelected
            ? "border-brand bg-brand/5"
            : "border-slate-200 hover:bg-slate-50"
        }`}
      >
        <span className="min-w-0">
          <span className="block truncate text-sm font-semibold text-heading">
            {trip.driverName}
          </span>
          <span className="block truncate text-xs text-body">
            {trip.from} <span aria-hidden="true">←</span> {trip.to}
          </span>
        </span>

        <span className="flex shrink-0 flex-col items-end gap-1">
          <StatusBadge status={trip.status} />
          <span dir="ltr" className="text-xs text-body/70">
            #{trip.id}
          </span>
        </span>
      </button>
    </li>
  );
}

export default TripListItem;
