import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Criminal } from '../types';

export const criminalApi = createApi({
  reducerPath: 'criminalApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getAllCriminals: builder.query<Criminal[], void>({
      query: () => '/criminals',
    }),
  }),
});
export const { useGetAllCriminalsQuery } = criminalApi;
