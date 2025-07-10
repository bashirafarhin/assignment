import { NewsArticle } from "./news";
import { Movie } from "./movie";

export interface FavouritesState {
  news: NewsArticle[];
  movies: Movie[];
  error: string | null;
}