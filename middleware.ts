import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const locale = request.headers.get('accept-language')

  const headers = new Headers(request.headers)
  headers.set('x-locale', locale!)

    return NextResponse.next({
      request: {
        headers,
      },
    })
}
