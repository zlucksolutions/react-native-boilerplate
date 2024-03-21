import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger'; // Redux Toolkit provides its own middleware
import createSagaMiddleware from 'redux-saga';
import {thunk} from 'redux-thunk';
import reducers from '../reducers/rootReducer';
import sagas from '../sagas';

// middleware that logs actions
// const loggerMiddleware = createLogger({predicate: () => __DEV__});

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    thunk,
    logger,
    sagaMiddleware,
  ],
});

// run the saga
sagaMiddleware.run(sagas);

export default store;
