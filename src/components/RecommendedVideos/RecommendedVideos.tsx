import React, { useEffect, useState } from "react";
import "./RecommendedVideos.scss";

import { Redirect } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import youtube from "../../axios";
import { VideoResponse, VideoItem } from "../../types/video";
import VideoCard from "../VideoCard/VideoCard";
import { prettyPrintStat } from "../../utils";

import { data } from "../../types/types";

const RecommendedVideos = () => {
  const [videos, setVideos] = useState<VideoItem[]>([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const data = (
          await youtube.get("/videos", {
            params: {
              part: "snippet,statistics",
              chart: "mostPopular",
              maxResults: 20,
              type: "video",
            },
          })
        ).data as VideoResponse;

        setVideos(data.items);
      } catch (e) {}
    };

    // getVideos();
  }, []);

  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos__videos">
        {
          //   videos.map((v) => (
          //   <VideoCard
          //     key={v.id}
          //     videoId={v.id}
          //     title={v.snippet.title}
          //     numberOfViews={prettyPrintStat(v.statistics.viewCount)}
          //     timestamp={v.snippet.publishedAt}
          //     imageVideo={v.snippet.thumbnails.medium.url}
          //     channelId={v.snippet.channelId}
          //   />
          // ))
        }
        {[data, data, data, data, data].map((v) => (
          <VideoCard
            key={v.id}
            videoId={v.id}
            title={v.snippet.title}
            numberOfViews={"100K"}
            timestamp={v.snippet.publishedAt}
            imageVideo={v.snippet.thumbnails.medium.url}
            channelId={v.snippet.channelId}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedVideos;
