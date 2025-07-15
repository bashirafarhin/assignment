import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticle } from "@/types/news";
import { fetchNews } from "../reducers/newsReducer";

interface NewsState {
  data: NewsArticle[];
  loading: boolean;
  error: string | null;
  page: number;
  totalResults: number;
  keyword?: string;
  category: string;
  mode: "search" | "category";
}

const initialState: NewsState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  totalResults: 0,
  keyword: undefined,
  category: "general",
  mode: "category",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
      state.category = "";
      state.mode = "search";
      state.page = 1;
      state.data = [];
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
      state.keyword = undefined;
      state.mode = "category";
      state.page = 1;
      state.data = [];
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    resetNews: (state) => {
      state.data = [];
      state.page = 1;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.totalResults = action.payload.totalResults;
        if (state.page > 1) {
          state.data.push(...action.payload.articles);
        } else {
          state.data = action.payload.articles;
        }
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong.";
      });
  },
});

export const newsActions = newsSlice.actions;
export const newsReducer = newsSlice.reducer;