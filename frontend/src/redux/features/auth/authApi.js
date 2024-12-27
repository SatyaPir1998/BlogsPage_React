import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api/auth",
        credentials: "include",
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
          query: (newUser) => ({
            url: "/register",
            method: "POST",
            body: newUser,
          }),
        }),
        loginUser: builder.mutation({
          query: (credentials) => ({
            url: "/login",
            method: "POST",
            body: credentials,
          }),
        }),
        logoutUser: builder.mutation({
          query: () => ({
            url: "/logout",
            method: "POST",
          }),
        }),
        getUser: builder.query({
          query: () => ({
            url: "/users",
            method: "GET",
          }),
          refetchOnMount: true,
          invalidatesTags: ["User"],
        }),
        deleteUser: builder.mutation({
          query: (userId) => ({
            url: `/users/${userId}`,
            method: "DELETE",
          }),
          invalidatesTags: ["User"],
        }),
        updateUserRole: builder.mutation({
          query: ({ userId, role }) => ({
            url: `/users/${userId}`,
            method: "PUT",
            body: { role },
          }),
          refetchOnMount: true,
          invalidatesTags: ["User"],
        }),
      }),
    });
    
    export const {
      useRegisterUserMutation,
      useLoginUserMutation,
      useLogoutUserMutation,
      useGetUserQuery,
      useDeleteUserMutation,
      useUpdateUserRoleMutation,
    } = authApi;
    
    export default authApi;
    