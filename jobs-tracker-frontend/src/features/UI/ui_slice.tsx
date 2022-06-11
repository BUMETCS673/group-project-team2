import { createSlice } from '@reduxjs/toolkit'

interface UIState {
  basicModalOpen: boolean
}

const initialState: UIState = {
  basicModalOpen: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openBasicModal(state) {
      state.basicModalOpen = true
    },
    closeBasicModal(state) {
      state.basicModalOpen = false
    },
  },
})
export const { openBasicModal, closeBasicModal } = uiSlice.actions
export default uiSlice.reducer
