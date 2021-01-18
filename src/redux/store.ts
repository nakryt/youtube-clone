import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import indicators from "./indicators";
import userReducer from "./user/userSlice";
import videoRecommended from "./video/videoSlice";
import search from "./search/searchSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoRecommended,
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
