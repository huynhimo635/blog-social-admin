import { createSlice } from '@reduxjs/toolkit'

const initialState =
  Boolean(localStorage.getItem('token')) && localStorage.getItem('token') !== 'undefined'

const authSlice = createSlice({
  name: 'auth',
  initialState: { value: initialState },
  reducers: {
    checkAuth: (state) => {
      state.value =
        Boolean(localStorage.getItem('token')) && localStorage.getItem('token') !== 'undefined'
    }
  }
})

export const { checkAuth } = authSlice.actions
export default authSlice.reducer
