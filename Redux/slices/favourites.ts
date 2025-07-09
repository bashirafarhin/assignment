import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FavouritesState, MusicItem } from "@/types/favourites";
import type { NewsArticle } from "@/types/news";

const initialState: FavouritesState = {
  news: [],
  music: [],
  error: null,
};

const getFavouritesFromLocalStorage = (): FavouritesState => {
  if (typeof window === "undefined") throw new Error("localStorage unavailable");
  const raw = localStorage.getItem("fav");
  if (!raw) return { news: [], music: [], error: null };
  return JSON.parse(raw);
};

const updateLocalStorage = (state: FavouritesState) => {
  localStorage.setItem(
    "fav",
    JSON.stringify({ news: state.news, music: state.music })
  );
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
        state.music = stored.music;
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
        type: "music";
        item: MusicItem;
      }>
    ) {
      const { type, item } = action.payload;

      if (type === "news") {
        const exists = state.news.some((i) => i.title === item.title);
        if (!exists) state.news.push(item);
      } else {
        const exists = state.music.some((i) => i.title === item.title);
        if (!exists) state.music.push(item);
      }

      updateLocalStorage(state);
    },
    deleteFavourite(
      state,
      action: PayloadAction<{ type: "news" | "music"; title: string }>
    ) {
      const { type, title } = action.payload;

      if (type === "news") {
        state.news = state.news.filter((i) => i.title !== title);
      } else {
        state.music = state.music.filter((i) => i.title !== title);
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
