import { AppThunk } from "../../store";
import videoAPI from "../../../api/videoAPI";
import {
  setVideoItems,
  setNextPageToken,
  setChannelThumbnail,
  setIsLoading,
} from "./videoRecommendedSlice";
import { setError } from "../../indicators";
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

export const getVideos = (): AppThunk => async (dispatch, getState) => {
  const { video } = getState();
  try {
    if (video.isLoading) return;
    dispatch(setIsLoading(true));
    const data = await videoAPI.getVideos(video.nextPageToken);
    await dispatch(setVideoItems(serializeVideoData(data.items)));
    dispatch(setNextPageToken(data.nextPageToken));
    await dispatch(setVideoChannelThumbnails());
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
    if (video.isLoading) return;
    dispatch(setIsLoading(true));
    const data = await videoAPI.getVideo(id);
    await dispatch(setVideoItems(serializeVideoData(data.items)));
    await dispatch(setVideoChannelThumbnails());
    dispatch(setIsLoading(false));
  } catch (e) {
    dispatch(setIsLoading(false));
    // dispatch(setError(e.message))
  }
};
