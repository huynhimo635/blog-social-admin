import { all } from 'redux-saga/effects'

import { initialDataSaga } from './initialDataSaga'

export default function* rootSaga() {
  yield all([initialDataSaga()])
}
