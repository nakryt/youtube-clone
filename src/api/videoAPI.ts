import youtube from "./axios";
import { VideoResponse } from "../types/video";
import { Chart } from "../types/types";
import { ChannelResponse } from "../types/channel";

interface RequestParams {
  part: string;
  chart?: Chart;
  maxResults: number;
  type: string;
  pageToken?: string;
  id?: string;
}

const getVideos = async (id?: string, pageToken?: string, chart?: Chart) => {
  const params: RequestParams = {
    part: "snippet,statistics",
    maxResults: 20,
    type: "video",
  };
  if (pageToken) params.pageToken = pageToken;
  if (id) {
    params.id = id;
  } else {
    params.chart = chart || Chart.mostPopular;
  }
  return (
    await youtube.get("/videos", {
      params,
    })
  ).data as VideoResponse;
};

const getChannel = async (channelId: string) => {
  return (await youtube.get("/channels", { params: { id: channelId } }))
    .data as ChannelResponse;
};

export default {
  getVideos,
  getChannel,
};
