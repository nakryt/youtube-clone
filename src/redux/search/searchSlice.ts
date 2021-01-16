import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { VideoItem } from "../../types/video";

type SearchState = {
  query: string;
  filter: string;
  items: VideoItem[];
  nextPageToken: string;
};

const initialState: SearchState = {
  query: "",
  filter: "",
  items: [],
  nextPageToken: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, { payload }: PayloadAction<string>) => {
      state.query = payload;
    },
    setFilter: (state, { payload }: PayloadAction<string>) => {
      state.filter = payload;
    },
    setItems: (state, { payload }: PayloadAction<VideoItem[]>) => {
      state.items = payload;
    },
    setNextPageToken: (state, { payload }: PayloadAction<string>) => {
      state.nextPageToken = payload;
    },
  },
});

export const {
  setQuery,
  setFilter,
  setItems,
  setNextPageToken,
} = searchSlice.actions;

export const searchQuerySelector = ({ search }: RootState) => search.query;
export const filterSelector = ({ search }: RootState) => search.filter;
export const searchItemsSelector = ({ search }: RootState) => search.items;

export default searchSlice.reducer;
