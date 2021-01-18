import { PageInfo, Statistics, Thumbnail } from "./types";
import { ChannelItem } from "./channel";

export interface Snippet {
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
//
// export interface VideoResponse {
//   // kind: "youtube#videoListResponse";
//   etag: string;
//   items: Item[];
//   nextPageToken: string;
//   // pageInfo: PageInfo;
// }

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
  categoryId: string;
}
// items(etag,id,statistics(viewCount,likeCount,dislikeCount),snippet(publishedAt,categoryId,title,description,thumbnails(medium),channelId,channelTitle,tags)),nextPageToken,etag

export interface VideoResponse {
  etag: string;
  items: ItemResponse[];
  nextPageToken: string;
}

export interface ItemResponse {
  etag: string;
  id: string;
  statistics: {
    viewCount: string;
    likeCount: string;
    dislikeCount: string;
  };
  snippet: {
    publishedAt: string;
    title: string;
    description: string;
    thumbnails: {
      medium: Thumbnail;
    };
    channelId: string;
    channelTitle: string;
    tags: string[];
    categoryId: string;
  };
}
