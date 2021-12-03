import * as types from '../types/detailsType';

export interface detailsStateIF {
  user: any;
}
const initialState: types.DetailsState = {
  user: {},
};

const detailsReducer = (state = initialState, action: types.DetailsActions): types.DetailsState => {
  switch (action.type) {
    case types.GO_TO_DETAILS:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default detailsReducer;
