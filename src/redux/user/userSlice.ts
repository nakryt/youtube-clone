import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from "../../types/user";

type UsersState = {
  isLoading: boolean;
  error: string;
  data: User | null;
};

const initialState: UsersState = {
  isLoading: true,
  error: "",
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    setUser: (state, { payload }: PayloadAction<User | null>) => {
      state.data = payload;
    },
  },
});

export const { setIsLoading, setUser, setError } = userSlice.actions;

export const isLoadingSelector = ({ user }: RootState) => user.isLoading;
export const errorSelector = ({ user }: RootState) => user.error;
export const userSelector = ({ user }: RootState) => user.data;

export default userSlice.reducer;
