export type Blog = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  thumbnail?: {
    url: string;
    width: number;
    height: number;
  };
};