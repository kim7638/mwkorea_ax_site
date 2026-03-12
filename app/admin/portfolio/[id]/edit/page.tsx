import { redirect, notFound } from 'next/navigation'
import { validateSession } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import AdminNav from '../../../AdminNav'
import PortfolioForm from '../../PortfolioForm'

export default async function EditPortfolioPage({ params }: { params: { id: string } }) {
  const valid = await validateSession()
  if (!valid) redirect('/admin/login')

  const { data: item } = await supabaseAdmin
    .from('portfolio_items')
    .select('*')
    .eq('id', params.id)
    .single()

  if (!item) notFound()

  const initialData = {
    title: item.title,
    slug: item.slug,
    description: item.description || '',
    thumbnail_url: item.thumbnail_url || '',
    images: (item.images || []).join('\n'),
    tags: (item.tags || []).join(', '),
    sort_order: item.sort_order,
    is_published: item.is_published,
  }

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Edit Portfolio Item</h1>
        <PortfolioForm initialData={initialData} id={params.id} />
      </div>
    </div>
  )
}
