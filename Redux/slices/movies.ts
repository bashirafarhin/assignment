import { createSlice } from "@reduxjs/toolkit";
import { MovieState } from "@/types/movie";
import { fetchMovies } from "../reducers/movies";

const initialState: MovieState = {
  data: [],
  loading: false,
  error: null,
  page: 1,
  endpoint: "popular",
  query: undefined,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetMovies: (state) => {
      state.data = [];
      state.page = 1;
      state.error = null;
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    setEndpoint: (state, action) => {
      state.endpoint = action.payload;
      state.page = 1;
      state.data = [];
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
        if (state.page > 1) {
          state.data.push(...action.payload);
        } else {
          state.data = action.payload;
        }
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong.";
      });
  },
});

export const { resetMovies, incrementPage, setEndpoint } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;