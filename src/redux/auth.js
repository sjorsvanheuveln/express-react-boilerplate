import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { off, on } from './progress';
import { failure } from './error';

const initialState = {
  firstName: '',
  id: '',
  isLoggedIn: false,
  isLoggingIn: false,
  lastName: '',
  username: '',
  email: '',
  registrationSucceeded: false,
};

function loginState(state, action) {
  state.firstName = action.payload.firstName;
  // eslint-disable-next-line no-underscore-dangle
  state.id = action.payload._id;
  // set login flag when user is defined for checksession!
  state.isLoggedIn = true;
  state.isLoggingIn = false;
  state.lastName = action.payload.lastName;
  state.username = action.payload.username;
  state.email = action.payload.email;
}

export const register = createAsyncThunk(
  'auth/register',
  (userData, { dispatch }) => {
    dispatch(on());
    return fetch(
      'api/authentication/register',
      {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
      },
    ).then((response) => {
      dispatch(off());
      if (!response.ok) {
        return dispatch(failure({ message: 'Registratie mislukt. Probeer opnieuws.' }));
      }
      return response.json();
    });
  },
);

export const login = createAsyncThunk(
  'auth/login',
  (userData, { dispatch }) => {
    dispatch(on());
    return fetch(
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
      dispatch(off());
      if (!response.ok) {
        return dispatch(failure({ message: 'Email of Wachtwoord niet correct. Probeer opnieuw.' }));
      }
      return response.json();
    });
  },
);

export const logout = createAsyncThunk(
  'auth/logout', (dispatch) => fetch(
    'api/authentication/logout',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  ).then((response) => {
    if (!response.ok) {
      return dispatch(failure({ message: 'Er ging iets mis met uitloggen. Probeer opnieuw.' }));
    }
    return response.json();
  }).then((json) => json),
);

export const checkSession = createAsyncThunk(
  'auth/checkSession', () => fetch(
    'api/authentication/checksession',
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
    registrationSuccessViewed: (state) => { state.registrationSucceeded = false; },
  },
  extraReducers: {
    [register.rejected]: (state) => state,
    [register.fulfilled]: (state, action) => {
      loginState(state, action);
      state.registrationSucceeded = true;
    },
    [login.pending]: (state) => { state.isLoggingIn = true; },
    [login.rejected]: () => initialState,
    [login.fulfilled]: (state, action) => {
      if (action.payload.username) { return loginState(state, action); }
      return initialState;
    },
    [logout.rejected]: (state) => state,
    [logout.fulfilled]: () => initialState,
    [checkSession.rejected]: () => initialState,
    [checkSession.fulfilled]: (state, action) => {
      if (action.payload.username) { return loginState(state, action); }
      return initialState;
    },
  },
});

export const {
  registrationSuccessViewed,
} = authSlice.actions;

export default authSlice.reducer;
