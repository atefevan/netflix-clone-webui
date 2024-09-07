import { TbRewindForward10 } from "react-icons/tb";

interface forwardProps {
  viewControls: any;
  handleTenSecondsForward: (event?: any) => void;
}
const VideoForward = ({
  viewControls,
  handleTenSecondsForward,
}: forwardProps) => {
  return (
    <div
      className={`absolute bottom-4 left-16 z-10 transition-opacity duration-300 ${
        viewControls ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        className="text-white p-1 group"
        onClick={handleTenSecondsForward}
      >
        <TbRewindForward10 />
        <span className="absolute whitespace-nowrap bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {"10 Seconds →"}
        </span>
      </button>
    </div>
  );
};

export default VideoForward;
