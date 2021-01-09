import React, { FC } from "react";
import "./SidebarRow.scss";

interface Props {
  title: string;
  Icon: FC;
  selected?: boolean;
}

const SidebarRow: FC<Props> = ({ title, Icon, selected }) => {
  return (
    <div className={`sidebarRow ${selected ? "sidebarRow--selected" : ""}`}>
      <Icon />
      <h3 className="sidebarRow__title">{title}</h3>
    </div>
  );
};

export default SidebarRow;
