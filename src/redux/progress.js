import { createSlice } from '@reduxjs/toolkit';

/* eslint no-param-reassign: 0 */
export const progressSlice = createSlice({
  name: 'progress',
  initialState: {
    status: false,
  },
  reducers: {
    // increment is an action
    on: (state) => {
      state.status = true;
    },
    off: (state) => {
      state.status = false;
    },
  },
});

export const { on, off } = progressSlice.actions;

export default progressSlice.reducer;
