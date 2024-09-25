import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'; // Ensure you have your styles here
import classic from '../assets/classic.jpeg';
import avengers from '../assets/avengers.jpeg';
import batman from '../assets/batman.jpeg';
import space from '../assets/space.jpeg';
import batmanIcon from '../assets/batmanicon.png';
import jokerIcon from '../assets/jokericon.png';
import thanosIcon from '../assets/thanos con.png';
import ironmanIcon from '../assets/imanicon.png';
import astroIcon from '../assets/astroicon.png';
import alienIcon from '../assets/alienicon.png';
import cross from '../assets/cross.svg.png'
import circle from '../assets/circle.svg.png'

const ThemeSelection = ({ setTheme, startGame }) => {
  const link = useNavigate();

  const handleThemeSelection = (selectedTheme) => {
    setTheme(selectedTheme); // Setting the selected theme
    link('/play'); 
    startGame(); // Starting the game after selecting the theme
  };

  return (
    <div className="flex flex-col items-center w-screen min-h-screen  lg:h-screen bg-gradient-to-br from-blue-900 to-pink-900">
      <h2 className="text-5xl lg:text-7xl text-orange-100 font-bold mb-4 p-4 mt-2 glowing-border-settings-text text-center">Select Your WAR Field!</h2>
      <div className="flex flex-col lg:flex-row h-full w-screen p-10 gap-10 items-center">
        {/* Classic Theme */}
        <div className="flex flex-col w-[85%] lg:w-1/4 h-full gap-10 cursor-pointer group">
          <img 
            src={classic} 
            alt="" 
            onClick={() => handleThemeSelection('classic')} 
            className="h-4/5 w-full rounded-xl transform transition-transform duration-300 group-hover:-translate-y-4" // Animation on hover
          />
          <h1
            onClick={() => handleThemeSelection('classic')}
            className="text-xl font-bold text-white text-center"
          >
            Classic Theme
          </h1>
          <div className='flex flex-row items-center gap-3 justify-center'>
           <h1 className='text-white'>X :</h1>
           <img src={cross} alt='x' className='w-11 h11'/>

           <h1 className='text-white'>O :</h1>
           <img src={circle} alt='x' className='w-11 h-11'/>
          </div>
          
        </div>

        {/* Avengers Theme */}
        <div className="flex flex-col w-[85%] lg:w-1/4 h-full gap-10 cursor-pointer group">
          <img 
            src={avengers} 
            alt="" 
            onClick={() => handleThemeSelection('avengers')} 
            className="h-4/5 w-full rounded-xl transform transition-transform duration-300 group-hover:-translate-y-4"
          />
          <h1
            onClick={() => handleThemeSelection('avengers')}
            className="text-xl font-bold text-white text-center"
          >
            Avengers Theme
          </h1>
          <div className='flex flex-row items-center gap-3 justify-center'>
           <h1 className='text-white'>X :</h1>
           <img src={ironmanIcon} alt='x' className='w-11 h-11'/>

           <h1 className='text-white'>O :</h1>
           <img src={thanosIcon} alt='x' className='w-11 h-11'/>
          </div>
        </div>

        {/* Batman Theme */}
        <div className="flex flex-col w-[85%] lg:w-1/4 h-full gap-10 cursor-pointer group">
          <img 
            src={batman} 
            alt="" 
            onClick={() => handleThemeSelection('batman')} 
            className="h-4/5 w-full rounded-xl transform transition-transform duration-300 group-hover:-translate-y-4"
          />
          <h1
            onClick={() => handleThemeSelection('batman')}
            className="text-xl font-bold text-white text-center"
          >
            Batman Theme
          </h1>
          <div className='flex flex-row items-center gap-3 justify-center'>
           <h1 className='text-white'>X :</h1>
           <img src={batmanIcon} alt='x' className='w-11 h-11'/>

           <h1 className='text-white'>O :</h1>
           <img src={jokerIcon} alt='x' className='w-11 h-11'/>
          </div>
        </div>

        {/* Space Wars Theme */}
        <div className="flex flex-col w-[85%] lg:w-1/4 h-full gap-10 cursor-pointer group">
          <img 
            src={space} 
            alt="" 
            onClick={() => handleThemeSelection('space')} 
            className="h-4/5 w-full rounded-xl transform transition-transform duration-300 group-hover:-translate-y-4"
          />
          <h1
            onClick={() => handleThemeSelection('space')}
            className="text-xl font-bold text-white text-center"
          >
            Space Wars
          </h1>
          <div className='flex flex-row items-center gap-3 justify-center'>
           <h1 className='text-white'>X :</h1>
           <img src={astroIcon} alt='x' className='w-11 h-11'/>

           <h1 className='text-white'>O :</h1>
           <img src={alienIcon} alt='x' className='w-11 h-11'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSelection;
