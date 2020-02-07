import { HOME_LOAD } from "./actionType";
import { all, put } from "redux-saga/effects"

function* helloSaga () {
  yield put({
    type: HOME_LOAD
  })
  console.log('Demo run Saga')
}

export default function* homeSaga() {
  yield all([
    helloSaga()
  ])
}