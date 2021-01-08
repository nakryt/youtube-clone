import React from "react";
import "./Header.scss";

import { Avatar } from "@material-ui/core";
import {
  Menu,
  Search,
  VideoCall,
  Apps,
  Notifications,
} from "@material-ui/icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <Menu />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/YouTube_Logo.svg"
          alt="youtube logo"
        />
      </div>
      <div className="header__input">
        <input type="text" placeholder="Search" />
        <Search className="header__inputButton" />
      </div>
      <div className="header__icons">
        <VideoCall className="header__icon" />
        <Apps className="header__icon" />
        <Notifications className="header__icon" />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
