// components/Navbar.tsx

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Briefcase,
  Code,
  GraduationCap,
  BadgeCheck,
  FileText,
  Contact
} from 'lucide-react'

const navItems = [
  { href: '/', icon: <Home />, label: 'Home' },
  { href: '/experience', icon: <Briefcase />, label: 'Experience' },
  { href: '/projects', icon: <Code />, label: 'Projects' },
  { href: '/education', icon: <GraduationCap />, label: 'Education' },
  { href: '/skills', icon: <BadgeCheck />, label: 'Skills' },
  { href: '/resume', icon: <FileText />, label: 'Resume' },
  { href: '/contact', icon: <Contact />, label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-xl flex flex-col items-center space-y-4">
      {navItems.map(({ href, icon, label }) => (
        <Link
          key={href}
          href={href}
          title={label}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
            pathname === href
              ? 'bg-black text-white dark:bg-white dark:text-black'
              : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500'
          }`}
        >
          {icon}
        </Link>
      ))}
    </div>
  )
}
