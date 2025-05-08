// src/store.ts
import { configureStore } from '@reduxjs/toolkit'
import { apiPlans } from '@/module/plans/store/apiPlans'
import plansStateSlice from '@/module/plans/store/slicePlans'
import { apiUser } from '@/module/users/store/apiUser'
import sliceUser from '@/module/users/store/sliceUser'

export const store = configureStore({
  reducer: {
    // Añade el slice de la API a la store
    [apiPlans.reducerPath]: apiPlans.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    plansState: plansStateSlice,
    userState: sliceUser,
  },
  // Añade middleware para habilitar la caché y funcionalidades de RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiPlans.middleware).concat(apiUser.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
