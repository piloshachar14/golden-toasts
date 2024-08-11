import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SetCriminal, GetCriminal } from '../types';

export const criminalApi = createApi({
  reducerPath: 'criminalApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_USER_API }),
  tagTypes: ['Criminal'],
  endpoints: (builder) => ({
    getAllCriminals: builder.query<GetCriminal[], void>({
      query: () => '/criminals',
      providesTags: ['Criminal'],
    }),
    editCriminal: builder.mutation<SetCriminal, SetCriminal>({
      query: ({ id, ...rest }) => ({
        url: `/criminals/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Criminal'],
    }),
    deleteCriminal: builder.mutation<void, string>({
      query: (id) => ({
        url: `/criminals/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Criminal'],
    }),
    SetCriminal: builder.mutation<void, Omit<SetCriminal, 'id'>>({
      query: (criminal) => ({
        url: '/criminals',
        method: 'POST',
        body: criminal,
      }),
      invalidatesTags: ['Criminal'],
    }),
    getCriminalById: builder.query<GetCriminal, string>({
      query: (id) => `/criminals/${id}`,
      providesTags: ['Criminal'],
    }),
  }),
});
export const {
  useGetCriminalByIdQuery,
  useGetAllCriminalsQuery,
  useEditCriminalMutation,
  useDeleteCriminalMutation,
  useSetCriminalMutation,
} = criminalApi;
