import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './services';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
});
