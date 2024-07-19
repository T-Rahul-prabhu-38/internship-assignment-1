// src/components/Leaderboard.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores).slice(0, 10);

  return (
    <div className="leaderboard">
      <h1>Top 10 Scores</h1>
      <div className="leaderboard-header">
        <span className="rank">Rank</span>
        <span className="username">Username</span>
        <span className="time">Time</span>
      </div>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>
            <span className="rank">{index + 1}</span>
            <span className="username">{score.username}</span>
            <span className="time">{score.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
