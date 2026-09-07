import { CHART_COLORS, TOP_CITIES } from "../../constants";
import ChartCard from "./ChartCard";

const MAX = Math.max(...TOP_CITIES.map((city) => city.trips));

/** أعلى المدن أداءً — أشرطة أفقية على مسار رمادي */
function TopCities() {
  return (
    <ChartCard title="أعلى المدن أداءً" subtitle="أفقي بـ track">
      <ul className="space-y-3">
        {TOP_CITIES.map((city, index) => (
          <li key={city.city} className="flex items-center gap-3">
            <span className="w-14 shrink-0 text-sm text-heading">
              {city.city}
            </span>

            <span className="flex h-4 flex-1 overflow-hidden rounded-full bg-slate-100">
              <span
                className="h-full rounded-full"
                style={{
                  width: `${(city.trips / MAX) * 100}%`,
                  backgroundColor:
                    index === 0 ? CHART_COLORS.brand : CHART_COLORS.blue,
                }}
              />
            </span>

            <span className="w-12 shrink-0 text-start text-sm tabular-nums text-body">
              {city.trips}
            </span>
          </li>
        ))}
      </ul>
    </ChartCard>
  );
}

export default TopCities;
