import { MenuIcon, SearchIcon, Home, Bell, Settings, HelpCircle, Shield, Search, Popcorn, Projector, CalendarHeart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import {ExpandableTabs} from './ui/expandable-tabs'
import {Button} from './ui/button'

const Navbar = () => {
  const tabs = [
    { title: "Home", icon: Home, path: "/home" },
    { title: "Movies", icon: Popcorn, path: "/movies" },
    { type: "separator" },
    { title: "Theaters", icon: Projector, path: "/theaters" },
    { title: "Release", icon: CalendarHeart, path: "/release" },
    { title: "Security", icon: Shield, path: "/security" },
  ];
  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
      <div className='container mx-auto px-4 py-5'>
        <div className='flex items-center justify-between'>
          <Link to="/" className="flex items-center">
            <h1 className='text-xl font-bold'>
              <span className='text-pink-600'>Q</span>uickShow
            </h1>
          </Link>
          
          <div className='flex-1 flex justify-center'>
            <ExpandableTabs tabs={tabs} />
          </div>
          
          <div className='flex items-center gap-6'>
            <SearchIcon className='h-5 w-5 text-gray-600 hover:text-gray-800 transition-colors' />
            <Button 
              className='bg-pink-600 text-white rounded-full px-4 py-2 hover:bg-pink-700 transition-colors' 
              aria-label="Login"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar