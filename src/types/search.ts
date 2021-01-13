import { PageInfo, Thumbnail } from "./types";

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumbnail;
    medium: Thumbnail;
    high: Thumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface SearchItem {
  kind: "youtube#searchResult";
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
}

export interface SearchResponse {
  kind: "youtube#searchListResponse";
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: SearchItem[];
}

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "BufeLIOp7q7vttw1J7EHmKSCfp4",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "UA",
//     "pageInfo": {
//     "totalResults": 1000000,
//         "resultsPerPage": 5
// },
//     "items": [
//     {
//         "kind": "youtube#searchResult",
//         "etag": "tZqPQevZT5F-14HvFFt7iNeldIA",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "YQHsXMglC9A"
//         },
//         "snippet": {
//             "publishedAt": "2015-10-23T06:54:18Z",
//             "channelId": "UComP_epzeKzvBX156r6pm1Q",
//             "title": "Adele - Hello",
//             "description": "'Hello' is taken from the new album, 25, out November 20. http://adele.com Available now from iTunes http://smarturl.it/itunes25 Available now from Amazon ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/YQHsXMglC9A/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/YQHsXMglC9A/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "AdeleVEVO",
//             "liveBroadcastContent": "none",
//             "publishTime": "2015-10-23T06:54:18Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "88NeLzpkphAI6XPgKhEuRzLHosY",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "fazMSCZg-mw"
//         },
//         "snippet": {
//             "publishedAt": "2020-07-24T00:01:07Z",
//             "channelId": "UCHuyAbMG3UshUqNLYCUjaPg",
//             "title": "Pop Smoke - Hello (Audio) ft. A Boogie wit da Hoodie",
//             "description": "Music video by Pop Smoke performing Hello (Audio). © 2020 Republic Records, a division of UMG Recordings, Inc. & Victor Victor Worldwide ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/fazMSCZg-mw/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/fazMSCZg-mw/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/fazMSCZg-mw/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "POPSMOKEVEVO",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-07-24T00:01:07Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "N0qkLIFmHTNGjarjpQAdBvBlt5U",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "mHONNcZbwDY"
//         },
//         "snippet": {
//             "publishedAt": "2020-11-20T17:00:16Z",
//             "channelId": "UCW89X8TLyH8GMls2PaRPkjg",
//             "title": "Lionel Richie - Hello (Official Music Video)",
//             "description": "REMASTERED IN HD! Lionel Richie is a drama professor falling for a blind student and, just when he thinks she'll never know his feelings, he discovers she ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/mHONNcZbwDY/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/mHONNcZbwDY/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/mHONNcZbwDY/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "LionelRichieVEVO",
//             "liveBroadcastContent": "none",
//             "publishTime": "2020-11-20T17:00:16Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "68KcyMN94WOy-wsDsNdw2CHoKE4",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "tVlcKp3bWH8"
//         },
//         "snippet": {
//             "publishedAt": "2015-04-08T12:00:05Z",
//             "channelId": "UCLsooMJoIpl_7ux2jvdPB-Q",
//             "title": "Hello! | Super Simple Songs",
//             "description": "More great Super Simple videos in the Super Simple App for iOS ▻ http://apple.co/2nW5hPd Start off your lesson with \"Hello!\", a fun and energetic song to talk ...",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/tVlcKp3bWH8/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/tVlcKp3bWH8/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/tVlcKp3bWH8/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "Super Simple Songs - Kids Songs",
//             "liveBroadcastContent": "none",
//             "publishTime": "2015-04-08T12:00:05Z"
//         }
//     },
//     {
//         "kind": "youtube#searchResult",
//         "etag": "nrxZUp_cvNyNMJEhhoTRnNbNJbA",
//         "id": {
//             "kind": "youtube#video",
//             "videoId": "UBYnT8JY7sE"
//         },
//         "snippet": {
//             "publishedAt": "2010-07-25T07:29:15Z",
//             "channelId": "UCc8fZTZpS6XykoykqVjabaA",
//             "title": "Lionel Richie - Hello [LYRICS]",
//             "description": "Lionel Richie - Hello with LYRICS.",
//             "thumbnails": {
//                 "default": {
//                     "url": "https://i.ytimg.com/vi/UBYnT8JY7sE/default.jpg",
//                     "width": 120,
//                     "height": 90
//                 },
//                 "medium": {
//                     "url": "https://i.ytimg.com/vi/UBYnT8JY7sE/mqdefault.jpg",
//                     "width": 320,
//                     "height": 180
//                 },
//                 "high": {
//                     "url": "https://i.ytimg.com/vi/UBYnT8JY7sE/hqdefault.jpg",
//                     "width": 480,
//                     "height": 360
//                 }
//             },
//             "channelTitle": "acidburn950",
//             "liveBroadcastContent": "none",
//             "publishTime": "2010-07-25T07:29:15Z"
//         }
//     }
// ]
// }
