import { createSlice } from '@reduxjs/toolkit';

/* eslint no-param-reassign: 0 */
export const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    progress: 0,
  },
  reducers: {
    // increment is an action
    on: (state) => {
      state.progress += 1;
    },
    off: (state) => {
      state.progress -= 1;
    },
  },
});

export const { on, off } = progressSlice.actions;

export default progressSlice.reducer;
