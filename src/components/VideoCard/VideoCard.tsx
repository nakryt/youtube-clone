import React, { FC, useEffect, useState } from "react";
import "./VideoCard.scss";
import { Avatar } from "@material-ui/core";
import moment from "moment";
import axios from "../../axios";
import { ChannelItem, ChannelResponse } from "../../types/channel";

interface Props {
  title: string;
  numberOfViews: string;
  timestamp: string;
  imageVideo: string;
  channelId: string;
}

const VideoCard: FC<Props> = ({
  title,
  numberOfViews,
  timestamp,
  imageVideo,
  channelId,
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

      // let isCancel = false;
      // if (!isCancel) {
      // }

      // return () => {
      //   isCancel = true;
      // };
    };
    getChannel();
  }, [channelId]);

  return (
    <div className="videoCard">
      <img src={imageVideo} alt="video" className="videoCard__thumbnail" />

      {Object.keys(channel).length > 0 ? (
        <div className="videoCard__info">
          <Avatar
            className="videoCard__avatar"
            src={channel.snippet.thumbnails.default.url}
            alt={channel.snippet.title}
          />
          <div className="videoCard__text">
            <h4>{title}</h4>
            <p className="videoCard__channelName">{channel.snippet.title}</p>
            <p className="videoCard__numberOfViews">
              {numberOfViews.toUpperCase()} views
            </p>
            <p className="videoCard__timestamp">
              {moment(timestamp).fromNow()}
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default VideoCard;
