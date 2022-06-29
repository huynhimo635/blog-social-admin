import { createSlice } from '@reduxjs/toolkit'

const initialData = {
  dataForList: null
}

const categorySlice = createSlice({
  name: 'category',
  initialData,
  reducers: {
    setDataForList: (state, action) => {
      state.dataForList = action.payload
    }
  }
})

export const { setDataForList } = categorySlice.actions
export default categorySlice.reducer
