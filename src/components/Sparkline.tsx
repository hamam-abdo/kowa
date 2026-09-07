import { Area, AreaChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";

interface SparklineProps {
  data: number[];
  color: string;
  label: string;
}

interface TooltipEntry {
  value?: number;
}

function SparkTooltip({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: TooltipEntry[];
  label: string;
}) {
  if (!active || !payload?.length) return null;

  return (
    <div className="rounded-lg bg-heading px-2.5 py-1.5 text-xs text-white shadow-lg">
      <span className="opacity-70">{label}: </span>
      {payload[0].value?.toLocaleString("en-US")}
    </div>
  );
}

// رسم بياني مصغّر — بلا محاور ولا شبكة، يعرض شكل الاتجاه فقط
function Sparkline({ data, color, label }: SparklineProps) {
  const points = data.map((value, index) => ({ index, value }));

  return (
    <div className="h-14 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={points}
          margin={{ top: 4, right: 0, bottom: 0, left: 0 }}
        >
          <YAxis hide domain={["dataMin", "dataMax"]} />
          <Tooltip
            content={<SparkTooltip label={label} />}
            cursor={{ stroke: color, strokeWidth: 1, strokeDasharray: "3 3" }}
          />
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={2}
            fill={color}
            fillOpacity={0.12}
            dot={false}
            activeDot={{ r: 4, stroke: "#fff", strokeWidth: 2 }}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Sparkline;
