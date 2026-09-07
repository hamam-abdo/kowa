import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
      <p className="text-5xl font-bold text-brand">٤٠٤</p>
      <h2 className="mt-4 text-xl font-bold text-heading">
        الصفحة غير موجودة
      </h2>
      <p className="mt-2 text-sm text-body">
        الرابط الذي فتحته غير صحيح أو تم حذف الصفحة.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90"
      >
        العودة للوحة التحكم
      </Link>
    </div>
  )
}

export default NotFound
