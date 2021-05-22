import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  id: '',
  isLoggedIn: false,
  isLoggingIn: false,
  lastName: '',
  username: '',
};

/* eslint no-param-reassign: 0 */
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // increment is an action
    loginAttempt: (state) => {
      state.isLoggingIn = true;
    },
    loginFailure: () => initialState,
    loginSuccess: (state, action) => {
      state.firstName = action.payload.firstName;
      // eslint-disable-next-line no-underscore-dangle
      state.id = action.payload._id;
      state.isLoggedIn = true;
      state.isLoggingIn = false;
      state.lastName = action.payload.lastName;
      state.username = action.payload.username;
    },
  },
});

export const { loginAttempt, loginFailure, loginSuccess } = authSlice.actions;

export default authSlice.reducer;
