import createSagaMiddleware from "redux-saga"
import { configureStore } from "@reduxjs/toolkit"
import rootReducer from "../reducer/rootReducer"
import rootSaga from "../saga/sagaAuth";
const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaulMiddleware) =>getDefaulMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export default store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;