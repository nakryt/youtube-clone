import React, { useEffect } from "react";
import "./SearchPage.scss";

import { TuneOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import ChannelRow from "../ChannelRow/ChannelRow";

import { searchItemsSelector } from "../../redux/search/searchSlice";
import {
  getSearchedVideos,
  setSearchDefaultValues,
} from "../../redux/search/searchThunk";
import { setVideoItems } from "../../redux/video/recommended/videoRecommendedSlice";
import VideoRow from "../VideoRow/VideoRow";

const SearchPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(searchItemsSelector);

  useEffect(() => {
    dispatch(getSearchedVideos());
    dispatch(setVideoItems([]));

    return () => {
      dispatch(setSearchDefaultValues());
    };
  }, [dispatch]);

  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlined />
        <h2>Filter</h2>
      </div>

      <hr />

      {/*<ChannelRow*/}
      {/*  image=""*/}
      {/*  channel="Some Channel"*/}
      {/*  verified*/}
      {/*  subs="500K"*/}
      {/*  numberOfVideos={500}*/}
      {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, vel!"*/}
      {/*/>*/}

      {/*<hr />*/}

      <div className="content">
        {items.map((v) => (
          <div key={v.id}>
            <VideoRow
              views="100K"
              subs="100K"
              description={v.description}
              timestamp={v.publishedAt}
              title={v.title}
              image={v.thumbnails.default.url}
              channel={v.channel}
              videoId={v.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
