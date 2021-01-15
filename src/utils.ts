import numeral from "numeral";
import firebase from "firebase";
import { User } from "./types/user";
import { VideoItem, Item } from "./types/video";

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

export const serializeVideoData = (videoItems: Item[]) =>
  videoItems.map((v) => ({
    id: v.id,
    title: v.snippet.title,
    description: v.snippet.description,
    publishedAt: v.snippet.publishedAt,
    thumbnails: v.snippet.thumbnails,
    channel: {
      id: v.snippet.channelId,
      title: v.snippet.channelTitle,
    },
    statistics: v.statistics,
    tags: v.snippet.tags,
  })) as VideoItem[];

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
