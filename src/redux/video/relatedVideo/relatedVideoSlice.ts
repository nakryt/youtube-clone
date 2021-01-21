import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { VideoItem } from "../../../types/video";
import { ChannelItem } from "../../../types/channel";
import { Statistics } from "../../../types/types";

type VideoRecommendedState = {
  data: VideoItem[];
  nextPageToken: string;
  isLoading: boolean;
  error: string;
  regionCode: string;
};

const initialState: VideoRecommendedState = {
  data: [],
  nextPageToken: "",
  isLoading: false,
  error: "",
  regionCode: "",
};

export const videoRelatedSlice = createSlice({
  name: "videoRelated",
  initialState,
  reducers: {
    setRelatedVideoIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setRelatedVideoError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setRelatedVideoItems: (state, { payload }: PayloadAction<VideoItem[]>) => {
      state.data = payload;
    },
    setRelatedVideoNextPageToken: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      state.nextPageToken = payload;
    },
    setRelatedVideoChannel: (
      state,
      { payload }: PayloadAction<{ videoId: string; channel: ChannelItem }>
    ) => {
      state.data = state.data.map((v) => {
        if (v.id === payload.videoId) {
          return { ...v, channel: payload.channel };
        }
        return v;
      });
    },
    setRelatedVideoStatistics: (
      state,
      { payload }: PayloadAction<{ videoId: string; statistics: Statistics }>
    ) => {
      state.data = state.data.map((v) => {
        if (v.id === payload.videoId) {
          return { ...v, statistics: payload.statistics };
        }
        return v;
      });
    },
    setRegionCode: (state, { payload }: PayloadAction<string>) => {
      state.regionCode = payload;
    },
  },
});

export const {
  setRelatedVideoChannel,
  setRelatedVideoItems,
  setRelatedVideoNextPageToken,
  setRelatedVideoError,
  setRelatedVideoIsLoading,
  setRegionCode,
  setRelatedVideoStatistics,
} = videoRelatedSlice.actions;

export const relatedVideoSelector = ({ video }: RootState) =>
  video.related.data;
export const relatedVideoNextPageTokenSelector = ({ video }: RootState) =>
  video.related.nextPageToken;

export default videoRelatedSlice.reducer;
