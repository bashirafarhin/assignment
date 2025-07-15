import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Movie } from "@/types/movie";
import { RootState } from "@/Redux/store";

export const fetchMovies = createAsyncThunk<
  { results: Movie[]; total_results: number },
  void,
  { rejectValue: string; state: RootState }
>("movies/fetchMovies", async (_, thunkAPI) => {
  const state = thunkAPI.getState().movies;
  const { mode, query, endpoint, page } = state;

  try {
    const params: Record<string, string | number> = { page };
    let url = "";

    if (mode === "search" && query) {
      url = "/api/movies/search";
      params.query = query;
    } else if(endpoint) {
      url = "/api/movies/endpoint";
      params.endpoint = endpoint;
    } else {
      url = "/api/movies/endpoint";
      params.endpoint = "popular";
    }

    const res = await axios.get(url, { params });
    const data: unknown = res.data;

    if (
      typeof data !== "object" ||
      !data ||
      !("results" in data) ||
      !("total_results" in data)
    ) {
      return thunkAPI.rejectWithValue("Invalid response structure");
    }
    return data as { results: Movie[]; total_results: number };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to fetch movies.";
    return thunkAPI.rejectWithValue(message);
  }
});