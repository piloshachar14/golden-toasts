import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Criminal } from '../types';

export const criminalApi = createApi({
  reducerPath: 'criminalApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_USER_API }),
  tagTypes: ['Criminal'],
  endpoints: (builder) => ({
    getAllCriminals: builder.query<Criminal[], void>({
      query: () => '/criminals',
      providesTags: ['Criminal'],
    }),
    editCriminal: builder.mutation<Criminal, Criminal>({
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
    createCriminal: builder.mutation<void, Omit<Criminal, 'id'>>({
      query: (criminal) => ({
        url: '/criminals',
        method: 'POST',
        body: criminal,
      }),
      invalidatesTags: ['Criminal'],
    }),
  }),
});
export const {
  useGetAllCriminalsQuery,
  useEditCriminalMutation,
  useDeleteCriminalMutation,
  useCreateCriminalMutation,
} = criminalApi;
