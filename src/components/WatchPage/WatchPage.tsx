import React from "react";
import "./WatchPage.scss";

import { useLocation } from "react-router-dom";
import RelativeVideos from "./RelativeVideos/RelativeVideos";
import CurrentVideo from "./CurrentVideo/CurrentVideo";

const WatchPage = () => {
  const location = useLocation();
  const videoId = location.search.substr(3);

  return (
    <div className="watchPage">
      <CurrentVideo videoId={videoId} />
      <RelativeVideos />
    </div>
  );
};

export default WatchPage;
