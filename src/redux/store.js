import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import counterReducer from './counter';
import progressReducer from './progress';
import authReducer from './auth';

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
    // add new reducers here
  },
  middleware: useLogger(),
});
