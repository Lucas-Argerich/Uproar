import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './reducers/userReducer';
import { Post } from './types/postTypes';
import { UserState } from './types/userTypes';

export interface RootState {
  user: UserState;
  posts: Post;
}

export default configureStore({ reducer: { user: userReducer } });
