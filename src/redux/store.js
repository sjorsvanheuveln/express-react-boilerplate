import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter';
import progressReducer from './progress';
import authReducer from './auth';
import errorReducer from './error';

function useLogger() {
  if (process.env.NODE_ENV !== 'production') {
    return (getDefaultMiddleware) => getDefaultMiddleware().concat(logger);
  }
  return (getDefaultMiddleware) => getDefaultMiddleware();
}

export default configureStore({
  reducer: {
    counter: counterReducer,
    progress: progressReducer,
    auth: authReducer,
    error: errorReducer,
    // add new reducers here
  },
  middleware: useLogger(),
});
