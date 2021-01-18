import React, { FC, useEffect, useState } from "react";
import "./CurrentVideo.scss";

import { useSelector, useDispatch } from "react-redux";
import { VideoItem } from "../../../types/video";
import { videoRecommendedSelector } from "../../../redux/video/videoSlice";
import CurrentVideoData from "./CurrentVideoData/CurrentVideoData";
import { getVideo } from "../../../redux/video/videoThunk";

interface Props {
  videoId: string;
}

const CurrentVideo: FC<Props> = ({ videoId }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideo(videoId));
  }, [videoId, dispatch]);

  const video = useSelector(videoRecommendedSelector)[0];

  return (
    <div className="currentVideo">
      <iframe
        title={videoId}
        className="currentVideo__iframe"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        allowFullScreen
        allow="autoplay"
      />
      <div className="currentVideo__info">
        {video && (
          <CurrentVideoData
            data={{
              title: video.title,
              tags: video.tags,
              views: video.statistics.viewCount,
              timestamp: video.publishedAt,
              likesCount: video.statistics.likeCount,
              dislikesCount: video.statistics.dislikeCount,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default CurrentVideo;
