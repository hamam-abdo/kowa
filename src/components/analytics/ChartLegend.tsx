interface LegendItem {
  label: string;
  color: string;
}

/** مفتاح ألوان أفقي — نقطة ملوّنة بجانب كل اسم */
function ChartLegend({ items }: { items: readonly LegendItem[] }) {
  return (
    <ul className="flex flex-wrap items-center gap-3 text-xs text-body">
      {items.map((item) => (
        <li key={item.label} className="flex items-center gap-1.5">
          {item.label}
          <span
            className="size-2 rounded-full"
            style={{ backgroundColor: item.color }}
          />
        </li>
      ))}
    </ul>
  );
}

export default ChartLegend;
