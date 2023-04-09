import { type UserInfo } from 'firebase/auth'
import { type User } from '../types/userTypes'

export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_AUTH = 'SET_AUTH'
export const LOAD_USER_START = 'LOAD_USER_START'
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS'
export const LOAD_USER_ERROR = 'LOAD_USER_ERROR'
export const LOAD_USER_INTERRUPT = 'LOAD_USER_INTERRUPT'
export const LOGOUT_USER = 'LOGOUT_USER'

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER
  payload: User
}

interface SetAuthAction {
  type: typeof SET_AUTH
  payload: UserInfo
}

interface LoadUserStartAction {
  type: typeof LOAD_USER_START
}

interface LoadUserSuccessAction {
  type: typeof LOAD_USER_SUCCESS
  payload: User
}

interface LoadUserErrorAction {
  type: typeof LOAD_USER_ERROR
  payload: string
}

interface LoadUserInterruptAction {
  type: typeof LOAD_USER_INTERRUPT
}

interface LogoutUserAction {
  type: typeof LOGOUT_USER
}

export type UserActionTypes =
  | SetCurrentUserAction // Used only when you register an user, else use load.
  | SetAuthAction
  | LoadUserStartAction
  | LoadUserSuccessAction
  | LoadUserErrorAction
  | LoadUserInterruptAction
  | LogoutUserAction
