import React from "react";
import ReactPlayer from "react-player";

function Video() {
  return (
    <ReactPlayer
      controls
      playing
      muted
      autoPlay
      width="95.624rem"
      height="55rem"
      url="https://youtu.be/--8ORixBXQE"
    />
  );
}

export default Video;
