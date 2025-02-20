import { all, fork } from 'redux-saga/effects';
import { watchPostsSaga } from '@features/home/store/postsSaga';

// Import your feature sagas here
// Example: import { watchAuthSaga } from '@features/auth/store/authSaga';

export function* rootSaga() {
  yield all([
    // Add your sagas here
    // Example: fork(watchAuthSaga),
    fork(watchPostsSaga),
  ]);
} 