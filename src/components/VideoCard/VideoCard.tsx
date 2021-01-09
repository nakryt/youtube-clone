import React, { FC } from "react";
import "./VideoCard.scss";
import { Avatar } from "@material-ui/core";

interface Props {
  title: string;
  numberOfViews: number;
  timestamp: string;
  imageVideo: string;
  channelName: string;
  channelImage: string;
}

const VideoCard: FC<Props> = ({
  title,
  numberOfViews,
  timestamp,
  channelName,
  channelImage,
  imageVideo,
}) => {
  return (
    <div className="videoCard">
      <img src={imageVideo} alt="video" className="videoCard__thumbnail" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          src={channelImage}
          alt={channel}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channelName}</p>
          <p>
            {numberOfViews} + {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
