"use client";
import { IoSearchOutline } from "react-icons/io5";
import { useState } from "react";

export default function Navbar() {
  const [isSearchVisible, setIsSearchVisible] = useState(false); // State to toggle search bar

  return (
    <>
      <div className="flex justify-between w-screen items-center ibm-plex-mono-regular bg-primary text-white text-sm px-16 py-4 border-b border-gray-400 border-opacity-30">
        {/* Logo Section */}
        <div className="flex gap-1">
          <h1 className="text-accent">&lt;C/&gt;</h1>
          <h1>AletheaAzka</h1>
        </div>

        {/* Navigation and Search Section */}
        <div className="flex items-center space-x-10">
          {/* Home Link (Visible on both mobile and desktop) */}
          <h1 className="text-accent">Home</h1>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center">
            {isSearchVisible ? (
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-b border-white text-white focus:outline-none focus:border-accent transition-all duration-300"
              />
            ) : (
              <div
                className="text-lg hover:text-accent cursor-pointer"
                onClick={() => setIsSearchVisible(true)}
              >
                <IoSearchOutline />
              </div>
            )}
          </div>

          {/* Search Icon (Mobile) */}
          <div className="md:hidden text-lg hover:text-accent">
            <IoSearchOutline />
          </div>
        </div>
      </div>
    </>
  );
}
