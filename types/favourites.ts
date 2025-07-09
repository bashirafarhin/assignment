import { NewsArticle } from "./news";

export interface MoviesItem {
  id: string;
  title: string;
}

export interface FavouritesState {
  news: NewsArticle[];
  movies: MoviesItem[];
  error: string | null;
}