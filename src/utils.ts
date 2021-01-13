import numeral from "numeral";
import firebase from "firebase";
import { User } from "./types/user";

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
