import { PEAK_DAYS, PEAK_MATRIX, PEAK_SCALE, PEAK_SLOTS } from "../../constants";
import ChartCard from "./ChartCard";

/** ساعات الذروة — خريطة حرارية 7 أيام × 10 فترات */
function PeakHours() {
  return (
    <ChartCard title="ساعات الذروة" subtitle="7 أيام × 10 فترات">
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-1">
          <caption className="sr-only">
            كثافة الطلب حسب اليوم والفترة الزمنية
          </caption>

          <thead>
            <tr>
              <td />
              {PEAK_SLOTS.map((slot) => (
                <th
                  key={slot}
                  scope="col"
                  className="pb-1 text-center text-[10px] font-normal whitespace-nowrap text-body"
                >
                  {slot}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {PEAK_DAYS.map((day, rowIndex) => (
              <tr key={day}>
                <th
                  scope="row"
                  className="pe-2 text-end text-xs font-normal whitespace-nowrap text-body"
                >
                  {day}
                </th>

                {PEAK_MATRIX[rowIndex].map((level, colIndex) => (
                  <td key={PEAK_SLOTS[colIndex]} className="p-0">
                    <span
                      title={`${day} · ${PEAK_SLOTS[colIndex]} · كثافة ${level} من 4`}
                      className="block h-6 w-full rounded-md"
                      style={{ backgroundColor: PEAK_SCALE[level] }}
                    />
                  </td>
                ))}
              </tr>
            ))}

          </tbody>
        </table>
      </div>

      {/* مفتاح التدرّج */}
      <div className="mt-3 flex items-center justify-end gap-1.5 text-xs text-body">
        <span>أقل</span>
        {PEAK_SCALE.map((color) => (
          <span
            key={color}
            className="size-3 rounded-sm"
            style={{ backgroundColor: color }}
          />
        ))}
        <span>أكثر</span>
      </div>
    </ChartCard>
  );
}

export default PeakHours;
