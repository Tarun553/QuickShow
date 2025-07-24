import {
  SearchIcon,
  Home,
  Popcorn,
  Projector,
  CalendarHeart,
  ChartNoAxesCombined,
  TicketIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { ExpandableTabs } from "./ui/expandable-tabs";
import { Button } from "./ui/button";
import ThemeToggleButton from "./ui/theme-toggle-button";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const tabs = [
    { title: "Home", icon: Home, path: "/" },
    { title: "Movies", icon: Popcorn, path: "/movies" },
    { type: "separator" },
    { title: "Theaters", icon: Projector, path: "/movies" },
    { title: "Release", icon: CalendarHeart, path: "/movies" },
    { title: "Dashboard", icon: ChartNoAxesCombined, path: "/dashboard" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl dark:bg-black/10 dark:backdrop-blur-xl shadow dark:shadow-md">
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              className="light:hue-rotate-180"
              src="./logo.svg"
              alt="QuickShow Logo"
            />
          </Link>

          <div className="flex-1 flex justify-center">
            <ExpandableTabs tabs={tabs} />
          </div>

          <div className="flex items-center gap-4">
            <SearchIcon className="h-5 w-5 text-gray-600 hover:text-gray-800 dark:text-gray-300 dark:hover:text-white transition-colors cursor-pointer" />

            <ThemeToggleButton
             
            
            />

            {isSignedIn ? (
              <SignedIn>
                <UserButton>
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="My Bookings"
                      labelIcon={<TicketIcon className="h-5 w-5" />}
                      onClick={() => navigate("/myBooking")}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              </SignedIn>
            ) : (
              <SignedOut>
                <Button className="bg-pink-500 hover:bg-pink-600 rounded-full">
                  <SignInButton />
                </Button>
              </SignedOut>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
