import { createSlice } from '@reduxjs/toolkit';

/* eslint no-param-reassign: 0 */
export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    // value is just an example placeholder could be any data name
    value: 0,
  },
  reducers: {
    // in green are the actions, the attached function is the reducer
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
