'use client';
import { useEffect } from "react";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";

interface FullScreenProps {
  fullScreenRef: any;
  setIsFullscreen: (event: any) => void;
  isFullscreen: any;
  viewControls: any;
}
const VideoFullScreen = ({
  fullScreenRef,
  setIsFullscreen,
  isFullscreen,
  viewControls,
}: FullScreenProps) => {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (fullScreenRef.current) {
        fullScreenRef.current.requestFullscreen();
      }
    } else {
      document.exitFullscreen();
    }
    setIsFullscreen(!isFullscreen);
  };

  const handleFullscreenChange = () => {
    if (document.fullscreenElement) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);
  return (
    <div
      className={`absolute bottom-4 right-2 z-10 transition-opacity duration-300 ${
        viewControls ? "opacity-100" : "opacity-0"
      }`}
    >
      <button className="text-white p-1 group" onClick={toggleFullscreen}>
        {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen size={20} />}
        <span className="absolute whitespace-nowrap bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black flex rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {isFullscreen ? "Exit Full Screen" : "Full Screen"}
        </span>
      </button>
    </div>
  );
};

export default VideoFullScreen;
