import numeral from "numeral";
import firebase from "firebase";
import { User } from "./types/user";
import { VideoItem, VideoResponse } from "./types/video";
import { SearchResponse } from "./types/search";
import { ChannelItem } from "./types/channel";
import { Statistics } from "./types/types";

export const prettyPrintStat = (stat: number | string) =>
  stat ? `${numeral(stat).format("0.0a")}` : "0";

export const serializeUserData = (userData: firebase.User) =>
  ({
    displayName: userData.displayName,
    email: userData.email,
    emailVerified: userData.emailVerified,
    photoURL: userData.photoURL,
    refreshToken: userData.refreshToken,
  } as User);

// const thumbnail = {
//   url: '',
//   width: 0,
//   height: 0,
// }
// const channelThumbnails = {
//   default: thumbnail,
//   medium: thumbnail,
//   high: thumbnail
// }
export const serializeVideoData = (
  response: VideoResponse | SearchResponse
): VideoItem[] => {
  if (response.kind === "youtube#videoListResponse") {
    return response.items.map((v) => ({
      id: v.id,
      title: v.snippet.title,
      description: v.snippet.description,
      publishedAt: v.snippet.publishedAt,
      thumbnails: v.snippet.thumbnails,
      channel: {
        id: v.snippet.channelId,
        snippet: { title: v.snippet.channelTitle },
      },
      statistics: v.statistics,
      tags: v.snippet.tags,
      categoryId: v.snippet.categoryId,
    })) as VideoItem[];
  } else {
    return response.items.map((v) => {
      return {
        id: v.id?.videoId,
        title: v.snippet?.title,
        description: v.snippet?.description,
        publishedAt: v.snippet?.publishedAt,
        thumbnails: v.snippet?.thumbnails,
        channel: {
          id: v.snippet?.channelId,
          snippet: {
            title: v.snippet?.channelTitle,
          },
        } as ChannelItem,
        statistics: {} as Statistics,
        tags: [],
        categoryId: "",
      };
    }) as VideoItem[];
  }
};

export const numberWithSpaces = (num: number | string) => {
  const arr = String(num).split("").reverse();
  const arrWithSpace = arr.map((s, index) => {
    if ((index + 1) % 3 === 0) {
      return ` ${s}`;
    }
    return s;
  });
  return arrWithSpace.reverse();
};
