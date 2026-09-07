import { TRIP_STATUSES, type TripStatus } from "../../constants";

/** شارة حالة الرحلة — لونها ونصها من TRIP_STATUSES */
function StatusBadge({ status }: { status: TripStatus }) {
  const meta = TRIP_STATUSES[status];

  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${meta.className}`}
    >
      {meta.label}
      <span className="size-1.5 rounded-full bg-white" />
    </span>
  );
}

export default StatusBadge;
