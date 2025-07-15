import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { moviesReducer } from './slices/movieSlice';
import { newsReducer } from './slices/newsSlice';
import { favouritesReducer } from './slices/favouritesReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  news: newsReducer,
  favourites : favouritesReducer
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;