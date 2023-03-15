import { User } from '../types/userTypes';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const LOAD_USER_START = 'LOAD_USER_START';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR';
export const SET_USER_REGISTERED = 'SET_USER_REGISTERED';

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER;
  payload: User;
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER;
}

interface LoadUserStartAction {
  type: typeof LOAD_USER_START;
}

interface LoadUserSuccessAction {
  type: typeof LOAD_USER_SUCCESS;
  payload: User;
}

interface LoadUserErrorAction {
  type: typeof LOAD_USER_ERROR;
  payload: string;
}

interface SetUserRegisteredAction {
  type: typeof SET_USER_REGISTERED;
  payload: boolean;
}

export type UserActionTypes =
  | SetCurrentUserAction //Used only when you register an user, else use load.
  | LogoutUserAction
  | LoadUserStartAction
  | LoadUserSuccessAction
  | LoadUserErrorAction
  | SetUserRegisteredAction;
