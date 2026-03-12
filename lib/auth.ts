import { cookies } from 'next/headers'
import { supabaseAdmin } from './supabase'

const SESSION_COOKIE = 'admin_session'
const SESSION_DURATION_HOURS = 24

export async function createSession(adminId: string): Promise<string> {
  const token = crypto.randomUUID() + crypto.randomUUID()
  const expiresAt = new Date(Date.now() + SESSION_DURATION_HOURS * 60 * 60 * 1000)

  await supabaseAdmin.from('admin_sessions').insert({
    admin_id: adminId,
    token,
    expires_at: expiresAt.toISOString(),
  })

  return token
}

export async function validateSession(): Promise<boolean> {
  const cookieStore = cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value

  if (!token) return false

  const { data } = await supabaseAdmin
    .from('admin_sessions')
    .select('id, expires_at')
    .eq('token', token)
    .single()

  if (!data) return false
  if (new Date(data.expires_at) < new Date()) {
    await supabaseAdmin.from('admin_sessions').delete().eq('token', token)
    return false
  }

  return true
}

export async function deleteSession(): Promise<void> {
  const cookieStore = cookies()
  const token = cookieStore.get(SESSION_COOKIE)?.value
  if (token) {
    await supabaseAdmin.from('admin_sessions').delete().eq('token', token)
  }
}

export { SESSION_COOKIE }
