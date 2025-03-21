import React from "react";
import { MdNavigateNext } from "react-icons/md";

function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div>
        <h1>Albums for you</h1>
        <img src={<MdNavigateNext />} alt="move right" />
      </div>
    </div>
  );
}
export default Hero;
