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
  fields?: string;
  videoCategoryId?: string;
}

const thumbnails = "thumbnails(medium)";
const snippet = `snippet(publishedAt,title,description,${thumbnails},categoryId,channelId,channelTitle,tags)`;
const items = `items(etag,id,statistics(viewCount,likeCount,dislikeCount),${snippet})`;
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
