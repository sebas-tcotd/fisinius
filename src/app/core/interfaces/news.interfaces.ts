export interface News {
  news: NewsElement[];
}

export interface NewsElement {
  abstract: string;
  category: string;
  image_url: string;
  news_id: string;
  title: string;
}
