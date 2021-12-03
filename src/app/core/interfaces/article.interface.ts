export interface Article {
  news: ArticleElement;
}

export interface ArticleElement {
  abstract: string;
  authors_names: string[];
  body: string;
  category: string;
  date: string;
  image_url: string;
  news_id: string;
  source: string;
  title: string;
  uri: string;
}
// Pronto agregar body
