import React, { useCallback, useEffect, useRef } from "react";
import "./AllVideos.scss";

import { useDispatch, useSelector } from "react-redux";

import { prettyPrintStat } from "../../utils";
import {
  videoRecommendedSelector,
  isLoadingSelector,
  errorSelector,
  setVideoItems,
} from "../../redux/video/recommended/videoRecommendedSlice";
import { getVideos as getVideosThunk } from "../../redux/video/recommended/videoRecommendedThunk";
import VideoCard from "../VideoCard/VideoCard";

const AllVideos = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  const videoItems = useSelector(videoRecommendedSelector);

  const getVideos = useCallback(() => {
    dispatch(getVideosThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setVideoItems([]));
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
                channelImage={channel.thumbnail}
                channelTitle={channel.title}
              />
            )
          )}
      </div>
    </div>
  );
};

export default AllVideos;
