"use client";
import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import TopTenMovieCard from "./TopTenMovieCard";
import Select from "./Select";
interface HomeSliderProps {
  title: string;
  list: any;
}
const HomeSlider = ({ title, list }: HomeSliderProps) => {
  const cardContainerRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -250,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 250,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div className="hidden lg:flex px-24 py-5 flex-row bg-black">
        <p className="text-2xl text-white font-semibold ">{title}</p>
        <Select items={["English","Bengali", "Hindi"]} />
        <Select items={["India", 'Pakistan']} />
      </div>
      <div className="relative hidden lg:flex items-center bg-black">
        <div className="absolute left-10 top-1/2 transform -translate-y-1/2 h-15 z-10 ml-2 p-2 bg-black rounded-md">
          <FaAngleLeft
            className="text-2xl cursor-pointer text-white"
            onClick={scrollLeft}
            size={40}
          />
        </div>

        <div
          ref={cardContainerRef}
          className="flex flex-1 overflow-x-auto no-scrollbar py-5 pl-14 space-x-3"
        >
          {[...list].map((movie: any, idx: number) => (
            <TopTenMovieCard key={idx} data={movie} serial={0} />
          ))}
        </div>

        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 h-15 z-10 ml-2 p-2 bg-black rounded-md">
          <FaAngleRight
            className="text-2xl cursor-pointer text-white"
            onClick={scrollRight}
            size={40}
          />
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
