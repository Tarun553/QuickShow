import {
  SearchIcon,
  Home,
  Shield,
  Popcorn,
  Projector,
  CalendarHeart,
  Sun,
  Moon,
  TicketIcon,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { ExpandableTabs } from "./ui/expandable-tabs";
import { Button } from "./ui/button";
import { useTheme } from "../context/useTheme";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const {isSignedIn} = useUser();

  const tabs = [
    { title: "Home", icon: Home, path: "/" },
    { title: "Movies", icon: Popcorn, path: "/movies" },
    { type: "separator" },
    { title: "Theaters", icon: Projector, path: "/theaters" },
    { title: "Release", icon: CalendarHeart, path: "/release" },
    { title: "Security", icon: Shield, path: "/security" },
  ];
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl dark:bg-black/10 dark:backdrop-blur-xl shadow dark:shadow-md ${
        theme === "light" ? "light:bg-white" : "dark:bg-black"
      }`}
    >
      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              className={`${theme === "light" ? "filter invert" : ""}`}
              src="./logo.svg"
              alt=""
            />
          </Link>

          <div className="flex-1 flex justify-center">
            <ExpandableTabs tabs={tabs} />
          </div>

          <div className="flex items-center gap-6">
            <SearchIcon className="h-5 w-5 text-gray-600 hover:text-gray-800 transition-colors" />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors dark:hover:bg-gray-800"
              aria-label={
                theme === "light"
                  ? "Switch to dark mode"
                  : "Switch to light mode"
              }
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5 text-gray-600 dark:text-white" />
              ) : (
                <Sun className="h-5 w-5 text-gray-600 dark:text-white" />
              )}
            </button>
            {isSignedIn ? (
              <SignedIn>
              <UserButton>
  <UserButton.MenuItems>
    <UserButton.Action
      label="my bookings"
      labelIcon={<TicketIcon className="h-5 w-5" />}
      onClick={() => navigate("/my-bookings")}
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
