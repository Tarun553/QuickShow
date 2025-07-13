import React from 'react'
import { Calendar, Clock } from 'lucide-react'
const HeroSection = () => {
  return (
    <div className='flex justify-center items-center h-screen w-full'>
    <img src="./backgroundImage.png" alt="" className='w-full h-full object-cover' />
    <div className='px-20 space-y-5 absolute inset-0 w-full h-full z-10 flex flex-col justify-center items-start'>
      <img src="./marvelLogo.svg" alt="" />
    <h1 className='text-6xl font-bold text-white z-10'>Guardians <br />of the Galaxy</h1>
    <div className='flex gap-5 items-center'>
      <h3>
      Action | Adventure | Sci-Fi
      </h3>
      <p className='flex gap-1 items-center'><span><Calendar/></span>2018</p>
      <p className='flex gap-1 items-center'><span><Clock/></span>2h 8m</p>
    </div>
    <p className='text-lg text-white w-1/2 z-10'>In a post-apocalyptic world where cities ride on wheels and consume each other to survive, two people meet in London and try to stop a conspiracy.</p>
    <button className='bg-pink-500 hover:bg-pink-600 rounded-full px-5 py-2'>Explore movies</button>
    </div>
   
    </div>
  )
}

export default HeroSection