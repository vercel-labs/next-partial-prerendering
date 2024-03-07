import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (!!request.cookies.get('abTest')) {
    request.nextUrl.searchParams.set(
      'abTest',
      request.cookies.get('abTest')!.value
    );
  }

  return NextResponse.rewrite(request.nextUrl);
}
