import type { IconName } from '../components/Icon'

export interface NavItem {
  path: string
  label: string
  icon: IconName
}

// كل مصفوفة داخلية = مجموعة يفصلها خط عن التي تليها
export const NAV_SECTIONS: NavItem[][] = [
  [
    { path: '/', label: 'لوحة التحكم', icon: 'home' },
    { path: '/trips', label: 'الرحلات', icon: 'car' },
    { path: '/drivers', label: 'السواقين', icon: 'driver' },
    { path: '/users', label: 'المستخدمين', icon: 'user' },
  ],
  [
    { path: '/requests', label: 'طلبات القبول', icon: 'clipboard' },
    { path: '/finance', label: 'المالية والمحفظة', icon: 'wallet' },
    { path: '/salary', label: 'الراتب الشهري', icon: 'money' },
  ],
  [
    { path: '/reports', label: 'التقارير', icon: 'report' },
    { path: '/support', label: 'الدعم والبلاغات', icon: 'support' },
    { path: '/notifications', label: 'الإشعارات', icon: 'bell' },
    { path: '/settings', label: 'الإعدادات', icon: 'settings' },
  ],
]

export const ALL_NAV_ITEMS: NavItem[] = NAV_SECTIONS.flat()
