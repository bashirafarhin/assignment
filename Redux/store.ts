import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './slices/news';
import { favouritesReducer } from './slices/favourites';
import { trendingNewsReducer } from './slices/trendingNews';
import { moviesReducer } from './slices/movies';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    favourites: favouritesReducer,
    trending: trendingNewsReducer,
    movies: moviesReducer
  },
  // Thunk is included by default, no need to add manually
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;