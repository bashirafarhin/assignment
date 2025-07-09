import { NewsArticle } from "./news";

export interface MusicItem {
  id: string;
  title: string;
}

export interface FavouritesState {
  news: NewsArticle[];
  music: MusicItem[];
  error: string | null;
}