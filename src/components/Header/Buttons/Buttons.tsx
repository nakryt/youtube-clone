import React from "react";
import "./Buttons.scss";
import { Avatar, IconButton } from "@material-ui/core";
import { Apps, Notifications, VideoCall } from "@material-ui/icons";

const Buttons = () => {
  return (
    <div className="header__buttons">
      <IconButton className="header__icon">
        <VideoCall />
      </IconButton>
      <IconButton className="header__icon">
        <Apps />
      </IconButton>
      <IconButton className="header__icon">
        <Notifications />
      </IconButton>
      <Avatar classes={{ root: "avatar" }} />
    </div>
  );
};

export default Buttons;
