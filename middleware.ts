import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  // If no token
  if (!token) {
    const isApiRoute = req.nextUrl.pathname.startsWith("/api");

    if (isApiRoute) {
      return new NextResponse(
        JSON.stringify({ error: "You need to login to proceed." }),
        {
          status: 401,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    const url = req.nextUrl.clone();
    url.pathname = "/auth-required";
    url.searchParams.set("redirect", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [],
};
