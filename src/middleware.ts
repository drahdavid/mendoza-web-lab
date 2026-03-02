import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const locales = ["es", "en"];
export const defaultLocale = "es";

function getLocale(request: NextRequest): string {
  // Simple check from accept-language header
  const acceptLanguage = request.headers.get("accept-language");
  if (acceptLanguage) {
    if (acceptLanguage.includes("es")) return "es";
    if (acceptLanguage.includes("en")) return "en";
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, static files, images, etc.
  if (
    pathname.includes("api/") ||
    pathname.includes("_next/") ||
    pathname.match(/\.(png|jpg|jpeg|svg|ico)$/) ||
    pathname.includes("demo/")
  ) {
    return;
  }

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
  ],
};
