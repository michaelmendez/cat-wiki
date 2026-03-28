import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // Skip referer check in development or if APP_URL is not set
  if (process.env.NODE_ENV === 'development' || !process.env.APP_URL) {
    return NextResponse.next();
  }

  const referer = req.headers.get('referer');
  const origin = req.headers.get('origin');
  const appUrl = process.env.APP_URL;

  // Allow requests from the same origin or referer matching APP_URL
  if (
    referer?.includes(appUrl) ||
    origin?.includes(appUrl) ||
    req.nextUrl.origin.includes(appUrl)
  ) {
    return NextResponse.next();
  }

  return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
}

export const config = {
  matcher: ['/api/breeds/:path*'],
};
