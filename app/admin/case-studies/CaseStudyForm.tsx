'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface CaseStudyFormData {
  title: string
  slug: string
  client: string
  industry: string
  year: string
  summary: string
  hero_image: string
  problem: string
  approach: string
  solution: string
  outcome: string
  thumbnail_url: string
  tags: string
  sort_order: number
  is_featured: boolean
  is_published: boolean
}

interface Props {
  initialData?: Partial<CaseStudyFormData>
  id?: string
}

function slugify(text: string) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
}

export default function CaseStudyForm({ initialData, id }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState<CaseStudyFormData>({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    client: initialData?.client || '',
    industry: initialData?.industry || '',
    year: initialData?.year || String(new Date().getFullYear()),
    summary: initialData?.summary || '',
    hero_image: initialData?.hero_image || '',
    problem: initialData?.problem || '',
    approach: initialData?.approach || '',
    solution: initialData?.solution || '',
    outcome: initialData?.outcome || '',
    thumbnail_url: initialData?.thumbnail_url || '',
    tags: initialData?.tags || '',
    sort_order: initialData?.sort_order ?? 0,
    is_featured: initialData?.is_featured || false,
    is_published: initialData?.is_published || false,
  })

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const title = e.target.value
    setForm((f) => ({ ...f, title, slug: id ? f.slug : slugify(title) }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    const payload = {
      ...form,
      year: form.year ? parseInt(form.year) : null,
      tags: form.tags ? form.tags.split(',').map((s) => s.trim()).filter(Boolean) : [],
    }

    const url = id ? `/api/admin/case-studies/${id}` : '/api/admin/case-studies'
    const method = id ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    setLoading(false)

    if (res.ok) {
      router.push('/admin/case-studies')
      router.refresh()
    } else {
      const data = await res.json()
      setError(data.error || 'Save failed')
    }
  }

  const inputClass = 'w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
  const taClass = `${inputClass} font-mono`

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-2xl">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
        <input type="text" value={form.title} onChange={handleTitleChange} className={inputClass} required />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Slug *</label>
        <input type="text" value={form.slug} onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))} className={inputClass} required />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Client</label>
          <input type="text" value={form.client} onChange={(e) => setForm((f) => ({ ...f, client: e.target.value }))} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
          <input type="text" value={form.industry} onChange={(e) => setForm((f) => ({ ...f, industry: e.target.value }))} className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
          <input type="number" value={form.year} onChange={(e) => setForm((f) => ({ ...f, year: e.target.value }))} className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Summary <span className="text-gray-400 font-normal">(목록 + 상세 Overview)</span></label>
        <textarea value={form.summary} onChange={(e) => setForm((f) => ({ ...f, summary: e.target.value }))} rows={3} className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Hero Image URL <span className="text-gray-400 font-normal">(상세 페이지 대형 배경 이미지)</span></label>
        <input type="text" value={form.hero_image} onChange={(e) => setForm((f) => ({ ...f, hero_image: e.target.value }))} placeholder="https://..." className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Thumbnail URL <span className="text-gray-400 font-normal">(목록 카드 이미지)</span></label>
        <input type="text" value={form.thumbnail_url} onChange={(e) => setForm((f) => ({ ...f, thumbnail_url: e.target.value }))} placeholder="https://..." className={inputClass} />
      </div>

      <hr className="border-gray-200" />
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">Content Sections</p>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">The Problem</label>
        <textarea value={form.problem} onChange={(e) => setForm((f) => ({ ...f, problem: e.target.value }))} rows={4} className={taClass} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Our Approach</label>
        <textarea value={form.approach} onChange={(e) => setForm((f) => ({ ...f, approach: e.target.value }))} rows={4} className={taClass} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">The Solution</label>
        <textarea value={form.solution} onChange={(e) => setForm((f) => ({ ...f, solution: e.target.value }))} rows={4} className={taClass} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Outcome</label>
        <textarea value={form.outcome} onChange={(e) => setForm((f) => ({ ...f, outcome: e.target.value }))} rows={4} className={taClass} />
      </div>

      <hr className="border-gray-200" />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Tags <span className="text-gray-400 font-normal">(쉼표 구분)</span></label>
        <input type="text" value={form.tags} onChange={(e) => setForm((f) => ({ ...f, tags: e.target.value }))} placeholder="Mobile, UX, Healthcare" className={inputClass} />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sort Order</label>
          <input type="number" value={form.sort_order} onChange={(e) => setForm((f) => ({ ...f, sort_order: parseInt(e.target.value) || 0 }))} className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="flex items-end pb-2 gap-6">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.is_featured} onChange={(e) => setForm((f) => ({ ...f, is_featured: e.target.checked }))} className="rounded border-gray-300" />
            <span className="text-sm text-gray-700">Featured</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.is_published} onChange={(e) => setForm((f) => ({ ...f, is_published: e.target.checked }))} className="rounded border-gray-300" />
            <span className="text-sm text-gray-700">Published</span>
          </label>
        </div>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={loading} className="bg-blue-600 text-white text-sm px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-50">
          {loading ? 'Saving...' : id ? 'Update' : 'Create'}
        </button>
        <button type="button" onClick={() => router.push('/admin/case-studies')} className="text-sm px-5 py-2 rounded border border-gray-300 hover:bg-gray-50">
          Cancel
        </button>
      </div>
    </form>
  )
}
