import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Criminal } from '../types';

export const criminalApi = createApi({
  reducerPath: 'criminalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getAllPersonaNonGratas: builder.query<Criminal[], void>({
      query: () => '/AllPersonaNonGratas',
    }),
    getAllNonPersonaNonGratas: builder.query<Criminal[], void>({
      query: () => 'AllNonPersonaNonGratas',
    }),
  }),
});
export const {
  useGetAllNonPersonaNonGratasQuery,
  useGetAllPersonaNonGratasQuery,
} = criminalApi;
