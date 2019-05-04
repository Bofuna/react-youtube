import React from "react";
import "./VideoGrid.css";
import VideoPreview from "../VideoPreview/VideoPreview";

function VideoGrid(props) {
  return (
    <div className="videogrid__container">
      <h4>{props.title}</h4>
      <div className="videogrid">
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      <hr />
    </div>
  );
}

export default VideoGrid;
