'use client';
import { GiTheater } from "react-icons/gi";

interface TheaterProps {
  viewControls: boolean;
  isTheaterMode: boolean;
  setIsTheaterMode: (event: any) => void;
}
const VideoTheaterMode = ({
  viewControls,
  isTheaterMode,
  setIsTheaterMode,
}: TheaterProps) => {
  return (
    <div
      className={`absolute bottom-4 right-10 z-10 transition-opacity duration-300 ${
        viewControls ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="text-white p-1 group"
        onClick={() => setIsTheaterMode(!isTheaterMode)}
      >
        <GiTheater size={20} />
        <span className="absolute whitespace-nowrap bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {"Theater Mode"}
        </span>
      </button>
    </div>
  );
};

export default VideoTheaterMode;
