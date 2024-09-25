import React from 'react';
import batmanIcon from '../assets/batmanicon.png';
import jokerIcon from '../assets/jokericon.png';
import thanosIcon from '../assets/thanos con.png';
import ironmanIcon from '../assets/imanicon.png';
import astroIcon from '../assets/astroicon.png';
import alienIcon from '../assets/alienicon.png';
import cross from '../assets/cross.svg.png'
import circle from '../assets/circle.svg.png'

const Cell = ({ value, onClick, theme }) => {

  // Determine the background color for the cell based on the theme
  const cellBackgroundColor =
    theme === 'classic' ? 'bg-[#C19A6B] text-yello-800' :
    theme === 'avengers' ? 'bg-[#FFEA00] text-white' : 
    theme === 'batman' ? 'bg-yellow-500' : 
    theme === 'space' ? 'bg-[#000035]' : "" 

  // Determine the icon to display based on the theme and value (X or O)
  const getIcon = () => {
    if (theme === 'batman') {
      return value === 'X' ? 
        <img src={batmanIcon} alt="Batman" className="w-3/4 h-3/4 object-contain" /> : 
        value === 'O' ? 
        <img src={jokerIcon} alt="Joker" className="w-3/4 h-3/4 object-contain" /> : null;
    } else if (theme === 'avengers') {
      return value === 'X' ? 
        <img src={ironmanIcon} alt="Ironman" className="w-full h-full object-contain" /> : 
        value === 'O' ? 
        <img src={thanosIcon} alt="Thanos" className="w-3/4 h-3/4 object-contain" /> : null;
    } else if (theme === 'space') {
      return value === 'X' ? 
        <img src={astroIcon} alt="Astro" className="w-full h-full object-contain" /> : 
        value === 'O' ? 
        <img src={alienIcon} alt="Alien" className="w-3/4 h-3/4 object-contain" /> : null;
    } 
    else if (theme === 'classic') {
      return value === 'X' ? 
        <img src={cross} alt="Astro" className="w-3/4 h-3/4 object-contain" /> : 
        value === 'O' ? 
        <img src={circle} alt="Alien" className="w-3/4 h-3/4 object-contain" /> : null;
    }

    return null;
  };

  return (
    <div
      className={`w-full h-full ${cellBackgroundColor} flex items-center justify-center border border-black cursor-pointer`}
      style={{ width: '100px', height: '100px' }} // Ensuring square cells on different device sizes
      onClick={onClick}
    >
      {getIcon()}
    </div>
  );
};

export default Cell;
