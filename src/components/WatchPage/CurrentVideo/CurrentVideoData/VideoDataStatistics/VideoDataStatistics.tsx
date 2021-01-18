import React, { FC } from "react";
import "./VideoDataStatistics.scss";

import {
  MoreHoriz,
  PlaylistAddSharp,
  ReplySharp,
  ThumbDown,
  ThumbUp,
} from "@material-ui/icons";
import { numberWithSpaces } from "../../../../../utils";

interface Props {
  likes: string;
  dislikes: string;
}

const VideoDataStatistics: FC<Props> = ({ likes, dislikes }) => {
  return (
    <div className="videoDataStatistics">
      <span className="likes">
        <ThumbUp /> {numberWithSpaces(likes)}
      </span>
      <span className="dislikes">
        <ThumbDown /> {numberWithSpaces(dislikes)}
      </span>
      <span className="reply">
        <ReplySharp /> Share
      </span>
      <span className="add">
        <PlaylistAddSharp /> Save
      </span>
      <span className="more">
        <MoreHoriz />
      </span>
    </div>
  );
};

export default VideoDataStatistics;
