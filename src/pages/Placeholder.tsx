interface PlaceholderProps {
  title: string
}

// صفحة مؤقتة لكل مسار حتى تُبنى شاشته الحقيقية
function Placeholder({ title }: PlaceholderProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-8 text-center">
      <h2 className="text-xl font-bold text-heading">{title}</h2>
      <p className="mt-2 text-sm text-body">هذه الصفحة قيد الإنشاء</p>
    </div>
  )
}

export default Placeholder
