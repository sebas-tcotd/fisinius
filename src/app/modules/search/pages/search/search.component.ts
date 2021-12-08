import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { NewsService } from 'src/app/core/services/news.service';
import { NewsElement } from '../../../../core/interfaces/news.interfaces';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [],
})
export class SearchComponent implements OnInit, OnDestroy {
  isPageLoading: boolean = true;
  headlines: NewsElement[] = [];
  subscription!: Subscription;

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.waitForNews();
  }

  waitForNews() {
    this.isPageLoading = true;
    this.getResultsFromSearch();

    setTimeout(() => {
      this.isPageLoading = false;
    }, 4000);
  }

  getResultsFromSearch() {
    this.subscription = this.newsService.searchKeyword$.subscribe((res) => {
      console.log(res);

      this.isPageLoading = false;
      this.headlines = res.news;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
