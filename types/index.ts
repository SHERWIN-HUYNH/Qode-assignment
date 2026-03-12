// Database models matching Prisma schema
export interface Image {
  id: string;
  cloudinaryId: string;
  cloudinaryUrl: string;
  createdAt: Date | string;
}

export interface Comment {
  id: string;
  imageId: string;
  content: string;
  createdAt: Date | string;
}

// API response type
export interface ImageWithComments extends Image {
  comments: Comment[];
}

// UI display type (for PhotoCard, page.tsx)
export interface Photo {
  id: string;
  imageUrl: string;
  caption: string; // First comment content
  commentsCount: number;
  createdAt: Date | string;
}
