import { AppThunk } from "../store";
import videoAPI from "../../api/videoAPI";
import { setQuery, setFilter, setItems, setNextPageToken } from "./searchSlice";
import { VideoItem } from "../../types/video";
import { serializeVideoData } from "../../utils";

export const setSearchQuery = (query: string): AppThunk => async (dispatch) => {
  dispatch(setQuery(query));
};
export const setSearchFilter = (filter: string): AppThunk => async (
  dispatch
) => {
  dispatch(setFilter(filter));
};

export const getSearchedVideos = (): AppThunk => async (dispatch, getState) => {
  const { search } = getState();
  try {
    const data = await videoAPI.search(search.query);
    dispatch(setNextPageToken(data.nextPageToken));

    const videoItems = data.items.map(async (item) => {
      const videoResponse = await videoAPI.getVideo(item.id.videoId);
      const video = serializeVideoData(videoResponse.items);
      const videoData = video.map(async (v) => {
        const channelData = await videoAPI.getChannel(v.channel.id);
        return { ...v, channel: channelData.items[0] };
      });

      const videoDataResponse = await Promise.all(videoData);
      return videoDataResponse[0];
    });

    const videoItemsResult = (await Promise.all(videoItems)) as VideoItem[];
    // console.log(videoItemsResult);
    dispatch(setItems(videoItemsResult));
  } catch (e) {}
};

export const setSearchDefaultValues = (): AppThunk => async (dispatch) => {
  dispatch(setSearchQuery(""));
  dispatch(setSearchFilter(""));
  // dispatch(setItems([]))
};
