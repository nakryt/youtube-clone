import React from "react";
import RelatedVideoCard from "./RelatedVideoCard/RelatedVideoCard";

import { videoSelector } from "../../redux/video/videoSlice";
import { useSelector } from "react-redux";

const RelatedVideos = () => {
  const videos = useSelector(videoSelector);
  return (
    <div className="relatedVideos">
      {videos.map((v) => (
        <RelatedVideoCard
          key={v.id}
          image={v.thumbnails.medium.url}
          title={v.title}
          channel={v.channel.snippet.title}
          views={v.statistics.viewCount}
          timestamp={v.publishedAt}
        />
      ))}
    </div>
  );
};

export default RelatedVideos;
