import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/interfaces/news.interfaces';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-salud',
  templateUrl: './salud.component.html',
  styleUrls: ['./salud.component.scss'],
})
export class SaludComponent implements OnInit {
  news: News = {
    news: [],
  };

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    const quantity = 10;
    const from = Math.floor(Math.random() * (100 - quantity));

    this.newsService
      .getNewsByCategory(from, quantity, 'salud')
      .subscribe((res) => (this.news = res));
  }
}
