'use client';
import { MdPictureInPicture } from "react-icons/md";

interface PnpProps {
  viewControls: boolean;
  pnp: boolean;
  setPnp: (event: any) => void;
}
const VideoPnpMode = ({ viewControls, pnp, setPnp }: PnpProps) => {
  return (
    <div
      className={`absolute bottom-4 right-20 z-10 transition-opacity duration-300 ${
        viewControls ? "opacity-100" : "opacity-0"
      }`}
    >
      <button className="text-white p-1 group" onClick={() => setPnp(!pnp)}>
        <MdPictureInPicture size={20} />
        <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {"Miniplayer"}
        </span>
      </button>
    </div>
  );
};

export default VideoPnpMode;
