import { useMemo, useState } from "react";

import { useLiveDrivers } from "../hooks/useLiveDrivers";
import ActiveTripsPanel from "./trips/ActiveTripsPanel";
import LiveMapPanel from "./trips/LiveMapPanel";


function Trips() {
  const { drivers, updatedAt } = useLiveDrivers();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(
    () => drivers.find((driver) => driver.id === selectedId) ?? null,
    [drivers, selectedId],
  );

  /** الضغط على المحدد حالياً يلغي تحديده */
  const toggleDriver = (driverId: string) =>
    setSelectedId((current) => (current === driverId ? null : driverId));

  return (
    <section className="mt-4 grid gap-4 lg:grid-cols-3">
      <ActiveTripsPanel
        updatedAt={updatedAt}
        selectedDriverId={selectedId}
        onSelectDriver={toggleDriver}
      />

      <LiveMapPanel
        drivers={drivers}
        selected={selected}
        onSelect={(driver) => setSelectedId(driver?.id ?? null)}
      />
    </section>
  );
}

export default Trips;
