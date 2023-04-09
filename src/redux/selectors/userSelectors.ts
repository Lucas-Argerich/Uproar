import { type RootState } from '../store'
import { type UserState } from '../types/userTypes'

export const selectAuth = (state: RootState): UserState['auth'] =>
  state.user.auth

export const selectCurrentUser = (state: RootState): UserState['currentUser'] =>
  state.user.currentUser

export const selectError = (state: RootState): UserState['error'] =>
  state.user.error

export const selectIsLoading = (state: RootState): UserState['isLoading'] =>
  state.user.isLoading
