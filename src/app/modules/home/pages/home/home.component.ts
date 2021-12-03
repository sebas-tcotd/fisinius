import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/core/interfaces/news.interfaces';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  news: News = {
    news: [],
  };

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.receiveNews();
  }

  receiveNews() {
    const from = Math.floor(Math.random() * 396);

    this.newsService.getAllNews(from, 12).subscribe((news) => {
      this.news = news;
    });
  }
}
