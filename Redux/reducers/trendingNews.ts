import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsArticle } from "@/types/news";
import axios from "axios";

export const fetchTrendingNews = createAsyncThunk<
  NewsArticle[],
  void,
  { rejectValue: string }
>("trending/fetchTrendingNews", async (_, thunkAPI) => {
  try {
    const response = await axios.get("/api/news/trending-news");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "custom error"
      );
    }
    return thunkAPI.rejectWithValue("custom error");
  }
});