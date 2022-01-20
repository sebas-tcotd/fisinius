import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleElement } from 'src/app/core/interfaces/article.interface';
import { NewsService } from 'src/app/core/services/news.service';

/**
 * Componente que contiene una noticia.
 */
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: [],
})
export class NewsComponent implements OnInit {
  /** ID de la noticia. */
  newsID: string = '';

  /** Metadata de la noticia. */
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
