import { User } from '../types/userTypes';
import {
  SetCurrentUserAction,
  LogoutUserAction,
  LoadUserStartAction,
  LoadUserSuccessAction,
  LoadUserErrorAction,
  SetUserRegisteredAction,
  LoadUserInterruptAction,
} from './types';

export const setCurrentUser = (user: User): SetCurrentUserAction => ({
  //Used only when you register an user, else use load.
  type: 'SET_CURRENT_USER',
  payload: user,
});

export const logoutUser = (): LogoutUserAction => ({
  type: 'LOGOUT_USER',
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

export const setUserRegistered = (
  isRegistered: boolean
): SetUserRegisteredAction => ({
  type: 'SET_USER_REGISTERED',
  payload: isRegistered,
});
