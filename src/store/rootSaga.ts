import { all } from "redux-saga/effects";

import productsSaga from "./products/products.saga";
import applicationsSaga from "./applications/applications.saga";

export default function* rootSaga() {
  yield all([productsSaga(), applicationsSaga()]);
}
