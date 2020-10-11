import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.user += action.payload;
    },
  },
});

export const { setChannelId } = appSlice.actions;

export const selectChannelId = (state) => state.user.channelId;
export const selectChannelName = (state) => state.user.channelName;

export default appSlice.reducer;
