import { all, call, put, takeLatest } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { fetchProducts } from "../../services/api";
import { productsSlice } from "./products.reducer";

export function* getProductsInfoSaga(
  action: ReturnType<typeof productsSlice.actions.getProducts>
): SagaIterator {
  try {
    const products = yield call(fetchProducts);
    yield put(productsSlice.actions.getProductsSuccess(products));
  } catch (error) {
    yield put(
      productsSlice.actions.getProductsFailure({
        error: new Error(error as string).message,
      })
    );
  }
}

// Watchers
function* watchProductsInfo() {
  yield takeLatest(productsSlice.actions.getProducts.type, getProductsInfoSaga);
}

/**
 * Products Sagas
 */
function* productsSaga() {
  yield all([watchProductsInfo()]);
}

export default productsSaga;
