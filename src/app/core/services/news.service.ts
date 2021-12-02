import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article } from '../interfaces/article.interface';
import { News } from '../interfaces/news.interfaces';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  url: string = environment.NEWS_URL_BASE;

  constructor(private http: HttpClient) {}

  /**
   * Recibe todas las noticias habidas en la DB
   * @param from Parámetro de inicio
   * @param quantity Cantidad de noticias por recibir
   * @param category Categoría de la noticia
   * @returns Un observable del tipo News
   */
  getAllNews(from: number, quantity: number, category: string = '') {
    const params: HttpParams = new HttpParams()
      .set('from', from)
      .set('limit', quantity)
      .set('category', category as string);

    return this.http.get<News>(`${this.url}/news`, { params });
  }

  /**
   * Recibe una noticia en base a su ID
   * @param id El id de la noticia
   * @returns Un observable del tipo
   */
  getNewsById(id: string) {
    const params: HttpParams = new HttpParams().set('news_id', id);

    return this.http.get<Article>(`${this.url}/article`, { params });
  }
}
