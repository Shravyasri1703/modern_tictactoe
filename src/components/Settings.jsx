import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../assets/stars.png'
import '../index.css'

const Settings = ({ onStartGame }) => {
  const [size, setSize] = useState(3);
  const [streak, setStreak] = useState(3);
  const link = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    link('/theme');
    onStartGame(size, streak); // configuring board size and streak size for new game
  };

  return (
    <div className='flex flex-col items-center w-screen min-h-screen lg:h-screen bg-black'
    style={{
      backgroundImage: `url(${background})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', 
    }}
    >
      <div>
        <h1 className='text-6xl lg:text-7xl font-bold glowing-border-settings-text text-blue-100 mb-14 mt-12 text-center'>Rules shape the game</h1>
      </div>
      
      <div className='flex flex-col lg:flex-row h-full w-full mb-20 px-0 lg:px-14 gap-16 items-center'>
       
      <div className='flex flex-col h-full w-full lg:w-1/2 items-center p-10'>
      <h1 className='text-4xl font-extrabold text-white text-center'>The Dimensions belong to You !</h1>
      <form onSubmit={handleSubmit} className="bg-transparent p-8 rounded shadow-lg w-full flex flex-col items-center">
        {/* Grid Size Input */}
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="size" className="mb-2 text-lg text-blue-100 glowing-static-text text-center">Grid Size (n x n):</label>
          <input
            id="size"
            type="number"
            min="3"
            max="10"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            className="border p-3 rounded bg-transparent text-blue-100 glowing-input text-xl font-bold"
          />
        </div>

        {/* Win Streak Input */}
        <div className="flex flex-col mb-8 w-full">
          <label htmlFor="streak" className="mb-2 text-xl font-semibold text-blue-100 glowing-static-text text-center">Win Streak (m):</label>
          <input
            id="streak"
            type="number"
            min="3"
            max={size}
            value={streak}
            onChange={(e) => setStreak(parseInt(e.target.value))}
            className="border p-3 rounded bg-transparent text-blue-100 glowing-input text-xl font-bold"
          />
        </div>

        {/* Start Game Button */}
        <button type="submit" className=" text-white px-6 py-3 rounded w-2/3 font-bold glowing-input">
          Start Game
        </button>
      </form>
      </div>
      <div className='flex flex-col h-1/2 lg:h-full w-[85%] lg:w-1/2 items-center  p-10 bg-gradient-to-br from-indigo-400 to-purple-800 rounded-2xl'>
         <h1 className='text-4xl font-extrabold text-white'>Rules : </h1>
         <div className='max-w-1/2 mt-10'>
         <p className='text-xl font-bold text-white'>Welcome to Tic-Tac-Toe! You can customize the game to your liking by selecting a grid size anywhere between 3x3 and 10x10. 
          To win, players must achieve a streak of consecutive marks, which can also be customized between 3 and the size of the grid. 
          Players take turns placing their marks on the grid, and the first player to reach the set number of consecutive marks in a row, column, or diagonal wins. 
          Select your PLAYGROUND from various number of themes availible.
          If all spaces are filled and no player achieves the required streak, the game ends in a draw. 
          Enjoy a smooth, responsive experience on both desktop and mobile devices!"</p>
          </div>
       </div> 
      </div>
    </div>
  );
};

export default Settings;
