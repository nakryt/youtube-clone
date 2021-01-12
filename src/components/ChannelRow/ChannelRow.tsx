import React, { FC } from "react";
import "./ChannelRow.scss";

import { Avatar } from "@material-ui/core";
import { CheckCircleOutline } from "@material-ui/icons";

interface Props {
  image: string;
  channel: string;
  verified: boolean;
  subs: string;
  numberOfVideos: number;
  description: string;
}

const ChannelRow: FC<Props> = ({
  image,
  channel,
  verified,
  subs,
  numberOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" src={image} alt={channel} />
      <div className="channelRow__text">
        <h4>
          {channel} {verified && <CheckCircleOutline />}
        </h4>
        <p>
          <span className="channelRow__subs">
            <span className="videoRow__subsNumber">{subs}</span> Subscribers
          </span>{" "}
          {numberOfVideos} videos
        </p>
        <p className="channelRow__description">{description}</p>
      </div>
    </div>
  );
};

export default ChannelRow;
