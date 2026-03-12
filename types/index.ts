export interface Photo {
  id: string;
  imageUrl: string;
  caption: string;
  commentsCount: number;
  likesCount?: string;
}

export interface Comment {
  id: string;
  text: string;
}
