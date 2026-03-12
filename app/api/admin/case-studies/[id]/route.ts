import { NextRequest, NextResponse } from 'next/server'
import { validateSession } from '@/lib/auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  const valid = await validateSession()
  if (!valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const { title, slug, client, industry, year, summary, hero_image, problem, approach, solution, outcome, thumbnail_url, tags, sort_order, is_featured, is_published } = body

  const { data, error } = await getSupabaseAdmin()
    .from('case_studies')
    .update({ title, slug, client, industry, year, summary, hero_image, problem, approach, solution, outcome, thumbnail_url, tags, sort_order, is_featured, is_published })
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
    .from('case_studies')
    .delete()
    .eq('id', params.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json({ ok: true })
}
