import { useLocation } from 'react-router-dom'
import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBooking from './pages/MyBooking'
import Favorite from './pages/Favorite'  
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin'); 
  return (
    <>
   {!isAdminRoute && <Navbar/>}
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/movies" element={<Movie/>}/>
    <Route path="/movies/:id" element={<MovieDetails/>}/>
    <Route path="/movies/:id/:date" element={<SeatLayout/>}/>
    <Route path="/myBooking" element={<MyBooking/>}/>
    <Route path="/favorite" element={<Favorite/>}/>
   </Routes>
   {!isAdminRoute && <Footer/>}
    </>
    
    
  )
}

export default App