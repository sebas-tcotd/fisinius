import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../interfaces/article.interface';
import { News } from '../interfaces/news.interfaces';

/**
 * Servicio que otorga conexiones con la API de Fisiniús.
 */
@Injectable({
  providedIn: 'root',
})
export class NewsService {
  /**
   * URL base de la API de Fisiniús.
   */
  url: string = environment.newsUrlBase;

  constructor(private http: HttpClient, private router: Router) {}

  /** @ignore */
  private searchKeywordSource = new Subject<any>();

  /**
   * Observable que emite el valor de la palabra que se utiliza al momento de buscar.
   */
  searchKeyword$: Observable<News> = this.searchKeywordSource.asObservable();

  /** @ignore */
  private newsIdSource = new Subject<string>();

  /**
   *  Observable que emite el ID de una noticia singular.
   */
  newsId$: Observable<string> = this.newsIdSource.asObservable();

  /**
   * Recibe todas las noticias habidas en la DB.
   * @param from Parámetro de inicio
   * @param quantity Cantidad de noticias por recibir
   * @param category Categoría de la noticia
   * @returns Un observable del tipo News
   */
  getAllNews(
    from: number,
    quantity: number,
    category: string = ''
  ): Observable<News> {
    const params: HttpParams = new HttpParams()
      .set('from', from)
      .set('limit', quantity)
      .set('category', category);

    return this.http.get<News>(`${this.url}/news`, { params });
  }

  /**
   * Recibe una noticia en base a su ID.
   * @param id El id de la noticia
   * @returns Un observable del tipo Article.
   */
  getNewsById(id: string): Observable<Article> {
    const params: HttpParams = new HttpParams().set('news_id', id);

    return this.http.get<Article>(`${this.url}/article`, { params });
  }

  /**
   * Recibe las noticias por una categoría en específico.
   * @param from ¿Desde qué número de noticia desea iniciar la recolección de noticias?
   * @param quantity La cantidad de noticias para consultar.
   * @param category El tipo de noticias que se quiere recuperar.
   * @returns Un observable del tipo News
   */
  getNewsByCategory(
    from: number,
    quantity: number,
    category: string
  ): Observable<News> {
    const params = new HttpParams()
      .set('from', from)
      .set('limit', quantity)
      .set('category', category);

    return this.http.get<News>(`${this.url}/news`, { params });
  }

  /**
   * Recibe las noticias en base a una palabra clave.
   * @param newsWord La palabra que se quiere buscar.
   * @returns Un observable del tipo Object.
   */
  searchNews(newsWord: string): Observable<Object> {
    const params = new HttpParams().set('news_word', newsWord);

    return this.http
      .get(`${this.url}/news/search`, { params })
      .pipe(tap((news) => this.searchKeywordSource.next(news)));
  }

  /**
   * Establece el ID de una noticia para su uso en otras partes de la aplicación.
   * @param id El ID de la noticia.
   */
  setNewsId(id: string): void {
    this.newsIdSource.next(id);
  }

  /**
   * Obtiene la URL completa de una noticia.
   * @returns Un observable que bien puede emitir un string o nada en su defecto.
   */
  getNewsFullUrl(): Observable<string | undefined> {
    return this.router.events.pipe(
      filter((ev) => ev instanceof NavigationEnd),
      map((ev) => {
        if (ev instanceof NavigationEnd) return ev.url;
        return;
      })
    );
  }
}
