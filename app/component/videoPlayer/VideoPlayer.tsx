'use client';
import { FaPause, FaPlay } from "react-icons/fa";
import ReactPlayer from "react-player";
import { useEffect, useRef, useState } from "react";
import { IoSettingsSharp, IoVolumeMute } from "react-icons/io5";
import { PiSpeakerHighFill } from "react-icons/pi";
import gsap from "gsap";
import VideoLoader from "./VideoLoader";
import VideoFullScreen from "./VideoFullScreen";
import VideoBackward from "./VideoBackward";
import VideoForward from "./VideoForward";
import VideoTheaterMode from "./VideoTheaterMode";
import VideoPnpMode from "./VideoPnpMode";

interface Props {
  setCurrentUrl: (event: any) => void;
  currentUrl: string;
  playerRef: any;
  sources: any;
}

const VideoPlayer = ({
  setCurrentUrl,
  currentUrl,
  playerRef,
  sources,
}: Props) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(1);
  const [viewControls, setViewControls] = useState<boolean>(true);
  const [openSettings, setOpenSettings] = useState<boolean>(false);
  const fullScreenRef = useRef<any>(null);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isTheaterMode, setIsTheaterMode] = useState<boolean>(false);
  const [pnp, setPnp] = useState(false);
  const [savedTime, setSavedTime] = useState(0);

  // Video Seekbar States
  const [played, setPlayed] = useState(0);
  const [duration, setDuration] = useState(0);
  const [seeking, setSeeking] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (volume === 0) {
      setIsMute(true);
    } else {
      setIsMute(false);
    }
  }, [volume]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleProgress = (state: any) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPlayed = parseFloat(e.target.value);
    setPlayed(newPlayed);
    if (playerRef.current) {
      playerRef.current.seekTo(newPlayed, "fraction");
    }
  };

  const handleTenSecondsForward = () => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime + 10, "seconds");
  };
  const handleTenSecondsBackward = () => {
    const currentTime = playerRef.current.getCurrentTime();
    playerRef.current.seekTo(currentTime - 10, "seconds");
  };

  const handleDuration = (duration: any) => {
    setDuration(duration); // Update video duration
  };

  const formatTime = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const secondsToHour = (seconds: any) => {
    if (seconds) {
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      seconds = seconds % 60;
      return `${hours}:${minutes.toString().padStart(2, "0")}:${(seconds % 60)
        .toFixed(0)
        .toString()}`;
    }
  };

  const handleMuteUnMute = (state: any) => {
    setVolume(state ? 0 : 1);
    setIsMute(state);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const animateVolumeSeekBar = (direction: "in" | "out") => {
    gsap.to("#volume_seek_bar", {
      width: direction === "in" ? "70px" : "0px",
      duration: 0.1,
      opacity: direction === "in" ? 1 : 0,
      ease: "power2.in",
    });
  };
  const handleUrlChange = (newUrl: string) => {
    const currentTime = playerRef.current?.getCurrentTime() || 0;
    setSavedTime(currentTime);

    setCurrentUrl(newUrl);
  };
  return (
    <div
      className={`flex ${
        !isTheaterMode && `justify-center items-center`
      } min-h-screen bg-gray-800`}
    >
      <div
        className={`relative ${
          isTheaterMode ? `w-screen h-[600px]` : `w-[90%] max-w-full` // [1000px]
        }  aspect-video bg-black`}
        ref={fullScreenRef}
        onMouseEnter={() => {
          if (!isPlaying) {
            setViewControls(true);
          } else {
            setViewControls(true);
            // setTimeout(() => {
            //   setViewControls(false);
            // }, 2000);
          }
        }}
        onMouseLeave={() => {
          if (!isPlaying) {
            setViewControls(true);
          } else {
            setViewControls(false);
          }
        }}
      >
        <VideoLoader loading={loading} setLoading={setLoading} />
        <ReactPlayer
          ref={playerRef}
          url={currentUrl}
          width={"100%"}
          height={"100%"}
          playing={isPlaying}
          muted={isMute}
          controls={false}
          volume={volume}
          onProgress={handleProgress}
          onEnded={() => setPnp(false)}
          onDuration={handleDuration}
          onBuffer={() => setLoading(true)}
          onBufferEnd={() => setLoading(false)}
          pip={pnp}
          onEnablePIP={() => setPnp(true)}
          onDisablePIP={() => setPnp(false)}
          onReady={() => {
            playerRef.current?.seekTo(savedTime, "seconds");
          }}
        />

        <div
          id="control-container"
          className="flex justify-between bg-gradient-to-t from-black/50 to-transparent h-30px"
        >
          <div
            className={
              viewControls
                ? `absolute bottom-0 w-full h-[90px] bg-gradient-to-t from-black/70 to-transparent`
                : ""
            }
          ></div>
          {/* VIDEO SEEKBAR */}
          <div
            className={`absolute bottom-12 w-90 right-4 left-4 z-10 transition-opacity duration-300 text-white ${
              viewControls ? "opacity-100" : "opacity-0"
            }`}
          >
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={played}
              onChange={handleSeekChange} // Handle user changing seek position
              onMouseDown={() => setSeeking(true)} // Set seeking to true on mousedown
              onMouseUp={() => setSeeking(false)} // Set seeking to false on mouseup
              className="w-full h-1 accent-red-500 cursor-pointer appearance-none"
              style={{
                background: `linear-gradient(to right, red ${
                  played * 100
                }%, #64748b ${played * 100}%)`,
                appearance: "none",
              }}
            />
          </div>

          <div className="flex w-1/2">
            {/* BACK 10 SECONDS */}
            <VideoBackward
              viewControls={viewControls}
              handleTenSecondsBackward={handleTenSecondsBackward}
            />

            {/* PLAY */}
            <div
              className={`absolute bottom-4 left-10 z-10 transition-opacity duration-300 ${
                viewControls ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
                className="text-white p-1 group"
                onClick={handlePlayPause}
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
                <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  {isPlaying ? "Pause" : "Play"}
                </span>
              </button>
            </div>

            {/* FORWARD 10 SEC */}
            <VideoForward
              viewControls={viewControls}
              handleTenSecondsForward={handleTenSecondsForward}
            />

            <div
              className={`absolute bottom-4 left-24 z-10 items-center flex transition-opacity duration-300 ${
                viewControls ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="relative group items-center justify-center flex"
                onMouseEnter={() => animateVolumeSeekBar("in")}
                onMouseLeave={() => animateVolumeSeekBar("out")}
              >
                <button
                  className="text-white p-1 group"
                  onClick={() => handleMuteUnMute(!isMute)}
                >
                  {isMute ? (
                    <IoVolumeMute size={20} />
                  ) : (
                    <PiSpeakerHighFill size={20} />
                  )}
                  <span className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {isMute ? "Unmute" : "Mute"}
                  </span>
                </button>
                <div className={`flex items-center justify-center"`}>
                  <input
                    id="volume_seek_bar"
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="h-1 bg-slate-700 opacity-0 cursor-pointer accent-white transition-all duration-300"
                    style={{ width: 0 }}
                  />
                  {/* Time duration */}
                  <span className="ml-2 text-white">
                    {`${formatTime(played * duration)}`}
                  </span>
                  <span className="ml-2 text-white">{`/`}</span>
                  <span className="ml-2 text-white">
                    {secondsToHour(duration)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-1/2 bg-slate-700 justify-end">
            <VideoFullScreen
              fullScreenRef={fullScreenRef}
              setIsFullscreen={setIsFullscreen}
              isFullscreen={isFullscreen}
              viewControls={viewControls}
            />
            <VideoTheaterMode
              viewControls={viewControls}
              isTheaterMode={isTheaterMode}
              setIsTheaterMode={setIsTheaterMode}
            />
            <VideoPnpMode
              viewControls={viewControls}
              pnp={pnp}
              setPnp={setPnp}
            />
            <div
              className={`absolute bottom-4 right-[115px] z-10 transition-opacity duration-300 ${
                viewControls ? "opacity-100" : "opacity-0"
              }`}
            >
              <button
                className="text-white p-1"
                onClick={() => setOpenSettings(!openSettings)}
              >
                <IoSettingsSharp
                  size={20}
                  className="hover:-rotate-90 transform duration-100"
                  onClick={() => setOpenSettings(!openSettings)}
                />
              </button>
            </div>
            {openSettings && (
              <div
                className={`absolute bottom-12 right-[120px] z-10 transition-opacity duration-300 bg-black bg-opacity-70 h-40 w-32 rounded-md ${
                  viewControls ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="text-sm text-center overflow-clip flex flex-col">
                  <p className="text-slate-500 text-xl font-semibold overflow-clip cursor-pointer py-1 border border-spacing-5 border-b-zinc-900 border-t-transparent border-l-transparent border-r-transparent">
                    Quality
                  </p>
                  {sources?.reverse().map((src: any, idx: number) => (
                    <p
                      key={idx.toString()}
                      className={`${
                        src?.url === currentUrl
                          ? `bg-slate-700 text-white rounded-tl-md rounded-tr-md`
                          : `text-slate-500`
                      } overflow-clip cursor-pointer py-1 border border-spacing-5 ${
                        sources.length - 1 !== idx
                          ? `border-b-zinc-900`
                          : `border-b-transparent`
                      } border-t-transparent border-l-transparent border-r-transparent`}
                      onClick={() => handleUrlChange(src?.url)}
                    >
                      {src?.quality}
                    </p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
