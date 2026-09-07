import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { CHART_COLORS, TRIPS_REVENUE_SERIES } from "../../constants";
import ChartCard from "./ChartCard";
import ChartLegend from "./ChartLegend";

const LEGEND = [
  { label: "الرحلات", color: CHART_COLORS.brand },
  { label: "الإيراد", color: CHART_COLORS.blue },
];

interface TooltipPayload {
  dataKey?: string | number;
  value?: number;
}

function ChartTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: number;
}) {
  if (!active || !payload?.length) return null;

  const trips = payload.find((item) => item.dataKey === "trips")?.value;
  const revenue = payload.find((item) => item.dataKey === "revenue")?.value;

  return (
    <div className="rounded-lg bg-heading px-3 py-2 text-xs text-white shadow-lg">
      <p className="opacity-70">{label} أغسطس</p>
      <p className="mt-1 font-semibold">
        {trips} رحلة · {revenue} ألف ر.س
      </p>
    </div>
  );
}

/** الرحلات والإيراد عبر الوقت — مقياسان مستقلان بلا محاور مرئية */
function TripsRevenueChart() {
  return (
    <ChartCard
      title="الرحلات والإيراد عبر الوقت"
      subtitle="آخر 14 يوم"
      legend={<ChartLegend items={LEGEND} />}
      className="lg:col-span-2"
    >
      <div className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={TRIPS_REVENUE_SERIES}
            margin={{ top: 8, right: 8, bottom: 0, left: 8 }}
          >
            <CartesianGrid stroke="#eef0f2" vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94a3b8", fontSize: 11 }}
            />
            <YAxis
              yAxisId="trips"
              hide
              domain={["dataMin - 60", "dataMax + 30"]}
            />
            <YAxis
              yAxisId="revenue"
              hide
              domain={["dataMin - 3", "dataMax + 1.5"]}
            />

            <Tooltip
              content={<ChartTooltip />}
              cursor={{ stroke: "#cbd5e1" }}
            />

            <Area
              yAxisId="trips"
              type="monotone"
              dataKey="trips"
              stroke={CHART_COLORS.brand}
              strokeWidth={2}
              fill={CHART_COLORS.brand}
              fillOpacity={0.08}
              dot={false}
              activeDot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
              isAnimationActive={false}
            />
            <Line
              yAxisId="revenue"
              type="monotone"
              dataKey="revenue"
              stroke={CHART_COLORS.blue}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
              isAnimationActive={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

export default TripsRevenueChart;
