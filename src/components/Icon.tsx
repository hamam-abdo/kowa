// الأيقونات ملفات SVG مستقلة في public/icons/
// تُعرض كـ mask لا كـ <img>، فيأتي اللون من currentColor وترث لون النص.
const FILE_ICONS = [
  'home',
  'car',
  'driver',
  'user',
  'clipboard',
  'wallet',
  'money',
  'report',
  'support',
  'bell',
  'settings',
  'search',
] as const

// أيقونات الواجهة العامة — مرسومة هنا لأنها ليست جزءاً من تصميم Figma
const UI_ICONS = {
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'm6 6 12 12M18 6 6 18',
} as const

type FileIconName = (typeof FILE_ICONS)[number]
type UiIconName = keyof typeof UI_ICONS

export type IconName = FileIconName | UiIconName

interface IconProps {
  name: IconName
  className?: string
}

function isFileIcon(name: IconName): name is FileIconName {
  return (FILE_ICONS as readonly string[]).includes(name)
}

function Icon({ name, className = 'size-5' }: IconProps) {
  if (isFileIcon(name)) {
    const url = `url(/icons/${name}.svg)`

    return (
      <span
        role="presentation"
        className={`inline-block shrink-0 bg-current ${className}`}
        style={{
          maskImage: url,
          WebkitMaskImage: url,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />
    )
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={UI_ICONS[name]} />
    </svg>
  )
}

export default Icon
