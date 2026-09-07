import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

import { TRIP_STATUS_SLICES, TRIP_TOTAL } from "../../constants";
import ChartCard from "./ChartCard";

/** توزيع حالات الرحلة — دائرة مفرغة والإجمالي في مركزها */
function StatusDonut() {
  return (
    <ChartCard title="توزيع حالات الرحلة" subtitle="آخر 30 يوم">
      <div className="flex   gap-4">
        <div className="relative h-52 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={TRIP_STATUS_SLICES}
                dataKey="value"
                innerRadius="62%"
                outerRadius="100%"
                paddingAngle={2}
                startAngle={90}
                endAngle={-270}
                stroke="#fff"
                strokeWidth={2}
                isAnimationActive={false}
              >
                {TRIP_STATUS_SLICES.map((slice) => (
                  <Cell key={slice.label} fill={slice.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* الإجمالي في المركز */}
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <p className="text-center">
              <span className="block text-2xl font-bold text-heading">
                {TRIP_TOTAL.toLocaleString("en-US")}
              </span>
              <span className="block text-xs text-body">رحلة</span>
            </p>
          </div>
        </div>
        {/* الأسماء والنسب — تُغني عن الاعتماد على اللون وحده */}
        <ul className="space-y-5  flex-1 text-sm">
          {TRIP_STATUS_SLICES.map((slice) => (
            <li
              key={slice.label}
              className="flex items-center justify-between gap-3"
            >
              <span className="flex items-center gap-2 text-heading">
                <span
                  className="size-2.5 rounded-full"
                  style={{ backgroundColor: slice.color }}
                />
                {slice.label}
              </span>
              <span className="text-body">{slice.percent}%</span>
            </li>
          ))}
        </ul>
      </div>
    </ChartCard>
  );
}

export default StatusDonut;
