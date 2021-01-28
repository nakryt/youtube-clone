import axios from "./axios";
import { CommentResponse } from "../types/comment";

export const getComments = async (videoId: string) => {
  return (
    await axios.get("/commentThreads", {
      params: {
        part: "id,replies,snippet",
        videoId,
        maxResults: 50,
      },
    })
  ).data as CommentResponse;
};
