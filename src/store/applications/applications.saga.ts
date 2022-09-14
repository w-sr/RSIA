import { SagaIterator } from "redux-saga";
import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  createApplication,
  fetchApplications,
  updateApplication,
} from "../../services/api";
import { applicationsSlice } from "./applications.reducer";

export function* getApplicationsSaga(
  action: ReturnType<typeof applicationsSlice.actions.getApplications>
): SagaIterator {
  try {
    const applications = yield call(fetchApplications);
    yield put(
      applicationsSlice.actions.getApplicationsSuccess({
        productId: action.payload,
        applications,
      })
    );
  } catch (error) {
    yield put(
      applicationsSlice.actions.getApplicationsFailure({
        error: new Error(error as string).message,
      })
    );
  }
}

export function* createApplicationSaga(
  action: ReturnType<typeof applicationsSlice.actions.createApplication>
): SagaIterator {
  try {
    const application = yield call(createApplication, action.payload);
    yield put(
      applicationsSlice.actions.createApplicationSuccess({
        application,
      })
    );
  } catch (error) {
    yield put(
      applicationsSlice.actions.createApplicationFailure({
        error: new Error(error as string).message,
      })
    );
  }
}

export function* updateApplicationSaga(
  action: ReturnType<typeof applicationsSlice.actions.updateApplication>
): SagaIterator {
  try {
    const application = yield call(updateApplication, action.payload);
    yield put(
      applicationsSlice.actions.updateApplicationSuccess({
        application,
      })
    );
  } catch (error) {
    yield put(
      applicationsSlice.actions.updateApplicationFailure({
        error: new Error(error as string).message,
      })
    );
  }
}

// Watchers
function* watchApplication() {
  yield takeLatest(
    applicationsSlice.actions.getApplications.type,
    getApplicationsSaga
  );
  yield takeLatest(
    applicationsSlice.actions.createApplication.type,
    createApplicationSaga
  );
  yield takeLatest(
    applicationsSlice.actions.updateApplication.type,
    updateApplicationSaga
  );
}

/**
 * Application Sagas
 */
function* applicationsSaga() {
  yield all([watchApplication()]);
}

export default applicationsSaga;
