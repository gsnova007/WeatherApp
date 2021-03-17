import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleWare from "redux-saga";
import combinedReducer from './reducers';
import rootSaga from "../redux/sagas";

const sagaMiddleware = createSagaMiddleWare();
const store = createStore(combinedReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
// const store = createStore(combinedReducer);

export default store;