import React from "react";
import "./Header.scss";

import { IconButton, Tooltip } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

import Search from "./Search/Search";
import Buttons from "./Buttons/Buttons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <div className="header__logo">
          <Tooltip
            title="YouTube Home"
            classes={{ tooltip: "tooltip-black tooltip-translateY-minus30" }}
          >
            <Link to="/">
              <Logo />
            </Link>
          </Tooltip>
        </div>
      </div>

      <Search />
      <Buttons />
    </div>
  );
};

export default Header;
