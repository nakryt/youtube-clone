import { PageInfo, Thumbnail } from "./types";

export interface ChannelItem {
  kind: "youtube#channel";
  etag: string;
  id: string;
  snippet: {
    title: string;
    description: string;
    customUrl: string;
    publishedAt: string;
    thumbnails: {
      default: Thumbnail;
      medium: Thumbnail;
      high: Thumbnail;
    };
  };
  localized: {
    title: string;
    description: string;
  };
}

export interface ChannelResponse {
  kind: "youtube#channelListResponse";
  etag: string;
  pageInfo: PageInfo;
  items: ChannelItem[];
}

// interface ChannelResponse {
//     "kind": "youtube#channelListResponse",
//     "etag": "-I4YK7208_BV8kIDWrNANgx6U2c",
//     "pageInfo": {
//         "totalResults": 1,
//         "resultsPerPage": 5
//     },
//     "items": [
//         {
//             "kind": "youtube#channel",
//             "etag": "C3zin5vbeqAx2fQlj7h4UWoNnjA",
//             "id": "UCDVYQ4Zhbm3S2dlz7P1GBDg",
//             "snippet": {
//                 "title": "NFL",
//                 "description": "The official YouTube page of the NFL.\n\nSubscribe to the NFL YouTube channel to see immediate in-game highlights from your favorite teams and players, daily fantasy football updates, all your favorite NFL podcasts, and more!",
//                 "customUrl": "nfl",
//                 "publishedAt": "2014-12-14T02:07:35Z",
//                 "thumbnails": {
//                     "default": {
//                         "url": "https://yt3.ggpht.com/ytc/AAUvwnh9-bDYnEHP_q2GDdftm90DNns6xyCdVZ289P1fJPg=s88-c-k-c0x00ffffff-no-rj",
//                         "width": 88,
//                         "height": 88
//                     },
//                     "medium": {
//                         "url": "https://yt3.ggpht.com/ytc/AAUvwnh9-bDYnEHP_q2GDdftm90DNns6xyCdVZ289P1fJPg=s240-c-k-c0x00ffffff-no-rj",
//                         "width": 240,
//                         "height": 240
//                     },
//                     "high": {
//                         "url": "https://yt3.ggpht.com/ytc/AAUvwnh9-bDYnEHP_q2GDdftm90DNns6xyCdVZ289P1fJPg=s800-c-k-c0x00ffffff-no-rj",
//                         "width": 800,
//                         "height": 800
//                     }
//                 },
//                 "localized": {
//                     "title": "NFL",
//                     "description": "The official YouTube page of the NFL.\n\nSubscribe to the NFL YouTube channel to see immediate in-game highlights from your favorite teams and players, daily fantasy football updates, all your favorite NFL podcasts, and more!"
//                 }
//             }
//         }
//     ]
// }
