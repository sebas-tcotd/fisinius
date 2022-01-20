/**
 * La interfaz que contiene los datos de la noticia.
 */
export interface Article {
  /**
   * Contiene los datos de una noticia.
   */
  news: ArticleElement;
}

/**
 * Metadata de una noticia singular.
 */
export interface ArticleElement {
  /**
   * Resumen de la noticia.
   */
  abstract: string;

  /**
   * Nombre(s) del (o los) autor(es).
   */
  authors_names: string[];

  /**
   * Cuerpo de la noticia.
   */
  body: string;

  /**
   * Tipo de noticia.
   */
  category: string;

  /**
   * Fecha de creación de la noticia.
   */
  date: string;

  /**
   * URL de la imagen de la noticia.
   */
  image_url: string;

  /**
   * ID de la noticia.
   */
  news_id: string;

  /**
   * URL de la noticia original.
   */
  source: string;

  /**
   * Título de la noticia.
   */
  title: string;

  /**
   * @deprecated
   * Identificador URI de la noticia.
   */
  uri: string;
}
