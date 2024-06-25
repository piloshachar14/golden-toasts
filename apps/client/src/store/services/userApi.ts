import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getUserById: builder.query<User, string>({
      query: (id) => `/${id}`,
    }),
  }),
});
export const { useGetUserByIdQuery } = userApi;
