import { configureStore } from "@reduxjs/toolkit";
import rootSaga, { sagaMiddleware } from "./saga";
import { socketReducer } from "./slices/socket.slice";

const logger = (store) => (next) => (action) => {
  console.log("[ACTIONS]", action);
  let result = next(action);
  return result;
};

const rootReducer = {
  socket: socketReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
