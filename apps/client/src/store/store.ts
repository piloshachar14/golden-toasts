import { configureStore } from '@reduxjs/toolkit';
import { userApi, toastApi } from './services';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [toastApi.reducerPath]: toastApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware, toastApi.middleware),
});
