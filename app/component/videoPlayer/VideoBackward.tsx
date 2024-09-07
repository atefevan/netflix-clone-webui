import { TbRewindBackward10 } from "react-icons/tb";

interface BackwardProps {
  viewControls: any;
  handleTenSecondsBackward: (event?: any) => void;
}
const VideoBackward = ({
  viewControls,
  handleTenSecondsBackward,
}: BackwardProps) => {
  return (
    <div
      className={`absolute bottom-4 left-3 z-10 transition-opacity duration-300 ${
        viewControls ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="text-white p-1 group"
        onClick={handleTenSecondsBackward}
      >
        <TbRewindBackward10 />
        <span className="absolute whitespace-nowrap bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {"← 10 Seconds"}
        </span>
      </button>
    </div>
  );
};

export default VideoBackward;
