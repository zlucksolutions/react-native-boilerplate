import { getUsersRequest } from './RandomUserAction';
import * as types from './types';

export const initApp = () => {
  return (dispatch) => {
    dispatch(getUsersRequest());
    dispatch({
      type: types.INIT_APP
    });
  };
};
