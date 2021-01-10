import React, { ChangeEvent, useState } from "react";
import "./Search.scss";

import { Keyboard, Search as SearchIcon, Mic } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Search = () => {
  const history = useHistory();
  const [inputSearch, setInputSearch] = useState("");

  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputSearch.trim()) {
      history.push(`/search/${inputSearch.replace("?", "%3F")}`);
    }
  };

  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="search__container">
        <input
          type="text"
          placeholder="Search"
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Keyboard className="keyboard" />
      </div>
      <button className="search__inputButton" type="submit">
        <SearchIcon fontSize="small" />
      </button>
      <IconButton>
        <Mic />
      </IconButton>
    </form>
  );
};

export default Search;
