import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/core/services/news.service';
import { NewsElement } from '../../../../core/interfaces/news.interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  headlines: NewsElement[] = [];
  subscription!: Subscription;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.subscription = this.newsService.searchKeyword$.subscribe(
      (res) => {
        console.log(res);
        this.headlines = res.news;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
