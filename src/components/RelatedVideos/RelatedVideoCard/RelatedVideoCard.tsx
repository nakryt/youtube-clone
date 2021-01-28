import React, { FC } from "react";
import "./RelatedVideoCard.scss";

import moment from "moment";
import numeral from "numeral";
import { Link } from "react-router-dom";
import { CheckCircleOutline } from "@material-ui/icons";
import Truncate from "react-truncate";
import { Tooltip } from "@material-ui/core";
import { useWindowSize } from "../../../hooks/useWindowSize";

interface Props {
  image: string;
  title: string;
  channel: string;
  verified?: boolean;
  views: string;
  timestamp: string;
  videoId: string;
}

const RelatedVideoCard: FC<Props> = ({
  image,
  timestamp,
  title,
  channel,
  views,
  verified,
  videoId,
}) => {
  return (
    <Link className="relatedVideo" to={`/watch?v=${videoId}`}>
      <img
        className="relatedVideo__image"
        src={image}
        alt="video"
        width={168}
        height={94}
      />
      <div className="relatedVideo__info">
        <Tooltip
          title={title}
          placement="bottom-start"
          classes={{ tooltip: "tooltip tooltip-black" }}
        >
          <h4 className="relatedVideo__title">
            <Truncate lines={2} ellipsis={"..."}>
              {title}
            </Truncate>
          </h4>
        </Tooltip>
        <Tooltip
          title={channel}
          placement="bottom-start"
          classes={{ tooltip: "tooltip" }}
        >
          <p className="relatedVideo__channel">
            {channel} {verified && <CheckCircleOutline />}
          </p>
        </Tooltip>
        <p className="relatedVideo__metadata">
          <span className="relatedVideo__views">
            <span>{numeral(views).format("0a")}</span> views
          </span>
          <span className="relatedVideo__timestamp">
            {moment(timestamp).fromNow()}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default RelatedVideoCard;
