import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  firstName: '',
  id: '',
  isLoggedIn: false,
  isLoggingIn: false,
  lastName: '',
  username: '',
};

function loginState(state, action) {
  state.firstName = action.payload.firstName;
  // eslint-disable-next-line no-underscore-dangle
  state.id = action.payload._id;
  state.isLoggedIn = true;
  state.isLoggingIn = false;
  state.lastName = action.payload.lastName;
  state.username = action.payload.username;
}

export const login = createAsyncThunk(
  'auth/login',
  (userData) => fetch(
    'api/authentication/login',
    {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'same-origin',
    },
  ).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }).then((json) => json),
);

export const logout = createAsyncThunk(
  'auth/logout', () => fetch(
    'api/authentication/logout',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  ).then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }).then((json) => json),
);

/* eslint no-param-reassign: 0 */
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // increment is an action
    logoutFailure: (state) => state,
    logoutSuccess: () => initialState,
    sessionCheckFailure: () => initialState,
    sessionCheckSuccess: (state, action) => loginState(state, action),
  },
  extraReducers: {
    [login.pending]: (state) => { state.isLoggingIn = true; },
    [login.rejected]: () => initialState,
    [login.fulfilled]: (state, action) => loginState(state, action),
    [logout.pending]: () => console.log('trigger pending'),
    [logout.rejected]: (state) => state,
    [logout.fulfilled]: () => initialState,
  },
});

export const {
  loginAttempt,
  loginFailure,
  loginSuccess,
  logoutFailure,
  logoutSuccess,
  sessionCheckFailure,
  sessionCheckSuccess,
} = authSlice.actions;

export default authSlice.reducer;
