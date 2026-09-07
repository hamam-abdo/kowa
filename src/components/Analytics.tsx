import CancellationSources from "./analytics/CancellationSources";
import PeakHours from "./analytics/PeakHours";
import StatusDonut from "./analytics/StatusDonut";
import TopCities from "./analytics/TopCities";
import TripsRevenueChart from "./analytics/TripsRevenueChart";

/** قسم التحليلات — صفّان من الرسوم البيانية */
function Analytics() {
  return (
    <>
      <section className="mt-4 grid gap-4 lg:grid-cols-3">
        <TripsRevenueChart />
        <StatusDonut />
      </section>

      <section className="mt-4 grid gap-4 lg:grid-cols-3">
        <CancellationSources />
        <TopCities />
        <PeakHours />
      </section>
    </>
  );
}

export default Analytics;
