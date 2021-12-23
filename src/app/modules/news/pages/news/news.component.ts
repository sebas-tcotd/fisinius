import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleElement } from 'src/app/core/interfaces/article.interface';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: [],
})
export class NewsComponent implements OnInit {
  newsID: string = '';
  article!: ArticleElement;

  constructor(
    private activeRoute: ActivatedRoute,
    private newsService: NewsService
  ) {
    this.activeRoute.params.subscribe((params: Params) => {
      this.newsID = params['id'];
    });
  }

  ngOnInit(): void {
    this.newsService
      .getNewsById(this.newsID)
      .subscribe((article) => (this.article = article.news));
  }
}
