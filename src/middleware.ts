// import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isPathnameCorrect = pathname.startsWith('/am') || pathname.startsWith('/ru');

  
  if (!isPathnameCorrect) {
    request.nextUrl.pathname = `/am${pathname}`;
    return Response.redirect(request.nextUrl);
  }

  return;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
};