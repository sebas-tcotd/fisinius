/**
 * Interfaz que contiene un arreglo de titulares.
 */
export interface News {
  news: NewsElement[];
}

/**
 * Metadata de un titular.
 */
export interface NewsElement {
  abstract: string;
  category: string;
  image_url: string;
  news_id: string;
  title: string;
}
