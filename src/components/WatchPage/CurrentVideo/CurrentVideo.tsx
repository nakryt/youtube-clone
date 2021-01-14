import React, { FC, useEffect, useState } from "react";
import "./CurrentVideo.scss";

import { useSelector, useDispatch } from "react-redux";
import { VideoItem } from "../../../types/video";
import { videoRecommendedSelector } from "../../../redux/video/recommended/videoRecommendedSlice";
import CurrentVideoData from "./CurrentVideoData/CurrentVideoData";
import { getVideos } from "../../../redux/video/recommended/videoRecommendedThunk";

interface Props {
  videoId: string;
}

const CurrentVideo: FC<Props> = ({ videoId }) => {
  const dispatch = useDispatch();
  const [video, setVideo] = useState<VideoItem>({} as VideoItem);
  const videos = useSelector(videoRecommendedSelector);

  useEffect(() => {
    const video = videos
      ? videos.find((v) => v.id === videoId) || ({} as VideoItem)
      : ({} as VideoItem);
    if (Object.keys(video).length === 0 && videoId) {
      dispatch(getVideos(videoId));
    } else {
      setVideo(video);
    }
  }, [videos, videoId, dispatch]);

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
        {video.statistics && (
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
