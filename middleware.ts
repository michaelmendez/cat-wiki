import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  if (!req.headers.get('referer')?.includes(process.env.APP_URL as string)) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/breeds/:path*'],
};
