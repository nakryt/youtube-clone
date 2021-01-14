import { AppThunk } from "../../store";
import videoAPI from "../../../api/videoAPI";
import {
  setVideoItems,
  setNextPageToken,
  setChannelThumbnail,
  setIsLoading,
} from "./videoRecommendedSlice";
import { serializeVideoData } from "../../../utils";

export const setVideoChannelThumbnails = (): AppThunk => async (
  dispatch,
  getState
) => {
  const { video } = getState();
  try {
    video.data &&
      video.data.forEach(async ({ channel, id }) => {
        const data = await videoAPI.getChannel(channel.id);
        dispatch(
          setChannelThumbnail({
            videoId: id,
            thumbnail: data.items[0].snippet.thumbnails.default.url,
          })
        );
      });
  } catch (e) {}
};

export const getVideos = (id?: string): AppThunk => async (
  dispatch,
  getState
) => {
  const { video } = getState();
  try {
    if (video.isLoading) return;
    dispatch(setIsLoading(true));
    const data = await videoAPI.getVideos(id, video.nextPageToken);
    await dispatch(setVideoItems(serializeVideoData(data.items)));
    dispatch(setNextPageToken(data.nextPageToken));
    await dispatch(setVideoChannelThumbnails());
    dispatch(setIsLoading(false));
  } catch (e) {
    dispatch(setIsLoading(false));
  }
};
