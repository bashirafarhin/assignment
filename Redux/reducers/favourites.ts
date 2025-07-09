import { FavouritesState } from "@/types/favourites";

export const getFavouritesFromLocalStorage = (): FavouritesState => {
  if (typeof window === "undefined") throw new Error("localStorage unavailable");
  const raw = localStorage.getItem("fav");
  if (!raw) return { news: [], music: [], error: null };
  return JSON.parse(raw);
};

export const updateLocalStorage = (state: FavouritesState) => {
  localStorage.setItem(
    "fav",
    JSON.stringify({ news: state.news, music: state.music })
  );
};