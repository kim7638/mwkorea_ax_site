'use client'

import { useState, useRef } from 'react'

interface UploadedFile {
  name: string
  url: string
}

export default function MediaUploader() {
  const [uploads, setUploads] = useState<UploadedFile[]>([])
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const [copied, setCopied] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files
    if (!files || files.length === 0) return

    setError('')
    setUploading(true)

    const results: UploadedFile[] = []

    for (const file of Array.from(files)) {
      const formData = new FormData()
      formData.append('file', file)

      const res = await fetch('/api/admin/media/upload', {
        method: 'POST',
        body: formData,
      })

      if (res.ok) {
        const data = await res.json()
        results.push({ name: file.name, url: data.url })
      } else {
        const data = await res.json()
        setError(data.error || `Failed to upload ${file.name}`)
      }
    }

    setUploads((prev) => [...results, ...prev])
    setUploading(false)

    // Reset input
    if (inputRef.current) inputRef.current.value = ''
  }

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url)
    setCopied(url)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Upload area */}
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 cursor-pointer transition-colors"
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
        {uploading ? (
          <p className="text-sm text-gray-500">Uploading...</p>
        ) : (
          <>
            <p className="text-sm text-gray-600 font-medium">Click to upload images</p>
            <p className="text-xs text-gray-400 mt-1">PNG, JPG, GIF, WebP supported</p>
          </>
        )}
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* Uploaded files */}
      {uploads.length > 0 && (
        <div className="space-y-3">
          <h2 className="text-sm font-medium text-gray-700">Uploaded this session</h2>
          <div className="grid grid-cols-1 gap-3">
            {uploads.map((file) => (
              <div
                key={file.url}
                className="flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-3"
              >
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-16 h-16 object-cover rounded border border-gray-100 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 truncate">{file.name}</p>
                  <p className="text-xs text-gray-400 truncate mt-0.5">{file.url}</p>
                </div>
                <button
                  onClick={() => copyUrl(file.url)}
                  className={`flex-shrink-0 text-xs px-3 py-1.5 rounded border transition-colors ${
                    copied === file.url
                      ? 'bg-green-50 border-green-300 text-green-700'
                      : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {copied === file.url ? 'Copied!' : 'Copy URL'}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
