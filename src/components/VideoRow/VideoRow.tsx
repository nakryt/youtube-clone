import React, { FC, useEffect, useState } from "react";
import "./VideoRow.scss";

import { Link } from "react-router-dom";
import Truncate from "react-truncate";
import { Avatar } from "@material-ui/core";

import { ChannelItem, ChannelResponse } from "../../types/channel";
import axios from "../../axios";

interface Props {
  views: string;
  subs: string;
  description: string;
  timestamp: string;
  title: string;
  image: string;
  channelId: string;
  videoId: string;
}

const VideoRow: FC<Props> = ({
  timestamp,
  title,
  views,
  subs,
  image,
  description,
  channelId,
  videoId,
}) => {
  const [channel, setChannel] = useState<ChannelItem>({} as ChannelItem);

  useEffect(() => {
    const getChannel = async () => {
      try {
        const data = (
          await axios.get("/channels", { params: { id: channelId } })
        ).data as ChannelResponse;
        setChannel(data.items[0]);
      } catch (e) {}
    };
    getChannel();
  }, [channelId]);

  return (
    <Link className="videoRow" to={`/watch?v=${videoId}`}>
      <img src={image} alt={title} />
      <div className="videoRow__text">
        <h3>{title}</h3>
        <p className="videoRow__headline">
          {views} views {timestamp}
        </p>
        <p className="videoRow__channel">
          {Object.keys(channel).length > 0 ? (
            <>
              <Avatar
                className="videoRow__avatar"
                src={channel.snippet.thumbnails.default.url}
              />
              <span className="videoRow__channelName">
                {channel.snippet.title}
              </span>
              <span className="videoRow__subs">
                <span className="videoRow__subsNumber">{subs}</span> Subscribers
              </span>
            </>
          ) : null}
        </p>
        <p className="videoRow__description">
          <Truncate lines={2} ellipsis={"..."}>
            {description}
          </Truncate>
        </p>
      </div>
    </Link>
  );
};

export default VideoRow;
