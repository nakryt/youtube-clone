import React, { useEffect } from "react";
import "./WatchPage.scss";

import { useLocation } from "react-router-dom";
import CurrentVideo from "./CurrentVideo/CurrentVideo";
import { useDispatch } from "react-redux";
import { getVideo } from "../../redux/video/videoThunk";
import { getRelatedVideos } from "../../redux/video/relatedVideo/relatedVideoThunk";
import RelatedVideos from "../RelatedVideos/RelatedVideos";

const WatchPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const videoId = location.search.substr(3);

  useEffect(() => {
    dispatch(getVideo(videoId));
    dispatch(getRelatedVideos(videoId));
    window.scrollTo({ left: 0, top: 0 });
  }, [dispatch, videoId]);

  return (
    <div className="watchPage">
      <CurrentVideo videoId={videoId} />
      <RelatedVideos />
    </div>
  );
};

export default WatchPage;
