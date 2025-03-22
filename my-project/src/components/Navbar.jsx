import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav); // Toggle the state between true and false
  };

  return (
    <>
      <nav className="hidden md:block bg-gray-100">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-row items-center justify-between py-4">
            <div className="flex items-center">
              <img src={logo} alt="logo" className="w-12 px-2" />
              <p className="font-bold">Music</p>
            </div>
            <div className="justify-items-center flex-1 px-2 box-border border-4 p-1 max-w-[400px] rounded-[17px]">
              <div className="flex items-center px-5">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search songs, albums, artists and podcast"
                  className="w-[350px] px-2 bg-gray-100 p-2 border-none outline-none"
                />
              </div>
            </div>
            <p className="font-bold">Home</p>
            <p className="font-bold">Library</p>
            <p className="font-bold">Cast</p>
            <p className="font-bold font-sans">Profile</p>
          </div>
        </div>
      </nav>
      <nav className="md:hidden bg-gray-100 py-4 flex items-center">
        <div className="flex-none pl-[5px]">
          <button onClick={handleNav}>
            <RxHamburgerMenu />
          </button>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <img src={logo} alt="logo" className="w-10 px-2" />
          <p className="text-lg font-bold">Music</p>
        </div>
      </nav>

      {nav && (
        <div className=" transform top-16 left-0 w-full bg-gray-100 shadow-md md:hidden ">
          <ul className="flex flex-col items-start p-4">
            <li className="py-2">Home</li>
            <li className="py-2">Library</li>
            <li className="py-2">Cast</li>
            <li className="py-2">Profile</li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Navbar;
