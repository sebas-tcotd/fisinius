import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/interfaces/news.interfaces';
import { NewsService } from 'src/app/core/services/news.service';

/**
 * Componente de la página principal.
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [],
})
export class HomeComponent implements OnInit {
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
    this.receiveNews();
  }

  /**
   * Recibe las noticias desde el servicio y las establece para mostrarlas en la plantilla HTML.
   */
  receiveNews(): void {
    const from = Math.floor(Math.random() * 396);

    this.newsService.getAllNews(from, 12).subscribe((news) => {
      this.news = news;
    });
  }
}
