import { UserActionTypes } from '../actions/types';
import { UserState } from '../types/userTypes';

const initialUserState: UserState = {
  auth: null,
  currentUser: null,
  error: null,
  isLoading: false,
};

export const userReducer = (
  state = initialUserState,
  action: UserActionTypes
): UserState => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        error: null,
      };
    case 'SET_AUTH':
      return {
        ...state,
        auth: action.payload,
      };
    case 'LOAD_USER_START':
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    case 'LOAD_USER_SUCCESS':
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        error: null,
      };
    case 'LOAD_USER_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case 'LOAD_USER_INTERRUPT':
      return {
        ...state,
        isLoading: false,
      };
    case 'LOGOUT_USER':
      return {
        auth: null,
        currentUser: null,
        error: null,
        isLoading: false,
      };
    default:
      return state;
  }
};
