import { call, put, takeLatest } from 'redux-saga/effects';
import { apiService } from '../../../shared/services/api';
import {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  Post,
  fetchAlbumsStart,
  fetchAlbumsSuccess,
  fetchAlbumsFailure,
  Album,
} from './postsSlice';

function* fetchPosts() {
  try {
    const posts: Post[] = yield call(apiService.get, '/posts');
    yield put(fetchPostsSuccess(posts));
  } catch (error) {
    yield put(
      fetchPostsFailure(
        error instanceof Error ? error.message : 'Failed to fetch posts'
      )
    );
    apiService.handleApiError(error);
  }
}

function* fetchAlbums() {
  try {
    const albums: Album[] = yield call(apiService.get, '/albums');
    yield put(fetchAlbumsSuccess(albums));
  } catch (error) {
    yield put(
      fetchAlbumsFailure(
        error instanceof Error ? error.message : 'Failed to fetch albums'
      )
    );
    apiService.handleApiError(error);
  }
}

export function* watchPostsSaga() {
  yield takeLatest(fetchPostsStart.type, fetchPosts);
  yield takeLatest(fetchAlbumsStart.type, fetchAlbums);
} 