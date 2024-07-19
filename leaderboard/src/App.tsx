import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import CurrentRank from './components/currentRank';
import Header from './components/header';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="background-image"></div>
        <Leaderboard />
        <CurrentRank />
        <AddScorePopup />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
