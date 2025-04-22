
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as Tooltip from '@radix-ui/react-tooltip'

import {
  Home,
  Briefcase,
  Code,
  GraduationCap,
  BadgeCheck,
  Contact
} from 'lucide-react'

const navItems = [
  { href: '/', icon: <Home />, label: 'Home' },
  { href: '/experience', icon: <Briefcase />, label: 'Experience' },
  { href: '/projects', icon: <Code />, label: 'Projects' },
  { href: '/education', icon: <GraduationCap />, label: 'Education' },
  { href: '/tech-stack', icon: <BadgeCheck />, label: 'Tech Stack' },
  { href: '/connect', icon: <Contact />, label: 'Connect' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <div className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow-xl flex flex-col items-center space-y-4">
      {navItems.map(({ href, icon, label }) => (
        <Tooltip.Provider delayDuration={100} key={href}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Link
                href={href}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-all ${
                  pathname === href
                    ? 'bg-black text-white dark:bg-white dark:text-black'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              >
                {icon}
              </Link>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-black text-white text-xs px-3 py-1 rounded-md shadow-md dark:bg-white dark:text-black"
                side="left"
                sideOffset={8}
              >
                {label}
                <Tooltip.Arrow className="fill-black dark:fill-white" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      ))}
    </div>
  )
}
