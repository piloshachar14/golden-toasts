import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api' }),
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => '/users',
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
    }),
    createUser: builder.mutation<void, User>({
      query: (User) => ({
        url: '/users',
        method: 'POST',
        body: User,
      }),
    }),
    updateUser: builder.mutation<void, User>({
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
  }),
});
export const {
  useGetUserByIdQuery,
  useGetAllUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
