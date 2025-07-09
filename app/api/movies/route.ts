// app/api/movies/route.ts
import { NextRequest, NextResponse } from "next/server";

const TMDB_API = "https://api.themoviedb.org/3";
const API_KEY = process.env.TMDB_API_KEY!;

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const endpoint = searchParams.get("endpoint");
  const id = searchParams.get("id"); // for dynamic routes like /movie/123/recommendations
  const query = searchParams.get("query");
  const page = searchParams.get("page") || "1";

  let url = "";

  if (!endpoint) {
    return NextResponse.json({ error: "Missing endpoint" }, { status: 400 });
  }

  // Construct dynamic URL
  if (endpoint === "search") {
    url = `${TMDB_API}/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`;
  } else if (endpoint.includes("recommendations")) {
    url = `${TMDB_API}/movie/${id}/recommendations?api_key=${API_KEY}&page=${page}`;
  } else {
    url = `${TMDB_API}/movie/${endpoint}?api_key=${API_KEY}&page=${page}`;
  }

  try {
    console.log("backend",url);
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error : unknown) {
    console.log("backend",error)
    const message = error instanceof Error ? error.message : "Failed to fetch data";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
