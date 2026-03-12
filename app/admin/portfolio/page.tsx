import { redirect } from 'next/navigation'
import Link from 'next/link'
import { validateSession } from '@/lib/auth'
import { supabaseAdmin } from '@/lib/supabase'
import AdminNav from '../AdminNav'
import PortfolioActions from './PortfolioActions'

export default async function PortfolioListPage() {
  const valid = await validateSession()
  if (!valid) redirect('/admin/login')

  const { data: items } = await supabaseAdmin
    .from('portfolio_items')
    .select('id, title, slug, is_published, sort_order, created_at')
    .order('sort_order', { ascending: true })
    .order('created_at', { ascending: false })

  return (
    <div>
      <AdminNav />
      <div className="max-w-5xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-900">Portfolio</h1>
          <Link
            href="/admin/portfolio/new"
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
          >
            + New Item
          </Link>
        </div>

        {!items || items.length === 0 ? (
          <p className="text-gray-500 text-sm">No portfolio items yet.</p>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-600 font-medium">Title</th>
                  <th className="text-left px-4 py-3 text-gray-600 font-medium">Slug</th>
                  <th className="text-center px-4 py-3 text-gray-600 font-medium">Order</th>
                  <th className="text-center px-4 py-3 text-gray-600 font-medium">Status</th>
                  <th className="text-right px-4 py-3 text-gray-600 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {items.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium text-gray-900">{item.title}</td>
                    <td className="px-4 py-3 text-gray-500">{item.slug}</td>
                    <td className="px-4 py-3 text-center text-gray-500">{item.sort_order}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        item.is_published
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-500'
                      }`}>
                        {item.is_published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <PortfolioActions
                        id={item.id}
                        isPublished={item.is_published}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
