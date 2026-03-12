'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
  id: string
  isPublished: boolean
  isFeatured: boolean
}

export default function CaseStudyActions({ id, isPublished, isFeatured }: Props) {
  const router = useRouter()

  async function togglePublish() {
    await fetch(`/api/admin/case-studies/${id}/publish`, { method: 'POST' })
    router.refresh()
  }

  async function toggleFeatured() {
    await fetch(`/api/admin/case-studies/${id}/featured`, { method: 'POST' })
    router.refresh()
  }

  async function handleDelete() {
    if (!confirm('Delete this case study?')) return
    await fetch(`/api/admin/case-studies/${id}`, { method: 'DELETE' })
    router.refresh()
  }

  return (
    <div className="flex items-center justify-end gap-3">
      <button
        onClick={toggleFeatured}
        className="text-xs text-yellow-600 hover:underline"
      >
        {isFeatured ? 'Unfeature' : 'Feature'}
      </button>
      <button
        onClick={togglePublish}
        className="text-xs text-blue-600 hover:underline"
      >
        {isPublished ? 'Unpublish' : 'Publish'}
      </button>
      <Link
        href={`/admin/case-studies/${id}/edit`}
        className="text-xs text-gray-600 hover:underline"
      >
        Edit
      </Link>
      <button
        onClick={handleDelete}
        className="text-xs text-red-500 hover:underline"
      >
        Delete
      </button>
    </div>
  )
}
