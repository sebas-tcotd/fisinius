import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/interfaces/news.interfaces';
import { NewsService } from 'src/app/core/services/news.service';

/**
 * Componente que contiene las noticias de política.
 */
@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: [],
})
export class PoliticsComponent implements OnInit {
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
      .getNewsByCategory(from, quantity, 'politica')
      .subscribe((res) => (this.news = res));
  }
}
