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
import { useSelector } from "react-redux";
import SidebarRow from "./SidebarRow/SidebarRow";
import { useWindowSize } from "../../hooks/useWindowSize";
import { userSelector } from "../../redux/user/userSlice";

const Sidebar = () => {
  const { width } = useWindowSize();
  const isDesktopLarge = width > 1312;
  const user = useSelector(userSelector);

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
      {isDesktopLarge && user && (
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
