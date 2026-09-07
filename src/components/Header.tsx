import Icon from "./Icon";

interface HeaderProps {
  title: string;
  onOpenMenu: () => void;
}

// الشريط العلوي — عنوان الصفحة الحالية وأدوات المستخدم
function Header({ title, onOpenMenu }: HeaderProps) {
  return (
    <header className="sticky top-0 z-20 flex h-20 shrink-0 items-center gap-4 border-b border-slate-200 bg-white px-4 lg:px-6">
      <button
        onClick={onOpenMenu}
        className="rounded-lg p-2 text-body hover:bg-slate-100 lg:hidden"
        aria-label="فتح القائمة"
      >
        <Icon name="menu" />
      </button>

      <div className="min-w-0">
        <h1 className="truncate text-lg font-bold text-heading">{title}</h1>
        <p className="hidden truncate text-xs text-body sm:block">
          آخر تحديث قبل دقيقتين · الرياض والمدن المفعّلة
        </p>
      </div>

      <div className="ms-auto flex items-center gap-2">
        <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-start transition-colors hover:bg-slate-100">
          <img
            src="/Ellipse.png"
            alt="عبدالله · مدير"
            width="32"
            height="32"
            className="size-8 shrink-0 rounded-full object-cover"
          />
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-heading">
              عبدالله · مدير
            </span>
            <span className="block text-xs text-body">الأدمن</span>
          </span>
        </button>

        <button
          className="rounded-lg p-2 text-body transition-colors hover:bg-slate-100 hover:text-brand"
          aria-label="بحث"
        >
          <Icon name="search" />
        </button>

        <button
          className="relative rounded-lg p-2 text-body transition-colors hover:bg-slate-100 hover:text-brand"
          aria-label="الإشعارات"
        >
          <Icon name="bell" />
          <span className="absolute inset-e-1.5 top-1.5 size-2 rounded-full bg-red-500 ring-2 ring-white" />
        </button>
      </div>
    </header>
  );
}

export default Header;
