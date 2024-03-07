import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (!!request.cookies.get('productPageLayoutTest')) {
    request.nextUrl.searchParams.set(
      'productPageLayoutTest',
      request.cookies.get('productPageLayoutTest')!.value
    );
  }

  return NextResponse.rewrite(request.nextUrl);
}
