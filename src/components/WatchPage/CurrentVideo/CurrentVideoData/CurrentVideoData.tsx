import React from "react";
import "./CurrentVideoData.scss";

import VideoDataStatistics from "./VideoDataStatistics/VideoDataStatistics";

const CurrentVideoData = () => {
  return (
    <div className="currentVideoData">
      <div className="currentVideoData__hashtags">
        <p>#tag1 #tag2 #tag3</p>
      </div>
      <div className="currentVideoData__title">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
          aut?
        </p>
      </div>
      <div className="currentVideoData__metadata">
        <div className="metadata__meta">
          <div className="currentVideoData__views">10 000</div>
          <div className="currentVideoData__date">12 jan 2012</div>
        </div>
        <VideoDataStatistics likes="1000" dislikes="20" />
      </div>
    </div>
  );
};

export default CurrentVideoData;
