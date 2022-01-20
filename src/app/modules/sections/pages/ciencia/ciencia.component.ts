import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/interfaces/news.interfaces';
import { NewsService } from 'src/app/core/services/news.service';

/**
 * Componente que contiene las noticias de ciencia.
 */
@Component({
  selector: 'app-ciencia',
  templateUrl: './ciencia.component.html',
  styleUrls: [],
})
export class CienciaComponent implements OnInit {
  /**
   * Atributo que contiene las noticias.
   */
  news: News = {
    news: [],
  };

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    const quantity = 12;
    const from = Math.floor(Math.random() * (100 - quantity));

    this.newsService
      .getNewsByCategory(from, quantity, 'ciencia')
      .subscribe((res) => (this.news = res));
  }
}
