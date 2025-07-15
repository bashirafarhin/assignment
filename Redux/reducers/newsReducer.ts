import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NewsArticle } from "@/types/news";
import { RootState } from "../store";

export const fetchNews = createAsyncThunk<
  { articles: NewsArticle[]; totalResults: number },
  void,
  { rejectValue: string; state: RootState }
>("news/fetchNews", async (_, thunkAPI) => {
  const { mode, keyword, category, page } = thunkAPI.getState().news;

  try {
    const params: Record<string, string | number> = { page, pageSize: 10 };
    const url = "/api/news";

    if (mode === "search" && keyword) {
      params.keyword = keyword;
    } else {
      params.category = category || "general";
    }

    const res = await axios.get(url, { params });
    const data: unknown = res.data;

    if (
      typeof data !== "object" ||
      !data ||
      !("articles" in data) ||
      !("totalResults" in data)
    ) {
      return thunkAPI.rejectWithValue("Invalid response structure");
    }

    return data as { articles: NewsArticle[]; totalResults: number };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to fetch news.";
    return thunkAPI.rejectWithValue(message);
  }
});