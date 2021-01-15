import React, { useEffect } from "react";
import "./WatchPage.scss";

import { useLocation } from "react-router-dom";
import RelativeVideos from "./RelativeVideos/RelativeVideos";
import CurrentVideo from "./CurrentVideo/CurrentVideo";
import { setVideoItems } from "../../redux/video/recommended/videoRecommendedSlice";
import { useDispatch } from "react-redux";

const WatchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const videoId = location.search.substr(3);

  useEffect(() => {
    dispatch(setVideoItems([]));
  }, [dispatch]);

  return (
    <div className="watchPage">
      <CurrentVideo videoId={videoId} />
      <RelativeVideos />
    </div>
  );
};

export default WatchPage;
