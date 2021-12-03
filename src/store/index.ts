import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducers from '../store/reducers';
import sagas from '../store/sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk,sagaMiddleware)),
);

// run the saga
sagaMiddleware.run(sagas);

export default store;
export type AppDispatch = typeof store.dispatch;