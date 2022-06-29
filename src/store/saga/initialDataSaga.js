import { createAction } from '@reduxjs/toolkit'
import { put, takeLatest } from 'redux-saga/effects'

// Api
import categoryApi from '../../api/category'

// Store
import { setDataForList as categoryData } from '../categorySlice'

// Actions
export const initialDataForCategory = createAction('initialData/category')

// Handling Function
function* getInitialDataForCategory() {
  const { data } = yield categoryApi.getAll()
  yield put(categoryData, data)
}

export function* initialDataSaga() {
  yield takeLatest(initialDataForCategory, getInitialDataForCategory)
}
