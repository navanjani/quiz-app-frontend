import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  message: null,
  submitted: false,
};

export const appStateSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    appLoading: (state) => {
      state.loading = true;
    },
    appDoneLoading: (state) => {
      state.loading = false;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    clearMessage: (state, action) => {
      state.message = null;
    },
    checkSubmitted: (state) => {
      state.submitted = !state.submitted;
    },
  },
});

export const {
  appLoading,
  appDoneLoading,
  setMessage,
  clearMessage,
  checkSubmitted,
} = appStateSlice.actions;

export default appStateSlice.reducer;
