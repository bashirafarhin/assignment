import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { NewsArticle, NewsState } from "@/types/news";

// interface FetchNewsParams {
//   category?: string;
//   page?: number;
//   keyword?: string;
// }

// API key stored in env
const API_KEY = process.env.NEXT_PUBLIC_NEWS_API_KEY!;

// Async thunk
export const fetchNews = createAsyncThunk<
  NewsArticle[],
  void,
  { state: { news: NewsState }; rejectValue: string }
>("news/fetchNews", async (_, thunkAPI) => {
  const {
    category = "entertainment",
    page = 1,
    keyword,
  } = thunkAPI.getState().news;
  console.log(category, page, keyword);
  let url = "";

  if (keyword) {
    // Search by keyword only
    url = `https://newsapi.org/v2/top-headlines?q=${encodeURIComponent(
      keyword
    )}&page=${page}&pageSize=5`;
  } else {
    // Default by category + country
    url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=5`;
  }

  try {
    const response = await axios.get(url, {
      headers: {
        "X-Api-Key": API_KEY,
      },
    });
    return response.data.articles as NewsArticle[];
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch news"
      );
    }
    return thunkAPI.rejectWithValue("Unknown error occurred");
  }
});

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
