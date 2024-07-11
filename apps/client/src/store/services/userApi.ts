import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    getUserById: builder.query<void, string>({
      query: (id) => `/users/${id}`,
    }),
    signUp: builder.mutation<User, User>({
      query: (User) => ({
        url: '/users',
        method: 'POST',
        body: User,
      }),
    }),
    updateUser: builder.mutation<User, User>({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: rest,
      }),
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
    }),
    login: builder.mutation<User, { armyId: string; password: string }>({
      query: ({ armyId, password }) => ({
        url: `users/login`,
        method: 'POST',
        body: { armyId, password },
      }),
    }),
  }),
});
export const {
  useGetUserByIdQuery,
  useGetAllUsersQuery,
  useSignUpMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useLoginMutation,
} = userApi;
