import React, { FC } from "react";
import "./VideoRow.scss";

interface Props {
  views: string;
  subs: string;
  description: string;
  timestamp: string;
  channel: string;
  title: string;
  image: string;
}

const VideoRow: FC<Props> = ({
  timestamp,
  title,
  views,
  subs,
  channel,
  image,
  description,
}) => {
  return (
    <div className="videoRow">
      <img src={image} alt={channel} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {channel}{" "}
          <span className="videoRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>{" "}
          {views} views {timestamp}
        </p>
        <p className="videoRow__description">{description}</p>
      </div>
    </div>
  );
};

export default VideoRow;
