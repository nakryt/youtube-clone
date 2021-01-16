import React, { ChangeEvent } from "react";
import "./Search.scss";

import { Keyboard, Search as SearchIcon, Mic } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../../redux/search/searchThunk";
import { searchQuerySelector } from "../../../redux/search/searchSlice";

const Search = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const searchQuery = useSelector(searchQuerySelector);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchQuery(e.target.value));
  };
  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/search`);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={submitHandler}>
        <input
          className="search__input"
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={changeHandler}
        />
        <Keyboard className="keyboard" />
        <button className="search__inputButton" type="submit">
          <SearchIcon fontSize="small" />
        </button>
      </form>
      <IconButton>
        <Mic />
      </IconButton>
    </div>
  );
};

export default Search;
