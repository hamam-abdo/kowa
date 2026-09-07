import Analytics from "../components/Analytics";
import Trips from "../components/Trips";
import { STAT_CARDS } from "../constants";
import StatCard from "../components/StatCard";

const STATS = [
  { label: "اليوم", Active: false },
  { label: "اسبوع", Active: false },
  { label: "شهر", Active: true },
  { label: "ملغية", Active: false },
];

function Dashboard() {
  return (
    <>
      <div className="flex    gap-4  items-center   ">
        {STATS.map((stat) => (
          <button
            key={stat.label}
            className={`min-w-22 rounded-xl px-6 py-2.5 text-center text-sm ${stat.Active ? "bg-surface font-semibold text-heading" : "bg-muted text-body"}`}
          >
            {stat.label}
          </button>
        ))}

        <button className="ms-auto  rounded-xl  text-sm  py-3 px-12 bg-brand text-white">
          تصدير التقرير
        </button>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STAT_CARDS.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>

      <Trips />

      <Analytics />
    </>
  );
}

export default Dashboard;
