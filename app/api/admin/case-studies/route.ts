import { NextRequest, NextResponse } from 'next/server'
import { validateSession } from '@/lib/auth'
import { getSupabaseAdmin } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  const valid = await validateSession()
  if (!valid) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await request.json()
  const { title, slug, client, industry, year, summary, hero_image, problem, approach, solution, outcome, thumbnail_url, tags, sort_order, is_featured, is_published } = body

  if (!title || !slug) {
    return NextResponse.json({ error: 'Title and slug are required' }, { status: 400 })
  }

  const { data, error } = await getSupabaseAdmin()
    .from('case_studies')
    .insert({ title, slug, client, industry, year, summary, hero_image, problem, approach, solution, outcome, thumbnail_url, tags, sort_order, is_featured, is_published })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  return NextResponse.json(data, { status: 201 })
}
