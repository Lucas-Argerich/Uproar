import { UserActionTypes } from '../actions/types';
import { UserState } from '../types/userTypes';

const initialUserState: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
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
    case 'LOGOUT_USER':
      return {
        ...state,
        currentUser: null,
        isLoading: false,
        error: null,
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
    default:
      return state;
  }
};
