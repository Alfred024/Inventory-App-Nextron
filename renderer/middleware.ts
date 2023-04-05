import { NextRequest, NextResponse } from "next/server";
// import { useContext } from "react";
// import { AuthContext } from "./context/auth";

export async function middleware(req: NextRequest) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
        const previousPage = req.nextUrl.pathname;
        const url = req.nextUrl.clone();
        url.pathname = `/auth/login`;
        url.search = `p=${previousPage}`;
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/home'],
};