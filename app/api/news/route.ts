import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const keyword = searchParams.get("keyword");
  const category = searchParams.get("category");
  const page = searchParams.get("page") || "1";
  const API_KEY = process.env.NEWS_API_KEY;

  if (!API_KEY) {
    return NextResponse.json({ error: "Missing News API key" }, { status: 500 });
  }

  let url = "";

  if (keyword) {
    url = `https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(keyword)}&page=${page}&pageSize=10`;
  } else if (category) {
    url = `https://newsapi.org/v2/top-headlines?country=us&category=${encodeURIComponent(category)}&page=${page}&pageSize=10`;
  } else {
    url = `https://newsapi.org/v2/top-headlines?country=us&page=${page}&pageSize=10`;
  }

  try {
    const response = await axios.get(url, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    return NextResponse.json({
      articles: response.data.articles,
      totalResults: response.data.totalResults,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}