import React from "react";
import ReactPlayer from "react-player";

const Player = ({ link }) => (
  <div className="player-wrapper">
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${link}`}
      className="react-player"
      playing
      width="100%"
      height="100%"
      controls={false}
    />
  </div>
);

export default Player;
