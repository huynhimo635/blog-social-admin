import { configureStore } from '@reduxjs/toolkit'

import loadingSlice from './loadingSlice'
import popupSlice from './popupSlice'
import authSlice from './authSlice'
import commonSlice from './commonSlice'
// import categorySlice from './categorySlice'

export const store = configureStore({
  reducer: {
    loading: loadingSlice,
    popup: popupSlice,
    auth: authSlice,
    common: commonSlice
    // category: categorySlice
  }
})
