import React from "react";
import { RandomMovie } from "../utils";
import { LuInfo } from "react-icons/lu";

const Billboard = () => {
  const randMovie = RandomMovie();
  return (
    <div className="relative h-[46.25vw]">
      <video
        className="w-full h-[46.25vw] object-cover brightness-[60%]"
        autoPlay
        muted
        loop
        poster={randMovie.thumbnailUrl}
        src={randMovie.videoUrl}
      ></video>
      <div className="absolute top-[30%] md:top-40% ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {randMovie.title}
        </p>
        <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {randMovie.description}
        </p>
        <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
          <button className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition">
            <LuInfo className="mr-1" size={24} /> More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Billboard;
// Ration 16.9 -> h-[56.25vw]
