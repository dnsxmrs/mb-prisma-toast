import { decrypt } from "./lib/session";
import { NextRequest, NextResponse } from "next/server";

const protectedRoutes = ['/dashboard', '/settings', '/profile'];
const publicRoutes = ['/sign-in', '/sign-up', '/forgot-password'];

export default async function middleware(req: NextRequest) {
    const path = req.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const cookie = req.cookies.get('session')?.value;

    // If there's no cookie at all, handle unauthenticated access
    if (!cookie) {
        if (isProtectedRoute) {
            return NextResponse.redirect(new URL("/", req.nextUrl));
        }
        return NextResponse.next(); // No session cookie, allow access to public routes
    }

    // Try to decrypt if cookie exists
    const session = await decrypt(cookie);

    if (isProtectedRoute && !session?.userId) {
        return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    if (isPublicRoute && session?.userId) {
        return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
    }

    return NextResponse.next();
}
