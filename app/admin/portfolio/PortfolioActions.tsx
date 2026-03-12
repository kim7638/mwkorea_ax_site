'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
  id: string
  isPublished: boolean
}

export default function PortfolioActions({ id, isPublished }: Props) {
  const router = useRouter()

  async function togglePublish() {
    await fetch(`/api/admin/portfolio/${id}/publish`, { method: 'POST' })
    router.refresh()
  }

  async function handleDelete() {
    if (!confirm('Delete this item?')) return
    await fetch(`/api/admin/portfolio/${id}`, { method: 'DELETE' })
    router.refresh()
  }

  return (
    <div className="flex items-center justify-end gap-3">
      <button
        onClick={togglePublish}
        className="text-xs text-blue-600 hover:underline"
      >
        {isPublished ? 'Unpublish' : 'Publish'}
      </button>
      <Link
        href={`/admin/portfolio/${id}/edit`}
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
