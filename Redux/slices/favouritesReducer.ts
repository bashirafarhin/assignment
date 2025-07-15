import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FavouritesState } from "@/types/favourites";
import type { NewsArticle } from "@/types/news";
import { Movie } from "@/types/movie";
import { getFavouritesFromLocalStorage, updateLocalStorage } from "../reducers/favouritesReducer";

const initialState: FavouritesState = {
  news: [],
  movies: [],
  error: null,
};


const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    fetchFavourites(state) {
      state.error = null;
      try {
        const stored = getFavouritesFromLocalStorage();
        state.news = stored.news;
        state.movies = stored.movies;
      } catch {
        state.error = "Failed to load favourites";
      }
    },
    insertFavourite(
      state,
      action: PayloadAction<{
        type: "news";
        item: NewsArticle;
      } | {
        type: "movies";
        item: Movie;
      }>
    ) {
      const { type, item } = action.payload;
      if (type === "news") {
        const exists = state.news.some((i) => i.title === item.title);
        if (!exists) state.news.push(item);
      } else {
        const exists = state.movies.some((i) => i.title === item.title);
        if (!exists) state.movies.push(item);
      }

      updateLocalStorage(state);
    },
    deleteFavourite(
      state,
      action: PayloadAction<{ type: "news" | "movies"; title: string }>
    ) {
      const { type, title } = action.payload;

      if (type === "news") {
        state.news = state.news.filter((i) => i.title !== title);
      } else {
        state.movies = state.movies.filter((i) => i.title !== title);
      }

      updateLocalStorage(state);
    },
  },
});

export const {
  fetchFavourites,
  insertFavourite,
  deleteFavourite,
} = favouritesSlice.actions;

export const favouritesReducer = favouritesSlice.reducer;