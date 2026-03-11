import { NextResponse } from 'next/server';

export function middleware(request) {
    // Aquí revisas si existe la cookie de sesión
    const session = request.cookies.get('session-token');

    if (!session && request.nextUrl.pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/dashboard/:path*'], // Protege todas las rutas que empiecen por /dashboard
};