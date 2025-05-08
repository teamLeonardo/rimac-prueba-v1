import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ModalState {
  openPlans: boolean
}

const initialState: ModalState = {
  openPlans: false,
}

const plansStateSlice = createSlice({
  name: 'plansState',
  initialState,
  reducers: {
    setOpenPlans: (state, action: PayloadAction<boolean>) => {
      state.openPlans = action.payload
    },
  },
})

// Exportar acciones y reducer
export const { setOpenPlans } = plansStateSlice.actions
export default plansStateSlice.reducer

// Selector para obtener el estado 'open'
export const selectIsOpenPlans = (state: { plansState: ModalState }) => state.plansState.openPlans
