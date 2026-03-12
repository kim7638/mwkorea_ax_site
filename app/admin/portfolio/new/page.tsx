import { redirect } from 'next/navigation'
import { validateSession } from '@/lib/auth'
import AdminNav from '../../AdminNav'
import PortfolioForm from '../PortfolioForm'

export default async function NewPortfolioPage() {
  const valid = await validateSession()
  if (!valid) redirect('/admin/login')

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">New Portfolio Item</h1>
        <PortfolioForm />
      </div>
    </div>
  )
}
