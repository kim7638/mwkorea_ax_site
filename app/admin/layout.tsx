import { redirect } from 'next/navigation'
import { validateSession } from '@/lib/auth'
import AdminNav from './AdminNav'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Login page doesn't need auth check (handled by middleware redirect flow)
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  )
}
