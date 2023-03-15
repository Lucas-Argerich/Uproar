export interface UserState {
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
  isRegistered: boolean;
}

export interface User {
  id: string;
  email: string;
  displayName: string;
  photoURL: string;
  username: string;
  banner: string;
  description: string;
  posts: string[];
  liked: string[];
}
