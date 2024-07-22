import { configureStore } from '@reduxjs/toolkit';
import { userApi, toastApi, criminalApi } from './services';

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
    [toastApi.reducerPath]: toastApi.reducer,
    [criminalApi.reducerPath]: criminalApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      userApi.middleware,
      toastApi.middleware,
      criminalApi.middleware
    ),
});
