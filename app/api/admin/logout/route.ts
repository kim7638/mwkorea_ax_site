import { NextResponse } from 'next/server'
import { deleteSession, SESSION_COOKIE } from '@/lib/auth'

export async function POST() {
  await deleteSession()

  const response = NextResponse.json({ ok: true })
  response.cookies.set(SESSION_COOKIE, '', {
    httpOnly: true,
    maxAge: 0,
    path: '/',
  })

  return response
}
