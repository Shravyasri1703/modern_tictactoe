import React, { useState } from 'react';
import Cell from './Cell';
import wooden from '../assets/wooden.jpg'
import avng from '../assets/avngbg.jpg'
import spbg from '../assets/spacebg.jpg'
import bmbg from '../assets/batmanbg.jpg'
import bmcbg from '../assets/batman_cartoon.jpg'
import woodgrid from '../assets/woodgrid.jpg'
import batmanicon from '../assets/batmanicon.png'
import jokericon from '../assets/batmanicon.png'


const GameBoard = ({ gridSize, winStreak, theme }) => {
  const [board, setBoard] = useState(Array(gridSize).fill().map(() => Array(gridSize).fill(null)));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);
  const [isDraw, setIsDraw] = useState(false); // New state for draw detection

  const checkWin = (board, winStreak) => {
    const n = board.length;

    const checkStreak = (line) => {
      return line.every((cell) => cell !== null && cell === line[0]);
    };

    // Check rows
    for (let row = 0; row < n; row++) {
      for (let col = 0; col <= n - winStreak; col++) {
        const rowSlice = board[row].slice(col, col + winStreak);
        if (checkStreak(rowSlice)) return board[row][col];
      }
    }

    // Check columns
    for (let col = 0; col < n; col++) {
      for (let row = 0; row <= n - winStreak; row++) {
        const colSlice = [];
        for (let k = 0; k < winStreak; k++) {
          colSlice.push(board[row + k][col]);
        }
        if (checkStreak(colSlice)) return board[row][col];
      }
    }

    // Check diagonals (top-left to bottom-right)
    for (let row = 0; row <= n - winStreak; row++) {
      for (let col = 0; col <= n - winStreak; col++) {
        const diagonalSlice = [];
        for (let k = 0; k < winStreak; k++) {
          diagonalSlice.push(board[row + k][col + k]);
        }
        if (checkStreak(diagonalSlice)) return board[row][col];
      }
    }

    // Check anti-diagonals (top-right to bottom-left)
    for (let row = 0; row <= n - winStreak; row++) {
      for (let col = winStreak - 1; col < n; col++) {
        const antiDiagonalSlice = [];
        for (let k = 0; k < winStreak; k++) {
          antiDiagonalSlice.push(board[row + k][col - k]);
        }
        if (checkStreak(antiDiagonalSlice)) return board[row][col];
      }
    }

    return null;
  };

  const checkDraw = (board) => {
    return board.flat().every((cell) => cell !== null); // No empty cells left
  };

  const handleClick = (row, col) => {
    if (board[row][col] || winner || isDraw) return; // Prevent further clicks if game is over

    const newBoard = board.map((r, i) =>
      r.map((cell, j) => (i === row && j === col ? currentPlayer : cell))
    );
    setBoard(newBoard);

    const gameWinner = checkWin(newBoard, winStreak);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (checkDraw(newBoard)) {
      setIsDraw(true); // If no empty cells left and no winner, it's a draw
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const backgroundStyle = 
  theme === 'classic'
  ? { backgroundImage: `url(${wooden})`, backgroundSize: 'cover', backgroundPosition: 'center' } : 
  theme === 'avengers'
  ? { backgroundImage: `url(${avng})`, backgroundSize: 'cover', backgroundPosition: 'center' } : 
  theme === 'batman'
  ? { backgroundImage: `url(${bmbg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : 
  theme === 'space'
  ? { backgroundImage: `url(${spbg})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}



  const backgroundColor =
    theme === 'classic' ? 'bg-[#7B3F00] text-yellow-950' : 
    theme === 'avengers' ? 'bg-[#800000] text-yellow-300' : 
    theme === 'batman' ? 'bg-black text-yellow-300' : 
    theme === 'space' ? 'bg-blue-950 text-yellow-100' : ''

  const gridbackgroundColor =
    theme === 'classic' ? 'bg-[#7B3F00]' :
    theme === 'avengers' ? 'bg-[#800000] text-white' : 
    theme === 'batman' ? 'bg-black text-red-500' : 
    theme === 'space' ? 'bg-slate-300 text-yellow-100' : '' 

  
    
    


    

  const restartGame = () => {
    setBoard(Array(gridSize).fill().map(() => Array(gridSize).fill(null)));
    setCurrentPlayer('X');
    setWinner(null);
    setIsDraw(false);
  };

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${backgroundColor}`}
    style={backgroundStyle}
    >
      <div
        className={`grid gap-1 ${gridbackgroundColor}  p-4 rounded-md shadow-lg`}
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 100px)`, // Fixed size for grid cells
          gridTemplateRows: `repeat(${gridSize}, 100px)`, // Ensuring square cells
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              value={cell}
              onClick={() => handleClick(rowIndex, colIndex)}
              theme={theme}
            />
          ))
        )}
      </div>

      {/* Display game status */}
      {winner && <div className={`mt-4 text-xl p-4 font-semibold border-2 ${backgroundColor}`}>Winner : {winner}</div>}
      {isDraw && !winner && <div className={`mt-4 text-xl p-4 font-semibold border-2 ${backgroundColor}`}>Match Draw</div>}
      {!winner && !isDraw && <div className={`mt-4 text-xl p-4 font-semibold border-2 ${backgroundColor}`}>Current Player: {currentPlayer}</div>}

      {/* Restart button */}
      {(winner || isDraw) && (
        <button
          className={`mt-4 px-4 py-2 ${backgroundColor} font-bold border-spacing-2 border-yellow-300 rounded-lg`}
          onClick={restartGame}
        >
          Restart Game
        </button>
      )}
    </div>

  );
};

export default GameBoard;
