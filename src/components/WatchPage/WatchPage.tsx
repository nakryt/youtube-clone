import React, { useEffect } from "react";
import "./WatchPage.scss";

import { useLocation } from "react-router-dom";
import CurrentVideo from "./CurrentVideo/CurrentVideo";
import { setVideoItems } from "../../redux/video/videoSlice";
import { useDispatch } from "react-redux";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

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
      <RelatedVideos />
    </div>
  );
};

export default WatchPage;
