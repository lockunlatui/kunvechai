import { all } from "redux-saga/effects";

import home from "@kun-containers/Home/redux/saga";

export default function* rootSaga() {
  yield all([home()]);
}
