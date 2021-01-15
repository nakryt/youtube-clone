import React, { FC, useRef } from "react";
import "./VideoCard.scss";

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
  const { width } = useWindowSize();
  const imageWidth = (width * 0.75) / 4 - 16;
  const imageHeight = (imageWidth * 5) / 9;

  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <Link className="videoCard" to={`/watch?v=${videoId}`}>
      <img
        src={imageVideo}
        alt="video"
        className="videoCard__thumbnail"
        width={imageWidth}
        height={imageHeight}
        ref={imageRef}
      />

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
            {numberOfViews && numberOfViews.toUpperCase()} views
          </p>
          <p className="videoCard__timestamp">{moment(timestamp).fromNow()}</p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
