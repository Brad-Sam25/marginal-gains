import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    console.log(request.cookies);
}

export const config = {
    matcher: '/dashboard'
}