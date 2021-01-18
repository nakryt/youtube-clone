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
//
// const res = {
//   kind: "youtube#video",
//   etag: "hOWD4w_uekM0aVGTefYoCJFjA1I",
//   id: "5Fg9oZk-5uA",
//   snippet: {
//     publishedAt: "2021-01-09T21:01:25Z",
//     channelId: "UCX6OQ3DkcsbYNE6H8uQQuVA",
//     title: "I Bought Everything In 5 Stores",
//     description:
//       "Please subscribe this video costed so much money\nBuy Merch Here!! - https://shopmrbeast.com/\nBeast Philanthropy - https://www.youtube.com/channel/UCAiLfjNXkNv24uhpzUgPa6A\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeastYT\n•  Instagram - https://www.instagram.com/mrbeast\n--------------------------------------------------------------------",
//     thumbnails: {
//       default: {
//         url: "https://i.ytimg.com/vi/5Fg9oZk-5uA/default.jpg",
//         width: 120,
//         height: 90,
//       },
//       medium: {
//         url: "https://i.ytimg.com/vi/5Fg9oZk-5uA/mqdefault.jpg",
//         width: 320,
//         height: 180,
//       },
//       high: {
//         url: "https://i.ytimg.com/vi/5Fg9oZk-5uA/hqdefault.jpg",
//         width: 480,
//         height: 360,
//       },
//       standard: {
//         url: "https://i.ytimg.com/vi/5Fg9oZk-5uA/sddefault.jpg",
//         width: 640,
//         height: 480,
//       },
//       maxres: {
//         url: "https://i.ytimg.com/vi/5Fg9oZk-5uA/maxresdefault.jpg",
//         width: 1280,
//         height: 720,
//       },
//     },
//     channelTitle: "MrBeast",
//     categoryId: "24",
//     liveBroadcastContent: "none",
//     localized: {
//       title: "I Bought Everything In 5 Stores",
//       description:
//         "Please subscribe this video costed so much money\nBuy Merch Here!! - https://shopmrbeast.com/\nBeast Philanthropy - https://www.youtube.com/channel/UCAiLfjNXkNv24uhpzUgPa6A\n\nSUBSCRIBE OR I TAKE YOUR DOG\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗\n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣\n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝\n\n----------------------------------------------------------------\nfollow all of these or i will kick you\n• Facebook - https://www.facebook.com/MrBeast6000/\n• Twitter - https://twitter.com/MrBeastYT\n•  Instagram - https://www.instagram.com/mrbeast\n--------------------------------------------------------------------",
//     },
//     defaultAudioLanguage: "en-US",
//   },
//   statistics: {
//     viewCount: "30906449",
//     likeCount: "2674483",
//     dislikeCount: "17733",
//     favoriteCount: "0",
//     commentCount: "175443",
//   },
// };
