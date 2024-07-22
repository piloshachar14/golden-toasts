import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Criminal } from '../types';

export const criminalApi = createApi({
  reducerPath: 'criminalApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_USER_API }),
  endpoints: (builder) => ({
    getAllCriminals: builder.query<Criminal[], void>({
      query: () => '/criminals',
    }),
    getAllRegularCriminals: builder.query<Criminal[], void>({
      query: () => 'criminals/regulars',
    }),
    getAllPersonaNonGratas: builder.query<Criminal[], void>({
      query: () => 'criminals/PersonaNonGratas',
    }),
  }),
});
export const {
  useGetAllCriminalsQuery,
  useGetAllPersonaNonGratasQuery,
  useGetAllRegularCriminalsQuery,
} = criminalApi;
