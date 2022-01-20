import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/interfaces/news.interfaces';
import { NewsService } from 'src/app/core/services/news.service';

/**
 * Componente que contiene noticias de deportes.
 */
@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.component.html',
  styleUrls: [],
})
export class DeporteComponent implements OnInit {
  /**
   * Atributo que contiene las noticias.
   */
  news: News = {
    news: [],
  };

  constructor(private newsService: NewsService) {}

  /**
   * @ignore
   */
  ngOnInit(): void {
    const quantity = 12;
    const from = Math.floor(Math.random() * (100 - quantity));

    this.newsService
      .getNewsByCategory(from, quantity, 'deporte')
      .subscribe((res) => (this.news = res));
  }
}
