import React, { FC } from "react";
import "./VideoCard.scss";

import { Skeleton } from "@material-ui/lab";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import moment from "moment";
import Truncate from "react-truncate";
import { useWindowSize } from "../../hooks/useWindowSize";

interface Props {
  videoId: string;
  title: string;
  numberOfViews: string;
  timestamp: string;
  imageVideo: string;
  channelImage: string;
  channelTitle: string;
}

const VideoCard: FC<Props> = ({
  videoId,
  title,
  numberOfViews,
  timestamp,
  imageVideo,
  channelImage,
  channelTitle,
}) => {
  return (
    <Link className="videoCard" to={`/watch?v=${videoId}`}>
      <img src={imageVideo} alt="video" className="videoCard__thumbnail" />

      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          src={channelImage}
          alt={channelTitle}
        />
        <div className="videoCard__text">
          <h4>
            <Truncate lines={2} ellipsis={"..."}>
              {title}
            </Truncate>
          </h4>
          <p className="videoCard__channelName">{channelTitle}</p>
          <p className="videoCard__numberOfViews">
            {numberOfViews.toUpperCase()} views
          </p>
          <p className="videoCard__timestamp">{moment(timestamp).fromNow()}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
