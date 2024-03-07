import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (!!request.cookies.get('returnedUser')?.value) {
    request.nextUrl.searchParams.set('returnedUser', 'true');
  }

  return NextResponse.rewrite(request.nextUrl);
}
