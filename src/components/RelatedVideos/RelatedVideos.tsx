import React from "react";
import RelatedVideoCard from "./RelatedVideoCard/RelatedVideoCard";

import { relatedVideoSelector } from "../../redux/video/relatedVideo/relatedVideoSlice";
import { useSelector } from "react-redux";

const RelatedVideos = () => {
  const videos = useSelector(relatedVideoSelector);
  return (
    <div className="relatedVideos">
      {videos.map((v) => (
        <RelatedVideoCard
          key={v.id}
          image={v.thumbnails?.medium?.url}
          title={v.title}
          channel={v.channel?.snippet?.title}
          views={v.statistics?.viewCount}
          timestamp={v.publishedAt}
          videoId={v.id}
        />
      ))}
    </div>
  );
};

export default RelatedVideos;
