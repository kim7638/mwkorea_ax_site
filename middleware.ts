import { NextRequest, NextResponse } from 'next/server'

const SESSION_COOKIE = 'admin_session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only protect /admin/* routes (not /admin/login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get(SESSION_COOKIE)?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    // Token presence is checked here; full DB validation happens in server components/actions
    // This keeps middleware fast (no DB call on every request)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}
