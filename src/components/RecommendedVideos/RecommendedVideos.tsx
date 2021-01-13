import React, { useCallback, useEffect, useRef, useState } from "react";
import "./RecommendedVideos.scss";

import youtube from "../../axios";
import { VideoResponse, VideoItem } from "../../types/video";
import VideoCard from "../VideoCard/VideoCard";
import { prettyPrintStat } from "../../utils";

const RecommendedVideos = () => {
  const [loading, setLoading] = useState(true);
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [nextPageToken, setNextPageToken] = useState("");

  const getVideos = useCallback(
    async (pageToken: string = "") => {
      setLoading(true);
      try {
        const data = (
          await youtube.get("/videos", {
            params: {
              part: "snippet,statistics",
              chart: "mostPopular",
              maxResults: 20,
              type: "video",
              pageToken,
            },
          })
        ).data as VideoResponse;

        setVideos([...videos, ...data.items]);

        if (data.nextPageToken) {
          setNextPageToken(data.nextPageToken);
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    },
    [videos]
  );

  useEffect(() => {
    let isCancel = false;
    if (!isCancel) {
      getVideos();
    }

    return () => {
      isCancel = true;
    };
    // eslint-disable-next-line
  }, []);

  const mainRef = useRef<HTMLDivElement>(null);

  const scrollHandler = useCallback(() => {
    const { current } = mainRef;
    if (
      !loading &&
      current &&
      current.offsetHeight <= Number(window.scrollY) + 800
    ) {
      getVideos(nextPageToken);
    }
  }, [mainRef, getVideos, nextPageToken, loading]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <div className="recommendedVideos">
      <div className="recommendedVideos__videos" ref={mainRef}>
        {videos.map((v) => (
          <VideoCard
            key={v.id}
            videoId={v.id}
            title={v.snippet.title}
            numberOfViews={prettyPrintStat(v.statistics.viewCount)}
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
