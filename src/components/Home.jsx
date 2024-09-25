import React from 'react'
import { useNavigate } from 'react-router-dom'
import cover from '../assets/coverpic.png'
import '../index.css'

const Home = () => {
    const link = useNavigate()
    const handleClick = () => {
        link('/size')
    }
  return (
    <div className='w-screen min-h-screen lg:h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-br from-pink-600 to-blue-600'>
      <div className='flex flex-col items-center justify-center w-full lg:w-1/2 h-full rounded-2xl '>
      <div className='flex flex-col w-[85%] lg:w-3/5 lg:text-left text-center lg:mt-0 mt-10'>
       <h1 className='text-5xl lg:text-7xl glowing-border-text text-purple-200'>TIC TAC TOE</h1>
       <h1 className='text-3xl lg:text-4xl mt-5 text-sky-400 font-sans'>Think Fast, Win Smart!</h1>
       <p className='text-lg mt-12 text-sky-200'>Welcome to our Tic Tac Toe game website, where classic fun meets simplicity! Challenge yourself or a friend in this timeless game of Xs and Os. 
        With a clean, easy-to-use interface, you can enjoy quick matches anytime, anywhere. 
        Sharpen your strategy skills and see if you can outsmart your opponent!</p>
        </div>
      <div className='flex w-full lg:w-3/5 lg:justify-start justify-center'> 
      <button className='w-48 h-14 font-semibold border-2 border-sky-300 text-2xl text-sky-200 rounded-2xl mt-20 ' onClick={handleClick}>Play Now !</button>
      </div> 
     </div>
     <div className='flex flex-col mt-5 lg:mt-10 justify-center w-full lg:w-1/2 h-full rounded-2xl p-10'>
       <img src={cover} alt='pic' className='w-full h-full'/>
     </div>
    </div>
    
  )
}

export default Home