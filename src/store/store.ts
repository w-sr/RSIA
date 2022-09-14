import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const persistConfig = {
  key: "root",
  storage,
};

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
const middlewares = [sagaMiddleware];

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
    ...middlewares,
    logger,
  ],
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
