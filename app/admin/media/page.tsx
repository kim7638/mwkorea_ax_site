import { redirect } from 'next/navigation'
import { validateSession } from '@/lib/auth'
import AdminNav from '../AdminNav'
import MediaUploader from './MediaUploader'

export default async function MediaPage() {
  const valid = await validateSession()
  if (!valid) redirect('/admin/login')

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Media</h1>
        <MediaUploader />
      </div>
    </div>
  )
}
