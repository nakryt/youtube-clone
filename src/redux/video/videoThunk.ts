import { AppThunk } from "../store";
import videoAPI from "../../api/videoAPI";
import {
  setVideoItems,
  setNextPageToken,
  setChannel,
  setIsLoading,
} from "./videoSlice";
import { setError } from "../indicators";
import { serializeVideoData } from "../../utils";
import { VideoResponse } from "../../types/video";
import { RelatedVideoResponse } from "../../types/relatedVideos";

export const setVideoChannelThumbnails = (): AppThunk => async (
  dispatch,
  getState
) => {
  const { video } = getState();
  try {
    video.all.data.forEach(async ({ channel, id }) => {
      const data = await videoAPI.getChannel(channel.id);
      dispatch(
        setChannel({
          videoId: id,
          channel: data.items[0],
        })
      );
    });
  } catch (e) {}
};

export const getVideos = (categoryId?: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { video } = getState();
  try {
    if (video.all.isLoading) return;
    dispatch(setIsLoading(true));

    const data = await videoAPI.getVideos(video.all.nextPageToken, categoryId);
    dispatch(setVideoItems(serializeVideoData(data)));
    dispatch(setNextPageToken(data.nextPageToken));
    dispatch(setVideoChannelThumbnails());
    dispatch(setIsLoading(false));
  } catch (e) {
    dispatch(setIsLoading(false));
    console.log("ERROR:", e);
  }
};
export const getVideo = (id: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { video } = getState();
  try {
    if (video.all.isLoading) return;
    dispatch(setIsLoading(true));
    const data = await videoAPI.getVideo(id);
    dispatch(setVideoItems(serializeVideoData(data)));
    dispatch(setVideoChannelThumbnails());
    dispatch(setIsLoading(false));
  } catch (e) {
    dispatch(setIsLoading(false));
    // dispatch(setError(e.message))
  }
};

export const getRelatedVideos = (videoId: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { video } = getState();
  try {
    const currentVideo = video.all.data.find((v) => v.id === videoId);
    const categoryId = currentVideo?.categoryId;
    // dispatch(setVideoItems([]));
    // dispatch(setNextPageToken(""));

    dispatch(getVideo(videoId));
    dispatch(getVideos(categoryId));
  } catch (e) {
    dispatch(setIsLoading(false));
    console.log(e.message);
  }
};
