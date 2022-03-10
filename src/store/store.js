import { configureStore } from '@reduxjs/toolkit'

import loadingSlice from './loadingSlice'
import popupSlice from './popupSlice'
import authSlice from './authSlice'

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    popup: popupSlice,
    auth: authSlice
  }
})
