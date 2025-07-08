// types/news.ts
export interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  author: string;
  source: { name: string };
}

export interface NewsState {
  data: NewsArticle[];
  loading: boolean;
  error: string | null;
  category: string;
  page: number;
  keyword: string;
}