import { type UserInfo } from 'firebase/auth'

export interface UserState {
  auth: UserInfo | null
  currentUser: User | null
  error: string | null
  isLoading: boolean
}

export interface User {
  id: string
  data: UserData
}

export interface UserData {
  banner: string
  createdAt: number
  description: string
  displayName: string
  email: string
  liked: string[]
  photoURL: string
  posts: string[]
  uid: string
  username: string
}
