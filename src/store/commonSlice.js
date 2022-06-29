import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  confirmState: {
    open: false,
    title: '',
    message: ''
  }
}

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    openConfirm: (state, { payload }) => {
      state.confirmState = { ...initialState, open: true, ...payload }
    },
    resetState: () => {
      return initialState
    }
  }
})

export const commonActions = commonSlice.actions
export default commonSlice.reducer
