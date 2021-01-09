import React from "react";
import "./Search.scss";
import { Keyboard, Search as SearchIcon, Mic } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";

const Search = () => {
  return (
    <form className="search">
      <div className="search__container">
        <input type="text" placeholder="Search" />
        <Keyboard className="keyboard" />
      </div>
      <button className="search__inputButton">
        <SearchIcon fontSize="small" />
      </button>
      <IconButton>
        <Mic />
      </IconButton>
    </form>
  );
};

export default Search;
