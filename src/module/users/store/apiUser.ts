import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../types/responseUser'

// Define la API base
export const apiUser = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }), // Cambia la URL base según tu API
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => '/user.json',
    }),
  }),
})

export const { useGetUserQuery } = apiUser
