import { PageInfo } from "./types";
import { Snippet } from "./video";

export interface RelatedVideosItem {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
}

export interface RelatedVideoResponse {
  kind: "youtube#searchListResponse";
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: RelatedVideosItem[];
}
