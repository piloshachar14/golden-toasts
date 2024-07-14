import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Toast } from '../../types';
import { get } from 'http';

export const toastApi = createApi({
  reducerPath: 'toastApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
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
  }),
});
export const {
  useGetAllToastsQuery,
  useGetLeadeboardQuery,
  useGetToastInPeriodQuery,
  useGetToastByIdQuery,
  useGetRecordPeiodQuery,
} = toastApi;
