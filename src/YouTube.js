import React from "react";
import Iframe from "react-iframe";

const RevolutionVideo = () => {
  return (
    <Iframe
      src="https://www.youtube.com/embed/o507bg_K6hs?rel=0;&autoplay=1;&mute=1"
      width="450px"
      height="450px"
      id="myId"
      className="myClassname"
      display="initial"
      position="relative"
      autoplay
      encrypted-media
      gyroscope
      allowFullScreen
    />

    // <iframe
    //   width="560"
    //   height="315"
    //   src="https://www.youtube.com/embed/o507bg_K6hs"
    //   frameborder="0"
    //   allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //   allowfullscreen
    // />
  );
};
export default RevolutionVideo;
