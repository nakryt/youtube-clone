import React, { useCallback, useEffect, useRef } from "react";
import "./AllVideos.scss";

import { useDispatch, useSelector } from "react-redux";

import { prettyPrintStat } from "../../utils";
import {
  videoRecommendedSelector,
  isLoadingSelector,
  setVideoItems,
} from "../../redux/video/videoSlice";
import { getVideos as getVideosThunk } from "../../redux/video/videoThunk";
import VideoCard from "../VideoCard/VideoCard";
import { setSearchDefaultValues } from "../../redux/search/searchThunk";

const AllVideos = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const videoItems = useSelector(videoRecommendedSelector);

  const getVideos = useCallback(() => {
    dispatch(getVideosThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setVideoItems([]));
    dispatch(setSearchDefaultValues());
    let isCancel = false;
    if (!isCancel) getVideos();

    return () => {
      isCancel = true;
    };
    // eslint-disable-next-line
  }, [dispatch]);

  const mainRef = useRef<HTMLDivElement>(null);

  const scrollHandler = useCallback(() => {
    const { current } = mainRef;
    current && console.log("Offset:", current.offsetHeight);
    if (
      !isLoading &&
      current &&
      current.offsetHeight <= Number(window.scrollY) + 800
    ) {
      getVideos();
    }
  }, [mainRef, getVideos, isLoading]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos__videos" ref={mainRef}>
        {videoItems &&
          videoItems.map(
            ({ id, channel, statistics, publishedAt, thumbnails, title }) => (
              <VideoCard
                key={id}
                videoId={id}
                title={title}
                numberOfViews={
                  statistics ? prettyPrintStat(statistics.viewCount) : ""
                }
                timestamp={publishedAt}
                imageVideo={thumbnails.medium ? thumbnails.medium.url : ""}
                channelImage={channel.snippet.thumbnails?.default?.url}
                channelTitle={channel.snippet.title}
              />
            )
          )}
      </div>
    </div>
  );
};

export default AllVideos;
