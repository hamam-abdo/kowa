import type { StatCard as StatCardData, StatTone } from "../constants";
import Sparkline from "./Sparkline";

const TONE_COLORS: Record<StatTone, string> = {
  brand: "#1F0F8C",
  blue: "#2563EB",
  green: "#16A34A",
  red: "#DC2626",
  
};

function StatCard({ stat }: { stat: StatCardData }) {
  const color = TONE_COLORS[stat.tone];
  const isUp = stat.direction === "up";

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm text-body">{stat.label}</p>

      <p className="mt-1 text-3xl font-bold text-heading">
        {stat.value.toLocaleString("en-US")}
        {stat.unit && (
          <span className="ms-1 text-xl font-semibold">{stat.unit}</span>
        )}
      </p>

      <div className="mt-3">
        <Sparkline data={stat.series} color={color} label={stat.label} />
      </div>

      <p
        className={`mt-2 flex items-center gap-1 text-xs ${
          isUp ? "text-emerald-600" : "text-red-600"
        }`}
      >
        <span aria-hidden="true">{isUp ? "▲" : "▼"}</span>
        <span>{stat.change}%</span>
        <span >عن الفترة السابقة</span>
        <span className="sr-only">{isUp ? "ارتفاع" : "انخفاض"}</span>
      </p>
    </div>
  );
}

export default StatCard;
