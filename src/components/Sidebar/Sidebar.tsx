import React from "react";
import "./Sidebar.scss";

import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideoOutlined,
  ExpandMoreOutlined,
  ThumbUpAlt,
  WatchLater,
} from "@material-ui/icons";
import SidebarRow from "./SidebarRow/SidebarRow";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow selected title="Home" Icon={Home} />
      <SidebarRow title="Trending" Icon={Whatshot} />
      <SidebarRow title="Subscription" Icon={Subscriptions} />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrary} />
      <SidebarRow title="History" Icon={History} />
      <SidebarRow title="Your videos" Icon={OndemandVideoOutlined} />
      <SidebarRow title="Watch Later" Icon={WatchLater} />
      <SidebarRow title="Liked video" Icon={ThumbUpAlt} />
      <SidebarRow title="Show more" Icon={ExpandMoreOutlined} />
      <hr />
    </div>
  );
};

export default Sidebar;
