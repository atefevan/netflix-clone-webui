"use client";
import React, { useState } from "react";
import { FaCheck, FaPlay, FaPlus } from "react-icons/fa";
interface CardProps {
  data: any;
}
const MovieCard = ({ data }: CardProps) => {
  const [isFavourite, setIsFavourite] = useState<boolean>(false);
  return (
    <div className="group bg-zinc-900 col-span relative h-[10vw]">
      <img
        className="cursor-pointer object-fill transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[10vw]"
        src={`/posters/${data.thumbnail}.png`}
        alt={`${data.thumbnail}`}
      />
      <div className="opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 md:group-hover:scale-90 lg:group-hover:scale-100 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100">
        <img
          className="cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]"
          src={`/posters/${data.thumbnail}.png`}
          alt={`${data.thumbnail}`}
        />
        <div className="z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md">
          <div className="flex flex-row items-center gap-3">
            <div
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition
                hover:bg-neutral-300"
            >
              <FaPlay size={14} />
            </div>
            <div
              className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex justify-center items-center transition
                hover:bg-neutral-300"
              onClick={() => setIsFavourite(!isFavourite)}
            >
              {isFavourite ? <FaCheck /> : <FaPlus />}
            </div>
          </div>
          <div className="flex justify-between w-full items-center">
            <p className="text-green-400 font-semibold mt-4 text-xs sm:text-sm md:text-md lg:text-lg">
              New
            </p>
            <p className="text-white mt-4 text-xs lg:text-md hidden lg:block">
              {data.seasons} Seasons
            </p>
            <p className="text-white mt-4 text-xs lg:text-md border border-white p-[5px] rounded-md font-semibold">
              {data.quality}
            </p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center">
            <p className="text-white text-[10px] lg:text-sm">
              {data.duration} Minutes
            </p>
          </div>
          <div className="flex flex-row mt-4 gap-2 items-center overflow-x-auto flex-grow max-w-full">
            {data.genre.map((gen: any, idx: number) => (
              <p
                key={idx}
                className="text-white text-[10px] lg:text-sm whitespace-nowrap"
              >
                {gen}
                {`\u00A0`} {data.genre.length - 1 === idx ? "" : `.`}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
