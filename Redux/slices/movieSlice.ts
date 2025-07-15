import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "@/types/movie";
import { fetchMovies } from "../reducers/movieReducer";

interface MoviesState {
  data: Movie[];
  loading: boolean;
  error: string | null;
  page: number;
  totalResults: number;
  query?: string;
  endpoint: string;
  mode: "search" | "category";
}

const initialState: MoviesState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  totalResults: 0,
  query: undefined,
  endpoint: "popular",
  mode: "category",
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      state.endpoint = "";
      state.mode = "search";
      state.page = 1;
      state.data = [];
    },
    setEndpoint: (state, action: PayloadAction<string>) => {
      state.endpoint = action.payload;
      state.query = undefined;
      state.mode = "category";
      state.page = 1;
      state.data = [];
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    resetMovies: (state) => {
      state.data = [];
      state.page = 1;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.totalResults = action.payload.total_results;
        if (state.page > 1) {
          state.data.push(...action.payload.results);
        } else {
          state.data = action.payload.results;
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Something went wrong.";
      });
  },
});

export const movieActions = moviesSlice.actions;
export const moviesReducer = moviesSlice.reducer;