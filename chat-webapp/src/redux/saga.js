import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import { socketWatcherSaga } from "./slices/socket.saga";

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
  yield all([socketWatcherSaga()]);
  // code after all-effect
}
