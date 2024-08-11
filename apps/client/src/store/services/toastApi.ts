import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { LeaderboardUser, Toast } from '..';
export const toastApi = createApi({
  reducerPath: 'toastApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_USER_API }),
  tagTypes: ['Toast'],
  endpoints: (builder) => ({
    getAllToasts: builder.query<Toast[], void>({
      query: () => '/toasts',
      providesTags: ['Toast'],
    }),
    getToastById: builder.query<Toast, string>({
      query: (id) => `/toasts/${id}`,
      providesTags: ['Toast'],
    }),
    getAllPendingToasts: builder.query<Toast[], void>({
      query: () => '/toasts/pending',
      providesTags: ['Toast'],
    }),
    getAllHappened: builder.query<Toast[], void>({
      query: () => '/toasts/happened',
      providesTags: ['Toast'],
    }),
    getLeadeboard: builder.query<LeaderboardUser[], void>({
      query: () => '/toasts/leaderboard',
      providesTags: ['Toast'],
    }),
    getToastInPeriod: builder.query<number, void>({
      query: () => '/toasts/current-period-toasts',
      providesTags: ['Toast'],
    }),
    getRecordPeiod: builder.query<number, void>({
      query: () => '/toasts/record-period',
      providesTags: ['Toast'],
    }),
    createToast: builder.mutation<Toast, Toast>({
      query: (toast) => ({
        url: '/toasts',
        method: 'POST',
        body: toast,
      }),
      invalidatesTags: ['Toast'],
    }),
    getHaapaendUserToasts: builder.query<Toast[], string>({
      query: (id) => `/toasts/happenedUser/${id}`,
      providesTags: ['Toast'],
    }),
    getAllToastsByUser: builder.query<Toast[], string>({
      query: (id) => `toasts/user/${id}`,
      providesTags: ['Toast'],
    }),
    editToast: builder.mutation<Toast, Toast>({
      query: ({ id, ...rest }) => ({
        url: `/toasts/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Toast'],
    }),
  }),
});

export const {
  useGetHaapaendUserToastsQuery,
  useGetAllHappenedQuery,
  useGetAllPendingToastsQuery,
  useGetAllToastsQuery,
  useGetLeadeboardQuery,
  useGetToastInPeriodQuery,
  useGetToastByIdQuery,
  useGetRecordPeiodQuery,
  useCreateToastMutation,
  useGetAllToastsByUserQuery,
  useEditToastMutation,
} = toastApi;
