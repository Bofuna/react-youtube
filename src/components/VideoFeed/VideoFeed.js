import React from "react";
import "./VideoFeed.css";
import VideoPreview from "../VideoPreview/VideoPreview";
import VideoGrid from "../VideoGrid/VideoGrid";

function VideoFeed() {
  return (
    <div className="videofeed">
      <VideoGrid title="Trending" />
      <VideoGrid title="Trending" />
    </div>
  );
}

export default VideoFeed;
