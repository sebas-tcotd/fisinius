import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/interfaces/news.interfaces';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-ciencia',
  templateUrl: './ciencia.component.html',
  styleUrls: ['./ciencia.component.scss'],
})
export class CienciaComponent implements OnInit {
  news: News = {
    news: [],
  };

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    const quantity = 10;
    const from = Math.floor(Math.random() * (100 - quantity));

    this.newsService
      .getNewsByCategory(from, quantity, 'ciencia')
      .subscribe((res) => (this.news = res));
  }
}
