import { createSlice } from '@reduxjs/toolkit'
import produce from 'immer'

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
    },
    setErrorMessage: (state, action) => {
      state.value = produce(state.value, (draft) => {
        draft.open = true
        draft.success = false
        draft.message = action.payload
      })
    },
    setSuccessMessage: (state, action) => {
      state.value = produce(state.value, (draft) => {
        draft.open = true
        draft.success = true
        draft.message = action.payload
      })
    }
  }
})

export const { setPopup, resetPopup, setErrorMessage, setSuccessMessage } = popupSlice.actions
export default popupSlice.reducer
