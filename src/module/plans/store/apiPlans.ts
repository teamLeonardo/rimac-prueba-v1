import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ResponsePlans } from '../types/responsePlans'

// Define la API base
export const apiPlans = createApi({
  reducerPath: 'plans',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }), // Cambia la URL base según tu API
  endpoints: (builder) => ({
    getAllPlans: builder.query<ResponsePlans, void>({
      query: () => '/plans.json',
    }),
  }),
})

export const { useGetAllPlansQuery } = apiPlans
