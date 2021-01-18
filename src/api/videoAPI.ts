import youtube from "./axios";
import { VideoResponse } from "../types/video";
import { Chart } from "../types/types";
import { ChannelResponse } from "../types/channel";
import axios from "./axios";
import { SearchResponse } from "../types/search";
import { RelatedVideoResponse } from "../types/relatedVideos";

interface RequestParams {
  part: string;
  type: string;
  relatedToVideoId?: string;
  chart?: Chart;
  maxResults?: number;
  pageToken?: string;
}

const getVideos = async (pageToken: string) => {
  const params: RequestParams = {
    part: `snippet,statistics`,
    type: "video",
  };
  if (pageToken) params.pageToken = pageToken;
  params.chart = Chart.mostPopular;
  return (
    await youtube.get("/videos", {
      params,
    })
  ).data as VideoResponse;
};

const getVideo = async (id: string) => {
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
  return (
    await axios.get("/search", {
      params: {
        q: query,
        type: "video",
      },
    })
  ).data as SearchResponse;
};

const videoAPI = {
  getVideo,
  getVideos,
  getChannel,
  search,
};

export default videoAPI;
