import type { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle: string;
  /** يظهر يسار الترويسة — عادةً مفتاح الألوان */
  legend?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** غلاف موحّد لكل بطاقات الرسوم */
function ChartCard({
  title,
  subtitle,
  legend,
  children,
  className = "",
}: ChartCardProps) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-5 ${className}`}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div >
          <h3 className="font-bold text-heading">{title}</h3>
          <p className="mt-0.5 text-xs text-body">{subtitle}</p>
        </div>
        {legend}
      </div>

      {children}
    </div>
  );
}

export default ChartCard;
