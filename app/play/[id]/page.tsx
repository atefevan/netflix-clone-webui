"use client";
import VideoPlayer from "@/app/component/videoPlayer/VideoPlayer";
import { videoSources } from "@/public/movies";
import React, { useEffect, useRef, useState } from "react";

const MovieId = () => {
  const playerRef = useRef<any>(null);
  const [currentUrl, setCurrentUrl] = useState<any>(videoSources[1].url);

  return (
    <div>
      <VideoPlayer
        currentUrl={currentUrl}
        setCurrentUrl={setCurrentUrl}
        playerRef={playerRef}
        sources={videoSources}
      />
    </div>
  );
};

export default MovieId;
