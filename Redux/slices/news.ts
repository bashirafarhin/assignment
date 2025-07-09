import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NewsArticle, NewsState } from "@/types/news";
import { fetchNews } from "../reducers/news";

const initialState: NewsState = {
  data: [],
  loading: false,
  error: null,
  category: "entertainment",
  page: 1,
  keyword: "",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
      state.page = 1;
      state.data = []; // reset
    },
    setKeyword(state, action: PayloadAction<string>) {
      state.keyword = action.payload;
      state.page = 1;
      state.data = []; // reset
    },
    incrementPage(state) {
      state.page += 1;
    },
    resetNews(state) {
      state.data = [];
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchNews.fulfilled,
        (state, action: PayloadAction<NewsArticle[]>) => {
          state.loading = false;
          state.data = [...state.data, ...action.payload];
        }
      )
      .addCase(
        fetchNews.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload ?? "Something went wrong";
        }
      );
  },
});

export const { setCategory, setKeyword, incrementPage, resetNews } =
  newsSlice.actions;
export const newsReducer = newsSlice.reducer;
