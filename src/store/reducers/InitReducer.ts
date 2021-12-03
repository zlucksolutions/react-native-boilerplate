import * as types from '../types/initType';
export interface initAppStateIF {
  name: string;
}

const initialState: types.InitAppState = {
  name: '',
};

const initReducer = (state = initialState, action: types.InitAppActions) => {
  switch (action.type) {
    case types.INIT_APP:
    default:
      return state;
  }
};

export default initReducer;
