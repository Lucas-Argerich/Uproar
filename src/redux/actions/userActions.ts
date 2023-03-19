import { UserInfo } from 'firebase/auth';
import { User } from '../types/userTypes';
import {
  SetCurrentUserAction,
  SetAuthAction,
  LoadUserStartAction,
  LoadUserSuccessAction,
  LoadUserErrorAction,
  LoadUserInterruptAction,
  LogoutUserAction,
} from './types';

export const setCurrentUser = (user: User): SetCurrentUserAction => ({
  //Used only when you register an user, else use load.
  type: 'SET_CURRENT_USER',
  payload: user,
});

export const setAuth = (auth: UserInfo): SetAuthAction => ({
  type: 'SET_AUTH',
  payload: auth,
});

export const loadUserStart = (): LoadUserStartAction => ({
  type: 'LOAD_USER_START',
});

export const loadUserSuccess = (user: User): LoadUserSuccessAction => ({
  type: 'LOAD_USER_SUCCESS',
  payload: user,
});

export const loadUserInterrupt = (): LoadUserInterruptAction => ({
  type: 'LOAD_USER_INTERRUPT',
});

export const loadUserError = (error: string): LoadUserErrorAction => ({
  type: 'LOAD_USER_ERROR',
  payload: error,
});

export const logoutUser = (): LogoutUserAction => ({
  type: 'LOGOUT_USER',
});
