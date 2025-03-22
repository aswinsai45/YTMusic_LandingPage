import React, { useState } from "react";
import { GrFormNext } from "react-icons/gr";
import { GrFormPrevious } from "react-icons/gr";
import album1 from "../assets/album1.jpg";
import album2 from "../assets/album2.jpg";
import album3 from "../assets/album3.jpg";
import album4 from "../assets/album4.jpg";
import album5 from "../assets/album5.jpg";
import album6 from "../assets/album6.jpg";
import album7 from "../assets/album7.jpg";
import album8 from "../assets/album8.jpg";
import album9 from "../assets/album9.jpg";
import album10 from "../assets/album10.jpg";
import album11 from "../assets/album11.jpg";
import album12 from "../assets/album12.jpg";
import album13 from "../assets/album13.jpg";
import album14 from "../assets/album14.jpg";
import album15 from "../assets/album15.jpg";
import album16 from "../assets/album16.jpg";
import album17 from "../assets/album17.jpg";

const Carousel = ({
  title,
  albums,
  currentIndex,
  handleNext,
  handlePrevious,
}) => {
  const albumWidth = 250; // Width of each album in pixels

  return (
    <div>
      {/* Section Title */}
      <h1 className="flex flex-row items-center justify-between max-w-[200px] p-5 font-bold">
        {title}
        <button onClick={handlePrevious}>
          <GrFormPrevious />
        </button>
        <button onClick={handleNext}>
          <GrFormNext />
        </button>
      </h1>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 transform"
          style={{
            transform: `translateX(-${currentIndex * albumWidth}px)`,
          }}
        >
          {albums.map((album, index) => (
            <div
              key={{ index }}
              className="w-[200px] flex-shrink-0 px-3 text-center"
            >
              <img className="w-full" src={album.image} alt={album.name} />
              <p className="mt-2 font-medium">{album.name}</p>
              <p className="text-sm text-gray-500">{album.artist}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Hero() {
  const [carouselIndices, setCarouselIndices] = useState({
    albumsForYou: 0,
    globalHits: 0,
    trendingNow: 0, // Add more sections dynamically
    newReleases: 0,
  });

  const visible = 5; // Number of visible albums at a time

  const handleNext = (key, albums) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [key]: prev[key] < albums.length - visible ? prev[key] + 1 : prev[key],
    }));
  };

  const handlePrevious = (key) => {
    setCarouselIndices((prev) => ({
      ...prev,
      [key]: prev[key] > 0 ? prev[key] - 1 : prev[key],
    }));
  };

  const albumsForYou = [
    { image: album1, name: "The Highlights", artist: "The Weeknd" },
    { image: album2, name: "MUSIC", artist: "Playboi Carti" },
    { image: album3, name: "After Hours", artist: "The Weeknd" },
    { image: album4, name: "Hurry Up Tomorrow", artist: "The Weeknd" },
    { image: album5, name: "Blond", artist: "Frank Ocean" },
    { image: album6, name: "Channel ORANGE", artist: "Frank Ocean" },
    { image: album7, name: "UTOPIA", artist: "Travis Scott" },
    { image: album8, name: "Dawn FM", artist: "The Weeknd" },
    { image: album17, name: "HEROES & VILLIANS", artist: "Metro Boomin" },
  ];
  const globalHits = [
    {
      image: album9,
      name: "Country Hotlist",
      artist: " Post Malone & Luke Combs",
    },
    { image: album10, name: "The HitList", artist: "Lady Gaga & Bruno Mars" },
    { image: album11, name: "Pop Certified", artist: "Lady Gaga" },
    { image: album12, name: "I-Pop South", artist: "Sai Abhyankkar" },
    {
      image: album13,
      name: "Kollywood Dance Hitlist",
      artist: "Leon James, Anirudh Ravichander",
    },
    {
      image: album14,
      name: "Tamil Hits 2024",
      artist: "Anirudh Ravichander, Santhosh Narayanan",
    },
    {
      image: album15,
      name: "Bollywood Fire",
      artist: "Sanjay Leela Bhansali, A.R. Rahman ",
    },
    {
      image: album16,
      name: "Man on the Moon III: The Chosen",
      artist: "Kid CUdi",
    },
  ];
  const trendingNow = [
    { image: album1, name: "The Highlights", artist: "The Weeknd" },
    { image: album3, name: "After Hours", artist: "The Weeknd" },
    { image: album5, name: "Blond", artist: "Frank Ocean" },
    { image: album7, name: "UTOPIA", artist: "Travis Scott" },
    {
      image: album9,
      name: "Country Hotlist",
      artist: "Post Malone & Luke Combs",
    },
    { image: album11, name: "Pop Certified", artist: "Lady Gaga" },
    {
      image: album13,
      name: "Kollywood Dance Hitlist",
      artist: "Leon James, Anirudh Ravichander",
    },
    {
      image: album15,
      name: "Bollywood Fire",
      artist: "Sanjay Leela Bhansali, A.R. Rahman",
    },
  ];

  const newReleases = [
    { image: album2, name: "MUSIC", artist: "Playboi Carti" },
    { image: album4, name: "Hurry Up Tomorrow", artist: "The Weeknd" },
    { image: album6, name: "Channel ORANGE", artist: "Frank Ocean" },
    { image: album8, name: "Dawn FM", artist: "The Weeknd" },
    { image: album10, name: "The HitList", artist: "Lady Gaga & Bruno Mars" },
    { image: album12, name: "I-Pop South", artist: "Sai Abhyankkar" },
    {
      image: album14,
      name: "Tamil Hits 2024",
      artist: "Anirudh Ravichander, Santhosh Narayanan",
    },
    {
      image: album16,
      name: "Man on the Moon III: The Chosen",
      artist: "Kid Cudi",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Albums for You Section */}
      <Carousel
        title="Albums for You"
        albums={albumsForYou}
        currentIndex={carouselIndices.albumsForYou}
        handleNext={() => handleNext("albumsForYou", albumsForYou)}
        handlePrevious={() => handlePrevious("albumsForYou")}
      />

      {/* Global Hits Section */}
      <Carousel
        title="Global Hits"
        albums={globalHits}
        currentIndex={carouselIndices.globalHits}
        handleNext={() => handleNext("globalHits", globalHits)}
        handlePrevious={() => handlePrevious("globalHits")}
      />

      {/* Trending Now Section */}
      <Carousel
        title="Trending Now"
        albums={trendingNow}
        currentIndex={carouselIndices.trendingNow}
        handleNext={() => handleNext("trendingNow", trendingNow)}
        handlePrevious={() => handlePrevious("trendingNow")}
      />

      {/* New Releases Section */}
      <Carousel
        title="New Releases"
        albums={newReleases}
        currentIndex={carouselIndices.newReleases}
        handleNext={() => handleNext("newReleases", newReleases)}
        handlePrevious={() => handlePrevious("newReleases")}
      />
    </div>
  );
}

export default Hero;
