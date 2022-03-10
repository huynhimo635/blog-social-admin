import { createSlice } from '@reduxjs/toolkit'

const initialValue = {
  open: false,
  success: false,
  message: ''
}

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    value: initialValue
  },
  reducers: {
    setPopup: (state, action) => {
      state.value = action.payload
    },
    resetPopup: (state) => {
      state.value = initialValue
    }
  }
})

export const { setPopup, resetPopup } = popupSlice.actions
export default popupSlice.reducer
