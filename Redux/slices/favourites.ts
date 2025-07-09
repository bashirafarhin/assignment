import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { FavouritesState, MusicItem } from "@/types/favourites";
import type { NewsArticle } from "@/types/news";

const initialState: FavouritesState = {
  news: [],
  music: [],
};

const getFavouritesFromLocalStorage = (): FavouritesState => {
  if (typeof window === "undefined") return initialState;
  const raw = localStorage.getItem("fav");
  if (!raw) return initialState;
  try {
    return JSON.parse(raw);
  } catch {
    return initialState;
  }
};

const updateLocalStorage = (state: FavouritesState) => {
  localStorage.setItem("fav", JSON.stringify(state));
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    fetchFavourites(state) {
      const stored = getFavouritesFromLocalStorage();
      state.news = stored.news;
      state.music = stored.music;
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
        if (!exists) {
          state.news.push(item);
        }
      } else {
        const exists = state.music.some((i) => i.title === item.title);
        if (!exists) {
          state.music.push(item);
        }
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
// const favouritesSlice = createSlice({
//   name: "favourites",
//   initialState,
//   reducers: {
//     fetchFavourites(state) {
//       const stored = getFavouritesFromLocalStorage();
//       state.news = stored.news;
//       state.music = stored.music;
//     },
//     insertFavourite(
//       state,
//       action: PayloadAction<{
//         type: "news" | "music";
//         item: NewsArticle | MusicItem;
//       }>
//     ) {
//       const { type, item } = action.payload;
//       const exists = state[type].some((i: any) => i.title === item.title);
//       if (!exists) {
//         state[type].push(item as any);
//         updateLocalStorage(state);
//       }
//     },
//     deleteFavourite(
//       state,
//       action: PayloadAction<{ type: "news" | "music"; title: string }>
//     ) {
//       const { type, title } = action.payload;

//       if (type === "news") {
//         state.news = state.news.filter((i) => i.title !== title);
//       } else {
//         state.music = state.music.filter((i) => i.title !== title);
//       }

//       updateLocalStorage(state);
//     },
//   },
// });

export const { fetchFavourites, insertFavourite, deleteFavourite } =
  favouritesSlice.actions;

export const favouritesReducer = favouritesSlice.reducer;