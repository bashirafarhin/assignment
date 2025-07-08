// Redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { newsReducer } from './slices/news';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
  // Thunk is included by default, no need to add manually
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;