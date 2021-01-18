import React, { FC } from "react";
import "./CurrentVideoData.scss";

import numeral from "numeral";
import VideoDataStatistics from "./VideoDataStatistics/VideoDataStatistics";

interface Props {
  data: {
    tags: string[];
    title: string;
    views: string;
    timestamp: string;
    likesCount: string;
    dislikesCount: string;
  };
}

const CurrentVideoData: FC<Props> = ({ data }) => {
  return (
    <div className="currentVideoData">
      {Object.keys(data).length > 0 ? (
        <>
          {data.tags && (
            <div className="currentVideoData__hashtags">
              <p>
                <span>
                  <a href="#">#{data.tags[data.tags.length - 1]}</a>
                </span>
              </p>
            </div>
          )}
          <div className="currentVideoData__title">
            <p>{data.title}</p>
          </div>
          <div className="currentVideoData__metadata">
            <div className="metadata__meta">
              <div className="currentVideoData__views">
                {numeral(data.views).format("0,0")} views
              </div>
              <span className="currentVideoData__dot">•</span>
              <div className="currentVideoData__date">
                {new Date(data.timestamp).toLocaleString("en-GB", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
            <VideoDataStatistics
              likes={data.likesCount}
              dislikes={data.dislikesCount}
            />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default CurrentVideoData;
