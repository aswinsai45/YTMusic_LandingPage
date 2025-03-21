import React from "react";
import logo from "../assets/logo.png";
function Navbar() {
  return (
    <nav>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-row items-center justify-between py-4">
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-12 px-2" />
            <p>Music</p>
          </div>
          <div className="justify-center flex-1 px-4 box-border border-4 p-5 max-w-[500px] rounded-[17px]">
            Search songs, albums, artists and podcast
          </div>
          <p>Home</p>
          <p>Library</p>
          <p>Cast</p>
          <p>Profile</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
