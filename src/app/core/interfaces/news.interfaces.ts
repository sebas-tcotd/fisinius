/**
 * Interfaz que contiene un arreglo de titulares.
 */
export interface News {
  /**
   * Lista de noticias.
   */
  news: NewsElement[];
}

/**
 * Metadata de un titular.
 */
export interface NewsElement {
  /**
   * Resumen del titular.
   */
  abstract: string;

  /**
   * Tipo de titular.
   */
  category: string;

  /**
   * URL del la imagen del titular.
   */
  image_url: string;

  /**
   * ID de la titular.
   */
  news_id: string;

  /**
   * Título del titular.
   */
  title: string;
}
