import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameBoard from './components/GameBoard';
import Settings from './components/Settings';
import Home from './components/Home';
import ThemeSelection from './components/ThemeSelection';

const App = () => {
  const [gridSize, setGridSize] = useState(3);
  const [winStreak, setWinStreak] = useState(3);
  const [theme, setTheme] = useState('classic')
  const [gameKey, setGameKey] = useState(0); // For resetting the game

  const handleStartGame = (size, streak) => {
    setGridSize(size);
    setWinStreak(streak);
    setGameKey(prev => prev + 1);
  };

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/size' element={<Settings onStartGame={handleStartGame}/>} />
        <Route path='/theme' element={<ThemeSelection setTheme={setTheme} startGame={() => navigate('/play')} />} />
        <Route path='/play' element={<GameBoard key={gameKey} gridSize={gridSize} winStreak={winStreak} theme={theme} />} />
      </Routes>
    </Router>
  );
};

export default App;
