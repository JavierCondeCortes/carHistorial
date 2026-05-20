import { NextResponse } from 'next/server';

const SUPPORTED_LANGS = ['en', 'es', 'fr', 'it', 'jp'];
const PUBLIC_PAGES = new Set(['home', 'register', 'login']);

export function middleware(request) {
    const { pathname } = request.nextUrl;
    const segments = pathname.split('/').filter(Boolean);
    const currentLang = segments[0];
    const lang = SUPPORTED_LANGS.includes(currentLang) ? currentLang : 'en';

    if (!currentLang) {
        return NextResponse.redirect(new URL(`/${lang}/home`, request.url));
    }

    if (!SUPPORTED_LANGS.includes(currentLang)) {
        const url = request.nextUrl.clone();
        url.pathname = `/${lang}/${segments.slice(1).join('/') || 'home'}`;
        return NextResponse.redirect(url);
    }

    const page = segments[1] || 'home';
    const session = request.cookies.get('session-token');

    if (!session && !PUBLIC_PAGES.has(page)) {
        return NextResponse.redirect(new URL(`/${lang}/login`, request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|uploads).*)'],
};
