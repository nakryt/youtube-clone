import React, { FC } from "react";
import "./CurrentVideo.scss";
import CurrentVideoData from "./CurrentVideoData/CurrentVideoData";

interface Props {
  videoId: string;
}

const CurrentVideo: FC<Props> = ({ videoId }) => {
  return (
    <div className="currentVideo">
      <iframe
        title={videoId}
        className="currentVideo__iframe"
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
      />
      <div className="currentVideo__info">
        <CurrentVideoData />
      </div>
    </div>
  );
};

export default CurrentVideo;
