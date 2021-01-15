import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Indicators {
  loading: boolean;
  error: string;
}

const initialState: Indicators = {
  loading: false,
  error: "",
};

export const indicatorsSlice = createSlice({
  name: "indicators",
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    setError: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
  },
});

export const { setIsLoading, setError } = indicatorsSlice.actions;

export const isLoadingSelector = ({ indicators }: RootState) =>
  indicators.loading;
export const errorSelector = ({ indicators }: RootState) => indicators.error;

export default indicatorsSlice.reducer;
