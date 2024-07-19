// src/redux/slices/leaderboardSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface Score {
  username: string;
  time: string;
}

interface LeaderboardState {
  scores: Score[];
}

const initialState: LeaderboardState = {
  scores: [],
};

const leaderboardSlice = createSlice({
  name: 'leaderboard',
  initialState,
  reducers: {
    addScore(state, action) {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => a.time.localeCompare(b.time)).slice(0, 10);
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
