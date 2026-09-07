import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { CANCELLATION_SERIES, CANCELLATION_SOURCES } from "../../constants";
import ChartCard from "./ChartCard";
import ChartLegend from "./ChartLegend";

interface TooltipPayload {
  name?: string;
  value?: number;
  color?: string;
}

function BarTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipPayload[];
  label?: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg bg-heading px-3 py-2 text-xs text-white shadow-lg">
      <p className="opacity-70">{label}</p>
      {payload.map((item) => (
        <p key={item.name} className="mt-1 flex items-center gap-1.5">
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: item.color }}
          />
          {item.name}: {item.value}
        </p>
      ))}
    </div>
  );
}

/** مصادر الإلغاء — أعمدة مكدّسة أسبوعياً */
function CancellationSources() {
  return (
    <ChartCard
      title="مصادر الإلغاء"
      subtitle="آخر 6 أسابيع"
      legend={<ChartLegend items={CANCELLATION_SOURCES} />}
    >
      <div dir="ltr" className="h-56 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={CANCELLATION_SERIES}
            margin={{ top: 8, right: 0, bottom: 0, left: 0 }}
          >
            <XAxis
              dataKey="week"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#94a3b8", fontSize: 10 }}
            />
            <YAxis hide />
            <Tooltip content={<BarTooltip />} cursor={{ fill: "#f1f5f9" }} />

            {CANCELLATION_SOURCES.map((source, index) => (
              <Bar
                key={source.key}
                dataKey={source.key}
                name={source.label}
                stackId="cancel"
                fill={source.color}
                stroke="#fff"
                strokeWidth={2}
                radius={
                  index === CANCELLATION_SOURCES.length - 1 ? [6, 6, 0, 0] : 0
                }
                isAnimationActive={false}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}

export default CancellationSources;
