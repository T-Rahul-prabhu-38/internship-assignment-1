// src/components/AddScorePopup.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addScore } from '../redux/slices/leaderboardSlice';

const AddScorePopup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [time, setTime] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addScore({ username, time }));
  };

  return (
    <div className="add-score-popup">
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Time (MM:SS:MSS)"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Score</button>
    </div>
  );
};

export default AddScorePopup;
