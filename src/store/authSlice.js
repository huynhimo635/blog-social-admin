import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn:
    Boolean(localStorage.getItem('token')) && localStorage.getItem('token') !== 'undefined'
}

const authSlice = createSlice({
  name: 'auth',
  initialState: { value: { initialState } },
  reducers: {}
})

export default authSlice.reducer
