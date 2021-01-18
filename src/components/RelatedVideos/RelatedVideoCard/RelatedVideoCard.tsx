import React, { FC } from "react";
import "./RelatedVideoCard.scss";

import moment from "moment";
import numeral from "numeral";

import { CheckCircleOutline } from "@material-ui/icons";
import Truncate from "react-truncate";

interface Props {
  image: string;
  title: string;
  channel: string;
  verified?: boolean;
  views: string;
  timestamp: string;
}

const RelatedVideoCard: FC<Props> = ({
  image,
  timestamp,
  title,
  channel,
  views,
  verified,
}) => {
  return (
    <div className="relatedVideo">
      <img className="relatedVideo__image" src={image} alt="video" />
      <div className="relatedVideo__info">
        <h4 className="relatedVideo__title">
          <Truncate lines={2} ellipsis={"..."}>
            {title}
          </Truncate>
        </h4>
        <p className="relatedVideo__channel">
          {channel} {verified && <CheckCircleOutline />}
        </p>
        <p className="relatedVideo__metadata">
          <span className="relatedVideo__views">
            <span>{numeral(views).format("0a")}</span> views
          </span>
          <span className="relatedVideo__timestamp">
            {moment(timestamp).fromNow()}
          </span>
        </p>
      </div>
    </div>
  );
};

export default RelatedVideoCard;
