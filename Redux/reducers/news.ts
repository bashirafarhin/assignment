import { NewsArticle } from "@/types/news";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsState } from "@/types/news";
import axios from "axios";

export const fetchNews = createAsyncThunk<
  NewsArticle[],
  void,
  { state: { news: NewsState }; rejectValue: string }
>("news/fetchNews", async (_, thunkAPI) => {
  let { category } = thunkAPI.getState().news;
  const { page = 1, keyword } = thunkAPI.getState().news;

  if (!category) {
    if (typeof window !== "undefined") {
      const storedCategory = localStorage.getItem("selectedCategory");
      category = storedCategory || "entertainment";
      localStorage.setItem("selectedCategory", category); // persist if not already
    } else {
      category = "entertainment";
    }
  }

  const query = new URLSearchParams({
    category,
    page: String(page),
    ...(keyword && { keyword }),
  });

  try {
    const response = await axios.get(`/api/news?${query.toString()}`);
    return response.data as NewsArticle[];
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "custom error"
      );
    }
    return thunkAPI.rejectWithValue("custom error");
  }
});