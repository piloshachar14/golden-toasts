import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Toast } from '..';
export const toastApi = createApi({
  reducerPath: 'toastApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_USER_API }),
  endpoints: (builder) => ({
    getAllToasts: builder.query<Toast[], void>({
      query: () => '/toasts',
    }),
    getToastById: builder.query<Toast, string>({
      query: (id) => `/toasts/${id}`,
    }),
    getLeadeboard: builder.query<Toast[], void>({
      query: () => '/toasts/leaderboard',
    }),
    getToastInPeriod: builder.query<number, void>({
      query: () => '/toasts/current-period-toasts',
    }),
    getRecordPeiod: builder.query<number, void>({
      query: () => '/toasts/record-period',
    }),
    createToast: builder.mutation<Toast, Toast>({
      query: (toast) => ({
        url: '/toasts',
        method: 'POST',
        body: toast,
      }),
    }),
  }),
});

export const {
  useGetAllToastsQuery,
  useGetLeadeboardQuery,
  useGetToastInPeriodQuery,
  useGetToastByIdQuery,
  useGetRecordPeiodQuery,
  useCreateToastMutation,
} = toastApi;
