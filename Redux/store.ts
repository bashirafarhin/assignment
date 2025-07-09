import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './slices/news';
import { favouritesReducer } from './slices/favourites';
import { trendingNewsReducer } from './slices/trendingNews';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    favourites: favouritesReducer,
    trending: trendingNewsReducer,
  },
  // Thunk is included by default, no need to add manually
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;