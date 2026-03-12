import { redirect } from 'next/navigation'
import { validateSession } from '@/lib/auth'
import AdminNav from '../../AdminNav'
import CaseStudyForm from '../CaseStudyForm'

export default async function NewCaseStudyPage() {
  const valid = await validateSession()
  if (!valid) redirect('/admin/login')

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">New Case Study</h1>
        <CaseStudyForm />
      </div>
    </div>
  )
}
