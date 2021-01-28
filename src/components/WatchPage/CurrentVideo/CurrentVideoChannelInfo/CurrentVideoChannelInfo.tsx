import React, { FC } from "react";
import "./CurrentVideoChannelInfo.scss";
import { Avatar, Button } from "@material-ui/core";
import Truncate from "react-truncate";
import numeral from "numeral";

interface Props {
  channelAvatar: string;
  channelName: string;
  numberSubscribers: string;
  description: string;
}

const CurrentVideoChannelInfo: FC<Props> = ({
  channelAvatar,
  channelName,
  numberSubscribers,
  description,
}) => {
  return (
    <div className="currentVideoChannelInfo">
      <div className="infoWrapper">
        <Avatar src={channelAvatar} className="avatar" />

        <div className="info__body">
          <div className="channelName">{channelName}</div>
          <div className="subscribers">
            <span>{numeral(numberSubscribers).format("0a")}</span> subscribers
          </div>
          <div className="description">
            <Truncate lines={2} ellipsis={"..."}>
              {description}
            </Truncate>
          </div>
          <Button variant="text" className="show-more">
            Show more
          </Button>
        </div>

        <Button variant="contained" className="subscribe">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default CurrentVideoChannelInfo;
