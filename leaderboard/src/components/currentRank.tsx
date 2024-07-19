// src/components/CurrentRank.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CurrentRank: React.FC = () => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores);
  const currentPlayer = scores.find(score => score.username === 'current_player'); // Replace with actual logic to find current player

  if (!currentPlayer) {
    return null;
  }

  const rank = scores.indexOf(currentPlayer) + 1;

  return (
    <div className="current-rank">
      <h2>Current Player Rank</h2>
      <p>Username: {currentPlayer.username}</p>
      <p>Rank: {rank}</p>
      <p>Time: {currentPlayer.time}</p>
    </div>
  );
};

export default CurrentRank;
