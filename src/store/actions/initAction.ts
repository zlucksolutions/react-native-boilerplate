import * as types from '../types/initType';
import { InitApp } from '../../api/types/types';
export const setInitApp = (payload: InitApp): types.InitAppActions => ({
  type: types.INIT_APP,
  payload
});
