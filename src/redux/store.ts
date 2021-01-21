import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import indicators from "./indicators";
import userReducer from "./user/userSlice";
import allVideo from "./video/videoSlice";
import relatedVideo from "./video/relatedVideo/relatedVideoSlice";
import search from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: combineReducers({ all: allVideo, related: relatedVideo }),
    indicators,
    search,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
