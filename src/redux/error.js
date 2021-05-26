import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isError: false,
  error: {},
};

/* eslint no-param-reassign: 0 */
export const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    clearError: () => initialState,
    failure: (state, action) => {
      state.isError = true;
      state.error = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { clearError, failure } = errorSlice.actions;

export default errorSlice.reducer;
