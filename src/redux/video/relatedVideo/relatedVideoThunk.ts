import { AppThunk } from "../../store";
import videoAPI from "../../../api/videoAPI";
import {
  setRelatedVideoChannel,
  setRelatedVideoItems,
  setRelatedVideoNextPageToken,
  setRelatedVideoError,
  setRelatedVideoIsLoading,
  setRegionCode,
  setRelatedVideoStatistics,
} from "./relatedVideoSlice";

import { serializeVideoData } from "../../../utils";
import { RelatedVideoResponse } from "../../../types/relatedVideos";

export const setVideoChannelThumbnails = (): AppThunk => async (
  dispatch,
  getState
) => {
  const { video } = getState();
  try {
    video.related.data.forEach(async ({ channel, id }) => {
      const data = await videoAPI.getChannel(channel.id);
      dispatch(
        setRelatedVideoChannel({
          videoId: id,
          channel: data.items[0],
        })
      );
    });
  } catch (e) {}
};

export const setVideoStatistics = (): AppThunk => async (
  dispatch,
  getState
) => {
  const { video } = getState();
  try {
    video.related.data.forEach(async ({ id }) => {
      const data = await videoAPI.getVideoStatistics(id);
      dispatch(
        setRelatedVideoStatistics({
          videoId: id,
          statistics: data,
        })
      );
    });
  } catch (e) {}
};

export const getRelatedVideos = (videoId: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { video } = getState();
  try {
    if (video.related.isLoading) return;
    dispatch(setRelatedVideoIsLoading(true));

    const data = await videoAPI.getRelatedVideos(videoId);
    dispatch(setRegionCode(data.regionCode));

    dispatch(setRelatedVideoItems(serializeVideoData(data)));
    dispatch(setRelatedVideoNextPageToken(data.nextPageToken));
    dispatch(setVideoStatistics());
    dispatch(setVideoChannelThumbnails());

    dispatch(setRelatedVideoIsLoading(false));
  } catch (e) {
    dispatch(setRelatedVideoIsLoading(false));
    console.log("ERROR:", e);
  }
};
