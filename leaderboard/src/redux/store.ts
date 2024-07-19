// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import leaderboardReducer from './slices/leaderboardSlice';

export const store = configureStore({
  reducer: {
    leaderboard: leaderboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
