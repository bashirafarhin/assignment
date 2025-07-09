import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  const API_KEY = process.env.NEWS_API_KEY;

  if (!API_KEY) {
    return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
  }

  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&pageSize=10`,
      {
        headers: {
          "X-Api-Key": API_KEY,
        },
      }
    );

    return NextResponse.json(response.data.articles);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}