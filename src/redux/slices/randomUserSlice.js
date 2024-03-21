import {createSlice} from '@reduxjs/toolkit';
const initialState = {
  users: [],
  loader: false,
};
const randomUserSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    randomUserRequest: state => {
      state.loader = true;
    },
    randomUserSuccess: (state, action) => {
      state.loader = false;
      state.users = action.payload;
    },
    randomUserFailure: state => {
      state.loader = false;
    },
  },
});
// Reducer
const randomUserReducer = randomUserSlice.reducer;

// Actions
export const {randomUserRequest, randomUserSuccess, randomUserFailure} =
  randomUserSlice.actions;

export default randomUserReducer;
