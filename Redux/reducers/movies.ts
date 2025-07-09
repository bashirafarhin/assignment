import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Movie } from "@/types/movie";

export const fetchMovies = createAsyncThunk<
  Movie[],
  { endpoint: string; page?: number; query?: string },
  { rejectValue: string; state: RootState }
>("movies/fetchMovies", async ({ endpoint, page = 1, query }, thunkAPI) => {
  console.log("reducer", endpoint, page, query);
  try {
    const res = await axios.get("/api/movies", {
      params: {
        endpoint,
        page,
        ...(query ? { query } : {}),
      },
    });
    console.log("response", res.data.results.length);
    return res.data.results;
  } catch (error: unknown) {
    console.log("reducer", error);
    if (axios.isAxiosError(error)) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.error || "Failed to fetch movies."
      );
    }
    return thunkAPI.rejectWithValue("Failed to fetch movies.");
  }
});
