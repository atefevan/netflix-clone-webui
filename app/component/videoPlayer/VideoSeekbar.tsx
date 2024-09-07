const VideoSeekbar = () => {
  return (
    <div className="w-full h-2 bg-slate-700 relative">
      <input
        type="range"
        min="0"
        max="100"
        value="40"
        className="w-full h-full accent-red-500 cursor-pointer appearance-none"
        style={{
          background: "linear-gradient(to right, red 40%, #64748b 40%)",
          appearance: "none",
        }}
      />
    </div>
  );
};

export default VideoSeekbar;
