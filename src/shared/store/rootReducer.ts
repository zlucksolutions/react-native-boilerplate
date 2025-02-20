import postsReducer from '@features/home/store/postsSlice';
import { combineReducers } from '@reduxjs/toolkit';

// Import your feature reducers here
// Example: import { authReducer } from '@features/auth/store/authSlice';

export const rootReducer = combineReducers({
  posts: postsReducer,
  // Add your reducers here
  // Example: auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>; 