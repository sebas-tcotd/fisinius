/**
 * La interfaz que contiene los datos de la noticia.
 */
export interface Article {
  news: ArticleElement;
}

/**
 * Metadata de una noticia singular.
 */
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
