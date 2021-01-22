import youtube from "./axios";
import { VideoResponse } from "../types/video";
import { Chart, Statistics } from "../types/types";
import { ChannelResponse } from "../types/channel";
import axios from "./axios";
import { SearchResponse } from "../types/search";

interface RequestParams {
  part: string;
  type: string;
  relatedToVideoId?: string;
  chart?: Chart;
  maxResults?: number;
  pageToken?: string;
  fields?: string;
  videoCategoryId?: string;
}

const thumbnails = "thumbnails(medium)";
const snippet = `snippet(${thumbnails},publishedAt,title,description,categoryId,channelId,channelTitle,tags)`;
const statistics = "statistics(viewCount,likeCount,dislikeCount)";
const items = `kind,items(etag,id,${snippet},${statistics})`;
const fields = `${items},nextPageToken,etag`;

const getVideos = async (pageToken: string, videoCategoryId?: string) => {
  const params: RequestParams = {
    part: `snippet,statistics`,
    type: "video",
    fields,
  };
  params.chart = Chart.mostPopular;
  if (pageToken) params.pageToken = pageToken;
  if (videoCategoryId) params.videoCategoryId = videoCategoryId;
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
        fields,
      },
    })
  ).data as VideoResponse;
};

const getVideoStatistics = async (videoId: string) => {
  return (
    await youtube.get("/videos", {
      params: {
        type: "video",
        id: videoId,
        part: "snippet,statistics",
      },
    })
  ).data?.items[0]?.statistics as Statistics;
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

const getRelatedVideos = async (videoId: string) => {
  return (
    await axios.get("/search", {
      params: {
        type: "video",
        relatedToVideoId: videoId,
      },
    })
  ).data as SearchResponse;
};

const videoAPI = {
  getVideo,
  getVideos,
  getChannel,
  getRelatedVideos,
  getVideoStatistics,
  search,
};

export default videoAPI;
