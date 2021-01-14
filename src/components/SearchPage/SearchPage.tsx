import React, { useEffect, useState } from "react";
import "./SearchPage.scss";

import { useLocation } from "react-router-dom";
import { TuneOutlined } from "@material-ui/icons";

import ChannelRow from "../ChannelRow/ChannelRow";
import VideoRow from "../VideoRow/VideoRow";

import axios from "../../api/axios";
import { SearchItem, SearchResponse } from "../../types/search";

const SearchPage = () => {
  const [items, setItems] = useState<SearchItem[]>([]);
  const location = useLocation();
  const query = location.search.substr(3).replace("%3F", "?");

  useEffect(() => {
    const getData = async () => {
      try {
        const data = (
          await axios.get("/search", {
            params: {
              q: query,
              type: "video",
              maxResults: 20,
            },
          })
        ).data as SearchResponse;
        setItems(data.items);
      } catch (e) {}
    };
    getData();
  }, [query]);

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
          <VideoRow
            views="100K"
            subs="100K"
            description={v.snippet.description}
            timestamp={v.snippet.publishedAt}
            title={v.snippet.title}
            image={v.snippet.thumbnails.default.url}
            channelId={v.snippet.channelId}
            videoId={v.id.videoId}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
