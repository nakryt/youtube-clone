import axios from "axios";
import { firebaseConfig } from "../firebase";

const KEY = firebaseConfig.apiKey;

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 20,
    key: KEY,
  },
  headers: {},
});
