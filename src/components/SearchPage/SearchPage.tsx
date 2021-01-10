import React from "react";
import "./SearchPage.scss";

import { useLocation } from "react-router-dom";
import { TuneOutlined } from "@material-ui/icons";

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
    </div>
  );
};

export default SearchPage;
