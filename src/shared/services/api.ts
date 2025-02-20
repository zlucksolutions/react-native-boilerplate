import axios, { AxiosResponse, AxiosError } from 'axios';
import { showToast } from '@shared/components/Toast';
import { store } from '@shared/store/store';
// import store from '../store/store';
// import { logOutReq } from '../store/auth/authSlice';
// import * as navigation from '../../navigation/ReduxNavigation';

// Base URL configuration
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

// Axios instance configuration
axios.defaults.headers.common = {
  'Content-Type': 'application/json; charset=utf-8',
  Accept: 'application/json; charset=utf-8',
};

const CancelToken = axios.CancelToken;
let source = CancelToken.source();

interface ApiResponse<T = any> {
  data: T;
  status: number;
  message?: string;
}

/**
 * Set header authorization
 * @param token Authorization token
 */
const setHeaderAuthorization = (token: string | null): void => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

/**
 * Cancel all request
 */
const cancelAllRequest = (): void => {
  source.cancel();
  setTimeout(() => {
    source = CancelToken.source();
  }, 1500);
};

/**
 * Handle Axios response
 * @param res HTTP Response
 * @returns Return data
 */
const getResponse = <T>(res: AxiosResponse<T>): T => {
  if (res && (res.status === 200 || res.status === 201 || res.status === 204)) {
    return res.data;
  }
  throw new Error('Some error occurred');
};

/**
 * Get request
 * @param path API url path
 * @param params Request parameters
 */
const get = <T>(path: string, params?: Record<string, any>): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      axios.get<T>(path, { params })
        .then((res) => getResponse<T>(res))
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Post request
 * @param path API url path
 * @param params Request parameters
 * @param headers Request headers
 */
const post = <T>(
  path: string,
  params?: Record<string, any>,
  headers?: Record<string, string>
): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      axios.post<T>(path, params || {}, { headers })
        .then((res) => getResponse<T>(res))
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Put request
 * @param path API url path
 * @param params Request parameters
 * @param headers Request headers
 */
const put = <T>(
  path: string,
  params?: Record<string, any>,
  headers?: Record<string, string>
): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      axios.put<T>(path, params || {}, { headers })
        .then((res) => getResponse<T>(res))
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Delete request
 * @param path API url path
 * @param params Request parameters
 * @param headers Request headers
 */
const remove = <T>(
  path: string,
  params?: Record<string, any>,
  headers?: Record<string, string>
): Promise<T> => {
  return new Promise((resolve, reject) => {
    try {
      axios.delete<T>(path, { data: params, headers })
        .then((res) => getResponse<T>(res))
        .then(resolve)
        .catch(reject);
    } catch (error) {
      reject(error);
    }
  });
};

const handleApiError = (error: AxiosError): void => {
  const { dispatch } = store;

  if (error?.response?.status === 400) {
    showToast('error', error?.response?.data?.message || 'Bad Request');
  } else if (error?.response?.status === 403 || error?.response?.status === 401) {
    // dispatch(logOutReq());
    // navigation.setRoot('Login');
    showToast('error', 'Session expired. Please login again.');
  } else {
    showToast('error', 'Network Error');
  }
};

export const apiService = {
  get,
  post,
  put,
  remove,
  setHeaderAuthorization,
  cancelAllRequest,
  handleApiError,
};
