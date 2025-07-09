import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { NewsArticle, NewsState } from "@/types/news";

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
