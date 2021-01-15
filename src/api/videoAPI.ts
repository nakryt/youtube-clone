import youtube from "./axios";
import { VideoResponse } from "../types/video";
import { Chart } from "../types/types";
import { ChannelResponse } from "../types/channel";
import axios from "./axios";
import { SearchResponse } from "../types/search";

interface RequestParams {
  part: string;
  chart?: Chart;
  maxResults: number;
  type: string;
  pageToken?: string;
}

const getVideos = async (pageToken?: string, chart?: Chart) => {
  const params: RequestParams = {
    part: "snippet,statistics",
    maxResults: 20,
    type: "video",
  };
  if (pageToken) params.pageToken = pageToken;
  params.chart = chart || Chart.mostPopular;
  return (
    await youtube.get("/videos", {
      params,
    })
  ).data as VideoResponse;
};

const getVideo = async (id?: string) => {
  return (
    await youtube.get("/videos", {
      params: {
        type: "video",
        id,
        part: "snippet,statistics",
      },
    })
  ).data as VideoResponse;
};

const getChannel = async (channelId: string) => {
  return (await youtube.get("/channels", { params: { id: channelId } }))
    .data as ChannelResponse;
};

const search = async (query: string) => {
  const data = (
    await axios.get("/search", {
      params: {
        q: query,
        type: "video",
        maxResults: 5,
      },
    })
  ).data as SearchResponse;
  return data.items;
};

export default {
  getVideo,
  getVideos,
  getChannel,
  search,
};
