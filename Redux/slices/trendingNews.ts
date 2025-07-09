import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticle, TrendingState } from "@/types/news";
import { fetchTrendingNews } from "../reducers/trendingNews";

const initialState: TrendingState = {
  data: [],
  loading: false,
  error: null,
};

const trendingNewsSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTrendingNews.fulfilled, (state, action: PayloadAction<NewsArticle[]>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchTrendingNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Unknown error";
      });
  },
});

export const trendingNewsReducer = trendingNewsSlice.reducer;
