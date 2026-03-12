import { NextRequest, NextResponse } from 'next/server'

const SESSION_COOKIE = 'admin_session'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Pass pathname to root layout via request header
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', pathname)

  // Only protect /admin/* routes (not /admin/login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get(SESSION_COOKIE)?.value

    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url))
    }
  }

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
