import React, { FC } from "react";
import "./SidebarRow.scss";

import { NavLink } from "react-router-dom";

interface Props {
  title: string;
  Icon: FC;
  href: string;
}

const SidebarRow: FC<Props> = ({ title, Icon, href }) => {
  return (
    <NavLink
      to={href}
      className="sidebarRow"
      activeClassName="sidebarRow--selected"
      exact
    >
      <Icon />
      <h3 className="sidebarRow__title">{title}</h3>
    </NavLink>
  );
};

export default SidebarRow;
