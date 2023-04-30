export { default } from "next-auth/middleware"
import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {

    const session: any = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    if (req.nextUrl.pathname.startsWith("/_next")) return NextResponse.next();

    if (session && req.nextUrl.pathname.startsWith('/auth')) {
        const url = req.nextUrl.clone()
        url.pathname = '/'
        return NextResponse.rewrite(url)

        // return NextResponse.redirect('/');
    }

    if (!session && req.nextUrl.pathname.startsWith('/auth')) {
        return NextResponse.next();
    }

    if (!session) {
        // const previousPage = req.nextUrl.pathname;
        const url = req.nextUrl.clone();
        url.pathname = `/auth/login`;
        // url.search = `p=${previousPage}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: '/((?!api|_next|static|public|favicon.ico).*)'
}
