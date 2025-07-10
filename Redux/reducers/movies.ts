import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Movie } from "@/types/movie";

export const fetchMovies = createAsyncThunk<
  Movie[],
  { endpoint: string; page?: number; query?: string },
  { rejectValue: string; state: RootState }
>("movies/fetchMovies", async ({ endpoint, page = 1, query }, thunkAPI) => {
  try {
    const res = await axios.get("/api/movies", {
      params: {
        endpoint,
        page,
        ...(query ? { query } : {}),
      },
    });
    return res.data.results;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "Failed to fetch movies."
      );
    }
    return thunkAPI.rejectWithValue("Failed to fetch movies.");
  }
});
