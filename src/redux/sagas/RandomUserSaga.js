import {Alert} from 'react-native';
import {put, call, takeLatest} from 'redux-saga/effects';
import * as RandomUserAction from '../slices/randomUserSlice';
import {getUsers} from '../services/RandomUserService';

function* getRandomUsers() {
  try {
    const res = yield call(getUsers);
    if (res) {
      yield put(RandomUserAction.randomUserSuccess(res.results));
    } else {
      yield put(RandomUserAction.randomUserFailure());
    }
  } catch (error) {
    if (error?.response?.data?.message) {
      Alert.alert(error?.response?.data?.message);
    } else {
      Alert.alert(error?.message);
    }
    yield put(RandomUserAction.randomUserFailure());
  }
}

export default function* sagas() {
  yield takeLatest(RandomUserAction.randomUserRequest.type, getRandomUsers);
}
