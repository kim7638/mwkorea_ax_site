import { NextRequest, NextResponse } from 'next/server'
import { validateSession } from '@/lib/auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const valid = await validateSession()
  if (!valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const { title, slug, client, industry, year, short_description, overview, description, thumbnail_url, images, tags, sort_order, is_published } = body

  const { data, error } = await getSupabaseAdmin()
    .from('portfolio_items')
    .update({ title, slug, client, industry, year, short_description, overview, description, thumbnail_url, images, tags, sort_order, is_published })
    .eq('id', params.id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data)
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const valid = await validateSession()
  if (!valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { error } = await getSupabaseAdmin()
    .from('portfolio_items')
    .delete()
    .eq('id', params.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
