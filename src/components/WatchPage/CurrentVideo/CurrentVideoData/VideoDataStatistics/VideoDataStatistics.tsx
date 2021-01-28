import React, { FC } from "react";
import "./VideoDataStatistics.scss";

import {
  MoreHoriz,
  PlaylistAddSharp,
  ReplySharp,
  ThumbDown,
  ThumbUp,
} from "@material-ui/icons";
import numeral from "numeral";
import { IconButton, Tooltip } from "@material-ui/core";

interface Props {
  likes: string;
  dislikes: string;
}

const VideoDataStatistics: FC<Props> = ({ likes, dislikes }) => {
  return (
    <div className="videoDataStatistics">
      <div className="likes">
        <span>
          <Tooltip
            title={"I like this"}
            classes={{
              tooltip: `tooltip`,
            }}
          >
            <IconButton>
              <ThumbUp />
            </IconButton>
          </Tooltip>
          {numeral(likes).format("0a")}
        </span>
      </div>
      <div className="dislikes">
        <span>
          <Tooltip
            title={"I don't like this"}
            classes={{
              tooltip: `tooltip`,
            }}
          >
            <IconButton>
              <ThumbDown />
            </IconButton>
          </Tooltip>
          {numeral(dislikes).format("0a")}
        </span>
      </div>
      <div className="reply">
        <span>
          <IconButton>
            <ReplySharp />
          </IconButton>
          Share
        </span>
      </div>
      <div className="add">
        <span>
          <IconButton>
            <PlaylistAddSharp />
          </IconButton>
          Save
        </span>
      </div>
      <div className="more">
        <span>
          <IconButton>
            <MoreHoriz />
          </IconButton>
        </span>
      </div>
    </div>
  );
};

export default VideoDataStatistics;
