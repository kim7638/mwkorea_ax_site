import { NextRequest, NextResponse } from 'next/server'
import { validateSession } from '@/lib/auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  const valid = await validateSession()
  if (!valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const { title, slug, client, industry, year, short_description, overview, description, thumbnail_url, images, tags, sort_order, is_published } = body

  if (!title || !slug) {
    return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 })
  }

  const { data, error } = await getSupabaseAdmin()
    .from('portfolio_items')
    .insert({ title, slug, client, industry, year, short_description, overview, description, thumbnail_url, images, tags, sort_order, is_published })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data, { status: 201 })
}
