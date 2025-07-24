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
// import { ThemeContextProvider } from './context/ThemeContext'
import { ThemeProvider } from './components/ui/theme-provider'
import { ClerkProvider } from '@clerk/clerk-react'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin'); 
  // Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}
  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl='/'>

    <ThemeProvider
     attribute="class"
     defaultTheme="system"
     enableSystem
    >
      <>
        {!isAdminRoute && <Navbar/>}
        <Toaster/>
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
    </ThemeProvider>
    </ClerkProvider>
  )
}

export default App