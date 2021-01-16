import { PageInfo, Statistics, Thumbnail } from "./types";
import { ChannelItem } from "./channel";

interface Snippet {
  publishedAt: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  channelId: string;
  channelTitle: string;
  tags: string[];
}

export interface Item {
  kind: "youtube#video";
  etag: string;
  id: string;
  snippet: Snippet;
  categoryId: string;
  liveBroadcastContent: string;
  localized: {
    title: string;
    description: string;
  };
  defaultAudioLanguage: string;
  statistics: Statistics;
}

export interface VideoResponse {
  kind: string;
  etag: string;
  items: Item[];
  nextPageToken: string;
  pageInfo: PageInfo;
}

export interface VideoItem {
  id: string;
  publishedAt: string;
  title: string;
  description: string;
  tags: string[];
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  channel: ChannelItem;
  statistics: Statistics;
}
