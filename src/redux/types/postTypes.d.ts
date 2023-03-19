export interface Post {
  id: string;
  userId: string;
  content: string;
  image?: string;
  likes: string[];
  comments: Comment[];
}

export interface Comment extends Post {
  rootPostId: string;
  replyTo?: string;
}
