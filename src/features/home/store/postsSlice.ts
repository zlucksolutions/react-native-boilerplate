import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface Album {
  id: number;
  title: string;
  userId: number;
}

interface PostsState {
  posts: {
    items: Post[];
    loading: boolean;
    error: string | null;
  };
  albums: {
    items: Album[];
    loading: boolean;
    error: string | null;
  };
}

const initialState: PostsState = {
  posts: {
    items: [],
    loading: false,
    error: null,
  },
  albums: {
    items: [],
    loading: false,
    error: null,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // Posts actions
    fetchPostsStart(state) {
      state.posts.loading = true;
      state.posts.error = null;
    },
    fetchPostsSuccess(state, action: PayloadAction<Post[]>) {
      state.posts.items = action.payload;
      state.posts.loading = false;
      state.posts.error = null;
    },
    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.posts.loading = false;
      state.posts.error = action.payload;
    },
    // Albums actions
    fetchAlbumsStart(state) {
      state.albums.loading = true;
      state.albums.error = null;
    },
    fetchAlbumsSuccess(state, action: PayloadAction<Album[]>) {
      state.albums.items = action.payload;
      state.albums.loading = false;
      state.albums.error = null;
    },
    fetchAlbumsFailure(state, action: PayloadAction<string>) {
      state.albums.loading = false;
      state.albums.error = action.payload;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  fetchAlbumsStart,
  fetchAlbumsSuccess,
  fetchAlbumsFailure,
} = postsSlice.actions;

export default postsSlice.reducer; 