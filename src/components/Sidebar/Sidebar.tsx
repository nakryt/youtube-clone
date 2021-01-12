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
import { useWindowSize } from "../../hooks/useWindowSize";

const Sidebar = () => {
  const { width } = useWindowSize();
  const isDesktopLarge = width > 1312;

  return (
    <div className="sidebar">
      <SidebarRow title="Home" Icon={Home} href="/" />
      <SidebarRow title="Trending" Icon={Whatshot} href="/trending" />
      <SidebarRow
        title="Subscription"
        Icon={Subscriptions}
        href="/subscriptions"
      />
      <hr />
      <SidebarRow title="Library" Icon={VideoLibrary} href="/library" />
      {isDesktopLarge && (
        <>
          <SidebarRow title="History" Icon={History} href="/history" />
          <SidebarRow
            title="Your videos"
            Icon={OndemandVideoOutlined}
            href="/videos"
          />
          <SidebarRow
            title="Watch Later"
            Icon={WatchLater}
            href="/watch_later"
          />
          <SidebarRow title="Liked video" Icon={ThumbUpAlt} href="/liked" />
          {/*<SidebarRow title="Show more" Icon={ExpandMoreOutlined} />*/}
          <hr />
        </>
      )}
    </div>
  );
};

export default Sidebar;
