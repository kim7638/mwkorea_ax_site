'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/admin/portfolio', label: 'Portfolio' },
  { href: '/admin/case-studies', label: 'Case Studies' },
  { href: '/admin/media', label: 'Media' },
]

export default function AdminNav() {
  const pathname = usePathname()

  async function handleLogout() {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }

  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <span className="text-sm font-semibold text-gray-900">Admin</span>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm ${
              pathname.startsWith(item.href)
                ? 'text-blue-600 font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <button
        onClick={handleLogout}
        className="text-sm text-gray-500 hover:text-gray-800"
      >
        Logout
      </button>
    </nav>
  )
}
