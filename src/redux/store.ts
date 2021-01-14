import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import videoRecommended from "./video/recommended/videoRecommendedSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    video: videoRecommended,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
