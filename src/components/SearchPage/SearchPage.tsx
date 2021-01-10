import React from "react";
import "./SearchPage.scss";

import { useLocation } from "react-router-dom";
import { TuneOutlined } from "@material-ui/icons";
import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

const SearchPage = () => {
  const location = useLocation();

  console.log(location);
  console.log(location.pathname.substr(8).replace("%3F", "?"));

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>Filter</h2>
      </div>

      <hr />

      <ChannelRow
        image=""
        channel="Some Channel"
        verified
        subs="500K"
        numberOfVideos={500}
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, vel!"
      />

      <hr />

      <VideoRow
        views="100K"
        subs="100K"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, vel!"
        timestamp="timestamp"
        channel="Some Channel"
        title="Video title"
        image=""
      />
    </div>
  );
};

export default SearchPage;
