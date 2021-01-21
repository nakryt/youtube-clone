import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { VideoItem } from "../../types/video";
import { ChannelItem } from "../../types/channel";

type AllVideoState = {
  isLoading: boolean;
  error: string;
  data: VideoItem[];
  nextPageToken: string;
};

const initialState: AllVideoState = {
  isLoading: false,
  error: "",
  data: [],
  nextPageToken: "",
};

export const videoSlice = createSlice({
  name: "allVideo",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setVideoItems: (state, { payload }: PayloadAction<VideoItem[]>) => {
      if (payload.length === 0) {
        state.data = [];
        return;
      }
      payload.forEach((v) => {
        if (state.data.find((videoInState) => videoInState.id === v.id)) {
          return;
        }
        state.data.push(...payload);
      });
    },
    setNextPageToken: (state, { payload }: PayloadAction<string>) => {
      state.nextPageToken = payload;
    },
    setChannel: (
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
  },
});

export const {
  setIsLoading,
  setVideoItems,
  setError,
  setNextPageToken,
  setChannel,
} = videoSlice.actions;

export const isLoadingSelector = ({ video }: RootState) => video.all.isLoading;
export const errorSelector = ({ video }: RootState) => video.all.error;
export const videoSelector = ({ video }: RootState) => video.all.data;
export const nextPageTokenSelector = ({ video }: RootState) =>
  video.all.nextPageToken;

export default videoSlice.reducer;
