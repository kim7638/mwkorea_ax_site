import { redirect, notFound } from 'next/navigation'
import { validateSession } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import AdminNav from '../../../AdminNav'
import CaseStudyForm from '../../CaseStudyForm'

export default async function EditCaseStudyPage({ params }: { params: { id: string } }) {
  const valid = await validateSession()
  if (!valid) redirect('/admin/login')

  const { data: item } = await supabaseAdmin
    .from('case_studies')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!item) notFound()

  const initialData = {
    title: item.title,
    slug: item.slug,
    summary: item.summary || '',
    content: item.content || '',
    thumbnail_url: item.thumbnail_url || '',
    client: item.client || '',
    industry: item.industry || '',
    tags: (item.tags || []).join(', '),
    sort_order: item.sort_order,
    is_featured: item.is_featured,
    is_published: item.is_published,
  }

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Edit Case Study</h1>
        <CaseStudyForm initialData={initialData} id={params.id} />
      </div>
    </div>
  )
}
