import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.TMDB_API_KEY!;
const TMDB_API = "https://api.themoviedb.org/3";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get("endpoint");
  const page = searchParams.get("page") || "1";

  if (!endpoint) {
    return NextResponse.json({ error: "Missing endpoint" }, { status: 400 });
  }

  try {
    const res = await fetch(`${TMDB_API}/movie/${endpoint}?api_key=${API_KEY}&page=${page}`);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}