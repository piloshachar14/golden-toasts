import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from '../types';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_USER_API }),
  tagTypes: ['Users'],
  endpoints: (builder) => ({
    getAllUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['Users'],
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: ['Users'],
    }),
    signUp: builder.mutation<User, Omit<User, 'id'>>({
      query: (User) => ({
        url: '/users',
        method: 'POST',
        body: User,
      }),
      invalidatesTags: ['Users'],
    }),
    updateUser: builder.mutation<User, User>({
      query: ({ id, ...rest }) => ({
        url: `/users/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Users'],
    }),
    deleteUser: builder.mutation<void, string>({
      query: (id) => ({
        url: `/users/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Users'],
    }),
    login: builder.mutation<User, { armyId: string; password: string }>({
      query: ({ armyId, password }) => ({
        url: `users/login`,
        method: 'POST',
        body: { armyId, password },
      }),
      invalidatesTags: ['Users'],
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
  useLazyGetUserByIdQuery,
} = userApi;
